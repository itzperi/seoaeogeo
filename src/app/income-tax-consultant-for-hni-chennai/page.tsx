import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "Income Tax Consultant for HNIs in Chennai | Tax Planning";
const description =
  "Tax planning for HNIs and families in Chennai: capital gains on property and shares, ESOPs, foreign RSUs, Schedule FA, residential status, HUFs and advance tax.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/income-tax-consultant-for-hni-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/income-tax-consultant-for-hni-chennai",
  },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";
const h2Class = "mt-14 text-2xl text-obsidian";
const pClass = "mt-4 max-w-3xl leading-relaxed text-slate";

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

const SURCHARGE = [
  ["Up to ₹50 lakh", "Nil", "Nil", "Nil"],
  ["Above ₹50 lakh to ₹1 crore", "10%", "10%", "10%"],
  ["Above ₹1 crore to ₹2 crore", "15%", "15%", "15%"],
  ["Above ₹2 crore to ₹5 crore", "25%", "25%", "15% (cap)"],
  ["Above ₹5 crore", "37%", "25% (cap)", "15% (cap)"],
];

const CAPITAL_GAINS = [
  ["Land or building (incl. a flat)", "More than 24 months", "12.5% without indexation; for resident individuals and HUFs on land or buildings acquired before 23 July 2024, the lower of 12.5% unindexed and 20% indexed", "Slab rates"],
  ["Listed equity shares and equity mutual funds (STT paid)", "More than 12 months", "12.5% on gains above ₹1.25 lakh a year; gains up to 31 January 2018 grandfathered", "20%"],
  ["Unlisted shares of an Indian company", "More than 24 months", "12.5% without indexation", "Slab rates"],
  ["Shares of a foreign company (including RSUs of a US-listed employer)", "More than 24 months (not listed in India)", "12.5% without indexation", "Slab rates"],
  ["Debt mutual funds bought on or after 1 April 2023 (specified funds)", "Holding period irrelevant", "Always treated as short-term", "Slab rates"],
  ["Gold, international and other non-equity funds outside the specified-fund definition", "More than 24 months", "12.5% without indexation", "Slab rates"],
  ["Virtual digital assets (crypto, NFTs)", "Not relevant", "Flat 30%, no deduction except cost; losses cannot be set off", "Flat 30%"],
];

const REINVESTMENT = [
  ["Sale of a residential house", "Section 82 (earlier Section 54)", "Buy one residential house in India within one year before or two years after the sale, or construct within three years", "Exemption limited to the gain invested; cost above ₹10 crore ignored; new house locked in for three years"],
  ["Sale of land or building (any)", "Section 85 (earlier Section 54EC)", "Invest in notified long-term specified bonds (such as NHAI, REC, PFC, IRFC) within six months", "₹50 lakh cap; five-year lock-in; a loan against the bonds counts as encashment"],
  ["Sale of any other long-term asset (plot, shares, gold)", "Section 86 (earlier Section 54F)", "Invest the net sale consideration in one residential house in India within the same windows", "Proportionate exemption; you must not own more than one other house on the date of sale; ₹10 crore cap"],
  ["Gain not reinvested by the return due date", "Capital Gains Accounts Scheme", "Deposit the unutilised amount in a capital gains account with an authorised bank before the return due date", "Unused balance becomes taxable when the reinvestment period ends"],
];

const RESIDENCE = [
  ["Resident and ordinarily resident (ROR)", "In India 182 days or more in the year, or 60 days in the year plus 365 days in the four preceding years (60 becomes 120 or 182 days for certain Indian citizens and visiting persons of Indian origin), and not RNOR", "Worldwide income; Schedule FA mandatory for foreign assets"],
  ["Resident but not ordinarily resident (RNOR)", "Resident, but non-resident in 9 of the 10 preceding years, or in India for 729 days or less in the 7 preceding years; also certain deemed residents and 120-day visitors", "Indian income plus foreign income from a business controlled or profession set up in India; Schedule FA not required"],
  ["Non-resident (NRI)", "Does not meet the residence tests", "Only income received, accruing or arising in India; treaty relief available"],
  ["Deemed resident", "Indian citizen with Indian income above ₹15 lakh who is not liable to tax in any other country because of domicile or residence", "Treated as RNOR"],
];

