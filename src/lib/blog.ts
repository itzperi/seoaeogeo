import type { ComponentType } from "react";
import type { FAQItem } from "@/components/FAQSection";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  updated?: string; // ISO yyyy-mm-dd — last substantive revision (optional)
  excerpt: string;
  faqs?: FAQItem[];
};

export type BlogPostModule = {
  meta: BlogPostMeta;
  default: ComponentType;
};

// Static registry — Next.js needs statically analyzable imports for the App
// Router, so each post is its own module rather than loaded from a CMS.
const modules = {
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
  "authorised-vs-paid-up-capital": () =>
    import("@/content/blog/authorised-vs-paid-up-capital"),
  "inc-20a-commencement-of-business": () =>
    import("@/content/blog/inc-20a-commencement-of-business"),
  "first-board-meeting-checklist": () =>
    import("@/content/blog/first-board-meeting-checklist"),
  "first-auditor-appointment-adt-1": () =>
    import("@/content/blog/first-auditor-appointment-adt-1"),
  "opening-current-account-new-company": () =>
    import("@/content/blog/opening-current-account-new-company"),
  "convert-proprietorship-to-private-limited": () =>
    import("@/content/blog/convert-proprietorship-to-private-limited"),
  "convert-partnership-firm-to-llp": () =>
    import("@/content/blog/convert-partnership-firm-to-llp"),
  "convert-llp-to-private-limited": () =>
    import("@/content/blog/convert-llp-to-private-limited"),
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
  "virtual-cfo-vs-full-time-cfo-cost-comparison": () =>
    import("@/content/blog/virtual-cfo-vs-full-time-cfo-cost-comparison"),
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
  "annual-roc-filing-calendar": () =>
    import("@/content/blog/annual-roc-filing-calendar"),
  "audit-applicability-thresholds": () =>
    import("@/content/blog/audit-applicability-thresholds"),
  "capital-gains-tax-property-sale": () =>
    import("@/content/blog/capital-gains-tax-property-sale"),
  "cash-flow-forecasting-framework": () =>
    import("@/content/blog/cash-flow-forecasting-framework"),
  "common-compliance-mistakes-chennai-startups": () =>
    import("@/content/blog/common-compliance-mistakes-chennai-startups"),
  "documents-checklist-before-auditor-visit": () =>
    import("@/content/blog/documents-checklist-before-auditor-visit"),
  "fcra-registration": () =>
    import("@/content/blog/fcra-registration"),
  "form-3ceb-due-date-applicability": () =>
    import("@/content/blog/form-3ceb-due-date-applicability"),
  "gst-freelancers-consultants": () =>
    import("@/content/blog/gst-freelancers-consultants"),
  "gst-registration-online-sellers-chennai": () =>
    import("@/content/blog/gst-registration-online-sellers-chennai"),
  "gstr9-annual-return-checklist": () =>
    import("@/content/blog/gstr9-annual-return-checklist"),
  "itc-mismatch-notices": () =>
    import("@/content/blog/itc-mismatch-notices"),
  "llp-vs-opc-vs-pvt-ltd": () =>
    import("@/content/blog/llp-vs-opc-vs-pvt-ltd"),
  "llp-annual-filing-form8-form11": () =>
    import("@/content/blog/llp-annual-filing-form8-form11"),
  "lut-for-exporters": () =>
    import("@/content/blog/lut-for-exporters"),
  "msme-loan-schemes-tamil-nadu": () =>
    import("@/content/blog/msme-loan-schemes-tamil-nadu"),
  "nri-itr-filing": () =>
    import("@/content/blog/nri-itr-filing"),
  "old-vs-new-tax-regime": () =>
    import("@/content/blog/old-vs-new-tax-regime"),
  "outgrown-bookkeeping-signs": () =>
    import("@/content/blog/outgrown-bookkeeping-signs"),
  "post-incorporation-compliance-checklist": () =>
    import("@/content/blog/post-incorporation-compliance-checklist"),
  "rera-registration-renewal": () =>
    import("@/content/blog/rera-registration-renewal"),
  "startup-india-registration": () =>
    import("@/content/blog/startup-india-registration"),
  "statutory-vs-tax-vs-internal-audit": () =>
    import("@/content/blog/statutory-vs-tax-vs-internal-audit"),
  "strike-off-vs-winding-up": () =>
    import("@/content/blog/strike-off-vs-winding-up"),
  "tds-on-rent": () =>
    import("@/content/blog/tds-on-rent"),
  "trust-vs-society-vs-section8": () =>
    import("@/content/blog/trust-vs-society-vs-section8"),
  "virtual-cfo-omr-startups": () =>
    import("@/content/blog/virtual-cfo-omr-startups"),
  "what-virtual-cfo-reviews-monthly": () =>
    import("@/content/blog/what-virtual-cfo-reviews-monthly"),
  "gst-litigation-t-nagar-jewellery": () =>
    import("@/content/blog/gst-litigation-t-nagar-jewellery"),
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
      "Why company names get rejected in SPICe+ Part A: identical names, trademark conflicts, restricted words and naming rules, plus how to pick two strong options.",
    date: "2026-10-13",
    excerpt:
      "Identical names, trademark clashes, restricted words and generic descriptive names: why SPICe+ Part A name applications fail, and how to avoid it.",
  },
  {
    slug: "tamil-nadu-stamp-duty-company-incorporation",
    title: "Stamp Duty on Company Incorporation in Tamil Nadu",
    description:
      "How stamp duty on the MoA and AoA works for companies registered in Tamil Nadu, how SPICe+ computes and collects it, and how authorised capital affects it.",
    date: "2026-10-16",
    excerpt:
      "Stamp duty on the MoA and AoA is a state levy. Here is how it works for a Tamil Nadu company, how SPICe+ collects it, and why authorised capital matters.",
  },
  {
    slug: "government-fees-company-registration",
    title: "Government Fees for Company Registration in India",
    description:
      "The statutory costs of registering a company: MCA filing fees, the zero-fee band, name reservation, PAN and TAN, stamp duty and DSC. Government charges only.",
    date: "2026-10-20",
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
    title: "SPICe+ vs. the Old MCA Incorporation Process: What Changed",
    description:
      "How SPICe+ replaced the older multi-form MCA incorporation process, and what it means for Chennai founders registering a company today.",
    date: "2026-09-19",
    excerpt:
      "SPICe+ folded incorporation, PAN, TAN, EPFO, ESIC, and profession tax registration into a single form. Here's what actually changed.",
  },
  {
    slug: "private-limited-vs-llp-chennai-startups",
    title: "Private Limited vs LLP for Chennai Startups: 2026 Comparison",
    description:
      "Choosing between a Private Limited Company and an LLP in Chennai? Compare liability, compliance cost, fundraising fit, and taxation.",
    date: "2026-09-19",
    excerpt:
      "Fundraising plans, compliance appetite, and taxation all point in different directions. Here's how Chennai founders should actually decide.",
  },
  {
    slug: "gst-appellate-tribunal-gstat-explained",
    title: "GST Appellate Tribunal (GSTAT) for Chennai Businesses",
    description:
      "GSTAT benches are becoming operational across states. Here's what Chennai businesses need to know about the new GST appeal process.",
    date: "2026-09-19",
    excerpt:
      "The GST Appellate Tribunal is the second appeal stage after the Appellate Authority — and it's newly operational. Here's what's changed.",
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
      "Should your newly incorporated company register under MSME/Udyam? Here's the eligibility, process, and benefits checklist.",
    date: "2026-09-19",
    excerpt:
      "Udyam registration unlocks delayed-payment protection, priority lending, and tender eligibility. Here's whether you qualify and how to apply.",
  },
  {
    slug: "virtual-cfo-vs-full-time-cfo-cost-comparison",
    title: "Virtual CFO vs Full-Time CFO: A Cost Comparison for Chennai",
    description:
      "A real cost comparison between a Virtual CFO engagement and a full-time in-house CFO hire for growing Chennai businesses.",
    date: "2026-09-19",
    excerpt:
      "A full-time CFO in Chennai costs significantly more than most growth-stage businesses assume. Here's the actual math against a Virtual CFO engagement.",
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
    title: "Advance Tax Deadlines for FY 2026 to 27: A Practical Guide",
    description:
      "Advance tax catches consultants, freelancers, and small business owners in Chennai off guard — it means paying tax in installments through the year.",
    date: "2026-09-19",
    excerpt:
      "Advance tax catches a lot of consultants, freelancers, and small business owners in Chennai off guard, mainly because it requires...",
  },
  {
    slug: "after-gst-show-cause-reply",
    title: "What Happens After You Reply to a GST Show Cause Notice",
    description:
      "Filed your reply to a GST show-cause notice already? Here's what happens next, and realistically how long you should expect the process to take.",
    date: "2026-09-19",
    excerpt:
      "If you have already read our guide on the first forty eight hours after receiving a GST show cause notice and filed your reply, the natural...",
  },
  {
    slug: "annual-roc-filing-calendar",
    title: "Annual ROC Filing Deadlines: Calendar for Chennai Companies",
    description:
      "ROC filings follow a predictable annual cycle, but the forms and deadlines are scattered enough that even organized Chennai companies miss one.",
    date: "2026-09-19",
    excerpt:
      "Registrar of Companies filings follow a predictable annual cycle, but the specific forms and their deadlines are scattered enough across...",
  },
  {
    slug: "audit-applicability-thresholds",
    title: "Audit Applicability Thresholds for Chennai Businesses",
    description:
      "One of the most common questions from growing businesses in Chennai is simple: has my business crossed the point where an audit becomes mandatory.",
    date: "2026-09-19",
    excerpt:
      "One of the most common questions from growing businesses in Chennai is simple: has my business crossed the point where an audit becomes...",
  },
  {
    slug: "capital-gains-tax-property-sale",
    title: "Capital Gains Tax on Property Sale for Chennai Sellers",
    description:
      "Selling a flat or plot in Chennai triggers a capital gains tax calculation that surprises first-time sellers — it depends heavily on holding period.",
    date: "2026-09-19",
    excerpt:
      "Selling a flat or plot in Chennai triggers a capital gains tax calculation that surprises a lot of first time sellers, mainly because the...",
  },
  {
    slug: "cash-flow-forecasting-framework",
    title: "Simple Cash Flow Forecasting Framework for Small Businesses",
    description:
      "Cash flow forecasting sounds like something only large companies need, but small Chennai businesses often run into cash problems for exactly that reason.",
    date: "2026-09-19",
    excerpt:
      "Cash flow forecasting sounds like something only large companies need, but small and mid sized businesses in Chennai often run into far...",
  },
  {
    slug: "common-compliance-mistakes-chennai-startups",
    title: "First-Year Compliance Mistakes Chennai Startups Make",
    description:
      "Chennai founders focused on customers and product often let compliance mistakes pile up quietly until they surface as penalties or blocked fundraising.",
    date: "2026-09-19",
    excerpt:
      "Founders launching a business in Chennai are usually focused on customers and product, which is exactly right, but it also means compliance...",
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
    title: "Form 3CEB Due Date and Applicability: A Practical Guide",
    description:
      "Form 3CEB applies to any international transaction with an associated enterprise, regardless of value — here's who needs it and when it's due.",
    date: "2026-09-25",
    excerpt:
      "Form 3CEB applies to any international transaction with an associated enterprise, regardless of value. Here's who needs it and when it's due.",
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
    slug: "gst-registration-online-sellers-chennai",
    title: "GST Registration for Online Sellers in Chennai: Key Rules",
    description:
      "Selling on Amazon, Flipkart, Meesho, or your own website isn't the same as running a regular shop under GST — many first-time sellers learn this the hard way.",
    date: "2026-09-19",
    excerpt:
      "Selling on Amazon, Flipkart, Meesho, or your own website is not the same as running a regular shop when it comes to GST, and a lot of first...",
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
    slug: "llp-vs-opc-vs-pvt-ltd",
    title: "LLP vs OPC vs Private Limited: Choosing a Chennai Structure",
    description:
      "Every founder starting a business in Chennai eventually faces the same decision: which legal structure to register under.",
    date: "2026-09-19",
    excerpt:
      "Every founder starting a business in Chennai eventually faces the same decision: which legal structure to register under.",
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
    slug: "msme-loan-schemes-tamil-nadu",
    title: "MSME Loan Schemes for Small Businesses in Tamil Nadu",
    description:
      "Chennai small business owners often assume bank loans are their only option, without realizing Udyam/MSME registration unlocks better-terms loan schemes.",
    date: "2026-09-19",
    excerpt:
      "Small business owners in Chennai often assume bank loans are their only financing option, without realizing that registering as an MSME...",
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
    slug: "old-vs-new-tax-regime",
    title: "Old vs New Tax Regime FY 2026-27: Which Saves More Tax?",
    description:
      "Salaried professionals and small business owners in Chennai ask this every year: old tax regime or new? The honest answer depends on your actual deductions.",
    date: "2026-09-19",
    excerpt:
      "Every year around this time, salaried professionals and small business owners in Chennai ask the same question: should I stick with the old...",
  },
  {
    slug: "outgrown-bookkeeping-signs",
    title: "Signs Your Chennai Business Has Outgrown Basic Bookkeeping",
    description:
      "Bookkeeping keeps your records accurate, but a growing business eventually needs someone actively interpreting the numbers, not just recording them.",
    date: "2026-09-19",
    excerpt:
      "Bookkeeping keeps your transaction records accurate, but there is a point where a growing business needs more than accurate records, it...",
  },
  {
    slug: "post-incorporation-compliance-checklist",
    title: "Post-Incorporation Compliance Checklist for Chennai Firms",
    description:
      "Getting the incorporation certificate feels like the finish line, but it's actually the start of compliance steps with specific windows and real penalties.",
    date: "2026-09-19",
    excerpt:
      "Getting the incorporation certificate feels like the finish line, but for a newly registered company it is actually the starting point for...",
  },
  {
    slug: "rera-registration-renewal",
    title: "RERA Registration Renewal Deadlines for Chennai Developers",
    description:
      "Chennai real estate developers and agents need to track not just initial RERA registration but renewal deadlines and ongoing disclosure obligations.",
    date: "2026-09-19",
    excerpt:
      "Real estate developers and agents in Chennai working on projects that fall under the Real Estate Regulatory Authority need to track not...",
  },
  {
    slug: "startup-india-registration",
    title: "Startup India Registration: Is It Worth It in Chennai?",
    description:
      "Startup India recognition gets mentioned often by Chennai founders, but there's genuine confusion about what it actually provides versus what people assume.",
    date: "2026-09-19",
    excerpt:
      "Startup India recognition gets mentioned often by founders in Chennai, but there's genuine confusion about what it actually provides versus...",
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
    slug: "trust-vs-society-vs-section8",
    title: "Trust vs Society vs Section 8: Choosing an NGO Structure",
    description:
      "Starting a nonprofit in Chennai means choosing between a trust, a society, or a Section 8 company — the right choice depends on governance and funding plans.",
    date: "2026-09-19",
    excerpt:
      "Anyone starting a charitable or nonprofit initiative in Chennai has to choose between three common structures, a trust, a society, or a...",
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
    slug: "gst-litigation-t-nagar-jewellery",
    title: "Why T Nagar Jewellery and Textile Traders Get ITC Notices",
    description:
      "High transaction volume and a chain of smaller suppliers make T Nagar's retail sector especially exposed to ITC mismatch notices. Here's the real pattern.",
    date: "2026-09-26",
    excerpt:
      "High transaction volume and a chain of smaller suppliers make T Nagar's retail sector especially exposed to ITC mismatch notices.",
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
