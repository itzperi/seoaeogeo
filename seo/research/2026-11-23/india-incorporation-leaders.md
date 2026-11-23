# India incorporation leaders: teardown for private limited company registration

Date: 23 Nov 2026. Firm: C S Rushil & Co., Chartered Accountants, Anna Nagar, Chennai.

## Method and limits

- Pages were fetched as raw HTML with curl and parsed (title, meta, headings, JSON-LD, dates). WebFetch converts to Markdown and drops JSON-LD, so it was not used for schema checks. All pages returned HTTP 200. Nothing was blocked.
- WebSearch is a US-based tool. These are NOT India-located SERPs, and results carry no volume or click data. Rank order below is as returned, a lead only.

## SERP order as returned (US tool, not India SERP)

1. Generic query: razorpay.com/rize, cleartax (two), ipleaders, indiafilings (learn guide), legalraasta.
2. "...online India": cleartax, razorpay rize, indiafilings (product and many city pages), legalraasta, legalwiz, kanakkupillai, compliancecalendar.
3. "...in Chennai": razorpay rize, vakilsearch (two), indiafilings (two), kanakkupillai (several, incl. learn articles), bajajfinserv, legalwiz, legalraasta, onlinelegalindia.
4. "foreigners in India": razorpay rize blog, cleartax (two), taxguru, yourstory, indiafilings (three learn pages), treelife.
5. "incorporation to IPO ... virtual CFO": indiamart, yourstory, legalsuvidha, qwikfilings, treelife, grant thornton, incorpx (virtual CFO plus city pages).

Vakilsearch did not appear for the generic or "online" query here. Razorpay Rize was the most frequent top-3 name, so it is the fifth brand. IndiaFilings and Kanakkupillai win on URL volume (city and learn clusters).

## "Incorporation to IPO" check

IncorpX does NOT use the phrase "incorporation to IPO" or a start-to-listing lifecycle pitch on the pages fetched. Its claims are "end-to-end business lifecycle support" and "from first consultation to ongoing annual compliance". IPO appears only as a custom-quote tier on the virtual CFO page ("multi-entity, M&A, or IPO preparation"), a Pvt-to-Public conversion service page, and blog posts (when to convert before an IPO, SEBI SME IPO rules, funding stages to IPO). No competitor owns the lifecycle pitch. That is an open gap, not a copied position.

## Per-brand facts (seen in the HTML)

### Vakilsearch
- URL: vakilsearch.com/private-limited-company-registration
- Title: "Private Limited Company Registration @ [price] | Online". Meta description names DSC, DIN, MCA filing and a 7 working day promise.
- H1: Private Limited Company Registration. About 2,100 words of visible text.
- H2s (7, none questions): partners, packages, major cities, states and UTs, other registration services, foreign company services, post-incorporation services. The substance sits in about 26 question-style FAQ headings.
- Info banner with byline "Reviewed by [named CA]" and "Last Updated on" (Nov 2026). Tables: none.
- Schema: Product with AggregateRating, FAQPage (about 26 questions), BreadcrumbList, Article. FAQ answers are in JSON-LD.
- Dates: datePublished 2019, dateModified 2026.
- Price in title and packages. Trust: rating count, partner logos (ICAI-unsafe).
- Links: about 420 internal links, mostly footer and mega-menu hub grids (cities, states, foreign, compliance). City page (/private-limited-company-registration-in-chennai) reuses the same H2 template, same 7 headings, no localised sections, and has no JSON-LD. That is template swapping.
- /llms.txt: 404 (soft 404 HTML). robots.txt: no AI-bot rules, only utm and parameter disallows, many sitemaps. No Markdown surface.

