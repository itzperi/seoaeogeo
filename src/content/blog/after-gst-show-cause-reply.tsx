import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "after-gst-show-cause-reply",
  title: "What Happens After You Reply to a GST Show Cause Notice",
  description:
    "After a GST show cause notice reply: the Section 75 personal hearing, time limits for the order, the DRC-07 order, rectification and appeal deadlines.",
  date: "2026-09-19",
  updated: "2026-11-13",
  excerpt:
    "Your DRC-06 reply is filed. What comes next: the personal hearing, the officer's time limit, the DRC-07 order, rectification and the appeal clock.",

  summary:
    "After you reply to a GST show cause notice, the officer must give a personal hearing if you ask or if an adverse order is contemplated, and then pass a reasoned order, summarised in DRC-07, within the time limit in Section 73, 74 or 74A. An adverse order can be appealed in APL-01 within three months, with one more month for sufficient cause.",
  faqs: [
    {
      question: "What happens after I reply to a GST show cause notice?",
      answer:
        "The officer considers your DRC-06 reply, gives a personal hearing if you asked for one or an adverse order is contemplated, and then passes an order. The order can drop the demand, confirm part of it or confirm all of it. Its summary is uploaded on the GST portal in Form DRC-07.",
    },
    {
      question: "Is a GST personal hearing a bad sign?",
      answer:
        "No. Under Section 75(4) a hearing must be given whenever you ask for one in writing or an adverse decision is contemplated, so it is part of due process. It is your chance to explain the reconciliation and show originals. Going in prepared with an organised file makes a real difference to the result.",
    },
    {
      question: "How long can the officer take to pass the order?",
      answer:
        "Under Section 73 the order must come within 3 years of the annual return due date, and under Section 74 within 5 years. For FY 2024-25 onwards, Section 74A allows 12 months from the notice, extendable by up to 6 months. If no order is issued in time, Section 75(10) treats the proceedings as concluded.",
    },
    {
      question: "How long do I have to appeal a GST demand order?",
      answer:
        "Three months from the date the order is communicated to you, under Section 107(1). The Appellate Authority can allow one more month if you show sufficient cause, but not longer. The appeal is filed in Form APL-01 with the admitted amount and 10% of the disputed tax paid as pre-deposit.",
    },
    {
      question: "Can a mistake in a GST demand order be corrected?",
      answer:
        "Yes, if it is an error apparent on the face of the record. Under Section 161, you can point it out within three months of the order, and no rectification can be made after six months, except for clerical or arithmetical slips. Rectification does not replace an appeal on the merits.",
    },
    {
      question: "What if the order was passed without giving me a hearing?",
      answer:
        "Section 75(4) requires a hearing where you asked for one in writing or the order is adverse. An order passed without it can be challenged on that ground in the appeal. Keep the DRC-06 acknowledgement showing your hearing request and any portal notices, because they prove what was asked and when.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        If you have already read our guide on{" "}
        <Link href="/blog/gst-show-cause-notice-first-48-hours">the first 48 hours after a GST show cause notice</Link>{" "}
        and filed your <Link href="/gst-notice-reply-chennai">GST notice reply</Link>, the
        natural next questions are what happens now, how long the officer can
        take, and what to do if the order goes against you. This guide follows
        the case from the DRC-06 reply to the DRC-07 order and the appeal clock,
        with the sections of the{" "}
        <a href="https://cbic-gst.gov.in/gst-acts.html" target="_blank" rel="noopener noreferrer">
          CGST Act
        </a>{" "}
        that govern each step.
      </p>

      <h2>What can the officer do once your reply is in?</h2>
      <p>
        The officer considers your reply, gives a personal hearing if you asked
        for one or an adverse order is contemplated, and then passes an order.
        That order can drop the proceedings, confirm part of the demand or
        confirm all of it. Which of these happens depends heavily on how
        complete and well documented your reply was.
      </p>
      <p>
        Two limits protect you at this stage. Under Section 75(7), the order
        cannot demand more tax, interest or penalty than the notice proposed,
        and it cannot confirm a demand on grounds that were not in the notice.
        Under Section 75(6), the order must set out the relevant facts and the
        basis of the decision. A reply that takes each allegation in turn
        forces the order to deal with each point, which is what you need if
        the case goes to appeal.
      </p>
      <p>
        Filing a reply does not close the door on settling. Paying the amount
        demanded through DRC-03 within the window the section allows (30 days
        of the notice under Sections 73 and 74, or 60 days under Section 74A)
        ends the proceedings: under{" "}
        <a
          href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter18/rule142_v1.00.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rule 142(3)
        </a>
        , the officer issues an order in DRC-05. Paying only the part you
        accept does not close the notice, but it stops interest running on that
        part while the reply continues on the rest.
      </p>

      <h2>When must the officer give you a personal hearing?</h2>
      <p>
        Section 75(4) requires a personal hearing whenever you ask for one in
        writing or the officer is contemplating an adverse decision. If you
        show sufficient cause, the officer must adjourn the hearing and record
        the reasons, but Section 75(5) allows no more than three adjournments
        to a person during the proceedings.
      </p>
      <p>
        A hearing is not a bad sign. It usually means the written reply raised
        points the officer wants explained, the amounts are large, or the
        officer wants to see originals rather than copies. Treat it as the last
        chance to settle the facts before the order:
      </p>
      <ul>
        <li>Ask for the hearing in the DRC-06 reply itself, so the request is on record.</li>
        <li>Note the date, time and mode in the hearing notice, and check whether a video hearing is allowed.</li>
        <li>Carry the reconciliation, the invoices and ledgers relied on, and a one-page note of each issue and your answer.</li>
        <li>Use adjournments sparingly. With only three available, a request without a real reason can leave you short later.</li>
        <li>After the hearing, file a short written submission covering anything the officer asked for, and keep the acknowledgement.</li>
      </ul>

      <h2>How long does the officer have to pass the order?</h2>
      <p>
        It depends on the section in the notice. Section 73 allows 3 years from
        the annual return due date, Section 74 allows 5 years, and Section 74A,
        which covers FY 2024-25 onwards, allows 12 months from the date of the
        notice, extendable by up to 6 months. If no order is issued in time,
        the proceedings are deemed concluded.
      </p>
      <table>
        <thead>
          <tr>
            <th>Notice under</th>
            <th>Years covered</th>
            <th>Order must be issued within</th>
            <th>Provision</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Section 73 (no fraud)</td>
            <td>FY 2017-18 to FY 2023-24</td>
            <td>3 years from the due date of the annual return for the year</td>
            <td>Section 73(10)</td>
          </tr>
          <tr>
            <td>Section 74 (fraud, wilful misstatement or suppression)</td>
            <td>FY 2017-18 to FY 2023-24</td>
            <td>5 years from the due date of the annual return for the year</td>
            <td>Section 74(10)</td>
          </tr>
          <tr>
            <td>Section 74A (both types)</td>
            <td>FY 2024-25 onwards</td>
            <td>12 months from the notice, extendable by up to 6 months for reasons recorded before the 12 months expire</td>
            <td>Section 74A(7)</td>
          </tr>
          <tr>
            <td>Fresh order after an appeal or court direction</td>
            <td>Any</td>
            <td>2 years from the date the direction is communicated</td>
            <td>Section 75(3)</td>
          </tr>
        </tbody>
      </table>
      <p>
        Section 75(10) says the adjudication proceedings are deemed concluded
        if the order is not issued within these periods. Notices for some older
        years run on extended dates fixed by government notifications, so check
        the year before relying on the general limits. For how Section 74A
        works in detail, see our guide to{" "}
        <Link href="/blog/section-74a-gst-notice">Section 74A notices, time limits and penalties</Link>
        .
      </p>

      <h2>What does a DRC-07 order mean for you?</h2>
      <p>
        DRC-07 is the summary of the adjudication order, uploaded on the GST
        portal under Rule 142(5) with the tax, interest and penalty payable.
        Under Rule 142(6) it also works as the notice for recovery, and the
        amount is due within three months of service unless you appeal with the
        pre-deposit or settle within an early-payment window.
      </p>
      <p>
        Read the full order, not just the DRC-07 summary. Check that the
        amounts match the notice, that each of your points is dealt with, and
        whether fraud or suppression has been held proved, because that decides
        the penalty. Note the date the order was communicated to you: every
        appeal deadline runs from it.
      </p>
      <ul>
        <li>
          <strong>Early-payment windows after the order.</strong> Under Section
          74, paying tax, interest and 50% of the penalty within 30 days of the
          order concludes the case. Under Section 74A, a fraud case closes on
          payment of tax, interest and 50% of the penalty within 60 days of the
          order. Section 73 has no such window.
        </li>
        <li>
          <strong>Recovery.</strong> Section 78 gives three months from service
          of the order to pay, unless the officer, for recorded reasons, asks
          for payment sooner. Once the appeal pre-deposit is paid, recovery of
          the balance is deemed stayed under Section 107(7).
        </li>
        <li>
          <strong>Fraud not proved on appeal.</strong> If an appellate forum
          holds that fraud or suppression was not established, Section 75(2)
          requires the demand to be redetermined as a non-fraud case, which
          changes the penalty and, for older years, the time limit.
        </li>
      </ul>

      <h2>Can a mistake in the order be rectified?</h2>
      <p>
        Yes, if the mistake is an error apparent on the face of the record,
        such as a wrong figure, a payment not credited or a period typed
        wrongly. Under Section 161 you can point it out within three months of
        the order. No rectification can be made after six months, except for
        clerical or arithmetical slips.
      </p>
      <p>
        If a rectification would hurt you, the officer must follow natural
        justice before making it. The rectified or withdrawn order is uploaded
        in Form DRC-08 under Rule 142(7). Rectification is for obvious errors,
        not for re-arguing the merits, and nothing in Section 107 pauses the
        appeal clock while a rectification request is pending. If the order is
        wrong on substance as well, file the appeal in time.
      </p>

      <h2>What is the appeal timeline after a DRC-07 order?</h2>
      <p>
        You have three months from the date the order is communicated to file
        a first appeal in APL-01, with one more month if you show sufficient
        cause. If the first appeal fails, a second appeal to the GST Appellate
        Tribunal lies within three months of that order, with three more
        months for sufficient cause. Each stage needs a pre-deposit.
      </p>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Form</th>
            <th>Time limit</th>
            <th>Condonation</th>
            <th>Pre-deposit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First appeal to the Appellate Authority (Section 107)</td>
            <td>APL-01 on the GST portal</td>
            <td>3 months from communication of the order</td>
            <td>Up to 1 more month (Section 107(4))</td>
            <td>Admitted amount, plus 10% of the disputed tax, capped at Rs 20 crore under the CGST Act; 10% of the penalty for penalty-only orders</td>
          </tr>
          <tr>
            <td>Appellate Authority&apos;s decision</td>
            <td>APL-04 (order in appeal)</td>
            <td>Within 1 year of filing, where possible (Section 107(13))</td>
            <td>Not applicable</td>
            <td>Not applicable</td>
          </tr>
          <tr>
            <td>Second appeal to the GSTAT (Section 112)</td>
            <td>APL-05 on the GSTAT e-filing portal</td>
            <td>3 months from communication of the appellate order, or a later date the Government notifies</td>
            <td>Up to 3 more months (Section 112(6))</td>
            <td>A further 10% of the tax still in dispute, capped at Rs 20 crore under the CGST Act; a further 10% of the penalty for penalty-only orders</td>
          </tr>
        </tbody>
      </table>
      <p>
        Source: Sections 107 and 112 of the CGST Act as amended, on{" "}
        <a
          href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter18/section107_v1.00.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          CBIC&apos;s tax information portal
        </a>
        . The 10% and Rs 20 crore figures reflect the Finance (No. 2) Act,
        2024, and the penalty-only rule applies from 1 October 2025. The GSTAT
        stage is explained in our guide to{" "}
        <Link href="/blog/gst-appellate-tribunal-gstat-explained">the GST Appellate Tribunal for Tamil Nadu businesses</Link>
        , and the full ladder, including the Tamil Nadu benches, is on our{" "}
        <Link href="/gst-litigation-chennai">GST litigation support in Chennai</Link>{" "}
        page.
      </p>

      <h2>What should you do while you wait?</h2>
      <p>
        Keep filing returns on time, keep every piece of correspondence in date
        order, and watch the GST portal for the hearing notice and the order.
        A pending dispute does not pause your ongoing compliance, and the
        order&apos;s date of communication is what starts the appeal clock.
      </p>
      <ul>
        <li>
          Continue <Link href="/gst-return-filing-chennai">filing your regular GST returns</Link>{" "}
          without interruption.
        </li>
        <li>Check the notices and orders section of the portal every week, not only email.</li>
        <li>Diarise the order deadline for your section, and the three-month appeal date the day an order arrives.</li>
        <li>Avoid admissions in informal communication that could be used against you later.</li>
        <li>
          If the same issue recurs in later years, fix the cause now; our guide
          to <Link href="/blog/itc-mismatch-notices">ITC mismatch notices</Link>{" "}
          covers the most common one.
        </li>
      </ul>

      <p>
        If the adjudication order confirms a demand, our free{" "}
        <Link href="/tools/gst-appeal-deadline-pre-deposit-calculator">GST appeal deadline and pre-deposit calculator</Link>{" "}
        shows the appeal deadline and the pre-deposit.
      </p>
      <p>
        If you have filed a reply to a GST show cause notice and are unsure what
        comes next, or a demand order has already been passed and you are
        deciding whether to appeal, C S Rushil &amp; Co. represents clients
        through the entire process, from the original notice to the GSTAT.{" "}
        <Link href="/contact">Contact our Anna Nagar office</Link> to discuss
        where your case stands.
      </p>
    </>
  );
}
