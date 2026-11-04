// Site-wide SEO / AEO / GEO audit against a running build, with a
// before-vs-after scorecard.
//
//   npm run build && npx next start -p 3100
//   node scripts/verify-seo-audit.mjs [base-url] [baseline.json]
//
// base-url defaults to http://localhost:3100. baseline.json is an optional
// earlier crawl (an array of { url, words, h2count, h2q, faq, lead, ... })
// used for the "before" column. Exits 1 if any hard check fails.
// Checks the server HTML only, which is what crawlers and AI fetchers see.

import { readFileSync, existsSync } from "node:fs";

const BASE = (process.argv[2] ?? "http://localhost:3100").replace(/\/$/, "");
const BASELINE = process.argv[3];
const SITE = "https://www.csrushil.com";

const URGENT = ["/gst-notice-reply-chennai", "/income-tax-notice-reply-chennai", "/nri-tax-services"];
const TOOLS = [
  "/tools/company-registration-government-fee-calculator",
  "/tools/nri-residential-status-calculator",
  "/tools/nri-property-sale-tds-calculator",
  "/tools/gst-appeal-deadline-pre-deposit-calculator",
  "/tools/foreign-subsidiary-compliance-calendar",
];
const CHECKLIST = [
  "/company-registration-chennai",
  "/private-limited-company-incorporation-chennai",
  "/llp-registration-chennai",
  "/opc-registration-chennai",
  "/section-8-company-registration-chennai",
  "/gst-registration-chennai",
  "/gst-return-filing-chennai",
  "/income-tax-return-filing-chennai",
];
const ACT_TABLE = [
  "/direct-tax",
  "/income-tax-return-filing-chennai",
  "/income-tax-notice-reply-chennai",
  "/nri-tax-services",
  "/form-15ca-15cb-chennai",
  "/transfer-pricing-audit",
];
const CROSS_BORDER = [
  "/india-subsidiary-for-us-companies",
  "/india-subsidiary-for-uk-companies",
  "/india-subsidiary-for-uae-companies",
  "/india-subsidiary-for-singapore-companies",
  "/company-registration-india-for-foreigners",
  "/fema-rbi-compliance",
];
const TAMIL_MUST = [
  "/",
  "/private-limited-company-incorporation-chennai",
  "/company-registration-chennai",
  "/virtual-cfo-services",
  "/gst-litigation-chennai",
  "/gst-notice-reply-chennai",
  "/income-tax-notice-reply-chennai",
  "/nri-tax-services",
];

const decode = (s) =>
  s
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
const one = (h, re) => (h.match(re) ?? [])[1];
const all = (h, re) => [...h.matchAll(re)].map((m) => m[1]);

function analyse(path, html) {
  const head = one(html, /<head>([\s\S]*?)<\/head>/i) ?? "";
  const main = one(html, /<main[^>]*>([\s\S]*?)<\/main>/i) ?? html;
  const title = decode(one(head, /<title>([\s\S]*?)<\/title>/i) ?? "");
  const desc = decode(one(head, /<meta name="description" content="([^"]*)"/i) ?? "");
  const canonical = one(head, /<link rel="canonical" href="([^"]*)"/i) ?? "";
  const h1 = all(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi).length;
  const h2s = all(main, /<h2\b[^>]*>([\s\S]*?)<\/h2>/gi).map(decode);
  const imgs = all(html, /<img\b([^>]*)>/gi);
  const ld = all(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g).map((b) => {
    try {
      return JSON.parse(b);
    } catch {
      return {};
    }
  });
  const nodes = ld.flatMap((b) => (b["@graph"] ? b["@graph"] : [b]));
  const typeSet = new Set(nodes.flatMap((n) => [].concat(n["@type"] ?? [])));
  const ldText = JSON.stringify(ld);
  return {
    path,
    title,
    desc,
    canonical,
    h1,
    h2count: h2s.length,
    h2q: h2s.filter((h) => h.includes("?")).length,
    words: decode(main).split(" ").filter(Boolean).length,
    imgsNoAlt: imgs.filter((i) => !/\balt="/.test(i)).length,
    faq: typeSet.has("FAQPage"),
    howto: typeSet.has("HowTo"),
    speakable: ldText.includes("SpeakableSpecification"),
    lead: /id="(lead-answer|direct-answer)"/.test(html),
    reviewSchema: typeSet.has("AggregateRating") || typeSet.has("Review") || /"aggregateRating"/.test(ldText),
    icaiInSchema: /"ICAI (membership|firm registration) number"/.test(ldText),
    tamil: /<section lang="ta"/.test(html),
    trustBar: html.includes('id="verify-ca"'),
    checklist: html.includes('id="ca-vs-platform"'),
    actTable: html.includes('id="act-transition"'),
    crossBorder: html.includes('id="cross-border-steps"'),
    freeOffer: /free (15|first|consultation|tool|calculator)/i.test(decode(html)),
    html,
  };
}

