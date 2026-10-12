import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const SLUG = "income-tax-consultant-kotturpuram-chennai";
const PAGE_URL = `${SITE_URL}/${SLUG}`;
const linkCls = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Income Tax Consultant in Kotturpuram, Chennai | CA Firm" },
  description:
    "Income tax for Kotturpuram executives, academics and retirees: ESOPs and RSUs, foreign asset reporting, retirement benefits and capital gains on investments.",
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Income Tax Consultant in Kotturpuram, Chennai",
    description: "ESOP, RSU, foreign asset and retirement income tax support for Kotturpuram residents.",
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
      locality="Kotturpuram"
      crumbHref={`/${SLUG}`}
      h1="Income Tax Consultant in Kotturpuram, Chennai"
      subhead="Income tax for Kotturpuram's senior executives, academics and retirees: employee stock awards, overseas holdings, retirement payouts and investment gains."
      distanceNote="Kotturpuram is on the north bank of the Adyar River in south Chennai, usually around 40 minutes to an hour by road from our only office in Anna Nagar (J-Block, 1st Street, 13th Main Rd), depending on traffic. Most Kotturpuram clients work with us by video call and secure document sharing, and visit Anna Nagar by appointment when they prefer to meet."
      directAnswer="C S Rushil & Co., a chartered accountant firm in Anna Nagar, handles income tax for Kotturpuram residents online and by appointment. Common work here covers ESOPs and RSUs, reporting overseas shares and accounts as a resident, retirement benefits and pension, capital gains on equity and mutual funds, and replies to income tax notices."
      localContext={[
        "Kotturpuram is a calm residential pocket beside the Adyar River, close to the IIT Madras and Anna University campuses and home to the Anna Centenary Library. It is mainly apartment complexes and independent houses, with little commercial activity of its own, and it draws people who want a quiet address near the institutions and south Chennai's office corridors.",
        "Residents include senior employees of multinational and technology companies, many of whom receive part of their pay as stock awards from a parent listed in the US or elsewhere, as well as faculty, researchers and scientists linked to the nearby institutions. For this group the income tax questions centre on equity compensation, overseas brokerage accounts and getting the foreign asset schedule right every year.",
        "Kotturpuram also has many retired executives and senior government and public-sector retirees, whose returns involve pension, commuted pension and gratuity, interest on deposits and senior citizen schemes, and gains on long-held shares and mutual funds. Their priority is usually simple, accurate filing and avoiding notices rather than active planning.",
      ]}
      sections={[
        {
          heading: "How are ESOPs and RSUs taxed for Kotturpuram executives?",
          body: (
            <>
              <p>
                Stock awards are taxed twice at different points. When RSUs vest or ESOPs are exercised, the difference
                between the fair market value and the price you pay is taxed as a salary perquisite, and your employer
                deducts TDS through payroll. When you later sell the shares, the gain over that same fair market value is a
                capital gain, short or long term depending on how long you held them after vesting or exercise.
              </p>
              <p className="mt-4">
                For shares of a foreign parent, the sale proceeds sit in an overseas brokerage account, dividends may suffer
                foreign tax, and shares sold to cover tax at vesting still need to be reported. We reconcile your payroll
                records, broker statements and exchange rates so the perquisite is not taxed again as a gain.
              </p>
              <SimpleTable
                head={["Common income tax situation in Kotturpuram", "What we handle"]}
                rows={[
                  ["RSUs from a US-listed parent company", "Perquisite at vesting, cost basis, capital gains on sale, foreign dividends"],
                  ["ESOPs exercised in an Indian unlisted or listed company", "Perquisite timing, holding period, gains on sale or buyback"],
                  ["Overseas brokerage or bank account as a resident", "Foreign asset schedule every year, including peak and closing balances"],
                  ["Retired with pension, gratuity and commuted pension", "Exempt and taxable portions, regime choice, deposit interest"],
                  ["Long-held equity shares and mutual funds", "Capital gains, grandfathering for older equity, loss set-off"],
                  ["Notice about foreign income or unreported assets", "Reply on the portal and updated or revised return where needed"],
                ]}
              />
            </>
          ),
        },
        {
          heading: "What do residents need to report about overseas shares and accounts?",
          body: (
            <>
              <p>
                An individual who is resident and ordinarily resident in India must report all foreign assets in the return,
                including foreign shares and RSUs, brokerage and bank accounts, and any financial interest abroad, even if
                they earned nothing during the year. The schedule follows the calendar year for most foreign assets, which
                catches many people out. Omitting it can attract significant penalties under the black money law, whether or
                not tax was underpaid.
              </p>
              <p className="mt-4">
                Credit for foreign tax withheld on dividends or sales needs a separate statement filed before the return. We
                build these schedules from broker and bank statements each year so they stay consistent.
              </p>
              <SimpleTable
                head={["Document to keep", "Used for"]}
                rows={[
                  ["Employer payroll statement showing perquisite on vesting", "Avoiding double taxation when shares are sold"],
                  ["Broker annual statement and trade confirmations", "Capital gains and foreign asset schedule"],
                  ["Foreign tax withholding statements", "Foreign tax credit claim"],
                  ["Pension, gratuity and commutation letters", "Splitting exempt and taxable retirement amounts"],
                  ["Mutual fund consolidated account statement", "Capital gains and holding periods"],
                ]}
              />
            </>
          ),
        },
        {
          heading: "Where do Kotturpuram families go for broader income tax planning?",
          body: (
            <>
              <p>
                Households combining stock awards, investments, property and family members filing together are covered on our{" "}
                <Link href="/income-tax-consultant-for-hni-chennai" className={linkCls}>
                  income tax consultant for high-income individuals and families in Chennai
                </Link>{" "}
                page, and routine returns on{" "}
                <Link href="/income-tax-return-filing-chennai" className={linkCls}>income tax return filing in Chennai</Link>.
                Family members who have recently moved back from abroad can read about{" "}
                <Link href="/nri-tax-services" className={linkCls}>NRI tax services</Link> and residential status, and
                faculty or executives starting a consultancy can look at{" "}
                <Link href="/private-limited-company-incorporation-chennai" className={linkCls}>private limited company registration</Link>.
              </p>
              <p className="mt-4">
                For neighbouring areas, see{" "}
                <Link href="/chartered-accountant-adyar-chennai" className={linkCls}>chartered accountant in Adyar</Link> and{" "}
                <Link href="/income-tax-consultant-besant-nagar-chennai" className={linkCls}>income tax consultant in Besant Nagar</Link>.
                The Income Tax Department explains residential status and which return applies on its{" "}
                <a href="https://www.incometax.gov.in/iec/foportal/help/individual/return-applicable-0" className={linkCls} target="_blank" rel="noopener noreferrer">
                  return applicability help page (incometax.gov.in)
                </a>
                . To review your stock awards or foreign assets, <Link href="/contact" className={linkCls}>contact us</Link>.
              </p>
            </>
          ),
        },
      ]}
      relevantServices={[
        { slug: "income-tax-consultant-for-hni-chennai", why: "Planning for Kotturpuram households with stock awards, investments and property." },
        { slug: "income-tax-return-filing-chennai", why: "Returns with ESOP and RSU gains, foreign asset schedules and retirement income." },
        { slug: "income-tax-notice-reply-chennai", why: "Replies to notices on foreign assets, foreign income or high-value transactions." },
        { slug: "nri-tax-services", why: "Residential status and Indian returns for family members abroad or recently returned." },
      ]}
      faqs={[
        { question: "My RSUs were taxed through payroll. Why is there more tax when I sell?", answer: "Payroll taxed the value of the shares at vesting as salary. When you sell, only the increase over that vesting value is taxed, as a capital gain. If the broker shows a zero cost, your gain will be overstated, so we use the vesting value from payroll records as your cost." },
        { question: "Do I have to report my US brokerage account if I sold nothing?", answer: "Yes, if you are resident and ordinarily resident. Foreign shares and accounts must be reported in the foreign asset schedule every year, even without sales or income. The schedule uses the calendar year for most foreign assets, and missing it can attract heavy penalties under the black money law." },
        { question: "How is my gratuity and commuted pension taxed after retirement?", answer: "Part of gratuity and commuted pension is exempt within limits that depend on whether you were a government or private employee, and the balance is taxed as salary. Monthly pension is taxable as salary. We work out the exempt and taxable parts and choose the better tax regime for the year." },
        { question: "Are ESOPs of an Indian startup taxed differently from foreign RSUs?", answer: "The basic method is similar: perquisite at exercise, capital gain at sale. Unlisted Indian shares have different holding periods and valuation rules, and eligible startup employees may be able to defer tax on the perquisite. There is also no foreign asset reporting for Indian shares. We check which rules apply to your awards." },
        { question: "I am a retired academic with pension and deposits. Do I still need to file?", answer: "Filing is required if total income exceeds the basic exemption limit, and is often useful even below it to claim refunds of TDS on deposits. Senior citizens aged 75 and above with only pension and interest from the same bank may be exempt from filing in some cases. We confirm your position." },
        { question: "Can I work with you without travelling to Anna Nagar?", answer: "Yes. Kotturpuram clients usually share statements securely and speak with us by video call, which suits stock award and foreign asset work well. If you would rather meet, you can visit our Anna Nagar office by appointment. We do not have an office in Kotturpuram or anywhere else." },
      ]}
      furtherReading={[
        { slug: "foreign-rsu-tax-schedule-fa-chennai", title: "Foreign RSU and ESPP tax and Schedule FA" },
        { slug: "old-vs-new-tax-regime", title: "Old vs New Tax Regime FY 2026-27: Which Saves More Tax?" },
        { slug: "advance-tax-deadlines", title: "Advance Tax Deadlines for FY 2026 to 27: A Practical Guide" },
      ]}
    />
  );
}
