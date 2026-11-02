// Verifies the money-page SEO set-up against a running build.
//
//   npm run build && npx next start -p 3100
//   node scripts/verify-csrushil-seo.mjs [base-url]     (default http://localhost:3100)
//
// Checks the server HTML only (no JavaScript runs), so anything it finds is
// in the initial payload that crawlers and AI fetchers see. Exits 1 on any
// failed check.

const BASE = (process.argv[2] ?? "http://localhost:3100").replace(/\/$/, "");
const SITE = "https://www.csrushil.com";

const TARGETS = [
  { path: "/", phrase: "CA Firm in Chennai" },
  { path: "/private-limited-company-incorporation-chennai", phrase: "Private Limited Company Registration in Chennai" },
  { path: "/virtual-cfo-services", phrase: "Virtual CFO in Chennai" },
  { path: "/gst-litigation-chennai", phrase: "GST Litigation & Appeals in Chennai" },
];

// Footer and header links before the Nov 2026 change, counted from the old
// components: footer = 3 social/booking + 8 group hubs + 18 areas + 6 company
// + 3 contact + 61 "All services" links; header = logo + 61 services +
// 1 Chennai hub + 18 areas + 5 nav pills + phone + booking.
const BASELINE = { footer: 99, header: 88 };

const AI_BOTS = ["Googlebot", "OAI-SearchBot", "GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Applebot"];

const results = [];
const check = (group, name, pass, detail = "") => results.push({ group, name, pass: Boolean(pass), detail });

async function get(path, opts = {}) {
  const res = await fetch(BASE + path, { redirect: "manual", ...opts });
  return { status: res.status, text: res.status === 200 ? await res.text() : "" };
}

