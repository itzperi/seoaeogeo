import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

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
        { question: "Can you give advice on my UK tax position?", answer: "No. We are a Chartered Accountancy firm in India and advise on Indian tax. UK tax advice, including residence, the foreign income and gains regime, and Self Assessment, stays with your UK accountant or tax adviser. We coordinate with them directly where you authorise it, so the Indian and UK returns tell the same story about the same income." },
      ]}
      relatedQuestions={[
        { question: "What TDS applies when I sell my Chennai property from the UK?", href: "/nri-property-sale-tds-chennai" },
        { question: "How is Indian tax handled for NRIs in the USA?", href: "/nri-tax-services-usa" },
        { question: "What does the full NRI tax service cover?", href: "/nri-tax-services" },
      ]}
      relatedSlugs={["nri-tax-services", "nri-property-sale-tds-chennai", "nri-tax-services-usa", "nri-tax-services-uae"]}
    />
  );
}
