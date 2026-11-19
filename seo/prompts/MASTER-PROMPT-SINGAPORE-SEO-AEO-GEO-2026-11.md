# Master prompt: grow csrushil.com in Singapore (SEO + AEO + GEO)

**How to use it:**
1. Open a new Claude Code session in `D:\csrushil-website` (the git clone; Vercel deploys its `master`).
2. Paste everything below the line.

The prompt is self-contained: the agent needs no earlier conversation. It works in phases and stops at each owner gate. The strategy behind it is `seo/SINGAPORE-STRATEGY-2026-11-19.md`.

**Do not paste it before about 25 Nov 2026.** The November 2026 core update runs until about 24 Nov.

---

## ROLE

You are the lead SEO, AEO and GEO engineer for **C S Rushil & Co., Chartered Accountants** (www.csrushil.com). The firm has one office, in Anna Nagar, Chennai, and serves Singapore **online**.

Your job: make csrushil.com the page that Singapore-based searchers and AI assistants find and cite for:
- setting up and running an Indian subsidiary from Singapore;
- India-Singapore treaty and withholding-tax questions;
- Indian tax for Indians living in Singapore.

Do it without breaking a single house rule.

Work like a senior consultant:
- verify before you claim;
- change code only where it moves a ranking, citation or conversion signal;
- hand the owner a short, exact list of everything code cannot do.

---

## 0. READ FIRST (binding, in this order)

1. `seo/CONTEXT-PROMPT.md`: firm facts, the **locked rules** (section 3), stack, machine limits and repo map. If anything in this prompt conflicts with it, **CONTEXT-PROMPT.md wins**.
2. `seo/SINGAPORE-STRATEGY-2026-11-19.md`: the plan this prompt executes.
3. `seo/ICAI-COMPLIANCE.md` and `seo/CONTENT-REVIEW-PROCESS.md`.
4. `seo/GROWTH-PLAN-2026-11-16.md`: what was already changed on 16 Nov. Do not redo it.
5. The pages you will touch:
   - `src/app/india-subsidiary-for-singapore-companies/page.tsx`
   - `src/app/nri-tax-services-singapore/page.tsx`
   - `src/app/company-registration-india-for-foreigners/page.tsx`
   - `src/app/annual-compliance-package/page.tsx`
   - `src/app/india-subsidiary-compliance-cfo/page.tsx`
   - `src/content/blog/form-3ceb-due-date-applicability.tsx`
   - `src/content/blog/income-tax-act-2025-section-mapping.tsx` (statute mapping source)
   - `src/app/tools/foreign-subsidiary-compliance-calendar/Calculator.tsx`
6. `src/lib/blog.ts` (`BLOG_INDEX`; a post whose date is later than today is not published), `src/lib/related-posts.ts`, `src/lib/page-dates.ts`, `src/lib/schema.tsx` (`moneyPageGraph`, `SERVED_COUNTRIES`, the per-path `areaServed` map), `src/lib/content-reviews.ts`, `public/llms.txt`, `public/llms-full.txt`.

**Data:** the owner's Search Console export filtered to Singapore is in `C:\Users\itzme\OneDrive\Desktop\Ca\seoaeogeo-master\singapore\`. Copy the seven CSVs into `seo/gsc/singapore-2026-11-17/` in this repo before you start, so the baseline is versioned.

---

## 1. THE GOAL AND THE HONEST ARITHMETIC

The owner asked for "10,000,000 times" the current Singapore impressions. Say plainly, once, in your first report, why that is impossible:
- 219 × 10,000,000 = 2.19 billion impressions in 52 days.
- That is about 365 for every person in Singapore.
- Chasing it would mean scaled, near-duplicate pages, which Google's spam policies demote and the house rules forbid.

Then work toward the real targets below. They are **stretch goals, not forecasts**. Never promise a position to anyone.

| Window | Singapore impressions / 28 days | Clicks / 28 days |
|---|---|---|
| Baseline, 21 Oct to 17 Nov 2026 | 170 | 4 |
| 90 days | 1,000 to 1,700 (6 to 10×) | 20 to 40 |
| 6 months | 3,000 to 5,000 (20 to 30×) | 60 to 120 |
| 12 months (stretch) | 10,000 to 17,000 (60 to 100×) | 200 to 400 |

