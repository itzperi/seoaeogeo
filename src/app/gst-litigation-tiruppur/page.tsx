import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "GST Litigation & GSTAT Appeals in Tiruppur | CA Firm";
const description =
  "GST refund and notice disputes for Tiruppur knitwear exporters: IGST and LUT refund rejections, inverted duty claims, RFD-08 replies, APL-01 and GSTAT appeals.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/gst-litigation-tiruppur" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "GST Litigation & Appeals in Tiruppur",
    description: "GST litigation for Tiruppur businesses: refund rejections, notice replies and GSTAT appeals, handled online from Anna Nagar. Book a consultation online.",
    url: "/gst-litigation-tiruppur",
  },
};

const LINK = "font-medium text-royal-violet underline underline-offset-2";
const H2 = "mt-14 text-2xl text-obsidian";
const P = "mt-4 max-w-3xl leading-relaxed text-slate";

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="mt-6 max-w-4xl overflow-x-auto rounded-cards border border-ash">
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

const TIMELINE = [
  ["Refund deficiency or SCN (RFD-03 / RFD-08)", "Deficiency memo: refile a corrected claim. RFD-08: reply in RFD-09 within the time stated, usually 15 days", "No pre-deposit. Reply with shipping bills, BRCs and the revised computation", "Proper officer handling the refund"],
  ["Refund order (RFD-06)", "Order rejecting or reducing the claim, after a chance to be heard", "Check whether the reasons match the RFD-08 grounds; new grounds in the order are themselves appealable", "Proper officer"],
  ["First appeal", "3 months from communication of the order, plus up to 1 month on sufficient cause", "Form APL-01 on the GST portal. For a pure refund rejection there is usually no tax demand, so the 10% pre-deposit on disputed tax generally does not arise", "Appellate Authority; hearing in person or by video, as allowed"],
  ["Second appeal (GSTAT)", "3 months from communication of the appellate order, plus up to 3 months on sufficient cause", "Form APL-05 on the GSTAT e-filing portal. A further 10% of any tax still in dispute (cap ₹20 crore CGST + ₹20 crore SGST)", "A Tamil Nadu State Bench assigned by the portal (Chennai, Coimbatore or Madurai)"],
];

