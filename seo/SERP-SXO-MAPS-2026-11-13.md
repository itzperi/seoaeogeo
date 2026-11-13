# C S Rushil & Co. — SERP, SXO and Maps snapshot

**Snapshot date: 13 Nov 2026 (evening IST, about 16:40 UTC).** Rankings vary by searcher location, device, personalisation and time. Treat every position below as one observation, not a stable rank.

Subject: C S Rushil & Co., www.csrushil.com, J-Block, 13th Main Rd, Anna Nagar, Chennai 600040. GBP cid 9218487927688159679.

---

## 0. Method and limitations (read first)

| Item | What happened |
|---|---|
| Google Search | The first query (`ca firm in chennai`, gl=in, hl=en, pws=0, near=Chennai) returned Google's "unusual traffic" CAPTCHA page (HTTP 429). **I did not solve or bypass it.** No Google Search SERP data was collected: no Google map pack, AI Overview, PAA, ads or Google organic list. |
| Organic and SERP layout | Collected from **Bing** (`cc=IN`, `setlang=en-IN`) instead. Bing's layout differs from Google's. Bing shows a local pack (no review counts), "AI answer" cards, ads and a related-searches rail, and rarely shows PAA. The "page type rewarded" analysis below therefore uses Bing as a proxy for Google. |
| Local results | Collected from **Google Maps** (`google.com/maps/search/<query>`, hl=en, gl=in, signed out, "limited view"). The Maps list order is a **proxy** for the Google map pack, not the pack itself. Maps ranks by map viewport and IP location. The default viewport for this connection was central Chennai (about 13.047, 80.217). |
| Maps volatility | `ca firm in chennai` gave **three different orderings** in one session (runs A, B and C below), depending on where the map was centred. |
| GBP details | The signed-out "limited view" hides sort-by-newest, Q&A, the services list and the business description. Those fields are marked "not visible", not "absent". |
| Competitor pages | Fetched with a Python script: visible word count, JSON-LD @types, `<form>` count and the word position of the first form, price strings, superlatives, testimonial phrases. Justdial blocks scripted fetches, so it was inspected in the browser. Word counts include navigation and footer text, so they are approximate. |

---

## 1. Per-query SERP tables

Legend for page type: **HP** = homepage, **SP** = service page, **City-SP** = platform city/service landing page, **Dir** = directory or listing, **List** = listicle or blog roundup, **Guide** = blog or how-to guide, **Profile** = a single business's directory profile.

### Q1. `ca firm in chennai`

**SERP layout (Bing):** local pack (3 shown, "See more results"). No ads. No AI answer card detected. PAA not captured. The related-searches rail ("Deep dive into ca firm in…") showed: *top ca firms in Chennai; ca firm in Chennai for articleship; icai approved ca firm in Chennai; icai approved ca firm in Chennai for articleship; best ca firm in Chennai; accounting firms in Chennai; best chartered accountants in Chennai; top chartered accountants in Chennai*. "Some results have been removed" notice shown.

**Bing local pack (no review counts displayed by Bing):** 1. B S Sridhar & Co., Chartered Accountants (South Park Rd). 2. GAYATHRI TAX CONSULTANT PVT LTD (AJ Block). 3. Smaya and Associates | Chartered Accountants (Anna Nagar 3rd Ave).

**Google Maps top 3:**

| Run | Viewport | #1 | #2 | #3 | C S Rushil |
|---|---|---|---|---|---|
| A | default, about 13.047, 80.217 (central) | S Kishore Kumar & Co. (Chartered Accountants): 4.8, **12** reviews | S. Madhavan & Associates: 4.9, **726** | Sanjiv Shah & Associates LLP: 4.5, **40** | **not in first 57** results |
| B | 13.063, 80.199 (west-central, near Anna Nagar) | Rits & Associates (**Sponsored**): 4.8, 40 | K.Balamurugan CA: 4.9, **35** | Praveena & Associates: 4.9, **110** | **5th organic** (6th including the ad): 4.8, 57 |
| C | same URL as B, reloaded | S Kishore Kumar & Co.: 12 | A.K. Lunawath & Associates: 5.0, 21 | Akshay Gaurav & co.: 4.8, 6 | not checked |

**Bing organic 1–10:**

