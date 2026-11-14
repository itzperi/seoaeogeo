import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

// Sources (checked 14 Nov 2026):
// - CGST Act s.61 (CBIC tax information portal): (1) scrutiny, (2) no further
//   action if accepted, (3) 30 days "or such further period as may be permitted
//   by him"; action under ss.65/66/67 or 73/74, "or section 74A" inserted by
//   s.129 Finance (No. 2) Act, 2024. Ss.65, 66, 67 headings from the same portal.
// - CGST Rules r.99(1)-(3): ASMT-10 "within such time, not exceeding thirty days
//   from the date of service ... or such further period as may be permitted by
//   him"; ASMT-11; ASMT-12.
// - CBIC Instruction No. 02/2023-GST dated 26.05.2023 (SOP for FY 2019-20
//   onwards; FY 2017-18 and 2018-19 stay under Instruction 02/2022-GST):
//   DGARM selection, ACES-GST, single compiled ASMT-10 per FY, worksheets,
//   DRC-03 payments considered, timelines table in para 6.1.
// Keep consistent with /blog/drc-01a-gst-intimation and /blog/section-74a-gst-notice.
export const meta: BlogPostMeta = {
  slug: "asmt-10-gst-scrutiny-notice-reply",
  title: "ASMT-10 GST Scrutiny Notice: Time Limit and How to Reply",
  description:
    "ASMT-10 under Section 61 and Rule 99: the 30-day reply in ASMT-11, extensions, closure in ASMT-12, what follows if not accepted, and a reply checklist.",
  date: "2026-11-14",
  excerpt:
    "An ASMT-10 is the first formal question in a GST scrutiny. Here is the time limit for the ASMT-11 reply, how a case is closed in ASMT-12, and what happens if the officer is not satisfied.",
  summary:
    "Form ASMT-10 is a GST scrutiny notice under Section 61 of the CGST Act and Rule 99 of the CGST Rules. It lists discrepancies in your returns and seeks an explanation in Form ASMT-11 within the time stated, not exceeding 30 days, unless the officer allows more. An accepted reply ends in ASMT-12.",
  faqs: [
    {
      question: "What is the time limit to reply to an ASMT-10 notice?",
      answer:
        "Rule 99(1) of the CGST Rules says the notice seeks an explanation within such time, not exceeding thirty days from the date of service, or such further period as the proper officer may permit. Check the date stated in the notice itself, and if you need longer, ask for an extension in writing before that date expires.",
    },
    {
      question: "Can the time to reply to ASMT-10 be extended?",
      answer:
        "Yes. Both Section 61(3) and Rule 99(1) allow such further period as may be permitted by the proper officer. Neither sets a maximum extension, so it is at the officer's discretion. Ask before the original date, give a reason such as reconciliations in progress, and keep the request and any reply on record.",
    },
    {
      question: "What happens if I do not reply to ASMT-10?",
      answer:
        "Under Section 61(3), if no satisfactory explanation is furnished within 30 days or the extended period, the officer may start action including audit under Section 65 or 66, inspection under Section 67, or a demand under Section 73, 74 or 74A. CBIC's SOP expects central officers to start demand proceedings within 15 days after that period.",
    },
    {
      question: "What is Form ASMT-12?",
      answer:
        "ASMT-12 is the order closing a scrutiny. Under Rule 99(3), where the explanation or the information on payment is found acceptable, the proper officer informs the taxpayer in ASMT-12, and Section 61(2) says no further action is then taken on that matter. CBIC's SOP asks central officers to issue it within 30 days of the reply.",
    },
    {
      question: "Is ASMT-10 the same as a show cause notice?",
      answer:
        "No. ASMT-10 only informs you of discrepancies found in scrutiny and seeks an explanation. A show cause notice under Section 73, 74 or 74A, summarised in DRC-01, is a formal demand that leads to an order. A DRC-01A intimation, which is optional for the officer, may sit between the two.",
    },
    {
      question: "Should I pay the amount mentioned in ASMT-10?",
      answer:
        "Pay only what is genuinely due. Rule 99(2) lets you accept a discrepancy, pay the tax, interest and any other amount through DRC-03, and inform the officer in ASMT-11. For the rest, give an explanation with reconciliations. Paying the correct part early stops interest and can lead to closure in ASMT-12.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        An ASMT-10 on the GST portal means an officer has scrutinised your
        returns for a year and found figures that do not reconcile. It is not a
        demand yet. It is a request to explain, and a well-supported reply can
        close the matter with no tax, interest or penalty beyond what is
        genuinely due. A missed or vague reply tends to turn the same figures
        into a show cause notice. This post explains the law, the time limit
        and how to build the reply.
      </p>

      <h2>What is an ASMT-10 scrutiny notice?</h2>
      <p>
        Section 61 of the CGST Act allows the proper officer to scrutinise the
        return and related particulars to verify their correctness, inform the
        registered person of any discrepancies and seek an explanation. Rule 99
        of the CGST Rules sets the procedure: where a return is selected for
        scrutiny and a discrepancy is found, the officer issues a notice in Form
        ASMT-10, informing you of it, seeking your explanation and, where
        possible, quantifying the tax, interest and any other amount involved.
      </p>
      <p>
        The text is on CBIC&apos;s tax information portal:{" "}
        <a href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter12/section61_v1.00.html" target="_blank" rel="noopener noreferrer">
          Section 61
        </a>{" "}
        and{" "}
        <a href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter11/rule99_v1.00.html" target="_blank" rel="noopener noreferrer">
          Rule 99
        </a>
        . Section 61 itself sets no deadline for issuing an ASMT-10, but any
        demand that follows must still fall within the limits in Sections 73,
        74 or 74A for the year concerned.
      </p>

      <h2>What is the time limit to reply to ASMT-10, and can it be extended?</h2>
      <p>
        The reply is due within the time stated in the notice, which under Rule
        99(1) cannot exceed thirty days from the date of service, &quot;or such
        further period as may be permitted by him&quot;. Section 61(3) uses the
        same thirty days and the same extension wording. Neither sets a cap on
        the extension, so it is the officer&apos;s call. Ask in writing before
        the original date runs out.
      </p>
      <p>
        For Central Tax officers, CBIC&apos;s{" "}
        <a href="https://www.gstcouncil.gov.in/sites/default/files/2024-06/ins-gst-no-02-2023.pdf" target="_blank" rel="noopener noreferrer">
          Instruction No. 02/2023-GST
        </a>{" "}
        dated 26 May 2023 sets internal timelines for scrutiny of returns for
        FY 2019-20 onwards:
      </p>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Timeline in the SOP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reply in ASMT-11</td>
            <td>Within 30 days of ASMT-10, or a further period permitted by the officer</td>
          </tr>
          <tr>
            <td>ASMT-12 accepting the reply</td>
            <td>Within 30 days of receiving the ASMT-11 reply</td>
          </tr>
          <tr>
            <td>Demand proceedings under Section 73 or 74 where no reply is filed</td>
            <td>Within 15 days after the 30-day (or extended) period</td>
          </tr>
          <tr>
            <td>Demand proceedings where the reply is not accepted</td>
            <td>Within 30 days of receiving the reply</td>
          </tr>
          <tr>
            <td>Reference to audit or anti-evasion (Sections 65, 66 or 67)</td>
            <td>Within 30 days of the reply, or 45 days of ASMT-10 if no reply</td>
          </tr>
        </tbody>
      </table>
      <p>
        These are departmental timelines, not a limitation period that voids a
        late notice. They do show how quickly a silent ASMT-10 can turn into a
        demand. The SOP refers to Sections 73 and 74 because it predates Section
        74A; Section 61(3) now also names Section 74A.
      </p>

      <h2>How do officers select returns and frame the notice?</h2>
      <p>
        Under the CBIC SOP, the Directorate General of Analytics and Risk
        Management selects GSTINs for scrutiny on risk parameters, and the
        officer works through the scrutiny module on the ACES-GST application.
        The SOP asks officers to scrutinise all returns for the selected year
        and issue a single compiled ASMT-10, to make the discrepancies specific
        rather than vague, to upload worksheets, and to take DRC-03 payments
        already made into account. It also says there should normally be no
        need to seek documents from the taxpayer before ASMT-10 is issued.
      </p>
      <p>
        Instruction No. 02/2023-GST applies to Central Tax officers; returns for
        FY 2017-18 and 2018-19 stay under the earlier Instruction No.
        02/2022-GST. A Tamil Nadu business assigned to the state
        administration receives the same forms under the same Section 61 and
        Rule 99, and the reply points below apply either way.
      </p>

      <h2>What data does the officer compare before issuing ASMT-10?</h2>
      <p>
        The SOP says the officer may rely on the returns and statements you
        have filed and on data from sources such as DGARM, ADVAIT, GSTN and the
        e-way bill portal. It also cautions that the risk data on the dashboard
        is a snapshot and may change after later filings by you or your
        suppliers, so officers are told to use the latest data. In practice the
        discrepancies tend to come from comparisons like these:
      </p>
      <ul>
        <li>Outward supplies in GSTR-1 against tax paid in GSTR-3B for the same months.</li>
        <li>Input tax credit claimed in GSTR-3B against credit shown in GSTR-2B.</li>
        <li>Turnover and tax in the annual return against the monthly or quarterly returns.</li>
        <li>E-way bills generated against supplies declared in returns.</li>
      </ul>
      <p>
        If a supplier has filed or amended returns since the notice data was
        drawn, show the updated position. A difference that has since
        disappeared from the portal is often the quickest item to close.
      </p>

      <h2>What are your options when replying in ASMT-11?</h2>
      <p>
        Rule 99(2) gives you two routes, which can be combined issue by issue.
        You can accept a discrepancy, pay the tax, interest and any other amount
        arising from it, and inform the officer. Or you can furnish an
        explanation. Both go in Form ASMT-11 on the common portal.
      </p>
      <p>
        Accepting is not the end of it. Section 61(3) also allows action where a
        taxpayer accepts a discrepancy but fails to take the corrective measure
        in the return for the month in which it is accepted, and the SOP treats
        failure to pay accepted amounts the same way. If you accept, pay through
        DRC-03 and record the reference in ASMT-11.
      </p>

      <h2>When is the scrutiny closed in ASMT-12?</h2>
      <p>
        Under Rule 99(3), where the explanation or the information on payment
        is found acceptable, the officer informs you in Form ASMT-12. Section
        61(2) adds that no further action shall be taken in that regard. Keep
        the ASMT-12 with the year&apos;s file: it is your record that the issues
        in the ASMT-10 were closed at the scrutiny stage.
      </p>

      <h2>What happens if the explanation is not accepted?</h2>
      <p>
        Section 61(3) lets the officer initiate appropriate action including
        audit by tax authorities under Section 65, special audit under Section
        66, or inspection, search and seizure under Section 67, or proceed to
        determine the tax under Section 73 or 74, or Section 74A, inserted by
        the Finance (No. 2) Act, 2024.
      </p>
      <table>
        <thead>
          <tr>
            <th>Route after scrutiny</th>
            <th>Provision</th>
            <th>What it means for you</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Demand for FY 2017-18 to FY 2023-24</td>
            <td>Section 73 (non-fraud) or Section 74 (fraud, suppression)</td>
            <td>Show cause notice summarised in DRC-01; reply in DRC-06</td>
          </tr>
          <tr>
            <td>Demand for FY 2024-25 onwards</td>
            <td>Section 74A</td>
            <td>One provision with a 42-month notice window; reply in DRC-06</td>
          </tr>
          <tr>
            <td>Audit</td>
            <td>Section 65 or special audit under Section 66</td>
            <td>Wider examination of books and records for the period</td>
          </tr>
          <tr>
            <td>Investigation</td>
            <td>Section 67</td>
            <td>Inspection, search and seizure by the anti-evasion wing</td>
          </tr>
        </tbody>
      </table>
      <p>
        Before a notice, the officer may also send a DRC-01A intimation. Our
        posts on the{" "}
        <Link href="/blog/drc-01a-gst-intimation">DRC-01A intimation</Link> and
        the{" "}
        <Link href="/blog/section-74a-gst-notice">Section 74A GST notice</Link>{" "}
        cover those stages.
      </p>

      <h2>How should you reply to an ASMT-10, step by step?</h2>
      <ol>
        <li>
          <strong>Diarise the reply date.</strong> Note the date of service, the
          period stated and the financial year covered.
        </li>
        <li>
          <strong>Download the notice and worksheets.</strong> Map each
          discrepancy to its parameter and the officer&apos;s figure.
        </li>
        <li>
          <strong>Rebuild each figure from your records.</strong> Reconcile
          GSTR-1, GSTR-3B, GSTR-2B and GSTR-9 with the books for the year. Our
          guide to{" "}
          <Link href="/blog/itc-mismatch-notices">ITC mismatch notices</Link>{" "}
          covers the common credit differences.
        </li>
        <li>
          <strong>Split the amount.</strong> Separate what is genuinely payable
          from what is explained by amendments, credit notes, timing or the
          supplier&apos;s filing.
        </li>
        <li>
          <strong>Pay the accepted part through DRC-03.</strong> Pay tax with
          interest and keep the reference for the reply.
        </li>
        <li>
          <strong>Ask for more time if needed.</strong> Before the deadline, in
          writing, with a reason.
        </li>
        <li>
          <strong>File ASMT-11 on the portal.</strong> Answer issue by issue with
          numbered annexures, and keep the acknowledgement.
        </li>
        <li>
          <strong>Follow up.</strong> Watch for ASMT-12, a DRC-01A or a show cause
          notice, and act on whichever arrives.
        </li>
      </ol>

      <h2>What should an ASMT-11 reply checklist include?</h2>
      <ul>
        <li><strong>Header:</strong> legal name, GSTIN, ASMT-10 reference and date, financial year</li>
        <li><strong>Summary table:</strong> each discrepancy, the officer&apos;s figure, your figure and the reason for the difference</li>
        <li><strong>Reconciliations:</strong> GSTR-1 vs GSTR-3B, GSTR-2B vs GSTR-3B, and books vs returns, with the annual return figures</li>
        <li><strong>Evidence:</strong> invoices, credit notes, ledgers, e-way bills or supplier confirmations for each item</li>
        <li><strong>Payments:</strong> DRC-03 references, dates and amounts mapped to the issues accepted</li>
        <li><strong>Corrective action:</strong> where a discrepancy is accepted, the return in which it has been corrected</li>
        <li><strong>Points of law:</strong> any discrepancy the notice does not specify, or a figure with no worksheet behind it</li>
        <li><strong>Request:</strong> that the explanation be accepted and the proceedings closed in ASMT-12</li>
      </ul>

      <h2>How is ASMT-10 different from DRC-01A and DRC-01?</h2>
      <table>
        <thead>
          <tr>
            <th>Point</th>
            <th>ASMT-10</th>
            <th>DRC-01A</th>
            <th>DRC-01</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Legal basis</td>
            <td>Section 61; Rule 99</td>
            <td>Rule 142(1A)</td>
            <td>Section 73, 74 or 74A; Rule 142(1)</td>
          </tr>
          <tr>
            <td>Nature</td>
            <td>Discrepancies found in scrutiny of returns</td>
            <td>Optional intimation of an amount before a notice</td>
            <td>Summary of a show cause notice demanding tax</td>
          </tr>
          <tr>
            <td>Your response</td>
            <td>Explanation or payment in ASMT-11</td>
            <td>DRC-03 payment and/or reply in Part B</td>
            <td>Reply in DRC-06, with a hearing request</td>
          </tr>
          <tr>
            <td>Closed by</td>
            <td>ASMT-12</td>
            <td>Part C accepting payment or submissions</td>
            <td>Order in DRC-07, or DRC-05 after payment</td>
          </tr>
          <tr>
            <td>If unresolved</td>
            <td>Audit, investigation or a demand</td>
            <td>Show cause notice</td>
            <td>Order, then appeal</td>
          </tr>
        </tbody>
      </table>
      <p>
        Each stage narrows the room to correct figures informally. If an
        adverse order follows, the appeal stages are set out on our{" "}
        <Link href="/gst-litigation-chennai">GST litigation page</Link>, and
        routine return work is covered under{" "}
        <Link href="/goods-and-services-tax">goods and services tax</Link>. For
        the first steps once a show cause notice arrives, see{" "}
        <Link href="/blog/gst-show-cause-notice-first-48-hours">what to do in the first 48 hours</Link>
        . C S Rushil &amp; Co. prepares ASMT-11 replies and the reconciliations
        behind them from Anna Nagar, Chennai, and online, as part of its{" "}
        <Link href="/gst-notice-reply-chennai">GST notice reply service</Link>.
      </p>
    </>
  );
}
