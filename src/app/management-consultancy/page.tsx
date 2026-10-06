import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "Management Consultancy Services in Chennai";
const description =
  "Management consultancy in Chennai by Chartered Accountants: business plans, budgets, internal controls, process reviews and funding readiness for growing firms.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/management-consultancy" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/management-consultancy",
  },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";

const signals: { signal: string; work: string }[] = [
  { signal: "Profit on paper, but cash is always short", work: "Working capital review and a 13-week cash flow forecast" },
  { signal: "A bank or investor has asked for projections", work: "Business plan with three-statement financial model and stated assumptions" },
  { signal: "The founder approves every payment", work: "Delegation of authority matrix and approval workflows" },
  { signal: "Stock or cash differences keep appearing", work: "Process and internal control review of purchase, inventory and cash cycles" },
  { signal: "No one can say which product or branch makes money", work: "Cost and margin analysis by product, customer or location" },
  { signal: "Planning a new branch, product line or acquisition", work: "Feasibility study and financial due diligence" },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/management-consultancy`}
      serviceType="Management Consulting"
      crumbLabel="Management Consultancy"
      crumbHref="/management-consultancy"
      eyebrow="Consultancy · Chennai"
      h1="Management Consultancy in Chennai"
      subhead="Practical, numbers-first advice for owner-managed businesses and startups: plans you can take to a bank, budgets you actually track, and controls that stop leakage."
      introHeading="What does management consultancy in Chennai do for a growing business?"
      intro="Management consultancy in Chennai helps owner-managed businesses and startups make better decisions using their own financial data. Our Chartered Accountants prepare business plans and projections, set up budgets and monthly variance reviews, design internal controls, review processes such as purchasing and inventory, and get companies ready for bank loans or equity funding."
      citation={{ label: "ICAI Internal Audit Standards Board", href: "https://www.icai.org/post/internal-audit-standards-board" }}
      keyFacts={[
        { label: "Who it suits", value: "Owner-managed SMEs, family businesses, startups preparing to raise funds, and Indian subsidiaries of foreign groups" },
        { label: "Engagement types", value: "Fixed-scope projects (a plan, a process review) or an ongoing advisory arrangement" },
        { label: "Typical project length", value: "Four to eight weeks for a business plan, budget or process review, depending on data availability" },
        { label: "Deliverables", value: "Written report, financial model or budget workbook, control matrix and an action list with owners and dates" },
        { label: "Linked requirement", value: "Companies must have adequate internal financial controls; auditors and directors report on them under the Companies Act, 2013" },
      ]}
      subServicesHeading="Which areas does our management consultancy cover?"
      subServices={[
        { name: "Business Planning and Projections", text: "Three-year business plans with linked profit and loss, balance sheet and cash flow projections, built on assumptions you can defend in front of a lender or investor." },
        { name: "Budgeting and Variance Review", text: "Annual budgets by department, branch or product, with a monthly actual-versus-budget review that explains why numbers moved and what to change." },
        { name: "Internal Controls Design", text: "Approval limits, segregation of duties, maker-checker rules in banking and accounting software, and a risk-and-control matrix your auditor can test." },
        { name: "Process Reviews", text: "Walk-throughs of procure-to-pay, order-to-cash, inventory and payroll cycles to find delays, duplicate work and points where money can leak." },
        { name: "Funding Readiness", text: "Clean-up of books and compliance, financial model, data room and answers to the questions banks and investors ask during due diligence." },
        { name: "Costing and Pricing Analysis", text: "Product, customer and branch profitability, so pricing and discount decisions are based on contribution margin, not guesswork." },
      ]}
      howTo={{
        heading: "How does a management consultancy engagement work?",
        steps: [
          { name: "Define the problem", text: "A first meeting to agree the exact question to answer, such as 'Can we afford a second unit?' or 'Why is cash tight despite profit?', and what a useful answer looks like." },
          { name: "Collect data", text: "We gather books of account, GST returns, bank statements, sales and inventory reports, and interview the people who run each process." },
          { name: "Analyse", text: "We build the model, map the process or test the controls, and compare your numbers against your own history and stated targets." },
          { name: "Recommend", text: "You receive a short written report with findings, quantified where possible, and a prioritised action list with owners and dates." },
          { name: "Follow through", text: "Optional monthly reviews to check whether actions were implemented and whether budgets and controls are working as planned." },
        ],
      }}
      faqs={[
        { question: "What kind of businesses use management consultancy services?", answer: "Owner-managed SMEs, family businesses, startups and Indian subsidiaries all use it, usually at a turning point: raising a loan or funding, opening a new unit, a sharp rise in costs, or recurring stock and cash differences. The common thread is a decision that needs reliable numbers and an outside view." },
        { question: "How is management consultancy different from a Virtual CFO?", answer: "Management consultancy is usually a defined project with an end date, such as a business plan, budget or process review. A Virtual CFO is an ongoing role that owns monthly reporting, cash planning and board discussions. Many clients start with a project and move to a Virtual CFO arrangement once the plan needs running month to month." },
        { question: "Can you prepare a business plan for a bank loan?", answer: "Yes. We prepare business plans and projected financial statements for term loans and working-capital limits, with assumptions on sales, margins, working capital and repayment clearly stated. Banks test these assumptions, so we build them from your actual history and order book rather than round-number targets." },
        { question: "What does an internal controls review involve?", answer: "We walk through key cycles such as purchases, sales, inventory, payroll and banking, document who does what, and test whether approvals and reconciliations actually happen. You receive a list of control gaps ranked by risk, and practical fixes such as approval limits, maker-checker settings and monthly reconciliations." },
        { question: "How do you help a startup get funding-ready?", answer: "We bring books, ROC and tax filings up to date, reconcile the cap table with company records, build a financial model, and prepare a data room with the documents investors request in due diligence. Gaps found early, such as unfiled forms or unreconciled GST, are much cheaper to fix before a term sheet." },
        { question: "Is management consultancy a one-time or ongoing engagement?", answer: "Both are available. A focused project, such as a process review or budget, typically runs four to eight weeks and ends with a report and action list. An ongoing advisory arrangement adds monthly or quarterly reviews of budgets, controls and action items, which suits businesses going through rapid change." },
        { question: "Will the consultancy affect our statutory audit?", answer: "It can make the audit smoother, because reconciled books and documented controls reduce audit queries. Independence rules matter, though: under the Companies Act, a company's statutory auditor cannot provide certain services, including internal audit and management services, to that company. We confirm the position before accepting any engagement." },
      ]}
      relatedSlugs={["virtual-cfo-services", "india-subsidiary-compliance-cfo", "audit-and-assurance"]}
      relatedPosts={[
        "management-consultancy-anna-nagar-business",
        "cash-flow-forecasting-framework",
        "cash-flow-not-profit-business-failure",
        "what-virtual-cfo-reviews-monthly",
        "outgrown-bookkeeping-signs",
      ]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Signs your business needs outside advice</h2>
      <div className="mt-6 max-w-3xl overflow-hidden rounded-cards border border-ash">
        <table className="w-full text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className="px-4 py-3 font-medium">What you are seeing</th>
              <th className="px-4 py-3 font-medium">Typical piece of work</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {signals.map((r) => (
              <tr key={r.signal}>
                <td className="px-4 py-3 align-top font-medium text-obsidian">{r.signal}</td>
                <td className="px-4 py-3 align-top text-slate">{r.work}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">Why Chartered Accountants for consultancy</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Most management problems in small and mid-sized businesses show up first in the numbers: a margin that slips, a
        debtor balance that keeps growing, a stock figure that never matches the godown. Our team reads those numbers every
        day across audit, tax and accounting work, so the advice starts from your ledgers and GST data rather than a
        generic framework.
      </p>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        When a project turns into a need for month-to-month financial leadership, our{" "}
        <Link href="/virtual-cfo-services" className={linkClass}>
          Virtual CFO services
        </Link>{" "}
        take over the running of budgets and cash plans. Foreign groups setting up in India can combine consultancy with
        our{" "}
        <Link href="/india-subsidiary-compliance-cfo" className={linkClass}>
          India subsidiary compliance and CFO support
        </Link>
        . Where you need independent assurance on the numbers themselves, see our{" "}
        <Link href="/audit-and-assurance" className={linkClass}>
          statutory, tax and internal audit services
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
