# Chennai SEO + AEO + GEO plan (8 Nov 2026): what is already done, what is new, and what we will not do

This file checks the "C S Rushil & Co. SEO + AEO + GEO Plan for Chennai" (dated 8 Nov 2026) against the repo at commit f529b88 and the live site on 8 Nov 2026.

**Summary.** Most of the plan's on-site work is already live. The plan was written from a quick look at the site, so several items it lists as problems are already fixed. The work that remains is mostly off-site: Google Business Profile, reviews, directory citations, the ICAI membership number, and a steady posting cadence. One recommendation, publishing professional fees, conflicts with the ICAI rules this site follows, so we will not do it.

Status key: **Done** = live today · **Fixed now** = changed on branch `seo/chennai-plan-reconcile-2026-11` · **Owner** = needs the firm (facts, accounts or sign-off) · **Gap** = site work still to do · **Declined** = conflicts with ICAI rules or Google policy.

## 1. Targets (plan section 0)

The plan's targets for month 12 are 8 to 12 qualified enquiries a day across all services, and 1 to 3 a day for the best services. That is more realistic than the "30–100 leads/day" growth plan from 4 Nov (`seo/` audit, commit 3291518). **Use the 8 Nov figures for planning.** Measure them in the Supabase `leads` and `cta_clicks` tables, plus a WhatsApp enquiry log (`docs/lead-log-template.csv`).

## 2. "Problems to fix" (plan section 1)

| # | Plan says | Status | Evidence / action |
|---|---|---|---|
| 1 | Area and GST-industry pages are probably one template (doorway risk) | **Gap (measure)** | There are 12 area pages, not 18, and 8 GST-industry pages. `scripts/page-family-audit.py` exists. The live similarity scores are in the audit findings (section 8 of this file). Pages above the threshold get a rewrite or are merged into the money page. |
| 2 | No public pricing; publish itemised starting prices | **Declined** | ICAI rules for CA firm websites do not allow published professional fees, so the site removed its `StartingFees` block (`src/lib/fees-and-timing.ts`). ICAI-safe alternative already live: statutory government fees and Tamil Nadu stamp duty at `/tools/company-registration-government-fee-calculator`, plus scope and inclusions without prices on every money page. |
| 3 | Authority gap (firm founded 2024) | **Owner** | `ICAI_MEMBERSHIP_NO` and `FIRM_REGISTRATION_NO` are `null` in `src/lib/site.ts`. Once filled, they appear in the byline, the homepage facts and the Person/Organization schema automatically. This is the single most valuable E-E-A-T fix left. |
| 4 | Few reviews visible | **Owner** | GBP review link is already wired (`GBP_REVIEW_URL`). Needs a review-request habit: a WhatsApp link after each completed engagement, no incentives, no gating. |
| 5 | Content cadence unknown | **Done (keep going)** | 75 blog posts are live, each with a named CA reviewer. Keep 2 to 4 a month (section 6). |
| 6 | Schema not verified | **Done** | Money pages emit one `@graph` (`moneyPageGraph()`): Organization, ProfessionalService, Person, Service, BreadcrumbList, FAQPage, WebPage with reviewedBy and Speakable. Template pages emit Service, BreadcrumbList, FAQPage and Speakable. |
| 7 | FAQ mentions Vadapalani, which has no page | **Fixed now** | Homepage FAQ now lists Anna Nagar, T. Nagar, Nungambakkam, Guindy and OMR (all have pages) and says the only office is in Anna Nagar. About-us keeps Vadapalani in a "clients reach us from" sentence, which makes no claim about a page. |
| 8 | Confirm server-rendered HTML | **Done** | Verified with plain `curl` on the live site: H1, `#lead-answer`, question H2s, the "Reviewed by" byline and the FAQs are all in the server HTML. Unknown URLs return a real 404. |

## 3. AEO actions (plan section 6)

| Plan action | Status | Notes |
|---|---|---|
| Quick-answer block on every service page | **Done** | `PageHero lead` (`#lead-answer`) on money pages and `ServicePageTemplate intro` (`#direct-answer`) on template pages, both marked as Speakable. Any page found without one is listed in section 8. |
| Visible FAQ on every service page | **Done** | `FAQSection` on every money and template page. |
| Comparison hubs | **Mostly done** | `/blog/llp-vs-opc-vs-pvt-ltd`, `/blog/private-limited-vs-llp-chennai-startups`, `/blog/trust-vs-society-vs-section8`, `/blog/statutory-vs-tax-vs-internal-audit`, `/blog/virtual-cfo-vs-full-time-cfo-cost-comparison`. GST notice types are on `/gst-notice-reply-chennai`. NRI tax by country has one page per country. |
| Pricing page and `/pricing.md` | **Declined** | ICAI rules (see 2.2). |
| `/faq` hub | **Done** | `/faq`. |
| Server-rendered answers | **Done** | See 2.8. |

