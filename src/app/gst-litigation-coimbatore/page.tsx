import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "GST Litigation & GSTAT Appeals in Coimbatore | CA Firm";
const description =
  "GST notices and appeals for Coimbatore pump, motor, foundry and textile machinery units: SCN replies, APL-01 appeals and Coimbatore GSTAT bench, handled online.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/gst-litigation-coimbatore" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "GST Litigation & Appeals in Coimbatore",
    description: "Show-cause replies, first appeals and GSTAT appeals for Coimbatore manufacturers, handled from our Anna Nagar, Chennai office.",
    url: "/gst-litigation-coimbatore",
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
  ["Show-cause notice reply", "Within the time stated in the notice, usually 30 days", "No pre-deposit. Reply in DRC-06 with documents; ask for a personal hearing", "Proper officer (Central GST or State Commercial Taxes, depending on your allotment)"],
  ["First appeal", "3 months from communication of the order, plus up to 1 month on sufficient cause", "Form APL-01 on the GST portal. Admitted amount plus 10% of disputed tax (cap ₹20 crore CGST + ₹20 crore SGST); 10% of penalty for penalty-only orders", "Appellate Authority; personal hearing in person or by video, as the authority allows"],
  ["Second appeal (GSTAT)", "3 months from communication of the appellate order, plus up to 3 months on sufficient cause", "Form APL-05 on the GSTAT e-filing portal. A further 10% of the tax in dispute, same caps", "GSTAT State Bench, which sits in Coimbatore on Thursdays under the current roster; the portal assigns the bench"],
  ["High Court", "180 days from the GSTAT order", "Only on a substantial question of law; filed by an advocate", "Madras High Court"],
];

