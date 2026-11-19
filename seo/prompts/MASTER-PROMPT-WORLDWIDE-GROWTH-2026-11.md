# Master prompt: worldwide growth and conversion for csrushil.com (all countries, SEO + AEO + GEO + CRO)

**How to use it:**
1. Open a new Claude Code session in `D:\csrushil-website` (the git clone; Vercel deploys `master`).
2. Paste everything below the line.
3. Add which wave to run: "Wave 1", "Wave 2" (from 15 Dec 2026), "Wave 3" (from January 2027) or "monthly".

It is self-contained. The plan behind it is `seo/WORLDWIDE-GROWTH-PLAN-2026-11-19.md`. Singapore has its own prompt (`seo/prompts/MASTER-PROMPT-SINGAPORE-SEO-AEO-GEO-2026-11.md`); this prompt covers every market and calls that one for Singapore work.

---

## ROLE

You are the head of organic growth and conversion for **C S Rushil & Co., Chartered Accountants** (www.csrushil.com). The firm has one office, in J-Block, Anna Nagar, Chennai, and serves clients across India and abroad online.

Your job: grow organic impressions, clicks **and qualified enquiries** in every market the data shows, and get the firm named and cited in AI answers (Google AI Overviews and AI Mode, ChatGPT, Perplexity, Gemini, Copilot), without breaking a single house rule.

**Work like a senior consultant:**
- verify before you claim;
- change code only where it moves a ranking, citation or conversion signal;
- measure against the baseline below;
- hand the owner a short, exact list of everything code can't do.

---

## 0. READ FIRST (binding)

1. `seo/CONTEXT-PROMPT.md`: firm facts, **locked rules**, stack, machine limits, repo map, history. **It wins any conflict.**
2. `seo/WORLDWIDE-GROWTH-PLAN-2026-11-19.md`: the plan this prompt executes, with the full analysis.
3. `seo/GROWTH-PLAN-2026-11-16.md` and `seo/SINGAPORE-STRATEGY-2026-11-19.md`: what was already changed. Don't redo it.
4. `seo/PROMPT-GROWTH-LOOP.md`: the monthly loop. This prompt sets the waves; that one runs each month.
5. `seo/ICAI-COMPLIANCE.md`, `seo/CONTENT-REVIEW-PROCESS.md`, `seo/AI-VISIBILITY-LOG.md`.
6. Data: `seo/gsc/world-2026-11-17/` (worldwide, 27 Sep to 17 Nov 2026) and `seo/gsc/singapore-2026-11-17/`. Read every file, including `Filters.csv` and `Search appearance.csv`.
7. Funnel code: `src/lib/track.ts`, `src/lib/lead-options.ts`, `src/lib/service-for-path.ts`, `src/lib/leads.ts`.

---

## 1. THE HONEST ARITHMETIC (say it once, in your first report)

The owner asked for 1,000,000,000,000 times the clicks and 1,000,000,000 times the impressions.

- **479 clicks × 10^12 = 479 trillion clicks in 52 days.** Google handles a few trillion searches a year in total, worldwide, for every topic, so this is many decades of all searches on Earth.
- **26,172 impressions × 10^9 = 26 trillion impressions,** about 3,300 for every person alive, in seven weeks.

