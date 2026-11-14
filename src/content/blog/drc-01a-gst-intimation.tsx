import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

// Sources: CGST Rules rule 142(1A), (2), (2A), (2B) as on CBIC tax information
// portal: (1A) inserted by Notfn 49/2019-CT (9 Oct 2019), "shall" -> "may" by
// Notfn 79/2020-CT (15 Oct 2020); Part C and DRC-03A by Notfn 12/2024-CT
// (10 Jul 2024); s.74A references by Notfn 20/2024-CT (w.e.f. 1 Nov 2024).
// Payment effects: ss. 73(5), 74(5), 74A(8)(i) (no penalty), 74A(9)(i) (15%),
// 74A(10) (shortfall -> notice). Keep consistent with /blog/section-74a-gst-notice.
export const meta: BlogPostMeta = {
  slug: "drc-01a-gst-intimation",
  title: "DRC-01A GST Intimation 2026: What It Means, How to Reply",
  description:
    "DRC-01A is the GST officer's intimation before a show cause notice under Rule 142(1A). Whether it is mandatory, Part A and Part B, paying vs contesting.",
  date: "2026-11-13",
  excerpt:
    "A DRC-01A is not yet a show cause notice, but it usually comes just before one. Here is what Part A tells you, how to answer in Part B, and when paying through DRC-03 makes sense.",
  summary:
    "Form DRC-01A is an intimation under Rule 142(1A) of the CGST Rules, in which a GST officer communicates the tax, interest and penalty ascertained before issuing a show cause notice. Since October 2020 it is optional for the officer. The taxpayer can pay through DRC-03, or reply in Part B with submissions or a part payment.",
  faqs: [
    {
      question: "Is DRC-01A mandatory before a GST show cause notice?",
      answer:
        "Not under the current rule. Rule 142(1A) originally said the proper officer shall issue the intimation, but Notification 79/2020-Central Tax changed it to may from 15 October 2020. An officer can therefore issue a show cause notice in DRC-01 without a prior DRC-01A, for notices under Sections 73, 74 or 74A.",
    },
    {
      question: "How do I reply to a DRC-01A intimation?",
      answer:
        "Reply on the GST portal in Part B of DRC-01A, by the date given in Part A. You can record a full payment made through DRC-03, a part payment with submissions against the balance, or submissions alone disputing the amount, with supporting reconciliations and documents attached.",
    },
    {
      question: "What happens if I pay the amount in DRC-01A?",
      answer:
        "If you pay the tax and interest through DRC-03 before a notice, in a non-fraud case under Section 73 or 74A, no notice is issued for that amount and no penalty applies. Where fraud or suppression is alleged, a 15% penalty must also be paid to close the matter before a notice.",
    },
    {
      question: "Can a DRC-01A be appealed?",
      answer:
        "No. A DRC-01A is an intimation, not a decision or order, so there is nothing to appeal under Section 107. The response is a reply in Part B. If the officer then issues a show cause notice, you reply in DRC-06, and only an adverse order in DRC-07 can be appealed.",
    },
    {
      question: "What is Part C of DRC-01A?",
      answer:
        "Part C was added from 10 July 2024 by Notification 12/2024-Central Tax. After the taxpayer's payment or submissions in Part B, the proper officer may issue an intimation in Part C accepting the payment, the submissions or both. If the officer does not accept them, a show cause notice can follow.",
    },
    {
      question: "Does DRC-01A extend the time limit for a show cause notice?",
      answer:
        "No. The time limits in Sections 73, 74 and 74A run from the annual return due date for the year, whatever happens with a DRC-01A. A show cause notice issued after a DRC-01A must still fall within those limits, so check limitation on the notice itself, not on the intimation.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        A Form DRC-01A on the GST portal usually means an officer has already
        worked out an amount they think you owe, from a return mismatch, an
        audit or a scrutiny, and is giving you a chance to settle or explain it
        before issuing a formal show cause notice. It is not a demand order, and
        it is not yet a notice. How you answer it can still decide whether a
        notice is issued at all, and what penalty applies if it is.
      </p>

      <h2>What is a DRC-01A intimation?</h2>
      <p>
        Rule 142(1A) of the{" "}
        <a href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter18/rule142_v1.00.html" target="_blank" rel="noopener noreferrer">
          CGST Rules
        </a>{" "}
        allows the proper officer, before serving a notice under Section 73(1),
        74(1) or 74A(1) of the CGST Act, to communicate the tax, interest and
        penalty they have ascertained, in Part A of Form DRC-01A. The form has
        three parts:
      </p>
      <table>
        <thead>
          <tr>
            <th>Part</th>
            <th>Who fills it</th>
            <th>What it contains</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Part A</td>
            <td>Proper officer</td>
            <td>The amount ascertained, the grounds and the date by which to pay or respond</td>
          </tr>
          <tr>
            <td>Part B</td>
            <td>Taxpayer</td>
            <td>Payment details, part payment, or submissions against the proposed liability</td>
          </tr>
          <tr>
            <td>Part C</td>
            <td>Proper officer (from 10 July 2024)</td>
            <td>Intimation accepting the payment, the submissions, or both</td>
          </tr>
        </tbody>
      </table>
      <p>
        The intimation is sometimes called a pre-show-cause notice. That label
        is useful, but legally the show cause notice is the later document,
        summarised in Form DRC-01, which starts the formal proceeding.
      </p>

      <h2>Why do DRC-01A intimations usually arise?</h2>
      <p>
        An intimation is the officer&apos;s working put to you before it becomes
        a formal allegation. In practice it tends to follow one of these:
      </p>
      <ul>
        <li>Outward supplies in GSTR-1 higher than the tax paid in GSTR-3B for the same period.</li>
        <li>Input tax credit claimed in GSTR-3B higher than the credit shown in GSTR-2B.</li>
        <li>Credit taken on invoices from suppliers whose registration was later cancelled, or who did not file returns.</li>
        <li>Differences picked up in scrutiny of returns under Section 61, often after a Form ASMT-10 query was not fully answered.</li>
        <li>Findings in a departmental audit under Section 65 or an inspection.</li>
      </ul>
      <p>
        Knowing the source tells you which records to pull. A return mismatch is
        answered with a period-by-period reconciliation; an audit finding is
        answered with the contract, invoice and accounting entry behind each
        item.
      </p>

      <h2>How is DRC-01A different from ASMT-10, DRC-01 and DRC-07?</h2>
      <table>
        <thead>
          <tr>
            <th>Form</th>
            <th>Stage</th>
            <th>Your response</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ASMT-10</td>
            <td>Scrutiny of returns: discrepancies noticed</td>
            <td>Explanation in ASMT-11</td>
          </tr>
          <tr>
            <td>DRC-01A</td>
            <td>Intimation of amount ascertained, before any notice</td>
            <td>Payment through DRC-03 and/or Part B reply</td>
          </tr>
          <tr>
            <td>DRC-01</td>
            <td>Summary of the show cause notice under Section 73, 74 or 74A</td>
            <td>Reply in DRC-06, with a request for a hearing</td>
          </tr>
          <tr>
            <td>DRC-07</td>
            <td>Summary of the demand order</td>
            <td>Payment, or appeal under Section 107</td>
          </tr>
        </tbody>
      </table>
      <p>
        Each stage narrows the room to correct figures informally, which is why
        the earlier ones deserve full answers rather than a one-line denial.
      </p>

      <h2>Is DRC-01A mandatory or optional?</h2>
      <p>
        It is optional for the officer under the current text. The rule has
        changed three times since it was introduced:
      </p>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Notification (Central Tax)</th>
            <th>Change to Rule 142</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9 October 2019</td>
            <td>49/2019</td>
            <td>Sub-rule (1A) inserted: the proper officer &quot;shall&quot; communicate the amount in DRC-01A; Part B replies under sub-rule (2A)</td>
          </tr>
          <tr>
            <td>15 October 2020</td>
            <td>79/2020</td>
            <td>&quot;Shall&quot; replaced by &quot;may&quot;, making the intimation discretionary</td>
          </tr>
          <tr>
            <td>10 July 2024</td>
            <td>12/2024</td>
            <td>Part C added for the officer to accept payment or submissions; DRC-03A introduced to adjust DRC-03 payments against a demand</td>
          </tr>
          <tr>
            <td>1 November 2024</td>
            <td>20/2024</td>
            <td>Section 74A added, so the intimation can precede notices for FY 2024-25 onwards</td>
          </tr>
        </tbody>
      </table>
      <p>
        Notices issued in the year when the rule said &quot;shall&quot; have
        been the subject of High Court challenges on the ground that no
        intimation was given. For a notice issued today, the rule gives the
        officer a choice, so the absence of a DRC-01A is not in itself a defect.
        The CBIC&apos;s text of the rule, with these amendments footnoted, is on
        its tax information portal, and the Act is on{" "}
        <a href="https://cbic-gst.gov.in/gst-acts.html" target="_blank" rel="noopener noreferrer">
          cbic-gst.gov.in
        </a>
        .
      </p>

      <h2>What are your options after receiving a DRC-01A?</h2>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>How</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Accept and pay in full</td>
            <td>Pay through DRC-03, then record it in Part B</td>
            <td>Non-fraud case: no notice and no penalty for that amount. Fraud alleged: tax, interest and a 15% penalty close it</td>
          </tr>
          <tr>
            <td>Pay part, contest the rest</td>
            <td>DRC-03 for the accepted part; submissions in Part B for the balance</td>
            <td>The accepted part is settled; the disputed part may go to a show cause notice</td>
          </tr>
          <tr>
            <td>Contest in full</td>
            <td>Submissions in Part B with documents</td>
            <td>The officer may accept them in Part C or proceed to a notice</td>
          </tr>
          <tr>
            <td>No response</td>
            <td>Not applicable</td>
            <td>A show cause notice is likely, with the department&apos;s figures unchallenged at the first stage</td>
          </tr>
        </tbody>
      </table>
      <p>
        The penalty effects come from the Act. Sections 73(5) and 74A(8)(i)
        allow tax and interest to be paid before a notice in a non-fraud case,
        with no notice and no penalty for that amount. Sections 74(5) and
        74A(9)(i) allow the same in a fraud or suppression case, with a penalty
        of 15% of the tax. Under Section 74A(10), if the officer considers the
        amount paid short, a notice can still be issued for the balance.
      </p>

      <h2>How should you reply in Part B?</h2>
      <ol>
        <li>
          <strong>Note the date in Part A.</strong> Diarise it, and the year and
          section the officer has relied on.
        </li>
        <li>
          <strong>Rebuild the officer&apos;s working.</strong> Most intimations
          come from comparisons such as GSTR-1 against GSTR-3B, or GSTR-3B against
          GSTR-2B. Reproduce the difference from your own returns and books.
        </li>
        <li>
          <strong>Split the amount.</strong> Separate what is genuinely payable
          from what is explained by timing, amendments, credit notes, supplier
          errors or exempt supplies. Our guide to{" "}
          <Link href="/blog/itc-mismatch-notices">ITC mismatch notices</Link>{" "}
          covers the common reconciliation items.
        </li>
        <li>
          <strong>Pay what is due through DRC-03.</strong> Choose the cause of
          payment that refers to the intimation, pay tax with interest under
          Section 50, and keep the DRC-03 reference.
        </li>
        <li>
          <strong>File Part B.</strong> Record the payment, and for the rest set
          out each ground with a reconciliation, invoices, ledger extracts or
          supplier confirmations attached.
        </li>
        <li>
          <strong>Challenge any fraud allegation separately.</strong> If Part A
          includes a penalty on the footing of fraud or suppression, explain why
          the facts show a bona fide difference, since that decides the penalty.
        </li>
        <li>
          <strong>Watch for Part C or a notice.</strong> Keep the
          acknowledgement. If a DRC-01 follows, see our checklist for the{" "}
          <Link href="/blog/gst-show-cause-notice-first-48-hours">first 48 hours after a show cause notice</Link>.
        </li>
      </ol>

      <p>
        The steps are the same whether the intimation comes from a Central GST
        officer or a Tamil Nadu state GST officer, since each taxpayer is
        assigned to one administration and both use the same forms on the common
        portal. Answer on the portal, in Part B, rather than only by letter or
        email, so that the reply sits on the record of the case. If a personal
        discussion with the officer would help, ask for it in the reply itself.
      </p>

      <h2>When does paying through DRC-03 make sense?</h2>
      <p>
        Paying makes sense for the part of the amount that is genuinely due.
        Interest under Section 50 keeps running until payment, and in a non-fraud
        case paying before a notice avoids any penalty on that amount. For FY
        2024-25 onwards, Section 74A also gives 60 days after a notice to pay
        without penalty in non-fraud cases, but paying at the intimation stage
        avoids the notice altogether.
      </p>
      <p>
        Paying does not make sense for an amount that rests on a wrong
        comparison or a misread return. A voluntary payment is hard to undo:
        getting it back later generally means a refund claim and a further
        round of correspondence. Where a payment has already been made through DRC-03 and a demand
        is later raised for the same amount, Rule 142(2B) now allows an
        application in DRC-03A to adjust that payment against the demand.
      </p>

      <h2>What happens after the reply?</h2>
      <p>
        The officer may accept the payment and submissions in Part C, which
        ends the matter for those amounts. If not, the next step is a show
        cause notice in DRC-01 under Section 73, 74 or, for FY 2024-25 onwards,
        Section 74A. The intimation does not extend any time limit, so check the
        notice against the limitation in the section. For later-year demands, our
        post on the{" "}
        <Link href="/blog/section-74a-gst-notice">Section 74A GST notice</Link>{" "}
        sets out the 42-month and 12-month limits. The reply to a notice goes in
        DRC-06, and if an adverse order follows, the{" "}
        <Link href="/gst-litigation-chennai">appeal stages</Link> begin.
      </p>
      <p>
        A careful Part B reply is the cheapest point at which to resolve a
        dispute: the officer has not yet committed to a notice, the figures are
        still open, and nothing has been confirmed in an order. C S Rushil &amp;
        Co. prepares DRC-01A replies and the reconciliations behind them from
        Anna Nagar, Chennai, and online, as part of our{" "}
        <Link href="/gst-notice-reply-chennai">GST notice reply service</Link>.
      </p>
    </>
  );
}
