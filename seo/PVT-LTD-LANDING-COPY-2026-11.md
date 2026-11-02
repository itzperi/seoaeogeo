# Private Limited Company Registration in Chennai: landing page copy, structure and JSON-LD

**Page:** `/private-limited-company-incorporation-chennai` (keep this URL; see note 1) · **Drafted:** 2 November 2026 · **Status:** draft for CA Rushil C S to sign off before publishing

## Corrections made to the brief (read first)

1. **URL.** The brief's example slug `/private-limited-company-registration-chennai/` would create a second page competing with the existing canonical `/private-limited-company-incorporation-chennai`. This copy is for the existing URL.
2. **Profession.** C S Rushil & Co. is a firm of **Chartered Accountants (ICAI)**, led by CA Rushil C S. It is not an ICSI Company Secretary practice. Every "Practicing CS" / "ICSI" reference in the brief is replaced with the correct ICAI wording. Publishing ICSI claims would misdescribe the firm.
3. **Fee figures.** Tamil Nadu stamp duty is **₹200 (e-MoA) + ₹500 per ₹10 lakh of authorised capital or part (e-AoA) = ₹700 at ₹10 lakh**. These are the figures already published on the site's stamp duty post. The brief's "₹20 SPICe+" stamp line is not supported by those sources and is left out until verified. **PAN ₹66 + TAN ₹65 = ₹131** (not ₹132).
4. **ICAI advertising rules.** Left out on purpose:
   - naming or disparaging other firms or platforms (the brief's "₹999 aggregators" comparison)
   - a review-rating badge
   - "free" inducements
   - turnaround promises such as "in 15 minutes"
   - The comparison table compares *what a complete quote should itemise*, not named competitors.
5. **Schema type.** `LegalService` is left out. A CA firm is an `AccountingService`, and calling it a legal service would misdescribe it. Practising CAs do certify SPICe+ forms, so the professional-certification wording stays.
6. **Resident director.** Section 149(3) as amended counts 182 days in the *financial year*. The current page says "previous calendar year" in one place and "financial year" in another; align both to the wording CA Rushil confirms.

---

## 1. Metadata, SERP snippet and silo map

| Element | Copy | Length |
|---|---|---|
| Meta title (recommended, current) | `Private Limited Company Registration in Chennai \| C S Rushil` | 60 |
| Meta title (alternative with time hook) | `Pvt Ltd Company Registration Chennai: 7–12 Days \| C S Rushil` | 60 |
| Meta description | `Private Limited Company registration in Chennai via SPICe+ in 7–12 working days. ₹0 MCA fee up to ₹15 lakh capital, TN stamp duty itemised. WhatsApp a CA.` | 154 |

The exact keyword (47 characters) leaves no room for both a time hook and the brand within 60 characters. Keep the current title, which carries the exact match plus the brand, and use the description for the hook. Use the alternative only if Search Console shows that "pvt ltd" queries outperform.

**Breadcrumb:** Home › [Company Registration in Chennai](/company-registration-chennai) › Private Limited Company Registration in Chennai

**Internal link silo**

| Direction | Target | Exact anchor |
|---|---|---|
| Up to parent hub | `/company-registration-chennai` | company registration in Chennai |
| Sibling money page | `/` | CA firm in Chennai |
| Sibling money page | `/virtual-cfo-services` | Virtual CFO in Chennai |
| Sibling money page | `/gst-litigation-chennai` | GST litigation and appeals in Chennai |
| Supporting | `/roc-compliances` | ROC compliance after incorporation |
| Supporting | `/blog/tamil-nadu-stamp-duty-company-incorporation` | stamp duty on company incorporation in Tamil Nadu |

---

## 2. Above the fold (60/40 desktop, stacked mobile)

**Eyebrow badge:** `ICAI Chartered Accountants · Anna Nagar, Chennai · Updated for MCA V3 SPICe+ (November 2026)`

**H1:** Private Limited Company Registration in Chennai

**Value subheadline:**
SPICe+ incorporation with ROC Chennai in 7–12 working days once documents are ready. Government charges itemised line by line: ₹0 MCA filing fee up to ₹15 lakh authorised capital, ₹700 Tamil Nadu stamp duty at ₹10 lakh, ₹131 for PAN and TAN. Our professional fee is quoted separately.

**Trust micro-badges (4)**
1. Led by CA Rushil C S, ICAI · FAFD
2. 7–12 working days once documents are ready
3. Government fees itemised separately from our fee
4. Speak directly to the CA handling your filing

(No star-rating badge, per ICAI. Link "Client reviews on Google" in the footer of the hero instead.)

**Primary CTAs**
- **WhatsApp:** `WhatsApp your proposed names`
  `https://wa.me/917200149711?text=Hi%2C%20I%20want%20to%20register%20a%20Private%20Limited%20Company%20in%20Chennai.%20Proposed%20names%3A%20`
- **Booking:** `Book a 30-minute call with a CA` → `https://calendly.com/ceo-csrushil/30min`

**Right-hand lead card (3 fields)**
- **Headline:** Get an itemised incorporation quote
- **Sub-line:** We check your names against the MCA and trademark registers and send the government fee breakdown on WhatsApp.
- **Fields:**
  1. Your name
  2. WhatsApp number
  3. Proposed company names (up to 3)
- **Button:** `Send me the itemised quote`
- **Microcopy:** Used only to reply to your enquiry. No spam, no sharing.

**Sticky mobile bar:** `Call` (tel:+917200149711) · `WhatsApp` (deep link above)

---

## 3. AEO direct answer and statutory table

**Key statutory takeaway (131 words, place directly under the hero):**

> Private Limited Company registration in Chennai is an online SPICe+ application (Form INC-32) on the MCA V3 portal under the Companies Act, 2013, recorded with the Registrar of Companies, Chennai, at Shastri Bhavan, Haddows Road, Nungambakkam. It needs at least two directors and two shareholders, one director resident in India for at least 182 days in the financial year, a Class 3 Digital Signature Certificate for each subscriber, and registered office proof such as a TANGEDCO electricity bill with the owner's no-objection certificate. With documents ready, it usually takes 7–12 working days. Up to ₹15 lakh of authorised capital the MCA filing fee is nil; Tamil Nadu stamp duty is ₹700 at ₹10 lakh, and PAN and TAN cost ₹131. C S Rushil & Co., Chennai files and tracks every step.

**Table A: Tamil Nadu government charges (what you pay the government)**

```html
<table>
  <caption>Government charges for Private Limited Company registration in Tamil Nadu (authorised capital up to ₹15 lakh)</caption>
  <thead>
    <tr><th scope="col">Component</th><th scope="col">Form / authority</th><th scope="col">Government charge</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">SPICe+ filing fee</th><td>INC-32, MCA V3</td><td>₹0 up to ₹15 lakh authorised capital</td></tr>
    <tr><th scope="row">Name reservation (optional)</th><td>SPICe+ Part A</td><td>₹1,000, only if reserved before Part B</td></tr>
    <tr><th scope="row">Stamp duty on Memorandum</th><td>e-MoA, INC-33 (Indian Stamp Act, Tamil Nadu)</td><td>₹200</td></tr>
    <tr><th scope="row">Stamp duty on Articles</th><td>e-AoA, INC-34 (Indian Stamp Act, Tamil Nadu)</td><td>₹500 per ₹10 lakh or part: ₹500 at ₹10 lakh, ₹1,000 at ₹15 lakh</td></tr>
    <tr><th scope="row">PAN and TAN</th><td>AGILE-PRO-S, INC-35</td><td>₹66 + ₹65 = ₹131</td></tr>
    <tr><th scope="row">GSTIN, EPFO, ESIC</th><td>AGILE-PRO-S, INC-35</td><td>No fee</td></tr>
    <tr><th scope="row">Digital Signature Certificates</th><td>Licensed Certifying Authority</td><td>Market-priced; not an MCA fee</td></tr>
  </tbody>
</table>
<p><small>Government charges only. SPICe+ computes the stamp duty payable at filing, which is the figure that counts. Our professional fee is quoted separately.</small></p>
```

**Table B: What a complete incorporation quote should itemise (6 parameters, neutral)**

| Parameter | What to ask any firm | How C S Rushil & Co. quotes |
|---|---|---|
| Government fees | Are MCA fee, stamp duty, PAN/TAN listed as separate lines? | Listed line by line, at cost |
| DSCs | How many DSCs, which class, who verifies? | 2 Class 3 DSCs with eKYC or video verification |
| Name check | Is the name checked against MCA *and* trademark registers before filing? | Both, before Part A or Part B |
| Who files | Who certifies and signs the SPICe+ form? | A practising Chartered Accountant |
| Post-incorporation | Are ADT-1 / first auditor, share certificates and INC-20A included or extra? | Stated in writing with dates |
| Resubmissions | Is a CRC resubmission included? | Stated in the engagement letter |

---

## 4. Body sections

### H2: How does Private Limited Company registration in Chennai work, day by day?
Registration runs on the MCA V3 portal from DSCs to the Certificate of Incorporation, typically in 7–12 working days once documents are ready.

| Day | Step | Form / portal | Checkpoint |
|---|---|---|---|
| 0 | Document and name check | MCA name search, IP India trademark search | PAN–Aadhaar details match exactly; office proof and NOC in matching names |
| 1–2 | Digital Signature Certificates | Certifying Authority (eKYC / video) | One Class 3 DSC per subscriber-director |
| 2–3 | Name approval (optional) | SPICe+ Part A, INC-32 | Skip to Part B if the name is clearly available |
| 3–5 | Incorporation filing | SPICe+ Part B with INC-33 (e-MoA), INC-34 (e-AoA), INC-35 (AGILE-PRO-S) | Specific main objects; DSC signing; CA certification; fee and stamp duty paid |
| 5–12 | CRC examination | MCA Central Registration Centre | Reply to any resubmission the same day |
| 7–12 | Certificate of Incorporation | MCA V3 | CIN, PAN and TAN issued; GSTIN, EPFO, ESIC if applied for |
| After | Bank account, share capital, GST | Bank; GST portal; RBI FIRMS (FC-GPR) for foreign investment | Subscription money received before INC-20A |

### H2: What documents and registered office proof does a Chennai company need?
Each director needs identity and address proof, and the registered office needs a recent utility bill and the owner's NOC.

**H3: Directors and shareholders (Indian residents)**
- PAN and Aadhaar (details must match exactly), photograph, email and mobile for OTPs
- Bank statement or utility bill not older than two months as address proof

**H3: NRI and foreign directors**
- Passport (mandatory for foreign nationals), overseas address proof
- Proofs signed abroad: **apostilled** in Hague Convention countries, **consularised** at the Indian mission elsewhere
- Foreign shareholding: FDI sector rules apply; share allotment reported in **FC-GPR on RBI FIRMS within 30 days**

**H3: Registered office in Chennai**
- TANGEDCO electricity bill (not older than two months) or Greater Chennai Corporation property tax receipt
- NOC from the owner. It must be signed by the person named on the bill or tax receipt, or the ownership chain must be shown.
- Rent or lease agreement if rented. A home address is acceptable with the owner's NOC.

### H2: What must a new private limited company file after incorporation?
A new company has fixed deadlines at 30, 60 and 180 days and every year, and each carries a statutory penalty for delay.

| When | Requirement | Law / form | If missed |
|---|---|---|---|
| Within 30 days | First board meeting | Section 173(1) | Officers in default liable under the Act |
| Within 30 days | First auditor appointed by the board | Section 139(6) | Members must appoint within 90 days |
| Within 60 days | Share certificates issued | Section 56(4)(a) | Penalty under Section 56(6) |
| Within 180 days | Declaration of commencement of business | INC-20A, Section 10A | ₹50,000 on the company and ₹1,000 a day per officer, up to ₹1 lakh; ROC may strike off |
| Every year | DIR-3 KYC for each director | DIR-3 KYC / web form | ₹5,000 late fee; DIN deactivated |
| Within 9 months of first year-end | First AGM | Section 96 | Penalty under Section 99 |
| 30 / 60 days after AGM | Financial statements and annual return | AOC-4, MGT-7A | Additional fee of ₹100 a day per form (Section 403) |
| Half-yearly | Tamil Nadu professional tax | Greater Chennai Corporation | Interest and penalty under TN law |

Our [ROC compliance after incorporation](/roc-compliances) retainer tracks this calendar from the day the CIN is issued.

---

## 5. FAQs (each 110–140 words, self-contained)

**Q1. What are the government fees to register a private limited company in Chennai in 2026?**
For a company with its registered office in Chennai and authorised capital of up to ₹10 lakh, the government side of incorporation comes to about ₹831 plus two Digital Signature Certificates. The MCA charges no SPICe+ filing fee up to ₹15 lakh of authorised capital. Tamil Nadu stamp duty is ₹200 on the e-MoA (INC-33) and ₹500 per ₹10 lakh of authorised capital, or part of it, on the e-AoA (INC-34): ₹700 in total at ₹10 lakh and ₹1,200 at ₹15 lakh. PAN costs ₹66 and TAN ₹65 through AGILE-PRO-S (INC-35). Reserving the name separately in SPICe+ Part A adds ₹1,000. C S Rushil & Co., Chennai lists each government charge as a separate line in its written quote, apart from its professional fee, and SPICe+ computes the final stamp duty at filing.

**Q2. Can an NRI or foreign national be a director or shareholder of a Chennai private limited company?**
Yes. Under the Companies Act, 2013, a private limited company needs at least two directors, and at least one of them must have stayed in India for 182 days or more in the financial year under Section 149(3). The other directors and the shareholders can be NRIs or foreign nationals. A foreign director obtains a DIN through SPICe+ using a passport, and identity and address proofs signed abroad must be apostilled in Hague Convention countries or consularised at the Indian mission elsewhere. Foreign shareholding must follow the FDI sector rules, and the company reports the allotment of shares to the RBI in Form FC-GPR on the FIRMS portal within 30 days. C S Rushil & Co., Chennai checks every foreign document's format before filing, because a rejected proof sends the application back.

**Q3. What registered office proof does ROC Chennai accept, and why do applications get sent back?**
A Chennai registered office needs a utility bill not older than two months, such as a TANGEDCO electricity bill, together with a no-objection certificate from the owner, plus a rent or lease agreement if the premises are rented. A Greater Chennai Corporation property tax receipt helps show who owns the property. The most common reason the MCA's Central Registration Centre sends a SPICe+ form back for Chennai applicants is a name mismatch: the electricity bill or tax receipt is in one person's name while the NOC is signed by someone else, often a parent or spouse. The address given in SPICe+ becomes the registered office under Section 12 of the Companies Act, 2013. C S Rushil & Co., Chennai checks the bill, the NOC and the ownership chain together before filing.

**Q4. How long does private limited company registration take in Chennai, and what slows it down?**
Private limited company registration in Chennai usually takes 7–12 working days once documents and Digital Signature Certificates are ready, and about three weeks if documents are being collected from scratch. The sequence is: Class 3 DSCs for each subscriber-director, SPICe+ Part A name approval or a direct Part B filing, then Part B with the e-MoA (INC-33), e-AoA (INC-34) and AGILE-PRO-S (INC-35) on the MCA V3 portal. The Certificate of Incorporation then issues with the CIN, PAN and TAN. Most delays come from three causes: rejected names, mismatches between a director's PAN and Aadhaar details, and resubmissions on registered office proof. C S Rushil & Co., Chennai checks all three before filing, because each resubmission adds days to the timeline.

**Q5. What must a new private limited company file in its first 180 days, and what are the penalties?**
After the Certificate of Incorporation, a private limited company has a fixed calendar. The board holds its first meeting within 30 days under Section 173(1) and appoints the first auditor within 30 days under Section 139(6). Share certificates must be issued within 60 days under Section 56(4)(a). Subscribers then pay their share money into the company's bank account, and the declaration of commencement of business, Form INC-20A, is filed within 180 days under Section 10A. Missing INC-20A attracts a penalty of ₹50,000 on the company and ₹1,000 a day on each officer in default, up to ₹1 lakh, and the Registrar can remove the company's name. C S Rushil & Co., Chennai sets these dates in writing on the day of incorporation and tracks them with the founders.

---

## 6. JSON-LD (copy-paste)

Note: on the live site this page already emits one connected `@graph` from `moneyPageGraph()` in `src/lib/schema.tsx`, and the firm and person nodes come from the layout. If you use this block instead, remove that call so the nodes are not emitted twice. The FAQ text below must match the visible FAQs word for word.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "@id": "https://www.csrushil.com/#organization",
      "name": "C S Rushil & Co. Chartered Accountants",
      "alternateName": ["C S Rushil & Co.", "CS Rushil & Co CA Firm Chennai"],
      "url": "https://www.csrushil.com/",
      "logo": "https://www.csrushil.com/logo.png",
      "telephone": "+917200149711",
      "email": "admin@csrushil.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Rd, Anna Nagar",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600040",
        "addressCountry": "IN"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 13.0859694, "longitude": 80.1997378 },
      "hasMap": "https://maps.google.com/?cid=9218487927688159679",
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "18:30"
      }],
      "founder": { "@id": "https://www.csrushil.com/#ca-rushil" },
      "sameAs": ["https://in.linkedin.com/company/csrushil-co", "https://maps.google.com/?cid=9218487927688159679"]
    },
    {
      "@type": "Person",
      "@id": "https://www.csrushil.com/#ca-rushil",
      "name": "CA Rushil C S",
      "jobTitle": "Founder & Managing Partner, Practising Chartered Accountant",
      "worksFor": { "@id": "https://www.csrushil.com/#organization" },
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "Chartered Accountant (ICAI)" },
        { "@type": "EducationalOccupationalCredential", "name": "Certified in Forensic Accounting and Fraud Detection (FAFD)" }
      ],
      "sameAs": ["https://in.linkedin.com/in/rushil-cs"]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.csrushil.com/private-limited-company-incorporation-chennai#webpage",
      "url": "https://www.csrushil.com/private-limited-company-incorporation-chennai",
      "name": "Private Limited Company Registration in Chennai | C S Rushil",
      "inLanguage": "en-IN",
      "about": { "@id": "https://www.csrushil.com/#organization" },
      "mainEntity": { "@id": "https://www.csrushil.com/private-limited-company-incorporation-chennai#service" },
      "author": { "@id": "https://www.csrushil.com/#ca-rushil" },
      "reviewedBy": { "@id": "https://www.csrushil.com/#ca-rushil" },
      "breadcrumb": { "@id": "https://www.csrushil.com/private-limited-company-incorporation-chennai#breadcrumb" }
    },
    {
      "@type": "Service",
      "@id": "https://www.csrushil.com/private-limited-company-incorporation-chennai#service",
      "name": "Private Limited Company Registration in Chennai",
      "serviceType": "Private Limited Company Registration and Incorporation",
      "provider": { "@id": "https://www.csrushil.com/#organization" },
      "areaServed": [
        { "@type": "City", "name": "Chennai" },
        { "@type": "City", "name": "Coimbatore" },
        { "@type": "City", "name": "Madurai" },
        { "@type": "City", "name": "Tiruchirappalli" },
        { "@type": "City", "name": "Salem" },
        { "@type": "State", "name": "Tamil Nadu" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Private Limited Company Registration",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Signature Certificates and DIN" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SPICe+ name reservation and incorporation filing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "e-MoA (INC-33) and e-AoA (INC-34) drafting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PAN, TAN, GSTIN, EPFO and ESIC through AGILE-PRO-S" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "First-year ROC compliance including INC-20A" } }
        ]
      }
    },
    {
      "@type": "HowTo",
      "name": "How to register a private limited company in Chennai",
      "totalTime": "P12D",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Check documents and names", "text": "Match each director's PAN and Aadhaar details and search the proposed names on the MCA and trademark registers." },
        { "@type": "HowToStep", "position": 2, "name": "Obtain DSCs", "text": "Obtain a Class 3 Digital Signature Certificate for each subscriber-director." },
        { "@type": "HowToStep", "position": 3, "name": "Reserve the name (optional)", "text": "File SPICe+ Part A (INC-32) to reserve the name, or apply for it directly in Part B." },
        { "@type": "HowToStep", "position": 4, "name": "File SPICe+ Part B", "text": "File SPICe+ Part B with the e-MoA (INC-33), e-AoA (INC-34) and AGILE-PRO-S (INC-35), and pay the fee and Tamil Nadu stamp duty." },
        { "@type": "HowToStep", "position": 5, "name": "Receive the Certificate of Incorporation", "text": "The Certificate of Incorporation is issued with the CIN, PAN and TAN after the Central Registration Centre approves the application." }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.csrushil.com/private-limited-company-incorporation-chennai#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What are the government fees to register a private limited company in Chennai in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "For a company with its registered office in Chennai and authorised capital of up to ₹10 lakh, the government side of incorporation comes to about ₹831 plus two Digital Signature Certificates. The MCA charges no SPICe+ filing fee up to ₹15 lakh of authorised capital. Tamil Nadu stamp duty is ₹200 on the e-MoA (INC-33) and ₹500 per ₹10 lakh of authorised capital, or part of it, on the e-AoA (INC-34): ₹700 in total at ₹10 lakh and ₹1,200 at ₹15 lakh. PAN costs ₹66 and TAN ₹65 through AGILE-PRO-S (INC-35). Reserving the name separately in SPICe+ Part A adds ₹1,000. C S Rushil & Co., Chennai lists each government charge as a separate line in its written quote, apart from its professional fee, and SPICe+ computes the final stamp duty at filing." } },
        { "@type": "Question", "name": "Can an NRI or foreign national be a director or shareholder of a Chennai private limited company?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Under the Companies Act, 2013, a private limited company needs at least two directors, and at least one of them must have stayed in India for 182 days or more in the financial year under Section 149(3). The other directors and the shareholders can be NRIs or foreign nationals. A foreign director obtains a DIN through SPICe+ using a passport, and identity and address proofs signed abroad must be apostilled in Hague Convention countries or consularised at the Indian mission elsewhere. Foreign shareholding must follow the FDI sector rules, and the company reports the allotment of shares to the RBI in Form FC-GPR on the FIRMS portal within 30 days. C S Rushil & Co., Chennai checks every foreign document's format before filing, because a rejected proof sends the application back." } },
        { "@type": "Question", "name": "What registered office proof does ROC Chennai accept, and why do applications get sent back?", "acceptedAnswer": { "@type": "Answer", "text": "A Chennai registered office needs a utility bill not older than two months, such as a TANGEDCO electricity bill, together with a no-objection certificate from the owner, plus a rent or lease agreement if the premises are rented. A Greater Chennai Corporation property tax receipt helps show who owns the property. The most common reason the MCA's Central Registration Centre sends a SPICe+ form back for Chennai applicants is a name mismatch: the electricity bill or tax receipt is in one person's name while the NOC is signed by someone else, often a parent or spouse. The address given in SPICe+ becomes the registered office under Section 12 of the Companies Act, 2013. C S Rushil & Co., Chennai checks the bill, the NOC and the ownership chain together before filing." } },
        { "@type": "Question", "name": "How long does private limited company registration take in Chennai, and what slows it down?", "acceptedAnswer": { "@type": "Answer", "text": "Private limited company registration in Chennai usually takes 7–12 working days once documents and Digital Signature Certificates are ready, and about three weeks if documents are being collected from scratch. The sequence is: Class 3 DSCs for each subscriber-director, SPICe+ Part A name approval or a direct Part B filing, then Part B with the e-MoA (INC-33), e-AoA (INC-34) and AGILE-PRO-S (INC-35) on the MCA V3 portal. The Certificate of Incorporation then issues with the CIN, PAN and TAN. Most delays come from three causes: rejected names, mismatches between a director's PAN and Aadhaar details, and resubmissions on registered office proof. C S Rushil & Co., Chennai checks all three before filing, because each resubmission adds days to the timeline." } },
        { "@type": "Question", "name": "What must a new private limited company file in its first 180 days, and what are the penalties?", "acceptedAnswer": { "@type": "Answer", "text": "After the Certificate of Incorporation, a private limited company has a fixed calendar. The board holds its first meeting within 30 days under Section 173(1) and appoints the first auditor within 30 days under Section 139(6). Share certificates must be issued within 60 days under Section 56(4)(a). Subscribers then pay their share money into the company's bank account, and the declaration of commencement of business, Form INC-20A, is filed within 180 days under Section 10A. Missing INC-20A attracts a penalty of ₹50,000 on the company and ₹1,000 a day on each officer in default, up to ₹1 lakh, and the Registrar can remove the company's name. C S Rushil & Co., Chennai sets these dates in writing on the day of incorporation and tracks them with the founders." } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.csrushil.com/private-limited-company-incorporation-chennai#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.csrushil.com/" },
        { "@type": "ListItem", "position": 2, "name": "Company Registration in Chennai", "item": "https://www.csrushil.com/company-registration-chennai" },
        { "@type": "ListItem", "position": 3, "name": "Private Limited Company Registration in Chennai", "item": "https://www.csrushil.com/private-limited-company-incorporation-chennai" }
      ]
    }
  ]
}
</script>
```

## Facts for CA Rushil C S to confirm before publishing
- Section 149(3) wording (financial year vs previous calendar year)
- Penalty wording under Sections 56(6), 99 and 173 (stated without amounts above)
- DIR-3 KYC frequency, which MCA has been revising
- Whether any SPICe+ form-level stamp duty applies in Tamil Nadu beyond MoA and AoA
- Typical 7–12 working-day timeline against current CRC processing
