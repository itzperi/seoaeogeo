import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "Form 15CA and 15CB in Chennai | NRI Remittance";
const description =
  "Form 15CA and 15CB in Chennai, now Forms 145 and 146: CA certificates, DTAA review and NRO repatriation for NRIs remitting property sale proceeds abroad.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/form-15ca-15cb-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/form-15ca-15cb-chennai",
  },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";

const PARTS = [
  { part: "Part A", when: "Remittance is taxable and the total for the tax year does not exceed ₹5 lakh", needs: "No CA certificate" },
  { part: "Part B", when: "Taxable, above ₹5 lakh, and the remitter holds a lower or nil deduction certificate from the Assessing Officer (Section 395)", needs: "Assessing Officer's certificate" },
  { part: "Part C", when: "Taxable and above ₹5 lakh in the tax year", needs: "CA certificate in Form 146 (earlier 15CB), filed first" },
  { part: "Part D", when: "Remittance is not taxable in India, other than payments on the exempt list in Rule 220(3)", needs: "No CA certificate" },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/form-15ca-15cb-chennai`}
      serviceType="Form 15CA and 15CB Certification"
      crumbLabel="Form 15CA and 15CB"
      crumbHref="/form-15ca-15cb-chennai"
      parentCrumb={{ name: "NRI Tax Services", href: "/nri-tax-services" }}
      eyebrow="NRI Remittance · Chennai"
      h1="Form 15CA and 15CB in Chennai"
      subhead="Taxability review, CA certificate and remitter's declaration for money leaving India, so your bank can process the transfer without a hold."
      introHeading="What are Form 15CA and 15CB, and what are they called now?"
      intro="Form 15CA and 15CB in Chennai are what your bank asks for before money is sent to a non-resident. From 1 April 2026 they are Form 145 (the remitter's declaration, earlier 15CA) and Form 146 (the CA certificate, earlier 15CB) under the Income-tax Act, 2025. A CA certificate is needed once taxable remittances exceed ₹5 lakh in a tax year."
      citation={{
        label: "Income Tax Department: Form 145 (earlier Form 15CA) user manual (incometax.gov.in)",
        href: "https://www.incometax.gov.in/iec/foportal/newformpage/forms/form145-UM",
      }}
      keyFacts={[
        { label: "Forms (from 1 April 2026)", value: "Form 145 (earlier 15CA) and Form 146 (earlier 15CB), filed on the income tax e-filing portal" },
        { label: "When a CA certificate is needed", value: "Taxable remittance above ₹5 lakh in the tax year, unless the Assessing Officer has issued a certificate" },
        { label: "Who files", value: "The person making the payment to the non-resident: the NRI remitting their own funds, a buyer, or an Indian business paying a foreign party" },
        { label: "Timing", value: "Form 145 is filed for each remittance before the money is sent; Form 146 must be filed first where Part C applies" },
        { label: "NRO repatriation limit", value: "Up to USD 1 million per financial year from NRO balances and sale proceeds of assets (RBI)" },
      ]}
      subServicesHeading="What do we do for Form 145 and Form 146?"
      subServices={[
        { name: "Taxability review", text: "We check whether the payment is taxable in India, under which provision, and whether TDS was deducted at the right rate before anything is certified." },
        { name: "DTAA analysis", text: "Where a treaty rate is lower, we review the tax residency certificate and Form 41 (earlier Form 10F) so the treaty position in Form 146 is supportable." },
        { name: "CA certificate in Form 146", text: "Prepared and signed with a digital signature after reviewing the source of funds, TDS challans and the nature of the remittance." },
        { name: "Form 145 filing", text: "The correct part (A, B, C or D) filed from your login, with the acknowledgement your bank needs." },
        { name: "NRO to NRE or abroad", text: "Documentation for repatriating NRO balances, rent, pension and inheritance within the USD 1 million annual limit." },
        { name: "Property sale proceeds", text: "Linking the sale deed, TDS certificates, capital gains computation and bank trail so the sale money can be remitted." },
      ]}
      howTo={{
        heading: "How does the Form 145 and 146 process work?",
        steps: [
          { name: "Share the remittance details", text: "Send the amount, purpose, recipient's country and the source of funds, such as NRO statement, sale deed or invoice." },
          { name: "Confirm taxability and TDS", text: "We decide whether tax was due, check that it was deducted and deposited, and note any treaty benefit." },
          { name: "File Form 146 if required", text: "For taxable remittances above ₹5 lakh, the CA certificate is filed on the portal and accepted from your login." },
          { name: "File Form 145", text: "Part C is filed using the Form 146 acknowledgement; Parts A, B or D are filed directly where they apply." },
          { name: "Submit to your bank", text: "You give the acknowledgements, Form A2 and the bank's own forms to your branch, and the bank processes the remittance." },
        ],
      }}
      faqs={[
        { question: "Have Form 15CA and Form 15CB been replaced?", answer: "Yes. For remittances from 1 April 2026, Form 15CA is replaced by Form 145 and Form 15CB by Form 146 under the Income-tax Act, 2025 and the Income-tax Rules, 2026. The structure is largely the same: a remitter's declaration in four parts and a CA certificate for larger taxable payments." },
        { question: "When do I need a CA certificate in Form 146?", answer: "You need Form 146 when the remittance is taxable in India and the total paid to non-residents in the tax year exceeds ₹5 lakh, and you do not hold a certificate from the Assessing Officer. The CA files it first, and its acknowledgement is used to fill Part C of Form 145." },
        { question: "Which part of Form 145 applies to me?", answer: "Part A applies to taxable remittances up to ₹5 lakh in the year. Part B applies above ₹5 lakh when the Assessing Officer has issued a certificate. Part C applies above ₹5 lakh with a CA certificate in Form 146. Part D applies when the payment is not taxable in India." },
        { question: "How much can an NRI repatriate from an NRO account?", answer: "An NRI or PIO can remit up to USD 1 million per financial year from NRO balances, sale proceeds of assets in India, or assets received by inheritance, subject to tax being paid. Form 145 and, where required, Form 146 are filed for the remittance, and the bank asks for supporting documents." },
        { question: "Can I send the sale money abroad after selling property in Chennai?", answer: "Yes, once tax is settled. The buyer deducts TDS when paying you, and the proceeds go to your NRO account. We prepare the capital gains computation and Form 146 so the bank can remit within the USD 1 million annual limit. A lower deduction certificate before the sale reduces the TDS blocked." },
        { question: "Does a tax treaty (DTAA) reduce the tax on my remittance?", answer: "It can. If the treaty with your country of residence gives a lower rate or exempts the income, that position is stated in Form 146. You need a tax residency certificate from that country and Form 41 (earlier Form 10F). The treaty rate applies only if all its conditions are met." },
        { question: "Is Form 145 needed for every payment abroad?", answer: "No. Payments on the exempt list in Rule 220(3), such as certain personal and trade-related remittances, need no form. For other payments that are not taxable in India, only Part D is filed. Your bank will tell you if it needs the acknowledgement." },
      ]}
      relatedSlugs={["nri-tax-services", "nri-property-sale-tds-chennai", "nri-tax-services-uae"]}
      relatedPosts={["nri-itr-filing", "capital-gains-tax-property-sale", "tds-return-filing-deadlines"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">The four parts of Form 145</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The requirement comes from Section 397(3)(d) of the Income-tax Act, 2025 (earlier Section 195(6)), which asks anyone
        paying a non-resident to report the payment, and Rule 220 of the Income-tax Rules, 2026. Which part you file depends
        on taxability and the amount.
      </p>
      <div className="mt-6 max-w-3xl overflow-x-auto rounded-cards border border-ash">
        <table className="w-full text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className="px-4 py-3 font-medium">Part</th>
              <th className="px-4 py-3 font-medium">When it applies</th>
              <th className="px-4 py-3 font-medium">Certificate needed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {PARTS.map((r) => (
              <tr key={r.part}>
                <td className="px-4 py-3 align-top font-medium text-obsidian">{r.part}</td>
                <td className="px-4 py-3 align-top text-slate">{r.when}</td>
                <td className="px-4 py-3 align-top text-slate">{r.needs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Remittances made up to 31 March 2026 were covered by Forms 15CA and 15CB under the 1961 Act. If a bank or an older
        checklist still asks for &quot;15CA/15CB&quot;, Forms 145 and 146 are what it now means.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Related NRI services</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Remittance is usually the last step. If you are selling property, start with our{" "}
        <Link href="/nri-property-sale-tds-chennai" className={linkClass}>
          NRI property sale TDS service in Chennai
        </Link>{" "}
        for the lower deduction certificate and capital gains. For your annual Indian return, treaty claims and refunds,
        see{" "}
        <Link href="/nri-tax-services" className={linkClass}>
          NRI tax services
        </Link>
        . Businesses paying foreign vendors also need TDS under Section 393(2), reported in{" "}
        <Link href="/tds-return-filing-chennai" className={linkClass}>
          quarterly TDS returns (Form 144)
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
