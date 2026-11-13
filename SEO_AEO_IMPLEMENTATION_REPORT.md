# SEO and AEO implementation report

**Business:** C S Rushil & Co., Anna Nagar, Chennai  
**Audit date:** 13 November 2026 (Asia/Kolkata)  
**Branch:** `seo/seo-aeo-evidence-2026-11-13`  
**Starting commit:** `75fad1a`  
**Canonical domain:** `https://www.csrushil.com`  
**Delivery:** local changes for review; no push, merge, deployment, indexing submission or external-account changes.

## Outcome and scope

The homepage remains the canonical owner of “CA firm in Chennai” and its city-level synonyms. This implementation corrects unsupported review attribution, repairs links to unpublished articles, focuses the homepage on eight service hubs, improves concise service answers and professional verification, removes unsupported price/offer claims, and adds a rendered-site integrity check. No landing pages were created or removed.

The supplied research report was used as evidence to recheck, not as proof of current conditions. Its testimonial finding was stale: `SHOW_GOOGLE_REVIEWS` was already false. Existing canonical handling, service pages, navigation, contact integrations and schema structure were substantially sound and were preserved.

Actual rankings, backlinks, organic conversions and GBP prominence could not be measured without account exports or suitable rank-tracking data. They remain likely areas to investigate, not established deficiencies or promised gains. No first-page ranking is guaranteed.

## Architecture and existing implementations retained

- Next.js **16.3.5**, App Router, React **19.2.8**, TypeScript, Tailwind and standalone output. Core page content is server rendered/prerendered.
- `src/app/layout.tsx`: canonical metadata base, page title defaults, language, shared navigation/contact controls and organization/person/website graph. GA4 remains conditional on the existing measurement-ID configuration.
- `src/lib/site.ts`: centralized business/contact/location details. Membership number, FRN and qualification year remain null.
- `src/app/sitemap.ts`: static, service, locality, city and published-blog routes. Scheduled posts retain their publication gate. No invented priorities or daily freshness stamping were added.
- `src/app/robots.ts`: wildcard and named crawler access preserved. Crawl permission is not indexing or AI-citation assurance. Training-bot access is not a substitute for search-bot access.
- `next.config.ts`: permanent redirect from `/chartered-accountant-chennai` to `/`, and existing consolidated routes retained. Trailing-slash normalization verified.
- `src/app/md/[...path]/route.ts`: derived Markdown already has `X-Robots-Tag: noindex` and an HTTP canonical link to HTML. Preserved.
- Existing `next/image` use, team-photo alt text, lazy-loaded map/calendar frames, Tamil summaries, FAQs, service hubs and useful selection guide preserved.
- Existing review quotes remain disabled; no Review/AggregateRating schema was added. The neutral “how to choose” guide remains the comparison-intent destination.

## Findings and completed changes

