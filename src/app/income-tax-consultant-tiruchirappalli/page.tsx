import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const slug = "/income-tax-consultant-tiruchirappalli";
const title = "Income Tax Consultant in Trichy for HNIs | C S Rushil & Co.";
const description =
  "Income tax for Trichy PSU retirees, engineering ancillary owners and Gulf or Singapore NRIs with property in Tiruchirappalli: pension, residency and gains.";

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

const RETIREMENT = [
  ["Monthly (uncommuted) pension", "Taxable as salary. A standard deduction is allowed (₹75,000 under the new regime).", "TDS by the pension disbursing bank or trust; reconcile with the AIS."],
  ["Commuted pension (lump sum)", "Fully exempt for government employees. For other employees, including PSU staff, generally one-third of the full commuted value is exempt if gratuity is also received, or one-half if not.", "Whether a PSU retiree's commutation is fully or partly exempt depends on the scheme; we confirm from the scheme rules before filing."],
  ["Gratuity", "Exempt up to the statutory limit (₹25 lakh for non-government employees); the excess is taxable.", "Older retirements used the limit applicable in that year."],
  ["Leave encashment at retirement", "Exempt up to ₹25 lakh for non-government employees; fully exempt for government employees.", "Encashment while in service is fully taxable."],
  ["Voluntary retirement compensation", "Exempt up to ₹5 lakh where the scheme meets the prescribed conditions; the age and service condition does not apply to public sector company employees.", "The exemption is available once in a lifetime; check whether relief for arrears was claimed instead."],
  ["Employer pension trust or NPS withdrawals", "NPS: 60% lump sum on exit is exempt; the annuity is taxable as received. Annuities bought from insurers are taxable as income.", "Each scheme is treated differently, so we read the scheme documents rather than assume."],
];

const NRI_POINTS = [
  ["Residential status", "An Indian citizen is non-resident in a year if in India for less than 182 days, with a 120-day test where Indian income exceeds ₹15 lakh. An Indian citizen with Indian income above ₹15 lakh who is not liable to tax in any country can be deemed resident.", "The deemed-resident rule matters for those working in Gulf countries with no personal income tax."],
  ["Rent from a Trichy house or flat", "Taxed in India; 30% standard deduction and interest on a home loan are allowed. The tenant deducts TDS on rent paid to a non-resident.", "Many tenants are unaware of this TDS; a lower deduction certificate can help where tax is low."],
  ["Sale of Trichy property", "Long-term after 24 months at 12.5% without indexation. The buyer deducts TDS on the whole sale price unless a lower deduction certificate is obtained.", "Apply for the certificate before the sale deed is registered."],
  ["Interest on NRE and NRO deposits", "NRE interest is exempt while non-resident; NRO interest is taxable in India with TDS.", "Exemption on NRE interest stops once the person becomes resident."],
  ["Singapore and Gulf tax treaties", "India has tax treaties with Singapore, the UAE, Saudi Arabia, Oman, Qatar, Kuwait and Bahrain, which can affect how Indian income is taxed and credited.", "A tax residency certificate from the country of residence is needed to claim treaty benefits."],
];

const CAPITAL_GAINS = [
  ["House or plot in Thillai Nagar, Cantonment or K K Nagar (Trichy)", "Long-term after 24 months: 12.5% without indexation; resident individuals may compare 20% with indexation on property acquired before 23 July 2024. NRIs do not get this option.", "Reinvest in a residential house in India or specified bonds (up to ₹50 lakh within six months)."],
  ["House in Srirangam or another older locality, inherited", "The previous owner's cost and holding period count. For property acquired before 1 April 2001, cost can be its fair market value on that date, capped at the stamp duty value then.", "A registered valuer's report as on 1 April 2001 is usually needed."],
  ["Ancillary unit's factory land or shed", "Land: long-term after 24 months. A depreciated building is taxed through the block of assets, usually as short-term gain.", "Split land and building in the deed; check whether the unit holds the land on an industrial estate lease rather than freehold."],
  ["Agricultural land around the city", "Not a capital asset if beyond the specified distance from a municipality, based on population; otherwise taxed like other land.", "Relief for buying new agricultural land within two years, if farmed for two years before sale."],
  ["Any property sold below guideline value", "Section 50C (1961 Act numbering) treats the stamp duty value as the sale price where it exceeds the actual price by more than 10%.", "Check the guideline value on tnreginet.gov.in for the survey number before agreeing the price."],
];

