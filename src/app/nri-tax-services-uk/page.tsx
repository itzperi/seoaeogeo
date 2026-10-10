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
  { doc: "HMRC certificate of residence", why: "Needed only if relief under the India–UK DTAA is claimed in India, together with Form 41 (Form 10F for years under the 1961 Act).", source: "HMRC" },
  { doc: "NRO, NRE and FCNR statements and interest certificates", why: "Reporting taxable NRO interest and claiming TDS credit; NRE and FCNR interest summary for your UK accountant.", source: "Your Indian banks" },
  { doc: "Rent agreement, rent received and tenant TDS certificates", why: "Computing rental income and claiming credit for tax the tenant deducted.", source: "Your tenant or the family member who collects rent" },
  { doc: "Capital gains statements", why: "Gains on Indian shares and mutual funds, with dates needed for UK tax-year apportionment.", source: "Your broker, and the CAMS or KFintech consolidated statement" },
  { doc: "Property sale and purchase deeds, and any lower-deduction certificate", why: "Capital gains on Indian property and matching the buyer's TDS.", source: "Your property papers and the buyer" },
  { doc: "Form 26AS and Annual Information Statement", why: "Cross-checking TDS before filing; also part of the evidence pack for HMRC foreign tax credit relief.", source: "Downloaded from the e-filing portal" },
  { doc: "Indian bank account for refunds", why: "Refunds are paid only to a bank account pre-validated on the portal.", source: "Your NRO account details" },
  { doc: "Last year's return and acknowledgement", why: "Carried-forward losses, consistency checks and any pending refund.", source: "E-filing portal or your previous adviser" },
];

const CALENDAR = [
  { date: "1 April 2026", country: "India", item: "Indian tax year 2026-27 begins, under the Income-tax Act, 2025" },
  { date: "6 April 2026", country: "UK", item: "UK tax year 2026-27 begins" },
  { date: "15 June 2026", country: "India", item: "First advance tax instalment (15%) for tax year 2026-27, if tax after TDS is ₹10,000 or more" },
  { date: "15 September 2026", country: "India", item: "Second advance tax instalment (45% cumulative)" },
  { date: "5 October 2026", country: "UK", item: "Deadline to tell HMRC you need to file a Self Assessment return for 2025-26, if you have not filed before" },
  { date: "31 October 2026", country: "UK", item: "Paper Self Assessment return for 2025-26" },
  { date: "15 December 2026", country: "India", item: "Third advance tax instalment (75% cumulative)" },
  { date: "31 December 2026", country: "India", item: "Last date for a belated return for financial year 2025-26 (assessment year 2026-27), filed under the 1961 Act" },
  { date: "31 January 2027", country: "UK", item: "Online Self Assessment return and balancing payment for 2025-26; first payment on account for 2026-27, where payments on account apply" },
  { date: "15 March 2027", country: "India", item: "Final advance tax instalment (100%)" },
  { date: "31 March 2027", country: "India", item: "Indian tax year 2026-27 ends; last date to revise the return for financial year 2025-26" },
  { date: "5 April 2027", country: "UK", item: "UK tax year 2026-27 ends" },
  { date: "31 July 2027", country: "India", item: "Return due for tax year 2026-27 for individuals without business income whose accounts are not audited" },
  { date: "31 July 2027", country: "UK", item: "Second payment on account for 2026-27, where payments on account apply" },
  { date: "31 December 2027", country: "India", item: "Last date for a belated return for tax year 2026-27" },
  { date: "31 January 2028", country: "UK", item: "Online Self Assessment return and balancing payment for 2026-27" },
  { date: "31 March 2028", country: "India", item: "Last date to revise the tax year 2026-27 return (twelve months after the tax year ends, as amended by the Finance Act, 2026)" },
];

