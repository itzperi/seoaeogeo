import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const description =
  "Auditors in Chennai for statutory, tax, internal, stock, transfer pricing and trust audits. See which audit your business needs and the thresholds that apply.";

export const metadata: Metadata = {
  title: { absolute: "Auditors in Chennai | Statutory, Tax & Internal Audit" },
  description,
  alternates: { canonical: "/audit-and-assurance" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Auditors in Chennai | Statutory, Tax & Internal Audit",
    description,
    url: "/audit-and-assurance",
  },
};

const thresholds: { audit: string; law: string; who: string }[] = [
  {
    audit: "Statutory audit (company)",
    law: "Sections 139 and 143, Companies Act, 2013",
    who: "Every company, whatever its turnover or profit, including a company with no transactions in the year.",
  },
  {
    audit: "Statutory audit (LLP)",
    law: "Rule 24(8), LLP Rules, 2009",
    who: "LLPs with turnover above ₹40 lakh or contribution above ₹25 lakh in the financial year.",
  },
  {
    audit: "Tax audit",
    law: "Section 44AB, Income Tax Act, 1961; Section 63, Income-tax Act, 2025 from tax year 2026-27",
    who: "Business turnover above ₹1 crore (₹10 crore where cash receipts and cash payments are each within 5% of the total); professional receipts above ₹50 lakh.",
  },
  {
    audit: "Internal audit",
    law: "Section 138, Companies Act, 2013 read with Rule 13, Companies (Accounts) Rules, 2014",
    who: "All listed companies. Unlisted public companies with paid-up capital of ₹50 crore or more, turnover of ₹200 crore or more, borrowings above ₹100 crore or deposits of ₹25 crore or more in the preceding year. Private companies with turnover of ₹200 crore or more or borrowings above ₹100 crore.",
  },
  {
    audit: "Transfer pricing audit",
    law: "Section 92E, Income Tax Act, 1961 (Form 3CEB) and the corresponding provisions of the 2025 Act",
    who: "Any entity with an international transaction with an associated enterprise, or specified domestic transactions above ₹20 crore in aggregate.",
  },
  {
    audit: "Trust / NGO audit",
    law: "Income-tax exemption provisions for registered charitable and religious institutions",
    who: "Registered trusts and NGOs whose total income, before the exemption, exceeds the maximum amount not chargeable to tax.",
  },
  {
    audit: "Stock audit",
    law: "No statutory threshold; set by the lender's sanction terms",
    who: "Borrowers with working-capital limits secured on stock and debtors, when the bank asks for it.",
  },
];

