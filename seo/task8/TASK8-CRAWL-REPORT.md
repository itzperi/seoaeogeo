# Task 8: technical crawl results (14 Nov 2026), for approval before deployment

**Caveat on scope:** the live site still runs the build from 674e10d. None of today's later pushes (bb97de0 to 27480bb) have deployed on Vercel. The crawl below is therefore of the live build. The fixes in this commit were also checked against the source, so they cover pages that are not live yet.

**Files in `seo/task8/`:**
- `crawl-summary.json`
- `internal-link-problems.csv`
- `redirect-rules.csv`
- `lighthouse/*.json`

## 1. robots.txt and sitemap.xml
| Check | Result |
|---|---|
| robots.txt allows Googlebot, Bingbot, GPTBot, PerplexityBot, ClaudeBot and Google-Extended | **Pass.** Each is named explicitly with `Allow: /`, plus ChatGPT-User, OAI-SearchBot, Claude-SearchBot, Applebot and others. No disallows. |
| robots.txt references the sitemap | **Pass:** `Sitemap: https://www.csrushil.com/sitemap.xml` |
| Sitemap URLs return 200 | **Pass:** 183 of 183 |
| Sitemap URLs are indexable (no noindex meta or header) | **Pass:** 183 of 183 |
| Sitemap URLs are self-canonical | **Pass:** 183 of 183 |
| lastmod present and not in the future | **Pass.** It comes from each page's last git change (`src/lib/page-dates.ts`). The 7 noindexed area pages and the 7 merged income-tax pages are correctly absent. |

## 2. Core Web Vitals (lab, mobile, local Lighthouse)
**Field data is not available today:** the PageSpeed Insights API returned "quota exceeded". Google's own field numbers are in Search Console under Core Web Vitals.

**Why blocking time is overstated here:** these lab runs used this laptop with 4x CPU throttling. The machine's benchmark index was 434 to 581 for the home and service runs, which is slow and heavily loaded. Blocking time (TBT, the lab stand-in for INP) is inflated on these runs. The blog run, at index 1,240, is closer to a normal device.

| Page | LCP (target < 2.5 s) | CLS (target < 0.1) | TBT (lab proxy for INP < 200 ms) | Score |
|---|---|---|---|---|
| Home | **2.02 s** ✅ | **0.000** ✅ | 2,540 ms ⚠️ (slow host) | 70 |
| Service: Pvt Ltd registration | 2.94 s ⚠️ | **0.000** ✅ | 1,416 ms ⚠️ (slow host) | 65 |
| Blog: Form 3CEB | **2.33 s** ✅ | **0.000** ✅ | 445 ms | 86 |

**LCP is text on all three pages:** the H1, or the lead answer on the service page. There is no image or font delay; TTFB is about 0.66 s and the rest is render delay while the main thread is busy.

**The three biggest causes found:**
1. **Main-thread work at load.** This is style and layout of the whole page (2.3 to 3.7 s under throttling) plus evaluation of the shared React and Next chunk (about 1.1 to 1.6 s). This is what delays the text LCP on the service page.
2. **Legacy JavaScript and unused JavaScript in the shared chunk:** 10 to 14 KiB of polyfills and 22 to 29 KiB unused, flagged on every page.
3. **Render-blocking CSS:** one 45 KB stylesheet, about 150 ms on the service page.

**Status: measured, not changed in code.** Each fix touches the build: trimming client components, browser targets or CSS inlining. This machine cannot run `next build`, because it runs out of memory, and Vercel is not deploying at the moment, so a change could not be measured before or after. I will apply and measure these once a deploy goes through.

**Already in good shape:**
- CLS is 0 everywhere.
- Fonts use next/font with swap and preload.
- The footer map iframe is lazy.
- The marquee animation is GPU-composited.
- DOM sizes are small: 392 to 971 nodes.

## 3. Full crawl
**Coverage:** 183 sitemap pages, 194 distinct internal link targets and 57 redirect rules.

| Check | Found | Fixed in this commit |
|---|---|---|
| Redirect chains or loops | **None.** Every rule is a single hop to a 200 page. | n/a |
| Redirect status code | 49 rules returned **308** (`permanent: true`); the brief requires 301 | **All 49 switched to `statusCode: 301`.** The function is now typed, so `next.config.ts` type-checks. `/review` stays a temporary 307 to Google's review form, because it is a short link, not a page. |
| Internal links through a redirect | 3 posts link to `/blog/annual-roc-filing-calendar`, which 301s to `/roc-compliances` | **Repointed** straight to `/roc-compliances` in aoc-4-mgt-7-late-fee, change-registered-office-company and dir-3-kyc-due-date-late-fee |
| Broken internal links (404) | 3 live links to posts that are not published yet: convert-partnership-firm-to-llp, private-limited-company-penalties-non-compliance, share-allotment-after-incorporation | **Fixed in 27480bb (not live yet).** `PostLink` shows plain text until the post's date. A source scan of every literal internal link now finds 0 broken links and 0 links to redirects. |
| Duplicate titles or meta descriptions | **None** (fixed in Task 7) | n/a |
| noindex or canonical conflicts | **None.** No sitemap URL is noindex or points its canonical elsewhere. Noindexed pages are out of the sitemap. | n/a |
| Orphan pages | **None:** every sitemap page has inbound links (Task 5 crawl). 4 service pages lacked body links; Task 5 added them. | n/a |

## 4. /llms.txt
`/llms.txt` and `/llms-full.txt` already existed. They summarise the firm and link the key pages: 143 URLs, all valid, none redirecting or noindexed.

**Updated in this commit:**
- **Mogappair and Aminjikarai:** added to the areas list.
- **Removed claims:** "16-member team" and "Hindi", which are not in FIRM FACTS.
- **Anna Nagar entry:** "walk-in by appointment" now reads "walk-ins are welcome, and booking a slot saves waiting time".
- **Em dashes:** all 17 replaced.

## 5. Needs your decision
1. **Team size and Hindi on the site.** FIRM FACTS has no team size or languages, and rule 1 says to leave such details out. They still appear on the homepage (hero, stats tiles, at-a-glance table), About, Careers, Statutory Audit and Outsourced Bookkeeping, about 20 places in all. `LANGUAGES_SPOKEN` in `site.ts` also lists Hindi.
   - **Recommendation:** remove the team size and Hindi everywhere. On the homepage the stats tile would be swapped for one that is in FIRM FACTS, such as "Founded 2024" or "Mon to Sat, 09:30 to 18:30".
   - **I need your OK, or a confirmed team size and languages to add to FIRM FACTS.**
2. **Merging `gst-show-cause-notice-first-48-hours`** into `after-gst-show-cause-reply`, with a 301 (from Task 6).
3. **Deployment.** This commit is on the local branch and **not pushed**, as the brief asks. Vercel has also not deployed the 7 pushes since 674e10d; please check the Vercel dashboard for a failed or queued build.

## Data notes
- **Lab conditions:** Lighthouse 12, mobile, simulated 4G and 4x CPU slowdown, single runs. Repeat runs to confirm did not complete on this machine.
- **Crawl method:** Python against the live site with no redirect following, so every hop is recorded.
