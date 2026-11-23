# Indexing, trending pages and the US, UK, UAE and Singapore plan: 23 November 2026

Data saved in `seo/gsc/28d-2026-11-23/` (Performance, last 28 days to 21 Nov) and `seo/gsc/coverage-2026-11-23/` (Page indexing). Builds on `seo/ALL-COUNTRIES-COMPETITOR-PLAN-2026-11-21.md` and `seo/progress/2026-11-23-24h-strategy-and-agent-readiness.md`. The code changes in section 3 are committed locally and not pushed.

## 1. Targets, said plainly

- **10,000 times and 100,000,000 times are not possible.** The site had 17,559 impressions in 28 days. 10,000 times that is 176 million, and 100,000,000 times is about 1.8 trillion, in one month, for one CA firm. Mass-produced pages to chase it would get the site demoted, so I did not try.
- **The country shares you asked for are possible, over months.** They need the foreign countries to grow several times over while India stays level:

| Market | Impressions in 28 days now | Share now | Your target | Impressions needed | Multiple of today |
|---|---|---|---|---|---|
| United States | 633 | 3.6% | 7 to 10% | about 2,000 | about 3× |
| United Kingdom | 393 | 2.2% | 7 to 10% | about 2,000 | about 5× |
| Singapore | 185 | 1.1% | 7 to 10% | about 2,000 | about 11× |
| UAE | 246 | 1.4% | 5% | about 1,200 | about 5× |
| India | 15,392 | 87.7% | falls to about 65% | stays level | 1× |

(Assumes India stays near 15,400, so the total grows to about 23,700. These are goals for 6 to 12 months, not for this update. Position and links decide them.)

- **5 to 10 enquiries a day from each of the US, UK and UAE is not an organic-search outcome today.** See section 6.

## 2. The two "Performance" files are the same file

The two zips named (1) and (2) are byte-identical: both are the 28-day export with no comparison columns, so they hold no trending-up or trending-down split. If you wanted the compare view, export it again with **Compare** turned on (last 28 days vs the previous 28 days), Pages tab, and save it next to these.

To still answer the question, I compared each page's daily impressions in the last 28 days with its average over the 52 days to 17 Nov (`seo/gsc/world-2026-11-17/`). The windows overlap, so read this as direction, not a statistic.

| Trending up (impressions a day, then to now; position) | Reading |
|---|---|
| Homepage 41.9 to 59.2 (position 6.8); 109 clicks | Brand demand is the engine. Protect the title and the name, address and phone |
| `/partnership-firm-registration-chennai` 22.1 to 31.9 (6.75) | Page 1, CTR is the lever (from 15 Dec) |
| `/blog/roc-chennai-vs-roc-coimbatore` 13.1 to 22.9 (4.35); 14 clicks | The best question-led guide: copy its shape |
| `/virtual-cfo-services` 44.6 to 53.9; position 55.7 to 52.5 (34.5 on the 21 Nov day) | The biggest theme; moving slowly |
| `/blog/government-fees-company-registration` 11.7 to 22.4 (15.5) | Depth and links |
| `/accounting-outsourcing-chennai` 8.9 to 16.4 (39) and `/nri-tax-services-gulf` 5.2 to 12.3 (8.4) | Growing from a low base |

| Trending down | Reading |
|---|---|
| `/blog/form-3ceb-due-date-applicability` 49.7 to 36.1 | Seasonal: the 31 October deadline has passed. It returns in August 2027 |
| `/gst-registration-chennai`, `/bookkeeping-services-chennai` (positions 34 and 27, slipping) | Authority and intent fit; judge after the core update |
| Everything else in the "down" list moved by less than 0.5 impressions a day | Noise |

## 3. Pages that are not indexed

**The coverage export** (chart to 16 Nov) shows 53 pages not indexed: **51 "Discovered, currently not indexed"**, 1 "Crawled, currently not indexed" and 1 "Not found (404)". Indexed pages fell from 156 to 130 on 14 Nov. The export gives counts, not URLs.

