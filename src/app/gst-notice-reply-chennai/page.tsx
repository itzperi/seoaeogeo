import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "GST Notice Replies in Chennai: DRC-01 | C S Rushil & Co." },
  description:
    "CA-led help to reply to GST show cause and DRC-01 notices in Chennai: reconciliation, drafting and appeals. Message us on WhatsApp or book a consultation.",
  alternates: { canonical: "/gst-notice-reply-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "GST Notice Reply & Show Cause Notice Support in Chennai",
    description: "Written replies to ASMT-10, DRC-01A, DRC-01, ADT-01 and RFD-08 GST notices for Tamil Nadu businesses.",
    url: "/gst-notice-reply-chennai",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/gst-notice-reply-chennai`}
      serviceType="GST Notice Reply"
      crumbLabel="GST Notice Reply"
      crumbHref="/gst-notice-reply-chennai"
      eyebrow="GST Notices · Chennai & Tamil Nadu"
      h1="GST Notice Reply & Show Cause Notice Support in Chennai"
      subhead="Point-by-point written replies to GST scrutiny notices, pre-show-cause intimations, show cause notices, audit communications and refund rejection notices, for businesses registered under the Tamil Nadu Commercial Taxes Department or a CBIC Chennai commissionerate."
      introHeading="How do you reply to a GST notice in Chennai?"
      intro="You reply to a GST notice by filing a written response on the GST portal in the form the notice specifies, within the time allowed. An ASMT-10 is answered in ASMT-11, a DRC-01 show cause notice in DRC-06, and a DRC-01A intimation in Part B of DRC-01A. Reconcile your returns and invoices against each discrepancy before you reply."
      citation={{ label: "GST Portal user guide: View Notices and Demand Orders (tutorial.gst.gov.in)", href: "https://tutorial.gst.gov.in/userguide/taxpayersdashboard/View_Notices_and_Demand_Orders.htm" }}
      subServicesHeading="Which GST notices do we reply to?"
      subServices={[
        { name: "ASMT-10: Scrutiny of Returns", text: "The proper officer has found discrepancies in your returns, often GSTR-3B versus GSTR-1 or GSTR-2B. We reconcile the figures, explain or accept each item, and file the reply in Form ASMT-11." },
        { name: "DRC-01A: Pre-Show-Cause Intimation", text: "An intimation of tax the officer believes is payable before a formal notice is issued. We assess whether to pay with interest or object in Part B, since a well-reasoned objection can settle the issue at this stage." },
        { name: "DRC-01: Show Cause Notice Summary", text: "The electronic summary of a show cause notice demanding tax, interest and penalty. We prepare the DRC-06 reply with legal grounds, ledgers and invoices, and request a personal hearing where it helps." },
        { name: "ADT-01: Departmental Audit", text: "Notice of an audit of your books by the department. We prepare the records requested, attend the audit visits with you, and respond to observations before the audit report and any ADT-02 findings are issued." },
        { name: "RFD-08: Refund Rejection Notice", text: "A notice proposing to reject all or part of a refund claim, common for exporters and inverted-duty cases. We answer in RFD-09 with the documents and computations the officer has questioned." },
        { name: "REG-03 and REG-17: Registration Notices", text: "REG-03 seeks clarification on a new registration application; REG-17 proposes cancellation of an existing GSTIN. We file the REG-04 or REG-18 reply so that registration is granted or kept active." },
      ]}
      howTo={{
        heading: "What happens after you receive a GST notice?",
        steps: [
          { name: "Read the notice and fix the deadline", text: "We confirm the notice type, the section invoked, the tax period, the reply form and the date by which the reply must be filed, and identify the issuing officer and jurisdiction." },
          { name: "Reconcile the returns", text: "We reconcile GSTR-1, GSTR-3B, GSTR-2B and the books for the period, and isolate exactly which figures the officer is questioning and why." },
          { name: "Collect supporting evidence", text: "We list the invoices, e-way bills, ledgers, contracts, payment proofs and supplier confirmations needed, and you share them through a secure folder." },
          { name: "Decide pay, contest or part-pay", text: "For each issue we explain whether paying with interest, contesting, or paying the admitted portion is the more sensible course, and you decide." },
          { name: "Draft and file the reply", text: "We draft a point-by-point reply with legal grounds and annexures, review it with you, and file it on the GST portal in the specified form." },
          { name: "Hearing and follow-up", text: "If a personal hearing is scheduled we prepare submissions and attend with you or as your authorised representative, and track the order that follows." },
        ],
      }}
      faqs={[
        { question: "What is the difference between DRC-01A and DRC-01?", answer: "DRC-01A is an intimation sent before a show cause notice, giving you a chance to pay the amount with interest or object in writing. DRC-01 is the summary of the show cause notice itself. Once a DRC-01 is issued, proceedings have started and you reply in DRC-06. Addressing the issue at the DRC-01A stage can avoid a formal notice." },
        { question: "How much time do I get to reply to a GST notice?", answer: "The notice states the time allowed, which is usually 30 days for an ASMT-10 or a DRC-01 show cause notice, but check the date on your own notice. If you need more time, make a written request for an adjournment before the deadline. Granting it is at the officer's discretion." },
        { question: "What happens if I ignore an ASMT-10 notice?", answer: "If you do not reply to an ASMT-10 in time, or the reply is unsatisfactory, the officer can proceed with an audit (Section 65), a special audit (Section 66), an inspection (Section 67) or a show cause notice under Section 73 or 74 (Section 74A from FY 2024-25). A reasoned ASMT-11 reply explaining each discrepancy can close the scrutiny." },
        { question: "Is a GST notice reply the same as a GST appeal?", answer: "No. A notice reply is filed before any order is passed; an appeal challenges an order already issued. If an order such as DRC-07 confirms a demand, the next step is a first appeal in APL-01, generally within 3 months, with a pre-deposit of 10% of the disputed tax. Our GST litigation page covers appeals." },
        { question: "Who issues GST notices in Chennai, the State or the Centre?", answer: "Either the Tamil Nadu Commercial Taxes Department or a CBIC Central GST commissionerate can issue it, depending on which administration your GSTIN is assigned to. The officer's designation and office appear on the notice and the GST portal. Hearings and correspondence go to that office, so confirm it first." },
        { question: "Can I reply to a GST notice myself on the GST portal?", answer: "Yes. Any registered taxpayer can reply on the GST portal under the notices section. The risk lies in the content: a reply that does not reconcile the figures, cite the right provisions or attach evidence can lead to the demand being confirmed. Simple clarifications can be handled directly; a demand with tax, interest or penalty usually needs a CA." },
        { question: "What documents do I need to reply to an ITC mismatch notice?", answer: "You need GSTR-2B and GSTR-3B for the period, your purchase register, the supplier invoices, proof of payment to suppliers and, where possible, evidence that suppliers filed their returns. If the mismatch is about timing, ledgers showing when credit was booked and claimed help. For supplier defaults, add correspondence and evidence that goods or services were received." },
        { question: "Does an ITC mismatch or ASMT-10 notice mean I have done something wrong?", answer: "Not necessarily. Most of these notices come from the department matching GSTR-3B with GSTR-1 and GSTR-2B, usually because a supplier filed late or differently. Compare GSTR-2B with the credit claimed, line by line, for the notice period. An error on your side is accepted with interest; a supplier's default is followed up, as credit generally depends on GSTR-2B." },
      ]}
      relatedQuestions={[
        { question: "What if the GST officer confirms the demand and I need to appeal?", href: "/gst-litigation-chennai" },
        { question: "How do I keep my monthly GST returns reconciled to avoid notices?", href: "/goods-and-services-tax" },
        { question: "I have received an income tax notice as well. Can you help?", href: "/income-tax-notice-reply-chennai" },
      ]}
      relatedPosts={["section-74a-gst-notice"]}
      relatedSlugs={["gst-litigation-chennai", "goods-and-services-tax", "income-tax-notice-reply-chennai"]}
    />
  );
}
