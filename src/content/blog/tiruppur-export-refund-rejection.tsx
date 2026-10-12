import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "tiruppur-export-refund-rejection",
  title: "Export Refund Rejected? A Guide for Tiruppur Exporters",
  description:
    "Why IGST and LUT export refunds of Tiruppur knitwear exporters are held or rejected: shipping bill mismatches, ICEGATE errors, RFD-03 memos and appeal routes.",
  date: "2026-10-12",
  excerpt:
    "Shipping bill mismatches, ICEGATE error codes, inverted duty formula cuts and deficiency memos: the usual reasons Tiruppur export refunds stall, and how each is fixed.",
  faqs: [
    {
      question: "Why is our IGST refund on exports not credited?",
      answer:
        "Usually because the shipping bill could not be matched with your GST return. Customs validates the invoice number, date, value and IGST in GSTR-1 Table 6A against the shipping bill, and also needs the EGM filed and GSTR-3B paid. The ICEGATE response code tells you which check failed and where the correction must be made.",
    },
    {
      question: "What is a deficiency memo in Form RFD-03?",
      answer:
        "It is a notice that your refund application is incomplete or has errors, issued instead of an acknowledgement. You must file a fresh, corrected application rather than reply to the memo. The period between the first filing and the memo is generally excluded when computing the two-year refund time limit, but file the fresh claim promptly.",
    },
    {
      question: "Do all exporters get a 90% provisional refund?",
      answer:
        "No. From 1 October 2025, the 90% provisional refund under Rule 91 depends on the system's risk evaluation of each claim. Claims not marked low risk go to detailed scrutiny, the officer can withhold provisional refund for recorded reasons, and certain categories of taxpayers are excluded. The balance is decided in the final order.",
    },
    {
      question: "Can we appeal against a refund rejection order?",
      answer:
        "Yes. An RFD-06 order rejecting or reducing a refund can be appealed in Form APL-01 within three months of communication, extendable by one month for sufficient cause. Because a refund rejection usually involves no tax demand, the 10% pre-deposit on disputed tax generally does not arise. A second appeal lies to GSTAT.",
    },
    {
      question: "Why are input services excluded from our inverted duty refund?",
      answer:
        "Rule 89(5) of the CGST Rules counts only input goods in the net ITC used for inverted duty refunds, and the Supreme Court upheld this in VKC Footsteps (2021). Credit on job work charges, freight and other services therefore does not enter the formula, which often explains why the refund granted is lower than the claim.",
    },
    {
      question: "Is interest payable if our refund is delayed?",
      answer:
        "Yes. Under Section 56 of the CGST Act, interest is payable if a refund is not paid within 60 days of the date the complete application was received. The rate is set by notification. Where the refund follows an appellate order in your favour, interest is computed from the date of the original application.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        For Tiruppur&apos;s knitwear exporters, GST rarely bites as a tax demand.
        It bites as money stuck in a refund: IGST paid on export shipments that
        never reaches the bank, a refund of unutilised credit under a Letter of
        Undertaking (LUT) cut down by the officer, or an inverted duty claim
        reduced by the formula. This guide sets out why these refunds stall, how
        each problem is corrected, and the route if the claim is finally
        rejected.
      </p>

      <h2>Why do export refunds get rejected or held?</h2>
      <p>
        Most export refunds stall for one of four reasons: the shipping bill does
        not match the invoice reported in GSTR-1, a customs-side step such as the
        EGM is missing, the refund formula was applied incorrectly, or the
        application was incomplete and drew a deficiency memo in Form RFD-03.
        Each has a specific fix, and identifying which one applies is the first
        step.
      </p>

      <h2>How do the two export refund routes work?</h2>
      <p>
        An exporter of goods can either pay IGST on the shipment and claim it
        back, or export under an LUT without paying tax and claim refund of the
        input tax credit that builds up. Many Tiruppur exporters use both at
        different times, and the problems are different.
      </p>
      <table>
        <thead>
          <tr>
            <th>Point</th>
            <th>Export with IGST paid</th>
            <th>Export under LUT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>What is refunded</td>
            <td>The IGST paid on the export invoice</td>
            <td>Unutilised input tax credit</td>
          </tr>
          <tr>
            <td>How the claim is made</td>
            <td>The shipping bill is treated as the refund application under Rule 96, once the EGM and GSTR-3B are filed</td>
            <td>Form RFD-01 on the GST portal, with the Rule 89(4) computation and statements</td>
          </tr>
          <tr>
            <td>Who processes it</td>
            <td>Customs, through ICEGATE, after GST data is transmitted</td>
            <td>The GST proper officer (central or state, as assigned)</td>
          </tr>
          <tr>
            <td>Typical problem</td>
            <td>Data mismatch between GSTR-1 Table 6A and the shipping bill</td>
            <td>Turnover or credit figures questioned; deficiency memo or RFD-08 notice</td>
          </tr>
        </tbody>
      </table>
      <p>
        Filing the LUT itself is covered in our guide to{" "}
        <Link href="/blog/lut-for-exporters">LUT for exporters</Link>. This post
        deals with what happens after the export, when the refund is claimed.
      </p>

      <h2>What are the common rejection reasons and fixes?</h2>
      <table>
        <thead>
          <tr>
            <th>Rejection or hold reason</th>
            <th>What it means</th>
            <th>How to fix it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Invoice mismatch (ICEGATE code SB005)</td>
            <td>Invoice number or date on the shipping bill differs from GSTR-1</td>
            <td>Amend the invoice details in GSTR-1 Table 9A to match the shipping bill, so the record is retransmitted</td>
          </tr>
          <tr>
            <td>Invalid shipping bill details (SB001)</td>
            <td>Shipping bill number, date or port code in GSTR-1 does not match customs records</td>
            <td>Correct the shipping bill details through a Table 9A amendment</td>
          </tr>
          <tr>
            <td>EGM not filed (SB002) or gateway EGM missing (SB006)</td>
            <td>The export general manifest has not reached the customs system</td>
            <td>Ask the shipping line or carrier to file or correct the EGM, and follow up with the port customs</td>
          </tr>
          <tr>
            <td>GSTIN mismatch (SB003)</td>
            <td>The GSTIN on the shipping bill differs from the one filing GSTR-1</td>
            <td>Approach the customs officer at the port of export; the fix depends on which record is wrong</td>
          </tr>
          <tr>
            <td>IGST in GSTR-3B lower than in Table 6A</td>
            <td>The IGST claimed exceeds the tax actually paid in the return</td>
            <td>Pay the shortfall in a later GSTR-3B and reconcile, so the refund can be released</td>
          </tr>
          <tr>
            <td>Bank account not validated</td>
            <td>The refund cannot be paid to an account not validated on ICEGATE and PFMS</td>
            <td>Register and validate the account on ICEGATE</td>
          </tr>
          <tr>
            <td>Higher-rate duty drawback claimed</td>
            <td>Drawback that includes the central tax component conflicts with an IGST or ITC refund on the same export</td>
            <td>Check the drawback rate claimed; where it overlaps, the refund may not be available for that shipment</td>
          </tr>
          <tr>
            <td>Inverted duty formula reduced</td>
            <td>Input services or same-rate inputs counted in the Rule 89(5) claim</td>
            <td>Recompute rate by rate with input goods only, and support each figure with invoices</td>
          </tr>
          <tr>
            <td>Deficiency memo (RFD-03)</td>
            <td>Missing statements, wrong turnover figures or unsupported credit</td>
            <td>File a fresh, corrected RFD-01 promptly; do not just reply to the memo</td>
          </tr>
          <tr>
            <td>Show-cause notice (RFD-08)</td>
            <td>The officer proposes to reject or reduce the claim</td>
            <td>Reply in RFD-09 within the time stated, usually 15 days, answering each ground with documents</td>
          </tr>
        </tbody>
      </table>
      <p>
        The error codes come from the customs list of IGST refund responses; the
        ICEGATE portal shows the code against each shipping bill. Where an error
        sits on the customs side, a GST-side amendment will not fix it, which is
        why identifying the code comes before writing to anyone.
      </p>

      <h2>Why are inverted duty refunds often lower than claimed?</h2>
      <p>
        Garment units that buy fabric or yarn at a higher rate than the rate on
        the finished garment can claim refund of the accumulated credit under
        Section 54(3). The amount is restricted by the Rule 89(5) formula, which
        counts only credit on input goods. Job work charges for knitting, dyeing
        and printing, along with freight and other services, are left out. The
        Supreme Court upheld this exclusion in VKC Footsteps (2021), so arguments
        now focus on getting the goods-side figures right.
      </p>
      <p>
        GST rate changes from 22 September 2025 altered the rates on many textile
        inputs and garments. Whether a unit is in an inverted position, and by
        how much, can therefore differ before and after that date. Claims
        spanning both periods should be computed separately.
      </p>

      <h2>How does the 90% provisional refund work now?</h2>
      <p>
        Under Rule 91(2) of the CGST Rules, as amended by Notification
        13/2025-Central Tax with effect from 1 October 2025, the proper officer
        can grant 90% of a zero-rated refund claim provisionally in Form RFD-04
        within seven days of the acknowledgement, based on the system&apos;s
        identification and evaluation of risk. CBIC Instruction 06/2025-GST, as
        reported, extended the same approach to inverted duty claims as an
        interim measure, and the Finance Act, 2026 amends Section 54(6) to
        provide for it, from a date to be notified.
      </p>
      <p>
        The provisional refund is not automatic. Claims not marked low risk go to
        detailed scrutiny, the officer can withhold the provisional amount for
        reasons recorded in writing, and certain categories of registered
        persons are excluded. The remaining 10% is settled in the final order,
        and that order can still reduce the claim.
      </p>

      <h2>What is the timeline from claim to appeal?</h2>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Time limit</th>
            <th>Form</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Refund application (LUT or inverted duty)</td>
            <td>Within 2 years of the relevant date, such as the date of export (Section 54(1))</td>
            <td>RFD-01</td>
          </tr>
          <tr>
            <td>Acknowledgement or deficiency memo</td>
            <td>Within 15 days of filing</td>
            <td>RFD-02 or RFD-03</td>
          </tr>
          <tr>
            <td>Provisional refund (where eligible)</td>
            <td>Within 7 days of acknowledgement</td>
            <td>RFD-04</td>
          </tr>
          <tr>
            <td>Show-cause notice and reply</td>
            <td>Reply within the time stated, usually 15 days</td>
            <td>RFD-08 and RFD-09</td>
          </tr>
          <tr>
            <td>Final order</td>
            <td>Within 60 days of a complete application; interest under Section 56 after that</td>
            <td>RFD-06</td>
          </tr>
          <tr>
            <td>First appeal</td>
            <td>3 months from communication of the order, plus up to 1 month</td>
            <td>APL-01</td>
          </tr>
          <tr>
            <td>Second appeal (GSTAT)</td>
            <td>3 months from the appellate order, plus up to 3 months</td>
            <td>APL-05</td>
          </tr>
        </tbody>
      </table>
      <p>
        The refund provisions are in Sections 54 and 56 of the{" "}
        <a href="https://cbic-gst.gov.in/gst-acts.html" target="_blank" rel="noopener noreferrer">
          CGST Act on cbic-gst.gov.in
        </a>
        , and the procedure in Rules 89 to 97 of the CGST Rules.
      </p>

      <h2>What if the refund is finally rejected?</h2>
      <p>
        An RFD-06 order that rejects or reduces the claim can be appealed in Form
        APL-01. Check first whether the order relies on grounds that were never
        put to you in the RFD-08 notice, because an order that goes beyond the
        notice is open to challenge on that ground alone. Since a refund
        rejection usually involves no tax demand, the 10% pre-deposit on
        disputed tax generally does not arise. If the first appeal fails, a
        second appeal lies to a Tamil Nadu State Bench of GSTAT; our guide on{" "}
        <Link href="/blog/gst-appellate-tribunal-gstat-explained">filing a GSTAT appeal in Tamil Nadu</Link>{" "}
        explains that stage.
      </p>
      <p>
        For the refund and notice disputes typical of the knitwear cluster, see
        our page on{" "}
        <Link href="/gst-litigation-tiruppur">GST litigation in Tiruppur</Link>
        . Exporters in neighbouring districts can see{" "}
        <Link href="/gst-litigation-coimbatore">GST litigation in Coimbatore</Link>
        , and the full appeal ladder is on our{" "}
        <Link href="/gst-litigation-chennai">GST litigation and GSTAT page</Link>
        . We work from our only office in Anna Nagar, Chennai, with filings made
        online; <Link href="/contact">contact us</Link> to discuss a held or
        rejected refund.
      </p>
    </>
  );
}
