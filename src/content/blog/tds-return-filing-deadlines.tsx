import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "tds-return-filing-deadlines",
  title: "TDS Return Filing Deadlines for FY 2026-27",
  description:
    "Quarterly TDS return due dates for FY 2026-27, the Section 234E late fee and Section 271H penalty, and a practical checklist for filing each quarter on time.",
  date: "2026-10-28",
  excerpt:
    "Every quarterly TDS deadline for FY 2026-27, plus the penalty math for missing one — bookmark this one.",
  faqs: [
    {
      question: "What is the penalty for late TDS return filing?",
      answer:
        "A late filing fee of ₹200 per day under Section 234E applies until the return is filed, capped at the TDS amount deductible. Separately, a penalty of ₹10,000 to ₹1,00,000 can be levied under Section 271H at the Assessing Officer's discretion; it is avoided only if the tax, fee and interest are paid and the return is filed within one month of the due date.",
    },
    {
      question: "Is there a penalty for late TDS deposit as well as late return filing?",
      answer:
        "Yes — these are separate defaults. Late deposit of TDS attracts interest under Section 201(1A) at 1.5% per month, in addition to any late filing fee on the quarterly return itself.",
    },
    {
      question: "Do I need to file a TDS return if I deducted no tax in a quarter?",
      answer:
        "If you have a valid TAN but deducted no tax in a quarter, you can file a declaration for non-filing on the TRACES portal rather than a nil return, though requirements can vary — check current guidance for your specific deductor category.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        <Link href="/tds-return-filing-chennai">TDS return</Link> deadlines are fixed, apply regardless of your business size,
        and carry both a per-day late fee and a separate discretionary penalty
        for non-compliance. Here is the full quarterly calendar for FY 2026-27,
        plus what the penalties actually cost.
      </p>

      <h2>Quarterly due dates</h2>
      <table>
        <thead>
          <tr>
            <th>Quarter</th>
            <th>Period covered</th>
            <th>Return due date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td>April – June</td>
            <td>31 July</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td>July – September</td>
            <td>31 October</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td>October – December</td>
            <td>31 January</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td>January – March</td>
            <td>31 May</td>
          </tr>
        </tbody>
      </table>
      <p>
        These are the statutory due dates as generally applicable (see the{" "}
        <a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/tds-compliance" target="_blank" rel="noopener noreferrer">income tax portal&apos;s TDS compliance help</a>) — always
        confirm against the current CBDT circular for the relevant assessment
        year, since due dates are occasionally extended.
      </p>

      <h2>What it actually costs to miss a deadline</h2>
      <ul>
        <li>
          <strong>Late filing fee (Section 234E):</strong> ₹200 per day of
          delay, capped at the total TDS amount for that quarter — this adds up
          fast on a large deduction.
        </li>
        <li>
          <strong>Penalty (Section 271H):</strong> ₹10,000 to ₹1,00,000, at the
          Assessing Officer&apos;s discretion, for incorrect information or for
          returns filed late. Since 1 April 2025, the penalty is avoided only if
          the TDS, late fee and interest are paid and the return is filed within
          one month of the due date (earlier, one year).
        </li>
        <li>
          <strong>Interest on late deposit (Section 201(1A)):</strong> 1.5% per
          month on the TDS amount, calculated separately from the return
          filing fee.
        </li>
      </ul>

      <h2>A practical filing checklist each quarter</h2>
      <ol>
        <li>Reconcile TDS deducted against the challan payments made (Form 26Q/24Q/27Q as applicable).</li>
        <li>Verify PAN details of all deductees — mismatched PANs are the most common cause of return rejection and correction filings.</li>
        <li>File the return through TRACES/the income tax portal before the due date, not on the due date — leave a buffer for portal issues.</li>
        <li>Issue TDS certificates (Form 16/16A) to deductees, with Form 16 usually flowing from your <Link href="/payroll-services-chennai">payroll process</Link>, within the prescribed window after filing.</li>
      </ol>

      <p>
        If your business handles TDS deductions across multiple vendor and
        employee categories, a structured quarterly calendar avoids the
        compounding cost of repeated late fees — our{" "}
        <a href="/direct-tax">Direct Tax service</a> includes TDS compliance
        management as part of ongoing engagements.
      </p>
    </>
  );
}
