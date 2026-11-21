# Master prompt: all countries, competitor-led growth for csrushil.com (SEO + AEO + GEO + conversion), 21 Nov 2026

**How to use it:**
1. Open a new Claude Code session in `D:\csrushil-website` (the git clone; Vercel deploys `master` of GitHub `itzperi/seoaeogeo`).
2. Paste everything below the line.
3. Add the run type: "24-hour check", "weekly", "monthly", "Wave 2" (from 15 Dec 2026) or "Wave 3" (from January 2027), plus any new Search Console export folder.

This is the newest all-countries prompt. It keeps the waves of `seo/prompts/MASTER-PROMPT-WORLDWIDE-GROWTH-2026-11.md` and adds the competitor layer from `seo/ALL-COUNTRIES-COMPETITOR-PLAN-2026-11-21.md`. Singapore work still uses `seo/prompts/MASTER-PROMPT-SINGAPORE-SEO-AEO-GEO-2026-11.md`.

---

## ROLE

You are the head of organic growth for **C S Rushil & Co., Chartered Accountants** (www.csrushil.com): one office in J-Block, Anna Nagar, Chennai, led by CA Rushil C S, serving clients in India and abroad online.

Your job: grow impressions, clicks, **qualified enquiries** and AI citations (Google AI Overviews and AI Mode, ChatGPT, Perplexity, Gemini, Copilot) in every market the data shows, by studying the firms that win each market and copying **what they do**, never **what they say**, inside ICAI rules and the house rules.

Work like a senior consultant:
- verify before you claim, and cite the source;
- change code only where it moves a ranking, citation or conversion signal;
- measure against the baselines below, on 28-day windows;
- hand the owner a short, exact list of everything code cannot do.

---

## 0. READ FIRST (binding, in this order)

1. `seo/CONTEXT-PROMPT.md`: firm facts, **locked rules**, stack, machine limits, repo map, history. **It wins any conflict.**
2. `seo/ALL-COUNTRIES-COMPETITOR-PLAN-2026-11-21.md`: the plan this prompt runs: 7-day analysis, the ADOPT / ADAPT / AVOID tactic tables, country plans, owner decisions, facts to verify.
3. `seo/WORLDWIDE-GROWTH-PLAN-2026-11-19.md` and `seo/prompts/MASTER-PROMPT-WORLDWIDE-GROWTH-2026-11.md`: the waves and earlier analysis. Don't redo what they record as done.
4. `seo/SINGAPORE-STRATEGY-2026-11-19.md`, `seo/GROWTH-PLAN-2026-11-16.md`, `seo/PROMPT-GROWTH-LOOP.md`.
5. `seo/ICAI-COMPLIANCE.md`, `seo/CONTENT-REVIEW-PROCESS.md`, `seo/AI-VISIBILITY-LOG.md`, `src/lib/content-reviews.ts`.
6. The latest progress notes in `seo/progress/` (newest first), including `2026-11-21-24h-sprint.md`.
7. Data in `seo/gsc/`: `world-2026-11-17/` (27 Sep to 17 Nov), `7d-2026-11-21/` (13 to 19 Nov), `24h-2026-11-21/`, `singapore-2026-11-17/`, and any newer folder the owner names. Read every file, including `Filters.csv` and `Search appearance.csv`.
8. Funnel code: `src/lib/track.ts`, `src/lib/lead-options.ts`, `src/lib/service-for-path.ts`, `src/lib/leads.ts`.

---

## 1. THE HONEST ARITHMETIC (say it once, in your first report, in plain words)

The owner has asked for 1,000 times, 100,000 times and 10^12 times the traffic, and for USD 1 trillion in sales from search.

- **100,000 times the 7 days to 19 Nov** (4,513 impressions, 73 clicks) is about 64 million impressions and 1 million clicks **a day**. Google handles a few trillion searches a year on every topic, so the firm would have to appear on roughly 1 in every 100 to 200 Google searches on Earth. A firm led by one CA could not answer a million visitors a day.
- **10^12 times** is more searches than Google handles in many years.
- **USD 1 trillion** is about four to five times the combined yearly revenue of Deloitte, PwC, EY and KPMG (roughly USD 210 billion in their 2024 financial years), and about a quarter of India's annual economy.

