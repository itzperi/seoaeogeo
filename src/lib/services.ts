export type ServiceSummary = {
  slug: string;
  name: string;
  shortDescription: string;
};

// Central catalog — drives the homepage grid, footer, and sitemap.
// Every slug below maps 1:1 to a page under src/app/<slug>/page.tsx with its
// own unique <title> and meta description (fixes the site-wide duplicate
// title/meta issue flagged as Critical in the SEO audit).
export const SERVICES: ServiceSummary[] = [
  {
    slug: "private-limited-company-incorporation-chennai",
    name: "Private Limited Company Incorporation",
    shortDescription:
      "End-to-end SPICe+ incorporation for Private Limited Companies in Chennai — documentation, MCA filing, and post-incorporation compliance.",
  },
  {
    slug: "llp-registration-chennai",
    name: "LLP Registration",
    shortDescription:
      "Limited Liability Partnership registration in Chennai — DPIN, name reservation, FiLLiP filing, and LLP Agreement drafting.",
  },
  {
    slug: "company-registration-chennai",
    name: "Company Registration",
    shortDescription:
      "Fast-tracked Private Limited and LLP company registration in Chennai, from name approval to certificate of incorporation.",
  },
  {
    slug: "gst-litigation-chennai",
    name: "GST Litigation & Appeals",
    shortDescription:
      "Representation for GST show-cause notices, departmental audits, appeals, and GSTAT proceedings for Chennai businesses.",
  },
  {
    slug: "goods-and-services-tax",
    name: "Goods & Services Tax (GST)",
    shortDescription:
      "GST registration, return filing, amendments, cancellations, notice replies, and LUT applications.",
  },
  {
    slug: "gst-registration-chennai",
    name: "GST Registration",
    shortDescription:
      "New GST registration for businesses and professionals in Chennai — documentation, ARN tracking, and certificate issuance.",
  },
  {
    slug: "audit-and-assurance",
    name: "Audit & Assurance",
    shortDescription:
      "Statutory, internal, tax, transfer pricing, forensic, and stock audits delivered with independence and rigour.",
  },
  {
    slug: "statutory-audit-chennai",
    name: "Statutory Audit",
    shortDescription:
      "Companies Act statutory audit for Chennai businesses — independent, evidence-based financial statement audit.",
  },
  {
    slug: "tax-audit-chennai",
    name: "Tax Audit",
    shortDescription:
      "Section 44AB tax audit for businesses and professionals in Chennai crossing prescribed turnover limits.",
  },
  {
    slug: "transfer-pricing-audit",
    name: "Transfer Pricing Audit",
    shortDescription:
      "Form 3CEB certification and arm's-length pricing documentation for related-party and cross-border transactions.",
  },
  {
    slug: "direct-tax",
    name: "Direct Tax",
    shortDescription:
      "Income tax planning, return filing, assessments, and representation before tax authorities.",
  },
  {
    slug: "income-tax-return-filing-chennai",
    name: "Income Tax Return Filing",
    shortDescription:
      "ITR filing for salaried individuals, professionals, and businesses in Chennai, with advance tax and refund tracking.",
  },
  {
    slug: "msme-udyam-registration-chennai",
    name: "MSME / Udyam Registration",
    shortDescription:
      "Udyam registration for small and medium enterprises in Chennai, unlocking collateral-free loans and government scheme benefits.",
  },
  {
    slug: "roc-compliances",
    name: "ROC Compliances",
    shortDescription:
      "Annual filings, statutory registers, and Companies Act compliance to keep your company in good standing with the MCA.",
  },
  {
    slug: "virtual-cfo-services",
    name: "Virtual CFO Services",
    shortDescription:
      "Outsourced financial leadership — MIS, budgeting, fundraising support, and board-ready reporting for growing businesses.",
  },
  {
    slug: "management-consultancy",
    name: "Management Consultancy",
    shortDescription:
      "Business process, risk, and strategy advisory that turns compliance data into operating decisions.",
  },
  {
    slug: "rera",
    name: "RERA Compliance",
    shortDescription:
      "RERA project registration, quarterly filings, and compliance advisory for real estate developers and agents in Tamil Nadu.",
  },
  {
    slug: "trust",
    name: "Trust & NGO Registration",
    shortDescription:
      "Formation and compliance for trusts, societies, and Section 8 companies, including 12A/80G registration support.",
  },
  {
    slug: "bookkeeping-services-chennai",
    name: "Bookkeeping Services",
    shortDescription:
      "Cloud accounting, monthly books close, and MIS reporting on Zoho Books, Tally Prime, QuickBooks, or Xero for Chennai businesses.",
  },
  {
    slug: "payroll-services-chennai",
    name: "Payroll Services",
    shortDescription:
      "End-to-end payroll outsourcing with PF, ESI, Professional Tax, and TDS compliance for businesses across Chennai.",
  },
  {
    slug: "nri-tax-services",
    name: "NRI Tax Services",
    shortDescription:
      "Indian tax filing, DTAA claims, property-sale TDS and repatriation for NRIs in the UAE, UK, USA and elsewhere — handled remotely from Chennai.",
  },
  {
    slug: "opc-registration-chennai",
    name: "OPC Registration",
    shortDescription:
      "One Person Company registration for solo founders: SPICe+ filing, nominee consent (INC-3), NRI eligibility and later conversion to Pvt Ltd.",
  },
  {
    slug: "partnership-firm-registration-chennai",
    name: "Partnership Firm Registration",
    shortDescription:
      "Partnership deed drafting and stamping, registration with the Tamil Nadu Registrar of Firms on tnreginet, firm PAN, GST and deed changes.",
  },
  {
    slug: "proprietorship-registration-chennai",
    name: "Proprietorship Registration",
    shortDescription:
      "GST, Udyam, Tamil Nadu Shops and Establishments and trade licence for sole proprietors, plus documents for a current account.",
  },
  {
    slug: "section-8-company-registration-chennai",
    name: "Section 8 Company Registration",
    shortDescription:
      "Not-for-profit company registration with the Section 8 licence through SPICe+, objects drafting and 12A/80G (Form 105) next steps.",
  },
  {
    slug: "startup-india-registration-chennai",
    name: "Startup India (DPIIT) Recognition",
    shortDescription:
      "DPIIT startup recognition through NSWS for companies, LLPs and registered partnerships, plus the Section 140 tax holiday application.",
  },
  {
    slug: "gst-return-filing-chennai",
    name: "GST Return Filing",
    shortDescription:
      "Monthly and quarterly GSTR-1 and GSTR-3B, QRMP, CMP-08, GSTR-4 and annual GSTR-9/9C, with GSTR-2B reconciliation before every filing.",
  },
  {
    slug: "tds-return-filing-chennai",
    name: "TDS Return Filing",
    shortDescription:
      "Quarterly TDS statements in Forms 138, 140 and 144 (earlier 24Q, 26Q, 27Q), Form 16/16A certificates, corrections and TDS on rent and property.",
  },
  {
    slug: "income-tax-assessment-appeals-chennai",
    name: "Income Tax Assessment & Appeals",
    shortDescription:
      "Scrutiny and reassessment proceedings, appeals to the CIT(A) and the ITAT, and applications for stay of demand.",
  },
  {
    slug: "form-15ca-15cb-chennai",
    name: "Form 15CA & 15CB",
    shortDescription:
      "CA certificate and remitter's declaration (now Forms 146 and 145) for payments to non-residents, NRO repatriation and property-sale proceeds.",
  },
  {
    slug: "fema-rbi-compliance",
    name: "FEMA & RBI Compliance",
    shortDescription:
      "FC-GPR, FC-TRS, annual FLA return, ODI and APR filings, and late submission fee regularisation for foreign-invested companies.",
  },
  {
    slug: "annual-compliance-package",
    name: "Annual Compliance Package",
    shortDescription:
      "Bookkeeping, statutory audit, ROC filings, DIR-3 KYC, ITR, GST and TDS returns for companies and LLPs on one calendar.",
  },
  {
    slug: "accounting-outsourcing-chennai",
    name: "Accounting Outsourcing",
    shortDescription:
      "Outsource your whole finance back office in Chennai: bookkeeping, payroll, GST, TDS, PF and ESI filings, monthly MIS and Tally or Zoho Books setup.",
  },
  {
    slug: "digital-signature-certificate-chennai",
    name: "Digital Signature Certificate (DSC)",
    shortDescription:
      "Class 3 DSC for MCA, GST, income tax, DGFT and e-tenders, issued through licensed Certifying Authorities with Aadhaar eKYC or video verification.",
  },
  {
    slug: "trademark-registration-chennai",
    name: "Trademark Registration",
    shortDescription:
      "Trademark search, Nice class selection, TM-A documentation, objection support and renewal tracking for Chennai brands and startups.",
  },
  {
    slug: "iec-registration-chennai",
    name: "IEC Registration",
    shortDescription:
      "Import Export Code from DGFT for Chennai importers and exporters, with annual April–June updation, modification and GST LUT support.",
  },
  {
    slug: "fssai-license-chennai",
    name: "FSSAI Licence & Registration",
    shortDescription:
      "FSSAI basic registration, state and central licences on FoSCoS under the April 2026 turnover limits, plus modifications and annual returns.",
  },
];

