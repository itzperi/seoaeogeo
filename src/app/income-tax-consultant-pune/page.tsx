import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const slug = "/income-tax-consultant-pune";
const title = "Income Tax Consultant for HNIs in Pune | C S Rushil & Co.";
const description =
  "Online income tax advice for high-income Pune professionals: ESOPs at auto and IT employers, returning NRIs and RNOR status, and Maharashtra property gains.";

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

const RETURNING = [
  ["Non-resident (NR)", "In India for less than 182 days in the year, and not caught by the 60-day test with 365 days over the previous four years (the 60 days is relaxed for Indian citizens visiting).", "Only Indian income is taxed. No foreign asset disclosure."],
  ["Resident but not ordinarily resident (RNOR)", "Resident for the year, but non-resident in 9 of the previous 10 years, or in India for 729 days or less in the previous 7 years. A separate test applies to some high-income visitors.", "Indian income is taxed; foreign income generally is not, unless it comes from a business controlled or profession set up in India."],
  ["Resident and ordinarily resident (ROR)", "Resident and not meeting either RNOR condition.", "Worldwide income is taxed. Foreign assets must be disclosed in full and foreign tax credit claimed where available."],
];

const CAPITAL_GAINS = [
  ["ESOP shares of an Indian listed employer", "More than 12 months", "12.5% on gains above ₹1.25 lakh a year", "20%", "Cost is the market value taxed as salary on exercise."],
  ["Foreign shares or funds held from years abroad", "More than 24 months", "12.5% without indexation", "Slab rates", "Taxable in India once you are ROR; foreign tax may be creditable."],
  ["Flat or plot in Pune or elsewhere in Maharashtra", "More than 24 months", "12.5% without indexation, or 20% with indexation for residents on property acquired before 23 July 2024", "Slab rates", "Ready reckoner value can replace a lower sale price."],
  ["Unlisted shares of an employer or startup", "More than 24 months", "12.5% without indexation", "Slab rates", "Valuation rules can apply to a sale below fair market value."],
];