export const metadata: Metadata = {
  title: { absolute: "NRI Tax Services for UK Residents: India–UK DTAA" },
  description:
    "Indian ITR filing for NRIs in the UK, India–UK DTAA claims, and the tax computation and TDS proof your UK accountant needs for HMRC foreign tax credit relief.",
  alternates: { canonical: "/nri-tax-services-uk" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "NRI Tax Services for UK Residents: India–UK DTAA",
    description:
      "Indian return filing and HMRC-ready evidence of Indian tax paid for NRIs living in the United Kingdom.",
    url: "/nri-tax-services-uk",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/nri-tax-services-uk`}
      serviceType="NRI Tax Advisory"
      crumbLabel="NRI Tax Services — UK"
      crumbHref="/nri-tax-services-uk"
      eyebrow="NRI Clients · United Kingdom"
      h1="India Tax for NRIs in the UK: DTAA, HMRC Credit & Indian Income"
      subhead="Indian income tax returns, India–UK DTAA positions and a clear record of Indian tax paid for NRIs living in London, Leicester, Birmingham, Manchester and across the UK, prepared so your UK accountant can claim relief on your Self Assessment return."
      introHeading="How do NRIs in the UK avoid paying tax twice on Indian income?"
      intro="You pay Indian tax first on Indian rent, interest or capital gains, then report the same income on your UK Self Assessment return and claim foreign tax credit relief for the Indian tax, usually capped at the UK tax on that income. The India–UK DTAA decides which country has the first right to tax each type of income. Our role is the Indian side: filing your Indian return correctly and giving your UK accountant the computation and TDS evidence HMRC expects to see."
      citation={{ label: "GOV.UK — Tax on foreign income: if you’re taxed twice", href: "https://www.gov.uk/tax-foreign-income/taxed-twice" }}
      keyFacts={[
        { label: "Tax years", value: "India: 1 April to 31 March. UK: 6 April to 5 April." },
        { label: "Indian return due (tax year 2026-27)", value: "31 July 2027 for individuals without business income and not subject to audit" },
        { label: "UK online return (2025-26)", value: "31 January 2027; the 2026-27 return is due 31 January 2028" },
        { label: "Double tax relief", value: "Claimed on the UK return as foreign tax credit relief, supported by Indian tax evidence" },
      ]}
      subServicesHeading="Which Indian tax services do NRIs in the UK need?"
      subServices={[
        { name: "Indian ITR Filing", text: "Filing your Indian return for rent, NRO interest, dividends and capital gains, with TDS reconciled against Form 26AS and the Annual Information Statement." },
        { name: "Foreign Tax Credit Evidence Pack", text: "A per-income summary of Indian tax paid, with Form 16A certificates, the Form 26AS extract and the filed return, arranged so your UK accountant can match it to the Self Assessment foreign pages." },
        { name: "Tax-Year Apportionment Schedules", text: "Month-by-month schedules of Indian rent, interest credits and sale dates, so income can be split between the Indian year ending 31 March and the UK year ending 5 April." },
        { name: "India–UK DTAA Positions", text: "Identifying which treaty article applies to each Indian income stream and, where relief is claimed in India, filing Form 10F with your UK certificate of residence." },
        { name: "Property and Share Sales", text: "Capital gains computation, lower TDS certificate and Form 15CA/15CB when you sell Indian property or investments, with the figures your UK adviser needs for UK capital gains reporting." },
        { name: "Coordination with Your UK Accountant", text: "Answering your UK accountant’s questions on the Indian figures directly, in UK working hours, while UK tax advice stays with them." },
      ]}
      howTo={{
        heading: "How do the Indian and UK tax filing cycles fit together for NRIs?",
        steps: [
          { name: "Close the Indian year on 31 March", text: "After the Indian financial year ends, collect rent records, NRO interest certificates, the broker’s capital gains report and any property sale documents for 1 April to 31 March." },
          { name: "File the Indian return", text: "We prepare the computation, confirm your non-resident status from your travel dates, and file and e-verify your Indian return, typically well ahead of the Indian due date." },
          { name: "Prepare the apportionment schedule", text: "Because the UK tax year runs from 6 April to 5 April, we split each Indian income item by date so your UK accountant can report the right amount in the right UK tax year." },
          { name: "Hand over the evidence pack", text: "Your UK accountant receives the filed return, Form 26AS, Form 16A certificates and a summary of Indian tax paid per income type, which supports the foreign tax credit claim on your Self Assessment return." },
          { name: "UK accountant completes Self Assessment", text: "Your UK accountant reports the Indian income on the foreign pages, applies the India–UK DTAA and claims foreign tax credit relief before the 31 January online filing deadline." },
        ],
      }}
      faqs={[
        { question: "Do I need to report Indian income to HMRC if I already paid tax in India?", answer: "Yes, if you are UK resident: UK residents are generally taxed on worldwide income, so Indian rent, interest and gains usually go on your Self Assessment return even when Indian tax has already been deducted, and the Indian tax is then claimed as foreign tax credit relief. Your UK accountant confirms the UK reporting; we provide the Indian figures and evidence that support the claim." },
        { question: "How does the UK tax year mismatch with the Indian financial year affect me?", answer: "The Indian financial year runs from 1 April to 31 March, and the UK tax year from 6 April to 5 April. Income received between 1 and 5 April falls into different years in each country, and quarterly interest or annual sale proceeds can land on either side. We prepare a dated schedule of each Indian income item so your UK accountant can place it in the correct UK tax year." },
        { question: "What changed for non-doms from April 2025?", answer: "From 6 April 2025, the UK replaced the remittance basis and non-domicile rules with a residence-based regime. New arrivals who qualify, broadly those not UK resident in the previous ten years, may claim a four-year foreign income and gains relief. Whether you qualify, and what it means for your Indian income, is a UK question for your UK adviser. We make sure the Indian side is filed and documented." },
        { question: "Is NRE interest taxable in the UK even though it is tax-free in India?", answer: "It may be: NRE interest is exempt in India for non-residents, but UK residents are generally taxed on worldwide income, so your UK accountant will usually need to report the amount on your UK return, and there is no Indian tax to credit against it. We give you an annual NRE and FCNR interest summary alongside the taxable NRO income, so nothing is left out." },
        { question: "What documents does my UK accountant need from India?", answer: "Typically the filed Indian return and acknowledgement, the Form 26AS and Annual Information Statement extracts, Form 16A certificates from banks and tenants, interest certificates, and a computation showing Indian tax per income type. For a property or share sale, add the sale deed, cost details and the capital gains computation. We assemble these in one pack with a summary sheet in English and in pounds where helpful." },
        { question: "Do I need to file an Indian return if TDS has already been deducted?", answer: "Often yes, and it is usually in your interest. Banks deduct TDS on NRO interest at the non-resident rate and a buyer deducts TDS on the whole price of a property, which can exceed the tax actually due, so filing the Indian return is how you claim back the excess. It also gives your UK accountant a final Indian tax figure rather than a provisional TDS amount." },
        { question: "Which comes first each year, the Indian return or the UK Self Assessment return?", answer: "The Indian return usually comes first. For tax year 2026-27 it is due by 31 July 2027, while the UK online return covering most of the same income is due by 31 January 2028. Filing in India first gives your UK accountant a final Indian tax figure and evidence for the foreign tax credit claim, rather than a provisional TDS amount." },
        { question: "Can you give advice on my UK tax position?", answer: "No. We are a Chartered Accountancy firm in India and advise on Indian tax. UK tax advice, including residence, the foreign income and gains regime, and Self Assessment, stays with your UK accountant or tax adviser. We coordinate with them directly where you authorise it, so the Indian and UK returns tell the same story about the same income." },
      ]}
      relatedQuestions={[
        { question: "What TDS applies when I sell my Chennai property from the UK?", href: "/nri-property-sale-tds-chennai" },
        { question: "How is Indian tax handled for NRIs in the USA?", href: "/nri-tax-services-usa" },
        { question: "What does the full NRI tax service cover?", href: "/nri-tax-services" },
      ]}
      relatedSlugs={["nri-tax-services", "nri-property-sale-tds-chennai", "nri-tax-services-usa", "nri-tax-services-uae"]}
      relatedPosts={["nri-itr-filing", "capital-gains-tax-property-sale", "advance-tax-deadlines"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">What documents does a UK-based NRI need for an Indian tax return?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The list covers the usual cases; a UK resident with only NRO interest needs far less than one selling property. UK
        documents such as your P60 are for your UK accountant, not for the Indian return.
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

      <h2 className="mt-14 text-2xl text-obsidian">What are the India and UK tax dates for 2026-27?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The Indian tax year runs from 1 April to 31 March and the UK tax year from 6 April to 5 April. From 1 April 2026 the
        Income-tax Act, 2025 applies in India; returns for income earned up to 31 March 2026 are still filed under the 1961
        Act. The CBDT and HMRC can change or extend dates, so check before relying on one.
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
        <a href="https://www.gov.uk/self-assessment-tax-returns/deadlines" target="_blank" rel="noopener noreferrer" className={linkClass}>
          GOV.UK Self Assessment deadlines
        </a>{" "}
        and{" "}
        <a href="https://www.gov.uk/understand-self-assessment-bill/payments-on-account" target="_blank" rel="noopener noreferrer" className={linkClass}>
          GOV.UK payments on account
        </a>
        .
      </p>
    </ServicePageTemplate>
  );
}
