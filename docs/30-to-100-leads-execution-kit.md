# 30-to-100 Leads a Day: Execution Kit

For: C S Rushil & Co., Chartered Accountants, Anna Nagar, Chennai
Prepared: 4 November 2026
Owner: the firm (none of these steps can be done from the website code)

The website is now ahead of most local competitors on content and structure. What limits leads now is **off-site trust**: the ICAI numbers, Google Business Profile (GBP) activity, review volume and directory listings. This kit lists the exact steps, with copy you can paste.

Every piece of copy here follows ICAI's rules:
- No professional fees, discounts or "free".
- No guarantees or superlatives.
- No testimonials written by the firm.
- No incentive for reviews.

---

## 0. Do these first (this week)

| # | Action | Where | Why |
|---|---|---|---|
| 1 | Send CA Rushil C S's ICAI membership number and the firm registration number (FRN) to the developer | `src/lib/site.ts` → `ICAI_MEMBERSHIP_NO`, `FIRM_REGISTRATION_NO` | They then appear in the schema, the hero byline, the ICAI verification block on about 90 pages, `/how-we-work` and `/about-us`. Nothing is published while they are blank. |
| 2 | Confirm GBP hours: Monday to Saturday 9:30 AM – 6:30 PM, Sunday closed | GBP → Edit profile → Hours | Must match the website exactly (`BUSINESS_HOURS` in `site.ts`). |
| 3 | Mark the GA4 key events | GA4 → Admin → Events | `whatsapp_click`, `call_click`, `consultation_booking_click`, `calculator_lead_click` |
| 4 | Rename the Calendly event from "30 min" to "15-Minute Consultation" | Calendly → Event types | The site promises a 15-minute consultation everywhere. |
| 5 | Create a Facebook business page and a Wikidata item, then send both URLs to the developer | `ENTITY_PROFILES` in `site.ts` | Each one is added to the schema `sameAs` as soon as it is set. |

---

## 1. Google Business Profile configuration

**Name:** C S Rushil & Co. (exactly as it appears on the ICAI certificate; never add keywords)
**Primary category:** Chartered accountant
**Additional categories** (add the ones GBP offers):
- Accountant
- Tax consultant
- Tax preparation service
- Bookkeeping service
- Auditor

**Address:** Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai - 600040 (character-for-character as on the website)
**Phone:** +91 72001 49711
**Website:** https://www.csrushil.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp
**Appointment link:** https://calendly.com/ceo-csrushil/30min?utm_source=google&utm_medium=organic&utm_campaign=gbp_booking
**Hours:** Monday to Saturday 9:30 AM – 6:30 PM; Sunday closed
**Languages:** English, Tamil, Hindi (mention them in the description)
**Opening date:** 2024

### Business description (750 characters max)

> C S Rushil & Co. is a chartered accountancy firm in J-Block, Anna Nagar, Chennai, led by CA Rushil C S (ICAI; Certificate in Forensic Accounting and Fraud Detection). We handle company, LLP and OPC registration, GST registration, returns, notices and appeals, income tax returns and notice replies, statutory and tax audit, virtual CFO, FEMA and RBI filings, transfer pricing, and NRI tax, including property-sale TDS and Form 145/146. We work with clients in Chennai, across Tamil Nadu, and with NRIs and foreign-owned companies in the US, UK, UAE, the Gulf and Singapore. We speak English, Tamil and Hindi. Every engagement starts with a 15-minute consultation and a written engagement letter.

### Services (add each one under GBP → Services, with the description)

Generated from `src/lib/services.ts`, so the profile matches the website. A GBP service description can be up to 300 characters.

