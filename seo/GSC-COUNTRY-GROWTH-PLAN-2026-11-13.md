# Search Console growth plan by country (13 Nov 2026)

**Source:** Search Console "Top pages" by country, supplied by the owner on 13 Nov 2026. The figures are impressions; no click or query data was supplied.

**Goal:** turn the pages Google already shows into clicks (title, description, direct answer), and into rankings (depth, freshness, internal links), for SEO, AEO and GEO together.

**Rules:**
- ICAI (no fees, superlatives or testimonials).
- Every fact must match the site's service pages.
- No new pages for countries with fewer than 10 impressions.

## 1. Where the impressions are

| Country | Main pages (impressions) | What searchers want | Main lever |
|---|---|---|---|
| India | Partnership firm registration (383), ROC Chennai vs Coimbatore (250), Section 74A GST notice (237), company name rejection (223), home (196), **Form 3CEB (186)**, government fees (161), GST notice reply (99), GST litigation (88), TN stamp duty (85) | Company registration facts, GST notices, transfer pricing deadlines | CTR (titles with year and specifics), links from the guides into the money pages |
| UK | NRI tax UK (122), India subsidiary for UK companies (16) | India tax for UK-resident NRIs; UK groups opening in India | Title CTR; Form 3CEB guide for UK groups |
| US | NRI tax USA (32), outsourced accounting for CPA firms (5), India subsidiary for US companies | India ITR, DTAA, FBAR touchpoints; offshore CPA support | Title CTR; transfer pricing link from the subsidiary page |
| UAE | NRI tax UAE (55), India subsidiary for UAE companies (16), Form 3CEB (5) | NRI ITR, Dubai groups' Indian subsidiaries | Same as UK |
| Singapore | India subsidiary for Singapore (8), **Form 3CEB (6)**, annual compliance (4) | Regional hubs with Indian subsidiaries | Form 3CEB guide; subsidiary title |
| Oman / Gulf | NRI tax Gulf (2) | NRI ITR, DTAA | Page already deep; watch |
| Canada | **Form 3CEB (2)** | Canadian groups with Indian subsidiaries | Covered inside the Form 3CEB guide; no separate page yet |

**Main finding:** the Form 3CEB guide is the one page shown in **India, the UAE, Singapore and Canada**. The searchers are the Indian subsidiaries of foreign groups, which is the firm's highest-value audience. It was also the thinnest of the top pages (1,040 words, 3 of 8 headings as questions) and out of date (no Form 48, no 2026 dates).

## 2. Implemented (branch `seo/rank-ca-firm-chennai-2026-11`; live after deploy)

### Form 3CEB guide, rebuilt (`/blog/form-3ceb-due-date-applicability`)

**Title:** "Form 3CEB Due Date 2026, Applicability and Form 48" (50 characters). It carries the year, the deadline and the new form name that searchers now type.

**Description:** states the 31 October 2026 date and the ₹20 crore rule (153 characters).

**Lead answer:** 58 words. The `updated` date is 13 Nov 2026, so `dateModified` is fresh for AI citation.

**New sections:**
- A due-date table for FY 2025-26 and tax year 2026-27.
- The CBDT's 21-day extension and why it did not cover Form 3CEB.
- Who must file, with examples for US, UK, UAE, Singapore and Canadian parents.
- The associated-enterprise definition, including the 26% voting-power test.
- Form 48: Section 172, Rule 85 and the Rule 84 documentation, with a link to the official Form 48 FAQ.
- What to do if 31 October was missed: Section 271BA for FY 2025-26, and the fee of ₹50,000 / ₹1,00,000 from tax year 2026-27.
- The 5-step filing process and a pre-filing checklist.

**FAQs:** 6, each answer 39–57 words. They feed the FAQPage schema and AI answers.

**Links:**
- Out of the guide: the transfer pricing service, the 4 India-subsidiary pages, the compliance calendar tool and the compliance retainer.
- Into the guide: the US, UK, UAE and Singapore subsidiary pages, `/eor-vs-subsidiary-india` and `/company-registration-india-for-foreigners` now list it as a related guide.

