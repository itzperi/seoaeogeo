import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Audit & Assurance Services in Chennai",
  description:
    "Statutory, internal, tax, transfer pricing, forensic, and stock audits for businesses in Chennai — delivered with independence, rigour, and clear reporting.",
  alternates: { canonical: "/audit-and-assurance" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/audit-and-assurance`}
      serviceType="Audit"
      crumbLabel="Audit & Assurance"
      crumbHref="/audit-and-assurance"
      eyebrow="Audit · Chennai"
      h1="Audit & Assurance Services"
      subhead="Drive transparency and compliance with expertly executed audit practices that build trust with regulators, lenders, and investors."
      introHeading="What is audit & assurance?"
      intro="Audit and assurance services independently verify the accuracy of a business's financial statements and internal controls. Beyond statutory obligation, a well-executed audit surfaces operational risks, strengthens lender and investor confidence, and gives management a clear, evidence-based view of the business."
      citation={{ label: "ICAI — Standards on Auditing", href: "https://www.icai.org/" }}
      subServicesHeading="Our audit services"
      subServices={[
        { name: "Statutory Audit", text: "Independent audit of financial statements as mandated under the Companies Act." },
        { name: "Internal Audit", text: "Ongoing review of internal controls, processes, and risk management." },
        { name: "Transfer Pricing Audit", text: "Arm's-length pricing documentation and compliance for related-party transactions." },
        { name: "Tax Audit Under Income Tax Act", text: "Audit under Section 44AB for businesses and professionals crossing prescribed turnover limits." },
        { name: "Forensic Audit", text: "Investigation of suspected fraud, misappropriation, or financial irregularities." },
        { name: "Stock Audit", text: "Physical verification and valuation of inventory for lenders and management." },
      ]}
      faqs={[
        { question: "Is statutory audit mandatory for my company?", answer: "Yes, every company registered under the Companies Act must have its financial statements audited annually, regardless of turnover or profit." },
        { question: "What triggers a tax audit under Section 44AB?", answer: "Businesses with turnover above ₹1 crore (₹10 crore with limited cash transactions) and professionals with gross receipts above ₹50 lakh generally require a tax audit — exact thresholds depend on current Income Tax provisions." },
        { question: "How long does a statutory audit take?", answer: "For a small to mid-sized company, a statutory audit typically takes 2–4 weeks depending on the state of your books and responsiveness to audit queries." },
        { question: "Do you conduct audits outside Chennai?", answer: "Yes, we conduct audits for clients across Tamil Nadu and pan-India, with fieldwork scheduled around your business calendar." },
      ]}
      relatedQuestions={[
        { question: "Is a statutory audit the same as an internal or tax audit?", href: "/statutory-audit-chennai" },
        { question: "What turnover triggers a mandatory tax audit?", href: "/tax-audit-chennai" },
        { question: "Do I need a separate transfer pricing audit?", href: "/transfer-pricing-audit" },
      ]}
      relatedSlugs={["statutory-audit-chennai", "tax-audit-chennai", "transfer-pricing-audit"]}
    />
  );
}