**Where growth comes from, in order of size:**
1. **Authority:** links and mentions. Most of it is owner work you draft but never publish yourself.
2. **Breadth around Singapore:** four or five deep guides.
3. **AI citation:** answer-first structure, a named reviewer, Bing indexing.
4. **CTR and depth** on the pages already shown.

---

## 2. WHAT THE DATA SAYS (27 Sep to 17 Nov 2026, Country = Singapore, Web)

- **Totals:** 219 impressions, 6 clicks, 2.74% CTR, average position 14.4.
- **Trend:** weekly impressions rose from 15 to 18 (late Sep and early Oct) to 49 (week of 8 Nov), then 38 in the three days 15 to 17 Nov.
- **Devices:** desktop 145 impressions at position 17.2; mobile 74 at position 8.9 with 4% CTR. Businesses search at a desk; NRIs on mobile.

| Page | Impr | Pos in Singapore |
|---|---|---|
| /company-registration-india-for-foreigners | 26 | 60.7 ("company formation services india", 20 impr at 66) |
| /india-subsidiary-for-uk-companies | 15 | 21.3 ("uk company india subsidiary benefits", searched from Singapore: regional-HQ audience) |
| /nri-tax-services-singapore | 14 | 16.8 |
| /blog/form-3ceb-due-date-applicability | 10 | 7.0, 0 clicks |
| /annual-compliance-package | 2 | 1.0 (an AI-Mode-style problem statement: "our india subsidiary compliance is constantly flagged by auditors, need a better local partner to handle statutory filings and secretarial work") |
| /india-subsidiary-for-singapore-companies | 2 | **36** (the Singapore page is nearly invisible in Singapore) |
| /outsourced-bookkeeping-singapore, /fema-rbi-compliance, /transfer-pricing-audit, /nri-property-sale-tds-chennai | 0 | not shown |

**Other queries:**
- how to register a foreign company in india (6, 42.5)
- indian companies incorporated in singapore (2, 36)
- income tax return for nri (3, 12.3)
- nri tax exemption (2, 34.5)
- dtaa registration (1, 7)
- tds on purchase of property from non resident (1, 15)
- tds on non resident on sale of property (1, 27)
- i reside in singapore (1, 3)

**Two cautions:**
- Only 72 of the 219 impressions belong to listed queries and pages. The rest are anonymised, and all 6 clicks are hidden.
- At this volume, one person can move a query. Decide on 28-day windows and on clusters, never on a single query under 5 impressions.

---

## 3. WHO YOU ARE WRITING FOR (priority order)

| | Who | What they need from an Indian CA firm |
|---|---|---|
| **A** | Singapore-HQ groups and **APAC regional HQs in Singapore** (including US, UK, European and Japanese groups) running or opening an Indian subsidiary or a GCC in Chennai; regional CFOs and controllers | Incorporation, FDI reporting (FC-GPR, FLA), transfer pricing and Form 3CEB/Form 48, statutory audit, ROC, GST, payroll, vCFO; a compliance partner when the group auditor flags the Indian entity |
| **B** | Indian founders with a **Singapore holding company** | FDI from the Singapore parent, valuation inputs, TP, ODI questions; **reverse flip** support on the Indian tax, FEMA, ROC and accounting side |
| **C** | **Indians working in Singapore**, and **OCI cardholders who are Singapore citizens**, with Indian income or Tamil Nadu property | NRI ITR, DTAA (IRAS Certificate of Residence plus Form 10F), property-sale TDS and lower-deduction certificate, 15CA/15CB, RNOR planning on return, RSU and ESOP, CPF and SRS questions |
| **D** | Singapore SMEs and accounting firms outsourcing bookkeeping | Covered by `seo/BOOKKEEPING-AEO-GEO-STRATEGY-2026-11.md`. Do not duplicate that work here |

---

## 4. SINGAPORE-SPECIFIC RULES (in addition to CONTEXT-PROMPT.md section 3)

