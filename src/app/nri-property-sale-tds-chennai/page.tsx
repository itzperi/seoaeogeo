import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "NRI Property Sale in Chennai: TDS & Lower TDS Cert" },
  description:
    "Selling Chennai property as an NRI? Lower TDS certificate on TRACES, capital gains, Section 54 and 54EC options, Form 15CA/15CB and repatriation from NRO.",
  alternates: { canonical: "/nri-property-sale-tds-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "NRI Property Sale in Chennai: TDS & Lower TDS Certificate",
    description:
      "TDS, the lower-deduction certificate, capital gains and repatriation for NRIs selling property in Chennai, handled remotely from Anna Nagar.",
    url: "/nri-property-sale-tds-chennai",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/nri-property-sale-tds-chennai`}
      serviceType="NRI Property Sale Tax Advisory"
      crumbLabel="NRI Property Sale TDS — Chennai"
      crumbHref="/nri-property-sale-tds-chennai"
      eyebrow="NRI Clients · Chennai Property"
      h1="Selling Property in Chennai as an NRI: TDS, Lower-Deduction Certificate & Repatriation"
      subhead="Capital gains computation, the lower or nil TDS certificate, the buyer’s TDS paperwork, Sub-Registrar coordination and Form 15CA/15CB for repatriation, for NRIs selling a flat, house or plot in Chennai from abroad."
      introHeading="How much TDS is deducted when an NRI sells property in India?"
      intro="An NRI selling Indian property usually faces TDS on the full sale price, not the profit. For property held over 24 months, that means 12.5% plus surcharge and cess on the whole consideration, unless the seller first obtains a lower or nil deduction certificate. The certificate lets the buyer deduct tax on the estimated gain."
      citation={{ label: "TRACES — Form 13 lower or nil deduction certificate FAQs", href: "https://traces61contents.tdscpc.gov.in/en/faq-taxpayer-Form-13.html" }}
      subServicesHeading="What tax work does an NRI property sale in Chennai involve?"
      subServices={[
        { name: "Capital Gains Computation", text: "Working out the holding period, cost of acquisition (including the previous owner’s cost for inherited property), improvement costs and the gain, and comparing the sale price with the guideline value." },
        { name: "Lower or Nil TDS Certificate", text: "Preparing and filing Form 13 on TRACES with the sale agreement, cost evidence and computation, and following up with the Assessing Officer until the certificate is issued to the buyer." },
        { name: "Buyer-Side TDS Support", text: "Guiding the buyer through TAN registration, TDS deposit, the quarterly Form 27Q return and the Form 16A certificate, so the credit appears correctly in the seller’s Form 26AS." },
        { name: "Section 54 and 54EC Planning", text: "Assessing whether reinvesting in a new residential house or in specified bonds reduces the tax, and building the timeline before the sale deed is registered." },
        { name: "Form 15CA/15CB and Repatriation", text: "Issuing the Form 15CB certificate, filing Form 15CA, and coordinating with your bank to remit NRO sale proceeds abroad within RBI limits." },
        { name: "ITR Filing and Refund", text: "Filing the Indian return for the year of sale, reporting the gain and exemptions, and claiming a refund where the TDS deducted exceeds the actual tax." },
      ]}
      howTo={{
        heading: "How does an NRI sell property in Chennai, step by step?",
        steps: [
          { name: "Collect title and cost documents", text: "Gather the parent documents, the original sale deed or settlement deed, the encumbrance certificate, patta, tax receipts and proof of the purchase price and any improvement costs. For inherited property, collect the legal heir or probate papers and the previous owner’s cost." },
          { name: "Agree the price and check the guideline value", text: "Compare the agreed price with the Tamil Nadu guideline value for the property. If the guideline value is higher than the price beyond a tolerance band, Section 50C may treat the guideline value as the sale consideration for capital gains." },
          { name: "Apply for the lower-deduction certificate", text: "Once the sale agreement is signed, file Form 13 on TRACES with the buyer’s details, sale agreement and computation. The certificate names the buyer and the rate, so apply well before the planned registration date." },
          { name: "Execute the sale deed at the Sub-Registrar office", text: "Sign in person at the Chennai Sub-Registrar office or through an attorney holding a Power of Attorney attested at an Indian embassy or consulate and adjudicated for stamp duty in Tamil Nadu. The buyer pays the consideration, less TDS, into your NRO account." },
          { name: "Make sure the buyer deposits TDS and files Form 27Q", text: "The buyer, using a TAN, deposits the TDS, files the quarterly Form 27Q return and issues Form 16A to you. Check that the credit reflects in your Form 26AS before filing your return." },
          { name: "Remit the proceeds and file your return", text: "We issue Form 15CB, you or we file Form 15CA, and your bank remits the money abroad. In the following filing season, the Indian return reports the gain, any Section 54 or 54EC exemption, and claims any refund due." },
        ],
      }}
      faqs={[
        { question: "Why does the lower TDS certificate make such a difference?", answer: "Without the certificate, the buyer deducts TDS on the whole sale price, so excess tax can be held until your refund is processed. With it, the buyer deducts only at the specified rate. Illustration, ignoring surcharge and cess: a ₹1.2 crore sale of a flat bought for ₹70 lakh gives a ₹50 lakh gain and ₹6.25 lakh tax at 12.5%." },
        { question: "How is capital gain on Chennai property taxed for an NRI?", answer: "Property held over 24 months gives a long-term capital gain, taxed at 12.5% without indexation for transfers on or after 23 July 2024, plus surcharge and cess. Property held 24 months or less gives a short-term gain taxed at slab rates. NRIs are taxed on the same gain as residents, but tax is collected upfront through the buyer's TDS." },
        { question: "Does the buyer need a TAN to buy property from an NRI?", answer: "Yes. When the seller is an NRI, the buyer must obtain a TAN, deposit TDS under the non-resident provisions, file the quarterly Form 27Q return and issue Form 16A. A purchase from a resident seller, by contrast, can use Form 26QB with a PAN. Many buyers do not know this, so raise it before the sale agreement is signed." },
        { question: "Can an NRI claim Section 54 or Section 54EC exemption?", answer: "Yes, NRIs can claim both. Under Section 54, the long-term gain on a residential house can be exempted by buying another house in India within one year before or two years after the sale, or building one within three years, capped at ₹10 crore. Under Section 54EC, up to ₹50 lakh can be invested in specified bonds within six months." },
        { question: "How much of the sale money can an NRI send abroad?", answer: "Sale proceeds are credited to your NRO account. You can remit up to USD 1 million per financial year from NRO balances after filing Form 15CA and, where required, a Form 15CB certificate from a Chartered Accountant. Inherited property proceeds fall within the same limit. Your bank will ask for the sale deed, tax proof and the 15CA acknowledgement." },
        { question: "Can I sell Chennai property without travelling to India?", answer: "Yes. You can sign a specific Power of Attorney in favour of a trusted person in Chennai, attested at the Indian embassy or consulate where you live. After it arrives in India it is presented for adjudication and stamp duty in Tamil Nadu, before your attorney uses it at the Sub-Registrar office. We coordinate the tax paperwork remotely." },
        { question: "What happens if the guideline value is higher than my sale price?", answer: "Section 50C may apply if the stamp duty value fixed under the Tamil Nadu guideline value exceeds the actual sale price by more than a tolerance band. That stamp duty value is then treated as the sale consideration. You can ask the Assessing Officer to refer the valuation to a Valuation Officer if you believe it is too high." },
        { question: "How long does a lower TDS certificate take, and when should I apply?", answer: "Apply as soon as the sale agreement is signed and the buyer's PAN and TAN details are known. Processing time depends on the Assessing Officer and how complete the application is, so build in several weeks before the planned registration date. A clear computation, cost evidence and the sale agreement reduce follow-up queries." },
      ]}
      relatedQuestions={[
        { question: "Do NRIs in the UAE pay tax in India on a Chennai property sale?", href: "/nri-tax-services-uae" },
        { question: "How do I claim UK credit for Indian tax paid on a property gain?", href: "/nri-tax-services-uk" },
        { question: "How is an Indian property sale reported for US tax purposes?", href: "/nri-tax-services-usa" },
      ]}
      relatedSlugs={["nri-tax-services", "nri-tax-services-uae", "nri-tax-services-uk", "nri-tax-services-usa"]}
    />
  );
}
