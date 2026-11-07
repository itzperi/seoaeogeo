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

_Pending: the competitor teardown, the ICAI position on comparison pages, backlinks and citations, the keyword map, and maps / local presence were still being researched when this file was first committed. They will be added in a follow-up commit._

Already decided: no "C S Rushil vs Kanakkupillai" or "Kanakkupillai alternatives" pages. Naming competitors in comparative advertising does not fit the ICAI rules this site follows. A neutral guide on choosing between a CA firm and an online filing platform, without naming competitors, is the ICAI-safe alternative.

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

**Conclusion:** plan sections 1.1 (template risk), 1.6 (schema) and 1.8 (rendering) are already met. On-page work is not the bottleneck. Off-site authority is: GBP, reviews, citations and the ICAI number.

**ICAI check for the owner:** the homepage, /about-us and /contact show a section headed "What do clients say about us on Google?" (Google reviews widget). Confirm with CA Rushil C S that showing third-party Google reviews is acceptable under the ICAI website guidelines, since self-published testimonials are not.

## 9. Owner to-do (in order)

1. Add the ICAI membership number and firm registration number to `src/lib/site.ts`.
2. Fix the GBP hours and categories; start review requests after each engagement.
3. Decide the AI-training policy for the robots.txt `Content-Signal` line (search=yes and ai-input=yes are safe defaults; ai-train is your choice).
4. Claim and match NAP on the directories listed in section 7.
5. Confirm with CA Rushil C S any regulatory facts flagged in section 8 before the next quarterly refresh.
