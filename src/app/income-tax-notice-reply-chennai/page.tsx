import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import HighTicketSections from "@/components/HighTicketSections";
import { EnquireButton } from "@/components/WhatsAppEnquiry";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Income Tax Notice Reply Chennai | 143(1), 148A, Scrutiny" },
  description:
    "Income tax notice reply in Chennai: 143(1) intimation, 139(9) defective return, 142(1), 143(2) scrutiny, 148A reassessment, 245 and 270A. Served online.",
  alternates: { canonical: "/income-tax-notice-reply-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Income Tax Notice Reply & Scrutiny Assessment Support in Chennai",
    description: "Responses to income tax intimations, scrutiny notices, reassessment and demands, including faceless assessment.",
    url: "/income-tax-notice-reply-chennai",
  },
};

const LINK = "font-medium text-royal-violet underline underline-offset-2";
const H2 = "mt-14 text-2xl text-obsidian";
const P = "mt-4 max-w-3xl leading-relaxed text-slate";

function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="mt-6 max-w-5xl overflow-x-auto rounded-cards border border-ash">
      <table className="w-full text-left text-sm">
        <thead className="bg-carbon text-white">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ash bg-paper">
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j} className={`px-4 py-3 align-top ${j === 0 ? "font-medium text-obsidian" : "text-slate"}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/income-tax-notice-reply-chennai`}
      serviceType="Income Tax Notice Reply"
      crumbLabel="Income Tax Notice Reply"
      crumbHref="/income-tax-notice-reply-chennai"
      eyebrow="Income Tax Notices · Chennai"
      h1="Income Tax Notice Reply & Scrutiny Assessment Support in Chennai"
      subhead="Responses to income tax intimations, defective return notices, scrutiny and reassessment notices, outstanding demands, refund adjustments and AIS mismatch notices, filed through the e-filing portal for individuals, NRIs, firms and companies. Clients outside Chennai are served online."
      introHeading="What should you do when you receive an income tax notice?"
      intro="Confirm the notice is genuine using its DIN and your e-Proceedings or Pending Actions list on the income tax portal. Then note the section, assessment year and reply date, reconcile the figures with AIS and Form 26AS, and file a documented online reply by the date stated. Most replies are filed online."
      subServicesHeading="Which income tax notices do we reply to?"
      subServices={[
        { name: "Intimation u/s 143(1)", text: "A computer-generated processing of your return that adjusts figures or raises a demand. We compare the intimation with the return and file a rectification request or a response where the adjustment is wrong." },
        { name: "Defective Return u/s 139(9)", text: "The department has found your return incomplete or inconsistent, such as missing schedules or tax audit details. We identify the defect and file the correction within the time allowed so the return is not treated as invalid." },
        { name: "Inquiry u/s 142(1) and Scrutiny u/s 143(2)", text: "Your return has been selected for detailed assessment and the officer is calling for information. We prepare written submissions, reconciliations and evidence for each query raised in the faceless proceeding." },
        { name: "Reassessment u/s 148A and 148", text: "The department believes income has escaped assessment. We reply to the show cause notice before any reassessment notice is issued, and then handle the reassessment itself if it proceeds." },
        { name: "Demand u/s 156 and Refund Adjustment u/s 245", text: "An outstanding demand, or a proposal to set your refund against an old demand. We check whether the demand is correct and respond on the portal agreeing or disagreeing, and seek rectification where appropriate." },
        { name: "AIS / SFT Mismatch and 270A Penalty Notices", text: "Notices triggered by high-value transactions reported by banks, registrars and other third parties, and penalty notices for under-reported income. We reconcile the data and prepare the explanation." },
      ]}
      howTo={{
        heading: "How do you reply to an income tax notice, step by step?",
        steps: [
          { name: "Verify the notice is genuine", text: "Check the Document Identification Number (DIN) on the portal's authenticate-notice service and confirm the notice is visible in your e-Proceedings or Pending Actions list. Never click links or pay into accounts quoted in unsolicited messages." },
          { name: "Read the notice closely", text: "Note the section, assessment year, issuing authority, each query or allegation, the documents asked for and the reply date. Download the notice and any annexure or questionnaire attached to it." },
          { name: "Reconcile your records", text: "Match your return against AIS, Form 26AS and Form 16, and your bank statements and books. Identify exactly which figure, transaction or deduction the department has questioned." },
          { name: "Draft the reply and evidence file", text: "Write a point-by-point response, cite the applicable provisions where useful, and attach evidence such as bank statements, sale deeds, invoices, loan confirmations or capital gains workings as numbered annexures." },
          { name: "Submit on the portal", text: "Upload the reply under e-Proceedings or Pending Actions with the authorised signatory's approval or e-verification, and keep the acknowledgement. If more time is needed, request an adjournment before the date, with reasons." },
          { name: "Attend the hearing and read the order", text: "Where an oral explanation helps, request a video-conference hearing. Review the order or demand that follows and decide between payment, rectification or an appeal." },
        ],
      }}
      faqs={[
        { question: "How do I know if an income tax notice is genuine?", answer: "A genuine notice carries a Document Identification Number (DIN) and appears in your e-filing account under e-Proceedings or Pending Actions. The portal has an authenticate-notice service where you enter the DIN to verify it. Be wary of emails or calls that ask you to click links or pay into unfamiliar accounts, and never share your portal password or OTP." },
        { question: "What is the difference between a 143(1) intimation and a 143(2) notice?", answer: "A 143(1) intimation is the automated processing of your return, which adjusts arithmetic errors or mismatches and may show a refund or a demand. A 143(2) notice means the return has been selected for scrutiny, which starts a detailed examination where the assessing unit asks for evidence, often through questionnaires under section 142(1)." },
        { question: "Does the Income-tax Act, 2025 change how I reply to an old notice?", answer: "A notice for an earlier year that cites the Income-tax Act, 1961 is answered under the provisions it refers to. The Income-tax Act, 2025 applies from 1 April 2026 and renumbers many sections, so newer notices may cite unfamiliar numbers. We read each notice against both Acts and explain which provision applies before drafting the reply." },
        { question: "What is faceless assessment?", answer: "Faceless assessment means scrutiny is conducted online without meeting the assessing officer. Notices, replies and documents are exchanged through the e-filing portal, and cases are handled by units that are not tied to your locality. You can usually request a video-conference hearing when written submissions do not fully explain a transaction." },
        { question: "What happens if I do not respond to a scrutiny notice?", answer: "If you do not respond, the department can complete the assessment on the information it holds, often resulting in a higher demand, and non-compliance can attract penalty. If you cannot meet the date, file an adjournment request on the portal with reasons rather than staying silent. Whether to grant it is at the authority's discretion." },
        { question: "My refund was adjusted against an old demand. Can I challenge it?", answer: "When the department proposes to adjust a refund against an outstanding demand, it sends an intimation and you can respond on the portal agreeing, partly agreeing or disagreeing. If the old demand was wrong, for example because tax was already paid or a rectification is pending, we file the response with evidence so the refund can be released." },
        { question: "How long do I have to appeal against an assessment order?", answer: "An appeal to the Commissioner of Income Tax (Appeals) is generally filed within 30 days of receiving the order or demand notice, online, with grounds of appeal and a statement of facts. Before appealing, check whether the error can be fixed by rectification, which is often quicker for a mistake apparent from the record." },
        { question: "Do NRIs receive income tax notices too?", answer: "Yes. NRIs commonly receive notices about property sale proceeds, TDS mismatches, high-value transactions in AIS, or non-filing despite Indian income. The process is the same and is handled online, so the NRI does not need to visit India. We act as authorised representative and coordinate documents remotely, in the NRI's time zone." },
        { question: "Can I reply to an income tax notice myself?", answer: "Yes, the reply is filed by the taxpayer or an authorised representative. Simple matters, such as a small mismatch with a clear explanation, are often handled by the taxpayer. Where the notice questions cash deposits, capital gains, loans or reopens an old year, a poorly framed reply can create further queries, so many people take professional help." },
        { question: "What is a 270A penalty notice?", answer: "Section 270A of the 1961 Act provides for penalty on under-reported or misreported income. The department first gives a chance to be heard, usually through a show cause notice issued with or after the assessment order. The reply should explain why the income was not under-reported, or why the difference arose from a bona fide position, with supporting evidence." },
        { question: "I received a notice for an old year. Is that valid?", answer: "The department can reopen earlier years only in the situations and within the time limits the law allows, and for reassessment it must first follow the 148A inquiry procedure. Do not assume a notice is invalid because the year is old. Share the notice and the year with us and we will check the stated basis and time limit." },
        { question: "Do you handle GST notices as well?", answer: "GST notices follow a different law and portal, and are handled on our GST notice reply page. This page covers notices and intimations from the income tax department. If you hold both an income tax and a GST notice, send both and we will tell you which is more urgent." },
      ]}
      relatedPosts={["why-income-tax-notices-issued"]}
      relatedSlugs={["direct-tax", "tax-audit-chennai", "gst-notice-reply-chennai"]}
    >
      <h2 className={H2}>How do you read an income tax notice, and why does the section number matter?</h2>
      <p className={P}>
        The section number tells you what kind of notice it is and what you are expected to do next. A section 143(1) intimation can often be disposed of with a
        click or a rectification, while a 143(2) or 148A notice calls for a written, evidence-backed reply.
      </p>
      <p className={P}>
        Section numbers on this page are shown as commonly searched under the Income-tax Act, 1961. The Income-tax Act, 2025, in force from 1 April 2026,
        carries an equivalent provision for each procedure and renumbers many sections, so a notice for a recent year may quote different numbers. We read the notice
        against both Acts and tell you which procedure applies.
      </p>
      <p className={P}>
        Every genuine notice shows the section or provision, the assessment year (or tax year), the issuing authority, a DIN and a response date. Those five details
        decide the reply, and they are what we ask for first when you contact us. For a wider view of why notices are issued, read our guide on{" "}
        <Link href="/blog/why-income-tax-notices-issued" className={LINK}>why income tax notices are issued</Link>.
      </p>

      <h2 className={H2}>Which section is your notice, and where do you respond on the portal?</h2>
      <p className={P}>
        Match the section printed on your notice to the row below to see what it is and where the response goes. Where the time is set by the notice, we say so
        rather than quote a number that may differ in your case.
      </p>
      <Table
        head={["Section (1961 Act label)", "What it is", "Time to respond", "Where to respond on the portal"]}
        rows={[
          ["139(9)", "Notice that the return filed is defective", "As stated in the notice; an extension can be requested", "e-Proceedings or Pending Actions, then file the corrected return"],
          ["143(1)", "Computer-generated intimation after processing the return", "As stated in the intimation", "e-Proceedings or Pending Actions (agree or disagree), or a rectification request"],
          ["142(1)", "Inquiry before assessment: documents or a questionnaire", "As stated in the notice", "e-Proceedings, with documents attached"],
          ["143(2)", "Return selected for scrutiny assessment", "As stated in the notice", "e-Proceedings, under the assessment proceeding"],
          ["148A", "Show cause notice before reopening an assessment", "As stated in the notice", "e-Proceedings, reply to the show cause notice"],
          ["148", "Notice for reassessment, issued after the 148A inquiry", "As stated in the notice", "Return filing under the notice, then e-Proceedings for later queries"],
          ["245", "Proposal to adjust a refund against an outstanding demand", "As stated in the intimation", "e-Proceedings or Pending Actions (demand response)"],
          ["270A", "Penalty for under-reporting or misreporting of income", "As stated in the notice", "e-Proceedings, under the penalty proceeding"],
          ["AIS / SFT e-campaign", "Message or notice about a high-value transaction not matching your return", "As stated in the message", "Compliance or Pending Actions, and AIS feedback"],
        ]}
      />
      <p className={P}>
        If your notice is not on this list, send it to us. Notices about TDS statements and TDS defaults follow a different route, which we handle under TDS
        compliance.
      </p>

      <h2 className={H2}>What is a section 139(9) defective return notice, and how do you fix it?</h2>
      <p className={P}>
        A 139(9) notice says the department found your return incomplete, for example a missing schedule, mismatched tax payment details or absent audit
        report information, and asks you to correct it. If you do not remove the defect in time, the return can be treated as invalid, which can mean losing
        carry-forward of losses and refund.
      </p>
      <p className={P}>
        The fix is a corrected return filed against the notice, not an ordinary revised return, and it must cure the exact defect stated. We read the defect
        description, rebuild the schedule or reconcile the challan, and file within the time stated, requesting extra time on the portal if the documents are
        not ready. The{" "}
        <Link href="/income-tax-return-filing-chennai" className={LINK}>income tax return filing service</Link> helps avoid the defect in the first place.
      </p>

      <h2 className={H2}>What is a section 143(1) intimation, and should you agree with it?</h2>
      <p className={P}>
        A 143(1) intimation is the department&apos;s automated processing of your return, and you should agree only if it matches your own computation. It is
        not a scrutiny notice: it adjusts arithmetic errors, disallows items that appear inconsistent with the data it holds, and shows a refund or a demand.
      </p>
      <p className={P}>
        Common causes of a demand are TDS credit not matching Form 26AS, a deduction claimed without the matching form, or income in AIS that was not in the
        return. If the adjustment is wrong, you can disagree on the portal with an explanation, or file a rectification request. If it is right, pay the tax
        and, where relevant, consider a revised return. We compare the intimation line by line with the return before you respond.
      </p>

      <h2 className={H2}>What does a section 142(1) inquiry notice ask for?</h2>
      <p className={P}>
        A 142(1) notice asks you to furnish information, documents or accounts, and it can come before a return is selected for scrutiny or during scrutiny.
        Ignoring it can lead to an assessment on the information the department holds, so it deserves a complete reply.
      </p>
      <p className={P}>
        Typical requests are bank statements, books of account, details of loans and deposits, capital gains workings and explanations of expenses. We turn
        each query into a numbered answer, attach the supporting documents and file them under e-Proceedings. If a query is unclear, we say so in the reply
        rather than guess.
      </p>

      <h2 className={H2}>How does a section 143(2) scrutiny notice work in faceless assessment (NFAC)?</h2>
      <p className={P}>
        A 143(2) notice means your return is selected for detailed scrutiny, and under the faceless scheme it is handled online through the National Faceless
        Assessment Centre (NFAC) and its assessment units, without a visit to an income tax office. You deal with the department only through the portal.
      </p>
      <p className={P}>
        Expect a sequence of notices and questionnaires under section 142(1), a request for a written submission by a stated date, a possible show cause
        notice proposing additions, and finally an assessment order. Our process is to prepare a document index, answer each query with evidence, request a
        video-conference hearing where it helps, and respond to the draft or show cause notice within its time. Returns can be selected because of large
        transactions, cash deposits, claims that look unusual against peers or specific information received by the department.
      </p>
      <p className={P}>
        The department explains how to respond in the{" "}
        <a
          href="https://www.incometax.gov.in/iec/foportal/help/respond-to-e-proceedings-faq"
          target="_blank"
          rel="noopener noreferrer"
          className={LINK}
        >
          Income Tax Department e-Proceedings FAQ
        </a>
        . If the final order is adverse, the next steps are in the section on adverse orders below.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <EnquireButton
          service="an income tax scrutiny notice (143(2)) with a reply date approaching"
          placement="notice-scrutiny"
          className="inline-flex min-h-[44px] items-center rounded-full border border-carbon bg-[#25D366] px-5 text-xs font-bold uppercase tracking-[0.032em] text-carbon"
        >
          Urgent scrutiny notice? WhatsApp us
        </EnquireButton>
      </div>

      <h2 className={H2}>What are sections 148A and 148, and how should you reply to a reassessment notice?</h2>
      <p className={P}>
        Section 148A is the inquiry stage in which the department tells you what information suggests that income has escaped assessment, and asks you to
        explain before it issues a notice under section 148 to reopen the year. Your reply at this stage is the first opportunity to show that the matter
        should not be reopened.
      </p>
      <p className={P}>
        We read the information the department relies on, compare it with the return and AIS for that year, and prepare a reply with evidence. If the
        department decides to proceed, a section 148 notice follows, you file the return as required by that notice, and the reassessment is conducted like a
        scrutiny. Reopening of an old year has time limits, which we check against the year and the facts cited in your notice.
      </p>

      <h2 className={H2}>What does a section 245 refund adjustment mean, and can you object?</h2>
      <p className={P}>
        A section 245 intimation says the department intends to set off your refund against an old outstanding demand, and you can object on the portal if the
        demand is wrong or already paid. The usual reasons are demands that were paid but not credited, demands that a rectification should have reduced,
        and demands against a different PAN or year.
      </p>
      <p className={P}>
        You respond through the demand response option under e-Proceedings or Pending Actions, choosing agree, partly agree or disagree, with details of the
        challan or the order that corrects the demand. We gather the challan details, the order and the rectification record and file the response before
        the date stated so the refund is not adjusted.
      </p>

      <h2 className={H2}>What should you do about an AIS or high-value-transaction (SFT) notice?</h2>
      <p className={P}>
        Start by comparing AIS with your return, because these notices usually arise when a transaction reported by a bank, registrar, mutual fund or company
        does not appear in the return or appears with a different value. The reported data is not final: you can give feedback on each entry in AIS if it is
        wrong or relates to someone else.
      </p>
      <p className={P}>
        The common triggers are cash deposits, property purchase or sale, share and mutual fund transactions, large card payments, interest and dividend. A
        genuine transaction that was correctly reported but not offered to tax calls for a revised or updated return, as the situation allows, while a wrong
        entry calls for feedback and a short explanation. We prepare the reconciliation and the reply.
      </p>

      <h2 className={H2}>How do you reconcile AIS, Form 26AS and Form 16 before replying?</h2>
      <p className={P}>
        Use the checklist below and tick each source against the return before writing a single line of the reply. Most mismatches are found in the first
        three rows.
      </p>
      <Table
        head={["Source", "What to check", "Common mismatch it reveals"]}
        rows={[
          ["AIS (Annual Information Statement)", "Every entry for the year: interest, dividend, securities, property, cash deposits, GST turnover, TDS", "Income or transactions reported by third parties that are missing or lower in the return"],
          ["TIS (Taxpayer Information Summary)", "The summary value of each category after processing", "Different treatment of the same item, for example an amount counted twice"],
          ["Form 26AS", "TDS and TCS credit by deductor, advance tax and self-assessment tax challans", "TDS credit claimed in the return that does not appear against your PAN"],
          ["Form 16 / Form 16A", "Salary and TDS certificates from employers and deductors", "Salary or TDS in the certificate that differs from the figure in the return"],
          ["Bank and broker statements", "Interest credited, sale proceeds and cash deposits", "Interest not offered, capital gains computed on the wrong value"],
          ["Return as filed", "Schedules, deduction claims and income heads", "Item reported under a different head, or an omitted schedule"],
        ]}
      />

      <h2 className={H2}>What is a section 270A penalty notice, and how is it answered?</h2>
      <p className={P}>
        A 270A notice proposes a penalty because the department says income was under-reported or misreported, and the reply must show why the penalty
        should not apply. It normally accompanies or follows an assessment order and gives you an opportunity to be heard.
      </p>
      <p className={P}>
        Under the 1961 Act the penalty for under-reporting is 50 percent of the tax on the under-reported income, and for misreporting it is 200 percent. The
        Act lists situations where the penalty does not apply, such as where a bona fide explanation was given and the material facts were disclosed. We
        prepare a reply that links the facts to the grounds, and we also advise on whether the underlying addition should be taken up in appeal.
      </p>

      <h2 className={H2}>What happens after an adverse order: rectification, appeal or stay?</h2>
      <p className={P}>
        You have three options after an adverse order, and the right one depends on whether the error is clerical, a matter of law or a matter of fact. The
        table gives the usual route; appeals themselves are handled on our separate page.
      </p>
      <Table
        head={["Option", "When it fits", "Time limit", "How it works"]}
        rows={[
          ["Rectification (section 154 of the 1961 Act)", "A mistake apparent from the record, such as a wrong figure or a credit missed", "Within the period the Act allows, counted from the order; check the order date early", "Request filed on the portal with the order and evidence, decided by the same authority"],
          ["Appeal to the CIT(A)", "You disagree with the order on facts or law", "Generally 30 days from receiving the order or demand notice", "Online appeal with grounds and statement of facts; see the appeals page"],
          ["Stay of demand", "Demand is disputed and recovery action would follow", "Request promptly after the demand, along with the appeal", "Application to the assessing authority; the department's usual practice is to ask for a part payment, commonly 20 percent of the demand, but each request is decided on its facts"],
          ["Pay and close", "The demand is correct", "By the due date in the demand notice", "Pay by challan and update the demand response so interest stops"],
        ]}
      />
      <p className={P}>
        Detailed help on appeals to the Commissioner (Appeals) and the Tribunal is on our{" "}
        <Link href="/income-tax-assessment-appeals-chennai" className={LINK}>income tax assessment appeals</Link> page. This page covers the reply to the
        notice.
      </p>

      <h2 className={H2}>What documents should you keep ready for a notice reply?</h2>
      <p className={P}>
        Keep the notice, the return acknowledgement, AIS, Form 26AS and your bank statements ready, and add documents for the specific issue raised. A complete
        folder shortens the first call and the first draft.
      </p>
      <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-slate">
        <li>The notice and its annexures, with the DIN and the reply date.</li>
        <li>The return as filed, the acknowledgement and the computation of income.</li>
        <li>AIS, TIS and Form 26AS for the year, and Form 16 or 16A.</li>
        <li>Bank statements for all accounts for the year, and loan statements.</li>
        <li>For property or share sales: sale deed, purchase deed, cost of improvement and contract notes.</li>
        <li>For businesses: books of account, GST returns, purchase and sale invoices and stock records.</li>
        <li>For loans and share capital: confirmations, bank proof of transfer, and the PAN and returns of the lender.</li>
      </ul>

      <h2 className={H2}>Can an NRI reply to an income tax notice from abroad?</h2>
      <p className={P}>
        Yes. The reply is filed online, so an NRI can respond from any country, either personally or through an authorised representative. We coordinate
        documents by email and WhatsApp across time zones, and file in the NRI&apos;s name with the required authorisation.
      </p>
      <p className={P}>
        NRI notices commonly relate to property sale proceeds, TDS on the buyer&apos;s side, rental income and interest from NRO accounts. We advise only on
        Indian tax; for tax in your country of residence your home adviser decides. Residency questions are covered in our{" "}
        <Link href="/nri-tax-services" className={LINK}>NRI tax services</Link>, and property sales in{" "}
        <Link href="/nri-property-sale-tds-chennai" className={LINK}>NRI property sale TDS</Link>.
      </p>

      <h2 className={H2}>What if a high-income or HNI taxpayer receives a notice?</h2>
      <p className={P}>
        Notices to high-income taxpayers usually involve several heads, such as capital gains, foreign assets, rental income and unlisted share
        transactions, so the reply needs a single reconciled picture. We prepare one consolidated working and keep each statement consistent across years.
      </p>
      <p className={P}>
        Our{" "}
        <Link href="/income-tax-consultant-for-hni-chennai" className={LINK}>income tax work for HNI clients</Link>{" "}
        covers planning and filing, and the notice reply is the same engagement when a query arrives. The wider category is on the{" "}
        <Link href="/direct-tax" className={LINK}>direct tax</Link> page.
      </p>

      <h2 className={H2}>Why is a Chennai chartered accountant useful if the reply is filed online?</h2>
      <p className={P}>
        Notices are answered online, so location does not decide who files, but a local office helps with document collection and a face-to-face review. Our
        only office is in Anna Nagar, Chennai, and clients in other cities and countries are served online.
      </p>
      <p className={P}>
        If you also hold a GST notice, the{" "}
        <Link href="/gst-notice-reply-chennai" className={LINK}>GST notice reply service</Link> deals with it, because GST follows a different law and portal.
        Send both notices if you have both, and we will tell you which date comes first.
      </p>

      <HighTicketSections
        audiences={[
          {
            who: "Taxpayers with an urgent scrutiny notice",
            need: "A 142(1) questionnaire or 143(2) notice with a reply date coming up",
            help: "We review the notice, list the documents asked for, draft each answer and file under e-Proceedings, with an adjournment request if more time is needed.",
            enquiry: "an urgent income tax scrutiny notice (143(2) or 142(1)). I will share the notice and the reply date.",
          },
          {
            who: "Taxpayers facing a reassessment notice",
            need: "A 148A show cause notice or a 148 notice for an earlier year",
            help: "We study the information cited, compare it with the return and AIS for that year and prepare the reply to the show cause or the reassessment.",
            enquiry: "an income tax reassessment notice (148A or 148). I will share the year and the notice.",
          },
          {
            who: "NRIs with a notice on Indian income",
            need: "A notice about property sale, rent, interest or non-filing, received while abroad",
            help: "We reply as authorised representative, coordinate documents across time zones and keep you updated by WhatsApp and email.",
            enquiry: "an income tax notice for an NRI. I will share my country, the notice and the reply date.",
          },
          {
            who: "HNI individuals and business owners",
            need: "A notice touching capital gains, foreign assets or several income heads",
            help: "We prepare one reconciled working across heads and years, and answer the notice with the supporting statements.",
            enquiry: "an income tax notice for a high-income taxpayer (HNI). I will share the notice and the assessment year.",
          },
        ]}
        notIncluded={[
          "Appeals before the Commissioner (Appeals) or the Tribunal, which are covered on the income tax assessment appeals page.",
          "GST notices, which are handled on the GST notice reply page.",
          "Tax advice for countries other than India. Your home adviser handles foreign tax.",
          "Any assurance about the outcome of an assessment, penalty or appeal.",
        ]}
      />
    </ServicePageTemplate>
  );
}
