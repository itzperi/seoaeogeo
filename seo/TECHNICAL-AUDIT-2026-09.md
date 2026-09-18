# Technical SEO Audit: csrushil.com — Update (2026-09-17)

## Implementation status (added 2026-09-17, post-audit)

**Correction to this audit's own Items 3, 4, and 5 (High):** these were
false positives caused by a methodology gap — the audit greped each
`page.tsx` file directly for `serviceSchema`/`localBusinessBreadcrumb`/
`faqSchema` calls and missed that 7 of the 11 service pages render through
the shared `<ServicePageTemplate>` component
(`src/components/ServicePageTemplate.tsx`), which itself calls
`serviceSchema()` directly and renders `<Breadcrumbs>` and `<FAQSection>` —
both of which call `localBusinessBreadcrumb()` and `faqSchema()`
internally. **All 11 service pages already had Service, BreadcrumbList, and
FAQPage schema before this audit ran**; nothing needed to be added for
those three items. Verified directly by reading
`src/components/ServicePageTemplate.tsx`, `src/components/Breadcrumbs.tsx`,
and `src/components/FAQSection.tsx`, and confirming all 7 "missing-schema"
pages import `ServicePageTemplate`.

Items actually fixed this session:

| # | Item | Status |
|---|---|---|
| 1 | No security headers | ✅ Fixed — `next.config.ts` now has a `headers()` function (HSTS, X-Content-Type-Options, Referrer-Policy, X-Frame-Options, Permissions-Policy) |
| 2 | Broken `/logo.png` reference | ✅ Fixed — removed the `logo`/`image` fields from `organizationSchema()` until a real logo file exists, rather than shipping a 404 |
| 3 | "7 pages missing schema" | ❌ False positive — see correction above, no fix needed |
| 4 | "BreadcrumbList unused" | ❌ False positive — see correction above, no fix needed |
| 5 | "FAQ only on homepage" | ❌ False positive — see correction above, no fix needed |
| 6 | No OG/Twitter image | ✅ Fixed — added `src/app/opengraph-image.tsx` (dynamic `next/og` image) and `twitter: { card: "summary_large_image" }` in `layout.tsx` |
| 7 | Missing `openingHoursSpecification` | ✅ Fixed — `organizationSchema()` now builds it from `BUSINESS_HOURS` |
| 8 | Keyword overlap risk | ✅ Addressed — split `gst-registration-chennai`, `company-registration-chennai`, `income-tax-return-filing-chennai`, `msme-udyam-registration-chennai` into their own pages, with the broader pages now cross-linking to them instead of competing for the same exact-match phrase |
| 9 | `sitemap.ts` always `lastModified: now` | ✅ Fixed — replaced with a manually-bumped `SITE_LAST_MODIFIED` constant |
| 10 | No `not-found.tsx` | ✅ Fixed — added, links back into service pages |
| 11 | 40px mobile nav touch target | ✅ Fixed — bumped to 44px (`h-11 w-11`) |
| 12 | No manifest/apple-touch-icon | ✅ Partially — added `src/app/manifest.ts`; a dedicated apple-touch-icon still needs a real icon asset |

---

**Supersedes/updates:** `seo/TECHNICAL-AUDIT.md` (2026-09-15). That audit is
still accurate for what it checked (duplicate titles, canonicals, broken
links, orphan pages, redirect chains) — this pass does not re-litigate those
and finds no regressions there. This audit goes deeper into structured data
coverage, response headers, and CWV-relevant source patterns that the prior
pass explicitly flagged as out of scope or asserted without a line-by-line
check.

## Method note (same constraint as the prior audit)

This is a **local, pre-deployment codebase** — there is no live URL to crawl,
run PageSpeed Insights against, or fetch response headers from. Every finding
below comes from static inspection of the actual source files in
`seoaeogeo-master/src` and `next.config.ts`, cross-referenced with file paths
and line numbers. Once deployed, re-run PSI/Lighthouse and a header check
(`securityheaders.com`) to confirm these in production — static analysis
cannot see actual TTFB, compiled CSS size, or hosting-injected headers.

## Correction to the prior audit's schema claim

The 2026-09-15 audit stated: *"Schema coverage is genuinely thorough... Organization,
BreadcrumbList, FAQPage, Service, HowTo, and Article schema are all correctly
implemented."* This is **not accurate for the current codebase** — see
Critical/High findings below. `localBusinessBreadcrumb()` exists in
`src/lib/schema.tsx:51-62` but is never called anywhere in `src/app`, and
`Service` schema is only wired up on 4 of 11 service pages.

---

## Prioritized issues

### Critical

