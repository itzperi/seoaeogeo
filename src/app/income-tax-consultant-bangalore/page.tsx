import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const slug = "/income-tax-consultant-bangalore";
const title = "Income Tax Consultant for HNIs in Bengaluru | Online CA";
const description =
  "Online income tax advice for high-income Bengaluru residents: foreign RSUs and ESOPs, Schedule FA, startup share sales and Karnataka property gains.";

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

const CAPITAL_GAINS = [
  ["Shares of a foreign parent from RSUs or ESPP (for example, listed in the US)", "More than 24 months", "12.5% without indexation", "Slab rates. Cost is the value already taxed as salary at vesting, not zero."],
  ["Unlisted shares of an Indian startup (founder or early-employee stake)", "More than 24 months", "12.5% without indexation", "Slab rates. Sale below fair market value can be replaced by that value for the seller."],
  ["Listed Indian shares and equity mutual funds (STT paid)", "More than 12 months", "12.5% on gains above ₹1.25 lakh a year", "20%"],
  ["Flat, villa or plot in Karnataka", "More than 24 months", "12.5% without indexation; residents may choose 20% with indexation for property acquired before 23 July 2024", "Slab rates"],
  ["Debt mutual funds bought on or after 1 April 2023", "Not relevant", "Taxed at slab rates as short-term, whatever the holding period", "Slab rates"],
];

const DOCUMENTS = [
  ["Stock plan statements (vest, release and sale confirmations)", "Each RSU tranche's vest date, shares released, shares sold to cover tax and the price used.", "Your employer's equity platform or the foreign broker"],
  ["Payslips and Form 16 for the year", "Checks that the perquisite on vesting was included and that the employer deducted TDS on it.", "Your employer"],
  ["Foreign broker and bank statements for the full calendar year", "Peak and closing values for foreign asset reporting, and dividends with foreign tax withheld.", "The foreign broker and any foreign bank"],
  ["Share purchase agreement and cap table for a secondary sale", "Sale price, buyer's status, valuation report and any TDS deducted by the buyer.", "The company secretary or the investor's counsel"],
  ["Sale deed, purchase deed and Karnataka guidance value extract", "Cost, sale price and the stamp duty value used for capital gains.", "Your property papers and the Kaveri registration portal"],
  ["Form 26AS and Annual Information Statement", "Matches every TDS credit and high-value transaction the department already knows about.", "Income tax e-filing portal"],
];

