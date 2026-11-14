import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "statutory-audit-checklist",
  title: "Statutory Audit Checklist: What Auditors Actually Ask For",
  description:
    "The documents and records a statutory auditor will ask your company for, and how to prepare them in advance so the audit is faster and the queries fewer.",
  date: "2026-09-19",
  updated: "2026-11-14",
  excerpt:
    "Most audit delays come from documents nobody prepared in advance. Here's exactly what your auditor is going to ask for.",
  faqs: [
    {
      question: "How far in advance should we prepare for a statutory audit?",
      answer:
        "Ideally, keep records audit-ready through the year with monthly bank reconciliations and quarterly GST and TDS reconciliations. At minimum, start gathering the documents on this checklist three to four weeks before the auditor's planned fieldwork, so that the auditor can begin testing on day one instead of waiting for basic records.",
    },
    {
      question: "Is statutory audit mandatory even for a small, low-turnover company?",
      answer:
        "Yes. Every company registered under the Companies Act, 2013 must have its financial statements audited every year by a chartered accountant appointed under Section 139, whatever its turnover or profit. A small private company may be exempt from some reporting, such as CARO 2020, but never from the audit itself.",
    },
    {
      question: "What's the difference between statutory audit and tax audit?",
      answer:
        "Statutory audit is mandatory for every company under the Companies Act and reports on whether the financial statements are true and fair. Tax audit applies only above turnover or receipt thresholds under Section 44AB of the Income-tax Act, 1961, which is Section 63 of the Income-tax Act, 2025 from tax year 2026-27, and focuses on tax compliance.",
    },
    {
      question: "Does CARO 2020 apply to every company?",
      answer:
        "No. CARO 2020 does not apply to one person companies, small companies, Section 8 companies and certain private companies that are not a holding or subsidiary of a public company and stay within limits on paid-up capital and reserves, borrowings and revenue. Your auditor confirms applicability each year from the audited figures.",
    },
    {
      question: "When must audited financial statements be filed with the MCA?",
      answer:
        "The audited financial statements are adopted at the annual general meeting, which for most companies must be held within six months of the year end, so by 30 September. Form AOC-4 is then due within 30 days of the AGM and the annual return in MGT-7 or MGT-7A within 60 days.",
    },
  ],
  summary:
    "A statutory auditor asks for core financial records, GST and TDS returns with reconciliations, board minutes and statutory registers, and evidence for related party transactions, loans, large transactions and statutory dues. The auditor also reports on CARO 2020, internal financial controls and the accounting software audit trail where these apply, so preparing early speeds everything.",
};