## 4. GEO actions (plan section 7)

| Plan action | Status | Notes |
|---|---|---|
| Organization schema with sameAs | **Done** | LinkedIn, Instagram and GBP (`GBP_URL`, `hasMap`). Empty slots for Facebook, Wikidata and ICAI CA Connect are in `ENTITY_PROFILES`. Fill them only once each profile exists. |
| Person schema for CA Rushil C S | **Done, owner to finish** | LinkedIn sameAs is live. Add the ICAI membership number (2.3) and the TaxGuru or ICAI profile URLs when available. |
| robots.txt: allow search bots, decide on training bots | **Fixed now / Owner** | `Claude-SearchBot` added. All named AI bots were already allowed. A `Content-Signal` line (search / ai-input / ai-train) needs the firm's decision on AI training, so it was not added. |
| Directories, YouTube, LinkedIn, Reddit, Quora | **Owner** | See the competitor and backlink findings (section 7). |
| Original data (annual GST-notice report) | **Owner** | Publish only with real, permitted, anonymised counts. Hold until there is a year of data. |
| Freshness: quarterly review | **Done (process)** | `scripts/gen-page-dates.mjs` stamps "Updated" from git history. `docs/rule-review-log.md` and the `rule-dates` workflow track due dates. |

## 5. Local / GBP (plan section 8)

All of this is owner work. Already known from the 4 Nov reconciliation: the GBP hours showed "Open 24 hours" and must be set to Monday to Saturday, 9:30 AM to 6:30 PM, to match the site. Use the primary category "Chartered accountant". Use Chennai and Tamil Nadu as service areas, not every neighbourhood.

## 6. Content calendar (plan section 10) against posts that already exist

| Plan topic | Existing URL | Status |
|---|---|---|
| What to do after a GST notice | `/blog/gst-show-cause-notice-first-48-hours`, `/blog/after-gst-show-cause-reply` | Done |
| Pvt Ltd registration cost in Chennai | `/blog/government-fees-company-registration`, `/blog/tamil-nadu-stamp-duty-company-incorporation` | Done (statutory costs only, per ICAI) |
| ASMT-10 and how to reply | Section on `/gst-notice-reply-chennai` | Gap: a standalone post is optional; the money page owns the query |
| LLP vs Pvt Ltd for Chennai founders | `/blog/private-limited-vs-llp-chennai-startups` | Done |
| Do NRIs in the UAE need to file | `/blog/nri-itr-filing`, `/nri-tax-services-uae` | Done |
| NRI property sale tax | `/blog/capital-gains-tax-property-sale`, `/nri-property-sale-tds-chennai`, TDS calculator | Done |
| DRC-01 vs DRC-01A | Section on `/gst-notice-reply-chennai` | Done (on the money page) |
| GST return filing cost | `/blog/cost-of-diy-gst-filing` | Done (no fees) |
| QRMP: should I opt in | `/tools/gst-filing-scheme-selector` is planned; QRMP covered on `/gst-return-filing-chennai` | Gap: post or tool |
| Tax audit under Section 44AB | `/blog/audit-applicability-thresholds` | Done |
| Virtual CFO for a Chennai startup | `/blog/virtual-cfo-omr-startups`, `/blog/what-virtual-cfo-reviews-monthly` | Done |
| Udyam eligibility in Tamil Nadu | `/blog/msme-udyam-registration-checklist` | Done |
| Appealing a GST order in Tamil Nadu | `/blog/gst-appellate-tribunal-gstat-explained`, `/gst-litigation-chennai` | Done |
| What is FC-GPR | `/fema-rbi-compliance` (section) | Gap: a standalone explainer post |
| OPC to Pvt Ltd conversion | `/blog/opc-to-private-limited-conversion` | Done |
| Annual GST-notice report | none | Owner (data-gated) |
| Income-tax notice types | `/blog/why-income-tax-notices-issued`, `/income-tax-notice-reply-chennai` | Done |

