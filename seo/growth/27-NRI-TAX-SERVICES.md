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

> **Cross-plan note (4 Nov 2026):** read `00-RECONCILIATION.md` first. Shared tools and articles have one owner across all plans; URLs below are aligned to it.

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

## 3. Keyword map: 100 keywords

### 3.1 Codes used in the map

| Code | Meaning | Code | Meaning |
|---|---|---|---|
| MP | `/nri-tax-services` | UAE / UK / USA | `/nri-tax-services-uae`, `-uk`, `-usa` (existing) |
| SG / CA | NEW `/nri-tax-services-singapore`, `/nri-tax-services-canada` | S1 / S2 | `/blog/nri-itr-filing`, `/blog/rnor-status-returning-nri` (upgrades) |
| S3-S8 | NEW supporting posts (Section 4.2) | C1-C5 | NEW comparison posts (Section 4.3) |
| A1-A5 | audience pages (Section 4.5) | P1-P5 | problem posts (Section 4.6) |
| T1 / T2 / T3 | NEW tools: residency checker, DTAA document checklist, deadline calendar | FAQ | NEW `/faq/nri-tax` (linked from `/faq`) |
| PX | NEW `/nri-tax-filing-process-explained` | CS | NEW `/case-studies/nri-tax` (noindex until consent) |
| PROP | LINK-ONLY `/nri-property-sale-tds-chennai` | 15CA | LINK-ONLY `/form-15ca-15cb-chennai` |
| HNI | LINK-ONLY `/income-tax-consultant-for-hni-chennai` | FOR | LINK-ONLY `/company-registration-india-for-foreigners` |
| DIR | LINK-ONLY `/blog/nri-director-private-limited-company` | RSU | LINK-ONLY `/blog/foreign-rsu-tax-schedule-fa-chennai` |
| CG | LINK-ONLY `/blog/capital-gains-tax-property-sale` | ITR / NOT / APP | LINK-ONLY `/income-tax-return-filing-chennai`, `/income-tax-notice-reply-chennai`, `/income-tax-assessment-appeals-chennai` |
| ADV / TDSR / WHY / FEMA | LINK-ONLY `/blog/advance-tax-deadlines`, `/blog/tds-on-rent`, `/blog/why-income-tax-notices-issued`, `/fema-rbi-compliance` | W1-W12 | WhatsApp messages in Section 9.7 |

| Authority code | Source |
|---|---|
| ITD | incometax.gov.in e-filing portal and its NRI help pages |
| ACT | Income-tax Act, 2025 (and the 1961 Act for FY 2025-26 and earlier) |
| RBI | rbi.org.in FEMA directions on deposits and remittances |
| TREATY | DTAA text on incometaxindia.gov.in |
| FOREIGN | the relevant foreign tax authority (UAE FTA, HMRC, IRS/FinCEN, IRAS, CRA) |

Enquiry potential: H = high (BOFU, buyer details likely), M = medium, L = low. P1 = weeks 1-4, P2 = weeks 5-9, P3 = weeks 10-13. "Primary?" = Y if the keyword is the target page's primary keyword, S if secondary. **A dagger (†) in the Entities column means the exact label "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." applies wherever that fact is used in copy.** No volumes or rankings are quoted: none were measured (Action 3, Section 14).

Tamil Nadu city decision (category H): no new city pages. NRI buyers in Coimbatore, Madurai, Trichy and similar towns are served online and ask the same questions as Chennai buyers, so a "Tamil Nadu coverage" block on MP (Section 5.10) and the seafarer page A1 (Thoothukudi) carry them. The HNI plan already owns city pages for high-net-worth individuals; a separate NRI city page would be a doorway.

### 3.2 A. Transactional (10)

| # | Keyword | Intent | Funnel | P | Page type | Target URL | Primary? | Secondary kws | Entities | Likely next action | WA CTA | Internal links | Authority | Format | Enq. |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | nri tax filing india | Hire a firm to file | BOFU | P1 | Money page | MP | Y | nri income tax return filing; file itr from abroad | ITD e-filing, ITR-2, residential status | WhatsApp / book | W12 | T1, T2, PX, UAE | ITD, ACT | Service page + tables + 22 FAQs | H |
| 2 | nri income tax return filing service | Hire | BOFU | P1 | Money page | MP | S | nri itr filing service; nri return filing online | Form 26AS, AIS, refund | WhatsApp | W12 | T2, PX, S1 | ITD, ACT | Service page + tables + 22 FAQs | H |
| 3 | nri ca in chennai | Hire a CA in Chennai | BOFU | P1 | Money page | MP | Y | nri chartered accountant chennai; ca for nri chennai | Anna Nagar office, video call | WhatsApp / call | W12 | A4, PX | ITD, ACT | Service page + tables + 22 FAQs | H |
| 4 | nri tax consultant chennai | Hire | BOFU | P1 | Money page | MP | S | nri tax advisor chennai; nri tax expert chennai | CA-led, served online | WhatsApp | W12 | PX, T1 | ITD, ACT | Service page + tables + 22 FAQs | H |
| 5 | file itr for nri from abroad | Do it now | BOFU | P1 | Money page | MP | S | file indian itr from usa; file indian return from dubai | E-verification, NRO account | Checker then WhatsApp | W12 | T1, S1, UAE, USA | ITD, ACT | Service page + tables + 22 FAQs | H |
| 6 | nri tax services uae | Hire (country) | BOFU | P1 | Location page | UAE | Y | india tax for nris in dubai; nri itr filing uae | India-UAE DTAA, TRC, Form 10F† | WhatsApp | W2 | MP, T2, S6 | ITD, TREATY, FOREIGN | Country page + calendar | H |
| 7 | nri tax services uk | Hire (country) | BOFU | P1 | Location page | UK | Y | india tax for nris in uk; nri itr uk | India-UK DTAA, HMRC credit | Book (UK morning = IST afternoon) | W3 | MP, T2, S4 | ITD, TREATY, FOREIGN | Country page + evidence table | H |
| 8 | nri tax services usa | Hire (country) | BOFU | P1 | Location page | USA | Y | india tax for nris in usa; nri itr usa | India-US DTAA, Form 1116, FBAR | WhatsApp (async) | W4 | MP, T2, A3 | ITD, TREATY, FOREIGN | Country page + CPA table | H |
| 9 | nri tax services singapore | Hire (country) | BOFU | P2 | Location page (NEW) | SG | Y | india tax for nris in singapore; nri itr singapore | India-Singapore DTAA, CPF, IRAS | Book (same-day IST slot) | W5 | MP, S2, S7 | ITD, TREATY, FOREIGN | Country page + who-taxes-what | H |
| 10 | nri tax services canada | Hire (country) | BOFU | P2 | Location page (NEW) | CA | Y | india tax for nris in canada; nri itr canada | India-Canada DTAA, CRA, NRO | WhatsApp (async) | W6 | MP, S3, C3 | ITD, TREATY, FOREIGN | Country page + records table | H |

### 3.3 B. Commercial investigation (10)

| # | Keyword | Intent | Funnel | P | Page type | Target URL | Primary? | Secondary kws | Entities | Likely next action | WA CTA | Internal links | Authority | Format | Enq. |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 11 | nri tax filing service or online platform | Compare providers | MOFU | P1 | Comparison | C4 | Y | nri ca vs online itr filing; best nri itr filing service | Online platform, CA, overseas accountant | Table then WhatsApp | W12 | MP, PX | ITD | Decision table | M |
| 12 | how much does nri tax filing cost in india | Price research (no figures) | MOFU | P2 | Process explainer | PX | Y | nri itr filing fees; nri tax consultant fees | Written quote after consultation | Book consultation | W12 | MP, T2 | ITD | Scope table | M |
| 13 | dtaa relief for nris india | Service research | MOFU | P1 | Money page | MP | Y | double taxation avoidance nri; dtaa claim nri | DTAA, TRC, Form 10F† | WhatsApp | W12 | S4, C3, T2 | ITD, ACT | Service page + tables + 22 FAQs | M |
| 14 | tax residency certificate form 10f nri | How to get documents | MOFU | P1 | Supporting article | S4 | Y | trc for nri; form 10f nri; dtaa documents | TRC, Form 10F (2025-Act number†) | Checklist then WhatsApp | W12 | MP, T2, C3 | ITD, TREATY | Document guide | M |
| 15 | ca for nri taxation india | Hire | MOFU | P2 | Money page | MP | S | chartered accountant for nri taxation; nri taxation services india | Residency, DTAA, NRO | WhatsApp | W12 | T1, PX | ITD, ACT | Service page + tables + 22 FAQs | M |
| 16 | returning nri tax consultant | Hire (returnee) | MOFU | P1 | Money page | MP | S | tax advisor for returning nri; nri moving back to india tax | RNOR, NRE redesignation† | Book | W12 | S2, C5, T1 | ITD, ACT | Service page + tables + 22 FAQs | M |
| 17 | nri tax planning in india | Plan | MOFU | P3 | Audience page | A3 | S | nri investment tax planning india; nri portfolio tax | Capital gains, TDS, DTAA | WhatsApp | W12 | S7, MP | ITD | Instrument table | M |
| 18 | nri tax compliance india checklist | Checklist | MOFU | P2 | Tool | T2 | S | nri tax compliance requirements; nri return checklist | Form 26AS, AIS, TRC | Download then WhatsApp | W12 | MP, T3 | ITD, TREATY | Interactive checklist | M |
| 19 | nri tax return documents required | Prepare | MOFU | P1 | Tool | T2 | Y | nri itr documents; documents for nri return | PAN, bank statements, TDS certificates | Checklist then WhatsApp | W12 | MP, S1, S4 | ITD, TREATY | Interactive checklist | M |
| 20 | nri itr filing process | Understand process | MOFU | P2 | Process explainer | PX | S | how nri itr filing works online; nri itr steps | Residency, computation, e-verification† | Book | W12 | MP, S1 | ITD | Scope table | M |

### 3.4 C. Problem / urgent (10)

| # | Keyword | Intent | Funnel | P | Page type | Target URL | Primary? | Secondary kws | Entities | Likely next action | WA CTA | Internal links | Authority | Format | Enq. |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 21 | nri income tax notice received | Urgent help | BOFU | P1 | Problem page | P1 | Y | income tax notice nri abroad; nri notice email india | e-Proceedings, authorised representative† | WhatsApp | W11 | MP, A4 | ITD | 48-hour triage | H |
| 22 | pan inoperative nri | Urgent fix | BOFU | P1 | Problem page | P2 | Y | nri pan aadhaar link; pan not working nri | PAN, Aadhaar linking† | WhatsApp | W11 | MP, P4 | ITD | Fix steps | H |
| 23 | missed itr deadline nri | Urgent fix | BOFU | P1 | Problem page | P3 | Y | nri late itr; nri belated return | Belated return, ITR-U† | WhatsApp | W11 | MP, T3 | ITD | Options table | H |
| 24 | nri itr refund not received | Urgent fix | BOFU | P1 | Problem page | P4 | Y | nri tax refund status; nri refund delayed | Refund, bank validation† | WhatsApp | W11 | MP, P2 | ITD | Cause-fix table | H |
| 25 | filed itr as resident by mistake nri | Urgent fix | BOFU | P2 | Problem page | P5 | Y | wrong residential status itr; revise nri return | Revised/updated return† | WhatsApp | W11 | MP, T1 | ITD | Correction steps | H |
| 26 | nro fd tds refund nri | Problem | BOFU | P1 | Supporting article | S3 | Y | excess tds nri; nro interest refund | NRO FD, TDS, Form 26AS | WhatsApp | W12 | MP, C1 | ITD | Problem guide | H |
| 27 | excess tds deducted nri refund | Problem | BOFU | P2 | Problem page | P4 | S | tds refund nri bank deducted too much | TDS certificate, return | WhatsApp | W11 | S3, MP | ITD | Cause-fix table | H |
| 28 | nri tenant tds rent problem | Problem | MOFU | P2 | Supporting article | S5 | Y | tenant asks tds nri landlord; rent to nri tds | Tenant TDS†, PAN | WhatsApp | W10 | A4, MP | ITD | Landlord guide | M |
| 29 | nri belated return penalty | Problem | MOFU | P2 | Problem page | P3 | S | late filing fee nri; interest on late itr nri | Fee and interest† | WhatsApp | W11 | T3, MP | ITD | Options table | M |
| 30 | nri reassessment notice abroad | Urgent | BOFU | P2 | Problem page | P1 | S | nri 148 notice; nri notice from income tax department | Reassessment† | WhatsApp | W11 | MP | ITD | 48-hour triage | H |

### 3.5 D. Comparison (10)

| # | Keyword | Intent | Funnel | P | Page type | Target URL | Primary? | Secondary kws | Entities | Likely next action | WA CTA | Internal links | Authority | Format | Enq. |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 31 | nre vs nro account tax | Compare | MOFU | P1 | Comparison | C1 | Y | nre vs nro fd interest; nre or nro for rent | NRE, NRO, FCNR, FEMA† | WhatsApp | W12 | MP, S3, C5 | RBI, ITD | Decision table | M |
| 32 | nri vs rnor vs resident | Compare | MOFU | P1 | Comparison | C2 | Y | who is nri for income tax; resident but not ordinarily resident | Residential status† | Checker | W12 | T1, S2 | ITD, ACT | Status table | M |
| 33 | dtaa exemption vs foreign tax credit | Compare | MOFU | P2 | Comparison | C3 | Y | dtaa relief method nri; credit method india | Exemption, credit | WhatsApp | W12 | S4, MP | TREATY | Method table | M |
| 34 | nri ca vs online itr filing | Compare | BOFU | P1 | Comparison | C4 | S | nri tax filing online vs ca; diy nri itr | Platform vs CA | WhatsApp | W12 | MP, PX | ITD | Decision table | H |
| 35 | fcnr vs nre vs rfc | Compare | MOFU | P2 | Comparison | C5 | Y | nre account after returning to india; rfc account | FCNR, RFC, RNOR | Book | W9 | S2, C1 | RBI, ITD | Account table | M |
| 36 | nre vs nro fd interest tax | Compare | MOFU | P2 | Comparison | C1 | S | nre fd tax free; nro fd taxable | Interest, TDS | Table then WhatsApp | W12 | S3 | RBI, ITD | Decision table | M |
| 37 | itr 2 vs itr 3 for nri | Compare | MOFU | P2 | Supporting article | S1 | S | which itr form for nri; itr form nri | ITR-2, ITR-3† | WhatsApp | W12 | MP, T2 | ITD | Step guide | M |
| 38 | old vs new tax regime for nri | Compare | MOFU | P3 | Supporting article | S1 | S | nri new tax regime; regime choice nri | Regime default† | WhatsApp | W12 | MP | ITD | Step guide | M |
| 39 | residential status vs citizenship india tax | Compare | TOFU | P3 | Comparison | C2 | S | citizenship vs tax residency india | Citizenship, days | Checker | W12 | T1 | ITD, ACT | Status table | L |
| 40 | nri vs oci vs pio tax | Compare | TOFU | P2 | Audience page | A2 | S | oci vs nri income tax; pio tax india | OCI, PIO† | WhatsApp | W8 | T1, C2 | ITD, RBI | Day grid | L |

### 3.6 E. Informational (10)

| # | Keyword | Intent | Funnel | P | Page type | Target URL | Primary? | Secondary kws | Entities | Likely next action | WA CTA | Internal links | Authority | Format | Enq. |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 41 | how to file itr as nri | Learn | TOFU | P1 | Supporting article | S1 | Y | how nri files income tax return india; steps nri itr | ITR-2, e-verify† | Checklist | W12 | MP, T1, T2 | ITD | Step guide | L |
| 42 | which itr form for nri | Learn | TOFU | P1 | Supporting article | S1 | S | itr form for nri; nri cannot file itr-1 | ITR-2, ITR-3† | Checker | W12 | MP, T1 | ITD | Step guide | L |
| 43 | nri itr due date | Learn | TOFU | P1 | Tool | T3 | Y | nri tax calendar; itr last date nri | 31 July, 31 December† | Calendar download | W12 | S1, P3 | ITD, FOREIGN | Calendar tool | M |
| 44 | what is rnor status | Learn | TOFU | P1 | Supporting article | S2 | Y | rnor conditions; rnor meaning india tax | 9-of-10, 729 days† | Checker | W9 | MP, T1, C2 | ITD, RBI | Guide + tables | L |
| 45 | who is nri for income tax purposes | Learn | TOFU | P2 | Comparison | C2 | Y | nri definition income tax; 182 days nri | 182 days, 60+365† | Checker | W12 | T1 | ITD, ACT | Status table | L |
| 46 | is nre interest taxable in india | Learn | TOFU | P1 | Comparison | C1 | S | nre interest tax free; nre account tax | NRE, Section for exemption† | WhatsApp | W12 | S3, MP | RBI, ITD | Decision table | L |
| 47 | deemed resident 15 lakh rule | Learn | TOFU | P1 | Supporting article | S6 | Y | deemed resident uae; 15 lakh nri rule | Deemed resident†, RNOR | Checker | W2 | UAE, T1 | ITD, ACT | Explainer + cases | L |
| 48 | nri income taxable in india | Learn | TOFU | P2 | Supporting article | S1 | S | what income is taxable for nri; nri taxable income | Rent, NRO interest, gains | WhatsApp | W12 | MP, S5 | ITD | Step guide | L |
| 49 | gifts from nri to parents tax india | Learn | TOFU | P2 | Supporting article | S8 | Y | money sent to parents india tax; nri gift tax | Gift rules†, FEMA† | WhatsApp | W10 | A4, MP | ITD, RBI | Explainer | L |
| 50 | nri capital gains mutual funds india | Learn | MOFU | P2 | Supporting article | S7 | Y | nri shares tax india; nri mutual fund tds | Capital gains, TDS† | WhatsApp | W12 | A3, USA | ITD | Events table | M |

### 3.7 F. Local (10)

| # | Keyword | Intent | Funnel | P | Page type | Target URL | Primary? | Secondary kws | Entities | Likely next action | WA CTA | Internal links | Authority | Format | Enq. |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 51 | nri ca near me | Local hire | BOFU | P1 | Money page | MP | S | nri chartered accountant near me | Anna Nagar, video call | Call / WhatsApp | W12 | A4 | ITD, ACT | Service page + tables + 22 FAQs | H |
| 52 | nri tax consultant anna nagar | Local hire | BOFU | P1 | Audience page | A4 | Y | ca for nri anna nagar; nri tax anna nagar chennai | Anna Nagar office | Call / walk in | W10 | MP, S5 | ITD | Can/cannot table | H |
| 53 | chartered accountant for nri chennai | Local hire | BOFU | P1 | Money page | MP | S | ca for nri in chennai; nri ca chennai | ICAI, CA-led | WhatsApp | W12 | PX | ITD, ACT | Service page + tables + 22 FAQs | H |
| 54 | nri tax services chennai | Local hire | BOFU | P1 | Money page | MP | S | nri income tax services chennai | Served online | WhatsApp | W12 | UAE, UK, USA | ITD, ACT | Service page + tables + 22 FAQs | H |
| 55 | nri income tax filing chennai | Local hire | BOFU | P1 | Money page | MP | S | nri itr filing chennai | ITR, Chennai | WhatsApp | W12 | S1 | ITD, ACT | Service page + tables + 22 FAQs | H |
| 56 | nri tax advisor tamil nadu | Local hire | BOFU | P2 | Money page | MP | S | nri tax consultant tamil nadu | Tamil Nadu, served online | WhatsApp | W12 | A4, A1 | ITD, ACT | Service page + tables + 22 FAQs | H |
| 57 | nri rental income tax chennai | Local problem | MOFU | P2 | Supporting article | S5 | Y | rent from chennai flat nri tax; chennai tenant nri tds | Chennai flat, tenant TDS† | WhatsApp | W10 | A4, MP | ITD | Landlord guide | M |
| 58 | returning nri tax consultant chennai | Local hire | BOFU | P1 | Money page | MP | S | returnee tax chennai; nri moving back chennai tax | RNOR, Chennai | Book / walk in | W12 | S2, C5 | ITD, ACT | Service page + tables + 22 FAQs | H |
| 59 | nri tax help for parents in chennai | Local family | BOFU | P1 | Audience page | A4 | S | parents manage nri son tax chennai | Mandate†, authorised representative† | Call | W10 | S5, P1 | ITD | Can/cannot table | H |
| 60 | video call ca for nri chennai | Local hire | BOFU | P2 | Money page | MP | S | online ca for nri chennai; ca for nri whatsapp | Video call, time zone | Book | W12 | PX | ITD, ACT | Service page + tables + 22 FAQs | H |

### 3.8 G. Audience-specific (10)

| # | Keyword | Intent | Funnel | P | Page type | Target URL | Primary? | Secondary kws | Entities | Likely next action | WA CTA | Internal links | Authority | Format | Enq. |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 61 | nri status for seafarers | Audience | MOFU | P1 | Audience page | A1 | Y | seafarer nri status days; merchant navy nri tax | CDC†, days count† | WhatsApp | W7 | T1, MP | ITD, ACT | Audience page | M |
| 62 | seafarer income tax india | Audience | MOFU | P1 | Audience page | A1 | S | merchant navy itr filing; seafarer itr | Salary in NRE† | WhatsApp | W7 | T2, MP | ITD, ACT | Audience page | M |
| 63 | oci income tax india | Audience | MOFU | P1 | Audience page | A2 | Y | oci card holder tax residency; oci nro tax | OCI, PIO† | WhatsApp | W8 | T1, MP | ITD, RBI | Day grid | M |
| 64 | person of indian origin 120 days | Audience | TOFU | P2 | Audience page | A2 | S | poi 120 day rule; foreign citizen india visit days | 120-day test† | Checker | W8 | T1 | ITD, RBI | Day grid | L |
| 65 | nri investors tax india shares | Audience | MOFU | P2 | Audience page | A3 | Y | nri demat tax; nri portfolio tax records | Shares, MFs, TDS† | WhatsApp | W12 | S7 | ITD | Instrument table | M |
| 66 | nri status in year of leaving india | Audience | MOFU | P1 | Audience page | A5 | Y | left india for job abroad itr; first year nri | Part-year status† | WhatsApp | W1 | T1, C1 | ITD, RBI | Departure table | M |
| 67 | convert savings account to nro | Audience | MOFU | P2 | Audience page | A5 | S | nre or nro after moving abroad; savings to nro | NRO, FEMA† | WhatsApp | W1 | C1 | ITD, RBI | Departure table | M |
| 68 | uk resident india tax return nro interest | Audience | MOFU | P2 | Location page | UK | S | nhs doctor india tax mutual funds; uk accountant indian tax | HMRC evidence | Book | W3 | T2, S3 | ITD, TREATY, FOREIGN | Country page + evidence table | M |
| 69 | us green card holder india income tax | Audience | MOFU | P2 | Location page | USA | S | indian tax return us citizen of indian origin | Green card, CPA figures | WhatsApp | W4 | T2, A3 | ITD, TREATY, FOREIGN | Country page + CPA table | M |
| 70 | nri software engineer us india tax return | Audience | MOFU | P3 | Location page | USA | S | h1b india tax return; us tech nri indian income | RSU (link only) | WhatsApp | W4 | A3 | ITD, TREATY, FOREIGN | Country page + CPA table | M |

### 3.9 H. Tamil Nadu city (10)

| # | Keyword | Intent | Funnel | P | Page type | Target URL | Primary? | Secondary kws | Entities | Likely next action | WA CTA | Internal links | Authority | Format | Enq. |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 71 | nri ca in coimbatore | City, served online | BOFU | P2 | Money page | MP | S | nri tax consultant coimbatore | Tamil Nadu block on MP | WhatsApp | W12 | A1 | ITD, ACT | Service page + tables + 22 FAQs | H |
| 72 | nri tax consultant madurai | City, served online | BOFU | P2 | Money page | MP | S | nri ca madurai | Tamil Nadu block on MP | WhatsApp | W12 | A4 | ITD, ACT | Service page + tables + 22 FAQs | H |
| 73 | nri tax services trichy | City, served online | BOFU | P3 | Money page | MP | S | nri ca tiruchirappalli | Tamil Nadu block on MP | WhatsApp | W12 | A1 | ITD, ACT | Service page + tables + 22 FAQs | H |
| 74 | nri itr filing salem | City, served online | BOFU | P3 | Money page | MP | S | nri ca salem | Tamil Nadu block on MP | WhatsApp | W12 | - | ITD, ACT | Service page + tables + 22 FAQs | H |
| 75 | nri tax consultant tirunelveli | City, served online | BOFU | P3 | Money page | MP | S | nri ca tirunelveli | Tamil Nadu block on MP | WhatsApp | W12 | A1 | ITD, ACT | Service page + tables + 22 FAQs | H |
| 76 | nri rental income tax coimbatore | City problem | MOFU | P3 | Supporting article | S5 | S | coimbatore flat nri tds | Coimbatore tenant TDS† | WhatsApp | W10 | MP | ITD | Landlord guide | M |
| 77 | nri ca in tiruppur | City, served online | BOFU | P3 | Money page | MP | S | nri tax consultant tiruppur | Tamil Nadu block on MP | WhatsApp | W12 | - | ITD, ACT | Service page + tables + 22 FAQs | H |
| 78 | nri ca vellore | City, served online | BOFU | P3 | Money page | MP | S | nri tax consultant vellore | Tamil Nadu block on MP | WhatsApp | W12 | - | ITD, ACT | Service page + tables + 22 FAQs | H |
| 79 | nri tax filing thoothukudi seafarer | City audience | MOFU | P2 | Audience page | A1 | S | seafarer itr thoothukudi; tuticorin seafarer tax | Thoothukudi, CDC† | WhatsApp | W7 | MP | ITD, ACT | Audience page | M |
| 80 | nri tax consultant erode | City, served online | BOFU | P3 | Money page | MP | S | nri ca erode | Tamil Nadu block on MP | WhatsApp | W12 | - | ITD, ACT | Service page + tables + 22 FAQs | H |

### 3.10 I. Tamil-language (10)

| # | Keyword | Intent | Funnel | P | Page type | Target URL | Primary? | Secondary kws | Entities | Likely next action | WA CTA | Internal links | Authority | Format | Enq. |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 81 | என்ஆர்ஐ வருமான வரி தாக்கல் (NRI varumaana vari thaakkal) | Tamil service | BOFU | P2 | Money page | MP | S | என்ஆர்ஐ ஐடிஆர் (NRI ITR) | ITR, NRI | WhatsApp | W12 | UAE, UK, USA | ITD, ACT | Service page + tables + 22 FAQs | H |
| 82 | வெளிநாடு வாழ் இந்தியர் வரி (velinaadu vaazh indhiyar vari) | Tamil service | MOFU | P2 | Money page | MP | S | வெளிநாட்டு தமிழர் இந்திய வரி (velinaattu thamizhar indhiya vari) | NRI, DTAA | WhatsApp | W12 | S1 | ITD, ACT | Service page + tables + 22 FAQs | M |
| 83 | என்ஆர்ஓ வட்டி வரி (NRO vatti vari) | Tamil problem | MOFU | P2 | Supporting article | S3 | S | என்ஆர்ஓ எஃப்டி டிடிஎஸ் (NRO FD TDS) | NRO, TDS | WhatsApp | W12 | MP | ITD | Problem guide | M |
| 84 | ஆர்என்ஓஆர் நிலை (RNOR nilai) | Tamil learn | TOFU | P2 | Supporting article | S2 | S | திரும்பிய என்ஆர்ஐ வரி (thirumbiya NRI vari) | RNOR† | Checker | W9 | T1 | ITD, RBI | Guide + tables | L |
| 85 | துபாய் என்ஆர்ஐ இந்திய வரி (Dubai NRI indhiya vari) | Tamil country | BOFU | P2 | Location page | UAE | S | அமீரகம் என்ஆர்ஐ வரி (Ameeragam NRI vari) | UAE, DTAA | WhatsApp | W2 | MP | ITD, TREATY, FOREIGN | Country page + calendar | H |
| 86 | சிங்கப்பூர் என்ஆர்ஐ வரி (Singapore NRI vari) | Tamil country | BOFU | P2 | Location page (NEW) | SG | S | சிங்கப்பூர் தமிழர் இந்திய வரி (Singapore thamizhar indhiya vari) | Singapore, DTAA | WhatsApp | W5 | MP | ITD, TREATY, FOREIGN | Country page + who-taxes-what | H |
| 87 | கனடா என்ஆர்ஐ இந்திய வரி (Canada NRI indhiya vari) | Tamil country | BOFU | P3 | Location page (NEW) | CA | S | கனடா தமிழர் வரி (Canada thamizhar vari) | Canada, DTAA | WhatsApp | W6 | MP | ITD, TREATY, FOREIGN | Country page + records table | H |
| 88 | கப்பல் ஊழியர் வருமான வரி (kappal oozhiyar varumaana vari) | Tamil audience | MOFU | P2 | Audience page | A1 | S | மாலுமி வருமான வரி (maalumi varumaana vari) | Seafarer, NRI | WhatsApp | W7 | MP | ITD, ACT | Audience page | M |
| 89 | வெளிநாட்டில் உள்ள மகனுக்கு வருமான வரி (velinaattil ulla maganukku varumaana vari) | Tamil family | BOFU | P1 | Audience page | A4 | S | என்ஆர்ஐ வாடகை டிடிஎஸ் (NRI vaadagai TDS) | Mandate†, rent TDS† | Call | W10 | S5 | ITD | Can/cannot table | H |
| 90 | இரட்டை வரி தவிர்ப்பு ஒப்பந்தம் (irattai vari thavirppu oppandham) | Tamil learn | TOFU | P3 | Supporting article | S4 | S | டிடிஏஏ என்ஆர்ஐ (DTAA NRI) | DTAA, TRC | WhatsApp | W12 | C3 | ITD, TREATY | Document guide | L |

