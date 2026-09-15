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
    slug: "audit-and-assurance",
    name: "Audit & Assurance",
    shortDescription:
      "Statutory, internal, tax, transfer pricing, forensic, and stock audits delivered with independence and rigour.",
  },
  {
    slug: "direct-tax",
    name: "Direct Tax",
    shortDescription:
      "Income tax planning, return filing, assessments, and representation before tax authorities.",
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
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
