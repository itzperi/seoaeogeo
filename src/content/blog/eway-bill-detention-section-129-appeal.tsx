import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "eway-bill-detention-section-129-appeal",
  title: "E-Way Bill Detention Under Section 129: Release and Appeal",
  description:
    "Goods detained under Section 129 in Tamil Nadu: the MOV forms, current penalty amounts, paying for release vs contesting, and the appeal with a 10% pre-deposit.",
  date: "2026-10-12",
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
        "Section 129(3) requires a notice within seven days of detention and an order within seven days of service of that notice. Several High Courts and a GSTAT bench have treated these timelines as mandatory and set aside late MOV-09 orders, so note the dates of the MOV-06, MOV-07 and MOV-09 forms carefully.",
    },
    {
      question: "If we pay the penalty to release the goods, can we still appeal?",
      answer:
        "Yes. Courts have held that paying under Section 129 to secure release does not take away the right to appeal under Section 107. Pay under written protest, and insist on a formal order in Form MOV-09 with its summary in DRC-07, because the appeal on the GST portal is filed against that order.",
    },
    {
      question: "What pre-deposit is needed to appeal a Section 129 order?",
      answer:
        "From 1 October 2025, the first appeal needs a pre-deposit of 10% of the penalty, replacing the earlier 25%, and a GSTAT appeal a further 10%. The Delhi High Court has held the 10% rule does not apply where the notice was issued before that date. Confirm the current position for your dates before filing.",
    },
    {
      question: "Is every e-way bill mistake a ground for detention?",
      answer:
        "No. CBIC Circular 64/38/2018-GST says minor errors, such as a spelling mistake in a name, a wrong PIN code with the correct address, or one or two wrong digits in the vehicle or document number, should attract only a small general penalty under Section 125, not detention and Section 129 penalty.",
    },
    {
      question: "What if our goods are detained outside Tamil Nadu?",
      answer:
        "The detention, penalty order and first appeal are handled by the authorities of the state where the vehicle was stopped, such as Karnataka for a Hosur shipment held near Bengaluru. Documents and drafts can be prepared remotely, but in-person hearings there may be better attended by a representative based in that state.",
    },
  ],
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

      <h2>What do the MOV forms mean at each stage?</h2>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Form</th>
            <th>Time limit</th>
            <th>What to do</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Interception and statement</td>
            <td>MOV-01 (statement of the person in charge); MOV-02 (order for physical verification)</td>
            <td>On the spot</td>
            <td>Check the statement before signing; note any disagreement in writing</td>
          </tr>
          <tr>
            <td>Physical verification report</td>
            <td>MOV-04</td>
            <td>Inspection is normally to be completed within 3 working days, extendable by MOV-03</td>
            <td>Ask for a copy; photograph the goods and documents</td>
          </tr>
          <tr>
            <td>Release, if no discrepancy</td>
            <td>MOV-05</td>
            <td>After verification</td>
            <td>Collect the release order before moving the vehicle</td>
          </tr>
          <tr>
            <td>Detention order</td>
            <td>MOV-06</td>
            <td>When goods and vehicle are detained</td>
            <td>Note the date: the seven-day clock for the notice runs from here</td>
          </tr>
          <tr>
            <td>Notice proposing penalty</td>
            <td>MOV-07</td>
            <td>Within 7 days of detention</td>
            <td>Reply with documents explaining the lapse and ask for a hearing</td>
          </tr>
          <tr>
            <td>Security for provisional release</td>
            <td>MOV-08 (bond and security, such as a bank guarantee)</td>
            <td>Any time before the order, if you choose this route</td>
            <td>Lets you move the goods while contesting the penalty</td>
          </tr>
          <tr>
            <td>Penalty order</td>
            <td>MOV-09, with summary in DRC-07</td>
            <td>Within 7 days of service of MOV-07</td>
            <td>Check the date and the reasons; the appeal lies against this order</td>
          </tr>
          <tr>
            <td>If the penalty is not paid</td>
            <td>MOV-10 / MOV-11 (Section 130 proceedings)</td>
            <td>After 15 days from receipt of the MOV-09 order</td>
            <td>Goods and vehicle can be sold or disposed of, so do not let this period lapse</td>
          </tr>
        </tbody>
      </table>
      <p>
        The MOV forms are prescribed under Rule 138C and the related rules of
        the CGST Rules. Shorter periods apply to perishable goods.
      </p>

      <h2>How is the Section 129 penalty calculated?</h2>
      <p>
        The penalty structure was changed by the Finance Act, 2021 with effect
        from 1 January 2022, which also removed the separate tax demand at
        detention. We have not found a later amendment to these amounts, but
        check the current text of Section 129 in the{" "}
        <a href="https://cbic-gst.gov.in/gst-acts.html" target="_blank" rel="noopener noreferrer">
          CGST Act on cbic-gst.gov.in
        </a>{" "}
        before relying on them.
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
            <td>The 15-day period after the order and possible Section 130 proceedings</td>
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
        Not every slip justifies Section 129. CBIC Circular 64/38/2018-GST lists
        minor discrepancies, such as spelling mistakes, a wrong PIN code with a
        correct address, or one or two wrong digits in a document or vehicle
        number, that should attract only a small penalty under Section 125.
        Courts have also set aside detentions where the e-way bill had expired
        but the documents were genuine and there was no intent to evade tax.
        These are arguments for the MOV-07 reply and the appeal.
      </p>

      <h2>How do you appeal a Section 129 order?</h2>
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

      <h2>What should transporters and consignors do now?</h2>
      <ul>
        <li>Keep a copy of the invoice and e-way bill in every vehicle, and check validity before long hauls.</li>
        <li>Update Part B every time goods change vehicle; this is a common lapse at Salem transhipment points.</li>
        <li>Agree with consignors, in writing, who will come forward as owner if a consignment is detained.</li>
        <li>Diarise the seven-day and 15-day periods the moment a MOV-06 is issued.</li>
      </ul>
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
