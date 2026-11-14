import ICAIVerificationTrustBar from "@/components/ICAIVerificationTrustBar";
import QuoteProcess from "@/components/QuoteProcess";
import AboutTheCA from "@/components/AboutTheCA";
import TamilSummaryBox from "@/components/TamilSummaryBox";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SiloLinks from "@/components/SiloLinks";
import HighTicketSections, { type Audience } from "@/components/HighTicketSections";
import { JsonLd, moneyPageGraph } from "@/lib/schema";
import { PAGE_DATES } from "@/lib/page-dates";

const PATH = "/gst-notice-reply-chennai";
const TITLE = "GST Notice Reply in Chennai | ASMT-10, DRC-01A, DRC-06";
const DESCRIPTION =
  "CA-led GST notice reply in Chennai for ASMT-10, DRC-01A, DRC-01 and show cause notices. Send the notice on WhatsApp or book a 15-minute consultation today.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "GST Notice Reply & Show Cause Notice Support in Chennai",
    description: "Written replies to ASMT-10, DRC-01A, DRC-01, ADT-01 and RFD-08 GST notices for Tamil Nadu businesses.",
    url: PATH,
  },
};

const LINK = "font-medium text-royal-violet underline underline-offset-2";
const H2 = "mt-14 text-2xl text-obsidian";
const P = "mt-4 max-w-3xl leading-relaxed text-slate";

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
      <table className="w-full text-left text-sm">
        <thead className="bg-carbon text-white">
          <tr>
            {head.map((h, i) => (
              <th key={i} className="px-4 py-3 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ash bg-paper">
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (
                <td key={i} className={`px-4 py-3 align-top ${i === 0 ? "font-medium text-obsidian" : "text-slate"}`}>
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

// Table 1: notice directory.
const NOTICE_DIRECTORY = [
  ["ASMT-10", "Section 61 and Rule 99 (scrutiny of returns)", "ASMT-11", "30 days, or the further time the officer allows", "The officer can go on to an audit, a special audit, an inspection or a show cause notice under Section 73, 74 or 74A"],
  ["CMP-05", "Section 10 (composition scheme)", "CMP-06", "Time stated in the notice", "The composition option can be denied and tax demanded under the regular scheme"],
  ["REG-03", "Section 25 and Rule 9 (registration application)", "REG-04", "7 working days", "The registration application can be rejected"],
  ["REG-17", "Section 29 and Rule 22 (proposed cancellation)", "REG-18", "7 working days", "The officer can cancel the registration by an order in REG-19"],
  ["DRC-01A", "Rule 142(1A) (intimation before a show cause notice)", "Part B of DRC-01A, or DRC-03 to pay", "Time stated in the intimation", "A formal show cause notice in DRC-01 usually follows"],
  ["DRC-01B and DRC-01C", "Rules 88C and 88D (outward tax and ITC differences flagged by the system)", "The reply form on the portal for that intimation", "Time stated in the intimation", "The officer can proceed to a show cause notice for the difference"],
  ["DRC-01", "Rule 142(1) (show cause notice under Section 73, 74 or 74A)", "DRC-06", "Time stated in the notice, usually 30 days", "An order confirming tax, interest and penalty. Appeals then belong to the litigation page"],
  ["ADT-01", "Section 65 and Rule 101 (departmental audit)", "No reply form: records and written explanations", "Date stated in the notice", "The audit goes ahead on the records available, and findings can lead to a show cause notice"],
  ["RFD-08", "Rule 92(3) (proposed refund rejection)", "RFD-09", "15 days", "The refund can be rejected in whole or in part by an order"],
  ["MOV-07", "Section 129(3) (goods or vehicle detained in transit)", "A written reply to the officer. MOV-08 is not a reply: it is the bond for provisional release", "Before the order, which must be passed within 7 days of service of the notice", "An order in MOV-09 demands the penalty. Release and appeals belong to the litigation page"],
];

// Table: ASMT-10 vs DRC-01A vs DRC-01 decision table.
const NOTICE_DECIDER = [
  ["ASMT-10", "Scrutiny of returns (Section 61 and Rule 99). No show cause notice yet", "The officer has found discrepancies in your returns and wants an explanation. No demand has been raised", "ASMT-11, with any tax you accept paid through DRC-03", "30 days from being informed, or the further time the officer allows"],
  ["DRC-01A", "Before a show cause notice (Rule 142(1A)). Optional for the officer", "The officer has worked out tax, interest and penalty and is giving you a chance to settle before a formal notice", "DRC-03 to pay in full; Part B of DRC-01A to part-pay or object", "The date given in the intimation. Rule 142 does not fix a period"],
  ["DRC-01", "Show cause notice issued under Section 73, 74 or 74A (Rule 142(1))", "Adjudication has begun. An order in DRC-07 follows unless the notice is dropped or closed by payment", "DRC-06", "The time stated in the notice, usually 30 days. Under Section 74A, paying within 60 days of the notice removes or reduces the penalty"],
];

// Table 2: Section 73 vs 74 vs 74A.
const SECTION_COMPARISON = [
  ["Periods covered", "FY 2023-24 and earlier", "FY 2023-24 and earlier", "FY 2024-25 onwards"],
  ["Type of allegation", "Short payment, wrong ITC or wrong refund without fraud", "The same, but with fraud, wilful misstatement or suppression of facts", "One provision for both: the notice states whether fraud, wilful misstatement or suppression is alleged"],
  ["Time to issue the notice", "At least 3 months before the order deadline", "At least 6 months before the order deadline", "Within 42 months of the annual return due date, whether or not fraud is alleged"],
  ["Time to pass the order", "Within 3 years of the annual return due date", "Within 5 years of the annual return due date", "Within 12 months of the notice date, extendable by up to 6 months by the Commissioner or an authorised officer not below Joint Commissioner"],
  ["Penalty basis", "10% of the tax or ₹10,000, whichever is higher. None if tax and interest are paid within 30 days of the notice", "Equal to the tax. Reduced to 15%, 25% or 50% of the tax if paid before the notice, within 30 days of the notice or within 30 days of the order", "10% of the tax or ₹10,000, whichever is higher, without fraud; equal to the tax where fraud is established. Lower amounts apply on early payment"],
];

// Table 3: Chennai jurisdiction.
const JURISDICTION = [
  ["Who the authority is", "Tamil Nadu Commercial Taxes Department, the State GST administration", "CBIC Central GST commissionerates: Chennai North, Chennai South and Chennai Outer", "Directorate General of GST Intelligence (DGGI), the Centre's investigation wing"],
  ["Where it sits", "Integrated Commercial Taxes Building, Nandanam, Chennai", "Offices listed on gstchennai.gov.in for each commissionerate", "A zonal unit of the Central GST department; the notice carries its own office details"],
  ["What the notice header and signature show", "A Tamil Nadu Commercial Taxes Department or State Tax office name", "A Central Tax commissionerate, division or range name such as Chennai North or Chennai Outer", "A DGGI office name, often after a summons, a search or an investigation"],
  ["What your GST portal profile shows", "State listed as your administrative office", "Centre listed as your administrative office", "The portal profile will not show DGGI: it acts on intelligence, not on allotment"],
];

const ORDER_RULE = [
  ["A notice asks for your reply", "No demand, rejection or cancellation order exists yet", "This page"],
  ["An order has been issued", "A demand order (DRC-07), a refund rejection order, a cancellation order (REG-19) or a detention demand order (MOV-09) exists", "GST Litigation & Appeals in Chennai"],
  ["You cannot tell which it is", "The portal title and the form number settle it, and we can read a photo of the notice", "Send it to us on WhatsApp"],
];

const DOCS_BY_NOTICE = [
  ["ASMT-10", "GSTR-1, GSTR-3B, GSTR-2B and books for the months named; sales and purchase registers", "Credit notes, amendment trails, supplier confirmations"],
  ["DRC-01A", "Copy of the intimation with its computation; ledgers and returns for the period", "DRC-03 payment proof if you pay; a reconciliation if you object"],
  ["DRC-01 (DRC-06 reply)", "Show cause notice and annexures; returns, ledgers, invoices, e-way bills, payment proofs", "Contracts, supplier correspondence, proof that goods or services were received"],
  ["ADT-01", "The records the notice lists: returns, ledgers, invoices, stock records", "Reconciliations and earlier scrutiny correspondence"],
  ["RFD-08 (RFD-09 reply)", "Refund application, computations and invoices", "Shipping bills, bank realisation proof, LUT copy for exports"],
  ["REG-03 (REG-04 reply)", "Copy of the application and the documents already filed", "Fresh address proof, rent agreement or consent letter"],
  ["REG-17 (REG-18 reply)", "Proof the business operates: invoices, bank statements, utility bills; pending returns", "Evidence of filing and the authorised signatory's authority"],
];

const STEPS = [
  { name: "Read the notice and fix the date", text: "We confirm the form, the section invoked, the tax period, the reply form and the date by which the reply must be filed, and identify whether the State or the Centre issued it. Orders are separated from notices at this step." },
  { name: "Collect the records", text: "We give you a short document list for that notice type. You share invoices, ledgers, e-way bills, contracts and payment proofs through a secure folder, and we flag anything missing early." },
  { name: "Reconcile the returns", text: "We reconcile GSTR-1, GSTR-3B, GSTR-2B and the books for the period, and classify each gap as a timing difference, a supplier default, an error on your side or something the officer has misread." },
  { name: "Decide: pay, object or part-pay", text: "For each item we explain what paying with interest would mean, what objecting would rest on, and what a part-payment does. The decision is yours, in writing." },
  { name: "Draft the reply", text: "We prepare a point-by-point reply with legal grounds, the reconciliation and numbered annexures, and review it with you before anything is filed." },
  { name: "File on the GST portal", text: "We file in the specified form under the notices section, with the authorised signatory's login or digital signature, and keep the acknowledgement and filed copy." },
  { name: "Prepare for the hearing", text: "Where a personal hearing is fixed, we prepare a short submission note and attend with you or as your authorised representative." },
  { name: "Track the outcome", text: "We watch the portal for the order. If the officer closes the matter, the file ends there. If an order is issued against you, the matter moves to the litigation team with the full record." },
];

const SMALL_NOTICES = [
  { t: "REG-03 and REG-04", x: "REG-03 asks for clarification on a registration application. The reply in REG-04, due in 7 working days, must meet the officer's query with documents: address proof, a rent or consent letter, or proof of the business activity." },
  { t: "REG-17 and REG-18", x: "REG-17 proposes to cancel your GSTIN, often for non-filing of returns. The reply in REG-18, due in 7 working days, shows that the business operates and that pending returns are filed. If a cancellation order is passed, revocation is a litigation-stage matter." },
  { t: "RFD-08 and RFD-09", x: "RFD-08 proposes to reject all or part of a refund, common for exporters and inverted-duty cases. The RFD-09 reply, due in 15 days, answers each objection with computations, invoices, shipping bills and bank realisation proof." },
  { t: "ADT-01 audit", x: "ADT-01 announces a departmental audit of your books. There is no reply form: you produce the records requested, explain the entries and respond to observations. Findings are recorded and can lead to a show cause notice." },
];

const AUDIENCES: Audience[] = [
  {
    who: "DRC-01 or ASMT-10 with a hearing within days",
    need: "A notice that fixes a personal hearing soon, and no reconciliation done yet.",
    help: "We read the notice the same day it reaches us, confirm the reply date and the hearing date, and decide what has to be filed first. If more time is needed, we help you ask for it in writing.",
    enquiry: "GST notice reply: I have a DRC-01 / ASMT-10 notice with a personal hearing within a few days",
  },
  {
    who: "Bank account provisionally attached",
    need: "A GST attachment order on the bank account, often linked to a pending proceeding.",
    help: "We check which proceeding the attachment relates to, what has been replied so far and what the officer needs to release it. Where the matter has reached an order, we route it to the litigation team.",
    enquiry: "GST notice: my bank account has been provisionally attached and I need to know the reply position",
  },
  {
    who: "ITC reversal demanded because a supplier did not file",
    need: "Credit questioned because the supplier's invoice is missing from GSTR-2B.",
    help: "We reconcile invoice by invoice, collect proof of payment, receipt of goods and the supplier's later filings, and set out why the credit stands or should be reversed with interest.",
    enquiry: "GST notice reply: ITC reversal demanded because a supplier did not file GSTR-1",
  },
  {
    who: "DRC-01A pay-or-object decision",
    need: "An intimation of tax, with a choice between paying with interest and objecting in Part B.",
    help: "We compute what is payable on each item, show what paying and objecting would mean, and prepare either the DRC-03 payment or the Part B objection.",
    enquiry: "GST notice reply: I received a DRC-01A intimation and need to decide between paying and objecting",
  },
  {
    who: "Refund claim proposed for rejection (RFD-08)",
    need: "A notice proposing to reject an export or inverted-duty refund, with cash locked meanwhile.",
    help: "We answer in RFD-09 with the export, shipping and bank-realisation records and the computations the officer has questioned.",
    enquiry: "GST notice reply: I received an RFD-08 refund rejection notice",
  },
  {
    who: "Registration at risk (REG-03 or REG-17)",
    need: "A clarification notice on a new application, or a proposal to cancel an existing GSTIN.",
    help: "We prepare the REG-04 or REG-18 reply with proof that the business operates, and check that pending returns are filed so that registration is granted or kept.",
    enquiry: "GST notice reply: I received a REG-03 / REG-17 notice about my GST registration",
  },
];

const NOT_INCLUDED = [
  "Appeals against orders (APL-01, APL-05, GSTAT and High Court): these are handled under GST Litigation & Appeals in Chennai.",
  "Court representation. Matters before the High Court or Supreme Court need an advocate.",
  "Guaranteed outcomes or fixed timelines. Whether the officer accepts a reply is the officer's decision.",
];

const FAQS = [
  {
    question: "What is the difference between DRC-01A and DRC-01?",
    answer:
      "DRC-01A is an optional intimation sent before a show cause notice, letting you pay with interest through DRC-03 or part-pay and object in Part B. DRC-01 is the summary of the show cause notice itself: formal proceedings have begun and you reply in DRC-06. Settling at the DRC-01A stage can avoid a formal notice.",
  },
  {
    question: "How much time do I get to reply to a GST notice?",
    answer:
      "The notice states the time allowed. An ASMT-10 is usually answered within 30 days, REG-03 and REG-17 replies are due in 7 working days, and an RFD-08 in 15 days. A show cause notice usually allows 30 days, but check the date on your own notice. If you need more time, ask for an adjournment in writing before the deadline.",
  },
  {
    question: "What happens if I ignore an ASMT-10 notice?",
    answer:
      "If you do not reply to an ASMT-10 in time, or the reply is unsatisfactory, the officer can proceed to an audit (Section 65), a special audit (Section 66), an inspection (Section 67) or a show cause notice under Section 73, 74 or 74A. A reasoned ASMT-11 reply that explains each discrepancy can close the scrutiny without any demand.",
  },
  {
    question: "Is a GST notice reply the same as a GST appeal?",
    answer:
      "No. A notice reply is filed before any order is passed, while an appeal challenges an order already issued. If an order such as DRC-07 confirms a demand, the next step is a first appeal in APL-01, generally within 3 months, with a pre-deposit of 10% of the disputed tax. Our GST litigation page covers appeals.",
  },
  {
    question: "Who issues GST notices in Chennai, the State or the Centre?",
    answer:
      "Either the Tamil Nadu Commercial Taxes Department or a CBIC Central GST commissionerate can issue it, depending on which administration your GSTIN is assigned to. The officer's designation and office appear on the notice and in your GST portal profile. Hearings and correspondence go to that office, so confirm it first.",
  },
  {
    question: "Should I pay the amount in a DRC-01A or object to it?",
    answer:
      "It depends on the reconciliation. If the officer is right on an item, paying with interest through DRC-03 usually ends that item without a show cause notice or penalty. If the figure is wrong, you object in Part B with evidence. Many intimations mix both, so a part-payment with a reasoned objection on the rest is common.",
  },
  {
    question: "What happens if the officer does not accept my reply?",
    answer:
      "The officer can issue a show cause notice if none exists, or fix a personal hearing, and then pass an order. Under Section 75 you are entitled to a hearing if an adverse decision is contemplated. If a demand order follows, your remedy is an appeal in APL-01, which our GST litigation page explains.",
  },
];

const CRUMBS = [
  { name: "GST", href: "/goods-and-services-tax" },
  { name: "GST Notice Reply in Chennai", href: PATH },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={moneyPageGraph({
          path: PATH,
          name: TITLE,
          description: DESCRIPTION,
          dateModified: PAGE_DATES[PATH],
          service: {
            name: "GST Notice Reply in Chennai",
            serviceType: "GST Notice Reply",
            description:
              "Point-by-point written replies to GST scrutiny notices, pre-show-cause intimations, show cause notices, audit communications, refund rejection notices and registration notices, filed on the GST portal.",
            offers: [
              "ASMT-10 scrutiny reply in ASMT-11",
              "DRC-01A intimation: pay-or-object advice and Part B reply",
              "DRC-01 show cause notice reply in DRC-06",
              "ITC mismatch reconciliation and reply",
              "ADT-01 audit support",
              "RFD-08 reply in RFD-09",
              "REG-03 and REG-17 replies",
            ],
          },
          faqs: FAQS,
          crumbs: CRUMBS,
          howTo: {
            name: "How to reply to a GST notice in Chennai",
            description:
              "The steps from reading a GST notice to filing the reply on the GST portal and attending the hearing.",
            steps: STEPS,
          },
          speakable: ["#lead-answer"],
        })}
      />
      <Breadcrumbs items={CRUMBS} schema={false} />
      <PageHero
        reviewedPath={PATH}
        schema={false}
        eyebrow="GST Notices · Chennai & Tamil Nadu"
        h1="GST Notice Reply & Show Cause Notice Support in Chennai"
        lead={
          <>
            You reply to a <strong>GST notice</strong> by filing a response on the GST portal, in the form the notice
            names, within the time it allows. An ASMT-10 is answered in ASMT-11, a DRC-01 show cause notice in DRC-06
            and a DRC-01A intimation in Part B. We reconcile your returns first.
          </>
        }
        subhead="Point-by-point written replies to GST scrutiny notices, pre-show-cause intimations, show cause notices, audit communications and refund rejection notices, for businesses registered under the Tamil Nadu Commercial Taxes Department or a CBIC Chennai commissionerate."
      />

      <section className="bg-paper py-16">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="rounded-cards border border-carbon bg-sunburst p-5 text-sm leading-relaxed text-carbon">
              <strong>Already have a demand order, detention order or appeal deadline?</strong> This page covers
              early-stage replies (ASMT-10 scrutiny, DRC-01A intimations). Contested DRC-01 adjudication, Section
              73/74/74A demands, Section 129 detentions and APL-01 or GSTAT appeals are handled under{" "}
              <Link href="/gst-litigation-chennai" className="font-semibold underline underline-offset-2">
                GST Litigation &amp; Appeals in Chennai
              </Link>
              .
            </p>
          </div>

          <h2 className="mt-12 text-2xl text-obsidian">Which GST notices need an immediate reply in Chennai?</h2>
          <p className={P}>
            Every notice that carries a reply date needs an immediate read, because the form number decides the reply
            form, the time allowed and what follows if you stay silent. The directory below covers the notices we see
            most often from Tamil Nadu taxpayers. Where the time is not fixed by the rules, the notice itself states it,
            and the date printed on your own notice always governs.
          </p>
          <Table
            head={["Notice form", "Provision", "Reply form", "Reply time", "What happens if ignored"]}
            rows={NOTICE_DIRECTORY}
          />
          <p className="mt-3 max-w-3xl text-xs text-slate">
            Reference: the{" "}
            <a
              href="https://tutorial.gst.gov.in/userguide/taxpayersdashboard/View_Notices_and_Demand_Orders.htm"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK}
            >
              GST Portal user guide on viewing notices and demand orders
            </a>{" "}
            and the CGST Act and Rules on{" "}
            <a href="https://cbic-gst.gov.in/gst-acts.html" target="_blank" rel="noopener noreferrer" className={LINK}>
              cbic-gst.gov.in
            </a>
            .
          </p>
          <p className={P}>
            A notice you cannot place in this table is not a reason to wait. Send us a photo or PDF, and we identify the
            form, the stage and the reply date. Notices that name Section 73, 74 or 74A are explained further below, and
            the guide on the{" "}
            <Link href="/blog/gst-show-cause-notice-first-48-hours" className={LINK}>
              first 48 hours after a GST show cause notice
            </Link>{" "}
            lists what to do straight away.
          </p>

          <h2 className={H2}>ASMT-10, DRC-01A or DRC-01: which notice is this?</h2>
          <p className={P}>
            Look at the form number in the portal title. An ASMT-10 is a scrutiny query with no demand yet; a DRC-01A is
            an optional pre-notice intimation inviting you to pay or object; a DRC-01 is the summary of a formal show
            cause notice that leads to an order. Each has its own reply form and deadline.
          </p>
          <Table
            head={["Form", "Stage", "What it means", "Reply form", "Time to reply"]}
            rows={NOTICE_DECIDER}
          />
          <p className="mt-3 max-w-3xl text-xs text-slate">
            Source: Section 61 of the CGST Act, Rule 99 and{" "}
            <a
              href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter18/rule142_v1.00.html"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK}
            >
              Rule 142 of the CGST Rules
            </a>{" "}
            as amended, and the{" "}
            <a
              href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter15/Section74A_v1.00.html"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK}
            >
              text of Section 74A
            </a>{" "}
            on CBIC&apos;s tax information portal. The date printed on your own notice governs.
          </p>
          <p className={P}>
            The three forms are often stages of the same issue. If the officer accepts an ASMT-11 reply, you are
            informed in ASMT-12 and the scrutiny ends; if not, a DRC-01A or a DRC-01 can follow. Settling at the DRC-01A
            stage, by paying what is right through DRC-03 and objecting to the rest in Part B, can avoid a formal notice
            altogether. Once a DRC-01 is issued for FY 2024-25 or later, the time limits and penalty rules of Section 74A
            apply, which our guide to{" "}
            <Link href="/blog/section-74a-gst-notice" className={LINK}>
              Section 74A notices, time limits and the reply format
            </Link>{" "}
            explains. After a DRC-06 reply is filed, the hearing, the DRC-07 order and the appeal clock are covered in{" "}
            <Link href="/blog/after-gst-show-cause-reply" className={LINK}>
              what happens after you reply to a GST show cause notice
            </Link>
            .
          </p>

          <h2 className={H2}>Is your notice from the State (Tamil Nadu Commercial Taxes) or the Centre (CGST)?</h2>
          <p className={P}>
            Your notice comes from whichever administration your GSTIN is allotted to: the Tamil Nadu Commercial Taxes
            Department for State taxpayers, or a CBIC commissionerate for Central taxpayers, with DGGI as a separate
            investigation wing. Hearings, correspondence and any later appeal follow that office, so identify it before
            anything else.
          </p>
          <Table
            head={["How to tell", "State (Tamil Nadu Commercial Taxes)", "Centre (CBIC Chennai)", "DGGI"]}
            rows={JURISDICTION}
          />
          <p className="mt-3 max-w-3xl text-xs text-slate">
            Office information is published by the CBIC Chennai zone (
            <a href="https://gstchennai.gov.in" target="_blank" rel="noopener noreferrer" className={LINK}>
              gstchennai.gov.in
            </a>
            ) and the Tamil Nadu Commercial Taxes Department (
            <a href="https://ctd.tn.gov.in" target="_blank" rel="noopener noreferrer" className={LINK}>
              ctd.tn.gov.in
            </a>
            ). The authority printed on your notice always governs.
          </p>
          <p className={P}>
            The two administrations cannot both proceed on the same subject matter: under Section 6 of the CGST Act, if
            one officer has started a proceeding, the other cannot start one on the same matter. If you receive notices
            from both on the same issue, tell us at once. The appellate forums, which apply only after an order, are
            listed on{" "}
            <Link href="/gst-litigation-chennai" className={LINK}>
              GST Litigation &amp; Appeals in Chennai
            </Link>
            .
          </p>

          <h2 className={H2}>Is it a notice, or has an order already been issued?</h2>
          <p className={P}>
            A notice asks for your reply and no order exists yet; an order has already decided the matter and is
            challenged by appeal instead. This difference sets your deadline and your remedy, so check it before you
            start drafting.
          </p>
          <Table head={["Your situation", "What it means", "Where it is handled"]} rows={ORDER_RULE} />

          <h2 className={H2}>What is the difference between a DRC-01A intimation and a DRC-01 show cause notice?</h2>
          <p className={P}>
            A DRC-01A is a pre-notice intimation that invites you to pay or object, while a DRC-01 is the summary of a
            formal show cause notice that begins adjudication. The first is a chance to settle; the second is the start
            of a proceeding that ends in an order.
          </p>
          <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-5 text-slate">
            <li>
              <strong className="text-obsidian">DRC-01A</strong> is issued under Rule 142(1A). Part A states the amount
              the officer believes is payable. You can pay it with interest through DRC-03 and report the payment, or
              file your objection in Part B. A well-supported objection can settle the matter at this stage.
            </li>
            <li>
              <strong className="text-obsidian">DRC-01</strong> is issued under Rule 142(1) as the summary of a show
              cause notice under Section 73, 74 or 74A. You reply in DRC-06 within the time stated, usually 30 days, and
              can ask for a personal hearing.
            </li>
          </ul>

          <h2 className={H2}>What is the difference between Section 73, 74 and 74A?</h2>
          <p className={P}>
            Sections 73 and 74 apply to FY 2023-24 and earlier, with Section 73 for non-fraud cases and Section 74 for
            fraud, wilful misstatement or suppression; Section 74A replaces both from FY 2024-25 onwards. The table
            compares them, and the section named in your notice fixes the limitation and the penalty exposure.
          </p>
          <Table head={["Point of comparison", "Section 73", "Section 74", "Section 74A"]} rows={SECTION_COMPARISON} />
          <p className="mt-3 max-w-3xl text-xs text-slate">
            Source: Sections 73, 74 and 74A of the CGST Act as amended, on{" "}
            <a href="https://cbic-gst.gov.in/gst-acts.html" target="_blank" rel="noopener noreferrer" className={LINK}>
              cbic-gst.gov.in
            </a>
            . Notices for some older years run on extended dates fixed by government notifications, so the tax year of
            your notice matters.
          </p>
          <p className={P}>
            A notice issued after the time allowed is invalid, so we check the dates first. Our guide to{" "}
            <Link href="/blog/section-74a-gst-notice" className={LINK}>
              how Section 74A time limits and penalties work
            </Link>
            .
          </p>

          <h2 className={H2}>How do we draft a reply to a Section 73, 74 or 74A notice?</h2>
          <p className={P}>
            We draft it as a point-by-point answer to each allegation, with the reconciliation and evidence attached, and
            a request for a personal hearing. A reply that only argues without numbers is rarely accepted.
          </p>
          <ol className="mt-4 max-w-3xl list-decimal space-y-3 pl-5 text-slate">
            <li>
              <strong className="text-obsidian">Preliminary objections.</strong> We check the jurisdiction, the period,
              whether the right section is invoked, whether the notice is within time, and whether it names the
              allegation and the amount with enough clarity to answer.
            </li>
            <li>
              <strong className="text-obsidian">Issue-wise submissions.</strong> Each demand item gets its own heading:
              the allegation, our position, the evidence and the law relied on, so that the officer can accept or reject
              items one by one.
            </li>
            <li>
              <strong className="text-obsidian">Fraud or suppression.</strong> Where the notice alleges fraud, wilful
              misstatement or suppression, we answer that separately, because it changes the time limit and the penalty.
              A mere dispute over the figures is not fraud.
            </li>
            <li>
              <strong className="text-obsidian">Hearing request.</strong> We ask for a personal hearing in the reply.
              Under Section 75, a hearing must be given where an adverse decision is contemplated or you request one in
              writing.
            </li>
          </ol>
          <p className={P}>
            The reply is filed in DRC-06 on the GST portal. If an order follows and you want to challenge it, that is
            the point at which our{" "}
            <Link href="/gst-litigation-chennai" className={LINK}>
              GST Litigation &amp; Appeals in Chennai
            </Link>{" "}
            service takes over.
          </p>

          <h2 className={H2}>How do you reply to an ASMT-10 scrutiny notice?</h2>
          <p className={P}>
            You reply in ASMT-11, within 30 days or the further time the officer allows, explaining or accepting each
            discrepancy the officer has listed. No demand exists at this stage, so a reasoned reply can end the matter.
          </p>
          <p className={P}>
            The notice lists the discrepancies by return and period. We take each item, find the cause in your books and
            answer it as a timing difference corrected in a later return, an error you accept and pay for with
            interest, or a point where the officer compared the wrong figures. If the officer accepts the reply, the
            scrutiny closes. If not, the matter can move to an audit, an inspection or a show cause notice.
          </p>

          <h2 className={H2}>How do you resolve a GSTR-2B vs GSTR-3B ITC mismatch notice?</h2>
          <p className={P}>
            You reconcile the credit claimed in GSTR-3B against GSTR-2B invoice by invoice, then show for each gap either
            that the credit is valid or that you are reversing it with interest. Credit generally depends on the invoice
            appearing in GSTR-2B, so the gap usually comes from the supplier&apos;s side.
          </p>
          <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-5 text-slate">
            <li>
              <strong className="text-obsidian">Timing differences.</strong> A supplier files late and the invoice
              appears in a later month&apos;s GSTR-2B. Credit that is taken only once the invoice appears can be
              explained with the later returns.
            </li>
            <li>
              <strong className="text-obsidian">Supplier defaults.</strong> The supplier never reported the invoice. We
              collect proof of payment, evidence that the goods or services were received, the supplier&apos;s
              registration status and written follow-ups, and treat the point as one of fact.
            </li>
            <li>
              <strong className="text-obsidian">Section 16(4) limits.</strong> Credit claimed after the statutory
              deadline needs a separate check, including whether the relief in Sections 16(5) and 16(6) for older years
              applies to your claim.
            </li>
            <li>
              <strong className="text-obsidian">Credit you cannot defend.</strong> If a claim was wrong, reversing it
              through DRC-03 with interest before the officer proceeds is often cheaper than losing the argument later.
            </li>
          </ul>
          <p className={P}>
            Our explainer on{" "}
            <Link href="/blog/itc-mismatch-notices" className={LINK}>
              ITC mismatch notices
            </Link>{" "}
            walks through the reconciliation in detail, and keeping monthly returns clean through our{" "}
            <Link href="/gst-return-filing-chennai" className={LINK}>
              GST return filing service in Chennai
            </Link>{" "}
            reduces the chance of a repeat notice.
          </p>

          <h2 className={H2}>What do REG-03, REG-17, RFD-08 and ADT-01 notices need?</h2>
          <p className={P}>
            Each of these notices has its own reply form, its own evidence and its own consequence, so they are answered
            separately from tax-demand notices.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {SMALL_NOTICES.map((c) => (
              <div key={c.t} className="rounded-cards border border-ash bg-paper p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-medium text-obsidian">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{c.x}</p>
              </div>
            ))}
          </div>
          <p className={P}>
            If your registration is the issue, our{" "}
            <Link href="/gst-registration-chennai" className={LINK}>
              GST registration service in Chennai
            </Link>{" "}
            covers fresh applications, amendments and the documents that REG-03 notices usually ask for.
          </p>

          <h2 className={H2}>How do you reply to a GST notice step by step?</h2>
          <p className={P}>
            You read the notice and fix the date, collect records, reconcile, decide, draft, file on the portal and then
            prepare for the hearing. These are the eight steps we follow on every notice.
          </p>
          <ol className="mt-6 space-y-4">
            {STEPS.map((step, i) => (
              <li key={step.name} className="flex gap-4 rounded-cards border border-ash bg-paper p-6 shadow-[var(--shadow-card)]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-royal-violet text-sm font-medium text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-medium text-obsidian">{step.name}</p>
                  <p className="mt-1 text-sm text-slate">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className={H2}>What documents do you need for each type of GST notice?</h2>
          <p className={P}>
            You need the notice itself and the returns for the period, plus a set of records that depends on the notice
            type. The list below is what we ask for first.
          </p>
          <Table head={["Notice", "Core records", "Extra, where they apply"]} rows={DOCS_BY_NOTICE} />
          <h2 className={H2}>What happens if the officer does not accept your reply?</h2>
          <p className={P}>
            The officer can fix a personal hearing, issue a show cause notice where none exists, or pass an order. What
            you can do depends on which of those happens next.
          </p>
          <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-5 text-slate">
            <li>
              <strong className="text-obsidian">After an ASMT-10 reply</strong> that the officer does not accept, the
              scrutiny can move to an audit, a special audit, an inspection or a show cause notice. A fresh reply, with
              hearing, is then due in that proceeding.
            </li>
            <li>
              <strong className="text-obsidian">After a DRC-01A objection</strong> that is rejected, a formal show cause
              notice in DRC-01 usually follows, and you reply in DRC-06.
            </li>
            <li>
              <strong className="text-obsidian">After a DRC-06 reply</strong>, the officer is required to give a hearing
              where an adverse decision is contemplated, then pass an order with reasons.
            </li>
            <li>
              <strong className="text-obsidian">If an order is passed</strong> against you, the notice stage ends and the
              remedy is an appeal. APL-01 time limits and pre-deposits are explained on{" "}
              <Link href="/gst-litigation-chennai" className={LINK}>
                GST Litigation &amp; Appeals in Chennai
              </Link>
              , and we hand over the file with the full record.
            </li>
          </ul>

          <h2 className={H2}>Can you ask for more time to reply to a GST notice?</h2>
          <p className={P}>
            Yes, you can ask the officer in writing before the date expires, but the officer decides whether to allow it.
            Treat the original date as final until you receive a written confirmation.
          </p>
          <h2 className={H2}>How can you tell a fake GST notice from a real one?</h2>
          <p className={P}>
            A genuine notice appears in the notices section of your own GST portal login, and communications from the
            department generally carry a Document Identification Number. Do not rely on a phone call, an unverified email
            or a link that asks for your portal password.
          </p>
          <HighTicketSections audiences={AUDIENCES} notIncluded={NOT_INCLUDED} />

          <h2 className={H2}>Which related services and guides may help?</h2>
          <p className={P}>
            These pages cover the adjoining work.
          </p>
          <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-slate">
            <li>
              <Link href="/gst-return-filing-chennai" className={LINK}>
                GST return filing in Chennai
              </Link>
              : monthly and quarterly returns, reconciled so that notices do not repeat.
            </li>
            <li>
              <Link href="/gst-registration-chennai" className={LINK}>
                GST registration in Chennai
              </Link>
              : new registrations, amendments and the answers to registration notices.
            </li>
            <li>
              <Link href="/goods-and-services-tax" className={LINK}>
                GST services overview
              </Link>
              : the full range of our GST work.
            </li>
            <li>
              <Link href="/income-tax-notice-reply-chennai" className={LINK}>
                Income tax notice reply in Chennai
              </Link>
              : if the same mismatch has also produced an income tax notice.
            </li>
            <li>
              <Link href="/gst-litigation-chennai" className={LINK}>
                GST Litigation &amp; Appeals in Chennai
              </Link>
              : orders, appeals, GSTAT and Section 129 detentions.
            </li>
            <li>
              <Link href="/blog/itc-mismatch-notices" className={LINK}>
                ITC mismatch notices
              </Link>{" "}
              and{" "}
              <Link href="/blog/gst-show-cause-notice-first-48-hours" className={LINK}>
                the first 48 hours after a show cause notice
              </Link>
              : our guides on the two commonest triggers.
            </li>
          </ul>
        </div>
      </section>

      <SiloLinks path={PATH} />

      <section className="bg-paper pb-12">
        <div className="container-page">
          <QuoteProcess />
          <ICAIVerificationTrustBar />
          <AboutTheCA />
        </div>
      </section>
      <TamilSummaryBox path="/gst-notice-reply-chennai" />
      <FAQSection items={FAQS} schema={false} />

      <CTASection
        service="GST Notice Reply"
        title="Received a GST notice?"
        subtitle="Send the notice on WhatsApp and get a chartered accountant's read of the form, the reply date and the next step."
      />
    </>
  );
}
