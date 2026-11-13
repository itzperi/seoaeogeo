import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "section-74a-gst-notice",
  title: "Section 74A GST Notice: Time Limits, Penalty and Reply",
  description:
    "Section 74A GST notices for FY 2024-25 onwards: how it replaces Sections 73 and 74, the 42-month and 12-month limits, fraud vs non-fraud penalty, and replies.",
  date: "2026-10-12",
  updated: "2026-11-13",
  excerpt:
    "From FY 2024-25, GST demands are raised under a single Section 74A. Here is how its time limits and penalties differ from Sections 73 and 74, and how to reply.",
  faqs: [
    {
      question: "Which years does Section 74A apply to?",
      answer:
        "Section 74A applies to tax not paid, short paid or erroneously refunded, and to ITC wrongly availed or utilised, for FY 2024-25 onwards. It was inserted by the Finance (No. 2) Act, 2024. Demands for FY 2023-24 and earlier continue under Sections 73 and 74, so the year in the notice decides which provision is correct.",
    },
    {
      question: "What is the time limit for a Section 74A notice?",
      answer:
        "The notice must be issued within 42 months from the due date of the annual return for the year, or from the date of an erroneous refund. The order must follow within 12 months of the notice, extendable by up to six months by the Commissioner or an authorised senior officer, for reasons recorded before the deadline.",
    },
    {
      question: "What penalty applies under Section 74A?",
      answer:
        "Where fraud, wilful misstatement or suppression is not alleged, the penalty is 10% of the tax or Rs 10,000, whichever is higher. Where fraud is alleged and proved, the penalty equals the tax. Interest under Section 50 applies in both cases, and paying early reduces or removes the penalty within set windows.",
    },
    {
      question: "How long do I have to pay and close a Section 74A notice?",
      answer:
        "In a non-fraud case, paying tax and interest within 60 days of the notice ends the matter with no penalty. In a fraud case, paying within 60 days of the notice with a 25% penalty closes it, and paying within 60 days of the order needs a 50% penalty. Sections 73 and 74 allowed only 30 days.",
    },
    {
      question: "Can a Section 74A notice be challenged on limitation?",
      answer:
        "Yes. Check that the notice falls within 42 months of the annual return due date and that the order is passed within 12 months of the notice, or within a properly recorded extension. Under Section 75(10), proceedings are deemed concluded if the order is not issued in time, so a late order can be contested.",
    },
    {
      question: "Is a DRC-01A intimation compulsory before a Section 74A notice?",
      answer:
        "No. Rule 142(1A) says the officer may communicate the proposed tax, interest and penalty in Part A of DRC-01A before the notice; it is not mandatory. If you receive one, you can pay through DRC-03 or file a part-payment or submissions in Part B, which can settle the issue before a notice.",
    },
    {
      question: "Is a reply to Section 74A notice filed online?",
      answer:
        "Yes. The notice is uploaded on the GST portal with a summary in Form DRC-01, and the reply is filed in Form DRC-06 with supporting documents, within the time the notice states, usually 30 days. Ask for a personal hearing in the reply. Any voluntary payment is made through Form DRC-03.",
    },
  ],
  summary:
    "Section 74A applies to GST notices for FY 2024-25 onwards and replaces Sections 73 and 74 with one provision. It allows a notice within 42 months of the annual return due date and an order within 12 months of the notice, extendable by up to 6 months. Penalty depends on whether fraud is alleged and proved.",
};

