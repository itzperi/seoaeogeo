import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

// Facts here must match /transfer-pricing-audit (ACT_MAPPING, DUE_DATES,
// PENALTIES). The CBDT's 21-day extension for AY 2026-27 moved the tax audit
// report to 21 October 2026 and non-TP audit returns to 21 November 2026;
// it did not extend Form 3CEB (31 October 2026) or TP-case returns
// (30 November 2026). Re-check the official notification before each season.
export const meta: BlogPostMeta = {
  slug: "form-3ceb-due-date-applicability",
  title: "Form 3CEB Due Date 2026, Applicability and Form 48",
  description:
    "Form 3CEB for FY 2025-26 was due 31 October 2026. Who must file, the ₹20 crore domestic rule, the late-filing penalty, and Form 48 from tax year 2026-27.",
  date: "2026-09-25",
  updated: "2026-11-13",
  excerpt:
    "Form 3CEB for FY 2025-26 was due on 31 October 2026. Who must file it, what happens if it is late, and how Form 48 replaces it from tax year 2026-27.",
  summary:
    "Form 3CEB is the transfer pricing report a Chartered Accountant certifies under Section 92E. For FY 2025-26 (AY 2026-27) it was due on 31 October 2026, a month before the 30 November return date, and was not extended. Any international transaction with an associated enterprise needs it, whatever the value. From tax year 2026-27, Form 48 replaces it.",
  faqs: [
    {
      question: "What is the due date for Form 3CEB for AY 2026-27?",
      answer:
        "31 October 2026 for FY 2025-26 (AY 2026-27): one month before the 30 November 2026 return due date that applies to transfer pricing cases. The CBDT's 21-day extension in September 2026 covered tax audit reports and non-transfer-pricing returns; it did not move Form 3CEB.",
    },
    {
      question: "Who needs to file Form 3CEB?",
      answer:
        "Any taxpayer with an international transaction with an associated enterprise, such as a foreign parent, subsidiary or group company, regardless of value. Specified domestic transactions between related Indian entities need it only if their aggregate exceeds ₹20 crore in the year. Indian subsidiaries of US, UK, UAE, Singapore and Canadian groups are the most common filers.",
    },
    {
      question: "What replaces Form 3CEB under the Income-tax Act, 2025?",
      answer:
        "Form 48, under Section 172 of the Income-tax Act, 2025 and Rule 85 of the Income-tax Rules, 2026. It applies from tax year 2026-27 (April 2026 to March 2027), with the report due by 31 October 2027. FY 2025-26 still uses Form 3CEB under the 1961 Act.",
    },
    {
      question: "What happens if Form 3CEB is filed late or not at all?",
      answer:
        "For FY 2025-26 and earlier, Section 271BA allows a penalty of ₹1,00,000 for failing to furnish the report, unless there was reasonable cause. Under the 2025 Act a fee of ₹50,000 applies for a delay of up to a month and ₹1,00,000 after that. File as soon as possible; the return cannot be completed correctly without it.",
    },
    {
      question: "Does a new Indian subsidiary need Form 3CEB in its first year?",
      answer:
        "Yes, if it had any international transaction with its foreign parent or group in that year, such as service fees, cost recharges, loans, software licences or reimbursements. There is no minimum value. Detailed documentation applies once international transactions exceed ₹1 crore.",
    },
    {
      question: "Who signs Form 3CEB and how is it filed?",
      answer:
        "A Chartered Accountant in practice. The company assigns the CA on the income tax e-filing portal, the CA uploads and signs the report, and the company accepts it from its own login. Only then can the return be filed.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <h2>What are the Form 3CEB due dates for 2026 and 2027?</h2>
      <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Report</th>
              <th>Report due</th>
              <th>Return due (transfer pricing cases)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>FY 2025-26 (AY 2026-27)</td>
              <td>Form 3CEB, Section 92E, Rule 10E (1961 Act)</td>
              <td>31 October 2026 (not extended)</td>
              <td>30 November 2026</td>
            </tr>
            <tr>
              <td>Tax year 2026-27 (April 2026 to March 2027)</td>
              <td>Form 48, Section 172, Rule 85 (2025 Act)</td>
              <td>31 October 2027</td>
              <td>30 November 2027</td>
            </tr>
          </tbody>
      </table>
      <p>
        The rule behind both dates is the same: the accountant&apos;s report is due one month before the return due
        date. In September 2026 the CBDT gave a 21-day extension for AY 2026-27, moving tax audit reports to 21 October
        and returns of audited taxpayers without transfer pricing to 21 November 2026. Form 3CEB and returns of
        transfer pricing cases were not part of it.
      </p>

      <h2>Who needs to file Form 3CEB?</h2>
      <p>
        Two kinds of transaction trigger the report. The first is any <strong>international transaction with an
        associated enterprise</strong>: a foreign parent, subsidiary or fellow group company. There is no minimum
        value. A single service invoice to the parent, a cost recharge, an intercompany loan or a software licence fee
        is enough. The second is a <strong>specified domestic transaction</strong> between related Indian entities, such
        as a unit claiming a profit-linked deduction, but only when the aggregate for the year exceeds ₹20 crore.
      </p>
      <p>
        In practice most filers are Indian subsidiaries and global capability centres of foreign groups. Typical
        cases we see:
      </p>
      <ul>
        <li>An Indian software or engineering subsidiary billing its <Link href="/india-subsidiary-for-us-companies">US parent</Link> on a cost-plus basis.</li>
        <li>A back-office or support subsidiary of a <Link href="/india-subsidiary-for-uk-companies">UK company</Link> paying for group IT and HR services.</li>
        <li>An Indian trading arm of a <Link href="/india-subsidiary-for-uae-companies">UAE group</Link> buying goods from its parent or a free-zone affiliate.</li>
        <li>A regional hub in <Link href="/india-subsidiary-for-singapore-companies">Singapore</Link> lending to, or licensing software to, its Indian subsidiary.</li>
        <li>A Canadian or other foreign group recharging the salaries of seconded staff or ESOP costs to India.</li>
      </ul>

      <h2>What counts as an associated enterprise?</h2>
      <p>
        The definition is statutory (Section 92A of the 1961 Act; Section 162 of the 2025 Act), not a general sense of
        a related company. It covers a parent and subsidiary, entities under common control, a holding of 26% or more of
        the voting power in the other entity, and other listed forms of management or capital control. A shared director
        or a long-standing vendor does not qualify on that basis alone. Check each relationship against the section
        rather than the group chart.
      </p>

      <h2>What changes with Form 48 under the Income-tax Act, 2025?</h2>
      <p>
        From tax year 2026-27 the accountant&apos;s report moves to Form 48 under Section 172 of the Income-tax Act,
        2025 and Rule 85 of the Income-tax Rules, 2026. The deadline logic stays the same, but the form reports
        transactions in a more structured, transaction-wise format. Documentation rules move from Rule 10D to Rule 84,
        and the master file from Form 3CEAA to Form 56. The Income Tax Department has published{" "}
        <a href="https://www.incometaxindia.gov.in/documents/d/guest/form-48-faqs" target="_blank" rel="noopener noreferrer">FAQs on Form 48</a>.
        Our <Link href="/transfer-pricing-audit">transfer pricing page</Link> has the full section-by-section mapping.
      </p>

      <h2>What happens if Form 3CEB was not filed by 31 October 2026?</h2>
      <p>
        File it now. For FY 2025-26 and earlier, Section 271BA allows a penalty of ₹1,00,000 for failing to furnish the
        report, which can be avoided where there was reasonable cause. A late report is still far better than none: the
        bigger risks are a transfer pricing adjustment at assessment and penalties of 2% of the transaction value for
        unreported transactions or missing documentation. From tax year 2026-27 a fixed fee applies instead: ₹50,000
        for a delay of up to one month and ₹1,00,000 after that.
      </p>

      <h2>How is Form 3CEB filed?</h2>
      <ol>
        <li>The company lists every transaction with each associated enterprise for the year, from the audited books.</li>
        <li>The pricing method (CUP, RPM, CPM, TNMM, profit split or other) is chosen and documented for each type.</li>
        <li>The company assigns its Chartered Accountant to Form 3CEB on the income tax e-filing portal.</li>
        <li>The CA prepares, signs and uploads the report with a digital signature.</li>
        <li>The company accepts the report from its own login; the return can then be filed by 30 November.</li>
      </ol>

      <h2>What should you check before filing?</h2>
      <ul>
        <li>Every transaction with a foreign parent, subsidiary or group company, with values matching the audited accounts.</li>
        <li>Each relationship tested against the statutory definition of associated enterprise.</li>
        <li>Domestic related-party transactions totalled against the ₹20 crore limit.</li>
        <li>Intercompany agreements and invoices that support the price charged.</li>
        <li>Documentation kept once international transactions exceed ₹1 crore (Rule 10D; Rule 84 from tax year 2026-27).</li>
        <li>The report reconciled with the tax audit report and the return.</li>
      </ul>
      <p>
        Foreign-owned companies can map every first-year deadline, including transfer pricing, with our free{" "}
        <Link href="/tools/foreign-subsidiary-compliance-calendar">India subsidiary compliance calendar</Link>. C S Rushil
        &amp; Co. certifies Form 3CEB and Form 48 and prepares transfer pricing documentation for Indian subsidiaries of
        foreign groups, from Anna Nagar, Chennai, and online. See our{" "}
        <Link href="/india-subsidiary-compliance-cfo">compliance retainer for foreign-owned subsidiaries</Link>.
      </p>
    </>
  );
}
