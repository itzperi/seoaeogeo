# Technical SEO Audit: csrushil.com (rebuilt codebase)

**Pages analysed:** 27 (15 static pages + 11 blog posts + 1 dynamic route
template) | **Source:** direct source-code inspection, not a crawl export |
**Date:** 2026-09-15

## Why this isn't a normal crawl-based audit

The `technical-seo-audit` skill is built to read a crawl export (Screaming
Frog, Sitebulb, Ahrefs) of a **live, deployed** site — redirect chains,
broken links, and orphan pages are things that accumulate over time as a
real site gets edited, and a crawler is the right tool to find them.

This site hasn't been deployed yet (it's still running locally, per the
README), so there's no live crawl to run. Since I have the actual source
code, I checked the equivalent issues directly against every route and
every internal link in the codebase — which is more precise than a crawl for
a site this size, but it means I'm reading intent from code rather than
observing actual runtime behaviour. Once this is deployed, a real crawl
(Screaming Frog's free tier handles up to 500 URLs) is worth running to
catch anything that breaks in production that isn't visible in source.

## Health snapshot

| Check | Result | Verdict |
|---|---|---|
| Redirect chains/loops | 0 configured (`next.config.ts` has no redirects) | Clean |
| Duplicate title tags | 0 — every page has a unique title | Clean |
| Duplicate meta descriptions | 0 — every page has a unique description | Clean |
| Broken internal links | 0 — every `href` and dynamic slug resolves to a real route | Clean |
| Orphan pages | 0 — every route is linked from nav, footer, or the services/blog index | Clean |
| Indexing blocks | 0 — `robots.txt` allows all, no `noindex` anywhere | Clean |
| Canonical tags | Present on every page via `alternates.canonical`, all self-referencing | Clean |
| Sitemap | Auto-generated, includes all 27 pages including blog posts | Clean |

**Overall verdict: mostly clean**, with the caveats below on what I
genuinely cannot check from source alone.

## Redirect chains and loops

None exist. `next.config.ts` has no `redirects()` config, and Next.js's App
Router doesn't create chains on its own the way a migrated legacy site does.
This is expected for a from-scratch rebuild — the risk appears later, if
URLs are ever renamed after launch without a redirect plan. If you rename
any URL slug in future (e.g. `/gst-litigation-chennai` to something else),
add a redirect rather than letting the old URL 404 — that's when chains
typically start appearing on real sites.

## Duplicate title tags and meta descriptions

None found. This was the **Critical** finding in the original September 2026
audit (every page shared one title/meta) — it's fully resolved. Every one of
the 15 static pages and 11 blog posts has its own `title` and `description`
in its `generateMetadata`/`metadata` export.

## Indexing and crawl blocks

- No pages are set to `noindex`.
- `robots.txt` allows all crawlers and points to the sitemap.
- No robots-blocked pages have internal links pointing at them (nothing is
  blocked in the first place).
- No canonical mismatches — every page's canonical points at itself via
  `alternates.canonical`, resolved against `metadataBase` in the root layout.

## Broken internal links

None. I cross-checked every literal `href="/..."` string against the actual
`page.tsx` files under `src/app`, and every dynamically generated link (the
services grid, footer, related-services blocks, blog index) against the
`SERVICES` and `BLOG_INDEX` data arrays that drive them. Every link
resolves to a real route.

## Orphan pages

None. Every route is reachable:
- Core pages (About, Contact, Career, Blog) — linked from the header nav and
  footer on every page.
- All 11 service pages — linked from the homepage services grid, the
  header's Services dropdown, the footer, and cross-linked via each page's
  "Related services" block.
- All 11 blog posts — linked from the `/blog` index and included in the
  sitemap.

## What this audit could not check

This is the honest limitation, and it matters more here than usual because
the site isn't deployed yet:

- **Nothing about rendered/visual behaviour** — mobile layout, whether the
  hamburger menu looks right on an actual phone, image loading, font
  loading, Core Web Vitals (LCP/CLS/INP). These need a real browser and,
  ideally, a live PageSpeed Insights run once deployed.
- **Nothing about live crawlability** — whether Googlebot can actually reach
  and render the deployed site, whether hosting adds unexpected headers or
  blocks, or whether DNS/SSL is configured correctly. This only becomes
  checkable after deployment.
- **No real traffic or Search Console data** — this audit found 0 issues
  partly because the site is new and clean, not because it has a proven
  track record. Baseline metrics don't exist yet.

## What's working well

- Every one of the original audit's Critical/High findings (duplicate
  titles, missing GST litigation page, anchor-only incorporation page,
  inconsistent phone number, missing schema) is resolved in this rebuild.
- Schema coverage is genuinely thorough for a site this size: Organization,
  BreadcrumbList, FAQPage, Service, HowTo, and Article schema are all
  correctly implemented and validated by a passing build.
- The internal linking structure (related-services blocks, service grid,
  blog cross-links) is deliberate rather than incidental — this is usually
  the first thing missing on a newly built site and it's already in place.

## Bottom line

There's nothing left to fix technically before launch — the actual
constraint now is getting this deployed and indexed, then letting Google
Search Console and PageSpeed Insights surface the things only a live site
can reveal.
