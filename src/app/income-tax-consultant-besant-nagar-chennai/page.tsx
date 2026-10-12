import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const SLUG = "income-tax-consultant-besant-nagar-chennai";
const PAGE_URL = `${SITE_URL}/${SLUG}`;
const linkCls = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Income Tax Consultant in Besant Nagar, Chennai | CA Firm" },
  description:
    "Income tax help for Besant Nagar families and returning NRIs: RNOR status, foreign pensions and RSUs, property sales and returns, from an Anna Nagar CA firm.",
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Income Tax Consultant in Besant Nagar, Chennai",
    description: "Returning-NRI, RNOR, foreign income and property tax support for Besant Nagar residents.",
    url: `/${SLUG}`,
  },
};

function SimpleTable({ head, rows }: { head: [string, string]; rows: [string, string][] }) {
  return (
    <div className="mt-6 max-w-3xl overflow-hidden rounded-cards border border-ash">
      <table className="w-full text-left text-sm">
        <thead className="bg-carbon text-white">
          <tr>
            <th className="px-4 py-3 font-medium">{head[0]}</th>
            <th className="px-4 py-3 font-medium">{head[1]}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ash bg-paper">
          {rows.map(([a, b]) => (
            <tr key={a}>
              <td className="px-4 py-3 align-top font-medium text-obsidian">{a}</td>
              <td className="px-4 py-3 align-top text-slate">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      topic="Income Tax Consultant"
      locality="Besant Nagar"
      crumbHref={`/${SLUG}`}
      h1="Income Tax Consultant in Besant Nagar, Chennai"
      subhead="Income tax returns, residential-status planning and foreign-income reporting for Besant Nagar families, senior professionals and NRIs who have moved back to Chennai."
      distanceNote="Besant Nagar is in south Chennai, across the city from our only office in Anna Nagar (J-Block, 1st Street, 13th Main Rd). The drive usually takes the better part of an hour and longer at peak times, so most Besant Nagar clients work with us by video call, phone and secure document sharing, and visit Anna Nagar by appointment when a meeting in person helps."
      directAnswer="C S Rushil & Co., a chartered accountant firm based in Anna Nagar, handles income tax for Besant Nagar residents online and by appointment. Typical work here is returns for families with foreign income, residential status for NRIs who have moved back, foreign pensions and RSUs, rental income and capital gains on property or shares."
      localContext={[
        "Besant Nagar, often called Bessie, is a settled residential neighbourhood on the coast in south Chennai, beside Elliot's Beach and close to Adyar. It is mostly independent houses and low-rise apartment blocks rather than offices, and many households have lived here for decades, which shapes the tax work: it is largely personal and family tax rather than business compliance.",
        "A noticeable share of residents are people who spent part of their career abroad, in the Gulf, the UK, the US or Singapore, and have come back to Chennai, often to be near ageing parents or to retire. They arrive with overseas bank and retirement accounts, employer shares from a foreign parent company and sometimes a foreign pension, all of which need to be fitted into Indian tax rules from the year they return.",
        "Alongside returning NRIs, Besant Nagar has many senior salaried professionals, doctors, academics and retired executives, and a good number of families who own a second flat or an older house they let out. Their returns usually combine salary or pension, interest, rent and occasional capital gains, and the main risk is not complexity but small reporting gaps that trigger notices later.",
      ]}
      sections={[
        {
          heading: "How does moving back to India change your income tax in Besant Nagar?",
          body: (
            <>
              <p>
                When you return after years abroad, you usually do not become an ordinary resident straight away. Depending on how
                many years you were non-resident and how many days you spent in India before returning, you may qualify as
                resident but not ordinarily resident (RNOR) for a transition period, commonly up to two or three years. During
                that window, income that arises outside India and is not connected to an Indian business is generally not taxed
                in India, and the detailed foreign asset schedule in the return does not apply.
              </p>
              <p className="mt-4">
                Once you become an ordinary resident, your worldwide income is taxable here and every foreign bank account,
                retirement account and shareholding has to be reported each year, even if it earns nothing. We map your exact
                days in India for the past years, work out your status for each tax year, and plan when to close, keep or move
                foreign accounts. For the wider picture, see our{" "}
                <Link href="/nri-tax-services" className={linkCls}>NRI tax services</Link> page.
              </p>
              <SimpleTable
                head={["Common income tax situation in Besant Nagar", "What we handle"]}
                rows={[
                  ["Returned from the Gulf, UK or US in the last few years", "Residential status for each year, RNOR window planning, first resident return"],
                  ["Foreign pension or 401(k)/UK pension still paying out", "Taxability by status, treaty relief, and credit for foreign tax paid"],
                  ["RSUs or ESPP shares from a former foreign employer", "Cost basis, perquisite already taxed, capital gains on sale, foreign asset reporting"],
                  ["Older family house or second flat let out", "Rental income, municipal tax and standard deduction, joint-owner splits"],
                  ["Selling a flat or plot inherited from parents", "Capital gains using the earlier owner's cost and holding period, reinvestment options"],
                  ["Notice about foreign assets or high-value transactions", "Reply on the portal and revised or updated return where needed"],
                ]}
              />
            </>
          ),
        },
        {
          heading: "What should returning NRIs report about foreign pensions and RSUs?",
          body: (
            <>
              <p>
                Foreign pensions and employer shares are where returning residents most often go wrong. A pension paid from abroad
                may be taxable in India once you are an ordinary resident, while the paying country may also withhold tax; the
                tax treaty between India and that country decides who taxes it first and how credit is given. Claiming that credit
                requires a separate statement filed before the return, and missing it can cost the credit altogether.
              </p>
              <p className="mt-4">
                RSUs that vested while you were abroad were usually taxed as salary there. When you later sell those shares as an
                Indian resident, the gain is computed from the value on which you were taxed at vesting, and the holding period
                runs from vesting. Unsold shares and the overseas brokerage account must be shown in the foreign asset schedule
                once you are an ordinary resident.
              </p>
              <SimpleTable
                head={["Item to gather", "Why it matters"]}
                rows={[
                  ["Passport entry and exit stamps or travel history", "Day counts decide residential status for each year"],
                  ["Foreign pension statements and tax withheld", "Treaty relief and foreign tax credit"],
                  ["Vesting confirmations and brokerage statements", "Correct cost basis and capital gains on RSU sales"],
                  ["Foreign bank and retirement account balances", "Foreign asset reporting once ordinarily resident"],
                  ["Indian NRO/NRE account details", "Interest taxability and re-designation after return"],
                ]}
              />
            </>
          ),
        },
        {
          heading: "Which other income tax questions come up for Besant Nagar families?",
          body: (
            <>
              <p>
                For households that are not dealing with foreign income, the work is usually a clean{" "}
                <Link href="/income-tax-return-filing-chennai" className={linkCls}>income tax return filing</Link> each year,
                with care around rent, interest and capital gains, and a choice between the old and new regimes. Larger or more
                varied portfolios, multiple properties and family members filing together are covered on our{" "}
                <Link href="/income-tax-consultant-for-hni-chennai" className={linkCls}>
                  income tax consultant for high-income individuals and families in Chennai
                </Link>{" "}
                page. If you have already received a notice, start with{" "}
                <Link href="/income-tax-notice-reply-chennai" className={linkCls}>income tax notice replies</Link>.
              </p>
              <p className="mt-4">
                Residents who are setting up a consultancy or family company after returning can also use us for{" "}
                <Link href="/private-limited-company-incorporation-chennai" className={linkCls}>private limited company registration</Link>.
                Neighbouring Adyar has a strong base of professionals and institutions, covered on our{" "}
                <Link href="/chartered-accountant-adyar-chennai" className={linkCls}>chartered accountant in Adyar</Link> page.
                The Income Tax Department explains residential status and which return applies on its{" "}
                <a href="https://www.incometax.gov.in/iec/foportal/help/individual/return-applicable-0" className={linkCls} target="_blank" rel="noopener noreferrer">
                  return applicability help page (incometax.gov.in)
                </a>
                . To discuss your own position, <Link href="/contact" className={linkCls}>contact us</Link>.
              </p>
            </>
          ),
        },
      ]}
      relevantServices={[
        { slug: "nri-tax-services", why: "Residential status, RNOR planning and foreign income for Besant Nagar residents who have moved back from abroad." },
        { slug: "income-tax-consultant-for-hni-chennai", why: "Planning and returns for high-income Besant Nagar families with several income sources and properties." },
        { slug: "income-tax-return-filing-chennai", why: "Annual returns covering salary or pension, rent, interest and capital gains." },
        { slug: "nri-property-sale-tds-chennai", why: "Lower TDS, capital gains and repatriation when a family member abroad sells Chennai property." },
        { slug: "income-tax-notice-reply-chennai", why: "Replies to notices on foreign assets, high-value transactions or mismatches with your tax statement." },
      ]}
      faqs={[
        { question: "I moved back to Chennai from the US last year. Am I taxed on my US income?", answer: "Possibly not yet. Many returning NRIs qualify as resident but not ordinarily resident for a transition period, during which foreign income not linked to India is generally outside Indian tax. Your status depends on past years of non-residence and days spent in India, so we work it out year by year from your travel history." },
        { question: "Do I have to report my foreign bank and retirement accounts?", answer: "Yes, once you become an ordinary resident. Foreign bank accounts, retirement accounts, shares and property must be reported in the foreign asset schedule of your return every year, even if they earn no income. Leaving them out can attract heavy penalties under the black money law, so we check this carefully for returning residents." },
        { question: "How is my UK or US pension taxed after I settle in Besant Nagar?", answer: "It depends on your residential status and the tax treaty with the paying country. As an ordinary resident, a foreign pension is generally taxable in India, but the treaty may give the paying country the first right to tax it. Credit for foreign tax requires a separate statement filed before your return." },
        { question: "I hold RSUs from my former employer abroad. What happens when I sell them?", answer: "The gain is worked out from the value at which the shares were taxed when they vested, not from zero. The holding period starts at vesting. The sale must be reported in your Indian return as a capital gain, and any unsold shares must also appear in the foreign asset schedule once you are an ordinary resident." },
        { question: "Can you handle the returns for my parents as well as mine?", answer: "Yes. Many Besant Nagar families file together: a returning son or daughter, retired parents with pension, interest and rent, and sometimes a jointly owned house. Handling them together keeps rent splits, interest and property ownership consistent across returns and avoids mismatches that lead to notices." },
        { question: "Do I need to visit your office to work with you?", answer: "No. Besant Nagar is across the city from our Anna Nagar office, so most clients here share documents securely and meet us by video call. If you prefer to meet in person, book a time and visit the Anna Nagar office; we have no branch in Besant Nagar or elsewhere." },
      ]}
      furtherReading={[
        { slug: "rnor-status-returning-nri", title: "RNOR status for NRIs returning to Chennai" },
        { slug: "foreign-rsu-tax-schedule-fa-chennai", title: "Foreign RSU and ESPP tax and Schedule FA" },
        { slug: "old-vs-new-tax-regime", title: "Old vs New Tax Regime FY 2026-27: Which Saves More Tax?" },
        { slug: "capital-gains-tax-property-sale", title: "Capital Gains Tax on Property Sale for Chennai Sellers" },
      ]}
    />
  );
}
