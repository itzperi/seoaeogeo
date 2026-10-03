import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

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
      subServicesHeading="What we handle for NRIs in the UAE"
      subServices={[
        { name: "Residential Status Review", text: "Counting days in India for the year, checking the 182-day and 120-day tests, and assessing whether the deemed-residency rule could apply to you before the return is filed." },
        { name: "Indian ITR Filing", text: "Filing the return for rental income, NRO interest, capital gains and other Indian income, and reconciling TDS against Form 26AS and the Annual Information Statement." },
        { name: "India–UAE DTAA Claims", text: "Preparing the Form 10F filing and organising your UAE Tax Residency Certificate so treaty relief can be claimed where an article of the India–UAE DTAA applies." },
        { name: "NRE, NRO and FCNR Review", text: "Checking that NRE and FCNR interest is treated as exempt, that NRO interest is reported, and that excess TDS on NRO deposits is claimed back as a refund." },
        { name: "Chennai Property Sale and TDS", text: "Lower-deduction certificate, capital gains computation and Form 15CA/15CB when you sell property in Chennai or elsewhere in Tamil Nadu." },
        { name: "Return-to-India Planning", text: "Planning the year you move back from the Gulf so that RNOR status, the timing of UAE end-of-service gratuity and the conversion of NRE deposits are handled in the right order." },
      ]}
      howTo={{
        heading: "How we file your Indian return from the UAE",
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
        { question: "Is my UAE salary taxable in India?", answer: "No, not while you are a non-resident. Salary for work done in the UAE and received outside India is outside the scope of Indian tax for an NRI. The position changes if you become resident, so counting your days in India each year matters. UAE salary credited directly into an Indian account is still foreign-source income, but we recommend keeping clear records of where the salary was earned and paid." },
        { question: "What is the deemed-residency rule and why does it matter for UAE residents?", answer: "Under the deemed-residency rule, an Indian citizen with Indian income above ₹15 lakh who is not liable to tax in any country by reason of residence or domicile can be treated as a resident of India, classed as RNOR. This matters for Gulf NRIs because the UAE does not tax personal income. A UAE Tax Residency Certificate and evidence of residence help, but the facts need checking each year." },
        { question: "How many days can I spend in India and remain an NRI?", answer: "As a general rule, you become resident if you spend 182 days or more in India in a financial year. For an Indian citizen or person of Indian origin visiting India, the alternative 60-day test is replaced by 120 days if Indian income exceeds ₹15 lakh, combined with 365 days over the previous four years. We count your exact days because a few extra weeks of travel can change your status." },
        { question: "Is NRE fixed deposit interest taxable in India for UAE NRIs?", answer: "No. Interest on NRE accounts and FCNR deposits is exempt in India while you are a non-resident, and there is no Indian TDS on it. NRO interest is taxable and banks deduct TDS at the non-resident rate, often more than the tax actually due. Many UAE NRIs whose family members manage NRO accounts in Chennai are owed refunds of this excess TDS through their return." },
        { question: "Do I need a Tax Residency Certificate to use the India–UAE DTAA?", answer: "Yes. To claim relief under the India–UAE DTAA, you need a Tax Residency Certificate issued by the UAE Federal Tax Authority, plus Form 10F filed electronically on the Indian e-filing portal. The treaty benefit available depends on the income type and the article that applies, so we check whether a claim is worthwhile for each income stream rather than claiming it by default." },
        { question: "I run a business in the UAE. Does UAE corporate tax affect my Indian return?", answer: "Only indirectly. UAE corporate tax at 9% applies to business profits above the threshold for financial years starting on or after 1 June 2023, and that is handled by your UAE tax agent. Your Indian return covers your Indian income. If you control a UAE company from India or spend long periods here, we check whether Indian residency or business-connection questions arise and coordinate with your UAE adviser." },
        { question: "I am moving back to Chennai from the Gulf. What should I plan?", answer: "Plan your RNOR status first. Returning NRIs often qualify as Resident but Not Ordinarily Resident for a period, during which most foreign income stays outside Indian tax. We help sequence your move date, end-of-service gratuity receipt, the redesignation of NRE accounts to resident accounts and the treatment of FCNR deposits, so you do not lose the benefit of the transition years by acting in the wrong order." },
        { question: "My parents manage my NRO account and Chennai flat. Who files my return?", answer: "You file it, in your own name and PAN, even if family members collect the rent and run the account. The tenant may need to deduct TDS on rent paid to an NRI, and the bank deducts TDS on NRO interest. We work with you and your family in Chennai to gather the statements, file the return and e-verify it from the UAE without either of you visiting an office." },
      ]}
      relatedQuestions={[
        { question: "How do I get a lower TDS certificate when selling my Chennai flat?", href: "/nri-property-sale-tds-chennai" },
        { question: "What does the full NRI tax service cover?", href: "/nri-tax-services" },
        { question: "How does Indian tax work for NRIs living in the UK?", href: "/nri-tax-services-uk" },
      ]}
      relatedSlugs={["nri-tax-services", "nri-property-sale-tds-chennai", "nri-tax-services-uk", "nri-tax-services-usa"]}
    />
  );
}