### IndiaFilings
- URLs: /company-registration/private-limited and parent /company-registration; /indian-subsidiary.
- Private page title: "Private Limited Company Registration Online in India | IndiaFilings". H1: Private Limited Company Registration Online. About 1,800 words.
- H2s (12): 8 are full-question headings, for example eligibility, documents, cost, how to register, comparison with other structures, post-incorporation compliance. Parent page has 17 H2s and about 3,700 words with 22 FAQ questions in schema.
- Opening definition under the H1. Tables: 1 (structure comparison).
- Schema on private page: Service, Product, Offer, AggregateRating, BreadcrumbList, ItemList, 30 Review/Person. No FAQPage on this child page; parent has FAQPage-type Question/Answer data.
- dateModified Aug 2026 (child), Nov 2026 (parent). No byline found.
- Fees shown. Trust: reviews, client logos, bank backing (ICAI-unsafe).
- Indian-subsidiary page: 2,700 words, 14 question H2s (eligibility, documents, steps, laws, taxation, payment, timeline, annual compliance), 6 tables, 20 FAQ questions, dateModified May 2026.
- Chennai page: 3,100 words, 19 H2s distinct from the national page (what a consultant does, vetting an advisor, where applications stall, localities).
- /llms.txt: present, about 22 KB. Has key facts, entity identity (legal entity, founder, Wikidata links), service index, pricing and refund statements. robots.txt: allow all, no AI-bot rules, no Content-Signal. No Markdown surface (.md 404, Accept header ignored).

### Kanakkupillai
- URL: /private-limited-company-registration. Title: "Private Limited Company Registration Online in India 2026". Meta: 7-10 working days, CA-led SPICe+ filing, documents checklist.
- H1: Private Limited Company Registration Online in India. About 7,500 words, the longest page except IncorpX.
- H2s (22), topical not question-form: overview, benefits, structure comparison, eligibility, documents, steps, timeline, fee breakdown, why MCA rejects names, common mistakes, NRI and foreign nationals, first 180 days, annual compliance, FAQ.
- Tables: 6 (overview facts, structure comparison, stage timings, cost components, post-incorporation compliance, annual compliance). 25 H3s.
- Schema: FAQPage (23 questions), Service+Product, Offer, AggregateRating, 8 Review, Person (reviewer), Organization, WebSite, WebPage, BreadcrumbList, VideoObject. WebPage has lastReviewed.
- Byline: "Reviewed by" a named expert with profile link; "Last Updated on: Nov 20, 2026".
- Fees: full component breakdown. Trust: customer count, ratings (ICAI-unsafe).
- Chennai page: 3,700 words, 23 H2s, localised (ROC Chennai, local office, Chennai taxes, areas), 7 FAQ in schema, lastReviewed 21 Nov 2026.
- /llms.txt: present, about 32 KB, company summary and service list. robots.txt: allow all, a few disallows, no AI-bot rules. No Markdown surface.

### IncorpX
- URL: /private-limited-company-registration. Title: "Private Limited Company Registration from [price] | IncorpX". Meta: lists deliverables, 7 working days, government fees extra.
- H1: Private Limited Company Registration in India. About 12,000 words, but it is a heavy page with repeated review blocks.
- H2s (32, many template blocks). Substantive: what is it, which Registrar holds your file (state-to-registrar table), who can register, documents, steps, tax benefits, compliance, entity comparison, pros and cons, guides and calculators, business types, states, cities, FAQ. 33 of 75 H3s are questions.
- Bold opening definition citing Sec 2(68) of the Companies Act, 2013, then a facts list.
- Tables: 8 (cost by component, stamp duty by state, registrar jurisdiction with the notification number, eligibility, documents, tax regimes, compliance with penalties, entity comparison).
- Schema: FAQPage-type (30 questions), Organization, Review, Person, Offer, EducationalOccupationalCredential (for staff), SiteNavigationElement; WebPage with dateModified Nov 2026 and lastReviewed with a citations list pointing to government sites (MCA, Startup India, Income Tax).
- Byline: "Reviewed by [two named experts: compliance and legal]" with "Last Updated: 15 Nov 2026".
- Fees shown, "government fees extra" stated, guarantee terms section. Trust: ratings, counts, guarantees (ICAI-unsafe).
- Markdown surface: any page returns Markdown at URL plus ".md" or with Accept: text/markdown, with front matter (title, canonical, dates, price, breadcrumb). /llms.txt is about 280 KB, an index with the Markdown instructions and Q&A. robots.txt has Content-Signal: ai-train=yes, search=yes, ai-input=yes, plus crawl-delay on SEO scrapers. llms-full.txt and ai-catalog.json: 404.
- Virtual CFO page: about 11,000 words, 34 H2s, heavy Service and Offer schema, 35 FAQ questions, fundraising and investor reporting section, fee in title.
- HQ in Chennai per its llms.txt, founded Feb 2025.