// Specialist pages for NRIs, overseas businesses and urgent notices. Kept
// out of SERVICES so the homepage grid, header and footer stay focused on the
// core practice; they get their own homepage section, sitemap entries and
// related-service cards.
export const SPECIALIST_SERVICES: ServiceSummary[] = [
  {
    slug: "gst-notice-reply-chennai",
    name: "GST Notice Reply",
    shortDescription: "Replies to ASMT-10, DRC-01A, DRC-01 and audit notices for Tamil Nadu businesses, before a dispute becomes an appeal.",
  },
  {
    slug: "income-tax-notice-reply-chennai",
    name: "Income Tax Notice Reply",
    shortDescription: "Responses to intimations, defective-return, scrutiny and reassessment notices, including faceless assessment submissions.",
  },
  {
    slug: "company-registration-india-for-foreigners",
    name: "Company Setup in India for Foreign Businesses",
    shortDescription: "Subsidiary, LLP or branch set-up for foreign companies and founders, with FDI reporting and Tamil Nadu location support.",
  },
  {
    slug: "india-subsidiary-compliance-cfo",
    name: "India Subsidiary Compliance & CFO",
    shortDescription: "One retainer for audit, ROC, FEMA, transfer pricing, GST, payroll and group reporting for foreign-owned Indian companies.",
  },
  {
    slug: "outsourced-accounting-for-cpa-firms",
    name: "Outsourced Accounting for US CPA Firms",
    shortDescription: "Bookkeeping, month-end close and tax-prep support prepared for US CPA review, with Section 7216-aware data handling.",
  },
  {
    slug: "outsourced-accounting-for-uk-accountants",
    name: "Outsourced Bookkeeping for UK Practices",
    shortDescription: "Bookkeeping, MTD VAT returns and year-end accounts preparation for UK accountancy practices to review and file.",
  },
  {
    slug: "nri-property-sale-tds-chennai",
    name: "NRI Property Sale — TDS & Repatriation",
    shortDescription: "Lower-deduction certificates, capital gains, Form 15CA/15CB and repatriation for NRIs selling property in Chennai.",
  },
  {
    slug: "nri-tax-services-uae",
    name: "NRI Tax Services — UAE",
    shortDescription: "Indian ITR, DTAA claims and deemed-residency checks for NRIs living in Dubai, Abu Dhabi and the wider UAE.",
  },
  {
    slug: "nri-tax-services-uk",
    name: "NRI Tax Services — UK",
    shortDescription: "Indian tax filing and India–UK DTAA support, with the figures your UK accountant needs for HMRC.",
  },
  {
    slug: "nri-tax-services-usa",
    name: "NRI Tax Services — USA",
    shortDescription: "Indian tax filing and India–US DTAA support, with account data for your US CPA’s FBAR and FATCA reporting.",
  },
];

