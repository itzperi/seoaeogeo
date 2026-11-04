# Growth System 20: GST Registration in Chennai

**Firm:** C S Rushil & Co., Chartered Accountants (ICAI) · Anna Nagar, Chennai · https://www.csrushil.com · +91 72001 49711 (wa.me/917200149711)
**Service:** New GST registration (GSTIN) for businesses, professionals, online sellers, companies, LLPs, partnership firms and NRIs/foreign suppliers, filed on gst.gov.in
**Money page:** `/gst-registration-chennai` (URL kept; source `src/app/gst-registration-chennai/page.tsx`, rendered by `src/components/ServicePageTemplate.tsx`)
**Prepared:** 3 November 2026 · **For:** founder / marketing lead (implementer) · **Sign-off needed from:** CA Rushil C S before any copy is published

---

## How to read this plan

**Verification label.** Every rule, threshold, due date, time limit, form detail, section number, penalty or portal requirement that is not stated plainly in the shared fact sheets carries the exact label **"Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing."** In tables, the label sits in a "V" column (a tick means the row carries that label). Every labelled item and every fact already printed on a live page is listed in the Verification register (Section 13.3).

**No professional fees.** This plan never quotes a professional fee. That the GST registration application has no government fee is not in the fact sheet, so it is labelled V wherever it appears.

**ICAI rules applied to all site copy.** No professional fee figures. No ratings, review counts or superlatives ("best", "No. 1", "top", "leading", "fastest", "cheapest"). No guarantees, no turnaround promises, no invented client counts or review quotes. No competitor names in site copy (internal analysis only). The offer is written as **"15-minute consultation"** in site copy; the word "free" is flagged for the firm's ICAI advertisement-guideline check before it goes on the site, GBP or WhatsApp.

**Ownership (strict).** This plan owns only: the money page `/gst-registration-chennai`, three blog posts (`gst-registration-online-sellers-chennai`, `gst-threshold-is-a-trigger`, `gst-registration-after-company-incorporation`) and the NEW assets it proposes. Everything else is **link only**: GST hub, GST return filing (and the 8 `/gst-return-filing-for-*` pages), GST notice reply, GST litigation (and its city pages), plan 01 shared tools, `gst-freelancers-consultants`, `lut-for-exporters`, `itc-mismatch-notices`. Comparisons, tools and audience pages in this plan are specific to registration.

**Codes used in tables**

| Code | Meaning |
|---|---|
| MP | Money page `/gst-registration-chennai` |
| S1–S8 | Supporting articles (Section 4) |
| C1–C5 | Comparison pages (Section 4) |
| L1–L5 | Location sections on existing pages (no new URLs) |
| A1–A5 | Audience pages |
| P1–P5 | Problem / urgent pages |
| T1–T3 | Tools / checklists |
| FAQ | FAQ hub `/faq/gst-registration` [NEW] |
| CASE | Case-study template `/case-studies/gst-registration-chennai` [NEW, noindex until consent] |
| PROC | Process and timeline explainer `/gst-registration-process-and-timeline` [NEW] |
| GSTHUB | `/goods-and-services-tax` (link only) |
| GSTRET | `/gst-return-filing-chennai` (link only) |
| NOTICE | `/gst-notice-reply-chennai` (link only) |
| LIT | `/gst-litigation-chennai` (link only) |
| ECOM / AMZ / FREE / REST / CLIN / STUP / MANU / EXP | `/gst-return-filing-for-` ecommerce-sellers / amazon-sellers / freelancers / restaurants / clinics / startups / manufacturers / import-export-businesses (link only) |
| HUB | `/company-registration-chennai` (link only) |
| PVT | `/private-limited-company-incorporation-chennai` (link only; anchor "Private Limited Company Registration in Chennai") |
| LLP / PF / PROP / OPC | `/llp-registration-chennai` / `/partnership-firm-registration-chennai` / `/proprietorship-registration-chennai` / `/opc-registration-chennai` (link only) |
| DSC | `/digital-signature-certificate-chennai` (link only; plan 16) |
| IEC | `/iec-registration-chennai` (link only) |
| UDY | `/msme-udyam-registration-chennai` (link only) |
| FSSAI | `/fssai-license-chennai` (link only) |
| ACP | `/annual-compliance-package` (link only) |
| BOOK | `/bookkeeping-services-chennai` (link only) |
| NRI | `/nri-tax-services` (link only) |
| FOR | `/company-registration-india-for-foreigners` (link only) |
| FEMA | `/fema-rbi-compliance` (link only) |
| AGILE | `/blog/agile-pro-s-pan-tan-epfo-esic` (plan 01/02, link only) |
| FRLNC | `/blog/gst-freelancers-consultants` (plan 21, link only) |
| LUTP | `/blog/lut-for-exporters` (plan 21, link only) |
| WA-xx | WhatsApp messages in the library (Section 9.9) |
| SRC1–SRC8 | External authority sources (Section 3.0) |
| QE | Qualified enquiry (real need + one useful detail + contact + likely to buy in 0–90 days) |
| [NEW] | A URL that does not exist today |
| V | Row carries "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." |

---

## 1. Executive summary

### 1.1 Where we start (3 Nov 2026)

| Item | Current state | Gap |
|---|---|---|
| Money page | `/gst-registration-chennai` on `ServicePageTemplate`: H1, subhead, intro paragraph, 6 sub-services, 5-step HowTo, 6 FAQs, 3 related questions, 4 related slugs, one citation (tutorial.gst.gov.in) | Only 6 FAQs (brief needs 20+). No key-facts table, no who-is-it-for block, no documents-by-constitution table, no comparison table, no problems-solved block, no Chennai coverage block, no related guides, no parent crumb. The `children` slot, `keyFacts`, `relatedPosts` and `parentCrumb` props are unused |
| Title | "GST Registration in Chennai \| New Registration & LUT" (53 chars) | Spends title space on LUT, which plan 21 owns (`lut-for-exporters`). Does not carry "GSTIN" or "documents", the second-largest query family |
| Meta | "New GST registration for businesses and professionals in Chennai — document preparation, ARN tracking, amendments, and LUT applications by C S Rushil & Co." | No next action; again leads with LUT |
| Page date | `/gst-registration-chennai: 2026-10-08` in `src/lib/page-dates.ts` | Update the date when the rebuilt page ships |
| Related services | goods-and-services-tax, gst-litigation-chennai, company-registration-chennai, private-limited-company-incorporation-chennai | Missing: gst-return-filing-chennai (the natural next service), iec-registration-chennai, msme-udyam-registration-chennai, digital-signature-certificate-chennai, fssai-license-chennai, annual-compliance-package |
| Related questions block | Link 3 sends "Should I register my company before or after GST registration?" to the company hub | Better target is S2 (`gst-registration-after-company-incorporation`), which answers exactly that |
| Blog posts owned | 3 existing posts | Thin, no FAQ blocks except S2, no tool links, some wording needs the verify label (see 1.3) |
| Scheduled date risk | `gst-registration-after-company-incorporation` is dated 2027-01-08, so `isPublished()` hides it until then | Plans 01 and 02 link to it. Until 8 Jan 2027 those links would 404. Decide: bring the date forward (recommended, to the week the plan 01/02 links ship) or hold the links |
| SERP position | Not measured | Run a live Google India SERP check and a Search Console query export in week 1. Do not claim rankings |
| GBP | 4.8 stars, 58 reviews (2 Nov 2026); hours wrongly show "Open 24 hours" | Fix the hours first. GST registration is not yet a named GBP service. The rating must not go on the site or in schema |

### 1.2 Facts on the live money page that need the verify label, a firm check or a fix

| # | Live-page text (where) | Issue | Action |
|---|---|---|---|
| LP1 | "₹40 lakh for goods or ₹20 lakh for services in Tamil Nadu and most other states (lower limits of ₹10–20 lakh apply in certain states, mainly special-category states)" (intro, FAQ 1) | The ₹40 lakh / ₹20 lakh TN figures are in the fact sheet as [V]. The special-category-state sentence is not | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. Cut the special-category sentence unless verified; Chennai readers do not need it |
| LP2 | "Since 1 October 2023, small sellers supplying goods only within their state through e-commerce marketplaces can obtain an enrolment number instead of registering" (intro, FAQ 1) | Date and rule not in the fact sheet (the online-sellers post cites "Notification 34/2023-Central Tax") | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. Check the notification number, the turnover condition and the "single state" wording |
| LP3 | "Registering late attracts penalties and blocks Input Tax Credit for the pre-registration period" (intro) | Penalty and ITC consequence not in the fact sheet; S2 has a more nuanced s.18 account | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. Soften to "can attract penalties and can restrict credit" |
| LP4 | "Typically 3–7 working days from application if documents are in order... the law allows up to 30 days where the officer carries out physical verification... or Aadhaar authentication is not completed" (FAQ 2) | Reads as a turnaround promise. Not in the fact sheet and not documented firm experience. The 30-day statutory figure is also unverified | Replace "Typically 3–7 working days" with a no-promise line ("timing depends on the department's processing and any query"). Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. for the statutory days. The online-sellers post repeats it ("three to seven working days") |
| LP5 | "Voluntary registration ... is often required by marketplaces (Amazon, Flipkart) and larger B2B customers" (FAQ 4) | Marketplace requirement is not in the fact sheet. Naming marketplaces is fine (they are not competitors) but the claim is unverified | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. Prefer "marketplaces usually ask for a GSTIN; check your seller agreement" |
| LP6 | FAQ 5 (new shop address proof): "valid rent or lease agreement along with the owner's ownership proof... consent letter or NOC" | Document rules not in the fact sheet. The same answer then mentions "Porur" and "supplying goods inter-state, or making supplies on behalf of another business as its agent" | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. Split into two FAQs. Remove the Porur sentence: it reads as a doorway insert and has no basis in the question |
| LP7 | "Casual & Non-Resident Taxable Person Registration: short-term... exhibitions, events, or non-resident suppliers" (sub-services) | Rule detail not in the fact sheet | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. |
| LP8 | "LUT Application ... renewed annually" (sub-services) | LUT is [V] in the fact sheet (RFD-11); annual renewal is not stated | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. Demote LUT to a link to `lut-for-exporters`; plan 21 owns it |
| LP9 | "Additional documents apply for companies and LLPs" (FAQ 3) | Vague and unverified | Replace with the document table by constitution (Section 5, block 6) with the label |
| LP10 | "Registration Amendment: business address, additional place of business, contact details, authorised signatory" (sub-services) | Amendment scope (core vs non-core fields) not in the fact sheet | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. |
| LP11 | Citation `tutorial.gst.gov.in/userguide/registration/Apply_for_Registration_Normal_Taxpayer.htm` | URL may have changed | Open it and confirm it still resolves before republishing |
| LP12 | HowTo: ARN tracking, GSTIN and certificate issuance | Fact sheet gives REG-01, Aadhaar authentication, ARN, REG-06, REG-03 → REG-04 as [V] | Add the label once in the page's verification note. Name REG-06 and REG-03/REG-04 explicitly |
| LP13 | "Post-Registration Setup: invoicing format, e-way bill applicability, first return-filing calendar" (sub-services) | Scope creep into plan 21's territory (returns) | Keep as one line that links to GSTRET. Do not describe return due dates here |

### 1.3 Facts on the three owned blog posts that need the verify label or a fix

| # | Post | Text | Issue | Action |
|---|---|---|---|---|
| BP1 | online-sellers | "a PAN-based enrolment number ... (Notification 34/2023-Central Tax)" | Rule and notification number | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. |
| BP2 | online-sellers | "TCS at 0.5 percent (reduced from one percent with effect from July 2024)" | Rate and effective date | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. TCS handling sits closer to returns (plan 21): keep one line and link out |
| BP3 | online-sellers | "This amount shows up in your GSTR 2A... reconciling GSTR 2A" | The fact sheet says credit is based on GSTR-2B | Replace with GSTR-2B wording; Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. |
| BP4 | online-sellers | "Registration itself typically takes three to seven working days" | Turnaround promise | Delete or replace with a no-promise line |
| BP5 | online-sellers | "warehouse outside Tamil Nadu ... may need GST registration in that state too" | Rule detail | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. |
| BP6 | threshold | "tracked on a continuous, financial-year basis ... from that point, not from the following April" | The 30-day application window and effective date are not stated; the rolling claim is unverified | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. |
| BP7 | threshold | "inter-state supply of services alone is exempt from registration below the threshold" | Exemption detail | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. |
| BP8 | threshold | "penalties and interest calculated from the date registration should have happened" | Penalty detail | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. |
| BP9 | after-incorporation | s.22, s.24, s.25 (30 days), s.18 pre-registration credit, "composition cannot make inter-state outward supplies", "limit for service providers is lower" | None of these are in the fact sheet | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. for each; the post already has the right structure |
| BP10 | after-incorporation | "AGILE-PRO-S ... GSTIN optional ... no separate fee" | The fact sheet confirms AGILE-PRO-S covers GSTIN with no fee; "optional" and "registered office becomes the principal place of business" are not stated | Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing. for "optional" and the office rule |
| BP11 | after-incorporation | Post date 2027-01-08 | Future-dated; plans 01/02 link to it | Bring the date forward or hold the links (see 1.1) |

### 1.4 The opportunity

GST registration is a short-cycle, high-intent service: a person with a trigger (first sale, marketplace onboarding, customer asking for GSTIN, incorporation done, threshold crossed) usually wants to act within days. The firm's strengths line up with the things that stop DIY applicants: address proof, document mismatch and queries. The plan does four things.

1. **Turn the money page into a decision-and-document page**, not a service brochure: who needs it, who does not, which route (regular, composition, voluntary, compulsory, enrolment), documents by constitution, the application path, and what goes wrong.
2. **Own the "problem" queries** (registration rejected, query at application stage, address proof, Aadhaar authentication, crossed the threshold) with five focused pages, because these queries come from people who are already stuck and ready to message.
3. **Feed from the company funnel**: plans 01 and 02 send new companies to S2; this plan adds the reverse link from S2 back to the company pages and to the first-year compliance tracker.
4. **Hand off cleanly** to returns (plan 21), notices (plan 22) and litigation, so a registration client becomes a monthly-compliance client (the revenue-bearing step).

### 1.5 Enquiry target and funnel model

Brief target: at least 10 qualified enquiries per day (300 per month) for this service. This is an aspiration, not a forecast. The table shows what it implies; every rate is a **planning assumption to replace with measured numbers by week 8**, not a result.

| Funnel step | Planning assumption | Needed per month for 300 QE | Source of truth |
|---|---|---|---|
| Qualified enquiries (QE) | Target | 300 | WhatsApp inbox + form + call log, scored per Section 12.5 |
| Contact-to-QE rate | 40% of raw contacts qualify (assumption) | 750 raw contacts | Enquiry log |
| Landing-to-contact rate | 2% of organic landing sessions (assumption) | about 37,500 landing sessions | GA4 landing-page sessions |
| Channel split target (month 3) | Organic 45%, GBP 25%, WhatsApp referrals and broadcast 15%, direct and other 15% (assumption) | 135 / 75 / 45 / 45 QE | UTM tags and the "How did you find us?" question |

Honest read: 300 QE per month from this one service within 90 days is unlikely from SEO alone for a site of this age. Recommend three milestones: **month 1** at least 30 QE (fix GBP, ship the money-page rebuild, switch on the WhatsApp sequence); **month 2** at least 90 QE (problem pages, tools, GBP posting); **month 3** at least 150 QE, then revise the target from measured conversion. The 100-clients-a-month firm target is met by cross-sell, not by this service alone.

### 1.6 What ranks for what (cannibalisation guard)

| Query family | Owner | Others must not target |
|---|---|---|
| GST registration Chennai, new GST registration, GSTIN registration | MP | S2, S3, C-pages as primary |
| GST registration documents (generic) | MP block 6 + T2 | A-pages (they carry constitution-specific lists only) |
| GST registration threshold / turnover limit | S1 (upgraded `gst-threshold-is-a-trigger`) + T1 | MP (one box, then link) |
| REG-01 / how to apply on the portal | S3 | MP (summary only) |
| GST registration for a new company | S2 (upgraded) | PVT, HUB (link only) |
| GST registration for online sellers / Amazon / Flipkart | A1 (upgraded online-sellers post) | ECOM, AMZ (returns only) |
| Regular vs composition | C1 | MP, S2 |
| Voluntary vs compulsory registration | C2 | MP |
| GST registration vs LUT | C3 (LUT mechanics owned by plan 21) | LUTP |
| GST vs Udyam | C4 | UDY |
| GST registration rejected / query at application stage | P1 | NOTICE (owns "received GST notice", ASMT/DRC) |
| "GST return filing", "GST notice reply", "GST appeal" | Not this plan | Any page here |

---

## 2. Buyer and enquiry research: 9 personas

Tamil variations: Tamil script followed by transliteration in brackets. Every WhatsApp pre-filled message is under 500 characters, carries one qualifying prompt and promises no outcome or timeline. Personas are planning archetypes, not real clients.

### Persona 1: Arun, new shop owner

| Field | Detail |
|---|---|
| Who | 28–45, opening or just opened a retail shop, showroom or small trading counter |
| Business type | Retail / trading (mobile accessories, apparel, grocery, hardware), proprietorship |
| Location | T. Nagar, Anna Nagar, Velachery, Tambaram, Ambattur |
| Trigger | Shop lease signed; supplier or distributor asks for a GSTIN; unsure if the shop even needs one |
| Urgency | High: wants it before first purchase invoices and first sale |
| Budget sensitivity | High: first-time owner, cash is tied up in stock and deposit |
| Main fear | Address proof rejected because the lease is in a relative's name or the electricity bill is in the landlord's name; paying tax he has not collected |
| Questions to Google/AI | "Do I need GST for a small shop?" "What documents for GST registration for a rented shop?" "How to get a GST number in Chennai?" |
| Exact queries | gst registration for new shop chennai; gst registration documents for rented shop; new gst registration chennai; gst number for small shop |
| Tamil variations | கடைக்கு ஜிஎஸ்டி பதிவு (kadaikku GST pathivu); வாடகை கடைக்கு ஜிஎஸ்டி நம்பர் (vaadagai kadaikku GST number) |
| Best landing page | A2 (new shop and retail) → MP; address questions → S4 |
| Best CTA | "WhatsApp Us" with a photo of the lease and the electricity bill |
| WhatsApp pre-filled | WA-01 |
| Qualification questions | Goods or services? Own or rented premises, and whose name is on the lease and the bill? Any inter-state purchases or sales planned? Expected turnover in the first year? Any marketplace listing? |
| Follow-on services | GSTRET, UDY, BOOK, FSSAI if food, ACP |

### Persona 2: Divya, home-based online seller

| Field | Detail |
|---|---|
| Who | 24–40, sells on Amazon, Flipkart, Meesho or Instagram from home; often a woman running a micro business |
| Business type | E-commerce seller (apparel, handicrafts, food, cosmetics, home goods) |
| Location | Porur, Avadi, Medavakkam, Madipakkam, Perambur |
| Trigger | Marketplace seller onboarding asks for GSTIN or offers the enrolment route; first orders to other states |
| Urgency | High: listings are paused until the GST detail is added |
| Budget sensitivity | High |
| Main fear | Choosing the wrong route (registration vs enrolment), using her home address, and a notice later |
| Questions to Google/AI | "Is GST compulsory for Amazon sellers?" "Can I use my home address for GST?" "Enrolment ID vs GSTIN?" |
| Exact queries | gst registration for amazon sellers; gst registration for online sellers chennai; gst for meesho sellers; gst registration home address |
| Tamil variations | ஆன்லைன் விற்பனைக்கு ஜிஎஸ்டி தேவையா (online virpanaikku GST thevaiyaa); வீட்டு முகவரியில் ஜிஎஸ்டி பதிவு (veettu mugavariyil GST pathivu) |
| Best landing page | A1 (upgraded online-sellers post) → MP; route comparison → C2 and the enrolment section in A1 |
| Best CTA | "WhatsApp Us" with the marketplace name and where stock is stored |
| WhatsApp pre-filled | WA-07 |
| Qualification questions | Which marketplaces? Goods sold only inside Tamil Nadu or to other states? Stock stored where? Own product or reselling? Home address proof available? |
| Follow-on services | ECOM, AMZ (returns), BOOK, UDY, trademark |

### Persona 3: Karthik, founder who has just incorporated

| Field | Detail |
|---|---|
| Who | 27–40, co-founder of a newly incorporated private limited company or LLP |
| Business type | Tech, services, D2C or trading startup |
| Location | OMR, Guindy, Anna Nagar, Nungambakkam |
| Trigger | Certificate of incorporation received; first client or first invoice due; confusion about AGILE-PRO-S vs separate application |
| Urgency | Medium-high |
| Budget sensitivity | Medium |
| Main fear | Registering too early (returns before sales) or too late (tax liability without collection); registered-office address mismatch |
| Questions to Google/AI | "Does a new private limited company need GST?" "Can I apply for GSTIN with SPICe+?" |
| Exact queries | gst registration after company incorporation; gst registration for private limited company; gstin for new company chennai; agile pro s gstin |
| Tamil variations | புதிய கம்பெனிக்கு ஜிஎஸ்டி பதிவு (puthiya companikku GST pathivu) |
| Best landing page | S2 (upgraded after-incorporation post) → MP |
| Best CTA | "Book 15-Minute Consultation" |
| WhatsApp pre-filled | WA-08 |
| Qualification questions | Company or LLP? Date of incorporation? Goods or services? Customers in other states? Registered office owned or rented? Was GSTIN applied through AGILE-PRO-S? |
| Follow-on services | ACP, ROC, DSC, BOOK, GSTRET, virtual CFO |

### Persona 4: Meera, freelancer or consultant nearing the services threshold

| Field | Detail |
|---|---|
| Who | 25–45, independent designer, developer, consultant, trainer or agency owner |
| Business type | Service professional, proprietor |
| Location | OMR, Sholinganallur, Guindy, Adyar, remote |
| Trigger | Billing is nearing the services threshold; a corporate client wants GST invoices |
| Urgency | Medium; becomes high when the client invoice is blocked |
| Budget sensitivity | Medium |
| Main fear | Not knowing the exact date she crossed; clients that are overseas (export of services) |
| Questions to Google/AI | "GST registration limit for freelancers in Tamil Nadu?" "Do I need GST for foreign clients?" |
| Exact queries | gst registration for freelancers chennai; gst limit for service providers tamil nadu; gst registration consultant |
| Tamil variations | சேவை வழங்குபவர்களுக்கு ஜிஎஸ்டி வரம்பு (sevai vazhangubavargalukku GST varambu) |
| Best landing page | S1 (threshold post) + T1 → MP; link to FRLNC (plan 21) for the return side |
| Best CTA | "WhatsApp Us" with the last 12 months' billing range |
| WhatsApp pre-filled | WA-14 |
| Qualification questions | Services only? Billing so far this financial year? Any client outside India? Any client that needs GST invoice now? Registered anywhere already? |
| Follow-on services | FRLNC, GSTRET, income tax return, DSC |

### Persona 5: Suresh, small manufacturer or job-work unit

| Field | Detail |
|---|---|
| Who | 35–55, owns a small unit in Ambattur, Guindy, Sriperumbudur or Oragadam belt |
| Business type | Manufacturing, fabrication, packaging, job work; proprietorship, partnership or company |
| Location | Ambattur, Guindy, Kanchipuram district |
| Trigger | A large buyer outside Tamil Nadu wants a GSTIN; machinery purchase makes credit important |
| Urgency | High: purchase order is waiting |
| Budget sensitivity | Medium |
| Main fear | Wrong HSN selection and mismatch between the premises (leased shed) and registration address |
| Questions to Google/AI | "GST registration for small manufacturer?" "Inter-state sale GST registration compulsory?" |
| Exact queries | gst registration for manufacturers chennai; gst registration inter state supply; gst registration ambattur |
| Tamil variations | உற்பத்தியாளர்களுக்கு ஜிஎஸ்டி பதிவு (urpaththiyaalargalukku GST pathivu) |
| Best landing page | A4 (manufacturers) → MP; L3 (Ambattur page section) |
| Best CTA | "WhatsApp Us" with HSN guess and shed lease |
| WhatsApp pre-filled | WA-10 |
| Qualification questions | Own goods or job work? Customers in which states? Shed leased or owned? Raw material bought from unregistered suppliers? Turnover range? |
| Follow-on services | MANU, EXP, UDY, FSSAI/IEC as applicable, bookkeeping |

### Persona 6: Ravi, partnership firm, contractor or LLP wanting a GSTIN for a tender or client

| Field | Detail |
|---|---|
| Who | 35–55, partner in a contracting, trading or services firm; or LLP designated partner |
| Business type | Partnership firm, LLP |
| Location | Anna Nagar, Mylapore, Nungambakkam, Thanjavur and other TN cities (online) |
| Trigger | Tender or work order requires GSTIN; partners disagree on who signs |
| Urgency | High: deadline on the tender |
| Budget sensitivity | Medium |
| Main fear | Partnership deed gaps, authorised signatory letters, Aadhaar authentication of every partner |
| Questions to Google/AI | "Documents for GST registration of partnership firm?" "Who is the authorised signatory?" |
| Exact queries | gst registration for partnership firm; gst registration for llp chennai; gst documents partnership deed |
| Tamil variations | கூட்டாண்மை நிறுவனத்திற்கு ஜிஎஸ்டி பதிவு (koottaanmai niruvanaththirku GST pathivu) |
| Best landing page | A5 → MP; T2 document checklist |
| Best CTA | "WhatsApp Us" with deed photo |
| WhatsApp pre-filled | WA-09 |
| Qualification questions | Firm or LLP? How many partners? Deed registered? Who will be authorised signatory? Place of business and proof? Deadline? |
| Follow-on services | PF, LLP, DSC (for LLP), GSTRET, income tax |

### Persona 7: Anita, NRI or foreign business supplying into India

| Field | Detail |
|---|---|
| Who | 35–60, NRI starting a business in Tamil Nadu from abroad, or an overseas company supplying goods or services into India |
| Business type | NRI-run trading or service business; foreign company with a temporary or continuing supply in India |
| Location | Abroad (UAE, UK, USA, Singapore) with family in Chennai; online |
| Trigger | First Indian customer; family premises used as the principal place; non-resident supply question |
| Urgency | Medium |
| Budget sensitivity | Medium-low; wants correctness and minimal visits |
| Main fear | Aadhaar-based authentication when she is abroad; documents from overseas; wrong category (resident, casual, non-resident) |
| Questions to Google/AI | "Can an NRI register for GST in India?" "GST for a foreign company with no office in India?" |
| Exact queries | gst registration for nri; gst registration non resident taxable person; gst registration foreign company india |
| Tamil variations | வெளிநாட்டில் இருந்து ஜிஎஸ்டி பதிவு (veliyoottil irunthu GST pathivu) |
| Best landing page | A3 → MP; link to NRI and FOR |
| Best CTA | "Book 15-Minute Consultation" (video call) |
| WhatsApp pre-filled | WA-04 (NRI) and WA-05 (foreign company) |
| Qualification questions | Country of residence? Indian PAN and Aadhaar available? Goods or services, to whom? Premises in India? Planned duration of supply? Bank in India? |
| Follow-on services | NRI, FOR, FEMA, DSC, income tax |

### Persona 8: Faisal, owner who has crossed the threshold without registering

| Field | Detail |
|---|---|
| Who | 30–55, trader or service provider whose billing has quietly passed the threshold |
| Business type | Trading, services, small manufacturing |
| Location | Chennai and TN cities |
| Trigger | A customer, bank or CA says "you should have registered"; or a marketplace/portal alert |
| Urgency | Very high: wants to stop the gap growing |
| Budget sensitivity | Medium; worried about the cost of the delay itself |
| Main fear | Penalty and tax on past sales that did not include GST |
| Questions to Google/AI | "I crossed GST limit, what now?" "Penalty for late GST registration?" |
| Exact queries | crossed gst threshold without registration; late gst registration penalty; gst registration after turnover limit crossed |
| Tamil variations | வரம்பு தாண்டியும் ஜிஎஸ்டி பதிவு இல்லை (varambu thaandiyum GST pathivu illai) |
| Best landing page | P2 → MP; T1 to compute the date |
| Best CTA | "WhatsApp Us" with month-wise turnover |
| WhatsApp pre-filled | WA-02 |
| Qualification questions | Goods or services? Month turnover crossed? Total sales since then? Invoices issued without GST? Any notice yet? Inter-state sales? |
| Follow-on services | GSTRET, NOTICE (if a notice arrives), BOOK, ACP |

### Persona 9: Lakshmi, home-based micro business unsure whether GST applies

