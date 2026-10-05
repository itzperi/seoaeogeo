import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

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
        { question: "I am selling my parents’ flat in Chennai. What happens on the Indian side?", answer: "The buyer must deduct TDS on the full sale price because you are an NRI, unless you obtain a lower-deduction certificate first. We compute the capital gain using your parents’ original cost and holding period for inherited property, apply for the certificate, issue Form 15CB for repatriation and file your Indian return. Your US CPA receives the sale and cost figures for US reporting." },
      ]}
      relatedQuestions={[
        { question: "How does the lower TDS certificate work on a Chennai property sale?", href: "/nri-property-sale-tds-chennai" },
        { question: "How does Indian tax work for NRIs living in the UAE?", href: "/nri-tax-services-uae" },
        { question: "What does the full NRI tax service cover?", href: "/nri-tax-services" },
      ]}
      relatedSlugs={["nri-tax-services", "nri-property-sale-tds-chennai", "nri-tax-services-uk", "nri-tax-services-uae"]}
    />
  );
}
