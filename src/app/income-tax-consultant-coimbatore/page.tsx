import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const slug = "/income-tax-consultant-coimbatore";
const title = "Income Tax Consultant in Coimbatore | C S Rushil & Co.";
const description =
  "Income tax for Coimbatore industrialist families: firm and company profit extraction, HUFs, farm income and capital gains on industrial land, handled online.";

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

const EXTRACTION = [
  ["Partner's share of firm profit", "Exempt in the partner's hands, because the firm has already paid tax on it.", "Only real profit after the firm's own tax; useful where the firm is the main earning entity."],
  ["Partner remuneration and interest on capital", "Taxed as business income of the partner; deductible for the firm within the limits linked to book profit, with interest capped at 12% a year.", "Must be authorised by the partnership deed. TDS applies on payments to partners above ₹20,000 in a year from 1 April 2025."],
  ["Director salary from a private company", "Salary income for the director; deductible for the company if reasonable.", "Keeps family members on payroll only where they actually work; board approval and TDS needed."],
  ["Dividend from a private company", "Taxed at the shareholder's slab rate; the company deducts TDS where dividend to a shareholder exceeds ₹10,000 in a year.", "Paid from profits that have already borne corporate tax, so the combined rate needs comparing with salary."],
  ["Loans from the company to shareholders", "Can be treated as deemed dividend where the company is closely held, has accumulated profits and the shareholder holds 10% or more of voting power.", "Common trap when family withdraws money from the company account for personal needs."],
  ["Rent from the family company for land or a building", "Taxed as house property income for the owner (with the 30% standard deduction); deductible for the company.", "Rent must be at a market rate and backed by a registered lease and actual use."],
];

const CAPITAL_GAINS = [
  ["Residential house, flat or plot in Coimbatore city (RS Puram, Race Course, Saibaba Colony)", "Long-term if held over 24 months: 12.5% without indexation; residents acquiring before 23 July 2024 may compare 20% with indexation.", "Reinvest in a residential house (Section 54 of the 1961 Act; equivalent relief continues under the 2025 Act), or specified bonds up to ₹50 lakh within six months."],
  ["Industrial land or factory shed on Avinashi Road or in an industrial estate", "Land is long-term after 24 months. A factory building on which depreciation was claimed is a depreciable asset; its gain is usually short-term, computed on the block.", "Split the sale price between land and building in the deed. Relief for shifting an industrial undertaking out of an urban area, or for compulsory acquisition, exists with conditions."],
  ["Agricultural land on the city fringe", "Not a capital asset at all if it lies beyond the specified distance from a municipality, based on population. Otherwise taxed like other land.", "Relief for buying new agricultural land within two years is available where the land was used for agriculture for two years before sale."],
  ["Farmhouse or plantation property in the hills or Pollachi belt", "The house may be part of agricultural land (and its income agricultural) only if it meets the conditions on being used by the cultivator; otherwise it is ordinary property.", "Records of cultivation, patta and adangal entries and crop sale bills decide the treatment."],
  ["Any land or building sold below guideline value", "Section 50C (1961 Act numbering) treats the stamp duty value as the sale price where it exceeds the actual price by more than 10%.", "Check the guideline value for the survey number on tnreginet.gov.in before agreeing the price; the buyer faces a matching rule."],
];

const DOCUMENTS = [
  ["Firm and company financials", "Audited accounts of each family firm and company, partners' capital accounts, director remuneration resolutions and dividend registers."],
  ["Partnership deeds and HUF records", "Current deed with remuneration and interest clauses; HUF PAN, list of members and the source of the HUF's original corpus."],
  ["Property papers", "Sale and purchase deeds, guideline value printout from tnreginet.gov.in, patta, encumbrance certificate, and bills for improvements."],
  ["Agricultural income records", "Chitta and adangal, crop sale bills from mandis or traders, coconut or other produce receipts, and land lease agreements."],
  ["Bank and investment statements", "All savings and current accounts, demat holdings, mutual fund statements and fixed deposits of each family member and the HUF."],
  ["AIS and Form 26AS", "Downloaded for each family member, firm and HUF, so reported transactions can be matched before filing."],
];