const DOCUMENTS = [
  ["Retirement papers", "Settlement letter showing gratuity, commutation, leave encashment and any VRS amount; pension payment order; Form 16 for the retirement year."],
  ["Pension and interest statements", "Pension bank statements, fixed deposit and senior citizen scheme interest certificates, Form 16 or 16A from the bank."],
  ["Ancillary unit records", "Audited accounts, purchase orders from principal buyers, TDS certificates received, and partner or director remuneration details."],
  ["NRI documents", "Passport pages showing travel dates, tax residency certificate, NRE and NRO statements, rent agreements and TDS certificates from tenants."],
  ["Property papers", "Sale and purchase deeds, guideline value printout, legal heir or will papers for inherited property, and valuation reports."],
  ["AIS and Form 26AS", "Downloaded for each family member before filing, to match pension TDS, interest and property transactions."],
];

const CALENDAR = [
  ["15 June 2026", "First advance tax instalment for tax year 2026-27. Resident senior citizens (60 and above) without business income are not required to pay advance tax."],
  ["15 September 2026", "Second instalment (45% cumulative) for ancillary owners and NRIs whose tax is not fully covered by TDS."],
  ["21 November 2026", "Return due for financial year 2025-26 for ancillary units and partners whose accounts are audited (extended from 31 October by CBDT Circular No. 7/2026; audit report by 21 October 2026)."],
  ["15 December 2026", "Third instalment (75% cumulative)."],
  ["15 March 2027", "Final instalment (100%). An NRI who sold property in the year should check whether TDS already covers the tax."],
  ["31 July 2027", "Return due for tax year 2026-27 for pensioners, salaried people and most NRIs."],
  ["31 October 2027", "Return due for tax year 2026-27 where accounts are audited."],
  ["31 December 2027", "Last date for a belated return for tax year 2026-27."],
  ["31 March 2028", "Last date to revise the tax year 2026-27 return (twelve months after the tax year ends, as amended by the Finance Act, 2026)."],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${slug}`}
      serviceType="Income Tax Consulting for High-Income Individuals"
      crumbLabel="Income Tax Consultant in Tiruchirappalli"
      crumbHref={slug}
      parentCrumb={{ name: "Income Tax for HNIs", href: "/income-tax-consultant-for-hni-chennai" }}
      eyebrow="Income Tax · Tiruchirappalli (Trichy) · Retirees, Owners and NRIs"
      h1="Income Tax Consultant in Tiruchirappalli for Business Families and High-Income Individuals"
      subhead="Income tax for Trichy's PSU retirees and engineers, owners of engineering ancillary units, and NRIs in the Gulf and Singapore who own property in Tiruchirappalli: pension and retirement receipts, business income, residential status and capital gains. Our only office is in Anna Nagar, Chennai; we serve Trichy clients online."
      keyFacts={[
        { label: "Where we work from", value: "Anna Nagar, Chennai only. We have no office in Tiruchirappalli; Trichy clients work with us online, with meetings in Chennai by appointment." },
        { label: "Typical client", value: "Retired BHEL and other PSU engineers, owners of fabrication and machining units supplying large buyers, and Gulf or Singapore NRIs with Trichy homes." },
        { label: "Retirement receipts", value: "Pension is taxable as salary; commutation, gratuity, leave encashment and VRS compensation each have their own exemption rules." },
        { label: "NRI residency", value: "Under 182 days in India usually means non-resident, but a 120-day test and a deemed-resident rule apply where Indian income exceeds ₹15 lakh." },
        { label: "Law in force", value: "Income-tax Act, 2025 from tax year 2026-27; financial year 2025-26 returns still under the Income-tax Act, 1961." },
      ]}
      introHeading="What income tax issues do Trichy retirees, ancillary owners and NRIs usually face?"
      intro="Three groups dominate. PSU retirees need their pension, commutation, gratuity and VRS receipts taxed under the right exemption. Ancillary unit owners need business income, partner drawings and depreciated factory assets handled correctly. Gulf and Singapore NRIs need their residential status, rent and property sales sorted. We work with all three online from Anna Nagar, Chennai."
      citation={{ label: "Income Tax Department tutorial on taxability of retirement benefits (incometaxindia.gov.in)", href: "https://www.incometaxindia.gov.in/w/taxability-of-retirement-benefits" }}
      subServicesHeading="What do we handle for Trichy clients?"
      subServices={[
        { name: "Pensioner returns", text: "Returns for retired PSU and government employees: pension, interest, senior citizen schemes, and the correct treatment of the retirement-year lump sums." },
        { name: "Retirement settlement review", text: "Before or just after retirement, we check how commutation, gratuity, leave encashment and any VRS payment will be taxed, and whether TDS was correct." },
        { name: "Ancillary unit owners", text: "Returns for proprietors, partners and directors of engineering units: TDS from principal buyers, remuneration limits, depreciation and advance tax." },
        { name: "NRI residential status and returns", text: "Day-count working for Gulf and Singapore NRIs, rent and interest reporting, treaty claims and refunds of excess TDS." },
        { name: "Property sales", text: "Capital gains on Trichy houses, inherited property and factory land, lower TDS certificates for NRI sellers, and reinvestment planning." },
        { name: "Notices and scrutiny", text: "Replies to notices on pension TDS mismatches, NRI property sales and AIS entries, coordinated with our notice-reply team." },
      ]}
      howTo={{
        heading: "How does a Trichy client work with us?",
        steps: [
          { name: "Video or phone call", text: "We understand your situation: retirement, business or life abroad, and which properties and accounts are involved." },
          { name: "Share documents securely", text: "Settlement letters, pension statements, accounts or passport pages are shared through a secure link or email." },
          { name: "Work out status and income", text: "For NRIs, we count days in India; for retirees, we classify each lump sum; for owners, we review the accounts." },
          { name: "Reconcile with the AIS", text: "We match pension TDS, interest, rent TDS and property entries in the AIS before preparing the return." },
          { name: "File and verify", text: "The return is filed and e-verified with Aadhaar OTP, net banking or digital signature, and we follow up on refunds." },
          { name: "Meet by appointment if needed", text: "Clients who prefer to meet can visit our Anna Nagar, Chennai office by appointment; we do not hold meetings in Trichy." },
        ],
      }}
      faqs={[
        { question: "Is commuted pension from a PSU fully tax-free?", answer: "Not always. Commuted pension is fully exempt for government employees. For other employees, including most PSU staff, generally one-third of the full commuted value is exempt if gratuity was also received, or one-half if not. The pension scheme's structure matters, so we check its rules before filing." },
        { question: "Is VRS compensation from a public sector company taxable?", answer: "Compensation under a voluntary retirement scheme that meets the prescribed conditions is exempt up to ₹5 lakh, and the excess is taxable. For public sector company employees, the age and service condition does not apply. The exemption can be claimed only once, and not alongside relief for the same payment." },
        { question: "Do retired pensioners in Trichy need to pay advance tax?", answer: "A resident senior citizen aged 60 or more who has no business or professional income does not have to pay advance tax; any balance is paid as self-assessment tax before filing. Retirees who also own a business or ancillary unit remain liable to pay advance tax." },
        { question: "I work in Dubai and visit Trichy every year. Am I an NRI?", answer: "Usually yes, if you spend less than 182 days in India. But if your Indian income exceeds ₹15 lakh, a 120-day test can apply, and an Indian citizen with such income who is not liable to tax anywhere, as in the UAE, can be deemed resident." },
        { question: "My tenant in Trichy pays rent to my NRO account. What tax applies?", answer: "Rent is taxable in India, with a 30% standard deduction and home loan interest allowed. A tenant paying rent to a non-resident must deduct TDS, unlike rent paid to a resident below the threshold. You claim that TDS when filing your Indian return, and any excess is refunded." },
        { question: "Do I need to visit Chennai to work with you?", answer: "No. Trichy clients and NRIs work with us by video call, email and secure document sharing, and returns are e-verified online. If you prefer to meet, we see clients at our Anna Nagar, Chennai office by appointment. We do not have an office or representative in Tiruchirappalli." },
        { question: "How is income from my ancillary unit's supplies to BHEL or other buyers checked?", answer: "Large buyers deduct TDS on payments for work contracts and services, which appears in your AIS and Form 26AS. Turnover in the books should reconcile with the TDS records and GST returns. Differences, such as year-end timing or credit notes, should be explained before filing to avoid a mismatch notice." },
      ]}
      relatedQuestions={[
        { question: "How do HNIs in Chennai plan their income tax?", href: "/income-tax-consultant-for-hni-chennai" },
        { question: "What tax applies when an NRI sells property in India?", href: "/nri-tax-services" },
        { question: "How are GST appeals handled for Trichy businesses?", href: "/gst-litigation-tiruchirappalli" },
      ]}
      relatedSlugs={["nri-tax-services", "income-tax-return-filing-chennai", "income-tax-notice-reply-chennai"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Who are Trichy&apos;s typical high-income taxpayers?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Tiruchirappalli&apos;s economy has been shaped for decades by heavy engineering, with BHEL&apos;s plant and other
        public sector establishments employing large numbers of engineers. Many of them have retired in the city, in areas
        such as Thillai Nagar, the Cantonment and K K Nagar (Trichy), and their tax questions centre on pension and the lump
        sums received at retirement. Around these large employers grew a network of fabrication, machining and engineering
        ancillary units, many owned by former engineers or their families, which supply components and job work to bigger
        buyers. The third group is the Trichy diaspora: families with members working in the Gulf and Singapore who own a
        house in Srirangam or elsewhere in the city, earn rent from it, and eventually sell or inherit property here.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How are pension, commutation and VRS receipts taxed?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Retirement-year returns are the most error-prone for PSU retirees, because several lump sums arrive together and each
        has its own exemption. The table describes the position under the 1961 Act as explained in the Income Tax
        Department&apos;s retirement benefits tutorial; the 2025 Act carries these exemptions under new section and schedule
        numbers, and we confirm the current wording and limits before applying them to a given retirement. Section numbers
        are omitted for that reason.
      </p>
      <DataTable head={["Receipt", "General tax treatment", "What to check"]} rows={RETIREMENT} />

      <h2 className="mt-14 text-2xl text-obsidian">What should Gulf and Singapore NRIs with Trichy property know?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Many Trichy families have a member working in the UAE, Saudi Arabia, Oman, Qatar, Kuwait or Singapore. Their Indian
        tax position depends first on residential status, and Gulf residents need particular care because their country of
        work may not tax personal income at all.
      </p>
      <DataTable head={["Issue", "General position", "Practical note"]} rows={NRI_POINTS} />

      <h2 className="mt-14 text-2xl text-obsidian">What changes when a Gulf or Singapore NRI returns to Trichy for good?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Many Trichy NRIs eventually come home. On return, a person often qualifies as resident but not ordinarily resident
        for a period, depending on how many years they were non-resident and how many days they spent in India in earlier
        years. During that period, income earned and received outside India is generally not taxed in India, which gives
        time to reorganise overseas savings. NRE deposits should be converted to resident accounts or RFC accounts, as banking
        rules require, and their interest stops being exempt once the person is resident. Once ordinarily resident, the
        person must report foreign assets and foreign income, such as a Singapore bank account or end-of-service benefits
        held abroad, in the Indian return, and the penalties for not doing so are significant. We work out the year-by-year
        status from passport records and plan the order in which accounts and investments are moved.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How should Trichy ancillary unit owners draw income from the business?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Ancillary units around Trichy are often run as proprietorships or small partnership firms, and some as private
        companies. A proprietor&apos;s business profit is simply part of personal income. Partners can take remuneration and
        interest on capital within the limits linked to book profit and stated in the deed, and their share of firm profit is
        exempt. Directors of a company can take salary, and dividends are taxed at slab rates. Because orders from large
        buyers can rise and fall sharply between years, we review profit before each advance tax date and check whether
        machinery purchases, depreciation and pending receivables have been recorded properly, so that drawings, advance tax
        and the final return all match.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How are capital gains on Trichy property taxed?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Stamp duty and capital gains both use the guideline value fixed by the Tamil Nadu Registration Department for each
        street or survey number. Values are revised from time to time, so we check the current figure on tnreginet.gov.in
        for the exact property. Older family houses in Srirangam and the original town are often inherited, which makes the
        cost and holding period of the earlier owner the starting point.
      </p>
      <DataTable head={["Property", "How the gain is taxed", "Reliefs and checks"]} rows={CAPITAL_GAINS} />

      <h2 className="mt-14 text-2xl text-obsidian">What documents should Trichy clients keep ready?</h2>
      <DataTable head={["Document", "What it covers"]} rows={DOCUMENTS} />

      <h2 className="mt-14 text-2xl text-obsidian">What are the key income tax dates for tax year 2026-27?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Tax year 2026-27 runs from 1 April 2026 to 31 March 2027 under the Income-tax Act, 2025. These are the statutory
        dates; the CBDT sometimes extends them.
      </p>
      <DataTable head={["Date", "What is due"]} rows={CALENDAR} />

      <h2 className="mt-14 text-2xl text-obsidian">How do we serve Trichy clients from Chennai?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        C S Rushil &amp; Co. has one office, in Anna Nagar, Chennai, and no branch or representative in Tiruchirappalli.
        Retirees, business owners and NRIs work with us by video call and secure document sharing, returns are e-verified
        online, and notices are answered through the faceless e-proceedings system. Clients who want to meet can visit our
        Chennai office by appointment. For our wider approach, see the{" "}
        <Link href="/income-tax-consultant-for-hni-chennai" className={linkClass}>
          income tax service for HNIs
        </Link>{" "}
        and{" "}
        <Link href="/income-tax-return-filing-chennai" className={linkClass}>
          income tax return filing
        </Link>
        . NRIs can read more in our{" "}
        <Link href="/nri-tax-services" className={linkClass}>
          NRI tax services
        </Link>
        , and anyone with a notice can see{" "}
        <Link href="/income-tax-notice-reply-chennai" className={linkClass}>
          income tax notice replies
        </Link>
        . Ancillary owners incorporating can use{" "}
        <Link href="/company-registration-tiruchirappalli" className={linkClass}>
          company registration in Tiruchirappalli
        </Link>
        , and GST disputes are covered under{" "}
        <Link href="/gst-litigation-tiruchirappalli" className={linkClass}>
          GST litigation in Tiruchirappalli
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
