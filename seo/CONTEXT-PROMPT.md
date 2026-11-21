# Context prompt for csrushil.com (paste at the start of any new AI session)

Paste everything below the line as the first message of a new Claude Code session opened in `D:\csrushil-website` (or any AI tool), then add the task. It gives the assistant the facts, rules, structure, history and open items, so it doesn't relearn them or break them. For the monthly growth run, paste this first, then `seo/PROMPT-GROWTH-LOOP.md`.

Last updated: 16 Nov 2026.

---

## 1. Who the client is

You are working on the website and search visibility of **C S Rushil & Co., Chartered Accountants**, a CA firm in Chennai, India.

| Fact | Value (from `src/lib/site.ts`; these are the only firm facts you may use) |
|---|---|
| Name | C S Rushil & Co. (legal: C S Rushil & Co, Chartered Accountants) |
| Led by | CA Rushil C S (Certified FAFD, Start-up Mentor) |
| Office | One office only: Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai 600040. Nearest Metro: Thirumangalam (Green Line). Plus code 35PX+9V |
| Phone | +91 72001 49711 (also WhatsApp) |
| Hours | Monday to Saturday, 9:30 AM to 6:30 PM; Sunday closed |
| Languages | English and Tamil |
| Founded | 2024 |
| Google Business Profile | CID 9218487927688159679, Place ID ChIJzXoB0DFnUjoRv2EUuO2l7n8 |
| Not available (never invent) | ICAI membership number, ICAI FRN, year qualified, team size, review counts or ratings, client names, results, awards |

**Services described on the site:**
- company, LLP, OPC, Section 8, partnership and proprietorship registration;
- GST registration, returns, notices and litigation;
- income tax returns, notices, appeals and HNI tax;
- TDS;
- statutory, tax and internal audit;
- ROC compliance and the annual compliance package;
- virtual CFO;
- bookkeeping and accounting outsourcing;
- payroll;
- FEMA and RBI compliance, including ODI and FC-GPR;
- transfer pricing;
- NRI tax (UAE, UK, USA, Gulf, Singapore) and NRI property-sale TDS;
- India subsidiaries for US, UK, Singapore and UAE companies;
- outsourced bookkeeping for the US, UK, Singapore, Australia and UAE;
- 1040, 1065 and 1120-S preparation **support for US CPA firms only** (the firm does not file US returns for individuals);
- trademark, FSSAI, IEC, MSME/Udyam, DSC, Startup India and RERA.

## 2. The goal

1. #1 in the Google map pack and on page 1 for **"CA firm in Chennai"**.
2. Growing organic impressions and clicks every month in Chennai, Tamil Nadu, all India, the US, the UK, the UAE and Gulf, Singapore, Australia and Canada.
3. Being cited by AI assistants (ChatGPT, Perplexity, Gemini, Copilot, AI Overviews).

The owner has asked for "1,000 times" growth. That is not reachable honestly for a one-office firm; say so, then push every legitimate lever (`seo/PROMPT-GROWTH-LOOP.md`).

## 3. Locked rules (the owner's; never break, even if asked mid-task)

1. **Facts are locked.** Use only the facts above and copy already on the site. Never invent reviews, ratings, client names, case results, awards, years of experience, team size, membership or registration numbers, turnaround times, or firm statistics. Never claim a service the site doesn't describe. If a detail is missing, leave it out; don't add a placeholder.
2. **No placeholders**, brackets, "TBD", "coming soon" or "to confirm" in any page, schema or copy.
3. **No prices.**
   - Never use firm fees, ranges, "from" amounts, discounts, or cost or salary comparisons.
   - Never put `priceRange`, `Offer` or price in schema.
   - Statutory government fees, interest and penalties are allowed when you cite the official source.
4. **No branches.** One office, Anna Nagar. Every other place is served online or by visiting Anna Nagar.
5. **No fake reviews.** Show only reviews already on the site. Never add `AggregateRating` or `Review` schema.
6. **No em dashes (—) or en dashes (–)** anywhere. The whole site was cleaned on 16 Nov 2026, so keep it at 0.
   - Use "to" for ranges and a hyphen for compound names ("India-US").
   - Write in plain English with Indian English spelling.
