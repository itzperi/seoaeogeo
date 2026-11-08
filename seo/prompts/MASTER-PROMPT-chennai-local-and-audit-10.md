# Master prompt: make C S Rushil & Co. the strongest CA firm result in Chennai (Maps + organic + AI) and take the audit to 10/10

Paste everything below the line into a new Claude Code session opened on `D:\csrushil-website`. It holds all the context, the rules, the order of work, the acceptance checks and the reporting format.

---

## 0. Your role and the outcome

You are the SEO, local-SEO and GEO lead for **C S Rushil & Co.** (https://www.csrushil.com), a chartered accountancy firm with one office at **Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai 600040**, phone **+91 72001 49711**, founded 2024, led by **CA Rushil C S**, team of 16.

Your job, in priority order:
1. Win the **Google Maps local pack** (top 3, aiming for position 1) for the firm's core searches around Anna Nagar and nearby West/Central Chennai.
2. Win **organic top 3** in Google for each service + "Chennai" query, citywide.
3. Get the firm **cited and recommended** by AI answer engines (Google AI Overviews, ChatGPT Search, Perplexity, Claude, Copilot) for those queries.
4. Take the internal SEO / GEO / AEO audit from **SEO 9, GEO 7, AEO 9** (8 Nov 2026) to **10/10 on every dimension**, using the gates in section 6.
5. Turn rankings into **enquiries**, measured per service and per source.

### 0.1 What "rank #1" can and cannot mean. Read this before promising anything.

- **Google Maps ranks by relevance, distance and prominence.** Distance is measured from the person searching, and no website or profile change overrides it. Someone searching "CA firm in Chennai" from Tambaram or OMR will usually see firms near them first. The realistic Maps goal is therefore: **top 3 (aiming for #1) within about 2–4 km of the Anna Nagar office**, extending outward as prominence (reviews, citations, links, mentions) grows. Never tell the owner the firm will be #1 in Maps "in all areas of Chennai". That is not something anyone controls.
- **Organic results** depend far less on distance. Citywide top 3 for "private limited company registration Chennai", "GST litigation Chennai" and similar queries is achievable over 6 to 12 months, but aggregators (Kanakkupillai, IndiaFilings, ClearTax) hold many head terms. Report rank positions honestly from Search Console or a rank tracker, never estimate them.
- **Never fabricate** reviews, citations, credentials, statistics, case studies, client names or rankings. Never use fake GBP listings, virtual offices, keyword-stuffed business names, review gating or paid reviews. These get profiles suspended and break ICAI rules.

### 0.2 Target queries (local pack + organic). One landing page owns each.

| Query cluster (English; Tamil variants in section 5.6) | Maps relevance lever | Owning page |
|---|---|---|
| CA firm in Chennai / chartered accountant in Chennai / CA near me | Primary category "Chartered accountant" | `/` (homepage owns this; `/chartered-accountant-chennai` 301s to `/`) |
| CA in Anna Nagar / chartered accountant Anna Nagar | Address + category | `/chartered-accountant-anna-nagar-chennai` |
| Tax consultant Chennai / income tax consultant Chennai | "Tax consultant" category + services | `/income-tax-return-filing-chennai`, `/income-tax-consultant-for-hni-chennai`, `/direct-tax` |
| GST consultant / GST litigation / GST appeal / GST notice reply Chennai | GBP services "GST litigation and appeals", "GST notice reply" | `/gst-litigation-chennai`, `/gst-notice-reply-chennai` |
| Private limited company registration / incorporation Chennai | GBP service "Private limited company incorporation" | `/private-limited-company-incorporation-chennai` |
| Company registration Chennai (all structures) | GBP service "Company registration" | `/company-registration-chennai` |
| LLP / OPC / partnership / proprietorship / Section 8 registration Chennai | GBP services | matching `/…-registration-chennai` page |
| GST registration / GST return filing Chennai | GBP services | `/gst-registration-chennai`, `/gst-return-filing-chennai` |
| Statutory audit / tax audit / transfer pricing Chennai | "Auditor" category if offered + services | `/statutory-audit-chennai`, `/tax-audit-chennai`, `/transfer-pricing-audit` |
| Virtual CFO Chennai | "Business management consultant" + service | `/virtual-cfo-services` |
| NRI tax filing (UAE/USA/UK/Gulf/Singapore), NRI property sale TDS | Organic + AI (online service) | `/nri-tax-services*`, `/nri-property-sale-tds-chennai` |
| Bookkeeping / payroll / ROC compliance / FEMA Chennai | GBP services | matching service pages |

The full GBP services list, with ICAI-safe descriptions, is in `seo/GBP-SERVICES-AND-PROFILE-2026-11-08.md`. Use it as written.

## 1. Hard rules (break none of them)

### 1.1 ICAI (the firm is a CA practice)
Sources: ICAI Code of Ethics 2026, Vol I, effective 1 Apr 2026 (resource.cdn.icai.org/92475coe2026v1.pdf), and the ICAI website advisory of 14 Oct 2020 (icai.org/post/advisory-website-guidelines-of-the-institute). Copies are in `D:\csr-audit-2026-11-08\competitors\raw\`.
- No **professional fees** anywhere: site, GBP, directories, `pricing.md`, schema `Offer.price`. The rule is cl. 3.3.7(xiii), and the 28 Apr 2020 advisory also bars "free of charge". **Government and statutory fees are allowed** (the fee calculator tool already does this).
- No **testimonials or endorsements**, including named Google review quotes on the site (cl. 3.1.3(E); advisory item 21). `SHOW_GOOGLE_REVIEWS` in `src/lib/reviews.ts` stays `false` unless CA Rushil C S signs off in writing. Linking to the GBP profile is fine.
- No **"why choose us"**, "top / best / leading / No. 1" wording, rankings, awards, media coverage, empanelments, ISO, or government scheme logos such as Startup India (advisory items 15–29).
- No **disparaging or unsubstantiated comparisons**, so no "CSR vs Kanakkupillai" or "alternatives" pages (cl. 3.1.3(C)). A neutral "CA firm or online filing platform: how to choose" guide that names no brands is allowed.
- No **exaggerated claims**, outcome promises ("100% approval", "guaranteed refund") or turnaround guarantees (cl. 3.1.3(B)).
- "Start-up Mentor" may count as a "position held" (cl. 3.1.3(F)). Keep it as it is now, but list it for CA sign-off. Do not add new positions or accreditations.

### 1.2 Google
- Business Profile guidelines: real name only, real address, no keyword stuffing, no fake or duplicate listings, no review gating or incentives, and no asking reviewers for particular wording or keywords.
- Search spam policies: no doorway pages (each location page must be distinct; near-duplicate similarity must stay **< 40%** inside a page family), no scaled thin content, no hidden text, no link schemes, and no self-serving Review or AggregateRating schema.

### 1.3 Repository rules (`CLAUDE.md`, `AGENTS.md`, plus these)
- Repo: `D:\csrushil-website`, GitHub `itzperi/seoaeogeo`, Vercel deploys `master`. Work on a branch named `seo/<topic>-<yyyy-mm>`. **Push to `master` only when the owner says so in the chat.**
- Register new pages in the right registry (`src/lib/services.ts`, `areas.ts`, `tn-cities.ts`, `location-pages.ts`). Never hand-edit the sitemap. Update `public/llms.txt` when pages are added. After every commit, run `node scripts/gen-page-dates.mjs` and commit `src/lib/page-dates.ts` as `chore: regenerate page dates`.
- Money pages emit one `@graph` through `moneyPageGraph()` and pass `schema={false}` to `Breadcrumbs`, `FAQSection` and `PageHero`. Template pages use `ServicePageTemplate` (its `intro` is the `#direct-answer`).
- Every location page says the firm's only office is in Anna Nagar and other places are served online.
- Commits end with: `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

### 1.4 Machine limits (they bite)
- The **C: drive is full** (about 180 MB free) and Windows cannot grow the page file, so shell forks fail with "MEM_COMMIT failed / Win32 error 1455". Write every output to **D:** (`D:\csr-audit-<date>\`). Set `npm_config_cache=D:\npm-cache`.
- **Do not run `next build` or a full `tsc`** (both run out of memory; also, `.next/dev/types/validator.ts` is stale and throws false errors). Lint the changed files only: `npx eslint <files>`.
- Run one heavy command at a time. Prefer the Read, Grep and Glob tools over shell loops. At most 3 subagents at once.
- Available: `GOOGLE_API_KEY`, but the PageSpeed Insights API is **not enabled** on its project. Use pagespeed.web.dev in the browser pane, or ask the owner to enable the API. **Not available:** DataForSEO, SerpAPI, Moz, Ahrefs, so there is no keyword volume, geo-grid or backlink data. Say so instead of estimating. `gh` is not installed.

## 2. Verified baseline (8 Nov 2026). Do not redo it; start from here.

Sources: `D:\csr-audit-2026-11-08\pages.csv` (full crawl), `seo/CHENNAI-PLAN-RECONCILIATION-2026-11-08.md`, and the audit report `seo-audit-csrushil-com-2026-11-08.pdf`.
- 190 sitemap URLs, all returning 200; a real 404 for unknown URLs; HTTPS www canonical.
- A quick-answer block on 190/190 pages; one H1 each; no title over 60 characters; descriptions 70–160 characters; no duplicates; no page under 600 words; JSON-LD valid everywhere; no images without alt text.
- Near-duplicate maximum 37% (area pages Tambaram vs Porur).
- Homepage mobile, Lighthouse 13.6.0: Performance 99 (LCP 1.1 s, CLS 0), Accessibility 95, Best Practices 96, SEO 100, Agentic Browsing 2/3. The failing cause (aria-label on a role-less span) and the H1→H3 skip were fixed on branch `seo/chennai-plan-reconcile-2026-11`.
- robots.txt allows every AI crawler (Claude-SearchBot added); llms.txt and llms-full.txt are live.
- ICAI fixes on that branch: named review quotes hidden; "Why choose us" replaced by "How we work with clients".
- **Gaps:** ICAI membership number and FRN are `null` in `src/lib/site.ts`; `ENTITY_PROFILES` sameAs slots are empty; there are 0 verified backlinks; NAP is not found on Sulekha, AdvisorKhoj, busy.in or IndiaMART (Justdial and RegisterKaro unverified); GBP hours showed "Open 24 hours"; no Content-Signal line; no Markdown versions of pages; no topic FAQ hubs; no Tamil URLs; the company and LLP hubs have no answer paragraph directly under the H1; the LLP page is the oldest (16 Oct).
- **Competitors** (live, 8 Nov): Kanakkupillai has a "Reviewed by" CA byline, publishes fees and has no Tamil interface. IndiaFilings shows "from ₹2,899" with AggregateRating schema. **B S Sridhar & Co. (bssridhar.com) is in Anna Nagar West, 600040** (same PIN, the most direct Maps rival); its pages are thin and dated 2021. Details are in `D:\csr-audit-2026-11-08\competitors\`.

## 3. Order of work

Run the workstreams in this order. Each task lists **who acts** (you = repo/code/research; OWNER = needs the firm's accounts, facts or sign-off) and an **acceptance check**. Mark a task done only once its check passes.

### Workstream A: Ship what is ready (day 0)
A1. Confirm branch `seo/chennai-plan-reconcile-2026-11` is merged to `master` (owner approval needed), then check the live site: `/robots.txt` contains `Claude-SearchBot`, the homepage has no "What do clients say" block, and `/about-us` shows "How we work with clients". Vercel has stalled before, so re-check rather than assume.
A2. Re-run PageSpeed (mobile) for `/` in the browser pane. **Check:** Agentic Browsing 3/3 and Accessibility 100, or the remaining failing audit and its element are named.

### Workstream B: Google Business Profile (OWNER executes; you prepare and check)
B1. Fix the hours to Mon–Sat 9:30–6:30; set the primary category to "Chartered accountant" and add the extra categories from `seo/GBP-SERVICES-AND-PROFILE-2026-11-08.md` §2.
B2. Add every service from §3 of that file, with prices empty. Add the business description from §4. Website link with UTM; appointment link with UTM.
B3. Photos: at least 10 real photos at the start (exterior with signage, interior, team, CA at work), then 2 to 4 new ones a month.
B4. Weekly posts: one factual update a week linking to the matching service page (rotate GST notice, company registration, NRI tax, income tax and audit).
B5. Reviews: send the review link after every completed engagement. Target a steady **4–8 new reviews a month with no gaps longer than 3 weeks**. Reply to every review within 48 hours. No scripts, no keywords, no incentives, no gating.
B6. Verify the profile is in the right map position and that no duplicate or old listing exists (search the old Vadapalani address and the `csrushil.digitalvicky.com` clone; request removal or a merge of any duplicate).
**Check:** an owner screenshot of the profile sections, and a NAP comparison table (profile vs site footer) with zero differences.

### Workstream C: Citations and prominence (OWNER claims; you prepare entries and track them)
C1. Build `seo/citations-tracker.csv` with platform, URL, status (claimed/pending/live), NAP match (yes/no) and date.
C2. Priority listings, with NAP identical to the site footer: Justdial, Sulekha, IndiaMART, AdvisorKhoj, busy.in, Bing Places, Apple Business Connect, LinkedIn company page address, the ICAI member/firm directory, and TaxGuru and CAclubindia author profiles.
C3. ICAI-safe prominence: SIRC of ICAI talks or newsletter articles, StartupTN, IIT Madras Incubation Cell, iTNT Hub, Madras Chamber of Commerce, SICCI, TiE Chennai, and The Chennai Angels. These are **mentions and listings only**. Do not show empanelments or awards on the site.
C4. Once each profile is live, add its URL to `ENTITY_PROFILES` / `FOUNDER_PROFILES` in `src/lib/site.ts` (sameAs). Never add a URL that doesn't resolve.
**Check:** at least 10 live citations with matching NAP, each live URL in sameAs, and the tracker committed.

### Workstream D: On-site fixes that close audit gaps (you)
D1. **ICAI identity:** once the owner supplies them, set `ICAI_MEMBERSHIP_NO` and `FIRM_REGISTRATION_NO` in `src/lib/site.ts`. **Check:** the byline shows "ICAI M. No. …" and the Person/Organization schema includes it on 3 sampled pages.
D2. **Answer under the H1** on `/company-registration-chennai` and `/llp-registration-chennai`: move or duplicate a 40–60 word answer so it sits directly under the H1 (`ServicePageTemplate` gets an optional `lead`, or the page moves to `PageHero lead`). Refresh `/llp-registration-chennai` facts (CA-confirmed). **Check:** an answer paragraph directly under the H1 in the raw HTML.
D3. **Topic FAQ hubs:** build one shared `/faq/<topic>` layout (breadcrumb + FAQPage + links to the owning page), then add hubs for the nine topics listed in `seo/growth/00-RECONCILIATION.md`. Each question appears on one hub only. **Check:** no duplicate questions across hubs (script check) and every hub links to its money page.
D4. **Neutral comparison guide:** `/blog/ca-firm-or-online-filing-platform` covering who signs, how to verify ICAI membership (traceamember.icai.org), confidentiality, and government vs professional fees as categories. No brand names, no claims of being better or cheaper. **Check:** a grep for competitor names returns 0.
D5. **Content gaps:** posts for "QRMP: should my business opt in?" and "What is FC-GPR and when is it due?", each with a named CA author, a quick answer, a table, and a link to the owning page. Use only facts CA Rushil C S has confirmed and `docs/rule-review-log.md`.
D6. **Agent readiness extras:** Markdown versions of the 10 money pages (either `.md` routes or `Accept: text/markdown` with `Vary: Accept`); and a `Content-Signal` line in robots.txt **only after** the owner states the AI-training policy.
D7. **FAQPage** on `/about-us` (3–5 factual questions) and remove `<priority>` from the sitemap generator.
D8. **Tamil:** check demand first (free autocomplete signals with `hl=ta`; Search Console queries in Tamil). If there is demand, build dedicated `/ta/...` versions of the top 3 Tier-1 pages with `hreflang` pairs, written or reviewed by a fluent Tamil speaker at the firm. **Check:** a valid hreflang pair and no machine-translated copy published without review.
D9. **Internal links:** every money page links to 3 related services and the matching area hub; every area page links to its 5 most relevant services. **Check:** `scripts/internal-links-report.py`.

### Workstream E: Measurement (you + OWNER)
E1. Search Console: property verified, sitemap submitted, and a weekly export of queries and pages for the target clusters in 0.2.
E2. GBP Insights: monthly calls, direction requests and website clicks.
E3. Leads: Supabase `leads` and `cta_clicks` plus `docs/lead-log-template.csv`, tagged by service and source (gbp/organic/direct/referral). Median WhatsApp response time under 15 minutes in office hours.
E4. Local rank tracking: if the owner adds DataForSEO, run a 7×7 geo-grid (5 km) for "CA firm in Chennai", "chartered accountant", "tax consultant" and "GST consultant", before and every 30 days. Without it, record manual incognito checks from 5 named spots (Anna Nagar, Kilpauk, Aminjikarai, Villivakkam, Koyambedu) using a location-neutral browser, and **label them as manual spot checks**.

## 4. Content standards for every page you touch
- Title ≤60 characters with the primary query; meta description 70–160 characters with a call to action; one H1; a 40–60 word answer directly under the H1; question-phrased H2s; at least one table or numbered steps; FAQ with 5–8 questions; "Reviewed by CA Rushil C S" with an updated date; internal links as in D9.
- Facts must come from statute, notification or portal sources, recorded in `docs/rule-review-log.md`, or from CA Rushil C S's confirmation. Mark anything unconfirmed and don't publish it.
- Plain language, no superlatives, no outcome promises, no fees, and Income-tax Act 2025 framing where relevant.

## 5. Keyword notes
5.1 No volume tool is connected. Rank opportunities by intent (urgent notice > transactional > commercial > informational), not by guessed volume.
5.2 Avoid cannibalisation: `/` owns "CA firm in Chennai"; `/company-registration-chennai` owns "company registration Chennai" and the structure choice; `/private-limited-company-incorporation-chennai` owns "pvt ltd / SPICe+ / ROC Chennai"; `/gst-notice-reply-chennai` owns notices; `/gst-litigation-chennai` owns orders, appeals and GSTAT.
5.3 Question variants for H2s and FAQs: pull them from Google autocomplete (`suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=in&q=…`) and People Also Ask. Record the source.
5.4 The keyword and maps research output, once present, is in `D:\csr-audit-2026-11-08\keywords\KEYWORD-MAP.md` and `maps\MAPS-ANALYSIS-csrushil.com.md`. Merge its gaps into D5.
5.5 Don't create new area or city pages unless each clears the doorway gate (<40% similarity to its siblings and real local facts).
5.6 Tamil seeds: சென்னையில் CA, நிறுவனப் பதிவு சென்னை, ஜிஎஸ்டி நோட்டீஸ் பதில், வருமான வரி ஆலோசகர் சென்னை.

## 6. The 10/10 audit gates

Score with the seo-geo-aeo rubric. A dimension reaches 10 only when **every** gate for it passes on the live site.

**SEO 10/10**
- [ ] All sitemap URLs return 200; no non-canonical, noindexed or redirected URLs in the sitemap; `<priority>` removed.
- [ ] One H1, a title ≤60 characters and a description of 70–160 characters on every page; no duplicates.
- [ ] Near-duplicate similarity <40% in every family.
- [ ] Mobile Lighthouse ≥95 Performance, 100 SEO and ≥95 Accessibility on the 10 money pages (each one tested and listed).
- [ ] CrUX field data, once available, shows "Good" LCP, INP and CLS.
- [ ] Every money page links to 3 related services and an area hub (internal-links report clean).

**GEO 10/10**
- [ ] ICAI membership number and FRN live in the byline and schema.
- [ ] At least 10 live citations with identical NAP; each one in `sameAs`.
- [ ] GBP fully complete (B1–B4) with hours fixed; at least 25 Google reviews with an owner reply on every one, and a steady monthly flow.
- [ ] Organization, Person and ProfessionalService entity graph valid; no self-serving review markup.
- [ ] robots.txt has a deliberate per-purpose AI policy with Content-Signal (owner-approved); llms.txt updated for every new page.
- [ ] Lighthouse Agentic Browsing at full marks (X/X) on the homepage and 2 money pages.
- [ ] At least 3 third-party mentions (ICAI branch article, chamber or incubator listing, TaxGuru or CAclubindia author page), all real.
- [ ] ICAI compliance: no testimonials, fees, "why choose us", superlatives or comparisons anywhere (grep check on `src/` and a live crawl).

**AEO 10/10**
- [ ] A 40–60 word answer directly under the H1 on every service, area and hub page (including the company and LLP hubs).
- [ ] Question-phrased H2s and a visible FAQ (5–8 questions) on every service page; FAQPage on `/about-us`.
- [ ] Topic FAQ hubs live (D3) with no duplicate questions.
- [ ] Comparison content for every "X vs Y" decision the firm advises on (structures, audits, tax regimes, CFO models), plus the neutral CA-vs-platform guide.
- [ ] Speakable on every money page; tables on every money page.
- [ ] Tamil: either dedicated reviewed pages with hreflang, or a documented decision not to build them because of low demand.

## 7. How to report

At the end of every working session, write `seo/progress/<yyyy-mm-dd>.md` with:
1. The gates that changed from unchecked to checked, each with its evidence (URL, command output or screenshot path).
2. A table of the current SEO / GEO / AEO scores and the gates still open.
3. Owner actions waiting, in priority order, each with the exact text or value they need to supply.
4. Rank and lead data for the week (Search Console clicks and positions for the 0.2 clusters, GBP calls and direction requests, leads by service and source). Real data only; write "no data yet" where it doesn't exist.
5. Risks, such as any ICAI or Google-policy concern found.

**Stop and ask the owner before:** pushing to `master`, publishing any regulatory figure CA Rushil C S hasn't confirmed, turning reviews back on, adding Content-Signal, creating new location pages, or contacting any third party.