| Field | Detail |
|---|---|
| Who | 30–55, home bakery, boutique, tuition, tailoring or handmade-goods business |
| Business type | Micro proprietorship, often below the threshold |
| Location | Anna Nagar, Kolathur, Perambur, Thiruvanmiyur, TN towns |
| Trigger | A bulk customer asks for GST invoice; fear of "getting into GST" |
| Urgency | Low-medium |
| Budget sensitivity | Very high |
| Main fear | Starting returns and tax work that outweigh the benefit; being forced to register |
| Questions to Google/AI | "Is GST needed for a home business?" "Is composition better?" |
| Exact queries | gst for home business; composition scheme gst small business; do i need gst for small business |
| Tamil variations | வீட்டு தொழிலுக்கு ஜிஎஸ்டி தேவையா (veettu thozhilukku GST thevaiyaa); கம்போசிஷன் திட்டம் (composition thittam) |
| Best landing page | T1 and C1/C2 → MP; reassurance through "Do I need this?" AEO set |
| Best CTA | "Book 15-Minute Consultation" |
| WhatsApp pre-filled | WA-11 |
| Qualification questions | What do you sell? Monthly sales range? Customers: households or businesses? Any sales outside Tamil Nadu? Any marketplace? |
| Follow-on services | UDY, FSSAI (food), BOOK, GSTRET if she registers |

### Persona summary table

| # | Persona | Trigger | Best page | WhatsApp | Priority |
|---|---|---|---|---|---|
| 1 | Arun, new shop | Lease signed, supplier asks | A2 / MP | WA-01 | P1 |
| 2 | Divya, online seller | Marketplace onboarding | A1 / MP | WA-07 | P1 |
| 3 | Karthik, new company | Incorporation done | S2 / MP | WA-08 | P1 |
| 4 | Meera, freelancer | Nearing threshold | S1 / T1 | WA-14 | P2 |
| 5 | Suresh, manufacturer | Out-of-state buyer | A4 / MP | WA-10 | P1 |
| 6 | Ravi, firm or LLP | Tender or work order | A5 / MP | WA-09 | P2 |
| 7 | Anita, NRI/foreign | First Indian customer | A3 / MP | WA-04, WA-05 | P2 |
| 8 | Faisal, crossed threshold | Customer or bank alert | P2 / MP | WA-02 | P1 |
| 9 | Lakshmi, micro business | Customer asks for GST invoice | T1 / C1 | WA-11 | P3 |

---

## 3. Keyword map: 100 keywords

Search volumes and difficulty are **not measured** here. Priority is set by enquiry intent, not volume. Week 1 action: export Search Console queries and run a live SERP check for the P1 set before finalising page order.

### 3.0 External authority sources

| Code | Source | URL | Used for |
|---|---|---|---|
| SRC1 | GST portal: registration help | https://www.gst.gov.in/help/registration | Process, documents, threshold, amendment |
| SRC2 | GST portal tutorial: Apply for Registration as a Normal Taxpayer | https://tutorial.gst.gov.in/userguide/registration/Apply_for_Registration_Normal_Taxpayer.htm (already on the live page; confirm it still resolves) | Step-by-step |
| SRC3 | CBIC GST: Acts, rules, notifications | https://cbic-gst.gov.in | CGST Act sections 22, 24, 25, 10 (composition), notifications |
| SRC4 | MCA FAQ: AGILE-PRO-S | https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/agile-pro-s-form.html (already on S2) | GSTIN at incorporation |
| SRC5 | GST portal: Search Taxpayer / track application | https://www.gst.gov.in (Services menu) | Verifying a GSTIN; ARN status |
| SRC6 | Tamil Nadu Commercial Taxes Department | https://www.tnct.gov.in (confirm the exact URL before use) | State administration |
| SRC7 | Udyam registration portal | https://udyamregistration.gov.in | C4 |
| SRC8 | DGFT | https://www.dgft.gov.in | IEC link in C3 |

Every external fact cited from these carries the verify label unless it is in the fact sheet.

### 3.1 Page codes and URLs (used in the map)

| Code | URL | Status |
|---|---|---|
| MP | `/gst-registration-chennai` | Upgrade |
| S1 | `/blog/gst-threshold-is-a-trigger` | Upgrade |
| S2 | `/blog/gst-registration-after-company-incorporation` | Upgrade |
| S3 | `/blog/gst-registration-process-reg-01-step-by-step` | NEW |
| S4 | `/blog/gst-registration-address-proof-rented-home-shared-office` | NEW |
| S5 | `/blog/hsn-sac-code-for-gst-registration` | NEW |
| S6 | `/blog/gst-registration-additional-place-of-business-multiple-states` | NEW |
| S7 | `/blog/after-getting-gstin-first-30-days` | NEW |
| S8 | `/blog/gst-jurisdiction-central-or-state-tamil-nadu` | NEW |
| C1 | `/blog/regular-vs-composition-gst-scheme` | NEW |
| C2 | `/blog/voluntary-vs-compulsory-gst-registration` | NEW |
| C3 | `/blog/gst-registration-vs-lut-for-exporters` | NEW |
| C4 | `/blog/gst-registration-vs-udyam-registration` | NEW |
| C5 | `/blog/gst-registration-self-vs-ca-assisted` | NEW |
| A1 | `/blog/gst-registration-online-sellers-chennai` | Upgrade |
| A2 | `/blog/gst-registration-for-new-shop-chennai` | NEW |
| A3 | `/blog/gst-registration-for-nris-and-foreign-businesses` | NEW |
| A4 | `/blog/gst-registration-for-small-manufacturers-chennai` | NEW |
| A5 | `/blog/gst-registration-for-partnership-firm-and-llp` | NEW |
| P1 | `/blog/gst-registration-rejected-or-query-raised` | NEW |
| P2 | `/blog/crossed-gst-threshold-without-registering` | NEW |
| P3 | `/blog/gst-registration-aadhaar-authentication-pending` | NEW |
| P4 | `/blog/wrong-details-in-gst-registration-how-to-amend` | NEW |
| P5 | `/blog/need-gstin-urgently-marketplace-tender-customer` | NEW |
| T1 | `/tools/gst-registration-threshold-checker` | NEW |
| T2 | `/tools/gst-registration-document-checklist` | NEW |
| T3 | `/tools/regular-vs-composition-gst-checker` | NEW |
| FAQ | `/faq/gst-registration` | NEW |
| CASE | `/case-studies/gst-registration-chennai` | NEW (noindex until consent) |
| PROC | `/gst-registration-process-and-timeline` | NEW |
| L1 | `/chartered-accountant-anna-nagar-chennai` (section) | Upgrade |
| L2 | `/chartered-accountant-t-nagar-chennai` (section) | Upgrade |
| L3 | `/chartered-accountant-ambattur-chennai` (section) | Upgrade |
| L4 | `/chartered-accountant-omr-sholinganallur-chennai` (section) | Upgrade |
| L5 | `/chartered-accountant-porur-chennai` (section) | Upgrade |

Other link codes are in the codes table at the top. WhatsApp codes WA-01 to WA-15 are written out in Section 9.9. Enquiry potential: H (likely to message within a visit or two), M, L.

Columns in every table below: **#** · Keyword · Intent · Funnel · Priority · Page type · Target URL · Primary kw (of the page) · Secondary kws · Entities · Likely next action · WhatsApp CTA · Internal links · External source · Content format · Enquiry potential.

### 3.2 A. Transactional (10)

| # | Keyword | Intent | Funnel | Pri | Page type | URL | Primary kw | Secondary kws | Entities | Next action | WA | Internal links | Ext | Format | Enq |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | gst registration in chennai | Transactional | BOFU | P1 | Money | MP | gst registration in chennai | gst registration chennai, gst registration services | GSTIN, REG-01, ARN, CA | WhatsApp | WA-01 | GSTRET, GSTHUB, T2 | SRC1 | Service page | H |
| 2 | gst registration consultant chennai | Transactional | BOFU | P1 | Money | MP | same | gst consultant, chartered accountant gst | CA, GST portal | WhatsApp | WA-01 | C5, GSTRET | SRC1 | Service page | H |
| 3 | new gst registration chennai | Transactional | BOFU | P1 | Money | MP | same | new gstin, apply gst number | REG-01, REG-06 | WhatsApp | WA-01 | S3, T2 | SRC2 | Service page | H |
| 4 | gstin registration chennai | Transactional | BOFU | P1 | Money | MP | same | gstin number apply, gst number chennai | GSTIN, PAN | Call | WA-01 | S3, SRC5 tool | SRC2 | Service page | H |
| 5 | apply for gst registration online | Transactional | BOFU | P1 | Process | S3 | gst registration process | reg-01 steps, online application | GST portal, TRN, ARN | Book | WA-01 | MP, T2 | SRC2 | Step guide | M |
| 6 | gst registration services in chennai | Transactional | BOFU | P2 | Money | MP | same | gst registration service chennai | CA, Anna Nagar | WhatsApp | WA-01 | PROC | SRC1 | Service page | H |
| 7 | gst registration for company chennai | Transactional | BOFU | P1 | Support | S2 | gst registration for company | gst registration private limited, gstin new company | AGILE-PRO-S, SPICe+ | Book | WA-08 | PVT, HUB, MP | SRC4 | Article + FAQ | H |
| 8 | gst registration for proprietorship | Transactional | BOFU | P2 | Money | MP | gst registration chennai | proprietor gst, sole proprietor gstin | PAN, Aadhaar | WhatsApp | WA-01 | PROP, A2 | SRC1 | Service page (audience row) | H |
| 9 | gst registration near me | Transactional | BOFU | P1 | Money | MP | gst registration chennai | gst consultant near me, ca near me gst | Anna Nagar, GBP | Call | WA-01 | L1 | SRC1 | Service page + GBP | H |
| 10 | gst registration agent chennai | Transactional | BOFU | P3 | Money | MP | gst registration chennai | gst filing agent (not our term in copy) | CA | WhatsApp | WA-01 | C5 | SRC1 | Service page | M |

Note for row 10: the live copy should say "chartered accountant", not "agent", to stay inside ICAI style; the keyword is a search term only.

### 3.3 B. Commercial investigation (10)

| # | Keyword | Intent | Funnel | Pri | Page type | URL | Primary kw | Secondary kws | Entities | Next action | WA | Internal links | Ext | Format | Enq |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 11 | gst registration charges in chennai | Commercial | MOFU | P1 | Process | PROC | gst registration process and timeline | government fee, cost | GST portal, no fee label V | WhatsApp | WA-01 | MP, T2 | SRC1 | Explainer (no professional fees) | H |
| 12 | gst registration fees government | Commercial | MOFU | P2 | Process | PROC | same | is gst registration free | GST portal | WhatsApp | WA-01 | MP | SRC1 | Explainer | M |
| 13 | gst consultant in chennai | Commercial | MOFU | P1 | Money | MP | gst registration in chennai | gst consultant, gst advisor | CA | WhatsApp | WA-01 | GSTRET, C5 | SRC1 | Service page | H |
| 14 | chartered accountant for gst registration | Commercial | MOFU | P1 | Money | MP | gst registration in chennai | ca gst, gst filing ca | CA, ICAI | Book | WA-01 | C5 | SRC1 | Service page | H |
| 15 | gst registration documents required | Commercial | MOFU | P1 | Tool | T2 | gst registration documents | documents list, checklist | PAN, Aadhaar, deed | WhatsApp | WA-12 | MP, A2, A5 | SRC2 | Interactive checklist | H |
| 16 | how long does gst registration take | Commercial | MOFU | P1 | Process | PROC | gst registration process and timeline | time taken, working days (no promise) | ARN, REG-03 | WhatsApp | WA-06 | MP, P3 | SRC1 | Explainer | H |
| 17 | gst registration process online | Commercial | MOFU | P1 | Support | S3 | gst registration process | reg-01 step by step | TRN, Part A, Part B | Book | WA-01 | MP, T2 | SRC2 | Step guide + HowTo | M |
| 18 | gst registration online vs ca | Commercial | MOFU | P2 | Comparison | C5 | gst registration self vs ca | diy gst registration | CA, portal | WhatsApp | WA-01 | MP | SRC1 | Comparison | M |
| 19 | gst registration checklist | Commercial | MOFU | P2 | Tool | T2 | gst registration documents | checklist pdf | documents | WhatsApp | WA-12 | MP | SRC2 | Checklist download | M |
| 20 | gst registration for small business chennai | Commercial | MOFU | P2 | Money | MP | gst registration in chennai | small business gst, msme gst | proprietor, SME | WhatsApp | WA-11 | T1, C1, UDY | SRC1 | Service page | M |

### 3.4 C. Problem and urgent (10)

| # | Keyword | Intent | Funnel | Pri | Page type | URL | Primary kw | Secondary kws | Entities | Next action | WA | Internal links | Ext | Format | Enq |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 21 | gst registration rejected | Problem | BOFU | P1 | Problem | P1 | gst registration rejected | rejection reasons, reapply | REG-05 (V), REG-03 | WhatsApp | WA-03 | MP, NOTICE | SRC1 | Troubleshooting guide | H |
| 22 | gst registration query reply | Problem | BOFU | P1 | Problem | P1 | gst registration query | clarification, reply to officer | REG-03, REG-04 | WhatsApp | WA-03 | NOTICE (hand-off only) | SRC1 | Guide | H |
| 23 | gst registration application pending | Problem | BOFU | P1 | Problem | P3 | gst registration pending | ARN status, stuck | ARN, officer | WhatsApp | WA-13 | MP, P1 | SRC5 | Guide | H |
| 24 | gst aadhaar authentication pending | Problem | BOFU | P1 | Problem | P3 | aadhaar authentication gst | suvidha kendra, biometric | Aadhaar, GSK | WhatsApp | WA-13 | MP, A3 | SRC1 | Guide | H |
| 25 | gst registration address proof rejected | Problem | BOFU | P1 | Support | S4 | gst address proof | rent agreement, consent letter | lease, EB bill, NOC | WhatsApp | WA-12 | MP, A2, T2 | SRC1 | Guide | H |
| 26 | crossed gst limit without registration | Problem | BOFU | P1 | Problem | P2 | crossed gst threshold | late registration, penalty | aggregate turnover, s.22 (V) | WhatsApp | WA-02 | T1, MP | SRC3 | Guide | H |
| 27 | gstin needed urgently | Problem | BOFU | P1 | Problem | P5 | need gstin urgently | marketplace, tender, customer | GSTIN | Call | WA-06 | MP, P3 | SRC1 | Guide | H |
| 28 | wrong details in gst registration | Problem | BOFU | P2 | Problem | P4 | amend gst registration | correct trade name, address change | core/non-core (V) | WhatsApp | WA-03 | MP, S6 | SRC1 | Guide | M |
| 29 | gst registration suvidha kendra appointment | Problem | BOFU | P2 | Problem | P3 | aadhaar authentication gst | biometric appointment | GSK | WhatsApp | WA-13 | MP | SRC1 | Guide | M |
| 30 | gst number for amazon account | Problem | BOFU | P1 | Problem | P5 | need gstin urgently | seller account blocked | marketplace | WhatsApp | WA-07 | A1, MP | SRC1 | Guide | H |

### 3.5 D. Comparison (10)

| # | Keyword | Intent | Funnel | Pri | Page type | URL | Primary kw | Secondary kws | Entities | Next action | WA | Internal links | Ext | Format | Enq |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 31 | regular vs composition gst | Comparison | MOFU | P1 | Comparison | C1 | regular vs composition gst | composition scheme pros cons | CMP-08, GSTR-4 (V) | Book | WA-11 | T3, MP | SRC3 | Comparison table | H |
| 32 | composition scheme or regular for small business | Comparison | MOFU | P2 | Tool | T3 | regular vs composition checker | which scheme | CMP-08 | WhatsApp | WA-11 | C1 | SRC3 | Checker | M |
| 33 | voluntary vs compulsory gst registration | Comparison | MOFU | P2 | Comparison | C2 | voluntary vs compulsory gst | s.24 categories | s.24, s.22 (V) | WhatsApp | WA-11 | MP, T1 | SRC3 | Comparison table | M |
| 34 | gst registration vs lut | Comparison | MOFU | P2 | Comparison | C3 | gst registration vs lut | lut without registration | RFD-11 (V) | WhatsApp | WA-06 | LUTP, MP, IEC | SRC3 | Comparison table | M |
| 35 | gst vs udyam registration | Comparison | MOFU | P2 | Comparison | C4 | gst vs udyam | msme vs gst | Udyam | WhatsApp | WA-11 | UDY, MP | SRC7 | Comparison table | M |
| 36 | gst registration self vs ca | Comparison | MOFU | P2 | Comparison | C5 | self vs ca gst registration | diy risks | portal, CA | WhatsApp | WA-01 | MP | SRC1 | Comparison table | M |
| 37 | gst registration vs enrolment number ecommerce | Comparison | MOFU | P2 | Audience | A1 | gst for online sellers | enrolment id | notification (V) | WhatsApp | WA-07 | MP, C2 | SRC3 | Section in A1 | M |
| 38 | proprietorship vs company gst registration | Comparison | MOFU | P3 | Support | S2 | gst for new company | same PAN rule | PAN, aggregate turnover | Book | WA-08 | PVT, PROP | SRC3 | Section in S2 | M |
| 39 | composition scheme vs voluntary registration | Comparison | MOFU | P3 | Comparison | C1 | regular vs composition gst | voluntary | scheme | WhatsApp | WA-11 | C2 | SRC3 | Table row | L |
| 40 | gst registration or udyam first | Comparison | MOFU | P3 | Comparison | C4 | gst vs udyam | which first | Udyam, GSTIN | WhatsApp | WA-11 | UDY | SRC7 | Table row | L |

### 3.6 E. Informational (10)

| # | Keyword | Intent | Funnel | Pri | Page type | URL | Primary kw | Secondary kws | Entities | Next action | WA | Internal links | Ext | Format | Enq |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 41 | gst registration threshold limit tamil nadu | Informational | TOFU | P1 | Support | S1 | gst registration threshold | 40 lakh 20 lakh | aggregate turnover | Tool | WA-02 | T1, MP | SRC3 | Article + tool | H |
| 42 | who needs gst registration | Informational | TOFU | P1 | Support | S1 | gst registration threshold | compulsory registration | s.24 (V) | Tool | WA-11 | T1, C2 | SRC3 | Article | M |
| 43 | what is gstin | Informational | TOFU | P3 | Process | PROC | gst registration process and timeline | gstin format | GSTIN, PAN | Read | WA-01 | MP | SRC5 | Explainer section | L |
| 44 | reg-01 form | Informational | TOFU | P2 | Support | S3 | gst registration process | reg-01 part a part b | REG-01 | Book | WA-01 | MP | SRC2 | Step guide | M |
| 45 | gst registration certificate reg-06 | Informational | TOFU | P3 | Support | S7 | after getting gstin | reg-06 download | REG-06 | Read | WA-01 | GSTRET | SRC1 | Article | L |
| 46 | what is arn in gst registration | Informational | TOFU | P3 | Support | S3 | gst registration process | arn, trn | ARN, TRN | Read | WA-13 | P3 | SRC5 | Article | L |
| 47 | hsn code for gst registration | Informational | TOFU | P2 | Support | S5 | hsn sac gst registration | hsn lookup | HSN, SAC | Book | WA-01 | MP | SRC1 | Article | M |
| 48 | gst registration for new company | Informational | TOFU | P1 | Support | S2 | gst registration after incorporation | agile-pro-s | AGILE-PRO-S | Book | WA-08 | PVT, HUB, AGILE | SRC4 | Article + FAQ | H |
| 49 | gst jurisdiction central or state tamil nadu | Informational | TOFU | P3 | Support | S8 | gst jurisdiction | ward, range | CBIC, TN CTD | Read | WA-01 | GSTRET | SRC6 | Article | L |
| 50 | gst after registration first month | Informational | TOFU | P3 | Support | S7 | after getting gstin | first invoice | invoice, returns (link) | Read | WA-01 | GSTRET | SRC1 | Checklist | M |

### 3.7 F. Local (10)

Area terms point to the money page's coverage block and to **sections** on existing area pages. No new area URLs.

| # | Keyword | Intent | Funnel | Pri | Page type | URL | Primary kw | Secondary kws | Entities | Next action | WA | Internal links | Ext | Format | Enq |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 51 | gst registration anna nagar | Local | BOFU | P1 | Location | L1 | gst registration chennai | gst consultant anna nagar | J-Block, 13th Main Rd | Call or visit | WA-01 | MP | SRC1 | Section + GBP | H |
| 52 | ca in anna nagar for gst | Local | BOFU | P1 | Location | L1 | same | ca anna nagar | Anna Nagar | Call | WA-01 | MP | SRC1 | Section | H |
| 53 | gst registration t nagar | Local | BOFU | P2 | Location | L2 | gst registration chennai | traders, retail | T. Nagar | WhatsApp | WA-01 | A2, MP | SRC1 | Section | M |
| 54 | gst registration ambattur | Local | BOFU | P2 | Location | L3 | gst registration chennai | industrial estate, msme | Ambattur | WhatsApp | WA-10 | A4, MP | SRC1 | Section | M |
| 55 | gst registration omr sholinganallur | Local | BOFU | P2 | Location | L4 | gst registration chennai | it services, freelancers | OMR | WhatsApp | WA-14 | S1, MP | SRC1 | Section | M |
| 56 | gst registration porur | Local | BOFU | P2 | Location | L5 | gst registration chennai | new shops, retail | Porur | WhatsApp | WA-01 | A2, S1 | SRC1 | Section | M |
| 57 | gst registration velachery | Local | BOFU | P3 | Location | MP | gst registration chennai | velachery | Velachery | WhatsApp | WA-01 | MP coverage block | SRC1 | Coverage list | L |
| 58 | gst registration tambaram | Local | BOFU | P3 | Location | MP | gst registration chennai | tambaram | Tambaram | WhatsApp | WA-01 | MP coverage block | SRC1 | Coverage list | L |
| 59 | gst consultant adyar | Local | BOFU | P3 | Location | MP | gst registration chennai | adyar | Adyar | WhatsApp | WA-01 | MP coverage block | SRC1 | Coverage list | L |
| 60 | gst registration chennai online | Local | BOFU | P2 | Money | MP | gst registration chennai | online, remote | video call | WhatsApp | WA-01 | PROC | SRC1 | Service page | M |

### 3.8 G. Audience-specific (10)

| # | Keyword | Intent | Funnel | Pri | Page type | URL | Primary kw | Secondary kws | Entities | Next action | WA | Internal links | Ext | Format | Enq |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 61 | gst registration for online sellers | Audience | BOFU | P1 | Audience | A1 | gst registration for online sellers | marketplace seller gst | Amazon, Flipkart, Meesho | WhatsApp | WA-07 | MP, ECOM, AMZ | SRC1 | Article + FAQ | H |
| 62 | gst registration for amazon sellers | Audience | BOFU | P1 | Audience | A1 | same | amazon seller gstin | Amazon | WhatsApp | WA-07 | AMZ (returns link) | SRC1 | Article | H |
| 63 | gst registration for new shop | Audience | BOFU | P1 | Audience | A2 | gst registration for new shop | retail shop gst | lease, EB bill | WhatsApp | WA-01 | MP, S4 | SRC1 | Article | H |
| 64 | gst registration for partnership firm | Audience | BOFU | P2 | Audience | A5 | gst registration partnership firm | partnership deed gst | deed, partners | WhatsApp | WA-09 | PF, MP | SRC1 | Article | M |
| 65 | gst registration for llp | Audience | BOFU | P2 | Audience | A5 | same | llp gstin | LLP, DPIN | WhatsApp | WA-09 | LLP, DSC | SRC1 | Article | M |
| 66 | gst registration for nri | Audience | BOFU | P2 | Audience | A3 | gst registration nri | nri business gst | Aadhaar, PAN | Book | WA-04 | NRI, FOR | SRC1 | Article | M |
| 67 | gst registration for foreign company india | Audience | BOFU | P2 | Audience | A3 | same | non-resident taxable person | passport, apostille | Book | WA-05 | FOR, FEMA | SRC1 | Article | M |
| 68 | gst registration for small manufacturers | Audience | BOFU | P2 | Audience | A4 | gst registration for small manufacturers | manufacturer gstin | HSN, shed lease | WhatsApp | WA-10 | MANU, UDY | SRC1 | Article | M |
| 69 | gst registration for home business | Audience | MOFU | P2 | Support | S4 | gst address proof | home address gst | consent letter | WhatsApp | WA-12 | A1, T1 | SRC1 | Article | M |
| 70 | gst registration for freelancers | Audience | MOFU | P2 | Money | MP | gst registration chennai | freelancer gst limit | services threshold | WhatsApp | WA-14 | FRLNC, T1 | SRC1 | Audience row on MP | M |

### 3.9 H. Tamil Nadu city (10)

Served online. Targets are the money page's "Tamil Nadu coverage" block, not new city pages. Rule for a future city page is in Section 7.7.

| # | Keyword | Intent | Funnel | Pri | Page type | URL | Primary kw | Secondary kws | Entities | Next action | WA | Internal links | Ext | Format | Enq |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 71 | gst registration in coimbatore | Local | BOFU | P3 | Money | MP | gst registration chennai | online, tamil nadu | Coimbatore | WhatsApp | WA-01 | MP coverage, S8 | SRC1 | Coverage block | L |
| 72 | gst registration in madurai | Local | BOFU | P3 | Money | MP | same | online | Madurai | WhatsApp | WA-01 | MP coverage | SRC1 | Coverage block | L |
| 73 | gst registration in trichy | Local | BOFU | P3 | Money | MP | same | tiruchirappalli | Tiruchirappalli | WhatsApp | WA-01 | MP coverage | SRC1 | Coverage block | L |
| 74 | gst registration in salem | Local | BOFU | P3 | Money | MP | same | online | Salem | WhatsApp | WA-01 | MP coverage | SRC1 | Coverage block | L |
| 75 | gst registration in tiruppur | Local | BOFU | P3 | Money | MP | same | garment exporters | Tiruppur | WhatsApp | WA-10 | MP coverage, EXP | SRC1 | Coverage block | L |
| 76 | gst registration in hosur | Local | BOFU | P3 | Money | MP | same | border, karnataka | Hosur | WhatsApp | WA-10 | MP coverage, S6 | SRC1 | Coverage block | L |
| 77 | gst registration in vellore | Local | BOFU | P3 | Money | MP | same | online | Vellore | WhatsApp | WA-01 | MP coverage | SRC1 | Coverage block | L |
| 78 | gst registration in erode | Local | BOFU | P3 | Money | MP | same | textiles | Erode | WhatsApp | WA-01 | MP coverage | SRC1 | Coverage block | L |
| 79 | gst registration in tirunelveli | Local | BOFU | P3 | Money | MP | same | online | Tirunelveli | WhatsApp | WA-01 | MP coverage | SRC1 | Coverage block | L |
| 80 | gst registration in kanchipuram | Local | BOFU | P3 | Money | MP | same | sriperumbudur, oragadam | Kanchipuram | WhatsApp | WA-10 | MP coverage, A4 | SRC1 | Coverage block | L |

### 3.10 I. Tamil-language (10)

| # | Keyword (Tamil script, transliteration) | Intent | Funnel | Pri | Page type | URL | Primary kw | Secondary kws | Entities | Next action | WA | Internal links | Ext | Format | Enq |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 81 | ஜிஎஸ்டி பதிவு சென்னை (GST pathivu Chennai) | Transactional | BOFU | P2 | Money | MP | gst registration in chennai | Tamil line in H2 | GSTIN | WhatsApp | WA-15 | MP | SRC1 | Tamil summary box | M |
| 82 | ஜிஎஸ்டி பதிவு செய்வது எப்படி (GST pathivu seivathu eppadi) | Informational | MOFU | P2 | Support | S3 | gst registration process | Tamil summary | REG-01 | WhatsApp | WA-15 | MP | SRC2 | Tamil summary in S3 | M |
| 83 | ஜிஎஸ்டி நம்பர் வாங்குவது எப்படி (GST number vaanguvathu eppadi) | Informational | MOFU | P2 | Money | MP | same | Tamil summary | GSTIN | WhatsApp | WA-15 | S3 | SRC1 | Tamil summary box | M |
| 84 | ஜிஎஸ்டி பதிவுக்கு தேவையான ஆவணங்கள் (GST pathivukku thevaiyaana aavanangal) | Informational | MOFU | P2 | Tool | T2 | gst registration documents | Tamil labels | documents | WhatsApp | WA-15 | MP | SRC2 | Tamil labels in tool | M |
| 85 | ஜிஎஸ்டி வரம்பு எவ்வளவு (GST varambu evvalavu) | Informational | TOFU | P2 | Tool | T1 | gst threshold | Tamil result text | threshold | WhatsApp | WA-15 | S1 | SRC3 | Tamil result line | M |
| 86 | ஜிஎஸ்டி பதிவு கட்டணம் (GST pathivu kattanam) | Commercial | MOFU | P3 | Process | PROC | gst registration process and timeline | Tamil FAQ | government fee V | WhatsApp | WA-15 | MP | SRC1 | Tamil FAQ | L |
| 87 | கம்போசிஷன் திட்டம் என்றால் என்ன (composition thittam endraal enna) | Informational | TOFU | P3 | Comparison | C1 | regular vs composition gst | Tamil summary | composition | WhatsApp | WA-15 | T3 | SRC3 | Tamil summary | L |
| 88 | ஆன்லைன் விற்பனைக்கு ஜிஎஸ்டி தேவையா (online virpanaikku GST thevaiyaa) | Informational | MOFU | P2 | Audience | A1 | gst for online sellers | Tamil summary | marketplace | WhatsApp | WA-15 | MP | SRC1 | Tamil summary | M |
| 89 | வாடகை கடைக்கு ஜிஎஸ்டி பதிவு (vaadagai kadaikku GST pathivu) | Problem | MOFU | P2 | Support | S4 | gst address proof | Tamil summary | lease | WhatsApp | WA-15 | A2 | SRC1 | Tamil summary | M |
| 90 | ஜிஎஸ்டி ஆலோசகர் சென்னை (GST aalosagar Chennai) | Commercial | MOFU | P3 | Money | MP | gst registration in chennai | Tamil | CA | WhatsApp | WA-15 | MP | SRC1 | Tamil summary box | L |