7. **Preserve URLs.** Every redirect is a single-hop 301 in `next.config.ts`, with no chains.
8. **No doorway pages.** A new area, city or country page needs:
   - at least 600 words not shared with any sibling page, checked with a 5-word-shingle uniqueness script;
   - a real reason to exist.

   No "best CA in X" grids and no keyword-variant pages.
9. **Verify the law** against official sources and cite them: incometaxindia.gov.in, incometax.gov.in, cbic-gst.gov.in, gst.gov.in, mca.gov.in, rbi.org.in, indiacode.nic.in, tnreginet.gov.in, irs.gov, fincen.gov or gov.uk.
   - The **Income-tax Act, 2025 applies from 1 April 2026** (tax year 2026-27). Use `src/content/blog/income-tax-act-2025-section-mapping.tsx`.
   - Verified mappings: 201(1A) is now 398, 234E is now 427, 271H is now 461, Form 3CEB is now Form 48 (section 172).
   - Never guess a section number.
10. **Ask the owner first** before you:
    - delete or merge pages;
    - add a country page or a new service;
    - change the homepage H1;
    - publish anything off-site;
    - send anything on the owner's behalf.
11. **Privacy:** never put the owner's or the agency's personal details into requests to outside services.

## 4. Stack and how to work in this repo

- **Repo:** `D:\csrushil-website`. Next.js 16 App Router, React 19, Tailwind, TypeScript.
- **Deploy:** Vercel builds the `master` branch of GitHub `itzperi/seoaeogeo`. Work happens on local branch `seo/brief-tasks-2026-11`, pushed to master.
- **Machine limits:** very low RAM and a nearly full C: drive. **Never run `next dev`, `next build` or `npm install`.**
- **Type-check:** copy `src` into `D:\csr-tc-final`, which has `tsconfig.json` and `node_modules`, then run:
  ```
  node --max-old-space-size=2048 node_modules/typescript/bin/tsc --noEmit -p tsconfig.json
  ```
- **Lint:** run ESLint on the changed files only, with `--max-old-space-size=1536`.
- **Render and word count:** `node /d/csr-render/render.cjs <post.tsx>`.
- **Link checks:**
  - `scripts/internal-links-report.py`
  - `scripts/verify-site-integrity.mjs`
  - `scripts/page-family-audit.py`
- **Byte-preserving edits are mandatory.** Files mix LF, CRLF and stray `\r\r\n`.
  - In Python, always use `open(p, encoding="utf-8", newline="")`.
  - Find-and-replace scripts must touch only the matched spans, never whole-file patterns.
  - Afterwards, diff to prove that only the intended lines changed.
  - Write scripts to files rather than shell heredocs, because Git Bash heredocs mangle backslashes.
- **Push:** `git -c http.postBuffer=52428800 -c pack.threads=1 push -q origin HEAD:master`.
- **Commit trailer:** end commit messages with the attribution line the session gives you.
- **After a deploy is live** (new URLs return 200), run `npm run indexnow` once. Bing feeds ChatGPT and Copilot.
- **Vercel often stalls for minutes to hours.**
  - First try an empty commit to re-trigger the build.
  - If that fails, the owner checks Vercel → Deployments and looks for: Queued, Error (send the log), Preview instead of Production (Promote to Production), or not listed (reconnect Git).
- Search Console, Vercel and GBP are **not signed in** in the assistant's browser. The owner exports the data and pastes or saves it.
- The PageSpeed API quota is often exhausted. Use local Lighthouse, noting that the slow CPU inflates TBT.

## 5. Where things live

