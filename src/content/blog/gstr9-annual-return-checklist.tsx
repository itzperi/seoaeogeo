import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "gstr9-annual-return-checklist",
  title: "GSTR-9 Annual Return: Filing Checklist for Small Businesses",
  description:
    "GSTR 9 is the annual return every regular GST registered business must file, summarizing a full year of GSTR-1 and GSTR-3B filings. A practical checklist.",
  date: "2026-09-19",
  updated: "2026-11-14",
  excerpt:
    "GSTR 9 is the annual return every regular GST registered business needs to file, summarizing an entire financial year of GSTR 1 and GSTR 3B...",
  summary:
    "GSTR-9 is the annual return in which a regular GST taxpayer consolidates a year of GSTR-1 and GSTR-3B filings. For FY 2025-26 it is due by 31 December 2026 unless extended. Reconcile sales, input tax credit against GSTR-2B, credit notes and tax paid first, and check whether the ₹2 crore exemption or the GSTR-9C requirement applies.",
  faqs: [
    {
      question: "Who has to file GSTR-9?",
      answer:
        "Every taxpayer registered under the regular GST scheme files GSTR-9 for each financial year, unless exempted. Composition taxpayers file GSTR-4 as their annual return instead, and casual and non-resident taxable persons, input service distributors and TDS or TCS registrants do not file it. Small taxpayers have also been exempted by notification in recent years.",
    },
    {
      question: "What is the due date for GSTR-9?",
      answer:
        "Under Section 44 of the CGST Act, GSTR-9 is due by 31 December following the end of the financial year, so the return for FY 2025-26 is due by 31 December 2026 unless the government extends it. The law also bars filing an annual return more than three years after its due date, so very old gaps cannot be closed later.",
    },
    {
      question: "Is GSTR-9 optional for turnover below ₹2 crore?",
      answer:
        "In recent years, taxpayers with aggregate turnover up to ₹2 crore have been allowed to skip GSTR-9 through a notification issued for each year. Because the relief is granted year by year, check the notification for the year you are filing before deciding. GSTR-9C, the reconciliation statement, applies only above ₹5 crore of aggregate turnover.",
    },
    {
      question: "What problems commonly surface at GSTR-9 time?",
      answer:
        "The three most common are input tax credit claimed in GSTR-3B not matching GSTR-2B for the year, sales in GSTR-1 not matching your books, and credit or debit notes never properly reflected during the year. Each needs to be reconciled and then corrected, paid through DRC-03 or explained before filing.",
    },
    {
      question: "Can I correct mistakes or claim missed credit in GSTR-9?",
      answer:
        "Only partly. GSTR-9 reports what happened; it cannot be used to claim input tax credit you did not take in GSTR-3B. Credit for a year must be claimed by 30 November after the year ends. Tax found short at annual return time should be paid through Form DRC-03 with interest, and GSTR-9 itself cannot be revised once filed.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        GSTR-9 is the annual return in which a regular GST taxpayer summarises a full financial year of GSTR-1 and GSTR-3B filings. For FY 2025-26 it is due by 31 December 2026 unless extended. It cannot be revised once filed, and it is where small errors made during the year tend to surface all at once.
      </p>

      <h2>Who needs to file GSTR-9, and who does not?</h2>

      <p>
        Every business registered under the regular GST scheme files GSTR-9 for each financial year under Section 44 of the CGST Act and Rule 80 of the CGST Rules (the GST portal&apos;s <a href="https://tutorial.gst.gov.in/userguide/returns/FAQs_gstr9.htm" target="_blank" rel="noopener noreferrer">GSTR-9 FAQs</a> set out the current rules). The exceptions are:
      </p>

      <ul>
        <li>Composition taxpayers, who file GSTR-4 as their annual return instead.</li>
        <li>Casual taxable persons, non-resident taxable persons, input service distributors and persons registered only to deduct or collect tax at source.</li>
        <li>Small taxpayers covered by the annual exemption notification. In recent years this has applied to aggregate turnover up to ₹2 crore, but it is issued for each year separately, so confirm it for the year you are filing rather than assuming last year&apos;s rule still applies.</li>
      </ul>

      <p>
        Businesses with aggregate turnover above ₹5 crore also file GSTR-9C, a self-certified statement reconciling GSTR-9 with the audited financial statements.
      </p>

      <h2>What goes into each part of GSTR-9?</h2>

      <table>
        <thead>
          <tr>
            <th>Part</th>
            <th>What it covers</th>
            <th>Reconcile it against</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Part II (Tables 4 and 5)</td>
            <td>Outward supplies: taxable, zero-rated, exempt and reverse charge, with credit and debit notes</td>
            <td>Sales ledger and all twelve GSTR-1 returns</td>
          </tr>
          <tr>
            <td>Part III (Tables 6 to 8)</td>
            <td>Input tax credit availed, reversed, and compared with the auto-populated figure in Table 8A</td>
            <td>Purchase register, GSTR-3B and GSTR-2B</td>
          </tr>
          <tr>
            <td>Part IV (Table 9)</td>
            <td>Tax payable and tax actually paid, in cash and through credit</td>
            <td>Electronic cash and credit ledgers</td>
          </tr>
          <tr>
            <td>Part V (Tables 10 to 14)</td>
            <td>Transactions of this year declared in the next year&apos;s returns, up to the time limit</td>
            <td>Returns filed between April and November of the following year</td>
          </tr>
          <tr>
            <td>Part VI (Tables 15 to 19)</td>
            <td>Demands and refunds, supplies from composition dealers, HSN summaries and late fee</td>
            <td>Notices, refund orders and item-wise sales and purchase data</td>
          </tr>
        </tbody>
      </table>

      <p>
        If your monthly returns were accurate and filed on time, this is largely a consolidation exercise. If they were not, this is where the gaps become visible to the department.
      </p>

      <h2>Which problems usually surface at annual return time?</h2>

      <p>
        Three issues come up most often. Input tax credit claimed in GSTR-3B does not match GSTR-2B for the year, usually because a supplier filed late, filed against the wrong GSTIN or never filed at all. Sales reported in GSTR-1 do not match your books, a common result of irregular <Link href="/bookkeeping-services-chennai">bookkeeping</Link>. And credit notes or debit notes were never properly reflected during the year. A smaller but costly fourth is credit claimed on items blocked by Section 17(5), such as food or most motor vehicles. Our guide to{" "}
        <Link href="/blog/itc-mismatch-notices">ITC mismatch notices</Link> explains how supplier gaps turn into notices if they are left unexplained.
      </p>

      <h2>Can GSTR-9 be used to correct mistakes?</h2>

      <p>
        Only to a limited extent. Credit for a financial year must be claimed in GSTR-3B by 30 November after the year ends, and GSTR-9 cannot be used to claim credit you missed. Errors in reporting during the year can be corrected in GSTR-1 and GSTR-3B up to the same 30 November cut-off. Tax found short when preparing GSTR-9 should be paid through Form DRC-03 with interest, and disclosed in the return. Because GSTR-9 cannot be revised once filed, every figure needs to be settled before you submit.
      </p>

      <h2>What is the late fee for filing GSTR-9 late?</h2>

      <p>
        Under the late fee rates rationalised in 2023, the fee per day of delay depends on aggregate turnover:
      </p>

      <ul>
        <li>Up to ₹5 crore: ₹50 per day (₹25 CGST and ₹25 SGST), capped at 0.04% of turnover in the state.</li>
        <li>Above ₹5 crore and up to ₹20 crore: ₹100 per day, capped at 0.04% of turnover in the state.</li>
        <li>Above ₹20 crore: ₹200 per day, capped at 0.5% of turnover in the state.</li>
      </ul>

      <p>
        The law also now bars filing an annual return more than three years after its due date, so a missed GSTR-9 cannot simply be filed whenever convenient.
      </p>

      <h2>What is a practical GSTR-9 filing checklist?</h2>

      <ol>
        <li>Reconcile all twelve months of GSTR-3B against GSTR-1 for the same period.</li>
        <li>Match total credit claimed for the year against GSTR-2B, invoice by invoice where the gap is material.</li>
        <li>Check credit against the blocked list in Section 17(5) and reverse anything ineligible.</li>
        <li>List all credit and debit notes issued and received, and confirm they were reported in the right period.</li>
        <li>Tie the HSN summary to item-wise sales and purchase data.</li>
        <li>Pay any shortfall through DRC-03 before filing, so the return and the ledgers agree.</li>
        <li>Check whether GSTR-9C also applies, and keep working papers ready for a later query.</li>
      </ol>

      <h2>Why should you not leave GSTR-9 to the last week?</h2>

      <p>
        Because GSTR-9 depends on reconciling a full year of data, starting a few weeks before the deadline usually surfaces mismatches with enough time to fix them. Starting in the final days leaves no room to correct anything found. Annual return data also feeds the department&apos;s scrutiny of returns under Section 61, and unexplained differences often lead to a Form ASMT-10. Our{" "}
        <Link href="/blog/asmt-10-gst-scrutiny-notice-reply">ASMT-10 reply guide</Link> covers what to do if one arrives.
      </p>

      <p>
        If preparing your annual GST return feels like untangling twelve months of small inconsistencies, C S Rushil &amp; Co. in Anna Nagar handles the full reconciliation and <Link href="/gst-return-filing-chennai">GST return filing</Link> for small and mid-sized Chennai businesses. Book a free 15-minute consultation through our <Link href="/contact">contact page</Link> before your filing window closes.
      </p>
    </>
  );
}
