import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "tds-return-filing-deadlines",
  title: "TDS Return Filing Deadlines for FY 2026-27: 24Q, 26Q, 27Q",
  description:
    "Quarterly TDS return due dates for FY 2026-27, the Section 234E late fee and Section 271H penalty, and a practical checklist for filing each quarter on time.",
  date: "2026-09-19",
  updated: "2026-11-14",
  excerpt:
    "Every quarterly TDS deadline for FY 2026-27, plus the penalty math for missing one. Bookmark this one.",
  faqs: [
    {
      question: "What are the TDS return due dates for FY 2026-27?",
      answer:
        "Quarterly TDS statements are due by 31 July for April to June, 31 October for July to September, 31 January for October to December, and 31 May for January to March. For tax year 2026-27 these dates apply to Forms 138, 140 and 144, which replace Forms 24Q, 26Q and 27Q under the Income-tax Act, 2025.",
    },
    {
      question: "What is the penalty for late TDS return filing?",
      answer:
        "A late fee of ₹200 per day applies until the statement is filed, capped at the TDS deductible, under Section 234E of the 1961 Act (Section 427 of the 2025 Act). Under the 1961 Act, Section 271H also allows a penalty of ₹10,000 to ₹1,00,000, avoided if tax, fee and interest are paid and the statement filed within one month.",
    },
    {
      question: "Is there a penalty for late TDS deposit as well as late return filing?",
      answer:
        "Yes, these are separate defaults. Interest runs at 1% a month from the date tax was deductible to the date it was deducted, and 1.5% a month from deduction to payment, under Section 201(1A) of the 1961 Act, which is Section 398 of the 2025 Act. This is in addition to any late fee on the statement.",
    },
    {
      question: "Have Forms 24Q, 26Q and 27Q been replaced?",
      answer:
        "Yes, from tax year 2026-27. Form 138 replaces 24Q for salary, Form 140 replaces 26Q for other payments to residents, and Form 144 replaces 27Q for payments to non-residents. The fourth-quarter statement for FY 2025-26, due 31 May 2026, and any corrections for earlier years still use the old forms.",
    },
    {
      question: "Do I need to file a TDS return if I deducted no tax in a quarter?",
      answer:
        "A nil statement is generally not required. If you hold a TAN but made no deductions in a quarter, you can file a declaration for non-filing of the statement on the TRACES portal, so the system does not treat the quarter as a default. Requirements can differ for some deductor categories, so check current guidance.",
    },
  ],
  summary:
    "TDS statements for FY 2026-27 are due quarterly by 31 July, 31 October, 31 January and 31 May, now in Forms 138, 140 and 144 instead of 24Q, 26Q and 27Q. Late filing brings a ₹200 daily fee capped at the TDS amount, and late deposit attracts monthly interest. Reconcile challans and verify PANs before filing.",
};