### Razorpay Rize (fifth brand, most frequent top-3)
- URL: razorpay.com/rize/company-registration/private-limited. Title includes a price. Framer-built page, about 5,600 words.
- H2s: documents, process, "7 key steps to avoid penalties", benefits, fees, registration number, checklist, FAQ (about 17 H3 questions), city and state grids.
- Schema: only an Article-type block with datePublished Jul 2024 and dateModified Apr 2026. No FAQPage, no Product. Rank rests on brand authority and breadth, not schema.
- /llms.txt present (brand-level). robots.txt names OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, GPTBot, Google-Extended with Content-Signal ai-train=yes, search=yes, ai-input=yes. No Markdown surface.

## 1. Comparison table

| Item | Vakilsearch | IndiaFilings | Kanakkupillai | IncorpX | Razorpay Rize |
|---|---|---|---|---|---|
| Words (approx) | 2,100 | 1,800 (child) / 3,700 (parent) | 7,500 | 12,000 | 5,600 |
| Question H2s | 0 of 7 | 8 of 12 | few of 22 | few H2, 33 question H3s | few H2, 17 question H3s |
| Tables | 0 | 1 | 6 | 8 | 2 |
| FAQ in schema | about 26 | none on child, 22 on parent | 23 | 30 | none |
| Reviewer byline | Yes, named CA | Not found | Yes, named | Yes, two named | Not found |
| Fees shown | Yes | Yes | Full breakdown | Yes, with govt split | Yes |
| City pages | Template swap | Distinct content | Distinct, local | Cities and states grid | Grid |
| llms.txt | 404 | Yes, rich | Yes | Yes, huge | Yes |
| AI-bot robots rules | None | None | None | Content-Signal | Named bots plus Content-Signal |
| Markdown for agents | No | No | No | Yes | No |

## 2. Mechanisms that probably explain their rankings

Evidence (observed):
- Intent-complete pages: Kanakkupillai and IncorpX cover definition to FAQ on one URL; IndiaFilings splits across parent and child pages. Hub grids (states, cities, guides) sit on every page.
- Question-form headings. IndiaFilings child and subsidiary pages use question H2s; IncorpX uses question H3s. These match People Also Ask and AI passage retrieval.
- Comparison and fact tables, up to 8 on IncorpX, including a state-to-registrar table with the notification number.
- FAQ markup with 23 to 30 Q&As on three of five. Vakilsearch carries the most.
- Named reviewer plus visible updated date on three of five, matching schema dateModified or lastReviewed. Dates are all within about 3 weeks of today, so freshness is actively maintained.
- Distinct city pages at Kanakkupillai and IndiaFilings.
- Foreign-entrant depth at IndiaFilings: full question-form subsidiary page.
- AI surfaces: IncorpX Markdown pages and Content-Signal; IndiaFilings llms.txt entity facts; Razorpay named bot rules.

Guesses (not evidenced here):
- Domain authority and brand demand likely outweigh any on-page device. Razorpay ranks with almost no schema.
- llms.txt and Markdown surfaces probably do little for Google rankings; AI citation effect is unproven.
- Vakilsearch's absence may be a US-location artefact.

## 3. Adopt / Adapt / Avoid for C S Rushil & Co.

Adopt
- A definition and key-facts block at the top of each page, written in the firm's own words, citing Companies Act, 2013 Sec 2(68) after reading the current text on MCA or India Code.
- Question-form H2s that match real queries.
- Named reviewer (a partner) and a visible "last reviewed" date with matching dateModified, updated only when content genuinely changes.
- FAQPage markup for visible FAQs only; Organization, Service (no Offer, no price), BreadcrumbList.
- Tables of verifiable facts: private limited vs LLP vs OPC, process stages with the form used, registrar jurisdiction.
- Distinct local content for Chennai: ROC Chennai jurisdiction and Tamil Nadu stamp duty method, each verified on primary sources.

Adapt
- Cost: explain components (government fee heads, state-dependent stamp duty, engagement-based professional fee) with no numbers, linking to the MCA fee schedule and Tamil Nadu stamp authority.
- Reviewer byline: a named CA, ICAI-compliant wording, no rank or expertise claims.
- llms.txt: publish factual entity and service index (one office, scope, contact, page list). No counts, no ratings.

