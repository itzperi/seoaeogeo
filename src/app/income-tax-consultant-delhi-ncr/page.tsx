import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const slug = "/income-tax-consultant-delhi-ncr";
const title = "Income Tax Consultant for HNIs in Delhi NCR | Online CA";
const description =
  "Online income tax advice for high-income Delhi, Gurugram and Noida families: firm and LLP profit share, rental portfolios, builder floors and NCR property.";

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

const PARTNER = [
  ["Share of profit from a partnership firm or LLP", "Exempt in the partner's hands", "The firm or LLP has already paid tax on its total income."],
  ["Interest on capital", "Taxable as business income of the partner", "Only the amount the firm could deduct (up to 12% a year, if authorised by the deed) is taxed in the partner's hands."],
  ["Salary, bonus or commission to a working partner", "Taxable as business income of the partner", "Limited to what the firm could deduct under the remuneration formula linked to book profit."],
  ["TDS on payments to partners", "Deducted by the firm", "From 1 April 2025, firms deduct 10% TDS on remuneration and interest to partners above ₹20,000 a year; the credit appears in the partner's Form 26AS."],
  ["Capital contributed in kind or withdrawn on retirement", "Can give rise to capital gains for the firm or the partner", "Revaluation and distribution of assets on reconstitution are taxed under specific rules introduced in 2021."],
];

const PROPERTY = [
  ["Delhi house, flat or builder floor", "Circle rates notified by the Government of NCT of Delhi", "Revenue Department, Government of NCT of Delhi"],
  ["Gurugram builder floor or apartment", "Collector rates notified by the district administration under the Haryana government", "Haryana revenue and registration portals"],
  ["Noida or Greater Noida flat or plot", "Circle rates notified by the district magistrate under the Uttar Pradesh government; most land is leased by the development authority", "IGRS Uttar Pradesh portal and the development authority"],
];

