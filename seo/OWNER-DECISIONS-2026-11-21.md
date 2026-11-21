# Owner actions and decisions, 21 November 2026

For CA Rushil C S and whoever runs the firm's accounts. Each item says what to do or decide, the evidence, and what happens after. Nothing below has been done on the owner's behalf.

## A. Do this week

| # | Action | Why | Time |
|---|---|---|---|
| A1 | **Open Vercel, then Deployments.** Look for the newest `master` commit (`792097b` or later). Report what you see: Queued, Error (send the log), Preview instead of Production (click Promote to Production), or nothing listed (reconnect the Git integration). | Production still serves the 19 Nov build. None of the pushes since 21 Nov 12:24 IST (five by the end of that day) has deployed, including a correction of a wrong legal statement (B below). Each new push should have triggered a build, which is what the "empty commit" step is for, and none did. GitHub shows no deployment records, so only the dashboard can show why. | 5 minutes |
| A2 | Once the new build is live, run `npm run indexnow` once in `D:\csrushil-website` (or tell the agent "run IndexNow" and approve it). | Bing's index feeds ChatGPT search and Copilot. The agent's attempt was blocked by its permission settings. | 1 minute |
| A3 | Search Console: request indexing for the 10 URLs in `seo/progress/2026-11-21-24h-sprint.md` section B, then for `/nri-tax-services-gulf` (corrected 21 Nov), then resubmit the sitemap. | Gets Google to recrawl changed pages sooner. | 10 minutes |
| A4 | Publish the GBP post, the LinkedIn article and the Quora answer in the sprint sheet, section D (after CA Rushil reads each). | Off-site signals; nothing is posted without you. | 30 minutes |
| A5 | Confirm the website URL was reported to ICAI within 30 days of launch. | `seo/ICAI-COMPLIANCE.md` lists it as a filing only the firm can make, and it is not recorded as done. | 2 minutes to check |

## B. Correction made on 21 Nov (for CA Rushil's information)

The Gulf NRI page said "Yes, India has a DTAA with Bahrain" and that India has a DTAA with each of the five Gulf countries it covers. The Tiruchirappalli income tax page listed Bahrain among India's tax treaties.