1. **The Singapore boundary line goes on every page and guide you touch.** Wording: Indian law and Indian filings only; Singapore tax, ACRA, IRAS and Singapore company law stay with the client's Singapore adviser; the firm coordinates with that adviser.
2. **Never imply a Singapore presence or licence.** No "Singapore office" or "Singapore CA". No claim to be an ACRA filing agent, an IRAS-registered tax agent or a Singapore public accountant. No SGD or INR fees. "Served online from Chennai" on every page.
3. **Primary sources only for page facts.** India: incometaxindia.gov.in, incometax.gov.in, mca.gov.in, rbi.org.in, indiacode.nic.in, dpiit.gov.in, egazette.gov.in. Singapore: iras.gov.sg, acra.gov.sg, cpf.gov.sg, sal.org.sg (apostille). Treaty: the India-Singapore DTAA text and its protocols as published by the Income Tax Department. Blogs, Big-4 alerts and news are leads to a primary source, never the source itself.
4. **Must verify before use.** These are unresolved or fast-moving. If you cannot confirm one from a primary source, **leave it out**. Never use a placeholder, and never guess a section or form number.
   - **Form 10F's form number** under the Income-tax Rules for tax year 2026-27 (secondary sources disagree between Form 41 and Form 42).
   - **Treaty rates and articles:** dividends (Art. 10), interest (Art. 11), royalties and fees for technical services (Art. 12).
   - **Capital gains:** Art. 13 as amended by the 2016 protocol (grandfathering of pre-1 April 2017 shares; transition period).
   - **Limitation of Benefits:** Art. 24A, including the expenditure test.
   - **Supreme Court, Tiger Global (January 2026):** date, holding, and what it means for a TRC.
   - **ITAT Delhi, Hareon Solar Singapore v DCIT (30 January 2026).**
   - **Fast-track inbound merger route:** section 233 read with rule 25A of the Companies (Compromises, Arrangements and Amalgamations) Rules, as amended in 2024. Also section 234.
   - **FEMA (Cross Border Merger) Regulations, 2018,** and the reporting each one requires.
   - **Amalgamation tax neutrality** under the Income-tax Act, 2025 (map from 1961 Act sections 47(vi), 47(vii) and 2(1B)), using `income-tax-act-2025-section-mapping.tsx`.
   - **Different financial year for a subsidiary of a foreign company:** the section 2(41) proviso and the NCLT application.
   - **Singapore facts:** IRAS Certificate of Residence; IR21 tax clearance for departing non-citizen employees; CPF withdrawal on leaving Singapore; SRS withdrawal; GST 9% and the S$1 million registration threshold; apostille through the Singapore Academy of Law.
   - **Indian compliance dates for FY 2026-27:** FC-GPR (30 days), FC-TRS (60 days), FLA (15 July), Form 3CEB/Form 48 (31 October), ITR for TP cases (30 November), AOC-4, MGT-7, DIR-3 KYC, DPT-3, MSME-1.
5. **No em dashes or en dashes** in any copy, title, description or schema. Use "India-Singapore" with a hyphen and "to" for ranges.
6. **One page per intent.** The keyword-to-URL map in the strategy (section 5) is binding:
   - business treaty questions go to the DTAA guide;
   - personal treaty questions go to `/nri-tax-services-singapore`;
   - set-up goes to `/india-subsidiary-for-singapore-companies`;
   - generic foreign entry goes to `/company-registration-india-for-foreigners`.
7. **Byte-preserving edits.** Files mix LF, CRLF and stray `\r\r\n`. In Python use `open(p, encoding="utf-8", newline="")`, replace only matched spans, and diff afterwards to prove only the intended lines changed. Write scripts to files, not heredocs.
8. **Machine limits.** Never run `next dev`, `next build` or `npm install`. Verify with the methods in CONTEXT-PROMPT.md section 4.

---

## 5. WORK ORDER

Work on a new local branch `seo/singapore-2026-11` from the current `master`.

### Phase 0: baseline (no site changes)