### 3.11 J. AI / voice questions (10)

| # | Keyword | Intent | Funnel | P | Page type | Target URL | Primary? | Secondary kws | Entities | Likely next action | WA CTA | Internal links | Authority | Format | Enq. |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 91 | do nris have to pay tax in india | Voice / AI | TOFU | P1 | Money page | MP | S | nri tax liability india; is nri income taxed in india | Scope of tax | WhatsApp | W12 | T1, S1 | ITD, ACT | Service page + tables + 22 FAQs | L |
| 92 | does india tax nre account interest | Voice / AI | TOFU | P1 | Comparison | C1 | S | nre interest tax exempt | NRE† | WhatsApp | W12 | S3 | RBI, ITD | Decision table | L |
| 93 | how many days can an nri stay in india | Voice / AI | TOFU | P1 | Tool | T1 | Y | nri days in india limit; 182 days nri | 182 days, 60+365† | Checker | W12 | C2, A2 | ITD, ACT | Interactive tool | M |
| 94 | can parents file itr for nri son | Voice / AI | MOFU | P2 | Audience page | A4 | S | can family file income tax for nri | Authorised representative† | Call | W10 | S5 | ITD | Can/cannot table | M |
| 95 | do i need to file itr in india if i live in dubai | Voice / AI | MOFU | P1 | Location page | UAE | S | dubai nri itr india required | UAE, TDS, refund | WhatsApp | W2 | MP, T1 | ITD, TREATY, FOREIGN | Country page + calendar | M |
| 96 | how do i claim indian tax paid in uk | Voice / AI | MOFU | P1 | Location page | UK | S | hmrc foreign tax credit indian tax | HMRC, DTAA | Book | W3 | C3, T2 | ITD, TREATY, FOREIGN | Country page + evidence table | M |
| 97 | do i report indian accounts to irs | Voice / AI | MOFU | P1 | Location page | USA | S | fbar indian bank account nri | FBAR, Form 8938 | WhatsApp | W4 | T2 | ITD, TREATY, FOREIGN | Country page + CPA table | M |
| 98 | do i report indian fd to cra | Voice / AI | MOFU | P2 | Location page (NEW) | CA | S | indian fixed deposit canada tax return | CRA, NRO FD | WhatsApp | W6 | S3 | ITD, TREATY, FOREIGN | Country page + records table | M |
| 99 | is cpf taxable in india after returning | Voice / AI | MOFU | P2 | Location page (NEW) | SG | S | singapore cpf india tax returning nri | CPF, RNOR† | Book | W5 | S2 | ITD, TREATY, FOREIGN | Country page + who-taxes-what | M |
| 100 | what is the best time to move back to india for tax | Voice / AI | TOFU | P2 | Supporting article | S2 | S | best month to return to india rnor | RNOR†, arrival date | Book | W9 | C5, T1 | ITD, RBI | Guide + tables | L |


### 3.12 Cannibalisation guard

| Risk | Rule |
|---|---|
| "nri tax services <country>" vs MP | Country pages own the country term; MP owns "nri tax filing india" and "nri ca in chennai". MP links to the five country pages with anchor "NRI tax services in <country>" |
| S1 vs MP ("nri itr filing") | S1 owns "how to file itr as nri" (informational). MP owns the service query. S1 links to MP with anchor "NRI tax filing in India" |
| S2 vs MP (returning NRI) | S2 owns "what is rnor status". MP owns "returning nri tax consultant". S2 links to MP with the anchor "returning NRI tax consultant in Chennai" |
| C1 vs S3 (NRE/NRO) | C1 compares the accounts; S3 covers NRO FD TDS and refund only |
| P1 vs the notice-reply page | P1 is the NRI-abroad notice triage; replies stay on `/income-tax-notice-reply-chennai` (LINK-ONLY) |
| S5 vs `/blog/tds-on-rent` | S5 is the NRI landlord view; rent TDS for resident landlords stays on the other post |
| S7/A3 vs `/blog/capital-gains-tax-property-sale` | S7 and A3 cover securities only; property is LINK-ONLY |
| Weekly check | Search Console: if two NRI URLs alternate for one query for 2 weeks, fold the weaker page's section into the stronger and 301 only after sign-off |

---

## 4. Site architecture (35 URLs)

### 4.0 Architecture map and ranking ownership

```
/nri-tax-services  (MP: NRI tax filing in India, NRI CA Chennai, DTAA, residency)
 |- Country pages: UAE, UK, USA (exist) + Singapore, Canada (NEW)
 |- Tools (NEW): /tools/nri-residential-status-checker, /tools/nri-dtaa-document-checklist, /tools/nri-tax-deadline-calendar
 |- Supporting articles: nri-itr-filing, rnor-status-returning-nri (upgrades) + 6 NEW
 |- Comparisons (5 NEW posts)
 |- Audience pages (5 NEW): seafarers, OCI, investors, Chennai families, first year abroad
 |- Problem pages (5 NEW posts): notice abroad, PAN inoperative, missed deadline, refund, wrong status
 |- /faq/nri-tax (NEW; linked from the existing /faq)
 |- /case-studies/nri-tax (NEW, template, noindex until consent)
 |- /nri-tax-filing-process-explained (NEW)
 |- LINK-ONLY: property sale TDS, 15CA/15CB, HNI, foreign company registration, NRI director post, RSU post, capital-gains post
```

| Page group | Count required | Count delivered | New URLs | Upgrades |
|---|---|---|---|---|
| Money page | 1 | 1 | 0 | 1 |
| Supporting articles | 8 | 8 | 6 | 2 |
| Comparison pages | 5 | 5 | 5 | 0 |
| Location pages | 5 | 5 | 2 | 3 |
| Audience pages | 5 | 5 | 5 | 0 |
| Problem / urgent pages | 5 | 5 | 5 | 0 |
| Tools / checklists | 3 | 3 | 3 | 0 |
| FAQ hub | 1 | 1 | 1 | 0 |
| Case-study / proof page | 1 | 1 | 1 | 0 |
| Pricing / process explainer | 1 | 1 | 1 | 0 |
| **Total** | **35** | **35** | **29** | **6** |

Why 29 new URLs are not doorways: each page answers a different question with different content (a rule table, a document list or a tool). No page repeats the MP text with a place name swapped. Singapore and Canada are justified in Section 4.4. No Tamil Nadu city page is proposed.

Schema note for every row: JSON-LD only; FAQPage only for FAQs visible on that page; HowTo markup optional (rich results deprecated); BreadcrumbList on every page; never AggregateRating or Review.

### 4.1 Money page

| # | Slug | Status | SEO title (chars) | Meta (chars) | H1 | Primary / secondary | Intent | Words | Angle |
|---|---|---|---|---|---|---|---|---|---|
| MP | `/nri-tax-services` | Upgrade | NRI Tax Filing in India: Chennai CA, Done Online (48) | File your Indian return from abroad: residency, NRO/NRE income, DTAA relief and refunds, handled online by a Chennai CA firm. WhatsApp or book a call. (150) | NRI Tax Filing in India, Done Online by a Chennai CA Firm | P: nri tax filing india. S: nri ca in chennai; nri tax consultant chennai; dtaa relief for nris; nri residential status; nro nre income tax; returning nri tax | Transactional | 3,200-3,600 | The one page that owns the service intent: residency first, then income, treaty relief, filing, refund and the figures your overseas adviser needs. Full blueprint in Section 5 |

Outline and block order: Section 5.

### 4.2 Supporting articles (8)

| # | Slug | Status | SEO title (chars) | Meta (chars) | H1 | Primary / secondary | Intent | Words | Angle |
|---|---|---|---|---|---|---|---|---|---|
| S1 | `/blog/nri-itr-filing` | Upgrade | How to File ITR as an NRI: Forms, Dates, Documents (50) | Step-by-step guide for NRIs: residential status, which ITR form, taxable Indian income, TDS refunds, e-verification from abroad and due dates. (142) | How to File an Income Tax Return in India as an NRI | P: how to file itr as nri. S: which itr form for nri; nri itr due date; nri income taxable in india; itr 2 vs itr 3 for nri; nri e-verify itr | Informational to commercial | 2,000 | Upgrade from about 450 words to a full guide with tables, FAQs and the label on every rule |
| S2 | `/blog/rnor-status-returning-nri` | Upgrade | RNOR Status for Returning NRIs: How It Works (44) | How RNOR status works under the Income-tax Act, 2025: the tests, how many years it lasts, NRE and FCNR accounts and foreign retirement funds. (141) | RNOR Status for NRIs Returning to Chennai | P: what is rnor status. S: rnor conditions; returning nri tax; rnor period how long; nre account after returning to india | Informational | 1,900 (from about 1,650) | Keep the depth; add the label beside every section number, test and limit; add a returnee-planning table, a tool link and a Singapore/Gulf/US box |
| S3 | `/blog/nro-fd-interest-tds-refund-nri` | NEW | NRO FD Interest: TDS, Taxability and Refund for NRIs (52) | NRO fixed deposit interest is taxable in India and the bank deducts TDS. How to read the TDS, claim excess back and use treaty relief. (134) | NRO FD Interest for NRIs: TDS, Tax and How to Claim a Refund | P: nro fd tds refund nri. S: nro interest taxable; excess tds nri; nro account tds rate; nro fd interest tax dubai | Problem to commercial | 1,600 | No existing post covers NRO interest; the most common NRI trigger (bank deducts TDS, buyer asks about refund) |
| S4 | `/blog/tax-residency-certificate-form-10f-nri` | NEW | Tax Residency Certificate and Form 10F for NRIs (47) | What a Tax Residency Certificate and Form 10F are, who needs them for DTAA relief, how to get them abroad and what to send your Indian CA. (138) | Tax Residency Certificate and Form 10F: What NRIs Need for DTAA Relief | P: tax residency certificate form 10f nri. S: dtaa tax residency certificate; trc for nri; form 10f 2025 act; dtaa documents nri | Informational to commercial | 1,700 | The fact sheet names TRC and Form 10F as DTAA prerequisites; the form number under the 2025 Act is not in the fact sheet, so every mention carries the label (L6) |
| S5 | `/blog/nri-rental-income-chennai-flat-tax` | NEW | NRI Rental Income from a Chennai Flat: Tax and TDS (50) | Rent from a flat in Chennai is taxable in India for NRIs. How tenant TDS works, who pays it, what to claim and how to report it. (128) | Rent from a Chennai Flat: Tax, TDS and Filing for NRIs | P: nri rental income tax chennai. S: tenant tds rent paid to nri; nri house property income india; parents collect rent nri | Problem to commercial | 1,600 | NRI landlord angle on rent; the rent-TDS post is link-only and property sale is link-only |
| S6 | `/blog/deemed-resident-15-lakh-rule-nri` | NEW | Deemed Resident Rule for NRIs: The 15 Lakh Test (47) | Who becomes a deemed resident of India: Indian citizens with Indian income above 15 lakh who pay tax nowhere else. Meaning, RNOR effect, examples. (146) | Deemed Residency for NRIs: The 15 Lakh Income Rule Explained | P: deemed resident 15 lakh rule. S: deemed resident uae nri; deemed resident rnor; 15 lakh nri tax | Informational | 1,500 | Gulf NRIs search this heavily; live pages state it briefly. Plain examples; every threshold carries the label (L8) |
| S7 | `/blog/nri-shares-mutual-funds-tax-india` | NEW | NRI Shares and Mutual Funds: Indian Tax and TDS (47) | How gains on Indian shares and mutual funds are taxed for NRIs, why TDS is deducted, how to claim refunds and what US and UK advisers ask for. (142) | Indian Shares and Mutual Funds for NRIs: Tax, TDS and Reporting | P: nri capital gains mutual funds india. S: nri shares tax india; nri demat tds; indian mutual funds pfic nri | Informational to commercial | 1,700 | Securities only. Property gains belong to the capital-gains-tax-property-sale post (link only) |
| S8 | `/blog/gifts-inheritance-nri-india-tax` | NEW | Gifts and Inheritance for NRIs: Indian Tax and FEMA (51) | Gifts from relatives, money sent to parents and inherited assets: when Indian tax applies, what FEMA expects and what records to keep. (134) | Gifts and Inheritance for NRIs: Indian Tax and FEMA Points | P: gifts from nri tax india. S: inherited property nri tax; money sent to parents india tax; nri inheritance repatriation | Informational | 1,500 | Tax on receipt and on later income; sale and repatriation steps are link-only to the property and 15CA pages |

| # | H2 / H3 outline | Internal links | External links | Schema | CTA placement | WhatsApp | Lead magnet | Enquiry trigger |
|---|---|---|---|---|---|---|---|---|
| S1 | Short answer; step 1 residential status (link T1); step 2 taxable income (table); step 3 form choice (ITR-2/ITR-3 note); step 4 documents (T2); step 5 TDS and refund; step 6 e-verification from abroad; dates table; FAQs (6). Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, T1, T2, T3, S2, S3, C1, P3, P4; LINK-ONLY PROP, CG, 15CA, ITR | incometax.gov.in NRI help pages | BlogPosting, FAQPage, BreadcrumbList | After short answer, after documents, end | W12 | T2 checklist | First-time Indian filer abroad |
| S2 | Existing outline kept; ADD label next to s.6(13) and the 9-of-10 and 729-day tests (L17, L18); ADD year-by-year table; ADD 'before you land' checklist; ADD link to T1 and C5. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, T1, C2, C5, S6, SG; LINK-ONLY RSU, FEMA, FOR | incometax.gov.in; RBI FEMA deposit directions | BlogPosting, FAQPage, BreadcrumbList | After the test table, end | W9 | T1 returnee mode | Planning or just completed a return to India |
| S3 | Short answer; NRO vs NRE one-line recap (link C1); how TDS works on NRO interest (rate: label); reading Form 26AS/AIS; claiming excess via return; treaty rate and Form 10F (link S4); FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, C1, S4, P4, T2; LINK-ONLY FEMA, TDSR | incometax.gov.in; RBI deposit directions (label) | BlogPosting, FAQPage, BreadcrumbList | After TDS table, end | W12 | T2 checklist | TDS deducted on NRO FD |
| S4 | Short answer; what DTAA relief means; TRC: who issues it by country (UAE, UK, USA, Singapore, Canada: foreign rule); Form 10F and its 2025-Act number (label); document table; common rejection reasons; FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, T2, C3, UAE, UK, USA, SG, CA, S3 | incometax.gov.in; TREATY texts on incometaxindia.gov.in; each foreign tax authority | BlogPosting, FAQPage, BreadcrumbList | After document table, end | W12 | T2 checklist | Bank or deductor asks for TRC |
| S5 | Short answer; who deducts TDS on rent paid to an NRI (label); what the tenant needs (PAN, TAN: label); deductions in house-property income (label); parents collecting rent; reporting in the return; FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, A4, S3, T2; LINK-ONLY TDSR, PROP, CG | incometax.gov.in | BlogPosting, FAQPage, BreadcrumbList | After TDS table, end | W10 | T2 checklist | Tenant asks about TDS |
| S6 | Short answer; the rule in plain words; what income counts (excludes foreign-source: label); effect: RNOR, not full resident; 3 worked cases (no tax figures); Gulf vs other countries; what to file; FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, UAE, T1, C2, S2 | incometax.gov.in; Income-tax Act text | BlogPosting, FAQPage, BreadcrumbList | After examples, end | W2 | T1 checker | Gulf NRI worried about status |
| S7 | Short answer; taxable events table (sale, dividend, switch); TDS by brokers/AMCs (label); holding-period note (label); treaty and foreign credit link; US/UK reporting remarks (foreign rule); FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, USA, UK, SG, A3, T2; LINK-ONLY CG, RSU | incometax.gov.in; SEBI (market terms) | BlogPosting, FAQPage, BreadcrumbList | After events table, end | W12 | T2 checklist | Redemption or sale with TDS |
| S8 | Short answer; gift between relatives (label); gift from non-relatives (label); inherited assets: what is taxed later; FEMA points (label, RBI); records to keep; FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, A4, S3; LINK-ONLY PROP, 15CA, FEMA | incometax.gov.in; RBI FEMA directions | BlogPosting, FAQPage, BreadcrumbList | After records table, end | W10 | T2 checklist | Receiving or sending family funds |

### 4.3 Comparison pages (5)

| # | Slug | Status | SEO title (chars) | Meta (chars) | H1 | Primary / secondary | Intent | Words | Angle |
|---|---|---|---|---|---|---|---|---|---|
| C1 | `/blog/nre-vs-nro-account-tax-nri` | NEW | NRE vs NRO Account: Tax, Repatriation and Use (45) | Compare NRE, NRO and FCNR accounts for NRIs: Indian tax on interest, TDS, repatriation, joint holders and which to use for what income. (135) | NRE vs NRO Account: Which Is Taxed and Which Can You Send Abroad? | P: nre vs nro account tax. S: is nre interest taxable; nre vs nro fd interest; nro vs nre repatriation; fcnr interest tax | Comparison | 1,800 | Decision table; FEMA statements carry the label and RBI source. FCNR/RFC for returnees goes to C5 |
| C2 | `/blog/nri-vs-resident-vs-rnor-tax-india` | NEW | NRI vs Resident vs RNOR: What India Taxes (41) | Compare non-resident, resident and RNOR status: which income India taxes, Schedule FA, NRE interest and what changes in the year you return. (140) | NRI, Resident or RNOR: What India Taxes in Each Status | P: nri vs rnor vs resident. S: who is nri for income tax; residential status vs citizenship; resident but not ordinarily resident meaning | Comparison | 1,800 | Status-by-status table: scope of tax, foreign income, Schedule FA, NRE interest, filing form |
| C3 | `/blog/dtaa-exemption-vs-foreign-tax-credit-nri` | NEW | DTAA: Exemption vs Foreign Tax Credit for NRIs (46) | How tax treaties relieve double tax: the exemption method versus the credit method, which applies in India and in your country, with examples. (142) | DTAA Relief for NRIs: Exemption Method vs Credit Method | P: dtaa exemption vs credit. S: dtaa relief for nris; double taxation nri india; foreign tax credit india income | Comparison | 1,700 | Explains the two methods without giving foreign tax advice; each country box tells readers to confirm with the local adviser |
| C4 | `/blog/nri-ca-vs-online-filing-vs-overseas-accountant` | NEW | NRI Tax Help: CA vs Online Filing vs Overseas Accountant (56) | Compare a Chennai CA, an online filing platform and your overseas accountant for NRI Indian tax: scope, treaty claims, notices, TDS and refunds. (144) | CA, Online Platform or Overseas Accountant for Your Indian Tax? | P: nri ca vs online itr filing. S: nri tax filing service or online platform; can my us cpa file my indian return; diy nri itr | Comparison / BOFU | 1,700 | Neutral decision table by case complexity. No competitor names, no cost figures, no superlatives |
| C5 | `/blog/fcnr-vs-nre-vs-rfc-account-returning-nri` | NEW | FCNR vs NRE vs RFC Account for Returning NRIs (45) | Moving back to India? Compare what happens to NRE, NRO and FCNR accounts, when to move funds to RFC and how interest is taxed after return. (139) | Returning to India: What to Do with NRE, FCNR and RFC Accounts | P: nre account after returning to india. S: fcnr vs nre vs rfc; rfc account returning nri; redesignate nre account resident | Comparison / returnee | 1,700 | Returnee-only angle, complements S2. FEMA points carry the label |

| # | H2 / H3 outline | Internal links | External links | Schema | CTA placement | WhatsApp | Lead magnet | Enquiry trigger |
|---|---|---|---|---|---|---|---|---|
| C1 | Short answer; table (tax, TDS, repatriation, who can hold, currency, use); which for which income; joint holding; becoming resident (link C5); FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, S3, C5, S2, FEMA | RBI FEMA deposit directions; incometax.gov.in | BlogPosting, FAQPage, BreadcrumbList | After table, end | W12 | T2 checklist | Choosing an account for new income |
| C2 | Short answer; table; the tests (link to MP 5.7); deemed resident (S6); year of leaving and year of return; FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, T1, S2, S6, A5 | incometax.gov.in; Income-tax Act text | BlogPosting, FAQPage, BreadcrumbList | After table, end | W12 | T1 checker | Unsure of status |
| C3 | Short answer; table (method, how it works, who claims, documents); why order of filing matters; country boxes (UAE, UK, USA, Singapore, Canada: foreign rule); FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, S4, T2, UAE, UK, USA, SG, CA | TREATY texts on incometaxindia.gov.in | BlogPosting, FAQPage, BreadcrumbList | After table, end | W12 | T2 checklist | Double-tax worry |
| C4 | Short answer; table (suitability, liability, compliance, cost complexity, notice handling, best use); when DIY is enough; when a CA helps; working across time zones; FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, PX, T1, P1 | incometax.gov.in | BlogPosting, FAQPage, BreadcrumbList | After table, end | W12 | T1 checker | Comparing providers |
| C5 | Short answer; table (account, after return, tax, FEMA note); order of steps in the year of return; tax on interest by status; FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, S2, C1, T1; LINK-ONLY FEMA | RBI FEMA deposit directions; incometax.gov.in | BlogPosting, FAQPage, BreadcrumbList | After table, end | W9 | T1 returnee mode | Bank asks to redesignate |

### 4.4 Location pages (3 upgrades + 2 NEW country pages)

**Country choice and why the two new pages are not doorways.** Singapore and Canada have large Tamil diasporas and, unlike a "city swap", each has different tax interplay that the three existing pages do not answer.

| Country | Why it is distinct (not a template swap) | Distinct content | Rejected alternatives |
|---|---|---|---|
| Singapore NEW | No general capital gains tax and a territorial-leaning personal tax (foreign rule: IRAS), so the questions are CPF on return, treaty relief on Indian-source gains and RNOR planning; IST+2:30 allows same-day calls | Who-taxes-what table; CPF-after-return box; Indian shares; IRAS Tax Residency Certificate route; Singapore filing season | n/a |
| Canada NEW | Residents taxed on worldwide income (foreign rule: CRA); foreign-property reporting touchpoint; spring filing season; Toronto/Vancouver time gap needs early-morning IST slots | Records-for-preparer table; foreign property reporting (Indian values only); NRO and FD interest; credit mechanics; Canadian season calendar | n/a |
| Australia | Large student and skilled diaspora but fewer Tamil-specific search signals | Not now | Revisit after day 90 if GSC shows demand |
| Malaysia | Large Tamil community but smaller Indian-income base | Not now | Revisit after day 90 |

Every country page repeats the same boundary line: "We advise on the Indian side only. Your <country> tax stays with your local adviser." Foreign rules (dates, thresholds, forms) carry the exact label "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." and need a check against the foreign authority.

| # | Slug | Status | SEO title (chars) | Meta (chars) | H1 | Primary / secondary | Intent | Words | Angle |
|---|---|---|---|---|---|---|---|---|---|
| UAE | `/nri-tax-services-uae` | Upgrade | NRI Tax Services for UAE Residents: India ITR, DTAA (51) | India tax for NRIs in Dubai, Abu Dhabi and Sharjah: ITR filing, India-UAE DTAA, deemed-residency checks and NRE/NRO income, online from Chennai. (144) | India Tax for NRIs in the UAE: ITR, DTAA, NRE/NRO and Deemed Residency | P: nri tax services uae. S: india tax for nris in dubai; india uae dtaa nri; deemed resident uae nri; nro fd tds nri dubai | Transactional (country) | 2,200 | UAE has no personal income tax, so the live questions are deemed residency, Tax Residency Certificate and where salary is paid. Fix the salary FAQ (L7) |
| UK | `/nri-tax-services-uk` | Upgrade | NRI Tax Services for UK Residents: India ITR and DTAA (53) | Indian ITR filing for NRIs in the UK, India-UK DTAA claims and the Indian tax-paid evidence your UK accountant needs for HMRC credit relief. (140) | India Tax for NRIs in the UK: DTAA, HMRC Credit and Indian Income | P: nri tax services uk. S: india uk dtaa nri; indian tax evidence for hmrc; uk resident india tax return nro interest | Transactional (country) | 2,200 | Evidence pack for the UK accountant: Indian return, Form 26AS/AIS, tax-paid proof, tax-year mismatch (6 April vs 1 April) |
| USA | `/nri-tax-services-usa` | Upgrade | NRI Tax Services for US Residents: India ITR and DTAA (53) | Indian ITR filing for NRIs in the USA, India-US DTAA positions and the Indian tax and account records your US CPA needs for Form 1116 and FBAR. (143) | India Tax for NRIs in the USA: ITR, DTAA, FBAR/FATCA Touchpoints | P: nri tax services usa. S: india us dtaa nri; indian tax return for us citizen of indian origin; fbar indian accounts nri | Transactional (country) | 2,300 | Figures by calendar year for the US CPA, account-balance records, PFIC awareness; we advise on India only |
| SG | `/nri-tax-services-singapore` | NEW | NRI Tax Services for Singapore Residents: India ITR (51) | Indian ITR filing and India-Singapore DTAA for NRIs in Singapore: shares, NRO deposits, CPF on return, RNOR planning. Online from Chennai. (138) | India Tax for NRIs in Singapore: ITR, DTAA, CPF and Return Planning | P: nri tax services singapore. S: india singapore dtaa nri; returning nri from singapore tax; cpf taxable in india; rnor singapore | Transactional (country) | 1,900 | Distinct because Singapore taxes few personal items (no general capital gains tax; CPF) while India still taxes Indian-source gains; Singapore is IST+2:30 so same-day calls work |
| CA | `/nri-tax-services-canada` | NEW | NRI Tax Services for Canada Residents: India ITR, DTAA (54) | Indian ITR filing and India-Canada DTAA for NRIs in Canada: NRO interest, foreign property reporting figures and tax-paid records for your preparer. (148) | India Tax for NRIs in Canada: ITR, DTAA and Records for Your Canadian Preparer | P: nri tax services canada. S: india canada dtaa nri; nro tds refund canada nri; indian fd cra reporting; india income canada tax return | Transactional (country) | 1,900 | Distinct because Canada taxes worldwide income of residents, has its own foreign-property reporting and filing season; Toronto and Vancouver cases need early-morning IST slots |

| # | H2 / H3 outline | Internal links | External links | Schema | CTA placement | WhatsApp | Lead magnet | Enquiry trigger |
|---|---|---|---|---|---|---|---|---|
| UAE | Short answer; UAE-specific table (no UAE income tax, so India decides); deemed-residency box; TRC and Form 10F route; documents table; India and UAE calendar; time-zone call window; FAQs (9); CTA. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP (anchor 'NRI tax filing in India'), T1, T2, S4, S6, A5; LINK-ONLY PROP, 15CA | incometax.gov.in; UAE FTA/EmaraTax for TRC; India-UAE DTAA text | Service, FAQPage, BreadcrumbList | Hero, after deemed-residency box, end | W2 | T2 DTAA document checklist | UAE-based NRI with Indian rent or NRO interest |
| UK | Short answer; evidence pack table; tax-year mismatch table; treaty credit in plain words; calendar India and UK; UK call window (UK morning = IST afternoon); FAQs (8); CTA. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, T2, T3, S3, S4, C3; LINK-ONLY CG, HNI, PROP | incometax.gov.in; GOV.UK HMRC foreign tax credit pages; India-UK DTAA text | Service, FAQPage, BreadcrumbList | Hero, after evidence pack, end | W3 | T2 DTAA document checklist | UK accountant has asked for Indian tax evidence |
| USA | Short answer; what the US CPA asks for (table); calendar-year vs Indian-year table; FBAR/8938 touchpoints (Indian records only); calendar India and US; late-evening IST slot; FAQs (8); CTA. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, T2, T3, S7, C3, A3; LINK-ONLY RSU, PROP, CG | incometax.gov.in; IRS and FinCEN pages (foreign rule); India-US DTAA text | Service, FAQPage, BreadcrumbList | Hero, after CPA table, end | W4 | T2 DTAA document checklist | US CPA asked for Indian figures or account balances |
| SG | Short answer; Singapore vs India: who taxes what (table); Indian shares and NRO deposits; CPF and a planned return; treaty and Tax Residency Certificate (IRAS); calendar India and Singapore; time window; FAQs (8); CTA. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, S2, S7, T1, T2, A3; LINK-ONLY DIR, FOR, FEMA | incometax.gov.in; IRAS pages (foreign rule); India-Singapore DTAA text | Service, FAQPage, BreadcrumbList | Hero, after who-taxes-what table, end | W5 | T2 DTAA document checklist | Singapore NRI with Indian shares or planning a return |
| CA | Short answer; Canada vs India: who taxes what (table); Indian records a Canadian preparer needs; foreign property reporting touchpoints (Indian values only); treaty credit; calendar India and Canada; early-morning IST slot; FAQs (8); CTA. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, S3, T2, T3, C3, C1; LINK-ONLY PROP, 15CA | incometax.gov.in; CRA pages (foreign rule); India-Canada DTAA text | Service, FAQPage, BreadcrumbList | Hero, after records table, end | W6 | T2 DTAA document checklist | Canadian preparer asked for Indian income and tax figures |

Country-page upgrade list (existing three): (1) add the label to every date, percentage and threshold (L9, L10, L13-L15); (2) rewrite the UAE salary FAQ (L7); (3) shorten the property-sale answers on USA/UK to one line plus a link to `/nri-property-sale-tds-chennai` (L16); (4) add a time-zone call-window block; (5) link back to MP with the anchor "NRI tax filing in India"; (6) add the residency checker (T1) and document checklist (T2).

### 4.5 Audience pages (5 NEW)

