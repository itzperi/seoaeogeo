import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const slug = "/income-tax-consultant-hyderabad";
const title = "Income Tax Consultant in Hyderabad | C S Rushil & Co.";
const description =
  "Online income tax advice for high-income Hyderabad residents: GCC RSUs, pharma promoter shareholdings, Telangana land deals and agricultural land gains.";

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

const LAND = [
  ["Agricultural land outside the specified distance from any municipality", "Not a capital asset", "No capital gains tax on sale. Agricultural income from it is exempt, though it can raise the rate on other income."],
  ["Agricultural land inside a municipality of 10,000+ people, or within the specified aerial distance of one", "Capital asset", "Capital gains apply. The distance is 2, 6 or 8 km depending on the municipality's population at the last census."],
  ["Urban agricultural land sold and replaced with other agricultural land", "Capital asset", "Gain can be exempt if the land was farmed for two years before sale by you or your parents and new agricultural land is bought within two years."],
  ["Urban agricultural land compulsorily acquired", "Capital asset", "Compensation for land farmed for two years before acquisition can be exempt for individuals and HUFs; compensation under the 2013 land acquisition law is covered by a CBDT clarification."],
  ["Plot given to a developer under a registered joint development agreement", "Capital asset", "For individuals and HUFs, the gain arises in the year the completion certificate is issued, valued at the stamp duty value of your share of the project then, plus any cash."],
];

const CAPITAL_GAINS = [
  ["Shares of a foreign parent from GCC RSUs", "More than 24 months", "12.5% without indexation", "Slab rates"],
  ["Listed promoter shares sold on the exchange or through an offer for sale (STT paid)", "More than 12 months", "12.5% on gains above ₹1.25 lakh a year", "20%"],
  ["Unlisted shares in a family pharma or biotech company", "More than 24 months", "12.5% without indexation", "Slab rates"],
  ["Flats, villas and plots in Telangana", "More than 24 months", "12.5% without indexation; residents may choose 20% with indexation for property acquired before 23 July 2024", "Slab rates"],
];

const DOCUMENTS = [
  ["RSU vesting and sale statements", "Matches each vest with payroll TDS and gives the cost for capital gains.", "Employer's equity plan platform"],
  ["Demat holding and transaction statements", "Promoter share sales, pledges and invocations, bonus and split adjustments.", "Your depository participant"],
  ["Pahani or ROR-1B extract, pattadar passbook and cultivation records", "Shows the land was agricultural and farmed, for exemption and land-status questions.", "Telangana land records portal (Bhu Bharati, earlier Dharani)"],
  ["Joint development agreement and completion certificate", "Fixes the year of taxation and the value of the share received.", "Developer and the local planning authority"],
  ["Award or compensation order for acquired land", "Supports the exemption claim for compulsory acquisition.", "Land acquisition officer"],
  ["Form 26AS and Annual Information Statement", "Confirms TDS deducted by developers, buyers, companies and banks.", "Income tax e-filing portal"],
];

