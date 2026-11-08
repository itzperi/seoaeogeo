# Context prompt: take csrushil.com from 25/30 to 30/30 on the SEO / GEO / AEO audit

Paste everything below the line into a new Claude Code session opened on `D:\csrushil-website`. It is self-contained. For a longer background on local ranking, read `seo/prompts/MASTER-PROMPT-chennai-local-and-audit-10.md`. This prompt is narrower: close every gap between today's score and a perfect score, and prove each one.

---

## 0. Mission, scoring and the honest ceiling

You are taking **C S Rushil & Co.** (https://www.csrushil.com) from **SEO 9 + GEO 7 + AEO 9 = 25/30** (full audit of all 190 pages, 8 Nov 2026) to **10 + 10 + 10 = 30/30**.

**How it is scored.** Use the `anthropic-skills:seo-geo-aeo` rubric (1–3 critical, 4–5 below average, 6–7 decent, 8–9 strong, 10 exemplary). A dimension is 10 only when **every gate for it in section 3 passes on the live site** with evidence. A gate that is "done on a branch" or "done in code but not deployed" has **not** passed.

**The honest ceiling.** About half the GEO points depend on the firm, not the code: the ICAI membership number, Google reviews, directory listings and third-party mentions. If those owner inputs don't arrive, the reachable score is about **SEO 10, AEO 10, GEO 8 = 28/30**. Say that plainly in every progress report. **Never fake a gate.** No invented reviews, listings, mentions, credentials, statistics or client data, and no keyword-stuffed Google profile. Every one of those also breaks ICAI or Google rules and would lower the score when found.

**Timeline to expect:** code gates in 1–3 working days. Owner identity gates (ICAI number, GBP fixes) in a day once supplied. Prominence gates (25+ reviews, 10 citations, 3 mentions) in **about 2–4 months**, because review and citation growth has to be steady to look natural.

## 1. Facts and rules you must work within

### 1.1 Business facts (from `src/lib/site.ts`; never change them without the owner)
- Name: **C S Rushil & Co.**. Address: Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai 600040. Phone +91 72001 49711. Email admin@csrushil.com. Hours Mon–Sat 9:30 AM–6:30 PM.
- Founded 2024; led by CA Rushil C S (`FOUNDER_CREDENTIALS = "Certified FAFD, Start-up Mentor"`); team of 16. The only office is Anna Nagar; every other place is served online.
- GBP: `GBP_CID = 9218487927688159679`, `GBP_PLACE_ID = ChIJzXoB0DFnUjoRv2EUuO2l7n8`.
- `ICAI_MEMBERSHIP_NO = null`, `FIRM_REGISTRATION_NO = null`. The owner must supply these; never invent them.

### 1.2 ICAI rules (CA firm; non-negotiable)
Sources: ICAI Code of Ethics 2026 Vol I, effective 1 Apr 2026 (resource.cdn.icai.org/92475coe2026v1.pdf), and the ICAI website advisory of 14 Oct 2020. Local copies are in `D:\csr-audit-2026-11-08\competitors\raw\`.
- No professional fees, and no "free" (cl. 3.3.7(xiii); 28 Apr 2020 advisory). Government and statutory fees are allowed.
- No testimonials or endorsements, including named review quotes (cl. 3.1.3(E); advisory item 21). Keep `SHOW_GOOGLE_REVIEWS = false` in `src/lib/reviews.ts`.
- No "why choose us", "top / best / leading / No. 1", rankings, awards, media coverage, empanelments, ISO, or government scheme logos (advisory items 15–29).
- No disparaging or unsubstantiated comparisons, so no pages naming competitors (cl. 3.1.3(C)).
- No exaggerated claims, outcome promises or turnaround guarantees (cl. 3.1.3(B)).
- "Start-up Mentor" may be a "position held" (cl. 3.1.3(F)). It needs CA sign-off; don't add more positions.

### 1.3 Google rules
GBP: the real business name only, real address, no review gating, incentives or scripted wording. Search: no doorway pages (near-duplicate similarity **< 40%** inside each page family), no scaled thin pages, and no self-serving Review or AggregateRating markup.

### 1.4 Repository rules
- Branch per topic: `seo/<topic>-<yyyy-mm>`. **Pushing to `master` deploys to Vercel; do it only when the owner says so in chat.** Vercel has stalled before: after a push, confirm on the live site and never assume.
- Pages go in the registries (`src/lib/services.ts`, `areas.ts`, `tn-cities.ts`, `location-pages.ts`), never hand-edited into the sitemap. Update `public/llms.txt` for new pages.
- Money pages emit one `@graph` via `moneyPageGraph()` and pass `schema={false}` to `Breadcrumbs`, `FAQSection` and `PageHero`. Template pages use `src/components/ServicePageTemplate.tsx`.
- After each commit, run `node scripts/gen-page-dates.mjs` and commit `src/lib/page-dates.ts` as `chore: regenerate page dates`.
- Commit trailer: `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

### 1.5 Machine limits
- The C: drive is full, so shell forks fail with "MEM_COMMIT failed (1455)". Write outputs only to `D:\csr-audit-<date>\`, and set `npm_config_cache=D:\npm-cache`.
- No `next build` or full `tsc` (both run out of memory; `.next/dev/types/validator.ts` is stale and gives false errors). Lint only the changed files: `npx eslint <files>`.
- One heavy command at a time; prefer the Read, Grep and Glob tools; at most 3 subagents.
- PageSpeed: the PSI API is **not enabled** on the `GOOGLE_API_KEY` project, so use pagespeed.web.dev in the browser pane (read the scores with `javascript_tool` on `document.body.innerText`), or ask the owner to enable the API. No DataForSEO, Moz, Ahrefs, SerpAPI or `gh`.

## 2. Baseline evidence (do not re-collect; start here)

- Crawl data: `D:\csr-audit-2026-11-08\pages.csv` (190 rows, 49 columns per page). Audit report: `seo-audit-csrushil-com-2026-11-08.pdf`. Reconciliation: `seo/CHENNAI-PLAN-RECONCILIATION-2026-11-08.md`. GBP copy: `seo/GBP-SERVICES-AND-PROFILE-2026-11-08.md`.
- **Already passing:** 190/190 return 200; real 404s; one H1 each; titles ≤60 characters; descriptions 70–160; no duplicates; no page under 600 words; JSON-LD valid; an answer block on every page; no images missing alt text; highest near-duplicate 37%; robots allows every AI crawler; llms.txt and llms-full.txt live; homepage mobile Performance 99, SEO 100, LCP 1.1 s, CLS 0.
- **Committed on branch `seo/chennai-plan-reconcile-2026-11` but NOT live** (as of 8 Nov the live site still served the old robots.txt):
  - Claude-SearchBot in robots.txt.
  - The Vadapalani homepage FAQ fix.
  - The ARIA fix on the review stars (`role="img"`).
  - The `EnquiryCard` h3→h2 heading fix.
  - `SHOW_GOOGLE_REVIEWS = false` (named review quotes were on 183 pages).
  - /about-us "Why choose us" → "How we work with clients".

## 3. Gap register: every point between 25 and 30

Each gap has an ID, the evidence today, the exact fix, the files, who acts (**YOU** or **OWNER**) and the **pass test**. Work them in the order of section 4.

### SEO: 9 → 10

| ID | Gap and evidence | Fix | Files | Who | Pass test |
|---|---|---|---|---|---|
| S1 | Live site is behind the branch (old robots.txt still served) | Owner approves `master`; you push and then confirm the deploy | git | OWNER approves, YOU push | `curl https://www.csrushil.com/robots.txt` contains `Claude-SearchBot`; homepage HTML has no "What do clients say" |
| S2 | Lighthouse measured on the homepage only | Run pagespeed.web.dev (mobile) on the 10 money pages: `/`, `/private-limited-company-incorporation-chennai`, `/company-registration-chennai`, `/gst-notice-reply-chennai`, `/gst-litigation-chennai`, `/income-tax-notice-reply-chennai`, `/nri-tax-services`, `/virtual-cfo-services`, `/statutory-audit-chennai`, `/chartered-accountant-anna-nagar-chennai`. Fix any page below target | per finding | YOU | Every page: Performance ≥95, Accessibility ≥98, Best Practices ≥96, SEO 100. Table saved to `seo/progress/` |
| S3 | Accessibility 95 on home (prohibited ARIA, heading order) | Already fixed on the branch; re-test after S1. Fix any new item | `GoogleReviews.tsx`, `EnquiryCard.tsx` | YOU | Accessibility ≥98 on home |
| S4 | Best Practices 96: "Displays images with incorrect aspect ratio" | Find the image in the PSI audit details; set the right `width`/`height` or `object-fit`. CSP, COOP and Trusted Types are optional: add CSP as `Content-Security-Policy-Report-Only` first in `next.config.ts` headers, never blocking at first | the image's component, `next.config.ts` | YOU | Aspect-ratio audit passes; Best Practices ≥96 holds |
| S5 | `<priority>` on all 190 sitemap URLs (ignored by Google; noise) | Remove the `priority` field from the route list and output | `src/app/sitemap.ts` | YOU | `/sitemap.xml` has 0 `<priority>` tags and lastmod is unchanged |
| S6 | FAQPage absent on `/about-us` | Add 3–5 factual Q&As (who leads the firm, where the office is, languages, how engagements start), rendered visibly with FAQPage. Facts only from `site.ts` and `/how-we-work` | `src/app/about-us/page.tsx` | YOU | Visible FAQ and an FAQPage node in raw HTML |
| S7 | Income-tax city pages get links only from sibling-city blocks, none from body text | In `/income-tax-consultant-for-hni-chennai` body copy, add one sentence linking the Tamil Nadu and metro city pages in context (no link lists in paragraphs) | that page | YOU | Each `/income-tax-consultant-<city>` gets ≥1 in-body inbound link (`scripts/internal-links-report.py`) |

### GEO: 7 → 10

| ID | Gap and evidence | Fix | Files | Who | Pass test |
|---|---|---|---|---|---|
| G1 | `ICAI_MEMBERSHIP_NO` and `FIRM_REGISTRATION_NO` are `null` | Owner supplies both; you set them. The byline, homepage facts, /about-us and Person/Organization schema pick them up automatically | `src/lib/site.ts` | OWNER → YOU | 3 sampled pages show "ICAI M. No. …" in the byline and in JSON-LD; the number checks out at traceamember.icai.org |
| G2 | ICAI compliance not live (reviews, "why choose us") | Covered by S1. Then get CA sign-off on "Start-up Mentor" and on the /career heading "Why choose a boutique Chennai firm for articleship?" | `site.ts`, `career/page.tsx` | OWNER decides, YOU edit | Live crawl grep: 0 hits for named review quotes, "why choose us", top/best/leading/No. 1, ₹ professional fees, "free" |
| G3 | Google Business Profile incomplete (hours "Open 24 hours", categories, services) | Owner applies `seo/GBP-SERVICES-AND-PROFILE-2026-11-08.md` §1–§5 | — | OWNER | Owner screenshots; zero NAP differences from the site footer |
| G4 | Low Google review volume; reviews are no longer shown on the site (correctly) | Review link sent by WhatsApp after every completed engagement; owner replies to every review within 48 h. No scripts, keywords, incentives or gating | — | OWNER | ≥25 reviews, 100% replied, no gap longer than 3 weeks in the last 90 days |
| G5 | NAP listings: 0 verified (Sulekha, AdvisorKhoj, busy.in, IndiaMART not found) | Owner claims: Justdial, Sulekha, IndiaMART, AdvisorKhoj, busy.in, Bing Places, Apple Business Connect, ICAI directory, TaxGuru and CAclubindia author profiles. You keep `seo/citations-tracker.csv` (platform, URL, status, NAP match, date) | `seo/citations-tracker.csv` | OWNER claims, YOU track | ≥10 live listings with identical NAP |
| G6 | `ENTITY_PROFILES` and `FOUNDER_PROFILES` sameAs slots empty | Add each live, resolving profile URL from G5 | `src/lib/site.ts` | YOU | Every non-null URL returns 200 and appears in Organization/Person `sameAs` |
| G7 | 0 verified backlinks; no third-party mentions | Owner pursues ICAI-safe mentions: SIRC of ICAI talk or newsletter article, TaxGuru or CAclubindia articles by CA Rushil C S, StartupTN, IIT Madras Incubation Cell, iTNT Hub, Madras Chamber, SICCI, TiE Chennai listings. Never show them on the site as endorsements or empanelments | — | OWNER | ≥3 live third-party pages that name the firm or CA and link to csrushil.com, each fetched and checked |
| G8 | Agentic Browsing 2/3 (accessibility tree) | Covered by S1/S3 | — | YOU | Lighthouse Agentic Browsing at full marks on `/` and 2 money pages; state the Lighthouse version and date |
| G9 | No AI-use policy signal in robots.txt | Owner states the training policy. Then add Content-Signal to the relevant groups (`search=yes, ai-input=yes, ai-train=<owner choice>`) | `src/app/robots.ts` | OWNER → YOU | Live robots.txt shows the line in every relevant group |
| G10 | No Markdown versions of pages for AI agents | Serve `/<slug>.md` (or `Accept: text/markdown` with `Vary: Accept`) for the 10 money pages, generated from the same content source, no separate copy | new route handler | YOU | `curl -H "Accept: text/markdown"` or `/<slug>.md` returns text/markdown with the H1, answer and FAQs |
| G11 | No original, citable asset | Build an ICAI-safe original compilation with a dated methodology from statutory sources only: **"Tamil Nadu company and LLP incorporation: government fees and stamp duty, 2026–27"** (SPICe+/FiLLiP fees by authorised capital, TN stamp duty on MoA/AoA, DSC and name reservation government charges) as a page plus a downloadable CSV. Every figure cited to MCA or TN notifications and confirmed by CA Rushil C S | new page `/resources/tamil-nadu-incorporation-government-fees-2026-27`, `public/data/*.csv` | YOU draft, OWNER confirms | Live page with sources, last-updated date, CSV link and Dataset schema |
| G12 | llms.txt states "7–12 working days" for incorporation (a turnaround claim) | CA confirms the figure or rewords it as conditional on document readiness and MCA processing; add new pages | `public/llms.txt`, `llms-full.txt` | OWNER → YOU | llms.txt lists every new page; no unconfirmed turnaround figure |
| G13 | Dead clone `csrushil.digitalvicky.com` still indexed (title "Top Chartered Accountant firms in Chennai", old Vadapalani address) | Owner asks the domain owner to remove it, or files Google's outdated-content removal | — | OWNER | `site:csrushil.digitalvicky.com` returns nothing |

### AEO: 9 → 10

| ID | Gap and evidence | Fix | Files | Who | Pass test |
|---|---|---|---|---|---|
| A1 | Template pages put the answer under an intro H2, not directly under the H1 (for example `/company-registration-chennai`, `/llp-registration-chennai`) | In `ServicePageTemplate.tsx`, render `intro` as `<p id="direct-answer">` **directly after the H1** (inside the hero, after the byline), and keep `introHeading` as the first H2 for the section that follows. One template change covers about 70 pages. Keep the Speakable selector pointing at `#direct-answer` | `src/components/ServicePageTemplate.tsx` | YOU | On 5 sampled template pages, the first `<p>` after `</h1>` (ignoring the byline) is the 40–60 word answer |
| A2 | No topic FAQ hubs | Build one shared `/faq/[topic]` layout (breadcrumb, visible FAQ, FAQPage, link to the owning money page). Add 9 hubs: company-registration, private-limited-company, llp-registration, digital-signature-certificate, gst-registration, gst-return-filing, gst-notice-reply, income-tax-return-filing, income-tax-notice. Each question appears on **one** hub only | `src/app/faq/[topic]/page.tsx`, `src/lib/faq-hubs.ts` | YOU | A script finds 0 duplicate questions across hubs; every hub links to its money page; hubs are in the sitemap |
| A3 | No neutral "CA firm vs online platform" comparison | `/blog/ca-firm-or-online-filing-platform`: who signs, how to verify ICAI membership (traceamember.icai.org), confidentiality, government vs professional fees as categories, and a decision table. **No brand names, no "better" or "cheaper"** | blog content + registry | YOU | grep shows 0 competitor names; a table and FAQ are present |
| A4 | Content gaps: QRMP and FC-GPR | Posts "Should my business opt for QRMP?" and "What is FC-GPR and when is it due?", each with an answer under the H1, a table, a named author, and a link to the owning page. Facts only from `docs/rule-review-log.md` or CA confirmation | blog content | YOU draft, OWNER confirms facts | Live, linked from `/gst-return-filing-chennai` and `/fema-rbi-compliance` |
| A5 | No dedicated Tamil URLs (summaries only) | Check demand first: Google autocomplete with `hl=ta` for the Tamil seeds (சென்னையில் CA, நிறுவனப் பதிவு சென்னை, ஜிஎஸ்டி நோட்டீஸ் பதில், வருமான வரி ஆலோசகர் சென்னை) and Tamil queries in Search Console. If there is demand, build `/ta/` versions of the top 3 pages with reciprocal `hreflang` (`en-IN` / `ta-IN`), written or reviewed by a fluent Tamil speaker at the firm. If not, record the decision with its evidence | `src/app/ta/...` or a decision note | YOU + OWNER review | Either valid hreflang pairs live, or a dated decision note in `seo/progress/` |
| A6 | Comparison coverage | Confirm there is an "X vs Y" page for every decision the firm advises on: structures (exists), audit types (exists), tax regimes (exists), CFO models (exists), **GST composition vs regular** and **QRMP vs monthly** (add if missing) | blog content | YOU | Every decision listed has a page with a comparison table |

## 4. Order of work

1. **Day 0, ship:** S1 (with owner approval), then confirm the live site. Re-run PageSpeed: S2, S3, S4, G8.
2. **Code sprint (you, about 1–3 days, all on one branch):** S5, S6, S7, A1, A2, A3, A6, G10, then G11 and A4 as drafts awaiting fact sign-off. Lint each changed file, regenerate page dates, push the branch, and ask the owner before `master`.
3. **Owner inputs (send as one checklist):** G1 numbers, G2 sign-offs, G9 policy, G12 confirmation, and G11/A4 fact confirmation. Then you apply them.
4. **Off-site (owner, ongoing, 2–4 months):** G3, G4, G5, G7, G13. You keep the tracker, add sameAs (G6) as listings go live, and check each link.
5. **Re-audit:** a full seo-geo-aeo audit of every sitemap URL, plus the gate checker (section 5). Score only from live evidence.

## 5. Build the gate checker first, then run it after every deploy

Write `scripts/score-30.py` (standard library only, run with `python -I`, output to `D:\csr-audit-<date>\score-30.json` and a Markdown table). It must:
1. Fetch `/sitemap.xml` and every URL in it (one at a time, browser User-Agent, 0.3 s delay).
2. Per page, check: status 200; exactly one H1; title ≤60; description 70–160; no duplicate title or description; an answer paragraph (`#lead-answer` or `#direct-answer`) with 40–60 words **placed directly after the H1** (A1); question-H2 count; visible FAQ and an FAQPage node (non-blog pages); JSON-LD parses; no images without alt; a byline ("Reviewed by" or "Written by"); and, once G1 is set, "ICAI M. No." in the byline.
3. Site-wide: near-duplicate maximum per family <40% (5-word shingles, Jaccard); 0 `<priority>` tags; robots.txt has Claude-SearchBot (and Content-Signal once G9 is approved); llms.txt lists every sitemap money page.
4. ICAI grep over the live HTML text: patterns for named review blocks ("What do clients say", "Clients who worked with us"), "why choose us", `\b(top|best|leading|no\.? ?1)\b` near "CA|chartered|firm", `₹` next to professional-fee words, and "free consultation". Expect 0.
5. sameAs: every URL in the Organization/Person `sameAs` returns 200 (LinkedIn and Instagram may block bots; record as "unverifiable", not "failed").
6. Print each gate in section 3 that can be checked automatically as PASS / FAIL / NEEDS-OWNER-EVIDENCE, and the resulting SEO / GEO / AEO scores using this rule: **10 = all gates pass; each failing gate costs 1 point; owner-evidence gates count as failing until the evidence file exists in `seo/progress/evidence/`.**

## 6. Content standard for anything you write

Title ≤60 characters with the main query. Description 70–160 characters with a call to action. One H1. A 40–60 word answer straight under the H1. Question H2s. At least one table or numbered steps. A visible FAQ of 5–8 questions. "Reviewed by CA Rushil C S" with an updated date. Links to 3 related services and the area hub. Facts traced to statute or portal sources or to CA confirmation, recorded in `docs/rule-review-log.md`. Plain language, Income-tax Act 2025 framing, no fees, no superlatives, no promises.

## 7. Reporting and stop rules

After each session, write `seo/progress/<yyyy-mm-dd>.md` with:
1. Gates that moved to PASS, each with its evidence (URL, command output or screenshot path).
2. The current score table from `score-30.py`, and the open gates.
3. The owner checklist (exact values or decisions needed, in priority order).
4. Real data only, for Search Console clicks and positions, GBP calls and direction requests, and leads by service and source. Write "no data yet" where there is none.
5. ICAI or Google-policy risks found.

**Stop and ask the owner before:** pushing to `master`; publishing any figure CA Rushil C S hasn't confirmed; turning reviews back on; adding Content-Signal; publishing Tamil pages; creating new location pages; contacting any third party; or changing business facts in `site.ts`.
