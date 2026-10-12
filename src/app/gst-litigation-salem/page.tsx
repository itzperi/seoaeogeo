import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "GST Litigation and GSTAT Appeals in Salem | CA Firm";
const description =
  "GST notices and appeals for Salem steel, sago and textile units and lorry operators: e-way bill detentions under Section 129, SCN replies, APL-01 and GSTAT.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/gst-litigation-salem" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "GST Litigation & Appeals in Salem",
    description: "E-way bill detentions, show-cause replies and GST appeals for Salem businesses and transporters, handled from our Anna Nagar, Chennai office.",
    url: "/gst-litigation-salem",
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

const DETENTION_TIMELINE = [
  ["Interception and inspection", "On the spot", "Statement recorded in MOV-01; physical verification report in MOV-04", "Note discrepancies in writing; photograph documents"],
  ["Detention", "When goods and vehicle are detained", "Detention order and notice in MOV-06 and MOV-07", "Reply to the notice with documents explaining the lapse"],
  ["Release", "On payment of penalty, or on furnishing security as provided", "Owner coming forward: penalty of 200% of tax. Otherwise: the higher of 50% of the value of goods or 200% of tax", "Section 129(5) treats proceedings as concluded on payment, so pay under written protest and take advice before paying"],
  ["Penalty order", "Section 129(3) order in MOV-09", "The order must deal with the reply; a summary order without reasons is open to challenge", "Keep the uploaded copy for the limitation date"],
  ["First appeal", "3 months from communication of the order, plus up to 1 month", "Form APL-01 with a pre-deposit of 10% of the penalty (25% before the Finance Act, 2025 change from 1 October 2025)", "Appellate Authority; hearing in person or by video, as allowed"],
  ["Second appeal (GSTAT)", "3 months from the appellate order, plus up to 3 months", "Form APL-05; a further 10% of the penalty", "A Tamil Nadu State Bench assigned by the GSTAT portal"],
];

