# Outsourced bookkeeping, US / UK / Australia / Canada: competitor mechanisms

Date: 23 Nov 2026. Purpose: learn mechanisms, never copy words or claims.

## 0. Method and limits

- WebSearch is US-based, so none of this is a local SERP. Order below is the order the tool returned, not a rank in London, Sydney or Toronto.
- Queries run: the 3 standard queries per market plus the extra one named for each market (US CPA firms, UK accountants, Australia BAS, Canada GST/HST).
- WebFetch could open: qxaccounting.com/usa (listicle), digit.business (AU guide), venn.ca, my-cpe.com (Canada), taxaj.com (Canada), kpmg.com/ca, outsource2india (BAS), mooreks.co.uk, thp.co.uk, the irs.gov retention page, gov.uk VAT Notice 700/22.
- BLOCKED or failed: meruaccounting.com, vjmglobal.com, clutch.co, osome.com, azets.com, qxaccounting.com/uk (domain safety check failed); bdo.com.au (DNS), bdo.co.uk (HTTP 500), toaglobal.com (403), taxaj support pages (403/404), and the canada.ca URLs I tried directly (404).
- JSON-LD was not observable in any fetch, because WebFetch returns text only. "Not observable" means unknown, not absent. Title tags were mostly not exposed either.
- Competitor figures (savings, client counts, ratings) are their own claims and are NOT VERIFIED.

## 1. Who shows up, and the mechanism

### United States
| Order | Result | Type | Mechanism |
|---|---|---|---|
| 1 | clutch.co/us bookkeeping listing pages | Directory | Paginated directory, reviews, rate filters |
| 2 | thefinopartners.com, meruaccounting.com, whizconsulting.net/us, globalfpo.com | India/offshore vendors | Service page plus many cost and "why outsource" posts |
| 3 | qxaccounting.com/usa "Top 10 ... for CPA Firms (2026)" | Self-ranked listicle | Vendor ranks itself first, FAQ block, many CTAs |
| 4 | 1800accountant.com "Top 8 ...", patriotsoftware.com, vjmglobal.com | Listicle, software vendor, vendor blog | Listicle and cost-guide formats |
| India query | wisemonk.io, my-cpe.com, mondaq.com, invedus, treelife.in, india-briefing.com | India vendors plus law-firm and media explainers | "What US firms can outsource to India", security checklist, SOC 2 and IRC 7216 talk |

Pattern: the offshore query is won by India-based vendors with blog clusters; the head query by directories and "top 10" listicles. No AICPA or big-4 page appeared for the India query.

### United Kingdom
| Order | Result | Type | Mechanism |
|---|---|---|---|
| 1 to 3 | bdo.co.uk, azets.com, mooreks.co.uk | Mid-tier firms with UK offices | Brand authority, thin service page, insights hub, named partners |
| 4 | accountingweb.co.uk sponsored nodes | Trade media | Sponsored vendor articles on a trusted domain |
| 5 | clutch.co UK listing, osome.com/uk, thp.co.uk | Directory, online provider, local practice | Directory; product page; long FAQ page |
| India query | vjmglobal.com (many near-duplicate UK pages), outbooks (UK-headquartered, offices in London, Australia, India), mindspace, unison globus, qxaccounting/uk | Offshore vendors, several with a UK entity | UK entity, "built by UK accountants" positioning, white-label for practices |

### Australia
| Order | Result | Type | Mechanism |
|---|---|---|---|
| 1 to 3 | bdo.com.au, rsm.global/australia, moore-australia.com.au | Large firms | Authority; bookkeeping inside a wider outsourcing menu |
| 4 | digit.business guide, sleek.com/au guide | Local specialists | Long guide, cost table, FAQ, regulator links |
| 5 | clutch.co/au, dev.to, itwire guest post, tasmaniantimes sponsored | Directory, guest posts | Guest and sponsored placements |
| BAS/India query | outsource2india, taxaj, vjmglobal, whizconsulting, fiverr gigs, blogspot posts | India vendors, freelancers | BAS service page, cost-saving claims, throwaway blog posts |

