# Chennai keyword map and ranking plan: C S Rushil & Co.

**Date:** 13 Nov 2026. **Built with:** the local SEO skill set (local-keyword-research, local-landing-pages, gbp-optimization, gbp-posts, review-management, local-citations, local-link-building, bing-places, apple-business-connect, geogrid-analysis, ai-local-search, local-competitor-analysis, google-search-console-tool).
**Data limits:** no keyword-volume or rank-tracking API was connected, so there are no volumes here. The Google results snapshot is the one from 12 Nov in `RANK-1-PLAN-CA-FIRM-TAX-PVTLTD-2026-11.md`.

> Nobody can guarantee a #1 position on Google. This plan connects every relevant Chennai search to one page, and lists the off-site work that decides the map pack.

---

## 0. The most important fact: none of the recent work is live

| What | Where it is | Live? |
|---|---|---|
| The live site (www.csrushil.com) | `master` at `75fad1a` | Yes |
| "Tax consultant in Chennai" targeting and the rank-1 plan | Commit `cee6141` on `seo/bookkeeping-global-aeo` (D:\csrushil-website), never merged to master | **No** |
| The 13 Nov SEO/AEO evidence pass (review-attribution fix, broken links, homepage focus) | This folder only | **No** |
| Today's keyword changes (section 3) | This folder only | **No** |

This folder now holds all three sets of changes. **Step 1 of ranking is to get this folder into `master` and deploy it.** Then check the Vercel dashboard: earlier pushes did not deploy on their own.

---

## 1. Keyword map: every search mapped to one page

SERP types: **Map** = the Google map pack shows first, so the GBP decides most clicks. **Org** = organic results. **AI** = an AI Overview shows first.

### A. "CA firm" searches (the main city-level search)

| Searches (all variants) | Page that owns them | SERP | Status |
|---|---|---|---|
| ca firm in chennai, ca firms in chennai, chartered accountant in chennai, chartered accountants in chennai, ca in chennai, chartered accountancy firm chennai, ca office chennai, accounting firm in chennai | `/` | Map + Org | Exact-match title and H1. Homepage hero now links to the incorporation page and the tax page with exact-match anchors |
| auditor in chennai, auditor office chennai, auditors in chennai (Tamil Nadu shorthand for a CA) | `/` (new FAQ and lead wording) and `/audit-and-assurance` (title "Auditors in Chennai") | Map + Org | **Fixed today.** The homepage did not use the word "auditor" at all |
| best ca firm in chennai, top ca firms in chennai, how to choose a CA in chennai | `/blog/how-to-choose-a-chartered-accountant-in-chennai` | Org (lists, Justdial, Quora) | Page 1 #2 for the plural search (12 Nov). Under ICAI rules the firm should not call itself "best" |
| ca near me, chartered accountant near me, auditor near me, tax consultant near me | GBP + `/chartered-accountant-anna-nagar-chennai` | Map only | Ranked by the searcher's distance. Pages cannot change that; GBP prominence can (section 4) |
| ca in anna nagar, auditor in anna nagar, chartered accountant anna nagar, ca near shenoy nagar / thirumangalam / mogappair / kilpauk | `/chartered-accountant-anna-nagar-chennai` + GBP | Map | Already #1 in the map pack for "chartered accountant anna nagar" |
| ca in t nagar / adyar / velachery / omr / guindy / porur / tambaram / mylapore / nungambakkam / ambattur / kilpauk | `/chartered-accountant-<area>-chennai` (12 pages) | Org | Built. Each page says the firm serves the area from the Anna Nagar office |
| ஆடிட்டர் சென்னை, பட்டயக் கணக்காளர் சென்னை | Tamil summary box on `/` | Org | Today: "ஆடிட்டர்" (auditor) added to the homepage summary line |

### B. Private limited incorporation