**What I checked on the site:** I fetched the 87 sitemap URLs that had no impressions in 28 days. **All 87 return 200, none has a noindex tag, and all point to themselves as canonical.** So this is not a technical block. "Discovered, not indexed" means Google knows the URL and has chosen not to fetch it yet. The usual causes are low authority, few internal links and many near-identical pages.

**Where the 87 sit (and the likely 51):**

| Group | Pages with no impressions | Read |
|---|---|---|
| Blog posts | 48 | Newest posts; they gain impressions as they are crawled |
| Tamil Nadu city clones: `/company-registration-<city>` (15), `/gst-litigation-<city>`, `/income-tax-consultant-<city>` | about 20 | Same template, 1 to 2 inbound links each. The most likely group to stay unindexed |
| **Outsourced bookkeeping pages: the hub plus USA, UK, Singapore, Australia, UAE** | 6 | **The markets you want, with 0 inbound links from other pages.** Fixed in code below |
| Area pages: Mogappair, Aminjikarai, Shenoy Nagar, Villivakkam | 4 | Linked from `/locations` only |
| Tools and others | about 9 | Two calculators, `/how-we-work`, `/locations`, NRI property TDS pages |

**Fixed in code (committed locally, awaiting your push approval):** each of the six bookkeeping pages now gets a crawlable link from the pages a visitor would use next. These are the "Which related services might you need?" lists.

| Page that now links | Links to |
|---|---|
| India subsidiary for US companies, and Outsourced accounting for CPA firms | `/outsourced-bookkeeping-usa` |
| India subsidiary for UK companies, and Outsourced accounting for UK accountants | `/outsourced-bookkeeping-uk` |
| India subsidiary for Singapore companies | `/outsourced-bookkeeping-singapore` |
| India subsidiary for UAE companies | `/outsourced-bookkeeping-uae` |
| Accounting outsourcing in Chennai, India subsidiary compliance and CFO, Company registration for foreigners | `/outsourced-bookkeeping-services` (the hub, which links to the market pages and Australia) |

Type-check and ESLint pass. No title, description or body copy changed.

**What I did not do, and why:**
- **City clones:** adding links will not fix thin, repeated pages. Whether to merge, noindex or deepen them is your call (delete or merge needs your yes). Recommended: keep the 5 cities with real search demand, deepen those, and noindex the rest until they carry 600 unique words each.
- **Mass resubmission:** Google ignores repeated bulk requests. IndexNow only reaches Bing.

**What you need to do in Search Console** (I cannot sign in):
1. **Page indexing, "Discovered, currently not indexed", then export** the URL list, and the "Not found (404)" row. Send both so I can name the 51 and the one broken URL.
2. **URL Inspection, Request indexing**, 10 a day, in this order: `/outsourced-bookkeeping-usa`, `/outsourced-bookkeeping-uk`, `/outsourced-bookkeeping-singapore`, `/outsourced-bookkeeping-uae`, `/outsourced-bookkeeping-services`, `/outsourced-bookkeeping-australia`, `/nri-property-sale-tds-chennai`, then the 10 URLs in `seo/progress/2026-11-21-24h-sprint.md`.
3. After my push goes live, **resubmit the sitemap**.
4. Expect weeks, not days. The November core update is still settling.

## 4. What the leaders do in each market (search results, 23 Nov 2026)

These are leads from search results, not crawled audits.

| Market | Who appears | What it tells us |
|---|---|---|
| **UAE and Dubai, virtual CFO** | Toptal, Clutch ("Top Fractional CFO Services in Dubai"), Upwork and Fiverr, CFO Ventures, Crest Management, IMC, Bestax, RSM UAE | The results are directories and marketplaces plus Dubai-office firms. A Chennai firm cannot win "CFO Dubai". It can serve an India subsidiary or an offshore finance team |
| **US and UK startups, offshore CFO** | LedgersCFO (US-India startups: subsidiary accounting, FEMA, transfer pricing, consolidated reporting), VJM Global (UK-backed startups in India), Treelife, my-cpe.com, taxaj.com | The cross-border niche is occupied by a few specialists. The page they all have is "finance function for a foreign-owned startup in India" |
| **Singapore** | Singapore fractional-CFO freelancers; VJM Global and Beacon Filing on India-side questions | Same as the 19 Nov Singapore plan: India-side questions only |
| **Foreign-entry brands** | indiafilings.com, kanakkupillai.com, vakilsearch.com | They publish city pages and, like us, `llms.txt`. We do not copy city-swap pages (doorway rule) or fee tables (ICAI) |