| # | Service | Description |
|---|---|---|
| 1 | Private Limited Company Incorporation | End-to-end SPICe+ incorporation for Private Limited Companies in Chennai — documentation, MCA filing, and post-incorporation compliance. |
| 2 | LLP Registration | Limited Liability Partnership registration in Chennai — DPIN, name reservation, FiLLiP filing, and LLP Agreement drafting. |
| 3 | Company Registration | Private Limited and LLP company registration in Chennai, from name approval to certificate of incorporation. |
| 4 | GST Litigation & Appeals | Representation for GST show-cause notices, departmental audits, appeals, and GSTAT proceedings for Chennai businesses. |
| 5 | Goods & Services Tax (GST) | GST registration, return filing, amendments, cancellations, notice replies, and LUT applications. |
| 6 | GST Registration | New GST registration for businesses and professionals in Chennai — documentation, ARN tracking, and certificate issuance. |
| 7 | Audit & Assurance | Statutory, internal, tax, transfer pricing, forensic, and stock audits delivered with independence and rigour. |
| 8 | Statutory Audit | Companies Act statutory audit for Chennai businesses — independent, evidence-based financial statement audit. |
| 9 | Tax Audit | Section 44AB tax audit for businesses and professionals in Chennai crossing prescribed turnover limits. |
| 10 | Transfer Pricing Audit | Form 3CEB certification and arm's-length pricing documentation for related-party and cross-border transactions. |
| 11 | Direct Tax | Income tax planning, return filing, assessments, and representation before tax authorities. |
| 12 | Income Tax Return Filing | ITR filing for salaried individuals, professionals, and businesses in Chennai, with advance tax and refund tracking. |
| 13 | MSME / Udyam Registration | Udyam registration for small and medium enterprises in Chennai, unlocking collateral-free loans and government scheme benefits. |
| 14 | ROC Compliances | Annual filings, statutory registers, and Companies Act compliance to keep your company in good standing with the MCA. |
| 15 | Virtual CFO Services | Outsourced financial leadership — MIS, budgeting, fundraising support, and board-ready reporting for growing businesses. |
| 16 | Management Consultancy | Business process, risk, and strategy advisory that turns compliance data into operating decisions. |
| 17 | RERA Compliance | RERA project registration, quarterly filings, and compliance advisory for real estate developers and agents in Tamil Nadu. |
| 18 | Trust & NGO Registration | Formation and compliance for trusts, societies, and Section 8 companies, including 12A/80G registration support. |
| 19 | Bookkeeping Services | Cloud accounting, monthly books close, and MIS reporting on Zoho Books, Tally Prime, QuickBooks, or Xero for Chennai businesses. |
| 20 | Payroll Services | End-to-end payroll outsourcing with PF, ESI, Professional Tax, and TDS compliance for businesses across Chennai. |
| 21 | NRI Tax Services | Indian tax filing, DTAA claims, property-sale TDS and repatriation for NRIs in the UAE, UK, USA and elsewhere — handled remotely from Chennai. |
| 22 | OPC Registration | One Person Company registration for solo founders: SPICe+ filing, nominee consent (INC-3), NRI eligibility and later conversion to Pvt Ltd. |
| 23 | Partnership Firm Registration | Partnership deed drafting and stamping, registration with the Tamil Nadu Registrar of Firms on tnreginet, firm PAN, GST and deed changes. |
| 24 | Proprietorship Registration | GST, Udyam, Tamil Nadu Shops and Establishments and trade licence for sole proprietors, plus documents for a current account. |
| 25 | Section 8 Company Registration | Not-for-profit company registration with the Section 8 licence through SPICe+, objects drafting and 12A/80G (Form 105) next steps. |
| 26 | Startup India (DPIIT) Recognition | DPIIT startup recognition through NSWS for companies, LLPs and registered partnerships, plus the Section 140 tax holiday application. |
| 27 | GST Return Filing | Monthly and quarterly GSTR-1 and GSTR-3B, QRMP, CMP-08, GSTR-4 and annual GSTR-9/9C, with GSTR-2B reconciliation before every filing. |
| 28 | TDS Return Filing | Quarterly TDS statements in Forms 138, 140 and 144 (earlier 24Q, 26Q, 27Q), Form 16/16A certificates, corrections and TDS on rent and property. |
| 29 | Income Tax Assessment & Appeals | Scrutiny and reassessment proceedings, appeals to the CIT(A) and the ITAT, and applications for stay of demand. |
| 30 | Form 15CA & 15CB | CA certificate and remitter's declaration (now Forms 146 and 145) for payments to non-residents, NRO repatriation and property-sale proceeds. |
| 31 | FEMA & RBI Compliance | FC-GPR, FC-TRS, annual FLA return, ODI and APR filings, and late submission fee regularisation for foreign-invested companies. |
| 32 | Annual Compliance Package | Bookkeeping, statutory audit, ROC filings, DIR-3 KYC, ITR, GST and TDS returns for companies and LLPs on one calendar. |
| 33 | Accounting Outsourcing | Outsource your whole finance back office in Chennai: bookkeeping, payroll, GST, TDS, PF and ESI filings, monthly MIS and Tally or Zoho Books setup. |
| 34 | Digital Signature Certificate (DSC) | Class 3 DSC for MCA, GST, income tax, DGFT and e-tenders, issued through licensed Certifying Authorities with Aadhaar eKYC or video verification. |
| 35 | Trademark Registration | Trademark search, Nice class selection, TM-A documentation, objection support and renewal tracking for Chennai brands and startups. |
| 36 | IEC Registration | Import Export Code from DGFT for Chennai importers and exporters, with annual April–June updation, modification and GST LUT support. |
| 37 | FSSAI Licence & Registration | FSSAI basic registration, state and central licences on FoSCoS under the April 2026 turnover limits, plus modifications and annual returns. |
| 38 | EOR vs Subsidiary in India | Compare an Employer of Record with your own Indian subsidiary on control, speed, PE risk, IP and compliance, and plan the move to an entity. |
| 39 | India Subsidiary for US Companies | Indian subsidiary set-up for US parents: apostilled documents, resident director, FDI route, FC-GPR, transfer pricing and US CPA coordination. |
| 40 | India Subsidiary for UK Companies | Indian subsidiary set-up for UK parents: FCDO apostille, resident director, FDI route, FC-GPR, India–UK tax treaty and CETA points. |
| 41 | India Subsidiary for UAE Companies | Indian subsidiary set-up for UAE mainland and free-zone parents and NRI founders: MOFA attestation, FDI route, FC-GPR and India–UAE treaties. |
| 42 | Income Tax Consultant for HNIs | Tax planning for HNIs and families in Chennai: capital gains, ESOPs and foreign RSUs, Schedule FA, residency, HUFs and advance tax. |
| 43 | India Subsidiary for Singapore Companies | Indian subsidiary set-up for Singapore parents: apostilled documents, resident director, FDI route, FC-GPR and transfer pricing, Indian-law services. |
| 44 | GST returns for e-commerce sellers | GST returns for e-commerce sellers: state-wise GSTR-1, GSTR-3B and marketplace settlements matched first |
| 45 | GST returns for Amazon sellers | GST returns for Amazon sellers: GSTR-1, GSTR-3B, Amazon TCS and settlements reconciled before each filing |
| 46 | GST returns for freelancers | GST returns for freelancers: registration limits, Indian and overseas invoices, monthly GSTR-1 and GSTR-3B |
| 47 | GST returns for restaurants | GST returns for restaurants: composition or regular scheme, delivery platform sales, GSTR-1 and GSTR-3B |
| 48 | GST returns for clinics | GST returns for clinics: exempt and taxable services, medicine sales and input credit checked before filing |
| 49 | GST returns for startups | GST returns for startups: the first return set up correctly, input credit on opening stock, monthly filing |
| 50 | GST returns for manufacturers | GST returns for manufacturers: input tax credit, inverted duty refunds, job work and GSTR-2B reconciliation |
| 51 | GST returns for importers and exporters | GST returns for importers and exporters: IGST on imports, LUT for exports, export invoices and refund claims |
| 52 | GST Notice Reply | Replies to ASMT-10, DRC-01A, DRC-01 and audit notices for Tamil Nadu businesses, before a dispute becomes an appeal. |
| 53 | Income Tax Notice Reply | Responses to intimations, defective-return, scrutiny and reassessment notices, including faceless assessment submissions. |
| 54 | Company Setup in India for Foreign Businesses | Subsidiary, LLP or branch set-up for foreign companies and founders, with FDI reporting and Tamil Nadu location support. |
| 55 | India Subsidiary Compliance & CFO | One retainer for audit, ROC, FEMA, transfer pricing, GST, payroll and group reporting for foreign-owned Indian companies. |
| 56 | Outsourced Accounting for US CPA Firms | Bookkeeping, month-end close and tax-prep support prepared for US CPA review, with Section 7216-aware data handling. |
| 57 | Outsourced Bookkeeping for UK Practices | Bookkeeping, MTD VAT returns and year-end accounts preparation for UK accountancy practices to review and file. |
| 58 | NRI Property Sale — TDS & Repatriation | Lower-deduction certificates, capital gains, Form 15CA/15CB and repatriation for NRIs selling property in Chennai. |
| 59 | NRI Tax Services — UAE | Indian ITR, DTAA claims and deemed-residency checks for NRIs living in Dubai, Abu Dhabi and the wider UAE. |
| 60 | NRI Tax Services — UK | Indian tax filing and India–UK DTAA support, with the figures your UK accountant needs for HMRC. |
| 61 | NRI Tax Services — USA | Indian tax filing and India–US DTAA support, with account data for your US CPA’s FBAR and FATCA reporting. |
| 62 | NRI Tax Services — Gulf | Indian tax for NRIs in Saudi Arabia, Qatar, Oman, Kuwait and Bahrain: residency, NRO income, Chennai property and DTAA relief. |
| 63 | NRI Tax Services — Singapore | Indian tax for NRIs in Singapore: India–Singapore DTAA, Certificate of Residence, RSUs and returning to Chennai. |
### Weekly GBP posts (one a week, rotate these four)