| # | URL | Type |
|---|---|---|
| 1 | justdial.com/Chennai/CA/nct-10066128 | Dir |
| 2 | thinkingbridge.in/blog/top-20-ca-firms-in-chennai | List (articleship-oriented) |
| 3 | clearlevel.in/firms/ca/chennai | Dir (CA-student/articleship platform) |
| 4 | bssridhar.com | HP (CA firm) |
| 5 | caknowledgeclub.com › caauditfirms | Dir |
| 6 | vramaratnam.com | HP (CA firm) |
| 7 | rgnprice.com | HP (CA firm) |
| 8 | firmdhundo.com/ca-firms-in-chennai | Dir |
| 9 | sulekha.com/chartered-accountants/chennai | Dir |
| 10 | cainchennai.com | HP |

**csrushil.com:** not in Bing 1–10 or 11–20.

---

### Q2. `chartered accountant in chennai`

**Layout (Bing):** local pack (3). 1 ad, a job ad (catchwork.jobs, "Chartered accountant job"), which is irrelevant to the firm. No AI card detected. Related searches and PAA not captured.

**Bing local pack:** K.Balamurugan CA, Chartered Accountants in Chennai (Anna Nagar 13th Main Rd); B S Sridhar & Co.; GRANT & Co., Chartered Accountants (A Block 11th St).

**Google Maps top 3:** S. Madhavan & Associates: 4.9, **726**. CA AAKASH SINGHVI & COMPANY: 5.0, **65**. Karikalan & Co: 4.8, **106**. C S Rushil was not in the first 10 loaded.

| # | URL | Type |
|---|---|---|
| 1 | justdial.com › Chennai › CA | Dir |
| 2 | vramaratnam.com | HP (CA firm) |
| 3 | sulekha.com › chartered-accountants › chennai | Dir |
| 4 | yellowpages.goldenchennai.com › listings | Dir |
| 5 | asdr.in › index.html | HP |
| 6 | sukumarandassociates.com | HP (CA firm) |
| 7 | bssridhar.com | HP (CA firm) |
| 8 | radhakrishnans.co.in | HP |
| 9 | clearlevel.in › firms › ca › chennai | Dir |
| 10 | threebestrated.in › chartered-accountants-in-chennai | List |

**csrushil.com:** not in Bing 1–10.

---

### Q3. `private limited company incorporation in chennai`

**Layout (Bing):** 1 top ad (RegisterKaro: "Private Limited Registration | Cheapest Company registration … @ Rs 1999", with sitelinks). **AI answer card** "Private Limited Company Incorporation in Chennai", citing taxocity.com and viswanathanassociates.com. Video carousel (YouTube). No local pack. PAA was checked and not present. The "Related searches" block was not present.

**Google Maps top 3:** "PRIVATE LIMITED COMPANY REGISTRATION": 5.0, **2** reviews (keyword-only business name). Company Registration in Chennai – Chennai Filings: 4.9, **22**. MNC Filings: 4.9, **597**. C S Rushil was not in the first 10.

| # | URL | Type |
|---|---|---|
| 1 | taxocity.com/blogs/private-limited-incorporation-chennai | Guide (platform blog), "(2026)" in title |
| 2 | viswanathanassociates.com/company-registration-chennai-2025.html | SP/Guide, "2026" in title |
| 3 | chennaifilings.com › private-limited-company-registration… | City-SP (platform) |
| 4 | chennairegistration.in › company-registration-chennai | City-SP |
| 5 | velanlawassociates.in › blog | Guide, "2026" in title |
| 6 | velanlawassociates.in › blog › pvt-ltd-registration-chennai | Guide, "(2025)" in title |
| 7 | professionalutilities.com › private-limited-company… | City-SP (platform), "2026" in title |
| 8 | registerkaro.in › private-limited-company-registration-in-chennai | City-SP (platform), **"from ₹1,499" in title** |
| 9 | incorpx.io › private-limited-company-registration-in-chennai | City-SP (platform), **"₹1,999" in title** |
| 10 | makeitlegit.in › register › chennai › pvt-ltd | City-SP (platform) |

**csrushil.com:** not in Bing 1–10 or 11–20.

---

### Q4. `private limited company registration in chennai`

**Layout (Bing):** 1 ad (RegisterKaro). AI answer card ("Private Limited Company Registration in Chennai"). Single-business local card: Chennai Filings (Tambaram). Only **4** standard organic results rendered on page 1.

**Google Maps top 3:** "PRIVATE LIMITED COMPANY REGISTRATION": 5.0, **2**. Laams Tax Consultancy Private Limited: 4.9, **67**. Filing Point: 4.9, **113**. C S Rushil was not in the first 10.