const CALENDAR = [
  ["15 June 2026", "First advance tax instalment for tax year 2026-27 (15%)."],
  ["15 September 2026", "Second instalment (45% cumulative). Dividends declared after the AGM season often need to be added here."],
  ["15 December 2026", "Third instalment (75% cumulative)."],
  ["31 December 2026", "Belated return deadline for FY 2025-26 under the 1961 Act."],
  ["15 March 2027", "Final instalment (100%). A land sale or completion certificate received late in the year needs a final check."],
  ["31 July 2027", "Return due for tax year 2026-27 for individuals without business income and not under audit."],
  ["31 August 2027", "Return due for non-audit business or professional income (date introduced by the Finance Act, 2026; confirm against the notified rules)."],
  ["31 March 2028", "Last date to revise the tax year 2026-27 return."],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${slug}`}
      serviceType="Income Tax Consultancy for High-Income Individuals"
      crumbLabel="Income Tax Consultant — Hyderabad"
      crumbHref={slug}
      parentCrumb={{ name: "Income Tax for HNIs", href: "/income-tax-consultant-for-hni-chennai" }}
      eyebrow="Income Tax · Hyderabad clients served online"
      h1="Income Tax Consultant for High-Income Individuals in Hyderabad"
      subhead="Income tax returns and planning for Hyderabad professionals at global capability centres, pharma and biotech promoters, and families holding land in and around the city. We work from Anna Nagar, Chennai and serve Hyderabad clients online."
      keyFacts={[
        { label: "Office", value: "Anna Nagar, Chennai only. There is no Hyderabad office; Hyderabad clients are served online." },
        { label: "Working method", value: "Video meetings, secure document exchange, and returns e-verified by Aadhaar OTP, net banking or digital signature." },
        { label: "Why it works remotely", value: "Income tax is a central law administered online, so the taxpayer's city does not limit the work." },
        { label: "Typical Hyderabad issues", value: "GCC RSUs, promoter shareholdings, plots and development agreements, agricultural land near the city." },
        { label: "Return due for tax year 2026-27", value: "31 July 2027 without business income; 31 October 2027 where an audit applies." },
      ]}
      introHeading="Can a Chennai firm be your income tax consultant in Hyderabad?"
      intro="Yes. We are based in Anna Nagar, Chennai and have no Hyderabad office, but income tax is a national law administered online, so returns, e-verification and most notices do not depend on where you live. Hyderabad clients work with us by video and secure upload, mainly on RSUs, promoter shareholdings and Telangana land."
      citation={{
        label: "Registration and Stamps Department, Government of Telangana (registration.telangana.gov.in)",
        href: "https://registration.telangana.gov.in/",
      }}
      subServicesHeading="What income tax work do Hyderabad clients usually need?"
      subServices={[
        { name: "GCC Equity Compensation", text: "RSU and ESPP reporting for employees of global capability centres, from vesting through sale, with foreign asset disclosure and foreign tax credit on dividends." },
        { name: "Promoter Shareholdings", text: "Capital gains on block deals and offers for sale, tax on dividends from family companies, and the tax effect of gifting shares to relatives or a family trust." },
        { name: "Agricultural Land Questions", text: "Whether land near the city is a capital asset, exemptions on replacement or compulsory acquisition, and the treatment of agricultural income." },
        { name: "Development Agreements", text: "Timing and value of the capital gain when a landowner hands a plot to a developer for a share of flats or built-up area." },
        { name: "Telangana Property Sales", text: "Capital gains computed against the registration market value, reinvestment planning and TDS by buyers on high-value transactions." },
        { name: "Notices and Faceless Assessment", text: "Replies to notices on land, share sales and high-value transactions through the e-filing portal, with a video hearing under faceless assessment where applicable." },
      ]}
      howTo={{
        heading: "How does a Hyderabad client work with us online?",
        steps: [
          { name: "Introductory call", text: "A video call to understand your employment, shareholdings and land, and to list the documents needed, including land records where agricultural land is involved." },
          { name: "Document exchange", text: "You upload statements, deeds and land records to a secure portal. Originals stay with you; scanned copies are enough for most work." },
          { name: "Land and share review", text: "We classify each asset, test exemptions and compute gains, flagging where a valuation report or the completion certificate date decides the answer." },
          { name: "Filing", text: "After you approve the computation on a call, we file the return and you e-verify it electronically. Nothing needs to be couriered." },
          { name: "Year-round support", text: "We revisit advance tax when dividends are declared, shares are sold or a development project is completed." },
        ],
      }}
      faqs={[
        { question: "Do you have a Hyderabad office?", answer: "No. C S Rushil & Co. has one office, in Anna Nagar, Chennai. Hyderabad clients are served online through video meetings, a secure document portal and electronic filing. You can visit our Chennai office by appointment, but a visit is not needed to prepare or file your return." },
        { question: "Is agricultural land near Hyderabad taxed when I sell it?", answer: "It depends on location. Agricultural land within a municipality of 10,000 or more people, or within 2, 6 or 8 km of one depending on its population, is a capital asset and the gain is taxable. Land beyond those limits is not a capital asset, so its sale is outside capital gains tax." },
        { question: "Is compensation for land acquired by the government taxable?", answer: "Often not. Compensation for urban agricultural land compulsorily acquired can be exempt for individuals and HUFs if the land was farmed for two years beforehand. A CBDT circular also treats compensation awarded under the 2013 land acquisition law as not taxable, subject to its conditions." },
        { question: "When is tax payable on a joint development agreement?", answer: "For an individual or HUF under a registered agreement, the capital gain arises in the year the competent authority issues the completion certificate, not when the agreement is signed. The gain is based on the stamp duty value of your share of the project on that date plus any cash received." },
        { question: "I am a pharma company promoter. How is my dividend taxed?", answer: "Dividends are taxed at your slab rate, with surcharge capped at 15%, and the company deducts TDS. Because promoter dividends can be large and arrive on a single date, advance tax should be recalculated as soon as the board recommends or declares a dividend, to avoid interest for short payment." },
        { question: "Can I gift shares to my children without tax?", answer: "Yes, in most cases. Gifts to relatives, including children and their spouses, are not taxed in the recipient's hands and are not treated as a transfer for capital gains. Income from shares gifted to a spouse or a minor child is generally clubbed with yours, so structure and records matter." },
        { question: "How are RSUs from my GCC employer taxed?", answer: "The value of shares on vesting is taxed as salary and your employer deducts TDS, often by selling some shares. On sale, the gain over that value is a capital gain, long-term after 24 months. The shares and broker account must also be disclosed as foreign assets in your return." },
        { question: "Will you appear before tax authorities in Hyderabad?", answer: "Not in person. Most assessments run under faceless procedures through the e-filing portal, which continue under the Income-tax Act, 2025. We file written submissions online and attend by video hearing under faceless assessment where applicable. If a matter needs physical representation, we tell you at the outset." },
      ]}
      relatedQuestions={[
        { question: "How is income tax planned for high-income individuals?", href: "/income-tax-consultant-for-hni-chennai" },
        { question: "How do I respond to an income tax notice?", href: "/income-tax-notice-reply-chennai" },
        { question: "How is Indian income taxed if I move abroad?", href: "/nri-tax-services" },
      ]}
      relatedSlugs={["income-tax-consultant-for-hni-chennai", "income-tax-return-filing-chennai", "income-tax-notice-reply-chennai", "nri-tax-services"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Who do we work with in Hyderabad?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Our Hyderabad clients fall into three groups. The first is senior staff at global capability centres and technology
        companies in Gachibowli, Madhapur and the Financial District, whose pay includes equity in a foreign parent. The
        second is promoters and senior management of pharmaceutical and life sciences businesses, for whom shareholding,
        dividends and family succession dominate the tax file. The third is families in Jubilee Hills, Banjara Hills and
        Kokapet who hold plots, apartments and agricultural land on the edges of the city. We serve all three from Anna
        Nagar, Chennai. We have no office or staff in Hyderabad and do not suggest otherwise.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How is equity from a global capability centre taxed?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Global capability centres usually grant restricted stock units or employee share purchase plans in the overseas
        parent. Each vesting is taxed as salary in India at the value on the vesting date, converted into rupees, and the
        Indian employer deducts TDS. Employees who joined from an overseas posting partway through the vesting period
        should also check their residential status for the year, because it decides whether income linked to work abroad
        is taxable in India. On sale, the cost is the value already taxed, and the shares are long-term only after 24
        months because they are not listed in India. The foreign broker account and each holding must be reported as
        foreign assets, including shares sold on the vesting date to cover tax.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What tax issues do pharma and biotech promoters face?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Promoter families hold most of their wealth in one company, so the tax file is built around that holding. Sales on
        the exchange, through block deals or in an offer for sale are taxed as listed equity, at 12.5% above the annual
        exemption if held for more than 12 months. Shares in unlisted group companies are long-term only after 24 months,
        and a sale below the value worked out under the valuation rules can be taxed at that value. Pledged shares need
        care: if a lender invokes a pledge and sells, the sale is still your transfer for tax purposes. Gifts of shares to
        children or a private family trust are common succession steps. Gifts to relatives are not taxed, but income on
        shares gifted to a spouse or minor child is clubbed with yours, and a trust&apos;s tax position depends on whether
        its beneficiaries and their shares are fixed.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">When is agricultural land near Hyderabad a capital asset?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Much of the land around the city&apos;s outer growth corridors began as farmland, and its tax treatment depends on
        exactly where it sits and how it has been used. The table summarises the main tests. Land records, aerial
        distance from the nearest municipal limit, and evidence of cultivation decide the answer, so we usually ask for the
        revenue record, the pattadar passbook and any crop or sale records before advising.
      </p>
      <DataTable head={["Situation", "Capital asset?", "Tax treatment"]} rows={LAND} />
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Even where agricultural income itself is exempt, if it exceeds ₹5,000 and your other income exceeds the basic
        exemption limit, it is added for rate purposes, which raises the tax on your other income. Owners of farmhouses
        with a small cultivated area should keep the farming and the residential use clearly documented.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How does Telangana&apos;s market value affect property tax?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Telangana&apos;s Registration and Stamps Department sets market values for land and buildings, and stamp duty,
        transfer duty and registration fees are charged on the higher of that value and the agreed price. The rates
        differ between municipal and rural areas and have been revised over time, so we check the current figures on the
        department&apos;s portal for the specific village or locality. For income tax, the department&apos;s value is the
        stamp duty value: if the sale price is more than 10% below it, it becomes the sale price for capital gains, and a
        buyer can be taxed on the shortfall. Owners in fast-appreciating areas such as Kokapet often hold plots bought at
        far lower values, so we compare 12.5% without indexation with 20% with indexation for property acquired before 23
        July 2024, and plan any reinvestment in a residential house or specified bonds before the sale deed is signed.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How are Hyderabad clients&apos; other capital gains taxed?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Rates apply to transfers on or after 23 July 2024, before surcharge (capped at 15% on these gains) and 4% cess.
      </p>
      <DataTable head={["Asset", "Long-term after", "Long-term rate", "Short-term rate"]} rows={CAPITAL_GAINS} />

      <h2 className="mt-14 text-2xl text-obsidian">What documents do Hyderabad clients usually provide?</h2>
      <DataTable head={["Document", "Why it is needed", "Source"]} rows={DOCUMENTS} />

      <h2 className="mt-14 text-2xl text-obsidian">Which dates matter in tax year 2026-27?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The Income-tax Act, 2025 applies from 1 April 2026. Income earned up to 31 March 2026 is still returned under
        the 1961 Act. Dates can be extended by the CBDT.
      </p>
      <DataTable head={["Date", "What is due"]} rows={CALENDAR} />

      <h2 className="mt-14 text-2xl text-obsidian">Where can Hyderabad clients read more?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The overall approach for high-income clients is set out on our{" "}
        <Link href="/income-tax-consultant-for-hni-chennai" className={linkClass}>
          income tax service for high-income individuals
        </Link>
        . Filing steps are on the{" "}
        <Link href="/income-tax-return-filing-chennai" className={linkClass}>
          income tax return filing
        </Link>{" "}
        page, and notice handling on{" "}
        <Link href="/income-tax-notice-reply-chennai" className={linkClass}>
          income tax notice replies
        </Link>
        . Family members living abroad can see our{" "}
        <Link href="/nri-tax-services" className={linkClass}>
          NRI tax services
        </Link>
        . To arrange a first call, use the{" "}
        <Link href="/contact" className={linkClass}>
          contact page
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
