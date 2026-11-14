import type { ComponentType } from "react";
import type { FAQItem } from "@/components/FAQSection";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  updated?: string; // ISO yyyy-mm-dd — last substantive revision (optional)
  excerpt: string;
  /** 40–60 word direct answer shown under the H1 as #lead-answer (AEO / voice). */
  summary?: string;
  faqs?: FAQItem[];
};

export type BlogPostModule = {
  meta: BlogPostMeta;
  default: ComponentType;
};

// Static registry — Next.js needs statically analyzable imports for the App
// Router, so each post is its own module rather than loaded from a CMS.
const modules = {
  "dir-3-kyc-due-date-late-fee": () =>
    import("@/content/blog/dir-3-kyc-due-date-late-fee"),
  "aoc-4-mgt-7-late-fee": () =>
    import("@/content/blog/aoc-4-mgt-7-late-fee"),
  "change-registered-office-company": () =>
    import("@/content/blog/change-registered-office-company"),
  "fc-gpr-filing-deadline": () =>
    import("@/content/blog/fc-gpr-filing-deadline"),
  "fla-return-due-date": () =>
    import("@/content/blog/fla-return-due-date"),
  "drc-01a-gst-intimation": () =>
    import("@/content/blog/drc-01a-gst-intimation"),
  "income-tax-act-2025-section-mapping": () =>
    import("@/content/blog/income-tax-act-2025-section-mapping"),
  "foreign-rsu-tax-schedule-fa-chennai": () =>
    import("@/content/blog/foreign-rsu-tax-schedule-fa-chennai"),
  "rnor-status-returning-nri": () =>
    import("@/content/blog/rnor-status-returning-nri"),
  "joint-development-agreement-tax-chennai": () =>
    import("@/content/blog/joint-development-agreement-tax-chennai"),
  "section-74a-gst-notice": () =>
    import("@/content/blog/section-74a-gst-notice"),
  "tiruppur-export-refund-rejection": () =>
    import("@/content/blog/tiruppur-export-refund-rejection"),
  "eway-bill-detention-section-129-appeal": () =>
    import("@/content/blog/eway-bill-detention-section-129-appeal"),
  "roc-chennai-vs-roc-coimbatore": () =>
    import("@/content/blog/roc-chennai-vs-roc-coimbatore"),
  "private-limited-company-registration-documents": () =>
    import("@/content/blog/private-limited-company-registration-documents"),
  "company-name-rejection-reasons": () =>
    import("@/content/blog/company-name-rejection-reasons"),
  "tamil-nadu-stamp-duty-company-incorporation": () =>
    import("@/content/blog/tamil-nadu-stamp-duty-company-incorporation"),
  "government-fees-company-registration": () =>
    import("@/content/blog/government-fees-company-registration"),
  "nri-director-private-limited-company": () =>
    import("@/content/blog/nri-director-private-limited-company"),
  "foreign-national-director-indian-company": () =>
    import("@/content/blog/foreign-national-director-indian-company"),
  "registered-office-at-home-company": () =>
    import("@/content/blog/registered-office-at-home-company"),
  "company-registration-timeline-day-by-day": () =>
    import("@/content/blog/company-registration-timeline-day-by-day"),
  "din-and-dsc-for-company-directors": () =>
    import("@/content/blog/din-and-dsc-for-company-directors"),
  "moa-objects-clause-drafting": () =>
    import("@/content/blog/moa-objects-clause-drafting"),
  "is-it-safe-to-outsource-bookkeeping-to-india": () =>
    import("@/content/blog/is-it-safe-to-outsource-bookkeeping-to-india"),
  "authorised-vs-paid-up-capital": () =>
    import("@/content/blog/authorised-vs-paid-up-capital"),
  "inc-20a-commencement-of-business": () =>
    import("@/content/blog/inc-20a-commencement-of-business"),
  "mtd-income-tax-records-sole-traders-2026": () =>
    import("@/content/blog/mtd-income-tax-records-sole-traders-2026"),
  "first-board-meeting-checklist": () =>
    import("@/content/blog/first-board-meeting-checklist"),
  "first-auditor-appointment-adt-1": () =>
    import("@/content/blog/first-auditor-appointment-adt-1"),
  "can-overseas-bookkeeper-do-bas-australia": () =>
    import("@/content/blog/can-overseas-bookkeeper-do-bas-australia"),
  "opening-current-account-new-company": () =>
    import("@/content/blog/opening-current-account-new-company"),
  "convert-proprietorship-to-private-limited": () =>
    import("@/content/blog/convert-proprietorship-to-private-limited"),
  "uae-e-invoicing-2027-bookkeeping-checklist": () =>
    import("@/content/blog/uae-e-invoicing-2027-bookkeeping-checklist"),
  "convert-partnership-firm-to-llp": () =>
    import("@/content/blog/convert-partnership-firm-to-llp"),
  "convert-llp-to-private-limited": () =>
    import("@/content/blog/convert-llp-to-private-limited"),
  "catch-up-bookkeeping-how-long-what-to-send": () =>
    import("@/content/blog/catch-up-bookkeeping-how-long-what-to-send"),
  "opc-to-private-limited-conversion": () =>
    import("@/content/blog/opc-to-private-limited-conversion"),
  "private-limited-company-for-ecommerce-sellers": () =>
    import("@/content/blog/private-limited-company-for-ecommerce-sellers"),
  "company-registration-for-it-startups-chennai": () =>
    import("@/content/blog/company-registration-for-it-startups-chennai"),
  "company-registration-for-manufacturers-tamil-nadu": () =>
    import("@/content/blog/company-registration-for-manufacturers-tamil-nadu"),
  "share-allotment-after-incorporation": () =>
    import("@/content/blog/share-allotment-after-incorporation"),
  "esop-ready-articles-for-startups": () =>
    import("@/content/blog/esop-ready-articles-for-startups"),
  "shareholders-agreement-founders": () =>
    import("@/content/blog/shareholders-agreement-founders"),
  "company-registration-mistakes-founders-make": () =>
    import("@/content/blog/company-registration-mistakes-founders-make"),
  "gst-registration-after-company-incorporation": () =>
    import("@/content/blog/gst-registration-after-company-incorporation"),
  "agile-pro-s-pan-tan-epfo-esic": () =>
    import("@/content/blog/agile-pro-s-pan-tan-epfo-esic"),
  "private-limited-company-penalties-non-compliance": () =>
    import("@/content/blog/private-limited-company-penalties-non-compliance"),
  "section-140-startup-tax-holiday": () =>
    import("@/content/blog/section-140-startup-tax-holiday"),
  "how-to-choose-a-chartered-accountant-in-chennai": () =>
    import("@/content/blog/how-to-choose-a-chartered-accountant-in-chennai"),
  "ca-firm-or-online-filing-platform": () =>
    import("@/content/blog/ca-firm-or-online-filing-platform"),
  "gst-show-cause-notice-first-48-hours": () =>
    import("@/content/blog/gst-show-cause-notice-first-48-hours"),
  "spice-plus-incorporation-explained": () =>
    import("@/content/blog/spice-plus-incorporation-explained"),
  "private-limited-vs-llp-chennai-startups": () =>
    import("@/content/blog/private-limited-vs-llp-chennai-startups"),
  "gst-appellate-tribunal-gstat-explained": () =>
    import("@/content/blog/gst-appellate-tribunal-gstat-explained"),
  "tds-return-filing-deadlines": () =>
    import("@/content/blog/tds-return-filing-deadlines"),
  "msme-udyam-registration-checklist": () =>
    import("@/content/blog/msme-udyam-registration-checklist"),
  "rera-compliance-calendar-tamil-nadu": () =>
    import("@/content/blog/rera-compliance-calendar-tamil-nadu"),
  "12a-80g-registration-guide-chennai-ngos": () =>
    import("@/content/blog/12a-80g-registration-guide-chennai-ngos"),
  "statutory-audit-checklist": () =>
    import("@/content/blog/statutory-audit-checklist"),
  "add-remove-director": () =>
    import("@/content/blog/add-remove-director"),
  "advance-tax-deadlines": () =>
    import("@/content/blog/advance-tax-deadlines"),
  "after-gst-show-cause-reply": () =>
    import("@/content/blog/after-gst-show-cause-reply"),
  "capital-gains-tax-property-sale": () =>
    import("@/content/blog/capital-gains-tax-property-sale"),
  "documents-checklist-before-auditor-visit": () =>
    import("@/content/blog/documents-checklist-before-auditor-visit"),
  "fcra-registration": () =>
    import("@/content/blog/fcra-registration"),
  "form-3ceb-due-date-applicability": () =>
    import("@/content/blog/form-3ceb-due-date-applicability"),
  "gst-freelancers-consultants": () =>
    import("@/content/blog/gst-freelancers-consultants"),
  "gstr9-annual-return-checklist": () =>
    import("@/content/blog/gstr9-annual-return-checklist"),
  "itc-mismatch-notices": () =>
    import("@/content/blog/itc-mismatch-notices"),
  "llp-annual-filing-form8-form11": () =>
    import("@/content/blog/llp-annual-filing-form8-form11"),
  "lut-for-exporters": () =>
    import("@/content/blog/lut-for-exporters"),
  "nri-itr-filing": () =>
    import("@/content/blog/nri-itr-filing"),
  "post-incorporation-compliance-checklist": () =>
    import("@/content/blog/post-incorporation-compliance-checklist"),
  "statutory-vs-tax-vs-internal-audit": () =>
    import("@/content/blog/statutory-vs-tax-vs-internal-audit"),
  "strike-off-vs-winding-up": () =>
    import("@/content/blog/strike-off-vs-winding-up"),
  "tds-on-rent": () =>
    import("@/content/blog/tds-on-rent"),
  "virtual-cfo-omr-startups": () =>
    import("@/content/blog/virtual-cfo-omr-startups"),
  "what-virtual-cfo-reviews-monthly": () =>
    import("@/content/blog/what-virtual-cfo-reviews-monthly"),
  "business-personal-expenses-separate": () =>
    import("@/content/blog/business-personal-expenses-separate"),
  "safe-cash-deposit-limit": () =>
    import("@/content/blog/safe-cash-deposit-limit"),
  "why-income-tax-notices-issued": () =>
    import("@/content/blog/why-income-tax-notices-issued"),
  "gst-threshold-is-a-trigger": () =>
    import("@/content/blog/gst-threshold-is-a-trigger"),
  "cost-of-diy-gst-filing": () =>
    import("@/content/blog/cost-of-diy-gst-filing"),
  "cash-flow-not-profit-business-failure": () =>
    import("@/content/blog/cash-flow-not-profit-business-failure"),
} as const;

