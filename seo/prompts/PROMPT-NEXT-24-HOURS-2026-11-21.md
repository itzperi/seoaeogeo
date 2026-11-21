# 24-hour sprint prompt for csrushil.com (from the "last 24 hours" export of 21 Nov 2026)

**How to use it:**
1. Open Claude Code in `D:\csrushil-website`.
2. Paste everything below the line.
3. Run it once now, and again tomorrow with a fresh "last 24 hours" export saved in `seo/gsc/24h-<date>/`.

It covers what can change in one day. The month-scale work stays in:
- `seo/prompts/MASTER-PROMPT-WORLDWIDE-GROWTH-2026-11.md`
- `seo/prompts/MASTER-PROMPT-SINGAPORE-SEO-AEO-GEO-2026-11.md`

---

## ROLE

You are the organic growth engineer for **C S Rushil & Co., Chartered Accountants** (www.csrushil.com; one office in Anna Nagar, Chennai). For the next 24 hours, do every legitimate thing that can raise Google impressions and clicks, and nothing that risks the site.

**First read `seo/CONTEXT-PROMPT.md`.** Its locked rules win any conflict:
- ICAI rules;
- no invented facts;
- no fees;
- no em or en dashes;
- no doorway pages;
- byte-preserving edits;
- no `next dev`, `next build` or `npm install`;
- no push, IndexNow or off-site posting without the owner's approval.

---

## 1. Say this once, in plain words: 1,000,000,000,000 times by tomorrow is impossible

- The last 24 hours had **667 impressions**. Times 10^12, that is about **670 trillion impressions in one day**.
- Google handles a few trillion searches in a **whole year**, worldwide, for every topic. So the target is tens of thousands of times all of Google's daily searches, for one CA firm's site.
- No website can do it. Mass-produced pages would get the site demoted.

**What a good day looks like instead:**
- **Baseline:** about 625 impressions and 12 clicks a day (last 28 days).
- **Good result tomorrow:** 700 to 800 impressions and 15 to 20 clicks.
- **Next 28 days:** working toward 2× the impressions and 3× the clicks (worldwide plan targets).
- Google needs days to weeks to recrawl and re-rank. Measure on 28-day windows, and never judge on one day.

---

## 2. What the 24-hour export says (20 Nov 09:30 to 21 Nov 08:30 IST)

Data: `seo/gsc/24h-2026-11-21/`. Fresh data, so the last few hours may still fill in.

| | Impressions | Clicks | CTR | Position |
|---|---|---|---|---|
| All | 667 | 16 | 2.4% | about 12 |
| Mobile | 281 | 12 | **4.27%** | 11.4 |
| Desktop | 376 | 4 | 1.06% | 12.8 |
| India | 595 | 14 | 2.35% | 12.9 |
| UK / US / Singapore / UAE | 17 / 13 / 11 / 9 | 1 / 0 / 0 / 0 | | 6.8 / 14.7 / **2.1** / 13.6 |

**Hourly pattern:**
- Impressions peak from 10:00 to 18:00 IST (40 to 67 an hour) and fall to 0 to 10 an hour overnight.
- Clicks come between 12:00 and 23:00 IST.

**Movement against the 52-day averages** (27 Sep to 17 Nov, `seo/gsc/world-2026-11-17/`):

| Page | 52-day position | Last 24 h | Read |
|---|---|---|---|
| `/virtual-cfo-services` | 55.7 | **34.5** (65 impressions, top page) | The 16 Nov rewrite is moving it; "part time cfo" queries at 34 to 38 (were 52 to 66) |
| `/accounting-outsourcing-chennai` | 37.4 | 29.0 | Improving |
| `/partnership-firm-registration-chennai` | 7.0 | **4.4** | Improving; 56 impressions, 1 click |
| `/nri-tax-services-singapore` | 7.5 | **3.0** | Singapore work showing |
| `/nri-tax-services-usa` | 43.3 | 62.8 | Worse; watch, don't react on one day |
| `/tools/tds-interest-late-fee-calculator` (new 16 Nov) | none | 21.1, 17 impressions | New tool being tested; "interest for late payment" at 9.0 |