const decode = (s) =>
  s
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const one = (html, re) => (html.match(re) ?? [])[1];
const all = (html, re) => [...html.matchAll(re)].map((m) => m[1]);
const section = (html, tag) => one(html, new RegExp(`(<${tag}[\\s>][\\s\\S]*?</${tag}>)`, "i")) ?? "";
const anchors = (html) => all(html, /<a\b([^>]*>[\s\S]*?)<\/a>/gi).map((a) => ({ href: one(a, /href="([^"]*)"/), text: decode(a.replace(/^[^>]*>/, "")) }));

function jsonLdNodes(html) {
  const blocks = all(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g).map((b) => JSON.parse(b));
  const nodes = blocks.flatMap((b) => (b["@graph"] ? b["@graph"] : [b]));
  return { blocks, nodes };
}
const types = (n) => [].concat(n["@type"] ?? []);
const ofType = (nodes, t) => nodes.filter((n) => types(n).includes(t));

async function checkTarget({ path, phrase }) {
  const g = `Target ${path}`;
  const { status, text: html } = await get(path);
  check(g, "HTTP 200 without redirect", status === 200, `status ${status}`);
  if (status !== 200) return;

  const title = decode(one(html, /<title>([\s\S]*?)<\/title>/) ?? "");
  check(g, `title contains "${phrase}"`, title.includes(phrase), title);
  check(g, "title length 50–60", title.length >= 50 && title.length <= 60, `${title.length} chars`);

  const desc = decode(one(html, /<meta name="description" content="([^"]*)"/) ?? "");
  check(g, "meta description 120–165 chars", desc.length >= 120 && desc.length <= 165, `${desc.length} chars`);

  const canonical = one(html, /<link rel="canonical" href="([^"]*)"/);
  check(g, "self-referencing canonical", canonical === SITE + (path === "/" ? "" : path) || canonical === SITE + path, canonical);

  const h1s = all(html, /<h1[^>]*>([\s\S]*?)<\/h1>/g);
  check(g, "exactly one <h1>", h1s.length === 1, `${h1s.length}: ${decode(h1s[0] ?? "")}`);

  const lead = decode(one(html, /<p[^>]*id="lead-answer"[^>]*>([\s\S]*?)<\/p>/) ?? "");
  const words = lead ? lead.split(" ").length : 0;
  check(g, "40–55 word lead answer (#lead-answer)", words >= 40 && words <= 55, `${words} words`);

  const h2s = all(html, /<h2[^>]*>([\s\S]*?)<\/h2>/g).map(decode);
  const generic = new Set(["Frequently asked questions", "People also ask", "Related guides", "Official sources", "Related services"]);
  const content = h2s.filter((h) => !generic.has(h) && !h.startsWith("More "));
  const questions = content.filter((h) => h.endsWith("?"));
  check(g, "content <h2>s phrased as questions", questions.length === content.length, `${questions.length}/${content.length}${content.length > questions.length ? " — not: " + content.filter((h) => !h.endsWith("?")).join(" | ") : ""}`);
  check(g, "native <table> present", /<table[\s>]/.test(html), "");

  const { blocks, nodes } = jsonLdNodes(html);
  check(g, "@graph JSON-LD present", blocks.some((b) => Array.isArray(b["@graph"])), `${blocks.length} blocks`);
  const org = ofType(nodes, "AccountingService").find((n) => n["@id"] === `${SITE}/#organization` && n.address);
  check(g, "AccountingService #organization with NAP", org && org.telephone && org.address?.postalCode === "600040", org?.name ?? "");
  const person = ofType(nodes, "Person").find((n) => n["@id"] === `${SITE}/#ca-rushil`);
  check(g, "Person CA Rushil C S (#ca-rushil)", person?.name === "CA Rushil C S", person?.jobTitle ?? "");
  const service = ofType(nodes, "Service").find((n) => n.provider?.["@id"] === `${SITE}/#organization`);
  check(g, "Service with provider and OfferCatalog", service?.hasOfferCatalog, service?.serviceType ?? "");
  const webpage = ofType(nodes, "WebPage").find((n) => n.author?.["@id"] === `${SITE}/#ca-rushil` && n.reviewedBy?.["@id"] === `${SITE}/#ca-rushil`);
  check(g, "WebPage author + reviewedBy → #ca-rushil", webpage, "");
  check(g, "BreadcrumbList", ofType(nodes, "BreadcrumbList").length === 1, `${ofType(nodes, "BreadcrumbList").length} found`);

  const faqs = ofType(nodes, "FAQPage");
  check(g, "exactly one FAQPage", faqs.length === 1, `${faqs.length} found`);
  if (faqs.length) {
    const visible = new Set(all(html, /<h3[^>]*>([\s\S]*?)<\/h3>/g).map(decode));
    const qs = faqs[0].mainEntity.map((q) => q.name);
    const missing = qs.filter((q) => !visible.has(q));
    check(g, "FAQPage mirrors visible FAQs 1:1", missing.length === 0, `${qs.length} questions${missing.length ? "; not visible: " + missing.join(" | ") : ""}`);
  }
}

async function checkNav() {
  const { text: html } = await get("/virtual-cfo-services");
  const footer = anchors(section(html, "footer"));
  const header = anchors(section(html, "header"));
  const fDrop = 1 - footer.length / BASELINE.footer;
  const hDrop = 1 - header.length / BASELINE.header;
  check("Navigation", "footer links cut by ≥50%", fDrop >= 0.5, `${BASELINE.footer} → ${footer.length} (−${Math.round(fDrop * 100)}%)`);
  check("Navigation", "header links cut by ≥50%", hDrop >= 0.5, `${BASELINE.header} → ${header.length} (−${Math.round(hDrop * 100)}%)`);
  for (const t of TARGETS) {
    const hit = footer.find((a) => a.href === t.path && a.text.toLowerCase().includes(t.phrase.toLowerCase()));
    check("Navigation", `footer links ${t.path} with keyword anchor`, hit, hit?.text ?? "");
  }
}

async function checkAreasAndBlog() {
  const src = await import("node:fs").then((fs) => fs.readFileSync(new URL("../src/lib/areas.ts", import.meta.url), "utf8"));
  const areas = [...src.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);
  let ok = 0;
  const bad = [];
  for (const slug of areas) {
    const { text } = await get(`/${slug}`);
    const main = one(text, /(<main[\s\S]*<\/main>)/) ?? "";
    // Breadcrumb "Home" links to / on every page, so it does not count.
    const hrefs = new Set(anchors(main).filter((a) => a.text !== "Home").map((a) => a.href));
    const need = ["/", "/private-limited-company-incorporation-chennai", "/virtual-cfo-services", "/gst-litigation-chennai"];
    if (need.every((h) => hrefs.has(h))) ok++;
    else bad.push(slug);
  }
  check("Area pages", `all ${areas.length} link to the 4 money pages in body copy`, ok === areas.length, bad.length ? "missing on: " + bad.join(", ") : `${ok}/${areas.length}`);

  const posts = {
    "how-to-choose-a-chartered-accountant-in-chennai": "/",
    "itc-mismatch-notices": "/gst-litigation-chennai",
    "outgrown-bookkeeping-signs": "/virtual-cfo-services",
    "what-virtual-cfo-reviews-monthly": "/virtual-cfo-services",
    "gst-appellate-tribunal-gstat-explained": "/gst-litigation-chennai",
  };
  for (const [slug, href] of Object.entries(posts)) {
    const { status, text } = await get(`/blog/${slug}`);
    const box = one(text, /(<aside aria-label="Need CA assistance\?"[\s\S]*?<\/aside>)/) ?? "";
    check("Blog callouts", `/blog/${slug} → ${href}`, status === 200 && anchors(box).some((a) => a.href === href), status === 200 ? "" : `status ${status}`);
  }
}

async function checkFiles() {
  const llms = await get("/llms.txt");
  check("AI readiness", "/llms.txt served", llms.status === 200, `status ${llms.status}`);
  const urls = TARGETS.map((t) => SITE + (t.path === "/" ? "/" : t.path));
  check("AI readiness", "llms.txt lists the 4 canonical URLs", urls.every((u) => llms.text.includes(`(${u})`)), "");
  const full = await get("/llms-full.txt");
  check("AI readiness", "/llms-full.txt served", full.status === 200, `status ${full.status}`);

  const robots = await get("/robots.txt");
  const missing = AI_BOTS.filter((b) => !new RegExp(`User-Agent: ${b}\\s*\\nAllow: /`, "i").test(robots.text));
  check("AI readiness", "robots.txt allows named crawlers", missing.length === 0, missing.length ? "missing: " + missing.join(", ") : AI_BOTS.join(", "));

  const sm = await get("/sitemap.xml");
  const entries = [...sm.text.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
    loc: one(m[1], /<loc>([^<]+)<\/loc>/),
    lastmod: one(m[1], /<lastmod>([^<]+)<\/lastmod>/),
  }));
  check("Sitemap", "sitemap.xml served", sm.status === 200 && entries.length > 0, `${entries.length} URLs`);
  for (const t of TARGETS) {
    const e = entries.find((x) => x.loc === SITE + (t.path === "/" ? "/" : t.path) || x.loc === SITE + t.path);
    check("Sitemap", `${t.path} has lastmod`, e?.lastmod, e?.lastmod ?? "not in sitemap");
  }
  const bad = [];
  for (const { loc } of entries) {
    const path = loc.replace(SITE, "") || "/";
    const { status, text } = await get(path);
    const canonical = one(text, /<link rel="canonical" href="([^"]*)"/);
    const self = canonical === loc || canonical === loc.replace(/\/$/, "") || (path === "/" && canonical === SITE);
    if (status !== 200 || !self) bad.push(`${path} (${status}${status === 200 ? ", canonical " + canonical : ""})`);
  }
  check("Sitemap", "every URL is 200 and self-canonical", bad.length === 0, bad.length ? bad.slice(0, 8).join("; ") : `${entries.length}/${entries.length}`);
}

for (const t of TARGETS) await checkTarget(t);
await checkNav();
await checkAreasAndBlog();
await checkFiles();

let group = "";
for (const r of results) {
  if (r.group !== group) console.log(`\n${(group = r.group)}`);
  console.log(`  ${r.pass ? "PASS" : "FAIL"}  ${r.name}${r.detail ? `  — ${r.detail}` : ""}`);
}
const failed = results.filter((r) => !r.pass).length;
console.log(`\n${results.length - failed}/${results.length} checks passed`);
process.exit(failed ? 1 : 0);