const linkClass = "font-medium text-royal-violet underline underline-offset-2";

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/audit-and-assurance`}
      serviceType="Audit"
      crumbLabel="Audit & Assurance"
      crumbHref="/audit-and-assurance"
      eyebrow="Audit · Chennai"
      h1="Auditors in Chennai"
      subhead="Statutory, tax, internal, stock, transfer pricing and trust audits from one Anna Nagar practice, so your audits share one set of reconciled numbers instead of three."
      introHeading="Which audits do auditors in Chennai carry out, and which one does your business need?"
      intro="Auditors in Chennai carry out statutory audits for every company, tax audits once turnover crosses ₹1 crore (₹10 crore for low-cash businesses), internal audits for larger companies under Section 138, and transfer pricing, stock and trust audits where the law or a lender requires them. Which audit you need depends on your entity type, turnover and transactions."
      citation={{ label: "ICAI Standards on Auditing", href: "https://www.icai.org/post/standards-on-auditing" }}
      keyFacts={[
        { label: "Who needs an audit", value: "Every company (statutory audit); businesses and professionals above tax audit limits; trusts claiming exemption; entities with cross-border related-party transactions" },
        { label: "Main laws", value: "Companies Act, 2013 (Sections 138, 139, 143); Income Tax Act, 1961 (Sections 44AB, 92E); Income-tax Act, 2025 (Section 63) from tax year 2026-27" },
        { label: "Reports issued", value: "Independent auditor's report with CARO; Form 3CA/3CB with 3CD (Form No. 26 under the 2025 Act); Form 3CEB; Form 10B/10BB" },
        { label: "Tax audit deadline", value: "The specified date, one month before the due date for filing the income-tax return" },
        { label: "Penalty for missing tax audit", value: "Section 271B: 0.5% of turnover or gross receipts, up to ₹1.5 lakh" },
      ]}
      subServicesHeading="Which audits do we conduct for Chennai businesses?"
      subServices={[
        { name: "Statutory Audit", text: "Annual audit of a company's financial statements under the Companies Act, with CARO reporting where it applies. Required for every company, including dormant ones, and for LLPs above the audit limits." },
        { name: "Tax Audit", text: "Audit of books under Section 44AB, and under Section 63 of the Income-tax Act, 2025 from tax year 2026-27. Covers depreciation, disallowances, TDS compliance and related-party payments reported in Form 3CD." },
        { name: "Internal Audit", text: "Risk-based review of purchases, sales, payroll, inventory and approvals. Mandatory for larger companies under Section 138; many smaller firms commission it to catch leakage before the statutory auditor does." },
        { name: "Stock Audit", text: "Physical verification and valuation of inventory and debtors for banks, checking drawing power statements against the books and the actual godown position." },
        { name: "Transfer Pricing Audit", text: "Form 3CEB certification and documentation that prices charged between related parties, such as an Indian subsidiary and its foreign parent, are at arm's length." },
        { name: "NGO and Trust Audit", text: "Audit of charitable trusts, societies and Section 8 companies, including application of income, accumulation, and the Form 10B/10BB audit report needed to keep the exemption." },
      ]}
      howTo={{
        heading: "How does an audit engagement with our team run?",
        steps: [
          { name: "Scoping call", text: "We confirm which audits apply to you, based on entity type, last year's turnover, borrowings and related-party transactions, and agree one combined timeline." },
          { name: "Document request", text: "You receive a single list covering trial balance, ledgers, bank statements, fixed asset register, GST and TDS returns, loan sanction letters and board minutes." },
          { name: "Fieldwork", text: "Our team tests balances and transactions on-site in Chennai or remotely through read-only access to Tally, Zoho Books or your ERP." },
          { name: "Findings discussion", text: "We share draft observations with management before the report is signed, so adjusting entries and explanations are settled early." },
          { name: "Signed reports and filings", text: "We issue the audit reports with UDIN and upload them on the MCA or income-tax portal where required, ahead of the due dates." },
        ],
      }}
      faqs={[
        { question: "Is a statutory audit compulsory for a small private limited company?", answer: "Yes. Every company registered under the Companies Act, 2013 must have its annual financial statements audited by a practising Chartered Accountant, whatever its size, turnover or profit. A newly incorporated or dormant company is not exempt. The audited accounts are then filed with the ROC in Form AOC-4." },
        { question: "When does a business need a tax audit?", answer: "A business needs a tax audit when turnover in the year exceeds ₹1 crore, or ₹10 crore where cash receipts and cash payments each stay within 5% of the total. Professionals need one when gross receipts exceed ₹50 lakh. From tax year 2026-27 this requirement sits in Section 63 of the Income-tax Act, 2025." },
        { question: "Can the same firm do our statutory audit and tax audit?", answer: "Yes. Many companies use the same firm for both, and the tax audit report can be furnished alongside the audit done under the Companies Act. It avoids duplicate document requests and keeps both reports on the same figures. Internal audit is different: under Section 144, your statutory auditor cannot also act as your internal auditor." },
        { question: "Is internal audit mandatory for a private company?", answer: "Only above the Rule 13 thresholds. A private company must appoint an internal auditor if, in the preceding financial year, turnover was ₹200 crore or more or bank and financial-institution borrowings exceeded ₹100 crore at any point. Below those limits it is optional, though lenders and investors sometimes ask for it." },
        { question: "What is a stock audit and who asks for it?", answer: "A stock audit is a physical check and valuation of inventory and receivables, usually ordered by a bank that has lent against them. The auditor compares the stock statement submitted to the bank with the books and the goods on hand. There is no statutory threshold; the requirement comes from your loan sanction terms." },
        { question: "Do trusts and NGOs in Chennai need an audit?", answer: "Yes, if they claim income-tax exemption and their total income, worked out before the exemption, exceeds the maximum amount not chargeable to tax. The audit report is filed in Form 10B or 10BB before the return. Trusts receiving foreign contributions under FCRA have separate reporting requirements as well." },
        { question: "How long does an audit take?", answer: "For a small or mid-sized company with reconciled books, fieldwork usually takes two to four weeks, followed by a short review period. A tax audit run alongside the statutory audit adds little extra time. Delays almost always come from unreconciled bank, GST or vendor balances, so a pre-audit review is worth doing." },
      ]}
      relatedSlugs={["statutory-audit-chennai", "tax-audit-chennai", "transfer-pricing-audit", "trust"]}
      relatedPosts={[
        "audit-applicability-thresholds",
        "statutory-vs-tax-vs-internal-audit",
        "statutory-audit-checklist",
        "documents-checklist-before-auditor-visit",
        "form-3ceb-due-date-applicability",
      ]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Audit applicability thresholds at a glance</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Thresholds are tested on the figures of the relevant year (for internal audit, the preceding financial year). Check
        each row against your own numbers before the year closes.
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className="px-4 py-3 font-medium">Audit</th>
              <th className="px-4 py-3 font-medium">Law</th>
              <th className="px-4 py-3 font-medium">Who needs it</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {thresholds.map((r) => (
              <tr key={r.audit}>
                <td className="px-4 py-3 align-top font-medium text-obsidian">{r.audit}</td>
                <td className="px-4 py-3 align-top text-slate">{r.law}</td>
                <td className="px-4 py-3 align-top text-slate">{r.who}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">How the different audits fit together</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        A Chennai private limited company with ₹3 crore turnover typically needs two audits each year: the{" "}
        <Link href="/statutory-audit-chennai" className={linkClass}>
          statutory audit of its financial statements under the Companies Act
        </Link>{" "}
        and a{" "}
        <Link href="/tax-audit-chennai" className={linkClass}>
          tax audit under Section 44AB, reported in Form 3CA and 3CD
        </Link>
        . The statutory audit comes first, because the tax audit report relies on the audited figures.
      </p>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        If the company is an Indian subsidiary paying royalty or management fees to, or buying goods from, its foreign
        parent, it also needs a{" "}
        <Link href="/transfer-pricing-audit" className={linkClass}>
          transfer pricing audit and Form 3CEB certification
        </Link>
        , whatever the size of those transactions. Charitable trusts, societies and Section 8 companies follow a separate
        track, covered on our{" "}
        <Link href="/trust" className={linkClass}>
          trust and NGO registration, compliance and audit page
        </Link>
        .
      </p>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Internal and stock audits are usually triggered by size or by a lender. They focus less on the year-end numbers and
        more on whether day-to-day controls over purchases, inventory, cash and approvals actually work.
      </p>
    </ServicePageTemplate>
  );
}
