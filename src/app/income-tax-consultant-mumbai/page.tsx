import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const slug = "/income-tax-consultant-mumbai";
const title = "Income Tax Consultant for HNIs in Mumbai | C S Rushil & Co.";
const description =
  "Online income tax advice for high-income Mumbai investors: listed equity, F&O and intraday as business income, AIF and PMS reporting, Maharashtra property.";

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

const TRADING = [
  ["Delivery-based sale of listed shares and equity funds", "Capital gains", "20% short-term (held 12 months or less); 12.5% long-term above ₹1.25 lakh a year", "Short-term loss sets off against any capital gain; long-term loss only against long-term gain; carry forward 8 years"],
  ["Futures and options on a recognised exchange", "Non-speculative business income", "Slab rates on net profit, after expenses such as brokerage, data and advisory costs", "Can be set off against other income except salary in the same year; balance carried forward 8 years against business income"],
  ["Intraday equity trades (no delivery)", "Speculative business income", "Slab rates", "Loss sets off only against speculative income; carried forward 4 years"],
  ["Frequent trading treated as a business by choice and conduct", "Business income", "Slab rates", "Depends on consistent treatment year to year; CBDT guidance lets listed-share investors choose, but the choice must be followed consistently"],
];

const POOLED = [
  ["Category I and II AIF units", "Income other than business income is taxed in your hands as if earned directly; business income is taxed at the fund level.", "The fund's annual statement of income by nature (Form 64C for years under the 1961 Act)."],
  ["Category III AIF units", "Generally taxed at the fund level; distributions to investors are usually not taxed again.", "Fund statements and the trustee's tax confirmation."],
  ["Portfolio management service (PMS)", "You own the securities in your own demat account, so every purchase and sale by the manager is your capital gain or loss.", "Transaction-wise capital gains report and the PMS fee statement from the manager."],
  ["Mutual funds", "Equity funds follow listed equity rates; debt funds bought on or after 1 April 2023 are taxed at slab rates.", "Consolidated account statement from CAMS or KFintech."],
];

