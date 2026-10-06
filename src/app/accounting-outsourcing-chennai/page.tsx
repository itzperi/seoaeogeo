import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "Accounting Outsourcing in Chennai | Tally, Zoho, QuickBooks";
const description =
  "Accounting outsourcing in Chennai: bookkeeping, payroll, GST, TDS, PF and ESI compliance, monthly MIS and Tally, Zoho Books or QuickBooks setup in one team.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/accounting-outsourcing-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/accounting-outsourcing-chennai",
  },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";

const calendar: { item: string; when: string }[] = [
  { item: "TDS deposit", when: "By the 7th of the following month (30 April for tax deducted in March)" },
  { item: "PF and ESI contributions", when: "By the 15th of the following month" },
  { item: "GSTR-1 (monthly filers)", when: "By the 11th of the following month" },
  { item: "GSTR-3B (monthly filers)", when: "By the 20th of the following month" },
  { item: "Quarterly TDS statements", when: "31 July, 31 October, 31 January and 31 May" },
  { item: "Month-end close and MIS", when: "Agreed working day each month, typically within the first two weeks" },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/accounting-outsourcing-chennai`}
      serviceType="Accounting Outsourcing"
      crumbLabel="Accounting Outsourcing"
      crumbHref="/accounting-outsourcing-chennai"
      eyebrow="Accounting Outsourcing · Chennai"
      h1="Accounting Outsourcing in Chennai"
      subhead="Hand over the whole finance back office, from entries and payroll to GST, TDS, PF and ESI filings and a monthly MIS pack, to one accountable team of Chartered Accountants."
      introHeading="What does accounting outsourcing in Chennai cover?"
      intro="Accounting outsourcing in Chennai means handing your entire finance back office to an external team: day-to-day bookkeeping, payroll, GST, TDS, PF and ESI filings, month-end closing, management reports and accounting software administration. Unlike bookkeeping alone, the outsourced team owns the compliance calendar and the monthly numbers, so you no longer need an in-house accounts department."
      citation={{ label: "ICAI Accounting Standards", href: "https://www.icai.org/post/accounting-standards" }}
      keyFacts={[
        { label: "Who it suits", value: "Startups, SMEs and Indian subsidiaries without a full in-house finance team, or replacing one that has turned over" },
        { label: "What moves to us", value: "Bookkeeping, payables and receivables, payroll, GST, TDS, PF and ESI compliance, month-end close, MIS and audit support" },
        { label: "Software supported", value: "Tally Prime, Zoho Books, QuickBooks and Xero, including setup and migration" },
        { label: "Legal requirement on books", value: "Section 128, Companies Act, 2013; accounting software must keep an audit trail (edit log) under Rule 3(1), Companies (Accounts) Rules, 2014" },
        { label: "Typical onboarding", value: "Two to four weeks, depending on backlog and data quality" },
      ]}
      subServicesHeading="What is included when you outsource your accounting to us?"
      subServices={[
        { name: "Bookkeeping and Reconciliation", text: "Recording of sales, purchases, expenses and bank entries, with monthly bank, GST input and vendor reconciliations. See our dedicated bookkeeping page if this is all you need." },
        { name: "Payables and Receivables", text: "Vendor bill processing, payment runs prepared for your approval, customer invoicing and ageing reports, so cash collection is tracked, not guessed." },
        { name: "Payroll Processing", text: "Monthly salary computation, payslips, TDS on salary, PF and ESI challans, professional tax and Form 16, aligned with your HR inputs." },
        { name: "GST, TDS, PF and ESI Compliance", text: "Return preparation and filing on the GST, TRACES, EPFO and ESIC portals against a fixed monthly calendar, with ITC matched to supplier filings." },
        { name: "Month-end Close and MIS", text: "Accruals, prepaid and depreciation entries, then a monthly pack covering profit and loss, cash position, receivables, payables and budget variance." },
        { name: "Software Setup and Migration", text: "Implementation of Tally Prime, Zoho Books, QuickBooks or Xero, chart of accounts design, opening balance migration and audit-trail settings." },
      ]}
      howTo={{
        heading: "How do we take over your accounting function?",
        steps: [
          { name: "Diagnostic review", text: "We review your current books, software, filing history and open notices to see what is clean, what is backlogged and what carries risk." },
          { name: "Scope and calendar", text: "We agree exactly which activities move to us, who approves payments, and a written monthly calendar with dates for each filing and report." },
          { name: "Access and handover", text: "You grant role-based access to your accounting software, banking statements and government portals. We document existing processes before changing anything." },
          { name: "Catch-up and clean-up", text: "Backlogged entries, unreconciled balances and mismatches between books and GST or TDS returns are cleared before the first full month runs." },
          { name: "Steady-state month", text: "Each month we post, reconcile, file and close, then share the MIS pack and a short note on anything that needs your decision." },
        ],
      }}
      faqs={[
        { question: "How is accounting outsourcing different from bookkeeping services?", answer: "Bookkeeping covers recording and reconciling transactions. Accounting outsourcing covers the whole finance function: bookkeeping plus payroll, statutory filings, payables and receivables, month-end close, MIS reporting and audit support. If you only need clean books for your existing accountant, bookkeeping is enough; if you have no accounts team, outsourcing is the closer fit." },
        { question: "Which accounting software do you work with?", answer: "We work with Tally Prime, Zoho Books, QuickBooks and Xero. We can work in your existing software or help you choose and implement one, including chart of accounts design, opening balance migration, user roles and the audit trail setting companies must keep switched on under the Companies (Accounts) Rules." },
        { question: "Is it safe to share our accounting data and portal access?", answer: "Access is role-based and documented. We prefer named user logins in your software over shared passwords, and payment release stays with you: we prepare payment files, your authorised signatory approves them in the bank. Our team works under Chartered Accountant confidentiality obligations, and access is removed when an engagement ends." },
        { question: "Can you take over from an accountant who has left mid-year?", answer: "Yes. This is a common starting point. We first reconcile the books to bank statements and filed GST and TDS returns, list the gaps, then catch up the backlog before running a normal month. Any missed filings are brought current with interest or late fees computed, so you know the exact exposure." },
        { question: "Do you also handle payroll, PF and ESI?", answer: "Yes. Payroll is part of the outsourced scope: salary computation, payslips, TDS on salary, PF and ESI contributions by the 15th of the following month, professional tax and annual Form 16. If you only need payroll without accounting, our separate payroll service covers that on its own." },
        { question: "What reports will we receive each month?", answer: "A monthly MIS pack with profit and loss against budget, balance sheet, cash and bank position, receivables and payables ageing, and a compliance status sheet showing what was filed and when. We add a short commentary on movements that need a decision, such as slow-paying customers or rising costs." },
        { question: "Does outsourcing replace a CFO?", answer: "No. Outsourced accounting produces accurate, timely numbers and keeps you compliant. A CFO uses those numbers to plan cash, raise funds, set budgets and advise the board. Many clients pair accounting outsourcing with our Virtual CFO service once the monthly close is reliable." },
      ]}
      relatedSlugs={["bookkeeping-services-chennai", "payroll-services-chennai", "virtual-cfo-services"]}
      relatedPosts={[
        "outgrown-bookkeeping-signs",
        "business-personal-expenses-separate",
        "tds-return-filing-deadlines",
        "what-virtual-cfo-reviews-monthly",
        "cash-flow-forecasting-framework",
      ]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">The monthly compliance calendar we run for you</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        These are the recurring statutory dates most Chennai businesses face. Quarterly GST filers under QRMP and businesses
        with other registrations will have additional or different dates, which we map during onboarding.
      </p>
      <div className="mt-6 max-w-3xl overflow-hidden rounded-cards border border-ash">
        <table className="w-full text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className="px-4 py-3 font-medium">Item</th>
              <th className="px-4 py-3 font-medium">Due</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {calendar.map((r) => (
              <tr key={r.item}>
                <td className="px-4 py-3 align-top font-medium text-obsidian">{r.item}</td>
                <td className="px-4 py-3 align-top text-slate">{r.when}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">Outsourcing, bookkeeping, payroll or a Virtual CFO?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        If your accountant only needs help keeping entries current, start with our{" "}
        <Link href="/bookkeeping-services-chennai" className={linkClass}>
          bookkeeping services for Chennai businesses
        </Link>
        . If salaries are the pain point, our{" "}
        <Link href="/payroll-services-chennai" className={linkClass}>
          payroll, PF and ESI processing service
        </Link>{" "}
        runs on its own. Full accounting outsourcing makes sense when nobody in-house owns the month-end close and the
        filing calendar.
      </p>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Once the numbers arrive reliably each month, the next question is usually what to do with them: cash planning,
        budgets, fundraising and board reporting. That is the job of our{" "}
        <Link href="/virtual-cfo-services" className={linkClass}>
          Virtual CFO services
        </Link>
        , which sit on top of an outsourced accounting function.
      </p>
    </ServicePageTemplate>
  );
}