const CALENDAR = [
  ["15 June 2026", "First advance tax instalment for tax year 2026-27 (15%). Partners should include expected interest and remuneration."],
  ["15 September 2026", "Second instalment (45% cumulative)."],
  ["15 December 2026", "Third instalment (75% cumulative)."],
  ["31 December 2026", "Belated return deadline for FY 2025-26 under the 1961 Act."],
  ["15 March 2027", "Final instalment (100%)."],
  ["31 July 2027", "Return due for tax year 2026-27 for individuals without business income and not under audit."],
  ["30 September 2027", "Tax audit report due for firms and LLPs that require an audit."],
  ["31 October 2027", "Return due for audited firms and LLPs, and for working partners of those firms."],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${slug}`}
      serviceType="Income Tax Consultancy for High-Income Individuals"
      crumbLabel="Income Tax Consultant — Delhi NCR"
      crumbHref={slug}
      parentCrumb={{ name: "Income Tax for HNIs", href: "/income-tax-consultant-for-hni-chennai" }}
      eyebrow="Income Tax · Delhi, Gurugram and Noida clients served online"
      h1="Income Tax Consultant for High-Income Individuals in Delhi NCR"
      subhead="Income tax returns and planning for business families and property owners in Delhi, Gurugram and Noida: partnership and LLP income, rental portfolios, builder floors, collaboration redevelopment and leasehold property. We are based in Anna Nagar, Chennai and serve Delhi NCR clients online."
      keyFacts={[
        { label: "Office", value: "Anna Nagar, Chennai only. We have no office in Delhi, Gurugram or Noida; clients there are served online." },
        { label: "Working method", value: "Video meetings, secure document exchange and electronic filing and verification." },
        { label: "Why location is not a limit", value: "Income tax is a central law, administered through the national e-filing portal and faceless procedures." },
        { label: "Typical NCR issues", value: "Partner remuneration and interest, profit share, multiple rented properties, builder floors, Noida leasehold." },
        { label: "Working partner of an audited firm", value: "Return for tax year 2026-27 due 31 October 2027." },
      ]}
      introHeading="Can a Chennai firm advise Delhi NCR families on income tax?"
      intro="Yes. Income tax is a national law administered online, so the work is the same whether you live in Delhi, Gurugram or Noida. Our only office is in Anna Nagar, Chennai, and we serve NCR clients by video and secure document exchange, mostly on partnership and LLP income, rental portfolios and property sales across three states."
      citation={{
        label: "Revenue Department, Government of NCT of Delhi (revenue.delhi.gov.in)",
        href: "https://revenue.delhi.gov.in/",
      }}
      subServicesHeading="What income tax work do Delhi NCR clients usually need?"
      subServices={[
        { name: "Partner and LLP Income", text: "Reconciling profit share, interest and remuneration with the firm's accounts and deed, and matching the TDS now deducted on partner payments." },
        { name: "Rental Portfolios", text: "Computing income from several let-out flats, floors and commercial units, with municipal tax, loan interest and the 30% standard deduction applied correctly." },
        { name: "Builder Floors and Redevelopment", text: "Capital gains when a family plot is rebuilt as floors with a builder, including the timing of tax under a registered development agreement." },
        { name: "Noida Leasehold Property", text: "Cost, holding period and transfer charges when selling leasehold flats or plots allotted by a development authority." },
        { name: "Family Reorganisation", text: "Tax effect of gifts within the family, partner retirements, and moving property or business interests between generations." },
        { name: "Notices and Faceless Assessment", text: "Replies to notices on property transactions, rent and partner income, filed online, with a video hearing under faceless assessment where applicable." },
      ]}
      howTo={{
        heading: "How does an online engagement work for a Delhi NCR client?",
        steps: [
          { name: "Family and business overview", text: "On a first video call we map the family's firms and LLPs, properties in each state and who owns what, and agree a document list." },
          { name: "Documents through the portal", text: "Firm accounts and deed, rent agreements, municipal tax receipts, loan certificates and property papers are uploaded securely." },
          { name: "Working papers", text: "We prepare a computation for each family member, cross-check partner figures against the firm's return and the Annual Information Statement, and flag risks." },
          { name: "Filing and e-verification", text: "After review on video, each return is filed and e-verified electronically before its own due date, which may differ within one family." },
          { name: "Ongoing planning", text: "We revisit advance tax, rent changes and planned property deals during the year, and keep a property register for the family." },
        ],
      }}
      faqs={[
        { question: "Do you have an office in Delhi, Gurugram or Noida?", answer: "No. Our only office is in Anna Nagar, Chennai. Delhi NCR clients are served online through video meetings, a secure document portal and electronic filing. Anyone who prefers a face-to-face meeting is welcome at our Chennai office by appointment, but the returns and most proceedings do not require it." },
        { question: "Is my share of profit from the family firm taxable?", answer: "No, not in your hands. A partner's share of profit from a partnership firm or LLP is exempt, because the firm pays tax on it. Interest on capital and remuneration paid to you are taxable as business income, but only to the extent the firm was allowed to deduct them." },
        { question: "Does the firm now deduct TDS on my partner remuneration?", answer: "Yes. From 1 April 2025, firms and LLPs must deduct 10% TDS on salary, remuneration, commission, bonus and interest paid or credited to partners once the total exceeds ₹20,000 in the year. Check that the credit appears in your Form 26AS before filing." },
        { question: "How is rent from several properties taxed?", answer: "Each let-out property is computed separately: rent received less municipal taxes paid gives the annual value, then a flat 30% deduction and interest on any loan are allowed. A net loss from house property can be set off against other income only up to ₹2 lakh a year." },
        { question: "We are rebuilding our house as builder floors. When is tax due?", answer: "If you sign a registered development agreement as an individual or HUF, capital gains generally arise in the year the completion certificate is issued, valued at the stamp duty value of the floors you receive then, plus cash. The developer deducts TDS on any cash component." },
        { question: "How is a Noida leasehold flat taxed on sale?", answer: "You transfer leasehold rights, which are a capital asset. The cost includes the premium paid to the authority or the price paid to the previous lessee, and transfer charges paid on the sale are generally treated as costs of transfer. Long-term status follows the usual 24-month test." },
        { question: "Will you attend hearings at the Delhi income tax offices?", answer: "Not in person. Assessments under faceless procedures run through the e-filing portal and continue under the Income-tax Act, 2025. We file written submissions and attend by video hearing under faceless assessment where applicable. If a matter needs physical representation, we say so at the outset." },
      ]}
      relatedQuestions={[
        { question: "How is income tax planned for high-income individuals?", href: "/income-tax-consultant-for-hni-chennai" },
        { question: "I received a notice about a property transaction. What should I do?", href: "/income-tax-notice-reply-chennai" },
        { question: "How are family members living abroad taxed in India?", href: "/nri-tax-services" },
      ]}
      relatedSlugs={["income-tax-consultant-for-hni-chennai", "income-tax-return-filing-chennai", "income-tax-notice-reply-chennai", "nri-tax-services"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Who do we work with in Delhi NCR?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Our Delhi NCR clients are mainly business families who run trading, manufacturing or distribution businesses
        through partnership firms, LLPs and private companies, and who hold a portfolio of rented property. In Delhi they
        live in neighbourhoods such as Golf Links, Vasant Vihar, Greater Kailash and Defence Colony. In Gurugram they
        are often in the DLF Phases or along Golf Course Road, and in Noida across its residential sectors. One family may
        therefore own property governed by three different state stamp laws while filing under one national income tax
        law. We work with these families from Anna Nagar, Chennai, online. We have no NCR office and do not describe
        ourselves as having one.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How is income from a partnership firm or LLP taxed?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Many NCR family businesses are run through firms and LLPs in which several family members are partners. The
        partner&apos;s return has to agree with the firm&apos;s return line by line. Most mismatches we see arise because
        a partner reports the remuneration shown in the firm&apos;s ledger rather than the amount allowed under the
        remuneration formula, or forgets interest on capital credited but not withdrawn.
      </p>
      <DataTable head={["Item", "Treatment for the partner", "Key point"]} rows={PARTNER} />

      <h2 className="mt-14 text-2xl text-obsidian">How should a family&apos;s rental portfolio be reported?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Rent from flats, floors, shops and offices is taxed under income from house property, property by property.
        Municipal tax actually paid in the year is deducted, then 30% of the net annual value as a standard deduction,
        then interest on any loan taken to buy or build. Up to two self-occupied homes carry nil annual value. Joint
        owners each report their share, and rent from property gifted to a spouse is generally clubbed with the donor.
        Tenants who are businesses deduct TDS on rent, and individual tenants paying higher monthly rent must also
        deduct it, so rent received should be matched with Form 26AS and the Annual Information Statement. Commercial
        letting can also bring GST registration once the threshold is crossed; residential letting for use as a residence
        is treated differently. If a property is let through the family firm or company rather than owned personally,
        the income moves into that entity&apos;s return.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What are the tax points in builder floors and collaboration?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Across South Delhi and Gurugram, older bungalows on family plots are often rebuilt as independent floors. Sometimes
        the family builds and sells floors itself; more often it signs a collaboration agreement under which a builder
        constructs the building, keeps one or more floors, and hands the rest to the family, sometimes with a cash
        payment. For individuals and HUFs under a registered agreement, the capital gain on the share of land given up
        arises in the year the completion certificate is issued, and is based on the stamp duty value of the floors
        received at that time plus cash. Floors kept by the family become new assets whose cost is that same value.
        Unregistered or informal arrangements do not get this timing rule and can be taxed earlier. Because a single
        transaction may involve several co-owners, the agreement should state each owner&apos;s share clearly, and any
        reinvestment exemption has to be planned owner by owner.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How do Delhi, Gurugram and Noida property values feed into income tax?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Each part of NCR uses its own state&apos;s valuation system for stamp duty, and that value is the stamp duty value
        for income tax. If the agreed price is more than 10% below it, the seller is taxed on the stamp duty value and the
        buyer can be taxed on the shortfall. Stamp duty rates differ by state and sometimes by the gender of the buyer,
        and are revised from time to time, so we check them on the relevant official portal, such as{" "}
        <a href="https://igrsup.gov.in/" target="_blank" rel="noopener noreferrer" className={linkClass}>
          IGRS Uttar Pradesh
        </a>{" "}
        for Noida, at the time of the transaction.
      </p>
      <DataTable head={["Property", "Valuation used for stamp duty", "Where to check"]} rows={PROPERTY} />
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Long-term gains on land and buildings, held for more than 24 months, are taxed at 12.5% without indexation for
        transfers on or after 23 July 2024; resident individuals and HUFs may choose 20% with indexation for property
        acquired before that date. Short-term gains are taxed at slab rates. Surcharge on capital gains is capped at 15%,
        plus 4% cess.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What are the important dates for NCR families in tax year 2026-27?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The Income-tax Act, 2025 applies from 1 April 2026; income up to 31 March 2026 is still returned under the 1961
        Act. Within one family, due dates often differ between salaried members, working partners of audited firms and
        the firms themselves. The CBDT can extend these dates.
      </p>
      <DataTable head={["Date", "What is due"]} rows={CALENDAR} />

      <h2 className="mt-14 text-2xl text-obsidian">Where can NCR clients find related services?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The broader approach is on our{" "}
        <Link href="/income-tax-consultant-for-hni-chennai" className={linkClass}>
          income tax service for high-income individuals
        </Link>
        . See{" "}
        <Link href="/income-tax-return-filing-chennai" className={linkClass}>
          income tax return filing
        </Link>{" "}
        for the filing process and{" "}
        <Link href="/income-tax-notice-reply-chennai" className={linkClass}>
          income tax notice replies
        </Link>{" "}
        if a notice has arrived. Family members living overseas can see{" "}
        <Link href="/nri-tax-services" className={linkClass}>
          NRI tax services
        </Link>
        . To begin, use our{" "}
        <Link href="/contact" className={linkClass}>
          contact page
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
