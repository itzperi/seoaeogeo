# 24-hour read, leaders and agent readiness: 23 November 2026

Built on, not replacing: `seo/ALL-COUNTRIES-COMPETITOR-PLAN-2026-11-21.md` (what worked in the last 7 days, how the leaders do it, country plans), `seo/WORLDWIDE-GROWTH-PLAN-2026-11-19.md`, `seo/prompts/PROMPT-NEXT-24-HOURS-2026-11-21.md` and `seo/OWNER-DECISIONS-2026-11-21.md`. Nothing here has been pushed, posted or sent.

## 1. What can and cannot be promised

- **"The best week's search volume in a single day, for every page, in every country" cannot be promised.** The best day in the 7-day export (18 Nov) had 691 impressions and 19 clicks. Matching it every day is the realistic stretch: that is 20,000 impressions and about 550 clicks a month, against about 17,500 and 329 today.
- **Sales cannot be promised.** Search brings impressions and enquiries. Sales depend on who enquires and on the firm's reply. What can be measured is enquiries by market (the Supabase `leads` table, tagged by country).
- **Nothing on a page can move rankings in one day.** Google recrawls over days and re-ranks over weeks. The November core update is still rolling out (to about 24 Nov), so read nothing against it yet.

## 2. The 23 November 24-hour queries

The export you pasted lists 66 impressions across five top-query panels, with no totals. Please also save the totals (impressions, clicks, devices, countries) to `seo/gsc/24h-2026-11-23/` so it can be compared with the 21 Nov day (667 impressions, 16 clicks).

| Theme | Impressions in the list | Share | Queries | Page that answers it |
|---|---|---|---|---|
| Part-time, shared, virtual CFO | 31 | 47% | part time cfo for hire (6), part time cfo services (4), hire a part time cfo (4), shared cfo services (3), part time cfo firm (3), cfo services in chennai (2), virtual cfo services in chennai (2), online cfo services, virtual cfo small business, cfo services for small business, hire a virtual cfo, virtual cfo chennai, virtual cfo near me, part time cfo service | `/virtual-cfo-services` (position 34.5 on 21 Nov, up from 55.7) |
| US outsourcing and US filing | 9 | 14% | tax outsourcing, accounting outsourcing, outsourced accounting services india, tax preparation outsourcing, us tax filing from india, us tax filing services in india, us tax filing in india, nonresident alien tax preparation, tax for nri in usa | `/outsourced-accounting-for-cpa-firms`, `/nri-tax-services-usa`. The filing-for-individuals queries are not a service the firm offers (decision O-US) |
| NRI Gulf and NRI tools | 9 | 14% | tax for nri in qatar, saudi arabia, kuwait and bahrain; nri investment from saudi arabia; nri days calculator; nri status calculator; nri income tax calculator; nri taxation services | `/nri-tax-services-gulf`, the two NRI tools |
| Foreign entry and compliance | 4 | 6% | foreign company registration india, foreign investment compliance india, form 3ceb transfer pricing, mca enquire fees | `/company-registration-india-for-foreigners`, `/fema-rbi-compliance`, the Form 3CEB guide, the government-fee calculator |
| Chennai and Tamil Nadu | 8 | 12% | gstat chennai, joint development agreement stamp duty, partnership firm registration, roc coimbatore, tds interest calculator (2), cs firms in chennai, ca firms in chennai for articleship (2) | existing guides and tools (`gst-appellate-tribunal-gstat-explained`, `joint-development-agreement-tax-chennai`, `/career`) |
| Other | 5 | 8% | 07307 bookkeeping services (a US ZIP code), and three non-business phrases | `/outsourced-bookkeeping-usa`; the rest is noise |

**What it says:**
1. **The CFO cluster is half the demand and every query has the same shape: "hire", "for hire", "near me", "Chennai", "small business".** That is buying intent, not research. The page that answers it is already moving (55.7, 47.1, 34.5 across three exports).
2. **Every theme above already has a page.** The data does not call for a new service or country page, and the doorway rule would forbid one.
3. **The US filing queries are the one mismatch.** They need the owner's decision (O-US), not copy.
4. **Gulf country queries are one impression each.** That is the signal for the Gulf FAQ plan, not a new page per country (O-GCC).