| Priority | Evidence and affected files | Action and reason |
|---|---|---|
| High | `src/components/PageHero.tsx` and `src/lib/schema.tsx` turned `PAGE_DATES` Git edits into `reviewedBy`/`lastReviewed` claims. The live crawl had 120 review nodes; the homepage did not even expose a matching dated review. `seo/CA-SIGNOFF.md` contains outstanding checks. | Separate publisher/content-update information from professional review. Add an empty, evidence-backed review registry and shared visible attribution. Missing, invalid, future, blank-evidence or outdated review entries do not render. No new CA sign-off was claimed. |
| High | `src/components/BlogPostLayout.tsx` automatically described every article as written by the founder. The blog index instead described team-written material. | Identify the firm as organizational author/publisher. A named professional reviewer appears only with a recorded review of that version. |
| High | Three links on the live site and two additional links in the locally published 13 November article pointed to scheduled articles returning 404. See the three changed blog modules. | Point INC-20A/first-board-meeting links to the existing ROC compliance page. Do not prematurely publish the scheduled articles. |
| Medium | Homepage rendered the entire service catalogue (plus repeated schema offers), despite existing service hubs. | Show eight priority service hubs and five hero links for company registration, GST, tax, virtual CFO and audit. Preserve the rest of the catalogue through navigation, hubs and silo links. Match homepage offer schema to these visible hub cards. |
| Medium | General GST title emphasized returns/notices while the page/H1 owned the broader consultant intent; several priority hub answers came below key-fact sections. | Align GST title to “GST Consultants in Chennai”. Add clear, service-specific answers beneath the H1 on GST, company registration, direct tax and audit hubs. Preserve the already useful virtual CFO answer and detailed service content. |
| Medium | Generic ICAI-homepage links and “two minutes” verification claim in the shared trust block; Contact lacked a direct directions link in its directions section. | Link to ICAI Trace a Member, distinguish member identity from FRN/practice-status checks, and explain the lookup's contact/captcha requirement. Add the conditional identifier block on About/Contact and a direct coordinates-based directions link. |
| Medium | Schema `priceRange: "₹₹"` had no visible supported pricing basis. Six overseas bookkeeping process steps said “Free consultation”; company-registration summary said “Fast-tracked”. | Remove the unsupported price range; use “Initial consultation” and factual registration-process wording. Keep the consultation and enquiry functionality. This is conservative copy editing, not a finding that all consultation formats are unlawful. |
| Medium | Shared `JsonLd` used raw `JSON.stringify` inside a script element. | Escape `<` as `\u003c`, following the installed Next.js JSON-LD guidance, so future strings cannot terminate the script block. |
| Medium | Existing verification scripts failed fixed word counts, heading ratios and universal speakable requirements. | Treat these as editorial observations, not technical SEO failures. Retain hard assertions for real metadata, canonical, content and schema regressions. Add full-site link/fragment, reachability, JSON-LD/visible-FAQ, NAP, redirect and 404 checks. |
| Build prerequisite | `npm ci` rejected missing `@emnapi/core`/`@emnapi/runtime` lockfile entries. | Repair lockfile with the same declared dependencies; clean install subsequently succeeded. No application dependency upgrade was requested or performed. |

Substantive edits to 13 page records use the actual edit date, 13 November. Other page dates were not refreshed. No professional-review dates were invented. The static `llms-full.txt` claim that every service page was professionally reviewed was corrected too.

## Keyword ownership

All destinations below use the canonical `www` domain and remain self-canonical.

| Keyword/search-intent cluster | Primary route | Relationship to other pages |
|---|---|---|
| CA firm in Chennai; chartered accountant in Chennai; CA firms in Chennai | `/` | Single city-level commercial owner; old Chennai hub redirects here |
| Best CA firm in Chennai; choosing/comparing firms | `/blog/how-to-choose-a-chartered-accountant-in-chennai` | Neutral evaluation guide; no self-awarded superiority |
| CA in Anna Nagar; chartered accountant near me around the office | `/chartered-accountant-anna-nagar-chennai` | Physical-office intent; `/contact` supplies directions and contact details |
| GST consultant in Chennai | `/goods-and-services-tax` | Broad GST hub |
| GST registration Chennai | `/gst-registration-chennai` | Registration-specific intent |
| GST returns Chennai | `/gst-return-filing-chennai` | Recurring filing intent |
| GST notice reply Chennai | `/gst-notice-reply-chennai` | Notice response; appeals/tribunal intent belongs to `/gst-litigation-chennai` |
| Tax consultant / income tax consultant Chennai | `/direct-tax` | Broad tax hub; HNI, ITR and notices remain distinct specialist intents |
| Company registration Chennai | `/company-registration-chennai` | Entity-choice hub; private-limited-specific intent belongs to `/private-limited-company-incorporation-chennai` |
| Audit firm / auditors Chennai | `/audit-and-assurance` | Audit-choice hub; statutory and tax audit queries have their existing leaf pages |
| Virtual CFO / fractional CFO Chennai | `/virtual-cfo-services` | Existing route retained; no second exact-match URL |

“Near me” results depend on the searcher's location; there is no location-independent position to promise. Plural/comparison searches can also return directories, so the homepage and selection guide serve different intents without duplicating a city hub.

## Locality, overlap and indexation review