1. Confirm the branch is up to date with `origin/master` and that the live site matches it (fetch 3 URLs and compare titles).
2. Copy the CSVs (section 0).
3. Write `seo/singapore/BASELINE-2026-11.md`. For each page in the section 2 table, record: title, description, H1, H2 list, word count (`D:\csr-render\render.cjs` for posts), number of internal links pointing in (`scripts/internal-links-report.py`), and its Singapore GSC row.
4. **Report and stop** only if something is broken. Otherwise continue.

### Phase 1: existing pages (strategy section 6.1)

**`/india-subsidiary-for-singapore-companies`:**
- **Title:** put Singapore and the searcher's verb first, at most 60 characters. Example: "Set Up an Indian Subsidiary from Singapore: FDI, FC-GPR, Tax".
- **Description:** 140 to 160 characters; says "served online from Chennai".
- **New H2: "How does a Singapore regional HQ run an Indian subsidiary?"** Cover the monthly close and reporting pack, TP on intra-group charges, the statutory audit timeline against the parent's year-end, the resident-director requirement and the time zone (IST + 2:30). Open with a 40 to 60-word answer, then detail. At least 250 words that do not appear on the UK, US or UAE sibling pages.
- **New H2 in the buyer's words: "Our auditors keep flagging the Indian subsidiary's compliance. What is usually missing?"** List the usual gaps (FC-GPR or FLA late, Form 3CEB/Form 48 missing, DIR-3 KYC, AOC-4/MGT-7, TDS on payments to the parent), each with a link to the page that covers it.
- Add links to the new guides as they go live (Phase 3).
- Update `updated`/page dates through the normal mechanism.

**`/nri-tax-services-singapore`:**
- **New H2: "I am a Singapore citizen with an OCI card and a flat in Chennai: how am I taxed in India?"** 40 to 60-word answer first, then residence, TDS on sale under section 195 (with its 2025-Act reference), the lower-deduction certificate, and 15CA/15CB for repatriation.
- **Tamil summary block** following the `src/lib/tamil.ts` pattern: a summary plus 3 to 4 Q&As, in natural Tamil (Tamil is an official language of Singapore). Mark it for owner review in your report; do not ship machine-sounding Tamil.
- **Leave the title alone** (strategy 6.1).

**`/blog/form-3ceb-due-date-applicability`:**
- **Do not change the title or description.**
- Give the foreign-parent section an `id="foreign-parents"` anchor.
- Add a two-sentence "Singapore parent?" note linking to `/india-subsidiary-for-singapore-companies` and, once live, the calendar guide.

**`/annual-compliance-package`:**
- Add one H2: **"Is your Indian subsidiary's compliance being flagged by auditors?"**, with a 40 to 60-word answer and a link to `/india-subsidiary-compliance-cfo`.

**`/company-registration-india-for-foreigners`:**
- **No title or copy changes** (rewritten 16 Nov). It gains links only (Phase 2).

**Acceptance for every page:**
- no em or en dashes;
- every new fact cites a primary source, either in the page's existing source pattern or in your report;
- word count increases by real content, with no padding;
- the FAQ arrays still feed FAQPage schema without duplicate questions.

### Phase 2: internal links (strategy section 9)

**Into `/india-subsidiary-for-singapore-companies`, from:**
- `/blog/form-3ceb-due-date-applicability`
- `/fema-rbi-compliance`
- `/transfer-pricing-audit`
- `/india-subsidiary-compliance-cfo`
- `/blog/fc-gpr-filing-deadline`
- `/blog/fla-return-due-date`
- `/eor-vs-subsidiary-india`
- `/company-registration-india-for-foreigners` (in its country list, if one exists)

**Into `/nri-tax-services-singapore`, from:**
- `/nri-tax-services`
- `/nri-property-sale-tds-chennai`
- `/blog/rnor-status-returning-nri`
- `/blog/nri-itr-filing`
- `/tools/nri-residential-status-calculator`
- `/tools/nri-property-sale-tds-calculator`

**Into `/company-registration-india-for-foreigners`:** from each new Singapore guide.

**Link rules:**
- Each link sits inside a sentence that is relevant on its own.
- Use descriptive, varied anchors (no exact-match repetition).
- One link per target per page.
- Use `PostLink` in posts.

Run `scripts/internal-links-report.py` before and after, and put the before/after inbound counts in your report.

