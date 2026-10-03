import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "India Subsidiary Compliance & CFO Support | Chennai" },
  description:
    "One retainer for foreign-owned Indian subsidiaries: statutory audit, ROC and FEMA filings, transfer pricing, GST, TDS, payroll and monthly group reporting.",
  alternates: { canonical: "/india-subsidiary-compliance-cfo" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Annual Compliance, Audit, Transfer Pricing & CFO Support for Indian Subsidiaries",
    description: "ROC, FEMA, transfer pricing, audit, tax, payroll and parent reporting for Indian subsidiaries and GCCs, from Chennai.",
    url: "/india-subsidiary-compliance-cfo",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/india-subsidiary-compliance-cfo`}
      serviceType="Subsidiary Compliance and Outsourced CFO"
      crumbLabel="India Subsidiary Compliance & CFO"
      crumbHref="/india-subsidiary-compliance-cfo"
      eyebrow="Foreign-Owned Subsidiaries · GCCs · Chennai"
      h1="Annual Compliance, Audit, Transfer Pricing & CFO Support for Indian Subsidiaries"
      subhead="A single retainer covering the Indian statutory calendar and the reporting your parent company expects: ROC and FEMA filings, transfer pricing, GST, TDS, payroll, statutory audit coordination and monthly MIS, for foreign-owned subsidiaries and global capability centres in Chennai."
      introHeading="What compliance does a foreign-owned Indian subsidiary have each year?"
      intro="A foreign-owned Indian subsidiary must hold at least four board meetings a year, get its accounts audited, file AOC-4 and MGT-7 with the Registrar, file the FLA return with the RBI by 15 July, and file Form 3CEB transfer pricing reports for transactions with its foreign parent. Alongside these sit monthly GST and TDS returns, PF, ESI and Tamil Nadu professional tax, and the annual income tax return. Most foreign parents also need monthly management accounts in IFRS or US GAAP for group consolidation."
      citation={{ label: "Reserve Bank of India, FEMA and FDI reporting (rbi.org.in)", href: "https://www.rbi.org.in/" }}
      subServicesHeading="What the subsidiary retainer covers"
      subServices={[
        { name: "Statutory Audit and Year-End Close", text: "We prepare Indian GAAP or Ind AS financial statements, coordinate the statutory audit, and align the year-end timetable with your group reporting deadlines." },
        { name: "ROC and Board Compliance", text: "AOC-4, MGT-7 and DPT-3 filings, plus agendas and minutes for at least four board meetings a year, with no more than 120 days between two meetings." },
        { name: "FEMA Reporting", text: "FC-GPR for each fresh share allotment, the annual FLA return, and downstream investment reporting where the subsidiary itself invests in another Indian entity." },
        { name: "Transfer Pricing", text: "Benchmarking of intercompany services, royalties, cost recharges and loans, Form 3CEB accountant's report, and master file compliance where your group crosses the thresholds." },
        { name: "GST, TDS and Payroll", text: "Monthly GST returns and reconciliations, TDS on vendor and cross-border payments, and payroll compliance for PF, ESI and Tamil Nadu professional tax." },
        { name: "MIS and Group Reporting Packs", text: "Monthly management accounts, cash flow and variance commentary, with IFRS or US GAAP adjustments mapped to your parent's chart of accounts and reporting calendar." },
      ]}
      howTo={{
        heading: "How we onboard an Indian subsidiary",
        steps: [
          { name: "Compliance health check", text: "We review past ROC, FEMA, tax and payroll filings to find gaps, late filings or pending FC-GPR and FLA submissions, and agree how to regularise them." },
          { name: "Build the statutory calendar", text: "We prepare a 12-month calendar of every Indian due date for your entity and share it with your parent finance team and resident director." },
          { name: "Map the chart of accounts", text: "We map the Indian ledger to the group chart of accounts so monthly packs reconcile to consolidation without manual rework." },
          { name: "Set the monthly close", text: "We agree a close timetable with cut-offs, intercompany confirmations and the date by which the reporting pack reaches the parent." },
          { name: "Run filings and board cycle", text: "We file monthly and quarterly returns, prepare board papers each quarter, and coordinate with your resident director on approvals and signatures." },
          { name: "Year-end audit and TP", text: "We prepare audit-ready financials, refresh the transfer pricing study, issue Form 3CEB, and complete ROC and FLA filings after the audit." },
        ],
      }}
      faqs={[
        { question: "How many board meetings must an Indian subsidiary hold?", answer: "An Indian private company must hold at least four board meetings each year, with a gap of not more than 120 days between two consecutive meetings. Directors can attend by video conference, which suits foreign directors. We prepare agendas, notices and minutes, and coordinate with your resident director so that quorum and signatures are in place for each meeting." },
        { question: "What is the FLA return and who files it?", answer: "The Foreign Liabilities and Assets (FLA) return is an annual RBI filing by Indian companies that have received foreign direct investment or made overseas investments, due by 15 July each year. It reports the foreign equity and other foreign liabilities and assets as at the previous 31 March. It is filed on the RBI's online portal, generally based on audited figures where available." },
        { question: "Does an Indian subsidiary need transfer pricing documentation?", answer: "Yes, if it has international transactions with its foreign parent or other group companies, such as service fees, royalties, purchases, cost recharges or loans. The subsidiary must price these at arm's length, maintain documentation and obtain a Form 3CEB report from a Chartered Accountant each year. Larger groups may also have master file and country-by-country reporting obligations in India." },
        { question: "Can you prepare reporting in IFRS or US GAAP for our parent?", answer: "Yes, we prepare monthly reporting packs with IFRS or US GAAP adjustments alongside the statutory books, which are kept in Indian GAAP or Ind AS as applicable. Common adjustments include lease accounting, revenue recognition timing and employee benefit provisions. We document each adjustment so your group auditors can trace the reporting pack back to the Indian ledger." },
        { question: "Do you act as the resident director?", answer: "No, we do not provide resident directors. Every Indian company needs at least one director who stayed in India for 182 days or more in the financial year, and that person should be someone your group appoints and trusts. We coordinate closely with your resident director on board papers, statutory registers, filings and signatures throughout the year." },
        { question: "We are a GCC in Chennai. Is this retainer suitable for a captive centre?", answer: "Yes, global capability centres and captive service units are typical users of this retainer, since they combine cost-plus transfer pricing, large payrolls and parent reporting needs. The key areas are setting the cost-plus markup correctly, invoicing the parent on time, managing GST on export of services, and handling PF, ESI and professional tax for a growing headcount." },
        { question: "Who handles the statutory audit if you prepare the accounts?", answer: "The statutory audit is performed by an independent auditor appointed by the shareholders, and we keep the accounting and audit roles separate to protect independence. Where we prepare the books and reporting packs, we coordinate with your appointed auditor on schedules, queries and the audit timetable. Where the group prefers, we can be considered for the audit role only if we are not preparing the accounts." },
      ]}
      relatedQuestions={[
        { question: "How do we set up the Indian subsidiary in the first place?", href: "/company-registration-india-for-foreigners" },
        { question: "What does a transfer pricing audit and Form 3CEB involve?", href: "/transfer-pricing-audit" },
        { question: "How is payroll and PF/ESI run for an Indian entity?", href: "/payroll-services-chennai" },
      ]}
      relatedSlugs={["transfer-pricing-audit", "statutory-audit-chennai", "virtual-cfo-services"]}
    />
  );
}
