import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const linkClass = "font-medium text-royal-violet underline underline-offset-2";
const th = "px-4 py-3 font-medium";
const tdHead = "px-4 py-3 align-top font-medium text-obsidian";
const td = "px-4 py-3 align-top text-slate";

const DOCUMENTS = [
  { doc: "PAN, and Aadhaar if you hold one", why: "Login to the Indian e-filing portal and e-verification of the return.", source: "Your own records" },
  { doc: "Passport pages or travel record for the year", why: "Counting days in India for the 182-day and 120-day residential status tests.", source: "Passport stamps, e-gate or airline records" },
  { doc: "UAE Tax Residency Certificate", why: "Needed only if relief under the India–UAE DTAA is claimed, together with Form 41 (Form 10F for years under the 1961 Act).", source: "UAE Federal Tax Authority, through EmaraTax" },
  { doc: "NRO, NRE and FCNR statements and interest certificates", why: "Reporting taxable NRO interest, confirming exempt NRE and FCNR interest, and claiming TDS credit.", source: "Your Indian banks" },
  { doc: "Rent agreement, rent received and tenant TDS certificates", why: "Computing rental income and claiming credit for tax the tenant deducted.", source: "Your tenant or the family member who collects rent" },
  { doc: "Capital gains statements", why: "Gains on Indian shares and mutual funds, with purchase dates and cost.", source: "Your broker, and the CAMS or KFintech consolidated statement" },
  { doc: "Property sale and purchase deeds, and any lower-deduction certificate", why: "Capital gains on Indian property and matching the buyer's TDS.", source: "Your property papers and the buyer" },
  { doc: "Form 26AS and Annual Information Statement", why: "Cross-checking every TDS entry and reported transaction before filing.", source: "Downloaded from the e-filing portal" },
  { doc: "Indian bank account for refunds", why: "Refunds are paid only to a bank account pre-validated on the portal.", source: "Your NRO account details" },
  { doc: "Last year's return and acknowledgement", why: "Carried-forward losses, consistency checks and any pending refund.", source: "E-filing portal or your previous adviser" },
];

const CALENDAR = [
  { date: "15 June 2026", country: "India", item: "First advance tax instalment (15%) for tax year 2026-27, if tax after TDS is ₹10,000 or more" },
  { date: "15 September 2026", country: "India", item: "Second advance tax instalment (45% cumulative)" },
  { date: "15 December 2026", country: "India", item: "Third advance tax instalment (75% cumulative)" },
  { date: "31 December 2026", country: "India", item: "Last date for a belated return for financial year 2025-26 (assessment year 2026-27), filed under the 1961 Act" },
  { date: "15 March 2027", country: "India", item: "Final advance tax instalment (100%)" },
  { date: "31 March 2027", country: "India", item: "Tax year 2026-27 ends; last date to revise the return for financial year 2025-26" },
  { date: "31 July 2027", country: "India", item: "Return due for tax year 2026-27 for individuals without business income whose accounts are not audited, which covers most NRIs" },
  { date: "31 December 2027", country: "India", item: "Last date for a belated return for tax year 2026-27 (nine months after the tax year ends)" },
  { date: "31 March 2028", country: "India", item: "Last date to revise the tax year 2026-27 return (twelve months after the tax year ends, as amended by the Finance Act, 2026)" },
  { date: "No annual date", country: "UAE", item: "No personal income tax return: the UAE does not levy income tax on individuals' salary or personal income" },
  { date: "Within 9 months of the business's tax period end", country: "UAE", item: "Corporate tax return, only if you run a business that falls within UAE corporate tax; handled by your UAE tax agent" },
];