New content gaps from the keyword research are in section 7.

## 7. Research findings (8 Nov 2026)

Full write-ups: `D:\csr-audit-2026-11-08\competitors\COMPETITOR-ANALYSIS.md` and `BACKLINKS.md` (raw pages and scripts alongside).

### 7.1 ICAI rules (checked 8 Nov 2026)

Sources: ICAI Code of Ethics 2026, Vol I, effective 1 Apr 2026 (resource.cdn.icai.org/92475coe2026v1.pdf), and the ICAI website advisory of 14 Oct 2020 (icai.org/post/advisory-website-guidelines-of-the-institute).

| Rule | Effect on the plan / site | Action |
|---|---|---|
| Cl. 3.1.3(E): no "testimonials or endorsements"; advisory item 21: no "testimonial with client name" | The named Google-review block was live on 183 of 190 pages | **Fixed on this branch:** `SHOW_GOOGLE_REVIEWS = false`. Turn it back on only with CA Rushil C S's written confirmation |
| Advisory item 27: no "why choose us" feature; cl. 3.1.3(B): no exaggerated claims | /about-us had a "Why choose us" block with self-praising copy | **Fixed on this branch:** now "How we work with clients", which describes the process only |
| Cl. 3.1.3(C): no "disparaging references or unsubstantiated comparisons" | "CSR vs Kanakkupillai" or "alternatives" pages | **Declined.** Build a neutral "CA firm or online filing platform: how to choose" guide that names no brands |
| Cl. 3.3.7(xiii): "Fee charged cannot be given"; advisory 28 Apr 2020 covers "free of charge" too | Pricing page, `pricing.md`, "from ₹" prices | **Declined** (already the site's rule). Government and statutory fees are fine |
| Cl. 3.1.3(F): no achievements or "position held, or accreditation(s) granted by any organisation" | "Start-up Mentor" appears in bylines, meta descriptions and schema | **Owner:** confirm with CA Rushil C S whether "Start-up Mentor" (a position) may stay. FAFD is an ICAI post-qualification certificate and is likely fine |
| Advisory: no "Top Firm" wording or rankings | /career has "Why choose a boutique Chennai firm for articleship?" | **Owner:** reword if CA Rushil C S considers it comparative |

### 7.2 Competitors (live pages, 8 Nov 2026)

- **Kanakkupillai** (/company-registration-in-chennai, /private-limited-company-registration-in-chennai): the plan's figures are confirmed (₹4,372 / ₹6,022 / ₹21,614 + GST and govt fees). It has a "Reviewed by Vaishnavi B, Chartered Accountant" byline (last updated 30 Oct 2026), a structure table on the hub, the RoC Chennai address, 7 to 8 FAQs and four calculators. The plan's claim of a **Tamil interface is false**: no Tamil text or hreflang was found. Its LLP Chennai URL returns 404.
- **IndiaFilings**: Chennai company and LLP pages say "Starting from ₹2,899", have 10 FAQs and no byline, and carry Product/Offer/AggregateRating (4.5 from 12,876) schema. /chennai is a 510-word booking page for in-person advisors, with no street address.
- **B S Sridhar & Co.** (bssridhar.com) is a direct local competitor: Pace Prana, South Park Road, Anna Nagar West, 600040. Its company-registration page has about 930 words, no FAQ, byline or tables, was last modified in 2021, and still states the abolished ₹1 lakh minimum capital. It has six calculators.
- **Where CSR already leads:** question headings (18 to 32 against 0 to 7), schema depth, a CA byline with dates, government-fee tables and Tamil summaries. **Gaps:** no answer paragraph directly under the H1 on the company and LLP hub pages (the answer sits under the intro heading), and the LLP page is dated 16 Oct. On tools CSR is level: 5 calculators against Kanakkupillai's 4 and B S Sridhar's 6.

### 7.3 Backlinks and citations

- **Backlink Health Score: INSUFFICIENT DATA (0/7).** No Moz, Bing or DataForSEO data. Common Crawl (Jul to Sep 2026) puts indiafilings.com at rank 25,435 and kanakkupillai.com at 1,911,586; csrushil.com is not in the top 7.5M.
- **0 verified live backlinks.** LinkedIn and village.ai profiles block automated checks. github.com/itzperi/seoaeogeo mentions the domain in plain text, and the repo is public: consider making it private, since it holds internal plans.
- **A dead clone, csrushil.digitalvicky.com, is still indexed** with the title "Top Chartered Accountant firms in Chennai" and an old Vadapalani address. Its DNS no longer resolves, so it should drop out of the index. If it persists, ask the domain owner to remove it or file a Google outdated-content removal.
- **NAP:** not found on Sulekha, AdvisorKhoj, busy.in or IndiaMART. Justdial and RegisterKaro block automated checks. ICAI directory not checked.
- **ICAI-safe citation opportunities:** ICAI Startup mentor registration, SIRC of ICAI talks and newsletter, StartupTN, IIT Madras Incubation Cell, iTNT Hub, Startup India profile (no logo on the site, per advisory item 23), The Chennai Angels, Madras Chamber of Commerce, SICCI, TiE Chennai, TaxGuru and CAclubindia author profiles, Bing Places, Apple Business Connect, and a free Justdial listing. **Avoid** "Top CA firms" listicles, paid upgrades and empanelment claims on the site (advisory item 25).

### 7.4 Keywords and maps

_Pending: the keyword and maps research was still running when this was written._

## 8. Live-site audit findings (8 Nov 2026)

Crawl of every URL in the live sitemap on 8 Nov 2026 (190 pages; raw data in `D:\csr-audit-2026-11-08\pages.csv`):

| Check | Result |
|---|---|
| HTTP status | 190 / 190 return 200; unknown URLs return a real 404 |
| Quick-answer block (`#lead-answer` / `#direct-answer`) | Present on 190 / 190 |
| Byline | "Reviewed by CA Rushil C S" on service and area pages; "Written by CA Rushil C S" plus Article dates on all 64 blog posts. Hub pages and tools have none (acceptable) |
| Titles | None over 60 characters; no duplicates |
| Meta descriptions | All between 70 and 160 characters; no duplicates |
| H1 | Exactly one per page |
| Thin pages | None under 600 words of main text |
| JSON-LD | Parses on every page; FAQPage on every non-blog page except /about-us and /blog |
| Images | No images without alt text |
| Near-duplicates | Highest pair is 37% (`/chartered-accountant-tambaram-chennai` vs `/chartered-accountant-porur-chennai`). All area pages are at or below 37%, company-registration cities at or below 33%, subsidiary-country pages at or below 32%. That is well below doorway risk, so no merges or noindex are needed |
| Sitemap | 190 URLs, valid XML, HTTPS www only, no duplicates, git-based `lastmod` (varied, not uniform). `<priority>` tags are ignored by Google; they do no harm |
| Agent readiness | Content is server-rendered; llms.txt and llms-full.txt are live; robots.txt names every AI bot (Claude-SearchBot added on this branch). No `Content-Signal` line (owner decision) and no Markdown versions of pages (optional) |

PageSpeed Insights, homepage, mobile (Lighthouse 13.6.0, 8 Nov 2026): Performance 99 (LCP 1.1 s, TBT 40 ms, CLS 0), Accessibility 95, Best Practices 96, SEO 100, Agentic Browsing 2/3. Two accessibility findings were fixed in the follow-up commit: the Google-review star rating used `aria-label` on a role-less `<span>` (now `role="img"`), which also failed the Agentic Browsing "accessibility tree" audit, and the hero enquiry card jumped from H1 to H3 (now an H2 with the same look). Re-run PageSpeed after deploy to confirm 3/3.

**Conclusion:** plan sections 1.1 (template risk), 1.6 (schema) and 1.8 (rendering) are already met. On-page work is not the bottleneck. Off-site authority is: GBP, reviews, citations and the ICAI number.

**ICAI:** the Google reviews section quoted clients by name on 183 pages. That is now switched off; see 7.1.

## 9. Owner to-do (in order)

1. Add the ICAI membership number and firm registration number to `src/lib/site.ts`.
2. Fix the GBP hours and categories; start review requests after each engagement.
3. Decide the AI-training policy for the robots.txt `Content-Signal` line (search=yes and ai-input=yes are safe defaults; ai-train is your choice).
4. Claim and match NAP on the directories listed in section 7.
5. CA Rushil C S to confirm the ICAI items in 7.1: reviews stay off unless the format is confirmed as permitted; whether "Start-up Mentor" may stay in bylines and schema; the /career "boutique firm" heading.
6. Consider making the GitHub repo itzperi/seoaeogeo private (it holds internal plans and drafts).
7. Confirm with CA Rushil C S any regulatory facts flagged in section 8 before the next quarterly refresh.
