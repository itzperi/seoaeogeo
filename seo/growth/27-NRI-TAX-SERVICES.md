> **PARTIAL DRAFT (3 Nov 2026): not complete.** The drafting agent stopped on an API rate limit before finishing. Do not implement from this file until the missing sections are written and the count checks pass.

# Growth System Plan 27: NRI Tax Services

**Firm:** C S Rushil & Co., Chartered Accountants (ICAI) · https://www.csrushil.com · Anna Nagar, Chennai 600040
**Service:** NRI Tax Services (service 27): Indian income-tax filing, residency/RNOR, DTAA relief, NRO/NRE income, deemed residency and returning-NRI tax for non-resident Indians
**Money page:** `/nri-tax-services` (URL kept)
**Location pages:** `/nri-tax-services-uae`, `/nri-tax-services-uk`, `/nri-tax-services-usa` (existing) + `/nri-tax-services-singapore` **NEW** + `/nri-tax-services-canada` **NEW**
**Prepared:** 3 Nov 2026 · **Reader:** founder / marketing lead who implements directly
**Inputs read in full:** `seo/growth/_BRIEF.md`; `seo/growth/_FACT-SHEET-company-registration.md` (Firm, ICAI rules); `seo/growth/_FACT-SHEET-tax-gst-dsc-nri.md`; `src/app/nri-tax-services/page.tsx`; `src/app/nri-tax-services-uae/page.tsx`; `src/app/nri-tax-services-uk/page.tsx`; `src/app/nri-tax-services-usa/page.tsx`; `src/components/ServicePageTemplate.tsx`. Also checked: `src/content/blog/nri-itr-filing.tsx`, `src/content/blog/rnor-status-returning-nri.tsx`, `src/lib/schema.tsx` (INTERNATIONAL_AREAS), `seo/growth/00-RECONCILIATION.md` and the format of plan 01.

### Conventions used throughout this file

| Marker | Meaning |
|---|---|
| **The label** | Every residency test, section or form number, rate, threshold, due date, penalty or FEMA point that is not a plain fact in the fact sheet carries the exact text: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." It is never shortened. |
| **Foreign rule** | UAE, UK, US, Singapore and Canada rules (dates, thresholds, forms) carry the same label and also need a check against that country's official source (UAE FTA/EmaraTax, HMRC/GOV.UK, IRS/FinCEN, IRAS, CRA). The firm advises on the Indian side only. |
| **ICAI-CHECK** | Copy the firm must check against ICAI's guidelines on advertisement before use (mainly the word "free"). |
| **FIRM-FILL** | A value only the firm can supply (ICAI membership no., FRN, secure-exchange tool, early/late IST call slots, consented case data, reply time). Never invent it. |
| **NEW** | A URL that does not exist today. Every other URL is an upgrade of an existing page or post. |
| **LINK-ONLY** | Owned by another plan; we link to it and never re-plan or retarget it. From the task: `/nri-property-sale-tds-chennai`, `/form-15ca-15cb-chennai`, `/income-tax-consultant-for-hni-chennai`, `/company-registration-india-for-foreigners`, `/blog/nri-director-private-limited-company`, `/blog/foreign-rsu-tax-schedule-fa-chennai`, `/blog/capital-gains-tax-property-sale`. From other plans: `/income-tax-return-filing-chennai`, `/income-tax-notice-reply-chennai`, `/income-tax-assessment-appeals-chennai`, `/direct-tax`, `/fema-rbi-compliance`, `/blog/advance-tax-deadlines`, `/blog/old-vs-new-tax-regime`, `/blog/tds-on-rent`, `/blog/why-income-tax-notices-issued`, `/blog/joint-development-agreement-tax-chennai`. |
| **W1–W12** | WhatsApp pre-filled messages defined in Section 9.7. Link format `https://wa.me/917200149711?text=<url-encoded message>`. Every message is under 500 characters (checked by script, Section 13.4). |
| **Page codes** | MP money page · UAE/UK/USA/SG/CA country pages · S1–S8 supporting articles · C1–C5 comparisons · A1–A5 audience pages · P1–P5 problem pages · T1–T3 tools · FAQ hub · CS case study · PX process explainer. Full URL list in Section 4.0. |
| **Source codes** | ITD = incometax.gov.in e-filing portal and its NRI help pages · ACT = Income-tax Act, 2025 (and the 1961 Act for FY 2025-26 and earlier) · CBDT = circulars and notifications · RBI = RBI FEMA master directions on deposits and remittances · FEMA = Foreign Exchange Management Act, 1999 and its deposit regulations · TREATY = DTAA text on incometaxindia.gov.in · FOREIGN = the relevant foreign tax authority. |

