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
      introHeading="What is a statutory audit and which companies need one?"
      intro="A statutory audit is the independent examination of a company's financial statements, mandated under Section 139 of the Companies Act, 2013, for every company registered in India regardless of turnover, profit, or size — including a company with zero transactions in the year. The auditor verifies that the financial statements give a true and fair view, checks compliance with applicable accounting standards, and reports directly to shareholders. Beyond the statutory obligation, a rigorous audit surfaces control gaps and gives lenders, investors, and the board an independently verified picture of the business."
      citation={{ label: "Ministry of Corporate Affairs: Form ADT-1, appointment of auditor (Section 139, Companies Act, 2013)", href: "https://www.mca.gov.in/content/mca/global/en/mca/e-filing/complianceServices/ADT-1.html" }}
      howTo={{
        heading: "How does a statutory audit engagement proceed?",
        steps: [
          { name: "Auditor appointment", text: "The Board appoints the first auditor within 30 days of incorporation, or shareholders appoint/re-appoint the auditor at the AGM; the ADT-1 filing confirms the appointment with the ROC." },
          { name: "Planning and books review", text: "We review the trial balance, ledgers, and prior-year workpapers to scope the audit and flag documentation gaps before fieldwork starts." },
          { name: "Fieldwork and testing", text: "Verification of balance sheet items, profit & loss transactions, statutory dues, and compliance with applicable Accounting Standards or Ind AS." },
          { name: "CARO and audit committee review", text: "Where applicable, reporting against the Companies (Auditor's Report) Order, and discussion of findings with the audit committee or board." },
          { name: "Audit report and sign-off", text: "The signed audit report, along with the audited financial statements, is issued to shareholders and forms the basis for the company's AOC-4 and MGT-7 ROC filings." },
        ],
      }}
      subServicesHeading="What does a statutory audit cover?"
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
        { question: "What happens if my company misses the statutory audit deadline?", answer: "Late or missed statutory audits can trigger penalties on the company and officers in default under the Companies Act, and unaudited financials block your annual ROC filings (AOC-4, MGT-7), which carry their own additional fee of ₹100 per day of delay for each form, with no upper cap." },
        { question: "Do you conduct statutory audits outside Chennai?", answer: "Yes — for clients across Tamil Nadu and pan-India, with fieldwork (in-person or remote, depending on your systems) scheduled around your business calendar rather than ours." },
        { question: "What usually slows down a company's first statutory audit?", answer: "Three gaps cause most delays, and none is about the audit itself. There is no fixed asset register, so depreciation from each purchase date has to be rebuilt from scattered invoices. A founder has put money into the company informally, without a loan agreement, board resolution or the director's written declaration that the funds are not borrowed, which the deposit rules require. And bank accounts were reconciled once a year instead of monthly. Each has to be fixed during fieldwork if it was not done earlier. A company with a register, documented director transactions and monthly reconciliations gets through fieldwork far faster, which is why we offer a pre-audit review before fieldwork starts." },
        { question: "Why does a manufacturing company's statutory audit take longer?", answer: "Because inventory and fixed assets must be verified physically, not just reviewed on paper. The auditor attends or test-checks the count of raw materials, work-in-progress and finished goods against the books and investigates every difference, and traces machinery and equipment to purchase invoices, with depreciation from each asset's actual purchase date. Manufacturers who added or retired equipment over the years without updating a fixed asset register end up spending audit time reconstructing that history. A running fixed asset register and a mid-year inventory reconciliation, rather than a single year-end exercise, shorten fieldwork noticeably for factories such as those in the Ambattur Industrial Estate." },
        { question: "Why does the audit raise new questions once a company is several years old?", answer: "Because an established company accumulates matters a first audit never sees: related-party transactions with directors, relatives or sister concerns, revenue on multi-year contracts, and provisions for gratuity, leave and doubtful debts. Each needs documentation, disclosure or a consistent accounting policy, and related-party dealings are examined closely against the approvals Section 188 of the Companies Act requires. Arrangements made informally over the years are the usual source of audit queries. The fix is to document related-party transactions, with the required board or shareholder approvals, as they happen, and to formalise provisioning policies once rather than estimating them afresh each year." },
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
