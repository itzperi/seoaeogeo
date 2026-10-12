import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "section-74a-gst-notice",
  title: "Section 74A GST Notice: Time Limits, Penalty and Reply",
  description:
    "Section 74A GST notices for FY 2024-25 onwards: how it replaces Sections 73 and 74, the 42-month and 12-month limits, fraud vs non-fraud penalty, and replies.",
  date: "2026-10-12",
  excerpt:
    "From FY 2024-25, GST demands are raised under a single Section 74A. Here is how its time limits and penalties differ from Sections 73 and 74, and how to reply.",
  faqs: [
    {
      question: "Which years does Section 74A apply to?",
      answer:
        "Section 74A applies to tax not paid, short paid, erroneously refunded or wrongly availed ITC for FY 2024-25 onwards. It was inserted by the Finance (No. 2) Act, 2024. Demands for FY 2017-18 to FY 2023-24 continue under Sections 73 and 74, so the year in the notice decides which provision is correct.",
    },
    {
      question: "What is the time limit for a Section 74A notice?",
      answer:
        "The notice must be issued within 42 months from the due date of the annual return for the year, or from the date of an erroneous refund. The order must follow within 12 months of the notice, extendable by up to six months by a senior officer for recorded reasons. For FY 2024-25, the notice deadline falls in mid-2029.",
    },
    {
      question: "What penalty applies under Section 74A?",
      answer:
        "Where fraud, wilful misstatement or suppression is not alleged, the penalty is 10% of the tax or Rs 10,000, whichever is higher. Where fraud is alleged and proved, the penalty equals the tax. Interest under Section 50 applies in both cases, and early payment reduces or removes the penalty within set windows.",
    },
    {
      question: "How long do I have to pay and close a Section 74A notice?",
      answer:
        "In a non-fraud case, paying tax and interest within 60 days of the notice ends the matter with no penalty. In a fraud case, paying within 60 days of the notice with a 25% penalty closes it, and paying within 60 days of the order needs a 50% penalty. The earlier provisions allowed only 30 days.",
    },
    {
      question: "Can a Section 74A notice be challenged on limitation?",
      answer:
        "Yes. Check that the notice falls within 42 months of the annual return due date and that the order is passed within 12 months of the notice, or within any properly recorded extension. A notice wrongly issued under Section 74A for an earlier year, or an order after the deadline, can be contested on that ground.",
    },
    {
      question: "Is a reply to Section 74A notice filed online?",
      answer:
        "Yes. The notice is uploaded on the GST portal with a summary in Form DRC-01, and the reply is filed in Form DRC-06 with supporting documents, within the time the notice states, usually 30 days. Ask for a personal hearing in the reply. Voluntary payment, if chosen, is made through Form DRC-03.",
    },
  ],
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
        post explains how it works and how a reply should be built around it.
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
        </a>
        . Notices for FY 2023-24 and earlier still follow Sections 73 and 74, so
        the first check on any notice is whether the right section has been
        used for the year involved.
      </p>

      <h2>How does Section 74A compare with Sections 73 and 74?</h2>
      <table>
        <thead>
          <tr>
            <th>Point</th>
            <th>Section 73 (to FY 2023-24)</th>
            <th>Section 74 (to FY 2023-24)</th>
            <th>Section 74A (FY 2024-25 onwards)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Type of case</td>
            <td>No fraud, wilful misstatement or suppression</td>
            <td>Fraud, wilful misstatement or suppression</td>
            <td>Both, in one provision</td>
          </tr>
          <tr>
            <td>Order deadline</td>
            <td>3 years from the annual return due date</td>
            <td>5 years from the annual return due date</td>
            <td>12 months from the notice, extendable by up to 6 months</td>
          </tr>
          <tr>
            <td>Notice deadline</td>
            <td>At least 3 months before the order deadline</td>
            <td>At least 6 months before the order deadline</td>
            <td>42 months from the annual return due date (or erroneous refund date)</td>
          </tr>
          <tr>
            <td>Penalty</td>
            <td>10% of tax or Rs 10,000, whichever is higher</td>
            <td>Equal to the tax</td>
            <td>Non-fraud: 10% of tax or Rs 10,000, whichever is higher. Fraud: equal to the tax</td>
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

      <h2>How are the Section 74A time limits worked out?</h2>
      <p>
        Start from the due date of the annual return (GSTR-9) for the year
        concerned. For FY 2024-25 that due date was 31 December 2025, so 42
        months later takes the notice deadline to 30 June 2029. For an
        erroneous refund, the 42 months run from the date of the refund instead.
      </p>
      <p>
        Once the notice is issued, the officer has 12 months to pass the order.
        That can be extended by up to six months, but only by an officer senior
        to the proper officer, for reasons recorded in writing before the
        12 months run out. An extension granted after the deadline, or without
        recorded reasons, is a point worth raising.
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
        If you have received a notice citing Section 74A and want it reviewed
        before the reply date, <Link href="/contact">contact our Anna Nagar office</Link>.
      </p>
    </>
  );
}
