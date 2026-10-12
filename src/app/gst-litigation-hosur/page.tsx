import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "GST Litigation and GSTAT Appeals in Hosur | CA Firm";
const description =
  "GST disputes for Hosur auto component and electronics units: place-of-supply and IGST disputes, e-way bill detentions, SCN replies and GSTAT appeals.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/gst-litigation-hosur" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "GST Litigation & Appeals in Hosur",
    description: "Inter-state supply disputes, show-cause replies and GST appeals for Hosur manufacturers, handled from our Anna Nagar, Chennai office.",
    url: "/gst-litigation-hosur",
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
  ["Show-cause notice reply", "Within the time stated, usually 30 days", "No pre-deposit. Reply in DRC-06 with the supply chain and delivery documents", "Proper officer in Tamil Nadu (Central GST or State Commercial Taxes)"],
  ["First appeal", "3 months from communication of the order, plus up to 1 month on sufficient cause", "Form APL-01. Admitted amount plus 10% of disputed tax (cap ₹20 crore CGST + ₹20 crore SGST, or ₹40 crore IGST)", "Appellate Authority in the state whose officer passed the order"],
  ["Second appeal (GSTAT)", "3 months from communication of the appellate order, plus up to 3 months on sufficient cause", "Form APL-05 on the GSTAT e-filing portal. A further 10% of tax in dispute, same caps", "Principal Bench, New Delhi, where place of supply is in issue; otherwise a State Bench assigned by the portal"],
  ["Further appeal", "Principal Bench orders go to the Supreme Court; State Bench orders to the High Court within 180 days", "Filed by an advocate", "Supreme Court or Madras High Court"],
];

