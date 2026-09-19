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
    slug: "formation-of-business-entity",
    name: "Formation of Business Entity",
    shortDescription:
      "Choose and register the right structure — Private Limited, LLP, OPC, Partnership, or Proprietorship — with full legal compliance.",
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
    slug: "ca-fees-chennai",
    name: "CA Fees & Pricing",
    shortDescription:
      "Indicative pricing for company incorporation, GST, and audit services from a Chennai chartered accountancy firm.",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