export type BlogSlug = keyof typeof modules;

// Metadata for the index page — kept in sync with each post's own `meta`
// export by convention; duplicated here (rather than importing every module
// eagerly) so the /blog index stays a cheap static list.
export const BLOG_INDEX: BlogPostMeta[] = [
  {
    slug: "dir-3-kyc-due-date-late-fee",
    title: "DIR-3 KYC 2026: Due Date, ₹5,000 Late Fee, Deactivated DIN",
    description:
      "DIR-3 KYC is now filed once every three financial years, by 30 June. The new due dates, the ₹5,000 late and reactivation fee, and how to revive a DIN.",
    date: "2026-11-13",
    excerpt:
      "Directors no longer file KYC every year. From 31 March 2026, DIR-3 KYC Web is due once every third financial year by 30 June. Here is when yours falls due and what a missed filing costs.",
  },
  {
    slug: "aoc-4-mgt-7-late-fee",
    title: "AOC-4 and MGT-7 Late Fee 2026: How ₹100 a Day Adds Up",
    description:
      "AOC-4 is due 30 days and MGT-7 60 days after the AGM. How the ₹100-a-day additional fee works, the FY 2025-26 relaxation, MGT-7A and Sec 92/137 penalty.",
    date: "2026-11-13",
    excerpt:
      "Late AOC-4 and MGT-7 filings cost ₹100 a day per form, with no cap. Here is how the fee is counted, what the MCA's October 2026 relaxation changes, and the separate penalties.",
  },
  {
    slug: "change-registered-office-company",
    title: "Registered Office Change 2026: INC-22, INC-23 and MGT-14",
    description:
      "How a company changes its registered office in India: same city, same state under another ROC, or another state. INC-22, INC-23, MGT-14 and timelines.",
    date: "2026-11-13",
    excerpt:
      "A move across the road needs one form. A move to another state needs a special resolution, newspaper notices and Regional Director approval. Here is each route, step by step.",
  },
  {
    slug: "fc-gpr-filing-deadline",
    title: "FC-GPR Filing 2026: 30-Day Deadline, Documents, Late Fee",
    description:
      "FC-GPR is filed on the RBI FIRMS portal within 30 days of allotting shares to a foreign investor. Documents needed and how the late submission fee works.",
    date: "2026-11-13",
    excerpt:
      "An Indian company that allots shares to a foreign investor has 30 days to report it in FC-GPR. Here is the timeline, the documents the form needs, and the late submission fee formula.",
  },
  {
    slug: "fla-return-due-date",
    title: "FLA Return Due 15 July 2027: Who Must File and How",
    description:
      "RBI's FLA return is due by 15 July each year from Indian entities with FDI or overseas investment: who files, provisional data, FLAIR portal, late fee.",
    date: "2026-11-13",
    excerpt:
      "Every Indian company or LLP with foreign direct investment or overseas investment files the RBI's FLA return by 15 July. Here is who must file, what goes into it and how the FLAIR portal works.",
  },
  {
    slug: "drc-01a-gst-intimation",
    title: "DRC-01A GST Intimation 2026: What It Means, How to Reply",
    description:
      "DRC-01A is the GST officer's intimation before a show cause notice under Rule 142(1A). Whether it is mandatory, Part A and Part B, paying vs contesting.",
    date: "2026-11-13",
    excerpt:
      "A DRC-01A is not yet a show cause notice, but it usually comes just before one. Here is what Part A tells you, how to answer in Part B, and when paying through DRC-03 makes sense.",
  },
  {
    slug: "income-tax-act-2025-section-mapping",
    title: "Income-tax Act 2025: Old vs New Section and Form Numbers",
    description:
      "Section 44AB is now 63, 195 is 393(2), 54 is 82, Form 15CA is 145 and Form 3CEB is 48. A table of 1961 to 2025 section, form and rule numbers.",
    date: "2026-11-13",
    excerpt:
      "The Income-tax Act, 2025 renumbers most sections and forms from tax year 2026-27. A lookup table of old and new numbers for audit, TDS, capital gains, notices and transfer pricing.",
  },
  {
    slug: "foreign-rsu-tax-schedule-fa-chennai",
    title: "Foreign RSU and ESPP Tax and Schedule FA for Chennai Staff",
    description:
      "How RSUs and ESPP shares from a foreign parent are taxed for Chennai employees: perquisite at vest, capital gains on sale, foreign tax credit and Schedule FA.",
    date: "2026-10-12",
    excerpt:
      "RSUs and ESPP shares from a US or other foreign parent are taxed at vest and again on sale, and must be reported in Schedule FA every year. A walk-through for Chennai employees.",
  },
  {
    slug: "rnor-status-returning-nri",
    title: "RNOR Status for NRIs Returning to Chennai: Tax Guide",
    description:
      "Returning to Chennai from abroad? How RNOR status works under the Income-tax Act, 2025, what income is taxed, NRE and FCNR accounts, foreign retirement funds.",
    date: "2026-10-12",
    excerpt:
      "Most NRIs moving back to Chennai get a transition period as resident but not ordinarily resident (RNOR). Here is how the tests work and what to do in your first three years back.",
  },
  {
    slug: "joint-development-agreement-tax-chennai",
    title: "Joint Development Agreement Tax for Chennai Landowners",
    description:
      "JDA tax for Chennai landowners: when capital gains arise, GST on your flats, 10% TDS on cash, NRI co-owner TDS and repatriation, with a worked example.",
    date: "2026-10-12",
    updated: "2026-11-13",
    excerpt:
      "Bungalow-to-apartment redevelopment is common in R A Puram, Mylapore and Adyar. Here is how a landowner is taxed under a joint development agreement, step by step.",
  },
  {
    slug: "section-74a-gst-notice",
    title: "Section 74A GST Notice: Time Limits, Penalty and Reply",
    description:
      "Section 74A GST notices for FY 2024-25 onwards: how it replaces Sections 73 and 74, the 42-month and 12-month limits, fraud vs non-fraud penalty, and replies.",
    date: "2026-10-12",
    updated: "2026-11-13",
    excerpt:
      "From FY 2024-25, GST demands are raised under a single Section 74A. Here is how its time limits and penalties differ from Sections 73 and 74, and how to reply.",
  },
  {
    slug: "tiruppur-export-refund-rejection",
    title: "Export Refund Rejected? A Guide for Tiruppur Exporters",
    description:
      "Why IGST and LUT export refunds of Tiruppur knitwear exporters are held or rejected: shipping bill mismatches, ICEGATE errors, RFD-03 memos and appeal routes.",
    date: "2026-10-12",
    excerpt:
      "Shipping bill mismatches, ICEGATE error codes, inverted duty formula cuts and deficiency memos: the usual reasons Tiruppur export refunds stall, and how each is fixed.",
  },
  {
    slug: "eway-bill-detention-section-129-appeal",
    title: "E-Way Bill Detention Under Section 129: Release and Appeal",
    description:
      "Goods detained under Section 129 in Tamil Nadu: the MOV forms, current penalty amounts, paying for release vs contesting, and the appeal with a 10% pre-deposit.",
    date: "2026-10-12",
    updated: "2026-11-13",
    excerpt:
      "A vehicle stopped for an e-way bill lapse: what each MOV form means, how the Section 129 penalty is worked out, whether to pay or contest, and how to appeal.",
  },
  {
    slug: "roc-chennai-vs-roc-coimbatore",
    title: "ROC Chennai vs ROC Coimbatore: Which ROC Is Yours?",
    description:
      "Which ROC handles your Tamil Nadu company? District-wise ROC Chennai and Coimbatore list, Puducherry, the Regional Director and official MCA contacts.",
    date: "2026-10-12",
    updated: "2026-11-13",
    excerpt:
      "Tamil Nadu has two Registrars of Companies. A district-by-district table, what the ROC actually decides for your company, and where Puducherry fits.",
  },
  {
    slug: "private-limited-company-registration-documents",
    title: "Private Limited Company Registration: Documents Checklist",
    description:
      "Documents needed to register a private limited company: resident and NRI directors, foreign subscribers, registered office proof, and common name mismatches.",
    date: "2026-10-08",
    excerpt:
      "A practical SPICe+ document checklist: director KYC, attestation for foreign subscribers, registered office proof, and the mismatches behind rejections.",
  },
  {
    slug: "company-name-rejection-reasons",
    title: "Why the MCA Rejects Company Names (and How to Avoid It)",
    description:
      "Why the MCA rejects company names, how to check name availability and trademarks, and how RUN differs from SPICe+ Part A, with tips for two strong names.",
    date: "2026-10-13",
    updated: "2026-11-13",
    excerpt:
      "Identical names, trademark clashes, restricted words and generic descriptive names: why SPICe+ Part A name applications fail, and how to avoid it.",
  },
  {
    slug: "tamil-nadu-stamp-duty-company-incorporation",
    title: "Stamp Duty on Company Incorporation in Tamil Nadu (2026)",
    description:
      "Stamp duty on MoA and AoA in Tamil Nadu, how SPICe+ collects it, and the duty on increasing authorised capital (SH-7) and share transfers (SH-4).",
    date: "2026-10-16",
    updated: "2026-11-13",
    excerpt:
      "Stamp duty on the MoA and AoA is a state levy. Here is how it works for a Tamil Nadu company, how SPICe+ collects it, and why authorised capital matters.",
  },
  {
    slug: "government-fees-company-registration",
    title: "Government Fees for Company Registration in India (2026)",
    description:
      "Statutory costs of registering a company in India: MCA fee and zero-fee band, name reservation, PAN, TAN, Tamil Nadu stamp duty, OPC and DSC.",
    date: "2026-10-20",
    updated: "2026-11-13",
    excerpt:
      "A breakdown of the statutory, government-side costs of incorporating a company: MCA filing fee, name reservation, PAN, TAN, stamp duty and DSC.",
  },
  {
    slug: "nri-director-private-limited-company",
    title: "NRI as Director of an Indian Private Limited Company",
    description:
      "How NRIs can be directors and shareholders of an Indian private limited company: DIN, attested documents, the 182-day resident director rule and FDI reporting.",
    date: "2026-10-23",
    excerpt:
      "NRIs can be directors and shareholders of an Indian company. Here is how DIN, document attestation, the resident director rule and FDI reporting work.",
  },
  {
    slug: "foreign-national-director-indian-company",
    title: "Foreign Nationals as Directors of an Indian Company",
    description:
      "How foreign nationals can be directors of an Indian company: apostille vs consular attestation, business visa, DIN, FDI routes and land-border country rules.",
    date: "2026-10-27",
    excerpt:
      "Foreign nationals can be directors and shareholders of Indian companies. Here is how attestation, business visas, FDI routes and Press Note 3 rules apply.",
  },
  {
    slug: "registered-office-at-home-company",
    title: "Can Your Home Be a Company's Registered Office?",
    description:
      "Using a home, rented flat or co-working space as a company's registered office: the NOC, utility bill and rent agreement MCA expects, and when INC-22 applies.",
    date: "2026-10-30",
    excerpt:
      "A home, rented flat or co-working desk can serve as a registered office. Here is the proof MCA expects, when INC-22 applies, and the mistakes to avoid.",
  },
  {
    slug: "company-registration-timeline-day-by-day",
    title: "Company Registration Timeline: A Day-by-Day Guide",
    description:
      "A realistic 7 to 12 working day timeline for registering a private limited company through SPICe+, step by step, and the common issues that cause delays.",
    date: "2026-11-03",
    excerpt:
      "How long does company registration really take? A step-by-step 7 to 12 working day timeline for SPICe+, plus the delays founders can control.",
  },
  {
    slug: "din-and-dsc-for-company-directors",
    title: "DIN and DSC for Company Directors: A Practical Guide",
    description:
      "What a Director Identification Number and a Class 3 Digital Signature Certificate are, how to get them, validity, and the new three-yearly DIR-3 KYC cycle.",
    date: "2026-11-06",
    excerpt:
      "Every director needs a DIN and a DSC. Here is how each works, how long they last, and how the revised DIR-3 KYC cycle affects directors from 2026.",
  },
  {
    slug: "moa-objects-clause-drafting",
    title: "Drafting the MoA Objects Clause: A Founder's Guide",
    description:
      "How to write the main objects in a company's MoA, why vague objects cause trouble with banks, GST and licences, and how to alter the objects clause later.",
    date: "2026-11-10",
    excerpt:
      "The objects clause decides what your company can do. Here is how to draft main objects that satisfy the MCA, banks, GST and licensing authorities.",
  },
  {
    slug: "is-it-safe-to-outsource-bookkeeping-to-india",
    title: "Is It Safe to Outsource Bookkeeping to India? A Checklist",
    description:
      "What to check before a firm in India keeps your books: access, the data-transfer rule in the US, UK, Singapore, Australia and UAE, who files and how to exit.",
    date: "2026-11-12",
    excerpt:
      "It can be, if you control the access and the paperwork. A country-by-country checklist covering access, data-transfer rules, who files and what happens when you leave.",
  },
  {
    slug: "authorised-vs-paid-up-capital",
    title: "Authorised vs Paid-Up Capital: What Founders Should Know",
    description:
      "Authorised vs paid-up capital explained: why there is no minimum capital, how capital affects MCA fees and stamp duty, and how to increase it using form SH-7.",
    date: "2026-11-13",
    excerpt:
      "Authorised capital is the ceiling; paid-up capital is what shareholders have actually paid. Here is how to set both, and how to increase capital later.",
  },
  {
    slug: "inc-20a-commencement-of-business",
    title: "INC-20A: Declaration for Commencement of Business",
    description:
      "INC-20A explained: the 180-day deadline under section 10A, documents and photos needed, who certifies it, penalties for missing it and the strike-off risk.",
    date: "2026-11-17",
    excerpt:
      "A new company cannot start business or borrow until it files INC-20A. Here is the 180-day deadline, what the form needs, and what happens if you miss it.",
  },
  {
    slug: "mtd-income-tax-records-sole-traders-2026",
    title: "MTD for Income Tax: What Records Sole Traders Need From 2026",
    description:
      "MTD for Income Tax starts 6 April 2026 above £50,000 of qualifying income. What digital records sole traders and landlords keep, and who sends the updates.",
    date: "2026-11-19",
    excerpt:
      "From 6 April 2026, sole traders and landlords over £50,000 of qualifying income keep digital records and send quarterly updates. What that means for your books.",
  },
  {
    slug: "first-board-meeting-checklist",
    title: "First Board Meeting Checklist for a New Company",
    description:
      "What to cover at a new company's first board meeting: the 30-day deadline, agenda items, director disclosures, statutory registers and share certificates.",
    date: "2026-11-20",
    excerpt:
      "A new company must hold its first board meeting within 30 days of incorporation. Here is a practical agenda, the registers to open, and what to file next.",
  },
  {
    slug: "first-auditor-appointment-adt-1",
    title: "Appointing a Company's First Auditor: Rules and ADT-1",
    description:
      "How the first auditor of a company is appointed under section 139(6), the 30-day board deadline, whether ADT-1 must be filed, and what to do if it is missed.",
    date: "2026-11-24",
    excerpt:
      "The board must appoint the first auditor within 30 days of incorporation. How the rule works, the ADT-1 position, and the fix if the deadline is missed.",
  },
  {
    slug: "can-overseas-bookkeeper-do-bas-australia",
    title: "Can an Overseas Bookkeeper Do My BAS? What the Law Allows",
    description:
      "Under the Tax Agent Services Act, BAS work for a fee needs a registered agent. What an offshore bookkeeper can do, what needs supervision, and Payday Super.",
    date: "2026-11-26",
    excerpt:
      "An offshore bookkeeper can keep and reconcile your books, but BAS services for a fee need a registered BAS or tax agent who supervises, lodges and stays responsible.",
  },
  {
    slug: "opening-current-account-new-company",
    title: "Opening a Current Account for a New Company",
    description:
      "How a new company opens its current account: the AGILE-PRO-S request in SPICe+, the KYC documents banks must collect under RBI rules, and tips to avoid delays.",
    date: "2026-11-27",
    excerpt:
      "Every new company applies for a bank account through AGILE-PRO-S. Here is how that works, which KYC documents banks ask for, and how to avoid delays.",
  },
  {
    slug: "convert-proprietorship-to-private-limited",
    title: "Convert a Proprietorship to a Private Limited Company",
    description:
      "How a sole proprietorship moves into a private limited company: incorporation, business transfer, GST and licence changes, bank accounts and tax conditions.",
    date: "2026-12-01",
    excerpt:
      "There is no one-click conversion. You incorporate a company, transfer the business into it and re-register GST, licences and bank accounts. Here is how.",
  },
  {
    slug: "uae-e-invoicing-2027-bookkeeping-checklist",
    title: "UAE E-Invoicing 2027: What to Fix in Your Books Now",
    description:
      "UAE B2B e-invoicing starts in 2027 through an Accredited Service Provider. The go-live dates, plus the TRN, customer, item and credit-note data to fix first.",
    date: "2026-12-03",
    excerpt:
      "B2B e-invoicing in the UAE goes live from 1 January 2027 for the largest businesses and 1 July 2027 for the rest. A practical checklist of what to clean up in your books first.",
  },
  {
    slug: "convert-partnership-firm-to-llp",
    title: "Convert a Partnership Firm to an LLP: Form 17 Guide",
    description:
      "How a partnership firm converts into an LLP under the Second Schedule of the LLP Act: Form 17, eligibility, Form 14, and what happens to contracts and licences.",
    date: "2026-12-04",
    excerpt:
      "A firm can convert into an LLP if every partner becomes a partner of the LLP. Here is how Form 17 works and what carries over automatically.",
  },
  {
    slug: "convert-llp-to-private-limited",
    title: "Convert an LLP to a Private Limited Company (URC-1)",
    description:
      "How an LLP becomes a private limited company under section 366 of the Companies Act: URC-1, newspaper notice, creditor consent, tax conditions and next steps.",
    date: "2026-12-08",
    excerpt:
      "LLPs that want equity investors or ESOPs often move to a company. Here is how the section 366 route, URC-2 notice and URC-1 filing work in practice.",
  },
  {
    slug: "catch-up-bookkeeping-how-long-what-to-send",
    title: "Catch-Up Bookkeeping: How Long It Takes and What to Send",
    description:
      "What catch-up bookkeeping involves, what decides how long it takes, the documents to send, the order the work is done in, and how filing deadlines are handled.",
    date: "2026-12-10",
    excerpt:
      "Books months behind? What decides how long a catch-up takes, the documents to send, and the order the work is done in, from bank reconciliations to tax figures.",
  },
  {
    slug: "opc-to-private-limited-conversion",
    title: "OPC to Private Limited Conversion: INC-6 Process",
    description:
      "How a One Person Company converts into a private limited company using Form INC-6, why conversion is now voluntary, and what changes in compliance afterwards.",
    date: "2026-12-11",
    excerpt:
      "Since 2021 an OPC no longer has to convert when it crosses capital or turnover limits. When you choose to convert, here is how INC-6 works.",
  },
  {
    slug: "private-limited-company-for-ecommerce-sellers",
    title: "Private Limited Company for E-commerce Sellers",
    description:
      "When online sellers should incorporate, how GST registration works for marketplace sales, the enrolment option for small sellers, and TCS at 0.5% explained.",
    date: "2026-12-15",
    excerpt:
      "Selling on Amazon, Flipkart or your own site? When to move to a private limited company, and how GST, enrolment numbers and marketplace TCS work.",
  },
  {
    slug: "company-registration-for-it-startups-chennai",
    title: "Company Registration for IT and SaaS Startups in Chennai",
    description:
      "Structure choices for Chennai software and SaaS founders: private limited vs LLP, ESOPs, foreign client billing with LUT and inward remittances, and DPIIT.",
    date: "2026-12-18",
    excerpt:
      "Software and SaaS founders face specific questions: which structure investors expect, how ESOPs work, and how to bill foreign clients without paying IGST.",
  },
  {
    slug: "company-registration-for-manufacturers-tamil-nadu",
    title: "Company Registration for Manufacturers in Tamil Nadu",
    description:
      "Why manufacturers in Tamil Nadu often choose a private limited company, and the registrations that follow: Udyam, GST, pollution consent and factory licensing.",
    date: "2026-12-22",
    excerpt:
      "Setting up a manufacturing unit in Tamil Nadu? Why a private limited company helps with bank finance, and the registrations to plan alongside it.",
  },
  {
    slug: "share-allotment-after-incorporation",
    title: "Share Allotment After Incorporation: A Founder's Guide",
    description:
      "What founders must do with shares after incorporation: subscription money, INC-20A, share certificates within 60 days, PAS-3 for new issues and FC-GPR.",
    date: "2026-12-25",
    excerpt:
      "Subscriber shares, share certificates, INC-20A, PAS-3 and FC-GPR: the share-related steps a new private limited company must get right in year one.",
  },
  {
    slug: "esop-ready-articles-for-startups",
    title: "ESOP-Ready Articles of Association for Startups",
    description:
      "How to draft startup articles that support ESOPs: Rule 12 eligibility, capital headroom, transfer and leaver clauses, ESOP trusts and DPIIT flexibilities.",
    date: "2026-12-29",
    excerpt:
      "An ESOP plan is only as good as the articles behind it. What to build into your AoA so options can be granted, exercised and bought back cleanly.",
  },
  {
    slug: "shareholders-agreement-founders",
    title: "Shareholders' Agreement for Founders: What to Cover",
    description:
      "Why co-founders need a shareholders' or founders' agreement: vesting, transfer restrictions, deadlock, exits, and how it must align with the articles.",
    date: "2027-01-01",
    excerpt:
      "Co-founders agree on everything at the start. A founders' agreement records what happens when they don't: vesting, exits, transfers and deadlock.",
  },
  {
    slug: "company-registration-mistakes-founders-make",
    title: "10 Company Registration Mistakes Founders Make",
    description:
      "Ten practical mistakes founders make when registering a private limited company, from vague objects and wrong capital to missed INC-20A and mixed funds.",
    date: "2027-01-05",
    excerpt:
      "Vague objects, inflated capital, a missed INC-20A, personal money mixed with company money: ten avoidable mistakes in a company's first year.",
  },
  {
    slug: "gst-registration-after-company-incorporation",
    title: "GST Registration After Company Incorporation",
    description:
      "When a new company needs GST registration, the AGILE-PRO-S option at incorporation, Tamil Nadu thresholds, compulsory cases, documents and the process.",
    date: "2027-01-08",
    excerpt:
      "Your company is incorporated. Does it need GST now, later or never? Thresholds, compulsory cases, the AGILE-PRO-S option and the documents to keep ready.",
  },
  {
    slug: "agile-pro-s-pan-tan-epfo-esic",
    title: "AGILE-PRO-S Explained: EPFO, ESIC, GSTIN and Bank",
    description:
      "What the AGILE-PRO-S form filed with SPICe+ covers: mandatory EPFO, ESIC and bank account, optional GSTIN, and why Tamil Nadu profession tax stays separate.",
    date: "2027-01-12",
    excerpt:
      "AGILE-PRO-S rides along with every SPICe+ incorporation. What it registers automatically, what is optional, and what Chennai companies still do separately.",
  },
  {
    slug: "private-limited-company-penalties-non-compliance",
    title: "Private Limited Company Penalties for Non-Compliance",
    description:
      "What a private limited company risks when filings slip: ₹100 per day late fees on AOC-4 and MGT-7, penalties, director disqualification and strike-off.",
    date: "2027-01-15",
    excerpt:
      "Missed annual filings cost more than late fees. How additional fees, penalties, section 164(2) disqualification and strike-off build up, and how to fix it.",
  },
  {
    slug: "section-140-startup-tax-holiday",
    title: "Section 140 Startup Tax Holiday: Eligibility Guide",
    description:
      "The startup tax holiday under section 140 of the Income-tax Act, 2025 (formerly 80-IAC): eligibility, IMB certificate, ₹100 crore turnover cap, 3 of 10 years.",
    date: "2027-01-19",
    excerpt:
      "Section 140 of the Income-tax Act, 2025 carries forward the 80-IAC startup tax holiday. Who qualifies, what changed, and how to claim it properly.",
  },
  {
    slug: "how-to-choose-a-chartered-accountant-in-chennai",
    title: "How to Choose a CA Firm in Chennai: 9 Checks Before You Hire",
    description:
      "Nine checks before hiring a CA firm in Chennai: ICAI membership, peer review, fee clarity, response times, specialisation, data security and red flags.",
    date: "2026-09-16",
    updated: "2026-10-06",
    excerpt:
      "Credentials, service breadth, responsiveness, and red flags — a practical checklist for picking a chartered accountant in Chennai.",
  },
  {
    slug: "ca-firm-or-online-filing-platform",
    title: "CA Firm or Online Filing Platform: How to Choose",
    description:
      "How to choose between a chartered accountant firm and an online filing platform: who signs, ICAI checks, confidentiality, fees and which work suits each.",
    date: "2026-11-08",
    excerpt:
      "Who signs your filings, how to verify a chartered accountant, how fees are split and which kinds of work suit each option, set out without naming any provider.",
  },
  {
    slug: "gst-show-cause-notice-first-48-hours",
    title: "GST Show-Cause Notice: What to Do in the First 48 Hours",
    description:
      "Received a GST show-cause notice? Here's exactly what to check, gather, and do in the first 48 hours before your reply deadline.",
    date: "2026-09-19",
    excerpt:
      "The first 48 hours after a GST show-cause notice decide whether this becomes a quick reply or a years-long appeal. Here's the checklist.",
  },
  {
    slug: "spice-plus-incorporation-explained",
    title: "SPICe+ Step by Step (2026): Part A, Part B and AGILE-PRO-S",
    description:
      "SPICe+ step by step for 2026: Part A, Part B, e-MoA, e-AoA, AGILE-PRO-S, DSC and DIN, how to resubmit, and the errors the MCA flags most often.",
    date: "2026-09-19",
    updated: "2026-11-13",
    excerpt:
      "How a Tamil Nadu company is incorporated on MCA V3 today: Part A, Part B, the linked forms, what AGILE-PRO-S makes mandatory, and why filings come back.",
  },
  {
    slug: "private-limited-vs-llp-chennai-startups",
    title: "Pvt Ltd vs LLP for Chennai Founders Raising Funds or Hiring",
    description:
      "Planning to raise funding or hire in Chennai? How a private limited company and an LLP differ on equity, ESOPs, foreign investment, payroll and compliance.",
    date: "2026-09-19",
    updated: "2026-10-12",
    excerpt:
      "For Chennai founders who expect investors or employees soon: why share capital, ESOPs and investor paperwork usually point to a private limited company.",
  },
  {
    slug: "gst-appellate-tribunal-gstat-explained",
    title: "How to File a GSTAT Appeal in Tamil Nadu: Step by Step",
    description:
      "How to file a GST Appellate Tribunal appeal in Tamil Nadu: eligibility, the 3-month limit, the further 10% pre-deposit, Form APL-05, documents and TN benches.",
    date: "2026-09-19",
    updated: "2026-10-12",
    excerpt:
      "A step-by-step guide to a GSTAT second appeal from Tamil Nadu: who can file, time limits, pre-deposit, APL-05 on the e-filing portal, documents, benches and what follows.",
  },
  {
    slug: "tds-return-filing-deadlines",
    title: "TDS Return Filing Deadlines for FY 2026-27",
    description:
      "Quarterly TDS return due dates for FY 2026-27, the Section 234E late fee and Section 271H penalty, and a practical checklist for filing each quarter on time.",
    date: "2026-09-19",
    excerpt:
      "Every quarterly TDS deadline for FY 2026-27, plus the penalty math for missing one — bookmark this one.",
  },
  {
    slug: "msme-udyam-registration-checklist",
    title: "MSME Udyam Registration After Incorporation: A Checklist",
    description:
      "Udyam registration for new companies: 2025 MSME limits, documents, the 45-day payment rule under Section 43B(h), the MSME-1 return and key benefits.",
    date: "2026-09-19",
    updated: "2026-11-13",
    excerpt:
      "Udyam registration unlocks delayed-payment protection, priority lending, and tender eligibility. Here's whether you qualify and how to apply.",
  },
  {
    slug: "rera-compliance-calendar-tamil-nadu",
    title: "RERA Compliance Calendar for Tamil Nadu Developers",
    description:
      "Every recurring RERA filing deadline Tamil Nadu developers need to track, from Quarterly Progress Reports to project extensions.",
    date: "2026-09-19",
    excerpt:
      "Quarterly Progress Reports, escrow certifications, and extension filings — the full TNRERA compliance calendar in one place.",
  },
  {
    slug: "12a-80g-registration-guide-chennai-ngos",
    title: "12A and 80G Registration: Step-by-Step for Chennai NGOs",
    description:
      "How Chennai trusts, societies, and Section 8 companies can register under 12A and 80G to unlock tax exemption and donor deductions.",
    date: "2026-09-19",
    excerpt:
      "12A exempts your NGO's income; 80G lets your donors claim a deduction. Most Chennai NGOs need both — here's the process.",
  },
  {
    slug: "statutory-audit-checklist",
    title: "Statutory Audit Checklist: What Auditors Actually Ask For",
    description:
      "The documents and records a statutory auditor will actually request — prepare your company for a faster, smoother audit.",
    date: "2026-09-19",
    excerpt:
      "Most audit delays come from documents nobody prepared in advance. Here's exactly what your auditor is going to ask for.",
  },
  {
    slug: "add-remove-director",
    title: "How to Add or Remove a Director from Your Company",
    description:
      "Founders in Chennai often need to add a co founder, an investor's nominee, or remove a director who is exiting — each has a specific procedure to follow.",
    date: "2026-09-19",
    excerpt:
      "Founders in Chennai often need to add a co founder as a director, bring on an investor's nominee, or remove a director who is exiting the...",
  },
  {
    slug: "advance-tax-deadlines",
    title: "Advance Tax Due Dates 2026-27: Instalments and Interest",
    description:
      "Advance tax for tax year 2026-27 is due 15 June, 15 September, 15 December and 15 March: 15%, 45%, 75% and 100%. Who must pay and how interest works.",
    date: "2026-09-19",
    updated: "2026-11-13",
    excerpt:
      "Advance tax for tax year 2026-27 is paid in four instalments: 15%, 45%, 75% and 100% by 15 June, 15 September, 15 December and 15 March. Who must pay, and how interest is avoided.",
  },
  {
    slug: "after-gst-show-cause-reply",
    title: "What Happens After You Reply to a GST Show Cause Notice",
    description:
      "After a GST show cause notice reply: the Section 75 personal hearing, time limits for the order, the DRC-07 order, rectification and appeal deadlines.",
    date: "2026-09-19",
    updated: "2026-11-13",
    excerpt:
      "Your DRC-06 reply is filed. What comes next: the personal hearing, the officer's time limit, the DRC-07 order, rectification and the appeal clock.",
  },
  {
    slug: "capital-gains-tax-property-sale",
    title: "Capital Gains Tax on Selling Property in Chennai: 2026 Guide",
    description:
      "How capital gains on a Chennai flat, house or plot are taxed in 2026: 12.5% vs 20% indexed, guideline value, reinvestment exemptions, TDS and joint owners.",
    date: "2026-09-19",
    updated: "2026-10-12",
    excerpt:
      "A worked guide to capital gains on selling a Chennai house, flat or plot: the 12.5% or 20% indexed choice, guideline value, reinvestment exemptions, TDS and co-owners.",
  },
  {
    slug: "documents-checklist-before-auditor-visit",
    title: "Documents Checklist Before Your Auditor's Visit",
    description:
      "Most audit delay in Chennai businesses has nothing to do with book complexity and everything to do with documents not being ready when the auditor arrives.",
    date: "2026-09-19",
    excerpt:
      "A surprising amount of audit delay in Chennai businesses has nothing to do with the complexity of the books and everything to do with...",
  },
  {
    slug: "fcra-registration",
    title: "FCRA Registration for Chennai NGOs Accepting Foreign Funds",
    description:
      "Any Chennai trust, society, or Section 8 company accepting foreign donations needs FCRA registration first — and the rules have tightened considerably.",
    date: "2026-09-19",
    excerpt:
      "Any trust, society, or Section 8 company in Chennai that wants to receive donations or grants from a foreign source needs FCRA registration...",
  },
  {
    slug: "form-3ceb-due-date-applicability",
    title: "Form 3CEB Due Date 2026, Applicability and Form 48",
    description:
      "Form 3CEB for FY 2025-26 was due 31 October 2026. Who must file, the ₹20 crore domestic rule, the late-filing penalty, and Form 48 from tax year 2026-27.",
    date: "2026-09-25",
    updated: "2026-11-13",
    excerpt:
      "Form 3CEB for FY 2025-26 was due on 31 October 2026. Who must file it, what happens if it is late, and how Form 48 replaces it from tax year 2026-27.",
  },
  {
    slug: "gst-freelancers-consultants",
    title: "GST on Freelancers and Consultants: Do You Need to Register?",
    description:
      "Freelance designers, consultants, developers, and marketing professionals in Chennai often assume GST is only for shops and factories.",
    date: "2026-09-19",
    excerpt:
      "Freelance designers, consultants, developers, and marketing professionals in Chennai often assume GST is only for shops and factories.",
  },
  {
    slug: "gstr9-annual-return-checklist",
    title: "GSTR-9 Annual Return: Filing Checklist for Small Businesses",
    description:
      "GSTR 9 is the annual return every regular GST registered business must file, summarizing a full year of GSTR-1 and GSTR-3B filings. A practical checklist.",
    date: "2026-09-19",
    excerpt:
      "GSTR 9 is the annual return every regular GST registered business needs to file, summarizing an entire financial year of GSTR 1 and GSTR 3B...",
  },
  {
    slug: "itc-mismatch-notices",
    title: "ITC Mismatch Notices: Why They Happen and How to Respond",
    description:
      "An ITC mismatch notice is one of the most common GST notices Chennai businesses receive — usually because GSTR-3B and a supplier's GSTR-1 don't match.",
    date: "2026-09-19",
    excerpt:
      "An Input Tax Credit (ITC) mismatch notice is one of the most common GST notices Chennai businesses receive, and it usually comes down to...",
  },
  {
    slug: "llp-annual-filing-form8-form11",
    title: "LLP Annual Filing: Form 8 and Form 11 Due Dates Explained",
    description:
      "Every LLP in Chennai must file Form 11 and Form 8 annually, regardless of turnover or activity — here's what each form covers and when they're due.",
    date: "2026-09-25",
    excerpt:
      "Every LLP must file Form 11 and Form 8 annually regardless of turnover or activity — here's exactly what each form covers and when they're due.",
  },
  {
    slug: "lut-for-exporters",
    title: "LUT for Exporters: How to File and Why It Matters",
    description:
      "If your Chennai business exports services or goods, a Letter of Undertaking (LUT) is one of the most valuable and most overlooked GST filings you can make.",
    date: "2026-09-19",
    excerpt:
      "If your Chennai business sells services or goods to clients outside India, a Letter of Undertaking (LUT) is one of the most valuable and...",
  },
  {
    slug: "nri-itr-filing",
    title: "NRI Income Tax Return Filing: A Guide for Chennai NRIs",
    description:
      "NRIs with family, property, or investments in Chennai often have a genuine Indian tax filing obligation that gets overlooked simply by living abroad.",
    date: "2026-09-19",
    excerpt:
      "Non resident Indians with family, property, or investments back in Chennai often have a genuine Indian tax filing obligation that gets...",
  },
  {
    slug: "post-incorporation-compliance-checklist",
    title: "First-Year Compliance Calendar for New Companies (2026-27)",
    description:
      "A dated first-year compliance calendar for a company incorporated in 2026-27: first auditor, board meeting, share certificates, INC-20A, AGM, AOC-4 and MGT-7.",
    date: "2026-09-19",
    updated: "2026-10-12",
    excerpt:
      "Month by month, what a newly incorporated Tamil Nadu company must do in its first year, worked through for a company incorporated on 15 June 2026.",
  },
  {
    slug: "statutory-vs-tax-vs-internal-audit",
    title: "Statutory Audit vs Tax Audit vs Internal Audit Explained",
    description:
      "Chennai business owners often treat \"audit\" as one thing, but statutory, tax, and internal audit are three separate exercises with different triggers.",
    date: "2026-09-19",
    excerpt:
      "Business owners in Chennai often use the word audit as if it means one single thing, but statutory audit, tax audit, and internal audit are...",
  },
  {
    slug: "strike-off-vs-winding-up",
    title: "Company Strike Off vs Winding Up: What Is the Difference",
    description:
      "Shutting down a company that never took off? The first question is strike-off vs. formal winding up — genuinely different processes and costs.",
    date: "2026-09-19",
    excerpt:
      "When a Chennai business owner decides to shut down a company that never took off or has stopped operating, one of the first questions is...",
  },
  {
    slug: "tds-on-rent",
    title: "TDS on Rent: What Chennai Landlords and Tenants Should Know",
    description:
      "TDS on rent trips up both sides in Chennai — tenants who don't realize they must deduct it, and landlords who forget to check it against their return.",
    date: "2026-09-19",
    excerpt:
      "Tax deducted at source on rent payments trips up both sides of the transaction in Chennai, tenants who don't realize they need to deduct it...",
  },
  {
    slug: "virtual-cfo-omr-startups",
    title: "Virtual CFO Support for OMR's Growth-Stage Startups",
    description:
      "IT and startup businesses along Chennai's OMR corridor tend to need a Virtual CFO for a specific reason: getting fundraise-ready, not just filing taxes.",
    date: "2026-09-26",
    excerpt:
      "IT and startup businesses along OMR tend to need a Virtual CFO for one specific reason: getting fundraise-ready, not just filing taxes on time.",
  },
  {
    slug: "what-virtual-cfo-reviews-monthly",
    title: "What a Virtual CFO Actually Reviews Every Month",
    description:
      "Business owners considering Virtual CFO support often aren't sure what it actually involves month to month. Here's what a genuine monthly review covers.",
    date: "2026-09-19",
    excerpt:
      "Business owners considering virtual CFO support often aren't sure what the service actually involves month to month, beyond a vague sense...",
  },
  {
    slug: "business-personal-expenses-separate",
    title: "Mixing Business and Personal Expenses Costs You at Tax Time",
    description:
      "Paying a personal bill from the business account feels harmless in the moment. It's the single habit that creates the most avoidable tax and audit pain.",
    date: "2026-09-26",
    excerpt:
      "Paying a personal bill from the business account feels harmless. It's the single habit that creates the most avoidable tax and audit pain.",
  },
  {
    slug: "safe-cash-deposit-limit",
    title: "How Much Cash Can You Deposit in Your Bank Account?",
    description:
      "There's no single legal cash deposit limit, but specific thresholds trigger automatic reporting to the Income Tax Department. Here's what those actually are.",
    date: "2026-09-26",
    excerpt:
      "There's no single legal cash deposit limit, but specific thresholds trigger automatic reporting to the Income Tax Department.",
  },
  {
    slug: "why-income-tax-notices-issued",
    title: "Why Income Tax Notices Get Issued: The Actual Triggers",
    description:
      "An income tax notice usually means one specific, fixable data mismatch — not that you're in trouble. Here are the actual triggers behind most notices.",
    date: "2026-09-26",
    excerpt:
      "An income tax notice usually means one specific, fixable data mismatch — not that you're in trouble. Here are the actual triggers.",
  },
  {
    slug: "gst-threshold-is-a-trigger",
    title: "The GST Threshold Isn't a Safe Zone — It's a Trigger",
    description:
      "Staying just under the GST registration threshold feels safe. In practice, it's the moment that starts a clock, not a permanent exemption.",
    date: "2026-09-26",
    excerpt:
      "Staying just under the GST registration threshold feels safe. In practice, it's the moment that starts a clock, not a permanent exemption.",
  },
  {
    slug: "cost-of-diy-gst-filing",
    title: "What Goes Wrong When You File GST Returns Yourself",
    description:
      "Handling monthly GST filings yourself looks like an easy saving. The real cost usually shows up months later, and it's rarely the amount you saved.",
    date: "2026-09-26",
    excerpt:
      "Handling monthly GST filings yourself looks like an easy saving. The real cost usually shows up months later, and it's rarely small.",
  },
  {
    slug: "cash-flow-not-profit-business-failure",
    title: "Businesses Fail From a Lack of Cash, Not a Lack of Profit",
    description:
      "A profitable business on paper can still run out of money to pay its own bills. Here's why that gap exists and what actually closes it.",
    date: "2026-09-26",
    excerpt:
      "A profitable business on paper can still run out of money to pay its own bills. Here's why that gap exists and what actually closes it.",
  },
];

export function getPostLoader(slug: string) {
  return (modules as Record<string, (() => Promise<BlogPostModule>) | undefined>)[slug];
}

export function getPostMeta(slug: string) {
  return BLOG_INDEX.find((p) => p.slug === slug);
}

// BLOG_INDEX doubles as a content calendar — most dates are intentionally in
// the future (see CONTENT-CALENDAR.md's "steady drip, not a burst" guidance).
// Since this is a statically-built site, every post would otherwise go live
// simultaneously on deploy with a false past-tense "published" date. This
// gates both the listing and the post route itself so a post genuinely
// isn't reachable — and doesn't claim a datePublished — before its date.
export function isPublished(date: string) {
  const today = new Date().toISOString().slice(0, 10);
  return date <= today;
}

export function getPublishedPosts() {
  return BLOG_INDEX.filter((p) => isPublished(p.date));
}