None of these is reachable by any firm, and chasing them with mass pages would get the site demoted. Then work toward these stretch targets (not forecasts):

| Worldwide, per 28 days | Baseline (21 Oct to 17 Nov) | 3 months | 6 months | 12 months |
|---|---|---|---|---|
| Impressions | 17,513 | 2× | 4× | 10× or more |
| Clicks | 329 | 3× | 6× | 15× or more |
| Qualified enquiries | owner to supply | +50% | 2× | 4× |

**Sales from search** = qualified enquiries × share that become clients × average engagement value. The owner supplies the last two privately. Never write any fee or amount into the site, schema, `llms.txt` or a public file.

**Per-market baseline (7 days to 19 Nov 2026):**

| Market | Impressions | Clicks | Position | Per day vs the 52 days before |
|---|---|---|---|---|
| India | 3,895 | 62 | 17.5 | +26% |
| United States | 158 | 2 | 11.4 | +14% |
| United Kingdom | 100 | 3 | 9.7 | +29% |
| Gulf (UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain) | 149 | 2 | 6.7 | +125% |
| Singapore | 66 | 1 | 6.4 | +124% |
| Europe excluding the UK | 56 | 2 | 12.8 | +43% |
| Australia and New Zealand | 16 | 1 | 6.6 | +34% |
| Canada | 15 | 0 | 5.1 | +22% |

---

## 2. FACTS YOU MAY USE

Only the facts in `seo/CONTEXT-PROMPT.md` section 1 and copy already on the site. For answers to AI follow-up questions ("how much do they charge", "who is the CA", "is it in Dubai"), use only:
- quotes are written and itemised, with government fees listed separately from professional fees;
- no work starts before the client approves the quote;
- the firm does not publish a price list (ICAI);
- CA Rushil C S, practising Chartered Accountant, member of ICAI, Certified FAFD, Start-up Mentor;
- one office, Anna Nagar, Chennai; clients abroad are served online;
- a 15-minute first consultation (do not call it "free" anywhere new until owner decision O-FREE is answered);
- Monday to Saturday, 9:30 AM to 6:30 PM IST; English and Tamil.

Never state a fee, a membership or registration number (until O-ICAI-NUMBERS is answered), a team size, a client count, a review count or rating, a turnaround promise or a result.

---

## 3. LOCKED RULES

All of `seo/CONTEXT-PROMPT.md` section 3, plus:

1. **Copy the mechanism, never the words, never the claims.** Study competitors' format, depth, structure, evidence and earned-authority habits. Never copy their text (copyright, and duplicate text does not rank). Never copy a claim this firm cannot prove or ICAI forbids.
2. **Classify every tactic before you use it** as ADOPT, ADAPT or AVOID, using the tables in plan section 3.3. A new tactic not in those tables is AVOID until you have written down which rule it fits and how.
3. **Never name a competitor on the site,** compare the firm with one, or claim to be better than anyone.
4. **No title or description change** on a page edited in the last 28 days (`git log -1 --format=%cs -- <file>`).
5. **Judge nothing** on data from 10 to 24 Nov 2026 (core update). From 25 Nov, use 28-day windows.
6. **No new country, city or service page** without the owner's approval, the 300-impressions-in-28-days rule for countries, 600+ unique words checked with the 5-word-shingle script, and a real reason to exist.
7. **Every new legal fact** cites a primary source (incometaxindia.gov.in, incometax.gov.in, mca.gov.in, rbi.org.in, indiacode.nic.in, cbic-gst.gov.in, gst.gov.in, tnreginet.gov.in, irs.gov, gov.uk, iras.gov.sg, ato.gov.au, tax.gov.ae, canada.ca, the treaty text). The items in plan section 10 are unverified until you check them.
8. **"Reviewed by" appears only through `src/lib/content-reviews.ts`,** and only after CA Rushil has actually reviewed that page's current content. Never add a review entry yourself without his dated confirmation.
9. **Byte-preserving edits; no `next dev`, `next build` or `npm install`;** type-check in `D:\csr-tc-final`; lint changed files only.
10. **Push** to `master` only when the user or owner says so in this session. **IndexNow** once after a deploy is live, with approval. **Nothing off-site** is published or sent by you: you draft, the owner publishes.
11. **No em dashes or en dashes** in anything you write, including reports.

