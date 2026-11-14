import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "llp-annual-filing-form8-form11",
  title: "LLP Annual Filing: Form 8 and Form 11 Due Dates Explained",
  description:
    "Every LLP must file Form 11 and Form 8 each year, whatever its turnover or activity. What each form covers, the due dates and the late fee for missing them.",
  date: "2026-09-25",
  updated: "2026-11-14",
  excerpt:
    "Every LLP must file Form 11 and Form 8 annually regardless of turnover or activity. Here's exactly what each form covers and when they're due.",
  summary:
    "Every LLP must file Form 11, the annual return, and Form 8, the statement of account and solvency, each year, even with no business. For an LLP with a 31 March year end, Form 11 is due by 30 May and Form 8 by 30 October. Late fees accrue daily with no cap, but missed years can still be filed.",
  faqs: [
    {
      question: "What annual filings does an LLP have to make?",
      answer:
        "Two MCA filings are mandatory every year whether or not the LLP did any business: Form 11, the annual return under Section 35 of the LLP Act, and Form 8, the statement of account and solvency under Section 34. The LLP also files its income tax return separately. Missing either MCA form attracts a daily late fee with no cap.",
    },
    {
      question: "What is the due date for LLP Form 11 and Form 8?",
      answer:
        "Form 11 is due within 60 days of the close of the financial year, which for an LLP with a 31 March year end means 30 May. Form 8 is due within 30 days from the end of six months after the close of the financial year, which means 30 October. Both are filed on the MCA portal.",
    },
    {
      question: "Does an LLP need an audit?",
      answer:
        "Only above a threshold. An LLP must have its accounts audited if its turnover exceeds ₹40 lakh or its partners' contribution exceeds ₹25 lakh in the financial year. Below both limits, the designated partners can certify the accounts themselves. A tax audit under income tax law is a separate question that depends on its own turnover limits.",
    },
    {
      question: "What is the late fee for LLP Form 8 and Form 11?",
      answer:
        "Under the current LLP rules, a late Form 8 or Form 11 attracts an additional fee of ₹100 per day for each form, with no upper limit. An LLP that has not filed for several years can therefore build up a large liability, which is why bringing filings up to date early usually costs far less than waiting.",
    },
    {
      question: "Can an LLP file past-due Form 8 and Form 11?",
      answer:
        "Yes. A missed filing from a prior year can still be made with the accumulated additional fee, and the MCA portal accepts the forms in sequence. Getting current is usually more straightforward than founders expect once the accounts for each year are prepared. The longer the delay, the larger the fee, since it accrues daily with no maximum.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Every LLP must file two forms with the MCA each year, even if it did no business: Form 11, the annual return, by
        30 May, and Form 8, the statement of account and solvency, by 30 October, for a 31 March year end. A late filing
        attracts a fee of ₹100 per day for each form, with no upper cap.
      </p>

      <p>
        Registering an LLP feels like the finish line, but these two annual filings are where many LLPs fall behind,
        usually because the partners assume a lighter structure means lighter deadlines. This guide covers what each
        form contains, who signs it, when an audit is needed and how to catch up if a year has been missed.
      </p>

      <h2>What is Form 11, and when is it due?</h2>

      <p>
        <a href="https://www.mca.gov.in/content/mca/global/en/mca/llp-e-filling/Form-11.html" target="_blank" rel="noopener noreferrer">Form 11</a>{" "}
        is the LLP&apos;s annual return under Section 35 of the Limited Liability Partnership Act, 2008. It is filed
        within 60 days of the close of the financial year, which for most LLPs means a due date of 30 May. It records the
        partners and designated partners, their contribution, and changes during the year. Form 11 must be filed even if
        the LLP had no transactions; there is no turnover-based exemption.
      </p>

      <p>
        Form 11 is signed digitally by a designated partner. Larger LLPs, with contribution above ₹50 lakh or turnover
        above ₹5 crore, also need the annual return certified by a company secretary in practice.
      </p>

      <h2>What is Form 8, and when is it due?</h2>

      <p>
        <a href="https://www.mca.gov.in/content/mca/global/en/mca/llp-e-filling/Form-8.html" target="_blank" rel="noopener noreferrer">Form 8</a>{" "}
        is the statement of account and solvency under Section 34. It is due within 30 days from the end of six months
        after the close of the financial year, which for most LLPs means 30 October. It contains a statement of assets
        and liabilities, a statement of income and expenditure, and a solvency declaration by the designated partners
        stating whether the LLP can pay its debts as they fall due. It is signed by designated partners and certified
        by a practising professional.
      </p>

      <h2>What do you need to prepare the two forms?</h2>

      <ul>
        <li>Valid digital signature certificates for the designated partners who will sign</li>
        <li>The current list of partners, their contribution and any changes during the year, with dates</li>
        <li>Finalised accounts for the year: balance sheet figures and income and expenditure</li>
        <li>The auditor&apos;s report, if the audit thresholds were crossed</li>
        <li>Details of any charges created or satisfied and any contingent liabilities</li>
      </ul>

      <h2>When does an LLP need an audit?</h2>

      <p>
        Unlike a company, which is always audited, an LLP needs its accounts audited only if its turnover exceeds ₹40
        lakh or its partners&apos; contribution exceeds ₹25 lakh in the financial year. Below both limits, the
        designated partners can certify the accounts. Note that a tax audit under income tax law is a separate test,
        with its own turnover limits, and can apply even where the LLP rules do not require an audit.
      </p>

      <h2>What does the full LLP compliance calendar look like?</h2>

      <table>
        <thead>
          <tr>
            <th>Filing</th>
            <th>What it covers</th>
            <th>Due date (31 March year end)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Form 11</td>
            <td>Annual return: partners, contribution, changes</td>
            <td>30 May</td>
          </tr>
          <tr>
            <td>Form 8</td>
            <td>Statement of account and solvency</td>
            <td>30 October</td>
          </tr>
          <tr>
            <td>Income tax return</td>
            <td>Income and tax for the year</td>
            <td>Separate due date under income tax law, later where a tax audit applies</td>
          </tr>
          <tr>
            <td>Form 3</td>
            <td>Changes to the LLP agreement</td>
            <td>Within 30 days of the change</td>
          </tr>
          <tr>
            <td>Form 4</td>
            <td>Appointment or cessation of a partner, or change in designation</td>
            <td>Within 30 days of the change</td>
          </tr>
          <tr>
            <td>DIR-3 KYC</td>
            <td>KYC of each designated partner holding a DIN</td>
            <td>As per the MCA&apos;s current KYC cycle</td>
          </tr>
        </tbody>
      </table>

      <p>
        Designated partners hold a DIN and follow the same KYC cycle as company directors, explained in our note on{" "}
        <Link href="/blog/dir-3-kyc-due-date-late-fee">DIR-3 KYC due dates and late fees</Link>.
      </p>

      <h2>Why do LLPs treat these deadlines as less urgent than they are?</h2>

      <p>
        Because an LLP has a lighter overall compliance load than a private limited company, it is easy to assume the
        annual filings are similarly low-stakes. They are not. Late filing of Form 11 or Form 8 attracts an additional
        fee of ₹100 per day for each form, with no maximum. An LLP that has been dormant for a couple of years without
        filing can build up a fee far larger than the work of filing on time would have involved. If you are still
        choosing a structure, our comparison of{" "}
        <Link href="/blog/private-limited-vs-llp-chennai-startups">private limited company and LLP for Chennai startups</Link>{" "}
        sets out the compliance load of each.
      </p>

      <h2>What is a simple annual rhythm for an LLP?</h2>

      <ol>
        <li>Close the books on 31 March and reconcile bank accounts and GST.</li>
        <li>Prepare the partner and contribution details and file Form 11 by 30 May.</li>
        <li>Finalise the accounts and, if the thresholds are crossed, complete the audit.</li>
        <li>File the income tax return by its due date.</li>
        <li>Prepare the statement of account and solvency and file Form 8 by 30 October.</li>
        <li>Check whether turnover or contribution now crosses the audit thresholds for the next year.</li>
      </ol>

      <h2>How does an LLP catch up on missed years?</h2>

      <p>
        A missed filing is recoverable. The accounts for each pending year are prepared, the forms are filed in order
        with the accumulated additional fee, and the LLP is current again. Getting current is usually more
        straightforward than partners expect once someone starts the process. If the LLP has stopped operating and
        will not restart, closing it through the MCA&apos;s strike-off process may be the better route, but pending
        filings generally have to be dealt with first.
      </p>

      <p>
        C S Rushil &amp; Co. handles <Link href="/llp-registration-chennai">LLP registration in Chennai</Link> and the
        ongoing Form 8 and Form 11 calendar as part of our <Link href="/roc-compliances">ROC compliance</Link> work for
        LLPs across Chennai from our Anna Nagar office. Book a free 15-minute consultation.
      </p>
    </>
  );
}