export default function Body() {
  return (
    <>
      <p>
        <Link href="/tds-return-filing-chennai">TDS return</Link> deadlines for FY 2026-27 are 31 July, 31 October, 31 January and
        31 May, one for each quarter. They apply whatever the size of your business, and from tax year 2026-27 the
        statements are filed in Forms 138, 140 and 144, which replace Forms 24Q, 26Q and 27Q under the Income-tax Act, 2025.
      </p>

      <h2>What are the quarterly due dates for FY 2026-27?</h2>
      <table>
        <thead>
          <tr>
            <th>Quarter</th>
            <th>Period covered</th>
            <th>Statement due date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td>April to June 2026</td>
            <td>31 July 2026</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td>July to September 2026</td>
            <td>31 October 2026</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td>October to December 2026</td>
            <td>31 January 2027</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td>January to March 2027</td>
            <td>31 May 2027</td>
          </tr>
        </tbody>
      </table>
      <p>
        These are the statutory due dates as generally applicable (see the{" "}
        <a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/tds-compliance" target="_blank" rel="noopener noreferrer">income tax portal&apos;s TDS compliance help</a>). Always
        confirm against current CBDT notifications for the year, since due dates are occasionally extended. The
        next deadline as of November 2026 is 31 January 2027, for the October to December quarter.
      </p>

      <h2>Which forms replace 24Q, 26Q and 27Q?</h2>
      <table>
        <thead>
          <tr>
            <th>Payments covered</th>
            <th>FY 2025-26 and earlier</th>
            <th>Tax year 2026-27 onwards</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salary</td>
            <td>Form 24Q</td>
            <td>Form 138</td>
          </tr>
          <tr>
            <td>Other payments to residents, such as rent, fees and contracts</td>
            <td>Form 26Q</td>
            <td>Form 140</td>
          </tr>
          <tr>
            <td>Payments to non-residents, including NRIs</td>
            <td>Form 27Q</td>
            <td>Form 144</td>
          </tr>
        </tbody>
      </table>
      <p>
        The new forms follow the Income-tax Rules, 2026, and section codes follow the 2025 Act, so a payment made on or after
        1 April 2026 must be reported against the new section, not the old one. The fourth-quarter statement for FY 2025-26,
        due 31 May 2026, and corrections for earlier years still use the old forms. Our{" "}
        <Link href="/blog/income-tax-act-2025-section-mapping">table of old and new section numbers</Link> covers the rest of the TDS provisions.
      </p>

      <h2>Who has to file quarterly TDS statements?</h2>
      <p>
        Every deductor with a TAN who deducted tax in the quarter: companies, LLPs and firms, employers paying salary above
        the taxable limit, and individuals or HUFs whose accounts are audited and who make payments covered by TDS.
        Individuals who buy property from a resident, or pay rent above ₹50,000 a month without being under audit, do not
        file quarterly statements for those payments. They use a one-off challan-cum-statement instead: Form 26QB (filed with PAN, no TAN needed) for a
        property purchase up to FY 2025-26, and Form 141 from tax year 2026-27.
      </p>

      <h2>How do you correct a statement already filed?</h2>
      <p>
        Errors such as a wrong PAN, an unmatched challan or a short deduction are fixed by filing a correction statement for
        that quarter, based on the consolidated file downloaded from TRACES. Correct defaults soon after processing, because
        deductees cannot claim credit for tax that does not appear against their PAN.
      </p>

      <h2>When is TDS itself deposited?</h2>
      <p>
        The quarterly statement reports tax that should already have been paid. Tax deducted in a month is deposited by the
        7th of the following month, and tax deducted in March by 30 April. Some one-off deductions follow their own rhythm:
        rent paid by an individual tenant, for instance, is paid with a challan-cum-statement within 30 days from the end of
        the month of deduction, as our guide to{" "}
        <Link href="/blog/tds-on-rent">TDS on rent</Link> explains.
      </p>

      <h2>What does it actually cost to miss a deadline?</h2>
      <ul>
        <li>
          <strong>Late filing fee (Section 234E of the 1961 Act, Section 427 of the 2025 Act):</strong> ₹200 per day of
          delay until the statement is filed, capped at the total TDS for that statement. This adds up fast on a large
          deduction.
        </li>
        <li>
          <strong>Penalty (Section 271H of the 1961 Act):</strong> ₹10,000 to ₹1,00,000, at the
          Assessing Officer&apos;s discretion, for incorrect information or for
          statements filed late. Since 1 April 2025, the penalty is avoided only if
          the TDS, late fee and interest are paid and the statement is filed within
          one month of the due date (earlier, one year). For tax year 2026-27, check the corresponding provision of the 2025 Act.
        </li>
        <li>
          <strong>Interest (Section 201(1A) of the 1961 Act, Section 398 of the 2025 Act):</strong> 1% a month from the date
          tax was deductible to the date it was deducted, and 1.5% a month from the date of deduction to the date of
          payment. Interest is charged separately from the late fee.
        </li>
      </ul>
      <p>
        For example, a statement filed 40 days late attracts a fee of ₹8,000, unless the TDS in that statement is less, in which
        case the fee is capped at the TDS amount. The fee must be paid before the statement is accepted, so it cannot be
        deferred.
      </p>

      <h2>What is a practical filing checklist each quarter?</h2>
      <ol>
        <li>Reconcile TDS deducted against the challans paid, using the right form for the year (Forms 24Q, 26Q and 27Q up to FY 2025-26; Forms 138, 140 and 144 from tax year 2026-27).</li>
        <li>Verify PAN details of all deductees. Mismatched PANs are the most common cause of defaults and correction statements.</li>
        <li>Check that each payment from 1 April 2026 is coded to the Section 393 table item, not the old section.</li>
        <li>File through the income tax portal before the due date, not on it, to leave a buffer for portal issues.</li>
        <li>Download the TDS certificates from TRACES and issue them to deductees within the prescribed window, with salary certificates usually flowing from your <Link href="/payroll-services-chennai">payroll process</Link>.</li>
        <li>Check TRACES after processing for short payment, short deduction or late fee defaults, and correct them early.</li>
      </ol>

      <h2>What if you hold a TAN but deducted nothing?</h2>
      <p>
        A nil statement is generally not required. You can instead file a declaration for non-filing of the statement on the
        TRACES portal for that quarter, so that the quarter is not shown as a default against your TAN.
      </p>

      <p>
        If your business handles TDS deductions across multiple vendor and
        employee categories, a structured quarterly calendar avoids the
        compounding cost of repeated late fees. Our{" "}
        <Link href="/direct-tax">Direct Tax service</Link> includes TDS compliance
        management as part of ongoing engagements. To check where your TDS stands before the 31 January deadline, book a free
        15-minute consultation through our <Link href="/contact">contact page</Link>.
      </p>
    </>
  );
}
