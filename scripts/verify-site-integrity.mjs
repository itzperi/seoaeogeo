// Crawl rendered HTML, including links outside the sitemap. No third-party API
// or lead submission. Usage: node scripts/verify-site-integrity.mjs BASE OUTPUT
import { writeFileSync } from "node:fs";

const base = (process.argv[2] ?? "http://localhost:3100").replace(/\/$/, "");
const site = "https://www.csrushil.com";
const output = process.argv[3];
const errors = [];
const warnings = [];
const cache = new Map();
const one = (s, re) => s.match(re)?.[1] ?? "";
const all = (s, re) => [...s.matchAll(re)].map((m) => m[1]);
const decode = (s) => s.replace(/&#(x[0-9a-f]+|\d+);/gi, (_, n) => String.fromCodePoint(n[0].toLowerCase() === "x" ? parseInt(n.slice(1), 16) : Number(n)))
  .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const text = (s) => decode(s.replace(/<script\b[^>]*>[\s\S]*?<\/script>|<style\b[^>]*>[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const attr = (s, name) => decode(one(s, new RegExp(`\\b${name}="([^"]*)"`, "i")));
const check = (pass, message) => { if (!pass) errors.push(message); };
async function get(path) {
  if (!cache.has(path)) cache.set(path, (async () => {
    const r = await fetch(base + path, { redirect: "manual", signal: AbortSignal.timeout(30000) });
    return { status: r.status, html: await r.text(), headers: Object.fromEntries(r.headers) };
  })());
  return cache.get(path);
}
async function batches(items, fn) {
  for (let i = 0; i < items.length; i += 5) await Promise.all(items.slice(i, i + 5).map(fn));
}
const sitemap = await get("/sitemap.xml");
check(sitemap.status === 200, "Sitemap must return 200");
const urls = all(sitemap.html, /<loc>([^<]+)<\/loc>/g).map(decode);
check(urls.length > 0, "Sitemap must contain URLs");
check(new Set(urls).size === urls.length, "Duplicate sitemap URLs");
check(urls.every((u) => u.startsWith(site + "/")), "Sitemap has noncanonical host");
const paths = urls.map((u) => new URL(u).pathname);
const pages = [];
await batches(paths, async (path) => {
  const { status, html, headers } = await get(path);
  check(status === 200, `${path}: HTTP ${status}`);
  if (status !== 200) return;
  const metas = html.match(/<meta\b[^>]*>/gi) ?? [];
  const canonical = attr((html.match(/<link\b[^>]*>/gi) ?? []).find((t) => attr(t, "rel") === "canonical") ?? "", "href");
  const title = text(one(html, /<title>([\s\S]*?)<\/title>/i));
  const description = attr(metas.find((t) => attr(t, "name") === "description") ?? "", "content");
  const robots = metas.filter((t) => /^(robots|googlebot)$/i.test(attr(t, "name"))).map((t) => attr(t, "content")).join(" ") + (headers["x-robots-tag"] ?? "");
  check(Boolean(title && description), `${path}: missing title or description`);
  check(canonical === site + path || (path === "/" && canonical === site), `${path}: wrong canonical ${canonical}`);
  check(!/noindex|none/i.test(robots), `${path}: sitemap URL is noindex`);
  check(all(html, /(<h1\b)/gi).length === 1, `${path}: must have one H1`);
  const visible = text(html);
  const nodes = [];
  for (const raw of all(html, /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try { const value = JSON.parse(raw); nodes.push(...(value["@graph"] ?? [value])); }
    catch { errors.push(`${path}: malformed JSON-LD`); }
  }
  const org = nodes.find((n) => n["@type"] === "AccountingService" && n.address);
  check(org?.telephone === "+917200149711" && org?.address?.postalCode === "600040", `${path}: inconsistent organization NAP`);
  check(org?.geo?.latitude === 13.0859694 && org?.geo?.longitude === 80.1997378, `${path}: inconsistent map coordinates`);
  for (const node of nodes) {
    if (node["@type"] === "FAQPage") for (const q of node.mainEntity ?? []) {
      check(visible.includes(text(q.name)) && visible.includes(text(q.acceptedAnswer.text)), `${path}: FAQ absent from visible HTML: ${q.name}`);
    }
    if (node.reviewedBy) check(Boolean(node.lastReviewed) && visible.includes("Reviewed by") && (html.match(/<time\b[^>]*>/gi) ?? []).some((t) => attr(t, "datetime") === node.lastReviewed), `${path}: review schema not backed by visible dated attribution`);
  }
  const imgs = html.match(/<img\b[^>]*>/gi) ?? [];
  check(imgs.every((i) => /\balt="/.test(i)), `${path}: image without alt attribute`);
  const main = one(html, /<main\b[^>]*>([\s\S]*?)<\/main>/i);
  const page = { path, title, description, canonical, bytes: Buffer.byteLength(html), words: text(main).split(/\s+/).length,
    reviewNodes: nodes.filter((n) => n.reviewedBy).length, faqQuestions: nodes.filter((n) => n["@type"] === "FAQPage").reduce((n, f) => n + f.mainEntity.length, 0),
    links: [], ids: all(html, /\bid="([^"]*)"/g), headings: all(main, /<h[1-6]\b[^>]*>([\s\S]*?)<\/h[1-6]>/gi).map(text) };
  for (const tag of html.match(/<a\b[^>]*>/gi) ?? []) {
    const href = attr(tag, "href");
    if (!href) continue;
    const u = new URL(href, site + path);
    if (u.origin === site || u.origin === new URL(base).origin) page.links.push({ path: u.pathname, hash: u.hash, search: u.search });
    else if (u.hostname === "csrushil.com") errors.push(`${path}: internal link uses bare domain ${href}`);
  }
  pages.push(page);
});
for (const key of ["title", "description"]) {
  const values = new Map();
  for (const p of pages) {
    if (values.has(p[key])) errors.push(`${p.path}: duplicate ${key} with ${values.get(p[key])}`);
    else values.set(p[key], p.path);
  }
}
const linked = new Set(pages.flatMap((p) => p.links.map((l) => l.path)));
await batches([...linked].filter((p) => !cache.has(p)), async (path) => { await get(path); });
for (const p of pages) for (const link of p.links) {
  const target = await get(link.path);
  check(target.status < 400, `${p.path}: broken link ${link.path} (${target.status})`);
  if (target.status >= 300 && target.status < 400 && link.path !== "/review") warnings.push(`${p.path}: redirecting link ${link.path}`);
  if (link.hash && target.status === 200) {
    const id = decodeURIComponent(link.hash.slice(1));
    check(target.html.includes(`id="${id}"`) || target.html.includes(`name="${id}"`), `${p.path}: missing fragment ${link.path}${link.hash}`);
  }
}
const reachable = new Set(["/"]);
for (let size = -1; size !== reachable.size;) {
  size = reachable.size;
  for (const p of pages) if (reachable.has(p.path)) p.links.forEach((l) => reachable.add(l.path));
}
check(pages.every((p) => reachable.has(p.path)), `Orphan pages: ${pages.filter((p) => !reachable.has(p.path)).map((p) => p.path).join(", ")}`);
const robots = await get("/robots.txt");
check(robots.status === 200 && robots.html.includes(`${site}/sitemap.xml`), "Robots must advertise canonical sitemap");
check(/User-Agent: \*\s+Allow: \/(?:\s|$)/i.test(robots.html), "Wildcard robots crawl access missing");
for (const [from, to] of [["/chartered-accountant-chennai", "/"], ["/formation-of-business-entity", "/company-registration-chennai"], ["/about-us/", "/about-us"]]) {
  const r = await get(from);
  check([301, 308].includes(r.status) && new URL(r.headers.location ?? "", base).pathname === to, `${from}: expected permanent redirect to ${to}`);
}
const missing = await get("/seo-audit-nonexistent-page");
check(missing.status === 404, "Missing pages must return HTTP 404");
// Boilerplate contributes to this overlap metric. It identifies manual-review
// candidates, not doorway pages, ranking penalties or automatic noindex rules.
const locationPages = pages.filter((p) => /^\/(?:chartered-accountant-|income-tax-consultant-(?!for-hni)|company-registration-(?!chennai|india)|gst-litigation-(?!chennai))/.test(p.path));
const shingles = new Map();
for (const p of locationPages) {
  const words = text(one((await get(p.path)).html, /<main\b[^>]*>([\s\S]*?)<\/main>/i)).toLowerCase().split(/\s+/);
  shingles.set(p.path, new Set(words.slice(0, -4).map((_, i) => words.slice(i, i + 5).join(" "))));
}
const locationReview = locationPages.map((p) => {
  const a = shingles.get(p.path);
  let nearest = null;
  let overlap = 0;
  for (const q of locationPages) if (q !== p) {
    const b = shingles.get(q.path);
    let shared = 0;
    for (const s of a) if (b.has(s)) shared++;
    const score = shared / (a.size + b.size - shared);
    if (score > overlap) { overlap = score; nearest = q.path; }
  }
  return { path: p.path, words: p.words, nearest, fiveWordJaccard: Number(overlap.toFixed(3)), decision: "Retain pending manual intent review and GSC evidence" };
}).sort((a, b) => b.fiveWordJaccard - a.fiveWordJaccard);
const report = { base, checkedAt: new Date().toISOString(), pages: pages.length, uniqueInternalTargets: linked.size, errors: [...new Set(errors)], warnings: [...new Set(warnings)],
  locationReview,
  results: pages.sort((a, b) => a.path.localeCompare(b.path)).map(({ links, ids, ...rest }) => ({ ...rest, internalLinkCount: links.length, idCount: ids.length })) };
if (output) writeFileSync(output, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify({ ...report, results: undefined, locationReview: `${locationReview.length} geographic pages assessed; details in JSON output` }, null, 2));
process.exitCode = errors.length ? 1 : 0;