export const ALL_SERVICES: ServiceSummary[] = [...SERVICES, ...SPECIALIST_SERVICES];

// Menu, footer and homepage grouping. Every slug must exist in ALL_SERVICES.
export const SERVICE_GROUPS: { label: string; slugs: string[] }[] = [
  {
    label: "Company & LLP registration",
    slugs: [
      "company-registration-chennai",
      "private-limited-company-incorporation-chennai",
      "llp-registration-chennai",
      "opc-registration-chennai",
      "partnership-firm-registration-chennai",
      "proprietorship-registration-chennai",
      "section-8-company-registration-chennai",
      "company-registration-india-for-foreigners",
    ],
  },
  {
    label: "Business licences",
    slugs: [
      "startup-india-registration-chennai",
      "msme-udyam-registration-chennai",
      "digital-signature-certificate-chennai",
      "trademark-registration-chennai",
      "iec-registration-chennai",
      "fssai-license-chennai",
    ],
  },
  {
    label: "GST",
    slugs: [
      "goods-and-services-tax",
      "gst-registration-chennai",
      "gst-return-filing-chennai",
      "gst-notice-reply-chennai",
      "gst-litigation-chennai",
    ],
  },
  {
    label: "Income tax & NRI",
    slugs: [
      "direct-tax",
      "income-tax-return-filing-chennai",
      "income-tax-notice-reply-chennai",
      "income-tax-assessment-appeals-chennai",
      "tds-return-filing-chennai",
      "nri-tax-services",
      "nri-tax-services-uae",
      "nri-tax-services-uk",
      "nri-tax-services-usa",
      "nri-property-sale-tds-chennai",
      "form-15ca-15cb-chennai",
    ],
  },
  {
    label: "Audit",
    slugs: ["audit-and-assurance", "statutory-audit-chennai", "tax-audit-chennai", "transfer-pricing-audit"],
  },
  {
    label: "Compliance & accounting",
    slugs: [
      "roc-compliances",
      "annual-compliance-package",
      "accounting-outsourcing-chennai",
      "bookkeeping-services-chennai",
      "payroll-services-chennai",
      "fema-rbi-compliance",
      "rera",
      "trust",
      "outsourced-accounting-for-cpa-firms",
      "outsourced-accounting-for-uk-accountants",
    ],
  },
  {
    label: "Advisory",
    slugs: ["virtual-cfo-services", "management-consultancy", "india-subsidiary-compliance-cfo"],
  },
];

export function getService(slug: string) {
  return ALL_SERVICES.find((s) => s.slug === slug);
}