### Canada
| Order | Result | Type | Mechanism |
|---|---|---|---|
| 1 to 3 | kpmg.com/ca Finance Plus, quickbooks.intuit.com/ca guides, pwc.com/ca, bdo.ca | Big firms, software vendor | Brand authority, short pages |
| 4 | clutch.co/ca (many pages), goodfirms, venn.ca guide | Directories, fintech | Directory depth; fintech guide with 13 FAQs |
| India/GST query | my-cpe.com (MYCPE ONE), taxaj.com plus its support knowledge base, wise.com/ca, dezshira.com, cogdina | India offshore vendors | One page per sub-topic ("GST/HST compliance", "CRA compliance support", "import-export", "startups"), mostly aimed at Canadian CPA firms |

## 2. Page anatomy observed (fetched pages only)

| Page | Words (approx) | H2s | FAQ | Tables | Local content | Pricing | Trust devices |
|---|---|---|---|---|---|---|---|
| QX US listicle | 1,800 to 2,000 | 11, one question | 5 | 0 | GAAP, audit trails; no 1099, nexus or 941 | Models named, linked page | Badges, "500+ firms" claim, author bio (ICAI-unsafe: counts, self-ranking) |
| digit.business AU | 2,700 | 12, five questions | 5 | 2 (in-house vs outsourced; fee by size) | BAS, GST, STP Phase 2, super, TPB; links to ato.gov.au and tpb.gov.au | Banded table | Registered BAS agent number, partner badges, review links (ICAI-unsafe) |
| venn.ca Canada | 1,800 | 7, none questions | 5 plus 8 site FAQs | 0 | GST/HST, ITCs, place of supply, CRA; no T4 or remittances; no CRA links | Ranges, percent of revenue | "20,000+" claim, registration number |
| my-cpe.com Canada | 2,000 | 13, one question | 9 | 0 | GST/HST, remittances, T4 reconciliation, PIPEDA | Hourly "starting" rate | Logo wall, 8 testimonial images, SOC 2, ISO badges (ICAI-unsafe) |
| taxaj.com Canada | 2,500 to 3,000 | 14, one question | 5 | 1 (federal vs provincial corporate tax) | GST/HST, T2, CPP/EI, T4/T4A/T5, CRA audit support | "Request custom pricing", scope-based | Google rating, client count, "CA-led" (rating and count ICAI-unsafe) |
| kpmg.com/ca | 850 | 3 | 7 | 0 | GST/HST, PST/QST, payroll | "Complimentary quote" | Brand only |
| outsource2india BAS | 1,100 | 12 | 0 | 0 | BAS, ATO, GST; no STP or super | Hourly callout | ISO badge, client logos, "27+ years" (ICAI-unsafe) |
| mooreks.co.uk | 600 | 5, none questions | 0 | 0 | VAT, MTD, corporation tax | None | Named partners, network affiliation |
| thp.co.uk | 2,000 | 21, 12 questions | 7 | 0 | MTD only in menus; no CT600 | Qualitative, "get a quote" | Testimonials, reviews widget, named clients, awards, ICAEW logo (several ICAI-unsafe) |

Software named across fetched pages: QuickBooks Online, Xero, MYOB, Sage, Zoho Books, Dext, Hubdoc, FreeAgent, Wave, Wagepoint, ADP, TaxCycle, CCH iFirm, ProFile, Caseware.
Security claims (all NOT VERIFIED): SOC 2, ISO 27001, role-based access, NDAs, encryption, "zero breaches".

Off-site sources that recur in the search summaries: Clutch (every market), GoodFirms, DesignRush, Manifest, AccountingWeb sponsored posts (UK), Mondaq and Legal 500 explainers (US/UK), Fiverr and Upwork profiles (AU, CA), blogspot and Hashnode posts (AU), Wise and QuickBooks guides (CA), irs.gov Rev. Proc. 2013-14 (US offshore consent). No Reddit or Quora result surfaced, so their role is NOT VERIFIED.

## 3. Local rules a bookkeeper must design around, with primary sources

Status key: OPENED means I read the primary page. SNIPPET means I saw primary-domain text in search results but did not open the page; open it before citing.