export default function Body() {
  return (
    <>
      <p>
        A statutory auditor will ask for your trial balance and ledgers, bank reconciliations, fixed asset and inventory
        records, GST and TDS returns, board minutes and statutory registers, and evidence for related party
        transactions, loans and statutory dues. Most{" "}
        <Link href="/statutory-audit-chennai">statutory audit</Link> delays come from these documents not being
        prepared in advance, not from complex accounting.
      </p>

      <p>
        Every company registered under the Companies Act, 2013 needs an annual audit by a chartered accountant
        appointed under Section 139, whatever its size. This checklist sets out what the auditor works through and,
        just as usefully, why, so you can see which gaps will turn into queries.
      </p>

      <h2>Which core financial records will the auditor ask for first?</h2>
      <ul>
        <li>Trial balance and general ledger for the full financial year</li>
        <li>Bank statements for all accounts, reconciled against the books as on 31 March</li>
        <li>Fixed asset register with additions, disposals and depreciation schedules</li>
        <li>Inventory records, physical count sheets and the valuation basis, if applicable</li>
        <li>Debtors and creditors ageing schedules, with balance confirmations where available</li>
        <li>Previous year&apos;s audited financial statements and audit report</li>
      </ul>
      <p>
        For a practical list of what to put in the folder before the auditor arrives, see our{" "}
        <Link href="/blog/documents-checklist-before-auditor-visit">documents checklist before the auditor&apos;s visit</Link>.
      </p>

      <h2>Which statutory and compliance documents are checked?</h2>
      <ul>
        <li>GST returns filed during the year, reconciled against the books (see our <Link href="/gst-return-filing-chennai">GST return filing service</Link> if these are behind)</li>
        <li>TDS returns, challans and a reconciliation with Form 26AS</li>
        <li>PF, ESI and Professional Tax challans</li>
        <li>Board meeting and general meeting minutes, and resolutions passed during the year</li>
        <li>Statutory registers: members, directors and key managerial personnel, and charges</li>
        <li>MCA filings made during the year, including event-based forms</li>
      </ul>

      <h2>What transaction-level evidence do auditors verify?</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>What auditors verify</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Related party transactions</td>
            <td>Board or shareholder approval under Section 188 where required, proper disclosure and pricing support</td>
          </tr>
          <tr>
            <td>Large or unusual transactions</td>
            <td>Supporting invoices, contracts and board approval where required</td>
          </tr>
          <tr>
            <td>Loans and advances</td>
            <td>Terms, interest treatment and compliance with Sections 185 and 186</td>
          </tr>
          <tr>
            <td>Statutory dues</td>
            <td>Proof of timely payment of PF, ESI, GST, TDS and Professional Tax</td>
          </tr>
          <tr>
            <td>Dues to micro and small suppliers</td>
            <td>Amounts outstanding to suppliers registered under the MSMED Act, which must be disclosed</td>
          </tr>
          <tr>
            <td>Events after the year end</td>
            <td>Significant events between 31 March and the audit report date that affect the accounts</td>
          </tr>
        </tbody>
      </table>

      <h2>What does the auditor have to report on beyond the accounts?</h2>
      <p>
        The audit report under Section 143 is more than an opinion on the numbers. Depending on the company, the
        auditor may also have to report on:
      </p>
      <ul>
        <li>
          <strong>CARO 2020.</strong> The Companies (Auditor&apos;s Report) Order covers matters such as fixed asset
          records, inventory verification, loans given, statutory dues and fraud. It does not apply to one person
          companies, small companies, Section 8 companies and some smaller private companies.
        </li>
        <li>
          <strong>Internal financial controls.</strong> The auditor reports on the adequacy of controls over financial
          reporting, though private companies below the turnover and borrowing limits notified by the MCA are
          exempt from this part.
        </li>
        <li>
          <strong>Audit trail.</strong> Since 1 April 2023, companies must use accounting software that records an
          edit log of every change, and the auditor states whether it was maintained throughout the year.
        </li>
      </ul>
      <p>
        These requirements come from the Companies Act and rules on the{" "}
        <a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer">Ministry of Corporate Affairs website</a>,
        and the auditor applies the Standards on Auditing issued by the{" "}
        <a href="https://www.icai.org/" target="_blank" rel="noopener noreferrer">Institute of Chartered Accountants of India</a>.
      </p>

      <h2>What is the statutory audit timeline for a company?</h2>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>When</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First auditor appointed by the board</td>
            <td>Within 30 days of incorporation</td>
          </tr>
          <tr>
            <td>Financial year closes</td>
            <td>31 March</td>
          </tr>
          <tr>
            <td>Board approves the audited financial statements</td>
            <td>Before notice of the AGM is sent</td>
          </tr>
          <tr>
            <td>Annual general meeting</td>
            <td>Within six months of the year end, so by 30 September for most companies</td>
          </tr>
          <tr>
            <td>Form AOC-4 (financial statements)</td>
            <td>Within 30 days of the AGM</td>
          </tr>
          <tr>
            <td>Form MGT-7 or MGT-7A (annual return)</td>
            <td>Within 60 days of the AGM</td>
          </tr>
        </tbody>
      </table>
      <p>
        If this is your company&apos;s first year, our guide to{" "}
        <Link href="/blog/first-auditor-appointment-adt-1">appointing the first auditor and Form ADT-1</Link> covers
        the start of this cycle, and our note on{" "}
        <Link href="/blog/aoc-4-mgt-7-late-fee">AOC-4 and MGT-7 late fees</Link> covers the end of it.
      </p>

      <h2>What happens if the auditor finds a problem?</h2>
      <p>
        Most issues are settled during the audit itself. The auditor raises a query, management provides an
        explanation or corrects an entry, and the item is closed. Where something cannot be resolved, such as missing
        evidence for a large balance or a statutory due that remains unpaid, it may be reported in the CARO annexure or
        lead to a qualified opinion. Matters that do not affect the opinion but need attention, like weak controls over
        cash or slow reconciliations, are usually shared in a separate letter to management. A qualification stays on
        the public record with the AOC-4 filing, so it is worth fixing the underlying gap well before the year end.
      </p>

      <h2>Why does preparation speed things up so much?</h2>
      <p>
        An auditor who has to chase missing bank statements or reconstruct a fixed asset register cannot move to
        substantive testing until that groundwork is done. Companies that keep organised records throughout the year,
        not just at year-end, usually finish their audits much faster and with far fewer queries than companies that
        do not.
      </p>

      <h2>Which year-round habits pay off at audit time?</h2>
      <ol>
        <li>Reconcile bank accounts monthly, not annually.</li>
        <li>Update the fixed asset register at the time of each purchase or disposal, not retrospectively.</li>
        <li>File board minutes and resolutions as they happen, and sign them promptly.</li>
        <li>Keep GST and TDS reconciliations current each quarter rather than at year-end.</li>
        <li>Record related party transactions in a running list, with the approval for each.</li>
        <li>Keep the audit trail feature of your accounting software switched on all year.</li>
      </ol>

      <p>
        Our <Link href="/audit-and-assurance">Audit &amp; Assurance service</Link> includes a pre-audit readiness
        review, so gaps in this checklist surface before fieldwork begins rather than during it. To talk through your
        company&apos;s position, book a free 15-minute consultation with C S Rushil &amp; Co. in Anna Nagar.
      </p>
    </>
  );
}