Each post gets a photo of the office, the team or a relevant document (blurred). Link every post to the matching page, with `?utm_source=google&utm_medium=organic&utm_campaign=gbp_post`.

**Week 1: deadline reminder**
> GST annual return reminder: GSTR-9 and GSTR-9C for FY 2025-26 are due on 31 December 2026. If your turnover crossed the limits, reconcile your books with GSTR-1 and GSTR-3B now. Book a 15-minute consultation with our Anna Nagar team. → /gst-return-filing-chennai

(Change the deadline each month. Check every date on the CBIC or income tax portal before posting.)

**Week 2: notice help**
> Received a GST notice (ASMT-10, DRC-01A or DRC-01)? Each one has a reply deadline. Send us the notice on WhatsApp and a chartered accountant will tell you what it asks for and what to prepare. → /gst-notice-reply-chennai

**Week 3: NRI and cross-border**
> NRIs selling property in Chennai: the buyer must deduct TDS. Where your actual gain is lower, a lower deduction certificate can reduce it. Try our estimator, then talk to a CA. → /tools/nri-property-sale-tds-calculator

**Week 4: founders**
> Starting a Private Limited Company in Chennai? There is no minimum paid-up capital, and with authorised capital up to ₹15 lakh no MCA filing fee applies for SPICe+. Check the government fees for your case. → /tools/company-registration-government-fee-calculator

