import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const linkClass = "font-medium text-royal-violet underline underline-offset-2";
const th = "px-4 py-3 font-medium";
const tdHead = "px-4 py-3 align-top font-medium text-obsidian";
const td = "px-4 py-3 align-top text-slate";

const CALENDAR = [
  { month: "April 2026", items: "TDS deducted in March 2026 deposited by 30 April. Year-end close for financial year 2025-26 and intercompany balance confirmations with the parent." },
  { month: "May 2026", items: "Fourth-quarter TDS statements for 2025-26 (still on Forms 24Q, 26Q and 27Q) by 31 May. Statutory audit fieldwork." },
  { month: "June 2026", items: "First advance tax instalment (15%) by 15 June. DPT-3 return of deposits by 30 June. DIR-3 KYC Web by 30 June for directors whose triennial KYC falls due that year. First-quarter board meeting." },
  { month: "July 2026", items: "FLA return to the RBI by 15 July. First-quarter TDS statements (Forms 138, 140 and 144 under the Income-tax Act, 2025) by 31 July." },
  { month: "August 2026", items: "Board approval of audited financial statements and notice of the AGM. Transfer pricing documentation finalised for 2025-26." },
  { month: "September 2026", items: "Second advance tax instalment (45% cumulative) by 15 September. AGM held by 30 September, within six months of the year end." },
  { month: "October 2026", items: "Form 3CEB transfer pricing report, and the tax audit report where required, by 31 October. AOC-4 within 30 days of the AGM. Second-quarter TDS statements by 31 October." },
  { month: "November 2026", items: "Company income tax return for 2025-26 by 30 November, the due date where a transfer pricing report applies, unless extended. Master file (Form 3CEAA) by the same date where group thresholds apply. MGT-7 within 60 days of the AGM." },
  { month: "December 2026", items: "Third advance tax instalment (75% cumulative) by 15 December. GSTR-9, and GSTR-9C where turnover requires it, for 2025-26 by 31 December." },
  { month: "January 2027", items: "Third-quarter TDS statements by 31 January. Third-quarter board meeting." },
  { month: "February 2027", items: "Pre-year-end review: intercompany invoicing true-up, transfer pricing margin check against the agreed markup, and the next year's budget." },
  { month: "March 2027", items: "Final advance tax instalment (100%) by 15 March. Financial year 2026-27 ends on 31 March; cut-off and intercompany confirmations start." },
];

