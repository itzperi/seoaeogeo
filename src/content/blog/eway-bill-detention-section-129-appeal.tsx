import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "eway-bill-detention-section-129-appeal",
  title: "E-Way Bill Detention Under Section 129: Release and Appeal",
  description:
    "Goods detained under Section 129 in Tamil Nadu: the MOV forms, current penalty amounts, paying for release vs contesting, and the appeal with a 10% pre-deposit.",
  date: "2026-10-12",
  updated: "2026-11-14",
  excerpt:
    "A vehicle stopped for an e-way bill lapse: what each MOV form means, how the Section 129 penalty is worked out, whether to pay or contest, and how to appeal.",
  faqs: [
    {
      question: "What is the penalty for goods detained under Section 129?",
      answer:
        "If the owner of the goods comes forward, the penalty is 200% of the tax payable. If not, it is the higher of 50% of the value of the goods or 200% of the tax. For exempt goods, it is 2% of value or Rs 25,000, whichever is less, rising to 5% where the owner does not come forward.",
    },
    {
      question: "How quickly must the officer pass the penalty order?",
      answer:
        "Section 129(3) requires a notice within seven days of detention and an order within seven days of service of that notice. An order passed after these limits can be challenged on that ground in the appeal, so record the dates of the MOV-06, MOV-07 and MOV-09 forms carefully.",
    },
    {
      question: "If we pay the penalty to release the goods, can we still appeal?",
      answer:
        "Yes. Courts have held that paying under Section 129 to secure release does not take away the right to appeal under Section 107. Pay under written protest, and insist on a formal order in Form MOV-09 with its summary in DRC-07, because the appeal on the GST portal is filed against that order.",
    },
    {
      question: "What pre-deposit is needed to appeal a Section 129 order?",
      answer:
        "From 1 October 2025, the first appeal needs a pre-deposit of 10% of the penalty, replacing the earlier 25%, and a GSTAT appeal a further 10%. For penalty-only orders under Section 122(1A), the Delhi High Court held the new proviso does not govern notices issued before that date; whether that extends to Section 129 orders is unsettled.",
    },
    {
      question: "Is every e-way bill mistake a ground for detention?",
      answer:
        "No. CBIC Circular 64/38/2018-GST says minor errors, such as a spelling mistake in a name with the correct GSTIN, a wrong PIN code with the correct address, or one or two wrong digits in the document or vehicle number, should attract only a Section 125 penalty of Rs 500 each under the CGST and SGST Acts.",
    },
    {
      question: "What if our goods are detained outside Tamil Nadu?",
      answer:
        "The detention, penalty order and first appeal are handled by the authorities of the state where the vehicle was stopped, such as Karnataka for a Hosur shipment held near Bengaluru. Documents and drafts can be prepared remotely, but in-person hearings there may be better attended by a representative based in that state.",
    },
  ],
  summary:
    "When goods are detained under Section 129 for a breach such as no valid e-way bill, they are released on paying the penalty or giving security. The officer must issue notice in Form MOV-07 within seven days of detention and pass the order in MOV-09 within seven days of that notice. The order can be appealed with a 10% pre-deposit.",
};