### United States
| Rule | Primary source | Status |
|---|---|---|
| Record retention: 3 years, 4 for employment tax, 6 if over 25% of income omitted, 7 for bad debt or worthless securities | https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records | OPENED |
| Offshore preparation: IRC 7216 consent before return information goes to a preparer outside the US; SSN masked; mandatory wording in Rev. Proc. 2013-14 (check for a successor). Relevant only if the firm receives return data, so the page should say it does not | https://www.irs.gov/pub/irs-drop/rp-13-14.pdf | SNIPPET |
| Form 941 deposits: monthly or semiweekly by lookback total, $100,000 next-day rule | https://www.irs.gov/taxtopics/tc757 and https://www.irs.gov/pub/irs-prior/n931--2026.pdf | SNIPPET |
| 1099 threshold; safeguarding data | https://www.irs.gov/forms-pubs/about-form-1099-nec ; https://www.irs.gov/pub/irs-pdf/p4557.pdf (already on the site) | Not re-checked |
| Sales tax nexus | No irs.gov source; state revenue departments govern | NOT VERIFIED |

### United Kingdom
| Rule | Primary source | Status |
|---|---|---|
| MTD for VAT: all VAT-registered businesses keep digital records, use digital links, submit through software API | https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat | OPENED |
| Agent authorisation for VAT is by digital handshake via an agent services account; Form 64-8 does not cover MTD services | https://www.gov.uk/guidance/making-tax-digital-for-vat-as-an-agent-step-by-step and https://www.gov.uk/guidance/authorise-an-agent-to-deal-with-certain-tax-services-for-you | SNIPPET |
| MTD for Income Tax thresholds, VAT registration, record retention, UK GDPR transfers | Already cited on the firm's UK page (gov.uk, ICO) | Not re-checked |
| CT600 and Companies House filing | gov.uk Companies House and HMRC CT600 guidance | NOT VERIFIED |

### Australia
| Rule | Primary source | Status |
|---|---|---|
| BAS services for a fee need TPB registration; unpaid bookkeeping, or work under a registered agent's direction, is treated differently | https://www.tpb.gov.au/bas-agent-registration | SNIPPET |
| Payday Super and STP: from 1 July 2026 report year-to-date qualifying earnings and super liability each payday | https://www.ato.gov.au/businesses-and-organisations/super-for-employers/paying-super-on-payday/single-touch-payroll-reporting-under-payday-super | SNIPPET (ATO pages mix tenses; read the live page) |
| GST threshold, 5-year records, APP 8 | Already cited on the firm's Australia page | Not re-checked |

### Canada (no page yet)
| Rule | Primary source | Status |
|---|---|---|
| GST/HST small supplier: register when taxable revenue passes $30,000 in one quarter or over four consecutive quarters; register within 29 days of a single-quarter breach; $50,000 for public service bodies | https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4022/general-information-gst-hst-registrants.html | SNIPPET |
| GST/HST reporting period by annual taxable supplies: annual up to $1.5 million (monthly or quarterly by election), quarterly above, monthly above $6 million | same RC4022 guide | SNIPPET |
| Payroll remittance: regular (15th of next month), quarterly (small, clean record), accelerated threshold 1 and 2 by average monthly withholding | https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4001/employers-guide-payroll-deductions-remittances.html | SNIPPET; thresholds differ across guide editions, confirm live |
| T4 and summary due the last day of February; weekend rolls to next business day | https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/file-information-returns-slip-summaries/when-to-file.html | SNIPPET |
| Records: 6 years from the end of the last tax year they relate to; written CRA permission to destroy early | https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/keeping-records/where-keep-your-records-long-request-permission-destroy-them-early.html | SNIPPET |
| PIPEDA: the organisation stays accountable for personal data sent abroad for processing; contract, oversight, transparency | https://www.priv.gc.ca/en/privacy-topics/airports-and-borders/gl_dab_090127/ | SNIPPET; a later OPC consultation takes a stricter view on consent, so read current guidance |
| PST, QST, Quebec rules | Revenu Quebec and provincial sites | NOT VERIFIED, leave out |

## 4. Gap analysis: existing US, UK and Australia pages versus winners

Already stronger than most winners: a "who files" table per task, a time-zone table, a primary-source citation on every rule, and a data section naming the legal basis. venn.ca and QX cite no regulator. digit.business is the benchmark for the Australia page.