**Where this firm can win:** India-side work for foreign-owned startups, in English and Tamil, with a named CA. The audience is a US, UK, UAE or Singapore founder who already has, or is opening, an Indian company.

## 5. Virtual CFO for startups across the US, UK, UAE, Singapore and Canada

One page per intent, not one per country (the rule). What exists and what to add:

| Intent | Page | Status |
|---|---|---|
| Part-time, shared, virtual CFO in India (47% of the 23 Nov list) | `/virtual-cfo-services` | Rewritten 16 Nov; position 55.7 to 52.5; rebuild is Wave 3 |
| Foreign-owned subsidiary needing an India-side CFO | `/india-subsidiary-compliance-cfo`, and the "foreign-owned subsidiaries" section of the virtual CFO page | Exists |
| Which CFO model to hire | New guide, `part-time-vs-shared-vs-virtual-cfo` | **Recommended next build** (see the 23 Nov sheet) |
| **Finance function for a foreign-owned startup in India: MIS, investor reporting, FEMA and transfer pricing from India** | New guide, `cfo-for-foreign-owned-startup-india` | **New recommendation.** One guide serving US, UK, UAE, Singapore and Canada parents, with a short section per parent country only where Indian rules differ (treaty and remittance paperwork). Indian law only; the parent's home advisers stay with the client |
| Group reporting to the parent | Section of the guide above | Not a separate page |

Both guides would need 40 to 60-word answers under each question H2, a named-CA review sheet, official sources, no fees and no superlatives.

## 6. Enquiries: what 5 to 10 a day would take

The only inputs I have are in the exports. The enquiry rate is an **assumption**: the leads table was not provided, so replace it with your real figure.

- **Today:** the US gives about 0.6 clicks a day (17 in 28 days), the UK 0.5, the UAE 0.1.
- **To reach 5 enquiries a day from one market,** at an assumed 3% of clicks becoming enquiries, you need about 170 clicks a day from that market. At a 2.5% click rate, that is about 6,700 impressions a day, or about 190,000 in 28 days: roughly **300 times** the current US figure.
- **So organic search alone will not deliver this in 2026.** In 6 to 12 months, a few enquiries a week from each market is a reasonable target if the plan above works.
- **What actually brings cross-border B2B enquiries,** and what is allowed: referral relationships with local advisers (no fee sharing), the CA's LinkedIn articles, speaking at founder and alumni groups, unpaid directory listings, and answers on public forums. Paid ads, "free" offers and cold outreach raise ICAI advertising and solicitation questions, so ask the owner before any of them.

## 7. What I need from you

| Item | What | Why |
|---|---|---|
| 1 | Approve the push of the internal-link change | Gets the six bookkeeping pages linked and crawlable |
| 2 | Export the "Discovered, currently not indexed" URL list and the 404 URL | To name the 51 pages and fix the 404 |
| 3 | Decide on the Tamil Nadu city clones (keep 5, deepen, noindex the rest) | The likely bulk of the unindexed set |
| 4 | Export Performance with **Compare** on (28 days vs the previous 28), Pages | The two files sent were identical |
| 5 | Send leads by country (Supabase `leads`) for the last 28 days | To replace the enquiry-rate assumption |
| 6 | Say yes to the two CFO guides (section 5) | The largest demand theme |
| 7 | O-US, O-AI-TRAIN and O-REVIEW-SIGNOFF from the 23 Nov sheet | Still open |