| What | Where |
|---|---|
| Firm facts, NAP, hours, GBP ids | `src/lib/site.ts` |
| Service catalogue (homepage grid, footer, sitemap) | `src/lib/services.ts` |
| Blog (94 posts) | TSX files in `src/content/blog/`, registered in `BLOG_INDEX` in `src/lib/blog.ts`. The index date controls publishing, and `updated` comes from the index. Keep title, description and excerpt identical in both places. Link posts with `PostLink`. |
| Area pages (20, all indexable) | `src/app/chartered-accountant-<area>-chennai/`, registry `src/lib/areas.ts`, Tamil names `src/lib/tamil.ts`, hub `/locations` |
| Tamil Nadu city pages | `src/lib/tn-cities.ts` (company registration), `src/lib/location-pages.ts` (income tax and GST litigation) |
| Tools (7) | `src/app/tools/*`, shared `ToolShell.tsx`, index `src/app/tools/page.tsx` |
| Static sitemap list | `src/app/sitemap.ts` (blog entries are added automatically) |
| Page dates | `src/lib/page-dates.ts` |
| Schema helpers | `src/lib/schema.tsx` (FAQ arrays feed both `FAQSection` and FAQPage schema) |
| Redirects | `next.config.ts` (typed `Redirect[]`, `statusCode: 301`) |
| AI crawler summary | `public/llms.txt` |
| Case studies | `src/lib/case-studies.ts` and `/case-studies/[slug]` |
| Lead funnel | Supabase (`src/lib/supabase.ts`, `src/lib/leads.ts`), admin at `/admin` |

**Every new URL must be added to all of these:** the sitemap (unless it is a blog post), `page-dates.ts`, `llms.txt`, the tools index (tools only), and the area registries (area pages only).

## 6. History (what is already done; don't redo it)

**September to October 2026:**
- site build;
- audits (`seo/AUDIT-OCT-2026-csrushil.md`, `seo/TECHNICAL-AUDIT.md`);
- GBP packs (`seo/GBP-*`);
- service pages for Tamil Nadu cities, NRI markets and subsidiary markets;
- calculators;
- the Supabase lead funnel.

**Owner's 10-task brief, November 2026.** Tasks 1 to 8 are done and pushed; Tasks 9 (key facts) and 10 (the GBP copy document) have not been requested yet. Completed work includes:
- six-group header navigation;
- the `/locations` hub;
- contextual links between service pages and the blog;
- the QuoteProcess, AboutTheCA, AuthorBio and PostLink components;
- related posts;
- case studies;
- single-hop 301 redirects;
- the team-size and Hindi claims removed.

Reports are in `seo/task3` to `seo/task8`.

**14 Nov 2026:**
- All 23 scheduled posts published.
- 25 thin posts expanded to 900 to 1,100 words with 5 FAQs each.
- 10 thin area pages rewritten.
- 5 new nearby areas added: Shenoy Nagar, Arumbakkam, Koyambedu, Villivakkam and Kolathur.
- 5 "CA firm in Chennai" cluster posts written.
- A homepage guides block added.
- GSC indexing fixes documented in `seo/GSC-INDEXING-FIXES-2026-11-14.md`.

**16 Nov 2026:**
- Two calculators added: GST late fee and interest (18 tests), and TDS interest and late filing fee (13 tests).
- Two Tamil Nadu guides added: partnership firm registration online, and proprietorship registration.
- The virtual CFO page rewritten for part-time, shared and small-business searches.
- US and foreign-business pages tuned: the UK subsidiary benefits section, foreigners "company formation services", CPA "outsourcing tax preparation to India", Singapore outbound ODI, and NRI USA FBAR and Form 8938.
- Click-through title fixes on page-1 pages.
- Two placeholders removed.
- Every em and en dash removed site-wide.
- The worldwide plan (`seo/GROWTH-PLAN-2026-11-16.md`) and the monthly prompt (`seo/PROMPT-GROWTH-LOOP.md`) written.

## 7. Baseline numbers (GSC, last 28 days to 13 Nov 2026)

**Worldwide:**
- About 16,900 impressions and 329 clicks; CTR 1.9%; average position about 17.
- Mobile ranks 12.7 with 2.5% CTR; desktop ranks 19.9 with 1.6% CTR.