| Searches | Page | SERP | Status |
|---|---|---|---|
| private limited company incorporation in chennai, private limited company registration in chennai, pvt ltd company registration chennai, company incorporation in chennai, register a private limited company in chennai, new company registration chennai, startup company registration chennai, pvt ltd registration online chennai | `/private-limited-company-incorporation-chennai` | AI + Org (national filing platforms) | **Title changed today** to "Private Limited Company Incorporation & Registration in Chennai". The page already has 3,000+ words, steps, documents, Tamil Nadu stamp duty, ROC, comparison table and FAQ/HowTo schema |
| private limited company registration cost / fees chennai, government fees, tamil nadu stamp duty on incorporation | Government-costs table on that page + `/blog/government-fees-company-registration` + `/blog/tamil-nadu-stamp-duty-company-incorporation` + `/tools/company-registration-government-fee-calculator` | AI + Org | Covered. No professional fees, which ICAI rules don't allow on the site |
| documents required for private limited company registration | `/blog/private-limited-company-registration-documents` + the page's documents table | AI | Covered |
| company registration in chennai, company registration consultants chennai, business registration chennai | `/company-registration-chennai` (hub for choosing an entity type) | Org | Covered |
| llp / opc / partnership / proprietorship / section 8 / trust registration chennai | `/llp-…`, `/opc-…`, `/partnership-firm-…`, `/proprietorship-…`, `/section-8-…`, `/trust` | Org | Covered |
| company registration in coimbatore / madurai / trichy / salem / tiruppur / hosur / … (16 TN cities) | `/company-registration-<city>` | Org | Covered; each page says the work is done online from Chennai |
| pvt ltd vs llp, spice+ process, name rejection, inc-20a, first board meeting, convert proprietorship to pvt ltd | Blog cluster (95 posts) | AI | Covered, and linked from the incorporation page |

### C. Tax, GST, audit, compliance (supporting money searches)

| Searches | Page | Status |
|---|---|---|
| tax consultant in chennai, tax consultants chennai, income tax consultant chennai, income tax advisor chennai | `/direct-tax` | **Ported today** (title, H1, intro, breadcrumbs, footer and homepage links) |
| itr filing chennai / income tax return filing chennai | `/income-tax-return-filing-chennai` | Covered |
| income tax notice reply / scrutiny / appeals chennai | `/income-tax-notice-reply-chennai`, `/income-tax-assessment-appeals-chennai` | Covered |
| income tax consultant for hni, NRI tax, NRI property sale TDS | `/income-tax-consultant-for-hni-chennai`, `/nri-tax-services*`, `/nri-property-sale-tds-chennai` | Covered |
| gst consultant in chennai, gst registration / return filing / notice reply / litigation chennai | `/goods-and-services-tax`, `/gst-registration-chennai`, `/gst-return-filing-chennai`, `/gst-notice-reply-chennai`, `/gst-litigation-chennai` | Covered |
| statutory audit / tax audit / internal audit chennai | `/statutory-audit-chennai`, `/tax-audit-chennai`, `/audit-and-assurance` | Covered |
| roc filing chennai, annual compliance private limited company, mca compliance | `/roc-compliances`, `/annual-compliance-package` | Covered |
| accounting services / bookkeeping / payroll / virtual cfo chennai | `/accounting-outsourcing-chennai`, `/bookkeeping-services-chennai`, `/payroll-services-chennai`, `/virtual-cfo-services` | Covered |
| dsc, iec, fssai, msme udyam, trademark, startup india registration chennai | The matching `-chennai` pages | Covered |

### D. Questions people ask AI assistants (the skill's "conversational" category)

- "Which CA firm in Anna Nagar can register my private limited company?"
- "Who can reply to a GST show cause notice in Chennai?"
- "How much does it cost to register a private limited company in Tamil Nadu?"
- "Is an auditor the same as a chartered accountant?" (FAQ added today)

These are answered in the first paragraph and FAQs of the pages above. AI tools name a firm when other sites agree about it: same NAP, reviews, listings and articles that mention the firm (section 4F).