| # | Slug | Status | SEO title (chars) | Meta (chars) | H1 | Primary / secondary | Intent | Words | Angle |
|---|---|---|---|---|---|---|---|---|---|
| A1 | `/nri-tax-for-seafarers` | NEW | Income Tax for Seafarers: NRI Status and ITR Filing (51) | How a merchant-navy officer's days are counted for NRI status, what Indian income is taxed and how to file from a ship or port. Online from Chennai. (148) | Income Tax for Seafarers: NRI Status and Filing from Sea | P: nri status for seafarers. S: seafarer income tax india; merchant navy itr filing; seafarer nre salary taxable | Audience | 1,600 | Distinct rule set for crew on foreign-going ships (label); asynchronous WhatsApp fits port Wi-Fi. Thoothukudi, Chennai and Nagapattinam families |
| A2 | `/nri-tax-for-oci-cardholders` | NEW | Income Tax in India for OCI Cardholders and PIOs (48) | OCI and foreign-citizen persons of Indian origin: the 120-day test, Indian income, NRO deposits and how to file. Online from a Chennai CA firm. (143) | Income Tax in India for OCI Cardholders: Residency and Filing | P: oci income tax india. S: oci card holder tax residency; person of indian origin 120 days; oci nro account tax | Audience | 1,600 | OCI is an immigration status, not a tax status; residency depends on days and income. Persons of Indian origin have a special day-count (label) |
| A3 | `/nri-tax-for-investors-in-india` | NEW | NRI Investors in India: Tax on Shares, MFs and Deposits (55) | NRIs investing in Indian shares, mutual funds and deposits: TDS, capital gains reporting, treaty relief and records for your overseas adviser. (142) | Tax for NRIs Investing in India: Shares, Funds and Deposits | P: nri investors tax india shares. S: nri tax planning in india; nri demat account tax; nri portfolio tax records | Audience | 1,500 | Portfolio-level checklist; securities only. Large-portfolio individuals are pointed to the HNI page (link only) |
| A4 | `/nri-tax-for-families-in-chennai` | NEW | Tax Help for Families of NRIs in Chennai (40) | Parents and relatives in Chennai managing an NRI's flat, NRO account or tax notice: what you may do, what only the NRI can sign. Visit Anna Nagar. (146) | Looking After an NRI Family Member's Tax in Chennai | P: nri tax consultant anna nagar. S: parents file income tax for nri son; nri son income tax notice; ca for nri families chennai | Audience / local | 1,500 | The only NRI page aimed at people in Chennai, not abroad: mandate, authorised representative, who signs, video call with the NRI |
| A5 | `/nri-tax-for-first-year-abroad` | NEW | First Year Abroad: Indian Tax for New NRIs (42) | Left India for a job or study mid-year? How your status is decided, what to do with Form 16 and savings accounts, and how to file your Indian return. (149) | First Year Abroad: Indian Tax When You Move Out of India | P: nri status in year of leaving india. S: left india for job abroad itr; convert savings account to nro; first year nri tax | Audience | 1,500 | Year of departure: part-year employment, TDS, account redesignation, status test (label) |

| # | H2 / H3 outline | Internal links | External links | Schema | CTA placement | WhatsApp | Lead magnet | Enquiry trigger |
|---|---|---|---|---|---|---|---|---|
| A1 | Short answer; how days are counted (label; Continuous Discharge Certificate entries); table by contract pattern; salary in NRE account; documents; filing from port; FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, T1, T2, C2, A4 | incometax.gov.in; DG Shipping (label) | Service, FAQPage, BreadcrumbList | After day-count table, end | W7 | T1 seafarer mode | Days near the threshold |
| A2 | Short answer; OCI vs tax residency; the 60/120/182-day grid (label); visiting patterns table; Indian income and NRO; FEMA note (label); FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, T1, C2, S6; LINK-ONLY 15CA, PROP | incometax.gov.in; RBI FEMA directions | Service, FAQPage, BreadcrumbList | After day grid, end | W8 | T1 OCI mode | Long stays in India |
| A3 | Short answer; instrument table (shares, MF, bonds, FDs: taxed how, TDS who); records for the return; overseas adviser needs; FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, S7, S3, T2, USA, UK; LINK-ONLY HNI, CG | incometax.gov.in; SEBI; RBI (label) | Service, FAQPage, BreadcrumbList | After instrument table, end | W12 | T2 checklist | Portfolio TDS and reporting |
| A4 | Short answer; what family can and cannot do (table); authorised representative and mandate (label); rent and NRO account; if a notice arrives; visit the Anna Nagar office; FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, S5, S8, P1; LINK-ONLY APP, PROP | incometax.gov.in (authorised representative help) | Service, FAQPage, BreadcrumbList (+LocalBusiness site-wide) | Hero (call), after table, end | W10 | Family document list | Notice or rent query in Chennai |
| A5 | Short answer; departure-date table; Form 16 and TDS; savings account to NRO (FEMA: label); which country taxes what; return filing; FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, T1, C1, C2, S1 | incometax.gov.in; RBI (label) | Service, FAQPage, BreadcrumbList | After departure table, end | W1 | T1 checker | Bank or employer asks about NRI status |

### 4.6 Problem / urgent pages (5 NEW)

| # | Slug | Status | SEO title (chars) | Meta (chars) | H1 | Primary / secondary | Intent | Words | Angle |
|---|---|---|---|---|---|---|---|---|---|
| P1 | `/income-tax-notice-reply-for-nris` | NEW | Income Tax Notice Received Abroad: What NRIs Should Do (54) | Got an Indian income tax notice while living abroad? How to read it, how long you have, who can respond for you and what to send your CA. (137) | Income Tax Notice Received Abroad: Steps for NRIs | P: nri income tax notice received. S: nri 148 notice abroad; nri notice email; authorised representative nri notice | Problem / urgent | 1,500 | Notice mechanics for people abroad. Detailed replies belong to the notice-reply page (link only) |
| P2 | `/blog/pan-inoperative-nri-aadhaar-linking` | NEW | PAN Inoperative for an NRI: Causes and Fixes (44) | PAN marked inoperative while you live abroad? Whether Aadhaar linking applies to NRIs, effects on TDS and refunds and how to restore it. (136) | NRI PAN Inoperative: Aadhaar Linking, TDS Effect and Fixes | P: pan inoperative nri. S: nri pan aadhaar link; nri pan higher tds; pan not working nri | Problem / urgent | 1,400 | Narrow, urgent, high-intent; rule specifics carry the label (NRI position on linking: label) |
| P3 | `/blog/missed-itr-deadline-nri-belated-updated-return` | NEW | Missed the ITR Deadline as an NRI? Your Options (47) | Missed the Indian due date? What a belated return and an updated return mean for NRIs, what changes for refunds and losses, and how to proceed. (143) | Missed the ITR Deadline as an NRI: Belated and Updated Return Options | P: missed itr deadline nri. S: nri belated return penalty; updated return itr-u nri; late itr nri refund | Problem / urgent | 1,500 | Dates and fees all carry the label; the ITR owner page is link-only |
| P4 | `/blog/nri-itr-refund-delayed-excess-tds` | NEW | NRI Income Tax Refund Delayed: Causes and Fixes (47) | Why an NRI's income tax refund is stuck: bank account not validated, mismatch, pending verification or notices, and how to fix each. (132) | NRI Refund Delayed or Stuck: Causes and Fixes | P: nri itr refund not received. S: excess tds deducted nri refund; refund to nro account; refund failed nri | Problem / urgent | 1,400 | Refund mechanics for NRIs (bank validation, NRO account, e-verification), each rule labelled |
| P5 | `/blog/nri-filed-as-resident-by-mistake` | NEW | NRI Filed ITR as Resident by Mistake? How to Correct (52) | Filed your Indian return as resident while you were an NRI, or the reverse? Why it matters, how to revise or update and what to check first. (140) | Filed Your Return with the Wrong Residential Status? How to Fix It | P: filed itr as resident by mistake nri. S: wrong residential status itr; revise return nri status; nri filed itr-1 | Problem / urgent | 1,400 | Consequences (foreign income, Schedule FA, NRE interest) and correction routes (label) |

| # | H2 / H3 outline | Internal links | External links | Schema | CTA placement | WhatsApp | Lead magnet | Enquiry trigger |
|---|---|---|---|---|---|---|---|---|
| P1 | Short answer; first 48 hours table; how notices reach NRIs (portal, e-mail); time zones and response windows (label); authorised representative; when to go to the notice-reply page; FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, A4, P3; LINK-ONLY NOT, WHY, APP | incometax.gov.in e-Proceedings help | BlogPosting, FAQPage, BreadcrumbList | Top box, end | W11 | Notice triage checklist | Notice in hand |
| P2 | Short answer; who must link (label); effects table (TDS, refund, filing); how to check status; fix steps; when to call a CA; FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, S3, P4 | incometax.gov.in PAN-Aadhaar help | BlogPosting, FAQPage, BreadcrumbList | Top box, end | W11 | PAN fix checklist | Bank or tenant rejects PAN |
| P3 | Short answer; options table (belated, revised, updated); effects on refund, losses, interest and fee (label); evidence needed; steps; FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, S1, P4, T3; LINK-ONLY ITR, ADV | incometax.gov.in | BlogPosting, FAQPage, BreadcrumbList | Top box, end | W11 | Deadline calendar T3 | Past the due date |
| P4 | Short answer; cause-to-fix table; account validation (label); where to check status; adjustment against demand (label); FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, S3, P2, P3, T2 | incometax.gov.in refund status help | BlogPosting, FAQPage, BreadcrumbList | Top box, end | W11 | Refund checklist | Refund pending |
| P5 | Short answer; what goes wrong table; revised vs updated return (label); evidence of days; steps; FAQs. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, T1, C2, P3, S1 | incometax.gov.in | BlogPosting, FAQPage, BreadcrumbList | Top box, end | W11 | T1 checker | Realised the mistake |

### 4.7 Tools / checklists (3 NEW)

| # | Slug | Status | SEO title (chars) | Meta (chars) | H1 | Primary / secondary | Intent | Words | Angle |
|---|---|---|---|---|---|---|---|---|---|
| T1 | `/tools/nri-residential-status-checker` | NEW | NRI Residential Status Checker for Indian Tax (45) | Enter your days in India for the year and the previous four, your citizenship and Indian income to see an indicative status: NRI, resident or RNOR. (147) | NRI Residential Status Checker | P: nri residential status checker. S: am i nri for income tax; how many days nri; rnor calculator | Tool | 700 + tool | Rules-based, runs in the browser, stores nothing, indicative only. Modes: general, seafarer, OCI/PIO, returning. Every threshold on the page carries the label |
| T2 | `/tools/nri-dtaa-document-checklist` | NEW | NRI DTAA Document Checklist for Indian Tax Filing (49) | Choose your country and income types to get the list of documents for your Indian return and DTAA claim: TRC, Form 10F, statements and TDS records. (147) | NRI DTAA and Tax Return Document Checklist | P: nri tax return documents required. S: dtaa documents nri; trc form 10f checklist; nri itr documents | Tool | 600 + tool | Interactive checklist by country and income type; downloadable; each item notes where to get it; every rule carries the label |
| T3 | `/tools/nri-tax-deadline-calendar` | NEW | NRI Tax Deadline Calendar: India and Your Country (49) | Pick your country to see Indian tax dates next to your local filing season, with a calendar file to download. Every date needs checking. (136) | NRI Tax Deadline Calendar: India and Your Country | P: nri itr due date. S: nri tax calendar; india us uk canada tax dates; advance tax nri | Tool | 600 + tool | Two-column calendar (India | selected country) with .ics download. Every date shows the label and a link to the official source |

| # | H2 / H3 outline | Internal links | External links | Schema | CTA placement | WhatsApp | Lead magnet | Enquiry trigger |
|---|---|---|---|---|---|---|---|---|
| T1 | Tool; result card (NRI / RNOR / resident, indicative); how we decided (table); what to do next; FAQs (4). Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, C2, S2, S6, A1, A2, A5 | incometax.gov.in | WebApplication, BreadcrumbList | Result card: WhatsApp this result to a CA | W12 | The result | Visitor has entered days, citizenship and income |
| T2 | Selector (country, income types); checklist output; where each document comes from; printable PDF; FAQs (4). Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, S4, UAE, UK, USA, SG, CA | incometax.gov.in; foreign tax authority TRC pages | WebApplication, BreadcrumbList | Under checklist: send us your checklist on WhatsApp | W12 | PDF checklist | Visitor ticked income types |
| T3 | Country selector; calendar table; .ics download; what each date means; FAQs (4). Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, S1, P3, UAE, UK, USA, SG, CA; LINK-ONLY ADV | incometax.gov.in; IRS; HMRC; CRA; IRAS; UAE FTA | WebApplication, BreadcrumbList | Under result | W12 | .ics calendar | Visitor picks a country and downloads |

**Tool rules (all three).**

| Rule | Detail |
|---|---|
| Runs in the browser | No personal data is sent or stored by default; the WhatsApp hand-off is a user-initiated wa.me link with the answers in the message |
| Verify label | Every threshold, date and form name shown in a tool carries "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." until the CA signs it off; the on-page text says "indicative, confirm with a CA" |
| Figures | No tax amounts or fees are computed; tools only classify (status) or list (documents, dates) |
| Foreign dates in T3 | Each foreign date also names the foreign authority to check (UAE FTA, HMRC, IRS/FinCEN, IRAS, CRA) |
| T1 logic | Inputs: tax year, days in India this year, days in the previous 4 years, days in the previous 7 years, citizenship or origin, Indian income band, mode (general, seafarer, OCI/PIO, returning). Output: NRI, RNOR or resident (indicative) with the rule that decided it. Rule table lives in Section 5.7 and is signed off before launch |
| T2 logic | Inputs: country, income types (rent, NRO interest, shares/MF, property sale link, salary), refund wanted. Output: checklist rows with where to get each item |
| T3 logic | Inputs: country, tax year. Output: two-column table plus .ics file |

### 4.8 FAQ hub

| # | Slug | Status | SEO title (chars) | Meta (chars) | H1 | Primary / secondary | Intent | Words | Angle |
|---|---|---|---|---|---|---|---|---|---|
| FAQ | `/faq/nri-tax` | NEW | Keep current /faq title | Keep current /faq meta | NRI Tax Questions Answered | P: (hub for long tail). S: nri tax faq; nri income tax questions | Informational hub | 2,400 | 30 direct-answer FAQs (6.1) grouped by theme, each linking to its owner page, so no owner page text is copied. Linked from the existing /faq |

| # | H2 / H3 outline | Internal links | External links | Schema | CTA placement | WhatsApp | Lead magnet | Enquiry trigger |
|---|---|---|---|---|---|---|---|---|
| FAQ | H2 NRI tax; H3 Residency; H3 NRO/NRE; H3 DTAA and documents; H3 Filing, refunds, notices; H3 Returning to India. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, all country pages, tools | incometax.gov.in | FAQPage (visible Q&As only) | After each H3 group | W12 | Checklist | Answer to Ask a CA link |

### 4.9 Case-study / proof page (template)

| # | Slug | Status | SEO title (chars) | Meta (chars) | H1 | Primary / secondary | Intent | Words | Angle |
|---|---|---|---|---|---|---|---|---|---|
| CS | `/case-studies/nri-tax` | NEW | NRI Tax Engagements: How We Work (32) | Anonymised, client-approved accounts of Indian tax work for NRIs: the situation, the steps, the records and the timeline. (121) | How We Handled These NRI Tax Engagements | P: (proof page). S: nri tax case study; nri itr filing case | Proof | 800-1,200 per case | Template only. Publish nothing until a real engagement is consented in writing. noindex until then |

**Template (FIRM-FILL every field; publish nothing invented):**

| Field | What goes here | Rule |
|---|---|---|
| Engagement ID | Internal ref | Not shown |
| Consent | Signed consent date and scope (named or anonymised) | Mandatory before publishing; page stays noindex until then |
| Client profile | e.g., "Salaried NRI in the Gulf with a rented Chennai flat" | Anonymise unless consent for name |
| Starting situation | e.g., TDS on NRO interest, refund not received | Factual |
| Constraints | Time zone, documents held abroad, deadline | Factual |
| What we did | Steps and forms actually filed | No forms not filed |
| Timeline | Actual dates from the portal records | Actual, never "typical"; no turnaround promise |
| Documents that mattered | e.g., TRC obtained from the foreign authority | Factual |
| What a reader can learn | 3 bullets | Educational |
| Schema | Article + BreadcrumbList (no Review, no rating) | - |
| CTA | "Similar situation? WhatsApp Us" | ICAI-CHECK the format: factual, no praise quotes, no outcome guarantees |

### 4.10 Pricing / process explainer

| # | Slug | Status | SEO title (chars) | Meta (chars) | H1 | Primary / secondary | Intent | Words | Angle |
|---|---|---|---|---|---|---|---|---|---|
| PX | `/nri-tax-filing-process-explained` | NEW | NRI Tax Filing: How Our Process Works Online (44) | What we do for an NRI return, what we need from you, how calls work across time zones and how the written quote is shared. No fees listed here. (143) | How Our NRI Tax Filing Engagement Works | P: nri itr filing process. S: what is included in nri tax filing; nri tax filing cost india; nri tax filing quote | Process / pricing explainer | 1,300 | Transparency without price lists (ICAI): scope, documents, time-zone call model, secure-upload confirmation (FIRM-FILL), written quote after a 15-minute consultation |

| # | H2 / H3 outline | Internal links | External links | Schema | CTA placement | WhatsApp | Lead magnet | Enquiry trigger |
|---|---|---|---|---|---|---|---|---|
| PX | Six stages; included / not included table; documents (link T2); how calls work across time zones; what changes the professional fee (no figures); data handling (FIRM-FILL); quote. Rules and thresholds carry: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." | MP, T2, T3, FAQ | incometax.gov.in | WebPage, BreadcrumbList (+FAQPage if visible) | After scope table, end | W12 | Scope checklist | Comparing providers |

---


## 5. Money-page blueprint: `/nri-tax-services`

Label used in this section: **L** = "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." It must appear on the page next to each marked statement until a CA signs it off in `seo/CA-SIGNOFF.md`.

### 5.0 What changes versus the current page (`src/app/nri-tax-services/page.tsx`)

| Current element | Keep / change | Upgrade |
|---|---|---|
| Title "NRI Tax Services for UAE, UK and USA, C S Rushil & Co." | Change | "NRI Tax Filing in India: Chennai CA, Done Online" (see 5.1). Leads with the owned head term and stops competing with the three country pages |
| Meta leads with property-sale TDS and repatriation | Change | New meta in 5.1; property sale and 15CA/15CB move to a link-only box |
| H1 "NRI Tax Services in India" | Change | "NRI Tax Filing in India, Done Online by a Chennai CA Firm" |
| Eyebrow "NRI Clients · UAE · UK · USA" | Change | "NRI Clients · Served online from Anna Nagar, Chennai" |
| 6 sub-service cards (3 country, 1 property sale, NRE/NRO/FCNR, returning) | Change | Keep the NRE/NRO and returning cards; turn the country cards into a 5-country chooser (UAE, UK, USA, Singapore NEW, Canada NEW); the property card becomes a link-only box |
| 6-step HowTo | Keep, extend | Add responsible party, document and delay reason per step (5.5) |
| 6 FAQs | Expand | 22 FAQs (5.11), property-sale and embassy-attestation wording removed (L4) |
| keyFacts / documents / children tables | Missing | Add key facts, residency table (5.7), documents tables (5.8), problems block (5.9) |
| relatedPosts = `rnor-status-returning-nri` only | Expand | S1, S2, S3, S4, S6, C1, C3 (5.14) |
| Citation link to `incometax.gov.in/.../return-applicable-0` | Re-check before deploy | Portal URLs change (L20) |
| No tools, no process page, no FAQ-hub link | Add | T1, T2, T3, PX, FAQ hub |

### 5.1 Meta and head

| Element | Value |
|---|---|
| SEO title (48) | NRI Tax Filing in India: Chennai CA, Done Online |
| Meta description (150) | File your Indian return from abroad: residency, NRO/NRE income, DTAA relief and refunds, handled online by a Chennai CA firm. WhatsApp or book a call. |
| Slug | `/nri-tax-services` (unchanged) |
| Canonical | `https://www.csrushil.com/nri-tax-services` |
| OG title | NRI Tax Filing in India, Done Online from Chennai |
| OG description | Residency, NRO/NRE income, DTAA relief and refunds for NRIs, handled by a Chartered Accountant firm in Chennai. |
| Primary keyword | nri tax filing india |
| Secondary keywords | nri ca in chennai; nri tax consultant chennai; nri income tax return filing service; dtaa relief for nris; nri residential status; nro nre income tax; deemed residency; returning nri tax consultant |
| Tamil keywords (in a visible Tamil summary box) | என்ஆர்ஐ வருமான வரி தாக்கல் (NRI varumaana vari thaakkal); வெளிநாடு வாழ் இந்தியர் வரி (velinaadu vaazh indhiyar vari) |

### 5.2 Block (1): Above the fold

| Element | Copy / spec |
|---|---|
| Eyebrow | NRI Clients · Served online from Anna Nagar, Chennai |
| H1 | NRI Tax Filing in India, Done Online by a Chennai CA Firm |
| One-line outcome | We check your residential status, file your Indian return, claim treaty relief and TDS refunds, and give your overseas adviser the Indian figures. |
| Trust line | Led by CA Rushil C S, practising Chartered Accountant (ICAI). ICAI membership no. and firm registration no.: FIRM-FILL. Team of 16. Office in Anna Nagar, Chennai. |
| Primary CTA | WhatsApp Us (W12, with a country selector that swaps to W2-W6) |
| Secondary CTA | Book a 15-minute consultation (https://calendly.com/ceo-csrushil/30min). "Free" is ICAI-CHECK |
| Phone | Call +91 72001 49711 (Mon-Sat 9:30 AM-6:30 PM IST) |
| Proof points (4, factual only) | CA-led · Online from anywhere · Video calls by appointment across time zones (slots: FIRM-FILL) · Indian side only, coordinated with your local adviser |
| Quick facts (5) | 1) Residential status decides what India taxes (L). 2) NRE and FCNR interest is exempt while non-resident; NRO interest is taxable (L, FEMA point: L). 3) DTAA relief needs a Tax Residency Certificate and Form 10F (L). 4) Income-tax Act, 2025 applies from 1 April 2026; FY 2025-26 and earlier follow the 1961 Act (L). 5) We advise on Indian tax only |
| Time-zone strip | UAE IST -1:30 · UK IST -5:30 (winter) / -4:30 (summer) · USA East IST -10:30 / -9:30 · Singapore IST +2:30. "Pick WhatsApp now, we reply in IST hours" (reply time: FIRM-FILL) |
| Secondary link | "Not sure of your status? Try the residency checker" (T1) |

### 5.3 Block (2): Who it is for (8 audiences: pain and solution)

| # | Audience | Pain | What we do | Link |
|---|---|---|---|---|
| 1 | Gulf-based salaried NRIs with Chennai rent or NRO deposits | No local tax, worry about deemed residency and TDS | Status check, return, TRC route | UAE, S6 |
| 2 | NRIs in the UK, USA, Canada and Singapore | Two tax systems, evidence demanded by their local adviser | Indian return plus tax-paid evidence | UK, USA, CA, SG |
| 3 | Seafarers and offshore workers | Day count near the threshold | Crew-specific status check | A1 |
| 4 | OCI cardholders and foreign citizens of Indian origin | Long stays, unclear residency | Day-grid check and filing | A2 |
| 5 | NRI investors in Indian shares and funds | TDS on every redemption, foreign reporting | Gains computation, refund claim | A3, S7 |
| 6 | Families in Chennai managing an NRI's flat or accounts | Do not know what they may sign | Mandate, authorised representative, office visit | A4 |
| 7 | New NRIs in the year they leave | Status in a part-year, savings account | Departure-year plan | A5 |
| 8 | Returning NRIs | RNOR years, NRE redesignation, foreign assets | Return-year plan | S2, C5 |

### 5.4 Block (3): What is included

| Deliverable | Detail | Form / portal | Follow-up |
|---|---|---|---|
| Residential status review | Days in India for the year and earlier years, citizenship or origin, income | Working paper (internal) | Re-checked every year |
| Indian income computation | Rent, NRO interest, dividends, capital gains on securities, other Indian-source income | ITR-2 or ITR-3 (L) | Carry-forward records |
| TDS reconciliation | Match deductions to Form 26AS and AIS | incometax.gov.in | Refund tracking |
| Treaty relief | Assess DTAA position; list documents (TRC, Form 10F: 2025-Act number L) | TREATY text | Annual TRC reminder |
| Filing and e-verification | File online; plan the verification method before filing (L) | e-filing portal | Acknowledgement copy |
| Refund follow-up | Bank validation and status tracking (L) | e-filing portal | Resolve mismatches |
| Figures for the overseas adviser | Indian income, tax paid, certificates in a summary | PDF pack | Questions from the adviser |
| Notice support after filing | Intimations and notices on the filed year | e-Proceedings; link NOT | Authorised representative (L) |
| Out of scope on this page | Property sale and lower-TDS certificate (PROP), Form 15CA/15CB (15CA), HNI planning (HNI), foreign tax advice | - | Linked pages |

### 5.5 Block (4): Step-by-step process

No turnaround promise is made. Timing depends on how fast documents arrive and on portal availability (FIRM-FILL for any internal target).

| # | Step | Responsible | Documents | Form / portal | What delays it |
|---|---|---|---|---|---|
| 1 | 15-minute consultation by WhatsApp or video | CA + you | Country, income types, days in India | Calendly / WhatsApp | Time-zone mismatch; vague day counts |
| 2 | Residential status check | CA | Passport stamps, travel records, employment letters | T1 (indicative), working paper | Missing travel records |
| 3 | Document collection | You (family in Chennai may help) | See 5.8 | Secure upload method confirmed at onboarding (FIRM-FILL) | Missing Form 26AS/AIS access; TRC not yet issued |
| 4 | Computation and treaty review | CA team | Statements, TDS certificates, TRC, Form 10F | Working papers | Mismatch between AIS and statements |
| 5 | Review call | CA + you | Draft computation | Video call in your time zone | Late-evening or early-morning slot availability |
| 6 | Filing and verification | CA team + you | Approved computation | e-filing portal (L) | Verification method not available abroad |
| 7 | Refund follow-up | CA team | Validated bank account | e-filing portal (L) | Account not pre-validated; pending notices |
| 8 | Pack for your overseas adviser | CA team | Filed return, acknowledgement, certificates | PDF | Overseas adviser's deadline vs Indian date |

### 5.6 Block (5): Comparison with three alternatives

| Factor | Chennai CA firm (us) | Doing it yourself on the portal | Overseas accountant alone | Online filing platform |
|---|---|---|---|---|
| Suitability | Mixed income, treaty claims, notices, returning NRIs | Simple case: one income type, clear status | Good for your home-country return | Simple, template-fit cases |
| Liability | Professional responsibility sits with the CA firm for the work it signs | Entirely yours | Limited to Indian rules they may not know (L) | Terms of the platform |
| Compliance | Status, DTAA, TDS, FEMA touchpoints (L), notices | You must keep up with changes | Indian forms and Act 2025 changes may be unfamiliar | Fixed workflow |
| Cost complexity | Quoted in writing after a consultation; no price list on site | No professional fee, high time cost | Extra work to learn Indian rules | Varies by plan; add-ons for notices |
| Treaty and credit suitability | Prepares Indian evidence for credit abroad | Weak without a TRC and Form 10F | Strong on foreign credit, weak on Indian side | Often limited |
| Best use | When Indian and foreign returns must match | When you are sure of status and income | Alongside us, for your home country | Simple resident-like cases |

Compliance cells carry L. No competitor is named. Full discussion: C4.

### 5.7 Residency decision table (supports step 2 and T1)

Everything in this table carries L. Section numbers under the Income-tax Act, 2025 are not in the fact sheet: show them only after a check against the Act text (L17).

| # | Test | Who it applies to | Rule as commonly stated (L) | Result |
|---|---|---|---|---|
| 1 | Basic condition A | Any individual | In India 182 days or more in the tax year | Resident |
| 2 | Basic condition B | Any individual | In India 60 days or more in the year and 365 days or more in the 4 preceding years | Resident (see exceptions) |
| 3 | Exception: leaving for work or crew | Indian citizen who leaves India for employment abroad or as crew of a ship | Condition B's 60 days becomes 182 days | Condition A is the only test |
| 4 | Exception: visiting Indian citizen or person of Indian origin | Indian citizen or person of Indian origin who comes to India on a visit | 60 days becomes 182 days if Indian-source income is 15 lakh or less; becomes 120 days if above 15 lakh (with the 365-day condition) | Resident if condition met |
| 5 | Deemed resident | Indian citizen with Indian income above 15 lakh who is not liable to tax in any other country by reason of domicile or residence | Treated as resident | Resident but not ordinarily resident (RNOR) |
| 6 | RNOR test | A resident under 1-5 | Non-resident in 9 of the 10 preceding years, or in India 729 days or less in the 7 preceding years | RNOR |
| 7 | Otherwise | A resident not meeting 6 | - | Resident and ordinarily resident (ROR) |

| Status | What India taxes (L) | Foreign-asset reporting in the return (L) | NRE/FCNR interest |
|---|---|---|---|
| Non-resident | Income that arises or is received in India | Not required | Exempt while a person resident outside India (L, FEMA) |
| RNOR | Indian income plus income from a business controlled in India; foreign income earned and received abroad generally not taxed | Not required (as the existing RNOR post states) | NRE becomes taxable once you return; FCNR may continue to maturity (L, FEMA) |
| ROR | Worldwide income | Required (Schedule FA) | Taxable |

### 5.8 Block (6): Documents

