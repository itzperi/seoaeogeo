import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "gst-appellate-tribunal-gstat-explained",
  title: "How to File a GSTAT Appeal in Tamil Nadu: Step by Step",
  description:
    "How to file a GST Appellate Tribunal appeal in Tamil Nadu: eligibility, the 3-month limit, the further 10% pre-deposit, Form APL-05, documents and TN benches.",
  date: "2026-09-19",
  updated: "2026-10-12",
  excerpt:
    "A step-by-step guide to a GSTAT second appeal from Tamil Nadu: who can file, time limits, pre-deposit, APL-05 on the e-filing portal, documents, benches and what follows.",
  faqs: [
    {
      question: "What is the time limit to file a GSTAT appeal?",
      answer:
        "Three months from the date the Appellate Authority's order is communicated to you, under Section 112(1) of the CGST Act. The Tribunal can condone a delay of up to three further months if you show sufficient cause. The one-time window for older orders closed on 31 July 2026, so later orders follow the normal limit.",
    },
    {
      question: "How much pre-deposit is needed for a GSTAT appeal?",
      answer:
        "A further 10% of the tax still in dispute, in addition to the 10% already paid at the first appeal, capped at Rs 20 crore each under CGST and SGST (Rs 40 crore for IGST). For penalty-only orders, the further pre-deposit is 10% of the disputed penalty. Paying it stays recovery of the balance until the appeal is decided.",
    },
    {
      question: "Which GSTAT bench hears an appeal from Tamil Nadu?",
      answer:
        "Tamil Nadu has GSTAT State Benches at Chennai, Coimbatore and Madurai, with a circuit bench for Puducherry. Appeals involving place of supply go to the Principal Bench in New Delhi. The e-filing portal assigns the bench when you file, so confirm it there and on gstat.gov.in rather than assuming the nearest city.",
    },
    {
      question: "Can a Chartered Accountant represent a business before GSTAT?",
      answer:
        "Yes. Section 116 of the CGST Act lists a practising Chartered Accountant as an authorised representative, along with advocates, cost accountants, company secretaries and certain others. The representative files an authorisation with the appeal, prepares the paper book and grounds, and appears at hearings on the dates the bench roster fixes.",
    },
    {
      question: "What happens if GSTAT also decides against us?",
      answer:
        "An order of a State Bench can be appealed to the High Court under Section 117 within 180 days, but only on a substantial question of law. Orders of the Principal Bench on place of supply go to the Supreme Court under Section 118. Rectification of an apparent mistake in the order is a separate, narrower remedy.",
    },
    {
      question: "Do we need to visit the bench in person for the hearing?",
      answer:
        "Usually your authorised representative appears, and you attend only if the bench needs you. Hearing notices are issued through the portal, and the sitting days depend on the current office order for each bench. Check the cause list a few days ahead, because rosters and member composition are revised from time to time.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        The GST Appellate Tribunal (GSTAT) is now hearing appeals in Tamil Nadu,
        which means a business that loses its first appeal finally has a working
        second forum before the High Court. This guide walks through a GSTAT
        appeal from start to finish: whether you can file, how long you have, how
        much you must deposit, how Form APL-05 is filed, what to upload, which
        bench will hear you and what comes after the Tribunal&apos;s order.
      </p>

      <h2>How do you file a GSTAT appeal in Tamil Nadu?</h2>
      <p>
        File Form GST APL-05 on the GSTAT e-filing portal (efiling.gstat.gov.in)
        within three months of the Appellate Authority&apos;s order, after paying a
        further 10% of the tax still in dispute (capped at Rs 20 crore each for
        CGST and SGST) and the appeal fee. Upload the orders, grounds, statement
        of facts and payment proofs. The portal assigns a Tamil Nadu State Bench
        or, for place-of-supply disputes, the Principal Bench.
      </p>
      <p>
        If you are still at the show-cause stage, our guides on{" "}
        <Link href="/blog/gst-show-cause-notice-first-48-hours">the first 48 hours after a notice</Link>{" "}
        and{" "}
        <Link href="/blog/after-gst-show-cause-reply">what happens after you reply</Link>{" "}
        cover the earlier steps. This post starts where the first appeal ends.
      </p>

      <h2>Who is eligible to appeal to GSTAT?</h2>
      <p>
        Any person aggrieved by an order of the Appellate Authority under Section
        107, or of the Revisional Authority under Section 108, can appeal to the
        Tribunal under Section 112 of the CGST Act. In practice that means you
        must normally have gone through the first appeal (Form APL-01 and the
        resulting order in APL-04). You cannot skip straight from a demand order
        to GSTAT.
      </p>
      <p>
        The department can also appeal against an appellate order that favours
        you, and if it does, you can file a memorandum of cross-objections within
        45 days of receiving notice of its appeal. Check your portal for a
        departmental appeal even if you won the first round.
      </p>

      <h2>What are the steps and time limits?</h2>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>What you do</th>
            <th>Time limit or rule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Check limitation</td>
            <td>Note the date the APL-04 order was communicated (uploaded or served)</td>
            <td>3 months under Section 112(1); up to 3 more months condonable for sufficient cause</td>
          </tr>
          <tr>
            <td>2. Compute pre-deposit</td>
            <td>Work out the tax still in dispute after the first appeal, head by head</td>
            <td>Further 10% of disputed tax, capped at Rs 20 crore CGST and Rs 20 crore SGST (Rs 40 crore IGST); penalty-only orders: 10% of the penalty</td>
          </tr>
          <tr>
            <td>3. Pay pre-deposit and fee</td>
            <td>Pay the pre-deposit on the GST portal and the appeal fee as the GSTAT portal directs</td>
            <td>Before filing; keep the challan or ledger debit reference</td>
          </tr>
          <tr>
            <td>4. Register and file APL-05</td>
            <td>Register on efiling.gstat.gov.in, fetch the first-appeal details using its ARN, enter grounds and upload documents</td>
            <td>Sign with DSC or Aadhaar e-sign; an acknowledgement is generated</td>
          </tr>
          <tr>
            <td>5. Scrutiny and listing</td>
            <td>Cure any defects the registry points out; the matter is listed before the assigned bench</td>
            <td>Defect timelines are stated in the registry notice</td>
          </tr>
          <tr>
            <td>6. Hearing and order</td>
            <td>Representative argues on the paper book; the Tribunal passes its order</td>
            <td>Section 113 aims at disposal within one year where possible, but this is not a hard limit</td>
          </tr>
        </tbody>
      </table>

      <h2>How is the GSTAT pre-deposit calculated?</h2>
      <p>
        The pre-deposit is on <strong>tax only</strong>. Disputed interest and
        penalty are not counted, except where the order is for a penalty alone.
        Under Section 112(8), you pay the admitted amount in full plus a further
        10% of the tax that remains in dispute after the Appellate
        Authority&apos;s order. That is in addition to the 10% already paid under
        Section 107(6) for the first appeal, so a business that contests the
        full demand through both stages will have deposited about 20% in total.
      </p>
      <p>
        The caps were reduced by the Finance (No. 2) Act, 2024: the further
        deposit is capped at Rs 20 crore each under CGST and SGST, which means
        Rs 40 crore for IGST. The Finance Act, 2025 added a rule from 1 October
        2025 that for orders demanding only a penalty, with no tax, the
        pre-deposit is 10% of the penalty at each stage. Courts and the Tribunal
        have been asked whether this applies where the show-cause notice predates
        1 October 2025, so check the position for older matters.
      </p>
      <p>
        Two practical points. First, compute the figure by tax head, because the
        caps apply per head. Second, once the pre-deposit is paid, recovery of
        the balance demand is deemed stayed under Section 112(9) until the appeal
        is decided. If you win, the pre-deposit is refundable with interest.
      </p>

      <h2>What documents do you need for APL-05?</h2>
      <table>
        <thead>
          <tr>
            <th>Document</th>
            <th>Why it is needed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Appellate order (APL-04) and the original order (DRC-07 or other)</td>
            <td>Fix the limitation date and the amount in dispute. A certified copy may be called for under the GSTAT procedure rules</td>
          </tr>
          <tr>
            <td>First appeal papers (APL-01, grounds, APL-02 acknowledgement)</td>
            <td>Show what was argued below; the ARN links the two appeals on the portal</td>
          </tr>
          <tr>
            <td>Statement of facts and grounds of appeal</td>
            <td>The heart of the appeal. Each ground should tie to a finding in the order and a document</td>
          </tr>
          <tr>
            <td>Pre-deposit proof (DRC-03 or ledger debit) and appeal fee receipt</td>
            <td>An appeal is not admitted without them</td>
          </tr>
          <tr>
            <td>Show-cause notice, your reply and hearing records</td>
            <td>Show whether a point was raised earlier or the order went beyond the notice</td>
          </tr>
          <tr>
            <td>Supporting evidence: invoices, returns, reconciliations, contracts, e-way bills</td>
            <td>Indexed and paginated as a paper book</td>
          </tr>
          <tr>
            <td>Authorisation for the representative and board resolution (for companies)</td>
            <td>Lets a Chartered Accountant or advocate appear under Section 116</td>
          </tr>
        </tbody>
      </table>
      <p>
        Fresh evidence that was not produced before the lower authorities is
        admitted only in limited situations, which is why a well-documented first
        appeal matters so much. The appeal provisions are in Sections 112 to 118
        of the{" "}
        <a href="https://cbic-gst.gov.in/gst-acts.html" target="_blank" rel="noopener noreferrer">
          CGST Act on cbic-gst.gov.in
        </a>
        .
      </p>

      <h2>Which Tamil Nadu bench will hear the appeal?</h2>
      <p>
        The GSTAT website lists State Benches for Tamil Nadu at Chennai,
        Coimbatore and Madurai, with Puducherry served by a circuit bench.
        Disputes involving place of supply go to the Principal Bench in New
        Delhi. The e-filing portal assigns the bench when you file, so confirm
        the bench and its address on the{" "}
        <a href="https://gstat.gov.in/state-bench" target="_blank" rel="noopener noreferrer">
          GSTAT state bench page
        </a>{" "}
        and in your acknowledgement.
      </p>
      <p>
        According to GSTAT Office Order No. 4/GSTAT/PB/2026 dated 29 July 2026,
        as reported, the roster from 1 August 2026 is: Chennai hears Category I
        matters (classification, ITC, refunds, valuation and assessment) on
        Mondays and Tuesdays and Category II matters (registration, Section 73
        and 74 proceedings, penalties and residual matters) on Wednesdays;
        Coimbatore hears both categories on Thursdays; Madurai on the first,
        second and third Fridays; and the Puducherry circuit bench on the fourth
        and fifth Fridays. Rosters change by office order, so check the current
        cause list before every hearing.
      </p>
      <p>
        Businesses in western Tamil Nadu will often find their matter before the
        Coimbatore bench; see our pages on{" "}
        <Link href="/gst-litigation-coimbatore">GST litigation in Coimbatore</Link>{" "}
        and{" "}
        <Link href="/gst-litigation-madurai">GST litigation in Madurai</Link>{" "}
        for the disputes typical of each region.
      </p>

      <h2>What happens after the GSTAT order?</h2>
      <p>
        If the Tribunal allows the appeal, apply for refund of the pre-deposit
        and check that the portal reflects the reduced demand. If it remands the
        matter, the adjudicating officer decides again on the directions given.
        If it rules against you, an order of a State Bench can be appealed to
        the Madras High Court under Section 117 within 180 days, but only where
        the case involves a substantial question of law. Principal Bench orders
        go to the Supreme Court under Section 118. Factual findings are
        effectively final at the Tribunal, so the Tribunal stage is where the
        facts must be fully presented.
      </p>

      <h2>What should you prepare before filing?</h2>
      <ul>
        <li>Diarise the communication date of the appellate order and work back from the three-month deadline.</li>
        <li>Budget the pre-deposit head by head, and pay it early enough that the ledger debit is available when you file.</li>
        <li>Rebuild the grounds rather than copying the first appeal: answer the appellate order&apos;s actual reasoning.</li>
        <li>Prepare an indexed paper book, and list any document that the lower authorities ignored.</li>
        <li>Keep filing regular returns; a pending appeal does not pause ongoing compliance.</li>
      </ul>
      <p>
        For the full appeal ladder, notices and documents in one place, see our{" "}
        <Link href="/gst-litigation-chennai">GST litigation and GSTAT appeals page</Link>
        , or <Link href="/contact">contact our Anna Nagar office</Link> to discuss
        where your matter stands.
      </p>
    </>
  );
}
