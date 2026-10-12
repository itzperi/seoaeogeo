import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "GST Litigation & GSTAT Appeals in Tiruchirappalli | CA Firm";
const description =
  "GST notices and appeals for Trichy engineering units and works contractors: rate and TDS disputes, ITC on works contracts, APL-01 and GSTAT appeals.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/gst-litigation-tiruchirappalli" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "GST Litigation & Appeals in Tiruchirappalli (Trichy)",
    description: "Works contract disputes, show-cause replies and GST appeals for Trichy engineering and contracting businesses, handled from our Anna Nagar, Chennai office.",
    url: "/gst-litigation-tiruchirappalli",
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
  ["Show-cause notice reply", "Within the time stated, usually 30 days", "No pre-deposit. Reply in DRC-06 with contract documents and a rate analysis", "Proper officer (Central GST or State Commercial Taxes)"],
  ["First appeal", "3 months from communication of the order, plus up to 1 month on sufficient cause", "Form APL-01. Admitted amount plus 10% of disputed tax (cap ₹20 crore CGST + ₹20 crore SGST)", "Appellate Authority; hearing in person or by video, as allowed"],
  ["Second appeal (GSTAT)", "3 months from communication of the appellate order, plus up to 3 months on sufficient cause", "Form APL-05 on the GSTAT e-filing portal. A further 10% of tax in dispute, same caps", "A Tamil Nadu State Bench (Chennai, Coimbatore or Madurai) assigned by the GSTAT portal"],
  ["High Court", "180 days from the GSTAT order; writs on jurisdiction or natural justice", "Filed by an advocate", "Madras High Court; matters from the Tiruchirappalli area are generally heard at its Madurai Bench (confirm with counsel)"],
];

