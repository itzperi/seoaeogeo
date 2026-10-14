import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const slug = "/income-tax-consultant-kolkata";
const title = "Income Tax Consultant for HNIs in Kolkata | C S Rushil & Co.";
const description =
  "Online income tax advice for high-income Kolkata families: HUF returns, inherited and tenanted property, unlisted family-company shares and West Bengal sales.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: slug },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: slug,
  },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";

function DataTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="mt-6 max-w-4xl overflow-x-auto rounded-cards border border-ash">
      <table className="w-full min-w-[640px] text-left text-sm">
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

const INHERITED = [
  ["Receiving property by will or inheritance", "Not taxed. Inheritance is not income and is not a transfer for capital gains.", "Will or probate, succession certificate or legal heir documents; mutation records"],
  ["Cost when the inherited property is sold", "The previous owner's cost, plus improvements. For property acquired before 1 April 2001, fair market value on that date, capped at its stamp duty value then.", "Original deed, any valuation report as on 1 April 2001, records of improvements"],
  ["Holding period", "Includes the period the previous owner held it, so most inherited property is long-term.", "Date of the previous owner's acquisition"],
  ["Long-term rate on sale (transfers from 23 July 2024)", "12.5% without indexation; resident individuals and HUFs may choose 20% with indexation for property acquired before 23 July 2024.", "Computation both ways"],
  ["Tenanted property under rent control", "Annual value for house property income can be limited to the standard rent under the tenancy law, or actual rent if higher.", "Tenancy records, rent receipts and any rent control orders"],
];

const SHARES = [
  ["Dividend from the family company", "Taxed at your slab rate, with surcharge capped at 15%; the company deducts TDS.", "Dividend declarations and TDS certificates"],
  ["Loan or advance from the company to a shareholder", "Can be taxed as deemed dividend, to the extent of accumulated profits, for shareholders with 10% or more of voting power or concerns they substantially control.", "Loan ledger, board approvals, shareholding pattern"],
  ["Sale of unlisted shares", "Long-term after 24 months at 12.5% without indexation. If sold below the value worked out under the valuation rules, the seller can be taxed at that value and the buyer on the shortfall.", "Valuation report as on the transfer date, share transfer deed"],
  ["Gift of shares to relatives", "Not taxed in the recipient's hands and not a transfer for capital gains. Income on shares gifted to a spouse or minor child is generally clubbed with the donor.", "Gift deed and share transfer records"],
  ["Inherited unlisted shares", "Not taxed on inheritance; on sale, the previous owner's cost and holding period carry over.", "Share certificates or demat records, succession documents"],
];