const DISPUTES = [
  ["Classification of pumps, motors and parts", "Whether a part or sub-assembly falls under the pump or motor heading or a general parts heading, and the rate change history around the September 2025 rationalisation", "HSN chapter and section notes, drawings and catalogues showing the part's sole or principal use"],
  ["Moulds, dies and patterns supplied by customers", "Department adds the value of tooling supplied free by an OEM to the casting or component price", "Contract terms on who bears tooling cost; CBIC Circular 47/21/2018-GST on free-supply moulds and dies"],
  ["Job work for castings and machining", "Inputs or castings not returned within one year (three years for capital goods), treated as a deemed supply; scrap at the job worker", "Delivery challans, ITC-04 filings, job worker's records and return trail"],
  ["ITC on scrap, pig iron and ingot purchases", "Credit denied because a metal supplier is later found non-existent or its registration is cancelled retrospectively", "Weighbridge slips, transport and e-way bill records, melting logs, stock registers and banking trail"],
  ["Export refunds for textile machinery and spares", "Refund of unutilised ITC on LUT exports reduced or rejected for mismatches with shipping bills or invoice values", "Shipping bills, e-BRC or FIRC, GSTR-1 export table reconciliation and the Rule 89(4) computation"],
  ["Related-party and dealer-network valuation", "Supplies between family group units or to related dealers valued below open market price", "Rule 28 valuation, full-ITC argument where the recipient can claim the credit, comparable invoices"],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/gst-litigation-coimbatore`}
      serviceType="Tax Litigation"
      crumbLabel="GST Litigation in Coimbatore"
      crumbHref="/gst-litigation-coimbatore"
      parentCrumb={{ name: "GST Litigation", href: "/gst-litigation-chennai" }}
      eyebrow="GST Disputes · Coimbatore"
      h1="GST Litigation and Appeals in Coimbatore"
      subhead="Show-cause notice replies, first appeals and GST Appellate Tribunal appeals for Coimbatore pump, motor, foundry and textile machinery businesses. We work from our only office in Anna Nagar, Chennai, file everything online and attend hearings by video where allowed, or in person by arrangement."
      introHeading="How does GST litigation work for a Coimbatore business?"
      intro="A Coimbatore GST dispute follows the same statutory ladder as anywhere in India: a reply to the show-cause notice, a first appeal in Form APL-01 within three months of the order, then a second appeal to the GST Appellate Tribunal, which has a Tamil Nadu State Bench sitting in Coimbatore. We handle these from Chennai, entirely online."
      citation={{ label: "GSTAT list of State Benches (gstat.gov.in)", href: "https://www.gstat.gov.in/state-bench" }}
      keyFacts={[
        { label: "Where we work from", value: "Our only office is in Anna Nagar, Chennai. We have no office in Coimbatore; filings are online and hearings are by video where permitted, or attended by arrangement." },
        { label: "GSTAT bench", value: "Coimbatore is one of the sitting locations of the Tamil Nadu State Benches notified for GSTAT. Under the reported roster from 1 August 2026, it hears Category I and II matters on Thursdays. Confirm your bench on the GSTAT portal." },
        { label: "First appeal deadline", value: "3 months from communication of the order (APL-01), extendable by 1 month on sufficient cause." },
        { label: "Pre-deposit", value: "10% of disputed tax for the first appeal and a further 10% at GSTAT, each capped at ₹20 crore CGST and ₹20 crore SGST." },
        { label: "Typical disputes", value: "Classification of pumps, motors and parts; tooling and mould valuation; job work; ITC on metal scrap purchases; export refunds." },
      ]}
      subServicesHeading="What do we handle for Coimbatore manufacturers?"
      subServices={[
        { name: "Show-cause notice replies", text: "Replies to DRC-01 notices under Sections 73, 74 or 74A, built on an invoice-level reconciliation of the disputed period rather than general submissions." },
        { name: "Scrutiny and audit support", text: "Responses to ASMT-10 scrutiny notices and departmental audit observations, before they turn into a formal demand." },
        { name: "First appeals (APL-01)", text: "Grounds of appeal, statement of facts, pre-deposit computation and representation before the Appellate Authority." },
        { name: "GSTAT appeals (APL-05)", text: "Appeals to the GST Appellate Tribunal, including preparation for hearings at the Coimbatore bench when the portal assigns it." },
        { name: "Classification positions", text: "Technical write-ups for pumps, motors, castings and machine parts, drawing on drawings, catalogues and the tariff notes." },
        { name: "Refund disputes", text: "Rejected or reduced refunds on exports under LUT and on inverted duty structure, including RFD-08 replies and appeals." },
      ]}
      howTo={{
        heading: "How do we take on a Coimbatore GST matter remotely?",
        steps: [
          { name: "Send the notice or order", text: "Email or WhatsApp a copy of the notice or order. We confirm the section invoked, the period and your exact deadline." },
          { name: "Document list and data pull", text: "We send a list tailored to the allegation, for example job work challans and ITC-04 for a job work demand, or weighbridge and transport records for a supplier ITC denial." },
          { name: "Reconciliation", text: "We reconcile the period from your returns, GSTR-2B and books, and identify where the department's figures are wrong or incomplete." },
          { name: "Reply or appeal drafted", text: "We draft the reply or appeal, discuss it with you on a video call, and file it online after your approval." },
          { name: "Hearing", text: "We attend the personal hearing by video where the authority allows it, or in person by arrangement, under Section 116 of the CGST Act." },
          { name: "Next step decided", text: "After the order, we tell you plainly whether a further appeal is worth the pre-deposit and the time." },
        ],
      }}
      faqs={[
        {
          question: "Which GSTAT bench will hear an appeal from Coimbatore?",
          answer:
            "Usually a Tamil Nadu State Bench, and the Tamil Nadu benches sit in Coimbatore on Thursdays under the roster reported from 1 August 2026. The GSTAT e-filing portal assigns the bench, and place-of-supply disputes go to the Principal Bench in New Delhi, so confirm the assignment on the portal before planning attendance.",
        },
        {
          question: "Do I need to travel to Chennai to work with you?",
          answer:
            "No. Notices, replies and appeals are all on the GST and GSTAT portals, and documents can be shared by email. We discuss drafts on video calls. Hearings are attended by video where the authority permits, or in person by arrangement. You can also visit our Anna Nagar office by appointment if you prefer.",
        },
        {
          question: "Our customer supplies the moulds for our castings. Can GST be demanded on their value?",
          answer:
            "Not automatically. CBIC Circular 47/21/2018-GST clarifies that moulds and dies supplied free by the customer are not added to the value of the component where the contract does not oblige the supplier to provide them. The contract wording decides the outcome, so we start any reply with the purchase order and tooling terms.",
        },
        {
          question: "Our scrap supplier's registration was cancelled. Will we lose the input tax credit?",
          answer:
            "Not necessarily. Where you received the goods and paid the supplier, the defence rests on proving the transaction was real: e-way bills, transport records, weighbridge slips, stock and melting records, and bank payments. A retrospective cancellation of the supplier's registration alone does not prove the buyer's credit was wrong, though each case turns on its evidence.",
        },
        {
          question: "Castings we sent for machining stayed with the job worker for over a year. Is that a supply?",
          answer:
            "It can be. Under Section 143, inputs not returned within one year, or capital goods within three years, are treated as supplied by you on the day they were sent out. Accurate ITC-04 filings and delivery challans are the main defence, together with evidence of when goods actually came back.",
        },
        {
          question: "What happens if our pump consignment is detained for an e-way bill error?",
          answer:
            "The officer issues a detention notice under Section 129 and demands penalty for release. Reply quickly, because the goods stay detained. If a penalty order follows, an appeal needs a pre-deposit of 10% of the penalty. Minor clerical errors in an e-way bill are often argued as not justifying the full penalty.",
        },
        {
          question: "Is it worth appealing a small GST demand?",
          answer:
            "Sometimes not. A first appeal needs 10% of the disputed tax upfront and months of follow-up. For a small demand, paying with interest, or using the reduced-penalty option within the notice period, can be cheaper. We assess the merits, the pre-deposit and the time cost before recommending an appeal.",
        },
      ]}
      relatedSlugs={["gst-notice-reply-chennai", "goods-and-services-tax", "gst-return-filing-chennai"]}
      relatedPosts={["gst-appellate-tribunal-gstat-explained", "itc-mismatch-notices", "gst-show-cause-notice-first-48-hours", "lut-for-exporters"]}
    >
      <h2 className={H2}>Which GST disputes are typical for Coimbatore industry?</h2>
      <p className={P}>
        The Coimbatore district administration describes the district as a textile centre with a large engineering base,
        including foundries, motor pump sets, wet grinders, and textile machinery and spares. Those industries share a few
        features that shape their GST disputes: technically detailed products where the tariff heading is not obvious, long
        supply chains of castings and machined parts moving between units on job work, heavy purchases of metal scrap and pig
        iron, and a significant export trade in machinery and spares. The table below sets out the disputes we see most often
        from these businesses and what a defence usually depends on.
      </p>
      <Table head={["Dispute", "What usually triggers it", "What the defence rests on"]} rows={DISPUTES} />

      <h2 className={H2}>What are the appeal steps and time limits for a Coimbatore GST order?</h2>
      <p className={P}>
        Time limits run from the date the order is communicated to you, which is usually the date it is uploaded on the GST
        portal. Missing the first-appeal window by more than a month generally ends the statutory route, leaving only a writ
        petition in the High Court on limited grounds.
      </p>
      <Table head={["Step", "Time limit", "Form and pre-deposit", "Where it is heard"]} rows={TIMELINE} />
      <p className="mt-3 max-w-3xl text-xs text-slate">
        Pre-deposit and limitation are under Sections 107 and 112 of the CGST Act (as amended by the Finance (No. 2) Act, 2024
        and the Finance Act, 2025), available on{" "}
        <a href="https://cbic-gst.gov.in/gst-acts.html" target="_blank" rel="noopener noreferrer" className={LINK}>
          cbic-gst.gov.in
        </a>
        . Bench sittings are as reported from GSTAT Office Order No. 4/GSTAT/PB/2026 and can change.
      </p>

      <h2 className={H2}>Why do classification disputes recur for pumps, motors and machine parts?</h2>
      <p className={P}>
        Engineering goods often sit between two tariff headings. A component may be argued to be a part of a pump, a part of a
        motor, or a general-purpose article such as a bearing, valve or fastener with its own heading. The Section and Chapter
        Notes of the tariff decide which heading wins, and they turn on facts such as whether the part is designed solely or
        principally for one machine. The September 2025 rate rationalisation changed rates for many goods, so a classification
        argument also has a period dimension: the same product may have carried different rates before and after 22 September
        2025, and the department may look at both periods. A strong reply therefore includes engineering drawings, catalogues
        and an explanation of how the part is used, not only a reference to the HSN code on the invoice.
      </p>

      <h2 className={H2}>How do job work and tooling create GST exposure for foundries?</h2>
      <p className={P}>
        Foundries and machining units commonly send castings, patterns and dies back and forth with customers and job workers
        on delivery challans. Section 143 allows this without paying tax, but only if inputs come back within one year and
        capital goods within three years, and only if the movements are reported in Form ITC-04. Where returns are late or the
        ITC-04 is incomplete, the department can treat the goods as supplied on the day they left. Separately, tooling supplied
        free by an OEM customer raises a valuation question under Section 15, which CBIC Circular 47/21/2018-GST addresses for
        moulds and dies. In both cases the paperwork that exists today decides how much of a demand can be defended, so we ask
        for challans, ITC-04 copies and purchase orders early.
      </p>

      <h2 className={H2}>How do we handle Coimbatore matters from Chennai?</h2>
      <p className={P}>
        C S Rushil &amp; Co. has one office, in Anna Nagar, Chennai, and no branch or representative in Coimbatore. For
        Coimbatore clients, the work is done online: notices and orders are read from the portal, documents are shared by
        email, drafts are discussed on video calls, and replies and appeals are filed electronically. Appellate Authorities and
        GSTAT benches decide whether a hearing can be attended by video; where an in-person appearance is needed, we arrange
        it in advance. Chartered Accountants can represent you before GST officers, the Appellate Authority and the Tribunal
        under Section 116 of the CGST Act. A High Court appeal or writ needs an advocate.
      </p>
      <p className={P}>
        For the full Tamil Nadu picture, including the appeal ladder and the documents checklist, see our{" "}
        <Link href="/gst-litigation-chennai" className={LINK}>GST litigation guide</Link>. If you have a notice but no order
        yet, our <Link href="/gst-notice-reply-chennai" className={LINK}>GST notice reply</Link> page explains the reply stage,
        and the <Link href="/blog/gst-appellate-tribunal-gstat-explained" className={LINK}>GST Appellate Tribunal explainer</Link>{" "}
        covers how GSTAT appeals work. For routine filings, see{" "}
        <Link href="/goods-and-services-tax" className={LINK}>GST registration and returns</Link>; to set up a new entity in
        the district, see <Link href="/company-registration-coimbatore" className={LINK}>company registration in Coimbatore</Link>.
        To discuss a notice, <Link href="/contact" className={LINK}>contact us</Link>.
      </p>
    </ServicePageTemplate>
  );
}