**By market:**
- India: 14,807 impressions, 289 clicks, position 18.1.
- US: 670, 17, 10.7.
- UK: 375, 7, 11.5.
- UAE: 199, 1, 8.7.
- Singapore: 134, 4.
- Canada: 60, 0.
- Australia: 53, 3.

**Key queries:**
- "ca firm in chennai": position 7.8, 77 impressions.
- "ca firms in chennai": 9.4.
- "ca firms in anna nagar": 4.5.
- Brand queries sit at positions 1 to 2 and bring about 41 clicks.

**Biggest gaps:**
- `/virtual-cfo-services`: 1,561 impressions at position 58.
- `/blog/form-3ceb-due-date-applicability`: 1,154 impressions at 7.9, with 0.7% CTR.
- `/partnership-firm-registration-chennai`: 811 at 7.1.
- `/company-registration-india-for-foreigners`: 324 at 57.
- The money pages `/company-registration-chennai` (37.7) and `/private-limited-company-incorporation-chennai` (28.5) compete for the same queries.

The Google November 2026 core update rolls out from 10 to about 24 Nov. Don't judge ranking changes before it settles. "CA firms in Chennai" dropped from #2 to #24 during it.

## 8. Open items

- **Deploy:** the pushes from f95f33d to 4930445 were not live at last check (the new tools and guides returned 404). Confirm they return 200 live, then run `npm run indexnow`.
- **Owner decisions:**
  1. Does the firm file US returns for individuals? About 130 impressions a month ask for it. Currently no.
  2. Should there be an NRI-in-Canada page? 60 impressions a month.
  3. Should `gst-show-cause-notice-first-48-hours` merge into the GST notice page? This is awaiting approval.
  4. Brief Tasks 9 and 10.
- **Watch:** the 57th GST Council recommended removing the GSTR-3B late fee for taxpayers up to ₹5 crore. It is not yet notified. When CBIC notifies it, update `src/app/tools/gst-late-fee-interest-calculator/calc.ts` and its page.
- **Held:** Core Web Vitals code fixes wait until a build can be measured.
- **Owner's off-site work:**
  - steady Google reviews;
  - weekly GBP posts;
  - citations (Justdial, Sulekha, IndiaMART, Bing Places, Apple Business Connect);
  - links (startup and business communities, CA-student forums, US and UK accountant directories, NRI associations);
  - LinkedIn posts by the CA;
  - reporting keyword-stuffed rival GBP names;
  - in GSC, resubmitting the sitemap and requesting indexing, 10 a day, in the order given in `seo/GSC-INDEXING-FIXES-2026-11-14.md`.

## 9. Key documents in `seo/`

- `GROWTH-PLAN-2026-11-16.md`: the worldwide plan, with page-level actions and market plans.
- `ALL-COUNTRIES-COMPETITOR-PLAN-2026-11-21.md` and `prompts/MASTER-PROMPT-ALL-COUNTRIES-2026-11-21.md`: what the winning firms in each market do, which tactics this firm may copy (ADOPT, ADAPT, AVOID), country plans and new owner decisions. The newest all-countries plan and prompt.
- `PROMPT-GROWTH-LOOP.md`: the monthly maximum-growth prompt.
- `GSC-INDEXING-FIXES-2026-11-14.md`: what each indexing status means, and the owner's GSC steps.
- `GBP-RANK-1-PLAYBOOK-CA-FIRM-CHENNAI-2026-11.md` and `GBP-ACTION-CHECKLIST-2026-11-13.md`: map pack work.
- `COMPETITOR-ANALYSIS.md`, `SERP-SXO-MAPS-2026-11-13.md` and `BACKLINKS-2026-11-13.md`: competitors, SERP intent and links.
- `task3/` to `task8/`: the brief's task reports.
- `CA-SIGNOFF.md` and `CONTENT-REVIEW-PROCESS.md`: how content is reviewed.

## 10. How to report back

- Say what changed, what was verified (type-check, lint, render, live 200), what was not verified, and what the owner must do.
- Report failures plainly, with the output.
- Never claim a ranking or traffic change that hasn't been measured.
- Keep the user-facing summary short, in plain language, and free of em dashes.