Gaps (from the shared component and data file only; I did not render the live pages):
1. No FAQ block, while every fetched winner has 5 to 12 question items. Add 5 per page that reuse the page's own verified rules, with no new claims.
2. US: no Form 941 deposit rule, no sales tax or nexus note, no 1099 filing mechanics beyond the threshold. Winners rarely cover these either, so this is an opening. The 7216 point is the most cited compliance topic in India-to-US content; add it as "what we do not receive".
3. UK: MTD for VAT and Income Tax are covered, but not the agent-authorisation handshake, the one practical step a UK client or accountant must take, nor how digital links affect which tools can be combined.
4. Australia: TPB and Payday Super are present. Missing versus digit.business: an in-house versus outsourced comparison table and a "how to check a BAS agent on the TPB register" step.
5. All markets: no "first month" onboarding section (access invite, chart of accounts review, opening balances), which vendor pages use for long-tail queries. Describe the steps with no turnaround numbers.
6. Off-site: no presence where AI answers draw from (Clutch, GoodFirms, AccountingWeb). Publishing off-site needs owner approval (locked rule 10).

## 5. Recommended Canada page outline (owner approval needed first, locked rule 10)

Slug: outsourced-bookkeeping-canada, as a new Canada entry in the markets data file, same shape as the others. Target 600+ words not shared with siblings, checked with the shingle script. Reason to exist: Canada has its own tax, payroll and privacy rules, and the client's own agent files.

Market-specific sections (shared component headings do not count toward the 600):
1. "Who files what in Canada?" (about 150 words). We keep the books, prepare figures, reconcile the GST/HST account to the ledger. The client or the client's own Canadian accountant or payroll provider files the GST/HST return, remits payroll, files T4s and the corporate return. Handoff rows: GST/HST, payroll remittance, T4 year-end, year-end package for the client's accountant.
2. "When does a small business have to register for GST/HST?" (about 100 words). Small supplier threshold, 29-day rule, voluntary registration; cite RC4022.
3. "How often is the GST/HST return due?" (about 90 words). Reporting period by annual taxable supplies and the election; the ledger is closed to match the client's period.
4. "How do payroll remittances and T4s shape the monthly close?" (about 120 words). Remitter types, due dates, February T4 deadline; cite T4001 and the CRA when-to-file page. We reconcile payroll liabilities to the bank; the provider remits.
5. "How long must Canadian records be kept?" (about 60 words). Six years, CRA permission to destroy early; books sit in the client's own QuickBooks or Xero file.
6. "How is personal data handled when books are kept from India?" (about 100 words). Accountability stays with the Canadian business under PIPEDA; named logins in the client's own file; contract and oversight are the client's safeguards; cite the OPC guidance. No SOC 2 or ISO claims.
7. Hours table: Eastern, Central, Pacific against India time, with the no-daylight-saving note (about 60 words).
8. Five FAQs reusing the above, with FAQPage schema only if the visible text matches.

Leave out: PST, QST, Quebec, provincial corporate tax rates, T2 preparation, CRA representation, any statement that we file with the CRA.

## 6. Adopt / Adapt / Avoid under the locked rules

Adopt
- A primary-source citation on every rule (digit.business shows the benchmark).
- A 5-item question-form FAQ per market, drawn from the page's own verified rules.
- A "how to verify" step pointing to an official register (TPB register, HMRC agent services, CRA online account).
- The who-files handoff table, which no competitor shows in this form.

Adapt
- Sub-topic depth (taxaj and vjmglobal run a page per topic): use one H2 per rule inside a single market page. No separate "GST/HST" or "BAS only" pages, which would be doorways.
- Security sections: describe practice (named logins, client-owned file, removal on request) with no certification claims.
- Pricing: describe what decides scope and cost with no figures, as the existing pages do.
- Listicle format: a neutral "questions to ask any provider" checklist, unranked, naming no firm.

Avoid
- Self-ranked "top 10" lists and any "best" wording.
- Savings percentages, hourly rates, "starting from" figures, flat monthly fees.
- Client counts, years in business, satisfaction scores, ratings, testimonial images, client logos, awards, SOC 2 or ISO badges, "zero breaches".
- Fiverr, Upwork, blogspot, Hashnode, dev.to or sponsored AccountingWeb placements: low quality, and off-site publishing needs owner approval.
- Near-duplicate per-city or per-service variants (the vjmglobal pattern); locked rule 8.
- Any wording suggesting the firm lodges BAS, VAT, CT600, 1099, GST/HST or T4 returns, or holds a US, UK, Australian or Canadian office.