const CALENDAR = [
  ["15 June 2026", "First advance tax instalment for tax year 2026-27 (15%). F&O profits to date should be estimated, not ignored."],
  ["15 September 2026", "Second instalment (45% cumulative)."],
  ["15 December 2026", "Third instalment (75% cumulative)."],
  ["31 December 2026", "Belated return deadline for FY 2025-26 under the 1961 Act. A belated return cannot carry forward business or capital losses."],
  ["15 March 2027", "Final instalment (100%)."],
  ["31 July 2027", "Return due for tax year 2026-27 for investors without business income and not under audit."],
  ["31 August 2027", "Return due for traders with F&O or other business income not under audit (date introduced by the Finance Act, 2026; confirm against the notified rules)."],
  ["30 September 2027", "Tax audit report due where an F&O trader's turnover or circumstances require an audit."],
  ["31 October 2027", "Return due where a tax audit applies."],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${slug}`}
      serviceType="Income Tax Consultancy for High-Income Individuals"
      crumbLabel="Income Tax Consultant — Mumbai"
      crumbHref={slug}
      parentCrumb={{ name: "Income Tax for HNIs", href: "/income-tax-consultant-for-hni-chennai" }}
      eyebrow="Income Tax · Mumbai clients served online"
      h1="Income Tax Consultant for High-Income Individuals in Mumbai"
      subhead="Income tax returns and planning for Mumbai investors and traders: listed equity portfolios, futures and options and intraday trading reported as business income, AIF and PMS holdings, and Maharashtra property including society redevelopment. Our office is in Anna Nagar, Chennai; we serve Mumbai online."
      keyFacts={[
        { label: "Office", value: "Our only office is in Anna Nagar, Chennai. We have no Mumbai office; Mumbai clients are served online." },
        { label: "How we work", value: "Video meetings, secure upload of contract notes and statements, and returns e-verified electronically." },
        { label: "Why distance is not a barrier", value: "Income tax is a national law, and filing, processing and most assessments are handled online." },
        { label: "Typical Mumbai issues", value: "F&O and intraday income, loss set-off, tax audit thresholds, AIF and PMS reporting, redevelopment of housing societies." },
        { label: "Return with F&O income", value: "ITR for business income; 31 October 2027 if a tax audit applies for tax year 2026-27." },
      ]}
      introHeading="Can a Chennai CA file income tax for an active Mumbai investor?"
      intro="Yes. Income tax is a national law and is filed, processed and largely assessed online, so we handle Mumbai clients' returns from our Anna Nagar, Chennai office, without an office in Mumbai. We work by video and secure upload, and most Mumbai files we see involve listed equity, F&O and intraday income, AIFs, PMS and Maharashtra property."
      citation={{
        label: "Income Tax Department: filing help for individuals with business or professional income (incometax.gov.in)",
        href: "https://www.incometax.gov.in/iec/foportal/help/individual-business-profession",
      }}
      subServicesHeading="What income tax work do Mumbai clients usually need?"
      subServices={[
        { name: "F&O and Intraday Returns", text: "Computing turnover and profit from broker ledgers and contract notes, separating speculative and non-speculative income, and filing the business-income return." },
        { name: "Tax Audit Assessment", text: "Checking whether trading turnover or a low-profit position after earlier presumptive filing triggers an audit, and coordinating the audit report in time." },
        { name: "Loss Set-Off and Carry Forward", text: "Ordering set-off correctly across capital, speculative and business losses and keeping a loss register so carried-forward losses are not lost." },
        { name: "AIF and PMS Reporting", text: "Reporting pass-through income from AIF statements and every trade in a PMS account, and reconciling them with the Annual Information Statement." },
        { name: "Maharashtra Property and Redevelopment", text: "Capital gains on flats and the treatment of new flats, corpus and rent received when a housing society is redeveloped." },
        { name: "Notices and Faceless Assessment", text: "Replies to notices on high-value securities transactions, turnover mismatches and loss claims, with a video hearing under faceless assessment where applicable." },
      ]}
      howTo={{
        heading: "How do Mumbai clients work with us online?",
        steps: [
          { name: "Scoping call", text: "We discuss your brokers, PMS and AIF holdings, property and any trading activity, and set a list of statements to download." },
          { name: "Statements uploaded", text: "Broker P&L and ledgers, contract notes, AIF and PMS tax statements and property papers go to our secure portal." },
          { name: "Classification and reconciliation", text: "We classify each stream of income, reconcile it with the Annual Information Statement and identify any audit or loss carry-forward point." },
          { name: "Review and filing", text: "We take you through the computation on video, file the return before the relevant due date and you e-verify it online." },
          { name: "Advance tax through the year", text: "Quarterly check-ins estimate trading and capital gains so instalments track your actual results." },
        ],
      }}
      faqs={[
        { question: "Does your firm have an office in Mumbai?", answer: "No. Our only office is in Anna Nagar, Chennai. Mumbai clients are served online, through video meetings, a secure document portal and electronic filing and verification. Clients are welcome to meet us in Chennai by appointment, but it is not necessary for any part of the return or a faceless proceeding." },
        { question: "Is F&O trading income business income or capital gains?", answer: "Business income. Profits and losses from futures and options on a recognised exchange are non-speculative business income, so you file a business-income return and can deduct trading expenses. This is separate from delivery-based share sales, which remain capital gains, and from intraday equity trades, which are speculative business income." },
        { question: "Can I set off F&O losses against my salary?", answer: "No. A non-speculative business loss from F&O can be set off against other income such as rent, interest or capital gains in the same year, but not salary. Any balance is carried forward for eight years against business income, provided the return is filed by the due date." },
        { question: "Do I need a tax audit for F&O trading?", answer: "Only in certain cases. An audit applies if turnover, calculated as the total of absolute profits and losses plus option premium, crosses the threshold, which is ₹10 crore where cash transactions stay within 5%. It can also apply if you used presumptive taxation recently and now report lower profit with income above the exemption limit." },
        { question: "How is income from a Category II AIF taxed?", answer: "Mostly in your hands. Category I and II AIFs are pass-through vehicles: interest, dividends and capital gains earned by the fund are taxed as if you earned them directly, while any business income is taxed at the fund level. The fund issues an annual statement showing each type of income for your return." },
        { question: "Are PMS fees deductible from my capital gains?", answer: "This is contested. Many tribunal decisions have refused to treat PMS management and performance fees as part of the cost of acquisition or transfer, while a few have allowed them. We report the fees transparently and advise on the position based on your fee structure and the current rulings." },
        { question: "Is the new flat from my society's redevelopment taxable?", answer: "Generally the receipt of a new flat in place of the old one is not treated as income, but corpus or hardship payments, extra area and rent for temporary accommodation have been treated differently by tribunals. We review the development agreement and your payments before taking a position in the return." },
        { question: "Will you appear before the Mumbai income tax office?", answer: "Not in person. Assessments under faceless procedures run through the e-filing portal and continue under the Income-tax Act, 2025. We file submissions online and attend by video hearing under faceless assessment where applicable. If a matter needs physical representation, we tell you at the start." },
      ]}
      relatedQuestions={[
        { question: "How do we plan income tax for high-income individuals?", href: "/income-tax-consultant-for-hni-chennai" },
        { question: "I received a notice about high-value securities transactions. What now?", href: "/income-tax-notice-reply-chennai" },
        { question: "How is a non-resident's Indian portfolio taxed?", href: "/nri-tax-services" },
      ]}
      relatedSlugs={["income-tax-consultant-for-hni-chennai", "income-tax-return-filing-chennai", "income-tax-notice-reply-chennai", "nri-tax-services"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Who do we work with in Mumbai?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Our Mumbai clients are mostly investors whose income comes from markets rather than salary alone: business owners
        with large listed portfolios, professionals who trade derivatives alongside their work, and families who invest
        through portfolio managers and alternative investment funds. They live in areas such as Malabar Hill, Cuffe
        Parade, Worli and Lower Parel in the south and centre of the city, Bandra and Juhu in the western suburbs, and
        Powai. Many also own flats in older housing societies that are being redeveloped. We are not located in Mumbai.
        Our team works from Anna Nagar, Chennai and serves Mumbai entirely online.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How are different kinds of trading income taxed?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The single most important step in an active investor&apos;s return is putting each transaction in the right
        category, because the rate, the deductions and the loss rules all follow from it. Broker profit and loss
        statements group trades by product, which helps, but they do not decide the tax category on their own. The table
        sets out the usual treatment for individuals.
      </p>
      <DataTable head={["Activity", "Head of income", "How it is taxed", "Loss rules"]} rows={TRADING} />
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Turnover for derivatives is not the contract value. It is calculated as the sum of absolute profits and losses on
        each trade, plus premium received on options sold, which keeps most individual traders well below the audit
        threshold. Expenses directly connected with trading, such as brokerage not already netted off, exchange data
        subscriptions, a share of internet costs and advisory fees, can be claimed against F&amp;O profit if supported by
        records. Securities transaction tax paid on trades taxed as business income can be deducted from that income, though
        not from capital gains, and its rates have changed in recent budgets, so we take the figures from your
        contract notes rather than estimating them.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Why does the due date matter so much for traders?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        A business loss, a speculative loss or a capital loss can be carried forward only if the return for that year is
        filed by the due date. A belated return still reports the loss but cannot carry it forward, which can cost more
        than the tax for the year itself. We maintain a register of each client&apos;s carried-forward losses by type and
        year of origin, so that a loss from an F&amp;O year can be used against later trading profit before it expires.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How are AIF, PMS and mutual fund holdings reported?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Mumbai investors often use several pooled or managed products at once. Each is taxed differently, and each issues
        its own tax statement, which has to be matched with the Annual Information Statement before filing.
      </p>
      <DataTable head={["Product", "How it is taxed", "What we need"]} rows={POOLED} />

      <h2 className="mt-14 text-2xl text-obsidian">How does Maharashtra stamp duty interact with income tax?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        In Maharashtra, stamp duty is charged on the higher of the agreed price and the market value under the Annual
        Statement of Rates, commonly called the ready reckoner, published by the Inspector General of Registration. The
        rate depends on the municipal area, with metro cess and concessions for women purchasers applying in some cases,
        so we confirm the current position for your property on the{" "}
        <a href="https://igrmaharashtra.gov.in/" target="_blank" rel="noopener noreferrer" className={linkClass}>
          IGR Maharashtra website
        </a>
        . For income tax, the ready reckoner value is the stamp duty value. A seller who accepts a price more than 10%
        below it is taxed as if it were the sale price, and a buyer can be taxed on the shortfall. Long-held flats in
        established neighbourhoods often carry large gains, so we compare 12.5% without indexation with 20% with
        indexation for property acquired before 23 July 2024, and plan any reinvestment in a residential house or
        specified bonds before the sale.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What are the tax questions in a housing society redevelopment?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Redevelopment of older cooperative housing societies is common in Mumbai. Members typically receive a new flat,
        often larger than the old one, plus some combination of a corpus or hardship payment, rent for temporary
        accommodation and shifting costs. Tribunal decisions have not treated all of these in the same way. Points we
        review include whether the new flat is a continuation of the old one for the holding period, how any extra area is
        treated, whether the corpus reduces cost or is taxed as a receipt, and whether rent received is income. The
        answer depends on the wording of the development agreement and the payments actually made, so we read the
        agreement before advising.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Which dates should a Mumbai investor track in tax year 2026-27?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The Income-tax Act, 2025 applies from 1 April 2026. Income up to 31 March 2026 is returned under the 1961 Act.
        The CBDT can extend these dates.
      </p>
      <DataTable head={["Date", "What is due"]} rows={CALENDAR} />

      <h2 className="mt-14 text-2xl text-obsidian">Where can Mumbai clients find related services?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Our planning approach for high-income clients is on the{" "}
        <Link href="/income-tax-consultant-for-hni-chennai" className={linkClass}>
          income tax service for high-income individuals
        </Link>{" "}
        page. The filing process is described under{" "}
        <Link href="/income-tax-return-filing-chennai" className={linkClass}>
          income tax return filing
        </Link>
        , and notices on securities transactions or loss claims are covered under{" "}
        <Link href="/income-tax-notice-reply-chennai" className={linkClass}>
          income tax notice replies
        </Link>
        . Family members abroad can see our{" "}
        <Link href="/nri-tax-services" className={linkClass}>
          NRI tax services
        </Link>
        . To start, please use the{" "}
        <Link href="/contact" className={linkClass}>
          contact page
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