const DISPUTES = [
  ["IGST refund on exports with payment of tax", "Shipping bill refund held because invoice details in GSTR-1 do not match the shipping bill, or the exporter is flagged for risk verification", "Table 6A and shipping bill reconciliation, correction through the GST and customs systems, and a written request for release"],
  ["Refund of unutilised ITC on LUT exports", "Claim reduced under the Rule 89(4) formula: turnover of zero-rated supplies taken at a lower value, or ITC on some inputs disallowed", "Correct turnover figures, invoice-wise export data, e-BRC or FIRC, and the reasons each disallowed credit is eligible"],
  ["Inverted duty refunds", "Claim limited because input services are excluded from the Rule 89(5) formula, or tax paid at the same rate on inputs and outputs", "Recomputation by rate; the Supreme Court in VKC Footsteps (2021) upheld the exclusion of input services, so arguments focus on goods-based inputs"],
  ["Supplies to merchant exporters at 0.1%", "Concessional rate denied where goods were not exported within 90 days or the documentary conditions were not met", "Export proof, merchant exporter's purchase order and shipping bill linking, and the concessional rate notification's conditions"],
  ["Earlier-period demands under the old Rule 96(10)", "IGST refunds questioned for exporters who imported inputs under Advance Authorisation or EPCG during the period the restriction applied", "Period-wise analysis: Rule 96(10) was omitted in October 2024, but older refunds may still be examined"],
  ["Job work in the knitwear chain", "Knitting, dyeing, bleaching, printing and embroidery units: whether the activity is job work or a separate supply, and the rate applied", "Job work challans, ownership of the fabric, and ITC-04 filings by the principal"],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/gst-litigation-tiruppur`}
      serviceType="Tax Litigation"
      crumbLabel="GST Litigation in Tiruppur"
      crumbHref="/gst-litigation-tiruppur"
      parentCrumb={{ name: "GST Litigation", href: "/gst-litigation-chennai" }}
      eyebrow="GST Disputes · Tiruppur"
      h1="GST Litigation and Appeals in Tiruppur"
      subhead="Refund disputes, show-cause notice replies and GST appeals for Tiruppur knitwear exporters and job workers. We work from our only office in Anna Nagar, Chennai, file everything online and attend hearings by video where allowed, or in person by arrangement."
      introHeading="What GST disputes do Tiruppur exporters usually face?"
      intro="Most Tiruppur GST disputes are about money stuck in refunds rather than tax demands: IGST refunds on shipping bills held for data mismatches, refunds of unutilised credit on exports under a Letter of Undertaking (LUT) reduced or rejected, and inverted duty claims cut down. Each can be contested by reply, APL-01 appeal and the GST Appellate Tribunal."
      citation={{ label: "CGST Act and Rules on cbic-gst.gov.in", href: "https://cbic-gst.gov.in/gst-acts.html" }}
      keyFacts={[
        { label: "Where we work from", value: "Our only office is in Anna Nagar, Chennai. We have no office in Tiruppur; filings are online and hearings are by video where permitted, or attended by arrangement." },
        { label: "Refund time limit", value: "A refund claim must generally be filed within 2 years of the relevant date under Section 54(1), such as the date of export." },
        { label: "Provisional refund", value: "From October 2025, 90% of a zero-rated refund can be released provisionally after system-based risk evaluation, and CBIC instructions extend this to inverted duty claims. Flagged claimants can be excluded." },
        { label: "Appeal against refund rejection", value: "Form APL-01 within 3 months of the RFD-06 order; GSTAT appeal in APL-05 within 3 months of the appellate order." },
        { label: "GSTAT bench", value: "A Tamil Nadu State Bench (Chennai, Coimbatore or Madurai) assigned by the GSTAT portal. Confirm the bench there." },
      ]}
      subServicesHeading="What do we handle for Tiruppur knitwear businesses?"
      subServices={[
        { name: "Refund claim review", text: "Checking an RFD-01 claim before filing: turnover figures, the Rule 89 formula, eligible credits and supporting statements, so avoidable deficiency memos are not issued." },
        { name: "RFD-08 replies", text: "Replies to show-cause notices proposing to reject or reduce a refund, with the recomputation and documents the officer has asked for." },
        { name: "Stuck IGST refunds", text: "Reconciling GSTR-1 Table 6A with shipping bills, identifying the error that is holding the refund, and correcting it through the right channel." },
        { name: "Refund appeals", text: "APL-01 appeals against RFD-06 orders and GSTAT appeals where the first appeal fails." },
        { name: "Demand notices", text: "Replies to notices on merchant export supplies at 0.1%, job work, ITC mismatches and earlier-period Rule 96(10) issues." },
        { name: "LUT and export compliance", text: "Annual LUT filing and export documentation practices that reduce refund disputes in later years." },
      ]}
      howTo={{
        heading: "How do we take on a Tiruppur refund or notice matter?",
        steps: [
          { name: "Share the claim and the notice", text: "Send the RFD-01 acknowledgement, the deficiency memo or RFD-08, and the period's returns. We confirm the reply date." },
          { name: "Export data reconciliation", text: "We match invoices, shipping bills, GSTR-1 export tables and bank realisation, and isolate the records driving the dispute." },
          { name: "Recompute the claim", text: "We rework the refund under the correct formula and show the officer, line by line, where the proposed reduction goes wrong." },
          { name: "Reply filed online", text: "We draft the RFD-09 reply or the appeal, agree it with you on a video call, and file it on the portal." },
          { name: "Hearing", text: "We attend by video where the authority allows it, or in person by arrangement." },
          { name: "Prevent the next one", text: "Where the dispute came from a recurring data error, we fix the process so later claims do not repeat it." },
        ],
      }}
      faqs={[
        {
          question: "Our IGST export refund has not been credited. What should we check first?",
          answer:
            "Check whether the invoice details in GSTR-1 Table 6A match the shipping bill exactly: invoice number, date, value and IGST. Most held refunds trace to a mismatch or a missing GSTR-3B payment. The fix depends on whether the error sits on the GST or customs side, so identify it before writing to the department.",
        },
        {
          question: "We received an RFD-08 notice. How long do we have to reply?",
          answer:
            "The notice states the time, usually 15 days, and the reply is filed in Form RFD-09 on the GST portal. Answer each ground separately with documents. If you need more time, ask in writing before the deadline. An unanswered RFD-08 usually leads to a rejection order that must then be appealed.",
        },
        {
          question: "Can a refund rejection order be appealed?",
          answer:
            "Yes. A refund rejection in Form RFD-06 can be appealed in Form APL-01 within three months of communication, with a further month on sufficient cause. Because a pure refund rejection usually involves no tax demand, the 10% pre-deposit on disputed tax generally does not apply. A GSTAT appeal can follow.",
        },
        {
          question: "Why are input services excluded from our inverted duty refund?",
          answer:
            "Because Rule 89(5) uses 'net ITC' defined as credit on inputs, which means goods. The Supreme Court upheld this in VKC Footsteps in 2021. So credit on services such as job work charges or freight does not enter the formula, and disputes now centre on the goods-based calculation and rate-wise turnover.",
        },
        {
          question: "Our supplies to a merchant exporter at 0.1% are being questioned. What decides the case?",
          answer:
            "Whether the conditions of the concessional rate were met: the merchant exporter's registration and purchase order, export within the time allowed, and proof linking your invoice to the shipping bill. Where the merchant exporter delayed or failed to export, the supplier may be asked to pay the difference, so documents from the buyer matter.",
        },
        {
          question: "Does the 90% provisional refund apply to every Tiruppur exporter?",
          answer:
            "No. From October 2025, provisional refund of 90% depends on system-based risk evaluation, and the officer can withhold it with recorded reasons. Certain categories of registered persons are excluded. CBIC extended the facility to inverted duty claims by instruction. The balance is decided after verification and can still be disputed.",
        },
        {
          question: "Do we need to visit Chennai for a refund dispute?",
          answer:
            "No. Refund claims, replies and appeals are filed on the GST and GSTAT portals, and documents are shared by email. We discuss drafts on video calls and attend hearings by video where the authority permits, or in person by arrangement. You can visit our Anna Nagar office by appointment if you prefer.",
        },
      ]}
      relatedSlugs={["gst-notice-reply-chennai", "goods-and-services-tax", "iec-registration-chennai"]}
      relatedPosts={["tiruppur-export-refund-rejection", "lut-for-exporters", "itc-mismatch-notices", "gst-appellate-tribunal-gstat-explained"]}
    >
      <h2 className={H2}>Which refund and demand disputes come up in Tiruppur?</h2>
      <p className={P}>
        Tiruppur&apos;s knitwear trade is export-led and works through a long chain of small units: yarn buyers, knitters,
        dyers and bleachers, printers, embroiderers, stitching units and merchant exporters. GST disputes follow that
        structure. Exporters face refund questions on the shipping bill route and the LUT route; units inside the chain face
        inverted duty and job work questions; and anyone selling to merchant exporters can face a demand if the export
        conditions were not met. The table below sets out the patterns we see and what a defence usually rests on.
      </p>
      <Table head={["Dispute", "What usually triggers it", "What the defence rests on"]} rows={DISPUTES} />

      <h2 className={H2}>What is the timeline for contesting a refund rejection?</h2>
      <p className={P}>
        A refund dispute has an extra step at the start compared with a tax demand. The officer may first issue a deficiency
        memo, which simply requires a corrected claim, or a show-cause notice in RFD-08 proposing to reject or reduce it. Only
        after the RFD-06 order does the appeal clock start.
      </p>
      <Table head={["Step", "Time limit", "Form and pre-deposit", "Where it is heard"]} rows={TIMELINE} />
      <p className="mt-3 max-w-3xl text-xs text-slate">
        Refund and appeal provisions are in Sections 54, 107 and 112 of the CGST Act and Rules 89 to 96 of the CGST Rules, on{" "}
        <a href="https://cbic-gst.gov.in/gst-acts.html" target="_blank" rel="noopener noreferrer" className={LINK}>
          cbic-gst.gov.in
        </a>
        . Provisional refund changes are from Notification 13/2025-Central Tax and CBIC Instruction 6/2025, as reported.
      </p>

      <h2 className={H2}>Why do LUT refund claims get reduced?</h2>
      <p className={P}>
        Exporting under a Letter of Undertaking means no IGST is paid on the export, and the exporter instead claims a refund
        of the input tax credit that builds up. The amount is fixed by a formula in Rule 89(4): net ITC multiplied by the
        turnover of zero-rated supplies, divided by adjusted total turnover. Disputes arise when the officer takes a different
        export turnover figure, for example the value on the shipping bill where it is lower than the invoice, or excludes
        particular credits as unrelated to the exports. A careful reply rebuilds the formula with the correct figures and
        explains each credit, rather than restating the original claim. Filing the LUT for each financial year before
        exporting avoids a separate and avoidable dispute about whether exports were validly made without tax.
      </p>

      <h2 className={H2}>How did the September 2025 rate changes affect inverted duty claims?</h2>
      <p className={P}>
        The GST rate rationalisation effective 22 September 2025 changed rates across the textile chain, including man-made
        fibre and yarn, which industry bodies in Tiruppur said would reduce the build-up of credit. That helps future periods,
        but claims for earlier periods remain open, and the period around the change can produce its own mismatches between
        old-rate purchases and new-rate sales. Refund claims spanning the change need to be computed rate by rate and period by
        period, and supported with invoices showing which rate applied on which date.
      </p>

      <h2 className={H2}>How do we handle Tiruppur matters from Chennai?</h2>
      <p className={P}>
        C S Rushil &amp; Co. has one office, in Anna Nagar, Chennai, and no branch or representative in Tiruppur. For Tiruppur
        clients, refund claims, replies and appeals are prepared from documents shared by email and filed on the GST and GSTAT
        portals. Drafts are discussed on video calls. Hearings are attended by video where the authority permits; where an
        in-person appearance is needed, we arrange it in advance. Chartered Accountants can represent you before GST officers,
        the Appellate Authority and the Tribunal under Section 116 of the CGST Act; a High Court matter needs an advocate.
      </p>
      <p className={P}>
        For the full Tamil Nadu appeal ladder, GSTAT benches and documents checklist, see our{" "}
        <Link href="/gst-litigation-chennai" className={LINK}>GST litigation guide</Link>. For notices that have not yet become
        an order, see <Link href="/gst-notice-reply-chennai" className={LINK}>GST notice reply</Link>. For routine returns and
        LUT filing, see <Link href="/goods-and-services-tax" className={LINK}>GST registration and returns</Link>, and for a
        new entity, <Link href="/company-registration-tiruppur" className={LINK}>company registration in Tiruppur</Link>. To
        discuss a refund or notice, <Link href="/contact" className={LINK}>contact us</Link>.
      </p>
    </ServicePageTemplate>
  );
}