### Photos
Upload at least these 10:
- the office exterior and its signage
- the reception area
- the team at work
- CA Rushil C S
- the building from the street, with the J-Block landmark
- an interior meeting room

Add 2 new photos a month.

---

## 2. Directory and profile submissions

Use the **same NAP block** everywhere:

```
C S Rushil & Co.
Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai - 600040
+91 72001 49711 · admin@csrushil.com · https://www.csrushil.com
```

**Short description (150 characters):**
> Chartered accountants in Anna Nagar, Chennai: company registration, GST, income tax, audit, virtual CFO, FEMA and NRI tax.

**Medium description (300 characters):**
> C S Rushil & Co. is a chartered accountancy firm in Anna Nagar, Chennai, led by CA Rushil C S. We handle company and LLP registration, GST and income tax filings and notices, audit, virtual CFO, FEMA/RBI compliance and NRI tax for clients in Chennai, Tamil Nadu and abroad.

| Directory | Use | Notes | After it is live |
|---|---|---|---|
| ICAI member and firm directory (CA Connect) | Entity verification | Update the firm's address, phone and website to match the NAP block exactly | Send the URL → `ENTITY_PROFILES.icaiCaConnect` |
| ClearLevel.in | CA firm directory | Use the medium description; categories: CA firm, GST, income tax, company registration | → `ENTITY_PROFILES.clearlevel` |
| RevenueBase | Firm profile | Use the medium description | → `ENTITY_PROFILES.revenuebase` |
| ThinkingBridge | Chennai business listing | Category: chartered accountants, Chennai | |
| ThreeBestRated | Local "top 3" list | Submit for review; their own assessment decides the listing. Do not pay for placement. | |
| Justdial | Chennai local search | Free listing only; categories: chartered accountants, GST consultants, income tax consultants; same NAP | |
| Sulekha | Chennai local search | Same NAP; don't buy lead packages until organic leads are measured | |
| Clutch.co | US/UK buyers of outsourced accounting | Profile under "Accounting" and "Bookkeeping"; services: outsourced accounting for CPA firms and UK accountants. Clutch reviews are client interviews; don't script them. | |
| TaxGuru (author profile) | Expertise signal for CA Rushil C S | Publish 1 article a month on a topic the site covers in depth, with a link to that page | Send the author URL → `FOUNDER_PROFILES.taxguru` |
| Facebook business page | Entity | Same NAP, hours and description | → `ENTITY_PROFILES.facebook` |
| Wikidata | Entity graph for AI engines | Item: "C S Rushil & Co." (instance of: accounting firm; country: India; headquarters location: Chennai; official website; inception: 2024). Wikidata needs a reference such as an MCA or ICAI record. | → `ENTITY_PROFILES.wikidata` |