const results = [];
const check = (group, name, pass, detail = "") => results.push({ group, name, pass: Boolean(pass), detail });
const warn = [];

async function main() {
  const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
  const paths = all(sitemap, /<loc>([^<]+)<\/loc>/g).map((u) => u.replace(SITE, "") || "/");
  console.log(`Crawling ${paths.length} sitemap URLs from ${BASE} ...`);

  const pages = [];
  for (let i = 0; i < paths.length; i += 8) {
    const batch = await Promise.all(
      paths.slice(i, i + 8).map(async (p) => {
        const res = await fetch(BASE + p, { redirect: "manual" });
        return { p, status: res.status, html: res.status === 200 ? await res.text() : "" };
      }),
    );
    for (const b of batch) {
      if (b.status !== 200) check("Technical", `${b.p} returns 200`, false, `status ${b.status}`);
      else pages.push(analyse(b.p, b.html));
    }
  }
  check("Technical", `All ${paths.length} sitemap URLs return 200`, pages.length === paths.length, `${pages.length}/${paths.length}`);

  // Technical / on-page
  const badTitle = pages.filter((p) => p.title.length < 30 || p.title.length > 60);
  const badDesc = pages.filter((p) => p.desc.length < 120 || p.desc.length > 160);
  const dupT = pages.filter((p, i) => pages.findIndex((q) => q.title === p.title) !== i);
  const dupD = pages.filter((p, i) => pages.findIndex((q) => q.desc === p.desc) !== i);
  check("On-page", "Titles 30–60 characters", !badTitle.length, badTitle.map((p) => `${p.path} (${p.title.length})`).join(", "));
  check("On-page", "Descriptions 120–160 characters", !badDesc.length, badDesc.map((p) => `${p.path} (${p.desc.length})`).join(", "));
  check("On-page", "Unique titles", !dupT.length, dupT.map((p) => p.path).join(", "));
  check("On-page", "Unique descriptions", !dupD.length, dupD.map((p) => p.path).join(", "));
  const badH1 = pages.filter((p) => p.h1 !== 1);
  check("On-page", "Exactly one <h1> per page", !badH1.length, badH1.map((p) => `${p.path} (${p.h1})`).join(", "));
  const badCanon = pages.filter((p) => p.canonical !== SITE + (p.path === "/" ? "" : p.path) && p.canonical !== SITE + p.path);
  check("On-page", "Self-referencing canonicals", !badCanon.length, badCanon.map((p) => p.path).join(", "));
  const noAlt = pages.filter((p) => p.imgsNoAlt);
  check("On-page", "Every <img> has alt text", !noAlt.length, noAlt.map((p) => p.path).join(", "));

  // ICAI compliance
  const rev = pages.filter((p) => p.reviewSchema);
  check("ICAI", "No Review / AggregateRating schema", !rev.length, rev.map((p) => p.path).join(", "));
  const free = pages.filter((p) => p.freeOffer);
  check("ICAI", 'No "free consultation / free tool" wording', !free.length, free.map((p) => p.path).join(", "));
  const icai = pages.filter((p) => p.icaiInSchema).length;
  if (!icai) warn.push("ICAI membership and firm numbers are not set in src/lib/site.ts, so no credential appears in JSON-LD yet (by design until the firm supplies them).");
  else check("GEO", "ICAI credential in JSON-LD on every page", icai === pages.length, `${icai}/${pages.length}`);

  // Content depth
  for (const u of URGENT) {
    const p = pages.find((x) => x.path === u);
    check("Content", `${u} has 3,500+ words`, p && p.words >= 3500, p ? `${p.words} words` : "missing");
  }
  const thin = pages.filter((p) => p.words < 500);
  check("Content", "No thin pages (< 500 words)", !thin.length, thin.map((p) => `${p.path} (${p.words})`).join(", "));

  // Tools
  const hub = pages.find((p) => p.path === "/tools");
  for (const t of TOOLS) {
    const p = pages.find((x) => x.path === t);
    check("Tools", `${t} live and linked from /tools`, p && hub?.html.includes(`href="${t}"`), p ? "" : "missing");
  }

  // New components
  const missing = (list, key) => list.filter((u) => !pages.find((p) => p.path === u)?.[key]);
  let m = missing(CHECKLIST, "checklist");
  check("Trust", "CA-firm checklist on 8 registration/filing pages", !m.length, m.join(", "));
  m = missing(ACT_TABLE, "actTable");
  check("GEO", "1961 → 2025 Act table on 6 tax pages", !m.length, m.join(", "));
  m = missing(CROSS_BORDER, "crossBorder");
  check("Conversion", "Cross-border 3-step block on 6 foreign-client pages", !m.length, m.join(", "));
  m = missing(TAMIL_MUST, "tamil");
  check("AEO", "Tamil summary on home, money and urgent pages", !m.length, m.join(", "));
  const areaCity = pages.filter((p) => /^\/(chartered-accountant-|company-registration-(?!chennai|india)|gst-litigation-|income-tax-consultant-)/.test(p.path));
  const areaNoTamil = areaCity.filter((p) => !p.tamil && !/(bangalore|hyderabad|mumbai|pune|kolkata|delhi|for-hni)/.test(p.path));
  check("AEO", `Tamil summary on Chennai area and Tamil Nadu city pages (${areaCity.length - areaNoTamil.length})`, !areaNoTamil.length, areaNoTamil.map((p) => p.path).join(", "));

  // AEO ratios
  const h2 = pages.reduce((a, p) => a + p.h2count, 0);
  const h2q = pages.reduce((a, p) => a + p.h2q, 0);
  check("AEO", "Question-phrased H2s above 70% site-wide", h2q / h2 > 0.7, `${((100 * h2q) / h2).toFixed(1)}%`);
  const noLead = pages.filter((p) => !p.lead);
  check("AEO", "Lead / direct answer on every page", !noLead.length, noLead.map((p) => p.path).join(", "));
  const noSpk = pages.filter((p) => !p.speakable);
  check("AEO", "Speakable on every page", !noSpk.length, noSpk.map((p) => p.path).join(", "));

  // Payload
  const home = pages.find((p) => p.path === "/");
  const kb = Math.round(Buffer.byteLength(home.html) / 1024);
  if (kb > 150) warn.push(`Homepage HTML is ${kb} KB (target < 150 KB).`);

  // Report
  const groups = [...new Set(results.map((r) => r.group))];
  for (const g of groups) {
    console.log(`\n${g}`);
    for (const r of results.filter((x) => x.group === g)) {
      console.log(`  ${r.pass ? "PASS" : "FAIL"}  ${r.name}${r.detail ? `  —  ${r.detail.slice(0, 300)}` : ""}`);
    }
  }
  if (warn.length) {
    console.log("\nWarnings");
    for (const w of warn) console.log(`  WARN  ${w}`);
  }

  // Before vs after
  const after = {
    pages: pages.length,
    words: Math.round(pages.reduce((a, p) => a + p.words, 0) / pages.length),
    h2q: `${((100 * h2q) / h2).toFixed(0)}%`,
    lead: pages.filter((p) => p.lead).length,
    faq: pages.filter((p) => p.faq).length,
    howto: pages.filter((p) => p.howto).length,
    tamil: pages.filter((p) => p.tamil).length,
    trust: pages.filter((p) => p.trustBar).length,
    tools: TOOLS.filter((t) => pages.some((p) => p.path === t)).length,
    homeKb: kb,
  };
  let before = null;
  if (BASELINE && existsSync(BASELINE)) {
    const raw = JSON.parse(readFileSync(BASELINE, "utf8"));
    const b = Array.isArray(raw) ? raw : raw.pages ?? Object.values(raw);
    const sum = (k) => b.reduce((a, p) => a + (Number(p[k]) || 0), 0);
    const homeB = b.find((p) => (p.url ?? p.path ?? "").replace(SITE, "").replace(/\/$/, "") === "");
    before = {
      pages: b.length,
      words: Math.round(sum("words") / b.length),
      h2q: `${((100 * sum("h2q")) / sum("h2count")).toFixed(0)}%`,
      lead: b.filter((p) => p.lead).length,
      faq: b.filter((p) => p.faq).length,
      howto: b.filter((p) => [].concat(p.types ?? []).includes("HowTo")).length,
      tamil: 0,
      trust: 0,
      tools: b.filter((p) => /\/tools\//.test(p.url ?? p.path ?? "")).length,
      homeKb: homeB?.bytes ? Math.round(homeB.bytes / 1024) : "–",
    };
  }
  const label = {
    pages: "Pages in sitemap",
    words: "Average words per page",
    h2q: "Question-phrased H2s",
    lead: "Pages with a lead answer",
    faq: "Pages with FAQPage schema",
    howto: "Pages with HowTo schema",
    tamil: "Pages with a Tamil summary",
    trust: "Pages with the ICAI verification block",
    tools: "Interactive tools",
    homeKb: "Homepage HTML (KB)",
  };
  console.log("\nScorecard" + (before ? " (before = baseline crawl)" : ""));
  console.log(`  ${"Signal".padEnd(42)}${before ? "Before".padStart(10) : ""}${"After".padStart(10)}`);
  for (const k of Object.keys(label)) {
    console.log(`  ${label[k].padEnd(42)}${before ? String(before[k]).padStart(10) : ""}${String(after[k]).padStart(10)}`);
  }

  const failed = results.filter((r) => !r.pass).length;
  console.log(`\n${results.length - failed}/${results.length} checks passed${warn.length ? `, ${warn.length} warning(s)` : ""}.`);
  process.exit(failed ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
