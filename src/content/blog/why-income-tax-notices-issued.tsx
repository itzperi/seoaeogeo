import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "why-income-tax-notices-issued",
  title: "Why Income Tax Notices Get Issued: The Actual Triggers",
  description:
    "An income tax notice usually means one specific, fixable data mismatch, not that you're in trouble. Here are the actual triggers behind most notices.",
  date: "2026-09-26",
  updated: "2026-11-14",
  excerpt:
    "An income tax notice usually means one specific, fixable data mismatch, not that you're in trouble. Here are the actual triggers.",
  summary:
    "Most income tax notices come from automated data matching, not a manual finding of wrongdoing. The usual trigger is income in your return not matching Form 26AS or the Annual Information Statement. Others are defective returns, high-value transactions without matching income, non-filing despite reported transactions and, less often, scrutiny selection under Section 143(2), now Section 270(8).",
  faqs: [
    {
      question: "Why do I get an income tax notice?",
      answer:
        "In practice, the large majority of notices are triggered by an automated system flagging a specific, identifiable mismatch, not a manual decision that you have done something wrong. The most common causes are income not matching Form 26AS or AIS, high-value transactions not matching your income profile, and non-filing despite reportable transactions.",
    },
    {
      question: "What is the most common reason for an income tax notice?",
      answer:
        "By far the most common trigger is reported income not matching Form 26AS or AIS. Your employer, bank or mutual fund house reports your income and TDS to the department, and the system cross-checks it against your return. A forgotten interest credit or an unreported capital gain shows up as a mismatch.",
    },
    {
      question: "Can I get a notice for not filing a return?",
      answer:
        "Yes. If TDS was deducted on your income, or you had transactions that appear in the department's data, but no return was filed at all, that gap itself is a common trigger. The system flags the absence of a filing as readily as it flags an inconsistency within one.",
    },
    {
      question: "Is random scrutiny a common cause of notices?",
      answer:
        "No. A small share of returns is selected for detailed scrutiny on risk parameters, through a notice under Section 143(2) of the 1961 Act for FY 2025-26 and earlier, or Section 270(8) of the Income-tax Act, 2025 from tax year 2026-27. It exists, but it is far less common than mismatch-driven notices.",
    },
    {
      question: "Which Act applies to an income tax notice I receive in 2026?",
      answer:
        "It depends on the year the notice is about, not the date it is issued. Notices for FY 2025-26 and earlier years continue under the Income-tax Act, 1961, even when issued after 1 April 2026. Notices for tax year 2026-27 onwards are issued under the Income-tax Act, 2025, with new section numbers.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Most income tax notices are triggered by automated data matching, not a manual decision that you have done something wrong. The usual cause is income in your return not matching Form 26AS or the Annual Information Statement. Others are defective returns, large transactions without matching income, non-filing and, less often, scrutiny selection.
      </p>

      <div className="mx-auto max-w-xs">
        <div className="aspect-[9/16] overflow-hidden rounded-cards border border-ash">
          <iframe
            src="https://www.instagram.com/reel/DW_lo3Kk_hd/embed"
            className="h-full w-full border-0"
            title="Do you know why income tax notices are commonly issued?"
          />
        </div>
      </div>

      <h2>Which Act&apos;s section numbers apply to your notice?</h2>

      <p>
        The Income-tax Act, 2025 replaced the Income-tax Act, 1961 from 1 April 2026 and renumbered most sections. Which numbers apply depends on the year the notice concerns, not the date it is issued:
      </p>

      <ul>
        <li><strong>FY 2025-26 (AY 2026-27) and earlier years:</strong> the 1961 Act applies, even to a notice issued after 1 April 2026.</li>
        <li><strong>Tax year 2026-27 (1 April 2026 to 31 March 2027) onwards:</strong> the 2025 Act applies.</li>
      </ul>

      <table>
        <thead>
          <tr>
            <th>Notice or step</th>
            <th>Income-tax Act, 1961</th>
            <th>Income-tax Act, 2025</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Scrutiny notice</td>
            <td>Section 143(2)</td>
            <td>Section 270(8)</td>
          </tr>
          <tr>
            <td>Reassessment show-cause notice</td>
            <td>Section 148A</td>
            <td>Section 281</td>
          </tr>
          <tr>
            <td>Penalty for under-reporting and misreporting</td>
            <td>Section 270A</td>
            <td>Section 439</td>
          </tr>
          <tr>
            <td>Interest for late return and advance tax shortfalls</td>
            <td>Sections 234A to 234C</td>
            <td>Sections 423 to 425</td>
          </tr>
          <tr>
            <td>Stay of demand</td>
            <td>Section 220(6)</td>
            <td>Section 411(12)</td>
          </tr>
          <tr>
            <td>First appeal to the Commissioner (Appeals)</td>
            <td>Section 249(2), Form 35</td>
            <td>Section 358(3), Form 99</td>
          </tr>
        </tbody>
      </table>

      <p>
        Other notices, such as a defective return notice under Section 139(9) or a processing intimation under Section 143(1), are also renumbered in the 2025 Act. For an earlier year, the 1961 number printed on the notice is the one that governs it. Our{" "}
        <Link href="/blog/income-tax-act-2025-section-mapping">table of old and new section numbers</Link> covers more provisions.
      </p>

      <h2>Does the income in your return match Form 26AS and AIS?</h2>

      <p>
        This is the most common trigger by far. Your employer, bank, mutual fund house and other reporting entities send your income and TDS details to the department. Form 26AS shows tax deducted and collected at source, and the Annual Information Statement (AIS) adds interest, dividends, securities transactions and other reported items. The system cross-checks both against your return (the portal&apos;s <a href="https://www.incometax.gov.in/iec/foportal/help/e-filing-manage-tax-credit-mismatch-faq" target="_blank" rel="noopener noreferrer">tax credit mismatch FAQs</a> explain how these differences surface).
      </p>

      <p>
        A forgotten savings interest credit, a fixed deposit in a spouse&apos;s name reported against your PAN, or an unreported capital gain shows up as a mismatch. The result is usually an intimation after processing under Section 143(1) proposing an adjustment, with a window to agree or disagree online. Respond within the time stated, usually 30 days, because an unanswered proposal is simply carried into the processed return. If an AIS entry is wrong, you can submit feedback on it in the AIS itself, which is worth doing before you file.
      </p>

      <h2>What is a defective return notice?</h2>

      <p>
        A notice under Section 139(9) of the 1961 Act says the return is defective and must be corrected, usually within 15 days. Common reasons include using the wrong ITR form, tax shown as payable but not paid, missing schedules, or business receipts above the tax audit limit without an audit report. If the defect is not cured in time, the return can be treated as invalid, as if it had never been filed.
      </p>

      <h2>Why do high-value transactions lead to notices?</h2>

      <p>
        Banks, registrars, mutual funds and card issuers report specified high-value transactions to the department through Statements of Financial Transactions. Examples include cash deposits of ₹10 lakh or more in a year in savings accounts and large property purchases. If these do not align with your declared income, the department may ask you to explain the source, sometimes through the compliance portal before any formal notice. This is the data-matching system working as designed, not targeted scrutiny. Our post on the{" "}
        <Link href="/blog/safe-cash-deposit-limit">cash deposit reporting limits</Link> explains the cash thresholds in detail.
      </p>

      <h2>Can you get a notice for not filing a return at all?</h2>

      <p>
        Yes. If TDS was deducted on your income, or you had transactions that appear in the department&apos;s data, but no <Link href="/income-tax-return-filing-chennai">income tax return</Link> was filed, that gap itself is a common trigger. The system flags the absence of a filing as readily as it flags an inconsistency within one. Where income has escaped assessment, the department can also begin reassessment, which starts with a show-cause notice under Section 148A (Section 281 under the 2025 Act).
      </p>

      <h2>How common is scrutiny selection?</h2>

      <p>
        A small share of returns is selected for detailed scrutiny on risk parameters, through a notice under Section 143(2), or Section 270(8) for tax year 2026-27 onwards. It exists, but it is a much smaller share of actual notices than the mismatch-driven ones above, despite being the version people worry about most. A scrutiny assessment that ends in additions can be challenged in appeal, which our{" "}
        <Link href="/income-tax-assessment-appeals-chennai">assessment and appeals</Link> page explains.
      </p>

      <h2>What should you do first when a notice arrives?</h2>

      <ol>
        <li>Confirm it is genuine. Log in to the <a href="https://www.incometax.gov.in/" target="_blank" rel="noopener noreferrer">income tax e-filing portal</a> and check that it appears under pending actions, or use the portal&apos;s service to authenticate a notice by its document identification number.</li>
        <li>Note the year, the section and the reply date. The section tells you which trigger applies and which Act governs it.</li>
        <li>Download Form 26AS, AIS and your filed return for that year and compare them line by line.</li>
        <li>Gather documents for each difference: bank statements, Form 16 or 16A, contract notes, sale deeds.</li>
        <li>Respond online through e-Proceedings before the due date, or request more time if you genuinely need it.</li>
      </ol>

      <p>
        If you have received a notice and are not sure which of these it actually is, C S Rushil &amp; Co. can identify the real trigger and draft the correct <Link href="/income-tax-notice-reply-chennai">income tax notice reply</Link>. Book a free 15-minute consultation through our <Link href="/contact">contact page</Link>.
      </p>
    </>
  );
}