const DISPUTES = [
  ["E-way bill detentions", "Expired validity, wrong vehicle number, Part B not updated after transhipment, value or quantity mismatch", "Section 129 is for contraventions, not every clerical slip; evidence that tax was correctly charged and paid on the invoice"],
  ["Goods transport agency (GTA) tax", "Reverse charge versus forward charge: whether the GTA opted to pay tax itself by filing the annual declaration in time", "Annual declaration filed on the portal, consignment notes and invoices showing the option applied"],
  ["Hiring of lorries", "Department treats a lorry owner renting vehicles to a GTA as a GTA itself", "No consignment note issued by the owner; hiring of a goods carriage to a GTA is exempt under the services exemption notification"],
  ["ITC in the steel and scrap trade", "Credit denied where steel or scrap suppliers are found non-existent or cancelled retrospectively", "Weighbridge slips, transport documents, e-way bills, stock records and banking trail"],
  ["Sago and tapioca products", "Classification and rate of sago, starch and related products, and whether goods are pre-packaged and labelled", "Product specification, process, packing and labelling facts, tariff headings"],
  ["Textile units", "ITC mismatches and inverted duty refund claims for powerloom and processing units", "GSTR-2B reconciliation and rate-wise refund computation"],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/gst-litigation-salem`}
      serviceType="Tax Litigation"
      crumbLabel="GST Litigation in Salem"
      crumbHref="/gst-litigation-salem"
      parentCrumb={{ name: "GST Litigation", href: "/gst-litigation-chennai" }}
      eyebrow="GST Disputes · Salem"
      h1="GST Litigation and Appeals in Salem"
      subhead="E-way bill detentions, show-cause notice replies and GST appeals for Salem steel, sago and textile businesses and for lorry operators and transport agencies. We work from our only office in Anna Nagar, Chennai, file online and attend hearings by video where allowed, or in person by arrangement."
      introHeading="What GST disputes do Salem businesses and transporters face?"
      intro="For Salem businesses, the most time-critical GST dispute is usually an e-way bill detention under Section 129, where goods sit on the roadside until a penalty is paid. Other disputes involve transport agency tax, steel and scrap ITC, and sago classification, contested by reply, APL-01 appeal and the GST Appellate Tribunal."
      citation={{ label: "CGST Act and Rules on cbic-gst.gov.in", href: "https://cbic-gst.gov.in/gst-acts.html" }}
      keyFacts={[
        { label: "Where we work from", value: "Our only office is in Anna Nagar, Chennai. We have no office in Salem; filings are online and hearings are by video where permitted, or attended by arrangement." },
        { label: "Detention penalty", value: "Owner coming forward: 200% of the tax payable. Otherwise: the higher of 50% of the value of the goods or 200% of the tax (Section 129(1))." },
        { label: "Appeal pre-deposit for detention orders", value: "10% of the penalty from 1 October 2025 (earlier 25%). Courts have held the new rule does not apply where the notice was issued before that date." },
        { label: "First appeal deadline", value: "3 months from communication of the order (APL-01), extendable by 1 month on sufficient cause." },
        { label: "GSTAT bench", value: "A Tamil Nadu State Bench (Chennai, Coimbatore or Madurai) assigned by the GSTAT portal. Confirm the bench there." },
      ]}
      subServicesHeading="What do we handle for Salem businesses and transporters?"
      subServices={[
        { name: "Detention replies", text: "Replies to MOV-07 notices that explain the lapse and the correct tax position, prepared quickly because goods remain detained." },
        { name: "Detention appeals", text: "APL-01 appeals against Section 129 penalty orders, including challenges to unreasoned orders and penalties for clerical errors." },
        { name: "GTA and transport tax", text: "Positions on forward and reverse charge, the annual GTA declaration, and lorry hiring arrangements." },
        { name: "ITC denial defence", text: "Replies where credit is denied because steel, scrap or other suppliers were found non-existent." },
        { name: "Show-cause notices", text: "Replies to DRC-01 notices under Sections 73, 74 or 74A, including classification and rate disputes." },
        { name: "GSTAT appeals", text: "Second appeals in APL-05 where the first appeal is unsuccessful." },
      ]}
      howTo={{
        heading: "How do we handle a Salem detention or notice remotely?",
        steps: [
          { name: "Send the documents at once", text: "Share photographs of the MOV-01, MOV-06 or MOV-07, the invoice, e-way bill and lorry receipt. For a detention, time matters most." },
          { name: "Identify the lapse", text: "We work out exactly what went wrong: validity, vehicle, Part B, value, or the document itself, and whether tax was correctly charged." },
          { name: "Reply or release", text: "We draft the reply to the detention notice and advise whether to pay and release the goods while preserving the right to appeal." },
          { name: "Appeal after the order", text: "If a penalty order follows, we file APL-01 with the 10% pre-deposit and argue proportionality and the facts." },
          { name: "Hearing", text: "We attend by video where allowed, or in person by arrangement." },
          { name: "Fix the process", text: "Where the lapse is recurring, we suggest changes to how e-way bills are generated and updated." },
        ],
      }}
      faqs={[
        {
          question: "Our lorry was detained because the e-way bill expired a few hours earlier. Is the full penalty payable?",
          answer:
            "The officer can demand the Section 129 penalty, but where the invoice was genuine and tax was correctly charged, many orders have been challenged as disproportionate for a minor lapse without intent to evade. Reply to the notice promptly, and if you pay to release the goods, keep the right to appeal open.",
        },
        {
          question: "Can we pay the penalty to release goods and still appeal?",
          answer:
            "Often, but take care. Section 129(5) says proceedings are concluded once the penalty is paid, so payment should be made under written protest and the penalty order then appealed in APL-01 within three months. Courts have entertained such challenges, but the outcome depends on the facts, so take advice before paying.",
        },
        {
          question: "What penalty applies if we are not the owner of the goods?",
          answer:
            "Where the owner does not come forward, the penalty is the higher of 50% of the value of the goods or 200% of the tax payable. For an owner who comes forward, it is 200% of the tax. Transporters carrying third-party goods should get the owner to come forward where possible, since the difference can be large.",
        },
        {
          question: "We are a goods transport agency. Who pays the GST on our freight?",
          answer:
            "By default, the registered recipient pays under reverse charge. A GTA can opt to pay tax itself under forward charge by filing the annual declaration on the portal within the prescribed time. Disputes arise when the declaration was late or the invoices do not match the option chosen, so keep copies of both.",
        },
        {
          question: "We rent our lorries to a transport agency. Are we a GTA?",
          answer:
            "Not merely by renting. A GTA is a person who issues a consignment note for transporting goods by road. Hiring out a goods carriage to a GTA is exempt under the services exemption notification. Notices sometimes treat lorry owners as GTAs; the defence rests on showing that no consignment notes were issued by you.",
        },
        {
          question: "Will an appeal against a detention order go to the GSTAT?",
          answer:
            "Only after the first appeal. A Section 129 order is first appealed to the Appellate Authority in APL-01. If that fails, a second appeal in APL-05 goes to the GST Appellate Tribunal, to a Tamil Nadu State Bench assigned by the GSTAT portal, with a further 10% of the penalty as pre-deposit.",
        },
        {
          question: "Do we need to travel to Chennai to work with you?",
          answer:
            "No. Detention documents can be photographed and sent immediately, and replies and appeals are filed online. We discuss drafts on video calls and attend hearings by video where the authority permits, or in person by arrangement. You can visit our Anna Nagar office by appointment if you prefer.",
        },
      ]}
      relatedSlugs={["gst-notice-reply-chennai", "goods-and-services-tax", "gst-return-filing-chennai"]}
      relatedPosts={["eway-bill-detention-section-129-appeal", "gst-show-cause-notice-first-48-hours", "itc-mismatch-notices", "gst-appellate-tribunal-gstat-explained"]}
    >
      <h2 className={H2}>What does an e-way bill detention look like from start to appeal?</h2>
      <p className={P}>
        Salem sits on major road routes and has a large community of lorry owners, transport agencies and businesses shipping
        steel, sago, textiles and other goods by road. That makes e-way bill interceptions a regular event. The steps below are
        prescribed by Section 129 of the CGST Act and the MOV series of forms. The pressure point is at the start: goods are
        held until the penalty is paid or security is given, so decisions have to be made within hours, not weeks.
      </p>
      <Table head={["Stage", "Timing", "Form and amount", "What to do"]} rows={DETENTION_TIMELINE} />
      <p className="mt-3 max-w-3xl text-xs text-slate">
        Source: Sections 107, 112 and 129 of the CGST Act as amended, on{" "}
        <a href="https://cbic-gst.gov.in/gst-acts.html" target="_blank" rel="noopener noreferrer" className={LINK}>
          cbic-gst.gov.in
        </a>
        . The Section 130 confiscation route is separate and applies only where intent to evade is alleged.
      </p>

      <h2 className={H2}>Which other GST disputes are common in Salem?</h2>
      <p className={P}>
        Beyond transport, Salem&apos;s economy includes steel, from the Salem Steel Plant to downstream traders and fabricators,
        sago and tapioca processing, and textile units. Each brings its own pattern of disputes:
      </p>
      <Table head={["Dispute", "What usually triggers it", "What the defence rests on"]} rows={DISPUTES} />

      <h2 className={H2}>How can a detention penalty be challenged?</h2>
      <p className={P}>
        Section 129 targets goods transported in contravention of the Act. Not every defect in an e-way bill is treated the
        same way: a wrong digit in a vehicle number, a few hours of expired validity during a breakdown, or a Part B not
        updated at transhipment differs from moving goods with no invoice at all. Appeals usually argue that the invoice was
        genuine, tax was correctly charged and later paid in returns, and the lapse was clerical, so the penalty is
        disproportionate. The penalty order must also respond to the reply; an order that ignores the explanation given is
        itself a ground of appeal. Since 1 October 2025 the appeal needs a pre-deposit of 10% of the penalty rather than 25%,
        which makes appealing more practical for smaller consignments.
      </p>

      <h2 className={H2}>How do transport agencies get caught on reverse charge?</h2>
      <p className={P}>
        Freight by a goods transport agency is taxed under reverse charge by default, so the recipient pays. A GTA that wants
        to charge tax itself must exercise the option through an annual declaration on the portal before the financial year
        begins. Notices arise when an agency charged tax on its invoices without a valid declaration, or when a recipient
        failed to pay under reverse charge on the assumption that the agency would. A separate dispute concerns lorry owners
        who simply rent vehicles to agencies: they are not GTAs if they do not issue consignment notes, and hiring a goods
        carriage to a GTA is exempt.
      </p>

      <h2 className={H2}>How do we handle Salem matters from Chennai?</h2>
      <p className={P}>
        C S Rushil &amp; Co. has one office, in Anna Nagar, Chennai, and no branch or representative in Salem. For Salem clients,
        detention documents can be photographed and sent immediately, replies and appeals are filed online, and drafts are
        discussed on video calls. Hearings are attended by video where the authority permits; where an in-person appearance is
        needed, we arrange it in advance. Chartered Accountants can represent you before GST officers, the Appellate Authority
        and the Tribunal under Section 116 of the CGST Act. Detentions on highways need fast decisions, so tell us at once
        when goods are stopped.
      </p>
      <p className={P}>
        For the state-wide appeal ladder, GSTAT benches and documents checklist, see our{" "}
        <Link href="/gst-litigation-chennai" className={LINK}>GST litigation guide</Link>. For a notice that has not become an
        order, see <Link href="/gst-notice-reply-chennai" className={LINK}>GST notice reply</Link>. For routine filings, see{" "}
        <Link href="/goods-and-services-tax" className={LINK}>GST registration and returns</Link>, and for a new entity,{" "}
        <Link href="/company-registration-salem" className={LINK}>company registration in Salem</Link>. To discuss a detention
        or notice, <Link href="/contact" className={LINK}>contact us</Link>.
      </p>
    </ServicePageTemplate>
  );
}