const DISPUTES = [
  ["Intra-state or inter-state supply", "Goods delivered to a Bengaluru plant on a Hosur invoice charged CGST and SGST, or the reverse, and the department demands the other tax", "Location of the supplier and the place of supply under the IGST Act, delivery documents and the bill-to-ship-to chain"],
  ["Tax paid under the wrong head", "Supplier paid CGST and SGST where IGST was due (or vice versa) and the department demands tax again", "Section 77 of the CGST Act and Section 19 of the IGST Act: pay the correct tax and claim refund of the wrong one, without interest on the correct tax"],
  ["Bill-to-ship-to transactions", "Goods billed to a buyer in one state but shipped to a third party in another, with confusion over the tax charged", "Section 10(1)(b) of the IGST Act: place of supply is the principal place of business of the person who directs the delivery"],
  ["Inter-state e-way bill detentions", "Vehicles stopped near the state border for e-way bill errors, including on job work movements", "For inter-state job work, an e-way bill is required regardless of value; documents showing the movement's true nature"],
  ["Transactions with your own units in other states", "Supplies and common services between a Hosur unit and a Bengaluru unit of the same company are supplies between distinct persons", "Rule 28 valuation, the full-credit argument for the receiving unit, and Input Service Distributor (ISD) records for common services"],
  ["Supplies to SEZ units", "Zero-rating denied for supplies to SEZ units for missing endorsements or LUT", "Specified officer's endorsement, LUT for the year and invoice details"],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/gst-litigation-hosur`}
      serviceType="Tax Litigation"
      crumbLabel="GST Litigation in Hosur"
      crumbHref="/gst-litigation-hosur"
      parentCrumb={{ name: "GST Litigation", href: "/gst-litigation-chennai" }}
      eyebrow="GST Disputes · Hosur"
      h1="GST Litigation and Appeals in Hosur"
      subhead="Place-of-supply disputes, inter-state e-way bill detentions, show-cause notice replies and GST appeals for Hosur auto component and electronics manufacturers. We work from our only office in Anna Nagar, Chennai, file online and attend hearings by video where allowed, or in person by arrangement."
      introHeading="Why are inter-state disputes common for Hosur manufacturers?"
      intro="Hosur sits on the Tamil Nadu side of the border with Karnataka, and many of its auto component and electronics units supply customers, sister plants and job workers in and around Bengaluru. Place of supply, the correct tax head and inter-state e-way bills cause most disputes. Place-of-supply appeals go to the GSTAT Principal Bench in New Delhi."
      citation={{ label: "CGST and IGST Acts on cbic-gst.gov.in", href: "https://cbic-gst.gov.in/gst-acts.html" }}
      keyFacts={[
        { label: "Where we work from", value: "Our only office is in Anna Nagar, Chennai. We have no office in Hosur; filings are online and hearings are by video where permitted, or attended by arrangement." },
        { label: "Place-of-supply appeals", value: "Where one of the issues is place of supply, the GSTAT appeal is heard by the Principal Bench in New Delhi, not a Tamil Nadu State Bench." },
        { label: "Wrong tax head", value: "Tax paid as CGST and SGST instead of IGST (or the reverse) is refundable under Section 77 CGST / Section 19 IGST once the correct tax is paid, without interest on the correct tax." },
        { label: "Detention outside Tamil Nadu", value: "If goods are detained by Karnataka officers, the order and the first appeal are in Karnataka. We tell you when local representation there would serve you better." },
        { label: "First appeal deadline", value: "3 months from communication of the order (APL-01), extendable by 1 month on sufficient cause." },
      ]}
      subServicesHeading="What do we handle for Hosur manufacturers?"
      subServices={[
        { name: "Place-of-supply positions", text: "Analysis of supply chains, delivery terms and bill-to-ship-to arrangements to fix whether IGST or CGST and SGST was correct." },
        { name: "Wrong-head refunds", text: "Correcting tax paid under the wrong head and claiming the refund, and replying to demands that ignore Section 77." },
        { name: "E-way bill detentions", text: "Replies and appeals for detentions in Tamil Nadu, including inter-state job work movements." },
        { name: "Distinct-person transactions", text: "Valuation of supplies and cross-charges between Hosur and other-state units, and ISD distribution of common services." },
        { name: "Show-cause replies and appeals", text: "Replies under Sections 73, 74 or 74A, APL-01 appeals, and APL-05 appeals to the Principal or State Bench of GSTAT." },
        { name: "SEZ and export supplies", text: "Defending zero-rating on supplies to SEZ units and exports, including refund disputes." },
      ]}
      howTo={{
        heading: "How do we take on a Hosur GST matter remotely?",
        steps: [
          { name: "Share the notice and the chain", text: "Send the notice or order, sample invoices, e-way bills and delivery documents. We confirm the deadline and which state's officer issued it." },
          { name: "Map the supply chain", text: "We draw the movement of goods and invoices between suppliers, your units, buyers and job workers across the border." },
          { name: "Fix the tax position", text: "We work out the correct place of supply for each flow and whether tax was paid under the right head." },
          { name: "Draft and agree", text: "We draft the reply, refund claim or appeal and agree it with you on a video call." },
          { name: "Hearing", text: "We attend by video where allowed, or in person by arrangement." },
          { name: "Correct the system", text: "Where invoicing logic in your ERP caused the error, we explain the change needed to stop it recurring." },
        ],
      }}
      faqs={[
        {
          question: "We charged CGST and SGST on a supply that should have been IGST. Do we have to pay twice?",
          answer:
            "You must pay the correct tax, IGST, but you can then claim a refund of the CGST and SGST wrongly paid under Section 77 of the CGST Act. No interest is payable on the IGST in such cases. Notices that demand IGST with interest while ignoring the earlier payment can be contested on this basis.",
        },
        {
          question: "Which GSTAT bench hears a place-of-supply dispute from Hosur?",
          answer:
            "The Principal Bench in New Delhi. Section 109 reserves appeals where one of the issues is place of supply for the Principal Bench. Other disputes go to a Tamil Nadu State Bench assigned by the portal. A further appeal from the Principal Bench goes directly to the Supreme Court, not the High Court.",
        },
        {
          question: "Our goods were detained by Karnataka officers. Can you handle the appeal?",
          answer:
            "The detention order and first appeal would be in Karnataka, before Karnataka authorities. We can prepare the reply and appeal documents, but in-person hearings there may be better handled by a representative based in Karnataka. We say so plainly at the start, so you can decide who should appear.",
        },
        {
          question: "Do we need an e-way bill for sending parts to a job worker in Bengaluru?",
          answer:
            "Yes. For inter-state movement of goods to a job worker, an e-way bill is required regardless of the value of the consignment, generated by the principal or the registered job worker. Missing or incomplete e-way bills on job work movements are a common reason for detention near the border.",
        },
        {
          question: "Our Hosur and Bengaluru plants share head office services. Is GST payable on that?",
          answer:
            "Yes, the two plants are distinct persons under GST because they have separate registrations. Common input services should be distributed through an Input Service Distributor registration, which is mandatory for such services from 1 April 2025. Supplies between the plants are valued under Rule 28, and full-credit cases follow the invoice value.",
        },
        {
          question: "Who decides the place of supply in a bill-to-ship-to transaction?",
          answer:
            "Section 10(1)(b) of the IGST Act. Where goods are delivered to a third person on the direction of the buyer, the buyer is treated as having received the goods, and the place of supply is the buyer's principal place of business. Delivery documents must show the direction clearly for the position to hold.",
        },
        {
          question: "Do we need to visit Chennai to work with you?",
          answer:
            "No. Notices, invoices and e-way bills can be shared by email, and replies and appeals are filed online. We discuss drafts on video calls and attend hearings by video where the authority permits, or in person by arrangement. You can visit our Anna Nagar office by appointment if you prefer.",
        },
      ]}
      relatedSlugs={["gst-notice-reply-chennai", "goods-and-services-tax", "gst-return-filing-chennai"]}
      relatedPosts={["eway-bill-detention-section-129-appeal", "gst-appellate-tribunal-gstat-explained", "gst-show-cause-notice-first-48-hours", "itc-mismatch-notices"]}
    >
      <h2 className={H2}>Which GST disputes are typical for Hosur&apos;s auto and electronics units?</h2>
      <p className={P}>
        Hosur, in Krishnagiri district, has developed a large manufacturing base in its SIPCOT industrial areas, led by auto
        components and electronics, with many units supplying vehicle and electronics makers on both sides of the state border.
        Goods, invoices and job work flow constantly between Tamil Nadu and Karnataka, often between units of the same group.
        That makes the classification of each flow as intra-state or inter-state, and the correct tax head, the heart of most
        disputes. The table below sets out the patterns we see.
      </p>
      <Table head={["Dispute", "What usually triggers it", "What the defence rests on"]} rows={DISPUTES} />

      <h2 className={H2}>What are the appeal steps and time limits for a Hosur GST order?</h2>
      <p className={P}>
        The route is the same as elsewhere, with one difference that matters for Hosur: where the dispute involves place of
        supply, the Tribunal appeal goes to the Principal Bench in New Delhi, and the next appeal goes straight to the Supreme
        Court.
      </p>
      <Table head={["Step", "Time limit", "Form and pre-deposit", "Where it is heard"]} rows={TIMELINE} />
      <p className="mt-3 max-w-3xl text-xs text-slate">
        Sections 107, 109, 112, 117 and 118 of the CGST Act as amended, and Sections 10 and 19 of the IGST Act, on{" "}
        <a href="https://cbic-gst.gov.in/gst-acts.html" target="_blank" rel="noopener noreferrer" className={LINK}>
          cbic-gst.gov.in
        </a>
        .
      </p>

      <h2 className={H2}>What happens when tax is paid under the wrong head?</h2>
      <p className={P}>
        A Hosur supplier delivering to a Bengaluru customer charges IGST; a supply to a customer&apos;s Hosur plant attracts CGST
        and SGST. When an invoice gets this wrong, the department may demand the correct tax. The law does not require the
        taxpayer to lose the tax already paid: once the correct tax is paid, Section 77 of the CGST Act and Section 19 of the
        IGST Act allow a refund of the tax wrongly paid, and no interest is charged on the correct tax. CBIC has clarified the
        refund mechanism by circular. The practical difficulty is timing: the refund claim has its own limitation period, so
        the correction and the refund should be handled together rather than one after the other.
      </p>

      <h2 className={H2}>Why do inter-state job work and e-way bills lead to detentions?</h2>
      <p className={P}>
        Hosur units commonly send parts for plating, heat treatment, machining or assembly to job workers across the border,
        and receive them back. For inter-state movements to job workers, an e-way bill is needed whatever the value, and the
        delivery challan must accompany the goods. Detentions often arise from a missing e-way bill on a low-value consignment,
        a challan that does not match the goods, or a Part B not updated after a vehicle change. If the detention happens in
        Tamil Nadu, the reply and appeal follow Section 129 here; if it happens in Karnataka, the proceedings are there. Either
        way, a prompt reply and an appeal with the 10% penalty pre-deposit, where needed, are the main remedies.
      </p>

      <h2 className={H2}>How do we handle Hosur matters from Chennai?</h2>
      <p className={P}>
        C S Rushil &amp; Co. has one office, in Anna Nagar, Chennai, and no branch or representative in Hosur. For Hosur clients,
        documents are shared by email, drafts are discussed on video calls, and replies, refund claims and appeals are filed on
        the GST and GSTAT portals. Hearings are attended by video where the authority permits; where an in-person appearance is
        needed, we arrange it in advance. Chartered Accountants can represent you before GST officers, the Appellate Authority
        and the Tribunal under Section 116 of the CGST Act; Supreme Court and High Court work needs an advocate.
      </p>
      <p className={P}>
        For the state-wide appeal ladder, GSTAT benches and documents checklist, see our{" "}
        <Link href="/gst-litigation-chennai" className={LINK}>GST litigation guide</Link>. For a notice that has not yet become
        an order, see <Link href="/gst-notice-reply-chennai" className={LINK}>GST notice reply</Link>. For routine filings, see{" "}
        <Link href="/goods-and-services-tax" className={LINK}>GST registration and returns</Link>, and for a new entity,{" "}
        <Link href="/company-registration-hosur" className={LINK}>company registration in Hosur</Link>. To discuss a notice,{" "}
        <Link href="/contact" className={LINK}>contact us</Link>.
      </p>
    </ServicePageTemplate>
  );
}
