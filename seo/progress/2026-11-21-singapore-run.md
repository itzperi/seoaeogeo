# Singapore run report (19 to 21 Nov 2026)

**Prompt:** `seo/prompts/MASTER-PROMPT-SINGAPORE-SEO-AEO-GEO-2026-11.md`
**Branch:** `seo/singapore-2026-11`, 17 commits on master `60229aa`.

**Push history (corrected 21 Nov):**
- The first 13 commits, up to `cef758d`, were pushed to master on 19 Nov 2026 at 16:13 IST by the separate Sonnet session, and are live.
- The remaining 4 commits, up to `bc913af`, were pushed on 21 Nov 2026 at 12:24 IST at the owner's request ("push all to get greater sale").
- IndexNow and GSC submissions have not been run.

**Who did the work:**
- Opus session: page fixes, internal links, docs, measurement and today's checks and fixes.
- Separate Sonnet session, working from the same prompt: the four guides, their registration, the `?parent=sg` preset, the llms section, the off-site drafts and page dates.

All of it was re-checked on 21 Nov.

## 1. The 10,000,000× answer

- 219 impressions × 10,000,000 = 2.19 billion impressions in 52 days, about 365 for every person in Singapore. No site can get that, and chasing it with mass pages would get the site demoted.
- **The working targets** (stretch goals, not forecasts) are 1,000 to 1,700 Singapore impressions per 28 days at 90 days, and 10,000 to 17,000 at 12 months (`seo/singapore/KPI-SINGAPORE.md`).

## 2. What changed on existing pages

| Page | Change | Net words | Pages linking in (repo script, app routes only) |
|---|---|---|---|
| `/india-subsidiary-for-singapore-companies` | Title "Set Up an Indian Subsidiary from Singapore: FDI, FC-GPR, Tax" (60 characters). Description with "served online from Chennai" (154 characters). New "auditors keep flagging" section with six linked filings. Regional-HQ section (423 words, 4.8% overlap with the UK/US/UAE pages), replacing the day-to-day section and **correcting the live time-zone error** (it said India is 2.5 hours ahead of Singapore). Links to the treaty and calendar guides | +666 | 4 → 8 |
| `/nri-tax-services-singapore` | OCI Singapore-citizen section (282 words). TDS cited as section 393(2) of the 2025 Act. Singapore-specific Tamil block (owner check: O7) | +289 (+216 Tamil in `tamil.ts`) | 1 → 3 |
| `/blog/form-3ceb-due-date-applicability` | `#foreign-parents` anchor and a two-sentence "Singapore parent?" note. Title and description unchanged | +64 | n/a |
| `/annual-compliance-package` | "Flagged by auditors?" heading linking the subsidiary retainer | +67 | n/a |
| FEMA, TP, CFO retainer, EOR, FC-GPR post, FLA post | Links into the Singapore subsidiary page | small | |
| NRI property page, RNOR post, NRI ITR post, both NRI tools | Links into the Singapore NRI page | small | |
| Compliance calendar tool | `?parent=sg` preselects Singapore; default unchanged | | |
| `src/lib/track.ts` | Australia and Canada recognised in click attribution | | |
| `public/llms.txt`, `llms-full.txt` | Firm-facts answers for AI follow-ups. Singapore section listing only live pages; guide lines held in `seo/singapore/LLMS-GUIDE-LINES.md` until each publish date | | |

## 3. New guides (all unpublished until their date and CA sign-off)

| Slug | Title (characters) | Words | Shingle overlap with the site | Date | Review sheet |
|---|---|---|---|---|---|
| `india-singapore-dtaa-for-businesses` | India-Singapore DTAA for Businesses: Withholding Tax and LOB (60) | 3,335 | 4.3% | 1 Dec 2026 | `seo/singapore/REVIEW-india-singapore-dtaa-for-businesses.md` (114 confirmed, 3 corrected, 5 open) |
| `compliance-calendar-singapore-owned-indian-subsidiary` | Compliance Calendar for a Singapore-Owned Indian Subsidiary (59) | 3,465 | 9.8% | 1 Dec 2026 | `REVIEW-compliance-calendar-...md` (79 confirmed, 2 corrected, 16 open) |
| `reverse-flip-singapore-to-india` | Reverse Flip from Singapore to India: Tax, FEMA, MCA Steps (58) | 2,076 | 5.5% | 15 Dec 2026 | `REVIEW-reverse-flip-...md` (30 confirmed, 5 leads; unverified items left out) |
| `returning-to-india-from-singapore-tax-checklist` | Moving Back to India from Singapore: A Tax Checklist (52) | 3,357 | 4.8% | 29 Dec 2026 | `REVIEW-returning-...md` (106 confirmed, 5 corrected, 9 open) |

