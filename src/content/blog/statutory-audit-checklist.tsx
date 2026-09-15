import type { BlogPostMeta } from "@/lib/blog";

export const meta: BlogPostMeta = {
  slug: "statutory-audit-checklist",
  title: "Statutory Audit Checklist: What Auditors Actually Ask For",
  description:
    "The documents and records a statutory auditor will actually request — prepare your company for a faster, smoother audit.",
  date: "2026-12-02",
  excerpt:
    "Most audit delays come from documents nobody prepared in advance. Here's exactly what your auditor is going to ask for.",
  faqs: [
    {
      question: "How far in advance should we prepare for a statutory audit?",
      answer:
        "Ideally, maintain audit-ready records throughout the year rather than scrambling at year-end — but at minimum, start gathering the documents on this checklist 3-4 weeks before your auditor's planned fieldwork.",
    },
    {
      question: "Is statutory audit mandatory even for a small, low-turnover company?",
      answer:
        "Yes. Every company registered under the Companies Act must have its financial statements audited annually, regardless of turnover, profit, or how small the operation is — there is no exemption for small private companies.",
    },
    {
      question: "What's the difference between statutory audit and tax audit?",
      answer:
        "Statutory audit is mandatory for every company under the Companies Act. Tax audit under Section 44AB of the Income Tax Act applies only above prescribed turnover/receipt thresholds and focuses specifically on income-tax compliance, not overall financial statement accuracy.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Most statutory audit delays don&apos;t come from complex accounting
        issues — they come from documents nobody prepared in advance. Here is
        the actual checklist auditors work through, so you can have everything
        ready before fieldwork begins.
      </p>

      <h2>Core financial records</h2>
      <ul>
        <li>Trial balance and general ledger for the full financial year</li>
        <li>Bank statements for all accounts, reconciled against the books</li>
        <li>Fixed asset register with additions, disposals, and depreciation schedules</li>
        <li>Inventory records and valuation basis, if applicable</li>
        <li>Debtors and creditors ageing schedules</li>
      </ul>

      <h2>Statutory and compliance documents</h2>
      <ul>
        <li>Previous year&apos;s audited financial statements and audit report</li>
        <li>GST returns filed during the year, reconciled against books</li>
        <li>TDS returns and challans</li>
        <li>Board meeting minutes and resolutions passed during the year</li>
        <li>Statutory registers (members, directors, charges)</li>
      </ul>

      <h2>Transaction-level evidence</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>What auditors verify</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Related-party transactions</td>
            <td>Proper disclosure and arm&apos;s-length pricing documentation</td>
          </tr>
          <tr>
            <td>Large or unusual transactions</td>
            <td>Supporting invoices, contracts, and board approval where required</td>
          </tr>
          <tr>
            <td>Loans and advances</td>
            <td>Terms, interest treatment, and Companies Act compliance (Section 185/186)</td>
          </tr>
          <tr>
            <td>Statutory dues</td>
            <td>Proof of timely payment of PF, ESI, GST, TDS, and professional tax</td>
          </tr>
        </tbody>
      </table>

      <h2>Why preparation speeds things up dramatically</h2>
      <p>
        An auditor who has to chase down missing bank statements or
        reconstruct a fixed asset register from scratch cannot move to
        substantive testing until that groundwork is done. Companies that
        maintain organised records throughout the year — not just at
        year-end — routinely complete statutory audits in half the time of
        companies that don&apos;t.
      </p>

      <h2>A simple year-round habit that pays off</h2>
      <ol>
        <li>Reconcile bank accounts monthly, not annually.</li>
        <li>Update the fixed asset register at the time of each purchase or disposal, not retroactively.</li>
        <li>File board minutes and resolutions as they happen.</li>
        <li>Keep GST and TDS reconciliations current each quarter rather than at year-end.</li>
      </ol>

      <p>
        Our <a href="/audit-and-assurance">Audit &amp; Assurance service</a>{" "}
        includes a pre-audit readiness review, so gaps in this checklist
        surface before fieldwork begins rather than during it.
      </p>
    </>
  );
}