### Phase 3: new guides (strategy section 6.2)

Build them in this order: **G1 → G2 → G3 → G5**.

- **G4** (paying a Singapore parent) is a section of G1 unless G1 passes about 3,500 words; then split it out.
- **The GCC page (G6) is a new service page.** Ask the owner first (CONTEXT-PROMPT rule 10). Do not build it in this run.

**Every guide must have:**
- **Title:** at most 60 characters; **description** 140 to 160 characters; one H1.
- **Lead answer** of 40 to 60 words directly under the H1.
- **Question H2s,** each opening with a 40 to 60-word answer.
- **A FAQ** of 6 to 9 questions with 40 to 60-word answers, fed to FAQPage the way existing posts do.
- At least one **table**.
- **The Singapore boundary line** (rule 4.1) and "served online from Chennai".
- **A "Sources" list** of primary sources with the date checked.
- **2,000 to 3,500 words**, of which at least 600 are unique against every sibling page (5-word-shingle check; use or extend the script the repo already uses for page-family audits). Report the overlap percentage.
- **Registration:** in `BLOG_INDEX` (title, description and excerpt identical to the post file) and `related-posts.ts`. Run `node scripts/gen-page-dates.mjs`. Add to `public/llms.txt` and `llms-full.txt` under a "Singapore" heading.
- **Publishing:** set the `BLOG_INDEX` date to the planned publish date. Publish at most two guides a fortnight; the strategy calls for a steady drip.
- **No `CONTENT_REVIEWS` entry.** The reviewer line appears only after the owner sends CA Rushil's dated sign-off.
- **A review sheet** at `seo/singapore/REVIEW-<slug>.md`: every factual claim in the guide, one per row, with its primary source URL and the date you checked it. This is what CA Rushil signs.

#### G1. `/blog/india-singapore-dtaa-for-businesses` (segments A and B)

Working title: "India-Singapore DTAA for Businesses: Withholding Tax and LOB".

H2 questions:
1. What does the India-Singapore DTAA change for a business?
2. What tax does India withhold on dividends, interest, royalties and fees for technical services paid to Singapore?
   - Table: payment, treaty article, treaty rate, domestic rate under the 2025 Act, documents. **Every rate verified.**
3. Which documents does a Singapore company need to get the treaty rate?
   - IRAS Certificate of Residence, Form 10F (verified number), beneficial ownership, no-PE declaration where relevant.
4. How are gains on Indian shares taxed after the 2016 protocol?
5. What is the Limitation of Benefits clause, and why did a Singapore holding company fail it in 2026?
   - Hareon Solar, verified.
6. What did the Supreme Court decide in Tiger Global, and is a TRC still enough?
   - Verified; state only the holding, no opinion.
7. When does a Singapore company have a permanent establishment in India?
8. Paying the Singapore parent: how do Form 15CA and 15CB work?
   - Link `/form-15ca-15cb-chennai`.
9. How do treaty payments interact with transfer pricing and Form 3CEB/Form 48?
10. What should the Singapore side check with its adviser?

#### G2. `/blog/compliance-calendar-singapore-owned-indian-subsidiary` (segments A and B)

Working title: "Compliance Calendar for a Singapore-Owned Indian Subsidiary".