**What every guide has:**
- 8 FAQs (40 to 60 words);
- question H2s only;
- 2 to 3 tables;
- a lead answer of 56 to 60 words;
- the Singapore-adviser boundary and "online from Anna Nagar, Chennai";
- an official-sources section;
- no dashes and no banned words.

**Open rows** are mostly MCA and Income Tax dates and forms that the department sites blocked to automated reading (MSME-1, DPT-3, PAS-3, DIR-12, advance tax, Form 145 timing). CA Rushil confirms or corrects them when signing.

**Left out of the reverse-flip guide:**
- the text of sections 233 and 234 and rule 25A;
- post-merger ROC form time limits;
- loss carry-forward;
- ESOP perquisite tax;
- any timeline or cost.

## 4. Verification (21 Nov 2026)

| Check | Result |
|---|---|
| Full type-check (`D:\csr-tc-final`, all of `src`) | Pass (exit 0) |
| ESLint, 25 changed TS/TSX files | Pass (exit 0) |
| Integrity crawl of the **live** site (230 pages, which already included the 19 Nov push) | 0 errors after fixing the script's stale NAP and geo expectations; before the fix, every page was flagged falsely |
| Dash scan, 62 changed files | 0 in site code. Internal docs only: 2 pre-existing in `PROMPT-GROWTH-LOOP.md`, 1 verbatim GSC query in the strategy |
| Byte preservation | `git diff 60229aa` is identical with and without `--ignore-cr-at-eol` (60 files, +6,430/−127) |
| BLOG_INDEX against post meta | Title, description, excerpt and date identical for all four; all four are in the module map |
| External source links (49) | 37 return 200. 13 on incometaxindia.gov.in and mca.gov.in return 403 (bot block). 9 unreachable from this machine (incometax.gov.in, cpf.gov.sg, itat.gov.in, sci.gov.in); the Supreme Court PDF was confirmed in the browser |

**Production check:** the 19 Nov push was live before the 21 Nov crawl, so the page fixes, links, Tamil block and calendar preset were checked in production: 0 integrity errors, and the subsidiary page shows its new title. The four guides correctly return 404 until their dates.

## 5. Owner actions

| ID | Action | Status |
|---|---|---|
| O1 | GSC Singapore Pages and Queries export with position, per page, to find the hidden clicks | Open |
| O2 | Singapore volumes in Keyword Planner | Open |
| O3 | CA Rushil signs the four review sheets (open rows listed in each) | Open, and blocks publishing |
| O4 | Approve the push and IndexNow | Push done (19 and 21 Nov); IndexNow still open |
| O5 | GCC page decision | Open |
| O6 | Publish the off-site drafts in `seo/singapore/offsite/`; contact Singapore corporate-secretarial firms (no fee-sharing) | Open |
| O7 | Native-Tamil check of the Tamil block and explainer | Open |
| New | On each publish date, paste the guide's line from `seo/singapore/LLMS-GUIDE-LINES.md` into both llms files | 1, 15, 29 Dec |

## 6. Measure

- 28-day Singapore exports on about **28 Dec 2026**, **25 Jan 2027** and **22 Feb 2027** (the 90-day review), filled into `seo/singapore/KPI-SINGAPORE.md`.
- The AI panel (S1 to S10) monthly in `seo/AI-VISIBILITY-LOG.md`.
- **Bing baseline (cc=SG, 19 Nov):** csrushil.com #1 for the Chennai flat TDS question, #2 for "CA in India for a Singapore company's Indian subsidiary", #4 for the Form 3CEB question, and absent for the other seven.