const PACK = [
  { name: "Financial statements", text: "Profit and loss, balance sheet and cash flow for the month and year to date, against budget and prior year, with variance commentary." },
  { name: "Group chart-of-accounts mapping", text: "The Indian trial balance mapped to the parent's chart of accounts, so it loads into consolidation without rework." },
  { name: "IFRS or US GAAP adjustments", text: "A bridge from the Indian GAAP or Ind AS ledger to group reporting, covering items such as leases, revenue timing and employee benefit provisions." },
  { name: "Intercompany reconciliation", text: "Balances and transactions with the parent and fellow subsidiaries, matched and confirmed, with the status of cost-plus or service-fee invoicing." },
  { name: "Cash and funding", text: "Bank balances, a short-term cash forecast, and any funding or repatriation need, with the FEMA reporting it would trigger." },
  { name: "Payroll and headcount", text: "Headcount, joiners and leavers, and payroll cost by department, reconciled to PF, ESI and TDS filings." },
  { name: "Receivables and payables", text: "Ageing of customer and vendor balances, including amounts due from the parent." },
  { name: "Tax position", text: "Advance tax paid against the estimate, GST input credit balance, and TDS deposited and reported." },
  { name: "Transfer pricing monitor", text: "Actual margin against the agreed markup or arm's-length range, so a year-end adjustment is not a surprise." },
  { name: "Compliance status", text: "Filings completed in the month, the next 60 days of due dates, and any notices received." },
];

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
      citation={{ label: "Reserve Bank of India — FLA return FAQs (rbi.org.in)", href: "https://www.rbi.org.in/commonman/english/scripts/FAQs.aspx?Id=1171" }}
      keyFacts={[
        { label: "FLA return (RBI)", value: "By 15 July each year" },
        { label: "AGM and ROC filings", value: "AGM within six months of year end; AOC-4 within 30 days and MGT-7 within 60 days of the AGM" },
        { label: "Transfer pricing", value: "Form 3CEB by 31 October; return by 30 November where a TP report applies" },
        { label: "Board meetings", value: "At least four a year, no more than 120 days apart" },
        { label: "Director KYC", value: "DIR-3 KYC Web once every three financial years, by 30 June of the year it falls due" },
      ]}
      subServicesHeading="What does an India subsidiary compliance and CFO retainer cover?"
      subServices={[
        { name: "Statutory Audit and Year-End Close", text: "We prepare Indian GAAP or Ind AS financial statements, coordinate the statutory audit, and align the year-end timetable with your group reporting deadlines." },
        { name: "ROC and Board Compliance", text: "AOC-4, MGT-7 and DPT-3 filings, plus agendas and minutes for at least four board meetings a year, with no more than 120 days between two meetings." },
        { name: "FEMA Reporting", text: "FC-GPR for each fresh share allotment, the annual FLA return, and downstream investment reporting where the subsidiary itself invests in another Indian entity." },
        { name: "Transfer Pricing", text: "Benchmarking of intercompany services, royalties, cost recharges and loans, Form 3CEB accountant's report, and master file compliance where your group crosses the thresholds." },
        { name: "GST, TDS and Payroll", text: "Monthly GST returns and reconciliations, TDS on vendor and cross-border payments, and payroll compliance for PF, ESI and Tamil Nadu professional tax." },
        { name: "MIS and Group Reporting Packs", text: "Monthly management accounts, cash flow and variance commentary, with IFRS or US GAAP adjustments mapped to your parent's chart of accounts and reporting calendar." },
      ]}
      howTo={{
        heading: "How is an Indian subsidiary onboarded for compliance and CFO support?",
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
        { question: "What are the main annual deadlines for a foreign-owned Indian subsidiary?", answer: "For a company with a 31 March year end and a foreign parent, the main annual dates are the FLA return by 15 July, the AGM by 30 September, Form 3CEB by 31 October, AOC-4 within 30 days and MGT-7 within 60 days of the AGM, the income tax return by 30 November where a transfer pricing report applies, and GSTR-9 by 31 December. Monthly GST and TDS, quarterly TDS statements and four advance tax instalments run alongside." },
        { question: "What does the monthly reporting pack for the parent contain?", answer: "A typical pack has the month's profit and loss, balance sheet and cash flow against budget, the trial balance mapped to the group chart of accounts, IFRS or US GAAP adjustments, and an intercompany reconciliation with the parent and fellow subsidiaries. It also covers cash forecast, payroll, ageing, tax position, a transfer pricing margin check and upcoming compliance dates, in the parent's format." },
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
      relatedPosts={["annual-roc-filing-calendar", "form-3ceb-due-date-applicability", "tds-return-filing-deadlines", "advance-tax-deadlines"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">What is the 12-month compliance calendar for a foreign-owned Indian subsidiary?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The calendar below covers tax year 2026-27 for a private company with a 31 March year end, a foreign parent and
        international transactions that need a transfer pricing report. The year-end filings that fall inside it relate to
        financial year 2025-26. Dates for AOC-4 and MGT-7 run from the actual AGM date; the examples assume an AGM on 30
        September.
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className={th}>Month</th>
              <th className={th}>Annual, quarterly and event-based items</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {CALENDAR.map((r) => (
              <tr key={r.month}>
                <td className={tdHead}>{r.month}</td>
                <td className={td}>{r.items}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        <span className="font-medium text-obsidian">Every month:</span> TDS deposited by the 7th of the following month,
        GSTR-1 by the 11th and GSTR-3B by the 20th for monthly GST filers, PF and ESI contributions, and the monthly close
        and reporting pack. <span className="font-medium text-obsidian">Through the year:</span> at least four board meetings
        with no more than 120 days between two, FC-GPR within 30 days of any share allotment to the parent, and Tamil Nadu
        professional tax on its half-yearly cycle. The CBDT, MCA and GST Council can extend dates, so the calendar is checked
        against current notifications each month. See also{" "}
        <Link href="/fema-rbi-compliance" className={linkClass}>
          FEMA and RBI compliance
        </Link>{" "}
        and{" "}
        <Link href="/transfer-pricing-audit" className={linkClass}>
          transfer pricing audit
        </Link>
        .
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What goes into the monthly reporting pack for the foreign parent?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The pack is built to the parent&apos;s calendar and format. A typical monthly pack contains the following; the exact
        contents are agreed with group finance at onboarding.
      </p>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PACK.map((p) => (
          <li key={p.name} className="rounded-cards border border-ash bg-paper p-6 shadow-[var(--shadow-card)]">
            <p className="font-medium text-obsidian">{p.name}</p>
            <p className="mt-1 text-sm text-slate">{p.text}</p>
          </li>
        ))}
      </ul>
    </ServicePageTemplate>
  );
}