**Search appearance:** 1 "Translated results" impression (Google translated a result for a non-English searcher). Nothing to do.

---

## 3. Do in the next 24 hours (in this order)

### A. Make sure everything is live (code side, no approval needed)

1. `git fetch origin && git log -1 origin/master`.
2. Confirm the live site serves the latest master. The check: `https://www.csrushil.com/llms.txt` contains "## Answers to common questions about the firm" and does **not** list `/blog/india-singapore-dtaa-for-businesses`.
3. Confirm these return 200:
   - `/india-subsidiary-for-singapore-companies`
   - `/nri-tax-services-singapore`
   - `/annual-compliance-package`
   - `/virtual-cfo-services`
   - `/partnership-firm-registration-chennai`
   - `/tools/tds-interest-late-fee-calculator`
   - `/sitemap.xml`
4. If the deploy is stuck, follow CONTEXT-PROMPT section 4 (an empty commit, then the Vercel dashboard checks).

### B. Get Google to recrawl what changed (owner, 10 minutes)

Give the owner this exact list for **Search Console, then URL Inspection, then Request indexing**. The daily quota is about 10 URLs, so use this order:

1. https://www.csrushil.com/india-subsidiary-for-singapore-companies
2. https://www.csrushil.com/nri-tax-services-singapore
3. https://www.csrushil.com/virtual-cfo-services
4. https://www.csrushil.com/annual-compliance-package
5. https://www.csrushil.com/blog/form-3ceb-due-date-applicability
6. https://www.csrushil.com/fema-rbi-compliance
7. https://www.csrushil.com/transfer-pricing-audit
8. https://www.csrushil.com/india-subsidiary-compliance-cfo
9. https://www.csrushil.com/tools/tds-interest-late-fee-calculator
10. https://www.csrushil.com/tools/foreign-subsidiary-compliance-calendar

Then **Sitemaps, then resubmit** `https://www.csrushil.com/sitemap.xml`.

### C. Bing, ChatGPT search and Copilot (needs the owner's yes)

With approval, run `npm run indexnow` once. It pings every sitemap URL. Bing's index feeds ChatGPT search and Copilot.

This does not change Google Search Console numbers. Report it separately.

### D. Off-site, same day (owner publishes; you draft only)

1. **One Google Business Profile post** linking `/partnership-firm-registration-chennai` (position 4.4, rising). Use the GBP post style in `seo/GBP-POSTS-OCT-DEC-2026.md`. No fees or offers.
2. **One LinkedIn post by CA Rushil**, from `seo/singapore/offsite/linkedin-five-filings-singapore-regional-finance-teams-miss.md` (already drafted), linking `/india-subsidiary-for-singapore-companies`.
3. **One factual Reddit or Quora answer** from `seo/singapore/offsite/answer-bank.md`, with the affiliation disclosed and no link unless asked.

### E. Do NOT do today

- No title or description changes on pages edited in the last 28 days (almost all top pages were edited 13 to 21 Nov). The snippet pass is Wave 2, from 15 Dec.
- **Don't publish the four Singapore guides early.** They wait for CA Rushil's sign-off on `seo/singapore/REVIEW-*.md`; about 30 rows are still open.
- No new pages for a keyword or a country to chase impressions. No reaction to `/nri-tax-services-usa` dropping on one day of data.
- No judging anything before the November core update settles (about 24 Nov).

---

## 4. Tomorrow: measure

1. Save a fresh "last 24 hours" export to `seo/gsc/24h-<date>/`.
2. Compare it with section 2: impressions, clicks, mobile CTR, and the positions of the six pages in the movement table.
3. Write `seo/progress/<date>-24h.md` with:
   - what moved, and whether it is beyond normal daily swing (about ±20% on 600 impressions);
   - which URLs Google recrawled (URL Inspection shows "Last crawl");
   - what the owner did from steps B to D.
4. Plain English, no dashes, no claims beyond the data.
