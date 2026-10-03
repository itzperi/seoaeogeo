import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Income Tax Notice Reply in Chennai | Scrutiny Support" },
  description:
    "Income tax notice replies in Chennai: 143(1) intimations, 139(9) defective returns, 143(2) scrutiny, 148A reassessment and demands under both Acts.",
  alternates: { canonical: "/income-tax-notice-reply-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Income Tax Notice Reply & Scrutiny Assessment Support in Chennai",
    description: "Responses to income tax intimations, scrutiny notices, reassessment and demands, including faceless assessment.",
    url: "/income-tax-notice-reply-chennai",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/income-tax-notice-reply-chennai`}
      serviceType="Income Tax Notice Reply"
      crumbLabel="Income Tax Notice Reply"
      crumbHref="/income-tax-notice-reply-chennai"
      eyebrow="Income Tax Notices · Chennai"
      h1="Income Tax Notice Reply & Scrutiny Assessment Support in Chennai"
      subhead="Responses to income tax intimations, defective return notices, scrutiny and reassessment notices, outstanding demands and refund adjustments, filed through the e-filing portal and the faceless assessment system for individuals, firms and companies."
      introHeading="What should you do when you receive an income tax notice?"
      intro="First, confirm the notice is genuine by checking it under e-Proceedings or Pending Actions on the income tax e-filing portal, then identify the section, assessment year and response deadline. Most notices are now issued and answered online through faceless assessment, so the reply is a written submission with documents uploaded on the portal. Notices for years before 1 April 2026 still cite the Income-tax Act, 1961; notices under the Income-tax Act, 2025 use new section numbers, which we map to the old provisions for you."
      citation={{ label: "Income Tax Department e-filing portal (incometax.gov.in)", href: "https://www.incometax.gov.in/" }}
      subServicesHeading="Income tax notices we respond to"
      subServices={[
        { name: "Intimation u/s 143(1)", text: "A computer-generated processing of your return that adjusts figures or raises a demand. We compare the intimation with the return, and file a rectification request or response where the adjustment is wrong." },
        { name: "Defective Return u/s 139(9)", text: "The department has found your return incomplete or inconsistent, such as missing schedules or tax audit details. We identify the defect and file the corrected return within the time allowed so it is not treated as invalid." },
        { name: "Scrutiny u/s 143(2) and 142(1)", text: "Your return has been selected for detailed assessment and the officer is calling for information. We prepare written submissions, reconciliations and evidence for each query raised in the faceless proceeding." },
        { name: "Reassessment u/s 148A and 148", text: "The department believes income has escaped assessment. We reply to the show cause notice before a reassessment notice is issued, and then handle the reassessment itself if it proceeds." },
        { name: "Demand u/s 156 and Refund Adjustment u/s 245", text: "An outstanding demand, or a proposal to set your refund against an old demand. We check whether the demand is correct, respond on the portal agreeing or disagreeing, and seek rectification or a stay where appropriate." },
        { name: "New-Act Notices and Section Mapping", text: "Notices issued under the Income-tax Act, 2025 carry renumbered sections. We map each provision cited to its 1961 Act equivalent so you know exactly which procedure applies and what is being asked." },
      ]}
      howTo={{
        heading: "How we handle an income tax notice",
        steps: [
          { name: "Verify and log the notice", text: "We check the notice on the e-filing portal using its Document Identification Number, note the section, assessment year, issuing authority and the reply date." },
          { name: "Review the return and records", text: "We pull the return filed, Form 26AS, the Annual Information Statement (AIS) and your books, and find the specific mismatch or issue the department has flagged." },
          { name: "Build the evidence file", text: "We request bank statements, sale deeds, capital gains workings, invoices, confirmations or loan documents relevant to each query and organise them as annexures." },
          { name: "Draft the submission", text: "We prepare a written reply that answers each point, cites the applicable provisions and case law where useful, and links every claim to an annexure." },
          { name: "File on the portal", text: "With your approval the reply is uploaded under e-Proceedings, and we request a video-conference hearing in faceless proceedings when an oral explanation would help." },
          { name: "Track the order and next steps", text: "We review the assessment order or demand that follows, and advise on rectification, payment, or an appeal to the Commissioner (Appeals) if the outcome is disputed." },
        ],
      }}
      faqs={[
        { question: "How do I know if an income tax notice is genuine?", answer: "A genuine notice carries a Document Identification Number (DIN) and appears in your account on the income tax e-filing portal under e-Proceedings or Pending Actions. The portal also offers an authenticate-notice service where you enter the DIN to verify it. Treat emails or messages asking you to click links or pay into unfamiliar accounts with suspicion, and never share your portal password." },
        { question: "What is the difference between a 143(1) intimation and a 143(2) notice?", answer: "A 143(1) intimation is an automated processing of your return, while a 143(2) notice means your return has been picked for scrutiny assessment. The intimation adjusts arithmetic errors or mismatches and may raise a small demand or refund. A scrutiny notice starts a detailed examination where an assessing unit asks for evidence, often followed by questionnaires under section 142(1)." },
        { question: "Does the Income-tax Act, 2025 change how I reply to an old notice?", answer: "No, a notice relating to an earlier year that cites the Income-tax Act, 1961 is answered under the provisions it refers to. The Income-tax Act, 2025 applies from 1 April 2026 and renumbers many sections, so newer notices may cite unfamiliar numbers. We read each notice against both Acts and explain which provision applies before drafting a reply." },
        { question: "What is faceless assessment?", answer: "Faceless assessment is the system under which scrutiny is conducted online, without the taxpayer meeting the assessing officer in person. Notices, replies and documents are exchanged through the e-filing portal, and cases are allocated to assessment units rather than a local officer. You can usually request a personal hearing by video conference, which is useful when written submissions alone do not fully explain a transaction." },
        { question: "What happens if I do not respond to a scrutiny notice?", answer: "If you do not respond, the department can complete a best judgment assessment based on the information it holds, which often results in a higher demand. Non-compliance with notices can also attract penalties. If you cannot meet the deadline, filing an adjournment request on the portal with reasons is far better than staying silent, though granting it is at the authority's discretion." },
        { question: "My refund was adjusted against an old demand. Can I challenge it?", answer: "Yes, when the department proposes to adjust a refund against an outstanding demand, it sends an intimation and you can respond on the portal agreeing, partly agreeing or disagreeing with the demand. If the old demand was wrong, for example because tax was already paid or a rectification is pending, we file the response with evidence and pursue rectification so the refund is released." },
        { question: "How long do I have to appeal against an assessment order?", answer: "An appeal to the Commissioner of Income Tax (Appeals) is generally filed within 30 days of receiving the assessment order or demand notice. The appeal is filed online with the grounds of appeal and a statement of facts. Before appealing, check whether the error can be fixed through rectification, which is often quicker for mistakes apparent from the record." },
        { question: "Do NRIs receive income tax notices too?", answer: "Yes, NRIs commonly receive notices about property sale proceeds, TDS mismatches, high-value transactions reported in the AIS, or non-filing despite Indian income. The process is the same and is handled entirely online, so the NRI does not need to visit India. We respond on the NRI's behalf as authorised representative and coordinate documents remotely." },
      ]}
      relatedQuestions={[
        { question: "Which income tax return form should I file to avoid a defective return notice?", href: "/income-tax-return-filing-chennai" },
        { question: "I sold property in Chennai as an NRI. How is TDS handled?", href: "/nri-property-sale-tds-chennai" },
        { question: "I have a GST notice as well. How is that answered?", href: "/gst-notice-reply-chennai" },
      ]}
      relatedSlugs={["direct-tax", "tax-audit-chennai", "gst-notice-reply-chennai"]}
    />
  );
}