| # | URL | Type |
|---|---|---|
| 1 | chennaifilings.com › private-limited-company-r… | City-SP (platform) |
| 2 | chennairegistration.in › company-registration-chennai | City-SP |
| 3 | privatelimitedcompanyregistration.in | HP (exact-match domain) |
| 4 | velanlawassociates.in › blog › pvt-ltd-registration-chennai | Guide |

**csrushil.com:** not present.

---

### Q5. `tax consultant in chennai`

**Layout (Bing):** **AI answer card listing named businesses** ("Here are some tax consultants in Chennai you can consider: Taxkey Business Solutions Pvt Ltd … TaxTe[am]…"). No local pack. No ads.

**Google Maps top 3:** Laams Tax Consultancy Private Limited: 4.9, **67**. SANGEETHA TAX CONSULTANCY SERVICES PRIVATE LIMITED: 4.9, **115**. Taxla Services Private Limited: 5.0, **1,232**. C S Rushil was not in the first 10.

| # | URL | Type |
|---|---|---|
| 1 | justdial.com › Chennai › Tax-Consultants | Dir |
| 2 | taxteam.in | HP |
| 3 | justdial.com › Chennai › Income-Tax-Consultants | Dir |
| 4 | taxwhizz.in › tax-consultant-chennai | SP |
| 5 | phoenixtax.in | HP |
| 6 | taxeasychennai.in | HP |
| 7 | dir.indiamart.com › chennai › income-tax-consultant.html | Dir |
| 8 | nnacas.in | HP |
| 9 | taxmarket.in › tax-consulting-services-in-chennai | SP |
| 10 | samitax.in | HP |

A re-check a few minutes later reordered the top 4: Justdial Tax-Consultants, then Justdial Income-Tax-Consultants, then taxteam.in, then phoenixtax.in. **csrushil.com:** not in Bing 1–10 or 11–20.

---

### Q6. `auditor in chennai`

**Layout (Bing):** AI answer card ("Best Auditors in Chennai …"). No local pack. No ads.

**Google Maps top 3:** Taxla Services Private Limited: 5.0, **1,232** (category shown: Auditor). MEHALA & ASSOCIATES: 5.0, **43**. Aravind & Associates: 5.0, **8**. C S Rushil was not in the first 10.

| # | URL | Type |
|---|---|---|
| 1 | justdial.com › Chennai › Auditors | Dir |
| 2 | sulekha.com › auditors › chennai | Dir |
| 3 | sukumarandassociates.com | HP (CA firm) |
| 4 | nammaauditor.com | HP |
| 5 | lentlo.com › category › auditors › chennai | Dir/List |
| 6 | rgaudit.com | HP |
| 7 | justdial.com › Chennai › Tax-Auditors | Dir |
| 8 | rscompany.co.in | HP (CA firm) |
| 9 | auditdsa.in | HP |
| 10 | auditdsa.in › auditor-in-chennai | SP |

**csrushil.com:** not in 1–10.

---

### Q7. `company registration in chennai`

**Layout (Bing):** 1 ad (RegisterKaro). AI answer card (steps to register). Local pack: Chennai Filings (Tambaram), Muthirai trademark registration consultancy, Chennai Registration Consultants. Only **5** standard organic results rendered.

**Google Maps top 3:** IndiaFilings Private Limited (**Sponsored**): 4.0, **2,984**. "PRIVATE LIMITED COMPANY REGISTRATION": 5.0, **2**. Laams Tax Consultancy: 4.9, **67**. C S Rushil was not in the first 10.

| # | URL | Type |
|---|---|---|
| 1 | solubilis.in › company-registration-chennai.php | City-SP |
| 2 | chennaifilings.com | HP (platform) |
| 3 | kanakkupillai.com › company-registration-in-chennai | City-SP (platform) |
| 4 | bssridhar.com › company-registration-in-chennai-a-complete-gu… | Guide (CA firm blog) |
| 5 | chennairegistration.in | HP |

**csrushil.com:** not present.

---

### Q8. `gst consultant in chennai`

**Layout (Bing):** **AI answer card listing named businesses with phone numbers** (B Perfect Services, Taxla Services, Sarnwhym Global Service Private Limited…). No local pack. No ads.

**Google Maps top 3:** Laams Tax Consultancy: 4.9, **67**. Nextgen Company Accounts GST Filing: 5.0, **38**. SANGEETHA TAX CONSULTANCY: 4.9, **115**. C S Rushil was not in the first 10.