export default function Body() {
  return (
    <>
      <p>
        If your GST notice is for FY 2024-25 or a later year, it will cite
        Section 74A of the CGST Act rather than Section 73 or 74. Section 74A is
        not just a renumbering. It puts fraud and non-fraud demands on one
        timeline, gives the department longer to issue notices than Section 73
        did, and doubles the window for closing a case by paying early. This
        post explains how it works, the forms a case moves through, and how a
        reply should be built around it.
      </p>

      <h2>What is a Section 74A GST notice?</h2>
      <p>
        A Section 74A notice is a show-cause notice demanding tax not paid or
        short paid, erroneously refunded, or input tax credit wrongly availed or
        used, for FY 2024-25 onwards. It replaces the separate Section 73
        (non-fraud) and Section 74 (fraud) routes with a single provision: one
        42-month notice window and a 12-month order deadline, with the penalty
        depending on whether fraud is alleged and proved.
      </p>
      <p>
        Section 74A was inserted by the Finance (No. 2) Act, 2024. The text is
        available in the{" "}
        <a href="https://cbic-gst.gov.in/gst-acts.html" target="_blank" rel="noopener noreferrer">
          CGST Act on cbic-gst.gov.in
        </a>{" "}
        and, section by section, on{" "}
        <a
          href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter15/Section74A_v1.00.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          CBIC&apos;s tax information portal
        </a>
        . Notices for FY 2023-24 and earlier still follow Sections 73 and 74, so
        the first check on any notice is whether the right section has been
        used for the year involved.
      </p>

      <h2>How does Section 74A compare with Sections 73 and 74?</h2>
      <p>
        Sections 73 and 74 cover FY 2017-18 to FY 2023-24 and split non-fraud
        and fraud cases, with order deadlines of 3 and 5 years from the annual
        return due date. Section 74A covers FY 2024-25 onwards: one 42-month
        notice window, a 12-month order deadline and a penalty that depends on
        whether fraud is proved.
      </p>
      <table>
        <thead>
          <tr>
            <th>Point</th>
            <th>Section 73</th>
            <th>Section 74</th>
            <th>Section 74A</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Financial years covered</td>
            <td>FY 2017-18 to FY 2023-24</td>
            <td>FY 2017-18 to FY 2023-24</td>
            <td>FY 2024-25 onwards</td>
          </tr>
          <tr>
            <td>Type of case</td>
            <td>No fraud, wilful misstatement or suppression</td>
            <td>Fraud, wilful misstatement or suppression</td>
            <td>Both, in one provision</td>
          </tr>
          <tr>
            <td>Notice deadline</td>
            <td>At least 3 months before the order deadline</td>
            <td>At least 6 months before the order deadline</td>
            <td>42 months from the annual return due date (or erroneous refund date)</td>
          </tr>
          <tr>
            <td>Order deadline</td>
            <td>3 years from the annual return due date</td>
            <td>5 years from the annual return due date</td>
            <td>12 months from the notice, extendable by up to 6 months</td>
          </tr>
          <tr>
            <td>Penalty: non-fraud case</td>
            <td>10% of tax or Rs 10,000, whichever is higher</td>
            <td>Not applicable (Section 73 applies)</td>
            <td>10% of tax or Rs 10,000, whichever is higher</td>
          </tr>
          <tr>
            <td>Penalty: fraud case</td>
            <td>Not applicable (Section 74 applies)</td>
            <td>Equal to the tax</td>
            <td>Equal to the tax</td>
          </tr>
          <tr>
            <td>Pay before notice</td>
            <td>Tax and interest: no notice, no penalty</td>
            <td>Tax, interest and a 15% penalty</td>
            <td>Non-fraud: tax and interest, no penalty. Fraud: tax, interest and a 15% penalty</td>
          </tr>
          <tr>
            <td>Pay after notice to close</td>
            <td>Within 30 days: no penalty</td>
            <td>Within 30 days: 25% penalty</td>
            <td>Within 60 days: no penalty (non-fraud) or 25% penalty (fraud)</td>
          </tr>
          <tr>
            <td>Pay after order to close</td>
            <td>Not available</td>
            <td>Within 30 days: 50% penalty</td>
            <td>Fraud cases: within 60 days, 50% penalty</td>
          </tr>
          <tr>
            <td>Minimum amount</td>
            <td>No specific floor in the section</td>
            <td>No specific floor in the section</td>
            <td>No notice if the amount for the year is below Rs 1,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        Source: Sections 73, 74 and 74A of the CGST Act as amended. Sections 73
        and 74 each carry a sub-section limiting them to periods up to FY
        2023-24. Notices for some older years run on extended dates fixed by
        government notifications, so check the year before relying on the
        general limits above.
      </p>

      <h2>How are the Section 74A time limits worked out?</h2>
      <p>
        Start from the due date of the annual return (GSTR-9) for the year
        concerned. For FY 2024-25 that due date was 31 December 2025, so 42
        months later takes the notice deadline to 30 June 2029. For an
        erroneous refund, the 42 months run from the date of the refund instead.
      </p>
      <p>
        Once the notice is issued, the officer has 12 months to pass the order.
        Section 74A(7) lets the Commissioner, or an officer authorised by the
        Commissioner who is senior to the proper officer and not below the rank
        of Joint Commissioner, extend this by up to six months, for reasons
        recorded in writing before the 12 months run out. An extension granted
        after the deadline, or without recorded reasons, is a point worth
        raising. If no order is issued within the period, Section 75(10) treats
        the proceedings as concluded.
      </p>
      <table>
        <thead>
          <tr>
            <th>Financial year</th>
            <th>Provision</th>
            <th>Annual return due date</th>
            <th>Last date for notice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FY 2023-24</td>
            <td>Section 73 or 74</td>
            <td>Per the GSTR-9 due date for that year</td>
            <td>Linked to the 3-year or 5-year order deadline</td>
          </tr>
          <tr>
            <td>FY 2024-25</td>
            <td>Section 74A</td>
            <td>31 December 2025</td>
            <td>30 June 2029</td>
          </tr>
          <tr>
            <td>FY 2025-26 onwards</td>
            <td>Section 74A</td>
            <td>Check the notified GSTR-9 due date</td>
            <td>42 months from that due date</td>
          </tr>
        </tbody>
      </table>
      <p>
        A longer window for non-fraud cases cuts both ways. The department has
        more time, but so does a well-organised business, because reconciliations
        for FY 2024-25 can be prepared now, before any notice arrives.
      </p>

      <h2>Which forms does a Section 74A case move through?</h2>
      <p>
        A typical case runs from DRC-01A (an optional intimation before the
        notice) to DRC-01 (the summary of the show cause notice), DRC-06 (your
        reply), a personal hearing and DRC-07 (the summary of the order).
        Payments at any stage go through DRC-03, and a case closed by payment
        ends with an order in DRC-05.
      </p>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Form</th>
            <th>Where it comes from</th>
            <th>What it means for you</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Pre-notice intimation</td>
            <td>DRC-01A, Part A</td>
            <td>Rule 142(1A): the officer &quot;may&quot; communicate the tax, interest and penalty ascertained</td>
            <td>Optional for the officer. Check the computation before the date it gives</td>
          </tr>
          <tr>
            <td>2. Your response to the intimation</td>
            <td>DRC-03 to pay; DRC-01A Part B to part-pay or object</td>
            <td>Rule 142(2) and (2A); the officer accepts in Part C</td>
            <td>Pay what is correct and object to the rest with a reconciliation</td>
          </tr>
          <tr>
            <td>3. Show cause notice</td>
            <td>DRC-01 (DRC-02 for a statement covering further periods)</td>
            <td>Rule 142(1); Section 74A(1) to (4)</td>
            <td>Diarise the reply date and the 60-day payment window</td>
          </tr>
          <tr>
            <td>4. Reply</td>
            <td>DRC-06</td>
            <td>Rule 142(4); Section 74A(6)</td>
            <td>File a reasoned reply with numbered annexures and ask for a hearing</td>
          </tr>
          <tr>
            <td>5. Personal hearing</td>
            <td>Hearing notice on the portal</td>
            <td>Section 75(4) and 75(5)</td>
            <td>A hearing is due if you ask in writing or an adverse order is contemplated; at most three adjournments</td>
          </tr>
          <tr>
            <td>6. Order</td>
            <td>DRC-07 (summary of the order)</td>
            <td>Rule 142(5); Section 74A(7)</td>
            <td>Within 12 months of the notice; it cannot exceed the notice amount or rest on new grounds (Section 75(7))</td>
          </tr>
          <tr>
            <td>Closed by payment</td>
            <td>DRC-03, then DRC-05</td>
            <td>Rule 142(3); Section 74A(8) and (9)</td>
            <td>Payment within the 60-day windows concludes the proceedings</td>
          </tr>
          <tr>
            <td>Rectified or withdrawn order</td>
            <td>DRC-08</td>
            <td>Rule 142(7); Section 161</td>
            <td>Summary of a rectification or withdrawal of the DRC-07 order</td>
          </tr>
        </tbody>
      </table>
      <p>
        Source: Rule 142 of the CGST Rules as amended with effect from 1
        November 2024 by Notification No. 20/2024-Central Tax, which added the
        Section 74A references, on{" "}
        <a
          href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter18/rule142_v1.00.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          CBIC&apos;s tax information portal
        </a>
        . What happens after the reply is covered in more detail in{" "}
        <Link href="/blog/after-gst-show-cause-reply">what happens after you reply to a GST show cause notice</Link>
        .
      </p>

      <h2>Why does the fraud allegation matter so much?</h2>
      <p>
        Under Section 74A the timeline is the same whether or not fraud is
        alleged, so the real difference is the penalty and the cost of settling
        early. A non-fraud demand can be closed with no penalty by paying tax and
        interest within 60 days of the notice. A fraud demand cannot: the
        minimum is a 25% penalty within 60 days of the notice, or 15% if paid
        before a notice is issued.
      </p>
      <p>
        One exception catches non-fraud cases too. Under Section 74A(11), where
        self-assessed tax or tax collected was not paid within 30 days of its
        due date, the 10% penalty applies even if you pay before or soon after
        the notice. Section 74A also defines suppression: not declaring facts
        or information that you were required to declare in a return or
        statement, or not furnishing information the officer asked for in
        writing.
      </p>
      <p>
        The burden is on the department to show fraud, wilful misstatement or
        suppression with evidence. Notices sometimes invoke fraud because the
        mismatch is large, without pointing to any intent. Your reply should
        separate the two questions: whether tax is short paid at all, and, if it
        is, whether the facts show anything more than a bona fide error. If the
        officer cannot sustain fraud, the order should apply the non-fraud
        penalty.
      </p>

      <h2>How should you reply to a Section 74A notice?</h2>
      <ol>
        <li>
          <strong>Check the section against the year.</strong> A Section 74A
          notice for FY 2023-24 or earlier, or a Section 73 or 74 notice for FY
          2024-25, is defective on its face.
        </li>
        <li>
          <strong>Check limitation.</strong> Compute 42 months from the annual
          return due date, and diarise 12 months from the notice for the order.
        </li>
        <li>
          <strong>Read the DRC-01 summary and the notice together.</strong> The
          amount, period and grounds should match. Note anything in the notice
          that has no supporting working.
        </li>
        <li>
          <strong>Decide on the 60-day window early.</strong> If part of the
          demand is correct, paying that part through DRC-03 within 60 days can
          remove or reduce the penalty on it, while you contest the rest.
        </li>
        <li>
          <strong>Answer each ground with documents.</strong> Reconciliations of
          GSTR-1, GSTR-3B and GSTR-2B, invoices, ledgers and supplier
          confirmations carry more weight than general denials. Our guide to{" "}
          <Link href="/blog/itc-mismatch-notices">ITC mismatch notices</Link>{" "}
          covers the reconciliation side in detail.
        </li>
        <li>
          <strong>Contest fraud separately.</strong> Show why the facts do not
          support intent, so that even an adverse order applies the lower
          penalty.
        </li>
        <li>
          <strong>File in DRC-06 and ask for a hearing.</strong> File within the
          time stated in the notice, usually 30 days, and request a personal
          hearing in writing.
        </li>
      </ol>
      <p>
        For the first steps after a notice lands, see{" "}
        <Link href="/blog/gst-show-cause-notice-first-48-hours">what to do in the first 48 hours</Link>
        . For help drafting the reply, see our{" "}
        <Link href="/gst-notice-reply-chennai">GST notice reply service in Chennai</Link>
        .
      </p>

      <h2>What format should a DRC-06 reply to a Section 74A notice follow?</h2>
      <p>
        A DRC-06 reply should read as a structured legal submission: preliminary
        objections first, then an issue-by-issue answer with reconciliations,
        a separate rebuttal of any fraud allegation, the payments already made,
        a hearing request and a clear prayer, all supported by numbered
        annexures. Use this checklist before you file.
      </p>
      <ul>
        <li>
          <strong>Header details:</strong> legal name, GSTIN, notice reference
          number and date, the reference number shown on the portal, the period
          and the section invoked.
        </li>
        <li>
          <strong>Preliminary objections:</strong> wrong section for the year,
          notice outside 42 months, an amount below Rs 1,000 for the year,
          jurisdiction of the issuing office, and any notice that does not give
          the working behind the figure.
        </li>
        <li>
          <strong>Brief facts:</strong> the business, the returns filed for the
          year and any earlier scrutiny or DRC-01A correspondence on the same
          issue.
        </li>
        <li>
          <strong>Issue-wise submissions:</strong> one heading per allegation,
          each with the department&apos;s figure, your figure, the reason for the
          difference and the annexure that proves it.
        </li>
        <li>
          <strong>Reconciliation tables:</strong> GSTR-1 vs GSTR-3B, GSTR-2B vs
          GSTR-3B and books vs returns, invoice-wise where credit is questioned.
        </li>
        <li>
          <strong>Fraud and suppression:</strong> a separate section showing why
          the facts do not meet the Section 74A definition, so that any penalty
          falls under Section 74A(5)(i) rather than (5)(ii).
        </li>
        <li>
          <strong>Interest and penalty:</strong> any error in the interest
          computation, and the correct penalty clause if some tax is admitted.
        </li>
        <li>
          <strong>Payments already made:</strong> DRC-03 reference numbers and
          dates, with the amounts mapped to each issue.
        </li>
        <li>
          <strong>Hearing request:</strong> a written request for a personal
          hearing under Section 75(4).
        </li>
        <li>
          <strong>Prayer:</strong> what you ask the officer to do, such as drop
          the demand, or confirm only the admitted amount without penalty.
        </li>
        <li>
          <strong>Annexure index and signature:</strong> numbered annexures
          and the authorised signatory&apos;s signature, with any letter of
          authority for a representative.
        </li>
      </ul>

      <h2>What happens if the order goes against you?</h2>
      <p>
        An adverse Section 74A order (in Form DRC-07) can be appealed to the
        Appellate Authority in Form APL-01 within three months, with a
        pre-deposit of 10% of the disputed tax. A second appeal lies to the GST
        Appellate Tribunal, which in Tamil Nadu sits at Chennai, Coimbatore and
        Madurai. Our step-by-step guide on{" "}
        <Link href="/blog/gst-appellate-tribunal-gstat-explained">filing a GSTAT appeal in Tamil Nadu</Link>{" "}
        covers that stage, and the{" "}
        <Link href="/gst-litigation-chennai">GST litigation page</Link> sets out
        the full appeal ladder. Businesses in the western districts can also see{" "}
        <Link href="/gst-litigation-coimbatore">GST litigation in Coimbatore</Link>
        .
      </p>
      <p>
        If the order goes against you, work out the appeal deadline and the pre-deposit with our free{" "}
        <Link href="/tools/gst-appeal-deadline-pre-deposit-calculator">GST appeal deadline and pre-deposit calculator</Link>.
      </p>
      <p>
        If you have received a notice citing Section 74A and want it reviewed
        before the reply date, <Link href="/contact">contact our Anna Nagar office</Link>.
      </p>
    </>
  );
}