### 3.11 J. AI and voice questions (10)

These phrasings go into the AEO bank (Section 6) and each is answered in 40–80 words on the page shown.

| # | Keyword (spoken or typed as a question) | Intent | Funnel | Pri | Page type | URL | Primary kw | Secondary kws | Entities | Next action | WA | Internal links | Ext | Format | Enq |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 91 | do i need gst registration for a small business in chennai | Informational | TOFU | P1 | Tool | T1 | gst registration threshold | do i need gst | threshold, s.24 | Tool then WhatsApp | WA-11 | MP, S1 | SRC1 | Direct answer + tool | H |
| 92 | how to get a gst number for a new business | Informational | MOFU | P1 | Process | S3 | gst registration process | gstin steps | REG-01 | WhatsApp | WA-01 | MP | SRC2 | HowTo | H |
| 93 | what documents are needed for gst registration | Informational | MOFU | P1 | Tool | T2 | gst registration documents | list | documents | WhatsApp | WA-12 | MP | SRC2 | Table | H |
| 94 | what is the gst turnover limit in tamil nadu | Informational | TOFU | P1 | Support | S1 | gst threshold | limit | 40 lakh, 20 lakh | Tool | WA-02 | T1 | SRC3 | Direct answer | H |
| 95 | can i register for gst without a shop | Informational | MOFU | P2 | Support | S4 | gst address proof | no shop, home | consent letter | WhatsApp | WA-12 | MP | SRC1 | Direct answer | M |
| 96 | how long does gst registration take in india | Informational | MOFU | P2 | Process | PROC | gst registration timeline | days | ARN | WhatsApp | WA-06 | MP | SRC1 | Direct answer (no promise) | M |
| 97 | is gst registration free | Informational | MOFU | P2 | Process | PROC | gst registration fee | free | portal | WhatsApp | WA-01 | MP | SRC1 | Direct answer | M |
| 98 | can i get a gst number with my home address | Informational | MOFU | P2 | Support | S4 | gst address proof | home | consent letter | WhatsApp | WA-12 | A1 | SRC1 | Direct answer | M |
| 99 | what is the composition scheme in gst | Informational | TOFU | P2 | Comparison | C1 | regular vs composition gst | composition | CMP-08 | Tool | WA-11 | T3 | SRC3 | Direct answer | M |
| 100 | can a freelancer register for gst | Informational | MOFU | P2 | Money | MP | gst registration chennai | freelancer | services | WhatsApp | WA-14 | FRLNC | SRC1 | Direct answer | M |

### 3.12 Keyword ownership summary