const ESOP = [
  ["Grant", "Nothing taxable", "Keep the grant letter and plan document"],
  ["Vesting (RSU) or exercise (ESOP)", "Fair market value on the date of allotment, less any amount paid, taxed as salary perquisite at slab rates", "Indian employer deducts TDS; for a foreign employer with no Indian payroll, the tax falls on you through advance tax"],
  ["Holding period", "Foreign shares: long-term after 24 months; Indian listed shares: after 12 months", "Holding period counts from allotment, not from grant"],
  ["Sale", "Sale price less the FMV taxed as perquisite, as capital gains", "Convert using the prescribed exchange rate; keep the broker's sale confirmation"],
  ["Foreign tax withheld (for example US tax on sale or dividend)", "Claim foreign tax credit with Form 67 (FY 2025-26) filed before the return", "Credit is limited to the Indian tax on that income"],
  ["Every year you hold the shares as a resident", "Report in Schedule FA, even if nothing was sold", "Reporting period for most countries is the calendar year ending 31 December"],
];

const DOCUMENTS = [
  ["Identity and residence", "PAN, Aadhaar, passport with travel dates for the last 10 years if you have lived abroad, and any tax residency certificate"],
  ["Last three years' returns", "ITR acknowledgements and computations, intimations, and any notices or orders received"],
  ["AIS, TIS and Form 26AS", "Downloaded from the e-filing portal for the current and previous year"],
  ["Property", "Purchase and sale deeds, guideline value on the date of sale, cost of improvement bills, home loan statements, and rental agreements"],
  ["Shares and mutual funds", "Capital gains statements from brokers and the consolidated account statement from CAMS and KFintech; unlisted share purchase documents and valuation reports"],
  ["ESOPs, RSUs and foreign accounts", "Grant letters, vesting and sale reports from the plan administrator (for example E*TRADE, Fidelity, Schwab), foreign bank and brokerage statements for the calendar year, and foreign tax returns"],
  ["Family structure", "HUF deed and PAN, gift deeds, settlement deeds, wills, and details of loans or gifts given to family members"],
  ["Business and investments", "Partnership or LLP deeds, director details, PMS and AIF statements, bonds, insurance policies with premiums above the exempt limits, and crypto exchange reports"],
];

const CALENDAR = [
  ["April–May 2026", "Download the AIS for FY 2025-26; tell your employer which regime to use for tax year 2026-27; collect Form 16 and capital gains statements; plan property sales and reinvestment windows"],
  ["15 June 2026", "First advance tax instalment for tax year 2026-27: 15% of the estimated tax"],
  ["By 31 July 2026", "Return for FY 2025-26 for individuals without business income, with Schedule FA for calendar year 2025 and Schedule AL if income exceeds ₹1 crore"],
  ["31 August 2026", "Return for FY 2025-26 where you have business or professional income without a tax audit"],
  ["15 September 2026", "Second instalment: 45% cumulatively; re-estimate after any large sale, RSU vest or bonus"],
  ["21 November 2026", "Return for FY 2025-26 for audit cases, including partners of audited firms (extended from 31 October by CBDT Circular No. 7/2026)"],
  ["15 December 2026", "Third instalment: 75% cumulatively"],
  ["31 December 2026", "Belated return for FY 2025-26; last date for declarations under FAST-DS 2026 for eligible undisclosed foreign assets; calendar year closes for Schedule FA reporting"],
  ["January–February 2027", "Review realised and unrealised gains, set-off of losses, gifts within the family, and reinvestment deadlines falling in the next few months"],
  ["15 March 2027", "Fourth instalment: 100% of the estimated tax for tax year 2026-27"],
  ["31 March 2027", "Last date to revise the FY 2025-26 return; old-regime investments for tax year 2026-27; end of tax year 2026-27"],
  ["31 July 2027", "Return for tax year 2026-27, the first return under the Income-tax Act, 2025, for individuals without business income"],
];