export const metadata: Metadata = {
  title: { absolute: "NRI Tax Services for UAE Residents: India ITR, DTAA" },
  description:
    "India tax for NRIs in Dubai, Abu Dhabi, Sharjah: ITR filing, India–UAE DTAA with TRC and Form 10F, deemed-residency checks, NRE/NRO and Chennai property TDS.",
  alternates: { canonical: "/nri-tax-services-uae" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "NRI Tax Services for UAE Residents: India ITR & DTAA",
    description:
      "Indian return filing, India–UAE DTAA claims, NRE/NRO treatment and return-to-India planning for NRIs living in the UAE.",
    url: "/nri-tax-services-uae",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/nri-tax-services-uae`}
      serviceType="NRI Tax Advisory"
      crumbLabel="NRI Tax Services — UAE"
      crumbHref="/nri-tax-services-uae"
      eyebrow="NRI Clients · UAE & Gulf"
      h1="India Tax for NRIs in the UAE: ITR, DTAA, NRE/NRO & Property TDS"
      subhead="Indian income tax returns, residential status checks, India–UAE DTAA claims and property sale support for Indians working or running businesses in Dubai, Abu Dhabi, Sharjah and the wider Gulf, handled remotely from our Chennai office."
      introHeading="Do NRIs living in the UAE pay tax in India?"
      intro="Yes, but only on income earned or received in India, such as rent from a Chennai flat, NRO interest, capital gains on Indian shares or property, and Indian business income. UAE salary is not taxed in India while you remain a non-resident, and the UAE does not levy personal income tax on it. Because a Gulf-based NRI often has no tax to credit abroad, Indian tax paid is a real final cost, so getting residential status, TDS and the India–UAE DTAA right matters more than for NRIs in high-tax countries."
      citation={{ label: "UAE Federal Tax Authority — Tax Residency Certificate", href: "https://tax.gov.ae/en/services/tax.residency.certificate.aspx" }}
      keyFacts={[
        { label: "UAE personal income tax", value: "None on individuals' salary or personal income" },
        { label: "Taxable in India", value: "Indian-source income: rent, NRO interest, capital gains, Indian business income" },
        { label: "Return due (tax year 2026-27)", value: "31 July 2027 for individuals without business income and not subject to audit" },
        { label: "Treaty claim needs", value: "UAE Tax Residency Certificate plus Form 41 (Form 10F under the 1961 Act)" },
      ]}
      subServicesHeading="Which Indian tax services do NRIs in the UAE need?"
      subServices={[
        { name: "Residential Status Review", text: "Counting days in India for the year, checking the 182-day and 120-day tests, and assessing whether the deemed-residency rule could apply to you before the return is filed." },
        { name: "Indian ITR Filing", text: "Filing the return for rental income, NRO interest, capital gains and other Indian income, and reconciling TDS against Form 26AS and the Annual Information Statement." },
        { name: "India–UAE DTAA Claims", text: "Preparing the Form 10F filing and organising your UAE Tax Residency Certificate so treaty relief can be claimed where an article of the India–UAE DTAA applies." },
        { name: "NRE, NRO and FCNR Review", text: "Checking that NRE and FCNR interest is treated as exempt, that NRO interest is reported, and that excess TDS on NRO deposits is claimed back as a refund." },
        { name: "Chennai Property Sale and TDS", text: "Lower-deduction certificate, capital gains computation and Form 15CA/15CB when you sell property in Chennai or elsewhere in Tamil Nadu." },
        { name: "Return-to-India Planning", text: "Planning the year you move back from the Gulf so that RNOR status, the timing of UAE end-of-service gratuity and the conversion of NRE deposits are handled in the right order." },
      ]}
      howTo={{
        heading: "How do NRIs in the UAE file an Indian tax return?",
        steps: [
          { name: "Share your passport travel dates", text: "Send the dates you entered and left India during the financial year, from your passport stamps or the e-gate record. We use these to count days for the residential status tests." },
          { name: "Send bank and income statements", text: "Share NRO, NRE and FCNR statements, interest certificates, rent receipts from your Chennai tenant, any property sale papers, and the broker’s capital gains statement for Indian shares or mutual funds." },
          { name: "Obtain your UAE Tax Residency Certificate", text: "If a treaty claim is needed, apply for the Tax Residency Certificate through the Federal Tax Authority’s EmaraTax portal. We then file Form 10F on the Indian e-filing portal using the certificate details." },
          { name: "Review the draft computation", text: "We share a computation showing your status, each income head, TDS already deducted, any DTAA relief and the resulting tax payable or refund, and walk you through it on a video call in UAE working hours." },
          { name: "File and e-verify", text: "After your approval we file the return, and you e-verify it through Aadhaar OTP, net banking linked to your NRO account, or a digital signature. Unverified returns are not treated as validly filed." },
          { name: "Track the refund and notices", text: "We monitor processing, follow up on refunds of excess TDS to your NRO account, and respond to any intimation or notice the department sends after filing." },
        ],
      }}
      faqs={[
        { question: "Is my UAE salary taxable in India?", answer: "No, not while you are a non-resident: salary for work done in the UAE and received outside India is outside the scope of Indian tax for an NRI. The position changes if you become resident, so counting your days in India each year matters. UAE salary credited directly into an Indian account is still foreign-source income, but we recommend keeping clear records of where the salary was earned and paid." },
        { question: "What is the deemed-residency rule and why does it matter for UAE residents?", answer: "Under the deemed-residency rule, an Indian citizen with Indian income above ₹15 lakh who is not liable to tax in any country by reason of residence or domicile can be treated as a resident of India, classed as RNOR. This matters for Gulf NRIs because the UAE does not tax personal income. A UAE Tax Residency Certificate and evidence of residence help, but the facts need checking each year." },
        { question: "How many days can I spend in India and remain an NRI?", answer: "As a general rule, you become resident if you spend 182 days or more in India in a financial year. For an Indian citizen or person of Indian origin visiting India, the alternative 60-day test is replaced by 120 days if Indian income exceeds ₹15 lakh, combined with 365 days over the previous four years. We count your exact days because a few extra weeks of travel can change your status." },
        { question: "Is NRE fixed deposit interest taxable in India for UAE NRIs?", answer: "No. Interest on NRE accounts and FCNR deposits is exempt from Indian tax while you are a non-resident, and no Indian TDS is deducted on it, but NRO interest is taxable and banks deduct TDS at the non-resident rate, often more than the tax actually due. Many UAE NRIs whose family members manage NRO accounts in Chennai are owed refunds of this excess TDS through their return." },
        { question: "Do I need a Tax Residency Certificate to use the India–UAE DTAA?", answer: "Yes. To claim relief under the India–UAE DTAA, you need a Tax Residency Certificate issued by the UAE Federal Tax Authority, plus Form 10F filed electronically on the Indian e-filing portal, and the benefit available then depends on the income type and the treaty article that applies. We check whether a claim is worthwhile for each income stream rather than claiming it by default." },
        { question: "I run a business in the UAE. Does UAE corporate tax affect my Indian return?", answer: "Only indirectly: UAE corporate tax at 9% applies to business profits above the threshold for financial years starting on or after 1 June 2023 and is handled separately by your UAE tax agent, while your Indian return covers your Indian income. If you control a UAE company from India or spend long periods here, we check whether Indian residency or business-connection questions arise and coordinate with your UAE adviser." },
        { question: "I am moving back to Chennai from the Gulf. What should I plan?", answer: "Plan your RNOR status first: returning NRIs often qualify as Resident but Not Ordinarily Resident for a period, during which most foreign income stays outside Indian tax, so the order in which you move, receive your end-of-service gratuity and convert your NRE and FCNR deposits matters. We help sequence these steps, including the redesignation of NRE accounts to resident accounts and the treatment of FCNR deposits, so you do not lose the benefit of the transition years by acting in the wrong order." },
        { question: "When is the Indian return due for tax year 2026-27 if I live in the UAE?", answer: "For most UAE-based NRIs, whose Indian income is rent, interest or capital gains and whose accounts are not audited, the Indian return for tax year 2026-27 is due by 31 July 2027. A belated return can be filed up to 31 December 2027, and a filed return can be revised up to 31 March 2028. Advance tax instalments fall on 15 June, 15 September and 15 December 2026 and 15 March 2027." },
        { question: "My parents manage my NRO account and Chennai flat. Who files my return?", answer: "You file it, in your own name and PAN, even if family members collect the rent and run the account. The tenant may need to deduct TDS on rent paid to an NRI, and the bank deducts TDS on NRO interest. We work with you and your family in Chennai to gather the statements, file the return and e-verify it from the UAE without either of you visiting an office." },
      ]}
      relatedQuestions={[
        { question: "How do I get a lower TDS certificate when selling my Chennai flat?", href: "/nri-property-sale-tds-chennai" },
        { question: "What does the full NRI tax service cover?", href: "/nri-tax-services" },
        { question: "How does Indian tax work for NRIs living in the UK?", href: "/nri-tax-services-uk" },
      ]}
      relatedSlugs={["nri-tax-services", "nri-property-sale-tds-chennai", "nri-tax-services-uk", "nri-tax-services-usa"]}
      relatedPosts={["nri-itr-filing", "capital-gains-tax-property-sale", "advance-tax-deadlines"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">What documents does a UAE-based NRI need for an Indian tax return?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Not every NRI needs every item. A UAE resident with only NRO interest needs far less than one selling a Chennai flat.
        This list covers the usual cases; we confirm what applies to you after the first call.
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

      <h2 className="mt-14 text-2xl text-obsidian">What are the India and UAE tax dates for 2026-27?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        From 1 April 2026 the Income-tax Act, 2025 applies, and the year is called a tax year rather than an assessment year.
        Returns for income earned up to 31 March 2026 are still filed under the 1961 Act. On the UAE side there is no
        personal income tax calendar for individuals. Dates are as stated in law and official guidance at the time of
        writing; the CBDT can extend Indian dates, so check before relying on one.
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
              <tr key={r.date + r.item}>
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
        </a>{" "}
        and{" "}
        <a href="https://u.ae/en/information-and-services/finance-and-investment/taxation" target="_blank" rel="noopener noreferrer" className={linkClass}>
          UAE Government portal on taxation
        </a>
        .
      </p>
    </ServicePageTemplate>
  );
}