export default function Body() {
  return (
    <>
      <p>
        For a Salem lorry operator or a Hosur manufacturer, a vehicle stopped
        for an e-way bill problem is an urgent cost: goods sitting at a check
        point, a customer waiting and a penalty demanded before release. Section
        129 of the CGST Act gives officers wide powers, but it also sets strict
        timelines and a defined penalty. This guide covers what happens from
        interception to appeal, and how to decide between paying and
        contesting.
      </p>

      <h2>What happens when goods are detained under Section 129?</h2>
      <p>
        When goods are moved in breach of the GST law, for example without a
        valid e-way bill, the officer can detain the goods and vehicle under
        Section 129. They are released when the penalty is paid or security is
        given. The officer must issue a notice in Form MOV-07 within seven days
        of detention and pass the order in MOV-09 within seven days of that
        notice. The order can be appealed with a 10% pre-deposit.
      </p>

      <h2>What is the MOV form sequence after a vehicle is stopped?</h2>
      <p>
        The usual order is MOV-01 (statement), MOV-02 (inspection order),
        MOV-04 (verification report), then either MOV-05 (release, if nothing
        is wrong) or MOV-06 (detention), MOV-07 (penalty notice) and MOV-09
        (penalty order). Goods are released by MOV-05 once the penalty is paid
        or a MOV-08 bond and security are given.
      </p>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Form and official title</th>
            <th>Legal basis</th>
            <th>Time limit</th>
            <th>What to do</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Interception</td>
            <td>MOV-01: Statement of the owner, driver or person in charge of the goods and conveyance</td>
            <td>Section 68(3); Circular 41/15/2018-GST, para 2(d)</td>
            <td>At interception</td>
            <td>Read the statement before signing; note any disagreement in writing</td>
          </tr>
          <tr>
            <td>2. Inspection order</td>
            <td>MOV-02: Order for physical verification or inspection of the conveyance, goods and documents</td>
            <td>Rule 138B; Circular 41/15/2018-GST, para 2(d)</td>
            <td>Officer records a summary in Part A of EWB-03 within 24 hours</td>
            <td>Take the vehicle to the place named in the order and ask for a copy</td>
          </tr>
          <tr>
            <td>3. Extension, if any</td>
            <td>MOV-03: Order of extension of time for inspection beyond three working days</td>
            <td>Circular 41/15/2018-GST, para 2(e)</td>
            <td>Inspection should end within 3 working days of MOV-02 unless extended in writing</td>
            <td>Check that any extension was approved and served on you</td>
          </tr>
          <tr>
            <td>4. Verification report</td>
            <td>MOV-04: Physical verification report</td>
            <td>Rule 138C; Circular 41/15/2018-GST, para 2(f)</td>
            <td>Final report in Part B of EWB-03 within 3 days of the inspection</td>
            <td>Compare the quantities and descriptions with the invoice; photograph goods and documents</td>
          </tr>
          <tr>
            <td>5a. Nothing wrong</td>
            <td>MOV-05: Release order</td>
            <td>Circular 41/15/2018-GST, para 2(g)</td>
            <td>Forthwith</td>
            <td>Collect the release order before moving the vehicle</td>
          </tr>
          <tr>
            <td>5b. Detention</td>
            <td>MOV-06: Order of detention under Section 129(1)</td>
            <td>Section 129(1), proviso</td>
            <td>Must be served before goods or vehicle are detained</td>
            <td>Note the date: the seven-day clock for the notice runs from here</td>
          </tr>
          <tr>
            <td>6. Penalty notice</td>
            <td>MOV-07: Notice under Section 129(3), with a summary in DRC-01</td>
            <td>Section 129(3); Rule 142(1)</td>
            <td>Within 7 days of detention</td>
            <td>Reply in writing with documents and ask for a hearing (Section 129(4))</td>
          </tr>
          <tr>
            <td>7. Provisional release (optional)</td>
            <td>MOV-08: Bond for provisional release of goods and conveyance, with security such as a bank guarantee</td>
            <td>Section 129(1)(c); Circular 41/15/2018-GST, para 2(i)</td>
            <td>Any time before payment, if you choose this route</td>
            <td>Lets the goods move while you contest the penalty</td>
          </tr>
          <tr>
            <td>8. Penalty order</td>
            <td>MOV-09: Order of demand of tax and penalty, with a summary in DRC-07</td>
            <td>Section 129(3); Rule 142(5)</td>
            <td>Within 7 days of service of MOV-07</td>
            <td>Check the date and the reasons; the appeal lies against this order</td>
          </tr>
          <tr>
            <td>9. Release</td>
            <td>MOV-05: Release order</td>
            <td>Circular 41/15/2018-GST, paras 2(h) to 2(j)</td>
            <td>On payment of the penalty, or on the MOV-08 bond and security</td>
            <td>Keep the release order with the payment proof</td>
          </tr>
          <tr>
            <td>10. Penalty unpaid</td>
            <td>Sale by auction, with notice in DRC-10</td>
            <td>Section 129(6); Rule 144A</td>
            <td>If the penalty is not paid within 15 days of receiving the MOV-09 order</td>
            <td>File the appeal in time: Rule 144A stays the sale once an appeal is filed, except for perishable or hazardous goods</td>
          </tr>
        </tbody>
      </table>
      <p>
        The MOV forms and their sequence are set out in{" "}
        <a href="https://cbic-gst.gov.in/pdf/circularno-41-cgst.pdf" target="_blank" rel="noopener noreferrer">
          CBIC Circular 41/15/2018-GST
        </a>
        , read with Rules 138B and 138C of the CGST Rules. The form titles date
        from 2018 and still say &quot;tax and penalty&quot;; since 1 January
        2022, Section 129 demands a penalty only. If you pay within seven days
        of the MOV-07 notice and before the order, the payment is made through
        DRC-03 and the officer closes the case in DRC-05 under{" "}
        <a
          href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter18/rule142_v1.00.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rule 142(3)
        </a>
        . MOV-10 and MOV-11 are the confiscation forms under Section 130, which
        the circular reserves for cases where the officer believes the movement
        was meant to evade tax. Shorter periods apply to perishable goods.
      </p>

      <h2>How is the Section 129 penalty calculated?</h2>
      <p>
        The penalty depends on whether the owner of the goods comes forward:
        200% of the tax if the owner does, and the higher of 50% of the value or
        200% of the tax if not, with lower capped amounts for exempt goods.
        These amounts were set by the Finance Act, 2021 with effect from 1
        January 2022, which also removed the separate tax demand at detention.
      </p>
      <p>
        The current text of Section 129 on{" "}
        <a
          href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter19/section129_v1.00.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          CBIC&apos;s tax information portal
        </a>{" "}
        records the amendments of 1 January 2022 (Notification No.
        39/2021-Central Tax) and no later change to these amounts. The Act
        itself is also on{" "}
        <a href="https://cbic-gst.gov.in/gst-acts.html" target="_blank" rel="noopener noreferrer">
          cbic-gst.gov.in
        </a>
        .
      </p>
      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>Taxable goods</th>
            <th>Exempt goods</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Owner of the goods comes forward to pay (Section 129(1)(a))</td>
            <td>200% of the tax payable</td>
            <td>2% of the value of goods or Rs 25,000, whichever is less</td>
          </tr>
          <tr>
            <td>Owner does not come forward (Section 129(1)(b))</td>
            <td>The higher of 50% of the value of goods or 200% of the tax payable</td>
            <td>5% of the value of goods or Rs 25,000, whichever is less</td>
          </tr>
          <tr>
            <td>Security instead of payment (Section 129(1)(c))</td>
            <td colSpan={2}>Security equal to the amount payable under (a) or (b), in the form prescribed</td>
          </tr>
          <tr>
            <td>Release of the vehicle alone</td>
            <td colSpan={2}>The conveyance is released on payment by the transporter of the penalty or Rs 1 lakh, whichever is less</td>
          </tr>
        </tbody>
      </table>
      <p>
        To see what the difference means: on goods worth Rs 1,00,000 taxed at
        18%, the tax is Rs 18,000. If the owner comes forward, the penalty is
        Rs 36,000. If the owner does not, it is the higher of Rs 50,000 and
        Rs 36,000, so Rs 50,000. For a transporter carrying a third party&apos;s
        goods, getting the owner to come forward can make a real difference.
      </p>

      <h2>Should you pay for release or contest the detention?</h2>
      <p>
        Most businesses need the goods moving quickly, so the real choice is
        not whether to pay but how. Section 129(5) treats the proceedings as
        concluded once the amount is paid, which officers sometimes read as
        ending the matter. Courts have held otherwise: payment to secure release
        does not take away the right of appeal, and the officer must still pass
        a formal MOV-09 order.
      </p>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>When it suits</th>
            <th>What to watch</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pay under protest</td>
            <td>Urgent delivery, modest penalty, but the lapse was clerical or there was no intent to evade</td>
            <td>Write &quot;paid under protest&quot; in a letter, keep the DRC-03 or payment proof, and insist on MOV-09</td>
          </tr>
          <tr>
            <td>Furnish security (MOV-08)</td>
            <td>Large penalty, strong case, and you can arrange a bank guarantee</td>
            <td>Courts have restrained encashment where an appeal is pending, but follow up actively</td>
          </tr>
          <tr>
            <td>Contest without release</td>
            <td>Rarely practical; only where goods are not urgent and the detention is clearly unlawful</td>
            <td>The 15-day period after the order, after which the goods can be auctioned under Section 129(6) unless an appeal is filed</td>
          </tr>
          <tr>
            <td>Pay and accept</td>
            <td>The contravention is real and the amount is small</td>
            <td>Fix the underlying process so it does not recur</td>
          </tr>
        </tbody>
      </table>

      <h2>Which lapses lead to detention, and which should not?</h2>
      <p>
        Common triggers are an expired e-way bill (validity is generally one day
        for every 200 km), a vehicle number not updated in Part B after
        transhipment, goods or quantity that differ from the invoice, or no
        e-way bill at all. For Hosur units, inter-state movements to job workers
        need an e-way bill regardless of value, and missing ones are a frequent
        cause of detention near the Karnataka border.
      </p>
      <p>
        Not every slip justifies Section 129.{" "}
        <a href="https://cbic-gst.gov.in/pdf/Circular_64_38_Eway_Bill.pdf" target="_blank" rel="noopener noreferrer">
          CBIC Circular 64/38/2018-GST
        </a>{" "}
        says that where an invoice and an e-way bill accompany the goods,
        Section 129 proceedings may not be started for these errors:
      </p>
      <ul>
        <li>a spelling mistake in the consignor&apos;s or consignee&apos;s name, where the GSTIN is correct;</li>
        <li>a wrong PIN code with the correct address, as long as the error does not lengthen the e-way bill&apos;s validity;</li>
        <li>an error in the consignee&apos;s address where the locality and other details are correct;</li>
        <li>an error in one or two digits of the document number;</li>
        <li>an error at the 4 or 6-digit HSN level where the first 2 digits and the tax rate are correct;</li>
        <li>an error in one or two digits or characters of the vehicle number.</li>
      </ul>
      <p>
        For these, the circular directs a penalty of Rs 500 each under Section
        125 of the CGST Act and the State GST Act (Rs 1,000 under the IGST Act)
        per consignment, in DRC-07. Courts have also set aside detentions where
        the e-way bill had expired but the documents were genuine and there was
        no intent to evade tax. These are arguments for the MOV-07 reply and
        the appeal.
      </p>

      <h2>How do you appeal a Section 129 order?</h2>
      <p>
        You file Form APL-01 on the GST portal against the MOV-09 order and its
        DRC-07 summary, within three months of the order being communicated,
        with a pre-deposit of 10% of the penalty. If the first appeal fails, a
        second appeal lies to the GST Appellate Tribunal within three months,
        with a further 10% of the penalty.
      </p>
      <ol>
        <li>
          <strong>Check the dates.</strong> Was MOV-07 issued within seven days
          of MOV-06, and MOV-09 within seven days of MOV-07? A late order is a
          strong ground.
        </li>
        <li>
          <strong>Get the order on the portal.</strong> The appeal in Form APL-01
          is filed against the MOV-09 order and its DRC-07 summary. If only a
          paper order was given, ask for it to be uploaded.
        </li>
        <li>
          <strong>Pay the pre-deposit.</strong> For orders under the current
          law, 10% of the penalty. The earlier rate was 25%, and the Delhi High
          Court has held that the 10% rule does not apply where the notice was
          issued before 1 October 2025. If you already paid the full penalty for
          release, that payment is relevant to the pre-deposit.
        </li>
        <li>
          <strong>File within three months.</strong> The first appeal must be
          filed within three months of communication of the order, with up to
          one more month for sufficient cause.
        </li>
        <li>
          <strong>Argue the substance.</strong> Show the invoice, the tax
          charged and paid, the reason for the lapse and why there was no intent
          to evade.
        </li>
        <li>
          <strong>Second appeal if needed.</strong> A GSTAT appeal lies within
          three months of the appellate order, with a further 10% of the
          penalty. Our guide on{" "}
          <Link href="/blog/gst-appellate-tribunal-gstat-explained">filing a GSTAT appeal in Tamil Nadu</Link>{" "}
          covers that stage.
        </li>
      </ol>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Form</th>
            <th>Time limit</th>
            <th>Pre-deposit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First appeal (Section 107)</td>
            <td>APL-01 on the GST portal</td>
            <td>3 months from communication of the MOV-09 order, plus up to 1 month for sufficient cause</td>
            <td>10% of the penalty (Section 107(6), proviso, from 1 October 2025)</td>
          </tr>
          <tr>
            <td>Second appeal (Section 112)</td>
            <td>APL-05 on the GSTAT e-filing portal</td>
            <td>3 months from communication of the appellate order, plus up to 3 months for sufficient cause</td>
            <td>A further 10% of the penalty (Section 112(8), proviso)</td>
          </tr>
        </tbody>
      </table>
      <p>
        Source: Sections 107 and 112 of the CGST Act as amended, on CBIC&apos;s
        tax information portal. The Appellate Authority is to decide an appeal
        within one year of filing where it is possible to do so (Section
        107(13)). The full appeal ladder, with the pre-deposit caps, is on our{" "}
        <Link href="/gst-litigation-chennai">GST litigation and GSTAT page</Link>
        .
      </p>

      <h2>What should transporters and consignors do now?</h2>
      <ul>
        <li>Keep a copy of the invoice and e-way bill in every vehicle, and check validity before long hauls.</li>
        <li>Update Part B every time goods change vehicle; this is a common lapse at Salem transhipment points.</li>
        <li>Agree with consignors, in writing, who will come forward as owner if a consignment is detained.</li>
        <li>Diarise the seven-day and 15-day periods the moment a MOV-06 is issued.</li>
      </ul>
      <p>
        To check the last date for an appeal against the order and the pre-deposit it needs, use our free{" "}
        <Link href="/tools/gst-appeal-deadline-pre-deposit-calculator">GST appeal deadline and pre-deposit calculator</Link>.
        If you are still at the MOV-07 stage and need a written reply, see our{" "}
        <Link href="/gst-notice-reply-chennai">GST notice reply service in Chennai</Link>.
      </p>
      <p>
        For the disputes typical of each area, see our pages on{" "}
        <Link href="/gst-litigation-salem">GST litigation in Salem</Link> and{" "}
        <Link href="/gst-litigation-hosur">GST litigation in Hosur</Link>, and the
        full appeal ladder on the{" "}
        <Link href="/gst-litigation-chennai">GST litigation and GSTAT page</Link>
        . We work from our only office in Anna Nagar, Chennai, and file replies
        and appeals online; <Link href="/contact">contact us</Link> to discuss a
        detention.
      </p>
    </>
  );
}