Content:
- **Month-by-month table, April 2026 to March 2027:** month, Indian filing, form, who files, and a "Singapore parent touchpoint" column (for example the parent's 31 December year-end consolidation pack).
- **Event-driven table:** FC-GPR, FC-TRS, 15CA/15CB per remittance, change of directors, share allotment.
- **H2: "Can the Indian subsidiary use the Singapore parent's financial year?"** Answer from the section 2(41) proviso, verified.
- **H2: "Which deadlines do Singapore-owned subsidiaries most often miss?"**
- A prominent link to `/tools/foreign-subsidiary-compliance-calendar`.
  - Optional small enhancement: let the tool read `?parent=sg` to preselect Singapore. Keep it client-side, keep the default behaviour unchanged, and type-check it.

#### G3. `/blog/reverse-flip-singapore-to-india` (segment B)

Working title: "Reverse Flip from Singapore to India: Tax, FEMA and MCA Steps".

H2 questions:
1. What is a reverse flip, and why are companies moving their holding company to India in 2026?
   - Name only publicly reported cases (Flipkart, Pine Labs, Zepto, Udaan), citing the report, with no commentary on them.
2. Which routes are available?
   - Inbound merger under sections 233 and 234 with rule 25A, a share swap, or another structure. Verify each.
3. What happens on the Singapore side?
   - One short paragraph, "your Singapore counsel" (the scheme of arrangement is Singapore law).
4. When is the merger tax-neutral in India?
   - 2025-Act mapping, verified.
5. What FEMA reporting follows?
   - Cross Border Merger Regulations; ODI unwinding for resident shareholders; FDI reporting for non-resident shareholders; the Press Note 3 check for land-border investors.
6. What happens to ESOPs granted by the Singapore company?
7. What ROC filings follow the merger order?
8. How long does it take?
   - Give a sourced range only; no commitment.
9. What the firm does and does not do.
   - Indian tax, FEMA reporting, accounting and ROC; the scheme itself needs lawyers in both countries.

#### G5. `/blog/returning-to-india-from-singapore-tax-checklist` (segment C)

Working title: "Moving Back to India from Singapore: Tax Checklist".

Must not repeat `/blog/rnor-status-returning-nri`; link to it.

Content:
- **Timeline table:** 6 months before leaving, the month you leave, first year in India, the year you become ordinarily resident.
- **H2s:**
  - IRAS tax clearance (IR21) and your last Singapore salary
  - What happens to CPF and SRS balances for Indian tax
  - RSUs and ESOPs vesting across the move
  - NRE and FCNR accounts after return
  - Foreign assets you may keep under FEMA section 6(4)
  - Schedule FA once you are ordinarily resident (link `/blog/foreign-rsu-tax-schedule-fa-chennai`)
  - Renting out or selling your Chennai flat
- Links to `/tools/nri-residential-status-calculator`.

### Phase 4: llms.txt, sitemap and IndexNow

1. `public/llms.txt` and `llms-full.txt`: a "Singapore" section listing the subsidiary page, the NRI page, the bookkeeping page, the calendar tool and every new guide, each with a one-line factual summary.
2. Confirm blog posts reach the sitemap automatically and that `page-dates.ts` is regenerated.
3. **After the owner confirms the Vercel deploy is live** and the new URLs return 200: run `npm run indexnow` once, **only with the owner's approval**.

### Phase 5: off-site drafts (draft only; never publish or send anything)

Save these in `seo/singapore/offsite/`. Every draft is informational and ICAI-safe: no solicitation, no fees, no superlatives, no client names.

1. **Two LinkedIn articles** for CA Rushil, 800 to 1,200 words each:
   - "Five Indian-subsidiary filings Singapore regional finance teams miss";
   - "Reverse flips to India: what the Indian-side filings involve".
2. **Tamil-language explainer**, about 700 words: "சிங்கப்பூரில் வசிக்கும் இந்தியர்களுக்கான இந்திய வருமான வரி: முக்கிய கேள்விகள்" (Indian income tax for Indians living in Singapore: the key questions). For Singapore Tamil media and associations. Flag it for native review.
3. **Introduction note to Singapore corporate-secretarial and accounting firms** proposing a referral relationship (they handle ACRA and IRAS, the firm handles India). It must say there is **no fee-sharing**.
4. **An answer bank:** 10 factual answers, 120 to 200 words each, for r/singapore, r/askSingapore, r/nri, HardwareZone and Quora, on the section 7 prompt topics in the strategy. Each discloses "I am a CA at an Indian firm" and carries no link unless the question asks for a source.
5. **A pitch paragraph** for the compliance calendar tool, for Singapore founder communities and India-Singapore business newsletters.

### Phase 6: measurement setup

1. `seo/singapore/KPI-SINGAPORE.md`: the KPI table from strategy section 11, with the baseline filled from the CSVs and the targets per window.
2. `seo/AI-VISIBILITY-LOG.md`: add the 10-prompt Singapore panel (strategy section 7, item 8), with columns for engine, date, cited (y/n), URL cited, and competitor cited.
   - If the session has a browser and an engine is reachable without signing in, run the panel once and log the results honestly.
   - If not, leave the rows for the owner.
3. Add `Singapore` to the monthly export instructions in `seo/PROMPT-GROWTH-LOOP.md`: Country = Singapore, Pages and Queries, with position.

### Phase 7: verify, commit, report

1. **Verify:**
   - type-check (copy `src` to `D:\csr-tc-final`, run tsc as in CONTEXT-PROMPT.md section 4);
   - ESLint on the changed files;
   - render word counts;
   - `scripts/verify-site-integrity.mjs` and `scripts/internal-links-report.py`;
   - a dash scan on changed files (no `\u2013` or `\u2014`);
   - a diff check proving byte-preserving edits.
2. **Commit** in logical commits (page fixes, links, each guide, llms/meta, docs) with the session's attribution trailer.
3. **Do not push** until the owner approves, and say so in the report. After approval, push with the command in CONTEXT-PROMPT.md, then confirm the deploy (Vercel often stalls; follow the documented checks).

---

## 6. OWNER GATES AND OWNER ACTIONS (list them in every report)

| ID | What the owner does | Blocks |
|---|---|---|
| O1 | Exports GSC Pages and Queries, Country = Singapore, last 3 months, **with position**, and per page for the six pages in section 2, to find the 6 hidden clicks | Next title decisions |
| O2 | Pulls Singapore search volumes in Google Keyword Planner (location: Singapore) for the strategy's section 5 terms | Re-setting targets |
| O3 | Gets CA Rushil's dated sign-off on each `REVIEW-<slug>.md` | Reviewer line; publishing G1 to G5 |
| O4 | Approves the push to `master` and IndexNow | Going live |
| O5 | Decides on the GCC page | G6 |
| O6 | Publishes the off-site drafts and contacts the Singapore firms | Authority (the biggest lever) |
| O7 | Native-Tamil check of the Tamil block and explainer | Tamil content going live |

---

## 7. MONTHLY LOOP (after the first run)

Each month, with a new Singapore export:
1. **Position 1 to 10, CTR under 2%, at least 20 impressions:** rewrite the title and description to the dominant query. Never touch a page changed in the last 28 days.
2. **Position 11 to 30:** add the missing sub-question as an H2 with a 40 to 60-word answer, plus 2 or 3 internal links.
3. **Position 30 and lower** on a commercial query: no copy change. Log it as a link target for O6.
4. **A query cluster with no matching page and at least 15 impressions across 28 days:** propose one new guide (one a month at most), using the section 5 checks. Never create a second page for an intent that already has one.
5. **Every page with Singapore impressions:** check that the Singapore boundary line and "served online" are present.
6. Update `KPI-SINGAPORE.md` and the AI panel; write `seo/progress/<date>-singapore.md`.

---

## 8. DO NOT

- Build `/singapore`, `/ca-in-singapore`, a Singapore "office" page, or any topic × Singapore grid.
- Add `en-SG` hreflang or duplicate pages for Singapore.
- Write fees, discounts, "best", "top", "leading", "trusted by", testimonials, client names, results or statistics about the firm.
- Add `AggregateRating`, `Review`, `priceRange` or `Offer` schema.
- Advise on Singapore law or tax beyond pointing to the Singapore adviser.
- Use a fact you could not verify from a primary source, or leave a placeholder.
- Run `next dev`, `next build` or `npm install`; push without approval; publish or send anything off-site.
- Change the homepage H1, delete or merge pages, or add a service page without asking.

---

## 9. REPORT FORMAT (end of run)

1. **The 10,000,000× answer**, in two sentences (first run only).
2. **What changed:** a table of page, change, words added, inbound links before and after.
3. **New guides:** slug, title, words, unique-content percentage, publish date set, review sheet path.
4. **Facts left out** because they could not be verified, with what is needed to verify them.
5. **Verification results:** type-check, lint, integrity, dash scan, diff check, each pass or fail with its output.
6. **Commits:** hashes, with the push status ("awaiting owner approval").
7. **The owner-action table** (section 6), with the current status of each.
8. **What to measure, and when:** 28-day check dates and the KPI rows to compare.