const CALENDAR = [
  ["15 June 2026", "First advance tax instalment for tax year 2026-27 (15% of estimated tax). Industrialists with lumpy firm or dividend income should estimate early."],
  ["15 September 2026", "Second instalment (45% cumulative)."],
  ["21 November 2026", "Return due for financial year 2025-26 under the Income-tax Act, 1961 for audited firms and companies, and for partners of audited firms (extended from 31 October by CBDT Circular No. 7/2026; audit report by 21 October 2026)."],
  ["15 December 2026", "Third instalment (75% cumulative). Include any land sale already concluded in the year."],
  ["15 March 2027", "Final instalment (100%). Capital gains arising after an instalment date can be covered in the next instalment without interest."],
  ["31 July 2027", "Return due for tax year 2026-27 for individuals and HUFs without audited business income."],
  ["31 October 2027", "Return due for tax year 2026-27 where accounts are audited, including partners of audited firms."],
  ["31 December 2027", "Last date for a belated return for tax year 2026-27."],
  ["31 March 2028", "Last date to revise the tax year 2026-27 return (twelve months after the tax year ends, as amended by the Finance Act, 2026)."],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${slug}`}
      serviceType="Income Tax Consulting for High-Income Individuals"
      crumbLabel="Income Tax Consultant in Coimbatore"
      crumbHref={slug}
      parentCrumb={{ name: "Income Tax for HNIs", href: "/income-tax-consultant-for-hni-chennai" }}
      eyebrow="Income Tax · Coimbatore · Business Families"
      h1="Income Tax Consultant in Coimbatore for Business Families and High-Income Individuals"
      subhead="Income tax for Coimbatore industrialist families who run pump, foundry, engineering and textile businesses: how profit leaves the firm or company, HUF and family structuring, agricultural and farmhouse income, and capital gains on industrial and city land. Our only office is in Anna Nagar, Chennai; we serve Coimbatore clients online."
      keyFacts={[
        { label: "Where we work from", value: "Anna Nagar, Chennai only. We have no office in Coimbatore; Coimbatore clients work with us online, with meetings in Chennai by appointment." },
        { label: "Typical client", value: "Promoter families with a partnership firm or private company in pumps, castings, machining or textiles, plus HUF, rental and farm holdings." },
        { label: "Law in force", value: "Income-tax Act, 2025 from 1 April 2026 (tax year 2026-27). Returns for financial year 2025-26 are still filed under the Income-tax Act, 1961." },
        { label: "Property capital gains", value: "Land and buildings held over 24 months: 12.5% without indexation, with a 20%-with-indexation option for residents on property acquired before 23 July 2024." },
        { label: "Assessments", value: "Most scrutiny and notices are handled through the faceless e-proceedings system, so location does not change how a reply is filed." },
      ]}
      introHeading="Do Coimbatore business families need a separate income tax consultant from their firm's auditor?"
      intro="Often, yes. The firm or company auditor focuses on the entity's books, while a Coimbatore promoter family's tax position spreads across partners, directors, an HUF, rented factory land, farmland and investments. We look at all of them together, plan how profit is drawn out, and file each return so the figures match the AIS. We work online from Anna Nagar, Chennai."
      citation={{ label: "Tamil Nadu Registration Department guideline value search (tnreginet.gov.in)", href: "https://tnreginet.gov.in/" }}
      subServicesHeading="What do we handle for Coimbatore families and promoters?"
      subServices={[
        { name: "Profit extraction planning", text: "We compare partner remuneration, interest on capital, director salary and dividends for each family member, within the limits in the deed and the law, before the year closes." },
        { name: "Family returns in one cycle", text: "Returns for each partner, director, spouse, adult child and the HUF prepared together, so income is not omitted from one return or reported twice." },
        { name: "Capital gains on land and factories", text: "Computation for city plots, industrial land, sheds and farmland, guideline value checks, apportionment between land and building, and reinvestment timelines." },
        { name: "Agricultural and farmhouse income", text: "Separating genuine agricultural income from rent, interest and other receipts, and maintaining the records that support it if questioned." },
        { name: "HUF review", text: "Whether an existing HUF is properly constituted, what income belongs to it, and how gifts and partitions affect clubbing." },
        { name: "Notices and scrutiny", text: "Replies to e-proceedings notices on high-value transactions, cash deposits or land sales, coordinated with our notice-reply team." },
      ]}
      howTo={{
        heading: "How does a Coimbatore family work with us online?",
        steps: [
          { name: "Initial video call", text: "We map the family's entities: firms, companies, HUF, properties and farmland, and agree which returns we will prepare." },
          { name: "Document collection", text: "You share accounts, deeds and statements through a secure link or email; originals stay with you or can be couriered to Chennai." },
          { name: "AIS reconciliation", text: "We download and match each person's AIS and Form 26AS against books, bank statements and property records." },
          { name: "Planning note before year end", text: "Before March, we send a short note on drawings, advance tax and any planned land sale, so decisions are made in time." },
          { name: "Return filing and verification", text: "Returns are filed and e-verified with Aadhaar OTP or digital signature; we track processing and refunds." },
          { name: "Meetings by appointment", text: "If you prefer to meet, we see you at our Anna Nagar, Chennai office by appointment; we do not hold meetings in Coimbatore." },
        ],
      }}
      faqs={[
        { question: "Is a partner's share of profit from our Coimbatore firm taxable?", answer: "No. A partner's share of profit is exempt because the firm has already paid tax on it. Remuneration and interest on capital paid to the partner are different: they are deductible for the firm within the permitted limits and taxable in the partner's hands as business income." },
        { question: "Should we take money out of our company as salary or dividend?", answer: "It depends on each person's slab, the company's tax rate and whether the person actually works in the business. Salary is deductible for the company but taxed at slab rates; dividend comes from taxed profit and is taxed again at slab. We compare both for each family member every year." },
        { question: "Is income from our coconut farm near Pollachi taxable?", answer: "Agricultural income from land in India is exempt from income tax. But where you also have other income above the basic exemption, agricultural income is added to fix the rate on that other income. You need land records and sale bills to show the income is genuinely agricultural." },
        { question: "How is the sale of our old foundry land on Avinashi Road taxed?", answer: "Land held over 24 months gives long-term capital gain at 12.5% without indexation, or, for residents on land acquired before 23 July 2024, 20% with indexation if lower. The building portion, if depreciated, is taxed separately. If the guideline value exceeds the price by more than 10%, the guideline value is used." },
        { question: "Does our family HUF still make sense?", answer: "An HUF is a separate taxpayer with its own exemption limit, so it can reduce tax where it owns genuine ancestral property or business. But gifts from members to the HUF are usually clubbed back, and partial partitions are not recognised. We review whether your HUF has real income of its own." },
        { question: "Do we have to come to Chennai to work with you?", answer: "No. Coimbatore families work with us by video call, email and secure document sharing, and returns are e-verified online. If you want to meet in person, we see clients at our Anna Nagar, Chennai office by appointment. We do not have an office or representative in Coimbatore." },
        { question: "Is agricultural land near Coimbatore city a capital asset?", answer: "It depends on distance and population. Agricultural land inside a municipality, or within the specified aerial distance of one (2, 6 or 8 km depending on population), is a capital asset. Land beyond those limits is not, so its sale is outside capital gains tax. We check the survey location before you sell." },
      ]}
      relatedQuestions={[
        { question: "How do HNIs in Chennai plan their income tax?", href: "/income-tax-consultant-for-hni-chennai" },
        { question: "How do I reply to an income tax notice on a land sale?", href: "/income-tax-notice-reply-chennai" },
        { question: "How is a GST appeal handled in Coimbatore?", href: "/gst-litigation-coimbatore" },
      ]}
      relatedSlugs={["income-tax-return-filing-chennai", "income-tax-notice-reply-chennai", "nri-tax-services"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">What makes income tax different for Coimbatore industrialist families?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Coimbatore&apos;s wealth is largely built in manufacturing: pump sets and motors, foundries and castings, textile
        machinery, spinning mills and engineering job work. Families who live in RS Puram, Race Course, Saibaba Colony or
        Peelamedu usually hold that business through a partnership firm or a closely held private company, often both,
        with the next generation joining as partners or directors. Alongside the business there is usually factory land
        on Avinashi Road or in an industrial estate, rented property in the city, and farmland or a plantation outside it.
        The result is that one family&apos;s income is spread over many PANs, and most tax questions are about how money
        moves between them rather than about a single return.
      </p>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Three issues come up repeatedly. First, profit extraction: how much each family member should draw as remuneration,
        salary, interest or dividend, and whether withdrawals from a company account are being treated as loans that become
        deemed dividend. Second, the treatment of land, especially when an older factory moves out of the city and the land
        is sold or developed. Third, agricultural income, which is exempt but frequently questioned when it is large compared
        with the land actually held.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How can a promoter take profit out of a family firm or company?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Each route is taxed differently in the entity and in the family member&apos;s hands. The right mix changes every
        year with profits, slab rates and who is actively working in the business.
      </p>
      <DataTable head={["Route", "Tax treatment", "Points to watch"]} rows={EXTRACTION} />

      <h2 className="mt-14 text-2xl text-obsidian">How are capital gains on Coimbatore land and property taxed?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Stamp duty and capital gains in Tamil Nadu both refer to the guideline value fixed by the Registration Department
        for each street or survey number. Guideline values are revised from time to time, so we check the current figure on
        tnreginet.gov.in for the exact survey number before a sale price is agreed, rather than relying on a figure quoted
        by a broker. Section numbers below follow the 1961 Act, which governs transfers up to 31 March 2026; the 2025 Act
        carries the corresponding rules under new numbers for later transfers.
      </p>
      <DataTable head={["Property type", "How the gain is taxed", "Reliefs and checks"]} rows={CAPITAL_GAINS} />

      <h2 className="mt-14 text-2xl text-obsidian">What happens to tax when an old Coimbatore factory moves out and its land is sold?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        As the city has grown, a number of older units that once sat at the edge of town now stand in residential or
        commercial neighbourhoods, and families consider moving production to a larger site and selling or developing the
        old land. The tax result depends on who owns what. If the land is owned personally by a family member and only
        leased to the firm or company, the sale is that person&apos;s capital gain. If it is on the firm&apos;s or
        company&apos;s books, the gain is the entity&apos;s, and getting the money out to the family afterwards is a second
        taxable step. Buildings and plant that were depreciated are dealt with through the block of assets, so a large sale
        price for an old shed can produce short-term gain even after decades of ownership.
      </p>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Joint development agreements with builders, common for city land, have their own timing rules: the gain generally
        arises when the completion certificate for the project is issued, and the owner&apos;s share of flats is valued by
        reference to stamp duty value. Before any agreement is signed, we map ownership, the cost and holding period of each
        portion, the reliefs available for reinvestment or for shifting an industrial undertaking, and the advance tax that
        will fall due, so the family can choose the structure with full knowledge of the tax.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What should be checked before a family settlement or succession?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Second- and third-generation transitions are common in Coimbatore family businesses. Gifts of property or shares
        between close relatives are generally not taxed in the hands of the recipient, and transfers under a gift, will or
        family arrangement are generally not treated as transfers for capital gains. But clubbing rules can bring income from
        assets gifted to a spouse or daughter-in-law back to the giver, retiring partners who take away assets from a firm can
        trigger tax in the firm, and changes in the shareholding of a closely held company can affect its right to carry
        forward losses. We review the proposed arrangement for these points before documents are signed.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How is agricultural and farmhouse income treated?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Many Coimbatore families hold coconut groves, areca or plantation land in the surrounding taluks. Income from
        cultivating that land and selling the produce is agricultural income and is exempt. It is still reported in the
        return, and where non-agricultural income is above the basic exemption, it is used to work out the rate on that other
        income. Rent from leasing the land to a farmer is also agricultural income, but interest, rent from a farmhouse let
        out for events, and income from processing beyond what makes the produce marketable generally are not. The department
        compares reported agricultural income with landholding and crop yields, so we keep chitta, adangal, sale bills and
        bank receipts on file for each year.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What documents should a Coimbatore family keep ready?</h2>
      <DataTable head={["Document", "What it covers"]} rows={DOCUMENTS} />

      <h2 className="mt-14 text-2xl text-obsidian">What are the key income tax dates for tax year 2026-27?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Tax year 2026-27 runs from 1 April 2026 to 31 March 2027 under the Income-tax Act, 2025. Returns for financial year
        2025-26 that are still pending are filed under the 1961 Act. The dates below are the statutory dates; the CBDT
        sometimes extends them.
      </p>
      <DataTable head={["Date", "What is due"]} rows={CALENDAR} />

      <h2 className="mt-14 text-2xl text-obsidian">How do we work with Coimbatore clients from Chennai?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        C S Rushil &amp; Co. has one office, in Anna Nagar, Chennai. We do not have a Coimbatore branch or representative.
        Coimbatore families work with us by video call and secure document sharing, and returns are e-verified online. When
        a client prefers to meet, we meet at our Chennai office by appointment. For the wider approach to high-income
        returns, see our{" "}
        <Link href="/income-tax-consultant-for-hni-chennai" className={linkClass}>
          income tax service for HNIs
        </Link>
        ; for individual returns, see{" "}
        <Link href="/income-tax-return-filing-chennai" className={linkClass}>
          income tax return filing
        </Link>
        . Families setting up a new company for the next generation can use our{" "}
        <Link href="/company-registration-coimbatore" className={linkClass}>
          company registration in Coimbatore
        </Link>{" "}
        service, and businesses facing GST disputes can see{" "}
        <Link href="/gst-litigation-coimbatore" className={linkClass}>
          GST litigation in Coimbatore
        </Link>
        . Family members living abroad are covered by our{" "}
        <Link href="/nri-tax-services" className={linkClass}>
          NRI tax services
        </Link>
        , notices go to our{" "}
        <Link href="/income-tax-notice-reply-chennai" className={linkClass}>
          notice reply team
        </Link>
        , and you can reach us through the{" "}
        <Link href="/contact" className={linkClass}>
          contact page
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