const NOTICES = [
  ["Sale or purchase of property of ₹30 lakh or more", "Reported by the Sub-Registrar", "Capital gains not reported, or purchase not matched to sources of funds"],
  ["Mutual fund, share or bond purchases of ₹10 lakh or more in a year", "Reported by fund houses, companies and depositories", "Source of investment, or redemptions missing from the return"],
  ["Cash deposits of ₹10 lakh or more in savings accounts, and large time deposits", "Reported by banks", "Unexplained deposits or interest not offered"],
  ["Credit card bills above the reporting limits", "Reported by card issuers", "Lifestyle spend not consistent with declared income"],
  ["Foreign remittances under the LRS", "Reported through banks and TCS", "Foreign assets bought with the remittance missing from Schedule FA"],
  ["Foreign financial accounts", "Information received under automatic exchange agreements (CRS and FATCA)", "Foreign bank, brokerage or insurance accounts not shown in Schedule FA"],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/income-tax-consultant-for-hni-chennai`}
      serviceType="Income Tax Consulting for High Net Worth Individuals"
      crumbLabel="HNI Tax Consulting"
      crumbHref="/income-tax-consultant-for-hni-chennai"
      eyebrow="Income Tax · HNIs and Families · Chennai"
      h1="Income Tax Consultant for HNIs and Families in Chennai"
      subhead="Capital gains, ESOPs and foreign RSUs, foreign assets, residential status, HUFs and family property, planned through the year from our Anna Nagar office, with the first consultation in person or by video call."
      introHeading="What does an income tax consultant do for HNIs in Chennai?"
      intro="An income tax consultant for high net worth individuals plans and files tax across every income source a family holds: property and share sales, ESOPs and foreign RSUs, rental income, business and partnership income, and foreign assets. The work runs through the year, covering advance tax, reinvestment exemptions, Schedule FA and AL reporting, family gifts and HUFs, and replies to notices triggered by high-value transactions."
      citation={{ label: "Income Tax Department: Section 197, Income-tax Act, 2025, tax on long-term capital gains (incometaxindia.gov.in)", href: "https://www.incometaxindia.gov.in/w/section-197-78" }}
      keyFacts={[
        { label: "Law in force", value: "Income-tax Act, 2025 from 1 April 2026 (tax year 2026-27 onwards); FY 2025-26 and earlier years remain under the 1961 Act" },
        { label: "Surcharge", value: "10% above ₹50 lakh, rising to 37% above ₹5 crore under the old regime; capped at 25% under the new regime and at 15% on equity and other specified capital gains and dividends" },
        { label: "Property gains", value: "12.5% without indexation; resident individuals and HUFs pay the lower of that and 20% with indexation on land or buildings acquired before 23 July 2024" },
        { label: "Foreign assets", value: "Residents (other than RNORs) report all foreign assets in Schedule FA each year; omission can attract a ₹10 lakh penalty under the Black Money Act" },
        { label: "Advance tax", value: "15%, 45%, 75% and 100% by 15 June, 15 September, 15 December and 15 March" },
      ]}
      howTo={{
        heading: "How does an HNI tax engagement with us usually work?",
        steps: [
          { name: "First consultation", text: "We meet at our Anna Nagar office or by video call, go through the family's income sources, assets, residence history and any notices, and list the decisions with deadlines." },
          { name: "Document review", text: "We collect the last three years' returns, AIS and Form 26AS, property deeds, broker and plan-administrator statements, and foreign account records." },
          { name: "Tax position and plan", text: "We compute the current year's estimated tax, test regime choice, sale timing and reinvestment options, and set advance tax amounts." },
          { name: "Quarterly check-ins", text: "Before each advance tax date we re-estimate income after any sale, vest or bonus, and review gifts, loans and investments within the family." },
          { name: "Return filing", text: "We reconcile every AIS entry, prepare capital gains, foreign asset and asset-liability schedules, and file returns for each family member and HUF." },
          { name: "Notices and assessments", text: "If a high-value transaction leads to a query, scrutiny or reassessment notice, we prepare the reply and represent you through assessment and appeal." },
        ],
      }}
      subServicesHeading="What do we handle for high net worth individuals and families?"
      subServices={[
        { name: "Capital gains planning", text: "Computation and timing of gains on property, listed and unlisted shares, mutual funds and bonds, with reinvestment exemptions and loss set-off." },
        { name: "ESOPs and foreign RSUs", text: "Perquisite tax at vesting, advance tax where a foreign employer does not deduct TDS, sale gains, foreign tax credit and Schedule FA." },
        { name: "Foreign assets and residency", text: "Residential status tests for returning NRIs and globally mobile families, Schedule FA, treaty relief and disclosure of past omissions." },
        { name: "Family and HUF structuring", text: "HUF returns, gifts and loans within the family, clubbing analysis, settlement deeds and the tax side of succession." },
        { name: "Advance tax and regime choice", text: "Quarterly estimates for families with irregular income, and old versus new regime comparison each year." },
        { name: "Notices from high-value transactions", text: "Replies to AIS mismatch queries, scrutiny and reassessment notices, and appeals where needed." },
      ]}
      faqs={[
        { question: "Who counts as an HNI for income tax purposes in India?", answer: "The Income-tax Act has no formal HNI category. In practice the term covers individuals whose income crosses ₹50 lakh, where surcharge starts, and especially those above ₹1 crore, ₹2 crore or ₹5 crore, where higher surcharge bands, Schedule AL reporting and closer scrutiny of high-value transactions apply." },
        { question: "Should an HNI choose the old or the new tax regime?", answer: "For most high earners the new regime now works out lower, because surcharge is capped at 25% instead of 37% above ₹5 crore and the slab rates are lower. The old regime still suits some families with large home loan interest, rental losses or deductions. We compute both every year before advance tax is fixed." },
        { question: "Is indexation still available when I sell an old house in Chennai?", answer: "Yes, partly. For land or buildings acquired before 23 July 2024, a resident individual or HUF pays the lower of 12.5% on the unindexed gain and 20% on the indexed gain. Indexation is used only for this comparison, and an indexed loss cannot be set off. Property acquired later is taxed at 12.5% without indexation." },
        { question: "How are RSUs from my US employer taxed if I live in Chennai?", answer: "They are taxed twice in India, at different stages. On vesting, the fair market value is salary income at slab rates; on sale, the gain over that value is a capital gain, long-term after 24 months. The shares must be reported in Schedule FA every year, and any US tax withheld can be claimed as foreign tax credit." },
        { question: "What happens if I forgot to report a foreign account in Schedule FA?", answer: "Correct it quickly. A revised or updated return can add the missing disclosure, and eligible small taxpayers could use FAST-DS 2026 until 31 December 2026. Under the Black Money Act, the ₹10 lakh penalty does not apply where foreign assets other than immovable property total ₹20 lakh or less." },
        { question: "I am returning to Chennai after working abroad. When does my foreign income become taxable?", answer: "Usually not immediately. Most returning NRIs qualify as resident but not ordinarily resident for two or three years, during which foreign income earned outside India stays outside the Indian tax net and Schedule FA is not required. Once you become ordinarily resident, worldwide income and foreign assets are taxable and reportable." },
        { question: "Can I reduce tax by gifting money to my spouse or children?", answer: "Not directly. Gifts to relatives are tax-free for the recipient, but income from assets gifted to a spouse or a minor child is clubbed with the donor's income. Gifts to adult children, parents, or a properly formed HUF are treated differently, so the structure and the paper trail matter." },
        { question: "Do I have to visit your office for the consultation?", answer: "No. Many families meet us at our Anna Nagar office, but the first consultation and later reviews can be held by video call, with documents shared through a secure link. Clients in Bengaluru, Hyderabad, Mumbai, Delhi NCR, Pune and Kolkata usually work with us entirely online." },
      ]}
      relatedQuestions={[
        { question: "Which ITR form and due date apply to my return?", href: "/income-tax-return-filing-chennai" },
        { question: "How should I reply to an income tax notice?", href: "/income-tax-notice-reply-chennai" },
        { question: "What happens in a scrutiny or reassessment proceeding?", href: "/income-tax-assessment-appeals-chennai" },
      ]}
      relatedSlugs={["income-tax-return-filing-chennai", "nri-tax-services", "income-tax-assessment-appeals-chennai"]}
      relatedPosts={["foreign-rsu-tax-schedule-fa-chennai", "joint-development-agreement-tax-chennai", "rnor-status-returning-nri", "capital-gains-tax-property-sale", "advance-tax-deadlines", "old-vs-new-tax-regime", "nri-itr-filing"]}
    >
      <h2 className={h2Class}>Who counts as an HNI for tax purposes, and how does surcharge work?</h2>
      <p className={pClass}>
        There is no legal definition of a high net worth individual in the Income-tax Act. What changes with income is
        the surcharge, an additional tax calculated on the income tax itself, followed by 4% health and education cess.
        The rates below apply to individuals, HUFs and similar persons. Under the new regime, which is the default, the
        surcharge cannot exceed 25%. Under both regimes, surcharge on short-term gains on listed equity, long-term
        capital gains and dividends cannot exceed 15%, which is why the mix of income matters as much as the total.
        Marginal relief limits the extra tax when income only just crosses a threshold.
      </p>
      <Table
        head={["Total income", "Old regime surcharge", "New regime surcharge", "On equity / long-term capital gains and dividends"]}
        rows={SURCHARGE}
      />
      <p className={pClass}>
        For a family with ₹6 crore of income, almost all of it salary or business income, the new regime&apos;s 25% cap
        alone reduces the top marginal rate from about 42.7% to 39%. Where a large part of the income is long-term
        capital gains, the 15% cap often matters more than the choice of regime. We test both before fixing advance
        tax.
      </p>

      <h2 className={h2Class}>How are capital gains on property, shares, mutual funds and other assets taxed now?</h2>
      <p className={pClass}>
        Rates were reset for transfers on or after 23 July 2024 and carried into the Income-tax Act, 2025, where the
        rates sit in Sections 196 (short-term gains on listed equity), 197 (other long-term gains) and 198 (long-term
        gains on listed equity and equity funds). Surcharge and cess apply on top.
      </p>
      <Table head={["Asset", "Long-term if held", "Long-term rate", "Short-term rate"]} rows={CAPITAL_GAINS} />
      <p className={pClass}>
        <strong>Property in Chennai.</strong> For land or buildings acquired before 23 July 2024, Section 197(3) works
        out tax both ways, 12.5% on the gain without indexation and 20% on the indexed gain, and charges the lower; no
        election is needed. Where the sale price is below the Tamil Nadu guideline value by more than the tolerance
        band, the guideline value is treated as the sale consideration, so check it before agreeing a price. Families
        holding inherited property take the previous owner&apos;s cost and holding period, and for property acquired before
        1 April 2001, fair market value on that date (capped at the guideline value) can be used as cost.
      </p>
      <p className={pClass}>
        <strong>Unlisted shares and private company stakes.</strong> Shares of a family company or a startup are
        long-term after 24 months and taxed at 12.5% without indexation. A buyer who acquires them below fair market
        value can be taxed on the difference, so valuation reports matter on both sides. The Finance Act, 2026 moves
        share buybacks back to capital gains treatment from 1 April 2026, with additional tax on promoters; buybacks paid
        between 1 October 2024 and 31 March 2026 were taxed as deemed dividends, with the cost of the shares available as
        a capital loss.
      </p>
      <p className={pClass}>
        <strong>Mutual funds.</strong> Equity funds follow listed shares. Debt funds bought on or after 1 April 2023 that
        fall within the specified-fund definition are taxed at slab rates whatever the holding period, which for a family
        in the 30% slab removes most of their earlier tax advantage. Gold funds, international funds and hybrid funds
        that fall outside the definition are long-term after 24 months.
      </p>

      <h2 className={h2Class}>How are ESOPs and RSUs taxed, including RSUs from a foreign employer?</h2>
      <p className={pClass}>
        Senior employees of global capability centres and multinationals in Chennai often hold RSUs in a US-listed
        parent. They are taxed at two points, and the second step is frequently missed because the shares sit with a
        foreign plan administrator rather than an Indian broker.
      </p>
      <Table head={["Stage", "Tax treatment", "What to watch"]} rows={ESOP} />
      <p className={pClass}>
        Employees of eligible startups can defer the tax on the perquisite in some cases; that deferral is a reason
        the simpler ITR-1 cannot be used. If you sell shares to fund a house purchase, Section 86 (earlier Section 54F)
        may exempt the gain, provided the conditions on existing house ownership are met.
      </p>

      <h2 className={h2Class}>Which reinvestment exemptions can reduce capital gains tax?</h2>
      <p className={pClass}>
        The reinvestment reliefs continue under the Income-tax Act, 2025 with new section numbers. For sales up to
        31 March 2026, the 1961 Act sections apply. Planning starts before the sale deed is signed, because the
        windows run from the date of transfer.
      </p>
      <Table head={["What you sold", "Relief", "What you must do", "Limits"]} rows={REINVESTMENT} />
      <p className={pClass}>
        Selling a flat for an NRI family member raises separate TDS and repatriation questions; see{" "}
        <Link href="/nri-property-sale-tds-chennai" className={linkClass}>
          NRI property sale and TDS in Chennai
        </Link>
        .
      </p>

      <h2 className={h2Class}>What must be reported about foreign assets and foreign income?</h2>
      <p className={pClass}>
        A resident and ordinarily resident individual must report every foreign asset in Schedule FA of the return,
        whether or not it produced income: foreign bank and brokerage accounts, RSUs and ESOP shares, foreign property,
        insurance policies with cash value, interests in foreign entities, trusts where you are a settlor or
        beneficiary, and accounts where you only have signing authority. The reporting period for most countries is
        the calendar year, so the FY 2025-26 return reports assets held during calendar year 2025. Foreign income is
        taxed in India, with credit for foreign tax under the relevant treaty. Individuals and HUFs with total income
        above ₹1 crore must also complete Schedule AL, listing assets and liabilities in India and abroad.
      </p>
      <p className={pClass}>
        Omissions can bring proceedings under the Black Money (Undisclosed Foreign Income and Assets) and Imposition of
        Tax Act, 2015. Undisclosed foreign assets are taxed at 30% of their value with a penalty of three times that tax,
        and failing to report a foreign asset in the return can attract a penalty of ₹10 lakh. Since 1 October 2024 that
        ₹10 lakh penalty does not apply where the aggregate value of foreign assets other than immovable property is ₹20
        lakh or less, and the Finance Act, 2026 extended a similar threshold to prosecution. The Foreign Assets of Small
        Taxpayers Disclosure Scheme (FAST-DS 2026) opened on 16 August 2026 and accepts declarations until 31 December
        2026 for eligible taxpayers, such as those with small foreign accounts, RSUs from overseas employment or policies
        held from an earlier stint abroad. Whether the scheme, a revised or updated return, or no action is the right
        route depends on the amounts and years involved, so review it before the window closes.
      </p>

      <h2 className={h2Class}>How does residential status affect returning NRIs and globally mobile families?</h2>
      <p className={pClass}>
        Residence is tested each tax year on days of physical presence, and it decides how much of your income India
        taxes. A family moving back to Chennai can usually plan the move so that the RNOR years cover the sale of foreign
        assets or the closure of foreign accounts.
      </p>
      <Table head={["Status", "Test (summary)", "What is taxed in India"]} rows={RESIDENCE} />
      <p className={pClass}>
        Returning NRIs should also review foreign retirement accounts, NRE accounts (which must be redesignated as
        resident accounts once you return for good, while FCNR deposits can usually run to maturity), and the treaty tie-breaker where another country also treats you as resident. For
        family members who remain abroad, see our{" "}
        <Link href="/nri-tax-services" className={linkClass}>
          NRI tax services
        </Link>
        .
      </p>

      <h2 className={h2Class}>When is advance tax due, and why do HNIs pay interest on it?</h2>
      <p className={pClass}>
        Anyone whose tax for the year, after TDS, is ₹10,000 or more must pay advance tax in four instalments: 15% by
        15 June, 45% by 15 September, 75% by 15 December and 100% by 15 March. Resident senior citizens without business
        income are exempt. Shortfalls carry interest of 1% a month under Sections 424 and 425 (earlier Sections 234B and
        234C). HNIs most often fall short because of a property sale, an RSU vest at a foreign employer that does not
        deduct Indian TDS, or a large dividend. Capital gains and dividends arising after an instalment date can be
        covered in the remaining instalments without interest, provided the tax is paid by the next date.
      </p>

      <h2 className={h2Class}>How do HUFs, gifts and clubbing work within a family?</h2>
      <p className={pClass}>
        A Hindu undivided family is a separate taxpayer with its own PAN, basic exemption and slab rates, so ancestral
        property, rent from it and gifts received by the HUF from outsiders are taxed in its hands. Gifts from relatives,
        including a spouse, siblings, parents, grandparents, children and their spouses, are tax-free for the recipient;
        gifts above ₹50,000 in a year from non-relatives are taxable, as are property or shares received below stamp duty
        or fair market value from non-relatives.
      </p>
      <p className={pClass}>
        The clubbing rules stop simple income-splitting. Income from money or property gifted to a spouse, or to a son&apos;s
        wife, is added back to the donor&apos;s income; a minor child&apos;s income is clubbed with the parent who earns more,
        apart from a small exemption; and income from self-acquired property that a member converts into HUF property is
        taxed in the member&apos;s hands. Gifts to adult children and parents are not clubbed, and a genuine interest-bearing
        loan is treated differently from a gift. We document each transfer so the family can explain the source of
        funds if the department asks.
      </p>

      <h2 className={h2Class}>How are crypto and other virtual digital assets taxed?</h2>
      <p className={pClass}>
        Gains on virtual digital assets, including crypto tokens and NFTs, are taxed at a flat 30% plus surcharge and
        cess, with no deduction other than the cost of acquisition and no set-off of losses against any other income or
        against other VDA gains. Losses cannot be carried forward. A 1% TDS applies on transfers above the thresholds,
        and VDAs received as gifts from non-relatives are taxable in the recipient&apos;s hands. Every transaction is
        reported in a separate schedule of the return, so exchange statements need reconciling with the TDS shown in
        Form 26AS.
      </p>

      <h2 className={h2Class}>How should family property be passed on within the family?</h2>
      <p className={pClass}>
        India has no inheritance or estate tax. Property received under a will or by inheritance is not income, and a
        gift of property to a relative is tax-free for the recipient; when the heir later sells, the original owner&apos;s
        cost and holding period carry over. The costs lie elsewhere: stamp duty on a settlement or gift deed, which
        Tamil Nadu charges at a concessional, capped rate for settlements in favour of family members (check the current
        rate with the Registration Department), and capital gains if property is sold and the money then gifted. A
        registered will, a family settlement or a gift during the donor&apos;s lifetime each has different tax, stamp duty
        and dispute consequences. We work alongside your lawyer on the tax side, including the clubbing position of
        gifts to a spouse and the cost base the next generation will inherit.
      </p>

      <h2 className={h2Class}>Why do high-value transactions lead to notices, and how are they handled?</h2>
      <p className={pClass}>
        Banks, registrars, fund houses and card issuers report high-value transactions to the department through
        statements of financial transactions (SFT), which appear in your Annual Information Statement (AIS). Returns are
        matched against the AIS by software, so an unreported redemption or a property purchase that the return does not
        explain produces a query, a scrutiny notice (Section 143(2) under the 1961 Act, carried into the scrutiny provisions of the 2025 Act) or, for older years, a
        reassessment show-cause notice under Section 281 (earlier Section 148A). Reassessment can go back four years and
        three months from the end of the tax year, or six years and three months where escaped income is ₹50 lakh or
        more.
      </p>
      <Table head={["Transaction reported", "Reported by", "Typical question raised"]} rows={NOTICES} />
      <p className={pClass}>
        We reconcile every AIS line before filing and submit feedback where the AIS itself is wrong. If a notice has
        already arrived, see{" "}
        <Link href="/income-tax-notice-reply-chennai" className={linkClass}>
          income tax notice replies
        </Link>{" "}
        and{" "}
        <Link href="/income-tax-assessment-appeals-chennai" className={linkClass}>
          assessments and appeals
        </Link>
        .
      </p>

      <h2 className={h2Class}>What should you bring to the first meeting?</h2>
      <p className={pClass}>
        The first consultation, at our Anna Nagar office or by video call, is most useful when we can see the whole
        picture. Bring what you have; we will list anything missing.
      </p>
      <Table head={["Category", "Documents"]} rows={DOCUMENTS} />

      <h2 className={h2Class}>What does a year-round HNI tax calendar look like for tax year 2026-27?</h2>
      <p className={pClass}>
        Tax year 2026-27 runs from 1 April 2026 to 31 March 2027 and is the first year under the Income-tax Act, 2025.
        The FY 2025-26 return, filed during 2026, still follows the 1961 Act, so the two calendars overlap.
      </p>
      <Table head={["When", "What to do"]} rows={CALENDAR} />
      <p className={pClass}>
        Filing dates and forms for each family member are covered on our{" "}
        <Link href="/income-tax-return-filing-chennai" className={linkClass}>
          income tax return filing
        </Link>{" "}
        page, and the wider service on{" "}
        <Link href="/direct-tax" className={linkClass}>
          direct tax
        </Link>
        .
      </p>

      <h2 className={h2Class}>Areas we serve in Chennai and online across India</h2>
      <p className={pClass}>
        Our only office is in Anna Nagar, Chennai 600040, where families can meet us Monday to Saturday by appointment.
        We work with households across the city, including{" "}
        <Link href="/chartered-accountant-anna-nagar-chennai" className={linkClass}>
          Anna Nagar
        </Link>
        ,{" "}
        <Link href="/chartered-accountant-adyar-chennai" className={linkClass}>
          Adyar
        </Link>
        ,{" "}
        <Link href="/chartered-accountant-mylapore-chennai" className={linkClass}>
          Mylapore
        </Link>{" "}
        and{" "}
        <Link href="/chartered-accountant-nungambakkam-chennai" className={linkClass}>
          Nungambakkam
        </Link>
        , as well as Besant Nagar, Alwarpet, R A Puram, Kotturpuram, Gopalapuram and Poes Garden, and Neelankarai and
        the East Coast Road. Families and executives in Bengaluru, Hyderabad, Mumbai, Delhi NCR, Pune and Kolkata work
        with us online, with meetings by video call and documents exchanged securely. To arrange a first consultation,{" "}
        <Link href="/contact" className={linkClass}>
          contact us
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