## 3. What worked in the last 7 days, and what to repeat each day

From `seo/gsc/7d-2026-11-21/`: the weekday peaks (13, 17 and 18 Nov) gave 15 to 19 clicks, and weekends 5 to 6. Clicks came from three things:

| What worked | Evidence | Repeat by |
|---|---|---|
| **Brand and homepage** | Homepage 25 clicks at 6.3% CTR, position 7.2 | Keep brand queries safe: unchanged title, GBP post cadence, consistent name, address and phone |
| **Question-led Tamil Nadu and Chennai guides at positions 3 to 7** | ROC Chennai vs Coimbatore (192 impressions, 6 clicks, position 4.5), how to choose a CA in Chennai (65, 3, 10.7), SPICe+ explained (107, 2, 5.0), stamp duty for incorporation (46, 1, 5.6) | One new specific guide at a time on an "X vs Y", "how to choose" or "what does it cost in the state" question, each with a short answer first, an official source list and links to the money page. The CFO cluster below is the next one |
| **Hubs with a clear intent** | NRI hub 3 clicks at 10% CTR; audit and assurance 3 at 21% | Keep hubs plain and answer-first; add the verified Gulf FAQs in Wave 2 (from 15 Dec) |

**What did not work:** impressions at positions 40 to 60 with no clicks (virtual CFO before the rewrite, foreign entry, US filing). Those move with authority, intent fit and time, not with more copy.

## 4. Agent-readiness and AI-citation audit (live site, 23 Nov 2026)

The `seo-agentic` helper scripts are not installed on this machine, and the PageSpeed API returned 429 (daily quota, as noted in `CONTEXT-PROMPT.md`). So **no Lighthouse Agentic Browsing fraction was measured**. These are direct checks with `curl`:

| Check | Result | Priority |
|---|---|---|
| Content in the raw HTML (no JavaScript needed) | `/virtual-cfo-services` returns about 5,500 words and one H1 in the first response | Pass |
| Unknown URLs | A random path returns a real 404 | Pass |
| `robots.txt` | One deliberate group per bot, all allowed: Googlebot, Bingbot, Applebot, GPTBot, ChatGPT-User, OAI-SearchBot, PerplexityBot, Perplexity-User, ClaudeBot, Claude-SearchBot, Claude-User, anthropic-ai, Google-Extended, CCBot, Applebot-Extended. Sitemap listed | Pass. See the policy question below |
| Content-Signal | Not set | P1, needs the owner's policy |
| `llms.txt` and `llms-full.txt` | Both 200 and plain text. The four Singapore guide lines are held until each guide is published (none are listed today) | Pass |
| Markdown copies | `/md/<slug>` returns 200 as `text/markdown`; `Accept: text/markdown` on the HTML URL still returns HTML | Pass (optional layer) |
| `ai-catalog.json`, API catalog, agent card, MCP card | All 404 | None needed: the site runs no APIs or agent endpoints |
| `/admin` | Returns 200 with `noindex, nofollow`; `/api/leads` returns 405 to GET | Low: confirm in code that admin data needs a login on the server, not only in the page |
| WebMCP tools | None registered | P3. The contact and consultation forms are the only candidates, and they send enquiries, so any tool would need a human confirmation step |

**Policy question for the owner (O-AI-TRAIN, new):** `robots.txt` currently allows every AI training crawler (GPTBot, CCBot, Google-Extended, anthropic-ai, Applebot-Extended) as well as the search and user-triggered ones. That helps being cited. It also lets models train on the site. Decide **allow all (current)** or **allow search and user agents, block training**, and the Content-Signal line can then be added to match. Nothing changes until you answer. None of this affects Google Search.

## 5. What the leaders do for the CFO and NRI searches (search results, 23 Nov 2026)

These are the pages that appear for "part time CFO services India" and for Gulf NRI tax. They were looked at as a SERP and not crawled, so treat them as leads.