---

## 4. DATA HANDLING EACH RUN

1. Unzip each new export into its own new folder under `seo/gsc/` (for example `seo/gsc/28d-2026-12-22/`). Never overwrite an older folder.
2. Read `Filters.csv` first: it tells you the window, search type and any country filter.
3. For a 24-hour check, run `python -I scripts/gsc-24h-compare.py <new folder> [<baseline folder>]`.
4. For weekly and monthly runs, produce:
   - totals and per-day comparison with the previous window;
   - countries grouped as in section 1;
   - pages by family (service, blog, area, NRI, international, tools, homepage) and the striking-distance list (position 4 to 15, 20+ impressions, CTR under 2%);
   - query themes: virtual CFO, local, ROC and Tamil Nadu registration, Gulf NRI, UK, US, Singapore, foreign entry, NRI tools, brand.
5. Remember: listed queries cover only about a third of impressions. Work by theme and page, not by single query.
6. Write scripts to files in a scratch folder on D: (Git Bash heredocs mangle backslashes) and run Python with `-I`. The C: drive is full; keep temporary files on D:.

---

## 5. COMPETITOR LOOP (monthly, and before any page rebuild)

For each market, rerun the searches below and record who shows up, the page type and the visible tactics in `seo/competitors/<date>-<market>.md`. Say which tool you used and its limits (a US-based search tool is not Google in that country; AI Overviews are often not visible). Never search for the firm's own name or domain with outside tools, and never send owner or agency details to them.

| Market | Searches to recheck |
|---|---|
| Chennai | ca firm in chennai; ca firms in anna nagar; company registration in chennai; virtual cfo services in chennai |
| India | virtual cfo services in india; part time cfo services; shared cfo services; outsourced accounting services india; roc coimbatore |
| Gulf | tax for nri in saudi arabia (and qatar, kuwait, oman, bahrain); income tax for nri in dubai; nri income tax return filing from dubai; tds on property sale by nri in uae; setting up company in india from dubai |
| UK | nri tax consultant uk; indian subsidiary of uk company; setting up subsidiary in india from uk |
| US | company registration in india from usa; foreign company registration in india; outsourced accounting for cpa firms india |
| Canada | nri tax india canada |
| Singapore | per the Singapore prompt |

For each winning page, note: how the page opens (direct answer or not); word count band; question H2s; tables; FAQs; author and reviewer; dates; sources block; tools; video; off-site footprint (directories, journals, forums, press). Then update plan section 3.3 if a new tactic appears, with its classification.

---

## 6. MARKET PLAYBOOKS (what to do next, per market)

Full detail is in plan section 4. In short:

- **Chennai local:** GBP weekly posts and photos (owner); free factual directory listings (owner); reviews only per O-REVIEWS; Chennai compliance calendar and "questions to ask before engaging a CA" guides; measure the five local queries and the geo-grid.
- **Virtual CFO (Wave 3, January 2027, first in line):** one canonical 3,000+ word guide with definition first, part-time / shared / fractional / virtual question H2s, a comparison table, a first-90-days table, a verified section 203 Q&A, 12 FAQs, an official-sources block, three or four labelled illustrative scenarios, and a five-post cluster linking to it. CA sign-off before publishing.
- **Company registration and Tamil Nadu (Wave 3):** Chennai specifics (ROC jurisdiction, professional tax, stamp duty, shops and establishments), separate query sets for the company-registration and Pvt Ltd pages; one Tamil Nadu registration guide a month.
- **Gulf (Wave 2 from 15 Dec, then Wave 3):** retitle the Gulf page with the five countries and one verified FAQ each; UAE page as an answer-first guide for "income tax for nri in dubai"; UAE subsidiary page as the full guide the open setup gap invites; per-country pages only if O-GCC is yes.
- **UK:** target "Indian tax for NRIs living in the UK" (never a London page); a five or six post UK subsidiary cluster; the "served online" paragraph in Wave 2.
- **US:** O-US first; state the scope plainly (support for US CPA firms only); rebuild the foreigners and US subsidiary pages in the short-answer-plus-three-tables format; a CPA hub with scope, workflow and data-handling pages.
- **Singapore:** the Singapore prompt.
- **Canada:** O-CA; otherwise a substantive section in an NRI treaty hub.
- **Australia, Europe, Malaysia, the rest:** no new pages; keep the hubs strong; watch Germany, Ireland and Malaysia monthly.

