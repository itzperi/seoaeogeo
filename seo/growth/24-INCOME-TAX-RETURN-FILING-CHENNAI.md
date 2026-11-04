# Growth System Plan 24: Income Tax Return Filing in Chennai

**Firm:** C S Rushil & Co., Chartered Accountants (ICAI) · https://www.csrushil.com · Anna Nagar, Chennai 600040
**Service:** Income Tax Return Filing (service 24): ITR filing for salaried people, professionals, freelancers, small businesses and general capital-gains cases
**Money page:** `/income-tax-return-filing-chennai` (URL kept; source `src/app/income-tax-return-filing-chennai/page.tsx`)
**Prepared:** 3 Nov 2026 · **Reader:** founder / marketing lead who implements directly
**Inputs read in full:** `seo/growth/_AGENT-INSTRUCTIONS.md`; `_BRIEF.md`; `_FACT-SHEET-company-registration.md` (Firm, ICAI rules); `_FACT-SHEET-tax-gst-dsc-nri.md`; `src/app/income-tax-return-filing-chennai/page.tsx`; `src/components/ServicePageTemplate.tsx`, `PageHero.tsx`, `GoogleProfileStrip.tsx`, `FAQSection.tsx` (skimmed); the three owned blog posts `old-vs-new-tax-regime`, `advance-tax-deadlines`, `safe-cash-deposit-limit`; the head of `27-NRI-TAX-SERVICES.md` for conventions.

### Conventions used throughout this file

| Marker | Meaning |
|---|---|
| **[V]** | The item carries the exact label: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." It is attached to every due date, late fee, threshold, slab, rebate, section or form number (1961 Act or 2025 Act), penalty and interest rate that is not a plain fact in the fact sheet. It is never shortened in site copy or in the register (Appendix A). |
| **New-Act mapping [V]** | Keywords may use 1961-Act terms people still search ("ITR-2", "Section 139(9)", "assessment year"). Every page that uses them must also state the Income-tax Act, 2025 equivalent (tax year, new section or form number) and mark that mapping "verify". |
| **ICAI-CHECK** | Copy to check against ICAI's guidelines on advertisement before use (mainly the word "free"). Site copy says "15-minute consultation". WhatsApp and GBP may say "free 15-minute consultation" only after the firm confirms. |
| **FIRM-FILL** | A value only the firm can supply (ICAI membership no., firm registration no., turnaround times, document-upload method, consented case data, baseline analytics). Never invented. |
| **NEW** | A URL that does not exist today. Every other URL is an upgrade of an existing page or post. |
| **LINK-ONLY** | Owned by another plan or page. We link with a descriptive anchor and never retarget it: `/income-tax-consultant-for-hni-chennai` and its locality/city pages (HNI), `/nri-tax-services` and `/nri-tax-services-uae|uk|usa` (plan 27), `/income-tax-notice-reply-chennai` (plan 25), `/income-tax-assessment-appeals-chennai`, `/tds-return-filing-chennai`, `/nri-property-sale-tds-chennai`, `/form-15ca-15cb-chennai`, posts `capital-gains-tax-property-sale`, `foreign-rsu-tax-schedule-fa-chennai`, `joint-development-agreement-tax-chennai`, `nri-itr-filing`, `why-income-tax-notices-issued`. |
| **W1–W16** | WhatsApp pre-filled messages defined in Section 9.7. Link format `https://wa.me/917200149711?text=<url-encoded message>`. Every message is under 500 characters (script-checked, Section 13.4). |
| **Page codes** | MP money page · S1–S8 supporting articles · C1–C5 comparisons · L1–L5 location sections · A1–A5 audience pages · P1–P5 problem pages · T1–T3 tools · FAQ hub · CS case study · PX process explainer. Full list in Section 4.0. |
| **Source codes** | ITD = incometax.gov.in e-filing portal and its help pages · ACT25 = Income-tax Act, 2025 (text on incometaxindia.gov.in) · ACT61 = Income-tax Act, 1961 (for FY 2025-26 and earlier years) · CBDT = CBDT circulars and notifications · RULES = Income-tax Rules (forms) · FA26 = Finance Act, 2026. No external URL below is invented: where a deep link is not confirmed the plan names the portal and says "confirm the exact page". |

### Copy rules that apply to every line of site copy produced from this plan