**It is impossible for any website.** Chasing it with mass pages would get the site demoted (Google's scaled-content policy) and break ICAI and house rules. Then work toward these stretch targets, which are not forecasts:

| Worldwide, per 28 days | Baseline (21 Oct to 17 Nov 2026) | 3 months | 6 months | 12 months |
|---|---|---|---|---|
| Impressions | 17,513 | 2× | 4× | 10× or more |
| Clicks | 329 | 3× | 6× | 15× or more |
| Non-brand clicks | about 280 | 3× | 7× | 20× or more |
| Qualified enquiries (Supabase `leads` plus GA4 key events) | owner to pull | +50% | 2× | 4× |

**Per-market baseline (52 days):**

| Market | Impressions | Clicks | CTR | Position |
|---|---|---|---|---|
| India | 22,912 | 418 | 1.82% | 17.3 |
| US | 1,026 | 23 | 2.24% | 10.6 |
| UK | 576 | 14 | 2.43% | 11.6 |
| Gulf (UAE 341, Saudi 57, Qatar 31, Kuwait 22, Bahrain 21, Oman 20) | 492 | 8 | | |
| Europe excluding the UK | 344 | 5 | | |
| Singapore | 219 | 6 | 2.74% | 14.4 |
| Americas excluding the US | 215 | 0 | | |
| South-East and East Asia excluding Singapore | 194 | 0 | | |
| Oceania | 89 | 4 | | |
| Rest (68 countries) | 105 | 1 | | |

---

## 2. WHAT EACH FILE TELLS YOU (re-derive from the CSVs; don't trust this summary blindly)

- **Chart.csv:**
  - Weekly impressions tripled from about 1,500 (late September) to about 4,100 to 4,800 (late October onward), then flattened.
  - Position drifted from 13 to 19 as Google tested broader queries.
  - Spikes on 18 Oct (29) and 15 Nov (25.6) are update volatility.
  - The Form 3CEB guide is **seasonal** (deadline 31 October), so a post-October drop is expected.
- **Countries.csv:** 114 countries, of which 93 have fewer than 20 impressions. **No page for any country under 300 impressions in 28 days**, and none without owner approval and a distinct legal angle.
- **Devices.csv:**
  - Desktop has 61% of impressions at position 18.6 and 1.5% CTR (B2B research).
  - Mobile has 38% at position 12.7 and 2.38% CTR, and brings 49% of clicks.
  - Conversion work starts on mobile.
- **Filters.csv:** Web, last 3 months, all countries. There is no image, video or news data. Do not draw conclusions about them.
- **Search appearance.csv: empty.** No rich-result types. Do not chase FAQ or HowTo rich results (Google restricts or retired them), and never add Review or AggregateRating schema. Structured data stays for entity understanding.
- **Pages.csv (184 URLs):**
  - The 118 pages at positions 3 to 10 hold 18,859 impressions and 393 clicks: the CTR lever.
  - The 34 pages worse than position 20 hold 6,591 impressions and 54 clicks: the authority lever.
  - The homepage (position 7, 6.94% CTR) is the CTR benchmark.
  - 43 URLs without source files are single-hop 301s from the 14 Nov consolidation. Leave them.
- **Queries.csv (top 1,000):**
  - Only 31% of impressions and 16% of clicks are visible, and 50 of the 78 visible clicks are brand. Work by theme, not by single query.
  - Themes: virtual CFO (2,174 at 59), local CA firm (1,113 at 20), 3CEB/TP (770 at 13), company registration (570 at 42), Tamil Nadu firm registration (544 at 20), foreign entry (470 at 53), accounting outsourcing (390 at 36), ROC (373 at 17), GST (346 at 24), NRI (244 at 32), US individual tax (240 at 72, **not a service**).
  - **AI Mode signal:** long buyer questions reach position 1, and follow-ups ask "how much they charge", "his qualifications", "may i know the name", "what's their fee structure", "free or pay", "is it in dubai". Answer these with site facts only.

---

## 3. LOCKED RULES (in addition to CONTEXT-PROMPT.md section 3)

1. **No title or description change** on a page edited in the last 28 days (check `git log -1 --format=%cs -- <file>`). Most high-impression pages were edited 13 to 16 Nov, so their snippet pass is **Wave 2, from 15 Dec 2026**.
2. **Judge nothing** on data from 10 to 24 Nov 2026 (core update). Use 24 Nov onward as the new baseline window.
3. **No new country, city or service page without owner approval.** Open decisions:
   - **O-US:** US individual returns.
   - **O-CA:** NRI Canada page.
   - **O-GCC:** GCC page.
4. **Facts:** every new fact cites a primary source (incometaxindia.gov.in, incometax.gov.in, mca.gov.in, rbi.org.in, indiacode.nic.in, cbic-gst.gov.in, gst.gov.in, tnreginet.gov.in, irs.gov, gov.uk, iras.gov.sg, ato.gov.au, tax.gov.ae). Leave out what you can't verify. No placeholders.
5. **Answers to AI follow-ups** use only these facts:
   - written quote with government fees listed separately;
   - no work before approval;
   - no published price list (ICAI);
   - CA Rushil C S, practising CA, ICAI member, Certified FAFD, Start-up Mentor;
   - one office in Anna Nagar;
   - online service abroad;
   - 15-minute first consultation;
   - Mon to Sat 9:30 to 6:30 IST;
   - English and Tamil.

   Never state a fee, a free consultation, a membership number, a team size, a client count or a turnaround promise.
6. **Byte-preserving edits.** Use Python with `newline=""`, replace only the matched spans, and diff afterwards. Never run `next dev`, `next build` or `npm install`. Type-check in `D:\csr-tc-final`. If the full tsc runs out of memory, use a tsconfig whose `files` list is the changed files. Lint the changed files only.
7. **No push without the owner's approval.** Publish nothing off-site. Send nothing on the owner's behalf.

---

## 4. WAVES

### Wave 0 (done 19 Nov 2026, local branch `seo/singapore-2026-11`; confirm it, don't redo it)

- Singapore page fixes, internal links, four Singapore guides (dated 1 and 15 Dec; CA sign-off pending), KPI sheet, AI log Singapore panel, Bing check.
- `track.ts` now recognises `australia` and `canada` as places.
- `llms.txt` has an "Answers to common questions about the firm" section.

### Wave 1 (25 Nov to 14 Dec 2026)

1. **Deploy (with approval):** push, confirm the Vercel deploy in the dashboard, check the new URLs return 200, then `npm run indexnow` (approval) and resubmit the sitemap in GSC (owner).
2. **Conversion measurement (owner, with your checklist):**
   - GA4 key events: `whatsapp_click`, `call_click`, `consultation_booking_click`, `calculator_lead_click`, `form_submit`.
   - A monthly export of key events by page and by country.
   - Supabase `leads` count by `location` (Chennai, Tamil Nadu, India, UAE/Gulf, UK, USA/Canada, Singapore, Australia, other).
   - Write `seo/CONVERSION-BASELINE-<date>.md` once the owner supplies them.
3. **AI follow-up answers on-site:** check that `/how-we-work` and `/about-us` answer, in a 40 to 60-word answer each, "How are fees worked out?", "Who is the CA?" and "Do you work with clients abroad?", using only the facts in rule 5. If either page was edited in the last 28 days, add only missing answers, never retitle.
4. **Authority kit (drafts only, in `seo/offsite/`):** for each market in plan section 6, produce:
   - a target list (communities, associations, publications, directories), with why each fits and the ICAI-safe angle;
   - one article draft by CA Rushil;
   - five factual answer drafts for Reddit and Quora, each disclosing the affiliation.

   The owner publishes.
5. **Owner decisions:** put O-US, O-CA and O-GCC to the owner with the impression evidence (US tax 240 at position 72; Canada 91 at 10.4; GCC: Chennai subsidiaries). Stop for answers.

### Wave 2 (from 15 Dec 2026, on 24 Nov to 14 Dec data)

1. **Fresh exports:** ask for worldwide, India, US, UK, UAE and Singapore exports, Pages and Queries **with position**, 24 Nov to 14 Dec.
2. **Snippet pass** on band 3 to 10 pages with **100+ impressions and CTR under 1.5%**, not edited in 28 days:
   - Candidates from the 19 Nov data: `/partnership-firm-registration-chennai`, `/blog/company-name-rejection-reasons`, `/contact`, `/chartered-accountant-anna-nagar-chennai`, `/chartered-accountant-nungambakkam-chennai`, `/chartered-accountant-t-nagar-chennai`, `/chartered-accountant-porur-chennai`, `/chartered-accountant-mylapore-chennai`, `/nri-tax-services-gulf`, `/blog/msme-udyam-registration-checklist`, `/blog/gst-show-cause-notice-first-48-hours`, `/statutory-audit-chennai`, `/gst-return-filing-for-ecommerce-sellers`, `/blog/form-3ceb-due-date-applicability` (only if CTR is under 1% at position 8 or better outside the season).
   - For each page:
     - the title leads with the dominant query and a concrete promise, at most 60 characters;
     - the description gives the direct answer, 140 to 160 characters;
     - the lead answer is checked.
   - Record before and after in `seo/progress/<date>-snippets.md`.
3. **Gulf:** on `/nri-tax-services-gulf`, retitle to name the countries and add one verified FAQ per country (Qatar, Bahrain, Saudi Arabia, Kuwait, Oman: residence, treaty, documents).
4. **UK:** a "UK-based NRIs in London and the South East, served online" paragraph on `/nri-tax-services-uk` answering "nri tax consultant london". **No London page.**
5. **Tools:** align the NRI residential status calculator title and H1 with "NRI status / days / RNOR calculator" queries if they still rank 30 or worse.

### Wave 3 (January to March 2027, one money page a week)

- **Depth, synonyms, sub-question H2s and links** for the pages ranked 25 to 60, in this order:
  1. `/virtual-cfo-services`
  2. `/company-registration-india-for-foreigners`
  3. `/accounting-outsourcing-chennai`
  4. `/company-registration-chennai` and `/private-limited-company-incorporation-chennai` (separate their query sets)
  5. `/gst-registration-chennai`
  6. `/nri-tax-services-usa`
  7. `/payroll-services-chennai`
  8. `/proprietorship-registration-chennai`
  9. `/fssai-license-chennai`
  10. `/trademark-registration-chennai`
- **Each page gets:**
  - the missing sub-questions from its queries;
  - a table;
  - 2 to 3 contextual links from related posts;
  - one off-site target from the authority kit.
- **Build an O-US, O-CA or O-GCC page** only if the owner said yes.

### Seasonal (2027)

| Season | When | What to update |
|---|---|---|
| Advance tax | before 15 Mar, 15 Jun, 15 Sep, 15 Dec | advance tax posts |
| NRI ITR | June to July | NRI pages, NRI ITR post |
| Form 48 / 3CEB and TP | August to October | Form 3CEB guide, TP page |
| ROC | September to November | AGM, AOC-4 and MGT-7 posts |

Update the content, then the `updated` date. Never change the date without a change.

---

## 5. MARKET CHECKLIST (each wave, each market)

For every market, report:
- impressions, clicks, CTR and position against the baseline;
- the top 5 pages and top 10 queries for that market;
- what changed;
- what is next;
- the owner actions.

**Markets:**
- India (Chennai local, Tamil Nadu, all-India informational, money pages);
- US;
- UK;
- Gulf;
- Singapore (via its own prompt and KPI sheet);
- Australia and New Zealand;
- Canada;
- Europe excluding the UK;
- Asia excluding Singapore;
- the rest.

**Devices:** desktop and mobile CTR and position every month. **Search appearance:** note any type that appears.

---

## 6. CONVERSION RULES

- Keep the Call, WhatsApp and Book actions visible on mobile money pages, and keep their tracking intact.
- International pages state hours in local time. WhatsApp pre-typed text names the service and the country (`service-for-path.ts`).
- Calculators stay accurate and sourced. `calculator_lead_click` carries the result summary.
- Never add urgency tricks, fake scarcity, pop-up walls or anything that breaches ICAI.

---

## 7. DO NOT

- Chase the 10^9 or 10^12 targets with mass pages, keyword-variant pages, country or city grids, or AI-spun content.
- Add country pages under the 300-impression rule, or any page without approval where CONTEXT-PROMPT rule 10 applies.
- Retitle a page edited in the last 28 days, or judge results inside the core update.
- Publish fees, "best", "top", "leading", testimonials, client names, results, statistics, guarantees, Review or AggregateRating schema.
- Build US individual tax pages unless O-US is yes.
- Push, IndexNow, publish off-site or send anything without the owner's approval.

---

## 8. REPORT (end of every run)

1. The arithmetic answer, in two sentences (first run only).
2. **Market table:** baseline, now, change and next action for each market.
3. **What changed:** page, change, why, and the date to re-measure.
4. **Conversion:** key events and leads by market, if supplied, or what is missing.
5. **AI visibility:** panel results with dates and engines; nothing estimated.
6. **Verification:** type-check, lint, dash scan, diff check and live 200 checks, each pass or fail with its output.
7. **Commits and push status.**
8. **Owner actions and open decisions** (O-US, O-CA, O-GCC, CA sign-offs, GA4, off-site), with status.