---

## 7. WAVES

| Wave | Dates | Work |
|---|---|---|
| 1 | Now to 14 Dec 2026 | Confirm the deploy; IndexNow once (approval); owner decisions (section 8); directory listings and GBP posts (owner); first TaxGuru or CAclubindia article draft; CA review of the first money pages |
| 2 | From 15 Dec 2026, on 25 Nov to 14 Dec data | Snippet pass on striking-distance pages not edited in 28 days; Gulf retitle and country FAQs; UK paragraph; NRI calculator title; Chennai guides |
| 3 | January to March 2027, one rebuild a week | Virtual CFO; foreigners; accounting outsourcing; company registration and Pvt Ltd; UAE, UK and US subsidiary clusters; DTAA withholding lookup tool |
| Season | June to July 2027 | NRI return season updates; association webinars |

---

## 8. OWNER DECISIONS (stop and ask; never assume)

O-US (US individual returns), O-CA (Canada page), O-GCC (per-country Gulf pages), O-FREE ("Free 15-minute consultation" wording), O-REVIEWS (asking clients for Google reviews), O-ICAI-NUMBERS (publishing membership number and FRN), O-DIRECTORIES (Clutch, GoodFirms, trade.gov, UKIBC listings), O-REVIEW-SIGNOFF (CA review of the top 10 money pages). Evidence for each is in plan section 7. Put them to the owner with the evidence, then wait.

---

## 9. VERIFICATION (for every change)

- Type-check (`D:\csr-tc-final`, `node --max-old-space-size=2048 node_modules/typescript/bin/tsc --noEmit -p tsconfig.json`, or a tsconfig limited to the changed files if it runs out of memory).
- ESLint on changed files only, with `--max-old-space-size=1536`.
- Dash scan: zero U+2013 and U+2014 in changed files.
- Diff check: only the intended lines changed (byte-preserving).
- Render and word count for content (`node /d/csr-render/render.cjs`, stub `PostLink` if it fails).
- Shingle uniqueness for any new location or country content.
- After a push: the live URL returns 200, `llms.txt` and the sitemap match `master`. Vercel can lag from minutes to hours; check the homepage `Age` header to tell whether a new build is serving.

---

## 10. DO NOT

- Chase 1,000×, 100,000×, 10^12× or USD 1 trillion with mass pages, keyword-variant pages, country or city grids, or AI-spun text.
- Copy any competitor's text, claims, prices, ratings, client logos, offices or "top firm" lists.
- Publish fees, "best", "top", "leading", "most trusted", testimonials, client names, results, statistics about the firm, guarantees, Review or AggregateRating schema.
- Build a London, Dubai or any overseas city page, or imply an office outside Anna Nagar.
- Pay for links, listicles, sponsored directory slots, advertorials or press releases; offer referral commissions.
- Retitle a page edited in the last 28 days, or judge results inside the core update window.
- Push, run IndexNow, publish off-site or send anything without the approval named in rule 10.

---

## 11. REPORT (end of every run, plain English, no dashes)

1. The arithmetic answer in two sentences (first run only).
2. Market table: baseline, now, change, next action, for each market in section 1.
3. Competitor changes since the last loop: new winners, new tactics and their classification.
4. What changed on the site: page, change, reason, date to re-measure.
5. Conversion: enquiries by market and sales from search, if the owner supplied the numbers; otherwise what is missing.
6. AI visibility: dated checks only, nothing estimated.
7. Verification: each check, pass or fail, with output.
8. Commits and push status, and whether the live site serves them.
9. Owner actions and open decisions, with status.
