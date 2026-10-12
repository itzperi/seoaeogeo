import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "GST Litigation & GSTAT Appeals in Madurai | CA Firm";
const description =
  "GST notices and appeals for Madurai and southern Tamil Nadu traders, granite units and agri-linked businesses: SCN replies, APL-01 and the Madurai GSTAT bench.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/gst-litigation-madurai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "GST Litigation & Appeals in Madurai",
    description: "Show-cause replies, first appeals and GSTAT appeals for Madurai and southern Tamil Nadu businesses, handled from our Anna Nagar, Chennai office.",
    url: "/gst-litigation-madurai",
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
  ["Show-cause notice reply", "Within the time stated, usually 30 days", "No pre-deposit. Reply in DRC-06; paying tax and interest within the notice period can reduce penalty", "Proper officer (Central GST or State Commercial Taxes)"],
  ["First appeal", "3 months from communication of the order, plus up to 1 month on sufficient cause", "Form APL-01. Admitted amount plus 10% of disputed tax (cap ₹20 crore CGST + ₹20 crore SGST); 10% of penalty for penalty-only orders", "Appellate Authority; hearing in person or by video, as allowed"],
  ["Second appeal (GSTAT)", "3 months from communication of the appellate order, plus up to 3 months on sufficient cause", "Form APL-05 on the GSTAT e-filing portal. A further 10% of the tax in dispute, same caps", "GSTAT State Bench; the Madurai bench sits on the first three Fridays of each month under the current roster"],
  ["High Court", "180 days from the GSTAT order (appeal); writs on jurisdiction or natural justice at any stage", "Filed by an advocate", "Madras High Court, whose Madurai Bench hears matters from the southern districts including Madurai"],
];