const CALENDAR = [
  ["15 June 2026", "First advance tax instalment for tax year 2026-27 (15%). Capital gains from an early-year RSU sale or secondary sale should be included."],
  ["15 September 2026", "Second advance tax instalment (45% cumulative)."],
  ["15 December 2026", "Third advance tax instalment (75% cumulative)."],
  ["31 December 2026", "Belated return deadline for FY 2025-26 under the 1961 Act. Also the end of calendar year 2026, which matters for foreign asset reporting periods."],
  ["15 March 2027", "Final advance tax instalment (100%). Large gains after 15 March can be paid by 31 March without interest for that instalment."],
  ["31 July 2027", "Return due for tax year 2026-27 for individuals without business income and not under audit."],
  ["31 December 2027", "Belated return deadline for tax year 2026-27."],
  ["31 March 2028", "Last date to revise the tax year 2026-27 return (twelve months after the year ends, as amended by the Finance Act, 2026)."],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${slug}`}
      serviceType="Income Tax Consultancy for High-Income Individuals"
      crumbLabel="Income Tax Consultant — Bengaluru"
      crumbHref={slug}
      parentCrumb={{ name: "Income Tax for HNIs", href: "/income-tax-consultant-for-hni-chennai" }}
      eyebrow="Income Tax · Bengaluru clients served online"
      h1="Income Tax Consultant for High-Income Individuals in Bengaluru"
      subhead="Income tax returns and planning for Bengaluru technology employees, founders and property owners: RSUs from foreign parent companies, ESOPs, foreign asset reporting, startup secondary sales and Karnataka property gains. Our office is in Anna Nagar, Chennai; Bengaluru clients are served online."
      keyFacts={[
        { label: "Where we work from", value: "Our only office is in Anna Nagar, Chennai. We have no office in Bengaluru; clients there are served online." },
        { label: "How the work is done", value: "Video meetings, a secure document portal, and e-filing with Aadhaar OTP or other e-verification." },
        { label: "Why location does not matter", value: "Income tax is a central law. Returns, notices and most assessments are handled online, wherever the taxpayer lives." },
        { label: "Typical Bengaluru issues", value: "Foreign RSUs and ESPP, Schedule FA, startup ESOPs and secondary sales, Karnataka property sales." },
        { label: "Return due for tax year 2026-27", value: "31 July 2027 for individuals without business income and not under audit." },
      ]}
      introHeading="Can a Chennai CA handle income tax for a Bengaluru resident?"
      intro="Yes. Income tax is a national law, and returns, e-verification and most notices are handled online, so a Bengaluru resident's file can be managed from our Anna Nagar, Chennai office without an office in Bengaluru. We work through video meetings and a secure document portal, and focus on RSUs, ESOPs, foreign assets and capital gains."
      citation={{
        label: "Income Tax Department: which ITR form applies to individuals (incometax.gov.in)",
        href: "https://www.incometax.gov.in/iec/foportal/help/individual/return-applicable-1",
      }}
      subServicesHeading="What income tax work do Bengaluru clients usually need?"
      subServices={[
        { name: "Foreign RSU and ESPP Reporting", text: "Reconciling each vesting with your payslips and Form 16, computing capital gains on sales with the correct cost, and claiming credit for any foreign tax withheld on dividends." },
        { name: "Schedule FA and Foreign Income", text: "Listing foreign shares, broker accounts and bank accounts with peak and closing values in rupees for the reporting period, including shares sold to cover tax." },
        { name: "Startup ESOPs and Secondary Sales", text: "Perquisite tax on exercise, the deferral available to employees of eligible startups, and capital gains when founders or employees sell shares to an incoming investor." },
        { name: "Karnataka Property Sales and Purchases", text: "Capital gains computed against the guidance value, reinvestment planning, and the TDS the buyer must deduct, including when the seller is a non-resident." },
        { name: "Advance Tax for Lumpy Income", text: "Recomputing instalments when a large vest, a liquidity event or a property sale happens mid-year, so interest for short payment is kept to a minimum." },
        { name: "Notices and Faceless Proceedings", text: "Replies to mismatch, scrutiny and reassessment notices through the e-filing portal, with a video hearing under faceless assessment where applicable." },
      ]}
      howTo={{
        heading: "How does an online engagement work for a Bengaluru client?",
        steps: [
          { name: "First video call", text: "We go through your employer's equity plan, any startup shareholding, property and other income, and agree a document list. There is no need to travel to Chennai." },
          { name: "Secure upload", text: "You upload stock plan statements, broker statements, Form 16 and property papers to our secure portal, or authorise us to view your Annual Information Statement." },
          { name: "Computation and review", text: "We prepare the computation, the Schedule FA listing and any capital gains workings, and walk you through them on a second call before anything is filed." },
          { name: "Filing and e-verification", text: "The return is filed on the income tax portal and you e-verify it with an Aadhaar OTP, net banking or a digital signature, so no physical papers are sent." },
          { name: "Follow-up", text: "We track processing, refunds and any intimation, and plan the next year's advance tax around expected vesting and sale dates." },
        ],
      }}
      faqs={[
        { question: "Does C S Rushil & Co. have an office in Bengaluru?", answer: "No. Our only office is in Anna Nagar, Chennai. We serve Bengaluru clients online through video meetings, a secure document portal and electronic filing. Clients who prefer to meet in person are welcome at the Anna Nagar office by appointment, but most Bengaluru engagements never need a visit." },
        { question: "How are RSUs from a US parent company taxed in India?", answer: "RSUs are taxed twice in India. On vesting, the market value of the shares released is a salary perquisite, and your Indian employer deducts TDS on it. When you later sell, the difference between the sale price and that value is a capital gain, long-term if held for more than 24 months." },
        { question: "Do I have to report foreign shares I sold to cover tax?", answer: "Generally yes. Foreign asset reporting covers assets held at any time in the reporting period, so shares released and sold the same day to cover withholding should still be listed. For returns of FY 2025-26, the period is calendar year 2025. We confirm the period that applies to tax year 2026-27 returns when the forms are notified." },
        { question: "Can I get credit for US tax withheld on my RSU dividends?", answer: "Usually yes. A resident can claim foreign tax credit in India for tax withheld abroad on dividends, limited to the Indian tax on that income and subject to the India–US treaty. A separate statement of foreign income and tax, Form 67 for returns under the 1961 Act, must be filed in time for the claim." },
        { question: "I work at a Bengaluru startup. When is tax due on my ESOPs?", answer: "Normally tax is due when you exercise, on the difference between fair market value and the exercise price. If your employer is an eligible startup recognised for this purpose, TDS on that perquisite can be deferred until you sell, leave the company, or a fixed period passes, whichever happens first." },
        { question: "How is a founder's secondary sale to an investor taxed?", answer: "It is a capital gain on unlisted shares, taxed at 12.5% without indexation if held for more than 24 months, otherwise at slab rates. If the price is below the fair market value worked out under the valuation rules, that value may be used instead. Reinvesting in a residential house can reduce tax." },
        { question: "Does the Karnataka guidance value affect my income tax?", answer: "Yes. If you sell property for less than the stamp duty value fixed under the Karnataka guidance value, and the gap exceeds the 10% tolerance, that value is treated as your sale price for capital gains. A buyer paying below guidance value can also be taxed on the difference as other income." },
        { question: "Will I have to visit an income tax office in Bengaluru?", answer: "Rarely. Returns are filed online, and most notices, scrutiny and reassessment proceedings run through the e-filing portal under faceless procedures, which continue under the Income-tax Act, 2025. Where a hearing is needed, we attend by video hearing under faceless assessment where applicable. We do not attend local offices in person." },
      ]}
      relatedQuestions={[
        { question: "How do we plan income tax for high-income individuals?", href: "/income-tax-consultant-for-hni-chennai" },
        { question: "I received an income tax notice. What should I do?", href: "/income-tax-notice-reply-chennai" },
        { question: "I moved abroad after working in Bengaluru. How are NRIs taxed?", href: "/nri-tax-services" },
      ]}
      relatedSlugs={["income-tax-consultant-for-hni-chennai", "income-tax-return-filing-chennai", "income-tax-notice-reply-chennai", "nri-tax-services"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Who do we work with in Bengaluru?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Most of our Bengaluru clients are salaried professionals at multinational technology companies and global product
        firms, founders and early employees of startups, and families with property in the city. They live across
        Bengaluru: senior engineers in Whitefield and HSR Layout, founders in Koramangala and Indiranagar, established
        families in Sadashivanagar, Jayanagar and JP Nagar, and professionals who have moved north towards Hebbal. Their
        returns tend to share three features: equity compensation from a foreign parent, a startup shareholding that may
        turn into a cash event, and at least one property in Karnataka. We do not have an office in Bengaluru. The work is
        done from Anna Nagar, Chennai, by video and through a secure portal, and that is the only way we present it.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How should RSUs from a foreign parent be reported?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Many Bengaluru employees receive restricted stock units in a parent listed outside India. Each vesting creates a
        salary perquisite equal to the value of the shares released, and your employer deducts TDS on it through payroll,
        often by selling some shares to cover the tax. Problems arise later, at sale. Brokers report a cost based on the
        foreign tax lot, which may not match the Indian perquisite value in rupees, and some people report the whole sale
        price as a gain, paying tax twice on the same amount. We rebuild each lot: vest date, rupee value taxed as salary,
        sale date and rupee sale price, using the exchange rates prescribed in the rules. Because these shares are not
        listed in India, they become long-term only after 24 months. Dividends from them are taxable in India at slab
        rates, and the tax withheld abroad can generally be claimed as foreign tax credit, subject to the treaty and the
        filing of the prescribed statement.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What goes into Schedule FA for a Bengaluru tech employee?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        A resident and ordinarily resident individual must disclose foreign assets in the return even if they earned no
        income from them. For an employee with foreign equity, this usually means the foreign brokerage or custodial
        account, each holding of shares (including tranches sold the same day to cover tax), any ESPP shares, and any
        foreign bank account opened during an overseas assignment. Each entry needs the date of acquisition, the peak value
        during the period and the closing value, converted into rupees. For returns of FY 2025-26, the reporting period is
        calendar year 2025, not the April–March year, which is why we ask for broker statements for January to December.
        Leaving out a foreign asset can attract a penalty under the Black Money Act, so this schedule deserves the same
        attention as the income figures. Returns with foreign assets cannot be filed on the simplified ITR-1.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How are startup ESOPs and founders&apos; secondary sales taxed?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Bengaluru&apos;s startup economy creates two recurring situations. The first is ESOP exercise: the difference
        between fair market value on exercise and the exercise price is taxed as salary, even though the shares cannot yet
        be sold. Employees of startups recognised as eligible for this purpose can have the TDS deferred until sale,
        departure from the company or a fixed period, whichever comes first. The second is a secondary sale, when founders
        or employees sell part of their stake to a new investor during a funding round or a structured buyback. These are
        transfers of unlisted shares: long-term after 24 months and taxed at 12.5% without indexation, with the valuation
        rules able to replace a low price with fair market value. Reinvesting the net sale proceeds in one residential
        house in India, subject to conditions and an overall cap, can exempt the gain. Timing the purchase and checking
        that you do not already own more than one other house are the points we review before the sale closes. If the
        buyer is a foreign fund, check early whether it will deduct tax at source and how that credit will reach your Form
        26AS.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What should Bengaluru property owners know about guidance value?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        In Karnataka, the stamp duty value of a property is set by the guidance value notified by the Department of
        Stamps and Registration, and stamp duty and the registration fee are charged on the higher of that value and the
        agreed price. Rates and guidance values have been revised more than once in recent years, so we check the
        current figures on the{" "}
        <a href="https://kaveri.karnataka.gov.in/" target="_blank" rel="noopener noreferrer" className={linkClass}>
          Kaveri online registration portal
        </a>{" "}
        rather than quote them here. For income tax, guidance value matters in two ways. A seller whose agreed price is
        more than 10% below it is taxed as if the guidance value were the sale price, and a buyer who pays less than it
        beyond the same tolerance can be taxed on the difference. When an apartment bought off-plan years ago in a
        fast-growing corridor is sold, we also gather the builder&apos;s payment schedule, since each instalment and the
        allotment date affect cost and the holding period.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How are typical Bengaluru capital gains taxed?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Rates below apply to transfers on or after 23 July 2024 and exclude surcharge and the 4% cess. For capital gains
        and dividends, surcharge is capped at 15%.
      </p>
      <DataTable head={["Asset", "Long-term after", "Long-term rate", "Short-term rate"]} rows={CAPITAL_GAINS} />

      <h2 className="mt-14 text-2xl text-obsidian">Which documents should a Bengaluru client keep ready?</h2>
      <DataTable head={["Document", "Why it is needed", "Where it comes from"]} rows={DOCUMENTS} />

      <h2 className="mt-14 text-2xl text-obsidian">What are the key income tax dates for tax year 2026-27?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        From 1 April 2026 the Income-tax Act, 2025 applies, and the &quot;tax year&quot; replaces the earlier previous
        year and assessment year. Returns for income earned up to 31 March 2026 are still filed under the 1961 Act. The
        CBDT can extend these dates.
      </p>
      <DataTable head={["Date", "What is due"]} rows={CALENDAR} />

      <h2 className="mt-14 text-2xl text-obsidian">How does working with a Chennai firm fit around a Bengaluru schedule?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Calls are scheduled around your working day, including early evenings, and documents move through a secure
        portal rather than email attachments. Our{" "}
        <Link href="/income-tax-consultant-for-hni-chennai" className={linkClass}>
          income tax service for high-income individuals
        </Link>{" "}
        explains the planning approach in more detail, and our{" "}
        <Link href="/income-tax-return-filing-chennai" className={linkClass}>
          income tax return filing
        </Link>{" "}
        page covers the filing process. If you have received a notice, see{" "}
        <Link href="/income-tax-notice-reply-chennai" className={linkClass}>
          income tax notice replies
        </Link>
        ; if you are moving abroad on assignment, see{" "}
        <Link href="/nri-tax-services" className={linkClass}>
          NRI tax services
        </Link>
        . To start, write to us through the{" "}
        <Link href="/contact" className={linkClass}>
          contact page
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
