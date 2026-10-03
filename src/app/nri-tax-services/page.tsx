import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "NRI Tax Services in India | UAE, UK & USA NRIs" },
  description:
    "Indian tax filing, DTAA claims, property-sale TDS and repatriation for NRIs in the UAE, UK, USA and elsewhere, handled remotely by a Chennai CA firm.",
  alternates: { canonical: "/nri-tax-services" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "NRI Tax Services in India — UAE, UK & USA",
    description: "Indian tax, DTAA and repatriation support for NRIs, handled remotely from Chennai.",
    url: "/nri-tax-services",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/nri-tax-services`}
      serviceType="NRI Tax Advisory"
      crumbLabel="NRI Tax Services"
      crumbHref="/nri-tax-services"
      eyebrow="NRI Clients · UAE · UK · USA"
      h1="NRI Tax Services in India"
      subhead="Indian tax returns, DTAA claims, property-sale TDS and repatriation for non-resident Indians, with separate guidance for the UAE, the UK and the USA. Handled remotely from our Anna Nagar office in Chennai."
      introHeading="Do NRIs need to file an income tax return in India?"
      intro="Yes, if they earn income in India above the basic exemption limit, or have tax deducted they want refunded. Rent from a Chennai flat, interest on an NRO account, capital gains on shares or property, and dividends are all taxable in India even when you live abroad. What changes by country is how that income is treated where you live: the UAE has no personal income tax, the UK taxes residents on worldwide income, and the US taxes citizens wherever they live. Each country page below explains the difference."
      citation={{ label: "Income Tax Department — Non-resident individuals", href: "https://www.incometax.gov.in/" }}
      subServicesHeading="Choose the guidance for where you live"
      subServices={[
        { name: "NRIs in the UAE", text: "No UAE income tax on salary, so the questions are different: India–UAE DTAA claims with a Tax Residency Certificate, and the deemed-residency rule for Indian citizens with Indian income above ₹15 lakh." },
        { name: "NRIs in the UK", text: "Indian rent, interest and gains also go on your UK Self Assessment. We prepare the Indian return and the tax-paid evidence your UK accountant needs to claim credit under the India–UK DTAA." },
        { name: "NRIs in the USA", text: "US citizens and green-card holders report worldwide income. We file the Indian return and give your US CPA the Indian tax and account figures for the foreign tax credit, FBAR and FATCA." },
        { name: "Selling property in Chennai", text: "The buyer must deduct TDS on the full sale price unless you hold a lower-deduction certificate. We apply for the certificate, compute the capital gain and handle Form 15CA/15CB for repatriation." },
        { name: "NRE, NRO and FCNR accounts", text: "NRE and FCNR interest is exempt in India while you remain non-resident; NRO interest is taxable and tax is deducted at source. We reconcile the TDS against your return and claim refunds where too much was deducted." },
        { name: "Returning to India", text: "Moving back changes your residential status over the following years. We plan the RNOR (resident but not ordinarily resident) window so foreign income and accounts are handled correctly in the transition years." },
      ]}
      howTo={{
        heading: "How an NRI engagement works, start to finish",
        steps: [
          { name: "Status check", text: "We confirm your residential status for the year from your days in India, citizenship and Indian income — this decides what India can tax." },
          { name: "Document collection", text: "You upload Form 26AS, AIS, bank and NRO statements, rent agreements or sale deeds to a shared folder; nothing needs to be couriered." },
          { name: "Computation and treaty review", text: "We compute Indian taxable income, apply DTAA relief where it changes the Indian tax, and list the TDS to be claimed back." },
          { name: "Review call", text: "A video call at a time that suits your time zone to walk through the computation before anything is filed." },
          { name: "Filing and refund follow-up", text: "We file the return, track the refund, and answer any intimation or notice that follows." },
          { name: "Figures for your overseas adviser", text: "You get the Indian tax paid, income summary and certificates your UK, US or UAE adviser needs for your return there." },
        ],
      }}
      faqs={[
        { question: "Who counts as an NRI for Indian income tax?", answer: "Broadly, you are a non-resident if you spent fewer than 182 days in India in the financial year. A lower 120-day test applies to Indian citizens and persons of Indian origin visiting India whose Indian income exceeds ₹15 lakh, and a separate deemed-residency rule can apply to citizens not taxed anywhere else. We check your exact days and income before filing." },
        { question: "Is NRE account interest taxable in India?", answer: "Interest on NRE and FCNR deposits is exempt from Indian income tax while you remain a non-resident under the Income-tax Act. Interest on an NRO account is taxable in India, and the bank deducts tax at source; if your actual liability is lower, the excess can be claimed back by filing a return." },
        { question: "Do I still need an Indian return if TDS was already deducted?", answer: "Often yes. TDS on NRO interest, rent or a property sale is usually deducted at a high flat rate, so filing a return is how you claim back tax deducted beyond your real liability. A return is also needed to carry forward losses or report capital gains correctly." },
        { question: "Can you handle everything without me travelling to India?", answer: "Yes. Documents are shared digitally, reviews happen on video calls at a time that suits your time zone, and returns are e-filed and verified online. For property sales, a Power of Attorney attested at an Indian embassy or consulate lets someone in Chennai sign at the Sub-Registrar office if you cannot travel." },
        { question: "Do you advise on UK, US or UAE tax as well?", answer: "We advise on the Indian side only. We coordinate with your local accountant or CPA and give them the Indian figures, tax-paid evidence and DTAA position they need, so your overseas return and your Indian return tell the same story." },
        { question: "Which tax law applies after the new Income-tax Act?", answer: "The Income-tax Act, 2025 applies from 1 April 2026 and renumbers most sections. Income for financial year 2025-26 and earlier is still assessed under the 1961 Act, so notices and certificates for those years quote the old section numbers. We map both for you." },
      ]}
      relatedQuestions={[
        { question: "How do I reduce TDS when selling my Chennai flat?", href: "/nri-property-sale-tds-chennai" },
        { question: "I live in Dubai — do I pay tax in India?", href: "/nri-tax-services-uae" },
        { question: "How does my US CPA use my Indian tax figures?", href: "/nri-tax-services-usa" },
      ]}
      relatedSlugs={["nri-tax-services-uae", "nri-tax-services-uk", "nri-tax-services-usa", "nri-property-sale-tds-chennai"]}
    />
  );
}