| Search | Who appears | The mechanism to copy (never the words or claims) |
|---|---|---|
| Part-time CFO | vakilsearch.com, indiafilings.com, kanakkupillai.com, pkcindia.com, aiaccountant.com, caclubindia.com guide, india-briefing.com, tallysolutions.com, an ICAI WIRC publication, IndiaMART category pages | Guides that define the term in two sentences, compare the options in a table, list deliverables and say how to choose. The WIRC publication is the only regulator-adjacent source, so cite it |
| Gulf NRI tax | savetaxs.com (one page per country), cleartax.in, dineshaarjav.com, eztax.in, beaconfiling.com, visaverge.com | Treaty and residence-certificate detail by country, with the July deadline and Form 10F. One of the results had conflicting statements on Bahrain, which is why the Bahrain claim was corrected on 21 Nov |

**What to avoid, as before:** published fees and ranges (several CFO pages quote monthly or annual amounts), ratings, "No. 1", client logos, city-swap pages. The rules are in `seo/CONTEXT-PROMPT.md` section 3.

**Where the firm can beat them:** a named CA who signs each page (the leaders show one), an official-source list on every page, and dated updates when Indian law changes. Those are free to copy, and the review step is the owner's (O-REVIEW-SIGNOFF).

## 6. What to do, by day

### Today and tomorrow (no copy risk)
1. **Owner: URL Inspection, Request indexing** for the 10 URLs in `seo/progress/2026-11-21-24h-sprint.md` section B, then `/nri-tax-services-gulf`. Note each "Last crawl" date.
2. **Owner: publish the three off-site drafts** already prepared (GBP post, LinkedIn article, Quora answer, sprint sheet section D).
3. **Owner: answer the open decisions** that unlock the most demand: O-US (US filing), O-AI-TRAIN (new), O-REVIEW-SIGNOFF (CA review of the top money pages).
4. **Owner: save the 23 Nov totals** (impressions, clicks, devices, countries) next to the queries, and the per-page view for `/virtual-cfo-services`, so the CFO theme can be tracked by page.
5. **Agent, with approval:** one new supporting guide for the CFO cluster (below). A new post does not touch the 28-day rule for existing pages.

### The CFO cluster guide (recommended next build)
- **Working title:** "Part-time, shared, fractional and virtual CFO: what each one means and which to hire" (slug `part-time-vs-shared-vs-virtual-cfo`), 2,000 to 3,000 words.
- **Why now:** 47% of today's listed demand; the plan scheduled it for January only because `/virtual-cfo-services` was edited on 16 Nov. A separate post does not change that page, and it gives the page an authoritative internal link.
- **Shape:** 40 to 60-word answer under each question H2; a neutral comparison table (in-house, part-time, shared, virtual, accountant) with no money columns; a "what a CFO reports monthly" table; official sources (ICAI WIRC publication, Companies Act section 203 on key managerial personnel, verified); 6 to 9 FAQs; link to `/virtual-cfo-services`, `/blog/what-virtual-cfo-reviews-monthly` and the bookkeeping page; CA review sheet like the Singapore guides.
- **Publish date:** set about 10 days out, so CA Rushil can sign off first.

### From 15 December (Wave 2, unchanged)
Snippet pass on the striking-distance pages; Gulf page title and one verified FAQ per country (Qatar treaty status to be verified from the Income Tax Department before any mention); NRI calculator title aligned with "nri status / days" searches.

### From January (Wave 3, unchanged)
Virtual CFO canonical guide rebuild; foreigners and US subsidiary pages in the short-answer-plus-tables format; UK and UAE clusters; DTAA withholding lookup tool.

## 7. Measure

| When | What | Compare with |
|---|---|---|
| 24 Nov | Core update finishes. Save a fresh 24-hour export with totals | 21 Nov: 667 impressions, 16 clicks, mobile CTR 4.27% |
| Every 28 days | CFO theme impressions, clicks and position; `/virtual-cfo-services` position | 55.7 (52-day), 47.1, 34.5 (21 Nov) |
| Every 28 days | Enquiries by country from `leads` | The owner's own count; no benchmark yet |
| Monthly | AI prompt panel in `seo/AI-VISIBILITY-LOG.md`, run signed in | Not measured yet |

Never judge on one day. A normal daily swing is about 20% either way.