1. No professional fee figures, price lists or "starting from" amounts (the live site renders a `StartingFees` component on other pages; it is not used on this page and must not be added here without an ICAI check). Government charges are facts and may be shown only with the label.
2. No ratings, review counts, stars, testimonials-as-advertising, "best / No.1 / top / leading / guaranteed", and no competitor names. This file names no competitors.
3. Site copy says **"15-minute consultation"**. The word "free" is ICAI-CHECK.
4. The firm is in Anna Nagar, Chennai (only office). Every location outside Anna Nagar is "served online"; sections must say so.
5. Never promise a refund, a refund amount, a refund date, a tax saving or an outcome. Never "guarantee no notice".
6. Document-upload method, turnaround times and who files (CA or team) are FIRM-FILL. Describe the process only as "the firm confirms how to share documents securely at onboarding" until documented.
7. No invented client counts, results, rankings, refund amounts, turnaround promises or review quotes. Rankings in this plan are unmeasured: the first action is a live SERP and Search Console check.
8. Every page ends with WhatsApp Us (primary), Call +91 72001 49711, or Book a 15-minute consultation (https://calendly.com/ceo-csrushil/30min).
9. Scope guard: HNI, NRI, notice, appeal and TDS-return intents are never primary here. Where a reader needs them, link with a descriptive anchor.

---

## 1. Executive summary

**What this plan does.** It turns `/income-tax-return-filing-chennai` from a well-written information page into the lead-generating owner of "ITR filing Chennai" and its close variants. It adds 26 new URLs, 5 location sections and 3 ITR tools around it without touching HNI, NRI or notice intents.

**Where the live page stands (read from source, 3 Nov 2026).**

| Strength | Gap |
|---|---|
| Deep, accurate-looking content: ITR form table, due-date table for FY 2025-26 and tax year 2026-27, regime table, late/revised/updated routes, refunds, documents, AIS/26AS reconciliation. | Almost every number on it needs the verify label (Appendix A lists them). The page has no verify note and no visible "last reviewed" date in the copy. |
| Income-tax Act, 2025 framing (tax year, Section 263, Sections 423 to 425 mapping). | The mapping is stated as fact; it must be marked verify. |
| Title is 54 characters; canonical set; Service, HowTo and Breadcrumb schema come from the template (FAQ markup comes from `FAQSection`). | The meta description names NRIs (a plan 27 intent). The page has no audience routing and no tool above the fold. |
| 8 FAQs, 6 sub-services, 6-step process. | 8 FAQs against the 20+ target. No "who is this for" block with pain and solution, no documents-by-audience table, no comparison of ways to file, only one sentence of local content, no problem-led sub-pages. |
| Hero has "Enquire on WhatsApp" and "Book a Video Call"; footer CTA exists. | Labels differ from the brief ("WhatsApp Us", "Book a 15-minute consultation"). The firm confirms the booking wording (ICAI-CHECK on "free"). |
| Internal links to HNI, NRI, notice, direct-tax and four guides. | No links to audience pages, tools or problem pages (none exist yet). |

**Seasonality (important for the 90-day plan).** Today is 3 Nov 2026. By the live page, the non-audit due dates (31 Jul and 31 Aug 2026) have passed, the audit-case date is 21 Nov 2026 and the belated-return deadline is 31 Dec 2026 [V]. So the next 8 weeks are a belated-return, revised-return and unfiled-years window (high urgency, high intent). After that come tax-planning questions (old-regime proofs, advance-tax instalments, the Union Budget) and the early run-up to tax year 2026-27 returns filed in 2027 [V]. A flat 10 qualified enquiries per day is a peak-season target (July to August). Out of season the plan aims at a smaller daily number built from urgent intents; the funnel model below shows the traffic that 10 per day would need.

**Enquiry funnel model (planning ratios, not a forecast; replace with the firm's own GA4 and WhatsApp data after 4 weeks; FIRM-FILL baseline).**

| Step | Assumption | Needed for 10 qualified enquiries per day (300 per month) |
|---|---|---|
| Qualified share of contact starts (WhatsApp, call, form, booking) | 40% are qualified (real need plus one useful detail) | 25 contact starts per day |
| Contact-start rate on money, audience and problem pages | 3% of sessions | about 830 sessions per day on ITR pages |
| Enquiry-to-client rate | FIRM-FILL: track from week 1 | n/a |

**Five moves that matter most**

| # | Move | Why | Where |
|---|---|---|---|
| 1 | Rebuild the money page to the 11-part blueprint with a regime helper and a form selector above the fold and a visible verify note | Converts the page and removes the biggest risk (unverified numbers) | Section 5 |
| 2 | Publish the five problem pages first (belated, revise, refund, AIS mismatch, unfiled years) | Highest urgency in Nov to Dec | Section 4.4 |
| 3 | Upgrade the three owned posts (regime, advance tax, cash deposit) into tool-linked answers | They exist and can be refreshed in days | Section 4.2 |
| 4 | Build three ITR-specific tools with verify labels | Earns links, AI citations and WhatsApp starts | Section 4.6 |
| 5 | Put WhatsApp first on every page and track it by page | The brief's primary conversion | Sections 9, 12 |

**Cannibalisation rules in one table**

| Keyword family | Ranks on | Never on |
|---|---|---|
| ITR filing Chennai, income tax return CA Chennai, file ITR online Chennai | MP | audience pages, blog |
| ITR for salaried / freelancers / doctors / small business / senior citizens | A1 to A5 | MP (MP only links) |
| Old vs new regime; ITR form comparisons; Form 16 vs AIS | C1 to C5 | MP primary |
| Belated, revised, refund, AIS mismatch, unfiled years | P1 to P5 | MP primary (MP keeps a summary table and links) |
| Due date and late fee lookups | T3 (and P1 for "missed") | MP primary |
| HNI, NRI, notices, appeals, TDS returns | their owner pages | anywhere in this plan as primary |

## 2. Buyer and enquiry research: 10 personas

Names are illustrative personas, not real clients. Tamil queries are given in Tamil script with transliteration. Every WhatsApp message is under 500 characters, has one qualifying prompt and a clear next step, and promises nothing.

**Persona overview**

| # | Persona | Main trigger | Best landing page | WA code |
|---|---|---|---|---|
| P1 | Karthik, IT employee with ESOPs and mutual funds | Form 16 received; AIS shows share and mutual fund sales he did not track; unsure about regime | A1 /income-tax-return-filing-for-salaried-employees (ranks) with link to MP | W3 |
| P2 | Priya, salaried employee with HRA and a second job | Two Form 16s; TDS lower than expected; wants to claim HRA and deductions properly | A1 (ranks) | W2 |
| P3 | Dr. Arun, doctor with clinic income | Needs to choose between books of account and presumptive income; bank receipts do not match AIS | A3 /income-tax-return-filing-for-doctors-and-professionals (ranks) | W4 |
| P4 | Meena, freelancer with foreign clients | First year of real income; bank credits and FIRC-type receipts need classifying; client in the US asked for proof of filing | A2 /income-tax-return-filing-for-freelancers-and-consultants (ranks) | W5 |
| P5 | Suresh, small shop owner | Bank cash deposits show in AIS; accountant retired; GST and income tax returns do not match | A4 /income-tax-return-filing-for-small-business-owners (ranks) | W6 |
| P6 | Lakshmi, senior citizen pensioner | Bank deducted TDS on FD interest; wants refund and a clean record; son abroad cannot help | A5 /income-tax-return-filing-for-senior-citizens (ranks) | W7 |
| P7 | Rajesh, missed the due date | Due date passed; belated window running; loan or visa deadline | P1 /blog/missed-itr-due-date-belated-return (ranks) | W8 |
| P8 | Divya, share and mutual fund investor | Broker P&L and AIS look different; unsure how to report derivative income | S7 /blog/capital-gains-shares-mutual-funds-itr-2 | W9 |
| P9 | Vikram, refund delayed or AIS mismatch | Refund status stuck; TDS not visible in Form 26AS | P3 and P4 problem pages (rank) | W10 |
| P10 | Anand, years of unfiled returns | Loan officer needs three years of ITR; fear of what the department already knows | P5 /blog/file-itr-for-previous-years-not-filed (ranks) | W11 |

### Persona 1: Karthik, IT employee with ESOPs and mutual funds

| Field | Detail |
|---|---|
| Who | Salaried software engineer, 31, one employer, SIPs, a few share sales, small FD interest |
| Business type | Salaried (employer in OMR or Guindy) |
| Location | Sholinganallur / OMR, Chennai |
| Trigger | Form 16 received; AIS shows share and mutual fund sales he did not track; unsure about regime |
| Urgency | Medium to high near any due date; high if the belated window is closing |
| Budget sensitivity | Moderate: pays for accuracy, compares with app-based filing |
| Main fear | Wrong form or a missed AIS entry leading to a mismatch later; picking the worse regime |
| Questions to Google/AI | Which ITR form for salary plus capital gains? Old or new regime for me? How do I report mutual fund sales? Who files ITR in OMR? |
| Exact queries | ITR filing OMR; ITR-2 for salary and capital gains; capital gains mutual fund ITR; income tax return CA Chennai |
| Tamil variations | வருமான வரி தாக்கல் சென்னை (varumana vari thakkal Chennai); ஐடிஆர்-2 எப்படி தாக்கல் செய்வது (ITR-2 eppadi thakkal seivathu) |
| Best landing page | A1 /income-tax-return-filing-for-salaried-employees (ranks) with link to MP; L2 section for OMR |
| Best CTA | WhatsApp Us with Form 16 and the AIS summary |
| WhatsApp pre-filled message (W3, 171 chars) | Hi, I am a salaried employee in OMR with share/mutual fund sales this year. I need my income tax return filed and the regime compared. Which documents should I send first? |
| Qualification questions | Employer count? Any share, mutual fund or property sale? Foreign shares or RSUs (route to the RSU guide)? Rent paid or home loan? Return already filed? |
| Follow-on services | Advance tax planning, capital gains computation, foreign asset reporting (link-only guide), HNI page if income is high |

### Persona 2: Priya, salaried employee with HRA and a second job

| Field | Detail |
|---|---|
| Who | Teacher or admin executive, 38, rents a flat, switched jobs mid-year, has a small FD |
| Business type | Salaried, two employers in the year |
| Location | Anna Nagar / Kilpauk, Chennai |
| Trigger | Two Form 16s; TDS lower than expected; wants to claim HRA and deductions properly |
| Urgency | Medium; becomes high close to the due date |
| Budget sensitivity | High price sensitivity; wants clarity on what is included |
| Main fear | Double-counted salary, a refund that does not arrive, or an HRA claim that does not match rent proofs |
| Questions to Google/AI | How do I file ITR with two Form 16s? Can I claim HRA in the new regime? What if the employer did not count my deductions? |
| Exact queries | ITR filing for salaried Chennai; two employers ITR; HRA claim income tax return; ITR filing Anna Nagar |
| Tamil variations | சம்பளதாரர் வருமான வரி தாக்கல் (sambalathaarar varumana vari thakkal); HRA வரி விலக்கு (HRA vari vilakku) |
| Best landing page | A1 (ranks); S6 /blog/salary-hra-and-second-employer-itr; L1 Anna Nagar section |
| Best CTA | Book a 15-minute consultation or WhatsApp Us |
| WhatsApp pre-filled message (W2, 164 chars) | Hi, I changed jobs this year and have two Form 16s and pay rent. I need my ITR filed and want to know if the old or new regime suits me. Can we talk for 15 minutes? |
| Qualification questions | How many employers and months each? Rent paid per month and landlord PAN? Home loan? Any other income? Which regime did the employer use? |
| Follow-on services | Annual tax planning, regime declaration to employer in April, advance tax if side income grows |

### Persona 3: Dr. Arun, doctor with clinic income

| Field | Detail |
|---|---|
| Who | General practitioner running a clinic, 44, cash and UPI receipts, pays TDS-deducted fees from a hospital tie-up |
| Business type | Professional (clinic) |
| Location | Kilpauk / Mylapore, Chennai |
| Trigger | Needs to choose between books of account and presumptive income; bank receipts do not match AIS |
| Urgency | Medium; high if tax audit limits are close |
| Budget sensitivity | Moderate; values time saved more than price |
| Main fear | Choosing the wrong scheme, a tax audit he did not expect, or mixing personal and clinic funds |
| Questions to Google/AI | Can a doctor use presumptive taxation? ITR-3 or ITR-4 for a clinic? Do I need a tax audit? |
| Exact queries | ITR filing for doctors Chennai; 44ADA presumptive income; ITR-3 vs ITR-4; CA for doctors tax return |
| Tamil variations | மருத்துவர் வருமான வரி தாக்கல் (maruthuvar varumana vari thakkal); 44ADA என்றால் என்ன (44ADA endral enna) |
| Best landing page | A3 /income-tax-return-filing-for-doctors-and-professionals (ranks); C2 ITR-3 vs ITR-4; S5 presumptive taxation |
| Best CTA | WhatsApp Us with last year's return and receipts total |
| WhatsApp pre-filled message (W4, 183 chars) | Hi, I run a clinic in Chennai. I want to know whether to file ITR-3 or ITR-4 this year and what accounts I should keep. Receipts are roughly the same as last year. Can someone advise? |
| Qualification questions | Gross receipts band? Cash vs bank split? TDS on professional fees? Books kept? Last year's form and regime? Any GST registration? |
| Follow-on services | Tax audit page for audit cases, bookkeeping, advance tax, GST for clinics (link-only) |

### Persona 4: Meena, freelancer with foreign clients

| Field | Detail |
|---|---|
| Who | UI designer or developer, 29, invoices clients abroad, receives money via a payment gateway or bank |
| Business type | Freelance professional (service exports) |
| Location | Velachery / Adyar, Chennai |
| Trigger | First year of real income; bank credits and FIRC-type receipts need classifying; client in the US asked for proof of filing |
| Urgency | Medium; high when a visa, loan or client asks for the return |
| Budget sensitivity | High sensitivity; very online; compares app-based options |
| Main fear | Not knowing what to call the income, advance tax interest, or a GST requirement she missed |
| Questions to Google/AI | Which ITR form for freelance income? Is foreign income taxable? Do I pay advance tax? Do I need GST or an LUT? |
| Exact queries | ITR filing for freelancers Chennai; freelancer income tax India; foreign client income ITR; ITR-4 for freelancers |
| Tamil variations | ஃப்ரீலான்சர் வருமான வரி தாக்கல் (freelancer varumana vari thakkal) |
| Best landing page | A2 /income-tax-return-filing-for-freelancers-and-consultants (ranks); S5; GST freelancer page for GST (link-only) |
| Best CTA | WhatsApp Us, then a 15-minute consultation |
| WhatsApp pre-filled message (W5, 185 chars) | Hi, I am a freelancer in Chennai earning from clients abroad. I need to file my ITR and understand advance tax. I receive money in my bank account monthly. What should I share to start? |
| Qualification questions | Total receipts band? Mode of receipt? Expenses kept? Any advance tax paid? GST registered? Resident throughout the year? |
| Follow-on services | GST registration or LUT (link-only), advance tax planning, bookkeeping, business structure advice |

### Persona 5: Suresh, small shop owner

| Field | Detail |
|---|---|
| Who | Proprietor of a provision or hardware shop, 49, mix of cash and UPI, deposits cash weekly |
| Business type | Small business (proprietorship) |
| Location | Ambattur / T Nagar, Chennai |
| Trigger | Bank cash deposits show in AIS; accountant retired; GST and income tax returns do not match |
| Urgency | High when a cash-deposit or GST mismatch is spotted |
| Budget sensitivity | Moderate to high sensitivity; wants a single yearly package |
| Main fear | Cash deposits looking unexplained and a later notice |
| Questions to Google/AI | Can I use presumptive income for a shop? How much cash can I deposit? Do GST sales and ITR have to match? |
| Exact queries | ITR filing for small business Chennai; 44AD presumptive; cash deposit limit income tax; shop owner ITR |
| Tamil variations | சிறு வணிகர் வருமான வரி தாக்கல் (siru vanigar varumana vari thakkal); ரொக்க வைப்பு வரம்பு (rokka vaippu varambu) |
| Best landing page | A4 /income-tax-return-filing-for-small-business-owners (ranks); S2 /blog/safe-cash-deposit-limit; S5 |
| Best CTA | WhatsApp Us with turnover band and GST status |
| WhatsApp pre-filled message (W6, 193 chars) | Hi, I own a small shop in Chennai. I need my income tax return filed and want to check my cash deposits and GST sales match. Turnover is within the usual small-business range. Where do I start? |
| Qualification questions | Turnover band? Cash share of sales? GST registered? Cash deposited in the year? Books kept? Previous ITR form? |
| Follow-on services | Bookkeeping, GST return filing (link-only), tax audit if applicable (link-only), annual compliance package |

### Persona 6: Lakshmi, senior citizen pensioner

| Field | Detail |
|---|---|
| Who | Retired government employee, 67, pension, FD interest, a small rental income |
| Business type | Individual (pension and interest) |
| Location | Mylapore / Besant Nagar, Chennai |
| Trigger | Bank deducted TDS on FD interest; wants refund and a clean record; son abroad cannot help |
| Urgency | Medium; wants a patient explanation |
| Budget sensitivity | Moderate; trusts a local, visit-friendly firm |
| Main fear | Portal complexity, wrong bank details, and refund going astray |
| Questions to Google/AI | Do I have to file if tax was deducted? Which form for pension and rent? How do I get my refund? |
| Exact queries | ITR filing for senior citizens Chennai; pensioner income tax return; FD interest TDS refund |
| Tamil variations | மூத்த குடிமக்கள் வருமான வரி தாக்கல் (mootha kudimakkal varumana vari thakkal); FD வட்டி TDS திரும்பப் பெற (FD vatti TDS thirumbap pera) |
| Best landing page | A5 /income-tax-return-filing-for-senior-citizens (ranks); P3 refund page; L1 section for in-person visits |
| Best CTA | Call +91 72001 49711 (phone first) or WhatsApp Us |
| WhatsApp pre-filled message (W7, 185 chars) | Hello, I am a pensioner in Chennai with pension and FD interest. TDS was deducted on my interest. I would like help filing my return and checking if I get a refund. Can someone call me? |
| Qualification questions | Pension plus interest bands? Rental income? Bank accounts pre-validated? PAN and Aadhaar linked? Preferred time for a call? |
| Follow-on services | Tax planning for interest income, refund follow-up, family return support |

### Persona 7: Rajesh, missed the due date

| Field | Detail |
|---|---|
| Who | Senior executive and part-time consultant, 41, forgot to file; remembered when a loan officer asked for the return |
| Business type | Salaried with side income |
| Location | Porur / Chennai |
| Trigger | Due date passed; belated window running; loan or visa deadline |
| Urgency | Very high |
| Budget sensitivity | Low sensitivity; wants speed and a correct filing |
| Main fear | Penalty, losing the refund or the ability to carry forward losses, and a notice |
| Questions to Google/AI | Can I still file ITR? What late fee applies? Will I lose the refund? |
| Exact queries | missed ITR due date; file ITR after due date Chennai; belated return late fee; ITR last date |
| Tamil variations | தாமதமாக வருமான வரி தாக்கல் (thaamathamaga varumana vari thakkal) |
| Best landing page | P1 /blog/missed-itr-due-date-belated-return (ranks); T3 due-date and late-fee reference; MP late-routes table |
| Best CTA | WhatsApp Us now |
| WhatsApp pre-filled message (W8, 175 chars) | Hi, I missed the ITR due date for FY 2025-26. I have salary and some consulting income and need to file a belated return as soon as possible. What documents do you need today? |
| Qualification questions | Which year? Salary plus other income? Tax already paid or TDS? Any previous notice? Deadline from a bank or embassy? |
| Follow-on services | Revised or updated return if needed, advance tax, notice reply page if a notice has already arrived (link-only) |

### Persona 8: Divya, share and mutual fund investor

| Field | Detail |
|---|---|
| Who | Marketing manager, 34, sells shares and funds several times a year, one F&O experiment |
| Business type | Salaried plus investor |
| Location | Tambaram / Chennai |
| Trigger | Broker P&L and AIS look different; unsure how to report derivative income |
| Urgency | Medium |
| Budget sensitivity | Moderate; wants accuracy and loss carry-forward handled |
| Main fear | Mis-reporting gains or losing the benefit of loss set-off |
| Questions to Google/AI | Which form for capital gains and F&O? How are losses carried forward? Why does AIS differ from my broker statement? |
| Exact queries | capital gains ITR filing Chennai; F&O ITR-3; shares sold ITR; capital gains mutual funds ITR |
| Tamil variations | பங்குச் சந்தை லாபம் வருமான வரி (pangu santhai laabam varumana vari) |
| Best landing page | S7 /blog/capital-gains-shares-mutual-funds-itr-2; A1 for salaried plus investor; link-only to property capital gains post |
| Best CTA | WhatsApp Us with the broker statement |
| WhatsApp pre-filled message (W9, 188 chars) | Hi, I sold shares and mutual funds this year and also did some F&O trades. I want my income tax return filed with capital gains and losses reported properly. What statements should I send? |
| Qualification questions | Delivery vs F&O trades? Broker statements available? AIS entries? Losses brought forward? Salary also? |
| Follow-on services | Advance tax planning, loss carry-forward tracking, HNI page if income is high (link-only) |

### Persona 9: Vikram, refund delayed or AIS mismatch

| Field | Detail |
|---|---|
| Who | Salaried manager, 36, filed through an app, refund has not come, AIS shows an extra interest entry |
| Business type | Salaried |
| Location | Guindy / Chennai |
| Trigger | Refund status stuck; TDS not visible in Form 26AS |
| Urgency | High (money pending) |
| Budget sensitivity | Moderate; values a fixer, not a full re-filing |
| Main fear | Adjustment against an old demand, wrong bank account, or a notice |
| Questions to Google/AI | Why is my refund delayed? TDS not showing in 26AS: what now? How do I give AIS feedback? |
| Exact queries | income tax refund not received; AIS mismatch; TDS not showing in 26AS; refund status ITR |
| Tamil variations | வருமான வரி ரீஃபண்ட் வரவில்லை (varumana vari refund varavillai) |
| Best landing page | P3 and P4 problem pages (rank); C5 Form 16 vs AIS vs 26AS |
| Best CTA | WhatsApp Us with the acknowledgement and the intimation |
| WhatsApp pre-filled message (W10, 168 chars) | Hi, I filed my ITR but the refund has not come and TDS from one deductor is not showing in Form 26AS. I have the acknowledgement. Can you tell me what to check and fix? |
| Qualification questions | Year and ARN? E-verified date? Refund status shown? Bank account pre-validated? Any intimation received? |
| Follow-on services | Rectification and revised return, notice page if a notice has come (link-only), tax planning |

### Persona 10: Anand, years of unfiled returns

| Field | Detail |
|---|---|
| Who | Self-employed consultant, 45, has not filed for two or three years; needs ITR for a home loan |
| Business type | Self-employed / consultant |
| Location | Coimbatore (served online) |
| Trigger | Loan officer needs three years of ITR; fear of what the department already knows |
| Urgency | High |
| Budget sensitivity | Low to moderate; wants one firm to handle all years |
| Main fear | Penalty and prosecution, and the cost of catching up |
| Questions to Google/AI | Can I file returns for earlier years? Is there a time limit? What will it cost in tax and interest? |
| Exact queries | file ITR for previous years; ITR not filed for 3 years; updated return ITR-U; unfiled returns Tamil Nadu |
| Tamil variations | முந்தைய ஆண்டு வருமான வரி தாக்கல் (munthaiya aandu varumana vari thakkal) |
| Best landing page | P5 /blog/file-itr-for-previous-years-not-filed (ranks); P1; L3 Coimbatore section |
| Best CTA | Book a 15-minute consultation |
| WhatsApp pre-filled message (W11, 190 chars) | Hi, I am a consultant in Coimbatore and have not filed my income tax return for the last two or three years. I need them filed for a home loan. How do we begin, and what do you need from me? |
| Qualification questions | Which years? Income sources? Bank statements available? Any notice received? Loan deadline? |
| Follow-on services | Bookkeeping, advance tax, notice reply page if one exists (link-only), annual compliance package |

## 3. Keyword map: 100 keywords, categories A to J

**Reading guide.** Priority P1 means build or upgrade in weeks 1 to 4; P2 weeks 5 to 8; P3 only after Search Console shows demand. Funnel: BOFU = ready to hire, MOFU = comparing, TOFU = learning. "Secondary kws" are the other keywords assigned to the same URL, so each URL has one primary and a defined cluster. Keywords with 1961-Act terms (ITR-2, 44ADA, 44AD) must carry the new-Act mapping [V] in the page copy. Search volumes and rankings are not measured here: run the live SERP and Search Console check (Section 14, action 2) before finalising P-levels. Tamil keywords: Tamil script plus transliteration.

**Category counts:** A Transactional 10 · B Commercial investigation 10 · C Problem/urgent 10 · D Comparison 10 · E Informational 10 · F Local 10 · G Audience-specific 10 · H Tamil Nadu city 10 · I Tamil-language 10 · J AI/voice question 10.

| # | Keyword | Cat | Intent | Funnel | Pri | Page type | Target URL | Primary kw | Secondary kws | Entities | Likely next action | WhatsApp CTA | Internal links | External authority source | Content format | Enquiry potential |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | income tax return filing in Chennai | A | Transactional | BOFU | P1 | Money page | `/income-tax-return-filing-chennai` | income tax return filing in Chennai | ITR filing Chennai, income tax return CA Chennai | ITR, Form 16, AIS, Form 26AS, incometax.gov.in, Anna Nagar | WhatsApp Us | W1 | A1-A5, T1-T3, P1, P3, C1 | ITD e-filing portal (incometax.gov.in): ITR forms applicable | Service page, tools, 22 FAQs | High |
| 2 | ITR filing Chennai | A | Transactional | BOFU | P1 | Money page | `/income-tax-return-filing-chennai` | income tax return filing in Chennai | income tax return filing in Chennai, income tax return CA Chennai | ITR, Form 16, AIS, Form 26AS, incometax.gov.in, Anna Nagar | WhatsApp Us | W1 | A1-A5, T1-T3, P1, P3, C1 | ITD e-filing portal (incometax.gov.in): ITR forms applicable | Service page, tools, 22 FAQs | High |
| 3 | income tax return CA Chennai | A | Transactional | BOFU | P1 | Money page | `/income-tax-return-filing-chennai` | income tax return filing in Chennai | income tax return filing in Chennai, ITR filing Chennai | ITR, Form 16, AIS, Form 26AS, incometax.gov.in, Anna Nagar | WhatsApp Us | W1 | A1-A5, T1-T3, P1, P3, C1 | ITD e-filing portal (incometax.gov.in): ITR forms applicable | Service page, tools, 22 FAQs | High |
| 4 | file income tax return online Chennai | A | Transactional | BOFU | P1 | Money page | `/income-tax-return-filing-chennai` | income tax return filing in Chennai | income tax return filing in Chennai, ITR filing Chennai | ITR, Form 16, AIS, Form 26AS, incometax.gov.in, Anna Nagar | WhatsApp Us | W1 | A1-A5, T1-T3, P1, P3, C1 | ITD e-filing portal (incometax.gov.in): ITR forms applicable | Service page, tools, 22 FAQs | High |
| 5 | ITR filing service near me Chennai | A | Transactional | BOFU | P1 | Money page | `/income-tax-return-filing-chennai` | income tax return filing in Chennai | income tax return filing in Chennai, ITR filing Chennai | ITR, Form 16, AIS, Form 26AS, incometax.gov.in, Anna Nagar | WhatsApp Us | W1 | A1-A5, T1-T3, P1, P3, C1 | ITD e-filing portal (incometax.gov.in): ITR forms applicable | Service page, tools, 22 FAQs | High |
| 6 | chartered accountant for ITR filing Chennai | A | Transactional | BOFU | P1 | Money page | `/income-tax-return-filing-chennai` | income tax return filing in Chennai | income tax return filing in Chennai, ITR filing Chennai | ITR, Form 16, AIS, Form 26AS, incometax.gov.in, Anna Nagar | WhatsApp Us | W1 | A1-A5, T1-T3, P1, P3, C1 | ITD e-filing portal (incometax.gov.in): ITR forms applicable | Service page, tools, 22 FAQs | High |
| 7 | ITR filing Anna Nagar | A | Transactional local | BOFU | P1 | Location section on MP | `/income-tax-return-filing-chennai#chennai-areas` | income tax return filing Anna Nagar Chennai | chartered accountant for income tax return near Anna Nagar, ITR filing T Nagar | Anna Nagar, Kilpauk, T Nagar, Velachery, Porur, Tambaram | WhatsApp Us | W2 | MP, existing /chartered-accountant-<area>-chennai pages | firm address and ICAI | Local section | High |
| 8 | income tax return filing for salaried Chennai | A | Transactional | BOFU | P1 | Audience page (NEW) | `/income-tax-return-filing-for-salaried-employees` | ITR filing for salaried employees Chennai | ITR filing for software engineers with ESOP | Form 16, HRA, ESOP, mutual funds, ITR-1, ITR-2 | WhatsApp Us | W2 | MP, S6, S7, C1, T1 | ITD: ITR-1 and ITR-2 help | Audience page + checklist | High |
| 9 | ITR filing for freelancers Chennai | A | Transactional | BOFU | P1 | Audience page (NEW) | `/income-tax-return-filing-for-freelancers-and-consultants` | ITR filing for freelancers Chennai | ITR filing for freelancers with foreign clients, ITR for YouTubers and content creators | freelancer, presumptive income, advance tax, foreign clients, GST LUT | WhatsApp Us | W5 | MP, S5, S1, GST freelancer page | ITD: ITR-4 help | Audience page + checklist | High |
| 10 | tax return filing consultant Chennai | A | Transactional | BOFU | P2 | Money page | `/income-tax-return-filing-chennai` | income tax return filing in Chennai | income tax return filing in Chennai, ITR filing Chennai | ITR, Form 16, AIS, Form 26AS, incometax.gov.in, Anna Nagar | WhatsApp Us | W1 | A1-A5, T1-T3, P1, P3, C1 | ITD e-filing portal (incometax.gov.in): ITR forms applicable | Service page, tools, 22 FAQs | Medium |
| 11 | what does ITR filing cost in Chennai | B | Commercial | MOFU | P2 | Blog (NEW) | `/blog/itr-filing-process-chennai` | ITR filing process and cost drivers Chennai | how much does a CA charge for ITR filing, how long does ITR filing take | process, documents, review, e-verify, no fee figures | WhatsApp Us | W1 | MP, C4, S3, S4 | firm's documented process | Process explainer | Medium |
| 12 | how much does a CA charge for ITR filing | B | Commercial | MOFU | P2 | Blog (NEW) | `/blog/itr-filing-process-chennai` | ITR filing process and cost drivers Chennai | what does ITR filing cost in Chennai, how long does ITR filing take | process, documents, review, e-verify, no fee figures | WhatsApp Us | W1 | MP, C4, S3, S4 | firm's documented process | Process explainer | Medium |
| 13 | online ITR filing vs CA assisted filing | B | Commercial | MOFU | P2 | Blog (NEW) | `/blog/itr-filing-ca-vs-self-filing` | CA vs self-filing ITR | ITR through employer software vs CA, do I need a CA to file ITR | self-filing, employer software, CA-assisted filing, e-filing portal | WhatsApp Us | W1 | MP, PX, T2 | ITD: how to file a return | Comparison + decision list | Medium |
| 14 | best ITR filing service in Chennai | B | Commercial | MOFU | P2 | Money page | `/income-tax-return-filing-chennai` | income tax return filing in Chennai | income tax return filing in Chennai, ITR filing Chennai | ITR, Form 16, AIS, Form 26AS, incometax.gov.in, Anna Nagar | WhatsApp Us | W1 | A1-A5, T1-T3, P1, P3, C1 | ITD e-filing portal (incometax.gov.in): ITR forms applicable | Service page, tools, 22 FAQs | Medium |
| 15 | documents required for ITR filing | B | Commercial | MOFU | P1 | Blog (NEW) | `/blog/itr-documents-checklist-chennai` | documents required for ITR filing | income tax return filing checklist, ITR for first-time filers | Form 16, rent receipts, bank interest certificate, broker statement, AIS | WhatsApp Us | W3 | MP, A1-A5, T2 | ITD: ITR filing prerequisites | Checklist + downloadable PDF | Medium |
| 16 | how long does ITR filing take | B | Commercial | MOFU | P2 | Blog (NEW) | `/blog/itr-filing-process-chennai` | ITR filing process and cost drivers Chennai | what does ITR filing cost in Chennai, how much does a CA charge for ITR filing | process, documents, review, e-verify, no fee figures | WhatsApp Us | W1 | MP, C4, S3, S4 | firm's documented process | Process explainer | Medium |
| 17 | ITR filing for business income Chennai | B | Commercial | MOFU | P1 | Audience page (NEW) | `/income-tax-return-filing-for-small-business-owners` | ITR filing for small business owners Chennai | ITR for small shop owners, ITR for F&O traders | proprietor, 44AD, cash, GST, books | WhatsApp Us | W6 | MP, S2, S5, C2 | ITD: ITR-3 and ITR-4 help | Audience page + checklist | High |
| 18 | ITR filing for doctors Chennai | B | Commercial | MOFU | P1 | Audience page (NEW) | `/income-tax-return-filing-for-doctors-and-professionals` | ITR filing for doctors Chennai | ITR for doctors under presumptive taxation | clinic, professional income, 44ADA, ITR-3, ITR-4 | WhatsApp Us | W4 | MP, S5, C2, tax audit page | ITD: ITR-3 and ITR-4 help | Audience page + checklist | High |
| 19 | ITR filing for senior citizens Chennai | B | Commercial | MOFU | P2 | Audience page (NEW) | `/income-tax-return-filing-for-senior-citizens` | ITR filing for senior citizens Chennai | ITR for pensioners | pension, FD interest, TDS, refund, senior citizen exemption | WhatsApp Us | W7 | MP, P3, S4 | ITD: senior citizen return help | Audience page + checklist | Medium |
| 20 | income tax return filing checklist | B | Commercial | MOFU | P2 | Blog (NEW) | `/blog/itr-documents-checklist-chennai` | documents required for ITR filing | documents required for ITR filing, ITR for first-time filers | Form 16, rent receipts, bank interest certificate, broker statement, AIS | WhatsApp Us | W3 | MP, A1-A5, T2 | ITD: ITR filing prerequisites | Checklist + downloadable PDF | Medium |
| 21 | last date to file ITR | C | Urgent | BOFU | P1 | Tool (NEW) | `/tools/itr-due-date-and-late-fee-reference` | ITR due date and late fee reference | ITR due date FY 2025-26 and tax year 2026-27, வருமான வரி கணக்கு தாக்கல் கடைசி தேதி (varumana vari kanakku thakkal kadaisi thethi) | due dates, late fee, belated, revised, ITR-U | WhatsApp Us | W8 | MP, P1, P2, S8 | ITD and CBDT notifications | Reference table | High |
| 22 | missed ITR due date what to do | C | Urgent | BOFU | P1 | Problem page (NEW) | `/blog/missed-itr-due-date-belated-return` | missed ITR due date belated return | belated return late fee, file ITR after due date Chennai | belated return, late fee, interest, ITR-U | WhatsApp Us | W8 | MP, T3, P2, P5, S4 | ITD: belated return help | Problem page + decision tree | High |
| 23 | belated return late fee | C | Urgent | BOFU | P1 | Problem page (NEW) | `/blog/missed-itr-due-date-belated-return` | missed ITR due date belated return | missed ITR due date what to do, file ITR after due date Chennai | belated return, late fee, interest, ITR-U | WhatsApp Us | W8 | MP, T3, P2, P5, S4 | ITD: belated return help | Problem page + decision tree | High |
| 24 | file ITR after due date Chennai | C | Urgent local | BOFU | P1 | Problem page (NEW) | `/blog/missed-itr-due-date-belated-return` | missed ITR due date belated return | missed ITR due date what to do, belated return late fee | belated return, late fee, interest, ITR-U | WhatsApp Us | W8 | MP, T3, P2, P5, S4 | ITD: belated return help | Problem page + decision tree | High |
| 25 | revised return how to file | C | Urgent | BOFU | P1 | Problem page (NEW) | `/blog/mistake-in-filed-itr-revised-return` | revised return mistake in filed ITR | ITR filed with wrong details, can I revise my ITR after filing | revised return, ITR-U, rectification | WhatsApp Us | W10 | MP, T3, P1, P4 | ITD: revised return help | Problem page + decision tree | High |
| 26 | ITR filed with wrong details | C | Urgent | BOFU | P1 | Problem page (NEW) | `/blog/mistake-in-filed-itr-revised-return` | revised return mistake in filed ITR | revised return how to file, can I revise my ITR after filing | revised return, ITR-U, rectification | WhatsApp Us | W10 | MP, T3, P1, P4 | ITD: revised return help | Problem page + decision tree | High |
| 27 | income tax refund not received | C | Urgent | BOFU | P1 | Problem page (NEW) | `/blog/income-tax-refund-delayed-chennai` | income tax refund delayed | வருமான வரி ரீஃபண்ட் வரவில்லை (varumana vari refund varavillai), how to check ITR refund status | refund status, bank validation, PAN-Aadhaar link, intimation | WhatsApp Us | W10 | MP, A5, P4, S4 | ITD: refund status help | Problem page + checklist | High |
| 28 | ITR not e-verified what to do | C | Urgent | BOFU | P1 | Blog (NEW) | `/blog/how-to-e-verify-income-tax-return` | how to e-verify ITR | how to e-verify ITR, ITR இ-வெரிஃபை செய்வது எப்படி (ITR e-verify seivathu eppadi) | e-verification, Aadhaar OTP, net banking, ITR-V | WhatsApp Us | W8 | MP, P1, P3 | ITD: e-verify return help page | How-to + HowTo schema | High |
| 29 | AIS shows income I did not earn | C | Urgent | BOFU | P2 | Problem page (NEW) | `/blog/ais-mismatch-tds-not-showing-26as` | AIS mismatch TDS not showing in 26AS | TDS not showing in Form 26AS | AIS feedback, Form 26AS, deductor, TDS credit | WhatsApp Us | W10 | MP, C5, P3, S2 | ITD: AIS feedback help | Problem page + steps | Medium |
| 30 | TDS not showing in Form 26AS | C | Urgent | BOFU | P2 | Problem page (NEW) | `/blog/ais-mismatch-tds-not-showing-26as` | AIS mismatch TDS not showing in 26AS | AIS shows income I did not earn | AIS feedback, Form 26AS, deductor, TDS credit | WhatsApp Us | W10 | MP, C5, P3, S2 | ITD: AIS feedback help | Problem page + steps | Medium |
| 31 | old vs new tax regime | D | Comparison | MOFU | P1 | Blog (upgrade) | `/blog/old-vs-new-tax-regime` | old vs new tax regime | old vs new tax regime for salaried employees, பழைய வரி முறை புதிய வரி முறை (pazhaiya vari murai pudhiya vari murai) | old regime, new regime, rebate, standard deduction, HRA | Run the helper then WhatsApp | W12 | MP, T1, A1, S6 | ITD: tax slabs and regime pages | Comparison + helper embed | High |
| 32 | old vs new tax regime for salaried employees | D | Comparison | MOFU | P1 | Blog (upgrade) | `/blog/old-vs-new-tax-regime` | old vs new tax regime | old vs new tax regime, பழைய வரி முறை புதிய வரி முறை (pazhaiya vari murai pudhiya vari murai) | old regime, new regime, rebate, standard deduction, HRA | Run the helper then WhatsApp | W12 | MP, T1, A1, S6 | ITD: tax slabs and regime pages | Comparison + helper embed | High |
| 33 | ITR-1 vs ITR-2 | D | Comparison | MOFU | P2 | Blog (NEW) | `/blog/itr-1-vs-itr-2` | ITR-1 vs ITR-2 | - | ITR-1 Sahaj, ITR-2, capital gains, foreign assets | Run the helper then WhatsApp | W13 | MP, A1, T2 | ITD: ITR-1 and ITR-2 help | Comparison table | Medium |
| 34 | ITR-3 vs ITR-4 | D | Comparison | MOFU | P2 | Blog (NEW) | `/blog/itr-3-vs-itr-4` | ITR-3 vs ITR-4 | - | ITR-3, ITR-4, presumptive income, books | Run the helper then WhatsApp | W13 | MP, A3, A4, S5, T2 | ITD: ITR-3 and ITR-4 help | Comparison table | Medium |
| 35 | presumptive taxation vs regular books of account | D | Comparison | MOFU | P2 | Blog (NEW) | `/blog/presumptive-taxation-itr-4-explained` | presumptive taxation ITR-4 | Section 44ADA vs 44AD (1961 Act terms) | Section 44AD, 44ADA (1961 Act numbers), ITR-4, books of account | Run the helper then WhatsApp | W4 | MP, A2, A3, A4, C2 | ACT25 text and ITD ITR-4 help | Explainer + table | Medium |
| 36 | Form 16 vs Form 26AS vs AIS | D | Comparison | MOFU | P2 | Blog (NEW) | `/blog/form-16-vs-ais-vs-form-26as` | Form 16 vs AIS vs Form 26AS | - | Form 16, AIS, TIS, Form 26AS | Run the helper then WhatsApp | W10 | MP, P4, S3 | ITD: AIS and TIS help pages | Comparison table | Medium |
| 37 | belated vs revised vs updated return | D | Comparison | MOFU | P1 | Money page | `/income-tax-return-filing-chennai` | income tax return filing in Chennai | income tax return filing in Chennai, ITR filing Chennai | ITR, Form 16, AIS, Form 26AS, incometax.gov.in, Anna Nagar | Run the helper then WhatsApp | W8 | A1-A5, T1-T3, P1, P3, C1 | ITD e-filing portal (incometax.gov.in): ITR forms applicable | Service page, tools, 22 FAQs | High |
| 38 | ITR through employer software vs CA | D | Comparison | MOFU | P3 | Blog (NEW) | `/blog/itr-filing-ca-vs-self-filing` | CA vs self-filing ITR | online ITR filing vs CA assisted filing, do I need a CA to file ITR | self-filing, employer software, CA-assisted filing, e-filing portal | Run the helper then WhatsApp | W1 | MP, PX, T2 | ITD: how to file a return | Comparison + decision list | Low |
| 39 | Section 44ADA vs 44AD (1961 Act terms) | D | Comparison | MOFU | P2 | Blog (NEW) | `/blog/presumptive-taxation-itr-4-explained` | presumptive taxation ITR-4 | presumptive taxation vs regular books of account | Section 44AD, 44ADA (1961 Act numbers), ITR-4, books of account | Run the helper then WhatsApp | W4 | MP, A2, A3, A4, C2 | ACT25 text and ITD ITR-4 help | Explainer + table | Medium |
| 40 | advance tax vs self-assessment tax | D | Comparison | MOFU | P3 | Blog (upgrade) | `/blog/advance-tax-deadlines` | advance tax due dates FY 2026-27 | advance tax due dates FY 2026-27, முன்கூட்டிய வரி எப்போது கட்ட வேண்டும் (munkootiya vari eppothu katta vendum) | advance tax, self-assessment tax, instalments, interest | Run the helper then WhatsApp | W5 | MP, A2, A4, T3, C1 | ITD: tax payments help page | Guide + deadline table | Low |
| 41 | which ITR form should I file | E | Informational | TOFU | P1 | Tool (NEW) | `/tools/itr-form-selector` | ITR form selector | which ITR form is applicable for salary and capital gains | ITR-1 to ITR-7, eligibility | Open the tool or checklist | W13 | MP, C2, C3, A1-A4 | ITD: ITR forms applicable | Interactive selector | Medium |
| 42 | who needs to file an income tax return | E | Informational | TOFU | P2 | Money page | `/income-tax-return-filing-chennai` | income tax return filing in Chennai | income tax return filing in Chennai, ITR filing Chennai | ITR, Form 16, AIS, Form 26AS, incometax.gov.in, Anna Nagar | Open the tool or checklist | W1 | A1-A5, T1-T3, P1, P3, C1 | ITD e-filing portal (incometax.gov.in): ITR forms applicable | Service page, tools, 22 FAQs | Medium |
| 43 | how to e-verify ITR | E | Informational | TOFU | P2 | Blog (NEW) | `/blog/how-to-e-verify-income-tax-return` | how to e-verify ITR | ITR not e-verified what to do, ITR இ-வெரிஃபை செய்வது எப்படி (ITR e-verify seivathu eppadi) | e-verification, Aadhaar OTP, net banking, ITR-V | Open the tool or checklist | W8 | MP, P1, P3 | ITD: e-verify return help page | How-to + HowTo schema | Medium |
| 44 | ITR due date FY 2025-26 and tax year 2026-27 | E | Informational | TOFU | P1 | Tool (NEW) | `/tools/itr-due-date-and-late-fee-reference` | ITR due date and late fee reference | last date to file ITR, வருமான வரி கணக்கு தாக்கல் கடைசி தேதி (varumana vari kanakku thakkal kadaisi thethi) | due dates, late fee, belated, revised, ITR-U | Open the tool or checklist | W8 | MP, P1, P2, S8 | ITD and CBDT notifications | Reference table | High |
| 45 | advance tax due dates FY 2026-27 | E | Informational | TOFU | P1 | Blog (upgrade) | `/blog/advance-tax-deadlines` | advance tax due dates FY 2026-27 | advance tax vs self-assessment tax, முன்கூட்டிய வரி எப்போது கட்ட வேண்டும் (munkootiya vari eppothu katta vendum) | advance tax, self-assessment tax, instalments, interest | Open the tool or checklist | W5 | MP, A2, A4, T3, C1 | ITD: tax payments help page | Guide + deadline table | Medium |
| 46 | cash deposit limit income tax | E | Informational | TOFU | P1 | Blog (upgrade) | `/blog/safe-cash-deposit-limit` | cash deposit limit income tax | is a cash deposit of 10 lakh taxable | cash deposit, AIS, SFT reporting, Section 269ST (1961 Act), cash receipt limit | Open the tool or checklist | W6 | MP, A4, P4, C5 | ITD: AIS and TIS help pages | Guide + FAQ | Medium |
| 47 | Income-tax Act 2025 ITR changes | E | Informational | TOFU | P2 | Blog (NEW) | `/blog/income-tax-act-2025-itr-what-changes` | Income-tax Act 2025 ITR changes | tax year vs assessment year | tax year, assessment year, Section 263, Sections 423-425 (verify) | Open the tool or checklist | W1 | MP, C1, T3 | ACT25 text on incometaxindia.gov.in | Explainer + mapping table | Low |
| 48 | tax year vs assessment year | E | Informational | TOFU | P3 | Blog (NEW) | `/blog/income-tax-act-2025-itr-what-changes` | Income-tax Act 2025 ITR changes | Income-tax Act 2025 ITR changes | tax year, assessment year, Section 263, Sections 423-425 (verify) | Open the tool or checklist | W1 | MP, C1, T3 | ACT25 text on incometaxindia.gov.in | Explainer + mapping table | Low |
| 49 | capital gains on shares in ITR | E | Informational | TOFU | P2 | Blog (NEW) | `/blog/capital-gains-shares-mutual-funds-itr-2` | capital gains shares mutual funds ITR | - | capital gains, broker P&L, CAMS, KFintech, ITR-2, Schedule CG | Open the tool or checklist | W9 | MP, A1, T2, link to capital-gains-tax-property-sale | ITD: ITR-2 help | Explainer + checklist | Medium |
| 50 | HRA claim in income tax return | E | Informational | TOFU | P2 | Blog (NEW) | `/blog/salary-hra-and-second-employer-itr` | HRA and second employer ITR | ITR for rental income house property | HRA, Form 16, two employers, house property | Open the tool or checklist | W2 | MP, A1, T1 | ITD: ITR-1 help; CBDT notes on TDS from salary | Explainer + worked examples | Medium |
| 51 | chartered accountant for income tax return near Anna Nagar | F | Local | BOFU | P1 | Location section on MP | `/income-tax-return-filing-chennai#chennai-areas` | income tax return filing Anna Nagar Chennai | ITR filing Anna Nagar, ITR filing T Nagar | Anna Nagar, Kilpauk, T Nagar, Velachery, Porur, Tambaram | WhatsApp / visit Anna Nagar | W2 | MP, existing /chartered-accountant-<area>-chennai pages | firm address and ICAI | Local section | High |
| 52 | ITR filing T Nagar | F | Local | BOFU | P2 | Location section on MP | `/income-tax-return-filing-chennai#chennai-areas` | income tax return filing Anna Nagar Chennai | ITR filing Anna Nagar, chartered accountant for income tax return near Anna Nagar | Anna Nagar, Kilpauk, T Nagar, Velachery, Porur, Tambaram | WhatsApp / visit Anna Nagar | W1 | MP, existing /chartered-accountant-<area>-chennai pages | firm address and ICAI | Local section | Medium |
| 53 | ITR filing Velachery | F | Local | BOFU | P2 | Location section on MP | `/income-tax-return-filing-chennai#chennai-areas` | income tax return filing Anna Nagar Chennai | ITR filing Anna Nagar, chartered accountant for income tax return near Anna Nagar | Anna Nagar, Kilpauk, T Nagar, Velachery, Porur, Tambaram | WhatsApp / visit Anna Nagar | W1 | MP, existing /chartered-accountant-<area>-chennai pages | firm address and ICAI | Local section | Medium |
| 54 | ITR filing OMR Sholinganallur | F | Local | BOFU | P1 | Location section (existing page) | `/chartered-accountant-omr-sholinganallur-chennai#itr-for-it-employees` | ITR filing OMR Sholinganallur | ITR filing for IT employees OMR | OMR, IT employees, Form 16, ESOP | WhatsApp / visit Anna Nagar | W3 | A1, MP, S7 | ITD: ITR help | Local section | High |
| 55 | ITR filing for IT employees OMR | F | Local | BOFU | P1 | Location section (existing page) | `/chartered-accountant-omr-sholinganallur-chennai#itr-for-it-employees` | ITR filing OMR Sholinganallur | ITR filing OMR Sholinganallur | OMR, IT employees, Form 16, ESOP | WhatsApp / visit Anna Nagar | W3 | A1, MP, S7 | ITD: ITR help | Local section | High |
| 56 | ITR filing Adyar | F | Local | BOFU | P3 | Location section on MP | `/income-tax-return-filing-chennai#chennai-areas` | income tax return filing Anna Nagar Chennai | ITR filing Anna Nagar, chartered accountant for income tax return near Anna Nagar | Anna Nagar, Kilpauk, T Nagar, Velachery, Porur, Tambaram | WhatsApp / visit Anna Nagar | W1 | MP, existing /chartered-accountant-<area>-chennai pages | firm address and ICAI | Local section | Low |
| 57 | ITR filing Mylapore | F | Local | BOFU | P3 | Location section on MP | `/income-tax-return-filing-chennai#chennai-areas` | income tax return filing Anna Nagar Chennai | ITR filing Anna Nagar, chartered accountant for income tax return near Anna Nagar | Anna Nagar, Kilpauk, T Nagar, Velachery, Porur, Tambaram | WhatsApp / visit Anna Nagar | W7 | MP, existing /chartered-accountant-<area>-chennai pages | firm address and ICAI | Local section | Low |
| 58 | ITR filing Porur | F | Local | BOFU | P2 | Location section on MP | `/income-tax-return-filing-chennai#chennai-areas` | income tax return filing Anna Nagar Chennai | ITR filing Anna Nagar, chartered accountant for income tax return near Anna Nagar | Anna Nagar, Kilpauk, T Nagar, Velachery, Porur, Tambaram | WhatsApp / visit Anna Nagar | W8 | MP, existing /chartered-accountant-<area>-chennai pages | firm address and ICAI | Local section | Medium |
| 59 | ITR filing Tambaram | F | Local | BOFU | P3 | Location section on MP | `/income-tax-return-filing-chennai#chennai-areas` | income tax return filing Anna Nagar Chennai | ITR filing Anna Nagar, chartered accountant for income tax return near Anna Nagar | Anna Nagar, Kilpauk, T Nagar, Velachery, Porur, Tambaram | WhatsApp / visit Anna Nagar | W9 | MP, existing /chartered-accountant-<area>-chennai pages | firm address and ICAI | Local section | Low |
| 60 | ITR filing Kilpauk | F | Local | BOFU | P3 | Location section on MP | `/income-tax-return-filing-chennai#chennai-areas` | income tax return filing Anna Nagar Chennai | ITR filing Anna Nagar, chartered accountant for income tax return near Anna Nagar | Anna Nagar, Kilpauk, T Nagar, Velachery, Porur, Tambaram | WhatsApp / visit Anna Nagar | W2 | MP, existing /chartered-accountant-<area>-chennai pages | firm address and ICAI | Local section | Low |
| 61 | ITR filing for software engineers with ESOP | G | Audience | BOFU | P1 | Audience page (NEW) | `/income-tax-return-filing-for-salaried-employees` | ITR filing for salaried employees Chennai | income tax return filing for salaried Chennai | Form 16, HRA, ESOP, mutual funds, ITR-1, ITR-2 | WhatsApp Us | W3 | MP, S6, S7, C1, T1 | ITD: ITR-1 and ITR-2 help | Audience page + checklist | High |
| 62 | ITR filing for freelancers with foreign clients | G | Audience | BOFU | P1 | Audience page (NEW) | `/income-tax-return-filing-for-freelancers-and-consultants` | ITR filing for freelancers Chennai | ITR filing for freelancers Chennai, ITR for YouTubers and content creators | freelancer, presumptive income, advance tax, foreign clients, GST LUT | WhatsApp Us | W5 | MP, S5, S1, GST freelancer page | ITD: ITR-4 help | Audience page + checklist | High |
| 63 | ITR for YouTubers and content creators | G | Audience | MOFU | P2 | Audience page (NEW) | `/income-tax-return-filing-for-freelancers-and-consultants` | ITR filing for freelancers Chennai | ITR filing for freelancers Chennai, ITR filing for freelancers with foreign clients | freelancer, presumptive income, advance tax, foreign clients, GST LUT | WhatsApp Us | W5 | MP, S5, S1, GST freelancer page | ITD: ITR-4 help | Audience page + checklist | Medium |
| 64 | ITR for doctors under presumptive taxation | G | Audience | MOFU | P2 | Audience page (NEW) | `/income-tax-return-filing-for-doctors-and-professionals` | ITR filing for doctors Chennai | ITR filing for doctors Chennai | clinic, professional income, 44ADA, ITR-3, ITR-4 | WhatsApp Us | W4 | MP, S5, C2, tax audit page | ITD: ITR-3 and ITR-4 help | Audience page + checklist | Medium |
| 65 | ITR for small shop owners | G | Audience | MOFU | P1 | Audience page (NEW) | `/income-tax-return-filing-for-small-business-owners` | ITR filing for small business owners Chennai | ITR filing for business income Chennai, ITR for F&O traders | proprietor, 44AD, cash, GST, books | WhatsApp Us | W6 | MP, S2, S5, C2 | ITD: ITR-3 and ITR-4 help | Audience page + checklist | High |
| 66 | ITR for F&O traders | G | Audience | MOFU | P2 | Audience page (NEW) | `/income-tax-return-filing-for-small-business-owners` | ITR filing for small business owners Chennai | ITR filing for business income Chennai, ITR for small shop owners | proprietor, 44AD, cash, GST, books | WhatsApp Us | W9 | MP, S2, S5, C2 | ITD: ITR-3 and ITR-4 help | Audience page + checklist | Medium |
| 67 | ITR for pensioners | G | Audience | MOFU | P2 | Audience page (NEW) | `/income-tax-return-filing-for-senior-citizens` | ITR filing for senior citizens Chennai | ITR filing for senior citizens Chennai | pension, FD interest, TDS, refund, senior citizen exemption | WhatsApp Us | W7 | MP, P3, S4 | ITD: senior citizen return help | Audience page + checklist | Medium |
| 68 | ITR for rental income house property | G | Audience | MOFU | P2 | Blog (NEW) | `/blog/salary-hra-and-second-employer-itr` | HRA and second employer ITR | HRA claim in income tax return | HRA, Form 16, two employers, house property | WhatsApp Us | W2 | MP, A1, T1 | ITD: ITR-1 help; CBDT notes on TDS from salary | Explainer + worked examples | Medium |
| 69 | ITR for first-time filers | G | Audience | TOFU | P3 | Blog (NEW) | `/blog/itr-documents-checklist-chennai` | documents required for ITR filing | documents required for ITR filing, income tax return filing checklist | Form 16, rent receipts, bank interest certificate, broker statement, AIS | WhatsApp Us | W1 | MP, A1-A5, T2 | ITD: ITR filing prerequisites | Checklist + downloadable PDF | Low |
| 70 | ITR for students and homemakers with income | G | Audience | TOFU | P3 | Blog (NEW) | `/blog/itr-documents-checklist-chennai` | documents required for ITR filing | documents required for ITR filing, income tax return filing checklist | Form 16, rent receipts, bank interest certificate, broker statement, AIS | WhatsApp Us | W1 | MP, A1-A5, T2 | ITD: ITR filing prerequisites | Checklist + downloadable PDF | Low |
| 71 | ITR filing Coimbatore | H | Local regional | BOFU | P2 | Location section (existing page) | `/income-tax-consultant-coimbatore#itr-filing` | ITR filing Coimbatore | - | Coimbatore, served online | WhatsApp (online) | W11 | MP, A2, P5 | ITD | Local section | Medium |
| 72 | income tax return filing Madurai | H | Local regional | BOFU | P2 | Location section (existing page) | `/income-tax-consultant-madurai#itr-filing` | ITR filing Madurai | - | Madurai, served online | WhatsApp (online) | W1 | MP, A4 | ITD | Local section | Medium |
| 73 | ITR filing Tiruchirappalli Trichy | H | Local regional | BOFU | P2 | Location section (existing page) | `/income-tax-consultant-tiruchirappalli#itr-filing` | ITR filing Tiruchirappalli | - | Tiruchirappalli, served online | WhatsApp (online) | W1 | MP, A4 | ITD | Local section | Medium |
| 74 | ITR filing Salem | H | Local regional | BOFU | P3 | Section on MP | `/income-tax-return-filing-chennai#tamil-nadu-online` | ITR filing Tamil Nadu online | ITR filing Tiruppur, ITR filing Vellore | Salem, Tiruppur, Vellore, Hosur, Erode, Tirunelveli, served online | WhatsApp (online) | W1 | MP, L3-L5 | ITD | Short section, no new pages | Low |
| 75 | ITR filing Tiruppur | H | Local regional | BOFU | P3 | Section on MP | `/income-tax-return-filing-chennai#tamil-nadu-online` | ITR filing Tamil Nadu online | ITR filing Salem, ITR filing Vellore | Salem, Tiruppur, Vellore, Hosur, Erode, Tirunelveli, served online | WhatsApp (online) | W1 | MP, L3-L5 | ITD | Short section, no new pages | Low |
| 76 | ITR filing Vellore | H | Local regional | BOFU | P3 | Section on MP | `/income-tax-return-filing-chennai#tamil-nadu-online` | ITR filing Tamil Nadu online | ITR filing Salem, ITR filing Tiruppur | Salem, Tiruppur, Vellore, Hosur, Erode, Tirunelveli, served online | WhatsApp (online) | W1 | MP, L3-L5 | ITD | Short section, no new pages | Low |
| 77 | ITR filing Hosur | H | Local regional | BOFU | P3 | Section on MP | `/income-tax-return-filing-chennai#tamil-nadu-online` | ITR filing Tamil Nadu online | ITR filing Salem, ITR filing Tiruppur | Salem, Tiruppur, Vellore, Hosur, Erode, Tirunelveli, served online | WhatsApp (online) | W1 | MP, L3-L5 | ITD | Short section, no new pages | Low |
| 78 | ITR filing Erode | H | Local regional | BOFU | P3 | Section on MP | `/income-tax-return-filing-chennai#tamil-nadu-online` | ITR filing Tamil Nadu online | ITR filing Salem, ITR filing Tiruppur | Salem, Tiruppur, Vellore, Hosur, Erode, Tirunelveli, served online | WhatsApp (online) | W1 | MP, L3-L5 | ITD | Short section, no new pages | Low |
| 79 | ITR filing Tirunelveli | H | Local regional | BOFU | P3 | Section on MP | `/income-tax-return-filing-chennai#tamil-nadu-online` | ITR filing Tamil Nadu online | ITR filing Salem, ITR filing Tiruppur | Salem, Tiruppur, Vellore, Hosur, Erode, Tirunelveli, served online | WhatsApp (online) | W1 | MP, L3-L5 | ITD | Short section, no new pages | Low |
| 80 | income tax return filing Tamil Nadu online | H | Local regional | BOFU | P2 | Section on MP | `/income-tax-return-filing-chennai#tamil-nadu-online` | ITR filing Tamil Nadu online | ITR filing Salem, ITR filing Tiruppur | Salem, Tiruppur, Vellore, Hosur, Erode, Tirunelveli, served online | WhatsApp (online) | W1 | MP, L3-L5 | ITD | Short section, no new pages | Medium |
| 81 | வருமான வரி தாக்கல் சென்னை (varumana vari thakkal Chennai) | I | Tamil transactional | BOFU | P1 | Money page | `/income-tax-return-filing-chennai` | income tax return filing in Chennai | income tax return filing in Chennai, ITR filing Chennai | ITR, Form 16, AIS, Form 26AS, incometax.gov.in, Anna Nagar | WhatsApp Us | W1 | A1-A5, T1-T3, P1, P3, C1 | ITD e-filing portal (incometax.gov.in): ITR forms applicable | Service page, tools, 22 FAQs | Medium |
| 82 | ஐடிஆர் தாக்கல் செய்வது எப்படி (ITR thakkal seivathu eppadi) | I | Tamil informational | TOFU | P2 | Blog (NEW) | `/blog/itr-filing-process-chennai` | ITR filing process and cost drivers Chennai | what does ITR filing cost in Chennai, how much does a CA charge for ITR filing | process, documents, review, e-verify, no fee figures | WhatsApp Us | W1 | MP, C4, S3, S4 | firm's documented process | Process explainer | Low |
| 83 | வருமான வரி கணக்கு தாக்கல் ஆடிட்டர் சென்னை (varumana vari kanakku thakkal auditor Chennai) | I | Tamil transactional | BOFU | P2 | Money page | `/income-tax-return-filing-chennai` | income tax return filing in Chennai | income tax return filing in Chennai, ITR filing Chennai | ITR, Form 16, AIS, Form 26AS, incometax.gov.in, Anna Nagar | WhatsApp Us | W1 | A1-A5, T1-T3, P1, P3, C1 | ITD e-filing portal (incometax.gov.in): ITR forms applicable | Service page, tools, 22 FAQs | Medium |
| 84 | வருமான வரி ரீஃபண்ட் வரவில்லை (varumana vari refund varavillai) | I | Tamil urgent | BOFU | P2 | Problem page (NEW) | `/blog/income-tax-refund-delayed-chennai` | income tax refund delayed | income tax refund not received, how to check ITR refund status | refund status, bank validation, PAN-Aadhaar link, intimation | WhatsApp Us | W10 | MP, A5, P4, S4 | ITD: refund status help | Problem page + checklist | Medium |
| 85 | தாமதமாக வருமான வரி தாக்கல் (thaamathamaga varumana vari thakkal) | I | Tamil urgent | BOFU | P2 | Problem page (NEW) | `/blog/missed-itr-due-date-belated-return` | missed ITR due date belated return | missed ITR due date what to do, belated return late fee | belated return, late fee, interest, ITR-U | WhatsApp Us | W8 | MP, T3, P2, P5, S4 | ITD: belated return help | Problem page + decision tree | Medium |
| 86 | பழைய வரி முறை புதிய வரி முறை (pazhaiya vari murai pudhiya vari murai) | I | Tamil comparison | MOFU | P2 | Blog (upgrade) | `/blog/old-vs-new-tax-regime` | old vs new tax regime | old vs new tax regime, old vs new tax regime for salaried employees | old regime, new regime, rebate, standard deduction, HRA | WhatsApp Us | W12 | MP, T1, A1, S6 | ITD: tax slabs and regime pages | Comparison + helper embed | Medium |
| 87 | வருமான வரி கணக்கு தாக்கல் கடைசி தேதி (varumana vari kanakku thakkal kadaisi thethi) | I | Tamil informational | TOFU | P2 | Tool (NEW) | `/tools/itr-due-date-and-late-fee-reference` | ITR due date and late fee reference | last date to file ITR, ITR due date FY 2025-26 and tax year 2026-27 | due dates, late fee, belated, revised, ITR-U | WhatsApp Us | W8 | MP, P1, P2, S8 | ITD and CBDT notifications | Reference table | Medium |
| 88 | ITR இ-வெரிஃபை செய்வது எப்படி (ITR e-verify seivathu eppadi) | I | Tamil informational | TOFU | P3 | Blog (NEW) | `/blog/how-to-e-verify-income-tax-return` | how to e-verify ITR | ITR not e-verified what to do, how to e-verify ITR | e-verification, Aadhaar OTP, net banking, ITR-V | WhatsApp Us | W8 | MP, P1, P3 | ITD: e-verify return help page | How-to + HowTo schema | Low |
| 89 | முன்கூட்டிய வரி எப்போது கட்ட வேண்டும் (munkootiya vari eppothu katta vendum) | I | Tamil informational | TOFU | P3 | Blog (upgrade) | `/blog/advance-tax-deadlines` | advance tax due dates FY 2026-27 | advance tax vs self-assessment tax, advance tax due dates FY 2026-27 | advance tax, self-assessment tax, instalments, interest | WhatsApp Us | W5 | MP, A2, A4, T3, C1 | ITD: tax payments help page | Guide + deadline table | Low |
| 90 | ஃப்ரீலான்சர் வருமான வரி தாக்கல் (freelancer varumana vari thakkal) | I | Tamil audience | MOFU | P2 | Audience page (NEW) | `/income-tax-return-filing-for-freelancers-and-consultants` | ITR filing for freelancers Chennai | ITR filing for freelancers Chennai, ITR filing for freelancers with foreign clients | freelancer, presumptive income, advance tax, foreign clients, GST LUT | WhatsApp Us | W5 | MP, S5, S1, GST freelancer page | ITD: ITR-4 help | Audience page + checklist | Medium |
| 91 | who has to file an income tax return in India | J | Voice / AI question | TOFU | P2 | Money page | `/income-tax-return-filing-chennai` | income tax return filing in Chennai | income tax return filing in Chennai, ITR filing Chennai | ITR, Form 16, AIS, Form 26AS, incometax.gov.in, Anna Nagar | Read answer then WhatsApp | W1 | A1-A5, T1-T3, P1, P3, C1 | ITD e-filing portal (incometax.gov.in): ITR forms applicable | Service page, tools, 22 FAQs | Medium |
| 92 | what is the last date to file ITR | J | Voice / AI question | BOFU | P1 | Tool (NEW) | `/tools/itr-due-date-and-late-fee-reference` | ITR due date and late fee reference | last date to file ITR, ITR due date FY 2025-26 and tax year 2026-27 | due dates, late fee, belated, revised, ITR-U | Read answer then WhatsApp | W8 | MP, P1, P2, S8 | ITD and CBDT notifications | Reference table | High |
| 93 | can I file ITR after the due date | J | Voice / AI question | BOFU | P1 | Problem page (NEW) | `/blog/missed-itr-due-date-belated-return` | missed ITR due date belated return | missed ITR due date what to do, belated return late fee | belated return, late fee, interest, ITR-U | Read answer then WhatsApp | W8 | MP, T3, P2, P5, S4 | ITD: belated return help | Problem page + decision tree | High |
| 94 | which ITR form is applicable for salary and capital gains | J | Voice / AI question | MOFU | P2 | Tool (NEW) | `/tools/itr-form-selector` | ITR form selector | which ITR form should I file | ITR-1 to ITR-7, eligibility | Read answer then WhatsApp | W13 | MP, C2, C3, A1-A4 | ITD: ITR forms applicable | Interactive selector | Medium |
| 95 | how do I choose between the old and new tax regime | J | Voice / AI question | MOFU | P1 | Blog (upgrade) | `/blog/old-vs-new-tax-regime` | old vs new tax regime | old vs new tax regime, old vs new tax regime for salaried employees | old regime, new regime, rebate, standard deduction, HRA | Read answer then WhatsApp | W12 | MP, T1, A1, S6 | ITD: tax slabs and regime pages | Comparison + helper embed | High |
| 96 | how to check ITR refund status | J | Voice / AI question | BOFU | P2 | Problem page (NEW) | `/blog/income-tax-refund-delayed-chennai` | income tax refund delayed | income tax refund not received, வருமான வரி ரீஃபண்ட் வரவில்லை (varumana vari refund varavillai) | refund status, bank validation, PAN-Aadhaar link, intimation | Read answer then WhatsApp | W10 | MP, A5, P4, S4 | ITD: refund status help | Problem page + checklist | Medium |
| 97 | can I revise my ITR after filing | J | Voice / AI question | BOFU | P1 | Problem page (NEW) | `/blog/mistake-in-filed-itr-revised-return` | revised return mistake in filed ITR | revised return how to file, ITR filed with wrong details | revised return, ITR-U, rectification | Read answer then WhatsApp | W10 | MP, T3, P1, P4 | ITD: revised return help | Problem page + decision tree | High |
| 98 | do I need a CA to file ITR | J | Voice / AI question | MOFU | P2 | Blog (NEW) | `/blog/itr-filing-ca-vs-self-filing` | CA vs self-filing ITR | online ITR filing vs CA assisted filing, ITR through employer software vs CA | self-filing, employer software, CA-assisted filing, e-filing portal | Read answer then WhatsApp | W1 | MP, PX, T2 | ITD: how to file a return | Comparison + decision list | Medium |
| 99 | is a cash deposit of 10 lakh taxable | J | Voice / AI question | MOFU | P2 | Blog (upgrade) | `/blog/safe-cash-deposit-limit` | cash deposit limit income tax | cash deposit limit income tax | cash deposit, AIS, SFT reporting, Section 269ST (1961 Act), cash receipt limit | Read answer then WhatsApp | W6 | MP, A4, P4, C5 | ITD: AIS and TIS help pages | Guide + FAQ | Medium |
| 100 | how to file ITR for previous years I missed | J | Voice / AI question | BOFU | P1 | Problem page (NEW) | `/blog/file-itr-for-previous-years-not-filed` | file ITR for previous years | - | unfiled returns, belated, updated return, loan proof | Read answer then WhatsApp | W11 | MP, P1, P2, L3 | ITD: updated return help | Problem page + decision tree | High |

**Ownership summary (who ranks for what)**

| URL | Owns | Count |
|---|---|---|
| `/income-tax-return-filing-chennai` | income tax return filing in Chennai; ITR filing Chennai; income tax return CA Chennai; file income tax return online Chennai ... | 13 |
| `/income-tax-return-filing-chennai#chennai-areas` | ITR filing Anna Nagar; chartered accountant for income tax return near Anna Nagar; ITR filing T Nagar; ITR filing Velachery ... | 9 |
| `/income-tax-return-filing-for-salaried-employees` | income tax return filing for salaried Chennai; ITR filing for software engineers with ESOP | 2 |
| `/income-tax-return-filing-for-freelancers-and-consultants` | ITR filing for freelancers Chennai; ITR filing for freelancers with foreign clients; ITR for YouTubers and content creators; ஃப்ரீலான்சர் வருமான வரி தாக்கல் (freelancer varumana vari thakkal) | 4 |
| `/blog/itr-filing-process-chennai` | what does ITR filing cost in Chennai; how much does a CA charge for ITR filing; how long does ITR filing take; ஐடிஆர் தாக்கல் செய்வது எப்படி (ITR thakkal seivathu eppadi) | 4 |
| `/blog/itr-filing-ca-vs-self-filing` | online ITR filing vs CA assisted filing; ITR through employer software vs CA; do I need a CA to file ITR | 3 |
| `/blog/itr-documents-checklist-chennai` | documents required for ITR filing; income tax return filing checklist; ITR for first-time filers; ITR for students and homemakers with income | 4 |
| `/income-tax-return-filing-for-small-business-owners` | ITR filing for business income Chennai; ITR for small shop owners; ITR for F&O traders | 3 |
| `/income-tax-return-filing-for-doctors-and-professionals` | ITR filing for doctors Chennai; ITR for doctors under presumptive taxation | 2 |
| `/income-tax-return-filing-for-senior-citizens` | ITR filing for senior citizens Chennai; ITR for pensioners | 2 |
| `/tools/itr-due-date-and-late-fee-reference` | last date to file ITR; ITR due date FY 2025-26 and tax year 2026-27; வருமான வரி கணக்கு தாக்கல் கடைசி தேதி (varumana vari kanakku thakkal kadaisi thethi); what is the last date to file ITR | 4 |
| `/blog/missed-itr-due-date-belated-return` | missed ITR due date what to do; belated return late fee; file ITR after due date Chennai; தாமதமாக வருமான வரி தாக்கல் (thaamathamaga varumana vari thakkal) ... | 5 |
| `/blog/mistake-in-filed-itr-revised-return` | revised return how to file; ITR filed with wrong details; can I revise my ITR after filing | 3 |
| `/blog/income-tax-refund-delayed-chennai` | income tax refund not received; வருமான வரி ரீஃபண்ட் வரவில்லை (varumana vari refund varavillai); how to check ITR refund status | 3 |
| `/blog/how-to-e-verify-income-tax-return` | ITR not e-verified what to do; how to e-verify ITR; ITR இ-வெரிஃபை செய்வது எப்படி (ITR e-verify seivathu eppadi) | 3 |
| `/blog/ais-mismatch-tds-not-showing-26as` | AIS shows income I did not earn; TDS not showing in Form 26AS | 2 |
| `/blog/old-vs-new-tax-regime` | old vs new tax regime; old vs new tax regime for salaried employees; பழைய வரி முறை புதிய வரி முறை (pazhaiya vari murai pudhiya vari murai); how do I choose between the old and new tax regime | 4 |
| `/blog/itr-1-vs-itr-2` | ITR-1 vs ITR-2 | 1 |
| `/blog/itr-3-vs-itr-4` | ITR-3 vs ITR-4 | 1 |
| `/blog/presumptive-taxation-itr-4-explained` | presumptive taxation vs regular books of account; Section 44ADA vs 44AD (1961 Act terms) | 2 |
| `/blog/form-16-vs-ais-vs-form-26as` | Form 16 vs Form 26AS vs AIS | 1 |
| `/blog/advance-tax-deadlines` | advance tax vs self-assessment tax; advance tax due dates FY 2026-27; முன்கூட்டிய வரி எப்போது கட்ட வேண்டும் (munkootiya vari eppothu katta vendum) | 3 |
| `/tools/itr-form-selector` | which ITR form should I file; which ITR form is applicable for salary and capital gains | 2 |
| `/blog/safe-cash-deposit-limit` | cash deposit limit income tax; is a cash deposit of 10 lakh taxable | 2 |
| `/blog/income-tax-act-2025-itr-what-changes` | Income-tax Act 2025 ITR changes; tax year vs assessment year | 2 |
| `/blog/capital-gains-shares-mutual-funds-itr-2` | capital gains on shares in ITR | 1 |
| `/blog/salary-hra-and-second-employer-itr` | HRA claim in income tax return; ITR for rental income house property | 2 |
| `/chartered-accountant-omr-sholinganallur-chennai#itr-for-it-employees` | ITR filing OMR Sholinganallur; ITR filing for IT employees OMR | 2 |
| `/income-tax-consultant-coimbatore#itr-filing` | ITR filing Coimbatore | 1 |
| `/income-tax-consultant-madurai#itr-filing` | income tax return filing Madurai | 1 |
| `/income-tax-consultant-tiruchirappalli#itr-filing` | ITR filing Tiruchirappalli Trichy | 1 |
| `/income-tax-return-filing-chennai#tamil-nadu-online` | ITR filing Salem; ITR filing Tiruppur; ITR filing Vellore; ITR filing Hosur ... | 7 |
| `/blog/file-itr-for-previous-years-not-filed` | how to file ITR for previous years I missed | 1 |

**Held back on purpose (never primary here):** HNI consultant terms, NRI tax filing terms, income tax notice reply terms (143(1), 139(9), scrutiny, reassessment), appeal terms, TDS return filing, GST terms. They are linked from the relevant pages with descriptive anchors (Section 4.0).

## 4. Site architecture: 35 pages

### 4.0 The 35-page list and keyword ownership

**Count check:** 1 money page + 8 supporting + 5 comparison + 5 location + 5 audience + 5 problem + 3 tools + 1 FAQ hub + 1 case study + 1 process explainer = 35. Titles below end with " | C S Rushil" (13 characters) where the post template does not add the brand; all titles are 60 characters or fewer including that suffix. Meta descriptions are 155 characters or fewer.

| Code | Type | URL | Status | Ranks for (primary) |
|---|---|---|---|---|
| MP | Money page | `/income-tax-return-filing-chennai` | UPGRADE (URL kept) | income tax return filing in Chennai |
| S1 | Supporting article | `/blog/advance-tax-deadlines` | UPGRADE (owned) | advance tax due dates FY 2026-27 |
| S2 | Supporting article | `/blog/safe-cash-deposit-limit` | UPGRADE (owned) | cash deposit limit income tax |
| S3 | Supporting article | `/blog/itr-documents-checklist-chennai` | NEW | documents required for ITR filing |
| S4 | Supporting article | `/blog/how-to-e-verify-income-tax-return` | NEW | how to e-verify ITR |
| S5 | Supporting article | `/blog/presumptive-taxation-itr-4-explained` | NEW | presumptive taxation ITR-4 |
| S6 | Supporting article | `/blog/salary-hra-and-second-employer-itr` | NEW | HRA and second employer ITR |
| S7 | Supporting article | `/blog/capital-gains-shares-mutual-funds-itr-2` | NEW | capital gains shares mutual funds ITR |
| S8 | Supporting article | `/blog/income-tax-act-2025-itr-what-changes` | NEW | Income-tax Act 2025 ITR changes |
| C1 | Comparison | `/blog/old-vs-new-tax-regime` | UPGRADE (owned) | old vs new tax regime |
| C2 | Comparison | `/blog/itr-3-vs-itr-4` | NEW | ITR-3 vs ITR-4 |
| C3 | Comparison | `/blog/itr-1-vs-itr-2` | NEW | ITR-1 vs ITR-2 |
| C4 | Comparison | `/blog/itr-filing-ca-vs-self-filing` | NEW | CA vs self-filing ITR |
| C5 | Comparison | `/blog/form-16-vs-ais-vs-form-26as` | NEW | Form 16 vs AIS vs Form 26AS |
| L1 | Location section | `/income-tax-return-filing-chennai#chennai-areas` | NEW SECTION on money page | income tax return filing Anna Nagar Chennai |
| L2 | Location section | `/chartered-accountant-omr-sholinganallur-chennai#itr-for-it-employees` | NEW SECTION on existing OMR page | ITR filing OMR Sholinganallur |
| L3 | Location section | `/income-tax-consultant-coimbatore#itr-filing` | NEW SECTION on existing Coimbatore page | ITR filing Coimbatore |
| L4 | Location section | `/income-tax-consultant-madurai#itr-filing` | NEW SECTION on existing Madurai page | income tax return filing Madurai |
| L5 | Location section | `/income-tax-consultant-tiruchirappalli#itr-filing` | NEW SECTION on existing Tiruchirappalli page | ITR filing Tiruchirappalli Trichy |
| A1 | Audience page | `/income-tax-return-filing-for-salaried-employees` | NEW | income tax return filing for salaried Chennai |
| A2 | Audience page | `/income-tax-return-filing-for-freelancers-and-consultants` | NEW | ITR filing for freelancers Chennai |
| A3 | Audience page | `/income-tax-return-filing-for-doctors-and-professionals` | NEW | ITR filing for doctors Chennai |
| A4 | Audience page | `/income-tax-return-filing-for-small-business-owners` | NEW | ITR filing for business income Chennai |
| A5 | Audience page | `/income-tax-return-filing-for-senior-citizens` | NEW | ITR filing for senior citizens Chennai |
| P1 | Problem page | `/blog/missed-itr-due-date-belated-return` | NEW | missed ITR due date belated return |
| P2 | Problem page | `/blog/mistake-in-filed-itr-revised-return` | NEW | revised return mistake in filed ITR |
| P3 | Problem page | `/blog/income-tax-refund-delayed-chennai` | NEW | income tax refund delayed |
| P4 | Problem page | `/blog/ais-mismatch-tds-not-showing-26as` | NEW | AIS mismatch TDS not showing in 26AS |
| P5 | Problem page | `/blog/file-itr-for-previous-years-not-filed` | NEW | file ITR for previous years |
| T1 | Tool | `/tools/tax-regime-comparison-helper` | NEW | tax regime comparison helper |
| T2 | Tool | `/tools/itr-form-selector` | NEW | ITR form selector |
| T3 | Tool | `/tools/itr-due-date-and-late-fee-reference` | NEW | ITR due date and late fee reference |
| FAQ | FAQ hub | `/faq/income-tax-return-filing` | NEW | income tax return FAQs |
| CS | Case study | `/case-studies/itr-filing-engagement-template` | NEW (noindex until consent) | ITR filing case study |
| PX | Process explainer | `/blog/itr-filing-process-chennai` | NEW | ITR filing process and cost drivers Chennai |

**New URLs proposed (26 NEW pages, 0 new location URLs):** S3 to S8 (6 posts), C2 to C5 (4 posts), A1 to A5 (5 pages), P1 to P5 (5 posts), T1 to T3 (3 tools), FAQ hub (1), CS (1, noindex until consent), PX (1 post). **Existing pages upgraded:** MP, 3 owned posts (S1, S2, C1), the `/faq` page (one link line), and 4 host pages receive a section (OMR page, Coimbatore, Madurai, Tiruchirappalli).

**Why the 5 audience pages are not doorway pages.** Each uses a different ITR form set (ITR-1/2 for A1 and A5, ITR-3/4 for A2 to A4), different documents, a different tax scheme decision (salary and HRA; presumptive vs books; senior-citizen TDS and refunds) and links to different next pages. Gate before publishing each: it must have at least 60% copy not shared with the money page, its own FAQ set, one worked scenario with placeholders (no invented numbers) and a distinct tool or checklist. If an audience page fails the gate, merge it into the money page as a section instead.

**Why the tools live under `/tools/`.** The shared tools proposed by plan 01 also use `/tools/` (no `src/app/tools`, `src/app/faq/<topic>` or `src/app/case-studies` route exists today; other plans propose them too, so use the shared patterns `/tools/<name>`, `/faq/<topic>`, `/case-studies/<topic>` and create each route group once); the three ITR tools are distinct from the company-registration tools, so there is no duplication.

**Link-only scope guard (descriptive anchors to use):**

| Reader need | Anchor text | Target |
|---|---|---|
| High income, property capital gains, foreign assets, HUF | income tax consultant for HNIs in Chennai | `/income-tax-consultant-for-hni-chennai` |
| NRI or returning NRI | NRI tax services | `/nri-tax-services` |
| Notice already received | income tax notice reply in Chennai | `/income-tax-notice-reply-chennai` |
| Appeal before CIT(A) or ITAT | income tax assessments and appeals | `/income-tax-assessment-appeals-chennai` |
| TDS statements | TDS return filing in Chennai | `/tds-return-filing-chennai` |
| Property capital gains | capital gains on property sale: a guide | `/blog/capital-gains-tax-property-sale` |
| Foreign RSUs and Schedule FA | foreign RSU tax and Schedule FA: a guide | `/blog/foreign-rsu-tax-schedule-fa-chennai` |
| Joint development agreement tax | joint development agreement tax: a guide | `/blog/joint-development-agreement-tax-chennai` |
| NRI ITR | NRI ITR filing: a guide | `/blog/nri-itr-filing` |

### 4.1 Money page and process explainer

**MP: `/income-tax-return-filing-chennai`** (UPGRADE (URL kept))

| Field | Detail |
|---|---|
| SEO title | Income Tax Return Filing in Chennai | C S Rushil & Co. (54 chars) |
| Meta description | ITR filing in Chennai for salaried people, professionals, freelancers and small businesses: form, regime, AIS check, due dates. WhatsApp or book a call. (152 chars) |
| H1 | Income Tax Return Filing in Chennai |
| H2/H3 outline | Full 11-part blueprint in Section 5 (H2s: who needs to file; who this is for; what is included; process; ITR form; regime; due dates; late/wrong routes; refunds; documents; problems solved; Chennai and Tamil Nadu coverage; why us; FAQs) |
| Primary keyword | income tax return filing in Chennai |
| Secondary keywords | ITR filing Chennai; income tax return CA Chennai; file income tax return online Chennai; chartered accountant for ITR filing Chennai |
| Intent | Transactional, BOFU |
| Word count | 3,200-3,800 |
| Angle | Chennai CA firm that reconciles AIS first, with tools above the fold and a visible verify note |
| Internal links | A1-A5, P1-P5, T1-T3, C1, S1, S3, S8; link-only: HNI, NRI, notice, direct-tax |
| External links | ITD ITR forms page; CBDT notifications; ACT25 text |
| Schema type | Service + HowTo + FAQPage + BreadcrumbList; AccountingService (Section 8) |
| CTA placement | Hero WhatsApp Us + Book; after regime helper; after each table; sticky mobile bar; footer block |
| WhatsApp message | W1 (text in Section 9.7) |
| Lead magnet | Regime helper, ITR form selector, document checklist PDF |
| Enquiry trigger | Reader has a due date, a Form 16 or an AIS mismatch |

**PX: `/blog/itr-filing-process-chennai`** (NEW)

| Field | Detail |
|---|---|
| SEO title | How Our ITR Filing Process Works in Chennai | C S Rushil (56 chars) |
| Meta description | How ITR filing works with a chartered accountant in Chennai: documents, AIS check, form and regime choice, review, e-verify, and what drives the cost. (150 chars) |
| H1 | How ITR Filing Works With a Chartered Accountant in Chennai |
| H2/H3 outline | H2 The six steps (from the money page); H2 What you send; H2 What we check; H2 What affects the cost (drivers, no fee figures); H2 How long it takes (FIRM-FILL ranges only if documented); H2 After filing; H2 FAQs |
| Primary keyword | ITR filing process and cost drivers Chennai |
| Secondary keywords | what does ITR filing cost in Chennai; how long does ITR filing take; how much does a CA charge for ITR filing |
| Intent | Commercial, MOFU |
| Word count | 1,200-1,500 |
| Angle | Answers the cost and time questions honestly without fee figures (ICAI) |
| Internal links | MP, C4, S3, S4 |
| External links | firm's documented process |
| Schema type | BlogPosting + HowTo + FAQPage + BreadcrumbList |
| CTA placement | After steps; end block |
| WhatsApp message | W1 (text in Section 9.7) |
| Lead magnet | Intake form preview |
| Enquiry trigger | Reader asks about cost or time |

### 4.2 Supporting articles (S1 to S8) and comparison pages (C1 to C5)

**S1: `/blog/advance-tax-deadlines`** (UPGRADE (owned))

| Field | Detail |
|---|---|
| SEO title | Advance Tax Due Dates FY 2026-27 Explained | C S Rushil (55 chars) |
| Meta description | Who must pay advance tax, the instalment dates and how to avoid interest for freelancers, consultants and small businesses. Dates carry a verify label. (151 chars) |
| H1 | Advance Tax Due Dates for FY 2026-27: A Practical Guide |
| H2/H3 outline | H2 Who pays advance tax; H2 Instalment table with cumulative share [V]; H2 Salaried people with side income; H2 Estimating variable income; H2 Interest for a shortfall [V]; H2 New-Act mapping (Sections 423 to 425 [V]); H2 Checklist; H2 FAQs |
| Primary keyword | advance tax due dates FY 2026-27 |
| Secondary keywords | advance tax vs self-assessment tax; advance tax for freelancers; advance tax interest |
| Intent | Informational, TOFU to MOFU |
| Word count | 1,200-1,500 |
| Angle | Turn a 516-word post into a table-led guide with a worked estimate template (no invented numbers) |
| Internal links | MP (income tax return filing in Chennai), A2, A4, T3, C1; link-only HNI page for RSU or property spikes |
| External links | ITD tax payments help page; CBDT notifications |
| Schema type | BlogPosting + FAQPage + BreadcrumbList |
| CTA placement | Under intro; after table; end block |
| WhatsApp message | W5 (text in Section 9.7) |
| Lead magnet | Advance tax instalment tracker (sheet) |
| Enquiry trigger | Reader has income outside salary or a capital gain |

**S2: `/blog/safe-cash-deposit-limit`** (UPGRADE (owned))

| Field | Detail |
|---|---|
| SEO title | Cash Deposit Limits and Income Tax Reporting | C S Rushil (57 chars) |
| Meta description | No single legal cash deposit ceiling exists, but reporting limits and cash-receipt rules matter. See what banks report and how to document your source. (151 chars) |
| H1 | How Much Cash Can You Deposit in Your Bank Account? |
| H2/H3 outline | H2 Short answer; H2 What banks report [V]; H2 What the return asks about deposits [V]; H2 Cash receipt restriction (1961 Act s.269ST, new-Act number [V]); H2 Documenting the source; H2 Small-business checklist; H2 FAQs |
| Primary keyword | cash deposit limit income tax |
| Secondary keywords | is a cash deposit of 10 lakh taxable; cash deposit AIS; cash receipt limit 2 lakh |
| Intent | Informational, TOFU |
| Word count | 1,100-1,400 |
| Angle | Fix the thresholds: reconcile the post (10 lakh savings, 50 lakh current reporting) with the money page (1 crore current, 50 lakh savings filing trigger) and label both [V] |
| Internal links | MP, A4, P4, C5; link-only: notice reply page for a received notice |
| External links | ITD AIS and TIS help; ACT25 text |
| Schema type | BlogPosting + FAQPage + BreadcrumbList |
| CTA placement | After the short answer; end block |
| WhatsApp message | W6 (text in Section 9.7) |
| Lead magnet | Cash source documentation checklist |
| Enquiry trigger | Reader deposits or receives cash regularly |

**S3: `/blog/itr-documents-checklist-chennai`** (NEW)

| Field | Detail |
|---|---|
| SEO title | Documents Needed for ITR Filing: Checklist | C S Rushil (55 chars) |
| Meta description | Checklist of documents for ITR filing by income type: salary, interest, rent, shares, business and professional income. Verify items for your year. (147 chars) |
| H1 | Documents Needed for Income Tax Return Filing |
| H2/H3 outline | H2 Core documents for everyone; H2 Salaried; H2 Interest and rent; H2 Shares and funds; H2 Business and professionals; H2 Check against AIS; H2 Downloadable checklist; H2 FAQs |
| Primary keyword | documents required for ITR filing |
| Secondary keywords | income tax return filing checklist; ITR for first-time filers; Form 16 documents |
| Intent | Commercial, MOFU |
| Word count | 1,200-1,500 |
| Angle | Checklist by income type with a PDF; shows what the firm checks first |
| Internal links | MP, A1-A5, T2, C5 |
| External links | ITD ITR filing prerequisites |
| Schema type | BlogPosting + FAQPage + BreadcrumbList |
| CTA placement | Top of page; PDF gate optional (WhatsApp the checklist) |
| WhatsApp message | W14 (text in Section 9.7) |
| Lead magnet | Document checklist PDF |
| Enquiry trigger | Reader is about to start filing |

**S4: `/blog/how-to-e-verify-income-tax-return`** (NEW)

| Field | Detail |
|---|---|
| SEO title | How to E-Verify Your ITR After Filing | C S Rushil (50 chars) |
| Meta description | E-verify your income tax return with Aadhaar OTP, net banking or other portal options. See the verification time limit and what happens if you miss it. (151 chars) |
| H1 | How to E-Verify Your Income Tax Return |
| H2/H3 outline | H2 Why e-verification matters; H2 Ways to e-verify [V]; H2 Time limit [V]; H2 Step by step; H2 If the window is missed [V]; H2 Common errors; H2 FAQs |
| Primary keyword | how to e-verify ITR |
| Secondary keywords | ITR not e-verified; ITR-V; e-verify Aadhaar OTP |
| Intent | Informational, TOFU |
| Word count | 1,000-1,300 |
| Angle | Plain steps; HowTo schema only for steps that are visible |
| Internal links | MP, P1, P3 |
| External links | ITD e-verify return help page |
| Schema type | BlogPosting + HowTo + FAQPage + BreadcrumbList |
| CTA placement | After step list; end block |
| WhatsApp message | W8 (text in Section 9.7) |
| Lead magnet | None (links to P1 for missed window) |
| Enquiry trigger | Reader filed but has not verified |

**S5: `/blog/presumptive-taxation-itr-4-explained`** (NEW)

| Field | Detail |
|---|---|
| SEO title | Presumptive Taxation for ITR-4: Who Can Use It | C S Rushil (59 chars) |
| Meta description | Presumptive income for small businesses, professionals and freelancers: eligibility, ITR-4 and when regular books are better. Limits are verify items. (150 chars) |
| H1 | Presumptive Taxation and ITR-4: Who Can Use It and When Not to |
| H2/H3 outline | H2 What presumptive means; H2 Eligibility and limits (1961 Act ss.44AD, 44ADA, 44AE and new-Act mapping) [V]; H2 ITR-4 vs ITR-3 summary (links to C2); H2 Doctors and professionals; H2 Small traders; H2 When books are safer; H2 FAQs |
| Primary keyword | presumptive taxation ITR-4 |
| Secondary keywords | Section 44ADA vs 44AD; presumptive income freelancers; presumptive vs books |
| Intent | Informational, MOFU |
| Word count | 1,300-1,600 |
| Angle | Decision-led: three questions decide the scheme |
| Internal links | MP, A2, A3, A4, C2, T2 |
| External links | ACT25 text; ITD ITR-4 help |
| Schema type | BlogPosting + FAQPage + BreadcrumbList |
| CTA placement | After decision box; end block |
| WhatsApp message | W4 (text in Section 9.7) |
| Lead magnet | Scheme decision checklist |
| Enquiry trigger | Reader is choosing ITR-3 or ITR-4 |

**S6: `/blog/salary-hra-and-second-employer-itr`** (NEW)

| Field | Detail |
|---|---|
| SEO title | HRA, Two Employers and ITR: A Salaried Guide | C S Rushil (57 chars) |
| Meta description | How to file ITR with HRA, house property, a job change or two Form 16s: reconcile TDS, choose the regime and avoid double-counting salary. (138 chars) |
| H1 | Salary, HRA and a Second Employer: How to File Your ITR |
| H2/H3 outline | H2 Two Form 16s; H2 HRA and rent proofs [V]; H2 Home loan and house property [V]; H2 Employer's regime vs your regime; H2 TDS reconciliation; H2 Rental income received; H2 FAQs |
| Primary keyword | HRA and second employer ITR |
| Secondary keywords | ITR for rental income house property; HRA claim income tax return; two Form 16 |
| Intent | Informational, MOFU |
| Word count | 1,200-1,500 |
| Angle | Worked scenarios with no invented amounts (labelled examples with placeholders) |
| Internal links | MP, A1, T1, C1 |
| External links | ITD ITR-1 help |
| Schema type | BlogPosting + FAQPage + BreadcrumbList |
| CTA placement | After scenarios; end block |
| WhatsApp message | W2 (text in Section 9.7) |
| Lead magnet | Salaried documents checklist |
| Enquiry trigger | Reader changed jobs or pays rent |

**S7: `/blog/capital-gains-shares-mutual-funds-itr-2`** (NEW)

| Field | Detail |
|---|---|
| SEO title | Capital Gains on Shares and Funds in Your ITR | C S Rushil (58 chars) |
| Meta description | How to report share and mutual fund gains and losses in ITR-2 or ITR-3, match your broker report with AIS and carry forward losses. Rates are verify items. (155 chars) |
| H1 | Capital Gains on Shares and Mutual Funds: Reporting in Your ITR |
| H2/H3 outline | H2 Which form; H2 Short vs long term and holding period [V]; H2 Broker P&L vs AIS; H2 Losses and carry-forward [V]; H2 F&O is business income [V]; H2 Foreign shares (link-only); H2 Property sales (link-only); H2 FAQs |
| Primary keyword | capital gains shares mutual funds ITR |
| Secondary keywords | capital gains on shares in ITR; F&O ITR-3; mutual fund redemption ITR |
| Intent | Informational, MOFU |
| Word count | 1,300-1,600 |
| Angle | General listed-security cases only; property and foreign cases route to their guides |
| Internal links | MP, A1, T2; link-only: capital-gains-tax-property-sale post, foreign-rsu-tax-schedule-fa-chennai post, HNI page |
| External links | ITD ITR-2 help; ACT25 text |
| Schema type | BlogPosting + FAQPage + BreadcrumbList |
| CTA placement | After the form box; end block |
| WhatsApp message | W9 (text in Section 9.7) |
| Lead magnet | Capital gains statements checklist |
| Enquiry trigger | Reader sold shares or funds in the year |

**S8: `/blog/income-tax-act-2025-itr-what-changes`** (NEW)

| Field | Detail |
|---|---|
| SEO title | Income-tax Act 2025: What Changes in Your ITR | C S Rushil (58 chars) |
| Meta description | Income-tax Act 2025 and your return: tax year replaces assessment year, FY 2025-26 stays under the 1961 Act. Section and form mapping is a verify item. (151 chars) |
| H1 | Income-tax Act, 2025 and Your Return: What Changes and What Does Not |
| H2/H3 outline | H2 Which Act applies to which return [V]; H2 Tax year vs assessment year; H2 Mapping table: old term, new term, status [V]; H2 What salaried people will notice; H2 How to read a notice that cites new numbers (link-only); H2 FAQs |
| Primary keyword | Income-tax Act 2025 ITR changes |
| Secondary keywords | tax year vs assessment year; Section 263 returns; Sections 423 to 425 |
| Intent | Informational, TOFU |
| Word count | 1,200-1,500 |
| Angle | The reference page AI engines and readers can cite for old-to-new term mapping |
| Internal links | MP, C1, T3, P1; link-only: notice reply page |
| External links | ACT25 text; CBDT notifications |
| Schema type | BlogPosting + FAQPage + BreadcrumbList |
| CTA placement | End block |
| WhatsApp message | W1 (text in Section 9.7) |
| Lead magnet | Old-to-new mapping table (sheet) |
| Enquiry trigger | Reader met unfamiliar numbers on a form or notice |

**C1: `/blog/old-vs-new-tax-regime`** (UPGRADE (owned))

| Field | Detail |
|---|---|
| SEO title | Old vs New Tax Regime: Which Suits You? | C S Rushil (52 chars) |
| Meta description | Compare the old and new tax regime for salaried people and small businesses: slabs, rebate, deductions and who can switch. Figures are verify items. (148 chars) |
| H1 | Old vs New Tax Regime: Which One Suits You? |
| H2/H3 outline | H2 Short answer; H2 Side-by-side table [V]; H2 What deductions tip it (list only, no fixed rule of thumb); H2 Salaried: switch each year [V]; H2 Business income: limited switching [V]; H2 Regime helper (embed T1); H2 FAQs |
| Primary keyword | old vs new tax regime |
| Secondary keywords | old vs new tax regime for salaried employees; which regime to choose; old regime deductions |
| Intent | Comparison, MOFU |
| Word count | 1,400-1,700 |
| Angle | Replace the 'three to four lakh' rule of thumb (blog) vs 'four to five lakh' (money page) conflict by embedding the helper |
| Internal links | MP, T1, A1, S6, S8 |
| External links | ITD tax slabs and regime pages |
| Schema type | BlogPosting + FAQPage + BreadcrumbList |
| CTA placement | Above the fold link to T1; after table; end block |
| WhatsApp message | W12 (text in Section 9.7) |
| Lead magnet | Regime comparison helper (T1) |
| Enquiry trigger | Reader must declare a regime to an employer or in a return |

**C2: `/blog/itr-3-vs-itr-4`** (NEW)

| Field | Detail |
|---|---|
| SEO title | ITR-3 vs ITR-4: Which Form Fits Your Income? | C S Rushil (57 chars) |
| Meta description | ITR-3 or ITR-4? Compare presumptive income and regular books for professionals, freelancers and small traders, with eligibility points marked to verify. (152 chars) |
| H1 | ITR-3 vs ITR-4: Which Form Should You File? |
| H2/H3 outline | H2 Short answer; H2 Comparison table [V]; H2 Who cannot use ITR-4 [V]; H2 Books and audit consequences; H2 Switching schemes; H2 Examples by profession; H2 FAQs |
| Primary keyword | ITR-3 vs ITR-4 |
| Secondary keywords | ITR-4 eligibility; presumptive vs regular books; ITR form for professionals |
| Intent | Comparison, MOFU |
| Word count | 1,200-1,500 |
| Angle | One decision table plus three professions |
| Internal links | MP, A3, A4, S5, T2 |
| External links | ITD ITR-3 and ITR-4 help |
| Schema type | BlogPosting + FAQPage + BreadcrumbList |
| CTA placement | After table; end block |
| WhatsApp message | W13 (text in Section 9.7) |
| Lead magnet | ITR form selector (T2) |
| Enquiry trigger | Reader has business or professional income |

**C3: `/blog/itr-1-vs-itr-2`** (NEW)

| Field | Detail |
|---|---|
| SEO title | ITR-1 vs ITR-2: Which Form Should You File? | C S Rushil (56 chars) |
| Meta description | ITR-1 or ITR-2? See who can use each form: salary, capital gains, more than one house, foreign assets or directors. Limits are verify items. (140 chars) |
| H1 | ITR-1 vs ITR-2: Which Form Should You File? |
| H2/H3 outline | H2 Short answer; H2 Comparison table [V]; H2 Capital gains, foreign assets and directors; H2 Wrong form consequences (link-only notice page); H2 New-Act mapping note [V]; H2 FAQs |
| Primary keyword | ITR-1 vs ITR-2 |
| Secondary keywords | ITR-1 Sahaj eligibility; which form for salary and capital gains; ITR-2 for salaried |
| Intent | Comparison, MOFU |
| Word count | 1,100-1,400 |
| Angle | Eligibility as yes/no questions |
| Internal links | MP, A1, T2, S7 |
| External links | ITD ITR-1 and ITR-2 help |
| Schema type | BlogPosting + FAQPage + BreadcrumbList |
| CTA placement | After table; end block |
| WhatsApp message | W13 (text in Section 9.7) |
| Lead magnet | ITR form selector (T2) |
| Enquiry trigger | Reader has salary plus other items |

**C4: `/blog/itr-filing-ca-vs-self-filing`** (NEW)

| Field | Detail |
|---|---|
| SEO title | CA-Assisted ITR vs Self-Filing: How to Decide | C S Rushil (58 chars) |
| Meta description | Should you file your own return or use a chartered accountant? A neutral checklist of when self-filing is fine and when professional review helps. (146 chars) |
| H1 | CA-Assisted ITR Filing vs Self-Filing: How to Decide |
| H2/H3 outline | H2 Short answer; H2 Comparison table (effort, risk, review, support, cost drivers without fees); H2 When self-filing is fine; H2 When to get help; H2 What to ask any provider; H2 FAQs |
| Primary keyword | CA vs self-filing ITR |
| Secondary keywords | online ITR filing vs CA assisted filing; do I need a CA to file ITR; ITR through employer software vs CA |
| Intent | Comparison, MOFU |
| Word count | 1,100-1,400 |
| Angle | Neutral, honest guide: tells some readers self-filing is fine, which builds trust and AI citation value |
| Internal links | MP, PX, T2, C5 |
| External links | ITD how-to-file pages |
| Schema type | BlogPosting + FAQPage + BreadcrumbList |
| CTA placement | End block and after 'when to get help' |
| WhatsApp message | W1 (text in Section 9.7) |
| Lead magnet | Self-check quiz (3 questions) |
| Enquiry trigger | Reader compares filing options |

**C5: `/blog/form-16-vs-ais-vs-form-26as`** (NEW)

| Field | Detail |
|---|---|
| SEO title | Form 16 vs AIS vs Form 26AS: What to Use | C S Rushil (53 chars) |
| Meta description | Form 16, AIS, TIS and Form 26AS explained: what each shows, which to trust and how to reconcile them before you file. Portal details are verify items. (150 chars) |
| H1 | Form 16 vs AIS vs Form 26AS: What Each One Shows |
| H2/H3 outline | H2 Short answer; H2 Comparison table; H2 Common differences and causes; H2 Reconcile in four steps; H2 AIS feedback [V]; H2 FAQs |
| Primary keyword | Form 16 vs AIS vs Form 26AS |
| Secondary keywords | Form 16 vs 26AS; what is AIS and TIS; AIS vs 26AS |
| Intent | Comparison, MOFU |
| Word count | 1,200-1,500 |
| Angle | Lines up the three documents; the first step of the firm's process |
| Internal links | MP, P4, S3, A1 |
| External links | ITD AIS and TIS help pages |
| Schema type | BlogPosting + FAQPage + BreadcrumbList |
| CTA placement | After table; end block |
| WhatsApp message | W10 (text in Section 9.7) |
| Lead magnet | Reconciliation worksheet |
| Enquiry trigger | Reader sees a mismatch between documents |

### 4.3 Location sections (L1 to L5) and audience pages (A1 to A5)

**L1: `/income-tax-return-filing-chennai#chennai-areas`** (NEW SECTION on money page)

| Field | Detail |
|---|---|
| SEO title | ITR filing in Anna Nagar and nearby Chennai (43 chars) |
| Meta description | No change to host meta. Optional host-description addition: 'also ITR filing for individuals and businesses, served online'. (124 chars) |
| H1 | ITR filing in Anna Nagar and nearby Chennai |
| H2/H3 outline | H2 ITR filing in Anna Nagar and nearby Chennai; H3 Who we serve here; H3 How filing works online or in person; H3 Documents; H3 Links to the right audience page; FAQs x3 (visible, 40-80 words). Host-page owner must agree; do not touch the HNI copy |
| Primary keyword | income tax return filing Anna Nagar Chennai |
| Secondary keywords | chartered accountant for income tax return near Anna Nagar; ITR filing T Nagar; ITR filing Velachery; ITR filing Porur |
| Intent | Local transactional, BOFU |
| Word count | 350-500 (section) |
| Angle | Local section; content is the local service detail: Anna Nagar office, areas served in person or online, links to the 12 existing /chartered-accountant-<area>-chennai pages, in-person visit details (Mon-Sat 9:30 AM-6:30 PM) |
| Internal links | MP, A1-A5, P1, T1; link-only HNI page |
| External links | ITD (incometax.gov.in) |
| Schema type | No new schema; host page FAQ schema only if the section FAQs are visible |
| CTA placement | End of section: WhatsApp Us; Call |
| WhatsApp message | W1 (text in Section 9.7) |
| Lead magnet | Document checklist PDF |
| Enquiry trigger | Reader searched with a place name |

**L2: `/chartered-accountant-omr-sholinganallur-chennai#itr-for-it-employees`** (NEW SECTION on existing OMR page)

| Field | Detail |
|---|---|
| SEO title | ITR filing for IT employees in OMR and Sholinganallur (53 chars) |
| Meta description | No change to host meta. Optional host-description addition: 'also ITR filing for individuals and businesses, served online'. (124 chars) |
| H1 | ITR filing for IT employees in OMR and Sholinganallur |
| H2/H3 outline | H2 ITR filing for IT employees in OMR and Sholinganallur; H3 Who we serve here; H3 How filing works online or in person; H3 Documents; H3 Links to the right audience page; FAQs x3 (visible, 40-80 words). Host-page owner must agree; do not touch the HNI copy |
| Primary keyword | ITR filing OMR Sholinganallur |
| Secondary keywords | ITR filing for IT employees OMR; ESOP and RSU reporting (link-only guide) |
| Intent | Local transactional, BOFU |
| Word count | 350-500 (section) |
| Angle | Local section; content is the local service detail: IT-employee return content: Form 16 from company payroll, ESOP and fund income, HRA and regime; online service from Anna Nagar |
| Internal links | MP, A1-A5, P1, T1; link-only HNI page |
| External links | ITD (incometax.gov.in) |
| Schema type | No new schema; host page FAQ schema only if the section FAQs are visible |
| CTA placement | End of section: WhatsApp Us; Call |
| WhatsApp message | W1 (text in Section 9.7) |
| Lead magnet | Document checklist PDF |
| Enquiry trigger | Reader searched with a place name |

**L3: `/income-tax-consultant-coimbatore#itr-filing`** (NEW SECTION on existing Coimbatore page)

| Field | Detail |
|---|---|
| SEO title | ITR filing for salaried people and professionals in Coimbatore (62 chars) |
| Meta description | No change to host meta. Optional host-description addition: 'also ITR filing for individuals and businesses, served online'. (124 chars) |
| H1 | ITR filing for salaried people and professionals in Coimbatore |
| H2/H3 outline | H2 ITR filing for salaried people and professionals in Coimbatore; H3 Who we serve here; H3 How filing works online or in person; H3 Documents; H3 Links to the right audience page; FAQs x3 (visible, 40-80 words). Host-page owner must agree; do not touch the HNI copy |
| Primary keyword | ITR filing Coimbatore |
| Secondary keywords | income tax return filing Coimbatore online; unfiled returns Coimbatore |
| Intent | Local transactional, BOFU |
| Word count | 350-500 (section) |
| Angle | Local section; content is the local service detail: Online process, document sharing, video call, link to MP and A1 to A4 |
| Internal links | MP, A1-A5, P1, T1; link-only HNI page |
| External links | ITD (incometax.gov.in) |
| Schema type | No new schema; host page FAQ schema only if the section FAQs are visible |
| CTA placement | End of section: WhatsApp Us; Call |
| WhatsApp message | W1 (text in Section 9.7) |
| Lead magnet | Document checklist PDF |
| Enquiry trigger | Reader searched with a place name |

**L4: `/income-tax-consultant-madurai#itr-filing`** (NEW SECTION on existing Madurai page)

| Field | Detail |
|---|---|
| SEO title | ITR filing for businesses and professionals in Madurai (54 chars) |
| Meta description | No change to host meta. Optional host-description addition: 'also ITR filing for individuals and businesses, served online'. (124 chars) |
| H1 | ITR filing for businesses and professionals in Madurai |
| H2/H3 outline | H2 ITR filing for businesses and professionals in Madurai; H3 Who we serve here; H3 How filing works online or in person; H3 Documents; H3 Links to the right audience page; FAQs x3 (visible, 40-80 words). Host-page owner must agree; do not touch the HNI copy |
| Primary keyword | income tax return filing Madurai |
| Secondary keywords | ITR filing Madurai online; small business ITR Madurai |
| Intent | Local transactional, BOFU |
| Word count | 350-500 (section) |
| Angle | Local section; content is the local service detail: Online process for traders and professionals; link to A4 and A3 |
| Internal links | MP, A1-A5, P1, T1; link-only HNI page |
| External links | ITD (incometax.gov.in) |
| Schema type | No new schema; host page FAQ schema only if the section FAQs are visible |
| CTA placement | End of section: WhatsApp Us; Call |
| WhatsApp message | W1 (text in Section 9.7) |
| Lead magnet | Document checklist PDF |
| Enquiry trigger | Reader searched with a place name |

**L5: `/income-tax-consultant-tiruchirappalli#itr-filing`** (NEW SECTION on existing Tiruchirappalli page)

| Field | Detail |
|---|---|
| SEO title | ITR filing for individuals and businesses in Tiruchirappalli (60 chars) |
| Meta description | No change to host meta. Optional host-description addition: 'also ITR filing for individuals and businesses, served online'. (124 chars) |
| H1 | ITR filing for individuals and businesses in Tiruchirappalli |
| H2/H3 outline | H2 ITR filing for individuals and businesses in Tiruchirappalli; H3 Who we serve here; H3 How filing works online or in person; H3 Documents; H3 Links to the right audience page; FAQs x3 (visible, 40-80 words). Host-page owner must agree; do not touch the HNI copy |
| Primary keyword | ITR filing Tiruchirappalli Trichy |
| Secondary keywords | income tax return filing Trichy online |
| Intent | Local transactional, BOFU |
| Word count | 350-500 (section) |
| Angle | Local section; content is the local service detail: Online process, link to A1 and A4 |
| Internal links | MP, A1-A5, P1, T1; link-only HNI page |
| External links | ITD (incometax.gov.in) |
| Schema type | No new schema; host page FAQ schema only if the section FAQs are visible |
| CTA placement | End of section: WhatsApp Us; Call |
| WhatsApp message | W1 (text in Section 9.7) |
| Lead magnet | Document checklist PDF |
| Enquiry trigger | Reader searched with a place name |

**A1: `/income-tax-return-filing-for-salaried-employees`** (NEW)

| Field | Detail |
|---|---|
| SEO title | ITR Filing for Salaried Employees in Chennai | C S Rushil (57 chars) |
| Meta description | ITR filing for salaried employees in Chennai: Form 16, HRA, regime choice, ESOPs and mutual funds, AIS check. WhatsApp us or book a 15-minute call. (147 chars) |
| H1 | ITR Filing for Salaried Employees in Chennai |
| H2/H3 outline | H2 Who this is for; H2 ITR-1 or ITR-2; H2 Documents; H2 HRA, loan and regime; H2 ESOP and mutual fund income (link-only RSU guide); H2 Process; H2 Common problems; H2 FAQs (6) |
| Primary keyword | income tax return filing for salaried Chennai |
| Secondary keywords | ITR filing for software engineers with ESOP; ITR filing OMR; HRA ITR |
| Intent | Transactional, BOFU |
| Word count | 1,300-1,600 |
| Angle | Salaried, ITR-1 and ITR-2 only; unique because of Form 16, HRA, ESOP and regime content absent from other audience pages |
| Internal links | MP, S6, S7, C1, C3, T1, T2; link-only HNI and RSU guide |
| External links | ITD ITR-1 and ITR-2 help |
| Schema type | Service + FAQPage + BreadcrumbList |
| CTA placement | Hero; after documents; end |
| WhatsApp message | W2 (text in Section 9.7) |
| Lead magnet | Salaried checklist, regime helper |
| Enquiry trigger | Reader has Form 16 in hand |

**A2: `/income-tax-return-filing-for-freelancers-and-consultants`** (NEW)

| Field | Detail |
|---|---|
| SEO title | ITR Filing for Freelancers in Chennai | C S Rushil (50 chars) |
| Meta description | ITR filing for freelancers and consultants in Chennai: presumptive income, books, advance tax and foreign client receipts. WhatsApp us or book a call. (150 chars) |
| H1 | ITR Filing for Freelancers and Consultants in Chennai |
| H2/H3 outline | H2 Who this is for; H2 Presumptive or books (ITR-4 or ITR-3) [V]; H2 Foreign client receipts and documents; H2 Advance tax; H2 GST and LUT (link-only); H2 Documents; H2 Process; H2 FAQs (6) |
| Primary keyword | ITR filing for freelancers Chennai |
| Secondary keywords | ITR filing for freelancers with foreign clients; ITR for YouTubers; freelancer income tax |
| Intent | Transactional, BOFU |
| Word count | 1,300-1,600 |
| Angle | Freelance scheme choice and advance tax; unique forms and documents |
| Internal links | MP, S5, S1, C2, T2; GST freelancer page (link-only) |
| External links | ITD ITR-3 and ITR-4 help |
| Schema type | Service + FAQPage + BreadcrumbList |
| CTA placement | Hero; after scheme box; end |
| WhatsApp message | W5 (text in Section 9.7) |
| Lead magnet | Freelancer documents checklist |
| Enquiry trigger | Reader invoices clients without a payroll |

**A3: `/income-tax-return-filing-for-doctors-and-professionals`** (NEW)

| Field | Detail |
|---|---|
| SEO title | ITR Filing for Doctors and Professionals | C S Rushil (53 chars) |
| Meta description | ITR filing for doctors and professionals in Chennai: presumptive income or books, TDS on fees, tax audit limits. WhatsApp or book a call. (137 chars) |
| H1 | ITR Filing for Doctors and Professionals in Chennai |
| H2/H3 outline | H2 Who this is for; H2 Presumptive or books [V]; H2 TDS on professional fees; H2 When a tax audit applies [V] (link-only tax audit page); H2 Documents; H2 Process; H2 FAQs (6) |
| Primary keyword | ITR filing for doctors Chennai |
| Secondary keywords | ITR for doctors under presumptive taxation; ITR-3 vs ITR-4 for professionals; clinic income tax |
| Intent | Transactional, BOFU |
| Word count | 1,300-1,600 |
| Angle | Professional receipts, TDS and audit boundary |
| Internal links | MP, S5, C2, T2; link-only tax audit page |
| External links | ITD ITR-3 and ITR-4 help |
| Schema type | Service + FAQPage + BreadcrumbList |
| CTA placement | Hero; after audit box; end |
| WhatsApp message | W4 (text in Section 9.7) |
| Lead magnet | Professional documents checklist |
| Enquiry trigger | Reader runs a clinic or practice |

**A4: `/income-tax-return-filing-for-small-business-owners`** (NEW)

| Field | Detail |
|---|---|
| SEO title | ITR Filing for Small Business Owners Chennai | C S Rushil (57 chars) |
| Meta description | ITR filing for small shops, traders and proprietors in Chennai: presumptive income, books, cash deposits and GST match. WhatsApp us or book a call. (147 chars) |
| H1 | ITR Filing for Small Business Owners in Chennai |
| H2/H3 outline | H2 Who this is for; H2 Presumptive or books [V]; H2 Cash sales and deposits (S2); H2 GST vs ITR match (link-only GST return page); H2 F&O and intraday traders [V]; H2 Documents; H2 Process; H2 FAQs (6) |
| Primary keyword | ITR filing for business income Chennai |
| Secondary keywords | ITR for small shop owners; ITR for F&O traders; 44AD presumptive |
| Intent | Transactional, BOFU |
| Word count | 1,300-1,600 |
| Angle | Cash, GST match and scheme choice |
| Internal links | MP, S2, S5, C2, T2; link-only GST return and tax audit pages |
| External links | ITD ITR-3 and ITR-4 help |
| Schema type | Service + FAQPage + BreadcrumbList |
| CTA placement | Hero; after cash box; end |
| WhatsApp message | W6 (text in Section 9.7) |
| Lead magnet | Small-business documents checklist |
| Enquiry trigger | Reader has cash sales or GST |

**A5: `/income-tax-return-filing-for-senior-citizens`** (NEW)

| Field | Detail |
|---|---|
| SEO title | ITR Filing for Senior Citizens in Chennai | C S Rushil (54 chars) |
| Meta description | ITR filing for senior citizens in Chennai: pension, FD interest, TDS and refunds, with help by phone or at our Anna Nagar office. Rules are verify items. (153 chars) |
| H1 | ITR Filing for Senior Citizens and Pensioners in Chennai |
| H2/H3 outline | H2 Who this is for; H2 Pension, interest and rent; H2 TDS on interest and refunds [V]; H2 Special provisions for seniors [V]; H2 Documents; H2 In-person or phone support; H2 FAQs (6) |
| Primary keyword | ITR filing for senior citizens Chennai |
| Secondary keywords | ITR for pensioners; FD interest TDS refund; senior citizen income tax return |
| Intent | Transactional, BOFU |
| Word count | 1,200-1,500 |
| Angle | Phone-first, patient; interest and pension focus |
| Internal links | MP, P3, S4, T2 |
| External links | ITD senior-citizen return help |
| Schema type | Service + FAQPage + BreadcrumbList |
| CTA placement | Hero (call first); end |
| WhatsApp message | W7 (text in Section 9.7) |
| Lead magnet | Senior documents checklist |
| Enquiry trigger | Reader has TDS on interest or pension |

### 4.4 Problem pages (P1 to P5)

**P1: `/blog/missed-itr-due-date-belated-return`** (NEW)

| Field | Detail |
|---|---|
| SEO title | Missed the ITR Due Date? Belated Return Guide | C S Rushil (58 chars) |
| Meta description | Missed the ITR due date? See the belated return window, late fee and interest, what you lose and how to file now. All figures carry a verify label. (147 chars) |
| H1 | Missed the ITR Due Date? How to File a Belated Return |
| H2/H3 outline | H2 Short answer; H2 Deadline for this year [V]; H2 Late fee and interest [V]; H2 What you lose [V]; H2 Steps; H2 If the window has also passed (P5, updated return) [V]; H2 FAQs |
| Primary keyword | missed ITR due date belated return |
| Secondary keywords | belated return late fee; file ITR after due date Chennai; can I file ITR after due date |
| Intent | Urgent, BOFU |
| Word count | 1,100-1,400 |
| Angle | First page to publish; timed to the belated deadline in the live copy [V] |
| Internal links | MP, T3, P2, P5, S4 |
| External links | ITD belated return help; CBDT notifications |
| Schema type | BlogPosting + FAQPage + BreadcrumbList |
| CTA placement | Top banner WhatsApp; end block |
| WhatsApp message | W8 (text in Section 9.7) |
| Lead magnet | Belated filing documents checklist |
| Enquiry trigger | Due date has passed |

**P2: `/blog/mistake-in-filed-itr-revised-return`** (NEW)

| Field | Detail |
|---|---|
| SEO title | Mistake in Your Filed ITR? Revised Return Steps | C S Rushil (60 chars) |
| Meta description | Found a mistake after filing? Learn when to file a revised return, an updated return or a rectification, and what each costs in time. Verify items marked. (154 chars) |
| H1 | Mistake in a Filed ITR: Revised Return, Updated Return or Rectification? |
| H2/H3 outline | H2 Short answer; H2 Decision table [V]; H2 Revised return steps; H2 Updated return limits [V]; H2 Rectification for processing errors; H2 What not to do (link-only notice page); H2 FAQs |
| Primary keyword | revised return mistake in filed ITR |
| Secondary keywords | revised return how to file; ITR filed with wrong details; can I revise my ITR |
| Intent | Urgent, BOFU |
| Word count | 1,100-1,400 |
| Angle | Decision tree; the money page keeps only the summary table |
| Internal links | MP, T3, P1, P4 |
| External links | ITD revised return help |
| Schema type | BlogPosting + FAQPage + BreadcrumbList |
| CTA placement | Top banner; end block |
| WhatsApp message | W10 (text in Section 9.7) |
| Lead magnet | Error-type decision tree |
| Enquiry trigger | Reader spotted an error after e-verification |

**P3: `/blog/income-tax-refund-delayed-chennai`** (NEW)

| Field | Detail |
|---|---|
| SEO title | Income Tax Refund Delayed? What to Check | C S Rushil (53 chars) |
| Meta description | ITR refund not received? Check bank pre-validation, PAN-Aadhaar link, TDS credit and set-off against old demand, then follow up. Rules are verify items. (152 chars) |
| H1 | Income Tax Refund Delayed: What to Check and What to Do |
| H2/H3 outline | H2 Short answer; H2 Check status; H2 Eight common reasons [V]; H2 Fix each reason; H2 Interest on refund [V]; H2 Rectification or grievance; H2 FAQs |
| Primary keyword | income tax refund delayed |
| Secondary keywords | income tax refund not received; how to check ITR refund status; refund delay reasons |
| Intent | Urgent, BOFU |
| Word count | 1,100-1,400 |
| Angle | Reason-by-reason checklist; no promise on refund timing |
| Internal links | MP, A5, P4, S4 |
| External links | ITD refund status help |
| Schema type | BlogPosting + FAQPage + BreadcrumbList |
| CTA placement | After reasons list; end block |
| WhatsApp message | W10 (text in Section 9.7) |
| Lead magnet | Refund status checklist |
| Enquiry trigger | Return filed and refund pending |

**P4: `/blog/ais-mismatch-tds-not-showing-26as`** (NEW)

| Field | Detail |
|---|---|
| SEO title | AIS Mismatch or TDS Missing in 26AS: Fix Steps | C S Rushil (59 chars) |
| Meta description | AIS shows income you did not earn, or TDS is missing in Form 26AS? Steps for AIS feedback, deductor follow-up and correct filing. Verify portal steps. (150 chars) |
| H1 | AIS Mismatch or TDS Missing in Form 26AS: What to Do |
| H2/H3 outline | H2 Short answer; H2 Read AIS and TIS; H2 AIS feedback steps [V]; H2 TDS not in 26AS: ask the deductor; H2 File with evidence; H2 When to revise; H2 FAQs |
| Primary keyword | AIS mismatch TDS not showing in 26AS |
| Secondary keywords | AIS shows income I did not earn; TDS not showing in Form 26AS; AIS feedback |
| Intent | Urgent, MOFU to BOFU |
| Word count | 1,100-1,400 |
| Angle | Steps with portal terms; avoids notice content (link-only) |
| Internal links | MP, C5, P3, S2 |
| External links | ITD AIS feedback help |
| Schema type | BlogPosting + HowTo + FAQPage + BreadcrumbList |
| CTA placement | After steps; end block |
| WhatsApp message | W10 (text in Section 9.7) |
| Lead magnet | Mismatch tracker |
| Enquiry trigger | Reader sees a difference before filing |

**P5: `/blog/file-itr-for-previous-years-not-filed`** (NEW)

| Field | Detail |
|---|---|
| SEO title | How to File ITR for Years You Missed | C S Rushil (49 chars) |
| Meta description | Not filed returns for earlier years? Learn belated and updated return options, time limits, extra tax and what a loan or visa officer needs. Verify items. (154 chars) |
| H1 | How to File ITR for Previous Years You Missed |
| H2/H3 outline | H2 Short answer; H2 Year-by-year window [V]; H2 Belated vs updated return [V]; H2 Extra tax and interest [V]; H2 Documents to rebuild; H2 Loan and visa proof; H2 FAQs |
| Primary keyword | file ITR for previous years |
| Secondary keywords | ITR not filed for 3 years; updated return ITR-U; unfiled returns |
| Intent | Urgent, BOFU |
| Word count | 1,100-1,400 |
| Angle | Catch-up plan that avoids notice content; high ticket |
| Internal links | MP, P1, P2, L3 |
| External links | ITD updated return help |
| Schema type | BlogPosting + FAQPage + BreadcrumbList |
| CTA placement | Top banner; end block |
| WhatsApp message | W11 (text in Section 9.7) |
| Lead magnet | Catch-up checklist |
| Enquiry trigger | Reader needs multiple years of returns |

### 4.5 FAQ hub and case study

**FAQ: `/faq/income-tax-return-filing`** (NEW)

| Field | Detail |
|---|---|
| SEO title | Income Tax Return FAQs for Chennai (34 chars) |
| Meta description | Answers on ITR filing: who must file, forms, regime, due dates, late filing, refunds, AIS and documents. Dates and limits carry verify labels. WhatsApp us. (155 chars) |
| H1 | Income Tax Return FAQs |
| H2/H3 outline | H3 groups: Who must file; Forms; Regime; Due dates and late filing; Refunds; AIS; Documents; Chennai support. Each links to the owning page |
| Primary keyword | income tax return FAQs |
| Secondary keywords | ITR filing questions; income tax FAQs Chennai |
| Intent | Informational, TOFU |
| Word count | 20-30 Q&As (40-80 words each) |
| Angle | Hub at /faq/<topic> (same pattern as other plans; the /faq route is only a single page today); answers come from the Section 6 bank, each with a link to the full page. Add one line on the existing /faq page linking here |
| Internal links | MP, A1-A5, P1-P5, T1-T3 |
| External links | ITD |
| Schema type | FAQPage (only if the answers are visible on the page) |
| CTA placement | Under each group; end block |
| WhatsApp message | W1 (text in Section 9.7) |
| Lead magnet | None |
| Enquiry trigger | Reader scanning for a quick answer |

**CS: `/case-studies/itr-filing-engagement-template`** (NEW (noindex until consent))

| Field | Detail |
|---|---|
| SEO title | ITR Filing Case Study Template (30 chars) |
| Meta description | Template for a consented ITR filing engagement. Noindex until the client gives written consent and the firm clears ICAI advertisement rules. (140 chars) |
| H1 | ITR filing engagement: what the client needed and what we did |
| H2/H3 outline | H2 Situation (anonymised, consented); H2 Documents reviewed; H2 Issues found in AIS and 26AS; H2 Form and regime chosen and why; H2 What was filed and when; H2 What the client says (only if consented and ICAI-cleared) |
| Primary keyword | ITR filing case study |
| Secondary keywords | (none; not a search target) |
| Intent | Proof, BOFU |
| Word count | 700-900 |
| Angle | No invented results. FIRM-FILL: consented engagement only; no amounts that identify the client |
| Internal links | MP, relevant A page |
| External links | None |
| Schema type | None until consent (then Article) |
| CTA placement | End block |
| WhatsApp message | W1 (text in Section 9.7) |
| Lead magnet | None |
| Enquiry trigger | Reader wants proof |

### 4.6 Tools (T1 to T3)

**T1: `/tools/tax-regime-comparison-helper`** (NEW)

| Field | Detail |
|---|---|
| SEO title | Tax Regime Comparison Helper (Old vs New) | C S Rushil (54 chars) |
| Meta description | Estimate your tax under the old and new regime from your income and deductions. Planning aid only: slabs and limits are verify items. WhatsApp to confirm. (154 chars) |
| H1 | Old vs New Tax Regime Comparison Helper |
| H2/H3 outline | H2 How to use; H2 Inputs (salary, other income, deductions, HRA, home loan); H2 Result table; H2 Verify note and assumptions; H2 Next step; H2 FAQs (4) |
| Primary keyword | tax regime comparison helper |
| Secondary keywords | old vs new regime calculator; which regime is better |
| Intent | Tool, MOFU |
| Word count | 600-900 plus tool |
| Angle | Salaried and small-business inputs; shows both outputs and a labelled assumptions table (Section 4.6) |
| Internal links | MP, C1, A1, S6 |
| External links | ITD tax slabs page |
| Schema type | WebApplication + FAQPage + BreadcrumbList |
| CTA placement | After the result |
| WhatsApp message | W12 (text in Section 9.7) |
| Lead magnet | The tool itself; WhatsApp the result |
| Enquiry trigger | Reader needs a regime decision |

**T2: `/tools/itr-form-selector`** (NEW)

| Field | Detail |
|---|---|
| SEO title | ITR Form Selector: Find Your Form | C S Rushil (46 chars) |
| Meta description | Answer a few questions to see which ITR form usually applies: ITR-1, ITR-2, ITR-3 or ITR-4. Eligibility limits are verify items. Confirm with a CA. (147 chars) |
| H1 | ITR Form Selector |
| H2/H3 outline | H2 How to use; H2 Questions (income types, residential status, assets, business); H2 Result and why; H2 Verify note; H2 Next step; H2 FAQs (4) |
| Primary keyword | ITR form selector |
| Secondary keywords | which ITR form should I file; ITR form for salary and capital gains |
| Intent | Tool, MOFU |
| Word count | 600-900 plus tool |
| Angle | Decision-tree form chooser with the reason for each answer (Section 4.6) |
| Internal links | MP, C2, C3, A1-A4 |
| External links | ITD ITR forms applicable |
| Schema type | WebApplication + FAQPage + BreadcrumbList |
| CTA placement | After the result |
| WhatsApp message | W13 (text in Section 9.7) |
| Lead magnet | The tool itself |
| Enquiry trigger | Reader is unsure about the form |

**T3: `/tools/itr-due-date-and-late-fee-reference`** (NEW)

| Field | Detail |
|---|---|
| SEO title | ITR Due Date and Late Fee Reference | C S Rushil (48 chars) |
| Meta description | Reference table of ITR due dates, belated, revised and updated return windows and late fees by taxpayer type. Dates and fees are verify items. (142 chars) |
| H1 | ITR Due Date and Late Fee Reference |
| H2/H3 outline | H2 Pick your taxpayer type; H2 Due-date table [V]; H2 Belated, revised, updated windows [V]; H2 Late fee and interest [V]; H2 Last verified date; H2 Next step; H2 FAQs (4) |
| Primary keyword | ITR due date and late fee reference |
| Secondary keywords | last date to file ITR; ITR due date FY 2025-26 and tax year 2026-27; belated return late fee |
| Intent | Tool / reference, BOFU |
| Word count | 600-900 plus tool |
| Angle | One source of truth for dates, with a single 'last verified' stamp that the money page reads from |
| Internal links | MP, P1, P2, S1, S8 |
| External links | ITD; CBDT notifications |
| Schema type | WebApplication + FAQPage + BreadcrumbList |
| CTA placement | After the table |
| WhatsApp message | W8 (text in Section 9.7) |
| Lead magnet | Deadline reminder (WhatsApp opt-in) |
| Enquiry trigger | Reader checks a date |

**Tool specifications (build notes for the developer)**

All three tools are client-side (no personal data stored or sent), sit under one `/tools` route group, and show a visible "Last verified: [date, FIRM-FILL]. Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." line plus an "Estimate for planning only; not advice; a CA confirms your figure" line. No tool shows a price. Each tool ends with WhatsApp Us carrying the result as a pre-filled message (W12, W13, W8).

| Item | T1 Tax regime comparison helper | T2 ITR form selector | T3 Due-date and late-fee reference |
|---|---|---|---|
| Purpose | Compare tax under old and new regime for the user's numbers | Suggest the usual ITR form and explain why | One verified table of dates, windows and late fees |
| Inputs | Age band; salary; other income; HRA and rent; home loan interest; 80C, 80D and other deductions; employer NPS; business income yes/no | Resident status; income types (salary, house property, capital gains, business, foreign income); assets abroad; director or unlisted shares; income band; entity type | Taxpayer type (non-audit individual, business without audit, audit case, transfer pricing); tax year |
| Logic | Slabs, rebate, standard deduction and cess held in one config file (JSON) with a `verified_on` date and a source field; the tool refuses to run if `verified_on` is older than 90 days | Yes/no decision tree stored as data; each branch has a one-line reason and a source | Config file with the same fields; the money page and P1/P2 read from it so there is one source of truth |
| Output | Two columns: tax under each regime and the difference; a note that business-income users have limited switching [V]; "Why this may differ" list | Likely form and a "talk to a CA before filing" note when two forms could apply | Due date, belated, revised, updated windows, late-fee amounts, with "as per this config" and the source |
| Figures held in config [V] | Slabs, rebate, standard deduction, cess, surcharge cap | Eligibility limits (income, capital gains, agricultural income) | Every date and fee |
| Guardrails | No rule of thumb threshold in copy; shows the computed answer only. Resolves the live conflict between the blog ("three to four lakh") and the money page ("four to five lakh") | Never says "you must"; says "usually" | Shows "extended by CBDT" only if the config cites a notification |
| Schema | WebApplication + FAQPage | WebApplication + FAQPage | WebApplication + FAQPage |
| Tracking events | `tool_start`, `tool_result`, `wa_click_from_tool` | same | same |
| Build effort | 2 to 3 days | 2 days | 1 day |

## 5. Money-page blueprint: `/income-tax-return-filing-chennai`

### 5.0 Live-page audit and change log

**What stays, what moves, what is new**

| Live section (H2) | Action | Reason |
|---|---|---|
| Intro "Who needs to file ... which law applies" | Keep, rewrite for direct answer, add verify note and "Last reviewed" date (FIRM-FILL) | Already the `#direct-answer` passage; needs the label |
| Key facts box | Keep, add labels and a date stamp | Five facts, all [V] |
| 6 sub-services | Replace with "What is included" table (5.3) | Adds deliverables, portals, follow-up |
| 6-step how-to | Keep steps, upgrade to the 5.4 table (responsible party, documents, timeline, portal, delay reasons) | Brief requires these columns |
| How does the Income-tax Act, 2025 affect your return | Keep, move below the form table, shorten, link to S8 | Depth lives in S8 |
| Which ITR form | Keep table; add link to T2 and C2/C3 | ITR-5/6/7 rows shortened (out of audience) |
| When are returns due | Keep table, source its values from the T3 config; link to T3 and P1 | One source of truth |
| Old or new regime | Keep table; remove the "about four to five lakh" rule of thumb; embed T1 | Conflicts with the blog's "three to four lakh" |
| Why reconcile AIS and Form 26AS | Keep; link to C5, P4 | |
| What if you missed the due date or made a mistake | Keep as summary table; link to P1, P2, P5 | Depth moves to problem pages |
| How are refunds processed | Keep short; link to P3 | |
| What documents do you need | Convert prose to a table by audience (5.6); link to S3 | |
| What changes for higher-income filers | Keep as a 3-line pointer to the HNI page | Link-only scope |
| Filing from Chennai or from abroad | Replace with the 5.8 coverage section; NRI sentence stays as a link | NRI is plan 27 |
| FAQ (8) | Expand to 24 (5.10) | |
| NEW: who this is for, comparison table, problems solved, why choose us, final CTA | Add | Brief items 2, 5, 7, 9, 11 |

**Facts on the live page that need the verify label or look wrong**

| # | Live statement | Issue |
|---|---|---|
| 1 | Non-audit due dates 31 July and 31 August 2026 and the same dates in 2027 | Due dates: [V] (the 31 August change is attributed to the Finance Act, 2026) |
| 2 | Audit cases extended to 21 November 2026 "by the CBDT", "Circular No. 7/2026 on 28 September 2026" | Circular number and dates: [V]; confirm the circular exists and says this |
| 3 | Audit due date for 2027 as 31 October 2027, audit report 30 September | [V] |
| 4 | Transfer pricing cases 30 November 2026 and 2027 | [V] |
| 5 | Belated return by 31 December; late fee Rs 5,000 (Rs 1,000 up to Rs 5 lakh income) | Fee and window: [V] |
| 6 | Revised return window to 31 March 2027, revision after 31 December attracting a Rs 1,000 or Rs 5,000 fee "under the Finance Act, 2026" | The page itself hedges ("confirm before filing"); [V] and remove the hedge once confirmed |
| 7 | ITR-U within 48 months and extra tax of 25, 50, 60, 70 percent | [V] |
| 8 | Section 263 (returns), Sections 423 to 425 (interest, earlier 234A to 234C), 1961-Act Section 154 | New-Act mapping: [V] |
| 9 | Form limits: ITR-1 up to Rs 50 lakh, listed-equity long-term gains up to Rs 1.25 lakh, agricultural income up to Rs 5,000 | [V] |
| 10 | Schedule AL above Rs 1 crore; Schedule FA for foreign assets | [V] |
| 11 | New regime slabs (Nil to Rs 4 lakh ... 30% above Rs 24 lakh), rebate up to Rs 60,000, standard deduction Rs 75,000, surcharge cap 25% | [V] |
| 12 | Old regime slabs, rebate Rs 12,500, standard deduction Rs 50,000, 37% above Rs 5 crore | [V] |
| 13 | "Old regime worth testing when deductions exceed about Rs 4 to Rs 5 lakh" | Unsourced rule of thumb; blog says Rs 3 to Rs 4 lakh. Remove and use T1 |
| 14 | Filing obligation: Rs 1 crore in current accounts, Rs 50 lakh in savings deposits; foreign asset | [V]; S2 uses different (reporting) thresholds, which must be reconciled and labelled |
| 15 | Refund interest 0.5% a month; start date rule | [V] |
| 16 | E-verification "within the 30-day window" | [V] |
| 17 | Rent receipts and landlord PAN where rent exceeds Rs 1 lakh a year | [V] |
| 18 | Belated return: "old regime cannot be chosen by those without business income" | [V] |
| 19 | "Forms for tax year 2026-27 will be notified under the Income-tax Rules, 2026" | [V] |
| 20 | Meta description names NRIs | Plan 27's intent; remove from the money-page meta |
| 21 | Hero CTA labels "Enquire on WhatsApp", "Book a Video Call" | Brief asks for "WhatsApp Us" and a 15-minute consultation; confirm with the firm (ICAI-CHECK) |
| 22 | `GoogleProfileStrip` renders on the page | Confirm it shows no rating or review count (ICAI and Google self-serving review rules) |

### 5.1 Above the fold

| Element | Copy and design |
|---|---|
| H1 | Income Tax Return Filing in Chennai |
| One-line outcome | "Your return filed correctly, with AIS and Form 26AS reconciled first and the computation reviewed with you before filing." (no refund or saving promise) |
| Trust line | "Chartered accountants in Anna Nagar, Chennai. ICAI membership no. and firm registration no.: FIRM-FILL. Served online across India." |
| Primary CTA | **WhatsApp Us** (W1 pre-filled) |
| Secondary CTA | **Book a 15-minute consultation** (https://calendly.com/ceo-csrushil/30min); the word "free" is ICAI-CHECK |
| Phone | Call +91 72001 49711 (tap to call, Mon to Sat 9:30 AM to 6:30 PM) |
| Proof points (no counts or ratings) | CA-led review; AIS and Form 26AS checked line by line; one named point of contact (FIRM-FILL); you approve before filing |
| Quick facts | Return now being filed: FY 2025-26 under the Income-tax Act, 1961 [V] · Next: tax year 2026-27 under the Income-tax Act, 2025 [V] · Default regime: new regime [V] · Late filing window ends 31 December 2026 [V] · Last reviewed: FIRM-FILL date |
| Tool strip (new) | Three buttons under the hero: "Compare old vs new regime" (T1), "Find your ITR form" (T2), "Check due dates and late fees" (T3) |
| Verify line | "Dates, limits and rates on this page follow the rules as last checked on [date]. Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." (the second sentence is an editor note for the pre-publish check; the public line reads "Check the current rule on incometax.gov.in or with us before you act") |

### 5.2 Who this page is for

| Audience | Pain | How we help | Next page |
|---|---|---|---|
| Salaried employees | Two Form 16s, HRA, ESOP or fund income, unsure of regime | Reconcile AIS, pick the form, compare regimes | A1 |
| Freelancers and consultants | Irregular income, foreign receipts, advance tax | Choose presumptive or books, plan advance tax | A2 |
| Doctors and professionals | TDS on fees, scheme choice, audit limit | Choose the scheme, keep the right records | A3 |
| Small business owners and traders | Cash, GST match, books | Scheme choice, cash and GST reconciliation | A4 |
| Senior citizens and pensioners | TDS on interest, refunds, portal difficulty | Phone-first support, refund follow-up | A5 |
| People who missed a due date or years | Penalty fear, loan or visa deadline | Belated or updated return, catch-up plan | P1, P5 |
| Investors with capital gains | Broker report and AIS differ | Capital gains computation, loss carry-forward | S7 |
| (Link-only) high income, NRIs, notices | Different needs | Routed to the specialist page | HNI, NRI, notice pages |

### 5.3 What is included

| Deliverable | Detail |
|---|---|
| Document review | Form 16, bank, broker and deduction proofs checked against AIS, TIS and Form 26AS |
| Form and regime decision | ITR form chosen and explained; both regimes computed where you may choose [V] |
| Draft and computation | You see the tax computation and any balance payable before filing |
| Filing on the e-filing portal | Return filed at incometax.gov.in; acknowledgement shared |
| E-verification help | Aadhaar OTP or net banking; the time limit is explained [V] |
| Follow-up after filing | Intimation read, refund tracked, rectification where processing missed credit |
| Year-round compliance | Advance tax reminders and tax-year start checklist (S1, S8) |
| Not included (stated plainly) | Notice replies, assessments and appeals, HNI planning and NRI returns are separate services; links shown |

### 5.4 Step-by-step process

| # | Step | Who does it | Documents | Typical timing | Form or portal | Reasons for delay |
|---|---|---|---|---|---|---|
| 1 | Intake and checklist | Client shares; firm confirms how to share securely (FIRM-FILL) | PAN, Aadhaar, Form 16, bank details | FIRM-FILL | WhatsApp or phone | Missing Form 16 or statements |
| 2 | Reconcile AIS, TIS, Form 26AS | Firm | Portal login consent (firm's method FIRM-FILL) | FIRM-FILL | incometax.gov.in AIS | Employer or bank has not uploaded data |
| 3 | Pick form and regime | Firm advises, client decides | Deduction proofs | FIRM-FILL | ITR-1 to ITR-4 [V] | Late proofs |
| 4 | Draft and review | Firm prepares, client reviews | Client approval message | FIRM-FILL | Computation sheet | Client questions, tax payable to arrange |
| 5 | File and verify | Firm files, client e-verifies | OTP or net banking | The time limit for e-verification is [V] | e-filing portal | OTP or bank-link problems |
| 6 | Track processing | Firm | Intimation, refund status | Set by the department; no promise | e-filing portal | Bank not pre-validated, PAN-Aadhaar link, TDS mismatch, adjustment against old demand |

### 5.5 Comparison table: ways to file your return

| Factor | CA-assisted (this service) | Self-filing on the e-filing portal | App or software-based filing | Employer or payroll-assisted filing |
|---|---|---|---|---|
| Suitability | Mixed income, capital gains, business or professional income, missed years | Simple salary-only returns | Simple cases with clear pre-filled data | Salary-only cases where the employer offers it |
| Liability for the data entered | Yours (the taxpayer's), with a professional review of the figures | Yours alone | Yours alone | Yours alone |
| Compliance depth | AIS, TIS and 26AS reconciled; form and regime reviewed | As deep as you make it | Depends on the tool's checks | Usually salary only |
| Cost complexity | Depends on forms, income types and years (no fee figures on the site) | Your time | Tool charge or free tier | Usually bundled |
| Suitability for loan, visa or funding files | Return plus computation and acknowledgement pack | Acknowledgement and ITR-V | Acknowledgement | Acknowledgement |
| Best use | When income is not just one salary or a year was missed | A first simple return | When you want speed and your data is simple | When your only income is salary |

### 5.6 Documents by taxpayer type

| Taxpayer type | Documents |
|---|---|
| Resident individuals (salaried) | PAN, Aadhaar, Form 16 from each employer, bank interest certificates, rent receipts and landlord PAN where rent is high [V], home loan interest certificate, deduction proofs if testing the old regime, bank account for refund (pre-validated) |
| Resident individuals (investors) | Broker capital gains statements, consolidated mutual fund statement (CAMS and KFintech), dividend statements, AIS |
| Professionals and proprietors | Bank statements, receipts and expense records or books, TDS certificates, GST returns where registered |
| NRIs | Link-only: see NRI tax services page. Documents differ (passport dates, NRO and NRE statements, tax residency certificate) |
| Foreign nationals resident in India | Passport, visa details, Indian PAN, Indian income documents, details of foreign income and assets; rules are [V] |
| Firms, LLPs and companies | Out of this page's scope: ITR-5 and ITR-6 are handled with the annual compliance and audit services; link to `/annual-compliance-package` and `/tax-audit-chennai` |

### 5.7 Problems we solve

| Problem | What happens | Where to read |
|---|---|---|
| Missed due date | Belated return, late fee, interest [V] | P1, T3 |
| Error after filing | Revised or updated return, rectification [V] | P2 |
| Refund not received | Bank validation, PAN-Aadhaar link, TDS credit, set-off [V] | P3 |
| AIS shows wrong data | AIS feedback, deductor follow-up [V] | P4 |
| TDS missing in Form 26AS | Ask deductor to correct statement | P4 |
| Wrong form chosen | Corrected through a revised return where allowed [V] | T2, C2, C3 |
| Wrong regime chosen | Switching rules differ by income type [V] | C1, T1 |
| Years not filed | Belated or updated return window [V] | P5 |
| PAN not linked to Aadhaar or bank account not validated | Fix before filing | P3 |
| Cash deposits showing in AIS | Document the source | S2 |
| A notice has already arrived | Different service | Link-only: notice reply page |

### 5.8 Location coverage (section id `chennai-areas` and `tamil-nadu-online`)

**Copy (about 350 words, built from this outline).** Our only office is in Anna Nagar, Chennai (address, hours Mon to Sat 9:30 AM to 6:30 PM, Sunday closed, as on the Google Business Profile). Clients come from Anna Nagar, Kilpauk, Ambattur, T Nagar, Mylapore, Adyar, Velachery, OMR and Sholinganallur, Guindy, Porur and Tambaram; each area name links to the existing `/chartered-accountant-<area>-chennai` page. Everyone outside Anna Nagar is served online by video call and secure document sharing (method FIRM-FILL). Add a short line for Coimbatore, Madurai and Tiruchirappalli linking to the sections on the existing `/income-tax-consultant-<city>` pages (L3 to L5), and a line that other Tamil Nadu cities (Salem, Tiruppur, Vellore, Hosur, Erode, Tirunelveli) are served online with no new page. Do not create area or city URLs.

### 5.9 Why choose C S Rushil & Co.

| Reason | Proof allowed on site (no superlatives, no ratings) |
|---|---|
| CA-led | Led by CA Rushil C S, practising Chartered Accountant, ICAI FAFD certificate; ICAI membership no. FIRM-FILL |
| Chennai presence | Anna Nagar office with address and hours; team of 16 (as in the fact sheet) |
| End to end | From documents to refund tracking, with GST, bookkeeping and audit under one roof (links) |
| WhatsApp-first | Start and track on WhatsApp; the firm confirms reply times (FIRM-FILL) |
| Compliance continuity | Advance tax reminders and year-start checklist; related GST and TDS services |
| Honest scope | States plainly when self-filing is enough (C4) and when another service fits (HNI, NRI, notice) |

### 5.10 FAQs (24; each answer 40 to 80 words; place first 8 above the fold list, all in FAQPage schema)

Dates, limits and rates in answers carry [V]. The answers below are the visible text; do not add facts to the schema that are not on the page.

| # | Question | Answer |
|---|---|---|
| 1 | Who has to file an income tax return in India? | You generally file if your total income before deductions is above the basic exemption limit. You may also need to file if you hold foreign assets, have large bank deposits, or want a refund of tax deducted. Limits and triggers change, so check the current rule on incometax.gov.in or ask us before you decide not to file. [V] |
| 2 | Which ITR form should I use? | It depends on your income. Salary with simple extras often uses ITR-1; capital gains, more than one house, foreign assets or directorship usually mean ITR-2; business or professional income means ITR-3, or ITR-4 for presumptive income. Eligibility limits change, so we confirm the form after checking your AIS and Form 16. [V] |
| 3 | What is the last date to file my return? | Dates differ by taxpayer type: individuals without business income, business or professional income without audit, audit cases and transfer pricing cases each have their own date. Our due-date reference lists them with a last-verified date. The belated-return window runs for a limited period after the due date, so check the current date before relying on it. [V] |
| 4 | What happens if I miss the due date? | You can usually still file a belated return by a later cut-off date, but a late fee and interest on unpaid tax may apply, and some benefits such as carrying forward certain losses or choosing the old regime can be lost. If that window has also closed, an updated return may be possible at extra tax. [V] |
| 5 | Can I switch between the old and new tax regime? | Taxpayers without business income can usually choose each year, in a return filed by the due date. Those with business income have limited ability to switch back once they opt out. The new regime is the default if you do not choose. Rules on switching and the due-date condition should be verified for your year. [V] |
| 6 | How do I decide between the old and new regime? | Compare the tax under both using your real figures: salary, other income, HRA, home loan interest and deductions. The new regime has lower slab rates but fewer deductions. There is no single threshold that suits everyone, so use our regime helper or ask us to run both before you file. [V] |
| 7 | What is AIS and why check it before filing? | The Annual Information Statement lists income and transactions reported about you by banks, employers, brokers and others. The return is matched against it, so a missed interest credit or share sale can cause a mismatch. We reconcile AIS, TIS and Form 26AS with your records first, and submit feedback if an entry is wrong. [V] |
| 8 | How long does ITR filing take with you? | It depends mainly on how quickly documents reach us and how many income types you have. A simple salaried return needs less time than a return with capital gains or business income. We confirm the timeline on WhatsApp after seeing your documents. We do not promise refund dates, which the department controls. [FIRM-FILL for ranges] |
| 9 | What documents do I need to file my return? | For a salaried return: PAN, Aadhaar, Form 16 from each employer, bank interest certificates, rent and home loan proofs and deduction proofs if you test the old regime. Add broker and mutual fund statements for gains, and books or bank statements for business or professional income. Our checklist lists items by income type. |
| 10 | Do I need a chartered accountant to file my return? | Not always. A simple salary-only return with clear pre-filled data can be filed yourself. Help is worth considering for capital gains, business or professional income, foreign assets, missed years, or AIS mismatches, where a wrong form or missed entry costs more than the effort. Our comparison page sets out how to decide. |
| 11 | Is Form 16 enough to file my return? | Form 16 covers salary and the tax deducted by that employer only. It does not show interest, rent, capital gains or a second job. Your AIS and Form 26AS show more. We compare all three before filing so that income from other sources is not missed. [V for what each document shows] |
| 12 | Can you help if I have not filed for earlier years? | Yes. Depending on how old the year is, a belated return or an updated return may be possible, sometimes with extra tax and interest. An updated return cannot be used to claim a refund and may not be allowed once proceedings begin. We check the window for each year first. [V] |
| 13 | How do I e-verify my return? | After filing, verify through the e-filing portal using Aadhaar OTP, net banking, a bank or demat account route or a digital signature, whichever the portal currently offers. A return that is not verified within the allowed time is treated as not filed, so do it promptly. We guide clients through this step. [V] |
| 14 | Can I revise my return after filing it? | Yes, if you find an error or omission, a revised return can be filed within the permitted window, and it can be filed more than once. A late revision may attract a fee. If the window has closed, an updated return may be an option. Check the current window before acting. [V] |
| 15 | Why is my refund delayed? | Common reasons are a bank account that is not pre-validated, PAN and Aadhaar not linked, TDS claimed that does not appear in Form 26AS, a return not yet verified, or adjustment against an old demand. Check the refund status on the portal, then fix the reason shown. We follow up for clients. We cannot promise refund dates. [V] |
| 16 | I am salaried and sold shares or mutual funds. Which form applies? | Salary with capital gains usually means ITR-2 rather than ITR-1, because gains above small limits and some other items cannot be reported in ITR-1. F&O trading is business income and usually means ITR-3. We confirm the form after checking your broker statement against AIS. Foreign shares need extra schedules. [V] |
| 17 | I am a freelancer. Should I use presumptive taxation? | It depends on your receipts, expenses and the scheme limits. Presumptive taxation is simpler, with fewer records, but may tax more than your real profit if expenses are high, and has eligibility limits. Regular books give flexibility but need accounts and may bring audit rules. We compare both for your case before you decide. [V] |
| 18 | Do I have to pay advance tax? | If your tax payable for the year after TDS is expected to exceed the threshold, advance tax is due in instalments through the year, and interest applies to shortfalls. This often catches freelancers and people with capital gains or rent. Instalment dates and the threshold should be verified. Our advance tax guide has the table. [V] |
| 19 | What changes under the Income-tax Act, 2025? | The 2025 Act replaces "previous year" and "assessment year" with a single "tax year" and renumbers sections. Returns for income up to 31 March 2026 are still under the 1961 Act, and the first return under the 2025 Act is for tax year 2026-27, filed in 2027. Section and form numbers should be verified. [V] |
| 20 | Can you file my return if I live outside Chennai? | Yes. Apart from our Anna Nagar office, we work online with clients elsewhere in Tamil Nadu and India through video calls and secure document sharing. The firm confirms how to share documents at onboarding. If you are a non-resident Indian, our NRI tax services page covers your case. |
| 21 | What if I have already received an income tax notice? | A notice needs a specific, timely reply and is a separate service from return filing. Do not ignore it, and note the due date mentioned in the notice. Our notice reply page explains common notice types and how we help. Share a copy of the notice on WhatsApp so we can tell you the next step. |
| 22 | How is the fee for ITR filing decided? | The fee depends on the forms, income types, number of years, books needed and the work involved. We do not publish fee figures on this site. Share your documents on WhatsApp or book a 15-minute consultation, and we will explain the scope and the fee before we start. [ICAI-CHECK: confirm wording and the word "free" before use] |
| 23 | Is my data safe with you? | We handle your PAN, bank and income details only for your return, and the firm confirms how to share documents securely when you start. We do not ask for your portal password over chat. FIRM-FILL: add the firm's documented data-handling steps before publishing; make no claim beyond them. |
| 24 | I have high income or foreign assets. Is this the right page? | This page covers common returns. If your case involves large capital gains on property, foreign assets or RSUs, or HUF planning, see our page for high-income individuals and our guides on property capital gains and foreign RSUs. We can route you after a short WhatsApp chat. |

### 5.11 SEO and structured data for the money page

| Item | Recommendation |
|---|---|
| Slug | `/income-tax-return-filing-chennai` (keep) |
| SEO title | Income Tax Return Filing in Chennai \| C S Rushil & Co. (54 characters; keep) |
| Meta description | See Section 4.1 (MP row, 155 characters or fewer); remove NRIs, keep forms, regime, AIS and due dates |
| OG title | ITR Filing in Chennai: CA-Led Review Before You File (52 characters) |
| OG description | AIS-reconciled income tax return filing for salaried people, professionals, freelancers and small businesses. WhatsApp or call our Anna Nagar office. (146 characters) |
| Primary keyword | income tax return filing in Chennai |
| Secondary keywords | ITR filing Chennai; income tax return CA Chennai; file income tax return online Chennai; chartered accountant for ITR filing Chennai; ITR filing service near me Chennai |
| Entities to mention naturally | Income-tax Act 2025; Income-tax Act 1961; tax year; assessment year; AIS; TIS; Form 26AS; Form 16; ITR-1 to ITR-4; e-verification; incometax.gov.in |
| JSON-LD kept | Service (template), HowTo (template, from the 6 steps), BreadcrumbList, FAQPage (from `FAQSection`) |
| JSON-LD recommended | AccountingService (sitewide LocalBusiness): name, address, telephone, openingHours Mon to Sat 9:30 to 18:30, areaServed Chennai and Tamil Nadu, `sameAs` LinkedIn and GBP. No `aggregateRating` and no review markup |
| Schema safety | FAQ answers in markup must equal the visible text; HowTo steps must be visible; remove FAQ schema for any answer not shown |
| Image alt texts | (1) "C S Rushil and Co. chartered accountants office, Anna Nagar, Chennai" (2) "AIS and Form 26AS reconciliation sheet for an income tax return" (3) "Old and new tax regime comparison table" (4) "ITR form selector steps" (5) "Income tax return filing process in six steps" (6) "Chartered accountant reviewing a salaried return with a client" |

### 5.12 Internal-link plan for the money page

| From the money page to | Descriptive anchor | Placement |
|---|---|---|
| `/tools/tax-regime-comparison-helper` | compare the old and new regime for your income | tool strip and regime section |
| `/tools/itr-form-selector` | find the ITR form that usually applies | tool strip and form section |
| `/tools/itr-due-date-and-late-fee-reference` | check due dates and late fees | tool strip and due-date section |
| A1 to A5 | ITR filing for salaried employees, freelancers, doctors, small business owners, senior citizens | "Who this page is for" table |
| P1 to P5 | missed due date, revised return, refund delay, AIS mismatch, earlier years | problems table |
| S3, S4, S8, PX | documents checklist, how to e-verify, Income-tax Act 2025 changes, how our process works | process and documents sections |
| `/blog/old-vs-new-tax-regime`, `/blog/advance-tax-deadlines`, `/blog/safe-cash-deposit-limit` | regime guide, advance tax dates, cash deposit limits | related guides |
| LINK-ONLY targets | see Section 4.0 anchor table | notes and FAQs 21, 24 |

**Links into the money page (from other pages):** all A, P, S, C, T pages; `/direct-tax`; HNI, NRI and notice pages (their owners add a descriptive link such as "return filing for salaried people and professionals"); `/faq`; homepage services menu. Anchor text varies: "income tax return filing in Chennai", "ITR filing in Chennai", "file your return with a CA in Anna Nagar".

## 6. AEO answer bank: 135 answers

**How to use.** Each answer is the visible text to publish (40 to 80 words). Place it on the page shown, under a question heading, so that Google AI Overviews, ChatGPT, Perplexity, Gemini and Copilot can lift a self-contained passage. Where the source column says [V], the answer contains a date, limit, rate, fee, section or form detail and the exact label applies: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." Use incometax.gov.in pages by name; confirm the exact page before linking. Only publish the FAQPage schema for answers that are visible. Figures taken from the live page (31 Dec 2026, 31 March 2027, 48 months, Rs 5,000 / Rs 1,000, 25-70 percent, 0.5 percent, 30 days) are marked as 'per our page' and must be re-verified.

| Group | Count |
|---|---|
| 6.1 Direct-answer FAQs (30) | 30 |
| 6.2 Comparison (15) | 15 |
| 6.3 Process (15) | 15 |
| 6.4 Document and deadline (15) | 15 |
| 6.5 Cost and timeline (15) | 15 |
| 6.6 Risk and penalty (15) | 15 |
| 6.7 'Do I need this?' (15) | 15 |
| 6.8 Audience-specific (15) | 15 |

### 6.1 Direct-answer FAQs (30)

| # | Exact question | Direct answer (40-80 words) | Supporting detail | Source or verification note | WhatsApp CTA | Best page |
|---|---|---|---|---|---|---|
| 1 | What is an income tax return? | An income tax return is a form filed with the Income Tax Department that reports your income, deductions and taxes paid for a year. It decides whether you owe more tax or get a refund. Individuals file it online on the e-filing portal, using the ITR form that matches their income type. | Filed yearly; form depends on income type | ITD help pages | W1 | MP |
| 2 | What is ITR filing? | ITR filing means submitting your income tax return, usually online at incometax.gov.in. You declare income from salary, house property, capital gains, business or other sources, claim eligible deductions, show tax already paid, and then verify the return. Once verified and processed, the department sends an intimation, and any refund is paid to your bank account. | File, verify, processing, intimation | ITD help pages | W1 | MP |
| 3 | What is Form 16? | Form 16 is a certificate your employer issues showing your salary, the tax deducted at source and deductions considered during the year. It is a key document for filing a salaried return, but it does not show income from other sources such as interest, rent or capital gains, so compare it with your AIS before filing. | Covers salary and TDS by that employer only | ITD; issue date rule [V] | W2 | C5 |
| 4 | What is AIS in income tax? | The Annual Information Statement, or AIS, is a statement on the e-filing portal listing income and transactions reported about you by banks, employers, brokers, registrars and others, such as interest, dividends, share sales and property deals. The department uses it to check returns, so you should review it before filing and give feedback on wrong entries. | Feedback option exists for wrong entries | ITD AIS help [V] | W10 | C5 |
| 5 | What is Form 26AS? | Form 26AS is your tax credit statement. It shows tax deducted or collected on your behalf, advance tax and self-assessment tax you paid, and certain high-value transactions. Before claiming TDS in your return, check that each credit appears here. If a credit is missing, ask the deductor to correct their statement. | Tax credit statement tied to PAN | ITD help pages | W10 | P4 |
| 6 | What is TIS in income tax? | The Taxpayer Information Summary, or TIS, is a condensed view of the information in your AIS. It groups entries by category, such as salary, interest or securities, and shows the value reported by the source and the value considered by the department. It is a quick way to spot differences before you file. | Summary of AIS by category | ITD AIS and TIS help [V] | W10 | C5 |
| 7 | What is a tax year under the Income-tax Act, 2025? | Under the Income-tax Act, 2025, income is assessed by a single concept called the tax year, replacing the earlier previous year and assessment year pair. Income up to 31 March 2026 stays under the 1961 Act, and tax year 2026-27, filed in 2027, is the first return under the new Act. Check section mappings before relying on them. | Replaces previous year and assessment year | ACT25 [V] | W1 | S8 |
| 8 | What is the new tax regime? | The new tax regime offers lower slab rates and a higher rebate but removes most deductions and exemptions, such as HRA and home loan interest on a self-occupied house. It is the default for individuals and HUFs unless you choose the old regime, subject to rules on who can switch and when. Confirm current slabs before relying on them. | Default regime; fewer deductions | ITD; slabs [V] | W12 | C1 |
| 9 | What is the old tax regime? | The old tax regime has higher slab rates but allows many deductions and exemptions, such as Section 80C investments, health insurance, HRA and home loan interest on a self-occupied house. It can suit people whose deductions are large. Whether you may choose it in a given year depends on your income type and filing date. | Higher rates, more deductions | ITD; rules [V] | W12 | C1 |
| 10 | What is a belated return? | A belated return is a return filed after the normal due date but before the later cut-off date set by law. It is allowed, but a late fee and interest on unpaid tax may apply, and some benefits, such as carrying forward certain losses, can be lost. Check the current deadline and fee for your year. | Late fee and interest may apply | ITD; fee and date [V] | W8 | P1 |
| 11 | What is a revised return? | A revised return replaces a return you already filed when you find a mistake or omission, such as a missed income item or wrong deduction. It can be filed within a permitted window, and more than once. A late revision may attract a fee. It cannot be used after the window closes. | Replaces the original return | ITD; window and fee [V] | W10 | P2 |
| 12 | What is an updated return (ITR-U)? | An updated return, or ITR-U, lets you declare income you missed after the revision window has closed, within a fixed period from the end of the relevant year. It involves additional tax on top of the tax and interest due, and it cannot be used to claim a refund or increase a loss. It is not allowed in some situations. | Extra tax; no refund claim | ITD; conditions [V] | W11 | P5 |
| 13 | What is e-verification of an ITR? | E-verification confirms that you filed the return yourself, without sending a signed paper form. You can verify online using Aadhaar OTP, net banking or other options the portal offers. A return that is not verified within the allowed time is treated as not filed, so complete this step soon after filing. | Return invalid if not verified in time | ITD e-verify help; time limit [V] | W8 | S4 |
| 14 | What is ITR-1 (Sahaj)? | ITR-1, called Sahaj, is the simplest return form. It is meant for resident individuals with income up to a limit from salary or pension, one house property, and other sources such as interest, with only small listed-equity gains. It cannot be used if you have business income, foreign assets or larger capital gains. | Simple, salary-style returns | ITD forms page; limits [V] | W13 | C3 |
| 15 | What is ITR-2? | ITR-2 is for individuals and HUFs who have no business or professional income but have items that ITR-1 does not allow, such as capital gains, more than one house property, foreign assets or income, directorship in a company, or higher income. NRIs and RNORs also generally use it. Check eligibility each year. | No business income; broader items | ITD forms page; limits [V] | W13 | C3 |
| 16 | What is ITR-3? | ITR-3 is for individuals and HUFs with income from a business or profession who do not use presumptive taxation. It includes partners of firms, consultants who keep regular books and traders with F&O or intraday income. It has detailed schedules for the profit and loss account and balance sheet. | Business or professional income with books | ITD forms page | W13 | C2 |
| 17 | What is ITR-4 (Sugam)? | ITR-4, called Sugam, is for resident individuals, HUFs and firms other than LLPs who declare income on a presumptive basis for business or profession, up to a limit. It has fewer schedules than ITR-3 but cannot be used if you have foreign assets, are a director, or have capital gains beyond small limits. | Presumptive income, simpler return | ITD forms page; limits [V] | W13 | C2 |
| 18 | What is presumptive taxation? | Presumptive taxation lets eligible small businesses and professionals declare income at a fixed percentage of turnover or receipts instead of keeping detailed books. It reduces record-keeping, but income may be taxed higher than actual profit if expenses are large. Eligibility and percentages are set by law and change, so verify them for your year. | Section 44AD and 44ADA in the 1961 Act | ACT61 and ACT25 mapping [V] | W4 | S5 |
| 19 | What is advance tax? | Advance tax is income tax paid in instalments during the year instead of one payment at filing time. It applies when your tax payable after TDS is expected to cross a set amount. It commonly affects freelancers, professionals, landlords and people with capital gains. Interest applies to shortfalls or late instalments. | Paid in instalments through the year | ITD tax payment help [V] | W5 | S1 |
| 20 | What is self-assessment tax? | Self-assessment tax is the balance of tax you pay after the year ends, once you have adjusted TDS, TCS and advance tax against your total liability. It is paid before you file the return, using the e-pay tax service on the portal, and the challan details go into the return. | Balance tax paid before filing | ITD tax payment help | W5 | S1 |
| 21 | How is an income tax refund paid? | If your tax paid and deducted is more than your tax liability, the department refunds the excess after your return is verified and processed. The refund is credited to a bank account linked to your PAN, usually one you have pre-validated on the portal. The timing is controlled by the department. | Needs verified return and valid account | ITD refund help [V] | W10 | P3 |
| 22 | What is the standard deduction for salaried people? | The standard deduction is a flat amount reduced from salary or pension income without needing bills or proof. The amount differs between the new and old regime and may change in the Budget. Check the current figure for your year before computing tax. | Flat deduction from salary income | ITD; amount [V] | W12 | C1 |
| 23 | What is HRA exemption? | House Rent Allowance exemption reduces the taxable part of the HRA component of your salary if you pay rent. It depends on your salary, the HRA received, the rent paid and your city. It is available only under the old regime, and you need rent receipts and the landlord's PAN in some cases. | Old regime only; needs rent proof | ACT61 and ACT25 mapping [V] | W2 | S6 |
| 24 | What is capital gains tax on shares and mutual funds? | Capital gains tax applies to profit when you sell shares or mutual fund units. Gains are classed short term or long term based on how long you held the asset, and each is taxed at its own rate with an exemption or threshold for long-term listed-equity gains. Rates and holding periods change, so verify them. | Short and long term differ | ITD; rates [V] | W9 | S7 |
| 25 | What is Schedule FA in the ITR? | Schedule FA is a part of the return where resident individuals report foreign assets and foreign accounts held during the relevant period, such as foreign bank accounts, shares or RSUs from a foreign employer. It is required even when the asset earned no income. For detailed cases, see our guide on foreign RSUs. | Required for residents with foreign assets | ITD; applicability [V] | W3 | S7 |
| 26 | What is rectification of an income tax intimation? | Rectification is a request to correct a mistake apparent from the record in the department's processing of your return, such as a TDS credit that was not allowed. You file it online against the intimation within the allowed time. It is different from a revised return, which you file to change your own return. | Fixes a processing error, not your own error | ITD rectification help; section [V] | W10 | P2 |
| 27 | How does TDS credit reach my return? | Tax deducted at source is reported by the deductor in its TDS statement under your PAN and appears in Form 26AS and AIS. When you file, you claim this credit, and the department matches it. If the deductor reports late or wrongly, the credit may not show, and you must ask them to correct it. | Credit appears only if the deductor reports it | ITD help pages | W10 | P4 |
| 28 | Why must PAN be linked with Aadhaar for filing? | A PAN that is not linked to Aadhaar may be treated as inoperative under the rules, which can block filing, refunds and e-verification options. Check the status on the e-filing portal and link them if needed. Deadlines, fees and exceptions for linking have changed over time, so verify the current position. | Inoperative PAN causes filing and refund problems | ITD; rule [V] | W10 | P3 |
| 29 | What is a pre-validated bank account? | A pre-validated bank account is one you have added on the e-filing portal and confirmed against your PAN, so that refunds can be credited to it. A refund can fail or be delayed if the account is not validated, is closed, or the name does not match. Validate it before you file. | Needed for refund credit | ITD refund help | W10 | P3 |
| 30 | What is the ITR acknowledgement and ITR-V? | The acknowledgement is the proof that your return was filed, and ITR-V is the verification form that the portal generates. When you e-verify online, you do not need to send a paper ITR-V. Keep the acknowledgement safely, as banks, visa offices and employers often ask for it. | Proof of filing for loans and visas | ITD help pages | W8 | S4 |

### 6.2 Comparison (15)

| # | Exact question | Direct answer (40-80 words) | Supporting detail | Source or verification note | WhatsApp CTA | Best page |
|---|---|---|---|---|---|---|
| 31 | Old vs new tax regime: which is better? | Neither is better for everyone. The new regime has lower slab rates and fewer deductions; the old regime has higher rates but allows HRA, home loan interest and many deductions. The only reliable way to choose is to compute your tax under both using your actual income and deductions, which our regime helper does. | Depends on your numbers | ITD; slabs [V] | W12 | C1 |
| 32 | ITR-1 vs ITR-2: what is the difference? | ITR-1 is for simple resident cases with salary or pension, one house property and limited other income. ITR-2 covers cases ITR-1 does not, such as more than one house, larger capital gains, foreign assets, directorship or higher income. If you fit any ITR-2 trigger, filing ITR-1 can lead to a defective return. | ITR-2 for capital gains, foreign assets, directors | ITD forms; limits [V] | W13 | C3 |
| 33 | ITR-3 vs ITR-4: which is right for a freelancer or professional? | ITR-4 suits eligible individuals declaring presumptive income, with fewer records and a simpler form. ITR-3 is for those who keep regular books or are not eligible for presumptive taxation, and it carries full profit and loss details. Eligibility limits and conditions change, so check them for your year. | Presumptive vs books | ITD forms; limits [V] | W13 | C2 |
| 34 | Presumptive taxation vs regular books: which saves more? | It depends on your real expenses. Presumptive taxation is simple but taxes a fixed share of receipts, which can be higher than your actual profit. Regular books show true profit and allow losses to be carried forward, but need accounts and may bring audit rules. We compare both for your figures. | Compare using actual expenses | ACT61/25 mapping [V] | W4 | S5 |
| 35 | Form 16 vs AIS: which should I trust? | They show different things. Form 16 shows your salary and TDS from one employer. AIS shows information reported by many sources, including interest, dividends and securities transactions. Use Form 16 for salary and AIS to find other income, and reconcile the two before filing because the department compares your return with AIS. | Use both and reconcile | ITD AIS help [V] | W10 | C5 |
| 36 | Form 26AS vs AIS: what is the difference? | Form 26AS is mainly a tax credit statement, showing TDS, TCS and taxes paid. AIS is wider, adding information such as interest, dividends, share and mutual fund transactions and foreign remittances reported by third parties. Use Form 26AS to claim credits and AIS to check that all income is included. | Credits vs full information | ITD help pages [V] | W10 | C5 |
| 37 | Belated vs revised return: which one do I need? | A belated return is the first filing made after the due date. A revised return corrects a return you already filed. If you never filed, you need a belated return. If you filed and found an error, you need a revised return, within its window. Each has its own deadline, so check the dates. | First filing late vs correcting a filed return | ITD; windows [V] | W8 | P1 |
| 38 | Revised return vs updated return: when to use which? | Use a revised return to correct a filed return within the revision window. Use an updated return, ITR-U, after that window closes to declare missed income, within a longer period and with additional tax. An updated return cannot claim a refund, and it is not available once certain proceedings have started. | Revision window first, then ITR-U | ITD; conditions [V] | W10 | P2 |
| 39 | CA-assisted ITR filing vs self-filing: which should I choose? | Self-filing works for simple salary-only returns with clear pre-filled data. A chartered accountant helps when you have capital gains, business or professional income, foreign assets, missed years or AIS mismatches, because errors are costlier there. Decide by complexity and by how much time you can give to checking. | Match the option to complexity | ITD how-to pages | W1 | C4 |
| 40 | Advance tax vs self-assessment tax: what is the difference? | Advance tax is paid in instalments during the year based on your estimated income. Self-assessment tax is the balance you pay after the year ends, before filing the return, once TDS and advance tax are adjusted. Underpaid or late advance tax attracts interest, which self-assessment tax does not remove. | During the year vs after it | ITD tax payment help [V] | W5 | S1 |
| 41 | Section 44AD vs 44ADA: which applies to me? | In the 1961 Act, Section 44AD covers presumptive income for eligible small businesses, while Section 44ADA covers eligible professionals such as doctors, lawyers and consultants. Each has turnover or receipts limits and a deemed profit percentage. The Income-tax Act, 2025 renumbers sections, so verify the mapping and current limits. | Business vs profession | ACT61 and ACT25 mapping [V] | W4 | S5 |
| 42 | Short-term vs long-term capital gains: how are they different? | The difference is how long you held the asset. Gains on assets held beyond a set period are long term; shorter holding gives short-term gains. The two are taxed at different rates, and long-term gains on listed shares may have an exemption threshold. Holding periods and rates differ by asset and change over time. | Holding period decides the class | ITD; rates and periods [V] | W9 | S7 |
| 43 | Aadhaar OTP vs net banking for e-verification: which is easier? | Aadhaar OTP is quick if your mobile number is linked to Aadhaar. Net banking works if your bank is enabled on the portal and your PAN is linked in the bank record. Either is valid. If one fails, the portal offers other options. Choose the one that works for you and do it before the time limit. | Both valid; pick what works | ITD e-verify help [V] | W8 | S4 |
| 44 | Salaried vs professional ITR: how do the forms differ? | A salaried person with simple income may use ITR-1 or ITR-2. A professional such as a doctor or consultant uses ITR-3, or ITR-4 for presumptive income. Professionals also face questions on books, TDS on fees, advance tax and audit limits that salaried returns do not. Choose by income type, not by job title. | Income type decides the form | ITD forms; limits [V] | W13 | A3 |
| 45 | Old regime deductions vs new regime rebate: which matters more? | It depends on income and deductions. The new regime has a higher rebate, so incomes up to a certain level pay no tax after rebate. The old regime rewards large deductions. Compare both with your numbers instead of using a rule of thumb, because thresholds, rebates and limits change in each Budget. | Run both computations | ITD; rebate and limits [V] | W12 | C1 |

### 6.3 Process (15)

| # | Exact question | Direct answer (40-80 words) | Supporting detail | Source or verification note | WhatsApp CTA | Best page |
|---|---|---|---|---|---|---|
| 46 | How do I file an income tax return online step by step? | Log in to incometax.gov.in with your PAN, choose the assessment or tax year and filing type, pick the ITR form, review pre-filled data against your AIS and Form 16, enter missing details, compute tax, pay any balance, submit, and e-verify. Our team can do the checking and filing with you. | Seven steps from login to e-verify | ITD how-to-file pages [V] | W1 | MP |
| 47 | How do I e-verify my ITR after filing? | After submitting, choose e-verify on the portal and pick an option such as Aadhaar OTP, net banking or another route the portal offers. Confirm with the OTP or login. You will receive an acknowledgement. Do this within the permitted time, because an unverified return is treated as not filed. | Complete within the time limit | ITD e-verify help; time limit [V] | W8 | S4 |
| 48 | How do I download AIS and Form 26AS? | Log in to the e-filing portal, open the AIS service from your dashboard to view or download the AIS and TIS, and use the tax credit option to view Form 26AS. Download them before you start your return so that you can match them against your Form 16 and statements. | Both are available after login | ITD AIS help [V] | W10 | C5 |
| 49 | How do I pre-validate my bank account for a refund? | On the e-filing portal, open your profile, go to bank accounts, add the account and complete validation using the details asked. The account should be in your own name, active and linked to your PAN in the bank record. Check the validation status before filing so a refund can be credited without delay. | Do this before filing | ITD profile help [V] | W10 | P3 |
| 50 | How do I file a revised return? | Open the portal, choose to file a return, select the same year, pick the option that shows it is a revised return, and enter the original acknowledgement details. Correct the figures, pay any extra tax, submit and e-verify again. Do it within the permitted window, and check whether a fee applies. | Use original acknowledgement number | ITD revised return help [V] | W10 | P2 |
| 51 | How do I file a belated return? | File as usual but choose the belated-return option, because the due date has passed. Add the correct form, declare all income, pay tax with interest, pay any late fee that applies, and e-verify. File before the final cut-off date, and check the current fee and date for your year. | Same form, late option, plus fee and interest | ITD belated return help; fee and date [V] | W8 | P1 |
| 52 | How do I pay advance tax? | Use the e-pay tax service on the e-filing portal or your bank's tax payment facility, choose advance tax as the type, enter the amount and pay. Keep the challan. Pay by each instalment date, based on your estimated income, and recalculate before each date if your income changes. Verify the dates for your year. | Challan proof needed for the return | ITD tax payment help [V] | W5 | S1 |
| 53 | How do I submit AIS feedback? | Open the AIS service on the portal, select the entry you think is wrong, choose the feedback option and give the reason, such as wrong amount, duplicate or not mine, with supporting proof if asked. The reporting entity may be asked to confirm or correct it. Keep a note of what you submitted. | Feedback goes to the reporting entity | ITD AIS feedback help [V] | W10 | P4 |
| 54 | How do I link PAN with Aadhaar? | Use the link Aadhaar service on the e-filing portal, enter your PAN, Aadhaar number and name as shown, and follow the steps, paying any fee the rules ask for at the time. After linking, check that the status shows as linked. Deadlines and fees have changed before, so verify the current position. | Check status after linking | ITD link Aadhaar help; fee [V] | W10 | P3 |
| 55 | How do I check my ITR refund status? | Log in to the e-filing portal and open the e-file section to view filed returns and their status, or use the refund status service of the Income Tax Department with your PAN and year. The status shows whether the refund was processed, adjusted or failed. If it failed, correct the bank details. | Portal shows processing and refund status | ITD refund status help | W10 | P3 |
| 56 | How do I claim HRA in my return? | If you choose the old regime, claim HRA exemption through your employer's computation in Form 16, or if you did not tell your employer, claim it in the return with rent receipts and the landlord's PAN where required. Check that the figure matches your salary break-up. The new regime does not allow it. | Old regime only; keep rent proofs | ACT61/25 mapping [V] | W2 | S6 |
| 57 | How do I report capital gains from shares in my ITR? | Download the capital gains statement from your broker, match the sales with your AIS, separate short-term and long-term gains, and enter them in the capital gains schedule of ITR-2 or ITR-3, with purchase and sale values. Report any losses so that they can be set off or carried forward. Foreign shares need extra schedules. | Match broker report to AIS | ITD ITR-2 help; schedule rules [V] | W9 | S7 |
| 58 | How do I choose between the old and new tax regime? | List your income, HRA, home loan interest and deductions, then compute tax under both regimes and compare. If you have no business income, you can usually choose each year in a return filed by the due date. Use our helper or ask us to run both. Slabs and rules should be verified. | Compute both, then choose | ITD; rules [V] | W12 | C1 |
| 59 | How do I file returns for earlier years I missed? | List the years, collect income documents, check the AIS for each year and see which window applies: belated return if it is still open, updated return if the belated window has closed and the time limit allows. Pay any tax, interest and extra tax due. Do not wait if you need the returns for a loan. | Year-by-year window check | ITD belated and updated return help [V] | W11 | P5 |
| 60 | How do I start ITR filing with C S Rushil & Co.? | Send us a WhatsApp message at +91 72001 49711 with your income types and any deadline, or book a 15-minute consultation. We will confirm which documents to share and how to share them securely, then reconcile your AIS and Form 26AS, advise the form and regime, and share the draft with you before filing. | Start on WhatsApp or book a call | Firm process; sharing method FIRM-FILL | W1 | MP |

### 6.4 Document and deadline (15)

| # | Exact question | Direct answer (40-80 words) | Supporting detail | Source or verification note | WhatsApp CTA | Best page |
|---|---|---|---|---|---|---|
| 61 | What documents do I need to file ITR as a salaried employee? | You need your PAN and Aadhaar, Form 16 from each employer, bank interest certificates, rent receipts and landlord PAN if you claim HRA, home loan interest certificate, proofs of deductions if you choose the old regime, and your AIS and Form 26AS. Add broker statements if you sold shares or funds. | Form 16 plus AIS and 26AS | ITD; rent proof rule [V] | W2 | S3 |
| 62 | What documents do freelancers need for ITR filing? | Freelancers need PAN, Aadhaar, bank statements showing receipts, invoices, a record of expenses if filing under regular books, TDS certificates from clients, GST returns if registered, and proof of advance tax paid. For foreign clients, keep the invoices and bank advice showing receipts. Your AIS and Form 26AS should also be checked. | Invoices, receipts, TDS and advance tax | ITD; rules [V] | W5 | S3 |
| 63 | What documents does a small business owner need for ITR? | A small business owner needs PAN, Aadhaar, bank statements, sales and purchase records or books, expense details, GST returns if registered, TDS certificates, loan statements, and asset details. If cash is a large part of sales, keep records that explain deposits. Your AIS and Form 26AS should be checked. | Books or records, bank, GST, TDS | ITD; rules [V] | W6 | S3 |
| 64 | What documents do senior citizens need for ITR filing? | Senior citizens need PAN, Aadhaar, pension certificate or Form 16 from the pension payer, bank interest certificates, Form 16A for TDS on interest, rent records if any, medical insurance and deduction proofs if the old regime is chosen, and bank details for refunds. Keep your AIS and Form 26AS handy. | Pension, interest, TDS | ITD; deduction rules [V] | W7 | A5 |
| 65 | What documents are needed to report capital gains? | For shares and mutual funds, you need the broker's capital gains statement and the consolidated statement from the registrar. For property, you need the purchase and sale deeds, cost of improvement records and, for older purchases, valuation details. Check the AIS entry matches. Property and foreign cases have extra rules. | Statements plus AIS match | ITD; rules [V] | W9 | S7 |
| 66 | What is the due date for ITR for individuals without business income? | The usual due date for individuals and HUFs without business income to file their return is 31 July after the end of the year, subject to any extension announced by the CBDT. For FY 2025-26 that date was 31 July 2026. Dates can change, so check the current notification. | Usually 31 July | ITD and CBDT [V] | W8 | T3 |
| 67 | What is the due date for ITR with business or professional income? | Under the dates on our reference table, business or professional income without a tax audit is due on 31 August following the year, while audit cases have a later date. Recent law changes and extensions affect these dates, so check the current due date on the portal or in our reference before relying on it. | 31 August for non-audit; audit later | FA26 and CBDT [V] | W8 | T3 |
| 68 | What is the last date to file a belated return? | A belated return can generally be filed until a cut-off date after the end of the relevant year, which for FY 2025-26 is stated by our reference as 31 December 2026. After that, only an updated return may be possible. Confirm the current cut-off and the fee before filing. | Cut-off for this year: 31 December 2026 [V] | ITD; date [V] | W8 | P1 |
| 69 | What is the last date to revise a return? | A revised return can be filed until a cut-off date set by law. Our reference states 31 March 2027 for FY 2025-26, and a late revision may attract a fee. Check the current window on the portal, because recent amendments changed some timelines. | Cut-off for this year: 31 March 2027 [V] | ITD; date [V] | W10 | P2 |
| 70 | What is the time limit for filing an updated return? | An updated return, ITR-U, can be filed within a fixed number of months after the end of the relevant assessment or tax year, which our reference states as 48 months. It carries additional tax and cannot be used for refunds. It is not available once certain proceedings have begun. Verify the limit for your year. | 48 months in our reference [V] | ITD; limit [V] | W11 | P5 |
| 71 | What are the advance tax due dates for FY 2026-27? | Advance tax is paid in four instalments, roughly mid-June, mid-September, mid-December and mid-March, with a rising cumulative share of your estimated tax due by each date. Exact dates, shares and who must pay are set by law, so confirm them in our advance tax guide or on the portal before paying. | Four instalments a year | ITD tax payment help [V] | W5 | S1 |
| 72 | Within how many days must I e-verify my return? | After filing, you must e-verify within a time limit set by the rules. Our page states 30 days from the date of filing. Returns not verified in time are treated as not filed, and you may need to file late. Verify the current limit and do the e-verification promptly. | 30 days in our page [V] | ITD e-verify help; limit [V] | W8 | S4 |
| 73 | When will I get Form 16 from my employer? | Employers issue Form 16 after the end of the financial year, usually by a date in mid-June set by the rules. If you changed jobs, ask each employer. If Form 16 is delayed, you can still use your payslips, AIS and Form 26AS to prepare the return. Verify the current issue date. | Usually mid-June | ITD; date [V] | W2 | S3 |
| 74 | How long should I keep my tax records? | Keep returns, acknowledgements, Form 16, proofs of deductions and statements for as long as the department can reopen or question a year, which is several years and longer for some cases. A safe habit is to keep them for at least six years. Verify the time limits for your situation. | Keep acknowledgements and proofs safely | ACT25 time limits [V] | W1 | S3 |
| 75 | Which documents do I need to file belated returns for several years? | For each missed year, gather Form 16 or income proofs, bank statements, interest certificates, broker statements, rent and investment details, and the AIS and Form 26AS. Also note any tax already paid. We then check which return type is allowed for each year and prepare them together. | Rebuild each year's records | ITD; rules [V] | W11 | P5 |

### 6.5 Cost and timeline (15)

| # | Exact question | Direct answer (40-80 words) | Supporting detail | Source or verification note | WhatsApp CTA | Best page |
|---|---|---|---|---|---|---|
| 76 | What affects the cost of ITR filing in Chennai? | The cost usually depends on the ITR form, the number of income types such as salary, capital gains, rent or business income, the number of years, whether books or an audit are involved, and how complete your documents are. We do not publish fee figures here. We explain the scope and fee before we start. | Drivers only, no fee figures (ICAI) | Firm process; ICAI-CHECK | W1 | PX |
| 77 | Is filing an income tax return free on the government portal? | The e-filing portal does not charge you a fee to file a return. You still pay any tax and interest due. Professional help, or paid software, is a separate choice that depends on how complex your return is. Check the portal for current information. | Portal filing has no filing fee [V] | ITD [V] | W1 | C4 |
| 78 | How long does it take to file an ITR with a CA? | The time depends on how fast documents reach us and how many income types you have. A simple salaried return needs less time than one with capital gains or business income. We confirm the timeline on WhatsApp after seeing your documents, and we do not promise refund timing, which the department controls. | FIRM-FILL for typical ranges | Firm process; FIRM-FILL | W1 | PX |
| 79 | How long does an income tax refund take? | Refund time depends on e-verification, processing by the department, and your bank details. Many refunds arrive within weeks of processing, but timing varies and we cannot promise a date. Delays often come from an unvalidated account, PAN-Aadhaar issues, TDS mismatches or adjustment against an old demand. | Controlled by the department | ITD refund help [V] | W10 | P3 |
| 80 | How long does e-verification take? | E-verification itself takes a few minutes online with Aadhaar OTP or net banking. After that, the department processes the return, and the timing of processing is separate. If your OTP or bank link fails, resolve it soon, because the verification window is limited. | Minutes to do; processing is separate | ITD e-verify help | W8 | S4 |
| 81 | What is the late fee for filing ITR after the due date? | A late fee may apply when you file a belated return. Our reference states Rs 5,000, or Rs 1,000 if total income is up to Rs 5 lakh, plus interest on unpaid tax. Fees depend on the year and the law at the time, so check the current rule before paying. | Fee amounts as per our reference [V] | ITD; fee [V] | W8 | T3 |
| 82 | Is interest paid on income tax refunds? | Yes, interest is generally paid on refunds for the period of delay, at a rate set by law, which our page states as 0.5% a month. How the period is counted depends on whether the return was filed on time. Check the current rate and rule for your year. | 0.5% a month per our page [V] | ITD; rate [V] | W10 | P3 |
| 83 | How much extra tax applies on an updated return? | An updated return carries additional tax on top of the tax and interest due, and the percentage rises the later it is filed. Our page lists 25%, 50%, 60% and 70% by time band. These percentages and bands should be verified for your year, and we compute the exact amount before you decide. | Percentages per our page [V] | ITD; percentages [V] | W11 | P5 |
| 84 | How soon after receiving Form 16 can I file my return? | You can file once your Form 16, AIS and Form 26AS are ready and the portal has opened the return utility for that year. Filing early gets any refund processed sooner, but wait if AIS entries are still being updated. We check that data before filing. | Check AIS has updated first | ITD; utility timing [V] | W2 | S3 |
| 85 | How long does it take to collect documents for an ITR? | For a salaried person with Form 16, it can take a day or two. For capital gains, business income or several years, it can take longer because statements and records must be gathered. Our checklist helps you start early. Tell us the deadline you face and we will tell you the next step. | Start with the checklist | Firm experience; FIRM-FILL | W14 | S3 |
| 86 | How long does it take to file returns for previous years? | The time depends on how many years, how complete your records are and what the AIS shows. Gathering records is usually the slowest step. We prepare years together and confirm timelines after reviewing documents. We cannot promise processing times, which depend on the department. | Records are the slowest step | Firm process; FIRM-FILL | W11 | P5 |
| 87 | How long does a rectification request take? | After you file a rectification online, the department processes it and issues an order, and the time is not in your control. File it promptly with correct details, check the status on the portal, and keep the acknowledgement. We follow up for clients where credit was missed. | Processing time set by the department | ITD rectification help [V] | W10 | P2 |
| 88 | Do I have to pay tax and interest before filing a belated return? | Yes, you should pay any tax due along with interest before filing, using the e-pay tax service, and enter the challan details in the return. A late fee may also apply. We calculate the amount for your case, so you pay the right figure. | Pay tax, interest and fee, then file | ITD; fee [V] | W8 | P1 |
| 89 | Is there a government fee to e-verify or download ITR-V? | There is no government fee to e-verify online, and you generally do not need to send a paper ITR-V if you verify electronically. Be careful with any website or agent that asks for payment for e-verification. Use only the official incometax.gov.in portal for verification. | Use only the official portal | ITD [V] | W8 | S4 |
| 90 | Can the cost of filing change if my income changes mid-year? | Yes, the scope can change if new income types appear, such as capital gains or business income, because the form and work change. Tell us about changes early. We re-check the form and regime and explain any change in scope before we continue. | Scope, not price lists, drives cost | Firm process; ICAI-CHECK | W1 | PX |

### 6.6 Risk and penalty (15)

| # | Exact question | Direct answer (40-80 words) | Supporting detail | Source or verification note | WhatsApp CTA | Best page |
|---|---|---|---|---|---|---|
| 91 | What happens if I do not file my income tax return? | If you are required to file and do not, you may face a late fee, interest on unpaid tax, loss of the right to carry forward some losses, and in some cases a notice or penalty. A return is also needed for loans and visas. Do not ignore it; file as soon as possible. | Late fee, interest and lost benefits | ITD; consequences [V] | W8 | P1 |
| 92 | What is the penalty for late filing of ITR? | The usual consequence is a late fee when filing a belated return, along with interest on unpaid tax. Our page states Rs 5,000, or Rs 1,000 for lower incomes. More serious consequences apply only in some cases such as deliberate concealment. Check the current fee and rules. | Fee amounts per our page [V] | ITD; fee [V] | W8 | P1 |
| 93 | Is interest charged if I pay tax late? | Yes. Interest applies when tax is paid after the due date and when advance tax instalments fall short, even if you file on time. Under the Income-tax Act, 2025, these provisions are mapped to different section numbers. Verify the rate, method and section numbers for your year. | Interest runs from the due date | ACT61/25 mapping [V] | W5 | S1 |
| 94 | Can I lose the right to carry forward losses by filing late? | In general, certain losses, such as business and capital losses, can be carried forward only if the return is filed by the due date, while house property loss is treated differently. A belated return can therefore cost you the carry-forward. The rule has conditions, so check them for your case. | Late filing can lose loss carry-forward | ITD; rule [V] | W9 | P1 |
| 95 | What happens if I file the wrong ITR form? | Filing the wrong form can make the return defective, which means the department may ask you to correct it within a time limit, and the return may be treated as invalid if not corrected. Check the form against your income types and AIS before filing, or use our selector. | Wrong form can make the return defective | ITD; consequence [V] | W13 | T2 |
| 96 | What happens if I do not e-verify my return? | A return that is not verified within the allowed time is treated as not filed. You would then need to file again, possibly as a belated return with a fee, and refunds are not processed. E-verify as soon as you submit, using the options on the portal. | Unverified return is invalid | ITD e-verify help; limit [V] | W8 | S4 |
| 97 | What if I ignore a mismatch between my return and AIS? | The department compares returns with AIS. A mismatch can lead to an adjusted intimation or a notice asking you to explain. Reconcile your return with AIS before filing, and use AIS feedback for wrong entries. If a notice arrives, see our notice reply page for the next steps. | Mismatches can trigger follow-up | ITD AIS help [V] | W10 | P4 |
| 98 | Can I be penalised for claiming wrong deductions? | If a deduction is wrongly claimed, the department may disallow it, charge tax and interest, and in cases of misreporting or under-reporting, levy a penalty. Claim only what you can prove with documents. If you find a wrong claim after filing, a revised or updated return may fix it. | Keep proofs; correct errors early | ACT61/25 mapping [V] | W10 | P2 |
| 99 | Are large cash deposits a problem for my return? | Large cash deposits are reported to the department and appear in the AIS. A deposit is not a penalty by itself, but you may be asked to explain its source, so keep records. Reporting limits and related rules should be verified for your case. | Reporting trigger, not a penalty | ITD AIS help; limits [V] | W6 | S2 |
| 100 | What if my employer did not deposit the TDS? | If TDS is deducted from your salary but does not appear in your Form 26AS, you may not get credit for it in your return until the employer corrects their statement. Ask the employer to fix it and keep the payslip. We help clients follow up and file correctly. | Credit needs the deductor's report | ITD help pages [V] | W10 | P4 |
| 101 | Can the department adjust my refund against an old demand? | Yes. If an earlier year shows an unpaid demand, the department may adjust your current refund against it, usually after giving you a chance to respond. Check the demand details in the portal and reply on time. If the demand is wrong, you can dispute it. | Check e-proceedings for old demands | ITD; rule [V] | W10 | P3 |
| 102 | What if I claim a refund by mistake or overclaim TDS? | A wrong refund claim may lead to an adjustment, notice, interest or penalty. If you notice an error after filing, correct it with a revised return within the window. Always match TDS claims with Form 26AS before filing so that the credit is supported. | Match TDS with Form 26AS | ITD; consequence [V] | W10 | P2 |
| 103 | What if I hide small income like interest or gifts? | Income reported in the AIS, such as bank interest, is visible to the department, so leaving it out can cause a mismatch and a notice. Declare all taxable income. If you left something out, a revised or updated return can correct it, with tax and possibly extra tax. | AIS shows reported interest | ITD AIS help [V] | W10 | P4 |
| 104 | Can an updated return be refused? | Yes. An updated return is not available in some situations, such as when it would reduce tax, claim a refund, increase a loss, or when certain proceedings have already begun for that year. Check the conditions for your year before relying on this route. | Strict conditions apply | ITD; conditions [V] | W11 | P5 |
| 105 | What if my PAN is inoperative when I file? | An inoperative PAN can prevent filing, refunds and some portal services. Link PAN with Aadhaar, check the status on the portal and pay any fee required, then file. Rules and deadlines for linking have changed, so verify the current requirement. | Fix PAN-Aadhaar status first | ITD; rule [V] | W10 | P3 |

### 6.7 'Do I need this?' (15)

| # | Exact question | Direct answer (40-80 words) | Supporting detail | Source or verification note | WhatsApp CTA | Best page |
|---|---|---|---|---|---|---|
| 106 | Do I need to file ITR if my income is below the basic exemption limit? | Generally no, if your total income is below the basic exemption limit and no other trigger applies. But you may still need to file if you hold foreign assets, have large deposits or spending of the kinds the rules list, or want a refund of TDS. Limits and triggers change, so verify them. | Check triggers beyond income | ITD; limits [V] | W1 | MP |
| 107 | Do I need to file ITR if my employer already deducted TDS? | Possibly yes. TDS is an advance payment, not a return. If your total income is above the exemption limit, you generally must file. You should also file to claim a refund if too much tax was deducted, or to report income beyond salary. Check your Form 16 and AIS. | TDS does not replace filing | ITD; rule [V] | W2 | A1 |
| 108 | Do I need to file ITR if I only have agricultural income? | Agricultural income is generally not taxed, but it may be counted for rate purposes when you have other income, and some returns ask you to report it. Whether you must file depends on all your income. Check the rule for your case, as limits and treatment can change. | Depends on other income | ITD; rule [V] | W1 | MP |
| 109 | Do I need to file ITR if I have a foreign bank account or shares? | If you are a resident, you generally must report foreign assets in the return even if they earned no income, and you may need ITR-2 or ITR-3 with Schedule FA. Rules differ for non-residents. Check applicability, and see our guide on foreign RSUs if you hold employer shares. | Reporting duty for residents | ITD; rule [V] | W3 | S7 |
| 110 | Do senior citizens need to file ITR? | Senior citizens must file if their total income is above the exemption limit that applies to them, or if another trigger applies, and they may file to claim a refund of TDS on interest. Some relief from filing exists for certain seniors with only pension and interest from one bank, subject to conditions that should be verified. | Relief exists in some cases | ITD; conditions [V] | W7 | A5 |
| 111 | Do students or homemakers with income need to file ITR? | They file when their own total income is above the exemption limit or when another trigger applies, such as interest on deposits above a limit or capital gains. Even when not required, filing creates a record useful for loans and visas, and can recover TDS on interest. Check the rule for your case. | Own income decides | ITD; limits [V] | W1 | S3 |
| 112 | Do I need to file ITR if I have a small freelance income? | If your total income is above the exemption limit, yes. Even below it, filing can help with loans, visas and client requests, and to claim TDS. Freelancers must also consider advance tax and, in some cases, GST. Ask us to check which rules apply to you. | Limit applies to total income | ITD; limits [V] | W5 | A2 |
| 113 | Do I need to file ITR if I made a loss on shares? | Yes, if you want to carry forward the loss, you generally need to file a return on time. Even if no tax is due, reporting the loss lets you set it off against future gains, subject to rules. Check the filing deadline and the conditions that apply to your type of loss. | Filing on time preserves loss carry-forward | ITD; rule [V] | W9 | S7 |
| 114 | Do I need to file ITR if I have a second house? | If your total income is above the exemption limit, yes, and a second house may need ITR-2 rather than ITR-1, because ITR-1 allows only one house property. Rent, deemed rent and home loan interest are reported according to the rules. Check the form and treatment for your case. | More than one house means ITR-2 | ITD; rule [V] | W2 | S6 |
| 115 | Do I need to file ITR to get a home loan or visa? | Not legally for the loan itself, but banks and visa offices often ask for the last few years of returns and acknowledgements as proof of income. If you missed years, we can check whether belated or updated returns are possible. Start early, since processing takes time. | Returns are common proof of income | Firm experience | W11 | P5 |
| 116 | Do I need to file ITR if I closed my business? | Yes, for the period in which you earned income, if your income is above the exemption limit or another trigger applies, including the final year of business. Keep your books and records and report any sale of assets. We can help with the closing-year return and related steps. | Report income up to closure | ITD; rule [V] | W6 | A4 |
| 117 | Do I need to file ITR for a gift or inheritance? | A gift or inheritance is not always taxable, and the rules depend on who gives it and its value. It may still need to be reported if it earns income, such as interest or rent later. Ask us to check your case, as the rules have conditions and changed with the new Act. | Taxability depends on donor and value | ACT61/25 mapping [V] | W1 | MP |
| 118 | Do I need a separate ITR if I am a partner in a firm? | Yes, as an individual you file your own return, usually ITR-3 if you receive remuneration or interest as a partner, in addition to the firm's own return. The firm files ITR-5 or similar. Check the form and the rules on partner remuneration for your case. | Partner files personal ITR-3 | ITD forms; rule [V] | W4 | C2 |
| 119 | Do I need to file ITR if my income is only from interest? | If total income, including interest, is above the exemption limit, yes. Even if below, you may file to claim a refund of TDS deducted by the bank. Some senior citizens have relief in certain cases. Check the rule for your case, along with the AIS interest entries. | Interest counts as income | ITD; limits [V] | W7 | A5 |
| 120 | Do I need a CA for a simple salary-only return? | Not always. If you have one employer, clear pre-filled data and no other income, self-filing on the portal can be enough. Consider help if your AIS shows items you do not recognise, you changed jobs, you sold shares or you are unsure about the regime. Our comparison page helps you decide. | Self-filing is fine for simple cases | ITD how-to pages | W1 | C4 |

### 6.8 Audience-specific (15)

| # | Exact question | Direct answer (40-80 words) | Supporting detail | Source or verification note | WhatsApp CTA | Best page |
|---|---|---|---|---|---|---|
| 121 | How should a salaried employee in Chennai file ITR? | Collect Form 16 from each employer, rent and deduction proofs, and your AIS and Form 26AS. Choose the form, usually ITR-1 or ITR-2, compare the old and new regimes, report other income, and e-verify. We do these checks and filing for salaried clients from our Anna Nagar office or online. | Form 16 plus AIS | ITD; forms [V] | W2 | A1 |
| 122 | How should an IT employee with ESOPs file ITR? | Check Form 16 and AIS, then report salary, perquisite on ESOPs as shown in your Form 16, and capital gains on any share sale, usually in ITR-2. If you hold foreign shares or RSUs, report them in Schedule FA. We help IT employees in OMR and elsewhere reconcile these items. | Often ITR-2 | ITD; rules [V] | W3 | A1 |
| 123 | How should a freelancer with foreign clients file ITR? | Report professional income under presumptive taxation if eligible, or regular books otherwise, using ITR-4 or ITR-3. Keep invoices and bank advice for foreign receipts, pay advance tax and check GST and LUT rules separately. We work with freelancers in Chennai, many online. | Scheme choice and advance tax | ITD; rules [V] | W5 | A2 |
| 124 | How should a YouTuber or content creator file ITR? | Income from platforms is usually business or professional income, filed in ITR-3, or ITR-4 if you qualify for presumptive taxation. Keep payout statements and expense records, check TDS and any foreign withholding, and pay advance tax. Check whether GST applies to you. | Platform income is business or profession | ITD; rules [V] | W5 | A2 |
| 125 | How should a doctor file ITR? | A doctor with practice income files ITR-3 with books, or ITR-4 under presumptive taxation if eligible, and reports any TDS on fees from hospitals. Keep receipts, expense records and bank statements, and watch the tax audit limits. We help doctors in Chennai choose the scheme. | Presumptive or books | ITD; limits [V] | W4 | A3 |
| 126 | How should a lawyer or consultant file ITR? | Professionals usually file ITR-3 or, if eligible for presumptive taxation, ITR-4. Reconcile receipts with Form 26AS because clients deduct TDS, keep expense records if you use books, and pay advance tax in instalments. Check the audit and presumptive limits for your year. | Reconcile TDS from clients | ITD; limits [V] | W4 | A3 |
| 127 | How should a shop owner file ITR? | A small shop owner files ITR-4 if eligible for presumptive taxation, otherwise ITR-3 with books. Reconcile sales with GST returns, keep records that explain cash deposits, and pay advance tax if due. Limits for presumptive taxation and audit apply, so verify them. We help traders in Chennai. | Match GST, cash and ITR | ITD; limits [V] | W6 | A4 |
| 128 | How should an F&O or intraday trader file ITR? | F&O and intraday trading is generally treated as business income, filed in ITR-3, with turnover computed under the rules and possible audit and loss carry-forward. Use your broker's profit and loss report and check it against AIS. Audit limits and turnover rules should be verified. | Business income; ITR-3 | ITD; rules [V] | W9 | A4 |
| 129 | How should a pensioner file ITR? | A pensioner reports pension, bank and deposit interest and any rent, usually in ITR-1 or ITR-2. Check the TDS on interest in Form 26AS, give valid bank details for a refund, and verify the return. We offer phone support and in-person visits at our Anna Nagar office. | Check TDS on interest | ITD; rules [V] | W7 | A5 |
| 130 | How should a landlord file ITR for rental income? | Report rent under income from house property after the standard deduction and municipal taxes, and claim home loan interest as the rules allow. Keep rent agreements and tax receipts. If you have more than one house, you will usually need ITR-2. Verify the deductions available for your regime. | More than one house means ITR-2 | ITD; deductions [V] | W2 | S6 |
| 131 | How should a college student with part-time income file ITR? | File only if your total income crosses the exemption limit or another trigger applies, but filing can help create a record and recover TDS. Use the form that matches the income, which may be ITR-1 or ITR-4 for simple stipend or freelance income. Keep Form 16 or payment records. | Filing builds a record | ITD; limits [V] | W1 | S3 |
| 132 | How should a homemaker with FD interest file ITR? | Report interest from deposits as income from other sources, check the TDS in Form 26AS, and file if total income crosses the exemption limit or to claim TDS refund. Provide a validated bank account. If gifts from family are involved, ask us about the rules. | Interest and TDS refund | ITD; limits [V] | W7 | S3 |
| 133 | How should a first-time filer file ITR? | Register or log in on incometax.gov.in with your PAN, gather Form 16 or income proofs, check the AIS, choose the right ITR form, enter details, pay any balance, submit and e-verify. If you have only salary, self-filing may work. If you feel unsure, we can walk you through it. | Start with the document checklist | ITD how-to pages | W14 | S3 |
| 134 | How should a gig worker or delivery partner file ITR? | Platform earnings are usually business income. If eligible, you may declare presumptive income in ITR-4, otherwise ITR-3. Keep payout summaries, check TDS or platform reports in AIS, and pay advance tax if due. Check the limits for your year and whether GST applies. | Platform earnings are business income | ITD; rules [V] | W5 | A2 |
| 135 | How should a partner in a firm file ITR? | A partner files a personal return, usually ITR-3, reporting remuneration and interest from the firm and any other income. The firm files its own return. Check how the firm's books treat your share, and watch rules on partner remuneration limits. We can coordinate with the firm's filing. | Personal ITR-3 plus firm return | ITD; rules [V] | W4 | C2 |

Best-page codes refer to Section 4.0. Answers that mention the old regime, presumptive limits or fees repeat the [V] label in the source column; the public page shows a single 'last reviewed' line with the label.

## 7. GEO and local AI visibility plan

**Known GBP facts (fact sheet, 2 Nov 2026):** the profile shows 4.8 stars and 58 reviews; do not put the rating or count on the website or in schema (ICAI advertisement rules and Google's self-serving review rules). The profile wrongly shows "Open 24 hours"; fixing it is the first local action. Only office: Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai - 600040; Mon to Sat 9:30 AM to 6:30 PM, Sunday closed; +91 72001 49711; admin@csrushil.com.

### 7.1 GBP checklist (ITR focus)

| # | Item | Action | Owner | Done when |
|---|---|---|---|---|
| 1 | Hours | Replace "Open 24 hours" with Mon-Sat 9:30 AM-6:30 PM, Sunday closed; add holiday hours | Firm | Profile shows correct hours |
| 2 | Name, address, phone | Match the website footer and `GoogleProfileStrip` exactly (name, address, phone, plus code) | Marketing | Character-for-character match |
| 3 | Primary category | Choose the closest category in the picker (candidates: Chartered accountant, Tax consultant); confirm availability in the picker; no keyword stuffing in the name | Marketing | Category set |
| 4 | Secondary categories | Add 2 to 3 relevant ones (candidates: Tax consultant, Tax preparation service, Accounting firm); confirm in picker | Marketing | Categories set |
| 5 | Services | Add the 8 ITR services in 7.3 with descriptions and no prices | Marketing | 8 services listed |
| 6 | Description | Paste the 7.4 description | Marketing | Description live |
| 7 | Attributes | Set the attributes in 7.5 that the picker offers for this category | Marketing | Attributes set |
| 8 | Products or links | Add website links per service: MP and A1 to A5 where the profile allows | Marketing | Links tracked with UTM |
| 9 | Photos and video | Follow the 7.6 plan; no stock images of fake offices; no client documents | Firm | 12 photos, 1 video |
| 10 | Posts | Publish 3 posts a week (7.7) | Marketing | Calendar followed |
| 11 | Q&A | Seed 10 questions (7.8) and answer them as the owner | Marketing | 10 Q&As |
| 12 | Reviews | Ask every client with the 7.9 message; reply to all reviews with 7.10; never offer incentives, never write or edit reviews | Firm | Reply rate tracked |
| 13 | Appointment link | Set to https://calendly.com/ceo-csrushil/30min | Marketing | Link live |
| 14 | Messaging | Keep WhatsApp number as the chat contact; confirm reply times (FIRM-FILL) | Firm | Tested |
| 15 | UTM and tracking | UTM source=gbp&medium=organic&campaign=itr on every link; GA4 event for call and WhatsApp clicks | Marketing | Events firing |
| 16 | Profile health | Monthly check for suggested edits, duplicate listings and spam | Marketing | Monthly log |

### 7.2 GBP categories

| Slot | Candidate | Note |
|---|---|---|
| Primary | Chartered accountant | Confirm it is offered in the category picker for India; otherwise use Tax consultant. Do not change the primary category without checking the current Maps rankings |
| Secondary | Tax consultant | Core for ITR |
| Secondary | Tax preparation service | Confirm availability |
| Secondary | Accounting firm | Confirm availability |

### 7.3 GBP service list (no prices; each description is 300 characters or fewer)

| Service name | Description | Chars |
|---|---|---|
| Income tax return filing for salaried people | ITR filing for salaried people in Chennai with Form 16, AIS and Form 26AS reconciled, form and regime review, and e-verification help. Start on WhatsApp or book a 15-minute consultation. | 186 |
| ITR for freelancers and professionals | Return filing for freelancers, consultants and doctors, with presumptive income or books explained, advance tax planning and records you need. Online or at our Anna Nagar office. | 178 |
| ITR for small business owners | Return filing for shops, traders and proprietors: scheme choice, cash and GST reconciliation, books and advance tax. Share documents on WhatsApp to begin. | 154 |
| Capital gains reporting in ITR | Reporting of share and mutual fund gains and losses in your return, matched to broker statements and AIS, with loss carry-forward explained. Property and foreign cases are handled separately. | 191 |
| Belated, revised and updated returns | Help with missed due dates, errors after filing and earlier years not filed, with the right route and timing checked first. Rules and dates are verified before we advise. | 170 |
| Income tax refund follow-up | Checking why a refund is delayed: bank validation, PAN-Aadhaar link, TDS credit and adjustments, then rectification or follow-up on the portal. We cannot promise refund dates. | 175 |
| AIS and Form 26AS reconciliation | Line-by-line check of AIS, TIS and Form 26AS against your records before filing, with AIS feedback for wrong entries, so your return matches what the department sees. | 166 |
| Advance tax planning | Estimating tax for the year and planning instalments for freelancers, professionals, landlords and investors, with reminders before each date. Dates are verified each year. | 172 |

### 7.4 GBP business description (468 of 750 characters)

> C S Rushil & Co. is a firm of chartered accountants in Anna Nagar, Chennai, led by CA Rushil C S. We help individuals, professionals, freelancers and small businesses with income tax return filing, AIS and Form 26AS checks, regime comparison, belated and revised returns and refund follow-up, alongside GST, audit, company registration and bookkeeping. We work from our office and online across Tamil Nadu and India. Start on WhatsApp or book a 15-minute consultation.

ICAI-CHECK: confirm the word "free" before adding it to the consultation line.

### 7.5 Attributes

| Attribute | Setting |
|---|---|
| Online appointments | Yes (video consultation) |
| Identifies as | Only those the firm chooses; do not guess |
| Wheelchair accessible entrance / parking | FIRM-FILL after a site check |
| Languages | English and Tamil (confirm with the team) |
| Hours | Mon-Sat 9:30 AM-6:30 PM; Sunday closed |

### 7.6 Photo and video plan

| Asset | Detail | Rule |
|---|---|---|
| Exterior and entrance | 2 photos with the building number and signage visible | Real photos only |
| Interior and meeting table | 2 photos | No client papers visible |
| Team | 3 photos (with consent) | Names only if the person agrees |
| CA Rushil at work | 1 photo | Matches LinkedIn photo |
| Process visuals | 3 graphics: six-step ITR process, regime comparison, ITR form selector | Labeled "illustration" |
| Video | 1 short (30 to 60 seconds): "What we check before filing your ITR", subtitled in English and Tamil | No refund promises; label dates as verify |
| Cadence | Add 1 new photo or short video per month | Keep a log of upload dates |

### 7.7 Weekly GBP post calendar (3 posts a week, 13 weeks from 9 Nov 2026)

Posts are 100 to 300 words or shorter updates, each ending with "WhatsApp Us" and one link with UTM. Dates in post text carry the verify label in the draft; the public post states the date as checked on the posting day.

| Week | Post 1 (Mon) | Post 2 (Wed) | Post 3 (Fri) |
|---|---|---|---|
| 1 | Missed the ITR due date? What belated filing means (P1) | Audit-case filers: check your due date (T3) | Documents to keep ready for your return (S3) |
| 2 | Revised vs updated return: which one fits (P2) | How to e-verify your return (S4) | Refund delayed? Eight things to check (P3) |
| 3 | AIS shows an entry you do not recognise (P4) | Old vs new regime: run both before you choose (C1/T1) | Belated return window closing: check your date (P1) |
| 4 | Advance tax instalment reminder (S1) | Years not filed? A catch-up plan for loan files (P5) | ITR form selector: which form fits you (T2) |
| 5 | Salaried with HRA and two Form 16s (S6) | Capital gains on shares and funds: what to bring (S7) | Freelancers: presumptive or books (A2) |
| 6 | Doctors and professionals: scheme and TDS check (A3) | Small shop owners: cash and GST match (A4) | Senior citizens: TDS on interest and refunds (A5) |
| 7 | Income-tax Act 2025: what changes for tax year 2026-27 (S8) | Form 16 vs AIS vs Form 26AS (C5) | Cash deposit limits and reporting (S2) |
| 8 | Self-filing vs CA-assisted: how to decide (C4) | Tax planning for the last quarter: regime proofs (C1) | ITR filing for IT employees in OMR (L2) |
| 9 | Year-end checklist: documents and proofs to collect (S3) | ITR-1 vs ITR-2 (C3) | How our ITR process works (PX) |
| 10 | Advance tax final instalment reminder (S1) | ITR-3 vs ITR-4 (C2) | Start your return early: documents checklist (S3) |
| 11 | Tax year 2026-27 starts: regime declaration to your employer (C1) | Capital gains planning before year end (S7) | Refund tracking after filing (P3) |
| 12 | Tamil Nadu clients online: how remote filing works (MP) | Local reminder: bring your Form 16 to our Anna Nagar office | Case study (only if consent is on file; else a process post) |
| 13 | Budget week: what to watch for your return (Budget date and announcements verified on the day) | 90-day recap: top five questions we answered (FAQ hub) | Planning for next filing season: calendar (T3) |

### 7.8 GBP Q&A seeds (post as the owner, then answer)

| # | Question | Answer (short) |
|---|---|---|
| 1 | Do you file income tax returns for salaried people? | Yes. Share Form 16 and your details on WhatsApp, and we check AIS and Form 26AS, advise the form and regime and file after your review. |
| 2 | Can you file my return online if I live outside Anna Nagar? | Yes. We work online across Chennai, Tamil Nadu and India by video call and secure document sharing. Our office is in Anna Nagar. |
| 3 | I missed the due date. Can you still file? | Often yes, through a belated return, depending on the year. Rules, fees and cut-off dates are verified before we advise. Message us your year. |
| 4 | Do you help freelancers with ITR? | Yes. We help choose between presumptive income and books, plan advance tax and prepare the return. |
| 5 | Can you fix a refund that has not come? | We check the usual causes such as bank validation and TDS credit and follow up on the portal. We cannot promise refund timing. |
| 6 | What documents should I bring? | Form 16, bank interest certificates, rent and deduction proofs, broker statements for gains, and your PAN and Aadhaar. We share a checklist on request. |
| 7 | Do you handle income tax notices? | Notices are a separate service. Message us a copy of the notice and the date mentioned on it. |
| 8 | What are your office hours? | Monday to Saturday 9:30 AM to 6:30 PM. Closed on Sunday. |
| 9 | Do you charge for the first consultation? | We offer a 15-minute consultation; the firm confirms the wording on cost before this answer is posted (ICAI-CHECK). |
| 10 | Do you file returns for NRIs? | We have a dedicated NRI tax services team page; message us and we will route you. |

### 7.9 Review-request WhatsApp message (257 characters)

> Hi, thank you for choosing C S Rushil & Co. for your return. If you are happy with our service, a short Google review about your experience would help others find us. Your honest feedback is welcome either way. Link: [GBP review link, FIRM-FILL]. Thank you.

Rules: send to every client after the work is done; never offer a discount or gift for a review; never ask only happy clients; never write or edit a review for a client; do not mention ratings on the website.

### 7.10 Review-response templates

| Situation | Template |
|---|---|
| Positive | "Thank you for your review. We are glad we could help with your return. If you need anything before the next filing season, message us on WhatsApp." |
| Neutral | "Thank you for the feedback. We would like to understand what could have been better. Please message us on WhatsApp so we can look into it." |
| Negative | "We are sorry your experience fell short. We cannot discuss client matters in public, but we would like to put this right. Please contact us on +91 72001 49711." |
| Suspected fake | Report through GBP; reply neutrally: "We could not find a record of this engagement. Please contact us so we can check." Never disclose client details. |

Rules: no fee figures, no admission or denial of facts about a client, no thanks that confirm a client relationship in public for confidential matters.

### 7.11 NAP and citation checklist

| Directory | Action | Note |
|---|---|---|
| Google Business Profile | Fix hours; confirm NAP | First |
| Bing Places | Create or claim; import from GBP | Feeds Copilot |
| Apple Business Connect | Claim the listing | Maps on iPhone |
| Website footer and `GoogleProfileStrip` | Same NAP, character for character | Already present |
| LinkedIn company page | NAP and services | Link to the website |
| Facebook page | NAP and services | Optional |
| Justdial | Claim; same NAP | Verify current listing; watch for paid-ad pressure |
| Sulekha | Claim; same NAP | Verify |
| Chennai and TN business directories (chambers, associations) | Join only if eligible; same NAP | Verify names and eligibility |
| ICAI member and firm directory | Ensure the firm's ICAI details match | ICAI membership and firm numbers are FIRM-FILL |
| Other CA or tax directories | List only on reputable, free listings | Skip paid link schemes |

**Directory strategy.** Twelve to fifteen correct listings beat fifty inconsistent ones. Run a NAP audit with a spreadsheet: one row per listing, columns for name, address, phone, URL, category, status, date. Fix duplicates before adding new ones.

### 7.12 Local link ideas and associations

| Idea | Detail | ICAI note |
|---|---|---|
| Resident welfare associations in Anna Nagar | Offer a talk on filing basics; link from their site or newsletter | Informational only; no solicitation beyond ICAI rules |
| IT company HR and employee groups in OMR | Guest explainer on regime choice and ESOP reporting | Check each company's policy |
| College placement cells | First-job tax explainer | Educational |
| Co-working spaces and freelancer communities | Advance tax and presumptive income session | Educational |
| Local doctors' and small-trader associations | Explainer on presumptive scheme and cash records | Educational |
| Senior citizens' clubs | Pensioner filing and refund session | Educational |
| ICAI Chennai chapter and regional events (names to be verified) | Attend and speak where invited | Follow ICAI rules on publicity |
| Local news and business media | Quote on a topical tax question (belated window, Budget) | Expert quote without self-praise |

### 7.13 Landing strategy

| Layer | Plan |
|---|---|
| Chennai | One money page plus section L1 (areas served) and links to the 12 existing `/chartered-accountant-<area>-chennai` pages. No new area URLs |
| IT corridor | Section L2 on the existing OMR/Sholinganallur page for IT employees |
| Tamil Nadu cities | Sections L3 to L5 on existing city pages; other cities covered by one "served online" section on the money page. Create a city page only if Search Console shows at least 100 impressions a month for that city's ITR query and the page can carry distinct local content, with the reason recorded in this plan |
| AI engines | Put a clear definition, a table and a verify note near the top of every page; use consistent entity names (C S Rushil & Co., Anna Nagar, Chennai, ITR filing) |

### 7.14 Local proof points allowed on site

| Proof | Allowed form |
|---|---|
| Office address and hours | Yes, matching GBP |
| CA-led, ICAI FAFD certificate, Start-up Mentor | As in the fact sheet |
| Team of 16, founded 2024 | As in the fact sheet |
| Process and checklists | Yes, firm's own documented process |
| Client results and counts | No, unless consented and ICAI-cleared (case-study template) |
| Ratings and reviews | Not on the website or schema; GBP only |

### 7.15 Thirty local queries

| # | Query | Best page | Local angle | GBP action | Internal links | CTA | Review or proof signal needed |
|---|---|---|---|---|---|---|---|
| 1 | ITR filing near me | MP | Anna Nagar office, in person or online | Add service; post P1/MP weekly | A1-A5, T1 | WhatsApp Us | Reviews naming ITR filing |
| 2 | income tax return filing Anna Nagar | L1 | Office address; walk-in hours | Primary category; hours fix | MP, A1 | Call; WhatsApp | Photos of the office |
| 3 | chartered accountant for income tax return near Anna Nagar | L1 | CA-led; Anna Nagar | Services list; Q&A 1 | MP, A1 | Book 15-minute call | Reviews naming Anna Nagar |
| 4 | ITR filing T Nagar | L1 | Served online; T Nagar area page link | Service area; post | MP, T Nagar CA page | WhatsApp | Review mentioning T Nagar |
| 5 | ITR filing Velachery | L1 | Served online; Velachery area page link | Service area | MP, Velachery CA page | WhatsApp | Review mentioning area |
| 6 | ITR filing OMR Sholinganallur | L2 | IT employees; online filing | Post S7/L2 | A1, L2 | WhatsApp | Review from IT client |
| 7 | ITR filing for IT employees OMR | L2 | Form 16, ESOP, regime | Post; Q&A | A1, S7, C1 | WhatsApp | Review mentioning ESOP |
| 8 | income tax return filing Adyar | L1 | Served online; Adyar area page link | Service area | MP, Adyar CA page | WhatsApp | Review mentioning area |
| 9 | ITR filing Mylapore | L1 | Senior citizen support; area page link | Service area; post A5 | A5, Mylapore CA page | Call | Senior client review |
| 10 | ITR filing Porur | L1 | Served online; Porur area page link | Service area; post P1 | P1, Porur CA page | WhatsApp | Review mentioning area |
| 11 | ITR filing Tambaram | L1 | Served online; Tambaram area page link | Service area | MP, Tambaram CA page | WhatsApp | Review mentioning area |
| 12 | ITR filing Kilpauk | L1 | Near Anna Nagar; Kilpauk area page link | Service area; post A3 | A3, Kilpauk CA page | WhatsApp | Doctor client review |
| 13 | ITR filing Ambattur | L1 | Small businesses; Ambattur area page link | Service area; post A4 | A4, Ambattur CA page | WhatsApp | Trader review |
| 14 | ITR filing Guindy | L1 | Salaried; Guindy area page link | Service area | A1, Guindy CA page | WhatsApp | Review mentioning area |
| 15 | income tax consultant near me Chennai | MP | Chennai CA firm; income tax filing | Category; services | MP, HNI link-only | WhatsApp | Reviews naming income tax |
| 16 | file ITR after due date Chennai | P1 | Belated return; Chennai office | Post week 1 | P1, T3 | WhatsApp now | Review from a belated filer (consented) |
| 17 | income tax refund not received Chennai | P3 | Refund follow-up | Post; Q&A 5 | P3, P4 | WhatsApp | Review mentioning refund (unscripted) |
| 18 | ITR filing for freelancers Chennai | A2 | Freelancer; online | Service; post | A2, S5 | WhatsApp | Freelancer review |
| 19 | ITR filing for doctors Chennai | A3 | Clinic; Kilpauk and Anna Nagar | Service; post | A3, S5 | WhatsApp | Doctor review |
| 20 | ITR filing for small business Chennai | A4 | Shops and traders | Service; post | A4, S2 | WhatsApp | Business review |
| 21 | ITR filing for senior citizens Chennai | A5 | Phone-first; in-person | Service; post | A5, P3 | Call | Senior review |
| 22 | CA for capital gains on shares Chennai | S7 | Shares and funds | Service; post | S7, A1 | WhatsApp | Investor review |
| 23 | old vs new regime CA Chennai | C1 | Regime comparison | Post; helper link | C1, T1 | WhatsApp | Review mentioning regime help |
| 24 | advance tax CA Chennai | S1 | Instalment planning | Post | S1, A2 | WhatsApp | Review mentioning advance tax |
| 25 | ITR filing Coimbatore | L3 | Online from Chennai | Service area; Q&A 2 | L3, MP | WhatsApp | Review from TN client outside Chennai |
| 26 | ITR filing Madurai | L4 | Online from Chennai | Service area | L4, MP | WhatsApp | Review from Madurai client |
| 27 | ITR filing Trichy | L5 | Online from Chennai | Service area | L5, MP | WhatsApp | Review from Trichy client |
| 28 | ITR filing Tamil Nadu online | MPS | Remote across TN | Service area | MP, L3-L5 | WhatsApp | Reviews from outside Chennai |
| 29 | ITR filing weekend Chennai | MP | Hours Mon-Sat; no Sunday service (do not imply) | Hours accurate; post Sat hours | MP | Call during hours | Photos of office |
| 30 | tax return filing for NRI relatives in Chennai | MP | Route to NRI page (link-only) | Q&A 10 | NRI page, MP | WhatsApp | None |

## 8. Technical SEO and schema plan

Stack facts (read from source): Next.js App Router; the money page uses `ServicePageTemplate`, which emits Service, HowTo, speakable and Breadcrumb JSON-LD, renders `FAQSection` (FAQ markup), `GoogleProfileStrip`, `CTASection` and `SiloLinks`. Blog posts use `BlogPostLayout` and are registered in `src/lib/blog.ts`. Everything below is a checklist for the developer; confirm each item in the live HTML and in Search Console before and after release.

### 8.1 Checklist

| Area | Rule for this service | Check |
|---|---|---|
| Canonical | Self-referencing absolute canonical on every page; the money page already sets `/income-tax-return-filing-chennai`. Section pages (L1 to L5) share the host page's canonical | View source on each URL |
| Titles | Under 60 characters including the brand suffix; one primary keyword near the front; no "best" or "top" | Crawl, character count |
| Meta descriptions | 155 characters or fewer; one verb and one benefit; no NRI terms on the money page; no fee figures | Crawl |
| Headings | One H1 per page; H2 as questions where the answer is a short passage; H3 for sub-points; the first paragraph under the H1 is a 40 to 80 word direct answer (the template's `#direct-answer`) | Manual |
| Images | Descriptive alt text (Section 5.11); WebP or AVIF; width and height set; lazy load below the fold; no images of client documents | Lighthouse |
| Internal links | Follow the link plans in Sections 4 and 5; descriptive anchors; at least 3 contextual links per post to the money page, an audience page and a tool; no "click here" | Link crawl |
| Mobile UX | Sticky WhatsApp and call bar; tap targets at least 44 pixels; tables scroll horizontally (`overflow-x-auto`, already used) | Device test |
| Speed and CWV | LCP under 2.5 s, INP under 200 ms, CLS under 0.1 on the money page and tools; tools load their JavaScript only on interaction | PageSpeed Insights, CrUX |
| Crawlability | Tools and posts linked from the money page and the sitemap; no orphan pages; no JavaScript-only links | Crawl for orphans |
| Indexation | Index all pages except the case-study template (noindex until consent); no noindex on audience pages unless they fail the doorway gate | URL Inspection |
| Sitemap | Add the 26 new URLs to `src/app/sitemap.ts`; set `lastmod` from real edit dates; no anchors in the sitemap | Fetch `/sitemap.xml` |
| Robots | Allow `/tools/` and `/faq/`; keep `/admin` and `/api` blocked | `/robots.txt` |
| Redirects | No URL changes planned; if an audience page is merged into the money page, 301 it to the matching section's host page; no redirect chains | Crawl |
| Duplicates | Due dates, slabs and fees stored in one config (Section 4.6) and read by the money page, T1, T3, P1, P2 and S1 so that values cannot drift; the same FAQ text is not repeated on more than two pages | Diff check |
| URLs | Lowercase, hyphenated, no dates in slugs; patterns `/blog/<slug>`, `/tools/<name>`, `/faq/<topic>`, `/case-studies/<topic>`, `/income-tax-return-filing-for-<audience>` | Review |
| Breadcrumbs | Home > Direct tax or Income tax return filing > page; BreadcrumbList on every new page | Rich Results Test |
| Freshness | Visible "Last reviewed: [date]" on every page with figures; update on any CBDT notification, Budget or Finance Act change | Calendar |
| Verify label | Every page with a date, limit, rate, fee or section carries the review line and the label (Appendix A) | QC list, Section 13 |
| Search Console | Verify the property; submit the sitemap; request indexing for P1 first; track the queries in Section 12 | GSC |

### 8.2 Schema rules by page type

| Page type | Schema | Rules |
|---|---|---|
| Money page, audience pages (A1 to A5) | Service, BreadcrumbList, FAQPage, HowTo (only the money page and A pages that show numbered steps) | Markup must match visible text; no `aggregateRating`, no `Review`; `areaServed` Chennai and Tamil Nadu (served online) |
| Sitewide | AccountingService (a LocalBusiness subtype) with address, telephone, `openingHoursSpecification` Mon to Sat 09:30 to 18:30, `sameAs` LinkedIn and GBP, `founder` CA Rushil C S | No ratings; hours must equal the corrected GBP hours |
| Blog posts (S, C, P, PX) | BlogPosting (headline, datePublished, dateModified, author Person CA Rushil C S or the firm, publisher), BreadcrumbList; FAQPage only if the FAQ block is visible; HowTo only for S4, P4 and PX | `dateModified` changes only on real edits |
| Tools (T1 to T3) | WebApplication (applicationCategory FinanceApplication, offers omitted), FAQPage | No price; no claims of accuracy beyond "planning estimate" |
| FAQ hub | FAQPage | Only for visible answers; 20 to 30 Q&As |
| Case study | None until consent; then Article | No fabricated details |
| Location sections | No new schema; host page FAQ only if visible | |

### 8.3 Validation

| Step | Tool | Pass condition |
|---|---|---|
| 1 | Google Rich Results Test | No errors; warnings reviewed |
| 2 | Schema Markup Validator | Valid JSON-LD |
| 3 | Search Console Enhancements (FAQ, breadcrumbs) | No errors after a week |
| 4 | Manual read | Each marked-up answer is visible and unchanged |
| 5 | Lighthouse and CrUX | Meets the CWV targets |
| 6 | Crawl diff before and after each release | Only intended changes |

## 9. Conversion system

Primary conversion: WhatsApp. Secondary: phone call, 15-minute consultation booking, contact form. No guarantees, no refund or saving promises, no ratings, no fee figures. The word "free" before "15-minute consultation" is ICAI-CHECK.

### 9.1 Five headlines

| # | Copy |
|---|---|
| 1 | Your Income Tax Return, Checked Against Your AIS Before It Is Filed |
| 2 | File Your ITR With a Chartered Accountant in Anna Nagar, or Online From Anywhere |
| 3 | Missed the Due Date or Found a Mistake? Get the Right Route Checked First |
| 4 | Old or New Regime? See Both Computations Before You Decide |
| 5 | One Return, Reviewed by a CA: Salary, Capital Gains, Freelance or Business Income |

### 9.2 Five subheadlines

| # | Copy |
|---|---|
| 1 | We reconcile AIS and Form 26AS with your records, pick the form, and show you the computation before we file. |
| 2 | Chennai office in Anna Nagar. Clients across Tamil Nadu and India are served by video call and secure document sharing. |
| 3 | Belated, revised and updated return options are different. We check dates and conditions first, then tell you what fits. |
| 4 | Share your income and deductions. We compute both regimes and explain the difference in plain words. |
| 5 | Tell us what you earn from. We confirm the right ITR form and the documents you need to share. |

### 9.3 Five WhatsApp CTAs

| # | Copy |
|---|---|
| 1 | WhatsApp Us to start your return |
| 2 | WhatsApp Us your Form 16 |
| 3 | WhatsApp Us about a missed date |
| 4 | WhatsApp Us your regime question |
| 5 | WhatsApp Us for a document checklist |

### 9.4 Five consultation CTAs

| # | Copy |
|---|---|
| 1 | Book a 15-minute consultation |
| 2 | Talk to a CA for 15 minutes about your return |
| 3 | Book a 15-minute call before the deadline |
| 4 | Book a 15-minute regime review |
| 5 | Book a 15-minute consultation about earlier years |

### 9.5 Trust bar (no ratings, counts or superlatives)

| Item | Source |
|---|---|
| CA-led firm, ICAI-registered | Fact sheet; ICAI membership and firm no.: FIRM-FILL |
| Anna Nagar office, Mon to Sat 9:30 AM to 6:30 PM | Fact sheet |
| Team of 16, since 2024 | Fact sheet |
| AIS and Form 26AS reconciled before filing | Firm process |
| You review the computation before we file | Firm process |
| Online across Tamil Nadu and India | Fact sheet |

### 9.6 Objection blocks

| Objection | Block copy |
|---|---|
| Is this expensive? | The fee depends on your forms, income types and years. We do not publish fee figures; we explain the scope and the fee on a 15-minute call before we start, so you decide with full information. [ICAI-CHECK] |
| Can I do it myself? | For a simple salary-only return with clear pre-filled data, often yes. If you have capital gains, business or professional income, foreign assets, a missed year or an AIS mismatch, a review can prevent a wrong form or a missed entry. Our comparison page helps you decide. |
| How long will it take? | It depends on how quickly your documents reach us and how many income types you have. We confirm a timeline on WhatsApp after seeing your documents. We cannot promise refund dates, which the department controls. [FIRM-FILL for typical ranges] |
| Will my data be safe? | We use your PAN, bank and income details only for your return. We confirm how to share documents securely when you start, and we never ask for your portal password over chat. [FIRM-FILL: add the firm's documented data-handling steps; claim nothing beyond them] |
| Why not a cheaper consultant? | Compare what is included: AIS and Form 26AS reconciliation, form and regime review, your approval before filing, e-verification help and follow-up on refunds. Ask any provider the same questions, and choose on scope and trust, not on price alone. |
| What if my case is complicated? | Capital gains, business income, missed years and foreign assets are handled by the team, and we tell you early if your case belongs to another service such as high-income planning, NRI returns or notice replies, and we route you there. |

### 9.7 WhatsApp pre-filled messages (W1 to W16; every one under 500 characters)

Link format: `https://wa.me/917200149711?text=<URL-encoded message>`. Replace bracketed placeholders in the page copy with the user's own choices where a form or tool collects them; otherwise leave them as visible prompts. The mapping to the brief's categories: new filer = W1; existing client or business = W6; notice or deadline = W8 and W16; NRI = W15; high income or foreign assets = W15; urgent = W8, W10.

| Code | Use | Message | Chars |
|---|---|---|---|
| W1 | New filer, general | Hi, I would like help filing my income tax return in Chennai. My income is from [salary / freelance / business / investments]. I have/have not been served a notice. What do you need from me to start? | 199 |
| W2 | Salaried, two Form 16s or HRA | Hi, I changed jobs this year and have two Form 16s and pay rent. I need my ITR filed and want to know if the old or new regime suits me. Can we talk for 15 minutes? | 164 |
| W3 | IT employee, ESOP or funds | Hi, I am a salaried employee in OMR with share/mutual fund sales this year. I need my income tax return filed and the regime compared. Which documents should I send first? | 171 |
| W4 | Doctor or professional | Hi, I run a clinic in Chennai. I want to know whether to file ITR-3 or ITR-4 this year and what accounts I should keep. Receipts are roughly the same as last year. Can someone advise? | 183 |
| W5 | Freelancer | Hi, I am a freelancer in Chennai earning from clients abroad. I need to file my ITR and understand advance tax. I receive money in my bank account monthly. What should I share to start? | 185 |
| W6 | Small business owner | Hi, I own a small shop in Chennai. I need my income tax return filed and want to check my cash deposits and GST sales match. Turnover is within the usual small-business range. Where do I start? | 193 |
| W7 | Senior citizen | Hello, I am a pensioner in Chennai with pension and FD interest. TDS was deducted on my interest. I would like help filing my return and checking if I get a refund. Can someone call me? | 185 |
| W8 | Deadline missed or e-verify | Hi, I missed the ITR due date for FY 2025-26. I have salary and some consulting income and need to file a belated return as soon as possible. What documents do you need today? | 175 |
| W9 | Capital gains and F&O | Hi, I sold shares and mutual funds this year and also did some F&O trades. I want my income tax return filed with capital gains and losses reported properly. What statements should I send? | 188 |
| W10 | Refund, AIS or revision | Hi, I filed my ITR but the refund has not come and TDS from one deductor is not showing in Form 26AS. I have the acknowledgement. Can you tell me what to check and fix? | 168 |
| W11 | Years not filed | Hi, I am a consultant in Coimbatore and have not filed my income tax return for the last two or three years. I need them filed for a home loan. How do we begin, and what do you need from me? | 190 |
| W12 | After the regime helper | Hi, I used the regime comparison helper on your site. My result: [paste result]. Please confirm which regime suits me and what else to check before filing. My salary is roughly [range]. | 185 |
| W13 | After the form selector | Hi, the ITR form selector suggested [form] for me. My income is from [types]. Can you confirm the form and tell me which documents you need to start? | 149 |
| W14 | Checklist request | Hi, please send me the document checklist for my income tax return. I am a [salaried person / freelancer / business owner / senior citizen]. I want to start this week. | 167 |
| W15 | NRI or high-income route | Hi, I am an NRI / have high income or foreign assets and need help with my Indian tax return. I live in [country / city]. Please route me to the right team and tell me what to share first. | 188 |
| W16 | Notice received (route) | Hi, I received an income tax notice dated [date] with a reply date of [date]. I am sharing a copy. Can you tell me the next step and who handles it? | 148 |

### 9.8 Lead magnets (five)

| # | Lead magnet | Page | Build note |
|---|---|---|---|
| 1 | Document checklist by income type (PDF) | S3, all A pages | Delivered on WhatsApp; no email wall; W14 |
| 2 | Tax regime comparison helper (calculator) | T1, C1, MP | Verify-labelled config; W12 |
| 3 | Due-date and late-fee tracker (reference plus optional WhatsApp reminder, opt-in) | T3 | Reminder only after explicit opt-in; message under 500 characters |
| 4 | Document template: rent receipt and HRA declaration, cash-source note | S6, S2 | Plain templates, not legal advice |
| 5 | ITR form selector (eligibility quiz) | T2 | W13 |

### 9.9 Form fields

| Field | Type | Required | Note |
|---|---|---|---|
| Name | text | yes | |
| WhatsApp number | tel | yes | Primary contact |
| Email | email | no | |
| Income types (salary, freelance or professional, business, capital gains, rent, other) | multi-select | yes | Drives qualification |
| Location | text or select (Chennai area, other TN city, outside TN, outside India) | yes | |
| Service | select (ITR filing, belated or earlier years, revised return, refund, regime advice, other) | yes | |
| Urgency | select (this week, this month, just exploring) | yes | |
| Optional: turnover or receipts band | select | no | Business and professionals only |
| Optional: number of years to file | select | no | |
| Optional: notice type and date | text | no | Routes to the notice page owner |
| Optional: deadline | date | no | |
| Consent line | checkbox | yes | "I agree to be contacted on WhatsApp or phone about my enquiry." |

### 9.10 Follow-up sequence (WhatsApp; each under 500 characters, one question or step, no guarantees)

Send follow-ups only to people who contacted us, within WhatsApp Business policy; stop on a reply, a booking or a request to stop.

| Step | Message | Chars |
|---|---|---|
| Instant auto-reply (0 min) | Hi, thanks for contacting C S Rushil & Co. We have your message about your income tax return. A CA from our team will reply during office hours (Mon-Sat, 9:30 AM-6:30 PM). Meanwhile, which year is your return for? | 213 |
| Qualifying reply (within the firm's confirmed reply time; FIRM-FILL) | Thanks for your message. To point you to the right next step: what are your income sources this year (salary, freelance, business, shares or rent), and is there a deadline or notice we should know about? | 203 |
| Consultation invite (after the qualifying reply) | Thanks for the details. We suggest a 15-minute call to confirm the form, the regime and the documents you need. You can pick a slot here: https://calendly.com/ceo-csrushil/30min or reply with a time that suits you. | 214 |
| 24-hour follow-up | Hi, just checking if you had a chance to look at the document checklist we sent. Share Form 16 or your statements when ready, and we will check your AIS first. Is there anything you would like us to clarify? | 207 |
| 3-day follow-up | Hi, a quick reminder about your income tax return. If a due date is near, tell us the date and we will check the right route. If you need more time, reply when ready and we will continue where we stopped. | 204 |
| 7-day follow-up | Hi, we have not heard back about your return. If you have already filed, no problem, and we can still check your AIS and refund status. If not, reply with your year and we will tell you the next step. | 200 |
| 30-day re-engagement (seasonal) | Hi, this is C S Rushil & Co. A new filing season is coming. If you would like help planning your regime, advance tax or documents early, reply here, or book 15 minutes: https://calendly.com/ceo-csrushil/30min. Reply STOP to opt out. | 232 |

### 9.11 CRO test ideas (run after week 4 with real data)

| Test | Hypothesis | Metric |
|---|---|---|
| Tool strip above fold vs below | The tools raise WhatsApp starts | WhatsApp click rate |
| Headline 1 vs 2 | AIS message vs office message | Contact start rate |
| Short vs long form | Fewer fields give more starts without hurting quality | Qualified rate |
| Sticky mobile CTA text | "WhatsApp Us" vs "WhatsApp Us your Form 16" | Click rate |
| Objection block placement | Early block raises bookings | Booking rate |

## 10. 90-day calendar (13 weeks from Monday 9 Nov 2026 to Saturday 6 Feb 2027)

**Sequencing logic.** BOFU first: weeks 1 to 3 publish the problem pages that match the live belated-return window (31 Dec 2026 [V]) and the refund and AIS questions. Weeks 4 to 7 finish the comparisons, audience pages, tools and supporting articles. Weeks 8 to 13 are optimisation weeks: the article slots draw from a GSC-led queue (below), because the architecture holds 35 pages and 13 weeks at 2 articles a week would need 26. Comparison slots after week 7 are refreshes of existing comparison pages, not new URLs. Dates, limits and fees in every item carry the verify label before publishing.

**GSC-led article queue (candidate topics; publish only if Search Console or enquiries show demand; each would be a NEW `/blog/` post and is not counted in the 35):** rent receipts and landlord PAN for HRA; updated return worked example; ITR for partners of firms; delayed Form 16 from an employer; TDS on interest for senior citizens; interest on late payment explained; tax-year 2026-27 start checklist.

### 10.1 Weekly plan: primary deliverable per week

| Week | Dates | Title | Keyword | URL | Type | Intent | CTA | Internal links | Distribution | Owner | Success metric | Expected enquiry impact |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 9 Nov 2026 to 14 Nov 2026 | Missed the ITR Due Date? How to File a Belated Return | missed ITR due date belated return | `/blog/missed-itr-due-date-belated-return` | Problem | Urgent | WhatsApp Us | MP, T3, P2, P5, S4 | LinkedIn, WhatsApp Status, GBP post, WhatsApp broadcast | Content lead; CA Rushil reviews | Indexed within 14 days; WhatsApp starts from the page set against a baseline (FIRM-FILL) | High (urgent intent) |
| 2 | 16 Nov 2026 to 21 Nov 2026 | Income Tax Refund Delayed: What to Check and What to Do | income tax refund delayed | `/blog/income-tax-refund-delayed-chennai` | Problem | Urgent | WhatsApp Us | MP, A5, P4, S4 | LinkedIn, WhatsApp Status, GBP post, WhatsApp broadcast | Content lead; CA Rushil reviews | Indexed within 14 days; WhatsApp starts from the page set against a baseline (FIRM-FILL) | High (urgent intent) |
| 3 | 23 Nov 2026 to 28 Nov 2026 | How to File ITR for Previous Years You Missed | file ITR for previous years | `/blog/file-itr-for-previous-years-not-filed` | Problem | Urgent | WhatsApp Us | MP, P1, P2, L3 | LinkedIn, WhatsApp Status, GBP post, WhatsApp broadcast | Content lead; CA Rushil reviews | Indexed within 14 days; WhatsApp starts from the page set against a baseline (FIRM-FILL) | High (urgent intent) |
| 4 | 30 Nov 2026 to 5 Dec 2026 | ITR-3 vs ITR-4: Which Form Should You File? | ITR-3 vs ITR-4 | `/blog/itr-3-vs-itr-4` | Comparison | Comparison | WhatsApp Us | MP, A3, A4, S5, T2 | LinkedIn, GBP post, email | Content lead; CA Rushil reviews | Indexed within 14 days; WhatsApp starts from the page set against a baseline (FIRM-FILL) | Medium |
| 5 | 7 Dec 2026 to 12 Dec 2026 | Documents Needed for Income Tax Return Filing | documents required for ITR filing | `/blog/itr-documents-checklist-chennai` | Article | Commercial | WhatsApp Us | MP, A1-A5, T2, C5 | LinkedIn, GBP post, email | Content lead; CA Rushil reviews | Indexed within 14 days; WhatsApp starts from the page set against a baseline (FIRM-FILL) | Medium |
| 6 | 14 Dec 2026 to 19 Dec 2026 | Capital Gains on Shares and Mutual Funds: Reporting in Your ITR | capital gains shares mutual funds ITR | `/blog/capital-gains-shares-mutual-funds-itr-2` | Article | Informational | WhatsApp Us | MP, A1, T2; link-only: capital-gains-tax-property-sale post, foreign-rsu-tax-schedule-fa-chennai post, HNI page | LinkedIn, GBP post, email | Content lead; CA Rushil reviews | Indexed within 14 days; WhatsApp starts from the page set against a baseline (FIRM-FILL) | Medium |
| 7 | 21 Dec 2026 to 26 Dec 2026 | Income Tax Return FAQs | income tax return FAQs | `/faq/income-tax-return-filing` | FAQ hub | Informational | WhatsApp Us | MP, A1-A5, P1-P5, T1-T3 | LinkedIn, GBP post, email | Content lead; CA Rushil reviews | Indexed within 14 days; WhatsApp starts from the page set against a baseline (FIRM-FILL) | Medium |
| 8 | 28 Dec 2026 to 2 Jan 2027 | Missed the ITR Due Date? How to File a Belated Return | missed ITR due date belated return | `/blog/missed-itr-due-date-belated-return` | Problem | Urgent | WhatsApp Us | MP, T3, P2, P5, S4 | LinkedIn, WhatsApp Status, GBP post, WhatsApp broadcast | Content lead; CA Rushil reviews | Indexed within 14 days; WhatsApp starts from the page set against a baseline (FIRM-FILL) | High (urgent intent) |
| 9 | 4 Jan 2027 to 9 Jan 2027 | AIS Mismatch or TDS Missing in Form 26AS: What to Do | AIS mismatch TDS not showing in 26AS | `/blog/ais-mismatch-tds-not-showing-26as` | Problem | Urgent | WhatsApp Us | MP, C5, P3, S2 | LinkedIn, WhatsApp Status, GBP post, WhatsApp broadcast | Content lead; CA Rushil reviews | Indexed within 14 days; WhatsApp starts from the page set against a baseline (FIRM-FILL) | High (urgent intent) |
| 10 | 11 Jan 2027 to 16 Jan 2027 | Advance Tax Due Dates for FY 2026-27: A Practical Guide | advance tax due dates FY 2026-27 | `/blog/advance-tax-deadlines` | Article | Informational | WhatsApp Us | MP, A2, A4, T3, C1; link-only HNI page for RSU or property spikes | LinkedIn, GBP post, email | Content lead; CA Rushil reviews | Indexed within 14 days; WhatsApp starts from the page set against a baseline (FIRM-FILL) | Medium |
| 11 | 18 Jan 2027 to 23 Jan 2027 | Old vs New Tax Regime: Which One Suits You? | old vs new tax regime | `/blog/old-vs-new-tax-regime` | Comparison | Comparison | WhatsApp Us | MP, T1, A1, S6, S8 | LinkedIn, GBP post, email | Content lead; CA Rushil reviews | Indexed within 14 days; WhatsApp starts from the page set against a baseline (FIRM-FILL) | Medium |
| 12 | 25 Jan 2027 to 30 Jan 2027 | CA-Assisted ITR Filing vs Self-Filing: How to Decide | CA vs self-filing ITR | `/blog/itr-filing-ca-vs-self-filing` | Comparison | Comparison | WhatsApp Us | MP, PX, T2, C5 | LinkedIn, GBP post, email | Content lead; CA Rushil reviews | Indexed within 14 days; WhatsApp starts from the page set against a baseline (FIRM-FILL) | Medium |
| 13 | 1 Feb 2027 to 6 Feb 2027 | Old vs New Tax Regime: Which One Suits You? | old vs new tax regime | `/blog/old-vs-new-tax-regime` | Comparison | Comparison | WhatsApp Us | MP, T1, A1, S6, S8 | LinkedIn, GBP post, email | Content lead; CA Rushil reviews | Indexed within 14 days; WhatsApp starts from the page set against a baseline (FIRM-FILL) | Medium |

*(The primary deliverable above is the lead item of the week; the full slot list is in 10.2.)*

### 10.2 Weekly standing slots (brief: 1 money-page upgrade, 2 articles, 1 comparison, 1 location or audience item, 3 FAQ answers, 3 GBP posts, 1 lead-magnet improvement, 1 proof asset)

| Week | Money-page upgrade | Article 1 | Article 2 | Comparison | Location or audience | 3 FAQ/AEO answers (Section 6 #) | 3 GBP posts | Lead-magnet improvement | Proof asset |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Hero, tool strip, verify note, late-routes summary | P1 | P2 | C1 (upgrade, embed T1 later) | L1 | #10, #11, #12 | Section 7.7 week 1 | T3 first version (static table) | Process screenshots for PX (own documents only) |
| 2 | 'Who this is for' table, problems table | P3 | P4 | C5 | A1 | #4, #5, #6 | Section 7.7 week 2 | Document checklist PDF (S3 data) | Blank AIS reconciliation worksheet |
| 3 | Documents-by-type table, FAQs 1 to 24 | P5 | S4 | C3 | A2 | #46, #47, #60 | Section 7.7 week 3 | T2 ITR form selector | ITR form decision tree graphic |
| 4 | Comparison table, why-us block, objection blocks | S1 (upgrade) | S2 (upgrade) | C2 | A4 | #31, #32, #40 | Section 7.7 week 4 | T1 regime helper | Regime helper screenshot set |
| 5 | Schema, internal links, alt text, final CTA block | S3 | PX | C4 | A3 | #76, #77, #78 | Section 7.7 week 5 | Rent receipt and HRA template | Process explainer video script |
| 6 | Coverage section (L1), Tamil Nadu online block | S6 | S7 | C1 (embed T1, final) | L2 | #91, #92, #93 | Section 7.7 week 6 | Cash-source note template | Anonymised worked example (placeholders only) |
| 7 | December date refresh from T3 config | S8 | FAQ hub /faq/income-tax-return-filing | ITR-1 vs ITR-2 answers refresh (C3) | A5 | #106, #107, #108 | Section 7.7 week 7 | Deadline reminder opt-in (WhatsApp) | Case-study template filled for consent request |
| 8 | Year-end note: Finance Act and Budget watch | Queue 1 (GSC-led, see below) | Queue 2 | Comparison answers refresh (C2, C4) | L3 | #121, #122, #123 | Section 7.7 week 8 | Checklist PDF v2 from enquiry questions | Short video: what we check before filing |
| 9 | Tools links and FAQ additions from enquiries | Queue 3 | Queue 4 | Comparison answers refresh (C5) | L4 | #61, #62, #63 | Section 7.7 week 9 | Regime helper tweaks | Anonymised AIS mismatch example |
| 10 | Refresh date and limits after any notification | Queue 5 | S1 refresh (advance tax final instalment) | C1 refresh | L5 | #64, #65, #66 | Section 7.7 week 10 | T3 tracker update | Consented testimonial request (ICAI-CHECK) |
| 11 | Tax-year start section (tax year 2026-27) | Queue 6 | P1 refresh (belated window result) | C3 refresh | A1 refresh | #94, #95, #96 | Section 7.7 week 11 | Tax-year start checklist | Process video cut-down for Reels |
| 12 | Tune hero and CTAs from test results | Queue 7 | S8 refresh | C4 refresh | A2 refresh | #109, #110, #111 | Section 7.7 week 12 | Form selector tweaks | Consented case study (if cleared) |
| 13 | Budget-week update (date and announcements verified on the day) | Budget watch post (NEW, dated) | 90-day review post | C1 and C3 refresh after Budget | A3, A4 refresh | #124, #125, #126 | Section 7.7 week 13 | Budget impact checklist | 90-day results note (internal) |

**Owners.** Content lead writes; CA Rushil C S reviews every figure and the verify label; developer builds pages, tools and schema; marketing lead publishes GBP posts and distribution; the firm supplies consented proof and FIRM-FILL values. **Proof assets** never use real client data without written consent and ICAI clearance; before consent, use templates, process graphics and the firm's own documented steps.

## 11. Distribution and authority plan

### 11.1 Channel playbook (applies to each new page; hook is customised per page in 11.2)

| Channel | Hook (pattern) | Message | CTA | Audience | Link destination |
|---|---|---|---|---|---|
| LinkedIn (firm page and CA Rushil) | A question your reader is asking this week | 3 to 5 line post with one table image; verify label in the post when a date or limit appears | WhatsApp Us link | Salaried professionals, business owners | The page, UTM source=linkedin |
| Instagram and WhatsApp Status | One-card fact with a date stamp | Single graphic: 'Missed the due date? Check this first' | Message us on WhatsApp | Individuals in Chennai | The page via link in bio or Status link |
| GBP post | Local and timely | 100 to 150 words, Section 7.7 calendar | WhatsApp Us | People searching near Anna Nagar and Chennai | The page, UTM source=gbp |
| YouTube Short or Reel | One question answered in 30 to 45 seconds | Plain speech, English with Tamil subtitles, on-screen verify note | Pinned comment with WhatsApp link | Younger filers, freelancers | The page, UTM source=youtube |
| Email (existing clients and subscribers) | Seasonal reminder | Short note with one link; opt-out line | Reply on WhatsApp | Existing clients | The page, UTM source=email |
| WhatsApp broadcast (opted-in clients only) | A deadline or checklist | Under 500 characters, one step | Reply or tap the link | Opted-in clients | The page or checklist PDF |
| Community and forum answers (local groups, freelancer and IT communities, public Q&A) | A genuine answer first | Answer fully in the thread; link only when the page adds more; follow group rules and ICAI publicity rules | Optional link | Community members | The relevant problem or audience page |
| Local partnership | Joint explainer | Session or note with a co-working space, association or college cell | Contact on WhatsApp | Members of that group | The matching audience page |
| Digital PR | Data-light explainer on a topical rule change | Pitch an expert quote (belated window, Budget, Income-tax Act 2025) | None; link in author bio | Local and business media | S8 or P1 |
| Guest post or expert quote | Practical checklist | 1 guest article on a finance or startup site; no self-praise | Author bio link | Founders, freelancers | The checklist or tool |

### 11.2 Per-new-page distribution plan (26 NEW URLs)

| Page | Specific hook | Lead channels | Link destination and UTM |
|---|---|---|---|
| S3 `/blog/itr-documents-checklist-chennai` | Documents to keep ready before you file | LinkedIn, WhatsApp broadcast, GBP | `/blog/itr-documents-checklist-chennai`, utm_campaign=itr-s3 |
| S4 `/blog/how-to-e-verify-income-tax-return` | Filed but not verified? Do this next | Reel, Status, GBP | `/blog/how-to-e-verify-income-tax-return`, utm_campaign=itr-s4 |
| S5 `/blog/presumptive-taxation-itr-4-explained` | Presumptive or books: three questions decide | LinkedIn, community | `/blog/presumptive-taxation-itr-4-explained`, utm_campaign=itr-s5 |
| S6 `/blog/salary-hra-and-second-employer-itr` | Two Form 16s? Here is how to file | LinkedIn, community, GBP | `/blog/salary-hra-and-second-employer-itr`, utm_campaign=itr-s6 |
| S7 `/blog/capital-gains-shares-mutual-funds-itr-2` | Sold shares this year? What to bring | LinkedIn, Reel | `/blog/capital-gains-shares-mutual-funds-itr-2`, utm_campaign=itr-s7 |
| S8 `/blog/income-tax-act-2025-itr-what-changes` | What the Income-tax Act 2025 changes in your return | LinkedIn, digital PR, expert quote | `/blog/income-tax-act-2025-itr-what-changes`, utm_campaign=itr-s8 |
| C2 `/blog/itr-3-vs-itr-4` | ITR-3 or ITR-4 in one table | LinkedIn, community | `/blog/itr-3-vs-itr-4`, utm_campaign=itr-c2 |
| C3 `/blog/itr-1-vs-itr-2` | ITR-1 or ITR-2 in one table | LinkedIn, Status | `/blog/itr-1-vs-itr-2`, utm_campaign=itr-c3 |
| C4 `/blog/itr-filing-ca-vs-self-filing` | When self-filing is enough | LinkedIn, Reel, community | `/blog/itr-filing-ca-vs-self-filing`, utm_campaign=itr-c4 |
| C5 `/blog/form-16-vs-ais-vs-form-26as` | Form 16, AIS, 26AS: what each shows | LinkedIn, Status, GBP | `/blog/form-16-vs-ais-vs-form-26as`, utm_campaign=itr-c5 |
| A1 `/income-tax-return-filing-for-salaried-employees` | ITR for salaried employees in Chennai | LinkedIn, local partnership (IT groups), GBP | `/income-tax-return-filing-for-salaried-employees`, utm_campaign=itr-a1 |
| A2 `/income-tax-return-filing-for-freelancers-and-consultants` | ITR for freelancers with foreign clients | community, Reel, LinkedIn | `/income-tax-return-filing-for-freelancers-and-consultants`, utm_campaign=itr-a2 |
| A3 `/income-tax-return-filing-for-doctors-and-professionals` | ITR for doctors under presumptive income | local partnership (associations), GBP | `/income-tax-return-filing-for-doctors-and-professionals`, utm_campaign=itr-a3 |
| A4 `/income-tax-return-filing-for-small-business-owners` | ITR for shops and traders: cash and GST | local partnership, Status, WhatsApp broadcast | `/income-tax-return-filing-for-small-business-owners`, utm_campaign=itr-a4 |
| A5 `/income-tax-return-filing-for-senior-citizens` | ITR for pensioners: interest and refunds | local partnership (seniors' clubs), GBP, phone outreach | `/income-tax-return-filing-for-senior-citizens`, utm_campaign=itr-a5 |
| P1 `/blog/missed-itr-due-date-belated-return` | Missed the due date? Check the window first | GBP, Status, LinkedIn, broadcast, digital PR | `/blog/missed-itr-due-date-belated-return`, utm_campaign=itr-p1 |
| P2 `/blog/mistake-in-filed-itr-revised-return` | Found a mistake after filing? | GBP, LinkedIn, Status | `/blog/mistake-in-filed-itr-revised-return`, utm_campaign=itr-p2 |
| P3 `/blog/income-tax-refund-delayed-chennai` | Refund delayed? Eight things to check | Reel, GBP, Status | `/blog/income-tax-refund-delayed-chennai`, utm_campaign=itr-p3 |
| P4 `/blog/ais-mismatch-tds-not-showing-26as` | AIS shows something you do not recognise | LinkedIn, community, GBP | `/blog/ais-mismatch-tds-not-showing-26as`, utm_campaign=itr-p4 |
| P5 `/blog/file-itr-for-previous-years-not-filed` | Years not filed? A catch-up plan | GBP, LinkedIn, guest post | `/blog/file-itr-for-previous-years-not-filed`, utm_campaign=itr-p5 |
| T1 `/tools/tax-regime-comparison-helper` | Compare both regimes in a minute | LinkedIn, Reel, email, digital PR | `/tools/tax-regime-comparison-helper`, utm_campaign=itr-t1 |
| T2 `/tools/itr-form-selector` | Which ITR form fits you? | Status, community, LinkedIn | `/tools/itr-form-selector`, utm_campaign=itr-t2 |
| T3 `/tools/itr-due-date-and-late-fee-reference` | Due dates and late fees in one table | GBP, Status, email, digital PR | `/tools/itr-due-date-and-late-fee-reference`, utm_campaign=itr-t3 |
| FAQ `/faq/income-tax-return-filing` | Income tax return questions answered | GBP Q&A, LinkedIn, email | `/faq/income-tax-return-filing`, utm_campaign=itr-faq |
| CS `/case-studies/itr-filing-engagement-template` | (Only after consent) How we handled a return | LinkedIn, email; no paid promotion; ICAI-CHECK | `/case-studies/itr-filing-engagement-template`, utm_campaign=itr-cs |
| PX `/blog/itr-filing-process-chennai` | What happens after you send us your documents | Reel, LinkedIn, GBP | `/blog/itr-filing-process-chennai`, utm_campaign=itr-px |

**Authority notes.** Link only from sources that fit: the ICAI Chennai chapter and regional events (names to verify), local business media, college and community newsletters. No paid links, no link exchanges, no comment spam, no review gating. Track each outreach in a sheet: target, contact, date, ask, outcome.

## 12. KPI dashboard and measurement

### 12.1 What to track

| Metric | Source | Level | Frequency |
|---|---|---|---|
| Impressions, clicks, average position | Search Console | Page and query | Weekly |
| AI citations (Google AI Overviews, ChatGPT, Perplexity, Gemini, Copilot) | Manual prompt panel of 20 questions from Section 6, run monthly, screenshots saved | Query | Monthly |
| WhatsApp clicks | GA4 event `wa_click` with page and CTA position | Page | Weekly |
| Calls | GA4 `call_click`, plus call log | Page | Weekly |
| Form submissions and bookings | GA4 `form_submit`, `booking_click`, Calendly | Page | Weekly |
| Tool use | GA4 `tool_start`, `tool_result`, `wa_click_from_tool` | Tool | Weekly |
| Qualified enquiries | CRM or sheet, scored by 12.4 | Page and keyword | Weekly |
| Proposals sent, clients won | CRM | Service | Monthly |
| Revenue per service | Accounts (ITR filing only) | Service | Monthly |
| Cost per enquiry | Spend (content, tools, any ads) divided by qualified enquiries | Service | Monthly |
| Conversion by page | Qualified enquiries divided by sessions | Page | Weekly |
| Top converting keywords | GSC query joined to landing-page enquiries | Query | Monthly |
| High impression, low click pages | GSC filter: impressions above the median, CTR below 2 percent (adjust after baseline) | Page | Monthly |
| High click, low enquiry pages | GA4: sessions above the median, contact starts below 1 percent | Page | Monthly |
| Review count and reply rate (GBP) | GBP | Profile | Monthly; never shown on the website |

### 12.2 Weekly dashboard template

| Week of | Impressions | Clicks | Avg position (money page) | WhatsApp clicks | Calls | Forms | Bookings | Qualified enquiries | Proposals | Clients | Notes and actions |
|---|---|---|---|---|---|---|---|---|---|---|---|
| (date) | | | | | | | | | | | |

| Page group | Sessions | Contact starts | Contact rate | Qualified | Qualified rate | Action |
|---|---|---|---|---|---|---|
| MP | | | | | | |
| A1 to A5 | | | | | | |
| P1 to P5 | | | | | | |
| S, C | | | | | | |
| T1 to T3 | | | | | | |
| L sections | | | | | | |

Target to reach in season: 10 qualified enquiries a day (300 a month). Out of season, set a monthly target from the first 4 weeks of data (FIRM-FILL); do not invent one.

### 12.3 Monthly review checklist

| # | Check |
|---|---|
| 1 | Compare the month with the previous month for clicks, contact starts and qualified enquiries |
| 2 | List pages with impressions but low clicks; rewrite title and meta |
| 3 | List pages with clicks but low enquiries; change CTA, add the matching tool, tighten the intro |
| 4 | Re-verify every date, limit, rate and fee against incometax.gov.in and any new CBDT notification; update the T3 config and the "Last reviewed" lines |
| 5 | Run the AI citation panel; note which pages are cited |
| 6 | Review GBP insights, reviews and Q&A; reply to every review |
| 7 | Check crawl errors, indexation and Core Web Vitals |
| 8 | Update the keyword map with new queries from Search Console |
| 9 | Review enquiry quality scores and lost-lead reasons |
| 10 | Decide the next month's 3 priorities |

### 12.4 Enquiry-quality scoring (0 to 10)

| Signal | Points |
|---|---|
| Real need stated (a form, a year, a problem) | 2 |
| Income type or activity given | 2 |
| Location given (Chennai, TN, elsewhere) | 1 |
| Deadline or urgency given | 2 |
| Contact made by WhatsApp, call, form or booking | 1 |
| Documents shared or a booking made | 2 |
| **Qualified** (brief definition: real need plus one useful detail, contact made, likely to buy within 0 to 90 days) | 6 or more, and contact made |

### 12.5 Page-level optimisation rules

| Condition | Action |
|---|---|
| Position 4 to 10 for a P1 keyword after 4 weeks | Add the tool or a table to the intro; add 3 internal links; refresh the title |
| Impressions above the median, CTR below 2 percent | Rewrite title and meta with the exact query and one benefit |
| Contact rate below 1 percent with enough sessions | Move the CTA higher; add the objection block; test headline 1 vs 2 |
| Qualified rate below 25 percent | Tighten the page message; add a qualifying question to the form; check which keyword brings the traffic |
| A tool is used but few WhatsApp starts | Add a result-specific WhatsApp button (W12, W13) |
| Audience page has less than 60 percent unique copy or no distinct queries after 8 weeks | Merge it into the money page as a section and 301 it |
| A date or limit changes | Update the config, the page and the schema, set `dateModified`, and log it |

### 12.6 A/B roadmap

| Order | Test | Metric | Minimum run |
|---|---|---|---|
| 1 | Tool strip above vs below the fold (MP) | WhatsApp click rate | 2 weeks or enough sessions to compare |
| 2 | Headline 1 vs 2 (MP) | Contact rate | 2 weeks |
| 3 | Short vs long form | Qualified rate | 2 weeks |
| 4 | Sticky mobile CTA wording | Click rate | 2 weeks |
| 5 | Objection block position | Booking rate | 2 weeks |
| 6 | Problem pages: top banner vs end block | Contact rate | 2 weeks |

### 12.7 Refresh rules

| Trigger | Action | Owner |
|---|---|---|
| CBDT circular, notification, Finance Act or Budget | Update the T3 config, MP, T1, P1, P2 and S1 within 3 working days; re-verify with the label | CA Rushil and content lead |
| 1 April, 1 July, 1 October, 1 January | Review all figures and "Last reviewed" lines | Content lead |
| A page loses position for 4 weeks | Re-check the SERP and add missing sections | Content lead |
| A post is older than 6 months | Re-read, update, and change `dateModified` only if content changed | Content lead |

### 12.8 Escalation rules

| Situation | Escalate to | Within |
|---|---|---|
| A figure on a live page is found wrong | CA Rushil; take down or correct the figure | Same day |
| A client or visitor complains about a claim | CA Rushil | Same day |
| A review that looks fake or abusive | Marketing lead; report on GBP | 2 working days |
| Traffic drop above 30 percent week on week without a known cause | Developer and marketing lead; check indexing, robots, deployment | 1 working day |
| An enquiry names a notice with a near reply date | Route to the notice-reply owner (link-only service) | Same day |
| A request for fee figures on the site | CA Rushil (ICAI check) | Before any change |

## 13. Quality-control checklist

### 13.1 The twelve tests for every recommendation

| # | Test | Question |
|---|---|---|
| 1 | Enquiry intent | Does it match a query where the reader may hire a CA within 0 to 90 days? |
| 2 | No duplication | Does it avoid repeating another page or another plan's keywords? |
| 3 | WhatsApp CTA | Is there a WhatsApp action and a pre-filled message under 500 characters? |
| 4 | Chennai and Tamil Nadu relevance | Does it say where we are and that other places are served online? |
| 5 | Forms, documents, deadlines | Does it name the forms, documents and dates the reader needs? |
| 6 | No unverifiable claims | Is every date, limit, rate, fee, section and form detail labelled "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing."? Is there no invented count, ranking, result or review? |
| 7 | Internal links | Does it link to the money page, a sibling and a tool, with descriptive anchors? |
| 8 | AI-engine visibility | Does it have a 40 to 80 word direct answer, a table and a clear entity name? |
| 9 | Measurable KPI | Is there a metric and an owner? |
| 10 | Executable in 90 days | Can the team build it in the weeks assigned? |
| 11 | ICAI compliance | No fee figures, ratings, superlatives, guarantees, competitor names; "free" flagged? |
| 12 | Scope guard | Does it avoid taking HNI, NRI, notice, appeal, TDS-return or GST terms as primary? |

### 13.2 Test applied to the plan's components

| Component | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Money page rebuild | Y | Y | Y | Y | Y | Y (labels added) | Y | Y | Y | Y | Y | Y | Remove the rule-of-thumb threshold |
| Problem pages P1 to P5 | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Notice content is linked, not taken |
| Audience pages A1 to A5 | Y | Y (60 percent unique gate) | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Merge if the gate fails |
| Comparison pages C1 to C5 | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | |
| Supporting articles S1 to S8 | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | S1 and S2 are upgrades |
| Tools T1 to T3 | Y | Y | Y | Y | Y | Y (config with verified date) | Y | Y | Y | Y | Y | Y | No fee shown |
| Location sections L1 to L5 | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Host owner must agree |
| FAQ hub, case study, process explainer | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y (case study noindex) | Y | |
| GBP plan | Y | Y | Y | Y | n/a | Y | Y | Y | Y | Y | Y | Y | Fix hours first |

### 13.3 Fixes the plan makes to the existing blog posts (the three owned posts)

| Post | Issue found | Fix |
|---|---|---|
| `old-vs-new-tax-regime` | Rule of thumb "three to four lakh" conflicts with the money page "four to five lakh"; says "FY 2026-27"; claims about HRA and loan interest are not labelled | Replace with T1 and a table; label figures [V]; align terms with the Income-tax Act, 2025 |
| `advance-tax-deadlines` | Instalment percentages and "threshold" are given without a table or label; no new-Act mapping | Table with [V]; add Sections 423 to 425 mapping [V]; add worked estimate template |
| `safe-cash-deposit-limit` | States 10 lakh (savings) and 50 lakh (current) as reporting thresholds and 269ST penalty; the money page states 1 crore (current) and 50 lakh (savings) as filing triggers; embeds a third-party reel iframe | Reconcile both sets with sources and labels; add new-Act number for the cash-receipt rule [V]; keep the embed only if it loads fast and has a text alternative |

### 13.4 Script check results

Run on the assembled file (table counts, word counts, character limits).

| Check | Required | Found | Result |
|---|---|---|---|
| Output sections 1 to 14 present | 14 | 14 | PASS |
| Personas (8+) | 8 | 10 | PASS |
| Keywords | 100 | 100 | PASS |
| Keyword categories A-J with 10 each | 10 | 10 | PASS |
| Architecture pages (35) | 35 | 35 | PASS |
| Page titles at most 60 chars (non-section pages) | 28 | 28 | PASS |
| Page metas at most 155 chars (non-section pages) | 28 | 28 | PASS |
| FAQ hub title/meta in limits | 1 | 1 | PASS |
| Money-page FAQs (20+) | 20 | 24 | PASS |
| Money-page FAQ answers 40-80 words | 24 | 24 | PASS |
| AEO 6.1 Direct-answer FAQs (30) answers | 30 | 30 | PASS |
| AEO 6.2 Comparison (15) answers | 15 | 15 | PASS |
| AEO 6.3 Process (15) answers | 15 | 15 | PASS |
| AEO 6.4 Document and deadline (15) answers | 15 | 15 | PASS |
| AEO 6.5 Cost and timeline (15) answers | 15 | 15 | PASS |
| AEO 6.6 Risk and penalty (15) answers | 15 | 15 | PASS |
| AEO 6.7 'Do I need this?' (15) answers | 15 | 15 | PASS |
| AEO 6.8 Audience-specific (15) answers | 15 | 15 | PASS |
| AEO answers 40-80 words (135) | 135 | 135 | PASS |
| Local queries | 30 | 30 | PASS |
| WhatsApp messages (W1-W16 + 7 follow-ups + 10 persona) | 33 | 33 | PASS |
| WhatsApp messages under 500 chars | 33 | 33 | PASS |
| Calendar weeks | 13 | 13 | PASS |
| Headlines/subheads/CTAs (5 each) | 4 | 4 | PASS |
| Exact verify label occurrences | 3 | 6 | PASS |
| No 'best/No.1/guarantee' in published copy tables (headlines etc.) | 0 | 0 | PASS |

All checks pass: **yes**


## 14. First 10 actions this week

| # | Action | Owner | Done when |
|---|---|---|---|
| 1 | Fix GBP hours (remove "Open 24 hours"; set Mon to Sat 9:30 AM to 6:30 PM, Sunday closed) and confirm NAP matches the site | Firm / marketing | Profile shows correct hours |
| 2 | Run a live SERP and Search Console check for the 20 P1 keywords; record current position, impressions and the pages that rank | Marketing | Baseline sheet saved |
| 3 | Verify every item in Appendix A against incometax.gov.in and the CBDT notices; record the source and date for each | CA Rushil | Register signed off |
| 4 | Add the "Last reviewed" line and the verify label to the live money page; remove NRIs from its meta description and the "four to five lakh" rule of thumb | Developer | Deployed |
| 5 | Publish P1 (missed due date and belated return) and P2 (revised return); the belated window in the live copy ends 31 December 2026 [V] | Content lead / CA review | Both live and indexed |
| 6 | Create the `/tools` route group and ship T3 as a static, labelled table first | Developer | T3 live |
| 7 | Set up GA4 events (`wa_click`, `call_click`, `form_submit`, `booking_click`) with page and CTA position, and UTM on GBP and social links | Developer | Events firing in DebugView |
| 8 | Load W1 to W16 into WhatsApp Business as quick replies; confirm reply-time wording (FIRM-FILL) | Firm | Quick replies live |
| 9 | Ask the ICAI-CHECK questions: "free" in the consultation line, the booking button wording, the hero labels, whether `GoogleProfileStrip` shows any rating | CA Rushil | Written answer saved |
| 10 | Send the review-request message (7.9) to every client from the last 90 days; log sends and replies | Firm | Message sent to all |

## Appendix A. Verification register

Every item below carries the exact label: "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." Items marked LIVE are already printed on the live money page.

| # | Claim | Where used | Source to check |
|---|---|---|---|
| 1 | Non-audit individual and HUF due date 31 July (2026 and 2027) | MP, T3, AEO | ITD, CBDT (LIVE) |
| 2 | Business or professional income without audit due date 31 August, attributed to the Finance Act, 2026 | MP, T3, AEO | FA26, ITD (LIVE) |
| 3 | Audit cases due 21 November 2026 after extension; CBDT Circular No. 7/2026 dated 28 September 2026 | MP, T3 | CBDT (LIVE) |
| 4 | Audit due date 31 October 2027 and audit report 30 September 2027; 21 October 2026 audit report date | MP, T3 | ITD, CBDT (LIVE) |
| 5 | Transfer pricing due date 30 November | MP, T3 | ITD (LIVE) |
| 6 | Belated return cut-off 31 December; late fee Rs 5,000 or Rs 1,000 up to Rs 5 lakh income | MP, P1, T3, AEO | ITD, ACT25 (LIVE) |
| 7 | Revised return cut-off 31 March; late-revision fee under the Finance Act, 2026 | MP, P2, T3, AEO | FA26 (LIVE) |
| 8 | ITR-U within 48 months; extra tax 25, 50, 60, 70 percent | MP, P5, AEO | ITD (LIVE) |
| 9 | New-Act mapping: Section 263 (returns), Sections 423 to 425 (interest), rectification and other section numbers | MP, S8, S1 | ACT25 (LIVE) |
| 10 | ITR-1 eligibility (income up to Rs 50 lakh, listed-equity long-term gains up to Rs 1.25 lakh, agricultural income up to Rs 5,000) | MP, C3, T2 | ITD forms page (LIVE) |
| 11 | ITR-2, ITR-3, ITR-4 eligibility and presumptive limits; Sections 44AD, 44ADA, 44AE and their new-Act numbers | MP, C2, S5, T2 | ITD, ACT25 |
| 12 | Schedule AL above Rs 1 crore; Schedule FA for foreign assets | MP, AEO | ITD (LIVE) |
| 13 | New regime slabs, rebate up to Rs 60,000, standard deduction Rs 75,000, surcharge cap 25 percent | MP, C1, T1 | ITD, FA26 (LIVE) |
| 14 | Old regime slabs, rebate Rs 12,500, standard deduction Rs 50,000, surcharge up to 37 percent | MP, C1, T1 | ITD (LIVE) |
| 15 | Who may switch regimes and the due-date condition; limited switching for business income; old regime unavailable on a belated return for those without business income | MP, C1, AEO | ITD, ACT25 (LIVE) |
| 16 | Filing obligation triggers: Rs 1 crore current-account deposits, Rs 50 lakh savings deposits, foreign assets | MP, S2 | ITD (LIVE) |
| 17 | Bank reporting thresholds Rs 10 lakh (savings) and Rs 50 lakh (current) | S2 | ITD (in post) |
| 18 | Cash-receipt limit Rs 2 lakh and penalty (1961 Act Section 269ST) and its new-Act number | S2 | ACT61, ACT25 (in post) |
| 19 | Refund interest 0.5 percent a month and its start-date rule | MP, P3, AEO | ITD (LIVE) |
| 20 | E-verification within 30 days; e-verify options offered on the portal | MP, S4, AEO | ITD (LIVE) |
| 21 | Rent receipts and landlord PAN where rent exceeds Rs 1 lakh a year | MP, S6 | ITD (LIVE) |
| 22 | Forms for tax year 2026-27 to be notified under the Income-tax Rules, 2026 | MP, T2 | RULES (LIVE) |
| 23 | Advance tax: four instalments, cumulative shares, threshold, interest | S1, AEO | ITD (in post) |
| 24 | Form 16 issue date (mid-June) | AEO | ITD |
| 25 | Carry-forward of losses only if the return is filed by the due date | AEO, P1 | ACT25 |
| 26 | Treatment of a return not e-verified in time (treated as not filed) | AEO, S4 | ITD |
| 27 | Wrong form leads to a defective return notice | AEO, MP | ITD (LIVE) |
| 28 | PAN-Aadhaar linking: inoperative PAN consequences, fee, deadlines | AEO, P3 | ITD |
| 29 | Senior citizen relief from filing in certain cases | AEO, A5 | ITD, ACT25 |
| 30 | Capital gains classes, holding periods, rates, exemption threshold; F&O is business income | S7, AEO | ITD, ACT25 |
| 31 | Updated return not available where proceedings have begun, and cannot claim refund or increase loss | MP, P5, AEO | ITD (LIVE) |
| 32 | Gift and inheritance taxability | AEO | ACT25 |
| 33 | Government charges: no fee to file on the portal | AEO | ITD |
| 34 | Budget date and announcements for week 13 | Calendar, GBP posts | Union Budget documents |
| 35 | Any foreign rule referred to (none are planned on these pages) | n/a | Not used |

**Other flags for the firm (not rule claims):** ICAI membership no. and firm registration no. (FIRM-FILL); turnaround times and secure-upload method (FIRM-FILL); the word "free" in the consultation line (ICAI-CHECK); whether the hero labels and the `GoogleProfileStrip` meet the ICAI and Google rules (ICAI-CHECK); consent for any case study or testimonial (written, ICAI-cleared).