The code contains **50 geographic service pages**: 19 Chennai localities, 16 Tamil Nadu company-registration pages, and 15 income-tax/GST city pages. The rendered crawl checks their HTTP status, canonicals, metadata, links and reachability; `locationReview` in `seo/validation-local-after.json` records every page's nearest text-overlap neighbour.

The largest observed five-word Jaccard overlap was **0.314** (Porur/Tambaram), followed by Velachery/Guindy (**0.306**) and Nagercoil/Karur company-registration pages (**0.298**). Locality-page main-text counts ranged from **962 to 3,570**. These figures include shared page components and are review aids, not evidence of unique real-world service experience or Google quality thresholds.

Anna Nagar has a distinct office-access purpose. Broad locality pages and income-tax locality pages share some audience; compare the queries leading to both Anna Nagar pages before deciding whether they compete. Remote city pages must continue to disclose service from the sole Anna Nagar office. No new branch addresses were introduced.

No automatic noindex, canonical reassignment or mass redirect was applied without performance evidence. Review every page against GSC impressions/clicks, query intent, enquiry value and unique factual usefulness. A page with no differentiated purpose should be merged into the closest relevant hub with a permanent redirect, removed from sitemap/navigation and linked directly to its replacement. Low impressions alone do not establish that a new page should be deleted. Google's [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) are the relevant reference for doorway and scaled-content risks.

## Current competitive observations

Public search sampling on the audit date surfaced these sites; this is not a Chennai-localized Google rank report:

| Source | Observable positioning | Implication |
|---|---|---|
| [A. Subramanian & Co.](https://www.asandco.in/) | States establishment in 1982 and a T. Nagar office | Long operating history should be answered with verifiable firm facts, not invented longevity |
| [Shan & Associates](https://shanandassociates.com/contact/) | Displays FRN 014769S, offices and peer-review claims | Professional identifiers are valuable information to obtain and verify; competitor claims were not independently certified |
| [C&B](https://candbindia.com/) | Explains corporate finance, audit, tax and management consulting | Clear service scope and intended client types matter; promotional language is not a compliance model to copy |
| [ClearLevel Chennai directory](https://clearlevel.in/firms/ca/chennai) | Comparison/directory format for the plural query | Preserve the neutral selection guide for research intent rather than making another commercial homepage |

## Professional trust and ethics review

The current [ICAI Code of Ethics 2026, Volume I](https://ethics.icai.org/uploads/mu3onmcz-Volume-I-COE-2026-03.09.pdf) was checked, especially clauses 3.1.3, 3.3 and 3.5. The 2026 changes do not create unrestricted promotional permission: testimonial restrictions, truthful claims, service-specific push/pull limits and restrictions on solicitation remain relevant. The firm's practising CA should assess the site and outreach in context.

Keep testimonial blocks disabled. Review consultation CTAs, the comparison table, recruitment “why choose” wording, the “Start-up Mentor” designation and any future directory/aggregator activity before publication. Verify membership, active practice status, FRN, FAFD certificate, team size and founding year. These existing business claims were preserved as firm-maintained information, not independently authenticated. See `seo/CONTENT-REVIEW-PROCESS.md` for recording actual page reviews.

The visible FAQs and schema are generated from the same data. Valid schema does not guarantee rich results; its facts must match what users can see. See [Google structured-data guidance](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

## AEO decisions

Answers now identify the business, service, Anna Nagar location and next useful step early on priority pages. The homepage answers what the firm does and how to verify a CA. The existing company-registration documents, GST notice guidance, service FAQs and neutral selection article were retained rather than duplicated.

No new special AI schema or additional AI text files were added. Existing speakable and Markdown discovery features were preserved but are not treated as citation levers. Google's [AI features guidance](https://developers.google.com/search/docs/appearance/ai-features) and [AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) emphasize useful, accessible content and established SEO fundamentals. No AI-platform visibility score or citation rate was fabricated.

## Technical validation

Final command results and measured before/after observations appear below. Supporting machine-readable files are listed in the evidence section.

The default `npm run build` encountered the installed Turbopack Google Fonts resolver error (`next/font/google queries have exactly one entry`) after network access was available. The supported **`npm run build -- --webpack`** production build is the validated path for this environment. No dummy fonts, disabled certificate checking, framework downgrade or deployment was used. Before release, reproduce the chosen build command in the deployment environment; the default Turbopack issue remains an environment/framework limitation.

Browser checks: desktop homepage at 1280 pixels; mobile homepage and GST, company-registration, direct-tax, audit, About and Contact at 390 pixels; Contact at 320 pixels. One H1 per inspected page and no document horizontal overflow. Mobile navigation opened/closed. The enquiry modal opened with the selected service, generated the correct WhatsApp number/message and dismissed with Escape. Directions resolved to the configured office coordinates. No browser console errors were recorded in the final inspected tab. No messages, live lead submissions or bookings were made. Backend account-dependent workflows were not end-to-end tested.

HTML payload is reported uncompressed. It is not a Core Web Vitals result. CrUX/GSC field LCP, INP and CLS, mobile throttling, third-party map/calendar load behaviour and rich-result eligibility still need production measurement.

## External actions

### Google Search Console and measurement

1. Confirm ownership of the domain property and access for the responsible person. Export the previous 90 days of Search Performance, Page Indexing and sitemap status before a release.
2. Record query/page/device/country baselines for the mapped clusters. Search Console does not supply a reliable Chennai city rank filter; use a separate consistently located rank sample if needed.
3. After an approved deployment, inspect `/`, Anna Nagar, the five priority hubs and key specialist pages. Compare Google-selected and user-declared canonicals, rendered text, status and indexability. Submit the canonical sitemap and request indexing for materially changed priority URLs where appropriate.
4. Investigate excluded, duplicate, crawled-not-indexed and discovered-not-indexed locality pages using actual exports. Check Manual Actions, Security Issues and field Core Web Vitals.
5. Validate representative structured data through Google's Rich Results Test and Schema Markup Validator. Local JSON parsing/consistency checks are not certification by either tool.
6. Confirm GA4 configuration and existing `book`, `call`, `whatsapp` and enquiry-open tracking. Separate click proxies from qualified enquiries, accepted engagements and revenue. Maintain consent and client confidentiality.

### Google Business Profile

Use the separate [GBP action checklist](seo/GBP-ACTION-CHECKLIST-2026-11-13.md). Categories, exact listing/pin, verification, special hours, photos, review activity and account performance remain unverified externally. No GBP changes were made.

### Ethical citations and earned links

Prioritize an accurate ICAI/CA Connect record, consistent existing LinkedIn/business listings, and genuine professional or Chennai business-association participation. Potential organizations to assess include relevant ICAI regional/branch channels, the Madras Chamber and startup/incubator communities in which the firm actually participates. These are prospect categories, not claims of membership or approved placements.

Offer accurate educational contributions about real business problems to relevant publications or event organizers only after professional review. Seek editorial attribution for useful work, not purchased ranking lists, reciprocal-link schemes or bulk directory submissions. Screen commercial aggregators and any review outreach under current ICAI rules. Only add `sameAs` links after confirming the actual profile belongs to the firm.

## Prioritized 30/60/90-day plan

| Period after an approved release | Owner | Priority work | Evidence of completion |
|---|---|---|---|
| Days 1–30 | Firm principal + developer + SEO owner | Verify credentials and content review; reproduce production build; deploy only after approval; confirm GSC/GA4; complete GBP identity/pin/category review; capture baselines; assess 50 location pages | Verified identifiers, dated sign-offs, deployment/crawl logs, account exports, page-decision sheet |
| Days 31–60 | Firm reviewer + content/local SEO owner | Improve only pages with evidenced gaps; consolidate redundant intents where justified; reconcile credible citations; add helpful primary-source-backed guidance where clients actually need it; maintain compliant genuine feedback process | Reviewed revisions, redirect map if needed, citation records, qualified-enquiry log |
| Days 61–90 | SEO owner + principal | Compare matched periods, prioritize queries with meaningful impressions and weak CTR/positions, assess lead quality, test enquiry friction, pursue earned relevant mentions | Query/page changes with supporting data, conversion analysis, reviewed next-quarter priorities |

These are work periods, not promised dates for attaining a ranking. Do not publish pages merely to meet a monthly quota.

## KPI framework

| KPI | Baseline/source | Evaluation |
|---|---|---|
| Primary nonbrand cluster impressions/clicks/CTR/average position | GSC, not available in this task | Compare matched 28-day periods and page ownership; account for device/country mix |
| Priority-page indexation and selected canonicals | GSC URL Inspection/Page Indexing | Investigate exclusions of intended pages; no blanket full-site indexing target |
| Chennai local visibility | Consistent location/device rank sample plus GBP | Track separately from GSC averages; distance effects remain |
| Qualified organic enquiries | Analytics + a confidential lead log | Record source/landing page, service fit and accepted engagement; clicks alone are not leads |
| GBP calls, clicks and directions | GBP performance export | Compare monthly, allowing for seasonality |
| Credible referring domains and consistent entity profiles | Verified profile inventory and backlink data | Count relevant earned/accurate sources, not submission volume |
| Business-name searches | GSC branded-query filter | Observe trend alongside actual enquiries |
| AI citations | Monthly fixed question set, platform/date/location recorded | Keep cited URL and exact response evidence; volatile observations, not a guaranteed score |
| Mobile user experience | Production CrUX/GSC and reproducible lab tests | Monitor p75 LCP/INP/CLS; local byte reductions alone do not establish improvement |

## Evidence and files

- `seo/validation-live-before.json`: 201-page public-site snapshot.
- `seo/validation-local-after.json`: final production-preview crawl, link checks and all 50 locality-review candidates.
- `seo/validation-build.txt`, `seo/validation-lint.txt`, `seo/validation-typecheck.txt`, `seo/validation-review-tests.txt`: command evidence.
- `seo/validation-money-pages.txt`, `seo/validation-site-audit.txt`: existing checks with technical failures separated from editorial observations.
- `seo/CONTENT-REVIEW-PROCESS.md`: evidence and update workflow.
- `seo/GBP-ACTION-CHECKLIST-2026-11-13.md`: external account checklist.

All changes remain on the named local branch for review.

## Final validation results

| Validation | Result |
|---|---|
| Dependency installation | `npm ci` passed after repairing missing lockfile entries; declared dependency versions unchanged |
| TypeScript | `npm run typecheck` passed; production build also passed TypeScript |
| ESLint | `npm run lint` passed |
| Production build | `npm run build -- --webpack` passed; 288 generated static/SSG routes, including auxiliary routes, not 288 sitemap landing pages |
| Default build | `npm run build` failed in this environment on the Turbopack font resolver; see limitation above |
| Review evidence guard | `node --test scripts/content-reviews.test.mjs`: 2/2 passed |
| Full rendered integrity crawl | 202 sitemap pages and 202 distinct internal targets; 0 errors, 0 warnings |
| Priority-page SEO suite | 86/86 passed; 3 advisory question-heading observations |
| Site audit suite | 22/22 passed; 4 advisory warnings: title lengths, description lengths, missing identifiers, homepage payload |
| Responsive and enquiry UI | Inspected desktop/mobile widths; navigation and modal checks passed; no lead submission |
| Diff hygiene | `git diff --check` passed |

The integrity crawl checks HTTP status, unique/present metadata, canonical host/path, indexability, one H1, JSON-LD parsing, visible FAQ content and dated review attribution, configured contact/coordinate consistency, image alt attributes, internal links/fragments, homepage reachability, representative permanent redirects, a genuine 404 and robots/sitemap access. It does not prove substantive tax-law accuracy, actual credential validity, Google indexing, full Schema.org vocabulary validity or rich-result eligibility.

The previous SEO scripts treated fixed word counts, universal question headings, title/description character windows and sitewide speakable coverage as ranking requirements. Those checks are now editorial observations; real technical failures remain failures. The added full-site crawler independently checks link, metadata and schema/visible-content integrity. Existing `HowTo` and FAQ markup is not presented as a guarantee of a Google rich result.

## Measured before/after observations

| Measure | Public-site baseline | Local production preview |
|---|---:|---:|
| Sitemap HTML pages | 201 | 202 |
| Integrity errors | 4 (one attribution mismatch and three broken links) | 0 |
| Homepage uncompressed HTML bytes | 243,430 | 174,853 |
| Homepage internal anchor occurrences | 158 | 99 |
| Homepage main-content words (crawler heuristic) | 2,772 | 1,619 |
| Homepage visible/schema FAQ questions | 4 | 6 |
| Sitewide professional-review nodes | 120 automatically inferred | 0 pending documented sign-off |

The homepage response is 68,577 bytes (28.2%) smaller in this comparison. The service-hub focus reduced repetition while preserving access to specialist pages. Live hosting and local preview are different environments: this is an HTML-response observation, not a measured speed or ranking improvement. Neither fewer words nor fewer links is inherently a ranking advantage.

The additional sitemap article is the repository's existing scheduled `/blog/authorised-vs-paid-up-capital`, published by the existing date gate on 13 November. It exposed two further links to future articles, also repaired. No new landing page was written and no future post was deliberately published. There were five broken link occurrences across three articles; the corrected timeline paragraph now links once to the relevant ROC guide instead of claiming two separate live articles exist.

The 50 geographic pages remain accessible and await the documented intent/GSC review. This is a prioritization result, not clearance of every locality page's quality. All externally controlled work and professional sign-off remain outstanding as listed above.

## Changed-file inventory

Paths below are relative to the repository root. Validation JSON files contain public rendered-page measurements, not Search Console or private client data.

### Application and public content

- `public/llms-full.txt`
- `src/app/about-us/page.tsx`
- `src/app/audit-and-assurance/page.tsx`
- `src/app/company-registration-chennai/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/direct-tax/page.tsx`
- `src/app/goods-and-services-tax/page.tsx`
- `src/app/outsourced-bookkeeping-australia/page.tsx`
- `src/app/outsourced-bookkeeping-services/page.tsx`
- `src/app/outsourced-bookkeeping-singapore/page.tsx`
- `src/app/outsourced-bookkeeping-uae/page.tsx`
- `src/app/outsourced-bookkeeping-uk/page.tsx`
- `src/app/outsourced-bookkeeping-usa/page.tsx`
- `src/app/page.tsx`
- `src/components/BlogPostLayout.tsx`
- `src/components/ContentAttribution.tsx`
- `src/components/ICAIVerificationTrustBar.tsx`
- `src/components/PageHero.tsx`
- `src/components/ProfessionalVerification.tsx`
- `src/components/ServicePageTemplate.tsx`
- `src/content/blog/authorised-vs-paid-up-capital.tsx`
- `src/content/blog/company-registration-timeline-day-by-day.tsx`
- `src/content/blog/registered-office-at-home-company.tsx`
- `src/lib/content-reviews.ts`
- `src/lib/page-dates.ts`
- `src/lib/schema.tsx`
- `src/lib/services.ts`
- `src/lib/site.ts`

### Tooling and dependency reproducibility

- `package-lock.json`
- `package.json`
- `scripts/content-reviews.test.mjs`
- `scripts/gen-page-dates.mjs`
- `scripts/verify-csrushil-seo.mjs`
- `scripts/verify-seo-audit.mjs`
- `scripts/verify-site-integrity.mjs`

### Reports, process documentation and validation evidence

- `SEO_AEO_IMPLEMENTATION_REPORT.md`
- `seo/CONTENT-REVIEW-PROCESS.md`
- `seo/GBP-ACTION-CHECKLIST-2026-11-13.md`
- `seo/validation-build.txt`
- `seo/validation-lint.txt`
- `seo/validation-live-before.json`
- `seo/validation-local-after.json`
- `seo/validation-money-pages.txt`
- `seo/validation-review-tests.txt`
- `seo/validation-site-audit.txt`
- `seo/validation-typecheck.txt`

