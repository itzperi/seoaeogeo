import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const linkClass = "font-medium text-royal-violet underline underline-offset-2";
const th = "px-4 py-3 font-medium";
const tdHead = "px-4 py-3 align-top font-medium text-obsidian";
const td = "px-4 py-3 align-top text-slate";

const DOCUMENTS = [
  { doc: "PAN, and Aadhaar if you hold one", why: "Login to the Indian e-filing portal and e-verification of the return.", source: "Your own records" },
  { doc: "Passport pages or travel record for the year", why: "Counting days in India for the residential status tests.", source: "Passport stamps or airline records" },
  { doc: "US residency certification (Form 6166)", why: "Needed only if relief under the India–US DTAA is claimed in India, together with Form 41 (Form 10F for years under the 1961 Act).", source: "IRS, on application using Form 8802" },
  { doc: "NRO, NRE and FCNR statements and interest certificates", why: "Reporting taxable NRO interest and claiming TDS credit; maximum and 31 December balances for your CPA's FBAR and Form 8938 work.", source: "Your Indian banks" },
  { doc: "Rent agreement, rent received and tenant TDS certificates", why: "Computing rental income and claiming credit for tax the tenant deducted.", source: "Your tenant or the family member who collects rent" },
  { doc: "Capital gains statements and mutual fund holdings", why: "Gains on Indian shares and mutual funds, with purchase dates, units and values your CPA may need for US reporting.", source: "Your broker, and the CAMS or KFintech consolidated statement" },
  { doc: "Property sale and purchase deeds, and any lower-deduction certificate", why: "Capital gains on Indian property and matching the buyer's TDS.", source: "Your property papers and the buyer" },
  { doc: "Form 26AS and Annual Information Statement", why: "Cross-checking TDS before filing; the Indian tax figure supports your CPA's Form 1116 claim.", source: "Downloaded from the e-filing portal" },
  { doc: "Indian bank account for refunds", why: "Refunds are paid only to a bank account pre-validated on the portal.", source: "Your NRO account details" },
  { doc: "Last year's return and acknowledgement", why: "Carried-forward losses, consistency checks and any pending refund.", source: "E-filing portal or your previous adviser" },
];

const CALENDAR = [
  { date: "1 April 2026", country: "India", item: "Indian tax year 2026-27 begins, under the Income-tax Act, 2025" },
  { date: "15 June 2026", country: "India", item: "First advance tax instalment (15%) for tax year 2026-27, if tax after TDS is ₹10,000 or more" },
  { date: "15 September 2026", country: "India", item: "Second advance tax instalment (45% cumulative)" },
  { date: "15 October 2026", country: "US", item: "Extended deadline for the 2025 Form 1040 (if Form 4868 was filed) and automatic extended deadline for the 2025 FBAR" },
  { date: "15 December 2026", country: "India", item: "Third advance tax instalment (75% cumulative)" },
  { date: "31 December 2026", country: "India", item: "Last date for a belated return for financial year 2025-26 (assessment year 2026-27), filed under the 1961 Act" },
  { date: "31 December 2026", country: "US", item: "US tax year 2026 ends; year-end balance date for FBAR and Form 8938 records" },
  { date: "15 March 2027", country: "India", item: "Final advance tax instalment (100%)" },
  { date: "31 March 2027", country: "India", item: "Indian tax year 2026-27 ends; last date to revise the return for financial year 2025-26" },
  { date: "15 April 2027", country: "US", item: "2026 Form 1040 due and tax payable; 2026 FBAR (FinCEN Form 114) due" },
  { date: "15 June 2027", country: "US", item: "Automatic two-month extension to file and pay for US citizens and residents living abroad who qualify; interest runs from 15 April" },
  { date: "31 July 2027", country: "India", item: "Return due for tax year 2026-27 for individuals without business income whose accounts are not audited" },
  { date: "15 October 2027", country: "US", item: "Extended deadline for the 2026 Form 1040 if Form 4868 was filed; automatic extended deadline for the 2026 FBAR" },
  { date: "31 December 2027", country: "India", item: "Last date for a belated return for tax year 2026-27" },
  { date: "31 March 2028", country: "India", item: "Last date to revise the tax year 2026-27 return (twelve months after the tax year ends, as amended by the Finance Act, 2026)" },
];