### Copy rules that apply to every line of site copy produced from this plan

1. No professional fee figures, price lists or "starting from" amounts. Government charges are facts and may be shown only with the label where not in the fact sheet.
2. No ratings, review counts, stars, testimonials-as-advertising, "best / No.1 / top / leading / guaranteed", and no competitor names. Competitor names appear in this file only in internal analysis.
3. Site copy says **"15-minute consultation"**. The word "free" is ICAI-CHECK. WhatsApp and GBP may say "free 15-minute consultation" only after the firm confirms.
4. The firm is in Anna Nagar, Chennai. Every NRI client abroad and every location outside Anna Nagar is "served online"; pages must say so.
5. The firm advises on Indian tax and FEMA touchpoints only. UK, US, UAE, Singapore and Canada tax stays with the client's local adviser. Say this on every country page.
6. Secure document exchange, call slots outside IST office hours and reply times are FIRM-FILL. Describe the process only as "the firm confirms the secure upload method at onboarding" until the firm documents it.
7. No invented client counts, results, rankings, refund amounts, turnaround promises or review quotes.
8. Every page ends with WhatsApp Us (primary), Call +91 72001 49711, or Book a 15-minute consultation (https://calendly.com/ceo-csrushil/30min).

---

## 1. Executive summary

### 1.1 Where we stand (3 Nov 2026)

| Item | Current state | Implication |
|---|---|---|
| Money page `/nri-tax-services` | Title "NRI Tax Services for UAE, UK and USA, C S Rushil & Co."; H1 "NRI Tax Services in India"; 6 sub-service cards (3 country cards, 1 property-sale card); 6-step HowTo; 6 FAQs; no key facts, no documents table, no children tables; relatedPosts = `rnor-status-returning-nri` only | Title leans on country terms the three country pages own; meta leads with property-sale TDS and repatriation, which `/nri-property-sale-tds-chennai` owns. Thin for "NRI tax filing India" / "NRI CA Chennai". Needs ≥20 FAQs, residency table, DTAA document table, NRO/NRE table, problems block, comparison table, process with responsible party, location coverage, final CTA |
| Country pages (UAE, UK, USA) | Strong: documents table, India + foreign calendar, key facts, 8–9 FAQs each, HowTo | Keep. Add the label to every date and threshold, fix the risky UAE salary FAQ, add a time-zone call-window block and the residency checker tool, and link back to MP with the anchor "NRI tax filing in India" |
| Posts owned by this plan | `/blog/nri-itr-filing` (about 450 words, no FAQs, no tables, generic CTA) and `/blog/rnor-status-returning-nri` (deep, tables, 5 FAQs) | Upgrade `nri-itr-filing` to a 2,000-word ITR guide; add the label and the returnee tool link to the RNOR post |
| Competitor landscape (internal only) | Not measured for these keywords (fact sheet). Typical SERP for NRI tax terms: national online filing platforms, bank and fintech NRI guides, large CA-firm blogs | Action 3 in Section 14: run a live SERP and Search Console check before setting rank targets. Quote no rankings anywhere |
| GBP | 4.8 stars, 58 reviews as seen 2 Nov 2026; hours wrongly "Open 24 hours" | Fix hours first (shared action 1). Never place the rating on the site or in schema |
| Audience reality | Most buyers live abroad: UAE (IST −1:30), UK (IST −5:30 in UK winter, −4:30 in summer), USA East (IST −10:30 / −9:30), USA West (IST −13:30 / −12:30), Singapore (IST +2:30), Canada Toronto (as USA East) | Office hours Mon–Sat 9:30 AM–6:30 PM IST cover the Gulf and Singapore fully, the UK only in its morning, and North America not at all. Offer asynchronous WhatsApp plus booked early-morning/late-evening IST video slots (FIRM-FILL) |

### 1.2 Facts on the live pages that need the label or look wrong (summary; full register in Section 8.6)

| # | Page | Claim as live | Problem | Action |
|---|---|---|---|---|
| L1 | MP FAQ "Who counts as an NRI" | "non-resident if you spent fewer than 182 days … A 120-day test applies … ₹15 lakh … deemed-residency rule" | Omits the 60-day + 365-day leg, so "fewer than 182 days" reads as enough; no section numbers under the 2025 Act | Rewrite with the full test table (Section 5.7) and add "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." |
| L2 | MP FAQ "Is NRE account interest taxable" | NRE and FCNR interest exempt while non-resident | Right in substance; no section reference; the RNOR post says FCNR stays exempt while RNOR, MP is silent | Add the label; align with the RNOR post |
| L3 | MP FAQ "new Income-tax Act" | 2025 Act from 1 April 2026; FY 2025-26 and earlier under the 1961 Act | Consistent with the fact sheet but date-sensitive | Add the label |
| L4 | MP FAQ "travelling" | POA "attested at an Indian embassy or consulate" | Property-sale topic belongs to `/nri-property-sale-tds-chennai`; attestation or apostille route varies by country | Replace with one line + link to the property page; add the label |
| L5 | MP title and meta | Country terms and property-sale TDS lead | Cannibalises the 3 country pages and the property page | New title and meta in Section 5.1 |
| L6 | UAE page documents and FAQ | "Form 41 (Form 10F for years under the 1961 Act)" | Form 41 as the 2025-Act number for Form 10F is not in the fact sheet | Add the label on every mention |
| L7 | UAE FAQ "Is my UAE salary taxable in India?" | "UAE salary credited directly into an Indian account is still foreign-source income" | **Looks wrong / risky.** For a non-resident, income received in India can be taxable on receipt; salary for work abroad credited straight to an Indian account is a known dispute area (relief by circular exists for some seafarers only) | CA to rewrite: "Have salary paid into your UAE account first; salary received directly in India can raise questions." Add the label |
| L8 | UAE FAQ "deemed residency" | ₹15 lakh, not liable to tax in any country, classed RNOR | Date-sensitive; the income limit excludes foreign-source income | Add the label |
| L9 | UAE/UK/USA calendars and key facts | Advance tax 15/45/75/100% and ₹10,000; belated return 31 December; revision to 31 March 2028 "as amended by the Finance Act, 2026"; return due 31 July 2027 | Every date and percentage is date-sensitive; the Finance Act, 2026 change is not in the fact sheet | Add the label to each table (footnote) and to the key-facts value |
| L10 | UAE FAQ corporate tax | "UAE corporate tax at 9% … financial years starting on or after 1 June 2023"; return "within 9 months" | Foreign rule, not in fact sheet | Add the label + UAE FTA check |
| L11 | UAE HowTo | E-verify by Aadhaar OTP, net banking, DSC; "Unverified returns are not treated as validly filed" | Methods and time limit are date-sensitive | Add the label |
| L12 | UAE documents | "Refunds are paid only to a bank account pre-validated on the portal" | Procedural rule | Add the label |
| L13 | UK FAQ non-dom | Remittance basis replaced from 6 April 2025; four-year foreign income and gains relief; "not UK resident in the previous ten years" | Foreign rule | Add the label + HMRC check |
| L14 | UK calendar | 5 October notify, 31 October paper, 31 January online, 31 July payment on account | Foreign rule | Add the label + HMRC check |
| L15 | USA key facts and FAQs | FBAR USD 10,000 aggregate; 15 April with automatic extension to 15 October; 15 June for those abroad; Form 8938 "higher thresholds"; Form 1116; PFIC | Foreign rules | Add the label + IRS/FinCEN check |
| L16 | USA FAQ inherited flat | Parents' cost and holding period for inherited property | Property-sale topic; date-sensitive | Shorten to one line + link to `/nri-property-sale-tds-chennai`; add the label |
| L17 | RNOR post | "Under the Income-tax Act, 2025 this is section 6(13)" | Section number under the 2025 Act is not in the fact sheet; check against the Act text | Add the label beside the section number |
| L18 | RNOR post | Nine-of-ten years / 729 days in seven years; retirement-account relief for "the US, UK and Canada"; no Schedule FA while RNOR | All date-sensitive | Add the label to each |
| L19 | `nri-itr-filing` post | "Interest earned on an NRE account is exempt"; "Income that arises or is received in India remains taxable regardless of residential status" | Right in substance; no label; no source per claim | Add the label during the S1 upgrade |
| L20 | MP citation link | `incometax.gov.in/.../return-applicable-0` | Portal URLs change | Re-check the link before deploy |

### 1.3 Goal and funnel maths (planning assumptions, not facts)

Target: **10 qualified NRI-tax enquiries per day = 300 per month**, contributing to 100 onboarded clients per month across services.

| Funnel stage | Monthly target | Assumption to test (replace with real data after 30 days) |
|---|---|---|
| Organic + GBP + AI-referral sessions to the NRI cluster (MP, 5 country pages, 8 articles, 5 comparisons, 5 audience pages, 5 problem pages, 3 tools, FAQ, PX) | 14,000 | Cluster-wide by day 90. NRI demand peaks June–July (Indian due date) and January–April (UK/US/Canada seasons) |
| WhatsApp clicks + calls + forms + bookings | 840 (6% of sessions) | MP, country pages and tools convert at 6–10%; articles at 2–4% |
| Qualified enquiries | 300 (about 36% of contacts) | Qualification questions (country, Indian income types, tax year, deadline or notice) raise quality |
| Proposals (written quote after a 15-minute consultation) | 150 | 50% of qualified |
| NRI clients onboarded | 45–60 | 30–40% of proposals. NRI clients recur yearly (ITR every year) and feed property-sale, 15CA/15CB and HNI work (link-only services) |

**Qualified NRI enquiry** = real need + at least one useful detail (country of residence, Indian income type, tax year, days in India, notice type or deadline, refund stuck, planned return date) + contact via WhatsApp/phone/form/booking + likely to buy in 0–90 days. Scored 0–10 in Section 12.4.

### 1.4 Strategy in eight moves

| # | Move | Why it creates enquiries | Owner |
|---|---|---|---|
| 1 | Rebuild `/nri-tax-services` as the **NRI tax filing in India** money page: residency table, NRO/NRE/FCNR table, DTAA document table, problems block, comparison vs DIY / overseas accountant alone / online platform, 22 FAQs, WhatsApp-first CTAs with a country selector | Head terms "NRI tax filing India" and "NRI CA Chennai" need one deep, Chennai-anchored page | Marketing lead + CA review |
| 2 | Launch 3 NRI tools: **Residential Status Checker**, **DTAA Document Checklist**, **NRI Tax Deadline Calendar (India + your country)** | Each tool collects country, days in India and income types, so enquiries arrive pre-qualified | Developer |
| 3 | Add **Singapore** and **Canada** country pages (NEW), each with treaty and local-filing interplay that differs from UAE/UK/USA | Large Tamil diasporas; distinct questions (Singapore has no general capital gains tax; Canada taxes worldwide income and has foreign-property reporting) | Content + CA |
| 4 | Five audience pages: seafarers, OCI cardholders, NRI investors, Chennai families managing an NRI's affairs, first year abroad | Each audience has a specific trigger and a different residency rule | Content |
| 5 | Five problem pages: notice received abroad, PAN inoperative, missed deadline, refund stuck, wrongly filed as resident | Urgent buyers convert within days | Content + CA |
| 6 | 135-answer AEO bank placed on the owning page; FAQ markup only where visible | AI engines quote short, sourced, date-labelled answers | Content |
| 7 | WhatsApp model for overseas numbers: country pre-fills, async replies, booked time-zone slots, secure upload confirmed by the firm | The buyer is abroad; phone in IST hours alone loses them | Front office |
| 8 | Diaspora distribution: Tamil associations abroad, alumni groups, LinkedIn, YouTube Shorts timed to India (June–July) and UK/US/Canada (January–April) seasons | Referral-driven category; NRIs ask family and community first | Marketing lead |

### 1.5 Keyword ownership for this cluster (no cannibalisation)

| Page | Owns (primary) | Must not target as primary |
|---|---|---|
| `/nri-tax-services` (MP) | NRI tax filing India; NRI income tax return filing (service); NRI CA Chennai / NRI tax consultant Chennai; DTAA relief for NRIs; NRI residential status and RNOR (service intent); NRO/NRE income tax; deemed residency (service intent); returning NRI tax consultant | Property-sale TDS, lower TDS certificate, repatriation, 15CA/15CB; "NRI tax UAE/UK/USA/Singapore/Canada"; HNI terms |
| `/nri-tax-services-uae`, `-uk`, `-usa`, `-singapore` NEW, `-canada` NEW | "NRI tax services <country>", "India tax for NRIs in <country>", "India–<country> DTAA for NRIs" | Generic NRI tax filing India |
| `/blog/nri-itr-filing` (S1) | how to file ITR as an NRI; which ITR form for NRI; NRI ITR due date (informational) | "NRI CA Chennai" |
| `/blog/rnor-status-returning-nri` (S2) | what is RNOR; RNOR conditions; returning NRI tax (informational) | returning-NRI service intent (MP) |
| S3–S8, C1–C5, A1–A5, P1–P5, T1–T3 | their own long-tail term (Section 4) | MP head terms |
| `/nri-property-sale-tds-chennai`, `/form-15ca-15cb-chennai`, HNI pages | LINK-ONLY | — |

### 1.6 What success looks like at day 90

| KPI | Day-90 target |
|---|---|
| MP position for "NRI tax filing India" and "NRI CA Chennai" | Baseline in week 1 (live SERP + GSC), then top 10 for "NRI CA Chennai"; page 1–2 for the national term |
| Qualified NRI enquiries/day | 10 (7-day rolling average) |
| AI citations (manual check of 20 tracked NRI prompts across ChatGPT, Perplexity, Gemini, Copilot, AI Overviews) | csrushil.com cited in ≥5 of 20 |
| Tool completions (3 tools) | 500/month, ≥25% go on to WhatsApp |
| Share of enquiries from overseas numbers (+971, +44, +1, +65) | Tracked from week 1; target ≥60% (confirms targeting) |

---

## 2. Buyer and enquiry research: 10 personas

Personas are composites built from the service scope and the questions on the live pages. They are planning tools, not client records. Every Tamil variation is given in Tamil script with transliteration.

### Persona 1: Senthil, Gulf salaried NRI with a Chennai flat (UAE)

| Field | Detail |
|---|---|
| Who | 38, project engineer in Dubai for 9 years; wife and child with him; parents in Ambattur |
| Business type | Salaried individual; owns a rented 2BHK in Chennai; NRO FDs; NRE savings |
| Location | Dubai (IST −1:30) |
| Trigger | Bank deducted TDS on NRO FD interest; tenant asked for PAN for TDS; friend told him about the ₹15 lakh deemed-residency rule |
| Urgency | Medium; peaks June–July before the Indian due date (31 July for non-audit individuals: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing.") |
| Budget sensitivity | Medium; compares with online filing apps |
| Main fear | Being treated as an Indian resident because the UAE has no income tax; losing excess TDS |
| Questions to Google/AI | "Do Dubai NRIs pay tax in India?" "Is NRO FD interest taxable for NRI?" "What is deemed resident 15 lakh rule?" |
| Exact queries | nri tax filing india from dubai; nro fd tds refund nri; deemed resident uae nri |
| Tamil variations | துபாய் என்ஆர்ஐ இந்திய வரி (Dubai NRI indhiya vari); என்ஆர்ஓ வட்டி வரி திருப்பி (NRO vatti vari thiruppi) |
| Best landing page | `/nri-tax-services-uae`, then T1 residency checker |
| Best CTA | "WhatsApp Us" with W2 (UAE pre-fill) |
| WhatsApp pre-filled message | "Hi, I live in Dubai and have rent from a Chennai flat and NRO FD interest. Tax year: ____. Days in India last year: ____. Can a CA check my status and file my Indian return?" |
| Qualification questions | Days in India this tax year and the previous four? Indian income types and rough total? Any UAE Tax Residency Certificate? |
| Follow-on services | Yearly ITR; property sale (LINK-ONLY `/nri-property-sale-tds-chennai`); 15CA/15CB (LINK-ONLY) |

### Persona 2: Dr Priya, NHS doctor with Indian mutual funds (UK)

| Field | Detail |
|---|---|
| Who | 34, NHS registrar in Birmingham; UK resident for 6 years |
| Business type | Salaried; Indian mutual funds, NRO savings, inherited share of a Coimbatore house |
| Location | Birmingham, UK (IST −5:30 / −4:30) |
| Trigger | UK accountant asked for "Indian tax paid evidence" for foreign tax credit; MF redemption had TDS |
| Urgency | High from November to 31 January (UK online deadline, foreign rule: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing.") |
| Budget sensitivity | Low–medium; values a clean evidence pack |
| Main fear | Double taxation; HMRC enquiry |
| Questions to Google/AI | "How do I claim Indian tax paid in UK self assessment?" "Do I need to file ITR in India if TDS deducted on mutual funds?" |
| Exact queries | nri tax services uk; india uk dtaa mutual fund; indian tax evidence for hmrc |
| Tamil variations | லண்டன் என்ஆர்ஐ வருமான வரி (London NRI varumaana vari) |
| Best landing page | `/nri-tax-services-uk` |
| Best CTA | "Book a 15-minute consultation" (UK morning = IST afternoon slot) |
| WhatsApp pre-filled message | "Hi, I live in the UK. My UK accountant needs evidence of Indian tax paid on my mutual funds and NRO interest for tax year ____. Can you file my Indian return and prepare the evidence pack?" |
| Qualification questions | Which Indian income types? Has your UK accountant set a date? Any Indian property sale this year? |
| Follow-on services | Yearly ITR + evidence pack; capital gains (LINK-ONLY post); HNI pillar if large portfolio (LINK-ONLY) |

### Persona 3: Arvind, US software engineer on a green card (USA)

| Field | Detail |
|---|---|
| Who | 41, Bay Area engineer; green card; parents' flat in Velachery to be sold later |
| Business type | Salaried; NRE/NRO accounts, Indian equity, PPF opened before leaving |
| Location | California (IST −13:30 / −12:30) |
| Trigger | US CPA asked for Indian account maximum balances (FBAR) and Indian tax figures by calendar year |
| Urgency | High January–April (US filing season: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing.") |
| Budget sensitivity | Low; time-poor |
| Main fear | US penalties for missing Indian accounts; Indian notice he cannot answer from abroad |
| Questions to Google/AI | "What Indian documents does my CPA need for FBAR?" "Does India tax NRE interest?" |
| Exact queries | nri tax services usa; india us dtaa nri; indian tax return for us citizen of indian origin |
| Tamil variations | அமெரிக்கா என்ஆர்ஐ இந்திய வரி தாக்கல் (America NRI indhiya vari thaakkal) |
| Best landing page | `/nri-tax-services-usa` |
| Best CTA | WhatsApp (async) with W4; booking in a late-evening IST slot (FIRM-FILL) |
| WhatsApp pre-filled message | "Hi, I live in the USA. My CPA needs my Indian tax figures by calendar year and my Indian account balances. Indian income: ____. Can you file my Indian return and share the figures?" |
| Qualification questions | US citizen, green card or visa? Which Indian accounts and income? Any notice on the Indian portal? |
| Follow-on services | Yearly ITR; property sale (LINK-ONLY); RSU/Schedule FA if he returns (LINK-ONLY post) |

### Persona 4: Kavitha, Singapore banker planning to return (Singapore, NEW page)

| Field | Detail |
|---|---|
| Who | 45, banker in Singapore 12 years; Singapore PR; plans to return to Chennai in 18 months |
| Business type | Salaried; Indian listed shares, NRO FDs, a plot in Kanchipuram |
| Location | Singapore (IST +2:30) |
| Trigger | Planning the return year; heard about RNOR; Indian broker deducted TDS on share sale |
| Urgency | Medium (planning), high in the 3 months before moving |
| Budget sensitivity | Low |
| Main fear | Indian tax on Singapore savings and CPF after return |
| Questions to Google/AI | "Is CPF taxable in India after returning?" "How long is RNOR?" "India Singapore DTAA capital gains" |
| Exact queries | nri tax services singapore; returning nri from singapore tax; rnor status singapore |
| Tamil variations | சிங்கப்பூர் என்ஆர்ஐ வரி (Singapore NRI vari); இந்தியா திரும்புதல் வரி திட்டம் (Indhiya thirumbudhal vari thittam) |
| Best landing page | `/nri-tax-services-singapore` NEW, then `/blog/rnor-status-returning-nri` |
| Best CTA | "Book a 15-minute consultation" (same-day IST slot) |
| WhatsApp pre-filled message | "Hi, I live in Singapore and plan to move back to Chennai around ____. I have Indian shares and NRO deposits. Can a CA plan my RNOR years and my Indian returns?" |
| Qualification questions | Planned arrival month? Years abroad? Foreign assets you plan to keep? |
| Follow-on services | Return-year plan; yearly ITR; Schedule FA later (LINK-ONLY post) |

### Persona 5: Ravi, Toronto PR with Indian deposits (Canada, NEW page)

| Field | Detail |
|---|---|
| Who | 36, IT analyst in Toronto; Canadian PR, citizenship due; wife's parents in Madurai |
| Business type | Salaried; NRO FDs, LIC policies, a Madurai plot |
| Location | Toronto (IST −10:30 / −9:30) |
| Trigger | Canadian preparer asked about Indian income and foreign property reporting; NRO TDS seems high |
| Urgency | High February–April (Canadian personal filing season: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing.") |
| Budget sensitivity | Medium |
| Main fear | CRA penalty for unreported Indian assets; double tax on FD interest |
| Questions to Google/AI | "Do I report Indian FD to CRA?" "India Canada tax treaty interest" |
| Exact queries | nri tax services canada; india canada dtaa nri; nro tds refund canada nri |
| Tamil variations | கனடா என்ஆர்ஐ இந்திய வரி (Canada NRI indhiya vari) |
| Best landing page | `/nri-tax-services-canada` NEW |
| Best CTA | WhatsApp (async), booking in an early-morning IST slot = Toronto evening (FIRM-FILL) |
| WhatsApp pre-filled message | "Hi, I live in Canada. I have NRO fixed deposits and a plot in Tamil Nadu. My Canadian preparer needs Indian income and tax figures. Can you file my Indian return?" |
| Qualification questions | Indian income types and amount? Which Canadian tax year? Did the bank have your PAN and NRI status? |
| Follow-on services | Yearly ITR; property sale (LINK-ONLY) |

### Persona 6: Mr and Mrs Natarajan, parents managing their son's affairs (Chennai family)

| Field | Detail |
|---|---|
| Who | Retired couple in Anna Nagar West; son in the USA, daughter in Dubai |
| Business type | They collect rent on the son's flat and operate his NRO account under a mandate or POA |
| Location | Chennai (walk-in possible at the Anna Nagar office) |
| Trigger | Tenant asked about TDS for an NRI landlord; letter/e-mail from the department in the son's name |
| Urgency | High when a notice arrives |
| Budget sensitivity | Medium–high |
| Main fear | Doing something wrong in their son's name; son unreachable in US hours |
| Questions to Google/AI | "Can parents file income tax for NRI son?" "Tenant TDS on rent paid to NRI" |
| Exact queries | nri tax consultant anna nagar; ca for nri in chennai near me; nri son income tax notice |
| Tamil variations | வெளிநாட்டில் உள்ள மகனுக்கு வருமான வரி (velinaattil ulla maganukku varumaana vari); என்ஆர்ஐ வாடகை டிடிஎஸ் (NRI vaadagai TDS) |
| Best landing page | `/nri-tax-for-families-in-chennai` NEW (A4), then MP |
| Best CTA | "Call +91 72001 49711" or visit the Anna Nagar office (Mon–Sat 9:30 AM–6:30 PM) |
| WhatsApp pre-filled message | "Hi, we are parents in Chennai. Our son/daughter lives in ____ and we look after their flat and NRO account. We need help with their Indian tax return/notice. Can we meet at your Anna Nagar office?" |
| Qualification questions | Which country does your child live in? Is it a return or a notice? Can your child join a video call? |
| Follow-on services | NRI's yearly ITR; notice reply (LINK-ONLY `/income-tax-notice-reply-chennai`); property sale (LINK-ONLY) |

### Persona 7: Captain Joseph, merchant navy officer (seafarer)

| Field | Detail |
|---|---|
| Who | 44, chief officer on foreign-flag ships; home in Thoothukudi; contracts of 4–6 months |
| Business type | Salaried seafarer; salary credited to NRE; Indian FDs |
| Location | At sea / Thoothukudi |
| Trigger | Days in India close to the threshold; bank asked for NRI status proof; refund pending |
| Urgency | High around the Indian due date |
| Budget sensitivity | Medium |
| Main fear | Losing NRI status because of shore leave; salary taxed in India |
| Questions to Google/AI | "How are seafarer days counted for NRI status?" "Is seafarer salary in NRE account taxable?" |
| Exact queries | nri status for seafarers; seafarer income tax india; merchant navy itr filing |
| Tamil variations | கப்பல் ஊழியர் வருமான வரி (kappal oozhiyar varumaana vari) |
| Best landing page | `/nri-tax-for-seafarers` NEW (A1) |
| Best CTA | WhatsApp (async, works from port Wi-Fi) with W7 |
| WhatsApp pre-filled message | "Hi, I am a seafarer on foreign-going ships. Days in India this tax year: ____. Salary is credited to my NRE account. Can you check my residential status and file my return?" |
| Qualification questions | Continuous Discharge Certificate entries available? Indian or foreign-flag ship? Any TDS on Indian FDs? |
| Follow-on services | Yearly ITR; returning plan when he moves ashore |

### Persona 8: Meena, returning NRI from Muscat (returning)

| Field | Detail |
|---|---|
| Who | 50, returned to Chennai in August after 20 years in Oman; end-of-service gratuity, Omani bank savings |
| Business type | Former salaried; now planning a small business |
| Location | Chennai (Mogappair) |
| Trigger | Bank asked to redesignate NRE accounts; unsure if foreign savings are taxable |
| Urgency | High in the first year back |
| Budget sensitivity | Medium |
| Main fear | Tax on 20 years of foreign savings; FEMA breach |
| Questions to Google/AI | "Returning NRI tax rules RNOR" "What to do with NRE account after returning" |
| Exact queries | returning nri tax consultant chennai; rnor status chennai; nre account after returning to india |
| Tamil variations | வெளிநாட்டிலிருந்து திரும்பியவர் வரி (velinaattilirundhu thirumbiyavar vari) |
| Best landing page | MP (returning-NRI service section), then `/blog/rnor-status-returning-nri` |
| Best CTA | "Book a 15-minute consultation" or walk in |
| WhatsApp pre-filled message | "Hi, I returned to Chennai from ____ in (month/year) after ____ years abroad. I have foreign savings and NRE deposits. Can a CA confirm my RNOR years and what I must do?" |
| Qualification questions | Arrival date? Years abroad? Foreign assets still held? |
| Follow-on services | ITR in RNOR and later years; company registration if she starts a business (link to `/company-registration-chennai`) |

### Persona 9: Dr Anand, OCI cardholder and US citizen (OCI)

| Field | Detail |
|---|---|
| Who | 58, US citizen and OCI holder; inherited a house in Madurai; visits India 3–4 months a year |
| Business type | Physician; Indian rent and inherited deposits |
| Location | Texas (IST −10:30 / −11:30) |
| Trigger | Long stays in India; worried about the 120-day test for persons of Indian origin |
| Urgency | Medium |
| Budget sensitivity | Low |
| Main fear | Becoming an Indian resident by mistake; repatriation of inheritance |
| Questions to Google/AI | "Does an OCI pay tax in India?" "How many days can an OCI stay in India without becoming resident?" |
| Exact queries | oci income tax india; oci card holder tax residency; person of indian origin 120 days |
| Tamil variations | ஓசிஐ அட்டைதாரர் வருமான வரி (OCI attaidhaarar varumaana vari) |
| Best landing page | `/nri-tax-for-oci-cardholders` NEW (A2) |
| Best CTA | WhatsApp with W8 |
| WhatsApp pre-filled message | "Hi, I am a foreign citizen with an OCI card. I spend about ____ days a year in India and have Indian rent/deposits. Can you check my Indian tax residency and file my return?" |
| Qualification questions | Citizenship? Days in India over the last 5 years? Indian income total? |
| Follow-on services | Yearly ITR; repatriation (LINK-ONLY 15CA/15CB); property sale (LINK-ONLY) |

### Persona 10: Karthik, first year abroad (moved in the middle of the tax year)

| Field | Detail |
|---|---|
| Who | 27, left a Chennai IT job in September for a job in Germany |
| Business type | Salaried; Indian employer deducted TDS on April–September salary; savings account not yet redesignated |
| Location | Germany (IST −4:30 / −3:30) |
| Trigger | Form 16 from the old employer; bank asked for NRI status; unsure which country taxes the year |
| Urgency | High before the Indian due date |
| Budget sensitivity | High |
| Main fear | Double tax for the year of moving; FEMA issue on the savings account |
| Questions to Google/AI | "Am I NRI in the year I leave India?" "Do I convert my savings account to NRO?" |
| Exact queries | nri status in year of leaving india; left india for job abroad itr; convert savings account to nro |
| Tamil variations | வெளிநாடு சென்ற முதல் ஆண்டு வரி (velinaadu sendra mudhal aandu vari) |
| Best landing page | `/nri-tax-for-first-year-abroad` NEW (A5) |
| Best CTA | WhatsApp with W1 |
| WhatsApp pre-filled message | "Hi, I left India on ____ for a job in ____. My Indian employer deducted TDS for part of the year. Can you check my residential status for the year and file my Indian return?" |
| Qualification questions | Exact departure date? Employment visa or study? Days in India in the 4 years before? |
| Follow-on services | Yearly ITR as an NRI; foreign country page if one exists |

### 2.1 Persona → page → CTA routing summary

| Persona | Country/segment | Landing page | First CTA | WhatsApp code | Qualification hook |
|---|---|---|---|---|---|
| 1 Senthil | UAE | `/nri-tax-services-uae` | WhatsApp | W2 | Days in India + TRC |
| 2 Priya | UK | `/nri-tax-services-uk` | Book | W3 | UK accountant date |
| 3 Arvind | USA | `/nri-tax-services-usa` | WhatsApp async | W4 | Citizen/GC/visa |
| 4 Kavitha | Singapore | `/nri-tax-services-singapore` NEW | Book | W5 | Return month |
| 5 Ravi | Canada | `/nri-tax-services-canada` NEW | WhatsApp async | W6 | Indian income types |
| 6 Natarajans | Chennai family | `/nri-tax-for-families-in-chennai` NEW | Call / walk-in | W10 | Return or notice |
| 7 Joseph | Seafarer | `/nri-tax-for-seafarers` NEW | WhatsApp | W7 | CDC days |
| 8 Meena | Returning | MP + S2 | Book | W9 | Arrival date |
| 9 Anand | OCI | `/nri-tax-for-oci-cardholders` NEW | WhatsApp | W8 | Days over 5 years |
| 10 Karthik | First year abroad | `/nri-tax-for-first-year-abroad` NEW | WhatsApp | W1 | Departure date |

---