const DISPUTES = [
  ["Agricultural produce and flowers", "Whether goods such as fresh flowers or farm produce remain exempt once packed, labelled or processed, and the GST position of commission agents", "Exemption notification wording, packing and labelling facts, and the nature of the agent's service"],
  ["Granite and stone", "Classification of rough blocks versus cut and polished slabs, and GST on royalty or lease payments for quarrying rights under reverse charge", "Process description, tariff headings, and the current state of litigation on royalty"],
  ["Turnover mismatches for traders", "Department compares GSTR-1, GSTR-3B, e-way bills and income-tax data and alleges suppressed sales", "Reconciliation of each data source, explaining returns, credit notes, stock transfers and timing differences"],
  ["Composition scheme eligibility", "Composition taxpayer alleged to have crossed the turnover limit, made inter-state supplies or supplied ineligible goods", "Turnover computation, nature of supplies, and the date eligibility was lost"],
  ["Registration cancellation", "REG-17 for non-filing or for a business found not functioning at the declared place", "Proof of business at the address, pending returns filed, and revocation within the time allowed"],
  ["ITC from cancelled suppliers", "Credit denied where suppliers' registrations were cancelled with retrospective effect", "Evidence of actual receipt of goods and payment to the supplier"],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/gst-litigation-madurai`}
      serviceType="Tax Litigation"
      crumbLabel="GST Litigation in Madurai"
      crumbHref="/gst-litigation-madurai"
      parentCrumb={{ name: "GST Litigation", href: "/gst-litigation-chennai" }}
      eyebrow="GST Disputes · Madurai"
      h1="GST Litigation and Appeals in Madurai"
      subhead="Show-cause notice replies, first appeals and GST Appellate Tribunal appeals for traders, granite units and agri-linked businesses in Madurai and southern Tamil Nadu. We work from our only office in Anna Nagar, Chennai, file online and attend hearings by video where allowed, or in person by arrangement."
      introHeading="How does GST litigation work for a Madurai business?"
      intro="A Madurai GST dispute starts with a reply to the show-cause notice, moves to a first appeal in Form APL-01 within three months of the order, and then to the GST Appellate Tribunal, which lists Madurai among its three Tamil Nadu benches. High Court matters from the area go to the Madurai Bench of the Madras High Court."
      citation={{ label: "GSTAT list of State Benches (gstat.gov.in)", href: "https://www.gstat.gov.in/state-bench" }}
      keyFacts={[
        { label: "Where we work from", value: "Our only office is in Anna Nagar, Chennai. We have no office in Madurai; filings are online and hearings are by video where permitted, or attended by arrangement." },
        { label: "GSTAT bench", value: "Madurai is a Tamil Nadu State Bench. Under the reported roster from 1 August 2026, it hears Category I and II matters on the first, second and third Fridays of each month. Confirm your bench on the GSTAT portal." },
        { label: "High Court", value: "The Madurai Bench of the Madras High Court hears writs and appeals from Madurai and other southern districts." },
        { label: "First appeal deadline", value: "3 months from communication of the order (APL-01), extendable by 1 month on sufficient cause." },
        { label: "Typical disputes", value: "Agri and flower trade exemptions, granite classification and royalty, trader turnover mismatches, composition eligibility, registration cancellation." },
      ]}
      subServicesHeading="What do we handle for Madurai and southern Tamil Nadu businesses?"
      subServices={[
        { name: "Show-cause notice replies", text: "Replies to DRC-01 notices under Sections 73, 74 or 74A, with a reconciliation that explains every figure the department relies on." },
        { name: "Data-mismatch notices", text: "Replies to ASMT-10 and similar notices built on comparisons of GSTR-1, GSTR-3B, e-way bills and income-tax data." },
        { name: "Registration matters", text: "Replies to REG-17 notices and applications to revoke cancelled registrations, including appeals where revocation is refused." },
        { name: "First appeals (APL-01)", text: "Grounds of appeal, pre-deposit computation and representation before the Appellate Authority." },
        { name: "GSTAT appeals (APL-05)", text: "Appeals to the Tribunal, including preparation for hearings at the Madurai bench when assigned." },
        { name: "Exemption and classification positions", text: "Written positions on agricultural produce, flowers, granite and stone products, based on the notification and tariff wording." },
      ]}
      howTo={{
        heading: "How do we take on a Madurai GST matter remotely?",
        steps: [
          { name: "Send the notice or order", text: "Share a copy by email or WhatsApp. We confirm the section invoked, the period covered and your deadline." },
          { name: "Collect the data", text: "We ask for returns, purchase and sales registers, e-way bills and bank statements for the period, and any earlier correspondence." },
          { name: "Reconcile", text: "We rebuild the department's figures and identify each difference: credit notes, returns, stock movements, timing or genuine error." },
          { name: "Draft and agree", text: "We draft the reply or appeal and go through it with you on a video call before filing." },
          { name: "Hearing", text: "We attend the personal hearing by video where allowed, or in person by arrangement." },
          { name: "Next step", text: "If the order is adverse, we explain whether an appeal, a writ or payment makes most sense." },
        ],
      }}
      faqs={[
        {
          question: "Is there a GST Appellate Tribunal bench in Madurai?",
          answer:
            "Yes. GSTAT lists Madurai as one of three Tamil Nadu State Benches, with Chennai and Coimbatore. Under the roster reported from 1 August 2026, it sits on the first, second and third Fridays of each month. The portal assigns the bench for each appeal, so confirm it there before planning.",
        },
        {
          question: "Where would a High Court writ against a GST order from Madurai be filed?",
          answer:
            "Usually at the Madurai Bench of the Madras High Court, which hears matters from Madurai and other southern districts. Writs are used for jurisdiction defects, breaches of natural justice or orders passed without a hearing. A writ needs an advocate; we prepare the tax analysis and work with counsel you choose.",
        },
        {
          question: "Is the jasmine and flower trade liable to GST?",
          answer:
            "Fresh flowers are generally exempt from GST, as is much unprocessed agricultural produce. Questions arise when goods are packed and labelled, processed, or sold with other taxable items, and over the services of commission agents. The exemption notification's exact wording decides each case, so any notice should be read against it.",
        },
        {
          question: "We received a notice comparing our GSTR-1 with e-way bills. How should we respond?",
          answer:
            "With a reconciliation, not a general denial. E-way bills are generated for movements that are not sales, such as stock transfers, job work and returns, and some are cancelled or never used. Matching each e-way bill to an invoice, credit note or non-supply movement usually explains most of the gap.",
        },
        {
          question: "Our GST registration was cancelled. Can it be restored?",
          answer:
            "Often, yes. If cancellation was for non-filing, you file the pending returns with tax, interest and late fee and apply for revocation within the time allowed under Section 30 and Rule 23, counted from the cancellation order. If revocation is refused, an appeal in APL-01 is available.",
        },
        {
          question: "Does GST apply to royalty paid for granite quarrying leases?",
          answer:
            "The department treats royalty for mining and quarrying rights as consideration for a service taxable under reverse charge, and many lessees have received demands. The position has been litigated in several courts. Any reply should be based on the current state of that litigation and the lease terms, not on a general template.",
        },
        {
          question: "Do we need to visit Chennai to work with you?",
          answer:
            "No. Notices, replies and appeals are all on the GST and GSTAT portals, and documents are shared by email. We discuss drafts on video calls and attend hearings by video where the authority permits, or in person by arrangement. You can visit our Anna Nagar office by appointment if you prefer.",
        },
      ]}
      relatedSlugs={["gst-notice-reply-chennai", "goods-and-services-tax", "gst-return-filing-chennai"]}
      relatedPosts={["gst-appellate-tribunal-gstat-explained", "gst-show-cause-notice-first-48-hours", "itc-mismatch-notices"]}
    >
      <h2 className={H2}>Which GST disputes are typical for Madurai and the southern districts?</h2>
      <p className={P}>
        Madurai is the main commercial centre of southern Tamil Nadu, and much of its GST base is trading: wholesale and retail
        businesses supplying the surrounding districts, alongside granite and stone processing and trade linked to agriculture,
        including the flower trade the city is known for. Trading businesses tend to face data-driven notices, where the
        department compares returns with e-way bills or income-tax information, while agri-linked and granite businesses face
        exemption, classification and reverse-charge questions. The table below sets out common patterns.
      </p>
      <Table head={["Dispute", "What usually triggers it", "What the defence rests on"]} rows={DISPUTES} />

      <h2 className={H2}>What are the appeal steps and time limits for a Madurai GST order?</h2>
      <p className={P}>
        Limitation runs from the date the order is communicated, normally its upload on the portal. Madurai businesses have
        the practical advantage of both a GSTAT State Bench and a High Court bench in the city, but the statutory route is the
        same as elsewhere in the state.
      </p>
      <Table head={["Step", "Time limit", "Form and pre-deposit", "Where it is heard"]} rows={TIMELINE} />
      <p className="mt-3 max-w-3xl text-xs text-slate">
        Pre-deposit and limitation are under Sections 107, 112 and 117 of the CGST Act as amended, on{" "}
        <a href="https://cbic-gst.gov.in/gst-acts.html" target="_blank" rel="noopener noreferrer" className={LINK}>
          cbic-gst.gov.in
        </a>
        . Bench sittings are as reported from GSTAT Office Order No. 4/GSTAT/PB/2026 and can change.
      </p>

      <h2 className={H2}>Why do traders receive data-mismatch notices?</h2>
      <p className={P}>
        GST officers now work from analytics that compare several data sets: outward supplies in GSTR-1, tax paid in GSTR-3B,
        e-way bills generated, credit claimed against suppliers&apos; filings, and turnover reported for income tax. Any gap
        produces a notice, often in ASMT-10 first. For a trader the gaps usually have ordinary explanations: sales returns and
        credit notes, e-way bills generated for stock transfers or cancelled trips, advances, or year-end timing. The reply
        has to explain the difference line by line with documents. Replies that only assert compliance tend to produce a
        show-cause notice under Section 73 or 74, or under Section 74A for FY 2024-25 onwards.
      </p>

      <h2 className={H2}>What should composition taxpayers watch for?</h2>
      <p className={P}>
        Many smaller Madurai traders use the composition scheme. Notices typically allege that the taxpayer crossed the
        turnover limit, made inter-state outward supplies, or dealt in goods outside the scheme, and propose tax at normal
        rates with interest and penalty from the date eligibility was lost. The defence turns on the turnover computation, the
        nature of each supply and the exact date. These matters fall in Category II of the GSTAT case classification, which
        the Madurai bench hears alongside Category I matters under the current roster.
      </p>

      <h2 className={H2}>How do we handle Madurai matters from Chennai?</h2>
      <p className={P}>
        C S Rushil &amp; Co. has one office, in Anna Nagar, Chennai, and no branch or representative in Madurai. For Madurai
        clients, documents are shared by email, drafts are discussed on video calls, and replies and appeals are filed on the
        GST and GSTAT portals. Hearings are attended by video where the authority permits; where an in-person appearance is
        needed, we arrange it in advance. Chartered Accountants can represent you before GST officers, the Appellate Authority
        and the Tribunal under Section 116 of the CGST Act. High Court work needs an advocate.
      </p>
      <p className={P}>
        For the state-wide appeal ladder and documents checklist, see our{" "}
        <Link href="/gst-litigation-chennai" className={LINK}>GST litigation guide</Link>, and for how the Tribunal works, the{" "}
        <Link href="/blog/gst-appellate-tribunal-gstat-explained" className={LINK}>GST Appellate Tribunal explainer</Link>. For a
        notice that has not yet become an order, see{" "}
        <Link href="/gst-notice-reply-chennai" className={LINK}>GST notice reply</Link>. For routine filings, see{" "}
        <Link href="/goods-and-services-tax" className={LINK}>GST registration and returns</Link>, and for a new entity,{" "}
        <Link href="/company-registration-madurai" className={LINK}>company registration in Madurai</Link>. To discuss a
        notice, <Link href="/contact" className={LINK}>contact us</Link>.
      </p>
    </ServicePageTemplate>
  );
}
