import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "LLP Registration in Chennai | Limited Liability Partnership",
  description:
    "LLP registration in Chennai — DPIN/DSC, name reservation, FiLLiP filing, and LLP Agreement drafting for professional and services businesses, by C S Rushil & Co.",
  alternates: { canonical: "/llp-registration-chennai" },
  openGraph: {
    title: "LLP Registration in Chennai",
    description: "End-to-end Limited Liability Partnership registration for Chennai founders.",
    url: "/llp-registration-chennai",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/llp-registration-chennai`}
      serviceType="LLP Registration"
      crumbLabel="LLP Registration"
      crumbHref="/llp-registration-chennai"
      eyebrow="LLP Registration · Chennai"
      h1="LLP Registration in Chennai"
      subhead="Limited liability with partnership-style flexibility — DPIN, name reservation, FiLLiP filing, and LLP Agreement drafting handled end-to-end."
      introHeading="What is an LLP and who is it for?"
      intro="A Limited Liability Partnership (LLP) is a hybrid business structure, registered under the LLP Act, 2008, that combines the operational flexibility of a partnership with limited liability protection for its partners — no partner is personally liable for another partner's misconduct or the LLP's debts beyond their agreed contribution. This makes it a common choice for professional services firms, consultancies, and small partnerships that want liability protection without the higher compliance burden and share-capital structure of a Private Limited Company. LLPs cannot raise equity funding from investors the way a Private Limited Company can, which is the main reason startups planning to raise venture capital choose Private Limited instead."
      subServicesHeading="What's included"
      subServices={[
        { name: "Designated Partner Identification (DPIN/DIN)", text: "Obtaining DPIN and Class 3 Digital Signature Certificates for all designated partners." },
        { name: "Name Reservation (RUN-LLP)", text: "Checking name availability against the MCA and trademark databases and reserving your LLP's name." },
        { name: "FiLLiP Filing", text: "Filing the integrated incorporation form with the Registrar, covering incorporation, PAN, and TAN in one submission." },
        { name: "LLP Agreement Drafting", text: "Drafting the LLP Agreement defining profit-sharing ratios, partner rights and duties, and exit/admission terms — filed within 30 days of incorporation." },
        { name: "Conversion to LLP", text: "Converting an existing partnership firm or private company into an LLP, including asset transfer and re-registration of licenses." },
        { name: "Post-Registration Compliance Setup", text: "Guidance on the annual Form 8 (Statement of Account) and Form 11 (Annual Return) filing calendar every LLP must follow." },
      ]}
      faqs={[
        { question: "How many partners does an LLP need?", answer: "A minimum of 2 partners, with at least 2 designated partners who hold a DPIN and are responsible for regulatory compliance — there is no upper limit on the total number of partners, unlike a Private Limited Company's 200-shareholder cap. At least one designated partner must be a resident of India." },
        { question: "How long does LLP registration take?", answer: "With documents ready, LLP registration through FiLLiP typically takes 10–15 working days, covering DPIN/DSC issuance, name reservation, and incorporation. The LLP Agreement must then be filed separately within 30 days of incorporation — missing this specific deadline attracts its own late filing penalty even though the LLP itself is already registered." },
        { question: "What is the difference between an LLP and a Private Limited Company?", answer: "An LLP has lower compliance requirements (no mandatory statutory audit unless turnover exceeds ₹40 lakh or capital contribution exceeds ₹25 lakh) and no share-capital structure, but cannot raise equity investment from external investors the way a company can. A Private Limited Company suits businesses planning to raise funding; an LLP suits professional and services partnerships that want liability protection without that compliance overhead." },
        { question: "Is a statutory audit mandatory for an LLP?", answer: "Only if the LLP's annual turnover exceeds ₹40 lakh or its capital contribution exceeds ₹25 lakh — below both thresholds, an LLP is not required to have its accounts audited, which is one of the main compliance-cost advantages over a Private Limited Company." },
        { question: "Can an existing partnership firm convert to an LLP?", answer: "Yes. We handle conversion of partnership firms into LLPs, including the required consent of all partners, asset and liability transfer, and re-registration of GST, MSME, and bank accounts under the LLP's name and PAN." },
      ]}
      relatedSlugs={["formation-of-business-entity", "company-registration-chennai", "private-limited-company-incorporation-chennai"]}
    />
  );
}