Avoid
- Rating, review, customer-count and logo blocks, and Review or AggregateRating schema (ICAI and the locked rules).
- Template-swapped city pages (Vakilsearch pattern) and any other city.
- Price in title or meta, "guarantee" and "fastest" language, refund promises.
- Copying headings, tables or FAQ text. Reuse the mechanism only.

## 4. Ten on-page changes

Targets: `/private-limited-company-incorporation-chennai` (call it A), `/company-registration-chennai` (B), and a possible India-wide guide (G).

1. Split intent. A becomes the private limited page only; B becomes the "which entity" page (private limited, LLP, OPC, partnership, proprietorship) and links to A for the company route. Mechanism: IndiaFilings parent-child split.
2. Add a definition and key-facts box on A, B and G, with Sec 2(68) cited and checked against the current text. Mechanism: IncorpX opening definition.
3. Convert A's H2s to question form (eligibility, documents, steps, timeline, post-incorporation). Mechanism: IndiaFilings question H2s.
4. Add a verified Chennai registrar block on A: ROC jurisdiction for Tamil Nadu, with the MCA notification cited. Mechanism: IncorpX registrar table; Kanakkupillai "ROC Chennai" section.
5. Add a three-column entity comparison table on B. Mechanism: Kanakkupillai and IncorpX comparison tables.
6. Add a stage-by-stage process table on A naming the form at each step (name reservation, SPICe+ parts, INC-33, INC-34, PAN and TAN) after checking MCA form pages. Mechanism: Kanakkupillai stage table.
7. Add a visible reviewer byline (named partner) and "last reviewed" date, with matching schema dateModified. Mechanism: IncorpX, Kanakkupillai, Vakilsearch bylines.
8. Add 8 to 12 visible FAQs per page with FAQPage JSON-LD that matches page text, and different questions on A and B so they do not overlap. Mechanism: IncorpX 30-question and Kanakkupillai 23-question FAQ schema.
9. Add on A a "where applications stall" section drawn from the firm's own filing experience, with no client names. Mechanism: IndiaFilings "where do applications typically stall" and Kanakkupillai "common mistakes".
10. Publish G as the India-wide guide with a foreign-directors section in question form (DSC, DIN, notarised and apostilled documents, FDI automatic route, post-issue reporting to RBI), and link A and B down from it as the only local pages. Mechanism: IndiaFilings /indian-subsidiary depth, hub architecture.

Give each query one owner: G generic, A "private limited company registration in Chennai", B "company registration in Chennai", with reciprocal links in distinct anchor text.

## 5. Incorporation to IPO lifecycle

No competitor owns this pitch. Items marked VERIFIED were seen only as search snippets from primary domains; open and re-read the sources before publishing. All others are UNVERIFIED.

- Private company definition and conversion (Sec 2(68), Sec 14, form INC-27, filing within 15 days of the special resolution): VERIFIED via MCA pages and instruction kit; open the Act text and the kit to confirm wording.
- Public company minimums and conversion steps beyond INC-27: UNVERIFIED.
- SEBI ICDR 2018 main board eligibility (net tangible assets, operating profit track record, net worth, name change test, the route through 75 percent QIB allotment): found in SEBI documents including a 2026 compilation; thresholds are NOT restated here because they must be read from the current consolidated text and amendments before publishing.
- SEBI SME platform eligibility: UNVERIFIED.
- FDI reporting: FC-GPR in the Single Master Form on RBI's FIRMS platform, within 30 days of issue; IPO allotments exempt from FC-GPR: VERIFIED via RBI Master Direction and FIRMS manual snippets; confirm against the current Master Direction.
- Section 203 CFO appointment applicability by company class (a vendor claim): UNVERIFIED.
- Audit, board meetings, DIR-3 KYC and annual filing calendar: UNVERIFIED, take from MCA and the Act.
- Stage map: incorporation, early compliance, share issues, conversion, pre-IPO readiness, listing, post-listing disclosures, stating what the firm does and what needs a merchant banker, company secretary or lawyer. Promise no outcomes.
- Flag: virtual CFO is not a term in the Act. Do not market it as a statutory role.