### E. Remaining gaps (do not build until the firm confirms the service and GSC shows demand)

| Search | Current coverage | Decision |
|---|---|---|
| company closure / strike off company chennai | Blog post `/blog/strike-off-vs-winding-up` only | Build a service page **only if** the firm confirms it does STK-2 work |
| professional tax / shops and establishment registration chennai | Inside the payroll and proprietorship pages | Leave as is. A separate page would be thin |
| ca for startups chennai | Spread across `/private-limited-…`, `/startup-india-registration-chennai`, `/virtual-cfo-services` | Wait for GSC data. A new page risks competing with the incorporation page |

There are already 200+ pages. More pages are not what holds these searches back (Google's doorway and scaled-content policies are a risk too). Reviews, listings and links are.

---

## 2. What decides each target search

| Search | First thing Google shows | Main lever |
|---|---|---|
| ca firm in chennai | Map pack (leaders have 199 to 726 reviews; the firm has 57) | GBP prominence: reviews, categories, hours, citations |
| tax consultant in chennai | Map pack (leader has 1,200 reviews) + Justdial, IndiaMART, Quora | GBP category "Tax consultant" + directory listings |
| private limited company incorporation in chennai | AI Overview + national platforms | Links and mentions (authority) |

---

## 3. Website changes made today (this folder, not live yet)

1. `/direct-tax` targets "tax consultant in Chennai": title, H1, lead, intro, breadcrumbs, catalogue name (`services.ts`), sitewide footer link (`nav.ts`), parent breadcrumbs on the TDS and assessment pages, `llms.txt`. Ported from `cee6141`, which had not been merged.
2. Homepage `src/app/page.tsx`:
   - The lead answer names the firm as the "auditor" Tamil Nadu businesses call.
   - New FAQ, "Is an auditor the same as a chartered accountant in Chennai?" (Section 141, Companies Act). It appears on the page and in the FAQPage schema from the same data.
   - Hero links now include "Private Limited Company Registration in Chennai", "Tax Consultant in Chennai" and "Auditors in Chennai". The strongest page now passes exact-match anchors to all three targets.
3. `/private-limited-company-incorporation-chennai`: title and OG title now "Private Limited Company Incorporation & Registration in Chennai", so both spellings of the search are in the title. The H1 stays "Private Limited Company Registration in Chennai".
4. Tamil homepage summary: "ஆடிட்டர்" (auditor) added.
5. `seo/RANK-1-PLAN-CA-FIRM-TAX-PVTLTD-2026-11.md` copied in from D:.

---

## 4. Off-site plan (this decides the map pack)

### A. Google Business Profile (gbp-optimization). Week 1
- [ ] **Hours:** the profile showed "Open 24 hours" on 12 Nov. Set Mon to Sat 09:30 to 18:30 and Sunday closed, to match the website (`BUSINESS_HOURS`). Being open at search time is a ranking signal, and wrong hours undermine trust.
- [ ] **Categories:** primary *Chartered accountant*. Secondary: *Tax consultant*, *Accounting firm*, *Auditor*, *Tax preparation service*, *Accountant*.
- [ ] **Services:** every service in `GBP-SERVICES-AND-PROFILE-2026-11-08.md`, including "Private limited company registration" and "Tax consultant".
- [ ] **Description:** start with "Chartered accountancy firm (CA firm) in Anna Nagar, Chennai". No superlatives or fees (ICAI).
- [ ] **Photos:** at least 10 real ones: signage, entrance, office and team. No stock photos.
- [ ] **Q&A:** seed hours, walk-in, online service, languages, and incorporation documents.

### B. Reviews (review-management)
- The skill's target for a 5 to 20 person firm is **10 to 20 new reviews a month, steadily**. Recent reviews count more than the total. Leaders have 199 to 1,200; the firm has 57.
- Ask after each completed piece of work (a filed return, an incorporated company, a closed notice) using the direct review link (`GBP_REVIEW_URL`).
- Never offer incentives, never filter to happy clients only, never use an in-office tablet, never post in bursts. **Have CA Rushil confirm the wording of the ask against current ICAI rules first.**
- Reply to every review within 48 hours, without client details (confidentiality).

### C. GBP posts (gbp-posts)
- One post a week. `GBP-POSTS-OCT-DEC-2026.md` already has them written: advance tax on 15 Dec, GSTR-9 on 31 Dec, ROC dates.

### D. Citations and NAP (local-citations, bing-places, apple-business-connect). Weeks 1 to 2
- [ ] **Justdial:** change the locality from "Ottagapalayam" to Anna Nagar. Justdial ranks twice on page 1 for both "CA firm" and "tax consultant".
- [ ] Bing Places (import from Google), Apple Business Connect, Sulekha, IndiaMART (ranks for "tax consultant in Chennai"), Yellow Pages India, LinkedIn company page, ICAI/CA Connect record.
- [ ] Use exactly the NAP in `src/lib/site.ts` and `LISTING-COPY.md`. Log each listing in `CITATIONS.md`.

### E. Links and mentions (local-link-building). Months 1 to 6; this is what moves the incorporation search
- Startup ecosystem: StartupTN, TiE Chennai, IIT Madras Research Park, the Anna University and SRM incubators, Chennai co-working spaces (partner or resource pages).
- Chambers: Madras Chamber (MCCI), Hindustan Chamber, the Anna Nagar traders' association.
- CA-authored articles in business media (ICAI allows articles), each linking to the relevant guide. Topics that already have data on the site: Tamil Nadu stamp duty on incorporation, ROC Chennai vs ROC Coimbatore, company name rejection reasons.
- Free tools as link bait: the government-fee calculator and the NRI property TDS calculator.
- Get included in the lists that rank: revenuebase.ai "Top CA firms in Chennai", phoenixtax.in. Submit facts only; never pay for a ranking.
- Quora: CA Rushil answers "reputed CA firms in Chennai" and "tax consultant in Chennai" threads under his own name, explaining how to choose a CA rather than promoting the firm (ICAI).

### F. AI search (ai-local-search)
- The same name, address, phone, categories and services everywhere (GBP, Bing, Apple, Justdial, LinkedIn). AI tools cross-check these sources.
- Add `sameAs` in the schema for each verified profile **only after** confirming it belongs to the firm.
- Each month, ask ChatGPT, Gemini, Perplexity and Google AI Mode the questions in 1D. Record the date, the answer and any URLs cited.

### G. Measurement (geogrid-analysis, google-search-console-tool)
- After deployment, in Search Console: resubmit the sitemap and request indexing for `/`, `/direct-tax`, `/private-limited-company-incorporation-chennai`, `/company-registration-chennai`, `/audit-and-assurance` and `/chartered-accountant-anna-nagar-chennai`. Run `npm run indexnow` for Bing.
- **Geo-grid scan** (Local Falcon or DataForSEO): a 7×7 grid, 1 km apart, centred on the office, every fortnight, for "ca firm", "chartered accountant", "auditor", "tax consultant" and "company registration". Track share of local voice. It should grow outward from Anna Nagar as reviews build.
- Weekly scorecard: review count, new reviews, grid share of local voice, GSC clicks and position for the three target searches, citations fixed, links earned, enquiries by source.

---

## 5. Realistic timeline (after deployment)

| Goal | Depends on | Estimate |
|---|---|---|
| Map pack top 3 within about 3 km of Anna Nagar for "ca firm" and "auditor" | GBP fixes (4A) + steady reviews | 1–3 months |
| Organic page 1 for "tax consultant in chennai" | Deployment + Justdial/IndiaMART/list inclusion | 3–6 months |
| Map pack top 3 across central Chennai for "ca firm in chennai" | Roughly 150–250 reviews + clean citations | 6–12 months |
| Organic top 5 for "private limited company incorporation in chennai" | Links and mentions (4E) against national platforms | 12+ months |