export const metadata: Metadata = {
  title: { absolute: "NRI Tax Services for US Residents: India ITR & DTAA" },
  description:
    "Indian ITR filing for NRIs in the USA, India–US DTAA positions, and Indian tax and account records your US CPA needs for Form 1116, FBAR and Form 8938.",
  alternates: { canonical: "/nri-tax-services-usa" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "NRI Tax Services for US Residents: India ITR & DTAA",
    description:
      "Indian return filing and the Indian tax and account records your US CPA needs, for NRIs living in the United States.",
    url: "/nri-tax-services-usa",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/nri-tax-services-usa`}
      serviceType="NRI Tax Advisory"
      crumbLabel="NRI Tax Services — USA"
      crumbHref="/nri-tax-services-usa"
      eyebrow="NRI Clients · United States"
      h1="India Tax for NRIs in the USA: ITR, DTAA, FBAR/FATCA Touchpoints"
      subhead="Indian income tax returns, India–US DTAA positions and year-end Indian account records for NRIs in California, New Jersey, Texas and across the US, prepared so your US CPA has what they need for foreign tax credit, FBAR and FATCA reporting."
      introHeading="Do NRIs living in the USA have to file taxes in both India and the US?"
      intro="Often yes. If you have Indian rent, NRO interest, dividends or capital gains above the basic exemption, or tax to reclaim, you file an Indian return. If you are a US citizen, green-card holder or otherwise US tax resident, the same income also goes on your US return, where Indian tax paid can usually be claimed as a foreign tax credit on Form 1116. We handle the Indian return and supply your US CPA with the Indian figures; the US return stays with them."
      citation={{ label: "IRS — Report of Foreign Bank and Financial Accounts (FBAR)", href: "https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar" }}
      keyFacts={[
        { label: "Tax years", value: "India: 1 April to 31 March. US: calendar year." },
        { label: "Indian return due (tax year 2026-27)", value: "31 July 2027 for individuals without business income and not subject to audit" },
        { label: "US 2026 return and FBAR", value: "15 April 2027; FBAR has an automatic extension to 15 October 2027" },
        { label: "FBAR threshold", value: "Aggregate foreign account balances above USD 10,000 at any time in the calendar year" },
      ]}
      subServicesHeading="Which Indian tax services do NRIs in the USA need?"
      subServices={[
        { name: "Indian ITR Filing", text: "Filing your Indian return for rent, NRO interest, dividends and capital gains, with TDS reconciled against Form 26AS and the Annual Information Statement." },
        { name: "Foreign Tax Credit Support", text: "A summary of Indian tax paid by income type, with Form 16A certificates and the filed return, so your US CPA can prepare Form 1116 from documented figures." },
        { name: "Indian Account Balance Records", text: "A list of every Indian bank, demat and mutual fund account with the highest balance during the US calendar year and the 31 December balance, for your CPA’s FBAR and Form 8938 work." },
        { name: "Calendar-Year Income Schedules", text: "Splitting Indian income between the Indian April–March year and the US January–December year, using dated bank and broker statements." },
        { name: "NRE, NRO and FCNR Review", text: "Confirming the Indian treatment of each account and flagging that interest exempt in India, such as NRE and FCNR interest, is generally still reportable in the US." },
        { name: "Property Sale and Repatriation", text: "Lower TDS certificate, capital gains computation and Form 15CA/15CB when you sell Indian property, plus the cost and sale figures your CPA needs for US reporting." },
      ]}
      howTo={{
        heading: "How do NRIs in the USA coordinate Indian tax filing with a US CPA?",
        steps: [
          { name: "Gather Indian statements after 31 March", text: "Collect NRO, NRE and FCNR statements, interest certificates, the mutual fund consolidated account statement, demat holdings, rent records and any property sale papers for the Indian financial year." },
          { name: "Confirm residential status", text: "Using your travel dates, we confirm that you are a non-resident for Indian tax for the year, since this decides which Indian income is taxable and which accounts you may hold." },
          { name: "File the Indian return", text: "We prepare the computation, apply any India–US DTAA position where relevant, and file and e-verify the return, claiming refunds of excess TDS deducted on NRO interest or property sales." },
          { name: "Prepare the US calendar-year schedule", text: "We re-cut Indian income and tax by calendar month so your US CPA can report January to December figures, and list maximum and year-end account balances in rupees for each Indian account." },
          { name: "Hand over to your US CPA", text: "Your US CPA receives the filed return, Form 26AS, Form 16A certificates and the account balance list, and handles Form 1116, FBAR, Form 8938 and any PFIC reporting on the US side." },
        ],
      }}
      faqs={[
        { question: "Do I need to file FBAR for my Indian bank accounts?", answer: "Possibly: a US person generally files FBAR (FinCEN Form 114) when the combined balance of foreign financial accounts exceeds USD 10,000 at any time during the calendar year, and NRE, NRO and FCNR accounts usually count. The FBAR is filed by you or your US CPA, not by us. We prepare the Indian account list with maximum and year-end balances so the figures can be completed accurately." },
        { question: "What is the difference between FBAR and Form 8938?", answer: "Both report foreign assets, but they are separate filings: FBAR goes to FinCEN once foreign accounts exceed USD 10,000 in aggregate, while Form 8938, under FATCA, is filed with your US tax return and applies above higher thresholds that depend on your filing status and whether you live in the US. Your US CPA decides which apply to you; we supply the Indian balances and account details for both." },
        { question: "Are my Indian mutual funds a problem for US tax?", answer: "They can be: Indian mutual funds are commonly treated as PFICs for US tax purposes, which can mean complex reporting and unfavourable US tax treatment. This is a US tax question, so we flag it to you and your US adviser rather than advising on it. On the Indian side, we report the funds’ gains correctly and give your CPA the purchase dates, units and values they will need." },
        { question: "Can I claim US foreign tax credit for Indian tax paid?", answer: "Usually yes: a US tax resident can generally claim a foreign tax credit on Form 1116 for Indian income tax paid on Indian-source income, subject to US limits, with the India–US DTAA helping decide which country taxes each type of income first. Your CPA handles the US claim. We make sure the Indian tax figure is final and documented by filing the Indian return and matching TDS to Form 26AS." },
        { question: "Is NRE interest tax-free for a US resident?", answer: "Only in India. NRE and FCNR interest is exempt from Indian tax while you are a non-resident, but US citizens, green-card holders and other US tax residents are taxed on worldwide income, so that interest is generally reportable on the US return with no Indian tax to credit. NRO interest is taxable in both countries, with Indian TDS available as a credit. We provide an annual interest summary for all three." },
        { question: "How do the Indian and US tax years line up?", answer: "They do not: the Indian financial year runs from 1 April to 31 March, while the US tax year is the calendar year, so Indian income for one Indian year spans two US returns and must be split by calendar month. We prepare a calendar-month schedule of Indian income and tax so your US CPA can report the correct January to December figures without estimating from Indian annual totals." },
        { question: "When are the FBAR and Indian return deadlines for 2026-27?", answer: "The FBAR for calendar year 2026 is due on 15 April 2027, with an automatic extension to 15 October 2027 that does not need to be requested. The Indian return for tax year 2026-27, covering April 2026 to March 2027, is due by 31 July 2027 for most NRIs without business income. Your US CPA files the FBAR; we file the Indian return." },
        { question: "I am selling my parents’ flat in Chennai. What happens on the Indian side?", answer: "The buyer must deduct TDS on the full sale price because you are an NRI, unless you obtain a lower-deduction certificate first. We compute the capital gain using your parents’ original cost and holding period for inherited property, apply for the certificate, issue Form 15CB for repatriation and file your Indian return. Your US CPA receives the sale and cost figures for US reporting." },
      ]}
      relatedQuestions={[
        { question: "How does the lower TDS certificate work on a Chennai property sale?", href: "/nri-property-sale-tds-chennai" },
        { question: "How does Indian tax work for NRIs living in the UAE?", href: "/nri-tax-services-uae" },
        { question: "What does the full NRI tax service cover?", href: "/nri-tax-services" },
      ]}
      relatedSlugs={["nri-tax-services", "nri-property-sale-tds-chennai", "nri-tax-services-uk", "nri-tax-services-uae"]}
      relatedPosts={["nri-itr-filing", "capital-gains-tax-property-sale", "advance-tax-deadlines"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">What documents does a US-based NRI need for an Indian tax return?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The list covers the usual cases; we confirm what applies to you after the first call. The same statements also give
        your US CPA the Indian account balances and income figures they need.
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className={th}>Document</th>
              <th className={th}>Why it is needed</th>
              <th className={th}>Where it comes from</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {DOCUMENTS.map((r) => (
              <tr key={r.doc}>
                <td className={tdHead}>{r.doc}</td>
                <td className={td}>{r.why}</td>
                <td className={td}>{r.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">What are the India and US tax dates for 2026-27?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The Indian tax year runs from 1 April to 31 March and the US tax year is the calendar year. From 1 April 2026 the
        Income-tax Act, 2025 applies in India; returns for income earned up to 31 March 2026 are still filed under the 1961
        Act. A US filing extension extends the time to file, not the time to pay. US deadlines that fall on a weekend or
        legal holiday move to the next business day, and the CBDT can extend Indian dates.
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className={th}>Date</th>
              <th className={th}>Country</th>
              <th className={th}>What is due</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {CALENDAR.map((r) => (
              <tr key={r.date + r.country}>
                <td className={tdHead}>{r.date}</td>
                <td className={td}>{r.country}</td>
                <td className={td}>{r.item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 max-w-2xl text-sm text-slate">
        Sources:{" "}
        <a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/%20income%20tax%20returns-faq" target="_blank" rel="noopener noreferrer" className={linkClass}>
          Income Tax Department return FAQs
        </a>
        ,{" "}
        <a href="https://www.irs.gov/filing/individuals/when-to-file" target="_blank" rel="noopener noreferrer" className={linkClass}>
          IRS: when to file
        </a>
        ,{" "}
        <a href="https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-resident-aliens-abroad-automatic-2-month-extension-of-time-to-file" target="_blank" rel="noopener noreferrer" className={linkClass}>
          IRS: automatic two-month extension for taxpayers abroad
        </a>{" "}
        and{" "}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar" target="_blank" rel="noopener noreferrer" className={linkClass}>
          IRS: FBAR
        </a>
        .
      </p>
    </ServicePageTemplate>
  );
}