1. **`next.config.ts` has zero security headers configured.**
   File: `next.config.ts:1-7` — the exported config is an empty object.
   No `Strict-Transport-Security`, `X-Content-Type-Options`,
   `Referrer-Policy`, `X-Frame-Options`/`frame-ancestors`, or
   `Permissions-Policy`. Missing HSTS in particular is a real risk for a
   professional-services site handling client contact-form data over what
   should be an HTTPS-only domain. Fix: add a `headers()` function to
   `next.config.ts`, e.g.:
   ```ts
   async headers() {
     return [{
       source: "/:path*",
       headers: [
         { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
         { key: "X-Content-Type-Options", value: "nosniff" },
         { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
         { key: "X-Frame-Options", value: "SAMEORIGIN" },
         { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
       ],
     }];
   }
   ```
   (HSTS should only be added once HTTPS is confirmed working in production —
   don't ship `preload` until the cert/redirect setup is verified live.)

2. **Organization/AccountingService schema references a logo image that
   doesn't exist.** `src/lib/schema.tsx:21-22` sets `logo` and `image` to
   `${SITE_URL}/logo.png`, but `public/` contains only the default Next.js
   placeholder SVGs (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`,
   `window.svg`) — no `logo.png`. This will 404 in production, which breaks
   Google's Logo rich result and Knowledge Panel eligibility, both of which
   matter directly for the "Chartered Accountant near me" / "Best CA
   nearby" local-intent keywords this site targets. Fix: add a real
   `public/logo.png` (or `.svg`, updating the schema field) before launch —
   this is a launch blocker, not a post-launch cleanup item.

### High

3. **7 of 11 service pages have no structured data at all.** Confirmed via
   direct grep of every page under `src/app`: only
   `formation-of-business-entity`, `goods-and-services-tax`,
   `gst-litigation-chennai`, and `private-limited-company-incorporation-chennai`
   call `serviceSchema()`. `audit-and-assurance/page.tsx`,
   `direct-tax/page.tsx`, `management-consultancy/page.tsx`, `rera/page.tsx`,
   `roc-compliances/page.tsx`, `trust/page.tsx`, and
   `virtual-cfo-services/page.tsx` have zero `JsonLd`/schema calls. Fix: add
   `<JsonLd data={serviceSchema({...})} />` to each, following the pattern in
   `src/app/goods-and-services-tax/page.tsx`.

4. **`localBusinessBreadcrumb()` is dead code — BreadcrumbList schema is
   implemented but never rendered.** Defined at `src/lib/schema.tsx:51-62`,
   zero call sites in `src/app`. Breadcrumb rich results are one of the more
   reliable SERP enhancements for a multi-page service site like this, and
   they reinforce topical/local structure for a site competing on
   geo-modified keywords. Fix: call `localBusinessBreadcrumb()` on every
   service and blog page (e.g. Home > Services > GST Litigation Chennai),
   matching each page's actual nav depth.

5. **FAQPage schema exists only on the homepage.** `faqSchema()` is invoked
   once, in `src/app/page.tsx:59`. None of the 11 service pages use it, even
   though FAQ content is exactly what ranks for long-tail "near me" and
   procedural queries (e.g. "how much does private limited company
   incorporation cost in Chennai" — currently only answered on the homepage,
   not on the dedicated incorporation page where a user or Google would
   expect it: `src/app/private-limited-company-incorporation-chennai/page.tsx`).
   Fix: add 3-5 page-specific FAQs with `faqSchema()` to each service page.

6. **No Open Graph or Twitter Card image anywhere in the codebase.** Checked
   every `openGraph` block (`src/app/layout.tsx:31-35`, `src/app/page.tsx:14-19`,
   plus the two geo-keyword pages) — none set `images`. No `twitter` metadata
   block exists anywhere (`grep` for `twitter:` returned nothing). Social
   shares and some SERP surfaces (Discover, link previews) will show a blank
   card. Fix: add a real `images` array to `metadata.openGraph` in
   `src/app/layout.tsx` (1200×630 OG image) and a `twitter: { card:
   "summary_large_image" }` block; per-page overrides for the two priority
   geo-keyword pages if a bespoke image is worth producing.

### Medium

7. **AccountingService/LocalBusiness schema omits `openingHoursSpecification`
   despite the data already existing.** `src/lib/site.ts:44-47` defines
   `BUSINESS_HOURS`, but `organizationSchema()` in `src/lib/schema.tsx:13-49`
   never references it. Opening hours in schema directly feed Google's local
   pack/Maps hours display, which matters for "Best CA nearby" queries. Fix:
   add an `openingHoursSpecification` array to `organizationSchema()` built
   from `BUSINESS_HOURS`.

8. **Potential keyword overlap between `formation-of-business-entity` (122
   lines) and `private-limited-company-incorporation-chennai` (257 lines).**
   Both target "company registration"/"incorporation" intent in Chennai.
   Titles are distinct enough to avoid an outright duplicate-title issue
   (already confirmed clean by the prior audit), but the thin
   `formation-of-business-entity` page risks diluting relevance for the
   priority keyword "Private Limited Company Incorporation Chennai." Fix:
   reposition `formation-of-business-entity` explicitly as the entity-type
   comparison/hub page (LLP vs OPC vs Pvt Ltd vs Partnership) with a clear
   internal link to the dedicated incorporation page for anyone who's
   already decided on Pvt Ltd, and make sure `formation-of-business-entity`
   doesn't itself target "Private Limited Company Incorporation Chennai" in
   body copy or headings.

9. **`sitemap.ts` sets `lastModified: now` for every static and service page
   on every build** (`src/app/sitemap.ts:14-26`), rather than a real
   content-modified date. This isn't wrong, but it gives Google no signal
   about actual freshness and means every deploy looks like every page
   changed. Fix: track a per-page `lastModified` (even a manually maintained
   date in `SERVICES`) rather than `new Date()` at build time. Also add
   `changeFrequency` (currently absent) — low effort, standard sitemap
   field.

10. **No custom `not-found.tsx`.** `find` across `src/app` turned up no
    `not-found.tsx`, `error.tsx`, or `loading.tsx` anywhere in the tree. The
    default Next.js 404 will render, but a branded 404 with links back into
    the service pages/nav is a small, standard fix for retaining users (and
    crawl budget) who hit a bad/old URL post-launch. Fix: add
    `src/app/not-found.tsx`.

### Low

11. **Mobile nav toggle button is 40×40px** (`src/components/MobileNav.tsx:17`,
    `h-10 w-10`), just under the commonly cited 44×44px (Apple HIG) / 48dp
    (Material) minimum touch target. Not a Lighthouse hard-fail threshold at
    this size, but easy to bump to `h-11 w-11` (44px) while auditing mobile.

12. **No `apple-touch-icon` or web manifest** — only `favicon.ico` exists
    under `src/app`. Doesn't affect search ranking, but affects how the site
    looks when added to a mobile home screen, which is a real path for
    repeat local clients. Low priority; add if there's design time before
    launch.

## What's confirmed clean (no change from prior audit)

- `src/app/robots.ts` — allows all, points to `/sitemap.xml`. Correct.
- `src/app/sitemap.ts` — includes all static, service, and blog routes;
  every slug in `SERVICES` (`src/lib/services.ts`) has a matching
  `src/app/<slug>/page.tsx`.
- Canonicals: every page (`grep -L "alternates" src/app/*/page.tsx`) has an
  `alternates.canonical` entry — none missing.
- Rendering: only one client component exists in the entire tree
  (`src/components/MobileNav.tsx`, correctly scoped to a small interactive
  menu). All SEO-critical content — headings, body copy, FAQ answers,
  service descriptions — renders in server components
  (`src/app/**/page.tsx`, all plain `async`/sync functions, no `"use
  client"`), and `blog/[slug]/page.tsx:6-8` uses `generateStaticParams` for
  full SSG on blog posts. This is a strong CWV/crawlability baseline —
  Googlebot (and any AI crawler doing a raw fetch) sees fully-rendered HTML
  with no JS execution required.
- Fonts: `next/font/google` self-hosts `Plus_Jakarta_Sans` and `Inter`
  (`src/app/layout.tsx:10-20`) — no external Google Fonts request, no
  render-blocking `<link>` tag, reducing LCP/CLS risk from web fonts.
- No `next/image` usage and no raw `<img>` tags found anywhere — because
  there are currently no content images in the site (only unused default
  Next.js placeholder SVGs in `public/`). This means no CWV image-related
  risk today, but also means when real images are added (team photos,
  office photos — genuinely useful for E-E-A-T/local trust signals), they
  must go through `next/image` with explicit `width`/`height` to avoid
  introducing CLS regressions later. Flagging as a forward-looking note, not
  a current defect.

## Bottom line

The rendering/crawlability foundation (SSR-by-default, canonicals, sitemap,
robots.txt, font strategy) is genuinely solid and matches what the prior
audit found. The gap this pass surfaces is **structured data breadth and
response-header hardening**: schema markup is real but stops at 4 of 11
service pages, a referenced logo image is missing (will 404 live), and
`next.config.ts` currently ships no security headers at all. These are all
fixable pre-launch without architectural changes — none require touching the
rendering model that's already correct.