const CALENDAR = [
  ["15 June 2026", "First advance tax instalment for tax year 2026-27 (15%), for individuals and HUFs alike."],
  ["15 September 2026", "Second instalment (45% cumulative)."],
  ["15 December 2026", "Third instalment (75% cumulative)."],
  ["31 December 2026", "Belated return deadline for FY 2025-26 under the 1961 Act."],
  ["15 March 2027", "Final instalment (100%). A property sale closed late in the year needs a fresh calculation."],
  ["31 July 2027", "Return due for tax year 2026-27 for individuals and HUFs without business income and not under audit."],
  ["31 October 2027", "Return due for HUFs and individuals whose business accounts require a tax audit."],
  ["31 March 2028", "Last date to revise the tax year 2026-27 return."],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${slug}`}
      serviceType="Income Tax Consultancy for High-Income Individuals"
      crumbLabel="Income Tax Consultant — Kolkata"
      crumbHref={slug}
      parentCrumb={{ name: "Income Tax for HNIs", href: "/income-tax-consultant-for-hni-chennai" }}
      eyebrow="Income Tax · Kolkata clients served online"
      h1="Income Tax Consultant for High-Income Individuals in Kolkata"
      subhead="Income tax returns and planning for Kolkata business families: Hindu undivided family returns, inherited and tenanted property, shares in unlisted family companies and property sales in West Bengal. We work from Anna Nagar, Chennai and serve Kolkata clients online."
      keyFacts={[
        { label: "Office", value: "Anna Nagar, Chennai only. We have no office in Kolkata; Kolkata clients are served online." },
        { label: "Working method", value: "Video meetings, secure document exchange, and electronic filing and verification of each family member's and HUF's return." },
        { label: "Why location is not a limit", value: "Income tax is a central law, administered online for taxpayers across India." },
        { label: "Typical Kolkata issues", value: "HUF income and partition, inherited property, old tenancies, deemed dividend and transfers of unlisted family-company shares." },
        { label: "HUF as a taxpayer", value: "An HUF has its own PAN, its own basic exemption and files its own return." },
      ]}
      introHeading="Can a Chennai CA handle income tax for a Kolkata family?"
      intro="Yes. Income tax is a national law, and returns, verification and most proceedings are online, so a Kolkata family's work does not need a local office. We are based only in Anna Nagar, Chennai and serve Kolkata clients by video and secure upload, usually on HUF returns, inherited property and shares in unlisted family companies."
      citation={{
        label: "Directorate of Registration and Stamp Revenue, Government of West Bengal (wbregistration.gov.in)",
        href: "https://wbregistration.gov.in/",
      }}
      subServicesHeading="What income tax work do Kolkata families usually need?"
      subServices={[
        { name: "HUF Returns and Records", text: "Preparing the HUF's return, separating HUF property from members' individual property, and keeping the records that support the HUF's existence and assets." },
        { name: "Partition and Succession", text: "Tax effect of a total partition, of property passing on death, and of family arrangements that redistribute assets between branches." },
        { name: "Inherited Property Sales", text: "Cost and holding period of inherited houses, fair market value as on 1 April 2001 for older property, and reinvestment planning before the sale." },
        { name: "Tenanted and Rent-Controlled Property", text: "Computing income from long-standing tenancies at low rent, and the tax effect when tenants are paid to vacate or a property is sold tenanted." },
        { name: "Unlisted Family-Company Shares", text: "Deemed dividend risk on loans, valuation on share transfers within or outside the family, and dividend planning." },
        { name: "Notices and Faceless Assessment", text: "Replies to notices on property sales, share transfers and HUF claims, filed online, with a video hearing under faceless assessment where applicable." },
      ]}
      howTo={{
        heading: "How does a Kolkata family work with us online?",
        steps: [
          { name: "Family map", text: "On a video call we list each family member, any HUFs, the family companies and the properties, and note who owns what and on what basis." },
          { name: "Documents securely uploaded", text: "Deeds, wills, succession papers, HUF records, company accounts and share registers are scanned and shared through our secure portal." },
          { name: "Review and computation", text: "We prepare a computation for each person and HUF, check that property and shares are reported by the right owner, and flag any open issues." },
          { name: "Filing", text: "After review on a call, each return is filed and e-verified electronically by the individual or the HUF's karta." },
          { name: "Ongoing family records", text: "We maintain a property and shareholding register for the family so that future sales and successions start from documented cost and dates." },
        ],
      }}
      faqs={[
        { question: "Do you have an office in Kolkata?", answer: "No. Our only office is in Anna Nagar, Chennai. Kolkata clients are served online through video meetings, a secure document portal and electronic filing. Family members are welcome to meet us at the Chennai office by appointment, but the returns and most proceedings can be completed without a visit." },
        { question: "Is there tax when I inherit my father's house in Kolkata?", answer: "No. Property received by inheritance or under a will is not income and is not a transfer for capital gains. Tax arises only when you sell, using your father's original cost or, for property acquired before 1 April 2001, its fair market value on that date, and including his holding period." },
        { question: "Does the Dayabhaga school affect our HUF's taxation?", answer: "It can. Under Dayabhaga, traditionally followed in Bengal, children do not acquire an interest in ancestral property by birth, and a coparcenary generally arises only after the father's death. Whether an HUF exists, and which property it owns, should therefore be established from family history before HUF returns are filed." },
        { question: "Can our HUF be partly partitioned for tax purposes?", answer: "No. For income tax, only a total partition, recorded through the prescribed process, is recognised; a partial partition is ignored and the HUF continues to be assessed as before. A total partition should be properly documented, with each member's share of property clearly allotted." },
        { question: "How is rent from an old tenanted property taxed?", answer: "On the rent actually receivable, after municipal tax and the 30% standard deduction. Where the property is covered by rent control, its annual value can be limited to the standard rent under the tenancy law. Payments to tenants to vacate before a sale may be claimed as a cost of transfer." },
        { question: "My family company lent me money. Is that a problem?", answer: "It may be. A loan or advance from a closely held company to a shareholder with 10% or more of the voting power can be taxed as deemed dividend, to the extent of the company's accumulated profits. We review loan accounts before year end so that the issue can be addressed early." },
        { question: "Can I transfer unlisted shares to a cousin at face value?", answer: "Not without tax consequences. Transfers of unlisted shares below the value worked out under the valuation rules can be taxed at that value in the seller's hands, and a cousin is not a relative for the gift exemption, so the buyer may be taxed on the shortfall too." },
        { question: "Will you attend hearings in Kolkata?", answer: "Not in person. Most assessments run under faceless procedures through the e-filing portal, which continue under the Income-tax Act, 2025. We file written submissions online and attend by video hearing under faceless assessment where applicable. If a matter needs physical representation, we say so at the outset." },
      ]}
      relatedQuestions={[
        { question: "How is income tax planned for high-income individuals and families?", href: "/income-tax-consultant-for-hni-chennai" },
        { question: "We received a notice on a property sale. What should we do?", href: "/income-tax-notice-reply-chennai" },
        { question: "How are family members living abroad taxed on inherited property?", href: "/nri-tax-services" },
      ]}
      relatedSlugs={["income-tax-consultant-for-hni-chennai", "income-tax-return-filing-chennai", "income-tax-notice-reply-chennai", "nri-tax-services"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Who do we work with in Kolkata?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Our Kolkata clients are mostly long-established business families in trading, manufacturing, tea, jute or
        distribution, whose wealth is held through Hindu undivided families, private companies and property passed down
        over generations. Older families tend to live in Alipore and Ballygunge, often in houses with several branches of
        the family and, sometimes, long-standing tenants. Younger members have moved to Salt Lake and New Town. Their tax
        files share a pattern: several taxpayers in one family, property whose cost lies decades in the past, and shares
        in companies that are not listed. We work with these families from Anna Nagar, Chennai, online. We have no office
        in Kolkata and do not present ourselves as having one.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How is a Hindu undivided family taxed?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        An HUF is a separate taxpayer with its own PAN, its own basic exemption limit and its own return, signed by the
        karta. Income from property and investments that genuinely belong to the HUF is taxed in the HUF&apos;s hands, not
        the members&apos;. Two points need particular care in Kolkata. First, families following the Dayabhaga school of
        Hindu law, traditionally applied in Bengal, have different coparcenary rules from the Mitakshara school followed
        in most of India: children do not acquire rights in ancestral property at birth, so whether property is HUF
        property often depends on how and when it passed down. Second, when a member transfers personal property into the
        HUF&apos;s common pool without adequate consideration, income from that property is generally still taxed in the
        member&apos;s hands. A total partition must be recorded through the prescribed process to be recognised; a partial
        partition is not recognised for income tax.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What happens to tax when inherited property is sold?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Old family houses are often the largest single asset, and their sale is usually a long-term capital gain. The
        main questions are cost, holding period and who the owners are after succession.
      </p>
      <DataTable head={["Point", "Tax treatment", "Evidence we look for"]} rows={INHERITED} />
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        When several heirs sell together, each reports their own share of the gain and can plan their own reinvestment in
        a residential house or specified bonds. If one heir lives abroad, the buyer must deduct tax on that heir&apos;s
        share under the non-resident rules, so the sale needs to be planned for each co-owner separately.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How does West Bengal&apos;s market value affect the sale?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        In West Bengal, stamp duty and registration fees are charged with reference to the market value of the property
        set by the registration authorities, and that value is the stamp duty value for income tax. If the agreed price is
        more than 10% below it, the seller is taxed as if the market value were the sale price, and the buyer can be taxed
        on the shortfall. Older houses with sitting tenants or title complications often sell well below what an
        untenanted property would fetch. In that case, if you dispute the stamp duty value, the law allows the Assessing
        Officer to refer the valuation to a Valuation Officer, and a registered valuer&apos;s report prepared at the time of
        sale is useful evidence. We check the current rates and assessed values on the{" "}
        <a href="https://wbregistration.gov.in/" target="_blank" rel="noopener noreferrer" className={linkClass}>
          West Bengal registration portal
        </a>{" "}
        when a sale is planned.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How are shares in an unlisted family company taxed?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Many Kolkata families hold their business through private limited companies, with shares spread across branches
        of the family. Moving money and shares between the company and family members carries specific tax rules, set
        out below.
      </p>
      <DataTable head={["Transaction", "Tax treatment", "Records needed"]} rows={SHARES} />

      <h2 className="mt-14 text-2xl text-obsidian">Which dates matter for Kolkata families in tax year 2026-27?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The Income-tax Act, 2025 applies from 1 April 2026; income up to 31 March 2026 is still returned under the 1961
        Act. Each individual and each HUF in the family follows its own due date. The CBDT can extend these dates.
      </p>
      <DataTable head={["Date", "What is due"]} rows={CALENDAR} />

      <h2 className="mt-14 text-2xl text-obsidian">Where can Kolkata clients find related services?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Our wider approach to family tax planning is on the{" "}
        <Link href="/income-tax-consultant-for-hni-chennai" className={linkClass}>
          income tax service for high-income individuals
        </Link>
        . The filing process is on{" "}
        <Link href="/income-tax-return-filing-chennai" className={linkClass}>
          income tax return filing
        </Link>
        , and notices are handled under{" "}
        <Link href="/income-tax-notice-reply-chennai" className={linkClass}>
          income tax notice replies
        </Link>
        . Heirs living abroad can see our{" "}
        <Link href="/nri-tax-services" className={linkClass}>
          NRI tax services
        </Link>
        . To start, use the{" "}
        <Link href="/contact" className={linkClass}>
          contact page
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
