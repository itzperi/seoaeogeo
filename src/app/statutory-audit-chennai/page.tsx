import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Statutory Audit in Chennai | Companies Act Audit" },
  description:
    "Statutory audit for private limited companies and LLPs in Chennai — independent verification of financial statements under the Companies Act.",
  alternates: { canonical: "/statutory-audit-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Statutory Audit in Chennai",
    description: "Companies Act statutory audit for Chennai businesses — independent, evidence-based reporting.",
    url: "/statutory-audit-chennai",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/statutory-audit-chennai`}
      serviceType="Statutory Audit"
      crumbLabel="Statutory Audit"
      crumbHref="/statutory-audit-chennai"
      eyebrow="Statutory Audit · Chennai"
      h1="Statutory Audit in Chennai"
      subhead="Independent, evidence-based audit of your financial statements — mandatory under the Companies Act, and a genuine trust signal for lenders and investors when done well."
      introHeading="What is a statutory audit?"
      intro="A statutory audit is the independent examination of a company's financial statements, mandated under Section 139 of the Companies Act, 2013, for every company registered in India regardless of turnover, profit, or size — including a company with zero transactions in the year. The auditor verifies that the financial statements give a true and fair view, checks compliance with applicable accounting standards, and reports directly to shareholders. Beyond the statutory obligation, a rigorous audit surfaces control gaps and gives lenders, investors, and the board an independently verified picture of the business."
      citation={{ label: "Ministry of Corporate Affairs — Companies Act, 2013", href: "https://www.mca.gov.in/" }}
      subServicesHeading="What's covered"
      subServices={[
        { name: "First Statutory Audit (New Companies)", text: "Appointment of the first auditor within 30 days of incorporation and audit of the first financial year, however short." },
        { name: "Annual Statutory Audit", text: "Full-scope audit of the balance sheet, profit & loss statement, and cash flow statement in line with Indian Accounting Standards (Ind AS) or AS as applicable." },
        { name: "Auditor Appointment & Rotation", text: "Advisory on mandatory auditor rotation requirements for applicable companies and the ADT-1 filing." },
        { name: "CARO Reporting", text: "Compliance with the Companies (Auditor's Report) Order where applicable, covering fixed assets, inventory, loans, and statutory dues." },
        { name: "Audit Committee Coordination", text: "Liaising with the audit committee (where constituted) on audit scope, findings, and internal control observations." },
        { name: "Books & Records Readiness Review", text: "Pre-audit review to flag documentation gaps early, reducing back-and-forth once fieldwork starts." },
      ]}
      faqs={[
        { question: "Is statutory audit mandatory even for a company with no business activity?", answer: "Yes. Every company registered under the Companies Act must have its financial statements audited annually regardless of turnover, profit, or business activity — a dormant or zero-transaction company is not exempt. Skipping this exposes directors to penalties under the Act, not just a compliance gap." },
        { question: "Who can be appointed as a statutory auditor?", answer: "Only a practising Chartered Accountant or a firm of Chartered Accountants, appointed by the shareholders (or the Board for the first auditor) and not disqualified under Section 141 of the Companies Act — for instance, an auditor cannot hold shares in the company being audited." },
        { question: "How long does a statutory audit take for a small or mid-sized company?", answer: "Typically 2–4 weeks from the start of fieldwork, depending on how organised the books are and how quickly queries are answered. Companies with clean, reconciled books month-to-month see the faster end of that range; those doing a full year's reconciliation at audit time should budget longer." },
        { question: "What happens if my company misses the statutory audit deadline?", answer: "Late or missed statutory audits can trigger penalties on the company and officers in default under the Companies Act, and unaudited financials block your annual ROC filings (AOC-4, MGT-7), which carry their own separate late fees that compound daily." },
        { question: "Do you conduct statutory audits outside Chennai?", answer: "Yes — for clients across Tamil Nadu and pan-India, with fieldwork (in-person or remote, depending on your systems) scheduled around your business calendar rather than ours." },
      ]}
      relatedQuestions={[
        { question: "What other types of audit might my business also need?", href: "/audit-and-assurance" },
        { question: "Is statutory audit the same as tax audit?", href: "/tax-audit-chennai" },
        { question: "What ROC filings depend on my audited financials?", href: "/roc-compliances" },
      ]}
      relatedSlugs={["audit-and-assurance", "tax-audit-chennai", "roc-compliances"]}
    />
  );
}