| # | URL | Type |
|---|---|---|
| 1 | dir.indiamart.com › chennai › gst-consultant.html | Dir |
| 2 | phoenixtax.in › gst-consultant-in-chennai | SP |
| 3 | nationalfilings.co.in › chennai › gst-consultant-service | City-SP (platform) |
| 4 | vsassociateschennai.com | HP |
| 5 | justdial.com › Chennai › GST-Registration-Consultants | Dir |
| 6 | chennaigst.com | HP (exact-match domain) |
| 7 | corpbiz.io › gst-consultant-chennai | City-SP (platform), "Free 30-Min Consultation" in title |
| 8 | rkbp.in | HP |
| 9 | justdial.com › Chennai › GST-Compliance-Consultants | Dir |
| 10 | chennairegistration.in › gst-consultation-chennai | SP |

**csrushil.com:** not in 1–10.

---

### Q9. `ca in anna nagar`

**Layout (Bing):** local pack (2 shown): B S Sridhar & Co.; S Kankaria & Co (Chartered Accountants) (D Block 5th St). No AI card. No ads.

**Google Maps top 3** (viewport auto-centred on Anna Nagar, about 13.087, 80.206): Rits & Associates | Chartered Accountants in Anna Nagar (**Sponsored**): 4.8, **40**. K.Balamurugan CA: 4.9, **35**. Rits & Associates | Chartered Accountants in Anna Nagar (second listing, different address line): 4.8, **41**. Then CA JOTHILINGAM S: 4.7, 48, and V V ASSOCIATES: 4.8, 54.
**C S Rushil & Co. was 30th of 49 loaded** (no sponsored entries above it), shown as "4.8 (57) · Chartered accountant · Opens 9:30 am Sat".

| # | URL | Type |
|---|---|---|
| 1 | justdial.com › Chennai › CA-in-Anna-Nagar | Dir |
| 2 | justdial.com › Chennai › CA-in-Anna-Nagar-Block-Ai | Dir |
| 3 | caknowledgeclub.com › … › anna-nagar | Dir |
| 4 | registerkaro.in › listing › ca-consultants › chennai (R Gopal & Co) | Profile |
| 5 | nri-ca.com › ca-in-anna-nagar-chennai | SP (area page) |
| 6 | registerkaro.in › listing › … › balamurugan… | Profile |
| 7 | sulekha.com › chartered-accountants › anna-nagar-chennai | Dir |
| 8 | advisorkhoj.com › Chennai › Chartered-Accountants… | Dir |
| 9 | sulekha.com › chartered-accountants › anna-nagar-east-chennai | Dir |
| 10 | bssridhar.com | HP (CA firm) |

**csrushil.com:** not in 1–10 or 11–20, although the site has `/chartered-accountant-anna-nagar-chennai`.

> A prior-session note (12 Nov, Google Search) recorded C S Rushil at #2 in the Google *map pack* for Anna Nagar. Today's signed-out Google *Maps app* list shows #30. These are different surfaces, and today's Google Search pack could not be checked because of the CAPTCHA.

### Brand check (Bing, `C S Rushil & Co chartered accountants`)

csrushil.com ranks #1. Results 2, 8, 9 and 10 are also csrushil pages, among them `/chartered-accountant-chennai`, which prior notes say now 301s to `/`, so Bing's index is stale. Results 3–7 are third-party profiles:
- **Firm Dhundo** lists the firm as *"CA firm in Vadapalani"*.
- **Justdial** lists it as *"C S Rushil & Co in Ottagapalayam"*.
- LinkedIn (personal and company) and Instagram profiles.

Both the Firm Dhundo and Justdial locations conflict with the J-Block, Anna Nagar address. A `site:csrushil.com` query on Bing returned no rendered results, so it was inconclusive.

### Cross-query pattern

| Pattern | Evidence |
|---|---|
| Directories hold the most organic slots on the "who" queries | Q1: 5/10. Q2: 5/10. Q5: 3/10. Q6: 4/10. Q9: 9/10 (directories and profiles) |
| Platform city pages and dated guides own the incorporation/registration queries | Q3: 10/10 are platforms, guides or service pages, and 5 carry a year in the title; 2 show a price in the title |
| Bing AI cards name businesses pulled from directories | Q5 and Q8 cards list firms by name and phone, matching Justdial/IndiaMart-style data |
| B S Sridhar & Co. is the Bing entity leader | Local pack on Q1, Q2 and Q9, plus organic on Q1, Q2, Q7 and Q9, with a 665-word homepage |
| Maps rewards proximity, keyword names and categories | Keyword-only "PRIVATE LIMITED COMPANY REGISTRATION" (2 reviews) is #1 on Q3/Q4. "Tax consultant", "Auditor" and "Accounting firm" categories lead Q5–Q8 |
| csrushil.com | **Absent from every non-brand Bing top 10 checked (9/9) and from 11–20 on Q1, Q3, Q5 and Q9.** In Google Maps it appears only when the viewport sits near Anna Nagar |