| Audience | Documents |
|---|---|
| NRIs | PAN; passport and visa pages; record of days in India (travel stamps, boarding passes, employer letters); Form 26AS and AIS; NRO and NRE statements; TDS certificates; rent agreement and tenant details; contract notes or capital-gains statements for shares and funds; Tax Residency Certificate and Form 10F where treaty relief is claimed (L); bank details for refund (account pre-validated: L) |
| OCI and foreign citizens of Indian origin | Foreign passport; OCI card; proof of origin if relied on (L); days-in-India record for 5 years; Indian income documents as above |
| Family representatives in Chennai | Their ID; written mandate from the NRI; NRI's PAN copy; access to physical papers; authorised-representative route confirmed on the portal (L) |
| NRI-owned companies or partnerships with Indian income | Entity PAN and filings are handled by the relevant plan; link to `/company-registration-india-for-foreigners` (LINK-ONLY) and `/blog/nri-director-private-limited-company` (LINK-ONLY) |

DTAA document checklist (summary; T2 gives the interactive version):

| Document | Where to get it | Used for | Label |
|---|---|---|---|
| Tax Residency Certificate | Tax authority of your country of residence | Proof of residence for treaty benefit | L |
| Form 10F | Prepared and filed through the Indian portal (2025-Act number: L) | Details accompanying the TRC | L |
| Passport and visa copies | You | Status and identity | - |
| Form 26AS / AIS | Indian portal | TDS and income reconciliation | L |
| Indian tax-paid evidence | We prepare after filing | Credit claim in your country | Foreign rule |

"Documents are shared through the secure upload method the firm confirms at onboarding" is the only wording permitted until the firm documents its process.


### 5.9 Block (7): Problems we solve

| Problem | What goes wrong | What we do | Link |
|---|---|---|---|
| Filed with the wrong residential status | Foreign income or Schedule FA wrongly included or left out | Review days, correct through the route open for that year (L) | P5 |
| Excess TDS on NRO interest, rent or gains | Flat-rate deduction above real liability | Reconcile and claim through the return | S3, P4 |
| Refund stuck | Bank account not validated, mismatch, pending verification | Fix cause and track status (L) | P4 |
| PAN inoperative | Higher TDS, refund and filing issues | Check linking position and restore (L) | P2 |
| Missed due date | Belated or updated return needed | Choose the open route, file with evidence (L) | P3 |
| Notice received while abroad | Response window running across time zones | Triage, authorised representative, response (L) | P1 |
| No Tax Residency Certificate or Form 10F | Treaty relief cannot be claimed | Guide to the certificate route, prepare Form 10F (L) | S4 |
| Overseas adviser needs Indian figures | Two returns tell different stories | Evidence pack and call with the adviser | UK, USA, CA |
| Unsure whether deemed residency applies | Fear of being taxed on worldwide income | Fact check against the rule (L) | S6 |
| Returning to India without a plan | Wrong NRE handling, missed RNOR years | Return-year plan | S2, C5 |

### 5.10 Blocks (8) and (9): Location coverage and why choose the firm

**Location coverage (served online; one office in Anna Nagar, Chennai).**

| Where you live | Page | Time zone vs IST | Best call window (FIRM-FILL slots) |
|---|---|---|---|
| UAE | `/nri-tax-services-uae` | -1:30 | Office hours cover it |
| UK | `/nri-tax-services-uk` | -5:30 winter / -4:30 summer | UK morning = IST afternoon |
| USA (East) | `/nri-tax-services-usa` | -10:30 / -9:30 | Late-evening IST |
| USA (West) | `/nri-tax-services-usa` | -13:30 / -12:30 | Early-morning IST |
| Singapore | `/nri-tax-services-singapore` NEW | +2:30 | Office hours cover it |
| Canada (Toronto) | `/nri-tax-services-canada` NEW | as USA East | Early-morning IST or late-evening IST |
| Elsewhere (Germany, Australia, Oman, Qatar and more) | This page; ask on WhatsApp | Varies | Booked slot |

Tamil Nadu coverage block: "From Coimbatore, Madurai, Trichy, Salem, Tirunelveli, Tiruppur, Vellore, Erode or Thoothukudi, you can work with us online, or visit the Anna Nagar office by appointment (Mon-Sat 9:30 AM-6:30 PM, Sunday closed). Seafarers from Thoothukudi: see Income Tax for Seafarers." No office is claimed outside Anna Nagar.

**Why choose the firm (9).**

| Reason | Proof allowed on the page |
|---|---|
| CA-led | CA Rushil C S, practising Chartered Accountant (ICAI), FAFD certificate, Start-up Mentor (fact sheet); ICAI no. and FRN: FIRM-FILL |
| Chennai presence | Anna Nagar office, address and hours; walk-in by appointment for families |
| End-to-end | Status, computation, treaty review, filing, refund, notice support, figures for your overseas adviser |
| WhatsApp-first for people abroad | Messages at any hour, replies in IST hours (reply time: FIRM-FILL); video call slots by appointment |
| Compliance continuity | Yearly filing, deadline calendar (T3), RNOR planning when you return |
| Indian side only, clearly | We coordinate with your local adviser instead of advising on foreign tax |

No ratings, review counts, superlatives or client numbers appear in this block.

### 5.11 Block (10): FAQs (22, each 40-80 words)

Place as visible FAQ items; the FAQPage JSON-LD text must equal the visible text. Each marked answer carries the label next to it until signed off.

| # | Question | Answer (40-80 words) | Label / source |
|---|---|---|---|
| 1 | Who counts as an NRI for Indian income tax? | Tax status depends on days in India, not on your passport. Broadly, you are resident if you spent 182 days or more in India in the tax year, or 60 days in the year plus 365 days in the preceding four years. Otherwise you are a non-resident. Longer-stay thresholds apply to some Indian-origin visitors, and exceptions apply to crew and people leaving for work. We check your exact days. | L; ITD, ACT |
| 2 | Do NRIs have to file an income tax return in India? | Usually yes, if your Indian income is above the basic exemption limit, or tax was deducted and you want a refund. Rent from a Chennai flat, NRO interest, dividends and capital gains are taxable in India even when you live abroad. A return is also how you carry forward losses and claim treaty relief. Send us your income types and we will tell you. | L; ITD |
| 3 | Is NRE account interest taxable in India? | Interest on NRE and FCNR deposits is exempt from Indian income tax while you remain a non-resident, but it can be taxable in the country where you live. Once you return and become resident, the exemption stops and the bank asks you to redesignate the account. Keep NRE for foreign-earned money and use NRO for Indian income. | L; RBI, ITD |
| 4 | Is NRO interest taxable and why is TDS deducted? | Yes. Interest on an NRO account is taxable in India, and the bank deducts tax at source at a higher rate for non-residents. If your real liability is lower, or a treaty rate applies, you claim the difference back by filing a return that matches the TDS shown in Form 26AS or AIS. Sending NRO money abroad is subject to FEMA conditions. | L; ITD, RBI |
| 5 | Do I still need to file if TDS was already deducted? | Often yes. TDS on NRO interest, rent or share sales is deducted at flat rates, not at your actual liability, so a return is how you claim back any excess. A return also reports gains properly and keeps your record clean for banks and for your overseas adviser. If TDS fully settles your tax, we tell you whether filing is optional. | L; ITD |
| 6 | What is DTAA relief and how do I claim it? | A Double Taxation Avoidance Agreement stops the same income being fully taxed in two countries, by exempting it in one or giving credit for tax paid. To use it in India you usually need a Tax Residency Certificate from your country and a Form 10F. Which method applies depends on the treaty and the income, so we and your local adviser both check it. | L; TREATY |
| 7 | What are a Tax Residency Certificate and Form 10F? | A Tax Residency Certificate is issued by your country's tax authority to show you are tax resident there. Form 10F is a statement of details that accompanies it when you claim treaty benefits in India. Keep the certificate current for the year of claim. The form number and format under the Income-tax Act, 2025 must be checked before filing. | L; ITD, TREATY |
| 8 | What is deemed residency and who does it affect? | Under the deemed-residency rule, an Indian citizen whose Indian income is above 15 lakh rupees and who is not liable to tax in any other country is treated as resident but not ordinarily resident. It mainly affects Gulf residents. Foreign-source income is left out when testing the limit. We check your facts and your country's tax position before filing. | L; ACT |
| 9 | What is RNOR status? | RNOR means resident but not ordinarily resident, a transition status after long years abroad. In RNOR years, foreign income that you earn and receive abroad is generally not taxed in India, and foreign-asset reporting in the return is not required. It usually lasts a few years after you return, depending on your past stays. We map your years before you move. | L; ACT, ITD |
| 10 | Which ITR form does an NRI use? | Most NRIs with rent, interest, dividends or capital gains file ITR-2, and those with business or professional income file ITR-3. The simplest resident form, ITR-1, is not available to non-residents. We choose the form after checking your income types and status. Form rules can change each year, so we confirm against the portal before filing. | L; ITD |
| 11 | What is the due date for an NRI's return? | For individuals who do not need an audit, the usual due date is 31 July after the tax year ends, with belated and updated return options later. Audit cases have a later date. Dates can change by notification, so confirm them on the e-filing portal each year. Our deadline calendar shows Indian dates beside your country's filing season. | L; ITD |
| 12 | Can I file and e-verify from abroad? | Yes, you file online and then e-verify. Common methods include Aadhaar OTP, net banking, a Digital Signature Certificate or an electronic verification code linked to a bank account. Not every NRI has an Indian mobile number linked, so we plan the method before filing. An unverified return is generally not treated as valid. | L; ITD |
| 13 | Can you work with me across time zones? | Yes. Most NRIs work with us by WhatsApp messages and booked video calls, not office-hours phone calls. Our office hours are Monday to Saturday, 9:30 AM to 6:30 PM IST, and the firm confirms early-morning and late-evening IST call slots for the UK, USA and Canada. Documents are shared digitally, so nothing needs to be couriered. | FIRM-FILL for slots |
| 14 | Do you advise on my UAE, UK, US, Singapore or Canadian tax? | No. We are Chartered Accountants in India and advise on the Indian side only. We give your local accountant or CPA the Indian return, tax-paid evidence and treaty position they need, so both returns tell the same story. Your residence-country tax, reporting and penalties stay with an adviser licensed there. | Firm scope |
| 15 | What documents do I need? | Typically your PAN, passport, days-in-India record, bank and NRO statements, Form 26AS and AIS, TDS certificates, rent agreements, and for treaty relief a Tax Residency Certificate and Form 10F. Capital gains need contract notes or statements. Our document checklist tool tailors the list to your country and income types. | L; ITD |
| 16 | Can my parents file or sign for me? | Family in Chennai can collect documents, share account details and visit our office, but the return belongs to you and is filed under your PAN with your authority. Some steps, such as verification and treaty-claim consent, need you or a properly authorised representative. The authorised-representative process must be confirmed on the portal. | L; ITD |
| 17 | What if I missed the deadline? | You may still file a belated return for the year, and later an updated return, subject to conditions, extra interest or fees and loss of some benefits such as carrying forward certain losses. The windows and fees are date-sensitive, so check the current rule. File as soon as you can and tell us your original situation. | L; ITD |
| 18 | What if I get an income tax notice while abroad? | Do not ignore it. Read the section and the response date, then send us the notice. Do not share your portal password; we can act as your authorised representative once you add us on the portal. Notices are posted on the portal, and e-mail alerts are easy to miss across time zones. | L; ITD |
| 19 | I am returning to India. What should I plan? | Plan before you land. After long years abroad you are often RNOR for a few years, which can protect foreign income and keep foreign-asset reporting out of the return for those years. NRE accounts need redesignation under FEMA, and FCNR can run to maturity. Tell us your arrival date and foreign assets so we map each year. | L; ACT, RBI |
| 20 | Which tax law applies after the new Income-tax Act? | The Income-tax Act, 2025 applies from 1 April 2026 and renumbers most sections and forms. Income for financial year 2025-26 and earlier is still assessed under the 1961 Act, so old notices and certificates quote the old numbers. We map both sets for you and check each form name before filing. | L; ACT |
| 21 | How do you keep my documents safe? | Your documents hold bank and identity details, so how they are shared matters. The firm confirms the secure upload method at onboarding and tells you before you send anything. Never email passwords or OTPs, and never share your portal login. We ask only for documents needed for your return and tell you how long they are kept. | FIRM-FILL (method, retention) |
| 22 | What does it cost? | Professional fees depend on your income types, number of years, treaty claims and notices, so we quote in writing after a 15-minute consultation instead of publishing a price list. Government charges, where any apply, are shown at cost. Ask on WhatsApp with your country and income types for a written quote. | ICAI: no fee figures |

### 5.12 Block (11): Final CTA block