const CALENDAR = [
  ["15 June 2026", "First advance tax instalment for tax year 2026-27 (15%). ESOP exercises early in the year usually have TDS, but capital gains do not."],
  ["15 September 2026", "Second instalment (45% cumulative)."],
  ["15 December 2026", "Third instalment (75% cumulative)."],
  ["31 December 2026", "Belated return deadline for FY 2025-26 under the 1961 Act. For a returning NRI, also the end of a calendar year often used by foreign tax systems."],
  ["15 March 2027", "Final instalment (100%)."],
  ["31 March 2027", "Tax year 2026-27 ends. Your residential status for the year is fixed on the days spent in India up to this date."],
  ["31 July 2027", "Return due for tax year 2026-27 for individuals without business income and not under audit."],
  ["31 March 2028", "Last date to revise the tax year 2026-27 return."],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${slug}`}
      serviceType="Income Tax Consultancy for High-Income Individuals"
      crumbLabel="Income Tax Consultant — Pune"
      crumbHref={slug}
      parentCrumb={{ name: "Income Tax for HNIs", href: "/income-tax-consultant-for-hni-chennai" }}
      eyebrow="Income Tax · Pune clients served online"
      h1="Income Tax Consultant for High-Income Individuals in Pune"
      subhead="Income tax returns and planning for Pune's automotive and IT professionals, employees with ESOPs, NRIs returning to India, and owners of Maharashtra property. Our office is in Anna Nagar, Chennai; Pune clients are served online."
      keyFacts={[
        { label: "Office", value: "Anna Nagar, Chennai only. We have no office in Pune; Pune clients are served online." },
        { label: "Working method", value: "Video meetings, a secure document portal and e-verification of returns by Aadhaar OTP, net banking or digital signature." },
        { label: "Why location is not a limit", value: "Income tax is a national law, and filing, processing and most assessments are carried out online." },
        { label: "Typical Pune issues", value: "ESOP perquisites and sales, residential status after returning from abroad, foreign accounts and Maharashtra property." },
        { label: "Status is decided yearly", value: "Residential status is worked out afresh for each tax year from days in India." },
      ]}
      introHeading="Can a Chennai CA be your income tax consultant in Pune?"
      intro="Yes. Income tax is a national law and returns are filed and verified online, so where you live does not limit the work. Our only office is in Anna Nagar, Chennai, with no Pune office, and Pune clients work with us by video and secure upload, mainly on ESOPs, the return-to-India years and Maharashtra property."
      citation={{
        label: "Department of Registration and Stamps, Government of Maharashtra (igrmaharashtra.gov.in)",
        href: "https://igrmaharashtra.gov.in/",
      }}
      subServicesHeading="What income tax work do Pune clients usually need?"
      subServices={[
        { name: "ESOP Tax and Sale Planning", text: "Checking the perquisite on exercise against your Form 16, tracking cost and holding period per tranche, and planning sales across tax years." },
        { name: "Return-to-India Status Review", text: "Working out NR, RNOR or ROR status from travel dates for each year after you return, and what that means for foreign income." },
        { name: "Foreign Income and Assets", text: "Reporting foreign salary, pensions, retirement accounts, shares and bank accounts once you become ordinarily resident, with foreign tax credit." },
        { name: "Bank Account Transition", text: "Tax treatment as NRE accounts are redesignated, FCNR deposits run to maturity and funds move into resident or RFC accounts." },
        { name: "Maharashtra Property", text: "Capital gains against the ready reckoner value, reinvestment planning, and buyer-side TDS when you purchase a home in Pune." },
        { name: "Notices and Faceless Assessment", text: "Replies to notices on foreign income, ESOP mismatches and property deals, filed online, with a video hearing under faceless assessment where applicable." },
      ]}
      howTo={{
        heading: "How does an online engagement work for a Pune client?",
        steps: [
          { name: "First call", text: "On video, we review your employment history, any years abroad, ESOP grants and property, and agree the documents we need." },
          { name: "Secure document upload", text: "Passport travel pages, Form 16, ESOP statements, foreign account statements and property papers are uploaded to our secure portal." },
          { name: "Status and computation", text: "We fix your residential status for the year first, then prepare the computation, foreign asset schedule and capital gains workings." },
          { name: "Review and filing", text: "We walk you through the draft on a second call, file the return and you e-verify it online, without posting any papers." },
          { name: "Plan the next years", text: "For returning NRIs, we map the expected status for the next two or three years so that foreign income and asset sales can be timed sensibly." },
        ],
      }}
      faqs={[
        { question: "Does your firm have an office in Pune?", answer: "No. C S Rushil & Co. has one office, in Anna Nagar, Chennai. Pune clients are served online through video meetings, a secure document portal and electronic filing. You are welcome to meet us in Chennai by appointment, but no visit is needed to prepare or file your return." },
        { question: "How are ESOPs from my Indian listed employer taxed?", answer: "Twice. On exercise, the difference between the market value on that date and the exercise price is taxed as salary, and your employer deducts TDS. On sale, the gain over that market value is a capital gain, taxed at 12.5% above the annual exemption if held for more than 12 months, otherwise at 20%." },
        { question: "I moved back to Pune from the US. Is my US income taxable in India?", answer: "Possibly not at first. Many returning NRIs qualify as resident but not ordinarily resident for one to three years, and during that time foreign income is generally not taxed in India unless it comes from a business controlled or profession set up here. Once you become ordinarily resident, worldwide income is taxable." },
        { question: "Do I need to report my foreign bank and retirement accounts?", answer: "Yes, once you are resident and ordinarily resident. You must then disclose foreign bank accounts, retirement accounts, shares and property in the foreign assets schedule, even if they produce no income. While you are RNOR, disclosure is generally not required, but we confirm your status for each year first." },
        { question: "How are withdrawals from a US 401(k) taxed after I return?", answer: "Growth in some foreign retirement accounts could otherwise be taxed in India before you withdraw it. Relief rules for accounts in specified countries, including the United States, align Indian taxation with withdrawals, and foreign tax paid on a withdrawal can usually be credited. The relief must be chosen in the prescribed manner." },
        { question: "What happens to my NRE and FCNR accounts when I return?", answer: "Once you become resident under exchange control rules, NRE accounts should be redesignated as resident accounts or moved into an RFC account, while FCNR deposits can usually continue to maturity. Interest that was exempt while you were non-resident becomes taxable once your income tax residential status changes, so we time this carefully." },
        { question: "Does the Pune ready reckoner rate affect my capital gains?", answer: "Yes. If you sell for less than the ready reckoner value and the gap exceeds 10%, that value is treated as your sale price. A buyer paying less than the ready reckoner value beyond the same tolerance can also be taxed on the difference as other income." },
        { question: "Will you appear before income tax authorities in Pune?", answer: "Not in person. Most assessments are faceless and run through the e-filing portal, and these procedures continue under the Income-tax Act, 2025. We file written submissions online and attend by video hearing under faceless assessment where applicable. If a matter needs physical representation, we tell you at the start." },
      ]}
      relatedQuestions={[
        { question: "How do we plan income tax for high-income individuals?", href: "/income-tax-consultant-for-hni-chennai" },
        { question: "How is Indian income taxed while I am still an NRI?", href: "/nri-tax-services" },
        { question: "I received an income tax notice. What now?", href: "/income-tax-notice-reply-chennai" },
      ]}
      relatedSlugs={["income-tax-consultant-for-hni-chennai", "nri-tax-services", "income-tax-return-filing-chennai", "income-tax-notice-reply-chennai"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Who do we work with in Pune?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Pune combines a large automotive and engineering base around Chakan and Pimpri-Chinchwad with IT campuses in
        areas such as Hinjewadi and Kharadi. Our Pune clients are senior managers and engineers from these sectors, many
        holding ESOPs in listed Indian employers, and a growing number of professionals who have returned to India after
        working in the US, Europe or the Gulf. They tend to live in Koregaon Park, Kalyani Nagar, Boat Club Road, Aundh
        and Baner. We serve them from Anna Nagar, Chennai, entirely online, and we have no office in Pune.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How should ESOPs from an Indian employer be handled?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Listed automotive and engineering companies, and IT companies listed in India, commonly grant stock options to
        senior staff. On exercise, the perquisite is the market value on the exercise date, which for shares listed in
        India is the average of the opening and closing price on the exchange, less the exercise price. The employer
        deducts TDS through payroll, and the amount appears in Form 16. Problems usually start at sale. Brokers show the
        exercise price as the cost, not the market value already taxed, so a sale can appear to produce a gain far larger
        than the real one. We keep a register of each exercise with the date, number of shares and taxed value, so that
        each sale is matched to the right tranche and the 12-month holding period is counted from the exercise date.
        Where options are in a parent listed abroad, the same principles apply, but the shares are long-term only after
        24 months and must also be disclosed as foreign assets.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How is a returning NRI taxed in the first years back?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Residential status is worked out for each tax year from days spent in India, so the year you return and the next
        few years can each have a different answer. The middle category, resident but not ordinarily resident, is the most
        useful: it gives time to wind down or restructure foreign income before it becomes taxable in India.
      </p>
      <DataTable head={["Status", "Broad test", "What is taxed in India"]} rows={RETURNING} />
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The RNOR window is a planning opportunity. Selling foreign shares or funds while you are RNOR may keep the gain
        outside Indian tax, depending on the asset and the other country&apos;s rules, whereas the same sale after you
        become ordinarily resident is taxable in India with foreign tax credit. Exchange control status is decided
        separately, by your intention to stay in India, so bank accounts often have to change before your income tax
        status does. We prepare a year-by-year status map from your travel dates before any of these decisions.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How does Maharashtra property affect a Pune client&apos;s tax?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Stamp duty in Maharashtra is charged on the higher of the agreed price and the ready reckoner value in the Annual
        Statement of Rates published by the Inspector General of Registration. Pune&apos;s rates and any cess differ from
        those in Mumbai, and concessions for women purchasers apply in some cases, so we confirm the current figures for
        the specific locality when a deal is planned. For income tax, the ready reckoner value is the stamp duty value. A
        returning NRI buying a first Pune home with savings brought from abroad should also keep the remittance trail,
        since it explains the source of funds if the purchase is queried later. Professionals who bought apartments
        under construction in new suburbs should keep the builder&apos;s allotment letter and payment receipts, because
        they affect both cost and the holding period.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How are typical Pune capital gains taxed?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Rates apply to transfers on or after 23 July 2024, before surcharge (capped at 15% on long-term gains and on short-term gains from listed equity; not on gains taxed at slab rates) and 4% cess.
      </p>
      <DataTable head={["Asset", "Long-term after", "Long-term rate", "Short-term rate", "Note"]} rows={CAPITAL_GAINS} />

      <h2 className="mt-14 text-2xl text-obsidian">Which dates matter for tax year 2026-27?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The Income-tax Act, 2025 applies from 1 April 2026. Income up to 31 March 2026, including the year many clients
        returned to India, is still filed under the 1961 Act. The CBDT can extend these dates.
      </p>
      <DataTable head={["Date", "What is due"]} rows={CALENDAR} />

      <h2 className="mt-14 text-2xl text-obsidian">Where can Pune clients find related services?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Our wider approach is explained on the{" "}
        <Link href="/income-tax-consultant-for-hni-chennai" className={linkClass}>
          income tax service for high-income individuals
        </Link>
        . If you are still abroad and planning your return, start with{" "}
        <Link href="/nri-tax-services" className={linkClass}>
          NRI tax services
        </Link>
        . The filing process is on{" "}
        <Link href="/income-tax-return-filing-chennai" className={linkClass}>
          income tax return filing
        </Link>
        , and notices are covered under{" "}
        <Link href="/income-tax-notice-reply-chennai" className={linkClass}>
          income tax notice replies
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