---

## 2. SXO: page type rewarded vs csrushil target page

Bing is the proxy here because Google was CAPTCHA-blocked.

### Measured pages

| Page | Words (approx.) | JSON-LD types (key) | HTML forms / first form at word # | Price strings | FAQ | Trust elements seen |
|---|---|---|---|---|---|---|
| **csrushil.com/** | 3,138 | AccountingService, Organization, Person, FAQPage, Service, OfferCatalog, BreadcrumbList, Speakable | **0** forms. Above the fold: WhatsApp topic picker ("No forms · reply on WhatsApp"), "Book 15-min consultation" (Calendly), phone | none | Yes | ICAI mention, "Established 2024", links to GBP for reviews (no on-site testimonials) |
| justdial.com/Chennai/CA (Q1 #1) | about 439 visible (JS-rendered) | ItemList, LocalBusiness, AggregateRating, GeoCoordinates, BreadcrumbList | **Lead form above the fold** ("Get the List of Top CA": Name, Mobile) and per-listing Call/WhatsApp/Send Enquiry | none | No | "2626+ Listings", star ratings and counts, "Jd Verified", "Jd Trust", "Top Search", sort by Top Rated |
| thinkingbridge.in top-20 (Q1 #2) | 3,128 | BreadcrumbList only | 1 form at word about 2,920 (end) | ₹4,000–₹15,000 (articleship stipends) | Yes | Superlatives "best/leading/top", firm history ("75 years") |
| bssridhar.com (Q1 #4, top firm HP) | 665 | Organization, WebSite, SearchAction | 1 form at word about 499 | none | No | "25 years", WhatsApp channel, "top" |
| **csrushil.com/private-limited-company-incorporation-chennai** | 4,661 | adds HowTo/HowToStep, Offer | **0** (WhatsApp / 15-min consult / call buttons above the fold) | Govt fees only (₹700, ₹1,200, ₹131, ₹1,000…) | Yes | "Reviewed by CA Rushil C S · Updated 4 November 2026", ROC Chennai detail, NRI documents, LLP/OPC comparison |
| taxocity.com guide (Q3 #1) | 2,013 | FAQPage only | 0 forms (JS "Contact Us Today!" CTA) | **Professional cost ranges ₹6,000–₹15,000**, plus govt fees | Yes | "(2026)" in title, cost section H2 |
| viswanathanassociates.com (Q3 #2) | 1,661 | ProfessionalService, Organization, Offer, OfferCatalog, FAQPage, Speakable | 0 | Fee breakdown (₹1,720, ₹1,000, ₹720) | Yes | "750+ companies", "leading", "What's New in … 2026" freshness section |
| **csrushil.com/direct-tax** | 3,300 | AccountingService, HowTo, FAQPage, Person | **0** (WhatsApp / consult / call above the fold) | none (₹10,000 is the advance-tax threshold, not a fee) | Yes | "Updated 12 November 2026", CA verification section, Income-tax Act 2025 framing |
| justdial.com Tax-Consultants (Q5 #1) | JS-rendered | LocalBusiness, AggregateRating, Organization, BreadcrumbList | Enquiry form ("Get the List of Top…") | none | No | "5841+ Listings", ratings (Taxla Services 2,354 Justdial ratings), "Responds in 40 Mins" |
| taxteam.in (Q5 #2 on first pass) | 1,121 | **none** | **3 forms; first at word about 238 (in the hero)** | none | No | "What Our Client Say's about us" testimonials, "25+ years", "leading/top" |
| phoenixtax.in (Q5 #5 → #4 on re-check) | 4,048 | AccountingService, FAQPage, OpeningHours, PostalAddress | **3 forms; first at word about 188** | **₹1,499** | Yes | ISO 9001:2015 claim, testimonials (7 phrase hits), "best/top", "Tax Consultant™" |

### SXO gap: Q1 → `/` (homepage)

- **Rewarded type:** a mixed SERP. About half is **aggregators** (directory or listicle, many aimed at CA students seeking articleship) and half is **established CA-firm homepages** (B S Sridhar, V Ramaratnam, R.G.N. Price). The local pack sits on top.
- **Type match:** `/` is the right type for the firm-homepage slots. It cannot compete for the aggregator slots. Those are reached by being listed in the aggregators.
- **What competitors offer that `/` lacks:**
  - Justdial: an above-the-fold lead form, comparative ratings and a "verified" badge.
  - bssridhar: a short page with a visible form and a "25 years" tenure signal.
  - csrushil has richer schema, FAQs and 3,138 words. Content depth is not the gap; entity prominence and tenure are. The firm shows "Established 2024".
- **Intent split:** the Q1 related searches are about one-third articleship-oriented ("for articleship", "icai approved … for articleship"), and #2 and #3 organic serve CA students. csrushil has no page for that intent.
- **ICAI:** Justdial and Thinkingbridge use "Top/Best" and star ratings. As platforms they are not bound by ICAI rules. csrushil should **not** copy superlatives or show testimonials. Its current pattern (linking to the GBP for reviews) is the safe one.

### SXO gap: Q3 → `/private-limited-company-incorporation-chennai`

- **Rewarded type:** city service pages and dated guides from **platforms** (RegisterKaro, IncorpX, MakeItLegit, Professional Utilities, Chennai Filings) and blog guides. 5 of 10 have a year in the title and 2 put a price in the title.
- **Type match:** good. csrushil's page is a service page plus guide, and it is the deepest page measured (4,661 words, HowTo + FAQ + govt-fee table + ROC Chennai + NRI documents).
- **Gaps vs taxocity and viswanathanassociates:**
  1. **Title freshness and keyword:** csrushil's title is "Private Limited Company Registration in Chennai | C S Rushil". It has no "Incorporation" (the Q3 term) and no "2026"; both top-2 results have the year.
  2. **Cost answer:** both top-2 have a "Cost/Fees" H2 with totals. csrushil shows govt fees only, which is correct for ICAI. It can still give a clear "total government cost" figure and a timeline answer near the top.
  3. **Conversion:** neither top-2 uses a form above the fold either, so this is not a ranking gap. Platforms in 8–10 sell a fixed price, which a CA firm cannot match under ICAI (no fee advertising).
- **ICAI:** RegisterKaro (₹1,499), IncorpX (₹1,999), the RegisterKaro ad ("Cheapest") and Taxocity's professional-fee ranges are all platform behaviour that csrushil must not mirror. Viswanathan Associates states "750+ companies" and "leading". I did not verify whether it is an ICAI-registered firm, so I make no claim about its compliance.
- **Visibility:** csrushil was not in Bing 1–20, which suggests an indexing or authority issue on Bing for this URL (see actions).

### SXO gap: Q5 → `/direct-tax`

- **Rewarded type:** **directories** (Justdial ×2, IndiaMart) plus **small tax-consultancy homepages** whose brand *is* "tax consultant" (taxteam.in, phoenixtax.in, taxeasychennai.in, samitax.in). Exact-match service pages (taxwhizz.in/tax-consultant-chennai) also appear. Bing's AI card names firms that come from directory data.
- **Type match:** partial.
  - `/direct-tax` has a generic slug.
  - Its title targets "**Income** Tax Consultants in Chennai", not "Tax Consultant in Chennai".
  - Its H1 leads with "Direct Tax".
  - Prior notes say a dedicated tax-consultant page (commit cee6141) was never merged.
- **What competitors offer that it lacks:**
  - A **form in the hero** (taxteam at word about 238, phoenixtax at word about 188).
  - On-page testimonials and tenure claims ("25+ years").
  - A visible price (phoenixtax ₹1,499).
  - The ISO claim.

  csrushil can legitimately adopt only the form. Testimonials, superlatives and fees are off-limits for a CA firm.
- **ICAI:** taxteam and phoenixtax appear to be non-CA tax consultancies (not verified), so they are not bound. csrushil should compete on CA-verifiability (already present) and on breadth of NRI and notice coverage, not on reviews or price.

---

## 3. GBP comparison (Google Maps, signed-out view, 13 Nov 2026)

The leaders shown are the Q1 run A top 3 (S Kishore Kumar, S. Madhavan, Sanjiv Shah) plus the two Anna Nagar rivals from run B (K.Balamurugan, Praveena), because run B is the view where C S Rushil actually competes.

| Field | **C S Rushil & Co.** | S Kishore Kumar & Co. | S. Madhavan & Associates | Sanjiv Shah & Assoc. LLP | K.Balamurugan CA | Praveena & Associates |
|---|---|---|---|---|---|---|
| Primary category | Chartered accountant | Chartered accountant | Chartered accountant | Chartered accountant | Chartered accountant | **Tax consultant** |
| Name on GBP | "C S Rushil & Co." | "…(Chartered Accountants)" | "…, Chartered Accountant" (+ Tamil name) | "…LLP" | "**…CA, Chartered Accountants in Chennai**" | "Praveena & Associates" |
| Rating / reviews | 4.8 / **57** | 4.8 / 12 | 4.9 / **726** | 4.5 / 40 | 4.9 / 35 | 4.9 / 110 |
| Hours | **Mon–Sat 9:30 am–6:30 pm, Sun closed**. No longer "Open 24 hours" (fixed since the 12 Nov note) | "Opens 10 am Sat" (full table not expanded) | 10 am–5 pm, **all 7 days** | "Opens 9 am Sat" | "Opens 7 am Sat", "See more hours" (more than one hours set) | "Opens 9 am Sat" |
| Website / booking | csrushil.com + **calendly.com** booking link | teamskk.com | **none ("Add website")** | ssaca.in | auditdsa.in | praveenatax.com |
| Photos | **19** | 6 | count not displayed | 2 | 16 | 16 |
| Latest owner post | **29 Sep 2026** ("New engagement… Virtual CFO for ArivuLabs") | none shown | none shown | none shown | none shown | none shown |
| Q&A | not visible signed out | not visible | not visible | not visible | not visible | not visible |
| Services list | not visible signed out | not visible | not visible | not visible | not visible | not visible |
| Attributes visible | LGBTQ+ friendly. Accessibility: assisted listening devices, hearing loop, wheelchair-accessible car park, entrance, seating and toilet | — | — | — | LGBTQ+ friendly | — |
| Review recency (top reviews in default sort; newest sort needs sign-in) | 6 mo, 5 mo, 5 mo, 5 mo, 5 mo (5 loaded) | 4 yr, 4 yr, 6 yr | **2 mo, 3 mo, 2 mo** | 4 yr, 4 yr, 4 yr | 3 yr, 3 yr, 4 mo | 10 mo, 3 yr, 3 yr |
| Owner replies seen | **Yes, on all loaded reviews** (edited about 1 month ago) | none | none on top 3 | none | yes (3 yr ago) | yes (3 yr ago) |
| Review topic chips | gst filings 4, itr filing 3, regulatory needs 7, proactive approach 3, hassle-free process 2, end to end support 2… | — | auditing 10, gst registration 9, income tax filing 4… | gst updates 2, support 2 | tax filing 3, accurate filing 2… | it filings 10, quick response 9… |
| Rank, Q1 run A (central) | not in top 57 | #1 | #2 | #3 | — | — |
| Rank, Q1 run B (near Anna Nagar) | #5 organic | — | #4 | — | #2 (organic #1) | #3 |

**Readout**
- **Where C S Rushil already leads:** profile completeness. It has the only recent owner post, consistent owner replies, a booking link, 19 photos (most of the set) and fixed hours.
- **Where it trails:** review volume, which is 57 vs 110–726 among direct rivals and 1,232 at Taxla in the tax and audit queries. It also trails on **proximity and relevance for head terms**, because it surfaces only when the map is centred near Anna Nagar. On "ca in anna nagar" it trails on name and keyword relevance: rivals carry "CA" or "Chartered Accountants in Anna Nagar" in their GBP names.
- **The leaders are not well maintained.** Kishore Kumar has 12 reviews, the newest 4 years old. Madhavan has no website. This means proximity and prominence (review count) carry more weight than profile polish.
- **Risk:** one visible 5-star review (reviewer "Çmā Kishore kumar", 5 months ago) contains bracketed template text: "*They handled my [Income tax filing/GST compliance]…*". It reads like a pasted template. Scripted reviews risk being filtered by Google and look inauthentic to prospects.
- **Spam and duplicates in the pack:**
  - "PRIVATE LIMITED COMPANY REGISTRATION" is a keyword-only name with 2 reviews, yet it ranks #1 on Maps for Q3 and Q4 and #2 on Q7.
  - "Rits & Associates | Chartered Accountants in Anna Nagar" appears twice on Q9, with two address lines on B9 2nd Ave and review counts of 40 and 41. That is a possible duplicate.

---

## 4. Ten prioritised actions

| # | Action | Why (evidence above) | Effort |
|---|---|---|---|
| 1 | **Fix third-party NAP:** Justdial ("Ottagapalayam" → J-Block, Anna Nagar 600040), Firm Dhundo ("Vadapalani" → Anna Nagar). Then claim or verify Sulekha, IndiaMart, clearlevel, caknowledgeclub and the RegisterKaro listing with identical NAP and category | Directories take 3–9 of the 10 Bing organic slots on Q1, Q2, Q5, Q6 and Q9, and Bing AI cards (Q5, Q8) name firms from directory data. Two of the firm's own listings carry the wrong locality | Low |
| 2 | **Review velocity:** an ongoing post-engagement ask in the client's own words. **Never supply template text.** Consider asking the reviewer behind the "[Income tax filing/GST compliance]" review to edit it | 57 vs 110–726 for map rivals. Newest visible reviews are 5–6 months old while Madhavan's are 2–3 months old | Ongoing |
| 3 | **Bing visibility:** verify Bing Webmaster Tools, submit the sitemap, push IndexNow for `/`, the Pvt Ltd page, `/direct-tax` and the Anna Nagar page, and claim **Bing Places** (import from GBP) | Absent from every non-brand Bing top 10 and from 11–20 on four queries. Bing still shows `/chartered-accountant-chennai`, which prior notes say 301s, so the index is stale. B S Sridhar holds Bing local packs | Low |
| 4 | **Ship an exact-match "Tax Consultant in Chennai" page** (the unmerged cee6141 port) or retitle `/direct-tax` to lead with "Tax Consultant in Chennai" | The Q5 SERP rewards "tax consultant" titled pages and homepages. The current title is "Income Tax Consultants…" with slug `/direct-tax` | Medium |
| 5 | **GBP categories and name check** in the dashboard: add secondary categories (Tax consultant, Auditor, Accountant, Tax preparation service, Business management consultant). Add "Chartered Accountants" to the GBP name **only if** the office signage and letterhead show it | Maps leaders on Q3–Q8 carry those categories. On Q9 the firm is #30 behind names containing "CA" or "Chartered Accountants". Keyword-stuffing beyond the real-world name breaks GBP rules | Low |
| 6 | **Pvt Ltd page on-page tweaks:** title like "Private Limited Company Incorporation & Registration in Chennai (2026) | C S Rushil". Add a short "Total government cost and timeline" answer box near the top (govt fees only). Keep "Updated" dates current | 5 of 10 Q3 results carry a year. Top-2 have a cost H2. The current title lacks the Q3 term "incorporation" | Low |
| 7 | **Add a minimal HTML enquiry form** (name, phone, service) beside the existing WhatsApp and Calendly CTAs on money pages | Every csrushil page has 0 forms. Justdial, taxteam and phoenixtax place a form in the first viewport (word about 190–240). A form is ICAI-safe; fees and testimonials are not | Medium |
| 8 | **Articleship / careers page** ("Articleship at C S Rushil & Co., Anna Nagar"), plus articleship details on clearlevel and Firm Dhundo | Q1 related searches are about one-third articleship-oriented, and Q1 organic #2 and #3 serve that intent. It is a legitimate, ICAI-safe entity signal | Low–Medium |
| 9 | **Keep the GBP posting cadence weekly** (last post 29 Sep 2026, 45 days ago). Add exterior and signage photos | It is the only profile among the six with any post. Cheap to keep that edge | Ongoing |
| 10 | **Geo-grid baseline and spam reports:** run a geo-grid (for example Local Falcon) for Q1, Q2 and Q9 around Anna Nagar to replace single-viewport snapshots. Optionally report the keyword-only "PRIVATE LIMITED COMPANY REGISTRATION" listing and the possible Rits duplicate through Google's redressal form. This is the owner's decision; I contacted no one | Maps order changed 3 times in one session for Q1. Spam listings occupy #1 on Q3 and Q4 | Low |

**ICAI guardrails for all actions:** no fees (government fees are fine), no superlatives ("best/top/leading"), no testimonials or star widgets on csrushil.com, and no guarantees. Platforms and directories in these SERPs do all of these. Do not mirror them.

---

*Everything above is a snapshot from 13 Nov 2026: Bing (cc=IN) for organic and layout, and signed-out Google Maps for local results. Google Search was not observed because of the CAPTCHA. Numbers come only from what was on screen or in fetched HTML. Where a field could not be seen, it is marked as such.*