The Income Tax Department lists only a **Tax Information Exchange Agreement** with Bahrain (Notification No. 44/2013, in force 11 April 2013; https://incometaxindia.gov.in/DTAA/Bahrain.html). There is no comprehensive agreement page for Bahrain, while Qatar, Oman, Kuwait and the UAE each have one. So a Bahrain resident has no treaty claim in India.

Both pages were corrected (commit `e5c9eb4`): the Bahrain table row, the introduction sentence, and a note in the Form 10F document row on the Gulf page; the treaty list on the Tiruchirappalli page. Titles and descriptions were not changed. **Please confirm the corrected wording.** It goes live with the next successful deploy (A1).

## C. Decisions (answer in one line each; the agent waits for these)

| Code | Question | Evidence | Recommendation |
|---|---|---|---|
| O-FREE | The site's quote section says "Free 15-minute consultation" and "Book the free 15-minute consultation". Keep, reword or remove? | Both competitor research passes flagged "free consultation" offers as possible solicitation under ICAI's advertising rules. The worldwide master prompt already says never to call it free in AI answers. | Reword to "15-minute first consultation" across the site, if CA Rushil agrees it reads better under ICAI guidance. One shared component, so one change. |
| O-REVIEWS | May the firm ask clients for Google reviews? | The Chennai map pack is decided mostly by reviews; the firm had 57 in November against about 200 to 700 for map-pack rivals. One research pass called any request solicitation; the other said one neutral request, never filtered or rewarded, is acceptable. | CA Rushil's call under ICAI. If yes: one neutral message to every client at the same milestone (for example after the return is filed), the same words for everyone, no incentive, no filtering of unhappy clients, and nothing about reviews on the website. |
| O-ICAI-NUMBERS | Publish CA Rushil's ICAI membership number and the firm registration number (FRN)? | The guide that ranks for "ca firm in chennai" tells readers to check exactly these on ICAI. The site already has a slot that shows them once filled in (`src/lib/site.ts`; they are empty now). | Yes, if CA Rushil is comfortable. Send the numbers and the Certificate of Practice status; the agent adds them in one pass. |
| O-DIRECTORIES | List the firm (factual, unpaid) on Clutch, GoodFirms, the US trade.gov India business service provider directory, UKIBC, and ICAI's CA Connect? | AI answers about accounting firms cite Clutch and listicles. ICAI CA Connect is the regulator's own directory, and the site already has a slot for its link. | Yes to ICAI CA Connect now. The others only after CA Rushil checks ICAI's current guidance on directory listings, and never a paid or "sponsored" slot. Indian directories (Justdial, Sulekha, IndiaMART free tier, Bing Places, Apple Business Connect) are already in the owner's plan: use `seo/offsite/DIRECTORY-LISTING-KIT-2026-11.md`. |
| O-US | Will the firm prepare and file US returns for individuals? | 49 impressions in 7 days, at position 68, for searches like "us tax filing in india", a service the firm does not offer. | Firm's business decision. Until it is yes, the US pages say plainly that the firm supports US CPA firms only. |
| O-CA | A page for NRIs in Canada? | 15 impressions in 7 days (about 60 per 28 days), below the 300-per-28-days rule. Competitors for "nri tax india canada" are thin (banks, fintech, calculators). | Not yet. Add a substantive Canada section to the NRI hub instead, with CA sign-off, and revisit when Canada passes 300 a month. |
| O-GCC | Separate pages for Saudi Arabia, Qatar, Kuwait, Oman and Bahrain? | The Gulf grew 125% per day, but each country is well under 300 impressions per 28 days. Competitors win with per-country pages. | Not yet. In Wave 2 (from 15 Dec) the Gulf page gets the five countries in its title and one verified FAQ per country, including that Bahrain has no treaty. |
| O-REVIEW-SIGNOFF | Will CA Rushil review the pages below so the site can show "Reviewed by CA Rushil C S"? | Every winning competitor guide shows a named CA reviewer and date. The site's review registry (`src/lib/content-reviews.ts`) is empty by design until a real review happens. | Yes: two pages a week, starting with the list in section D. |

## D. CA review list (O-REVIEW-SIGNOFF)

Chosen by impressions and business value in the last 7 days. For each page, CA Rushil reads the live page and checks every legal statement against the official source, the "what is not included" list, and any practice description. Then he replies:

> Reviewed `<page>` on `<date>`. Content as shown on `<date>`. Changes needed: none / `<list>`.

The agent then adds the entry to `src/lib/content-reviews.ts` with that reference, and "Reviewed by" appears on the page. Any later edit to the page clears the review until he confirms again in one line (that is how the registry is built).

| # | Page | 7-day impressions | Why first |
|---|---|---|---|
| 1 | `/nri-tax-services-gulf` | 154 | Fastest-growing market; corrected on 21 Nov |
| 2 | `/partnership-firm-registration-chennai` | 229 | Position 5.6, highest-impression service page on page 1 |
| 3 | `/nri-tax-services-singapore` | 71 | Position 3.0 in the last 24 hours |
| 4 | `/nri-tax-services-uk` | 71 | Best international page over the last 52 days |
| 5 | `/india-subsidiary-for-singapore-companies` | 47 | Moved from 18.3 to 7.4 |
| 6 | `/india-subsidiary-for-uk-companies` | 44 | 2 clicks at 5.6 |
| 7 | `/india-subsidiary-for-uae-companies` | 41 | Position 4.7 |
| 8 | `/gst-litigation-chennai` | 66 | Low-competition money page |
| 9 | `/nri-tax-services-uae` | 56 | Target of the Dubai searches |
| 10 | `/fema-rbi-compliance` | 40 | 2 clicks; supports every subsidiary page |

`/virtual-cfo-services` is left out on purpose: it is rebuilt in January, which would clear a review made now.

## E. What the agent does next without waiting

- Wave 2 work from 15 Dec 2026, as listed in `seo/prompts/MASTER-PROMPT-ALL-COUNTRIES-2026-11-21.md` section 7.
- Monthly competitor loop (section 5 of that prompt).
- Drafts only for anything off-site.
