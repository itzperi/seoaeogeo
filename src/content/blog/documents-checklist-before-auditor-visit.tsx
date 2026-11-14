import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "documents-checklist-before-auditor-visit",
  title: "Documents Checklist Before Your Statutory Auditor's Visit",
  description:
    "Most audit delay in Chennai businesses has nothing to do with book complexity and everything to do with documents not being ready when the auditor arrives.",
  date: "2026-09-19",
  updated: "2026-11-14",
  excerpt:
    "A surprising amount of audit delay in Chennai businesses has nothing to do with the complexity of the books and everything to do with...",
  summary:
    "Before the auditor arrives, have ready bank statements and reconciliations for every account, the ledger export and trial balance, sales and purchase invoices, GST returns with reconciliations, payroll and TDS, PF, ESI and Professional Tax proof, the fixed asset register, loan papers, board minutes and statutory registers. Organised records shorten the audit considerably.",
  faqs: [
    {
      question: "What documents does an auditor ask for?",
      answer:
        "Auditors typically need bank statements and reconciliations for every account, the general ledger or accounting software export, a trial balance, sales and purchase invoices with credit and debit notes, GST and TDS returns, payroll and statutory dues records, a fixed asset register, loan documents, board minutes, statutory registers and the previous year's audited financial statements.",
    },
    {
      question: "Which GST returns should be ready for an audit?",
      answer:
        "If you are GST registered, keep GSTR-1, GSTR-3B and GSTR-2B for every month or quarter of the year, plus a reconciliation of turnover and input tax credit against the books. If an annual return in GSTR-9 has been filed, keep that too. The auditor uses these to test revenue and input credit quickly.",
    },
    {
      question: "Why do audits get delayed in Chennai businesses?",
      answer:
        "Most delay has little to do with complex accounting and everything to do with documents not being ready. Missing bank statements, unreconciled GST figures, a fixed asset register built from memory and unsigned board minutes all force the auditor to pause and send follow-up requests, which stretches fieldwork over weeks instead of days.",
    },
    {
      question: "Does my accounting software need an audit trail?",
      answer:
        "Yes, for companies. Under Rule 3(1) of the Companies (Accounts) Rules, 2014, every company must, from 1 April 2023, keep its books in accounting software that records an audit trail of each change, which cannot be disabled. The statutory auditor reports on this, so confirm the feature is switched on before the audit begins.",
    },
    {
      question: "How early should I start preparing for the auditor's visit?",
      answer:
        "Start gathering documents three to four weeks before fieldwork, and finish the bank, GST and TDS reconciliations first, because those raise the most queries. Businesses that reconcile monthly through the year need only a short final check, while those that leave everything to year-end usually need the full month.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Before your statutory auditor visits, have these ready: bank statements and reconciliations for every account, the
        trial balance and ledger export, sales and purchase invoices, GST and TDS returns with reconciliations, payroll and
        statutory dues proof, the fixed asset register, loan documents, board minutes and statutory registers. Organised
        records are what make an audit quick.
      </p>

      <p>
        A surprising amount of audit delay in Chennai businesses has nothing to do with the complexity of the books and
        everything to do with documents not being ready when the auditor arrives. The checklist below is the working
        pack we suggest clients assemble before fieldwork, grouped the way an auditor actually uses it.
      </p>

      <h2>What basic financial records should be ready on day one?</h2>

      <p>
        Bank statements for the full financial year across every account, including closed accounts and overdraft or
        cash credit accounts, are the foundation. Each should come with a bank reconciliation as on 31 March. Add the
        general ledger or accounting software export and a trial balance that agrees with the draft financial
        statements. If you use accounting software, giving the auditor read-only access or a clean export saves
        significant back and forth compared with scattered spreadsheets.
      </p>

      <p>
        For companies, one more point matters before anything else. Under Rule 3(1) of the Companies (Accounts) Rules,
        2014 (published on the{" "}
        <a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer">Ministry of Corporate Affairs website</a>),
        books must be kept in software that records an audit trail (an edit log) of every change, and the auditor has
        to report on it. Confirm the feature was enabled for the whole year, not switched on just before the audit.
      </p>

      <h2>Which sales, purchase and GST documents does the auditor need?</h2>

      <p>
        All sales invoices and purchase bills for the year, organised by month, along with credit and debit notes. If you
        are GST registered, have your <Link href="/gst-return-filing-chennai">GST returns</Link> (GSTR-1, GSTR-3B and
        GSTR-2B) for the full year ready, together with a reconciliation of:
      </p>

      <ul>
        <li>turnover in GSTR-1 and GSTR-3B against sales in the books</li>
        <li>input tax credit claimed in GSTR-3B against GSTR-2B and the purchase register</li>
        <li>output tax paid against the GST liability ledgers</li>
      </ul>

      <p>
        Differences are normal. What slows the audit is differences nobody has explained. A short note against each gap,
        such as an invoice booked in March but reported in April, lets the auditor move on instead of raising a query.
      </p>

      <h2>What payroll and statutory dues proof will be checked?</h2>

      <p>
        <Link href="/payroll-services-chennai">Salary registers</Link>, TDS deducted on salaries and on payments to
        vendors, proof of TDS deposited and quarterly returns filed (see the{" "}
        <a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/tds-compliance" target="_blank" rel="noopener noreferrer">income tax portal guide to TDS compliance</a>),
        PF and ESI challans if applicable, and Professional Tax payment records. Auditors specifically check whether
        statutory dues were deducted and deposited on time, and where CARO 2020 applies to a company, the audit report
        must state undisputed dues that remain outstanding. A simple month-by-month table of each due, the date paid and
        the challan number answers most of these questions in one go.
      </p>

      <h2>What about fixed assets, inventory and loans?</h2>

      <p>
        A fixed asset register showing additions and disposals during the year, with invoices for major purchases and
        sale documents for disposals, is essential. Depreciation calculations depend on accurate asset records from the
        start. If you hold stock, keep the physical count sheets from 31 March and the basis of valuation. For loans
        taken or given, have sanction letters, repayment schedules, interest workings and lender statements confirming
        the closing balance.
      </p>

      <h2>Which company law records are often forgotten?</h2>

      <p>
        Owners tend to prepare the accounting records and forget the secretarial ones. Before the visit, locate:
      </p>

      <ul>
        <li>signed minutes of board meetings and general meetings held during the year</li>
        <li>the register of members, register of directors and key managerial personnel, and register of charges</li>
        <li>the previous year&apos;s audited financial statements and audit report</li>
        <li>agreements with related parties, such as rent paid to a director or loans from relatives</li>
        <li>copies of MCA filings made during the year, including any event-based forms</li>
      </ul>

      <h2>What should you send, and why is each item asked for?</h2>

      <table>
        <thead>
          <tr>
            <th>Document</th>
            <th>Why the auditor asks for it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bank statements and reconciliations</td>
            <td>To confirm cash balances and trace receipts and payments</td>
          </tr>
          <tr>
            <td>GST returns and reconciliations</td>
            <td>To test revenue completeness and input tax credit</td>
          </tr>
          <tr>
            <td>TDS, PF, ESI and Professional Tax challans</td>
            <td>To check timely deposit of statutory dues</td>
          </tr>
          <tr>
            <td>Fixed asset register and invoices</td>
            <td>To verify additions, disposals and depreciation</td>
          </tr>
          <tr>
            <td>Stock count sheets and valuation basis</td>
            <td>To support the closing inventory figure</td>
          </tr>
          <tr>
            <td>Loan sanction letters and lender statements</td>
            <td>To confirm balances, interest and security created</td>
          </tr>
          <tr>
            <td>Minutes and statutory registers</td>
            <td>To confirm approvals and company law compliance</td>
          </tr>
        </tbody>
      </table>

      <h2>How should you organise the pack before fieldwork?</h2>

      <ol>
        <li>Close the books for the year and print the trial balance.</li>
        <li>Finish bank, GST and TDS reconciliations, with a one-line explanation for every difference.</li>
        <li>Update the fixed asset register and gather invoices for additions above a level you agree with the auditor.</li>
        <li>Collect signed minutes, registers and related party agreements in one folder.</li>
        <li>Share everything in a single shared folder with sub-folders that match the table above.</li>
        <li>Name one person in your team who can answer queries during fieldwork.</li>
      </ol>

      <p>
        What the auditor then tests, from CARO reporting to related party disclosures, is covered in our{" "}
        <Link href="/blog/statutory-audit-checklist">statutory audit checklist</Link>. Once the audit is signed, the
        financial statements still have to be filed with the MCA, and late filing costs money, as our note on{" "}
        <Link href="/blog/aoc-4-mgt-7-late-fee">AOC-4 and MGT-7 late fees</Link> explains.
      </p>

      <p>
        If preparing for your annual <Link href="/statutory-audit-chennai">statutory audit</Link> feels overwhelming,
        or your books need tidying first through{" "}
        <Link href="/bookkeeping-services-chennai">bookkeeping support</Link>, C S Rushil &amp; Co. in Anna Nagar can
        walk you through exactly what to organise before the visit. Book a free 15-minute consultation.
      </p>
    </>
  );
}