| Element | Copy |
|---|---|
| Heading | Tell us where you live and what Indian income you have |
| Body | Share your country, income types and tax year on WhatsApp. A chartered accountant replies in IST office hours (reply time: FIRM-FILL), and we can book a video call in a time that suits your zone. |
| Primary button | WhatsApp Us (W12 with country selector) |
| Secondary | Book a 15-minute consultation (https://calendly.com/ceo-csrushil/30min); ICAI-CHECK the word "free" |
| Phone | Call +91 72001 49711 |
| Reassurance line | We advise on Indian tax only and coordinate with your local adviser. Documents are shared through the secure method the firm confirms at onboarding. |
| Form | Name, WhatsApp number with country code, email, country of residence, service, urgency; optional: tax year, notice type, deadline, planned return date (Section 9.9) |

### 5.13 Structured data (JSON-LD; only visible content; no ratings)

| Type | Rule |
|---|---|
| Service | `name` "NRI Tax Filing in India", `serviceType` "NRI Tax Advisory", `provider` = firm `@id`, `areaServed` = India, United Arab Emirates, United Kingdom, United States, Singapore, Canada (list only the pages that exist), no `offers.price` |
| FAQPage | The 22 visible FAQs, text identical to the page |
| BreadcrumbList | Home > NRI Tax Services |
| Organization / AccountingService | Site-wide in layout; NAP identical to GBP; hours Mon-Sat 09:30-18:30; no `aggregateRating` or `review` |
| HowTo | Optional for 5.5; keep only if the steps are visible |

Example (illustrative; build from the page's data so it cannot drift):

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "NRI Tax Filing in India",
  "serviceType": "NRI Tax Advisory",
  "url": "https://www.csrushil.com/nri-tax-services",
  "provider": { "@type": "AccountingService", "name": "C S Rushil & Co., Chartered Accountants", "url": "https://www.csrushil.com" },
  "areaServed": ["India", "United Arab Emirates", "United Kingdom", "United States"],
  "description": "Indian income tax filing, residential status, DTAA relief and refund follow-up for NRIs, handled online from Chennai."
}
```

### 5.14 Internal-link plan (for MP)

| From MP to | Anchor text | Where |
|---|---|---|
| `/nri-tax-services-uae` | NRI tax services in the UAE | Country chooser, location block |
| `/nri-tax-services-uk` | NRI tax services in the UK | Same |
| `/nri-tax-services-usa` | NRI tax services in the USA | Same |
| `/nri-tax-services-singapore` | NRI tax services in Singapore | Same |
| `/nri-tax-services-canada` | NRI tax services in Canada | Same |
| `/tools/nri-residential-status-checker` | Check your residential status | Hero, residency table |
| `/tools/nri-dtaa-document-checklist` | DTAA document checklist | Documents block |
| `/tools/nri-tax-deadline-calendar` | NRI tax deadline calendar | FAQ 11 |
| `/nri-tax-filing-process-explained` | How our NRI engagement works | Process block |
| `/blog/nri-itr-filing` | how to file an ITR as an NRI | Process block |
| `/blog/rnor-status-returning-nri` | returning NRI tax consultant in Chennai guide | Returning-NRI card |
| `/blog/nro-fd-interest-tds-refund-nri`, `/blog/nre-vs-nro-account-tax-nri` | NRO interest and TDS; NRE vs NRO | NRE/NRO card |
| `/blog/tax-residency-certificate-form-10f-nri`, `/blog/dtaa-exemption-vs-foreign-tax-credit-nri` | Tax Residency Certificate and Form 10F; DTAA methods | DTAA card |
| `/blog/deemed-resident-15-lakh-rule-nri` | deemed residency | Residency block |
| A1-A5 pages | audience anchors | Who it is for |
| P1-P5 posts | problem anchors | Problems block |
| `/faq/nri-tax` | More NRI tax questions | After FAQs |
| LINK-ONLY: `/nri-property-sale-tds-chennai` ("selling property in Chennai as an NRI"), `/form-15ca-15cb-chennai` ("Form 15CA/15CB for repatriation"), `/income-tax-consultant-for-hni-chennai` ("large portfolios and HNI tax planning"), `/company-registration-india-for-foreigners` ("starting a company in India as a foreign national"), `/blog/nri-director-private-limited-company` ("NRI as a company director"), `/blog/foreign-rsu-tax-schedule-fa-chennai` ("foreign RSUs and Schedule FA"), `/blog/capital-gains-tax-property-sale` ("capital gains on property") | As shown | Out-of-scope box, A3/S7, returning-NRI card |

Links in: all five country pages, S1-S8, C1-C5, A1-A5, P1-P5, T1-T3, PX, FAQ and the homepage "NRI" card all link to MP with anchors drawn from: "NRI tax filing in India", "NRI CA in Chennai", "NRI tax consultant in Chennai", "NRI income tax return filing".

### 5.15 Image alt texts

| Image | Alt text |
|---|---|
| Hero (laptop with Indian e-filing screen and world clock) | NRI reviewing Indian income tax return online with a Chennai chartered accountant |
| Time-zone strip graphic | Time difference between India and UAE, UK, USA, Singapore |
| Residency table graphic | Flow chart of the residential status tests for NRIs |
| Office exterior (real photo, FIRM-FILL) | C S Rushil and Co. office entrance in Anna Nagar, Chennai |
| Founder photo (real) | CA Rushil C S, Chartered Accountant, Chennai |
| Documents graphic | Checklist of documents for an NRI Indian tax return |

---

## 6. AEO answer bank (30 + 15 x 7 = 135 answers)

How to use: each answer is written to be lifted by Google AI Overviews, ChatGPT, Perplexity, Gemini and Copilot. Put the question as an H2/H3 or FAQ item on the "Best page", the 40-80-word answer directly under it, then the supporting detail. Wherever the Source column carries the label "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing.", that label must appear on the page next to the answer until a CA signs it off in `seo/CA-SIGNOFF.md`. In this file the label is printed in full in every such cell. Foreign rules (UK, US, UAE, Singapore, Canada) also need a check against the foreign authority. FEMA points name RBI as the reference and carry the label. Forms and portals are named only where the fact sheet confirms them or the cell carries the label. CTA codes W1-W12 are defined in Section 9.7.

### 6.1 Direct-answer FAQs (30)

| # | Question | Direct answer (40-80 words) | Supporting detail | Form / portal / authority | Source / verification | CTA | Best page |
|---|---|---|---|---|---|---|---|
| D1 | What does NRI mean for Indian income tax? | For Indian income tax, an NRI is a person who is non-resident in India for the tax year. Status is decided by days spent in India, not by passport or visa. Broadly, 182 days or more makes you resident, and so can 60 days in the year plus 365 days in the previous four years. Exceptions exist for crew, people leaving for work and Indian-origin visitors. | Use the residency checker; tests in MP 5.7 | ITD, ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | MP |
| D2 | What is RNOR status? | RNOR means resident but not ordinarily resident. It is a transition status for people who return after long years abroad. In RNOR years, foreign income that you earn and receive outside India is generally not taxed in India, and foreign-asset reporting in the return is not needed. It is tested again every year and usually lasts a few years. | Nine-of-ten years and 729-day tests | ITD, ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W9 | S2 |
| D3 | Is interest on an NRO account taxable in India? | Yes. Interest on an NRO account is taxable in India for a non-resident, and the bank deducts tax at source. The deduction is a flat rate and may be higher than your real liability, so you can file a return to claim any excess back or to apply a treaty rate where the documents support it. | Show the TDS line from Form 26AS or AIS | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S3 |
| D4 | What is a Tax Residency Certificate? | A Tax Residency Certificate is a document issued by the tax authority of the country where you live, confirming that you are tax resident there. Indian rules generally ask for it, along with Form 10F, before you can claim relief under a tax treaty. Apply early because issue times differ by country and some countries issue it only for a specific tax year. | Issuer by country: UAE FTA, HMRC, IRS, IRAS, CRA (foreign rule) | ITD, TREATY | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S4 |
| D5 | What is Form 10F? | Form 10F is a statement of particulars, such as your name, status, tax identification number in the other country and residency period, which accompanies the Tax Residency Certificate when you claim treaty benefits in India. It is submitted through the Indian tax portal. Its form number and format under the Income-tax Act, 2025 must be checked before it is used. | Check number under the 2025 Act | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S4 |
| D6 | What is a DTAA? | A DTAA, or Double Taxation Avoidance Agreement, is a treaty between India and another country that decides which country may tax an item of income and how the other gives relief. Relief is given either by exempting the income or by allowing credit for tax paid. You usually must prove residence with a Tax Residency Certificate. | Treaty texts on incometaxindia.gov.in | TREATY | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | C3 |
| D7 | What are Form 26AS and AIS? | Form 26AS and the Annual Information Statement are tax records on the Indian portal that show tax deducted at source, high-value transactions and other income reported by banks and deductors. We reconcile your return against them. For NRIs they also show TDS on NRO interest, rent and securities, which you may need to claim back. | Portal login needs PAN | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S1 |
| D8 | Which income tax return form do NRIs file? | Most NRIs with rent, interest, dividends or capital gains file ITR-2, and those with business or professional income file ITR-3. ITR-1 is meant for resident individuals and is generally not available to non-residents. Always confirm the form against the portal for the year, because eligibility rules are updated regularly. | Link T1 first for status | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S1 |
| D9 | Can an NRI file an income tax return online from abroad? | Yes. An NRI can file the Indian return on the e-filing portal from any country and then e-verify it. Common verification methods are Aadhaar OTP, net banking, a Digital Signature Certificate or an electronic verification code. If none is possible from abroad, check the other methods the portal currently allows before the deadline. | Plan verification before filing | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S1 |
| D10 | What income of an NRI is taxable in India? | A non-resident is taxed on income that arises or is received in India. This typically includes rent from Indian property, NRO interest, dividends from Indian companies, capital gains on Indian assets and Indian-source business or professional income. Foreign income earned and received abroad is generally outside Indian tax for a non-resident. | Property gains: see capital-gains post (link only) | ITD, ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S1 |
| D11 | What is deemed residency under Indian tax law? | A deemed resident is an Indian citizen whose Indian income is above 15 lakh rupees and who is not liable to tax in any other country because of domicile or residence. Such a person is treated as resident but not ordinarily resident. Foreign-source income is left out when testing the limit. The rule matters most for people living in countries without personal income tax. | UAE example in S6 | ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W2 | S6 |
| D12 | Is NRE account interest taxable in India? | Interest on an NRE account is exempt from Indian income tax while you are a person resident outside India. It may still be taxable in the country where you live. After you return and become resident, the account must be redesignated, and interest from then on is taxable in India. | FEMA point: RBI directions | RBI, ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | C1 |
| D13 | Is FCNR deposit interest taxable in India? | FCNR interest is exempt from Indian income tax while you remain a non-resident, in the same way as NRE interest. When you return, a deposit made as FCNR can generally run to maturity at the agreed treatment, but you should check the current rules with your bank. Interest may still be taxable in your country of residence. | FEMA point: RBI directions | RBI, ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W9 | C5 |
| D14 | Is salary received in India by an NRI taxable? | Salary for work done in India is taxable in India for an NRI. Salary for work done abroad that is received outside India is generally not taxed in India, but salary credited directly to an Indian account can raise questions about where it was received. Keep payslips and the employment contract and ask a CA before relying on either position. | Do not rely on this without records | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | UAE |
| D15 | Is foreign salary taxable in India for an NRI? | Not while you are a non-resident, as salary earned and received outside India is generally outside the scope of Indian tax. It can become taxable if you become resident and ordinarily resident, or if the money is received in India. Your residence country may also tax it, so the overseas adviser must confirm the home position. | Link T1 for status | ITD, ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | UAE |
| D16 | Is rental income from an Indian flat taxable for an NRI? | Yes. Rent from property in India is taxable in India for a non-resident. The tenant is generally required to deduct tax at source when paying rent to an NRI, and you report the income in your return, where certain deductions in computing house-property income may apply. Rent is also usually reportable in your country of residence. | Tenant TDS rate: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W10 | S5 |
| D17 | Does a tenant deduct TDS on rent paid to an NRI? | Yes, a tenant paying rent to a non-resident is generally required to deduct tax at source, usually at a higher rate than for resident landlords, and to deposit it with the government. The tenant needs the landlord's PAN and a tax deduction account number. You claim credit for the deduction in your return. | Resident-landlord rent TDS: link only | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W10 | S5 |
| D18 | Are gains on Indian mutual funds taxable for NRIs? | Yes. Gains on Indian mutual fund units are taxable in India for non-residents, and the fund house generally deducts tax at source on redemption. The rate depends on the type of fund and holding period, so check the current rule. File a return to reconcile the TDS and claim any excess, and keep statements for your overseas adviser. | Rates depend on fund type and holding period | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S7 |
| D19 | Are dividends from Indian shares taxable for NRIs? | Yes. Dividends from Indian companies are taxable in India for a non-resident, and tax is deducted at source. A tax treaty may allow a lower rate if you hold a Tax Residency Certificate and submit the right form. The dividend usually also needs to be reported in your country of residence, with credit for Indian tax where available. | Treaty rate needs TRC | ITD, TREATY | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | A3 |
| D20 | Can an NRI claim an income tax refund in India? | Yes. If tax deducted at source or advance tax is more than your actual liability, you can claim the excess as a refund by filing a return. The refund is paid to a bank account that has been validated on the portal. Check the current rules on which accounts are accepted for NRIs, because foreign accounts are generally not. | Refund timing varies | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P4 |
| D21 | What is an NRO account? | An NRO account is a rupee account in India for managing income earned in India, such as rent, dividends or pension. Interest on it is taxable in India. Sending money abroad from it is allowed within conditions set under FEMA. A resident Indian can be a joint holder. Check the current rules with your bank before remitting. | FEMA: RBI directions | RBI, ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | C1 |
| D22 | What is an NRE account? | An NRE account is a rupee account for money earned abroad that you bring to India. Interest is exempt from Indian income tax while you are non-resident, and the balance and interest can be sent abroad under FEMA rules. Only foreign-earned money should go in. When you become resident, the account must be redesignated. | FEMA: RBI directions | RBI, ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | C1 |
| D23 | What is the Income-tax Act, 2025? | The Income-tax Act, 2025 is the new law that replaces the Income-tax Act, 1961 from 1 April 2026. It renumbers sections and rewrites forms and uses the idea of a tax year. Income for financial year 2025-26 and earlier is still assessed under the 1961 Act, so you may see both sets of numbers. | We map old and new numbers | ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | MP |
| D24 | What is Schedule FA? | Schedule FA is the part of the Indian return where residents report foreign assets and foreign accounts. The portal instructions say it need not be filled by a non-resident or by a resident but not ordinarily resident. It applies from the first year you are resident and ordinarily resident, so prepare your foreign asset list before returning. | Foreign RSU post is link only | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W9 | S2 |
| D25 | Does an NRI need a PAN in India? | In practice yes. An NRI needs a PAN to file a return, to claim refunds, to receive rent after tax deduction and to invest or sell assets in India. Banks and deductors apply higher tax deduction where the PAN is missing or inoperative. Keep your PAN active and check the current rule on Aadhaar linking for non-residents. | Link P2 | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P2 |
| D26 | Do NRIs get the basic exemption limit? | An NRI is taxed as an individual and generally gets the basic exemption limit like others, but benefits that are only for residents, such as the rebate for lower incomes, are generally not available. The limit and the rebate rules change, so check the current figures for the year before relying on any amount. | Do not quote amounts without label | ITD, ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S1 |
| D27 | Who is a person of Indian origin for income tax? | For the special day-count rule, a person of Indian origin is generally someone who, or whose parent or grandparent, was born in undivided India. OCI status is an immigration status and does not itself decide tax residency. Days in India and income decide it, so keep a record of travel for five years. | Definition as in the Act | ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W8 | A2 |
| D28 | What is the tax year for an NRI in India? | India's tax year runs from 1 April to 31 March. The Income-tax Act, 2025 describes it as a tax year, while earlier years are called financial and assessment years under the 1961 Act. Your country of residence may use a different year, such as the calendar year in the USA, so figures must be re-cut for each return. | Calendar table T3 | ACT, ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | T3 |
| D29 | Is an OCI cardholder an NRI for tax? | Not automatically. OCI is an immigration status that gives long-term access to India. Tax status depends on days in India and income, and the rules differ for persons of Indian origin who visit. An OCI holder who stays long can become resident. Use the day grid on the OCI page and keep a travel record. | Link A2 | ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W8 | A2 |
| D30 | Is the FEMA definition of an NRI the same as the tax definition? | No. Under FEMA the question is whether you are a person resident outside India, which decides which accounts and remittances you can use. For income tax the question is residential status for the tax year. The two tests differ, so a person can be treated differently under each. We handle the tax side and flag FEMA points. | FEMA page link only | RBI, ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | MP |

### 6.2 Comparison answers (15)

| # | Question | Direct answer (40-80 words) | Supporting detail | Form / portal / authority | Source / verification | CTA | Best page |
|---|---|---|---|---|---|---|---|
| CO1 | What is the difference between NRE and NRO accounts for tax? | NRE interest is exempt from Indian income tax while you are non-resident, and the money can be sent abroad freely under FEMA. NRO interest is taxable in India with tax deducted at source, and sending money abroad is subject to limits and documentation. Use NRE for foreign-earned funds and NRO for Indian income such as rent. | Table C1 | RBI, ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | C1 |
| CO2 | Should rent from my Chennai flat go to an NRE or NRO account? | Rent is Indian income, so it normally goes to an NRO account. NRE accounts are meant for money brought from abroad, and mixing sources can create FEMA questions. You can later send money abroad from the NRO account within conditions, with documents such as the CA certificate. Check the current limits with your bank. | 15CA/15CB link only | RBI | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W10 | C1 |
| CO3 | How does FCNR differ from NRE? | FCNR deposits are held in a foreign currency and carry no exchange-rate risk on the principal, while NRE deposits are held in rupees. Interest on both is exempt from Indian tax while you are non-resident. After you return, an FCNR deposit can generally continue to maturity under the rules, while an NRE account must be redesignated. | FEMA: RBI | RBI, ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W9 | C5 |
| CO4 | How is an NRI taxed differently from a resident? | A non-resident is taxed only on income that arises or is received in India. A resident and ordinarily resident is taxed on worldwide income and must report foreign assets in the return. A resident but not ordinarily resident sits in between. Some deductions and rebates for residents may not apply to non-residents. | Table C2 | ITD, ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | C2 |
| CO5 | What is the difference between RNOR and NRI status? | A non-resident spent too few days in India to be resident for the year. An RNOR is resident because of the days but is treated as not ordinarily resident because of long past absence. Both avoid Indian tax on foreign income earned and received abroad, but an RNOR is taxed on some income that a plain non-resident is not. | Table C2 | ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W9 | C2 |
| CO6 | What is the difference between RNOR and ordinarily resident? | An ordinarily resident is taxed on worldwide income and reports foreign assets. An RNOR generally is taxed in India only on Indian-source income and income from a business controlled from India. RNOR usually lasts a few years after a return, and the position is tested again every year, so plan before you move. | Table C2 | ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W9 | S2 |
| CO7 | What is the difference between the exemption and credit methods in a tax treaty? | Under the exemption method one country does not tax the income at all. Under the credit method both may tax it, but the country of residence allows credit for the tax paid in the other. Which applies depends on the treaty article and the type of income. Your local adviser applies the credit, using our Indian evidence. | Table C3 | TREATY | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | C3 |
| CO8 | What is the difference between ITR-2 and ITR-3 for an NRI? | ITR-2 is generally used by individuals without business or professional income, covering rent, interest, dividends and capital gains. ITR-3 is for individuals with business or professional income. Eligibility rules are updated each year, so we confirm the form against the portal after checking your income types and residential status. | ITR-1 not for non-residents | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S1 |
| CO9 | Is a Chennai CA better than an online filing platform for an NRI? | It depends on complexity. A simple case with one income type and a clear status may suit a self-service platform. Cases with treaty claims, several income types, notices or a planned return to India usually need a professional who knows both Indian rules and what your overseas adviser needs. We explain when each fits. | No competitor names | ITD | Firm scope / FIRM-FILL as stated | W12 | C4 |
| CO10 | Should my overseas accountant or an Indian CA file my Indian return? | Your overseas accountant knows your home-country return, but may not know Indian residency tests, TDS mechanics or the new Indian forms. An Indian CA handles the Indian side and gives your accountant the figures and evidence. Many NRIs use both, so the two returns agree and credit claims are supported. | Neutral comparison | ITD | Firm scope / FIRM-FILL as stated | W12 | C4 |
| CO11 | Does the old or new tax regime suit an NRI? | The new regime is the default, and the choice depends on your deductions and the type of income. Many NRIs have mainly rent, interest and gains, so the difference may be small, but some benefits are lost under the new regime. We compare both for your figures. The rules and slabs change, so check the current year. | Link-only regime post | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S1 |
| CO12 | Is an OCI holder taxed differently from an NRI? | Tax depends on residential status, not on OCI or passport. An OCI holder who is a foreign citizen of Indian origin gets a special day-count when visiting India, and may become resident with long stays. An Indian citizen NRI has different exceptions. Both are non-resident if the days are low. | Link A2 | ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W8 | A2 |
| CO13 | What is the difference between a belated, revised and updated return? | A belated return is the first return filed after the due date. A revised return corrects a return you already filed, within the allowed window. An updated return is a later route that lets you report additional income or correct a past return on conditions, usually with extra tax. The windows are date-sensitive. | Table P3 | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P3 |
| CO14 | How is deemed residency different from ordinary residency? | Deemed residency is a way of becoming resident: an Indian citizen with high Indian income who is not taxed anywhere else is treated as resident. Such a person is classed as resident but not ordinarily resident, so foreign income is not taxed. Ordinary residency means full tax on worldwide income. The two are not the same. | S6 | ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W2 | S6 |
| CO15 | Is it better to apply a treaty rate at source or claim a refund later? | If you can give the deductor your Tax Residency Certificate and Form 10F in time, a treaty rate can be applied at source and avoids a refund wait. If not, you can claim the excess by filing a return. Deductors differ in what they accept, so ask early and keep records either way. | Link S3, S4 | ITD, TREATY | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S3 |

### 6.3 Process answers (15)

| # | Question | Direct answer (40-80 words) | Supporting detail | Form / portal / authority | Source / verification | CTA | Best page |
|---|---|---|---|---|---|---|---|
| PRO1 | How do I file my Indian income tax return as an NRI, step by step? | First confirm your residential status for the year. Then collect your PAN, bank statements, Form 26AS and AIS, TDS certificates and, for treaty relief, a Tax Residency Certificate. We compute Indian income, review treaty relief, share a draft on a call, file on the portal and e-verify. Refund follow-up comes after filing. | Eight-step table in MP 5.5 | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S1 |
| PRO2 | How do I check my residential status for Indian tax? | Count your days in India for the tax year and for the four years before it, note your citizenship or origin and your Indian income, then apply the tests: 182 days, or 60 days plus 365 days with exceptions for crew, people leaving for work and Indian-origin visitors. Our residency checker gives an indicative result you should confirm with a CA. | T1 | ITD, ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | T1 |
| PRO3 | How do I e-verify my Indian return from abroad? | After filing, choose a verification method on the portal, such as Aadhaar OTP, net banking, an electronic verification code from a validated bank account or a Digital Signature Certificate. Plan the method before you file, because an Indian mobile number may be needed for the OTP. Unverified returns are generally not treated as valid. | Methods and time limit change | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S1 |
| PRO4 | How do I get a Tax Residency Certificate? | You apply to the tax authority of the country where you live, which issues the certificate for a specific period. The process, documents and time differ by country, so start well before your Indian deadline. We tell you what the Indian side needs on the certificate and prepare the matching Form 10F details. | Foreign authority: confirm each country | TREATY | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S4 |
| PRO5 | How do I submit Form 10F? | Form 10F is generally completed and submitted online on the Indian tax portal by the non-resident, using the details from the Tax Residency Certificate. The format, the portal route and the form number under the Income-tax Act, 2025 must be checked before you file. We prepare it with you and keep a copy with the return. | Check 2025-Act number | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S4 |
| PRO6 | How do I claim a refund of excess TDS as an NRI? | File a return showing your actual tax and the TDS credits as they appear in Form 26AS or AIS. Make sure your refund bank account is validated on the portal and the return is e-verified. The refund is then processed and shown on the portal. Mismatches between statements and the portal slow it down. | Refund time: no promise | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P4 |
| PRO7 | How do I add a CA as my authorised representative on the income tax portal? | On the portal you can nominate a chartered accountant as your authorised representative for specific proceedings, such as a notice reply, after which the representative can view and respond. Never share your own password. The exact steps and screens change, so check the current portal help before you start. | Never share passwords | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P1 |
| PRO8 | How do I share documents with an Indian CA from abroad safely? | Ask the firm which upload method it uses and use only that one. Send documents needed for the return, not passwords or OTPs. Remove card numbers and unrelated pages. The firm must confirm its secure exchange method at onboarding and tell you how long documents are kept. Keep your own copies. | FIRM-FILL: method, retention | Firm process | Firm scope / FIRM-FILL as stated | W12 | PX |
| PRO9 | How do I redesignate my NRE account when I return to India? | Tell your bank when you return and give your passport entry details. The bank redesignates your NRE and NRO accounts as resident accounts, or you can move funds to a resident foreign currency account within the rules. FCNR deposits can generally run to maturity. Do this promptly, because interest taxability changes once you are resident. | FEMA: RBI | RBI | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W9 | C5 |
| PRO10 | How do I convert my savings account to an NRO account after moving abroad? | Inform your bank when your status changes and give your overseas address and passport copies. The bank redesignates the savings account as an NRO account and may ask for forms. This should happen when you become a person resident outside India under FEMA. Delay can create a FEMA question, so act soon after you leave. | FEMA: RBI | RBI | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W1 | A5 |
| PRO11 | How do I download Form 26AS and AIS? | Log in to the Indian income tax portal with your PAN and open the e-file menu for tax credit statements or the annual information statement. You can view or download them as a file. If you cannot log in from abroad, we can guide you on the options. Check the portal's current menu names. | Menu names change | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S1 |
| PRO12 | How do I validate a bank account for refunds? | On the portal's profile section you add and validate a bank account against your PAN, usually using an Indian account in your name. NRIs commonly use an NRO or NRE account in their own name. A foreign account is generally not accepted for refunds. Complete validation before you file, not after. | Account rules change | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P4 |
| PRO13 | How do I book a call with you from another time zone? | Message us on WhatsApp with your country and a preferred time in your own zone, or use the booking link. Our office hours are Monday to Saturday, 9:30 AM to 6:30 PM IST, and the firm confirms early-morning or late-evening IST slots for the UK, USA and Canada. We confirm the time in both zones. | FIRM-FILL: slots | Firm process | Firm scope / FIRM-FILL as stated | W12 | PX |
| PRO14 | How do I respond to an income tax notice from abroad? | Open the notice on the portal, read the section and the response date, and send it to us. We prepare the reply and, once you add us as authorised representative, upload it. Do not wait for postal mail. Time zones can eat into the response window, so act in the first two working days. | Reply stays on notice-reply page | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P1 |
| PRO15 | How do I revise a return I already filed? | If you find an error, you can file a revised return within the allowed window, replacing the original, and e-verify it. If the window has closed, an updated return may be available on conditions. Wrong residential status is a common reason to revise. The windows are date-sensitive, so check the current rule. | P5 | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P5 |

### 6.4 Document and deadline answers (15)

| # | Question | Direct answer (40-80 words) | Supporting detail | Form / portal / authority | Source / verification | CTA | Best page |
|---|---|---|---|---|---|---|---|
| DD1 | What documents does an NRI need to file an Indian tax return? | Typically your PAN, passport pages, a record of days in India, bank and NRO statements, Form 26AS and AIS, TDS certificates, rent agreements and tenant details, and statements for shares or funds. For treaty relief add a Tax Residency Certificate and Form 10F. Our checklist tool tailors the list to your country. | T2 | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | T2 |
| DD2 | What documents are needed to claim DTAA relief? | You generally need a Tax Residency Certificate from your country, Form 10F, a copy of your passport and the income and TDS records for the item you are claiming. Some deductors ask for extra declarations. The exact list can change under the Income-tax Act, 2025, so we confirm it before you apply. | T2 | ITD, TREATY | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S4 |
| DD3 | What is the due date to file an NRI's income tax return? | For individuals who do not need an audit, the usual due date is 31 July after the tax year ends. Cases needing an audit have a later date. Belated and updated return windows follow. Dates can be extended or changed, so check the portal each year. Our deadline calendar shows Indian and local dates together. | T3 | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | T3 |
| DD4 | Until when can an NRI file a belated return? | A belated return can generally be filed after the original due date until a cut-off date for that year, usually 31 December after the tax year, with interest and a late fee, and some losses cannot be carried forward. The cut-off and fee are date-sensitive, so confirm the current rule before relying on them. | P3 | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P3 |
| DD5 | Does an NRI pay advance tax in India? | If your tax payable after TDS crosses the threshold, advance tax instalments apply to NRIs as to others, due on set dates in the year. Many NRIs whose income is mostly taxed at source owe none. Missing a required instalment can attract interest. Check the current threshold and instalment dates for the year. | Advance-tax post is link only | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S1 |
| DD6 | Within how many days must I e-verify my return? | After filing, a return must be e-verified within a limited number of days, commonly 30 days, or it may be treated as not validly filed. If you miss the window, you may need to condone the delay or file again. The time limit can change, so check the portal when you file. | Time limit: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | S1 |
| DD7 | How long is a Tax Residency Certificate valid? | A Tax Residency Certificate usually covers a stated period, often one tax year of the issuing country. You may need a fresh certificate for each year in which you claim treaty benefits. Issuers differ, so read the period printed on yours and match it to the Indian year of claim. | Foreign rule: issuing authority | TREATY | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S4 |
| DD8 | When is the UK Self Assessment deadline relative to my Indian return? | The UK online Self Assessment deadline is normally 31 January after the tax year ends on 5 April, and the Indian return is usually due on 31 July. The Indian figures are therefore ready well before the UK date. Confirm both dates with HMRC and the Indian portal each year. | Foreign rule: HMRC | FOREIGN, ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W3 | UK |
| DD9 | When are the US FBAR and tax return deadlines for NRIs with Indian accounts? | The FBAR is normally due on 15 April for the previous calendar year with an automatic extension to 15 October, and US returns follow the April date with extensions. Your CPA decides what must be reported. We provide Indian balances and income by calendar year. Check the dates with IRS and FinCEN. | Foreign rule: IRS, FinCEN | FOREIGN | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W4 | USA |
| DD10 | When is the Canadian personal tax return due for someone with Indian income? | The Canadian personal return is normally due on 30 April for the previous calendar year, with a later date for self-employed people, and tax owing is due earlier than any extension. Your preparer decides how to report Indian income. We provide Indian income and tax paid by calendar year. Check dates with the CRA. | Foreign rule: CRA | FOREIGN | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W6 | CA |
| DD11 | When is the Singapore personal tax return due for someone with Indian income? | Singapore individuals normally file in the spring following the calendar year, with an electronic filing date a few days after the paper date, and a separate notice sets the exact date. Foreign-source income is treated by Singapore's own rules. We supply Indian figures. Check the current date and treatment with IRAS. | Foreign rule: IRAS | FOREIGN | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W5 | SG |
| DD12 | Do people in the UAE have a personal income tax return deadline? | The UAE does not tax salary, so there is no personal salary return. The India questions remain: your Indian return, deemed residency and a Tax Residency Certificate from the UAE authority if you want treaty relief. Business owners should check UAE corporate tax separately with the UAE authority. | Foreign rule: UAE FTA | FOREIGN, ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W2 | UAE |
| DD13 | What documents can family in Chennai provide for an NRI's return? | Family can collect rent agreements, tenant details, bank letters, property tax receipts and paper statements, and share a written mandate from the NRI. They cannot sign or verify the return on the NRI's behalf unless properly authorised on the portal. We tell families exactly what to collect and what the NRI must do. | A4 | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W10 | A4 |
| DD14 | What documents prove my days in India? | Passport entry and exit stamps, boarding passes, e-tickets, immigration records, employment letters and visa pages. Keep records for the current year and the four before it, because the tests look back. For seafarers, the Continuous Discharge Certificate is a key record. Missing records weaken your position if you are ever questioned. | T1 | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | T1 |
| DD15 | What documents does a seafarer need for NRI status? | A seafarer should keep the Continuous Discharge Certificate with entry and sign-off dates, the contract and ship details, passport pages, salary credit records and NRE statements. These support the day count and show where salary was earned. The crew-specific rule is date-sensitive, so ask a CA to apply it to your years. | A1 | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W7 | A1 |

### 6.5 Cost and timeline answers (15)

| # | Question | Direct answer (40-80 words) | Supporting detail | Form / portal / authority | Source / verification | CTA | Best page |
|---|---|---|---|---|---|---|---|
| CT1 | How much does NRI tax filing cost in India? | Fees depend on your income types, the number of years, treaty claims and any notices, so we do not publish a price list. After a 15-minute consultation we send a written quote. Tell us your country, income types and tax year on WhatsApp so the quote is accurate and nothing unexpected is added later. | ICAI: no fee figures | Firm process | Firm scope / FIRM-FILL as stated | W12 | PX |
| CT2 | What decides the professional fee for an NRI return? | The main factors are how many income types you have, whether there are capital gains, how many years are pending, whether treaty documents are needed, whether a notice or refund problem exists, and how many calls are needed across time zones. A simple single-income return takes less work than a mixed-income one. | No figures | Firm process | Firm scope / FIRM-FILL as stated | W12 | PX |
| CT3 | Does the government charge a fee to file an income tax return? | Filing a return on the Indian portal does not carry a government filing fee, but a late fee and interest can apply if you file after the due date or owe tax. Check the current rule for your year. Our professional fees are separate and quoted in writing after consultation. | Late fee: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | PX |
| CT4 | How long does it take to file an NRI return? | It depends on how quickly your documents arrive and on portal availability, so we do not promise a turnaround. Simple cases move faster than mixed-income cases with treaty claims. The slowest steps are usually a missing Tax Residency Certificate, mismatched statements and booking a time-zone-friendly review call. | No promise | Firm process | Firm scope / FIRM-FILL as stated | W12 | PX |
| CT5 | How long does an income tax refund take? | Refund time depends on e-verification, bank validation, mismatches and any pending notices, so no fixed date can be promised. The portal shows the status once the return is processed. Delays are most common when the refund account is not validated or the return is not verified. Check the current processing practice. | No promise | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P4 |
| CT6 | How long does it take to get a Tax Residency Certificate? | It depends on the country and the authority, from a quick online issue to several weeks. Some issue it only after the tax year ends. Apply as soon as you know you need one, and tell us the Indian date you must meet so we can plan around it. Confirm the process with your country's authority. | Foreign rule | TREATY | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S4 |
| CT7 | How long do I have to reply to an income tax notice? | Each notice states its own response date, which can be short, so read it as soon as it arrives. If you are abroad, time zones reduce the real working window. Send us the notice at once, add us as authorised representative and ask for more time only if the portal allows it. Check the dates on the notice. | Dates on the notice | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P1 |
| CT8 | Can I get a quote before I decide? | Yes. Send your country, income types and tax year on WhatsApp, or book a 15-minute consultation. We reply with a written quote and the document list. There is no obligation to proceed. The word free for the consultation is checked with ICAI's advertising guidelines before it is used in any promotion. | ICAI-CHECK on free | Firm process | Firm scope / FIRM-FILL as stated | W12 | PX |
| CT9 | Is the first consultation free? | The firm offers a 15-minute consultation with a chartered accountant to understand your case. Whether it can be described as free in advertising depends on ICAI guidelines, so site copy says 15-minute consultation. WhatsApp and Google Business Profile use the word free only after the firm confirms it. | ICAI-CHECK | Firm process | Firm scope / FIRM-FILL as stated | W12 | PX |
| CT10 | Do I pay once or every year for NRI tax filing? | A return is filed for each tax year, so most NRIs with continuing Indian income file every year. Some one-off work, such as a notice reply, a refund clean-up or a return-year plan, is quoted separately. We agree the scope in writing, so you know what is included before work starts. | Scope in writing | Firm process | Firm scope / FIRM-FILL as stated | W12 | PX |
| CT11 | Can you file several past years in one go? | Often yes, subject to the rules on how late returns can be filed for each year, which carry interest, fees and some loss of benefits. Tell us the years and what was filed earlier. We check each year's status and open options first, then quote in writing for the whole set. | Late-return rules vary | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P3 |
| CT12 | How long should I plan for a return to India? | Start six to twelve months before you move if you can. That gives time to check your RNOR years, plan NRE and FCNR handling, list foreign assets and decide the timing of the move. Even last-minute cases can be mapped, but earlier planning leaves more choices. We map each year once you give your date. | Planning guidance, not a rule | Firm process | Firm scope / FIRM-FILL as stated | W9 | S2 |
| CT13 | When should I start my return before 31 July? | Start as soon as the tax year ends, and give yourself at least four weeks before the date. Treaty certificates, statements and verification methods take time to arrange from abroad. Starting early also leaves room to fix mismatches. The due date can change, so check the portal for the year. | Due date: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | T3 |
| CT14 | How long do you keep my documents? | The retention period is set by the firm's documented process and by professional and legal requirements, and the firm tells you at onboarding. It will state how documents are stored and when they are deleted. If you want documents returned or deleted earlier, ask in writing. This must be confirmed by the firm before publishing. | FIRM-FILL | Firm process | Firm scope / FIRM-FILL as stated | W12 | PX |
| CT15 | Do I earn interest on a delayed refund? | Interest on a delayed refund can be payable under the tax law in some situations, depending on the period and the cause of delay. The rate and conditions are set by the law and can change. Check the current rule, and look at the intimation order for any interest shown. | Rule: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P4 |

### 6.6 Risk and penalty answers (15)

| # | Question | Direct answer (40-80 words) | Supporting detail | Form / portal / authority | Source / verification | CTA | Best page |
|---|---|---|---|---|---|---|---|
| RP1 | What happens if an NRI does not file an Indian return? | If you owe tax, or want a refund or to carry forward a loss, not filing can mean interest, a late fee, a notice and a lost refund. If your tax is fully settled by TDS, the risk may be lower, but banks, buyers and treaty claims often still need a filed return. Check your case before skipping a year. | Penalty rules: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P3 |
| RP2 | What interest and late fee apply if I file late as an NRI? | Interest generally runs on unpaid tax from the due date, and a late filing fee can apply, with a lower fee for small incomes. Belated filing can also stop certain losses being carried forward. The amounts and conditions are set by the law and change, so check the current rule and the year concerned. | No amounts quoted | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P3 |
| RP3 | What is the risk of claiming NRI status when I am actually resident? | If your days make you resident, treating yourself as non-resident understates Indian tax on foreign income and misses foreign-asset reporting, and can lead to notices, interest and penalties. Check your days, citizenship and income with a CA before filing, and keep a travel record for the year and the four before. | Penalties: label | ITD, ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | P5 |
| RP4 | What is the risk of leaving NRE interest as exempt after I return? | Once you are resident, NRE interest is no longer exempt, so leaving it as exempt understates income and can lead to interest and notices. The bank may also change tax deduction. Redesignate the accounts promptly under FEMA and tell your CA the date you became resident so the year is split correctly. | FEMA: RBI | RBI, ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W9 | C5 |
| RP5 | What happens if a resident does not report foreign assets in Schedule FA? | A resident and ordinarily resident must report foreign assets and accounts. Omitting them can attract penalties and notices under separate laws on undisclosed foreign assets. Non-residents and RNOR taxpayers are not required to fill the schedule, so the risk begins in the first fully resident year. Prepare the list before you return. | Penalties: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W9 | S2 |
| RP6 | What are the consequences of an inoperative PAN for an NRI? | An inoperative PAN can mean tax deducted at a higher rate, refunds held back and difficulty filing or completing transactions. Whether linking with Aadhaar is required for non-residents depends on the current rule, so check it. Restore the PAN through the portal route and tell banks and tenants once it works. | Linking rule: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P2 |
| RP7 | What is the risk of ignoring an income tax notice abroad? | A notice carries a response date. Ignoring it can lead to an assessment on the department's view, a demand, interest and possible penalty, and some later options may close. Read it, send it to us promptly and respond within the window. Do not share your portal password with anyone. | Penalties: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P1 |
| RP8 | Is there a risk if my foreign salary is credited to an Indian account? | Yes. Salary for work done abroad is generally outside Indian tax for a non-resident, but if it is received in India it can be questioned as income received in India. Having salary paid into your foreign account first is the safer practice. Keep contracts and payslips and check your own facts with a CA. | UAE FAQ fix (L7) | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W2 | UAE |
| RP9 | What if I claim DTAA relief wrongly? | A wrong claim, such as one without a valid Tax Residency Certificate or under the wrong treaty article, can be disallowed, leading to tax, interest and possible penalty, and a mismatch with your overseas return. Claim only where the documents and the article support you, and keep copies. We check both before filing. | Penalties: label | ITD, TREATY | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | C3 |
| RP10 | What happens if I do not have a Tax Residency Certificate? | Without it you generally cannot claim treaty relief in India, so tax is deducted and assessed under the domestic rate. You may still file and claim any excess TDS. If the certificate is issued late, you can often claim relief by filing a return once you have it. Check the current conditions. | Conditions: label | ITD, TREATY | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S4 |
| RP11 | What FEMA risks arise from the wrong account type? | Using a savings account after becoming non-resident, or putting Indian income into an NRE account, can create FEMA questions on repatriation and account classification. Fixing it usually means redesignating the account and sometimes explaining past entries. FEMA matters are handled with the bank and a CA, and the RBI directions are the reference. | FEMA: RBI | RBI | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W1 | A5 |
| RP12 | Is it risky if family members sign or file for an NRI? | Yes, if they act without proper authority. The return is filed under your PAN and carries your declaration. Family can gather documents, but verification and some consents need you or a properly authorised representative. Wrong filing can create notices in your name. We explain what family may and may not do. | Authority route: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W10 | A4 |
| RP13 | What happens if I file the wrong ITR form? | A return filed on the wrong form can be treated as defective and the department may ask you to correct it within a time limit, after which it may be treated as invalid. Choose the form by your income types and status, not by habit. We confirm the form against the portal each year. | Defect rules: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | S1 |
| RP14 | What if I forget to e-verify my return? | A return that is not e-verified within the allowed time is generally treated as not filed, so refunds do not move and you may be treated as a non-filer. If you miss it, check whether the delay can be condoned or whether you must file again with the late-filing consequences. Check the current time limit. | Time limit: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P3 |
| RP15 | Do I risk double tax if I do not report Indian income in my country? | Possibly. If you do not report Indian income where you are tax resident, you may face penalties there, and you may not be able to claim credit for the Indian tax you paid. Your overseas adviser must advise on that, and we provide the Indian figures and evidence they ask for. | Foreign rule | FOREIGN, TREATY | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | C3 |

### 6.7 "Do I need this?" answers (15)

| # | Question | Direct answer (40-80 words) | Supporting detail | Form / portal / authority | Source / verification | CTA | Best page |
|---|---|---|---|---|---|---|---|
| N1 | Do I need to file if my Indian income is below the exemption limit? | Not always, but filing can still help. If tax was deducted and you want it back, you must file. If you want to carry forward a loss, show capital gains or support a treaty claim, a return is also needed. If nothing was deducted and nothing is claimed, filing may be optional. Check the year's limit. | Limit: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S1 |
| N2 | Do I need a CA for a simple NRI return? | Not necessarily. If you have one income type, a clear non-resident status and no treaty claim, a self-service filing may be enough. A CA helps when you have rent, gains, TDS to reconcile, treaty documents, a notice or a return planned. We tell you honestly which fits you after a short consultation. | Honest triage | ITD | Firm scope / FIRM-FILL as stated | W12 | C4 |
| N3 | Do I need to file if I only earn NRE interest? | If your only Indian income is exempt NRE or FCNR interest and you remain non-resident, there may be no Indian tax and filing may be optional. A return can still help for banks, visas or records. If you become resident, the position changes. Check your status and other income first. | Exemption: label | RBI, ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | C1 |
| N4 | Do I need a Tax Residency Certificate? | You need one only if you want to claim treaty relief in India, such as a lower rate on interest or dividends or exemption of an item. If you only claim excess TDS, you may not. Ask before you apply, because some countries issue it only for a specific period. We tell you whether the claim is worth the effort. | Foreign rule | TREATY | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S4 |
| N5 | Do I need a PAN if I live abroad? | If you have Indian income, TDS, a bank or investment account, or wish to file a return, you need a PAN. Without it, tax can be deducted at a higher rate and refunds cannot be claimed. Keep it active and check the current linking rule for non-residents before you rely on it. | Linking rule: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P2 |
| N6 | Do I need to file a return if TDS was already deducted? | Often yes if the TDS is above your real liability, because the refund is only claimed through a return. If TDS equals your tax, filing may be optional but still helpful for records. Banks and tax authorities abroad may later ask for the return, so many NRIs file every year anyway. | Exemption: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S3 |
| N7 | Do I need to file a return if I sold Indian shares? | Usually yes, because gains are taxable for a non-resident and the broker deducts tax at source, which you reconcile and, if too high, claim back. A return also records the gain for your overseas adviser. If the gain is within exemptions and no tax was deducted, check with a CA before skipping. | Rules: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | S7 |
| N8 | Do I need to file an Indian return if I live in the UAE? | If you have Indian income above the exemption limit, or TDS to recover, yes. The UAE having no personal income tax does not remove the Indian obligation. You should also check the deemed-residency rule if your Indian income is high. We confirm your status and what must be filed. | UAE page | ITD, ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W2 | UAE |
| N9 | Do I need to inform my bank when I become an NRI? | Yes. When your status under FEMA changes, you should tell your bank so that savings accounts are redesignated and the correct tax deduction and reporting apply. Delay can create FEMA questions. Share your visa, passport and overseas address as asked, and keep a copy of what you submitted. | FEMA: RBI | RBI | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W1 | A5 |
| N10 | Do I need to file Schedule FA as an NRI? | No. The portal's instructions say the schedule for foreign assets need not be filled by a non-resident or a resident but not ordinarily resident taxpayer. It applies from the first year you are resident and ordinarily resident. Check the instructions for your year and keep your foreign asset records ready. | Instruction: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W9 | S2 |
| N11 | Do I need an Indian CA if I already have a US CPA? | Often yes for the Indian side. A US CPA reports your worldwide income to the IRS but may not know Indian residency tests, TDS reconciliation or the Indian forms. We file the Indian return and give your CPA the Indian figures by calendar year so the two returns agree. We do not advise on US tax. | India side only | ITD | Firm scope / FIRM-FILL as stated | W4 | USA |
| N12 | Do I need to file a return if I only received a gift? | A gift is not always taxable, and the rules differ for gifts from relatives and others. Receiving a gift may not itself need a return, but income earned on the gifted money is taxable, and large remittances can need FEMA documentation. Check the gift and the relationship with a CA before assuming no filing. | Gift rules: label | ITD, RBI | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W10 | S8 |
| N13 | Do I need to file if my parents pay my Indian tax? | Paying tax does not replace filing. The return is your declaration, filed under your PAN, even if family pays or manages your accounts. Payments by family should be made through your PAN so credit is correct. We tell families what to prepare and what you must approve on a video call. | A4 | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W10 | A4 |
| N14 | Do I need to file for years when I was not in India? | Yes if you had Indian-source income above the limit or TDS to claim, even if you spent no days in India. Rent, NRO interest and gains are Indian income wherever you live. Years with no Indian income and no claim may need no return. Check each year, and list pending years for us. | Limit: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W11 | P3 |
| N15 | Do I need to file a return the year I return to India? | Yes if you meet the filing conditions, and the year of return needs a status check because you may be resident, often RNOR. Your Indian income, foreign income and account redesignation all depend on it. Tell us your arrival date so we can split the year and decide what is taxable. | RNOR rules: label | ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W9 | S2 |

### 6.8 Audience-specific answers (15)

| # | Question | Direct answer (40-80 words) | Supporting detail | Form / portal / authority | Source / verification | CTA | Best page |
|---|---|---|---|---|---|---|---|
| AU1 | Is my UAE salary taxable in India? | If you are a non-resident and the salary is for work done in the UAE and received outside India, it is generally not taxed in India. If it is credited directly to an Indian account, the position can be questioned, and a high Indian income can trigger the deemed-residency rule. Keep payslips and check your facts. | UAE page | ITD, ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W2 | UAE |
| AU2 | How do I prove Indian tax paid to HMRC? | Your UK accountant usually needs the filed Indian return and acknowledgement, Form 26AS and AIS extracts, TDS certificates and a summary of income and tax by Indian year. We prepare the pack and a note on the tax-year mismatch. HMRC decides what credit applies, so confirm with your UK adviser. | Foreign rule: HMRC | FOREIGN, ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W3 | UK |
| AU3 | What Indian records does my US CPA need for FBAR and Form 8938? | A US CPA commonly needs the highest balance of each Indian account in the calendar year, account numbers, opening dates and Indian income and tax by calendar year. We supply Indian figures and records. The CPA decides what must be reported and in which form, using IRS and FinCEN rules. | Foreign rule: IRS, FinCEN | FOREIGN | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W4 | USA |
| AU4 | Is my CPF taxable in India after I return from Singapore? | CPF is a Singapore scheme. Whether withdrawals are taxed in India after you return depends on your Indian status that year and on any treaty or relief position, so it needs a year-by-year check. During RNOR years foreign income earned and received abroad is generally outside Indian tax. Check before withdrawing. | Foreign and Indian rule | ITD, FOREIGN | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W5 | SG |
| AU5 | Do I report an Indian fixed deposit to the CRA? | Canadian tax residents generally report worldwide income, and large foreign property can attract extra reporting, so an Indian deposit may matter to your Canadian return. Your Canadian preparer decides. We provide the Indian interest, TDS and balances by calendar year. Check the reporting rules with the CRA. | Foreign rule: CRA | FOREIGN | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W6 | CA |
| AU6 | How are a seafarer's days counted for NRI status? | For crew on foreign-going ships a special rule applies, and days are counted using entries such as the Continuous Discharge Certificate, with the 182-day test generally being the one that matters. Shore leave and the dates of sign-on and sign-off decide the count. The rule is date-sensitive, so a CA should apply it to your years. | Rule: label | ITD, ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W7 | A1 |
| AU7 | How many days can an OCI cardholder stay in India without becoming resident? | It depends on your Indian income and your years. For a foreign citizen of Indian origin visiting India, the day-count is longer, with a lower limit if Indian income is above 15 lakh rupees. Staying near the limit can trigger residency. Keep five years of records and use the checker before you travel. | Day-count: label | ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W8 | A2 |
| AU8 | What should a student who moved abroad do about Indian tax? | Check your status for the year you left, since part-year days may keep you resident for that year, and for later years you are usually non-resident. Redesignate your savings account to NRO, keep Form 16 and TDS records, and file if tax was deducted that you want back. Your education loan may have its own rules. | A5 | ITD, RBI | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W1 | A5 |
| AU9 | What should a retiree returning to Chennai plan for? | Plan the RNOR years, the redesignation of NRE accounts, foreign pension taxation, and the list of foreign assets for later reporting. Foreign pensions and retirement accounts can be treated differently, and some treaties give relief. Tell us your arrival date, income sources and accounts, and we map each year. | Relief by notified country: label | ACT, RBI | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W9 | S2 |
| AU10 | Can the resident joint holder of my NRO account be taxed on my income? | Interest is generally taxed in the hands of the account's first holder or as the law attributes it, and the joint holder's own income is separate. Clubbing rules can apply to gifts between spouses. Decide who funds the account and why, and keep records. A CA should check the family structure before you file. | Clubbing rules: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W10 | A4 |
| AU11 | What should a Gulf worker who visits India often keep track of? | Keep a day-by-day record of time in India, because stays near the threshold decide residency, and the tests look back four years. Note your Indian income, because the longer-stay thresholds for Indian citizens depend on it. Share the travel record with us before the year ends so we can plan, not repair. | Thresholds: label | ITD, ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W2 | S6 |
| AU12 | What changes for an NRI engineer in the USA who receives Indian RSUs or holds Indian stocks? | Indian shares are taxed in India for a non-resident, and RSUs from a foreign employer are a separate topic when you return. For the US, your CPA decides reporting. We cover Indian stocks here, and the RSU and Schedule FA topic is explained on its own page. Tell us your holdings and country. | RSU post is link only | ITD, FOREIGN | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W4 | A3 |
| AU13 | What can my parents do for me in Chennai, and what only I can do? | They can collect documents, share account papers, receive rent and visit our office. Only you, or someone properly authorised on the portal, can verify the return, give treaty consents, or sign your declarations. Keep them informed so tax payments and TDS credits go through your PAN. | Authority route: label | ITD | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W10 | A4 |
| AU14 | How should an NRI in Germany or elsewhere in Europe handle Indian tax? | The Indian steps are the same: confirm status, report Indian-source income, reconcile TDS and consider the treaty for your country. Your local tax authority and adviser decide how Indian income is reported at home. We give them Indian figures and evidence. Ask us about time slots if your zone is far from IST. | Foreign rule | ITD, TREATY, FOREIGN | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | MP |
| AU15 | I own a business abroad but have Indian rent. What do I file in India? | A non-resident is taxed in India only on Indian-source income, so foreign business profits are generally outside Indian tax unless received in India or controlled from India. File for your rent and any Indian interest or gains. Your country taxes the business under its own rules, and we provide the Indian figures. | Control-from-India rule: label | ITD, ACT | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. | W12 | MP |

### 6.9 AI-engine visibility rules for the answer bank

| Rule | Action |
|---|---|
| Answer-first | First sentence answers the question in plain English; amounts only where the label is attached |
| Entity clarity | Name the Act and form only where verified or labelled (Income-tax Act, 2025; Form 26AS; TRC; Form 10F) |
| Local anchors | Chennai and Tamil Nadu specifics (Chennai flat, NRO account, Anna Nagar office, ICAI firm) in every answer that allows it |
| Attribution | Byline "Reviewed by CA Rushil C S" with date on each page; link LinkedIn |
| Freshness | "Last reviewed: <date>" visible; refresh rules in Section 12.7 |
| Foreign tax | Every foreign rule line ends with "Confirm with your local adviser" and names the authority |
| Track | 20 tracked NRI prompts (Section 12.1) checked every 2 weeks in ChatGPT, Perplexity, Gemini, Copilot and Google AI Overviews |
| Crawlers | Allow GPTBot, PerplexityBot, ClaudeBot, Google-Extended and Bingbot in `robots.ts` unless the firm decides otherwise |
| Placement | Each answer lives on exactly one "Best page"; other pages link to it, not copy it (avoids duplication) |

---


## 7. GEO / local AI visibility plan

Reality check: the buyer is usually abroad, but searches with Chennai words ("NRI CA Chennai", "CA in Chennai for NRI") and asks AI engines for a named firm. Local signals (GBP, Chennai content, NAP) therefore matter even though the client never walks in. Families in Chennai (Persona 6) do walk in.

### 7.1 Google Business Profile checklist

| # | Item | Action | Owner | Status |
|---|---|---|---|---|
| 1 | Hours | Replace "Open 24 hours" with Mon-Sat 9:30 AM-6:30 PM, Sunday closed (shared action 1) | FO | Do first |
| 2 | NAP | Name "C S Rushil & Co., Chartered Accountants"; address Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai 600040; phone +91 72001 49711; identical to the site footer and schema | FO | Check |
| 3 | Website link | Point to `/` (or `/nri-tax-services` only if the firm manages a separate listing for the service; one profile exists) | ML | Check |
| 4 | Categories | See 7.2 | ML | Set |
| 5 | Services | Add the 8 NRI services in 7.3 with descriptions and no prices | ML | Do |
| 6 | Description | 7.4, within 750 characters | ML | Do |
| 7 | Attributes | 7.5 | FO | Do |
| 8 | Photos and video | 7.6; only real, consented images | FO | Do |
| 9 | Posts | 3 per week (7.7) | ML | Weekly |
| 10 | Q&A | Seed 8 answers (7.8) | FO | Do |
| 11 | Reviews | Ask every client; never incentivise; never edit; reply to all (7.9, 7.10). The rating never appears on the site or in schema | FO | Ongoing |
| 12 | Messaging | Turn on the WhatsApp number as the contact; reply time set only when the firm confirms it (FIRM-FILL) | FO | Do |
| 13 | Appointment link | https://calendly.com/ceo-csrushil/30min | ML | Do |
| 14 | Service area | Add "India" and the countries served online only if GBP allows a service-area business without hiding the Anna Nagar address (visible address kept) | ML | Check policy |
| 15 | Monitoring | Weekly insights export: calls, direction requests, website clicks, messages | ML | Weekly |

### 7.2 Categories

| Type | Category (confirm exact names in the GBP picker) |
|---|---|
| Primary | Chartered accountant |
| Additional | Tax consultant |
| Additional | Accounting firm |
| Additional | Tax preparation service (if available for India) |
| Not used | Anything implying a law firm, CS firm or financial adviser |

### 7.3 GBP service list (NRI cluster) and descriptions (each 300 characters or fewer, no prices)

| Service | Description |
|---|---|
| NRI Income Tax Return Filing | Indian income tax return filing for non-resident Indians: rent, NRO interest, dividends and gains. Handled online with video calls by appointment. We advise on Indian tax only. |
| Residential Status and RNOR Review | We check your days in India and your status for the year, including RNOR and deemed residency, before any return is filed. Indicative checker on our website. |
| DTAA and Treaty Relief Support | Guidance on Tax Residency Certificate and Form 10F documents and on claiming relief under India's tax treaties, with Indian tax-paid evidence for your overseas adviser. |
| NRO and NRE Income Tax Guidance | How interest on NRO, NRE and FCNR accounts is treated for Indian tax, TDS reconciliation and refund claims. FEMA points are flagged for your bank. |
| Returning NRI Tax Planning | Plan your RNOR years, account redesignation and foreign assets before you return to India. Book a 15-minute consultation. |
| TDS Refund for NRIs | Reconcile TDS on NRO interest, rent and securities with Form 26AS and AIS and claim any excess through your return. |
| NRI Tax Notice Support | Triage and response support for income tax notices received while abroad, with authorised representative route confirmed on the portal. |
| Figures for Overseas Accountants | Indian income, tax-paid evidence and certificates in a pack for your UK, US, UAE, Singapore or Canadian accountant. |

### 7.4 Business description (750 characters or fewer; NRI-aware)

> C S Rushil & Co. is a Chartered Accountancy firm in Anna Nagar, Chennai, led by CA Rushil C S, a practising Chartered Accountant. We help individuals, businesses and non-resident Indians with income tax, GST, company and LLP compliance, accounting and FEMA touchpoints. NRI clients in the UAE, UK, USA, Singapore, Canada and elsewhere work with us online: we check residential status, file Indian returns, support treaty relief and coordinate with your local adviser. Visit the Anna Nagar office by appointment, Monday to Saturday, 9:30 AM to 6:30 PM. WhatsApp +91 72001 49711.

(Length is checked by script in 13.4.)

### 7.5 Attributes

| Attribute | Value | Note |
|---|---|---|
| Online appointments | Yes | Calendly link |
| Online service | Yes | For NRIs and clients outside Chennai |
| Languages | English, Tamil | Hindi: FIRM-FILL |
| Wheelchair access | FIRM-FILL | Only if true |
| Identifies as | Leave blank unless the owners choose | Not a marketing claim |

### 7.6 Photo and video plan (real and consented only)

| Asset | Content | Rule |
|---|---|---|
| Exterior | Building and signage in Anna Nagar | Real photo |
| Reception and consultation room | Where families sit | Real photo |
| Team | CA Rushil C S and team | Consent of each person |
| Video call setup | A CA on a video call (staged is fine if labelled by caption "example video call") | No client faces or screens |
| Short video, 30 s | "How an NRI return works with us" | Voice-over, no claims |
| Document checklist graphic | Visual of T2 | No client data |

### 7.7 Weekly GBP post calendar (3 posts per week, 13 weeks; all link to the stated page with UTM)

| Week | Post 1 | Post 2 | Post 3 |
|---|---|---|---|
| 1 | Hours fixed: "Mon-Sat 9:30-6:30 IST; WhatsApp from any time zone" | NRI Tax Filing in India page launch (MP) | Residency checker teaser (T1 when live; else MP) |
| 2 | "Not sure if you are an NRI for tax? Count your days" (S1) | UAE: deemed residency explained (S6) | Documents checklist (T2) |
| 3 | NRO FD interest TDS (S3) | UK evidence pack (UK) | Time-zone slots (FIRM-FILL) |
| 4 | Residency checker live (T1) | NRE vs NRO (C1) | USA: figures for your CPA (USA) |
| 5 | DTAA methods (C3) | Singapore page (SG) | TRC and Form 10F (S4) |
| 6 | Deadline calendar (T3) | Canada page (CA) | Notice abroad (P1) |
| 7 | Seafarers (A1) | Refund stuck (P4) | PAN inoperative (P2) |
| 8 | OCI (A2) | Returning NRI RNOR (S2) | Families in Chennai (A4) |
| 9 | NRI vs online platform (C4) | Rent from Chennai flat (S5) | First year abroad (A5) |
| 10 | Investors (A3) | Shares and MFs (S7) | Gifts and FEMA (S8) |
| 11 | Missed deadline (P3) | Wrong status (P5) | FAQ hub |
| 12 | Process explained (PX) | RNOR vs resident (C2) | Account choice on return (C5) |
| 13 | Year review: five questions NRIs asked | Seasonal reminder for the next filing season | Case-study invite (consent only) |

Post rules: no ratings, no superlatives, no fee figures, no "free" until the firm confirms; every date or rule shown carries "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." in the draft, removed only after sign-off.

### 7.8 GBP Q&A seeds (answer from the business account; factual)

| Question | Answer |
|---|---|
| Do you work with NRIs who live abroad? | Yes. We work with NRIs online by WhatsApp and booked video calls. We advise on Indian tax only. |
| Can I visit the office? | Yes, by appointment: Anna Nagar, Chennai, Monday to Saturday, 9:30 AM to 6:30 PM. |
| Do you file returns for NRIs in the UAE, UK, USA, Singapore and Canada? | Yes, the Indian return. Your home-country tax stays with your local adviser; we give them the Indian figures. |
| How do I send documents from abroad? | The firm confirms the secure upload method at onboarding. Please do not email passwords or OTPs. (FIRM-FILL) |
| Can my parents in Chennai meet you? | Yes. They can collect documents and visit the office; some steps need you or an authorised representative. |
| Do you handle notices received while abroad? | We triage and help respond. Detailed notice replies are described on our notice-reply page. |
| Do you quote fees on the website? | No. We send a written quote after a 15-minute consultation. |
| What time zone are you in? | India Standard Time. We confirm early-morning and late-evening slots for the UK, USA and Canada. (FIRM-FILL) |

### 7.9 Review-request WhatsApp message (sent after delivery; no incentive; under 500 characters)

> Hi [Name], thank you for working with us on your Indian return. If you found our service useful, you could share your experience on Google. It helps other NRIs find us. Review link: [GBP review link]. There is no obligation, and please do not include account numbers or personal details. If anything fell short, reply here and we will put it right.

### 7.10 Review-response templates (never reveal client details or confirm engagement specifics)

| Review type | Response |
|---|---|
| Positive | Thank you for your feedback. We are glad the process was clear. If you have any questions about next year's filing season, message us anytime. |
| Neutral | Thank you for your feedback. We would like to hear more about what could be better. Please message us on WhatsApp at +91 72001 49711. |
| Negative | We are sorry your experience did not meet your expectations. We cannot discuss client matters in public, but please contact us on +91 72001 49711 so we can look into it. (Escalate to CA Rushil C S within one working day.) |
| Time-zone complaint | Thank you for telling us. We are working on confirming call slots for different time zones. Please message us so we can arrange a time. (FIRM-FILL slots) |

### 7.11 NAP and citation checklist

| Check | Rule |
|---|---|
| Name | "C S Rushil & Co., Chartered Accountants" everywhere |
| Address | Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai 600040 |
| Phone | +91 72001 49711 |
| Email | admin@csrushil.com |
| Hours | Mon-Sat 9:30 AM-6:30 PM; Sunday closed |
| Website | https://www.csrushil.com |
| Schema | Same values in Organization/AccountingService JSON-LD |
| ICAI | Membership no. and FRN added when the firm supplies them (FIRM-FILL) |
| Audit | Quarterly NAP audit; log mismatches |

### 7.12 Directory strategy

| Directory | Purpose | Rule |
|---|---|---|
| ICAI member/firm directory | Authority | Only if the firm is listed; ICAI-CHECK content |
| Google Business Profile | Local pack | As above |
| Bing Places | Copilot reads Bing | Mirror GBP |
| Apple Business Connect | Maps | Mirror GBP |
| General business directories (Justdial, Sulekha and similar) | Citation | ICAI-CHECK content; no ratings copied to site; no paid-ranking claims |
| NRI community portals and Tamil association pages abroad | Referral | Only listings that the association itself invites; disclose affiliation |
| LinkedIn company page | E-E-A-T | Byline and posts |

### 7.13 Local link ideas

| Idea | Page linked | Note |
|---|---|---|
| Guest explainer for a Tamil diaspora newsletter on "India tax for NRIs in your country" | Country page | Expert quote, no promotion |
| Chennai alumni or CA study circle resource page | T1 or T2 | Free resource, ICAI-CHECK wording |
| Bank NRI-desk content partnership (educational only; no referral fees) | S3, C1 | ICAI-CHECK; no payment |
| Seafarer training institutes in Chennai/Thoothukudi (names: research first, FIRM-FILL) | A1 | Educational talk |
| Local resident welfare associations in Anna Nagar | A4 | Talk for families of NRIs |
| Expat and returnee community groups | S2, C5 | Disclose affiliation |

### 7.14 Chennai landing strategy

| Intent | Page | Local angle |
|---|---|---|
| NRI CA Chennai (service) | MP | Anna Nagar office, Chennai property and accounts, served online |
| Families in Chennai | A4 | Walk in, call, mandate, rent and NRO account |
| Anna Nagar and nearby areas | `/chartered-accountant-anna-nagar-chennai` (existing; owned by another plan): add one short NRI block linking to MP | No new Chennai-area NRI doorway pages |

### 7.15 Tamil Nadu city page strategy

No new city pages (see Section 3.1). The MP "Tamil Nadu coverage" block lists the cities served online. A1 carries Thoothukudi for seafarers. If Search Console shows sustained impressions for "nri ca <city>" over 90 days, add a FAQ section to MP, not a new URL; propose a city page only with a genuinely distinct local fact and written reason.

### 7.16 Local proof points (allowed; no ratings, counts or superlatives)

| Proof point | Source |
|---|---|
| CA-led firm; CA Rushil C S, practising Chartered Accountant (ICAI) | Fact sheet |
| ICAI Certificate in Forensic Accounting and Fraud Detection (FAFD); Start-up Mentor | Fact sheet |
| Team of 16; founded 2024; Anna Nagar office | Fact sheet |
| Office hours and address | Fact sheet |
| ICAI membership no. and FRN | FIRM-FILL |
| Documented process page (PX) | Own process |
| Consented case studies (CS) | Only with consent |

### 7.17 Local PR and associations

| Target | Idea | Rule |
|---|---|---|
| Tamil association newsletters in the UAE, UK, USA, Singapore and Canada (research names first) | "India tax checklist for NRIs" article | Expert quote |
| Chennai business press | "What NRIs get wrong about residency" | Quote with CA Rushil C S |
| ICAI Chennai branch events (check eligibility) | Talk on NRI taxation basics | ICAI-CHECK |
| Alumni networks of Chennai colleges abroad | Webinar on returning to India | Disclose affiliation |

### 7.18 30 local queries

| # | Query | Best page | Local angle | GBP action | Internal links | CTA | Review / proof signal |
|---|---|---|---|---|---|---|---|
| 1 | nri ca in chennai | MP | Anna Nagar office | Service "NRI Income Tax Return Filing" | A4, PX | W12 | Reviews mentioning NRI work (unprompted) |
| 2 | nri tax consultant chennai | MP | Served online | Category Tax consultant | T1 | W12 | ICAI no. on site |
| 3 | chartered accountant for nri chennai | MP | CA-led | Category | PX | W12 | Founder bio |
| 4 | nri ca near me | MP | Directions | Hours fixed | A4 | Call | Fresh reviews |
| 5 | nri tax consultant anna nagar | A4 | Walk-in | Post with office photo | MP | Call | Office photos |
| 6 | nri income tax filing chennai | MP | ITR, Chennai | Service | S1 | W12 | Doc checklist downloads |
| 7 | nri tax advisor tamil nadu | MP | State coverage | Description | A1 | W12 | Tamil FAQ |
| 8 | returning nri tax consultant chennai | MP | RNOR | Post (S2) | S2, C5 | W9 | Founder quote |
| 9 | ca for nri families chennai | A4 | Parents in Chennai | Post (A4) | S5 | W10 | Photos |
| 10 | nri rental income tax chennai | S5 | Chennai flat | Post (S5) | A4 | W10 | Case (consent) |
| 11 | tenant tds nri landlord chennai | S5 | Tenant questions | Q&A | MP | W10 | - |
| 12 | online ca for nri chennai | MP | Video call | Appointment link | PX | Book | Review mention of video call |
| 13 | ca for nri in chennai whatsapp | MP | WhatsApp-first | Messaging on | MP | W12 | Reply-time (FIRM-FILL) |
| 14 | nri tax services uae chennai ca | UAE | Chennai CA for UAE NRIs | Post (UAE) | MP | W2 | Doc checklist |
| 15 | nri tax services uk chennai ca | UK | Evidence pack | Post (UK) | MP | W3 | - |
| 16 | nri tax services usa chennai ca | USA | CPA figures | Post (USA) | MP | W4 | - |
| 17 | nri tax services singapore chennai ca | SG | Same-day slot | Post (SG) | MP | W5 | - |
| 18 | nri tax services canada chennai ca | CA | Early-morning IST slot | Post (CA) | MP | W6 | - |
| 19 | seafarer income tax chennai | A1 | Chennai and Thoothukudi crew | Post (A1) | T1 | W7 | - |
| 20 | oci card holder tax india chennai ca | A2 | Chennai CA | Post (A2) | T1 | W8 | - |
| 21 | nri nro fd tds refund chennai | S3 | Chennai CA | Q&A | MP | W12 | - |
| 22 | nri income tax notice chennai ca | P1 | Notice abroad | Post (P1) | A4 | W11 | - |
| 23 | pan inoperative nri chennai | P2 | Chennai CA | Post (P2) | MP | W11 | - |
| 24 | nri itr refund delayed chennai | P4 | Chennai CA | Post (P4) | MP | W11 | - |
| 25 | nri status checker india | T1 | Chennai CA tool | Post (T1) | MP | W12 | Tool completions |
| 26 | nri documents checklist india | T2 | Chennai CA tool | Post (T2) | MP | W12 | Downloads |
| 27 | nri tax deadline calendar | T3 | Dates with label | Post (T3) | MP | W12 | .ics downloads |
| 28 | nri in coimbatore tax filing | MP (TN block) | Served online | Description | A1 | W12 | - |
| 29 | nri in madurai tax consultant | MP (TN block) | Served online | Description | A4 | W12 | - |
| 30 | nri tax help for parents in chennai | A4 | Mandate and office visit | Post (A4) | S5, P1 | Call | Office photos |

---


## 8. Technical SEO and schema plan

### 8.1 Checklist

| # | Area | Check / rule | Applies to | Tool | Owner | Status |
|---|---|---|---|---|---|---|
| 1 | Canonical | Self-referencing canonical on every page; MP canonical `/nri-tax-services`; country pages never canonical to MP | All | View source, crawler | DEV | Check |
| 2 | Titles | 60 characters or fewer, unique, primary keyword first (titles in Section 4) | All | Crawl | CW | Update |
| 3 | Meta descriptions | 155 characters or fewer, unique, contain the next action | All | Crawl | CW | Update |
| 4 | Headings | One H1; H2s as questions where useful for AEO; logical H3 nesting | All | Crawl | CW | Check |
| 5 | Images | WebP/AVIF, width and height set, descriptive alt (5.15), lazy-load below the fold | All | Lighthouse | DEV | Check |
| 6 | Internal links | Anchors as in 5.14; every NEW URL linked from MP and at least 2 siblings; no orphan pages; LINK-ONLY targets linked but never retargeted | All | Link crawl | CW | Update |
| 7 | Mobile UX | Sticky WhatsApp and Call bar; tap targets 48px or larger; tables scroll in a container; country selector usable by thumb | All | 375px test | DEV | Check |
| 8 | Speed / CWV | LCP under 2.5 s, INP under 200 ms, CLS under 0.1 on mobile field data; tool JavaScript loaded only on tool routes; viewers abroad: serve from a CDN edge | All | PageSpeed Insights, CrUX | DEV | Monitor |
| 9 | Crawlability | Answers are server-rendered; tool pages render explanatory text without JavaScript | Tools | URL Inspection | DEV | Check |
| 10 | Indexation | Submit NEW URLs in the sitemap and URL Inspection; `/case-studies/nri-tax` noindex until written consent for a real engagement | New | GSC | ML | Do |
| 11 | Sitemap | Add the 29 NEW URLs to `src/app/sitemap.ts` with true `lastModified`; leave out the noindex case-study page until it is indexable | New | - | DEV | Do |
| 12 | Robots | Allow public pages; decide AI-crawler policy (6.9) | Site | `robots.ts` | DEV | Check |
| 13 | Redirects | No chains; no redirect created for the kept URLs | Site | Crawl | DEV | Check |
| 14 | Duplicates | Country pages share the structure but not the text; AEO answers live on one page each; FAQ hub links rather than copies | Cluster | Manual / crawler | CW | Check |
| 15 | URLs | Lowercase, hyphenated, no dates; tools `/tools/<name>`, FAQ `/faq/nri-tax`, case study `/case-studies/nri-tax` | New | - | DEV | Do |
| 16 | Breadcrumbs | Visible breadcrumb plus BreadcrumbList on every page (MP: Home > NRI Tax Services; country: Home > NRI Tax Services > country) | All | Rich Results Test | DEV | Check |
| 17 | FAQPage | Only for FAQs visible on that page; JSON text generated from the same array | MP, country, articles | Rich Results Test | DEV | Do |
| 18 | Service schema | MP, country pages, audience pages: provider = firm `@id`; no price | Service pages | Validator | DEV | Do |
| 19 | Organization / AccountingService | Site-wide; NAP identical to GBP; hours Mon-Sat 09:30-18:30; no aggregateRating or review | Site | Rich Results Test | DEV | Check |
| 20 | BlogPosting | headline, datePublished, dateModified, author (Person CA Rushil C S with sameAs LinkedIn), publisher, image | Blog | Validator | DEV | Check |
| 21 | WebApplication | Tools: name, applicationCategory BusinessApplication, no offers | Tools | Validator | DEV | Do |
| 22 | Review schema | Never on own services | Site | - | All | Rule |
| 23 | Hreflang | Not needed: one English version for all countries. Do not create country-subfolders. Tamil boxes sit inside English pages | Site | - | - | N/A |
| 24 | Analytics events | `whatsapp_click` (with `wa_code` W1-W12), `call_click`, `booking_click`, `form_submit`, `tool_complete` (with country, mode), `checklist_download`, `ics_download`; page path and CTA position on each | All | GA4 DebugView | DEV | Do |
| 25 | Country capture | Record country from the selector and from the +code of the WhatsApp number in the CRM, not in the URL | Funnel | CRM | FO | Do |
| 26 | Privacy | No personal data in URLs or query strings; the tool result hand-off to WhatsApp is user-initiated; cookie banner for analytics per site policy | Tools | Manual | DEV | Check |
| 27 | Search Console | Weekly query report for MP vs country pages to catch cannibalisation (same query, two URLs) | Cluster | GSC | ML | Weekly |
| 28 | Deploy stall | Confirm the deploy completes and live HTML matches source after each release (known Vercel stall) | Site | Verify script | DEV | Each deploy |

### 8.2 Schema by page type

| Page type | Schema | Notes |
|---|---|---|
| MP | Service, FAQPage (22), BreadcrumbList | Example in 5.13 |
| Country pages (5) | Service (areaServed = that country), FAQPage, BreadcrumbList | Do not claim an office abroad |
| Articles and comparisons | BlogPosting, FAQPage where FAQs are visible, BreadcrumbList | Author Person with LinkedIn |
| Audience pages | Service or WebPage, FAQPage, BreadcrumbList | |
| Problem posts | BlogPosting, FAQPage, BreadcrumbList | |
| Tools | WebApplication, BreadcrumbList | |
| FAQ hub | FAQPage | Only visible Q&As |
| Case-study page | Article, BreadcrumbList | noindex until consent |
| PX | WebPage, BreadcrumbList | |

### 8.3 Country-page technical notes

| Item | Rule |
|---|---|
| Boundary line | "We advise on the Indian side only" in visible text, near the hero and in FAQs |
| Foreign dates | Each date shows the exact label and the foreign authority's name |
| Time-zone block | Plain text table (no JavaScript clock) so it is crawlable; offsets change with daylight saving, so the table states "winter" and "summer" |
| Currency/figures | No tax amounts; only classification and documents |

### 8.4 Tool technical notes

| Tool | Notes |
|---|---|
| T1 | Pure client-side function; rule table kept in one JSON file reviewed by the CA; version and "last reviewed" date shown |
| T2 | Static data by country and income type; PDF generated client-side or pre-built |
| T3 | Static date data with source link per row; .ics generated client-side; every date row shows the label |

### 8.5 Rich Results Test and Search Console routine

Test every changed template; submit the sitemap after each batch; use URL Inspection on each NEW URL; track Coverage, Core Web Vitals and Queries; export weekly into the dashboard (12.1).

### 8.6 Verification register: claims on live pages and in this plan that need the label

Full list of the 20 live-page issues is in Section 1.2 (L1-L20). New claims introduced by this plan, each of which must carry "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." until a CA signs it off:

| # | Claim | Where used |
|---|---|---|
| V1 | 182-day test; 60-day plus 365-day test; exceptions for crew and people leaving for work | MP 5.7, FAQ 1, D1, T1, A1, A5 |
| V2 | Longer-stay test (120 days) and 15 lakh threshold for Indian-origin visitors | MP 5.7, A2, S6, T1 |
| V3 | Deemed-residency rule (Indian citizen, income above 15 lakh, not taxed elsewhere, RNOR) | S6, UAE, FAQ 8 |
| V4 | RNOR tests (9 of 10 years; 729 days in 7 years) | MP 5.7, S2, FAQ 9 |
| V5 | Section numbers under the Income-tax Act, 2025, including s.6(13) in the RNOR post | S2, C2 |
| V6 | Form 10F number and format under the 2025 Act; TRC requirement for treaty relief | S4, FAQ 7, T2 |
| V7 | NRE and FCNR interest exemption while non-resident; NRO taxability and TDS | C1, S3, FAQ 3-4 |
| V8 | FEMA points: NRE/NRO repatriation, account redesignation on return, savings to NRO on leaving, FCNR to maturity | C1, C5, A5, S8 |
| V9 | ITR-2 / ITR-3 for non-residents; ITR-1 not available | S1, FAQ 10 |
| V10 | Due dates: 31 July (non-audit), later audit date, belated 31 December, updated return window, revision window | S1, P3, T3, FAQ 11, 17 |
| V11 | E-verification methods and the time limit | S1, FAQ 12, DD6 |
| V12 | Refund to a pre-validated bank account; NRIs' account choice; interest on refund | P4, FAQ 17 |
| V13 | PAN inoperative and Aadhaar linking position for non-residents | P2, FAQ 5 |
| V14 | Tenant TDS on rent paid to an NRI; TAN and PAN requirement | S5 |
| V15 | Schedule FA not required for non-resident and RNOR | S2, FAQ 9 |
| V16 | Authorised representative route on the portal | A4, P1, FAQ 16, 18 |
| V17 | Gift rules for relatives and non-relatives | S8 |
| V18 | Seafarer day-count rule and CDC | A1 |
| V19 | Penalties, interest and late fee for non-filing, wrong status, undisclosed foreign assets | P3, RP bank |
| V20 | Old versus new regime default | S1, CO11 |
| V21 | Foreign rules: UAE FTA TRC, UK Self Assessment dates and non-dom changes, US FBAR/8938/Form 1116/PFIC, Singapore IRAS filing and CPF, Canada CRA dates and foreign property reporting | Country pages, DD8-DD12, AU |
| V22 | Treaty articles and rates by country; exemption versus credit method | C3, country pages |

ICAI-CHECK: the word "free"; directory listing text; case-study format; workshop and webinar wording.
FIRM-FILL: ICAI membership no. and FRN; secure upload method; data retention; early/late IST call slots; reply time; Hindi language; consented case data; local city facts.

---

## 9. Conversion system

### 9.1 Headlines (H1 and hero variants for A/B testing; no superlatives)

| # | Headline |
|---|---|
| H1 | NRI Tax Filing in India, Done Online by a Chennai CA Firm |
| H2 | Living Abroad with Indian Income? File Your Return Without Flying Home |
| H3 | Your Indian Return and the Figures Your Overseas Adviser Needs |
| H4 | Not Sure If You Are an NRI for Tax? Start with Your Days in India |
| H5 | NRI Tax Help from Chennai, by WhatsApp and Video Call |

### 9.2 Subheadlines

| # | Subheadline |
|---|---|
| S1 | We check your status, file your Indian return and claim treaty relief and TDS refunds. |
| S2 | CA-led, online, and we work around your time zone. We advise on Indian tax only. |
| S3 | Send your country and income types on WhatsApp. A chartered accountant replies in IST office hours. |
| S4 | From Dubai to Toronto: Indian rent, NRO interest and gains handled in one return. |
| S5 | Plan your return to India, your RNOR years and your accounts before you land. |

### 9.3 WhatsApp CTAs (button text)

| # | Text |
|---|---|
| 1 | WhatsApp Us |
| 2 | WhatsApp us your country and income |
| 3 | Send your documents list on WhatsApp |
| 4 | Ask a CA on WhatsApp |
| 5 | Message us from anywhere |

### 9.4 Consultation CTAs (ICAI-CHECK "free")

| # | Text |
|---|---|
| 1 | Book a 15-minute consultation |
| 2 | Pick a call time in your time zone |
| 3 | Book a video call with a CA |
| 4 | Talk to a CA about your Indian return |
| 5 | Book a short call before the filing season |

### 9.5 Trust bar (below hero; no ratings or counts beyond the fact sheet)

| Item | Text |
|---|---|
| 1 | CA-led: CA Rushil C S, practising Chartered Accountant (ICAI) |
| 2 | ICAI membership no. and FRN (FIRM-FILL) |
| 3 | Team of 16 · Office in Anna Nagar, Chennai |
| 4 | Online for NRIs in any time zone |
| 5 | Indian tax only, coordinated with your local adviser |

### 9.6 Objection blocks

| Objection | Response (no fee figures, no guarantees) |
|---|---|
| Is this expensive? | We do not publish a price list. Fees depend on income types, years, treaty claims and notices, and we send a written quote after a 15-minute consultation. Many returns are quick to quote once we know your country and income. |
| Can I do it myself? | A simple case with one income type and a clear status can be self-filed. Treaty claims, mixed income, TDS to reconcile, notices and returns to India are where a CA helps. We say honestly which one you are. |
| How long will it take? | It depends on how fast your documents arrive and the portal. We make no turnaround promise. The slowest steps are usually a missing Tax Residency Certificate and finding a call time across time zones. |
| Will my data be safe? | The firm confirms the secure upload method at onboarding and tells you how long documents are kept (FIRM-FILL). Never email passwords or OTPs. |
| Why not a cheaper consultant? | The cheapest option may not apply residency tests, TDS reconciliation or treaty documents that your overseas adviser needs. We explain what is in scope and quote in writing so you can compare like for like. |
| What if my case is complicated? | Start with a 15-minute consultation: we tell you what is in scope, link to notice, property and repatriation specialists on our site and say what we cannot advise on, such as foreign tax. |
| I am in a different time zone | Use WhatsApp at any hour and book a call slot in your zone; the firm confirms early-morning and late-evening IST slots (FIRM-FILL). |
| Can my parents handle it for me? | They can collect documents and visit our office, but the return is yours and some steps need you or an authorised representative. |

### 9.7 WhatsApp pre-filled messages (sent by the visitor; each under 500 characters, one qualifying question, no guarantees)

Link format `https://wa.me/917200149711?text=<url-encoded message>`.

| Code | Use | Message |
|---|---|---|
| W1 | First year abroad (A5, Persona 10) | Hi, I left India on ____ for a job in ____. My Indian employer deducted TDS for part of the year. Can you check my residential status for the year and file my Indian return? |
| W2 | UAE (Persona 1) | Hi, I live in Dubai and have rent from a Chennai flat and NRO FD interest. Tax year: ____. Days in India last year: ____. Can a CA check my status and file my Indian return? |
| W3 | UK (Persona 2) | Hi, I live in the UK. My UK accountant needs evidence of Indian tax paid on my mutual funds and NRO interest for tax year ____. Can you file my Indian return and prepare the evidence pack? |
| W4 | USA (Persona 3) | Hi, I live in the USA. My CPA needs my Indian tax figures by calendar year and my Indian account balances. Indian income: ____. Can you file my Indian return and share the figures? |
| W5 | Singapore (Persona 4) | Hi, I live in Singapore and plan to move back to Chennai around ____. I have Indian shares and NRO deposits. Can a CA plan my RNOR years and my Indian returns? |
| W6 | Canada (Persona 5) | Hi, I live in Canada. I have NRO fixed deposits and a plot in Tamil Nadu. My Canadian preparer needs Indian income and tax figures. Can you file my Indian return? |
| W7 | Seafarer (A1, Persona 7) | Hi, I am a seafarer on foreign-going ships. Days in India this tax year: ____. Salary is credited to my NRE account. Can you check my residential status and file my return? |
| W8 | OCI (A2, Persona 9) | Hi, I am a foreign citizen with an OCI card. I spend about ____ days a year in India and have Indian rent/deposits. Can you check my Indian tax residency and file my return? |
| W9 | Returning (S2, C5, Persona 8) | Hi, I returned to Chennai from ____ in (month/year) after ____ years abroad. I have foreign savings and NRE deposits. Can a CA confirm my RNOR years and what I must do? |
| W10 | Families (A4, Persona 6) | Hi, we are parents in Chennai. Our son/daughter lives in ____ and we look after their flat and NRO account. We need help with their Indian tax return/notice. Can we meet at your Anna Nagar office? |
| W11 | Notice / urgent / deadline (P1-P5) | Hi, I live in ____ and received an Indian income tax notice / missed the due date / my refund is stuck (delete as needed). Tax year: ____. Response date on the notice: ____. Can you tell me what I should send first? |
| W12 | General NRI filing (MP, articles, tools, investors) | Hi, I live in ____ and have Indian income from ____ (rent / NRO interest / shares / other). Tax year: ____. Can a CA tell me what I need to file and send a written quote? |

### 9.8 Lead magnets

| Magnet | Format | Page | Capture |
|---|---|---|---|
| Residential status checker (T1) | Tool | T1, MP | Optional WhatsApp hand-off with answers |
| DTAA document checklist (T2) | Tool and PDF | T2, S4, country pages | Download event; WhatsApp optional |
| NRI tax deadline calendar (T3) | Tool and .ics | T3, country pages | .ics download |
| Family document list (A4) | PDF | A4 | WhatsApp |
| Notice triage checklist (P1) | PDF | P1 | WhatsApp |
| Returnee year-by-year planner (S2) | Table PDF | S2, C5 | WhatsApp |

### 9.9 Form fields (contact and booking form)

| Field | Type | Required |
|---|---|---|
| Name | Text | Yes |
| WhatsApp number with country code | Phone | Yes |
| Email | Email | Yes |
| Country of residence | Select (UAE, UK, USA, Singapore, Canada, Other) | Yes |
| Service | Select (Filing, Residency check, DTAA relief, Refund, Notice, Return to India, Other) | Yes |
| Urgency | Select (This week, This month, Planning) | Yes |
| Tax year | Text | Optional |
| Indian income types | Multi-select | Optional |
| Notice type and response date | Text | Optional |
| Preferred call time and time zone | Text | Optional |
| Planned return date | Date | Optional |
| Consent line | "I agree to be contacted on WhatsApp and email about this enquiry" | Yes |

### 9.10 Follow-up sequence (sent by the firm; each under 500 characters, one qualifying question, clear next step, no guarantees)

| Step | Timing | Message |
|---|---|---|
| Instant auto-reply | On enquiry | Thank you for contacting C S Rushil & Co. We are in IST and reply Monday to Saturday, 9:30 AM to 6:30 PM. In the meantime, which country do you live in and which Indian income do you have? |
| Qualifying reply | Same working day | Hi [Name], I am a chartered accountant at C S Rushil & Co. To guide you, could you tell me your days in India this tax year and which Indian income types you have? I will then suggest the next step. |
| Consultation invite | After qualifying | Thanks. A 15-minute call would help us confirm your status and documents. Here is our booking link: https://calendly.com/ceo-csrushil/30min. Which time slot suits your time zone? |
| 24-hour | +1 day | Hi [Name], following up on your Indian tax query. Would you like us to send the document checklist for your country? Reply YES and we will share it. |
| 3-day | +3 days | Hi [Name], the Indian due date is approaching for many NRIs (please check the current date). Would a short call this week help? Booking link: https://calendly.com/ceo-csrushil/30min |
| 7-day | +7 days | Hi [Name], just checking whether you still need help with your Indian return. If your situation changed, tell us what is new, and we will tell you what we can and cannot do. |
| 30-day re-engagement | +30 days | Hi [Name], a quick note from C S Rushil & Co. If you have Indian income, our NRI residency checker and document checklist are on our website. Should we send the link for your country? |

### 9.11 Overseas-number and time-zone handling

| Rule | Detail |
|---|---|
| Country capture | The +code on the WhatsApp number (+971, +44, +1, +65, +91) sets the country tag and the matching W message in the CRM |
| Reply SLA | State only the office hours until the firm sets a real reply time (FIRM-FILL) |
| Async first | The first useful answer is a written reply, not a call request |
| Call slots | Offer slots as "your time" and "IST" together; early-morning and late-evening IST slots only after the firm confirms them |
| Sunday | Closed; messages are answered next working day |
| Language | English; Tamil on request |
| Document exchange | Only the method the firm confirms at onboarding; never passwords or OTPs |

---

## 10. 90-day calendar (13 weeks, BOFU first)

Week 1 starts Monday 3 Nov 2026. Owners: **ML** marketing lead, **CW** content writer, **CA** CA reviewer (sign-off in `seo/CA-SIGNOFF.md`), **DEV** developer, **FO** front office. Every published item passes the Section 13 checklist. "Expected enquiry impact" values are planning assumptions (qualified enquiries per week once indexed, usually 2-6 weeks after publishing); replace them with measured data from week 5. Country timing: UK and USA pages go live in weeks 2-3 to be ready for the January to April filing seasons, and the Indian due-date push runs from June.

Per-week load (brief requirement): 1 money-page upgrade, 2 supporting articles, 1 comparison page, 1 location/audience page, 3 FAQ/AEO answers, 3 GBP posts, 1 lead-magnet improvement, 1 proof asset. Because only five comparison pages and ten location/audience pages exist, later weeks use refresh work in those slots; the calendar says "Refresh" so nothing is padded as new content.

### Week 1 (3-9 Nov): fix the foundations

| Item | Title | Keyword | URL | Type | Intent | CTA | Internal links | Distribution | Owner | Success metric | Expected impact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Money page | New title, meta, H1, hero outcome, trust line, CTAs, labels on key facts | nri tax filing india | MP | Upgrade | BOFU | W12 | UAE, UK, USA, T1 | LinkedIn, GBP | ML/DEV/CA | WhatsApp CTR on MP at least 4% | +2/wk |
| Article 1 | How to file ITR as an NRI (upgrade from about 450 words) | how to file itr as nri | S1 | Upgrade | MOFU | W12 | MP, T1, T2 | LinkedIn | CW/CA | Indexed; impressions | +1/wk |
| Article 2 | NRO FD interest: TDS and refund | nro fd tds refund nri | S3 | NEW | BOFU | W12 | MP, C1, S4 | WhatsApp Status | CW/CA | Clicks | +1/wk |
| Comparison | CA vs online platform vs overseas accountant | nri ca vs online itr filing | C4 | NEW | BOFU | W12 | MP, PX | LinkedIn | CW/CA | Top-20 position | +1/wk |
| Location/audience | UAE page upgrade (label, salary FAQ fix, time-zone block) | nri tax services uae | UAE | Upgrade | BOFU | W2 | MP, S6, T2 | GBP, Gulf groups | CW/CA | UAE-number enquiries | +1/wk |
| AEO x3 | CT1, CT8, DD1 | cost, quote, documents | MP, PX, T2 | Answers | BOFU | W12 | - | - | CW/CA | Appears in AI checks | - |
| GBP x3 | Week 1 posts (7.7) and hours fix | - | GBP | Posts | Local | W12 | MP | GBP | FO/ML | GBP calls | +1/wk |
| Lead magnet | DTAA document checklist (PDF v1) | nri tax return documents required | T2 | Build | MOFU | W12 | MP, S4 | WA broadcast | CW/DEV | 50 downloads/month | - |
| Proof asset | ICAI membership no. and FRN on MP, footer and About (FIRM-FILL) | - | Site-wide | Trust | - | - | - | - | ML/CA | Live on site | Conversion lift |

### Week 2 (10-16 Nov): refunds, notices and the residency tool

| Item | Title | Keyword | URL | Type | Intent | CTA | Internal links | Distribution | Owner | Success metric | Expected impact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Money page | Residency table (5.7) and 22 FAQs live | nri residential status | MP | Upgrade | BOFU | W12 | T1, C2 | LinkedIn | CW/DEV/CA | Scroll depth over 50% | +1/wk |
| Article 1 | NRI refund delayed or stuck | nri itr refund not received | P4 | NEW | BOFU | W11 | MP, S3, P2 | WA Status | CW/CA | Clicks | +1/wk |
| Article 2 | Income tax notice received abroad | nri income tax notice received | P1 | NEW | BOFU | W11 | MP, A4 | LinkedIn | CW/CA | Clicks; W11 clicks | +1/wk |
| Comparison | NRE vs NRO account | nre vs nro account tax | C1 | NEW | MOFU | W12 | MP, S3, C5 | LinkedIn carousel | CW/CA | Top-20 | +1/wk |
| Location/audience | UK page upgrade (evidence pack, tax-year table) | nri tax services uk | UK | Upgrade | BOFU | W3 | MP, T2, C3 | GBP, LinkedIn | CW/CA | UK-number enquiries | +1/wk |
| AEO x3 | D3, PRO6, N6 | NRO TDS, refund, TDS filed | S3, P4 | Answers | BOFU | W11 | - | - | CW/CA | - | - |
| GBP x3 | Week 2 posts | - | GBP | Posts | Local | W12 | S1, S6, T2 | GBP | FO | Website clicks | - |
| Lead magnet | Residency checker v1 build (rule table signed off by CA) | nri residential status checker | T1 | Build | MOFU | W12 | MP, C2 | - | DEV/CA | Staging pass | - |
| Proof asset | Real office photos (exterior, reception) on MP and GBP | - | MP, GBP | Trust | Local | - | - | GBP | FO | Photos live | - |

### Week 3 (17-23 Nov): documents and treaty

| Item | Title | Keyword | URL | Type | Intent | CTA | Internal links | Distribution | Owner | Success metric | Expected impact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Money page | Documents tables and process table (5.5, 5.8) | nri tax return documents required | MP | Upgrade | BOFU | W12 | T2, S4 | LinkedIn | CW/CA | WhatsApp CTR | +1/wk |
| Article 1 | Tax Residency Certificate and Form 10F | tax residency certificate form 10f nri | S4 | NEW | MOFU | W12 | MP, T2, C3 | LinkedIn | CW/CA | Indexed | +1/wk |
| Article 2 | PAN inoperative for an NRI | pan inoperative nri | P2 | NEW | BOFU | W11 | MP, S3, P4 | WA Status | CW/CA | W11 clicks | +1/wk |
| Comparison | DTAA exemption vs credit | dtaa exemption vs credit | C3 | NEW | MOFU | W12 | MP, S4 | LinkedIn | CW/CA | Top-20 | +1/wk |
| Location/audience | USA page upgrade (CPA table, calendar-year table) | nri tax services usa | USA | Upgrade | BOFU | W4 | MP, T2, A3 | LinkedIn, US groups | CW/CA | US-number enquiries | +1/wk |
| AEO x3 | D4, D5, PRO4 | TRC, Form 10F | S4 | Answers | MOFU | W12 | - | - | CW/CA | - | - |
| GBP x3 | Week 3 posts | - | GBP | Posts | Local | W12 | S3, UK | GBP | FO | - | - |
| Lead magnet | DTAA checklist interactive (T2 live) | nri dtaa document checklist | T2 | Live | MOFU | W12 | MP | LinkedIn | DEV | 100 completions/month | +2/wk |
| Proof asset | Confirm early-morning and late-evening IST call slots; publish on MP (FIRM-FILL) | - | MP | Trust | - | - | - | - | FO/ML | Slots live | Conversion lift |

### Week 4 (24-30 Nov): Singapore and the residency tool live

| Item | Title | Keyword | URL | Type | Intent | CTA | Internal links | Distribution | Owner | Success metric | Expected impact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Money page | Who it is for, what is included, problems solved (5.3, 5.4, 5.9) | nri ca in chennai | MP | Upgrade | BOFU | W12 | A1-A5, P1-P5 | LinkedIn | CW/CA | Scroll depth | +1/wk |
| Article 1 | Deemed resident 15 lakh rule | deemed resident 15 lakh rule | S6 | NEW | MOFU | W2 | MP, UAE, T1 | Gulf groups | CW/CA | Indexed | +1/wk |
| Article 2 | Missed the ITR deadline as an NRI | missed itr deadline nri | P3 | NEW | BOFU | W11 | MP, S1, T3 | LinkedIn | CW/CA | W11 clicks | +1/wk |
| Comparison | NRI vs resident vs RNOR | nri vs rnor vs resident | C2 | NEW | MOFU | W12 | MP, T1, S2 | LinkedIn | CW/CA | Top-20 | +1/wk |
| Location/audience | Singapore page (NEW) | nri tax services singapore | SG | NEW | BOFU | W5 | MP, S2, S7 | LinkedIn, Singapore groups | CW/CA | SG-number enquiries | +1/wk |
| AEO x3 | D11, CO14, RP3 | deemed residency | S6 | Answers | MOFU | W2 | - | - | CW/CA | - | - |
| GBP x3 | Week 4 posts | - | GBP | Posts | Local | W12 | T1, C1, USA | GBP | FO | - | - |
| Lead magnet | Residency checker live (T1) | nri residential status checker | T1 | Live | MOFU | W12 | MP, C2 | LinkedIn, Reels | DEV/ML | 100 completions/month | +2/wk |
| Proof asset | Founder bio and credentials block (FAFD, Start-up Mentor) on MP | - | MP | Trust | - | - | - | - | ML | Live | Conversion lift |

### Week 5 (1-7 Dec): Canada and returnees

| Item | Title | Keyword | URL | Type | Intent | CTA | Internal links | Distribution | Owner | Success metric | Expected impact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Money page | Comparison block and location coverage (5.6, 5.10) | nri tax consultant chennai | MP | Upgrade | BOFU | W12 | C4, countries | LinkedIn | CW/DEV | Clicks to country pages | +1/wk |
| Article 1 | RNOR status upgrade (labels, year table) | what is rnor status | S2 | Upgrade | MOFU | W9 | MP, T1, C5 | LinkedIn | CW/CA | Position | +1/wk |
| Article 2 | NRI filed ITR as resident by mistake | filed itr as resident by mistake nri | P5 | NEW | BOFU | W11 | MP, T1, C2 | WA Status | CW/CA | W11 clicks | +1/wk |
| Comparison | FCNR vs NRE vs RFC for returnees | nre account after returning to india | C5 | NEW | MOFU | W9 | MP, S2, C1 | LinkedIn | CW/CA | Top-20 | +1/wk |
| Location/audience | Canada page (NEW) | nri tax services canada | CA | NEW | BOFU | W6 | MP, S3, C3 | LinkedIn, Canada groups | CW/CA | CA-number enquiries | +1/wk |
| AEO x3 | D2, CO6, N15 | RNOR | S2 | Answers | MOFU | W9 | - | - | CW/CA | - | - |
| GBP x3 | Week 5 posts | - | GBP | Posts | Local | W9 | C3, SG, S4 | GBP | FO | - | - |
| Lead magnet | Deadline calendar build (T3) | nri itr due date | T3 | Build | MOFU | W12 | MP, P3 | - | DEV/CA | Staging pass | - |
| Proof asset | Process page draft (PX) with scope table | nri itr filing process | PX | Draft | MOFU | W12 | MP | - | CW/ML | Draft ready | - |

### Week 6 (8-14 Dec): rent, securities and the calendar

| Item | Title | Keyword | URL | Type | Intent | CTA | Internal links | Distribution | Owner | Success metric | Expected impact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Money page | Schema (Service, FAQPage, Breadcrumb) and image alts (5.13, 5.15) | nri tax filing india | MP | Upgrade | BOFU | W12 | - | - | DEV | Rich Results Test pass | +1/wk |
| Article 1 | NRI rental income from a Chennai flat | nri rental income tax chennai | S5 | NEW | BOFU | W10 | MP, A4, S3 | WA Status, Chennai groups | CW/CA | Clicks | +1/wk |
| Article 2 | NRI shares and mutual funds tax | nri capital gains mutual funds india | S7 | NEW | MOFU | W12 | MP, USA, A3 | LinkedIn | CW/CA | Indexed | +1/wk |
| Comparison | Comparison refresh: add five country boxes to C3 | dtaa relief for nris | C3 | Refresh | MOFU | W12 | countries | LinkedIn | CW | Time on page | - |
| Location/audience | Families in Chennai page | nri tax consultant anna nagar | A4 | NEW | BOFU | W10 | MP, S5, P1 | GBP, RWA talk | CW/CA | Calls from A4 | +1/wk |
| AEO x3 | D16, D17, DD13 | rent, family | S5, A4 | Answers | BOFU | W10 | - | - | CW/CA | - | - |
| GBP x3 | Week 6 posts | - | GBP | Posts | Local | W12 | T3, CA, P1 | GBP | FO | - | - |
| Lead magnet | Deadline calendar live (T3) with .ics | nri itr due date | T3 | Live | MOFU | W12 | MP, countries | LinkedIn | DEV | 100 downloads/month | +1/wk |
| Proof asset | Publish PX after firm confirms secure upload method (FIRM-FILL) | nri itr filing process | PX | NEW | MOFU | W12 | MP | LinkedIn | ML/CA | Live | Conversion lift |

### Week 7 (15-21 Dec): seafarers and gifts

| Item | Title | Keyword | URL | Type | Intent | CTA | Internal links | Distribution | Owner | Success metric | Expected impact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Money page | Final CTA block and form fields (5.12, 9.9) | nri tax services chennai | MP | Upgrade | BOFU | W12 | - | - | DEV | Form submissions | +1/wk |
| Article 1 | Gifts and inheritance for NRIs | gifts from nri tax india | S8 | NEW | MOFU | W10 | MP, A4 | LinkedIn | CW/CA | Indexed | +1/wk |
| Article 2 | Second pass on S1: add FAQs and screenshots | how to file itr as nri | S1 | Refresh | MOFU | W12 | MP, T1 | LinkedIn | CW | CTR | - |
| Comparison | Comparison refresh: add case-type table to C4 | nri ca vs online itr filing | C4 | Refresh | BOFU | W12 | MP, PX | LinkedIn | CW | W12 clicks | - |
| Location/audience | Seafarers page | nri status for seafarers | A1 | NEW | MOFU | W7 | T1, MP | WA Status, training institutes | CW/CA | W7 clicks | +1/wk |
| AEO x3 | AU6, DD15, N14 | seafarer | A1 | Answers | MOFU | W7 | - | - | CW/CA | - | - |
| GBP x3 | Week 7 posts | - | GBP | Posts | Local | W7 | A1, P4, P2 | GBP | FO | - | - |
| Lead magnet | Seafarer mode in T1 | nri status for seafarers | T1 | Improve | MOFU | W7 | A1 | - | DEV/CA | Mode completions | +1/wk |
| Proof asset | Request consent for the first anonymised engagement (CS) | - | CS | Template | - | - | - | - | ML | Consent log | - |

### Week 8 (22-28 Dec): OCI and tool conversion

| Item | Title | Keyword | URL | Type | Intent | CTA | Internal links | Distribution | Owner | Success metric | Expected impact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Money page | Tamil summary box and Tamil keywords | என்ஆர்ஐ வருமான வரி தாக்கல் | MP | Upgrade | BOFU | W12 | - | WA Status | CW | Tamil sessions | +1/wk |
| Article 1 | Second pass on S3: add worked TDS example (no figures without label) | nro fd tds refund nri | S3 | Refresh | BOFU | W12 | MP, S4 | LinkedIn | CW/CA | CTR | - |
| Article 2 | Second pass on S6: add three cases | deemed resident 15 lakh rule | S6 | Refresh | MOFU | W2 | UAE | Gulf groups | CW | Time on page | - |
| Comparison | Comparison refresh: add FEMA verify notes to C1 | nre vs nro account tax | C1 | Refresh | MOFU | W12 | S3 | - | CW/CA | - | - |
| Location/audience | OCI cardholders page | oci income tax india | A2 | NEW | MOFU | W8 | T1, C2 | LinkedIn, OCI groups | CW/CA | W8 clicks | +1/wk |
| AEO x3 | D27, AU7, CO12 | OCI | A2 | Answers | MOFU | W8 | - | - | CW/CA | - | - |
| GBP x3 | Week 8 posts | - | GBP | Posts | Local | W8 | S2, A4 | GBP | FO | - | - |
| Lead magnet | Family document list PDF | nri tax help for parents in chennai | A4 | Build | BOFU | W10 | S5 | WA broadcast | CW | Downloads | +1/wk |
| Proof asset | First consented case draft (if consent) or process video script | - | CS, PX | Proof | - | - | MP | YouTube | ML/CA | Draft | - |

### Week 9 (29 Dec-4 Jan): first year abroad and the filing season

| Item | Title | Keyword | URL | Type | Intent | CTA | Internal links | Distribution | Owner | Success metric | Expected impact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Money page | Internal-link pass (5.14) after new pages are live | nri tax filing india | MP | Upgrade | BOFU | W12 | all | - | CW | Clicks to NEW pages | +1/wk |
| Article 1 | Second pass on S4: add country TRC table | tax residency certificate form 10f nri | S4 | Refresh | MOFU | W12 | countries | LinkedIn | CW/CA | CTR | - |
| Article 2 | Second pass on P1: add triage checklist PDF | nri income tax notice received | P1 | Refresh | BOFU | W11 | MP | LinkedIn | CW | Downloads | +1/wk |
| Comparison | Comparison refresh: add RNOR column to C2 | nri vs rnor vs resident | C2 | Refresh | MOFU | W9 | S2 | - | CW | - | - |
| Location/audience | First year abroad page | nri status in year of leaving india | A5 | NEW | MOFU | W1 | T1, C1 | LinkedIn, student groups | CW/CA | W1 clicks | +1/wk |
| AEO x3 | PRO10, N9, RP11 | savings to NRO, FEMA | A5 | Answers | MOFU | W1 | - | - | CW/CA | - | - |
| GBP x3 | Week 9 posts | - | GBP | Posts | Local | W12 | C4, S5, A5 | GBP | FO | - | - |
| Lead magnet | OCI mode in T1 | oci income tax india | T1 | Improve | MOFU | W8 | A2 | - | DEV/CA | Mode completions | +1/wk |
| Proof asset | Review-request flow live (7.9) | - | GBP | Trust | Local | - | - | WhatsApp | FO | Reviews requested | - |

### Week 10 (5-11 Jan): investors and US/Canada season

| Item | Title | Keyword | URL | Type | Intent | CTA | Internal links | Distribution | Owner | Success metric | Expected impact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Money page | Speed and CWV pass on MP | nri tax filing india | MP | Upgrade | BOFU | W12 | - | - | DEV | LCP under 2.5 s | - |
| Article 1 | Second pass on S7: US/UK reporting remarks | nri capital gains mutual funds india | S7 | Refresh | MOFU | W12 | USA, UK | LinkedIn | CW/CA | CTR | - |
| Article 2 | Second pass on S5: parents collecting rent | nri rental income tax chennai | S5 | Refresh | BOFU | W10 | A4 | WA Status | CW | W10 clicks | +1/wk |
| Comparison | Comparison refresh: add table of FEMA verify notes to C5 | fcnr vs nre vs rfc | C5 | Refresh | MOFU | W9 | S2 | - | CW/CA | - | - |
| Location/audience | NRI investors page | nri investors tax india shares | A3 | NEW | MOFU | W12 | S7, USA | LinkedIn | CW/CA | Indexed | +1/wk |
| AEO x3 | D18, D19, CT15 | investments | A3, S7 | Answers | MOFU | W12 | - | - | CW/CA | - | - |
| GBP x3 | Week 10 posts | - | GBP | Posts | Local | W12 | A3, S7, S8 | GBP | FO | - | - |
| Lead magnet | Returnee mode in T1 and planner PDF | returning nri tax consultant | T1 | Improve | MOFU | W9 | S2, C5 | LinkedIn | DEV/CA | Mode completions | +1/wk |
| Proof asset | Anonymised case (only with written consent) | - | CS | Proof | - | - | MP | LinkedIn | ML/CA | Consent held | - |

### Week 11 (12-18 Jan): FAQ hub and data review

| Item | Title | Keyword | URL | Type | Intent | CTA | Internal links | Distribution | Owner | Success metric | Expected impact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Money page | Position and CTR review; rewrite title if CTR is low | nri tax filing india | MP | Upgrade | BOFU | W12 | - | - | ML | CTR above benchmark of week 1 | +1/wk |
| Article 1 | FAQ hub (30 answers from 6.1) | nri tax faq | FAQ | NEW | TOFU | W12 | MP | LinkedIn | CW/CA | Indexed | +1/wk |
| Article 2 | Refresh P2 and P4 with new portal screens | pan inoperative nri | P2, P4 | Refresh | BOFU | W11 | MP | - | CW | - | - |
| Comparison | Comparison refresh from GSC queries | nri ca vs online itr filing | C4 | Refresh | BOFU | W12 | MP | - | CW | - | - |
| Location/audience | Country-page refresh from GSC queries (UAE, UK) | nri tax services uae | UAE, UK | Refresh | BOFU | W2 | MP | - | CW/CA | - | +1/wk |
| AEO x3 | CO9, N2, N11 | CA vs platform | C4, MP | Answers | BOFU | W12 | - | - | CW/CA | - | - |
| GBP x3 | Week 11 posts | - | GBP | Posts | Local | W11 | P3, P5, FAQ | GBP | FO | - | - |
| Lead magnet | Notice triage checklist | nri income tax notice received | P1 | Build | BOFU | W11 | MP | - | CW | Downloads | +1/wk |
| Proof asset | Review reply log and review count check (internal only) | - | GBP | Trust | Local | - | - | - | FO | All reviews answered | - |

### Week 12 (19-25 Jan): process and pre-season push

| Item | Title | Keyword | URL | Type | Intent | CTA | Internal links | Distribution | Owner | Success metric | Expected impact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Money page | Add live tool results to hero (completions, no counts claimed publicly) | nri tax filing india | MP | Upgrade | BOFU | W12 | T1 | - | DEV | - | - |
| Article 1 | Process explainer promotion and FAQs (PX) | nri itr filing process | PX | Refresh | MOFU | W12 | MP | LinkedIn | CW | Clicks | +1/wk |
| Article 2 | Refresh S2 for the next return season | returning nri tax | S2 | Refresh | MOFU | W9 | MP | LinkedIn | CW/CA | - | - |
| Comparison | Comparison refresh: add last-reviewed dates to all five | nri vs rnor vs resident | C1-C5 | Refresh | MOFU | W12 | MP | - | CW/CA | - | - |
| Location/audience | Country-page refresh from GSC queries (USA, SG, CA) | nri tax services usa | USA, SG, CA | Refresh | BOFU | W4 | MP | - | CW/CA | - | +1/wk |
| AEO x3 | CT4, CT5, DD3 | timeline, due date | MP, T3 | Answers | BOFU | W12 | - | - | CW/CA | - | - |
| GBP x3 | Week 12 posts | - | GBP | Posts | Local | W12 | PX, C2, C5 | GBP | FO | - | - |
| Lead magnet | Refund checklist | nri itr refund not received | P4 | Build | BOFU | W11 | MP | - | CW | Downloads | +1/wk |
| Proof asset | Photo and short video of the Anna Nagar office | - | GBP, MP | Trust | Local | - | - | GBP | FO | Live | - |

### Week 13 (26 Jan-1 Feb): review and plan the next 90 days

| Item | Title | Keyword | URL | Type | Intent | CTA | Internal links | Distribution | Owner | Success metric | Expected impact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Money page | 90-day review: keep, rewrite or merge by data | nri tax filing india | MP | Upgrade | BOFU | W12 | - | - | ML | Qualified enquiries per day | - |
| Article 1 | Content refresh list built from GSC (low CTR, high impressions) | - | Cluster | Refresh | - | - | - | - | ML/CW | List signed off | - |
| Article 2 | Verify register clean-up: remove the label only where the CA signed off | - | Cluster | Refresh | - | - | - | - | CA | Sign-offs logged | - |
| Comparison | Decide on Australia or Malaysia page from data (4.4) | - | - | Decision | - | - | - | - | ML | Decision recorded | - |
| Location/audience | Decide on any Tamil Nadu city FAQ expansion on MP (7.15) | - | MP | Decision | - | - | - | - | ML | Decision recorded | - |
| AEO x3 | RP1, RP7, N1 | penalties, notices | P1, P3 | Answers | BOFU | W11 | - | - | CW/CA | - | - |
| GBP x3 | Week 13 posts | - | GBP | Posts | Local | W12 | FAQ, MP | GBP | FO | - | - |
| Lead magnet | T1/T2/T3 funnel review: drop-off by step | - | T1-T3 | Review | - | - | - | - | DEV/ML | Fix list | - |
| Proof asset | Quarterly report to the firm: enquiries, proposals, clients by country | - | - | Report | - | - | - | - | ML | Report delivered | - |

---

## 11. Distribution and authority plan

Rules: every post links to the page with UTM (`?utm_source=<channel>&utm_medium=social|email|wa&utm_campaign=nri-tax`); no ratings, superlatives, fee figures or client names; WhatsApp broadcasts go only to opted-in contacts; forum answers disclose affiliation; every rule shown carries the label until signed off; "free" is ICAI-CHECK. Diaspora timing: post at the audience's evening (UAE 6-9 PM, UK 7-9 PM, Singapore 7-9 PM, US/Canada evening = next IST morning).

### 11.1 Money page (`/nri-tax-services`): all 10 channels

| Channel | Hook | Message | CTA | Audience | Link destination |
|---|---|---|---|---|---|
| LinkedIn (CA Rushil C S and company page) | "Your passport does not decide your Indian tax. Your days do." | Carousel of the residency tests (label on slide) | Try the residency checker | NRIs in the Gulf, UK, USA | T1 then MP |
| Instagram / WhatsApp Status | "NRI with a Chennai flat? Read this before 31 July." | One slide: rent, NRO interest, TDS, return (label) | WhatsApp Us | Tamil diaspora, families | wa.me W12 |
| GBP post | "NRI tax filing, handled online from Anna Nagar" | Service summary and hours | Book a consultation | Map searchers | MP |
| YouTube Short / Reel | "3 mistakes NRIs make with NRO interest" | 30-second talking head | Link in description | NRIs | S3 then MP |
| Email (opted-in clients) | "Know a relative abroad with Indian income?" | Short note with the checklist link | Forward the checklist | Clients | T2 |
| WhatsApp broadcast (opted-in) | "New: NRI document checklist by country" | 2 lines and link | Reply YES for the PDF | Past enquiries | T2 |
| Community / forum (Tamil association groups, NRI forums, Quora) | Answer real questions on residency and NRO TDS | Direct answer first; link only where it adds value; disclose affiliation | Full guide here | Researchers | S1, S3, C1 |
| Local partnership (Chennai families, RWA talks, seafarer institutes) | "Looking after an NRI relative's tax?" | Talk plus A4 link | Book a session | Families | A4 |
| Digital PR | "What NRIs get wrong about residency" | Explainer pitch to diaspora and Chennai press | Quote from CA | General readers | S6, C2 |
| Guest post / expert quote | "India tax checklist for NRIs in <country>" | 800-word guest article | Bio link | Diaspora newsletters | Country page |

### 11.2 Tools (T1, T2, T3)

| Channel | T1 residency checker | T2 DTAA checklist | T3 deadline calendar |
|---|---|---|---|
| LinkedIn | "Answer 5 questions, see your indicative status" | "Documents for treaty relief, by country" | "India and your country's dates side by side" |
| Instagram / WA Status | Quiz teaser | Checklist graphic | Calendar graphic |
| GBP post | Week 4 | Week 2 | Week 6 |
| YouTube Short / Reel | Screen recording of the checker | "What your Indian CA needs from your tax office" | "Two filing seasons, one calendar" |
| Email | "Before you file, check your status" | Checklist link | .ics link |
| WA broadcast | Tool link | PDF | Calendar link |
| Forum | Reply to "am I NRI" threads | Reply to "documents for DTAA" | Reply to "due date" threads |
| Local partnership | Association resource page | Association resource page | Association resource page |
| Digital PR | "Free" is ICAI-CHECK: describe as "a tool" | Same | Same |
| Guest post | Embed or link | Link | Link |
| CTA for all | Use the tool, then WhatsApp the result | Same | Same |
| Link | T1 | T2 | T3 |

### 11.3 Country pages (UAE, UK, USA, SG, CA)

| Page | LinkedIn hook | Reel / Short hook | GBP post | WA broadcast line | Community and PR angle | Link |
|---|---|---|---|---|---|---|
| UAE | "No UAE income tax does not mean no Indian tax" | "Deemed residency in 30 seconds" | Week 2 | "Dubai NRIs: your Indian checklist" | Gulf Tamil associations; Gulf news | UAE |
| UK | "What your UK accountant needs from India" | "Indian tax evidence for HMRC credit" | Week 3 | "UK NRIs: evidence pack" | UK Tamil associations; NHS doctor groups | UK |
| USA | "Indian figures by calendar year for your CPA" | "FBAR and your Indian accounts: what the CPA asks" | Week 4 | "US NRIs: records list" | US Tamil associations; tech groups | USA |
| Singapore | "Moving back from Singapore: plan your RNOR years" | "CPF and India tax after return" | Week 5 | "Singapore NRIs: returnee planner" | Singapore Tamil associations | SG |
| Canada | "Indian FDs and your Canadian return" | "NRO interest, TDS and your preparer" | Week 6 | "Canada NRIs: records list" | Canada Tamil associations | CA |

### 11.4 Every other new or upgraded page (compact matrix)

| Page | LinkedIn hook | Reel / Short hook | GBP post | WA broadcast line | Forum / partner / PR angle | Link |
|---|---|---|---|---|---|---|
| S1 How to file ITR as NRI | "Six steps to file from abroad" | "ITR for NRIs in 60 seconds" | Week 2 | "Guide: file your Indian return" | NRI forum answers | S1 |
| S2 RNOR | "Returning? Your first years are special" | "RNOR explained" | Week 8 | "Returning to India? Read this" | Returnee groups | S2 |
| S3 NRO TDS | "Bank deducted TDS on your NRO FD?" | "NRO TDS refund" | Week 3 | - | Forum answers | S3 |
| S4 TRC and Form 10F | "The certificate you need for treaty relief" | "TRC in 30 seconds" | Week 5 | - | Tax-office guidance posts | S4 |
| S5 Rent | "Renting your Chennai flat from abroad" | "Tenant TDS and you" | Week 9 | "Landlord NRIs" | RWA talks | S5 |
| S6 Deemed resident | "The 15 lakh rule, explained" | "Gulf NRIs: deemed residency" | Week 2 | - | Gulf groups | S6 |
| S7 Shares and MFs | "NRI mutual funds: TDS and reporting" | "Redemption and TDS" | Week 10 | - | Investor groups | S7 |
| S8 Gifts | "Sending money to parents: tax and FEMA" | "Gift or income?" | Week 10 | - | Family groups | S8 |
| C1-C5 | "NRE vs NRO" and four more comparisons | Table reels | Weeks 4, 5, 9, 12 | - | Forum answers | C1-C5 |
| A1-A5 | Audience posts | Audience reels | Weeks 7-10 | Audience broadcasts | Seafarer institutes; OCI groups; student groups | A1-A5 |
| P1-P5 | "Notice abroad? Do these 3 things first" | "Refund stuck?" | Weeks 6-11 | W11 line | Forum answers (high value) | P1-P5 |
| PX | "How our NRI engagement works" | Process video | Week 12 | - | - | PX |
| FAQ | "30 NRI tax questions answered" | Question series | Week 11 | - | Forum answers | FAQ |

---


## 12. Measurement and KPI dashboard

### 12.1 Weekly dashboard template (one row per week; copy into a sheet)

| Metric | Source | Cut by | Week 1 baseline | Target day 90 |
|---|---|---|---|---|
| Impressions | Search Console | Page, query, country | Fill | Rising |
| Clicks | Search Console | Page, query, country | Fill | Rising |
| Average position | Search Console | MP head terms, country pages | Fill | MP top 10 for "NRI CA Chennai" |
| AI citations | Manual prompt check (below) | Engine, prompt | Fill | At least 5 of 20 prompts |
| WhatsApp clicks | GA4 `whatsapp_click` | `wa_code` W1-W12, page | Fill | 6% of cluster sessions (planning assumption) |
| Calls | GBP and call tracking | Source | Fill | - |
| Forms | GA4 `form_submit` | Country, service | Fill | - |
| Bookings | Calendly | Time-zone slot used | Fill | - |
| Tool completions | GA4 `tool_complete` | T1/T2/T3, mode | Fill | 500/month, 25% go on to WhatsApp |
| Qualified enquiries | CRM score 6+ (12.4) | Country, page | Fill | 10/day (7-day average) |
| Proposals | CRM | Country | Fill | 150/month at full scale |
| Clients | CRM | Country | Fill | 45-60/month (NRI share) |
| Revenue per service | Firm accounts (not published) | Service | Fill | Review monthly |
| Cost per enquiry | Spend (if any) / qualified enquiries | Channel | Fill | Falling |
| Conversion by page | GA4 | Page | Fill | MP, country 6-10%; articles 2-4% |
| Top converting keywords | GSC plus CRM tags | Query | Fill | Update monthly |
| High-impression, low-click pages | GSC | Page | Fill | Fix title/meta (12.5) |
| High-click, low-enquiry pages | GA4 plus CRM | Page | Fill | Fix CTA/form (12.5) |
| Share of enquiries from overseas numbers | CRM +code | +971, +44, +1, +65, +91 | Fill | At least 60% |

Tracked AI prompts (20; run every 2 weeks in ChatGPT, Perplexity, Gemini, Copilot and Google AI Overviews; log whether csrushil.com is cited and whether the answer is accurate):

| # | Prompt |
|---|---|
| 1 | Do NRIs have to file an income tax return in India? |
| 2 | How many days can an NRI stay in India without becoming resident? |
| 3 | Is NRO interest taxable in India and how do I claim TDS back? |
| 4 | Is NRE interest taxable in India? |
| 5 | What is RNOR status and how long does it last? |
| 6 | What is the deemed residency rule for NRIs with Indian income above 15 lakh? |
| 7 | Do I need a Tax Residency Certificate and Form 10F to claim DTAA relief? |
| 8 | Which ITR form should an NRI file? |
| 9 | How do I file an Indian income tax return from the UAE? |
| 10 | How do I claim Indian tax paid in the UK on my self assessment? |
| 11 | What Indian records does my US CPA need for FBAR? |
| 12 | Do I report my Indian fixed deposit to the CRA in Canada? |
| 13 | Is CPF taxable in India after I return from Singapore? |
| 14 | How are a seafarer's days counted for NRI status? |
| 15 | How many days can an OCI cardholder stay in India without becoming resident? |
| 16 | Can my parents file income tax for me while I live abroad? |
| 17 | Which CA in Chennai can file my NRI tax return online? |
| 18 | What should I do if I get an income tax notice while abroad? |
| 19 | My PAN is inoperative and I live abroad: what happens? |
| 20 | What happens to my NRE account when I return to India? |

### 12.2 Funnel and source tracking

| Stage | Event | Tag |
|---|---|---|
| Visit | Session on a cluster page | Page group (MP, country, article, tool) |
| Intent | CTA click | `wa_code`, CTA position |
| Contact | Message, call, form, booking | Country, service, urgency |
| Qualified | Score 6 or more | 12.4 |
| Proposal | Written quote sent | Service, years |
| Client | Engagement letter | Revenue per service |

### 12.3 Monthly review checklist

| # | Check |
|---|---|
| 1 | Cannibalisation report: any query where MP and a country page both appear |
| 2 | Pages with impressions but no clicks: rewrite title and meta |
| 3 | Pages with clicks but no enquiries: review CTA, form and the first screen |
| 4 | Tool drop-off by step; fix the worst step |
| 5 | AI citation log: new citations, errors, missing prompts |
| 6 | GBP insights: calls, direction requests, messages, review replies |
| 7 | Verify register: items signed off by the CA are logged; labels removed only for those |
| 8 | Seasonal calendar: next filing season in India, UK, USA, Canada, Singapore |
| 9 | Time-zone slots: are the early-morning and late-evening slots filled or unused |
| 10 | New questions from WhatsApp that need an AEO answer |

### 12.4 Enquiry-quality scoring (0-10, scored by the front office within one working day)

| Criterion | Points |
|---|---|
| Real need (a specific Indian tax item, not "just asking") | 0-2 |
| Country of residence given | 0-1 |
| Indian income types given | 0-1 |
| Tax year or deadline or notice date given | 0-2 |
| Reachable (WhatsApp or booked call) | 0-1 |
| Likely to buy in 0-90 days (seasonal urgency, notice, return plan) | 0-2 |
| Scope fits our service (Indian side, not foreign tax or property sale) | 0-1 |

Score 6 or more is a qualified enquiry. Under 6: send the qualifying reply (9.10) and rescore. Out of scope (foreign tax advice, property sale, notice appeals): route to the linked page or specialist plan and mark "referred".

### 12.5 Page-level optimisation rules

| Signal | Rule |
|---|---|
| Impressions over 200 in 28 days and CTR under 2% | Rewrite title and meta; test question-style title |
| Clicks but WhatsApp CTR under 2% on a BOFU page | Move the CTA above the first table; swap the W message to the country one |
| Tool completions but few WhatsApp hand-offs | Show the WhatsApp button on the result card; shorten the form |
| Position 11-20 for a P1 keyword | Add FAQ, a table and 2 internal links |
| Two URLs alternate for a query | Fold the weaker section into the owner and consider a 301 after sign-off |
| High bounce on mobile | Check table scroll, sticky CTA, and speed |
| Enquiries from out-of-scope topics | Add a clearer scope box and a link-only card |

### 12.6 A/B roadmap

| Order | Test | Page | Success measure |
|---|---|---|---|
| 1 | Headline H1 vs H2 (9.1) | MP | WhatsApp CTR |
| 2 | Country selector above the fold vs below | MP | W2-W6 clicks |
| 3 | "WhatsApp Us" vs "WhatsApp us your country and income" | MP, country | CTR |
| 4 | Consultation CTA wording (9.4) | MP | Bookings |
| 5 | Residency checker result card with and without WhatsApp hand-off | T1 | Hand-off rate |
| 6 | Objection block position | MP | Scroll and CTR |
| 7 | Form length (5 fields vs 8) | MP, country | Submissions and score |
| 8 | Time-zone strip text | Country | Bookings in the right slot |

### 12.7 Refresh and escalation rules

| Rule | Detail |
|---|---|
| Refresh trigger | Any change to the Income-tax Act, 2025, forms, due dates, FEMA directions or treaty text: refresh the affected pages within 5 working days |
| Seasonal refresh | Review all dates and labels in April (before the Indian season) and in November (before UK/US/Canada seasons) |
| Last reviewed | Visible date on every page; update only after a real review |
| Sign-off log | `seo/CA-SIGNOFF.md` lists every claim in 8.6 and its sign-off date |

| Situation | Escalate to | Within |
|---|---|---|
| Urgent WhatsApp (notice or deadline in 7 days) | CA on duty | Same working day |
| Negative review | ML and CA Rushil C S | 1 working day |
| Factual error reported on site | CA reviewer | Fix within 2 working days |
| Drop over 30% in cluster clicks week on week | ML then DEV | 2 working days |
| Deploy not reflected live | DEV | Same day |
| Possible ICAI-sensitive copy | CA Rushil C S | Before publishing |
| A rule changed and the page is now wrong | CA reviewer, then CW | Same day take-down of the line |

---

## 13. Quality-control checklist

### 13.1 The checklist (apply to every page, post, answer and message)

| # | Check | Pass condition |
|---|---|---|
| 1 | Enquiry intent | Targets a query or moment that can produce a qualified enquiry within 0-90 days, or directly supports one |
| 2 | No duplication | Primary keyword owned by this URL only (Section 1.5 and 3.12); no near-duplicate text |
| 3 | WhatsApp CTA | Visible WhatsApp CTA with the right W message (W1-W12) |
| 4 | Chennai / TN relevance | At least one Chennai or Tamil Nadu fact (Anna Nagar office, Chennai property, Tamil Nadu coverage) or the served-online statement |
| 5 | Forms, documents, deadlines | Named only if in the fact sheet or labelled "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." |
| 6 | No unverifiable claims | No invented fees, client counts, outcomes, reviews, ratings, superlatives, guarantees, circular numbers or competitor names |
| 7 | Internal links | Links up to MP and across to 2-4 siblings; LINK-ONLY targets linked, not retargeted |
| 8 | AI-engine visibility | Answer first, entity names, source link, byline and last-reviewed date |
| 9 | Measurable KPI | A named metric in 12.1 |
| 10 | Executable in 90 days | Scheduled in Section 10 with an owner |
| 11 | ICAI | No fee figures, "free" checked, no testimonials-as-advertising, ICAI no. and FRN shown |
| 12 | Schema | JSON-LD only for visible content; validated |
| 13 | Foreign tax | No advice on foreign tax; foreign rules labelled and name the foreign authority |
| 14 | Time zones | Call-window and WhatsApp-first path present on pages aimed at people abroad |

### 13.2 Application matrix

| Asset group | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Money page | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| Country pages | Y | Y (no text swap) | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| Supporting articles | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | n/a |
| Comparisons | Y | Y | Y | Y | Y | Y (no competitor names) | Y | Y | Y | Y | Y | Y | Y | n/a |
| Audience pages | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| Problem pages | Y | Y | Y (W11) | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| Tools | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y (no fee) | Y | Y | Y |
| FAQ hub, PX, case study | Y | Y | Y | Y | Y | Y (case: consent only) | Y | Y | Y | Y | Y | Y | Y | n/a |
| AEO bank (135) | Y | Y (one page each) | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | n/a |
| GBP plan | Y | n/a | Y | Y | Y | Y (no rating on site) | Y | Y | Y | Y | Y | n/a | Y | Y |
| WhatsApp messages | Y | n/a | Y | Y | Y | Y (no guarantees) | n/a | n/a | Y | Y | Y | n/a | Y | Y |

### 13.3 Cross-plan consistency

| Item | Rule |
|---|---|
| Plan 24 (ITR filing) | Treats NRI terms as plan 27's; links to `/nri-tax-services`. This plan links to `/income-tax-return-filing-chennai` only for resident filing questions |
| Plan 25 (notices) | P1 is NRI triage; replies stay on `/income-tax-notice-reply-chennai` |
| Property and 15CA/15CB plans | Linked, never retargeted |
| HNI plan | Linked for large portfolios only |
| Company-registration plans | `/company-registration-india-for-foreigners` and `/blog/nri-director-private-limited-company` linked, not planned here |
| Route patterns | Tools `/tools/<name>`; FAQ `/faq/nri-tax`; case study `/case-studies/nri-tax` noindex until written consent |
| Circulars and dates | No circular numbers or dates beyond the fact sheet and live pages; everything else carries the label |

### 13.4 Script check results

| Check | Requirement | Result |
|---|---|---|
| Sections 1-14 present in order | 14 sections | PASS [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] |
| Personas | 8 or more | PASS 10 |
| Keywords A-J | 100 in 10 categories of 10 | PASS 100 rows, categories ABCDEFGHIJ |
| Titles <=60 and metas <=155 (stated count equals real count) | all | PASS 68 checked, bad [] |
| 35-page architecture | 35 distinct pages | PASS 35 |
| MP title/meta in 5.1 | <=60 / <=155 | PASS 48/150 |
| MP FAQs | 20+ at 40-80 words | PASS 22 FAQs, words 49-69 |
| AEO bank | 30 + 7 x 15 = 135, each 40-80 words | PASS [30, 15, 15, 15, 15, 15, 15, 15] total 135, words 46-66 |
| Local queries | 30 | PASS 30 |
| GBP description | <=750 characters | PASS 577 |
| GBP service descriptions | 8, each <=300 characters | PASS 8, max 176 |
| WhatsApp messages | W1-W12, follow-ups, persona and review messages all <500 characters | PASS 30 messages, longest 348 |
| Calendar | 13 weeks x 9 items | PASS 13 weeks |
| Exact verify label | present, exact | PASS 168 occurrences |
| No fee figures or banned words in copy tables | no 'best', 'No.1', rupee fee figures | PASS scan done |

---

## 14. First 10 actions this week (3-9 Nov 2026)

| # | Action | Owner | Time | Done when |
|---|---|---|---|---|
| 1 | Fix GBP hours from "Open 24 hours" to Mon-Sat 9:30 AM-6:30 PM, Sunday closed; check NAP matches the site exactly (shared action 1) | FO | 15 min | GBP shows correct hours |
| 2 | Add ICAI membership no. and FRN to the MP trust line, footer and About (FIRM-FILL) | ML/DEV | 1 h | Live on site |
| 3 | Run a live SERP check and pull Search Console data for the 20 head terms (nri tax filing india, nri ca chennai, the five country terms) and record week-1 positions; no rank targets are quoted until this is done | ML | 2 h | Baseline row in the dashboard |
| 4 | Update MP title, meta, OG and H1 (5.1); add the label to key facts; fix FAQ L1-L4; re-check the portal citation link (L20) | DEV/CA | 2 h | Deployed and verified live |
| 5 | Add hero outcome line, trust line, WhatsApp Us (W12 with country selector), booking, tap-to-call and sticky mobile bar | DEV | 3 h | WhatsApp CTR tracked in GA4 |
| 6 | CA review of the 20 live-page issues in 1.2 (UAE salary FAQ first); add the label to anything not confirmed | CA | 2 h | `seo/CA-SIGNOFF.md` updated |
| 7 | Upgrade `/blog/nri-itr-filing` (S1) and publish S3 (NRO FD interest TDS) | CW/CA | 6 h | Both live and submitted in GSC |
| 8 | Ask the firm to confirm: secure upload method, early/late IST call slots, reply time, ICAI "free" position (FIRM-FILL) | ML | 30 min | Answers recorded |
| 9 | Build the DTAA document checklist PDF and the CA-signed rule table for the residency checker | CW/DEV/CA | 4 h | PDF live; rule table signed |
| 10 | Set up the weekly dashboard, GA4 events (`wa_code`, `tool_complete`), the enquiry scoring sheet and the first 20-prompt AI baseline | ML | 3 h | Baseline row filled |