const DISPUTES = [
  ["Works contract or supply of goods", "Whether a fabrication-and-erection contract is a works contract for immovable property, or a supply of goods with installation", "Contract scope, whether the result is attached to earth and immovable, and how the contract prices goods and services"],
  ["Rate on government and public sector contracts", "Concessional rates claimed for contracts with government entities after they were withdrawn or narrowed, including the July 2022 and September 2025 changes", "Who the recipient is, what the contract covers, and which rate applied on each invoice date"],
  ["TDS deducted by government buyers", "2% TDS under Section 51 shown in GSTR-7 does not match the contractor's books or GSTR-1", "Reconciliation of TDS certificates, acceptance of credits on the portal and timing of invoices"],
  ["ITC on construction for own use", "Credit on factory sheds, foundations and structures denied as blocked under Section 17(5)(c) or (d)", "Whether the item is plant and machinery; the 2025 retrospective amendment after the Safari Retreats judgment changes the argument"],
  ["Free-issue material from principals", "Steel, castings or components supplied free by a large buyer to a fabricator, and whether their value is added", "Contract terms, job work treatment under Section 143 and ITC-04 records"],
  ["Liquidated damages and price variation", "Department treats LD deductions as a taxable supply, or questions the time of supply for price-variation bills", "CBIC Circular 178/10/2022-GST on LD and penalties, and the contract's price variation clause"],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/gst-litigation-tiruchirappalli`}
      serviceType="Tax Litigation"
      crumbLabel="GST Litigation in Tiruchirappalli"
      crumbHref="/gst-litigation-tiruchirappalli"
      parentCrumb={{ name: "GST Litigation", href: "/gst-litigation-chennai" }}
      eyebrow="GST Disputes · Tiruchirappalli (Trichy)"
      h1="GST Litigation and Appeals in Tiruchirappalli"
      subhead="Show-cause notice replies, first appeals and GST Appellate Tribunal appeals for Trichy engineering ancillaries, fabricators and works contractors, including government and public sector contracts. We work from our only office in Anna Nagar, Chennai, file online and attend hearings by video where allowed, or in person by arrangement."
      introHeading="What GST disputes do Trichy engineering and contracting businesses face?"
      intro="Trichy GST disputes often arise from contracts rather than returns: whether a fabrication and erection job is a works contract, which rate applies to a government or public sector contract, why TDS credits do not match, and whether credit on construction is blocked. Each can be contested by reply, a first appeal in Form APL-01 and the GST Appellate Tribunal."
      citation={{ label: "CGST Act and Rules on cbic-gst.gov.in", href: "https://cbic-gst.gov.in/gst-acts.html" }}
      keyFacts={[
        { label: "Where we work from", value: "Our only office is in Anna Nagar, Chennai. We have no office in Tiruchirappalli; filings are online and hearings are by video where permitted, or attended by arrangement." },
        { label: "Works contract definition", value: "Section 2(119): a contract for building, construction, fabrication, erection, installation and similar work on immovable property, with transfer of property in goods." },
        { label: "Government TDS", value: "Government departments and notified bodies deduct 2% TDS under Section 51 on taxable contracts above the threshold, reported in GSTR-7." },
        { label: "First appeal deadline", value: "3 months from communication of the order (APL-01), extendable by 1 month on sufficient cause." },
        { label: "GSTAT bench", value: "A Tamil Nadu State Bench assigned by the GSTAT portal. Confirm the bench there." },
      ]}
      subServicesHeading="What do we handle for Trichy engineering and contracting businesses?"
      subServices={[
        { name: "Contract characterisation", text: "Written positions on whether a contract is a works contract, a composite supply of goods, or separate supplies, based on the contract itself." },
        { name: "Rate disputes", text: "Analysis of the rate applicable to each contract and period, including government and public sector contracts across the rate changes." },
        { name: "TDS reconciliation", text: "Matching GSTR-7 TDS credits with invoices and books, and replying to notices that arise from mismatches." },
        { name: "Blocked credit disputes", text: "Defending ITC on plant, machinery and structures against Section 17(5) objections." },
        { name: "Show-cause replies and appeals", text: "Replies under Sections 73, 74 or 74A, APL-01 appeals and GSTAT appeals in APL-05." },
        { name: "Contract-stage advice", text: "Reviewing GST clauses in tenders and purchase orders so rate changes and LD deductions do not become disputes later." },
      ]}
      howTo={{
        heading: "How do we take on a Trichy GST matter remotely?",
        steps: [
          { name: "Share the notice and contracts", text: "Send the notice or order with the relevant contracts, work orders and amendments. We confirm the deadline and the core issue." },
          { name: "Read the contract", text: "We map scope, pricing, ownership of materials and completion terms, because these decide classification and rate." },
          { name: "Reconcile", text: "We match invoices, running bills, TDS credits and returns for the period, and isolate the differences." },
          { name: "Draft and agree", text: "We draft the reply or appeal and go through it with you on a video call." },
          { name: "Hearing", text: "We attend by video where allowed, or in person by arrangement." },
          { name: "Future contracts", text: "Where the dispute came from contract wording, we suggest clauses for future tenders." },
        ],
      }}
      faqs={[
        {
          question: "Is our fabrication and erection contract a works contract under GST?",
          answer:
            "It depends on whether the work results in immovable property. Structures fixed permanently to the earth usually make it a works contract, taxed as a service. Equipment supplied and installed but still movable is often a composite supply of goods. The contract's scope and the nature of the finished work decide it, not its title.",
        },
        {
          question: "Can a government contract still get a concessional GST rate?",
          answer:
            "Only where a specific entry still applies. The general concessional rate for works contracts with government bodies was withdrawn from 18 July 2022, and remaining entries were changed in the September 2025 rate rationalisation. Rate disputes turn on the recipient, the type of work and the invoice date, so each contract needs checking.",
        },
        {
          question: "The TDS in our GSTR-7 credit does not match our books. What should we do?",
          answer:
            "Reconcile each TDS entry with the invoice and payment it relates to, and accept the credits on the portal so they reach your cash ledger. Mismatches usually come from deductions on gross amounts, wrong GSTINs or timing. Where a buyer reported wrongly, ask them to amend it; keep the correspondence for any notice.",
        },
        {
          question: "Can we claim ITC on our new factory shed?",
          answer:
            "Credit on construction of immovable property for own use is generally blocked, but plant and machinery is excluded from the block. After the Supreme Court's Safari Retreats judgment in 2024, the Finance Act, 2025 amended the provision retrospectively. Whether a particular structure qualifies needs careful analysis, and existing disputes should be reviewed against the amended text.",
        },
        {
          question: "Is GST payable on liquidated damages deducted by our buyer?",
          answer:
            "Generally not. CBIC Circular 178/10/2022-GST clarifies that liquidated damages for delay or breach are usually compensation, not consideration for a separate supply of tolerating the breach. Where a notice treats LD as taxable, the reply should rely on the circular and the contract terms showing the deduction was a penalty for delay.",
        },
        {
          question: "Our principal supplies steel free of cost for fabrication. Is that included in our value?",
          answer:
            "Usually not, where the contract makes the principal responsible for the material and you only fabricate it. The movement can fall under the job work provisions of Section 143, which need delivery challans and ITC-04 reporting by the principal. Disputes arise when the paperwork does not match the commercial arrangement.",
        },
        {
          question: "Do we need to visit Chennai to work with you?",
          answer:
            "No. Contracts, notices and returns can be shared by email, and replies and appeals are filed online. We discuss drafts on video calls and attend hearings by video where the authority permits, or in person by arrangement. You can visit our Anna Nagar office by appointment if you prefer.",
        },
      ]}
      relatedSlugs={["gst-notice-reply-chennai", "goods-and-services-tax", "tds-return-filing-chennai"]}
      relatedPosts={["gst-show-cause-notice-first-48-hours", "after-gst-show-cause-reply", "itc-mismatch-notices"]}
    >
      <h2 className={H2}>Which GST disputes are typical for Trichy&apos;s engineering base?</h2>
      <p className={P}>
        Tiruchirappalli has a long-standing engineering base built around heavy industry, including the BHEL complex and the
        fabrication, machining and erection units that supply large public sector and private buyers. Many of these
        businesses work on contracts with free-issue materials, running bills, price variation and liquidated damages, and
        many carry out works contracts for government departments and public bodies. That mix produces contract-driven GST
        disputes. The table below sets out the ones we see most often.
      </p>
      <Table head={["Dispute", "What usually triggers it", "What the defence rests on"]} rows={DISPUTES} />

      <h2 className={H2}>What are the appeal steps and time limits for a Trichy GST order?</h2>
      <p className={P}>
        Contract disputes often involve large sums spread over several years, so the pre-deposit and limitation dates matter.
        Limitation runs from the date the order is communicated, normally its upload on the portal.
      </p>
      <Table head={["Step", "Time limit", "Form and pre-deposit", "Where it is heard"]} rows={TIMELINE} />
      <p className="mt-3 max-w-3xl text-xs text-slate">
        Pre-deposit and limitation are under Sections 107, 112 and 117 of the CGST Act as amended, on{" "}
        <a href="https://cbic-gst.gov.in/gst-acts.html" target="_blank" rel="noopener noreferrer" className={LINK}>
          cbic-gst.gov.in
        </a>
        . The bench is assigned by the GSTAT e-filing portal.
      </p>

      <h2 className={H2}>Why do works contract rate disputes keep arising?</h2>
      <p className={P}>
        Works contracts have had several rate changes since 2017. Concessional rates for contracts with government bodies,
        local authorities and governmental authorities were narrowed and then largely withdrawn from 18 July 2022, and the
        September 2025 rate rationalisation altered the remaining entries. A long contract can therefore span three rate
        regimes, with running bills, advances and price-variation claims falling on different sides of each change. The time
        of supply rules decide which rate applies to each bill. Disputes also arise over whether the recipient qualifies for
        a concessional entry at all, for example whether a public sector undertaking or a body funded by government counts as
        a governmental authority. A defensible position is built bill by bill, with the contract, the recipient&apos;s status
        and the dates of invoice, payment and completion.
      </p>

      <h2 className={H2}>What changed for ITC on buildings and structures?</h2>
      <p className={P}>
        Section 17(5)(c) and (d) block input tax credit on works contracts and on goods or services used to construct
        immovable property on one&apos;s own account, except for plant and machinery. In Safari Retreats (2024), the Supreme Court
        read the exclusion in clause (d) as covering items that are functionally plant. The Finance Act, 2025 then amended the
        clause with retrospective effect from 1 July 2017 to narrow that reading. For engineering units claiming credit on
        foundations, gantries, sheds and similar structures, older claims and pending disputes need to be reassessed against
        the amended text and the definition of plant and machinery in the explanation to Section 17.
      </p>

      <h2 className={H2}>How do we handle Trichy matters from Chennai?</h2>
      <p className={P}>
        C S Rushil &amp; Co. has one office, in Anna Nagar, Chennai, and no branch or representative in Tiruchirappalli. For Trichy
        clients, contracts and notices are shared by email, drafts are discussed on video calls, and replies and appeals are
        filed on the GST and GSTAT portals. Hearings are attended by video where the authority permits; where an in-person
        appearance is needed, we arrange it in advance. Chartered Accountants can represent you before GST officers, the
        Appellate Authority and the Tribunal under Section 116 of the CGST Act; High Court work needs an advocate.
      </p>
      <p className={P}>
        For the state-wide appeal ladder, GSTAT benches and documents checklist, see our{" "}
        <Link href="/gst-litigation-chennai" className={LINK}>GST litigation guide</Link>. For a notice that has not yet become
        an order, see <Link href="/gst-notice-reply-chennai" className={LINK}>GST notice reply</Link>. For routine filings, see{" "}
        <Link href="/goods-and-services-tax" className={LINK}>GST registration and returns</Link>, and for a new entity,{" "}
        <Link href="/company-registration-tiruchirappalli" className={LINK}>company registration in Tiruchirappalli</Link>. To
        discuss a notice, <Link href="/contact" className={LINK}>contact us</Link>.
      </p>
    </ServicePageTemplate>
  );
}