| Page | Keywords (map #) | Count |
|---|---|---|
| MP | 1–4, 6, 8–10, 13, 14, 20, 57–60, 70–81, 83, 90, 100 | 30 |
| S1 | 41, 42, 94 | 3 |
| S2 | 7, 38, 48 | 3 |
| S3 | 5, 17, 44, 46, 82, 92 | 6 |
| S4 | 25, 69, 89, 95, 98 | 5 |
| S5 | 47 | 1 |
| S7 | 45, 50 | 2 |
| S8 | 49 | 1 |
| C1–C5 | 18, 31, 33–36, 39, 40, 87, 99 | 10 |
| T1–T3 | 15, 19, 32, 84, 85, 91, 93 | 7 |
| A1–A5 | 37, 61–68, 88 | 10 |
| P1–P5 | 21–24, 26–30 | 9 |
| PROC | 11, 12, 16, 43, 86, 96, 97 | 7 |
| L1–L5 | 51–56 | 6 |
| **Total** | | **100** |

Where a keyword has two natural homes, the first listed owns it and the other links to it. Rows 71–80 and 57–59 are coverage terms on MP; no new city or area URL is created.

---

## 4. Site architecture (35 URLs)

### 4.0 Architecture map and ranking ownership

```
/gst-registration-chennai  (MP: decide, document, apply, fix)
 ├─ Tools (NEW): T1 threshold checker · T2 document checklist · T3 regular vs composition checker
 ├─ Comparisons (NEW blog posts): C1 regular vs composition · C2 voluntary vs compulsory · C3 registration vs LUT · C4 GST vs Udyam · C5 self vs CA
 ├─ Supporting: S1 threshold (upgrade) · S2 after incorporation (upgrade) · S3 REG-01 steps · S4 address proof · S5 HSN/SAC · S6 additional place · S7 first 30 days · S8 jurisdiction
 ├─ Audience: A1 online sellers (upgrade) · A2 new shop · A3 NRI/foreign · A4 small manufacturers · A5 partnership/LLP
 ├─ Problem: P1 rejected/query · P2 crossed threshold · P3 Aadhaar/pending · P4 wrong details · P5 urgent GSTIN
 ├─ Location: L1–L5 = sections on 5 existing Chennai area pages (no new URLs)
 ├─ FAQ hub /faq/gst-registration (NEW) · CASE /case-studies/gst-registration-chennai (NEW, noindex) · PROC /gst-registration-process-and-timeline (NEW)
 └─ Hand-offs out (link only): GSTRET · NOTICE · LIT · LUTP · FRLNC · DSC · IEC · UDY · PVT · HUB · NRI · FOR
```

| Page group | Required | Delivered | New URLs | Upgrades |
|---|---|---|---|---|
| Money page | 1 | 1 (MP) | 0 | 1 |
| Supporting articles | 8 | 8 (S1–S8) | 6 | 2 |
| Comparison pages | 5 | 5 (C1–C5) | 5 | 0 |
| Location pages | 5 | 5 (L1–L5, sections) | 0 | 5 |
| Audience pages | 5 | 5 (A1–A5) | 4 | 1 |
| Problem/urgent pages | 5 | 5 (P1–P5) | 5 | 0 |
| Tools | 3 | 3 (T1–T3) | 3 | 0 |
| FAQ hub | 1 | 1 | 1 | 0 |
| Case-study/proof page | 1 | 1 | 1 | 0 |
| Pricing/process explainer | 1 | 1 (PROC, government-fee facts only) | 1 | 0 |
| **Total** | **35** | **35** | **26** | **9** |

Blog format: the supporting, comparison, audience and problem items are `/blog/<slug>` posts (register in `src/lib/blog.ts` BLOG_INDEX and add a file in `src/content/blog/`). Why new URLs are justified, one line each, where no existing page covers the intent:

| New URL | Why no existing page covers it |
|---|---|
| S3 | MP can only summarise; the portal walk-through (TRN, Part A/B, ARN, REG-06) needs its own page for "how to apply" queries |
| S4 | Address proof is the leading cause of queries; none of the three owned posts covers it in depth |
| S5–S8 | Distinct how-to or reference intents (HSN/SAC choice, additional place of business, first 30 days, TN jurisdiction). S6 targets long-tail "additional place of business GST registration Tamil Nadu" outside the 100-keyword list |
| C1–C5 | Comparison queries; none exists on the site. C3 and C4 stay on registration; LUT mechanics are linked to plan 21 |
| A2–A5 | Registration-specific document and trigger sets for each audience; the 8 `-for-` pages cover returns only |
| P1–P5 | Problem queries are not covered anywhere; P1 stops at "what to do at application stage" and hands over to NOTICE |
| T1–T3 | Tools not in plan 01's shared set; registration-specific |
| FAQ, CASE, PROC | Standard brief items |

### 4.1 Master table: URL, title, meta, H1

Character counts for every title and meta are checked by script in Section 14.2 (titles ≤60, metas ≤155).

| Code | URL | SEO title | Meta description | H1 |
|---|---|---|---|---|
| MP | `/gst-registration-chennai` | GST Registration in Chennai \| CA-Led GSTIN Application | New GST registration in Chennai by chartered accountants: threshold check, documents, REG-01 filing and ARN follow-up. WhatsApp or book 15 minutes. | GST Registration in Chennai |
| S1 | `/blog/gst-threshold-is-a-trigger` | GST Registration Threshold in Tamil Nadu: When to Register | Tamil Nadu GST threshold explained: aggregate turnover, goods vs services, cases that need registration at any turnover, and what to do near the limit. | The GST Threshold Isn't a Safe Zone. It's a Trigger |
| S2 | `/blog/gst-registration-after-company-incorporation` | GST Registration After Company Incorporation | When a new company needs GST registration, the AGILE-PRO-S option at incorporation, Tamil Nadu thresholds, compulsory cases, documents and the process. | GST Registration After Company Incorporation |
| S3 | `/blog/gst-registration-process-reg-01-step-by-step` | GST Registration Process: REG-01 Step by Step | How a GST application moves from TRN to ARN to the REG-06 certificate: Part A, Part B, Aadhaar authentication, queries and where applications stall. | GST Registration Process, REG-01 Step by Step |
| S4 | `/blog/gst-registration-address-proof-rented-home-shared-office` | GST Address Proof: Rented Shop, Home or Shared Office | Which address documents a GST application usually needs for owned, rented, shared and home premises, and the mismatches that trigger queries. | GST Registration Address Proof: Rented, Home or Shared |
| S5 | `/blog/hsn-sac-code-for-gst-registration` | HSN and SAC Codes for GST Registration: How to Choose | How to pick goods (HSN) and services (SAC) codes at GST registration, why a wrong choice causes trouble later, and how to check it before you file. | HSN and SAC Codes at GST Registration |
| S6 | `/blog/gst-registration-additional-place-of-business-multiple-states` | Additional Place of Business in GST: When and How | When a warehouse, branch or second shop needs adding to your GST registration, and when another state needs a separate registration. | Additional Place of Business and Multiple-State GST Registration |
| S7 | `/blog/after-getting-gstin-first-30-days` | After Getting GSTIN: First 30 Days Checklist | You have the REG-06 certificate. A checklist for the first month: display, invoices, bank details, portal login and the hand-off to return filing. | After Getting Your GSTIN: The First 30 Days |
| S8 | `/blog/gst-jurisdiction-central-or-state-tamil-nadu` | GST Jurisdiction in Tamil Nadu: Central or State Officer? | Why a Tamil Nadu GST taxpayer is administered by either the central or the state tax authority, and how to find yours after registration. | Central or State: Who Administers Your GST in Tamil Nadu? |
| C1 | `/blog/regular-vs-composition-gst-scheme` | Regular vs Composition GST Scheme: Which Suits You? | Compare the regular and composition GST schemes on credit, returns, customers and inter-state sales, with a quick checker for small businesses. | Regular or Composition GST Scheme? |
| C2 | `/blog/voluntary-vs-compulsory-gst-registration` | Voluntary vs Compulsory GST Registration Explained | When GST registration is compulsory at any turnover, when it is voluntary, and how to decide if registering early is worth it for your business. | Voluntary or Compulsory GST Registration? |
| C3 | `/blog/gst-registration-vs-lut-for-exporters` | GST Registration vs LUT: What Exporters Need First | GST registration comes first; a Letter of Undertaking sits on top of it. How the two relate for exporters of goods and services. | GST Registration vs LUT for Exporters |
| C4 | `/blog/gst-registration-vs-udyam-registration` | GST vs Udyam Registration: Do You Need Both? | GST registration and Udyam registration do different jobs. What each is for, who issues it, and which a small Chennai business needs first. | GST Registration vs Udyam Registration |
| C5 | `/blog/gst-registration-self-vs-ca-assisted` | GST Registration: Self-Filing vs CA-Assisted | Applying yourself on the GST portal or with a chartered accountant: where applications stall, what you control and when help is worth it. | Self-Filing or CA-Assisted GST Registration? |
| A1 | `/blog/gst-registration-online-sellers-chennai` | GST Registration for Online Sellers in Chennai: Key Rules | Selling on Amazon, Flipkart, Meesho or your own site: when registration or an enrolment number applies, documents, stock locations and common slips. | GST Registration for Online Sellers in Chennai |
| A2 | `/blog/gst-registration-for-new-shop-chennai` | GST Registration for a New Shop in Chennai | Opening a shop in Chennai: do you need GST, which documents the premises need, supplier and inter-state triggers, and the order to do things in. | GST Registration for a New Shop in Chennai |
| A3 | `/blog/gst-registration-for-nris-and-foreign-businesses` | GST Registration for NRIs and Foreign Businesses in India | How NRIs and overseas companies register for GST in India: categories, documents, Aadhaar and authorised signatory, and common cross-border snags. | GST Registration for NRIs and Foreign Businesses |
| A4 | `/blog/gst-registration-for-small-manufacturers-chennai` | GST Registration for Small Manufacturers in Chennai | Small units in Ambattur, Guindy and the Kanchipuram belt: when to register, HSN choice, factory address proof and inter-state buyers. | GST Registration for Small Manufacturers in Chennai |
| A5 | `/blog/gst-registration-for-partnership-firm-and-llp` | GST Registration for Partnership Firms and LLPs | Documents and roles for a partnership firm or LLP GST application: deed or LLP agreement, partners, authorised signatory and premises proof. | GST Registration for Partnership Firms and LLPs |
| P1 | `/blog/gst-registration-rejected-or-query-raised` | GST Registration Rejected or Query Raised? What to Do | Why GST applications get a query or rejection, what to check first, and when to reapply. Hand-off to notice support is explained. | GST Registration Rejected or Query Raised: What to Do |
| P2 | `/blog/crossed-gst-threshold-without-registering` | Crossed the GST Threshold Without Registering? Next Steps | You passed the GST limit and have not registered. Work out the date, the exposure and the order of steps, and when to speak to a CA. | Crossed the GST Threshold Without Registering |
| P3 | `/blog/gst-registration-aadhaar-authentication-pending` | GST Aadhaar Authentication Pending: What to Do | Aadhaar authentication stuck on a GST application: common causes, what to check, when a Suvidha Kendra visit may be asked for, and next steps. | GST Registration Stuck at Aadhaar Authentication |
| P4 | `/blog/wrong-details-in-gst-registration-how-to-amend` | Wrong Details in GST Registration: How to Correct | Wrong trade name, address or signatory in your GST registration? How amendments work, what may need approval, and what cannot be changed. | Wrong Details in Your GST Registration: How to Correct |
| P5 | `/blog/need-gstin-urgently-marketplace-tender-customer` | Need a GSTIN Urgently? Marketplace, Tender, Customer | When a marketplace, tender or customer is waiting for your GSTIN: what to prepare first, what slows applications, and what no one can promise. | Need a GSTIN Urgently? What to Prepare First |
| T1 | `/tools/gst-registration-threshold-checker` | GST Registration Threshold Checker for Tamil Nadu | Enter your supplies and turnover to see whether GST registration looks compulsory, close, or optional in Tamil Nadu. Not legal advice. | GST Registration Threshold Checker |
| T2 | `/tools/gst-registration-document-checklist` | GST Registration Document Checklist by Business Type | Choose proprietorship, partnership, LLP or company and your premises type to get a clear GST registration document checklist. | GST Registration Document Checklist |
| T3 | `/tools/regular-vs-composition-gst-checker` | Regular or Composition GST? Quick Eligibility Checker | Answer six questions about your supplies and customers to see how regular and composition schemes compare for your business. Not advice. | Regular or Composition GST Checker |
| FAQ | `/faq/gst-registration` | GST Registration FAQs for Chennai Business Owners | Answers on GST registration in Chennai: threshold, documents, address proof, voluntary registration, queries, amendments and next steps. | GST Registration: Frequently Asked Questions |
| CASE | `/case-studies/gst-registration-chennai` | GST Registration Case Study \| C S Rushil & Co. | A consented, anonymised GST registration engagement: the facts, the issue, the steps and the outcome. Template, noindex until consent. | GST Registration: A Client Case Study |
| PROC | `/gst-registration-process-and-timeline` | GST Registration Process and Timeline in Chennai | Government fee position, the steps from application to REG-06, what affects timing and who does what. No professional fee figures, no promises. | GST Registration: Process, Government Fee and Timeline |
| L1–L5 | five existing area pages | Titles unchanged | Metas unchanged | Section heading only (see 4.5) |

### 4.2 Outline, keywords, intent, length and angle

| Code | H2 / H3 outline | Primary kw | Secondary kws | Intent | Words | Angle |
|---|---|---|---|---|---|---|
| MP | See Section 5 (11 blocks) | gst registration in chennai | gst registration consultant chennai; new gst registration; gstin registration; gst registration documents | Transactional | 2,600–3,200 | Decide, document, apply, fix. Hand-offs to returns |
| S1 | H2 What the threshold counts (aggregate turnover); H2 Tamil Nadu limits table (goods, services); H2 Cases that need registration at any turnover; H2 Why near the limit is a trigger; H2 What to do this week; FAQ (4) | gst registration threshold | gst limit tamil nadu; aggregate turnover | Informational | 1,100–1,400 | Keep the existing "trigger" angle, add the table, T1 and FAQ |
| S2 | Existing outline (section 22/24/25, AGILE-PRO-S, voluntary, pre-registration credit, composition, documents, steps, queries, after registration) + new H2 Chennai office-address note; FAQ (existing 4 + 2) | gst registration after company incorporation | gstin new company; agile-pro-s gstin | Informational | 1,700–2,000 | Now/later/never decision for new companies |
| S3 | H2 Before you start (documents, DSC or Aadhaar); H2 Part A (TRN); H2 Part B tabs; H2 Aadhaar authentication; H2 ARN and tracking; H2 Query (REG-03) and reply (REG-04); H2 REG-06 certificate; H2 Where it stalls | gst registration process | reg-01 steps; arn; trn | Informational | 1,500–1,800 | Portal-level walk-through |
| S4 | H2 Why address is the usual snag; H2 Owned premises; H2 Rented (lease + owner proof); H2 Shared or co-working; H2 Home business; H2 Consent letter; H2 Mismatch checklist | gst address proof | rent agreement gst; home address gst | Problem | 1,200–1,500 | Case-by-case document table |
| S5 | H2 HSN vs SAC; H2 How to pick; H2 Mixed supplies; H2 What a wrong code causes; H2 Check before filing | hsn sac gst registration | hsn code finder; sac code services | Informational | 1,000–1,300 | Practical selection steps |
| S6 | H2 What counts as a place of business; H2 Add a place (amendment); H2 When another state needs its own registration; H2 Marketplace warehouses; H2 Display requirements | additional place of business gst | multiple state registration | Informational | 1,100–1,400 | Warehouse and branch decisions |
| S7 | H2 Verify the certificate; H2 Display and invoice; H2 Bank details; H2 Portal access; H2 Decide returns support; H2 Keep these records | after getting gstin | first month gst | Informational | 1,000–1,300 | Operational hand-off to returns |
| S8 | H2 Central vs state administration; H2 How to find yours; H2 Why it matters (who writes to you); H2 When it changes | gst jurisdiction tamil nadu | central or state gst officer | Informational | 900–1,200 | Orientation, short |
| C1 | H2 At a glance table; H2 Credit; H2 Returns; H2 Customers; H2 Inter-state sales; H2 How to choose; FAQ | regular vs composition gst | composition scheme pros cons | Comparison | 1,300–1,600 | Decision table, T3 link |
| C2 | H2 Compulsory categories; H2 Voluntary route; H2 Costs and benefits; H2 How to decide; FAQ | voluntary vs compulsory gst registration | s.24 | Comparison | 1,200–1,500 | Decision |
| C3 | H2 Why registration comes first; H2 What LUT is (link to LUTP); H2 Order of steps; H2 Services vs goods export; FAQ | gst registration vs lut | lut without gst registration | Comparison | 900–1,200 | Short; hands off to LUTP |
| C4 | H2 What each registration is; H2 Different authorities; H2 Different jobs; H2 Who needs which; FAQ | gst vs udyam | msme vs gst | Comparison | 1,000–1,300 | Clear the confusion |
| C5 | H2 Where DIY applications stall; H2 What you control; H2 What a CA adds; H2 Questions to ask any provider; FAQ | self vs ca gst registration | diy gst registration | Comparison | 1,000–1,300 | Honest, no price claims |
| A1 | Existing outline + H2 Registration vs enrolment table; H2 Documents; H2 Stock outside Tamil Nadu; H2 Where to go next (ECOM, AMZ); FAQ | gst registration for online sellers | amazon seller gst | Audience | 1,300–1,600 | Seller-specific |
| A2 | H2 Do you need it; H2 Premises documents; H2 Supplier and inter-state triggers; H2 Order of setup; H2 Mistakes; FAQ | gst registration for new shop | retail shop gst | Audience | 1,100–1,400 | Practical order of tasks |
| A3 | H2 Which category applies; H2 Documents from abroad; H2 Aadhaar and authorised signatory; H2 Premises in India; H2 Link to NRI/FOR; FAQ | gst registration for nri | non-resident taxable person | Audience | 1,200–1,500 | Cross-border snags |
| A4 | H2 When a unit must register; H2 HSN; H2 Factory address proof; H2 Inter-state buyers; H2 Job work; FAQ | gst registration small manufacturers | manufacturer gstin | Audience | 1,200–1,500 | Ambattur and Kanchipuram belt |
| A5 | H2 Documents table (partnership vs LLP); H2 Authorised signatory; H2 Partner Aadhaar; H2 Premises; H2 DSC for LLP (link); FAQ | gst registration partnership firm | llp gstin | Audience | 1,100–1,400 | Roles and documents |
| P1 | H2 Query vs rejection; H2 Most common causes; H2 Reply carefully (hand-off to NOTICE for notices); H2 When to reapply; FAQ | gst registration rejected | query reply | Problem | 1,200–1,500 | Triage, then hand off |
| P2 | H2 Find the date (T1); H2 Apply now; H2 What about past invoices; H2 Do not guess penalties; H2 When to call us; FAQ | crossed gst threshold | late registration | Problem | 1,100–1,400 | Calm triage with verify labels |
| P3 | H2 What Aadhaar authentication does; H2 Common causes; H2 Check list; H2 Suvidha Kendra; H2 Next steps; FAQ | aadhaar authentication gst | pending application | Problem | 1,000–1,300 | Fix list |
| P4 | H2 What can be amended; H2 Core vs non-core; H2 Steps; H2 What is not fixable; FAQ | amend gst registration | wrong trade name | Problem | 1,000–1,300 | Correction paths |
| P5 | H2 Prepare these first; H2 What slows an application; H2 Marketplace seller vs buyer asks; H2 No one can promise a date; FAQ | need gstin urgently | marketplace gstin | Problem | 900–1,200 | Honest urgency page |
| T1 | H2 Tool; H2 How the result is worked out (with V label); H2 What next; FAQ (3) | threshold checker | gst threshold calculator | Informational | 500–700 + tool | Interactive |
| T2 | H2 Tool; H2 Documents by constitution; H2 Premises variants; H2 Download | gst documents checklist | checklist | Informational | 600–800 + tool | Interactive/PDF |
| T3 | H2 Tool; H2 Scheme differences; H2 What next; FAQ (3) | regular vs composition checker | scheme eligibility | Informational | 500–700 + tool | Interactive |
| FAQ | 6 groups: threshold; documents; process; address; types of registration; problems. 30 Q&A from Section 6 | gst registration faq | — | Informational | 2,000–2,600 | Hub; links to pages |
| CASE | Facts; issue; steps; outcome; what we would do differently; consent note | — | — | Proof | 600–900 | Template only |
| PROC | H2 Government fee; H2 Steps and who does them; H2 What affects timing; H2 Documents you provide; H2 What we do; H2 What we do not promise | gst registration process and timeline | gst registration fee; how long | Commercial | 1,100–1,400 | Process transparency; no professional fee |
| L1 | New H2 "GST registration for Anna Nagar businesses" (150–250 words) | gst registration anna nagar | ca anna nagar gst | Local | +200 | Walk-in, office location |
| L2 | New H2 "GST registration for T. Nagar traders" | gst registration t nagar | traders gst | Local | +200 | Retail, trading, textile |
| L3 | New H2 "GST registration for Ambattur MSMEs" | gst registration ambattur | msme gst | Local | +200 | Industrial estate units |
| L4 | New H2 "GST registration for OMR IT and service businesses" | gst registration omr | it services gst | Local | +200 | Service providers, freelancers |
| L5 | New H2 "GST registration for new shops and sellers in Porur" | gst registration porur | porur gst | Local | +200 | New retail, home sellers |

### 4.3 Links, schema, CTA, WhatsApp, lead magnet, trigger

Internal links use descriptive anchors. Anchor for PVT is always "Private Limited Company Registration in Chennai". Every page links to MP with the anchor "GST registration in Chennai" once, high on the page. External links are to SRC1–SRC8 only.

| Code | Internal links | External | Schema | CTA placement | WA | Lead magnet | Enquiry trigger |
|---|---|---|---|---|---|---|---|
| MP | S1, S2, S3, S4, A1, A2, C1, C2, T1, T2, FAQ, PROC, GSTRET, GSTHUB, NOTICE, LIT, DSC, IEC, UDY, PVT, HUB | SRC1, SRC2 | Service, FAQPage, BreadcrumbList, HowTo, Accountant (site-wide) | Top (WhatsApp + Book), after documents, after problems, final block, sticky mobile bar | WA-01 | T2 checklist | "Which documents do I need" and "is it compulsory for me" |
| S1 | MP, T1, P2, C2, S2, GSTRET | SRC1, SRC3 | BlogPosting, FAQPage, BreadcrumbList | After the table; end | WA-02 | T1 | Near-limit owners |
| S2 | MP, PVT, HUB, AGILE, C1, T3, ACP, DSC | SRC3, SRC4 | BlogPosting, FAQPage, BreadcrumbList | After AGILE-PRO-S section; end | WA-08 | T3 | Just incorporated |
| S3 | MP, T2, P1, P3, S4, DSC | SRC2 | BlogPosting, HowTo, BreadcrumbList | After Part B; end | WA-01 | T2 | "How do I apply" |
| S4 | MP, A1, A2, T2, P1 | SRC1 | BlogPosting, FAQPage, BreadcrumbList | After the table; end | WA-12 | T2 | Address uncertainty |
| S5 | MP, A4, P1 | SRC1 | BlogPosting, BreadcrumbList | End | WA-01 | HSN/SAC worksheet | Code confusion |
| S6 | MP, A1, P4, S8 | SRC1 | BlogPosting, BreadcrumbList | End | WA-10 | — | Warehouse owners |
| S7 | MP, GSTRET, BOOK, ACP | SRC1 | BlogPosting, BreadcrumbList | End | WA-01 | First-30-days checklist (PDF) | Newly registered |
| S8 | MP, GSTRET, NOTICE | SRC6 | BlogPosting, BreadcrumbList | End | WA-01 | — | Orientation |
| C1 | T3, MP, S2, GSTRET | SRC3 | BlogPosting, FAQPage, BreadcrumbList | After table; end | WA-11 | T3 | Scheme decision |
| C2 | T1, MP, S1 | SRC3 | BlogPosting, FAQPage, BreadcrumbList | After decision box; end | WA-11 | T1 | Voluntary decision |
| C3 | MP, LUTP, EXP, IEC | SRC3, SRC8 | BlogPosting, BreadcrumbList | End | WA-06 | — | Exporters |
| C4 | MP, UDY | SRC7 | BlogPosting, FAQPage, BreadcrumbList | After table; end | WA-11 | — | Confused small owners |
| C5 | MP, PROC, T2 | SRC1 | BlogPosting, FAQPage, BreadcrumbList | End | WA-01 | T2 | DIY considerers |
| A1 | MP, ECOM, AMZ, C2, S6, S4 | SRC1, SRC3 | BlogPosting, FAQPage, BreadcrumbList | After enrolment table; end | WA-07 | Seller readiness checklist | Marketplace onboarding |
| A2 | MP, S4, T2, UDY, FSSAI | SRC1 | BlogPosting, FAQPage, BreadcrumbList | After premises table; end | WA-01 | T2 | New shop |
| A3 | MP, NRI, FOR, FEMA, DSC | SRC1 | BlogPosting, FAQPage, BreadcrumbList | End | WA-04 | Document list | NRI/foreign |
| A4 | MP, S5, S6, L3, MANU, EXP | SRC1 | BlogPosting, FAQPage, BreadcrumbList | End | WA-10 | HSN worksheet | Unit owners |
| A5 | MP, PF, LLP, DSC, T2 | SRC1 | BlogPosting, FAQPage, BreadcrumbList | After documents table; end | WA-09 | T2 | Firm/LLP |
| P1 | MP, NOTICE, S3, S4, P3 | SRC1 | BlogPosting, FAQPage, BreadcrumbList | Top (urgent bar); end | WA-03 | Rejection triage list | Stuck applicants |
| P2 | T1, MP, S1, NOTICE | SRC3 | BlogPosting, FAQPage, BreadcrumbList | Top; end | WA-02 | T1 | Late registrants |
| P3 | MP, P1, A3 | SRC1 | BlogPosting, FAQPage, BreadcrumbList | Top; end | WA-13 | Authentication fix list | Stuck at Aadhaar |
| P4 | MP, S6, P1 | SRC1 | BlogPosting, FAQPage, BreadcrumbList | End | WA-03 | — | Wrong details |
| P5 | MP, P3, A1, A2 | SRC1 | BlogPosting, FAQPage, BreadcrumbList | Top; end | WA-06 | T2 | Marketplace/tender |
| T1 | MP, S1, P2, C2 | SRC3 | WebApplication, FAQPage, BreadcrumbList | Result panel | WA-02 | Result emailed/WhatsApped on request | Self-qualifying |
| T2 | MP, S4, A2, A5 | SRC2 | WebApplication, BreadcrumbList | Result panel | WA-12 | Checklist | Documents |
| T3 | C1, MP, S2 | SRC3 | WebApplication, FAQPage, BreadcrumbList | Result panel | WA-11 | Result summary | Scheme choice |
| FAQ | MP and each page by group | SRC1, SRC3 | FAQPage, BreadcrumbList | Top and each group | WA-01 | T2 | Mixed |
| CASE | MP, FAQ | SRC1 | Article (not Review), BreadcrumbList, noindex | End | WA-01 | — | Proof |
| PROC | MP, T2, FAQ, S3 | SRC1 | Service-process page: HowTo, FAQPage, BreadcrumbList | After steps; end | WA-01 | T2 | Process-curious |
| L1–L5 | MP, matching A page | SRC1 | No new schema (page's existing LocalBusiness/Accountant stays) | Inside section | WA-01 / WA-10 / WA-14 | — | Local |

### 4.4 Cannibalisation decisions

| Risk | Decision |
|---|---|
| S1 (threshold post) vs MP both mention the limit | MP carries a one-box summary with the label and links to S1 and T1; S1 owns "threshold" queries |
| P1 vs NOTICE (REG-03 appears on both) | P1 targets "registration rejected / query at application stage" and ends with "received a notice after registration, see NOTICE". NOTICE owns "GST notice reply". Do not use "notice reply" in P1 title, H1 or meta |
| C3 vs LUTP (plan 21) | C3 says registration first, LUT on top, and sends all LUT how-to to LUTP. No RFD-11 walkthrough here |
| A1 vs ECOM and AMZ (plan 21) | A1 is registration only; ECOM and AMZ are returns. A1 links to both once each |
| S2 vs PVT and HUB (plans 01/02) | S2 owns "after incorporation"; PVT and HUB link to S2 and S2 links back with the PVT anchor |
| A-pages vs MP "who is it for" | A-pages carry audience-specific document sets; MP has one row per audience linking out |
| C4 vs UDY | C4 explains the difference; UDY owns the Udyam application |
| A3 vs NRI and FOR | A3 owns GST registration for NRIs and foreign suppliers only; NRI and FOR keep tax filing and company formation |

### 4.5 Upgrade notes for existing pages and posts

| Target | Change |
|---|---|
| `/blog/gst-threshold-is-a-trigger` (S1) | Keep the Instagram embed. Add: TN limits table (verify label), "what counts as aggregate turnover" (verify), link to T1, FAQ block (4), link to P2. Replace "penalties and interest from the date registration should have happened" with a labelled, softened line. Add `faqs` to meta so FAQ schema renders |
| `/blog/gst-registration-online-sellers-chennai` (A1) | Fix GSTR 2A to GSTR-2B wording (fact sheet), delete "three to seven working days", label the enrolment rule and the TCS rate, add enrolment-vs-registration table, documents list, link to ECOM and AMZ (once), FAQ block (4). Move TCS detail to a single line linking to returns |
| `/blog/gst-registration-after-company-incorporation` (S2) | Label every section reference. Bring date forward (see 1.1). Add Chennai registered-office note (TANGEDCO bill or GCC property tax receipt must match the signatory or have consent; this is the firm's documented experience for company offices and is reused here for GST address), link to AGILE, C1/T3, ACP. Link back to PVT with the standard anchor. Add 2 more FAQs |
| MP | Rebuild per Section 5 using `children`, `keyFacts`, `relatedPosts`, `parentCrumb` props. Update `src/lib/page-dates.ts` |
| L1–L5 | Add one H2 section each, 150–250 words, linking to MP and the matching A page; no schema change |

### 4.6 Tool specifications

All three tools: client-side only, no personal data stored or sent, WhatsApp button pre-fills the result (message under 500 characters), constants kept in one config file with a `verifiedOn` date and the visible label "Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing." until CA Rushil C S signs off the config.

| Tool | Inputs | Output logic | Config to verify |
|---|---|---|---|
| T1 threshold checker | Supply type (goods / services / both); turnover so far this financial year; expected full-year turnover; checkboxes for compulsory triggers (inter-state supply of goods, selling through an e-commerce operator, reverse charge, casual or non-resident supplier, supplying as an agent, other) | Three results: "Registration looks compulsory", "You are near the limit: check monthly", "Registration looks optional (voluntary route available)". Uses ₹40 lakh (goods) and ₹20 lakh (services) for Tamil Nadu as in the fact sheet. Mixed supplies use the services figure per the live S2 text (verify) | Limits, trigger list, exclusions |
| T2 document checklist | Constitution (proprietorship, partnership firm, LLP, company); premises (owned, rented, shared or co-working, home, consent); signatory count | Outputs a checklist: identity and PAN, constitution proof, signatory proof, premises proof by premises type, bank proof, photographs. Tamil labels optional | Document lists per constitution and premises |
| T3 regular vs composition | Supply type; turnover band; inter-state sales (yes/no); share of sales to GST-registered businesses; e-commerce (yes/no); services share | Side-by-side summary of credit, returns, customer impact. Never prints a rate or limit unless in config (verify) | Eligibility limits, rates, exclusions |

### 4.7 FAQ hub, case-study template, process explainer

| Item | Spec |
|---|---|
| FAQ hub `/faq/gst-registration` | 30 Q&A taken from Section 6 (direct bank), grouped under six headings, each 40–80 words, FAQPage schema on this page only. The same questions are not repeated as FAQPage schema on MP (MP carries its own 22 unique FAQs from Section 5) |
| CASE `/case-studies/gst-registration-chennai` | One template reused across engagements, with fields: client type (anonymised), trigger, document issue, steps taken, outcome, lesson. `robots: noindex`, not in sitemap, until the client gives written consent. No result claims without consent. No Review schema |
| PROC `/gst-registration-process-and-timeline` | Government fee line (labelled V), steps and responsible party table, what affects timing (address proof, authentication, officer query), "what we do" list, "what we do not promise" list. No professional fee figures. Links to MP, T2, S3 |

---

## 5. Money-page blueprint: `/gst-registration-chennai`

URL kept. Built on `ServicePageTemplate`. Mapping to props: `h1`, `subhead`, `keyFacts` (block 1), `introHeading` and `intro` (block 1/2), `subServices` (block 3), `howTo` (block 4), `children` (blocks 2, 5, 6, 7, 8, 9 as sections), `faqs` (block 10), `relatedQuestions`, `relatedPosts`, `relatedSlugs`, `parentCrumb` (parent: Goods and Services Tax, `/goods-and-services-tax`).

### 5.1 SEO and metadata

| Element | Proposed value |
|---|---|
| SEO title | GST Registration in Chennai \| CA-Led GSTIN Application |
| Meta description | New GST registration in Chennai by chartered accountants: threshold check, documents, REG-01 filing and ARN follow-up. WhatsApp or book 15 minutes. |
| Slug | `/gst-registration-chennai` (unchanged) |
| Canonical | `/gst-registration-chennai` (unchanged) |
| OG title | GST Registration in Chennai: Documents, Process, Filing |
| OG description | CA-led GST registration for Chennai businesses: who must register, what to bring, how REG-01 works, and what to do if the application is queried. |
| OG image | Existing `/opengraph-image` (1200×630). Optional: a page-specific image from the seo-image-gen plan |
| Primary keyword | gst registration in chennai |
| Secondary keywords | new gst registration chennai; gstin registration chennai; gst registration consultant chennai; gst registration documents; reg-01 |
| Tamil line (visible, once) | ஜிஎஸ்டி பதிவு சென்னை (GST pathivu Chennai): "WhatsApp-இல் எங்களை தொடர்பு கொள்ளுங்கள்" (WhatsApp-il engalai thodarbu kollungal) |

### 5.2 Block 1: Above the fold

| Element | Copy |
|---|---|
| H1 | GST Registration in Chennai |
| One-line outcome | Get your GSTIN filed correctly the first time: threshold check, documents, REG-01 filing and follow-up on any query. |
| Trust line | Led by CA Rushil C S, practising Chartered Accountant. Team of 16. Office in Anna Nagar, Chennai. Mon–Sat 9:30 AM–6:30 PM. |
| Primary CTA | **WhatsApp Us** → `wa.me/917200149711?text=` WA-01 |
| Secondary CTA | **Book 15-Minute Consultation** → https://calendly.com/ceo-csrushil/30min (the word "free" is held until the firm's ICAI check) |
| Phone | +91 72001 49711 (tap to call) |
| Proof points | CA-led; documented process; Chennai office open six days; WhatsApp-first; hand-off to return filing under the same team. No ratings or review counts on the page |
| Quick facts (`keyFacts`) | Application form: REG-01 on gst.gov.in · Certificate: REG-06 · Limit in Tamil Nadu: ₹40 lakh goods, ₹20 lakh services (V) · Compulsory at any turnover for some cases such as inter-state supply of goods and sales through e-commerce operators (V) · Timing: depends on department processing and any query; we do not promise a date · Government fee: V |

### 5.3 Block 2: Who it is for (8 audiences, pain and solution)

| Audience | Pain | What we do | Where to go deeper |
|---|---|---|---|
| New shop or trader | Not sure if registration is needed; lease and bill names do not match | Check applicability, fix the address-proof set, file REG-01 | A2, S4 |
| Online sellers | Marketplace asks for GSTIN; registration vs enrolment confusion | Check the route and stock locations, then file | A1 |
| Newly incorporated company or LLP | AGILE-PRO-S or separate application; signatory resolution | Decide timing, align registered-office proof, file | S2, A5 |
| Freelancers and consultants | Nearing the services limit; corporate client wants GST invoice | Date the crossing, register before the gap grows | S1, T1, FRLNC |
| Small manufacturers and job-work units | Out-of-state buyer; HSN choice; factory address proof | HSN review, address set, inter-state check | A4 |
| Partnership firms and LLPs | Deed gaps; authorised signatory; every partner's Aadhaar | Document set, signatory resolution, file | A5 |
| NRIs and foreign businesses | Authentication from abroad; documents from overseas | Category check, document plan, video-call onboarding | A3 |
| Owners who have already crossed the limit | Fear of penalty; unclear date | Work out the date, register, hand over to returns support | P2 |

### 5.4 Block 3: What is included (`subServices`)

| Deliverable | What it covers | Form / portal | Documents you give |
|---|---|---|---|
| Applicability check | Compulsory, voluntary or not yet; goods vs services; compulsory triggers | gst.gov.in | Turnover so far, supply details |
| Document preparation | Checklist by constitution and premises; mismatch review | — | See block 6 |
| New registration filing | Part A and Part B, Aadhaar authentication, signatory details, ARN | REG-01, ARN | PAN, Aadhaar, premises proof, bank proof |
| Follow-up on queries | Draft and file reply to a clarification request at application stage | REG-03, REG-04 (V) | Documents asked for |
| Certificate and set-up | Check REG-06, GSTIN details, display, bank details | REG-06 | — |
| Voluntary registration | For below-limit businesses who want to register | REG-01 | As above |
| Amendments | Address, additional place of business, signatory, contact details | Amendment on the portal (V) | Supporting documents |
| Casual and non-resident supplier registration | Short-term and foreign suppliers (V) | REG-01 variants (V) | Passport and other documents (V) |
| Follow-on compliance | Hand-off to return filing under GSTRET; first-30-days checklist (S7) | — | — |

LUT is no longer a sub-service on this page; one line links to LUTP (plan 21).

### 5.5 Block 4: Step-by-step process (`howTo`)

Timeline column deliberately carries no day counts. The only time statement allowed: "depends on department processing and any query". If the firm later documents its own range from its own file history, add it with the date measured.

| Step | Who | Documents | Form / portal | Timeline | What causes delay |
|---|---|---|---|---|---|
| 1. 15-minute consultation and applicability check | Firm + you | Activity, turnover, states of supply | — | Same conversation | Unclear supply details |
| 2. Document collection and review | You + firm | PAN, Aadhaar, constitution proof, premises proof, bank proof, photograph | T2 checklist | Depends on you | Address proof mismatch, signatory documents missing |
| 3. Part A and Part B filing | Firm, with your OTP and consent | As above | REG-01 on gst.gov.in | Same sitting once documents are ready | Wrong HSN/SAC or activity entry |
| 4. Aadhaar authentication | You (OTP, or Suvidha Kendra if asked) | Aadhaar-linked mobile | Portal prompt | Depends on authentication | Mobile not linked; mismatch of name |
| 5. ARN and tracking | Firm | — | ARN, application status | Depends on department | Officer query |
| 6. Query reply if raised | Firm drafts, you approve | Documents asked for | REG-03 → REG-04 (V) | Within the period on the notice (V) | Incomplete reply |
| 7. REG-06 certificate and handover | Firm | — | REG-06 | After approval | Rejection (reapply) |
| 8. Set-up and hand-off | Firm | — | — | — | — |

Note: "Aadhaar authentication then ARN" order and the Suvidha Kendra step are portal behaviours; label V.

### 5.6 Block 5: Comparison table (regular registration vs three alternatives)

Heading: "Regular registration, composition, enrolment or staying unregistered: which fits?" Every cell carries V until CA Rushil C S signs off.

| | Regular registration | Composition scheme | Enrolment number (small e-commerce sellers) | Staying unregistered (below limit, no compulsory trigger) |
|---|---|---|---|---|
| Suitability | Most businesses that sell to other businesses, or sell across states | Small suppliers with local consumer sales | Small goods sellers on marketplaces within the conditions of the notification (V) | Very small suppliers with no compulsory trigger |
| Liability | Tax collected and paid on each taxable sale | Tax at a turnover-based rate, no tax collected from customers (V) | No GST collected beyond conditions (V) | No GST liability while below the limit and no trigger (V) |
| Compliance | Periodic returns incl. nil returns, annual return (details owned by GSTRET) | Fewer returns (V) | Limited (V) | None, but monitor turnover |
| Cost complexity | Highest of the four | Lower | Low | Lowest |
| Funding suitability | Customers can claim credit; banks and corporates often expect GSTIN (V) | Customers cannot claim credit (V) | Marketplace-bound | May block B2B customers and some lenders |
| Best use | Growing B2B or inter-state business | Small local retailer or service provider | Home-based marketplace seller within conditions | Hobby-scale or early test |
| Read next | S1, C1, C2 | C1, T3 | A1 | S1, T1 |

### 5.7 Block 6: Documents (by applicant)

All rows V. Interactive version: T2.

| Applicant | Identity and constitution | Signatory | Premises | Bank | Extra |
|---|---|---|---|---|---|
| Resident proprietor | PAN, Aadhaar, photograph | Self | Owned: ownership proof; rented: lease plus owner proof; consent letter where applicable | Cancelled cheque or statement | Business activity details |
| Partnership firm | Firm PAN, partnership deed | Authorised partner with letter | As above | Firm account | Partners' PAN, Aadhaar, photographs |
| LLP | LLP PAN, certificate of registration, LLP agreement | Designated partner or authorised signatory with resolution | As above | LLP account | DPIN details; DSC for LLP (V) |
| Company | Company PAN, certificate of incorporation, MoA and AoA | Director or authorised signatory with board resolution | Registered office proof | Company account (can follow registration, V) | DSC for company (V) |
| NRI proprietor | Indian PAN, passport; overseas address proof (V) | Self or authorised person in India (V) | Premises in India | Indian account | Aadhaar if held; otherwise alternate route (V) |
| Foreign company or non-resident supplier | Passport of authorised person; incorporation documents apostilled or consularised as applicable | Authorised signatory | Address of supply or representative (V) | Bank details (V) | Category: casual or non-resident (V) |

### 5.8 Block 7: Problems we solve

| Problem | Typical cause | What we do | Page |
|---|---|---|---|
| Query raised on application | Address proof or document mismatch | Prepare reply with corrected set | P1 |
| Application rejected | Reply not accepted or incomplete | Review reasons, fix, reapply | P1 |
| Trade name or legal name mismatch | PAN name vs entered name | Align before filing; amendment where possible | P4 |
| Application pending | Awaiting officer or authentication | Track ARN, check Aadhaar step | P3 |
| Missed the 30-day application window after crossing the limit | Turnover not tracked monthly | Work out date and register now | P2 (V for window) |
| Wrong constitution or wrong signatory | Early set-up choices | Correct through amendment or reapply as the rule allows | P4 |
| Aadhaar, PAN or DSC issues | Name mismatch; unlinked mobile; no DSC for company or LLP | Fix source records; link to DSC | P3, DSC |
| Address proof issues | Lease or bill in another name | Consent letter or alternate document where allowed | S4 |
| Notice after registration | — | Hand-off | NOTICE, LIT |

### 5.9 Block 8: Location coverage

Heading: "GST registration across Chennai and Tamil Nadu".
- Office: Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai - 600040. Mon–Sat 9:30 AM–6:30 PM, Sunday closed.
- Chennai coverage list (text, one line each, no links to doorways): Anna Nagar, Kilpauk, T. Nagar, Ambattur, OMR/Sholinganallur, Velachery, Adyar, Nungambakkam, Guindy, Porur, Tambaram, Mylapore. Link to the existing area pages.
- Tamil Nadu: "Registration is filed online on the GST portal, so we serve businesses in Coimbatore, Madurai, Tiruchirappalli, Salem, Tiruppur, Hosur, Vellore, Erode, Tirunelveli, Kanchipuram and the rest of Tamil Nadu by WhatsApp, phone and video call." Every location outside Anna Nagar is served online and the page says so.
- Short note for S8: "Your GST file is administered by either the central or the state tax authority" (fact sheet) with link.

### 5.10 Block 9: Why choose the firm

| Reason | Proof (no superlatives, no ratings) |
|---|---|
| CA-led | Led by CA Rushil C S, practising Chartered Accountant (ICAI). ICAI membership number to be added once the firm supplies it |
| Chennai presence | Office in Anna Nagar, open six days a week |
| End-to-end | Applicability, documents, filing, query reply, certificate check, hand-off |
| WhatsApp-first | Send documents on WhatsApp; confirm by phone or video call |
| Compliance continuity | The same team can take on return filing, bookkeeping and annual compliance (links: GSTRET, BOOK, ACP) |
| Documented process | Checklist-driven; responsibilities listed in block 4 |

### 5.11 Block 10: FAQs (24 unique questions, 40–80 words each)

These 24 are the page's FAQPage schema. The FAQ hub reuses the Section 6 direct bank, so the same wording is not published twice as FAQ markup. Rows marked V need the label.

| # | Question | Answer | V |
|---|---|---|---|
| M1 | Is GST registration compulsory for every business in Chennai? | No. Registration depends on what you supply and how much. You must register once aggregate turnover crosses the limit for your type of supply, or from the start if you fall in a compulsory category such as inter-state supply of goods. Smaller businesses may still choose to register voluntarily if customers or marketplaces ask for a GSTIN. | ✓ |
| M2 | What is the GST turnover limit in Tamil Nadu? | In Tamil Nadu the limit is ₹40 lakh of aggregate turnover for goods and ₹20 lakh for services. Aggregate turnover is counted across all your supplies under the same PAN, not just one shop or invoice series. Crossing the limit starts your duty to apply, so track the figure month by month. | ✓ |
| M3 | Which businesses must register whatever their turnover? | Some categories must register at any turnover, including those making inter-state taxable supplies of goods and sellers through e-commerce operators, subject to exemptions for small sellers. Casual and non-resident suppliers are also covered. Because the list has conditions and exceptions, check your own supply pattern against section 24 or ask us before opening. | ✓ |
| M4 | What documents are needed for GST registration? | You usually need PAN, Aadhaar, a photograph, proof of the business constitution, proof of the business address and bank account details. A partnership needs its deed; a company or LLP needs incorporation papers and an authorisation for the signatory. Our checklist tool tailors the list to your constitution and premises. | ✓ |
| M5 | What is the difference between REG-01, ARN and REG-06? | REG-01 is the application form. After you submit it, the portal issues an Application Reference Number (ARN) that lets you track the file. REG-06 is the registration certificate issued once the application is approved, and it carries your GSTIN. If the officer needs more information, a clarification notice (REG-03) comes first. | ✓ |
| M6 | Can a business below the limit register voluntarily? | Yes. A business below the limit can apply for registration and then follows the same rules as other registered businesses, including filing returns. People do this to claim credit on purchases, to meet a customer's requirement or to list on a marketplace. Consider the added compliance before deciding; our voluntary-versus-compulsory guide sets out the trade-off. | ✓ |
| M7 | Can I use my rented shop as the GST address? | Generally yes, with the right documents. The portal usually expects proof that you may use the premises, such as a rent agreement plus the owner's proof of ownership, for example a property tax receipt or electricity bill. Mismatched names are the most common cause of a query, so we review the set before filing. | ✓ |
| M8 | Can I register from my home address? | Often yes, if you can show the right to use the premises, such as ownership proof in your name or a consent letter from the owner with supporting proof. The portal looks at whether documents match the address you enter. Share your documents on WhatsApp and we will tell you what is missing before you file. | ✓ |
| M9 | What is Aadhaar authentication in a GST application? | Aadhaar authentication verifies the identity of the proprietor, partners or signatory using an OTP sent to the Aadhaar-linked mobile. It is part of the application on the portal. Where authentication is not completed or an officer asks, a visit to a Suvidha Kendra may be required. A mobile number not linked to Aadhaar is the usual snag. | ✓ |
| M10 | What does a query on my GST application mean? | It means the officer wants more information before deciding. The portal issues a clarification notice (REG-03) and you reply through the portal within the time allowed (REG-04). A full, document-backed first reply matters, because an unsatisfactory reply can lead to rejection. This page covers the application stage only; notices after registration are handled separately. | ✓ |
| M11 | What happens if my GST application is rejected? | A rejection order ends that application, but you can usually file a fresh application with the problem fixed. Check the stated reasons first. The causes we see most often are address proof and document mismatches. Do not simply resubmit the same set. Send us the rejection order and your documents and we will review them. | ✓ |
| M12 | How long does GST registration take? | The time depends on the department's processing, whether authentication is complete and whether the officer raises a query. We do not promise a date. What we control is the quality of the application: a complete, matching document set removes the most common causes of delay. Ask for a status check any time using your ARN. | ✓ |
| M13 | Is there a government fee for GST registration? | As we understand it, the portal application carries no government fee, but rules can change, so confirm on gst.gov.in before you apply. Any DSC for a company or LLP is bought separately from a licensed Certifying Authority at a market price. We do not publish professional fees on this website. | ✓ |
| M14 | Can a company or LLP register for GST? | Yes. A company or LLP registers like any other business, with its PAN, incorporation documents, authorised signatory details and registered-office proof, and signs with a digital signature. A new company can also ask for GSTIN with its incorporation filing. Whether it should do so now depends on when it starts taxable sales. | ✓ |
| M15 | Do NRIs and foreign businesses register for GST in India? | They can, if they make taxable supplies in India that need registration. The category (resident, casual or non-resident supplier) decides the process, and foreign documents may need apostille or consularisation. Authentication and the authorised signatory are the usual hurdles from abroad. We onboard by video call; see our guide for NRIs and foreign businesses. | ✓ |
| M16 | I sell on Amazon or Flipkart. Do I need GST registration? | Selling goods through an e-commerce operator generally calls for registration, though small sellers within the conditions of a notification may be able to use an enrolment number instead. The right route depends on turnover, where you sell and where stock is held. Marketplaces also ask for GST details at onboarding. Read our online-sellers guide, then send us your details. | ✓ |
| M17 | Should I choose the regular or the composition scheme? | It depends on who your customers are and where you sell. Regular registration lets customers claim credit and allows inter-state sales; composition offers simpler compliance at a turnover-based rate but with restrictions. Our comparison and checker explain the trade-offs; limits and rates must be confirmed on the portal before you decide. | ✓ |
| M18 | Can I change details after getting my GSTIN? | Many details can be amended on the portal, such as an additional place of business, contact details or signatory. Some changes may need officer approval, and some, like the PAN-linked legal identity, cannot be changed on the same registration. Tell us what is wrong and we will say whether to amend or reapply. | ✓ |
| M19 | Do I need a separate registration for another state? | GST registration is state-wise. If you supply from or hold stock in another state, such as a marketplace warehouse, you may need a registration there, while a second shop in the same state is usually added as an additional place of business. The facts decide, so share where your goods and offices are. | ✓ |
| M20 | I crossed the limit and have not registered. What now? | Work out the month you crossed using your sales records, then apply without waiting. A late application can leave a gap in which tax was payable on sales, so the exposure is real but depends on facts. Do not guess penalties. Send us month-wise turnover and your invoices and we will map the next steps. | ✓ |
| M21 | Do I need a DSC for GST registration? | Companies and LLPs must sign GST filings with a digital signature certificate, so a company or LLP should arrange one before or during registration. Proprietors and partnership firms can generally use an alternative route such as an OTP-based signature. Check which applies to you before filing. Our DSC service covers the certificate. | ✓ |
| M22 | What should I do after getting my GSTIN? | Check the certificate details, display the registration as required, issue invoices in the correct format, update bank details if pending and decide who files your returns. Returns have due dates and late fees, so set up support early. Our first-30-days checklist and the return filing service pick up from here. | ✓ |
| M23 | Should I do GST and Udyam registration together? | They are separate registrations by different authorities for different purposes. GST registration is about tax; Udyam registration recognises MSME status. Many small Chennai businesses need both over time, but neither replaces the other. We can plan the sequence in one consultation. See our GST versus Udyam comparison. | ✓ |
| M24 | I live outside Chennai. Can you still file my registration? | Yes. The application is filed online, so we work with businesses across Tamil Nadu and India by WhatsApp, phone and video call. Our only office is in Anna Nagar, Chennai, and we say clearly that other locations are served online. Send your documents on WhatsApp and book a 15-minute consultation. | |

### 5.12 Block 11: Final CTA block

| Element | Copy |
|---|---|
| Heading | Ready to register, or not sure if you need to? |
| Body | Tell us what you sell, where, and your approximate turnover. We will tell you whether registration applies and what to prepare. |
| Primary | **WhatsApp Us** (WA-01) |
| Secondary | **Book 15-Minute Consultation** |
| Tertiary | Call +91 72001 49711 |
| Reassurance | "No obligation. We reply during office hours, Mon–Sat 9:30 AM–6:30 PM." (avoid "free"; avoid response-time promise) |

### 5.13 Schema recommendations (JSON-LD, visible content only)

| Schema | Rule |
|---|---|
| Service | `serviceType: "GST Registration"`; `provider` = the Accountant organisation; `areaServed`: Chennai, Tamil Nadu, India (online); no `offers`, no price, no `aggregateRating` |
| FAQPage | The 24 FAQs in 5.11, exact visible text |
| BreadcrumbList | Home → Goods and Services Tax → GST Registration in Chennai (set `parentCrumb`) |
| HowTo | The steps in 5.5 (already generated by `howToSchema`); keep text identical to the visible steps |
| Accountant / ProfessionalService (site-wide, in layout) | Name, address (Anna Nagar), telephone, openingHours Mon–Sat 09:30–18:30, `sameAs`: LinkedIn. **No `aggregateRating`, no `review`.** Add ICAI membership number once supplied |
| Speakable | Existing `speakableSchema` on the intro and first FAQ |

### 5.14 Internal-link plan

| From MP to | Anchor | Where |
|---|---|---|
| S1 | "GST threshold in Tamil Nadu" | Quick facts and block 2 |
| S2 | "GST registration after company incorporation" | Block 2, FAQ M14 |
| S3 | "GST registration process, REG-01 step by step" | Block 4 |
| S4 | "address proof for GST registration" | Block 6 |
| A1 | "GST registration for online sellers" | Block 2, FAQ M16 |
| A2–A5 | audience names | Block 2 |
| C1 | "regular or composition scheme" | Block 5, FAQ M17 |
| C2 | "voluntary or compulsory registration" | FAQ M6 |
| T1, T2, T3 | tool names | Blocks 1, 5, 6 |
| P1, P2, P3, P4 | problem titles | Block 7 |
| PROC, FAQ | "process and timeline", "more GST registration FAQs" | Block 4, end |
| GSTRET | "GST return filing in Chennai" | Block 3 follow-on, FAQ M22 |
| NOTICE, LIT | "GST notice reply", "GST litigation" | Block 7 last row |
| LUTP | "LUT for exporters" | Block 3 note |
| DSC | "digital signature certificate" | FAQ M21 |
| UDY, IEC, FSSAI | "Udyam registration", "IEC registration", "FSSAI licence" | Next-services strip |
| PVT, HUB | "Private Limited Company Registration in Chennai", "company registration in Chennai" | FAQ M14 |
| ACP, BOOK | "annual compliance package", "bookkeeping services" | Follow-on strip |

Inbound links to build: plans 01 and 02 → S2 (already planned), GSTHUB → MP, GSTRET → MP ("need a GSTIN first"), A-pages → MP, L1–L5 → MP.

### 5.15 Image alt texts

| Image | Alt text |
|---|---|
| Hero (office or team, real photo only) | CA Rushil C S and team at the C S Rushil & Co. office in Anna Nagar, Chennai |
| Process diagram | Five-step GST registration process: applicability check, documents, REG-01, ARN tracking, REG-06 certificate |
| Document checklist graphic | GST registration document checklist for proprietorship, partnership, LLP and company |
| Comparison graphic | Table comparing regular, composition and enrolment routes under GST |
| Tamil Nadu coverage map (optional) | Tamil Nadu cities served online for GST registration from Chennai |

---

## 6. AEO answer bank (30 + 15 × 7 = 135 answers)

How to use: each answer is 40–80 words, stands alone as a spoken or quoted reply, and is placed on the page named in the last column in plain visible text (with FAQPage markup only where that page carries that schema, and never the same question twice across pages). "V" in the Source column means the row carries **"Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing."** Answers never state a fee, a guaranteed outcome or a turnaround date. "WA" is the WhatsApp message code from Section 9.9; blank means no CTA is apt.

Columns: ID · Question · Answer (40–80 words) · Supporting detail · Form or portal · Source / verification · WA · Best page.

### 6.1 Direct-answer FAQs (30)

| ID | Question | Answer | Supporting detail | Form / portal | Source / verify | WA | Page |
|---|---|---|---|---|---|---|---|
| D1 | What is GST registration? | GST registration is the process of getting a unique tax number, the GSTIN, from the GST system so that a business can legally collect GST, issue tax invoices and claim credit. You apply on the GST portal. Whether you must register depends on your type of supply, your aggregate turnover and certain compulsory categories. | Registration is state-wise and PAN-based | gst.gov.in | SRC1; V | WA-01 | FAQ |
| D2 | What is a GSTIN? | A GSTIN is the unique identification number given to a business when its GST registration is approved. It appears on your registration certificate and must be shown on tax invoices. You can check any GSTIN on the GST portal's taxpayer search, which helps you confirm a supplier or customer is registered. | Based on PAN and state | Search Taxpayer | SRC5; V | | FAQ |
| D3 | Who needs to register for GST in Tamil Nadu? | A business must register once its aggregate turnover crosses ₹40 lakh for goods or ₹20 lakh for services in Tamil Nadu, or from the first day if it falls in a compulsory category, for example inter-state taxable supply of goods or sale through an e-commerce operator. Others can register voluntarily. | Limits are state-specific | REG-01 | Fact sheet; V | WA-11 | MP |
| D4 | What is the GST registration limit for services in Tamil Nadu? | For service providers in Tamil Nadu, registration is required once aggregate turnover crosses ₹20 lakh in a financial year. If you supply both goods and services, the lower services figure is generally applied to you. Count all supplies under your PAN, and check the figure again each month rather than once a year. | Mixed supplies treated with services limit | T1 | Fact sheet; V (mixed supplies) | WA-02 | S1 |
| D5 | What is the GST registration limit for goods in Tamil Nadu? | For suppliers of goods in Tamil Nadu, the registration limit is ₹40 lakh of aggregate turnover in a financial year, with some exclusions for specified goods. Inter-state supply of goods and sales through e-commerce operators can require registration even below this figure, so the limit is not always the deciding factor. | Exclusions exist | T1 | Fact sheet; V (exclusions) | WA-02 | S1 |
| D6 | What is aggregate turnover for GST? | Aggregate turnover is the total value of your taxable supplies, exempt supplies, exports and inter-state supplies, across India, for all businesses under one PAN. It leaves out tax charged and certain items. It is the figure compared with the registration limit, so a second shop or business under the same PAN counts together. | Same-PAN rule | T1 | SRC3; V | WA-02 | S1 |
| D7 | How do I apply for GST registration online? | Go to gst.gov.in, choose new registration, and fill Part A with PAN, mobile number and email, verified by OTP. Part B follows with business details, premises, signatory and documents, then Aadhaar authentication and submission. The portal issues an ARN, and you track the application until the certificate is issued. | Two-part form | REG-01 | SRC2; fact sheet | WA-01 | S3 |
| D8 | What is Form GST REG-01? | REG-01 is the application form for new GST registration. It is filed on the GST portal in two parts: Part A creates a temporary reference after verifying PAN, mobile and email, and Part B collects business details and documents. After submission and verification, the portal generates the Application Reference Number. | Filed online only | REG-01 | Fact sheet | WA-01 | S3 |
| D9 | What is an ARN in GST registration? | ARN stands for Application Reference Number. The portal generates it when your registration application is successfully submitted. You use it to track the status of the application and to refer to it when a query arrives. Keep the ARN message safe, because it is the main handle for your file. | Sent by SMS and email | Track application | Fact sheet; V (SMS/email) | WA-13 | S3 |
| D10 | What is the GST registration certificate called? | The registration certificate is issued in Form GST REG-06 after your application is approved. It shows your GSTIN, legal and trade name, address and effective date. Download it from the portal, check every detail, and display it at the business premises as the law requires. | Display rule | REG-06 | Fact sheet; V (display) | WA-01 | S7 |
| D11 | What documents are needed for GST registration of a proprietor? | A proprietor usually needs PAN, Aadhaar, a photograph, proof of the business address and bank account details. The address proof depends on whether the premises are owned, rented or used with consent. Use our checklist to see the exact set for your case before you start the application. | Premises variants | T2 | SRC2; V | WA-12 | T2 |
| D12 | Can I register for GST without a shop? | Yes, if you have a place you can show as the principal place of business, for example a home or rented room, backed by suitable proof. GST registration is tied to an address, not to a shop. The documents must match the address entered, so a consent letter may be needed for family premises. | Address, not shop | REG-01 | SRC1; V | WA-12 | S4 |
| D13 | Is Aadhaar needed for GST registration? | Aadhaar authentication is a standard step in the application for the proprietor, partners or signatory. It is done through an OTP on the Aadhaar-linked mobile number. Where authentication is not completed, the process can take a different route, which may include a visit to a Suvidha Kendra. | Name must match | REG-01 | Fact sheet; V (alternate route) | WA-13 | P3 |
| D14 | Can I track my GST registration application? | Yes. Use the ARN on the GST portal under the registration section to see the status, such as submitted, query raised or approved. If a clarification notice appears, reply within the time stated on it. We track the ARN for our clients and report any status change. | Track by ARN | Track application | SRC5; V | WA-13 | S3 |
| D15 | Who can file a GST registration application for me? | You can file it yourself, or a chartered accountant or other authorised person can prepare and submit it with your consent, using your OTPs and documents. The responsibility for the information stays with the applicant. Choose someone who explains which documents are needed and who will reply to any query. | Consent and OTP needed | REG-01 | SRC1; V | WA-01 | C5 |
| D16 | Is GST registration done only online? | Yes, the application is filed on the GST portal, and documents are uploaded there. In some cases an officer may ask for physical verification of the premises, and Aadhaar authentication may involve a Suvidha Kendra. Because filing is online, businesses anywhere in Tamil Nadu can apply without visiting an office. | Physical verification possible | gst.gov.in | SRC1; V | WA-01 | PROC |
| D17 | What is voluntary GST registration? | Voluntary registration means a business registers even though it is below the threshold and not in a compulsory category. It brings the same duties as other registered businesses, including returns. Owners choose it to claim credit on purchases, to meet customer or marketplace requirements, or to be ready before growth. | Same duties apply | REG-01 | SRC3; V | WA-11 | C2 |
| D18 | What is the GST composition scheme? | The composition scheme lets eligible small taxpayers pay tax at a fixed turnover-based rate with simpler returns, instead of regular GST. The trade-offs are that you cannot collect GST from customers or claim input credit, and some supplies are restricted. Eligibility limits and rates must be confirmed on the portal before opting. | Not for everyone | CMP-08, GSTR-4 | Fact sheet; V | WA-11 | C1 |
| D19 | What is the trade name in GST registration? | The trade name is the name your business is known by in the market, entered in addition to the legal name taken from PAN. The legal name must match PAN exactly; the trade name can be the brand name. Both appear on your certificate and invoices, so enter them carefully. | Legal name from PAN | REG-01 | SRC1; V | WA-03 | P4 |
| D20 | What is the principal place of business in GST? | It is the main address from which the business operates, and it is shown on the registration certificate. The address proof must match it. Other premises, such as a warehouse or branch in the same state, are added as additional places of business. Getting this address right avoids most queries. | Documents must match | REG-01 | SRC1; V | WA-12 | S4 |
| D21 | What is an additional place of business in GST? | An additional place of business is any other premises in the same state where you carry on business, store goods or provide services, such as a warehouse or second shop. It is listed on your registration and can be added later by amendment. Premises in another state need that state's registration. | Same state only | Amendment | SRC1; V | WA-10 | S6 |
| D22 | Can one PAN have more than one GST registration? | Yes, a PAN can hold registrations in more than one state, one per state, and a business may in some cases hold more than one registration within a state for separate business verticals. Aggregate turnover is still counted across all of them for the threshold, since the PAN is the same. | State-wise | REG-01 | SRC3; V | WA-10 | S6 |
| D23 | What is a casual taxable person in GST? | A casual taxable person occasionally supplies goods or services in a state where it has no fixed place of business, for example at an exhibition or temporary stall. Such a person must register before starting and follows special rules on validity and advance tax. The rules differ from regular registration. | Temporary supplies | REG-01 variant | SRC3; V | WA-05 | A3 |
| D24 | What is the GST enrolment number for small online sellers? | Some small sellers who supply goods only within their state through e-commerce operators can obtain an enrolment number on the GST portal instead of full registration, if they meet the conditions of the notification. It is not available to every seller, so confirm your turnover and sales pattern before relying on it. | Notification conditions | Portal option | Live page cites Notification 34/2023-CT; V | WA-07 | A1 |
| D25 | What is an HSN code in GST registration? | HSN stands for Harmonised System of Nomenclature, the numeric code that classifies goods. During registration you list the main goods you supply with their HSN codes, and the same codes later appear on invoices and returns. Choosing a code that does not match your product can lead to questions and rate disputes. | Goods only | REG-01 Part B | SRC1; V | WA-10 | S5 |
| D26 | What is a SAC code in GST? | SAC is the Services Accounting Code, a numeric code that classifies services. When you register as a service provider you list your main services with their SAC codes. As with HSN for goods, picking the code that matches what you actually supply avoids later queries on invoices and returns. | Services only | REG-01 Part B | SRC1; V | WA-14 | S5 |
| D27 | How does a new private limited company get GST registration? | A new company can apply for GSTIN along with incorporation through the AGILE-PRO-S form filed with SPICe+ Part B, or apply separately on the GST portal later. Applying at incorporation uses the registered office as the principal place of business. Choose based on whether taxable sales start soon. | Optional at incorporation | AGILE-PRO-S, REG-01 | Fact sheet; SRC4; V (optional) | WA-08 | S2 |
| D28 | Can an NRI get a GST number? | An NRI can obtain GST registration if the business supplies goods or services in India that need it, using an Indian PAN and an Indian business address. Authentication and the authorised signatory are the practical hurdles when the NRI is abroad. The category and documents depend on how the business is structured. | Documents from abroad | REG-01 | SRC1; V | WA-04 | A3 |
| D29 | How can I verify a GSTIN? | Use the Search Taxpayer facility on the GST portal, enter the GSTIN, and it shows the legal name, trade name, registration status and date. Check a supplier's status before claiming credit and check your own after approval. A cancelled or suspended registration is visible there. | Public search | Search Taxpayer | SRC5; V | | FAQ |
| D30 | What happens after GST registration is approved? | You receive the REG-06 certificate and GSTIN. Next you display the registration, issue tax invoices with the GSTIN, add bank details if pending, decide your return filing arrangements and start recording sales and purchases. Returns follow a calendar with due dates and late fees, so plan support early. | Hand-off to returns | Portal login | Fact sheet; V (display, bank timing) | WA-01 | S7 |

### 6.2 Comparison answers (15)

| ID | Question | Answer | Supporting detail | Form / portal | Source / verify | WA | Page |
|---|---|---|---|---|---|---|---|
| CM1 | What is the difference between regular and composition GST? | Under regular registration you charge GST on sales, claim credit on purchases and file regular returns. Under composition you pay a fixed percentage of turnover, cannot charge GST separately or claim credit, and file simpler returns. Regular suits businesses selling to other businesses or across states; composition suits small local sellers. | Limits and rates to verify | CMP-08, GSTR-4 | Fact sheet; V | WA-11 | C1 |
| CM2 | Voluntary or compulsory GST registration: what is the difference? | Compulsory registration applies when turnover crosses the limit or a compulsory category applies, and the law sets a time to apply. Voluntary registration is your choice below the limit. Once registered either way, the duties are broadly the same. The decision is about timing, customers and credit, not about different rules afterwards. | Same duties after registering | REG-01 | SRC3; V | WA-11 | C2 |
| CM3 | GST registration vs Udyam registration: what is the difference? | GST registration is a tax registration under the GST law, issued through the GST portal. Udyam registration recognises a business as an MSME and is done on a separate portal. They serve different purposes, have different authorities, and one does not replace the other. Many small businesses end up with both. | Different portals | Udyam portal | SRC1; SRC7; V | WA-11 | C4 |
| CM4 | GST registration vs LUT: what is the difference? | GST registration gives you a GSTIN and the right to collect and claim GST. A Letter of Undertaking is a document an exporter files, after registration, to export without paying integrated tax upfront. You need registration first; LUT sits on top. How to file the LUT is covered in our exporters guide. | Order: register, then LUT | RFD-11 | Fact sheet (RFD-11 [V]); V | WA-06 | C3 |
| CM5 | GST registration vs enrolment number: which route fits a small online seller? | Full registration gives a GSTIN with the normal rights and duties. An enrolment number is a limited route for eligible small sellers supplying goods within their state through marketplaces under a notification. It suits a very small home seller; registration suits anyone selling across states or growing. Check eligibility before choosing. | Notification conditions | Portal | Live page cites Notification 34/2023-CT; V | WA-07 | A1 |
| CM6 | Should I file GST registration myself or with a CA? | You can file it yourself on the portal. A chartered accountant adds value where documents may not match, the premises are rented or shared, authentication is difficult or the structure is a firm, LLP or company. A CA also replies to any query. The decision depends on how simple your case is. | No fee comparison here | REG-01 | SRC1; V | WA-01 | C5 |
| CM7 | Is GST registration different for a proprietorship and a company? | The steps are the same but the documents and signatory differ. A proprietor uses personal PAN and Aadhaar; a company uses company PAN, incorporation papers, a board resolution and a digital signature. Registered-office proof is needed for a company. Turnover under one PAN is counted together. | Constitution decides documents | REG-01 | SRC2; V | WA-08 | S2 |
| CM8 | How does regular registration differ from casual taxable person registration? | Regular registration has no fixed end date and suits ongoing business. Casual taxable person registration is for temporary supplies in a state where you have no fixed place of business, and it follows its own rules on duration and advance deposit. The two have different documents and conditions. | Temporary supplies | REG-01 variant | SRC3; V | WA-05 | A3 |
| CM9 | Is it better to get GSTIN at incorporation or apply separately? | Applying at incorporation through AGILE-PRO-S saves a step if taxable sales start soon, and it carries no separate fee. Applying separately later suits companies with no sales for months, avoiding early return duties. Companies with inter-state supply of goods or large GST-bearing purchases usually register early. | Optional at incorporation | AGILE-PRO-S | Fact sheet; SRC4; V (optional) | WA-08 | S2 |
| CM10 | Do I need one GST registration or one per state? | GST registration is state-wise. You register in each state from which you make taxable supplies or where you hold stock or have premises, using the same PAN. Within one state, extra premises are usually added as additional places of business on the same registration. Marketplace warehouses outside Tamil Nadu can trigger a registration there. | One per state | REG-01 | SRC1; V | WA-10 | S6 |
| CM11 | GST registration vs IEC: do exporters need both? | They are different. GST registration is a tax registration; the Importer Exporter Code is issued by DGFT for foreign trade. An exporter of goods usually needs an IEC to export and a GSTIN to supply and claim refunds or file LUT. Check each portal's current requirements before starting. | Different authorities | DGFT, GST portal | SRC8; V | WA-06 | C3 |
| CM12 | GST registration vs FSSAI licence: do food businesses need both? | They are separate. GST registration is about tax and depends on turnover or compulsory triggers; the FSSAI licence is a food-safety licence required for food businesses. A home bakery may need an FSSAI licence even if it stays below the GST limit. Each has its own authority and portal. | Different laws | FoSCoS, GST portal | SRC1; V | WA-11 | A2 |
| CM13 | What is the difference between PAN and GSTIN? | PAN is the permanent account number issued by the income tax department to identify a taxpayer. GSTIN is the GST registration number issued per state to a PAN holder who registers under GST. You need a PAN to apply for GST, and one PAN can have several GSTINs across states. | PAN first | Portal | SRC1; V | WA-01 | FAQ |
| CM14 | Composition scheme or voluntary registration: which should a small seller choose? | These are not alternatives to each other. Voluntary registration is about registering below the limit; composition is a scheme a registered person may opt into if eligible. A small local seller who wants to register may choose composition; one who sells to GST-registered buyers usually prefers regular registration for credit. | Different questions | REG-01, CMP-08 | SRC3; V | WA-11 | C1 |
| CM15 | Aadhaar OTP authentication or Suvidha Kendra: which will my application need? | Most applicants authenticate by OTP on the Aadhaar-linked mobile number. If authentication is not completed, or the officer asks, biometric verification at a Suvidha Kendra may be required. Keeping the Aadhaar mobile active and the name matching PAN avoids the second route in most cases. | Name match matters | REG-01 | Fact sheet; V | WA-13 | P3 |

### 6.3 Process answers (15)

| ID | Question | Answer | Supporting detail | Form / portal | Source / verify | WA | Page |
|---|---|---|---|---|---|---|---|
| PR1 | What are the steps for GST registration? | Check whether you must register, gather documents, file Part A with PAN, mobile and email, then Part B with business details, premises and signatory, complete Aadhaar authentication, submit and note the ARN, reply to any query, and download the REG-06 certificate when approved. Then set up invoices and returns. | Eight steps | REG-01, REG-06 | Fact sheet; SRC2 | WA-01 | S3 |
| PR2 | What is Part A of the GST registration form? | Part A is the first step on the portal. You enter the legal name as per PAN, PAN, mobile number and email, verify both by OTP, and the portal gives a temporary reference number. It starts the application and lets you return to Part B within the validity of that reference. | TRN validity to verify | REG-01 Part A | SRC2; V | WA-01 | S3 |
| PR3 | What is Part B of the GST registration form? | Part B is where you fill the detailed application: business name and constitution, promoters or partners, authorised signatory, principal and additional places of business, goods or services supplied with HSN or SAC codes, bank details and documents. Aadhaar authentication and the final submission with verification follow. | Several tabs | REG-01 Part B | SRC2; V | WA-01 | S3 |
| PR4 | What is a TRN in GST registration? | TRN is the Temporary Reference Number issued after Part A is verified. You use it to log in and continue to Part B. It is temporary and different from the ARN, which is issued only after the full application is submitted. Keep it handy if you need to resume. | Not the same as ARN | REG-01 | SRC2; V | WA-01 | S3 |
| PR5 | How do I upload documents for GST registration? | In Part B, the portal has a documents tab where each required document is uploaded in the file format and size limits shown on screen. Clear scans matter, and the document type must match the heading. We check names and addresses across all documents before upload to avoid a query. | Check size limits | REG-01 Part B | SRC2; V | WA-12 | S3 |
| PR6 | What happens after I submit the GST registration application? | The portal generates an ARN and the application goes to a tax officer. The officer may approve it, ask for clarification through REG-03, or in some cases order physical verification. On approval the REG-06 certificate is issued. You can track progress using the ARN. | Three outcomes | ARN | Fact sheet; V | WA-13 | S3 |
| PR7 | What are REG-03 and REG-04? | REG-03 is the notice the officer issues seeking clarification or more documents on your application. REG-04 is the reply you file on the portal, with documents. The notice states the time to reply, so act promptly. A complete, document-backed reply is what the officer looks for. | Application stage only | REG-03, REG-04 | Fact sheet; V | WA-03 | P1 |
| PR8 | How do I reply to a query on my GST registration application? | Log in to the portal, open the notice, read the exact points raised, and prepare a reply with the corrected or additional documents. File it as REG-04 within the time stated on the notice. Do not submit a general reply; address each point with a document. Ask a CA if unsure. | Within notice period | REG-04 | Fact sheet; V (period) | WA-03 | P1 |
| PR9 | How do I download my GST registration certificate? | After approval, log in to the GST portal and open the registration certificate under the user services section, then download the REG-06 PDF. Check the legal name, trade name, address, constitution and effective date. If anything is wrong, plan an amendment instead of using the certificate as is. | Check each detail | REG-06 | SRC1; V | WA-01 | S7 |
| PR10 | How do I add an additional place of business? | File an amendment on the GST portal after login, adding the new premises with supporting documents such as a lease or consent letter. Some changes are approved by the officer, so keep proof ready. Premises in another state are not added this way; they need that state's registration. | Same state only | Amendment | SRC1; V | WA-10 | S6 |
| PR11 | How do I correct details in my GST registration? | Use the amendment option on the portal. Some fields, such as contact details, can often be updated quickly, while others, such as legal name tied to PAN or business constitution, are restricted or need a fresh application. Tell us what is wrong and we will confirm which route applies. | Core vs non-core | Amendment | SRC1; V | WA-03 | P4 |
| PR12 | How does a non-resident supplier register for GST? | A non-resident supplier applies for registration well before starting supplies, using passport details, a local contact or authorised signatory and documents showing the business, with a deposit rule on estimated tax. The process differs from the regular route, and Indian PAN or equivalent steps apply. Get advice first. | Special rules | REG-01 variant | SRC3; V | WA-05 | A3 |
| PR13 | How do I register for GST while incorporating a company? | In the SPICe+ incorporation filing, the AGILE-PRO-S form includes an option to apply for GSTIN with the company's registered office as the principal place of business. If you opt in, the registration follows incorporation. If not, apply separately later on the portal. | Optional | SPICe+, AGILE-PRO-S | Fact sheet; SRC4; V (optional) | WA-08 | S2 |
| PR14 | How do I choose the HSN or SAC code at registration? | List what you actually supply, find the matching HSN for goods or SAC for services from the official code list or the GST portal's lookup, and enter the main items. Keep it consistent with your invoices. If you sell many items, choose the main ones and update later as the business changes. | Keep invoices consistent | Part B | SRC1; V | WA-10 | S5 |
| PR15 | How do I check my GST application status? | Use the Track Application Status option on the GST portal and enter the ARN. It shows whether the application is submitted, pending with the officer, has a query or has been approved. Check also the registered email and mobile for portal messages. We track ARNs for clients. | Use ARN | Track application | SRC5; V | WA-13 | S3 |

### 6.4 Document and deadline answers (15)

| ID | Question | Answer | Supporting detail | Form / portal | Source / verify | WA | Page |
|---|---|---|---|---|---|---|---|
| DD1 | What address proof is accepted for GST registration? | For owned premises, an ownership document such as a property tax receipt or electricity bill is usually used. For rented premises, a rent or lease agreement is needed along with the owner's ownership proof. Where there is no agreement, a consent letter from the owner with supporting proof may be accepted. | Names must align | Part B documents | SRC1; V | WA-12 | S4 |
| DD2 | What is a consent letter for GST address proof? | A consent letter is a signed statement from the person who owns or controls the premises, allowing you to use them as your business address. It is usually supported by the owner's identity and ownership proof, such as an electricity bill or property tax receipt. It is common for family-owned homes and shared offices. | Owner signs | Part B documents | SRC1; V | WA-12 | S4 |
| DD3 | What documents does a partnership firm need for GST registration? | A partnership firm needs the firm's PAN, the partnership deed, partners' PAN, Aadhaar and photographs, a letter authorising the signatory, proof of the business address and the firm's bank account details. Every partner may need to complete authentication, so plan their availability. | Deed must be current | Part B documents | SRC2; V | WA-09 | A5 |
| DD4 | What documents does an LLP need for GST registration? | An LLP needs its PAN, certificate of registration, LLP agreement, details of designated partners, an authorisation for the signatory, address proof and bank details. A digital signature is needed for an LLP to sign the application. Names and addresses in all papers should match. | DSC for LLP | Part B documents | SRC2; V | WA-09 | A5 |
| DD5 | What documents does a company need for GST registration? | A company needs its PAN, certificate of incorporation, MoA and AoA, board resolution authorising the signatory, directors' details, registered-office proof and bank details. A digital signature certificate is needed for the company to sign. If the registered office is rented, the owner's proof and consent matter. | Registered-office proof | Part B documents | SRC2; V | WA-08 | S2 |
| DD6 | What documents does an NRI need for GST registration? | An NRI usually needs an Indian PAN, passport details, proof of the Indian business address, an Indian bank account and Aadhaar if held, plus an authorised signatory in India if the NRI cannot sign. Overseas documents may need apostille or consularisation. Requirements vary by category, so check before filing. | Apostille where needed | Part B documents | Fact sheet (apostille); V | WA-04 | A3 |
| DD7 | What bank proof is needed for GST registration? | Bank account details, supported by a cancelled cheque or a bank statement or passbook first page, showing the account holder's name and number. For a company or firm, the account is in the entity's name. Bank details can sometimes be added shortly after registration, but rules on timing should be checked. | Name must match | Part B | SRC1; V | WA-01 | T2 |
| DD8 | Do partners and directors need photographs for GST registration? | Yes, the application usually asks for a recent photograph of the proprietor, each partner or director and the authorised signatory. Use a clear image that meets the portal's size and format limits. Blurred or wrongly sized images are a small but common cause of delay in application checks. | Check portal limits | Part B | SRC2; V | WA-12 | T2 |
| DD9 | Is a digital signature needed to apply for GST registration? | Companies and LLPs sign with a digital signature certificate; other applicants can generally use an OTP-based method. If a DSC is needed and you do not have one, arrange it first because verification takes time. Our DSC service covers the certificate; the application covers the rest. | DSC by entity type | DSC | Fact sheet; V | WA-08 | DSC |
| DD10 | By when must I apply after crossing the GST limit? | The law sets a time to apply after you become liable, and it is short, commonly cited as 30 days from the date of liability. Applying within the time lets registration take effect from the date of liability; applying late can leave a gap. Confirm the current period on the CGST Act or portal. | Period to verify | REG-01 | S2 live text cites s.25 (30 days); V | WA-02 | P2 |
| DD11 | By when must I reply to a GST registration query? | The REG-03 notice itself states the time allowed, so open it on the portal and note the date today. Replying late risks rejection. If you cannot assemble the documents in time, reply with what you have and an honest statement. Our team can prepare a document-backed reply once we see the notice. | Time stated on notice | REG-03, REG-04 | Fact sheet; V (period) | WA-03 | P1 |
| DD12 | Can I register for GST before starting business? | Yes, a person can apply to register in advance of starting taxable supplies, for example before a launch or a marketplace listing, with the documents for the intended premises. Registering early brings return duties from registration, so decide with your start date in mind. A new company can also apply at incorporation. | Early filing means early duties | REG-01 | SRC1; V | WA-08 | S2 |
| DD13 | Does a regular GST registration expire? | A regular registration does not have a fixed end date and continues until cancelled or surrendered. Casual and non-resident registrations are granted for a limited period and need extension if supplies continue. Registered persons still have ongoing duties such as returns, and the department can cancel a registration in specified cases. | Duties continue | Portal | SRC3; V | | FAQ |
| DD14 | What documents do online sellers need for GST registration? | The same core set as other businesses: PAN, Aadhaar, photograph, address proof for the place from which you sell or hold stock, and bank details. Marketplace sellers should also keep their seller agreement and details of warehouse locations. If stock sits in another state, that state's registration may apply. | Stock locations matter | Part B | SRC1; V | WA-07 | A1 |
| DD15 | Is there a deadline to add bank details after registration? | The law allows bank account details to be furnished within a prescribed time after registration, rather than at the application itself. Because the time and consequences should be confirmed, add the details as soon as the certificate arrives, and check the portal prompt. This keeps invoices and refunds free of avoidable issues. | Time to verify | Amendment | SRC1; V | WA-01 | S7 |

### 6.5 Cost and timeline answers (15)

No professional fee figures anywhere in this set. Timeline answers contain no day counts the firm has not documented.

| ID | Question | Answer | Supporting detail | Form / portal | Source / verify | WA | Page |
|---|---|---|---|---|---|---|---|
| CT1 | How much does GST registration cost in Chennai? | The portal application itself is understood to carry no government fee, but confirm that on gst.gov.in. Our professional charges depend on the constitution, premises and complexity, and are shared during the consultation rather than published on this website, in line with ICAI guidelines. Ask us for a scope-based quote on WhatsApp. | No figure published | gst.gov.in | SRC1; V | WA-01 | PROC |
| CT2 | Is there a government fee for GST registration? | As we understand it, the government portal does not charge a fee for the registration application. Rules and portal practice can change, so check gst.gov.in before you apply. A digital signature certificate, where a company or LLP needs one, is purchased separately from a licensed Certifying Authority at its market price. | DSC separate | gst.gov.in | SRC1; V | WA-01 | PROC |
| CT3 | Is GST registration free on the government portal? | In our understanding, there is no portal charge to submit the application. That does not mean registration is free of cost overall: you may pay for a professional's time, a DSC if needed, and ongoing compliance after registration. Confirm the current position on the portal. | Verify portal | gst.gov.in | SRC1; V | WA-01 | PROC |
| CT4 | How long does GST registration take? | It depends on processing by the department, whether Aadhaar authentication is done, and whether the officer raises a query or orders physical verification. We cannot give a firm number of days. A complete application with matching documents is the part you control, and we track the ARN until the certificate is issued. | No promise | ARN | SRC1; V | WA-06 | PROC |
| CT5 | How long does the portal take after I get an ARN? | The time after the ARN is in the department's hands. If the officer is satisfied, approval follows; if not, a clarification notice comes and the clock moves with your reply. Track the ARN regularly and keep your mobile and email active. We do not promise a date. | Department-controlled | ARN | SRC1; V | WA-13 | S3 |
| CT6 | Does Aadhaar authentication make GST registration slower? | It can. If authentication is completed promptly by OTP, the application proceeds normally. If the Aadhaar mobile is not linked, names do not match or authentication fails, the application may wait or need a Suvidha Kendra visit. Sorting this before filing is the most effective way to avoid delay. | Fix before filing | REG-01 | Fact sheet; V | WA-13 | P3 |
| CT7 | Why is my GST registration taking so long? | Common reasons are a query awaiting your reply, incomplete Aadhaar authentication, documents that do not match the address or name, or the officer ordering physical verification. Check the ARN status and your email for a notice. If none, a status review with your documents can show the cause. | Check ARN first | ARN | SRC1; V | WA-13 | P3 |
| CT8 | How long do I have to answer a GST registration query? | The notice states the period, so read the REG-03 on the portal and note the last date today. Replying late can lead to rejection and a fresh application. If you are unsure, send us the notice and your documents on WhatsApp and we will tell you what a full reply needs. | Date is on the notice | REG-03 | Fact sheet; V | WA-03 | P1 |
| CT9 | Can GST registration be done in one day? | No one can promise that. You can complete the filing in a single sitting if documents are ready and authentication is done, but approval is the department's step and can take longer, especially if there is a query or verification. We focus on a correct, complete filing rather than a promised date. | No promise | REG-01 | SRC1; V | WA-06 | P5 |
| CT10 | Will a query add time to my GST registration? | Yes. A clarification notice pauses the decision until you reply, and the officer then reviews the reply. A clear, document-backed reply keeps this short; an unclear one can lead to rejection and a new application, which adds more time. Preventing the query through a documents check is better. | Prevention is faster | REG-03, REG-04 | Fact sheet; V | WA-03 | P1 |
| CT11 | What costs apply besides GST registration itself? | Possible costs are a digital signature certificate for a company or LLP, stamp duty or notarisation for a rent or consent document if you need to create one, and the cost of ongoing compliance after registration, such as returns and bookkeeping. We do not publish professional fee figures; ask for a scope-based quote. | Depends on case | — | V | WA-01 | PROC |
| CT12 | What does it cost to ignore GST registration when it is required? | The exposure depends on facts: tax that should have been collected, interest and penalties under the law, and loss of credit on purchases made earlier. Do not guess amounts. The best step is to work out the date you became liable and apply now. Send us month-wise turnover and we will map it. | Do not guess | REG-01 | SRC3; V | WA-02 | P2 |
| CT13 | What are the ongoing costs after GST registration? | After registration you must file periodic returns, keep records, issue compliant invoices and reconcile credit. The cost is mostly time or professional support for return filing and bookkeeping. These duties apply even in months with no sales, so decide who will handle them before you apply. | Returns owned by GSTRET | Portal | Fact sheet; V | WA-01 | S7 |
| CT14 | How do I get a quote for GST registration? | Send us your constitution, what you sell, where you sell, your address type and approximate turnover on WhatsApp, or book a 15-minute consultation. We will confirm what is needed, then share the scope and our charges. We do not publish professional fees on the website. | Scope first | — | ICAI rule | WA-01 | PROC |
| CT15 | Does the composition scheme reduce GST registration cost? | Choosing composition does not change how you register; the application is the same. It can reduce later compliance effort and the number of returns, but it brings restrictions on credit and inter-state sales. Do not choose a scheme only to save effort. Compare using the checker and confirm limits on the portal. | Registration is the same | CMP-08 | SRC3; V | WA-11 | C1 |

### 6.6 Risk and penalty answers (15)

All rows are V. No penalty amounts are stated; the answers describe the nature of the risk and point to the Act.

| ID | Question | Answer | Supporting detail | Form / portal | Source / verify | WA | Page |
|---|---|---|---|---|---|---|---|
| RP1 | What is the penalty for late GST registration? | The CGST Act provides for penalties, and for tax and interest on supplies made after the date you became liable, if registration is not taken when required. The amount depends on the facts, so do not rely on a figure from a forum. Work out your date of liability, apply promptly and get advice on exposure. | Section references to confirm | REG-01 | SRC3; V | WA-02 | P2 |
| RP2 | Can I collect GST from customers before I have a GSTIN? | No. Collecting GST without being registered is not permitted, and a tax invoice needs a valid GSTIN. If you have charged customers GST before registration, the position can be complicated and should be reviewed. Register first, then issue GST invoices from the effective date. | Do not charge GST pre-registration | REG-01 | SRC3; V | WA-02 | P2 |
| RP3 | What if I issued invoices without GST after crossing the limit? | Sales made after you became liable can attract tax, interest and possibly penalty, and customers may not be able to claim credit. The way to handle it depends on the date, amounts and customers. Do not alter past invoices. Collect them, work out the date, and ask a CA about the best route. | Facts decide | REG-01 | SRC3; V | WA-02 | P2 |
| RP4 | What happens if my GST registration documents are wrong or do not match? | The application may get a query, be delayed or be rejected, and a mismatch left in the certificate can cause trouble later with invoices and credit. If the address or name is wrong, correct it through amendment or a fresh application. Reviewing documents before you file is far easier than fixing them after. | Prevent early | REG-03, Amendment | Fact sheet; V | WA-03 | P1 |
| RP5 | Is choosing the wrong HSN or SAC code a risk? | It can cause questions on invoices, disputes over the rate applied and mismatches in returns. A code that does not describe what you really supply invites queries. Choose from the official lists, keep codes consistent across registration and invoices, and revisit them when your product range changes. | Link to rate disputes | Part B | SRC1; V | WA-10 | S5 |
| RP6 | Can an officer visit my premises after I apply for GST? | In some cases the officer may order physical verification of the premises during processing. Be ready with the same documents you uploaded and make sure someone is available at the address. A genuine, correctly described place of business and matching documents are the best protection against complications. | Verification can be ordered | REG-01 | SRC1; V | WA-12 | S4 |
| RP7 | What if I give an address I do not actually use for GST registration? | An address that is not the real place of business is a serious risk: the application can be rejected, the registration can later be cancelled and further action is possible. Use a genuine place where you can show the right to use the premises, supported by proper documents or a consent letter. | Do not use a convenient address | REG-01 | SRC3; V | WA-12 | S4 |
| RP8 | Can my GST registration be rejected more than once? | Yes. You can file a fresh application after a rejection, but if the same problem remains the next application can fail too. Read the reasons in the order, correct each one with documents and have the set reviewed before you refile. Repeating the same file wastes time. | Fix the cause | REG-01 | Fact sheet; V | WA-03 | P1 |
| RP9 | What happens if I do not reply to a GST registration query? | The officer may reject the application. If the application is rejected, you can apply afresh, but you start again and the delay adds to any gap in registration. Always reply within the period on the notice, even if only with partial documents and an explanation, and ask for help early. | Time on the notice | REG-04 | Fact sheet; V | WA-03 | P1 |
| RP10 | Can the department cancel my GST registration after I get it? | Yes, in specified cases such as not filing returns for a period or having obtained registration through incorrect facts. Cancellation notices and revocation are covered by our notice reply service, not this page. Registration is not a one-time task; the duties that follow keep it valid. | Hand off to NOTICE | REG-17 and later forms | Fact sheet (REG-17 [V]); V | | NOTICE |
| RP11 | What if I register in the wrong state? | Registration is state-wise, so a registration in a state from which you do not supply or hold premises may not serve the purpose, and the state you should have registered in may still be an issue. Check where your supplies originate, where your premises and stock are and what the law says before applying. | State logic | REG-01 | SRC1; V | WA-10 | S6 |
| RP12 | Can I lose input tax credit if I register late? | Credit on purchases made before registration is limited by the Act, with some relief for stock in hand if you apply within the time. Services consumed earlier may not qualify. Weigh this when deciding when to register and do not assume all earlier purchases will carry credit. | s.18 relief to confirm | REG-01 | Live S2 text; V | WA-02 | S2 |
| RP13 | What are the risks of registering voluntarily? | Once registered you must file returns on time, including nil returns, and pay GST on every taxable sale from the first rupee, which can make you less price-competitive against unregistered sellers. Late filing carries fees. The benefit is credit and customer acceptance. Decide with your customers and purchase profile in mind. | Duties start at once | REG-01 | SRC3; V | WA-11 | C2 |
| RP14 | What are the risks of the composition scheme? | You cannot collect GST from customers, cannot claim input credit and face restrictions on inter-state outward supplies. Business customers who need credit may prefer other suppliers. Eligibility limits apply, and losing eligibility has consequences. Check the conditions on the portal and use our comparison before opting. | Limits to verify | CMP-08 | SRC3; V | WA-11 | C1 |
| RP15 | Is it safe to share my Aadhaar OTP and documents with a CA? | Share OTPs only for the specific step being done, with the person present, and never forward them in bulk messages. Share documents on a channel you trust and ask what will be stored and for how long. Our team uses documents only for the filing you ask for. | Share OTP only live | REG-01 | Firm process; V | WA-01 | MP |

### 6.7 "Do I need this?" answers (15)

| ID | Question | Answer | Supporting detail | Form / portal | Source / verify | WA | Page |
|---|---|---|---|---|---|---|---|
| DN1 | Do I need GST registration for a small shop in Chennai? | Only if your turnover crosses the limit for your type of supply, or you fall in a compulsory category such as inter-state sales of goods or selling through an e-commerce operator. A small local shop below ₹40 lakh selling only inside Tamil Nadu may not need it yet, but suppliers sometimes ask for a GSTIN anyway. | Check the triggers | T1 | Fact sheet; V | WA-01 | A2 |
| DN2 | Do I need GST registration for a home-based business? | The place you work from does not decide it; your turnover and what you supply do. A home business below the limit and outside the compulsory categories may not need registration. If you sell to businesses that want GST invoices or sell on marketplaces, registering may still be sensible. | Address does not decide | T1 | SRC1; V | WA-11 | S4 |
| DN3 | Do I need GST registration as a freelancer? | A freelancer offering services must register once aggregate turnover crosses ₹20 lakh in Tamil Nadu, unless exempt for the specific service. Billing overseas clients may be an export of services, which has its own treatment. Many freelancers also register earlier when a corporate client asks for GST invoices. | Services limit | T1 | Fact sheet; V | WA-14 | MP |
| DN4 | Do I need GST registration if I sell online below the limit? | Possibly, yes. Selling goods through e-commerce operators generally calls for registration even below the limit, though a small seller within the conditions of a notification may use an enrolment number instead. Check where you sell, where stock is stored and whether you qualify before listing. | Marketplace triggers | Portal | Fact sheet; V | WA-07 | A1 |
| DN5 | Do I need GST registration if I sell only inside Tamil Nadu? | If you supply only goods inside Tamil Nadu and stay below ₹40 lakh, with no compulsory trigger, you may not need to register. If you sell services, the limit is ₹20 lakh. Selling through marketplaces or to other states changes the answer, so check your sales pattern. | Intra-state supplier | T1 | Fact sheet; V | WA-11 | S1 |
| DN6 | Do I need GST registration for inter-state sales? | For goods, inter-state taxable supply generally requires registration regardless of turnover, subject to exemptions. For services, an exemption from compulsory registration below the limit has applied, but confirm it for your case. Sending goods to a customer in another state is the usual trigger for small traders. | Goods vs services | REG-01 | Fact sheet; V | WA-01 | S1 |
| DN7 | Do I need GST registration to provide services to overseas clients? | Exports of services are treated as zero-rated if conditions are met, but the threshold question is separate: you must register once your aggregate turnover crosses the limit, and to claim zero-rated benefits you generally need a GSTIN. Whether your case qualifies depends on the conditions, so check them. | Export conditions | LUT, REG-01 | SRC3; V | WA-14 | C3 |
| DN8 | Do I need GST registration for job work? | Job workers supplying services must consider the services limit, and the registration position can differ from manufacturers sending goods outside the state. The rules for job work are specific, so look at whether you charge for processing and where goods move before deciding. Ask for a quick review. | Specific rules | REG-01 | SRC3; V | WA-10 | A4 |
| DN9 | Do I need GST registration if my services are exempt? | If every supply you make is exempt from GST, you generally do not need registration, but some exempt services still count toward other rules. Many professional and healthcare services have specific treatment, so check your services against the exemption list rather than assuming. | Check exemption list | REG-01 | SRC3; V | WA-01 | MP |
| DN10 | Do I need GST registration if I only buy and do not sell? | If you make no taxable supplies, you generally do not need registration. You cannot claim credit without being registered, and some purchases from unregistered sellers may carry reverse-charge duties that can require registration. Look at your purchase pattern and whether you will start selling soon. | Reverse charge exception | REG-01 | SRC3; V | WA-01 | C2 |
| DN11 | Does a new company with no sales need GST registration? | Not until it begins taxable supplies above the limit or falls into a compulsory category, but it can register early if it will soon need to invoice, claim credit on set-up costs or deal with inter-state customers. AGILE-PRO-S allows an application at incorporation. Registering early means return duties begin early. | Early means early duties | AGILE-PRO-S | Fact sheet; V | WA-08 | S2 |
| DN12 | Do I need GST registration to open a current account? | GST registration is not a legal requirement to open a current account, though some banks may ask for business proof, which can include a GSTIN, Udyam or other documents. Ask your bank for its list. Do not register only to open an account if you do not otherwise need it. | Bank lists differ | — | V | WA-01 | FAQ |
| DN13 | Do I need GST registration to get Udyam registration? | Udyam registration is a separate process that does not require a GSTIN in all cases, though turnover and investment details are collected from tax records for some businesses. Check the portal's current requirements. Many small businesses end up with both registrations over time. | Check Udyam portal | Udyam portal | SRC7; V | WA-11 | C4 |
| DN14 | Do I need a GST number to sell on a marketplace? | Marketplaces generally ask sellers of goods for GST details at onboarding, and registration is generally required for selling goods through an operator, with a limited enrolment route for some small intra-state sellers. Read your marketplace's seller policy and check your eligibility before you list. | Seller policy matters | Portal | Fact sheet; V | WA-07 | A1 |
| DN15 | Do I need GST registration for side income from a business? | Side income from a business is still business turnover. If your total aggregate turnover under your PAN crosses the limit, or a compulsory trigger applies, you need registration, whether or not you have a job. Salary does not count in aggregate turnover, but your business supplies do. | Salary excluded | T1 | SRC3; V | WA-11 | S1 |

### 6.8 Audience-specific answers (15)

| ID | Question | Answer | Supporting detail | Form / portal | Source / verify | WA | Page |
|---|---|---|---|---|---|---|---|
| AU1 | How does a new shop owner in Chennai get GST registration? | Decide whether you need it, collect PAN, Aadhaar, photographs, bank proof and the premises documents, then file REG-01 on the GST portal. For a rented shop, the lease and the owner's ownership proof are the key documents, so match names early. Send us a photo of your lease on WhatsApp for a quick check. | Lease and bill | REG-01 | SRC1; V | WA-01 | A2 |
| AU2 | How does a Meesho or Instagram reseller get GST registration? | Check whether you sell through an e-commerce operator, which generally calls for registration, or only on social media, which follows the normal threshold. Then file with PAN, Aadhaar, address proof and bank details. A home address can work with the right proof. Tell us where you sell and where stock is kept. | Check sales channel | REG-01 | Fact sheet; V | WA-07 | A1 |
| AU3 | When should a startup founder register for GST? | When the company will start taxable sales, has inter-state supply of goods, or needs credit on large purchases. A company can apply at incorporation through AGILE-PRO-S or later on the portal. Registering too early starts return duties before income, so match the date to the first invoice. | Match first invoice | AGILE-PRO-S | Fact sheet; V | WA-08 | S2 |
| AU4 | How does a freelancer in Chennai register for GST? | A freelancer registers as a proprietor with PAN, Aadhaar, address proof and bank details, once aggregate turnover crosses ₹20 lakh or earlier by choice. Overseas clients may be zero-rated exports, which also need a GSTIN. We can check your billing and date it for you. | Services limit | REG-01 | Fact sheet; V | WA-14 | MP |
| AU5 | How does a small manufacturer register for GST? | The unit registers with PAN, Aadhaar, proof of the factory or shed address, bank details and HSN codes for products. Inter-state buyers usually make registration necessary regardless of turnover. A leased shed needs the owner's proof and a matching lease. Send your HSN list and lease for review. | Factory address proof | REG-01 | SRC1; V | WA-10 | A4 |
| AU6 | How does a partnership firm register for GST? | The firm applies with its PAN, partnership deed, partners' PAN and Aadhaar, an authorised-signatory letter, address proof and bank details. Each partner may need to authenticate, so check availability. A deed that is outdated or missing key clauses can create queries. Send us the deed for a check. | Deed currency | REG-01 | SRC2; V | WA-09 | A5 |
| AU7 | How does an LLP register for GST? | The LLP applies with its PAN, certificate of registration, LLP agreement, designated-partner details, signatory authorisation, address proof and bank details, signing with a digital signature. Registering at the time the LLP starts taxable sales is usual. We can coordinate the DSC and filing together. | DSC needed | REG-01 | SRC2; V | WA-09 | A5 |
| AU8 | How does an NRI register for GST for a business in Tamil Nadu? | The NRI uses an Indian PAN, passport details, Indian business address proof and bank account, and may name an authorised signatory in India. Authentication from abroad and overseas document formalities are the main hurdles. We onboard NRIs by video call. Tell us your country, PAN status and business plan. | Video onboarding | REG-01 | SRC1; V | WA-04 | A3 |
| AU9 | How does a foreign company register for GST in India? | A foreign company supplying into India registers as a regular or non-resident supplier depending on whether it has a fixed business place, using passport details of the signatory, incorporation papers (apostilled or consularised), an Indian representative or address and a deposit where applicable. Seek advice before supplying. | Category decides | REG-01 | Fact sheet; V | WA-05 | A3 |
| AU10 | How does an exporter get GST registration? | An exporter registers like any supplier, with PAN, Aadhaar, address proof, bank details and HSN or SAC codes, and then files a Letter of Undertaking to export without paying integrated tax upfront. An IEC is also needed to export goods. Registration comes first; LUT follows. | Then LUT and IEC | REG-01 | Fact sheet; V | WA-06 | C3 |
| AU11 | How does a restaurant or cafe owner get GST registration? | Check the threshold and your service type, then file with PAN, Aadhaar, premises proof and bank details. An FSSAI licence is separate and usually needed at the same time. For a rented premises, the lease and owner's proof must match. Send both and we will check them. | FSSAI separate | REG-01 | SRC1; V | WA-01 | A2 |
| AU12 | How does a home baker or boutique owner decide on GST registration? | Check your turnover, whether you sell through marketplaces, and whether customers need GST invoices. Many home businesses are below the limit and outside compulsory categories, so registration may be optional, but a food business needs an FSSAI licence regardless. Use the threshold checker, then ask us. | FSSAI is separate | T1 | SRC1; V | WA-11 | S1 |
| AU13 | How does a contractor get GSTIN for a tender in Chennai? | Check what the tender asks: a valid GSTIN, a registered constitution and signatory documents. File the application with the firm, LLP or company details, the authorisation for the signatory and premises proof. Start well before the tender closing date, since no one can guarantee approval timing. | Start early | REG-01 | SRC1; V | WA-06 | P5 |
| AU14 | Can a student or young entrepreneur register for GST? | Yes, if they are an adult individual with PAN and Aadhaar and a business address, whatever their age or occupation. Registration depends on turnover and supply type, not on being a student. If the business is below the limit, registration is optional unless a trigger applies. Check before registering. | Age is not the test | REG-01 | SRC1; V | WA-11 | T1 |
| AU15 | How does an Instagram or WhatsApp seller decide on GST registration? | Social-media sales follow the normal threshold, plus compulsory triggers such as inter-state supply of goods. Selling only inside Tamil Nadu below ₹40 lakh may not need registration, but dispatching goods to other states may. Check your delivery pattern and ask if unsure. | Delivery pattern | T1 | Fact sheet; V | WA-07 | A1 |

---

## 7. GEO / local AI visibility plan

Facts used: the firm's only office is in Anna Nagar; every other location is served online and says so. GBP currently shows 4.8 stars and 58 reviews (seen 2 Nov 2026). The rating and count stay off the website and out of schema. Everything below is GBP-side or on-page; none of it needs a new URL.

### 7.1 GBP checklist (do in this order)

| # | Action | Detail | Owner | Done when |
|---|---|---|---|---|
| 1 | Fix opening hours | Replace "Open 24 hours" with Mon–Sat 9:30 AM–6:30 PM, Sunday closed. Shared action with plans 01, 02, 16 | Marketing lead | Hours show correctly on Maps and Search |
| 2 | Confirm name, address, phone | Exactly as on the website footer: C S Rushil & Co., Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai - 600040; +91 72001 49711 | Marketing lead | Matches site and schema |
| 3 | Primary and secondary categories | See 7.2 | CA Rushil C S | Categories saved |
| 4 | Add GST registration services | See 7.3 | Marketing lead | 6 services listed with descriptions |
| 5 | Business description | See 7.4 | Marketing lead | Saved |
| 6 | Appointment link | https://calendly.com/ceo-csrushil/30min | Marketing lead | Link live |
| 7 | WhatsApp link | `wa.me/917200149711` as the chat option if offered | Marketing lead | Works on mobile |
| 8 | Attributes | See 7.5 | Marketing lead | Saved |
| 9 | Photos | See 7.6 | Marketing lead | Minimum set uploaded |
| 10 | Posts | 3 per week, calendar 7.8 | Marketing lead | Scheduled 4 weeks ahead |
| 11 | Q&A seeds | See 7.9 | Marketing lead | 8 questions answered by the owner |
| 12 | Reviews | Ask every client, never incentivise, never write or edit; template 7.10 | Account managers | Request sent at the right moment (7.10) |
| 13 | Monitor | Weekly insights export into the dashboard (Section 12) | Marketing lead | Weekly |

### 7.2 Categories

| Slot | Proposed category | Note |
|---|---|---|
| Primary | Chartered accountant | Confirm the exact label in the GBP dashboard before saving |
| Secondary | Tax consultant; Accounting firm; Business management consultant | Confirm availability. Do not add categories the firm cannot support (for example "Company secretary") |
| Do not use | Any "agent" or "agency" label that suggests an unregulated filing shop | ICAI style |

### 7.3 GBP services (GST registration set)

Descriptions are under 300 characters, carry no fees and no promises. Use the same wording on the site for consistency.

| Service name | Description |
|---|---|
| GST registration | CA-led GST registration in Chennai: applicability check, documents review, REG-01 filing on the GST portal, ARN follow-up and certificate check. Message us on WhatsApp or book a 15-minute consultation. |
| GST registration for online sellers | Help for Amazon, Flipkart, Meesho and website sellers: whether registration or an enrolment number applies, address proof, stock locations and filing. |
| GST registration for companies and LLPs | GST registration for new and existing companies and LLPs, including the choice between applying at incorporation and applying later, signatory documents and registered-office proof. |
| Voluntary GST registration | For businesses below the threshold that want a GSTIN for customers, marketplaces or input credit, with a clear view of the duties that follow. |
| GST registration amendments | Updating address, additional places of business, signatory or contact details on an existing GST registration. |
| GST registration for NRIs and foreign businesses | Registration support for NRIs and overseas suppliers, by video call, including document and authentication planning. |

### 7.4 Business description (under 750 characters)

"C S Rushil & Co. is a Chartered Accountants' firm in Anna Nagar, Chennai, led by CA Rushil C S, with a team of 16. We help businesses with GST registration, GST return filing, company and LLP formation, income tax, accounting and compliance. We serve Chennai in person and the rest of Tamil Nadu and India online. For GST registration, we check whether you need it, review your documents, file on the GST portal and follow up on any query. Message us on WhatsApp at +91 72001 49711 or book a 15-minute consultation. Open Monday to Saturday, 9:30 AM to 6:30 PM." (about 560 characters)

### 7.5 Attributes

| Attribute | Set |
|---|---|
| Online appointments | Yes (video call consultations) |
| Identifies as | Leave blank unless the firm chooses to |
| Wheelchair accessible entrance, parking | Set only after the team confirms facts; do not guess |
| Languages | English, Tamil (confirm with the team) |
| Service options | Online services; on-site by appointment (confirm) |

### 7.6 Photo and video plan

Real images only. No stock people. No client documents, no screens showing client data.

| Asset | Count | Note |
|---|---|---|
| Exterior and signage at Anna Nagar | 2 | Helps walk-in clients find the office |
| Reception and meeting room | 3 | |
| CA Rushil C S at work (with consent) | 2 | |
| Team photo (with consent) | 1 | |
| Short vertical video: "3 documents people forget for GST registration" | 1 per month | Same video as the Instagram/Reel in Section 11; no claims |
| Process graphic (the 5 steps) | 1 | Made from the site graphic; alt text in 5.15 |

### 7.7 Chennai landing strategy and TN city page strategy

| Layer | Strategy |
|---|---|
| Chennai | One money page (MP). Chennai area terms are handled by a coverage block on MP and by one section each on five existing area pages (L1–L5). No "GST registration in <area>" pages are created |
| Existing area pages | L1 Anna Nagar (office, walk-in), L2 T. Nagar (traders), L3 Ambattur (MSME units), L4 OMR/Sholinganallur (IT and services), L5 Porur (new retail, home sellers). Each section names real local business types, links to MP, never copies MP text |
| Tamil Nadu cities | Coverage block on MP says "served online" and lists the cities. No city page for GST registration |
| When a new city page is justified | Only when (a) Search Console shows 100 or more impressions in 90 days for one city query, and (b) the firm can add distinct local content not on MP, for example a named local industry cluster, local jurisdiction details checked on SRC6, or a real client story with consent. Until then, no page. Recorded as a rule so the team does not drift into doorways |
| Candidate cities if the rule is met | Tiruppur (garment and export), Coimbatore (pumps, foundry, MSME), Hosur (border with Karnataka, inter-state) |

### 7.8 Weekly GBP post calendar (3 posts per week, 13 weeks)

Every post: one image or short video (real), one CTA button (Learn more to the page, or WhatsApp), 100–250 words, no fees, no ratings, no promises, no "free" until the firm clears it.

| Week | Post 1 | Post 2 | Post 3 |
|---|---|---|---|
| 1 | GST registration in Chennai: what we check first (MP) | Three documents people forget (T2) | Is GST compulsory for your shop? Try the threshold checker (T1, ship week 3: use S1 link until then) |
| 2 | New shop? Lease and electricity bill must match (S4) | Online seller: registration or enrolment? (A1) | Office hours reminder and WhatsApp number |
| 3 | Threshold checker is live (T1) | Just incorporated? Do you need GST now? (S2) | Voluntary vs compulsory registration (C2) |
| 4 | Address proof for home sellers (S4) | HSN or SAC: choose carefully (S5) | Application pending? Check the ARN (P3) |
| 5 | Regular vs composition at a glance (C1) | Query raised on your application? What to do (P1) | GST registration for partnership firms and LLPs (A5) |
| 6 | NRI starting a business in Tamil Nadu (A3) | Manufacturer in Ambattur: GST and HSN (A4, L3) | Document checklist tool (T2) |
| 7 | Crossed the limit? Work out the date first (P2) | GST vs Udyam registration (C4) | After you get GSTIN: first 30 days (S7) |
| 8 | Central or state: who administers your GST? (S8) | Additional place of business (S6) | Self-filing or CA-assisted: how to decide (C5) |
| 9 | Need a GSTIN for a tender or marketplace (P5) | Aadhaar authentication stuck (P3) | Case-study teaser (only if consented) or FAQ of the week |
| 10 | GST registration vs LUT for exporters (C3) | Wrong details in your registration (P4) | T. Nagar traders: GST and address proof (L2) |
| 11 | OMR freelancers: when to register (L4, S1) | Regular vs composition checker (T3) | Porur new shops and home sellers (L5, A2) |
| 12 | Process and timeline explainer (PROC) | FAQ of the week: documents (FAQ) | Reminder: we serve all Tamil Nadu online |
| 13 | Summary of what we learned this quarter (no claims) | Seasonal: new financial-year registrations (V for any date claim) | Review the 3 best-performing posts and repeat the format |

### 7.9 GBP Q&A seeds (owner-posted, answered by the owner)

| Question | Answer (under 300 characters, no fees) |
|---|---|
| Do you help with GST registration for new businesses? | Yes. We check whether you need it, review your documents, file REG-01 on the GST portal and follow up on any query. Message us on WhatsApp at +91 72001 49711. |
| Do I need to visit the office? | Not necessarily. The application is filed online, so we work by WhatsApp, phone and video call. Our office is in Anna Nagar, open Mon–Sat 9:30 AM–6:30 PM. |
| What documents should I keep ready? | Usually PAN, Aadhaar, photograph, address proof, bank details and constitution papers. The exact set depends on your business type; our checklist tool on the website shows it. |
| Do you serve businesses outside Chennai? | Yes, across Tamil Nadu and India, online. Our only office is in Anna Nagar. |
| Can you help if my GST application got a query? | Yes. Send us the notice and your documents on WhatsApp and we will tell you what a complete reply needs. |
| Do you handle GST returns after registration? | Yes, we can take on return filing and bookkeeping; see the GST return filing service. |
| Can NRIs register for GST through you? | Yes, by video call. Tell us your country, PAN status and business plan. |
| What are your office hours? | Monday to Saturday, 9:30 AM to 6:30 PM. Closed on Sunday. |

### 7.10 Review-request WhatsApp message (under 500 characters) and timing

Ask after the GSTIN certificate has been delivered and the client has confirmed receipt. Never ask during a pending query. Never offer anything in return. Never write or edit the review.

> "Hello [Name], your GST registration for [Business] is complete. If you were happy with how we handled it, an honest review on Google would help other business owners find us. This is the link: [Google review link]. It is entirely optional. Thank you. C S Rushil & Co., Anna Nagar."

(about 330 characters; WA-R1)

Follow-up reminder allowed once, after 10 days (WA-R2): "Hello [Name], a gentle reminder in case you have a minute for the Google review. No pressure at all. Thank you."

### 7.11 Review-response templates

Public replies never confirm that someone is a client or mention matters. They stay general, polite and under 60 words.

| Review type | Template |
|---|---|
| Positive | "Thank you for taking the time to write this. We are glad the process was clear. If you have further questions about compliance, message us on WhatsApp at +91 72001 49711." |
| Neutral or mixed | "Thank you for the feedback. We would like to understand more so we can improve. Please contact us on +91 72001 49711 or admin@csrushil.com." |
| Negative | "We are sorry to read this. We take it seriously and would like to look into it. Please contact us on +91 72001 49711 or admin@csrushil.com so we can review the details privately." |
| Fake or spam | Report through GBP; do not reply with details |

### 7.12 NAP and citation checklist

| Listing | Check | Note |
|---|---|---|
| Website footer and contact page | Name, full address, phone, email, hours identical to GBP | Fix first |
| Schema (Accountant) | Same NAP and hours | No rating |
| ICAI member/firm directory entry | Complete and consistent once the firm supplies the membership number | Authoritative professional citation |
| Justdial, Sulekha, IndiaMART-style directories (internal analysis; choose only those the firm already uses) | Same NAP; same categories | Do not buy bulk citations |
| LinkedIn company page | NAP, services, link to MP | |
| Instagram, Facebook, YouTube | Bio carries phone and website | |
| Chennai business associations (see 7.14) | Member listing if the firm joins | |
| MSME and startup networks | Listing only where the firm is a genuine member | |

### 7.13 Directory strategy

Quality over count. Rule: list on a directory only if it is (a) a real directory for Indian professionals or Chennai businesses, (b) free of paid-link schemes, and (c) consistent with NAP. Review the list quarterly and remove duplicates.

### 7.14 Local link ideas and PR

| Idea | Why it earns a link | Owner |
|---|---|---|
| Chennai traders' or MSME association newsletters: a short, factual "GST registration: the three address documents" guide | Useful to members; links to S4 or T2 | CA Rushil C S |
| Startup incubators and coworking spaces in Chennai | Founders ask the same GST question after incorporation; link to S2 | Marketing lead |
| College entrepreneurship cells | Student founders; link to T1 | Marketing lead |
| Local business news: expert comment on a GST change (with correct, current facts) | Quotes carry the firm name | CA Rushil C S |
| ICAI Chennai branch events: speaking or participating | Professional visibility; check ICAI rules on publicity before any promotion | CA Rushil C S |
| Marketplace seller communities: practical Q&A, not promotion | Genuine help; link only when asked | Marketing lead |

### 7.15 Local proof points (usable on site and GBP)

| Proof point | Use | Condition |
|---|---|---|
| Only office in Anna Nagar, open six days | Trust line | Confirm hours first |
| CA Rushil C S, practising CA; FAFD certificate; Start-up Mentor | About and trust line | As in fact sheet |
| Team of 16, founded 2024 | Trust line | As in fact sheet |
| Documented checklist-driven process | Process section | Based on this plan |
| Consented case study | Proof page | Only with written consent |
| ICAI membership number | Footer, schema | Once the firm supplies it |

### 7.16 30 local queries

| # | Query | Best page | Local angle | GBP action | Internal links | CTA | Review or proof signal needed |
|---|---|---|---|---|---|---|---|
| 1 | gst registration in chennai | MP | Chennai-wide, CA-led | Primary service listed | S3, T2 | WhatsApp | Reviews that mention GST registration (organic only) |
| 2 | gst registration near me | MP | Anna Nagar office | Post with address and hours | L1 | Call | Photos of the office |
| 3 | gst consultant anna nagar | L1 | Walk-in on 13th Main Rd | Post about the office | MP | Call | Review mentioning Anna Nagar (organic) |
| 4 | ca for gst registration chennai | MP | Chartered accountant | Category | C5 | WhatsApp | ICAI number on site |
| 5 | gst registration t nagar | L2 | Traders and retail | Post for traders | A2 | WhatsApp | One local proof point |
| 6 | gst registration ambattur | L3 | Industrial estate units | Post for MSMEs | A4 | WhatsApp | One local proof point |
| 7 | gst registration omr | L4 | IT and service businesses | Post for freelancers | S1 | WhatsApp | One local proof point |
| 8 | gst registration porur | L5 | New retail, home sellers | Post | A2, A1 | WhatsApp | One local proof point |
| 9 | gst registration velachery | MP | Coverage list | Coverage mention in post | MP | WhatsApp | None extra |
| 10 | gst registration tambaram | MP | Coverage list | Coverage mention | MP | WhatsApp | None extra |
| 11 | gst consultant adyar | MP | Coverage list | Coverage mention | MP | WhatsApp | None extra |
| 12 | gst registration for new shop chennai | A2 | Lease and bill mismatch | Post with S4 link | S4, T2 | WhatsApp | Checklist graphic |
| 13 | gst registration for online sellers chennai | A1 | Home sellers in Chennai | Post | ECOM, AMZ | WhatsApp | Seller checklist |
| 14 | gst registration after company incorporation chennai | S2 | ROC Chennai and registered office | Post | PVT, HUB | Book | Link from PVT and HUB |
| 15 | gst registration for partnership firm chennai | A5 | Deed and signatory | Post | PF | WhatsApp | Document table |
| 16 | gst registration for llp chennai | A5 | LLP agreement, DSC | Post | LLP, DSC | WhatsApp | Document table |
| 17 | gst registration for manufacturers chennai | A4 | Ambattur, Guindy, Kanchipuram belt | Post | MANU | WhatsApp | HSN worksheet |
| 18 | gst registration for freelancers chennai | MP | OMR freelancers | Post | FRLNC | WhatsApp | T1 |
| 19 | gst registration for nri chennai | A3 | NRI with family premises in Chennai | Post | NRI | Book | Document list |
| 20 | gst registration documents chennai | T2 | Chennai premises variants | Post | MP | WhatsApp | Tool usage |
| 21 | gst address proof rented shop chennai | S4 | Lease plus owner proof | Post | A2 | WhatsApp | Checklist |
| 22 | gst registration rejected chennai | P1 | Hand-off to notice support | Q&A | NOTICE | WhatsApp | Triage list |
| 23 | gst registration pending chennai | P3 | ARN status | Q&A | S3 | WhatsApp | Fix list |
| 24 | crossed gst limit chennai | P2 | Late registrants | Post | T1 | WhatsApp | Tool |
| 25 | gst threshold tamil nadu | S1 | TN limits | Post | T1 | Tool | Table |
| 26 | gstin urgent chennai | P5 | Marketplace and tender | Post | MP | Call | Honest-urgency page |
| 27 | gst registration cost chennai | PROC | Government fee and scope | Q&A | MP | WhatsApp | No fee figure |
| 28 | gst registration online tamil nadu | MP | Online across TN | Post | PROC | WhatsApp | Coverage block |
| 29 | ஜிஎஸ்டி பதிவு சென்னை (GST pathivu Chennai) | MP | Tamil summary box | Tamil post | MP | WhatsApp | Tamil summary |
| 30 | gst registration voluntary chennai | C2 | Small Chennai businesses | Post | T1 | WhatsApp | Comparison table |

---

## 8. Technical SEO and schema plan

Applies to MP, the 3 upgraded posts, the 23 new blog posts, 3 tools, FAQ hub, PROC and CASE. The site is Next.js (App Router). Blog posts live in `src/content/blog/<slug>.tsx` and are registered in `src/lib/blog.ts` (`BLOG_INDEX` and the lazy import map). `isPublished(date)` hides a post until its date, so set real dates for the drip.

### 8.1 Checklist

| Area | Rule for this plan | Check |
|---|---|---|
| Canonical | Self-referencing canonical on every page. MP stays `/gst-registration-chennai`. Tool pages canonical without query strings (the T1 and T2 result states must not create indexable URLs) | View source on each new URL |
| Titles | Unique, 60 characters or fewer (Section 4.1; verified by script in 14.2). Primary keyword first for MP and tools | Crawl export |
| Meta descriptions | Unique, 155 characters or fewer, with a next action where it fits | Crawl export |
| Headings | One H1 per page, matching Section 4.1. H2s follow the outline in 4.2. No skipped levels | Crawl export |
| Images | Real photos or the site's own graphics. Alt text per 5.15. WebP/AVIF, `width`/`height` set, lazy-load below the fold, hero image not lazy | Lighthouse |
| Internal links | Plan in 5.14 and 4.3. Descriptive anchors. No orphan: every new URL has at least 3 inbound links from this plan's pages plus one from a link-only owner where agreed (GSTHUB, GSTRET) | Link report |
| Mobile UX | Sticky bottom bar with WhatsApp and Call. Tables scroll inside their container, not the page. Tap targets 44px or larger. Forms: 7 fields at most on first screen | Real-device test |
| Speed / CWV | Tools are client-side with small bundles; no third-party widget in the hero; Instagram embed in S1 loads on interaction (lazy) | PSI and field data |
| Crawlability | All new URLs reachable from MP or the FAQ hub within 2 clicks. Tools linked from relevant posts | Crawl |
| Indexation | Index: MP, posts, tools, FAQ hub, PROC. Noindex: CASE until consent, tool result states, any thank-you page | Search Console URL Inspection |
| Sitemap | Add all new indexable URLs when published. Exclude CASE. Do not list future-dated posts before their date (the site gates them) | `/sitemap.xml` check |
| robots.txt | No new blocks. Keep AI crawlers allowed unless the firm decides otherwise | Check file |
| Redirects | No changes to MP. If any slug in 4.1 is renamed before publishing, add a 301 and update links. Plans 01 and 02 link to the S2 slug: do not rename it | Redirect test |
| Duplicates | MP FAQ text is not reused as the FAQ hub text (Section 5.11 vs Section 6.1). AEO answers on a page appear once on that page | Copy diff |
| URLs | Lowercase, hyphenated, no dates, no parameters | Crawl |
| Breadcrumbs | MP: Home → Goods and Services Tax → GST Registration in Chennai (`parentCrumb`). Posts: Home → Blog → Title. Tools: Home → Tools → Title | Visual + schema |
| Page dates | Update `src/lib/page-dates.ts` entry for MP and any new standalone page; blog dates in `blog.ts` | Diff |

### 8.2 Schema rules

Only mark up what is visible. JSON-LD only. No fake or borrowed reviews. No `aggregateRating`. No price.

| Type | Where | Rule |
|---|---|---|
| Service | MP, PROC | `serviceType`, `areaServed`, `provider`; no `offers` |
| FAQPage | MP (24 FAQs), FAQ hub (30), and blog posts that carry visible FAQ blocks | Same question never marked up on two pages. Text identical to visible text |
| BreadcrumbList | Every page | Matches visible trail |
| HowTo | MP (existing helper), S3, PROC | Steps match visible steps. Only where a step list is genuinely shown |
| BlogPosting | All posts | `headline`, `datePublished` (only after `isPublished`), `dateModified`, `author` (CA Rushil C S as Person with `sameAs` to LinkedIn), `publisher` |
| Accountant / ProfessionalService | Site-wide | NAP and hours from 7.1; no rating; `sameAs` to LinkedIn; add ICAI membership number as plain text once supplied |
| WebApplication | T1, T2, T3 | `applicationCategory: "BusinessApplication"`, free to use (no price shown), operating system "Any" |
| Article | CASE | Not Review. noindex until consent |
| Speakable | Intro and first FAQ of MP | Existing helper |
| Review / aggregateRating | Nowhere | ICAI and Google self-serving review rules |

### 8.3 Validation

| Step | Tool | Frequency |
|---|---|---|
| Rich Results Test and Schema Markup Validator | Google tools | Before publishing each page type, then after template changes |
| Search Console: Enhancements (FAQ, Breadcrumbs), Pages, Performance | GSC | Weekly in the first 13 weeks |
| URL Inspection on each new URL | GSC | On publish day |
| Mobile and desktop CWV | PSI plus CrUX | Weekly for MP, monthly for others |
| Link check (internal and external SRC links) | Crawl | Monthly |

### 8.4 Implementation notes specific to this plan

| Item | Note |
|---|---|
| FAQ markup on posts | S2 already supports `faqs` in post meta. Add `faqs` to the S1 and A1 posts so the schema renders |
| Post dates | Set the S2 date earlier than 2027-01-08 (see 1.1); the new posts can follow the calendar in Section 10 |
| Tools route | `src/app/tools/<slug>/page.tsx` does not exist yet. Plan 01 proposes `/tools/*` too: agree one shared layout and the `/tools` index once |
| Case-study route | `src/app/case-studies/...` does not exist yet; plan 01 and plan 02 use the same template. Build once |
| FAQ route | `/faq` exists as a single page. `/faq/gst-registration` needs a nested route, which plan 02's `/faq/private-limited-company` also needs: build once |
| Config for tools | One `gst-config.ts` with thresholds and `verifiedOn`; tool pages read it; label rendered next to every figure until sign-off |
| Analytics | GA4 events: `whatsapp_click`, `call_click`, `form_submit`, `booking_click`, plus `tool_result` with the result type (no personal data). UTM template in Section 12 |

---

## 9. Conversion system

Every item avoids fees, ratings, superlatives, guarantees and turnaround promises. "15-minute consultation" is used in site copy; "free" is held for the firm's ICAI check.

### 9.1 Five headlines (A/B candidates for the MP H1 area or a banner)

| # | Headline |
|---|---|
| H1 | GST Registration in Chennai, Filed Correctly the First Time |
| H2 | Do You Need GST Registration? Find Out Before You File |
| H3 | Your GSTIN, Without the Address-Proof Guesswork |
| H4 | GST Registration for Chennai Businesses: Documents, Filing, Follow-Up |
| H5 | From First Sale to GSTIN: A CA-Led Process |

### 9.2 Five subheadlines

| # | Subheadline |
|---|---|
| SH1 | We check whether you must register, review your documents and file REG-01 on the GST portal. |
| SH2 | Send your documents on WhatsApp. We tell you what is missing before you file. |
| SH3 | CA-led, with an office in Anna Nagar and online support across Tamil Nadu. |
| SH4 | Query on your application? We prepare the reply with the right documents. |
| SH5 | Registration is only the start. Our team can carry on with return filing. |

### 9.3 Five WhatsApp CTAs (button or link text)

| # | CTA |
|---|---|
| W1 | WhatsApp Us |
| W2 | Send Your Documents on WhatsApp |
| W3 | Ask About Your Case on WhatsApp |
| W4 | Check My Address Proof on WhatsApp |
| W5 | WhatsApp the Rejection Order |

### 9.4 Five consultation CTAs

| # | CTA |
|---|---|
| B1 | Book 15-Minute Consultation |
| B2 | Talk to a Chartered Accountant (15 minutes) |
| B3 | Book a Video Call (for NRIs and outside Chennai) |
| B4 | Check Your GST Position in 15 Minutes |
| B5 | Book a Call About My Application |

### 9.5 Trust bar (one row under the hero)

| Item | Text |
|---|---|
| 1 | CA-led: CA Rushil C S, practising Chartered Accountant |
| 2 | ICAI member firm (add membership number when supplied) |
| 3 | Team of 16, founded 2024 |
| 4 | Office in Anna Nagar, Chennai, open Mon–Sat |
| 5 | WhatsApp-first, online across Tamil Nadu |

### 9.6 Objection blocks (placed as short accordion items near the CTA)

| Objection | Response (no figures, no promises) |
|---|---|
| Is this expensive? | We do not publish professional fees on this website, in line with ICAI guidelines. After a short conversation about your constitution, premises and supply, we share the scope and our charges in writing. Government fee: check gst.gov.in (V). The costlier outcome is usually a rejected or queried application that has to be refiled. |
| Can I do it myself? | Yes, you can apply on the GST portal yourself. Straightforward cases with matching documents often go through. Applications stall most on address proof, Aadhaar authentication and mismatched names. If any of these apply to you, a document check before filing is worth having. If not, our checklist tool may be enough. |
| How long will it take? | It depends on the department's processing, authentication and whether an officer raises a query. We do not promise a date. What we can do is file a complete application with matching documents and track the ARN until the certificate is issued. |
| Will my data be safe? | You share documents and OTPs only for the filing you ask for. Share an OTP only when we are filing in front of you. [Firm to confirm and write the real storage, access and deletion practice before this block goes live.] |
| Why not a cheaper consultant? | Compare scope, not only price: who replies if the officer raises a query, who is accountable, and whether the same team can carry on with returns. We are chartered accountants with a documented process, and we say plainly what we cannot promise. |
| What if my case is complicated? | Tell us the facts: constitution, premises, states of supply, turnover, any earlier application or notice. We will say whether it is a normal registration, an amendment, a late-registration case or something to hand to our notice or litigation team. |

### 9.7 Lead magnets (five)

| # | Lead magnet | Format | Built on | Capture |
|---|---|---|---|---|
| LM1 | GST registration document checklist by business type | Interactive and downloadable PDF | T2 | WhatsApp number optional; no gate on the on-screen result |
| LM2 | GST threshold checker | Calculator | T1 | Result visible without capture; WhatsApp button for review |
| LM3 | Deadline tracker (registration window and first-30-days list) | Checklist PDF | S7, P2 | Optional email or WhatsApp |
| LM4 | Address-proof letter template (consent letter and lease checklist) | Document template | S4 | Optional capture |
| LM5 | Eligibility quiz: registration, composition or neither | Quiz | T3 | Result visible; WhatsApp to discuss |

Template text for LM4 must be reviewed by the firm before release; it is a draft the user adapts, not legal advice.

### 9.8 Form fields

| Field | Required | Note |
|---|---|---|
| Name | Yes | |
| WhatsApp number | Yes | Used for the reply |
| Email | No | |
| Business activity (what you sell or do) | Yes | One line |
| Location (city, area) | Yes | |
| Service needed | Yes | Prefilled: GST registration |
| Urgency | Yes | Options: this week, this month, just exploring |
| Turnover so far this year (optional) | No | Range options |
| Constitution (optional) | No | Proprietorship, partnership, LLP, company, other |
| Notice or query type (optional) | No | Query on application, rejection, none |
| Deadline (optional) | No | Date field |

Consent line under the form: "By submitting, you agree we may contact you on WhatsApp or phone about this enquiry." Link to the privacy policy.

### 9.9 WhatsApp pre-filled messages

These are the texts a visitor sends. All are under 500 characters; each ends with one question or placeholder for the detail we need. The reply flow (Section 9.10) adds the single qualifying question and next step.

| Code | Use | Message |
|---|---|---|
| WA-01 | New registration (default) | Hi C S Rushil & Co., I want to register my business for GST in Chennai. Business: ______ (shop / service / online seller / company). Goods or services: ______. Could you tell me what documents to send first? |
| WA-02 | Crossed or near the limit | Hi C S Rushil & Co., my sales may have crossed the GST limit and I am not registered. Goods or services: ______. Approximate total sales so far this year: ______. What should I do first? |
| WA-03 | Query or rejection | Hi C S Rushil & Co., my GST registration application got a query / was rejected. ARN: ______. Reason shown: ______. Can you review it? I can send the notice and my documents here. |
| WA-04 | NRI | Hi C S Rushil & Co., I am an NRI in ______ planning a business in Tamil Nadu and need GST registration. I have / do not have an Indian PAN and Aadhaar. Can we speak on a video call? |
| WA-05 | Foreign company | Hi C S Rushil & Co., our company in ______ supplies goods / services into India and needs to understand GST registration. We have / do not have a place of business in India. Who can we speak to? |
| WA-06 | Urgent GSTIN | Hi C S Rushil & Co., I need a GSTIN for ______ (marketplace / tender / customer) by ______. Business type: ______. I understand no one can promise a date. What can we prepare today? |
| WA-07 | Online seller | Hi C S Rushil & Co., I sell on ______ (Amazon / Flipkart / Meesho / own site) from Chennai. Stock is kept in ______. Do I need GST registration or an enrolment number? |
| WA-08 | New company | Hi C S Rushil & Co., our company was incorporated on ______. We plan to start sales in ______. Should we apply for GST now or later? Registered office is owned / rented. |
| WA-09 | Partnership or LLP | Hi C S Rushil & Co., we are a partnership firm / LLP with ______ partners and need GST registration. Our deed / LLP agreement is dated ______. Which documents do you need from us? |
| WA-10 | Manufacturer or inter-state | Hi C S Rushil & Co., I run a small unit in ______ and supply goods to customers in ______. Premises are owned / leased. Do I need GST registration, and how should I choose my HSN? |
| WA-11 | Small business unsure | Hi C S Rushil & Co., I run a small business (______) from ______ with yearly sales of about ______. Do I need GST registration, or is composition or staying unregistered possible? |
| WA-12 | Address proof | Hi C S Rushil & Co., I want to check my address proof for GST registration. Premises are owned / rented / shared / home, in the name of ______. I can send the lease and bill. Will they work? |
| WA-13 | Authentication or pending | Hi C S Rushil & Co., my GST application ARN ______ is pending / stuck at Aadhaar authentication since ______. Can you check what is missing? |
| WA-14 | Freelancer | Hi C S Rushil & Co., I am a freelancer in Chennai billing about ______ this year, with some clients abroad / in India. Do I need GST registration now? |
| WA-15 | Tamil | வணக்கம், ஜிஎஸ்டி பதிவு தேவையா என்று தெரிந்து கொள்ள விரும்புகிறேன் (Vanakkam, GST pathivu thevaiyaa endru therindhu kolla virumbugiren). தொழில்: ______, இடம்: ______. |

### 9.10 Follow-up sequence (WhatsApp, with email where an address is given)

Each message is under 500 characters, has one question or one next step, no guarantees and no pressure. Send only to people who contacted us. Stop on any "stop" or "not now" reply.

| Step | Timing | Message |
|---|---|---|
| S0 Instant auto-reply | Immediately (office hours); out of hours: next working morning | "Thank you for messaging C S Rushil & Co. We have your message about GST registration and a chartered accountant will reply during office hours (Mon–Sat, 9:30 AM–6:30 PM). Meanwhile, you can use our document checklist: [T2 link]." |
| S1 Qualifying reply | Same working day | "Thank you. To point you correctly: do you sell goods, services or both, and roughly what are your sales this year? Once I know, I will tell you whether registration applies and what to send." |
| S2 Consultation invite | After the reply, if the case needs a call | "Based on what you shared, a short call will save time. You can book a 15-minute consultation here: [Calendly link]. If you prefer, reply with a good time and we will call you." |
| S3 Day 1 | 24 hours after the last message if no reply | "Hello, just checking whether you could share your business type and address proof, so we can confirm what to prepare for GST registration. A photo of your lease or electricity bill is enough to start." |
| S4 Day 3 | 3 days after | "Hello, a short note in case this got buried: if you are still deciding on GST registration, our threshold checker shows where you stand: [T1 link]. Happy to answer questions on WhatsApp." |
| S5 Day 7 | 7 days after | "Hello, we have not heard back, so we will assume you want to wait. If your sales are close to the GST limit, check them monthly. If you want to talk again, message us here at any time." |
| S6 Day 30 | 30 days after | "Hello, a month ago you asked about GST registration. If your sales or plans have changed, or a marketplace or customer has asked for a GSTIN, we can look at it again. Do you want a quick check?" |

---

## 10. 90-day calendar (13 weeks, BOFU first)

Start: Monday 9 Nov 2026 (week 1), end: Sunday 7 Feb 2027 (week 13). Owners: **CA** = CA Rushil C S (review and sign-off on every V item), **CW** = content writer, **MK** = marketing lead, **DEV** = developer.

### 10.1 Slot rules and one stated deviation

| Brief slot | How it is met |
|---|---|
| 1 money-page upgrade per week | MP is rebuilt in staged releases (weeks 1–8), then one optimisation per week |
| 2 supporting articles per week | Weeks 1–7: the 8 supporting + 5 problem posts. From week 8, the second article is chosen from Search Console data (candidates in 10.5) or a refresh of an existing post |
| 1 comparison page per week | Only 5 comparison pages exist. They run in weeks 2, 3, 4, 5, 6. In other weeks the slot is used for a comparison-table improvement on MP or a C page (data-driven). **Deviation recorded** |
| 1 location or audience page per week | 5 audience + 5 location sections = 10, over weeks 1–10; weeks 11–13 refresh the best performer and add one city candidate only if the 7.7 rule is met |
| 3 FAQ / AEO answers per week | 39 answers from the 135 in Section 6, placed on their pages (IDs in 10.3) |
| 3 GBP posts per week | Section 7.8 |
| 1 lead-magnet improvement per week | Tools T1–T3, T2 PDF, LM3–LM5, then A/B tests |
| 1 proof asset per week | Process graphics, office photos, document set, checklist PDFs, consented case study when available |
| BOFU first | Weeks 1–4 ship MP, problem pages, new-shop and online-seller pages before TOFU explainers |

### 10.2 Primary item per week

| Wk | Title | Keyword | URL | Type | Intent | CTA | Internal links | Distribution | Owner | Success metric | Enquiry impact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | MP v1: title, meta, quick facts, 12 FAQs, verify labels | gst registration in chennai | MP | Money-page upgrade | Transactional | WhatsApp, Book | S3 (planned), T2, GSTRET | GBP post, WhatsApp Status, LinkedIn | CA, CW, DEV | MP indexed with new title; WhatsApp clicks baseline | High (BOFU) |
| 2 | GST registration rejected or query raised: what to do | gst registration rejected | P1 | Problem | Problem | WhatsApp (WA-03) | MP, NOTICE | GBP, LinkedIn, WhatsApp broadcast to past clients | CW, CA | Impressions on 21–22 | High |
| 3 | GST address proof: rented, home, shared | gst address proof | S4 | Support | Problem | WhatsApp (WA-12) | MP, A2, T2 | GBP, Reel | CW | Clicks on 25, 69 | High |
| 4 | GST registration for a new shop in Chennai | gst registration for new shop | A2 | Audience | Transactional | WhatsApp (WA-01) | MP, S4, UDY | GBP, Instagram | CW | Clicks on 63 | High |
| 5 | Crossed the GST threshold without registering | crossed gst threshold | P2 | Problem | Problem | WhatsApp (WA-02) | T1, MP, S1 | GBP, LinkedIn | CW, CA | Clicks on 26 | High |
| 6 | Regular vs composition GST scheme | regular vs composition gst | C1 | Comparison | Comparison | Book (WA-11) | T3, MP, S2 | LinkedIn, Reel | CW | Position for 31 | Medium |
| 7 | MP v2: blocks 4–6, 24 FAQs | gst registration documents | MP | Money-page upgrade | Commercial | WhatsApp | S3, T2, A1 | GBP | CW, DEV | MP FAQ impressions | High |
| 8 | GST registration process, REG-01 step by step | gst registration process | S3 | Support | Informational | Book | MP, T2 | LinkedIn, YouTube Short | CW | Clicks on 5, 17, 92 | Medium |
| 9 | Aadhaar authentication pending | aadhaar authentication gst | P3 | Problem | Problem | WhatsApp (WA-13) | MP, P1 | GBP | CW | Clicks on 23, 24 | High |
| 10 | GST registration for partnership firms and LLPs | gst registration partnership firm | A5 | Audience | Transactional | WhatsApp (WA-09) | PF, LLP, DSC | LinkedIn, local partners | CW | Clicks on 64, 65 | Medium |
| 11 | GST registration for small manufacturers | gst registration small manufacturers | A4 | Audience | Transactional | WhatsApp (WA-10) | MANU, L3, S5 | LinkedIn, association newsletter | CW | Clicks on 68 | Medium |
| 12 | Need a GSTIN urgently | need gstin urgently | P5 | Problem | Problem | Call (WA-06) | MP, P3 | GBP | CW | Clicks on 27, 30 | High |
| 13 | Review quarter; refresh top 3 pages | (data-driven) | multiple | Refresh | — | — | — | — | MK, CA | Quarter report (Section 12) | — |

Detail for the remaining items each week is in 10.3. The week-1 slot also includes the shared fix of GBP hours.

### 10.3 Weekly package (all slots)

| Wk | Money-page upgrade | Articles (2) | Comparison | Location / audience | AEO answers (3) | GBP | Lead magnet | Proof asset |
|---|---|---|---|---|---|---|---|---|
| 1 | MP v1 (title, meta, quick facts, M1–M12) | P1; S4 | Table improvement on MP (placeholder) | A2 | D3, D7, DD1 | 7.8 wk1 | T2 spec and PDF v0 | Case-study template (internal) |
| 2 | Blocks 2–3 (audiences, included) | P2; S1 upgrade | C2 | A1 upgrade | D4, D5, DN1 | wk2 | T1 build | Process graphic |
| 3 | Blocks 4–5 (process, comparison) | P3; S2 upgrade | C1 | L1 Anna Nagar section | D27, CM9, DD5 | wk3 | T1 launch | Document checklist graphic |
| 4 | Block 6 (documents) and M13–M24 | P5; S3 | C5 | A5 | PR1, PR7, DD3 | wk4 | T2 launch | Office photos, ICAI number added |
| 5 | Blocks 7–8 (problems, coverage) | P4; S5 | C4 | A4 and L3 | CM1, RP1, DN6 | wk5 | T3 build | Anonymised process walk-through |
| 6 | Blocks 9, 11, schema | S6; S7 | C3 | A3 | D28, PR12, DD6 | wk6 | T3 launch | FAQ hub build |
| 7 | Internal-link pass, related guides | S8; refresh S1 using GSC | Comparison table update on C1 using T3 | L2 T. Nagar | CM2, CT4, DN3 | wk7 | LM4 template | PROC build |
| 8 | Tamil summary box and Tamil FAQ | Refresh P1; candidate article 1 (10.5) | Table update (data-driven) | L4 OMR | D11, DD10, RP3 | wk8 | LM3 deadline tracker | FAQ hub live |
| 9 | Related-questions block rewrite | Candidate article 2; refresh S3 | Table update | L5 Porur | PR8, CT8, DN4 | wk9 | Tool A/B test 1 | Short vertical video 1 |
| 10 | Schema and CWV pass | Candidate article 3; refresh A1 | C-page refresh | A3 refresh | CM5, DD14, AU2 | wk10 | LM5 quiz | PROC live; case-study (if consent) |
| 11 | Title and meta test using GSC | Candidate article 4; refresh S2 | C-page refresh | Best-performing audience page refresh | RP5, CT12, AU5 | wk11 | Tool A/B test 2 | Video 2 |
| 12 | FAQ rewrite for top-impression questions | Candidate article 5; refresh A2 | C-page refresh | City candidate only if the 7.7 rule is met | D13, PR11, DN9 | wk12 | Form field review | Client quote (only if consented) |
| 13 | Quarter review and refresh | Candidate article 6 or refresh | Table update | Location refresh | The 3 highest-demand answers refreshed | wk13 | Pick winner of A/B tests | Quarterly proof summary (no claims) |

Answer IDs refer to Section 6. Each is added to the page named in its last column.

### 10.4 Dependencies

| Item | Needs | Week |
|---|---|---|
| Any live copy | CA sign-off on the V items for that page | Before each publish |
| T1–T3 | `gst-config.ts` verified by CA | Before week 3 |
| Plan 01 and 02 links to S2 | S2 date brought forward | Week 3 |
| FAQ hub | Shared FAQ route with plan 02 | Week 6 |
| Case study | Written client consent | Not scheduled until consent exists |
| ICAI check on "free" | Firm's decision | Week 1 |

### 10.5 Candidate articles from Search Console (choose by data in week 7)

| Candidate | Keyword idea | Page type | Condition |
|---|---|---|---|
| How to verify a GSTIN before dealing with a supplier | verify gstin | Support | If "gstin verify" queries appear |
| Do doctors and clinics need GST registration | gst for clinics registration | Audience | If clinic queries appear (link CLIN for returns) |
| GST registration and reverse charge: when a small buyer must register | reverse charge registration | Support | V on every rule |
| GST registration for exporters in Tiruppur | gst registration tiruppur exporters | Location candidate | Only if the 7.7 rule is met |
| GST registration for restaurants and cafes | gst registration restaurant | Audience | Link REST for returns; FSSAI link |
| Cancelling a GST registration voluntarily: when it makes sense | cancel gst registration | Support | Hand off to NOTICE for cancellation notices |

---

## 11. Distribution and authority plan

No fees, ratings, guarantees or competitor names in any post. Every post links to a page from this plan with a UTM tag (template in Section 12.1). Posts about rules carry the date of checking and the verify label in the caption or the first comment where space is short.

### 11.1 Channel playbook (one template per channel, reused for every new page)

| Channel | Hook (pattern) | Message | CTA | Audience | Link destination |
|---|---|---|---|---|---|
| LinkedIn (firm page and CA Rushil C S) | A real situation: "A founder asked: we are incorporated, do we need GST yet?" | 120–180 words: the question, the three-part answer, the one trap | "Details and checklist: [link]" | Founders, SME owners, finance heads | The page's URL |
| Instagram post or Reel and WhatsApp Status | "3 documents people forget for GST" (visual, 15–30 seconds) | One tip, one visual, no jargon, caption with verify label | "WhatsApp us your question" | Shop owners, online sellers, home businesses | MP or the specific page via link in bio |
| GBP post | Plain statement of the problem | 100–250 words, one real image | Learn more or WhatsApp | Local searchers in Chennai | Page URL or WhatsApp |
| YouTube Short or Reel | Question as the first line on screen | 30–45 seconds, CA on camera or voice-over with text | Pinned comment with the link | Same as Instagram | Page URL |
| Email (existing contact list only, with consent) | Subject: a question the reader has asked us | 150 words and one link | One button | Past enquirers and clients | Page URL |
| WhatsApp broadcast (opted-in contacts only) | One-line useful tip | Under 500 characters, one link, one reply-to question | "Reply 1 to talk to a CA" style prompt, no pressure | Opted-in clients and enquirers | Page URL |
| Community / forum | Answer the question in full first, link second | Only where the question is asked; no unsolicited promotion | Link as "more detail" when asked | Founder groups, seller groups, Chennai business groups | Page URL |
| Local partnership | A one-page guide for the partner's members | A short co-branded checklist | "Questions? WhatsApp" | Incubators, coworking spaces, associations | T2, S2, A1 |
| Digital PR | A data-free, fact-checked explainer on a GST change | Press-style note with a quote from CA Rushil C S | Contact for comment | Local business press | S1 or the relevant explainer |
| Guest post / expert quote | A practical how-to the host's readers need | 700–900 words or a 60-word quote | Author bio link | Business and startup sites | MP, S2, T1 |

### 11.2 Per new page: hook, primary channels and destination

"Primary channels" are the two or three that suit the page; others are optional. CTA is the channel playbook CTA unless stated.

| Page | Hook line | Primary channels | Audience | Link destination |
|---|---|---|---|---|
| S3 REG-01 steps | "Eight steps from TRN to your GST certificate" | LinkedIn, YouTube Short | New registrants | S3 |
| S4 address proof | "Your lease and your electricity bill must tell the same story" | Reel, GBP, Status | Shop and home sellers | S4 |
| S5 HSN and SAC | "One wrong code can follow you for years" (state only what is verified) | LinkedIn, community | Traders, manufacturers | S5 |
| S6 additional place | "Opened a second shop? Add it to your GST" | GBP, LinkedIn | Growing shops | S6 |
| S7 first 30 days | "You have a GSTIN. Now what?" | Email, WhatsApp broadcast | New registrants | S7 |
| S8 jurisdiction | "Central or state: who writes to you?" | LinkedIn, community | Registered businesses | S8 |
| C1 regular vs composition | "Composition looks simple. Read this first." | LinkedIn, Reel | Small sellers | C1 |
| C2 voluntary vs compulsory | "You do not have to wait for the limit" | LinkedIn, Status | Below-limit owners | C2 |
| C3 registration vs LUT | "Register first, then LUT" | LinkedIn, local partnership | Exporters | C3 |
| C4 GST vs Udyam | "Two registrations, two jobs" | Reel, GBP | Small businesses | C4 |
| C5 self vs CA | "Where DIY applications stall" | LinkedIn, Short | Self-filers | C5 |
| A2 new shop | "Opening a shop in Chennai? Do these in order" | GBP, Reel, local partnership | Shop owners | A2 |
| A3 NRI and foreign | "Registering for GST from abroad" | LinkedIn, expert quote | NRIs, foreign firms | A3 |
| A4 manufacturers | "Ambattur units: three things buyers ask for" | LinkedIn, association newsletter | Unit owners | A4 |
| A5 partnership and LLP | "Deed, signatory, authentication: the three snags" | LinkedIn, GBP | Firms and LLPs | A5 |
| P1 rejected | "Rejected? Read the reason before you refile" | GBP, WhatsApp broadcast | Stuck applicants | P1 |
| P2 crossed limit | "Crossed the limit? Find the date first" | LinkedIn, GBP | Late registrants | P2 |
| P3 authentication | "Stuck at Aadhaar authentication?" | Short, GBP | Applicants | P3 |
| P4 wrong details | "Wrong trade name on your GST certificate?" | GBP, community | Registered businesses | P4 |
| P5 urgent GSTIN | "A marketplace is waiting for your GSTIN" | Status, GBP | Sellers, contractors | P5 |
| T1 threshold checker | "Do you need GST? A 1-minute check" | All channels | Everyone | T1 |
| T2 document checklist | "Your GST document checklist" | Status, email, partnerships | New registrants | T2 |
| T3 scheme checker | "Regular or composition: a quick check" | LinkedIn, Reel | Small sellers | T3 |
| FAQ hub | "30 GST registration questions answered" | LinkedIn, guest post | Researchers | FAQ |
| PROC explainer | "What GST registration involves, with no surprises" | Email, community | Cost-aware readers | PROC |
| CASE | Publish only with consent: "A client's GST registration, step by step" | LinkedIn, proof carousel | Prospects | CASE |

### 11.3 Authority building (90 days)

| Action | Target by week 13 | Note |
|---|---|---|
| Two local-partner placements of T2 or S2 | 2 | Incubators or coworking spaces |
| One expert quote or short guest piece | 1 | Facts checked and labelled |
| Links from plan 01, 02, GSTHUB and GSTRET to this plan's pages | All agreed links in place | Internal authority flow |
| ICAI membership number and firm number added to the site | Done | Trust signal |

---

## 12. KPI dashboard and measurement

### 12.1 What to track and where

| Metric | Source | Cadence |
|---|---|---|
| Impressions, clicks, average position, by page and query | Search Console | Weekly |
| AI citations and mentions (ChatGPT, Perplexity, Gemini, Copilot, AI Overviews) | Manual spot-check of the 30 direct answers (Section 6.1) each month; log date, engine, cited or not | Monthly |
| WhatsApp clicks | GA4 event `whatsapp_click` with page and `utm_content` | Weekly |
| Calls | GA4 `call_click` plus the call log | Weekly |
| Forms | GA4 `form_submit` | Weekly |
| Bookings | Calendly count by source question | Weekly |
| Qualified enquiries (QE) | Enquiry log scored with 12.5 | Weekly |
| Proposals sent, clients won, revenue per service | Firm's records | Monthly |
| Cost per enquiry | Spend (if any) divided by QE | Monthly |
| Conversion by page | Landing sessions to contact to QE | Monthly |
| Top converting keywords | GSC queries joined to landing pages with QE | Monthly |
| High impression, low click pages | GSC filter: impressions in top quartile, CTR in bottom quartile | Monthly |
| High click, low enquiry pages | Clicks high, contact rate low | Monthly |
| GBP calls, direction requests, website clicks, messages | GBP insights | Weekly |

UTM template: `?utm_source=<channel>&utm_medium=<type>&utm_campaign=gst-registration&utm_content=<page-code>`.

### 12.2 Weekly dashboard template

| Week of | Impressions | Clicks | Avg position (MP) | WhatsApp clicks | Calls | Forms | Bookings | QE | Proposals | Clients | Top page | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 9 Nov | | | | | | | | | | | | |
| (13 rows, one per week) | | | | | | | | | | | | |

Second tab: per-page rows (MP, S1–S8, C1–C5, A1–A5, P1–P5, T1–T3, FAQ, PROC) with clicks, impressions, CTR, QE attributed.

### 12.3 Monthly review checklist

| # | Check |
|---|---|
| 1 | Targets vs actual QE (month 1: 30, month 2: 90, month 3: 150) and which channels contributed |
| 2 | Top 10 queries by clicks and by impressions; new queries to map |
| 3 | Pages that gained or lost position by 3 or more places |
| 4 | High impression, low click list: rewrite titles or metas |
| 5 | High click, low enquiry list: fix the CTA, the form or the intent match |
| 6 | AI citation spot-check results and any answer to rewrite |
| 7 | GBP: posts, calls, reviews received (do not chase), Q&A |
| 8 | Verification register: any item whose source changed |
| 9 | Enquiry quality: average score and the top reasons for low scores |
| 10 | Hand-off health: how many registration clients moved to return filing |

### 12.4 Page-level optimisation rules

| Signal | Rule |
|---|---|
| Impressions at least 200 per 28 days, CTR below 2% | Rewrite title and meta using the query wording |
| Position 8–20 for a P1 keyword | Add an FAQ and an internal link from the best-performing page |
| Clicks but no contact in 28 days | Move the CTA up, add the WhatsApp prefilled message for that page |
| Contact but low QE score | Add qualifying content (documents, triggers) before the CTA |
| Page not indexed after 14 days | Inspect in GSC, check canonical and internal links |
| Two pages trade positions on one query | Apply the 4.4 ownership decision; add a canonical-style link from the loser to the owner |

### 12.5 Enquiry-quality scoring (0–10, per enquiry)

| Criterion | Points |
|---|---|
| Real need stated (specific service) | 0–3 |
| At least one useful detail (activity, location, deadline, turnover, constitution, issue) | 0–3 |
| Contact reached us via WhatsApp, phone, form or booking | 0–1 |
| Likely to buy in 0–90 days (timing or trigger stated) | 0–3 |

QE = score 6 or more. Score at first reply, adjust after the consultation. Sample 20 enquiries a month for an independent second score.

### 12.6 A/B roadmap

| Test | Variant A | Variant B | Metric | Start |
|---|---|---|---|---|
| Hero headline | H1 | H3 | Contact rate | Week 4 |
| Hero CTA order | WhatsApp first | Booking first | Contact rate by type | Week 6 |
| MP title | Current | Query-wording variant | CTR | Week 7 |
| T1 result CTA | "WhatsApp Us" | "Check My Case on WhatsApp" | Click-through from result | Week 9 |
| Objection accordion position | Below hero | Above final CTA | Scroll depth and contact rate | Week 10 |
| WhatsApp prefilled text | WA-01 | Shorter variant | Reply rate | Week 11 |

One test at a time per page; at least four weeks or 100 contacts, whichever is later.

### 12.7 Refresh rules

| Trigger | Action |
|---|---|
| Any change to a threshold, form or portal step | Update the page, the tool config, the AEO rows and the register the same week |
| Every quarter | Re-verify every V item against SRC1–SRC8 |
| Page 90 days old | Review against GSC, refresh facts and the "last checked" date |
| Post falls out of top 20 for its primary query | Rewrite with new questions from GSC and the AEO set |

### 12.8 Escalation rules

| Situation | Escalate to | When |
|---|---|---|
| A fact on a live page is found wrong | CA Rushil C S | Same day; correct first, then review |
| A regulator or portal change affects a labelled item | CA Rushil C S and MK | Within 2 working days |
| ICAI query on wording | CA Rushil C S | Immediately; pause the item |
| Enquiry about a notice or litigation | Notice or litigation team (NOTICE, LIT) | Same working day |
| Page traffic drops more than 30% week on week | MK, DEV | Within 24 hours (check indexation, release, schema) |
| Negative public review | CA Rushil C S | Within 1 working day; reply per 7.11 |

---

## 13. Quality-control checklist

### 13.1 The ten tests (applied to every recommendation in this plan)

| # | Test | Pass condition |
|---|---|---|
| 1 | Enquiry intent | The page or asset is aimed at a person who may message within 0–90 days |
| 2 | No duplication | One owner per query (1.6, 4.4); no repeated text across pages |
| 3 | WhatsApp CTA | A WhatsApp action with a prefilled message code is present |
| 4 | Chennai / Tamil Nadu relevance | Local fact, area or state rule is used where it helps |
| 5 | Forms, documents, deadlines | Named forms and documents appear where relevant |
| 6 | No unverifiable claims | Every rule outside the fact sheets carries the label; no fee, rating, superlative, guarantee, turnaround promise or competitor name |
| 7 | Internal links | Links per 5.14 and 4.3; no orphan |
| 8 | AI-engine visibility | A 40–80 word direct answer exists for the main question |
| 9 | Measurable KPI | A metric in Section 12 tracks it |
| 10 | Executable in 90 days | Fits the Section 10 calendar and the team's capacity |

### 13.2 Applied check by section

| Section | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Personas and keywords | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Volumes not measured; flagged |
| Architecture | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | 26 new URLs need dev capacity; shared routes with plans 01/02 |
| Money page | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | All rule cells V |
| AEO bank | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | n/a | Pass | Checked by script |
| GEO / local | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | No new doorway URLs |
| Conversion | Pass | Pass | Pass | Pass | Pass | Pass | Pass | n/a | Pass | Pass | "Free" held for ICAI check; data-safety block has a placeholder for the firm |
| Calendar | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Comparison slot deviation stated |

### 13.3 Verification register

Every item below carries: **Verify current MCA/GST/Income Tax/DGFT/RBI rule before publishing.** "Fact sheet [V]" means the fact sheet states it but marks it date-sensitive, so the label still applies. Sign-off by CA Rushil C S before publishing.

| # | Claim | Where used | Basis |
|---|---|---|---|
| V1 | ₹40 lakh (goods) and ₹20 lakh (services) in Tamil Nadu | MP, S1, T1, AEO D3–D5 | Fact sheet [V] |
| V2 | Mixed goods-and-services supplier uses the services limit | S2 live text, D4, T1 | Live page |
| V3 | Exclusions for specified goods from the ₹40 lakh limit | S2 live text, D5 | Live page |
| V4 | Special-category-state lower limits | MP live text (to be cut) | Live page |
| V5 | Compulsory registration: inter-state taxable supply of goods; e-commerce sellers (s.24) | MP, S1, A1, M3, DN4, DN6 | Fact sheet [V] |
| V6 | Inter-state services exempt from compulsory registration below the limit | S1 live text, DN6 | Live page |
| V7 | Reverse charge, casual and non-resident, agent, ISD as compulsory categories | S2 live text, M3 | Live page |
| V8 | Enrolment number for small intra-state e-commerce sellers from 1 Oct 2023, Notification 34/2023-CT | MP, A1, D24, CM5 | Live page |
| V9 | REG-01, ARN, REG-06, REG-03 → REG-04 | MP, S3, AEO | Fact sheet [V] |
| V10 | Aadhaar authentication; Suvidha Kendra biometric where required | MP, P3, D13, CM15 | Fact sheet [V] for authentication; Suvidha Kendra live S2 text |
| V11 | Statutory timings: up to 30 days where physical verification or Aadhaar authentication incomplete | MP live FAQ (to be removed or labelled) | Live page |
| V12 | Duty to apply within 30 days of becoming liable (s.25); effective-date consequence | S2, P2, DD10 | Live S2 text |
| V13 | Pre-registration input credit: s.18 relief and one-year limit | S2, RP12 | Live S2 text |
| V14 | Composition: no collection of GST, no ITC, no inter-state outward supplies, turnover limits, lower service limit | S2, C1, T3, CM1, RP14 | Live S2 text; fact sheet lists CMP-08, GSTR-4 [V] |
| V15 | AGILE-PRO-S: GSTIN no fee (fact sheet); GSTIN optional; registered office becomes principal place of business | S2, D27, CM9, DN11 | Fact sheet; live S2 text for optional |
| V16 | Government fee for GST registration application: none | PROC, M13, CT1–CT3 | Not in fact sheet |
| V17 | TCS 0.5% and its effective date (A1 post) | A1 | Live post |
| V18 | GSTR-2B as the credit basis (replacing GSTR-2A wording in A1) | A1 | Fact sheet [V] |
| V19 | Warehouse in another state requires registration there | A1, S6, CM10 | Live post |
| V20 | State-wise registration; one PAN several registrations; multiple within a state | S6, D22 | Not in fact sheet |
| V21 | Documents for each constitution (deed, LLP agreement, resolution, DSC, registered-office proof) | MP block 6, T2, DD3–DD6 | Not in fact sheet |
| V22 | Address proof rules: rent agreement plus owner proof; consent letter; electricity bill or property tax receipt | MP, S4, DD1, DD2 | Live MP FAQ |
| V23 | DSC for companies and LLPs on GST filings; others may use an alternative signature | M21, DD9 | Fact sheet [V] (DSC for companies/LLPs); alternative route not in sheet |
| V24 | Casual and non-resident supplier rules, deposit, validity | MP, D23, PR12 | Not in fact sheet |
| V25 | NRI and foreign documents: apostille or consularisation | A3, DD6 | Fact sheet (company-registration) |
| V26 | Amendment: core and non-core fields; officer approval; what cannot be changed | P4, M18, PR10, PR11 | Not in fact sheet |
| V27 | Bank details within a prescribed time after registration | S7, DD15 | Live S2 text |
| V28 | Display of certificate at the place of business | S7, D10 | Live S2 text |
| V29 | Physical verification of premises | RP6, D16 | Live MP FAQ |
| V30 | Rejection and refile; REG-05 | P1, M11, RP8 | Not in fact sheet |
| V31 | Penalties and interest for late registration; s.122; collecting tax without registration | P2, RP1–RP3 | Not in fact sheet; no amounts stated |
| V32 | Cancellation (REG-17 → REG-18; revocation REG-21) | RP10 (hand-off only) | Fact sheet [V] |
| V33 | LUT RFD-11 and its annual validity | C3, CM4 | Fact sheet [V]; annual renewal live text |
| V34 | Udyam portal requirements and GST linkage | C4, DN13 | Not in fact sheet |
| V35 | Marketplaces ask for GSTIN at onboarding | A1, DN14, LP5 | Live page |
| V36 | TN Commercial Taxes Department URL; central or state administration | S8 | Fact sheet (administration); URL to confirm |
| V37 | Tutorial URL still resolves | MP citation | Live page |
| V38 | HSN and SAC definitions, code lists | S5, D25, D26 | Not in fact sheet |
| V39 | FSSAI licence requirement and portal name | CM12, A2 | Not in fact sheet |
| V40 | ICAI wording: "15-minute consultation"; "free" held | All CTAs | Fact sheet ICAI rules |

### 13.4 Open decisions for the firm

| # | Decision | Needed by |
|---|---|---|
| 1 | Bring the S2 post date forward (plans 01 and 02 link to it) | Week 1 |
| 2 | ICAI check on the word "free" | Week 1 |
| 3 | Supply ICAI membership number and firm registration number | Week 3 |
| 4 | Write the real data-handling statement for the "Will my data be safe?" block | Week 3 |
| 5 | Agree shared routes (`/tools`, `/faq/<topic>`, `/case-studies`) with plans 01 and 02 | Week 2 |
| 6 | Confirm GBP categories available in the dashboard | Week 1 |
| 7 | Confirm Tamil and language attributes and office accessibility facts | Week 2 |
| 8 | Decide whether the firm wants the no-reviews-on-site rule revisited after ICAI advice | Week 8 |

---

## 14. First 10 actions this week (4–9 Nov 2026)

### 14.1 Actions

| # | Action | Owner | Done when |
|---|---|---|---|
| 1 | Fix GBP opening hours (remove "Open 24 hours"); confirm NAP and categories (7.1, 7.2) | MK | Hours correct on Search and Maps |
| 2 | Decide the S2 post date (move before the plan 01/02 links ship) and ask plans 01/02 owners to confirm the link anchor | CA, MK | New date saved in `blog.ts` |
| 3 | CA Rushil C S reviews the verification register (13.3) and the live-page issues (1.2, 1.3) | CA | V items marked confirmed, changed or dropped |
| 4 | ICAI check on "free 15-minute consultation"; until then use "15-minute consultation" | CA | Written decision |
| 5 | Pull a Search Console export for `/gst-registration-chennai` and the three posts; run a live Google India SERP check for keywords 1, 3, 21, 41 | MK | Baseline sheet saved (no rankings claimed without data) |
| 6 | Ship MP v1: new title and meta (4.1), quick facts, 12 FAQs (M1–M12), cut the Porur sentence and the "3–7 working days" line, demote LUT to a link, update `page-dates.ts` | CW, DEV | Page live; Rich Results Test passes |
| 7 | Add the three owned-post fixes that remove risk: delete "three to seven working days" and GSTR 2A wording in A1; label rules in S1 and S2 | CW, CA | Posts republished |
| 8 | Add GA4 events and the UTM template (12.1); add the sticky WhatsApp/Call bar with WA-01 | DEV | Events visible in GA4 DebugView |
| 9 | Write and queue P1 (rejected or query raised) and S4 (address proof), the first two BOFU posts | CW | Drafts with CA review |
| 10 | Build the enquiry log with the 0–10 score (12.5) and set the first-reply template (9.10 S0, S1) | MK | Used for the first real enquiry |

### 14.2 Automated count check

Results of the script run are recorded below (run after the file was assembled).


| Check | Required | Result |
|---|---|---|
| Output sections | 14 | 14 present, in the brief's order |
| Personas | 8+ | 9 |
| Keywords | 100 across A–J | 100, 10 per category |
| Architecture URLs | 35 (1/8/5/5/5/5/3/1/1/1) | 35 |
| SEO titles at most 60 characters | all | 30 of 30 (longest 58); L1–L5 are section additions with titles unchanged |
| Meta descriptions at most 155 characters | all | 30 of 30 (longest 151) |
| Money-page FAQs, 40–80 words | 20+ | 24, all within range |
| AEO direct answers | 30 | 30 |
| AEO comparison, process, document/deadline, cost/timeline, risk/penalty, "Do I need", audience | 15 each | 15 each (105) |
| All AEO answers 40–80 words | all | 0 outside range |
| Local queries | 30 | 30 |
| WhatsApp messages under 500 characters | all | 22 library and sequence messages plus 2 review messages, all under 500 |
| GBP business description | under 750 | 562 characters |
| Calendar | 13 weeks | 13 weeks |
| "free" | held for ICAI check | Appears only in notes flagging the check and in non-offer phrases |