Keep a sheet with each directory's URL, login owner and date listed. Re-check NAP every quarter.

---

## 3. Reviews (ICAI-compliant)

Rules:
- Ask every client once, after the work is delivered.
- Never offer anything in return.
- Never suggest what to write.
- Never post reviews yourself.
- Never copy reviews onto the website as testimonials.

Reply to every review within 48 hours without disclosing client details.

**Review link:** https://search.google.com/local/writereview?placeid=ChIJzXoB0DFnUjoRv2EUuO2l7n8

**English (WhatsApp, after delivery):**
> Hi {Name}, your {service} is complete; the acknowledgement is attached. If you have a minute, we'd appreciate an honest review of your experience with C S Rushil & Co. on Google: {review link}. Thank you.

**Tamil:**
> வணக்கம் {பெயர்}, உங்கள் {சேவை} பணி முடிந்தது; ஒப்புகைச் சான்று இணைக்கப்பட்டுள்ளது. நேரம் இருந்தால், சி எஸ் ருஷில் & கோ. உடனான உங்கள் அனுபவத்தைப் பற்றி கூகுளில் உங்கள் நேர்மையான கருத்தைப் பகிருங்கள்: {review link}. நன்றி.

**Reminder (once, 7 days later, only if no review):**
> Hi {Name}, a gentle reminder in case the review link was missed: {review link}. No problem at all if you'd rather not.

**Reply to a positive review:**
> Thank you, {first name}. We're glad the {general service, no details} went smoothly.

**Reply to a negative review:**
> We're sorry to read this. Please message us on +91 72001 49711 so a partner can look into it. We can't discuss client matters here.

**Target:** 8–12 new reviews a month, moving from 58 towards 150 in 12 months.

---

## 4. Daily lead routine

| Time (IST) | Action |
|---|---|
| 9:30 AM | Read overnight WhatsApp, calls, forms and Calendly bookings (US and UK enquiries arrive overnight). Reply to every one within 2 hours. |
| 9:45 AM | Log each lead in `docs/lead-log-template.csv` (or a Google Sheet with the same columns). |
| Through the day | Calculator leads arrive with the scenario already typed. Reply with the next step and a booking link. |
| 6:00 PM | Update status, next action and date for every open lead. |
| Friday | Weekly count by `source_page`, `service_cluster` and `country_or_city`. Compare with GA4 `calculator_lead_click`, `whatsapp_click` and `consultation_booking_click`. |

**Statuses:** New → Qualified → Consultation booked → Scope sent → Engagement letter signed (Won) / Lost (reason).

---

## 5. What moves leads from 30 towards 100 a day

1. **ICAI numbers live**, together with 150+ reviews. This is the main local trust gap.
2. **GBP posts every week**, with 2 photos a month.
3. **Directory and entity profiles** listed in section 2, so AI engines can confirm the firm exists.
4. **One TaxGuru article a month** by CA Rushil C S, linking back to the matching page.
5. **Measure**: by month 2, look at which `service_cluster` and `buyer_country_or_city` produce engagement letters, and double down on those pages.

Volume depends on search demand, competition and the steps above. Treat 30–100 leads a day as a target to measure against, not a forecast.