**Fact sources:**
- The site's own transfer pricing page, which has the section-by-section mapping.
- The [Income Tax Department FAQ on Form 48](https://www.incometaxindia.gov.in/documents/d/guest/form-48-faqs).
- Tax-news reports (13 Nov) that the September 2026 extension did not cover Form 3CEB. The CBDT notification itself was not seen; re-check it before next season.

### Titles rewritten for CTR (search words in place of the brand suffix)

| Page | Old title | New title |
|---|---|---|
| /nri-tax-services-uk | NRI Tax Services for UK Residents \| C S Rushil & Co. | India Tax for NRIs in the UK: ITR, DTAA & HMRC Credit |
| /india-subsidiary-for-uk-companies | Subsidiary in India for UK Companies \| C S Rushil & Co. | India Subsidiary for UK Companies: Setup, FDI and Tax |
| /india-subsidiary-for-uae-companies | Subsidiary in India for UAE Companies \| C S Rushil & Co. | India Subsidiary for UAE Companies: Setup, FDI and Tax |
| /india-subsidiary-for-singapore-companies | India Subsidiary for Singapore Companies \| C S Rushil & Co. | India Subsidiary for Singapore Companies: Setup and Tax |
| /outsourced-accounting-for-cpa-firms | Outsourced Accounting for US CPA Firms \| C S Rushil & Co. | Outsourced Accounting and Tax Prep for US CPA Firms |
| /annual-compliance-package | Annual Compliance Package for Companies \| C S Rushil & Co. | Annual Compliance for Private Limited Companies and LLPs |
| /blog/government-fees-company-registration | Government Fees for Company Registration in India | … in India (2026) |
| /blog/tamil-nadu-stamp-duty-company-incorporation | Stamp Duty on Company Incorporation in Tamil Nadu | … in Tamil Nadu (2026) |

Google shows the site name separately, so dropping "| C S Rushil & Co." costs no branding and frees the space for search words.

### Internal links into the money pages
- Government fees post and TN stamp duty post: now link to `/private-limited-company-incorporation-chennai` and the government fee calculator. Before, they linked only to the company-registration hub.
- Partnership firm page: the related guides now start with "Convert a partnership firm to an LLP". The non-question heading became "What is the difference between a registered and an unregistered partnership firm?".

## 3. Next, once query data is available

The owner should export **Performance → Pages → (page) → Queries** for each page in section 1, for the last 3 months, by country. Then:
1. **Pages with high impressions, low CTR and position 5–15:** rewrite the title and description to the exact top query.
2. **Pages with position 15–30:** add the missing sub-question the query asks as an H2 with a 40–60-word answer, and add 2–3 internal links from related pages.
3. **Queries with no matching page** (for example "Form 48 due date", "Form 3CEB penalty", "NRI tax consultant UK"): decide whether to add a section or a new post. Never create two pages for one query.
4. **Canada:** if impressions pass about 20 a month, consider an "India tax for NRIs in Canada" page on the existing NRI template. India–Canada DTAA facts need CA sign-off first.

## 4. Measure (every 28 days, by country)

| Metric | Baseline | Target (90 days after deploy) |
|---|---|---|
| Form 3CEB guide impressions (all countries) | 186 India + 13 abroad | ×2 |
| Form 3CEB guide CTR | Not supplied | ≥ 3% |
| NRI tax UK impressions / CTR | 122 / not supplied | +50% / ≥ 2% |
| India-subsidiary pages (UK, UAE, US, SG) impressions | 16 / 16 / – / 8 | ×2 each |
| Partnership firm page CTR | Not supplied | ≥ 3% |
| AI answers citing the Form 3CEB guide | Not measured | Track in `seo/AI-VISIBILITY-LOG.md` ("Form 3CEB due date 2026", "Form 48 transfer pricing") |
