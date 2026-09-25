import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Company Registration in Chennai | Private Limited & LLP" },
  description:
    "Company registration in Chennai — Private Limited Company, LLP, and OPC — name approval, MCA/SPICe+ filing, and certificate of incorporation by C S Rushil & Co.",
  alternates: { canonical: "/company-registration-chennai" },
  openGraph: {
    title: "Company Registration in Chennai",
    description: "Private Limited, LLP, and OPC company registration for Chennai founders.",
    url: "/company-registration-chennai",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/company-registration-chennai`}
      serviceType="Company Registration"
      crumbLabel="Company Registration"
      crumbHref="/company-registration-chennai"
      eyebrow="Company Registration · Chennai"
      h1="Company Registration in Chennai"
      subhead="Register your company the right way the first time — name approval, MCA filing, and post-incorporation compliance handled end-to-end."
      introHeading="What does company registration involve?"
      intro="Registering a company in India means securing Digital Signature Certificates (DSC) and Director Identification Numbers (DIN) for promoters, reserving a unique name with the MCA, and filing the incorporation application (SPICe+ for companies, FiLLiP for LLPs) along with the Memorandum and Articles of Association. Done correctly, this also bundles PAN, TAN, and often GST and bank account setup into a single filing window, which is why document readiness upfront materially shortens the timeline."
      citation={{ label: "Ministry of Corporate Affairs (MCA)", href: "https://www.mca.gov.in/" }}
      subServicesHeading="Structures we register"
      subServices={[
        { name: "Private Limited Company", text: "The most common structure for startups and growing businesses seeking investment — limited liability with a formal share-capital structure." },
        { name: "Limited Liability Partnership (LLP)", text: "Limited liability with partnership-style flexibility — popular for professional services and small partnerships." },
        { name: "One Person Company (OPC)", text: "A corporate structure for solo founders who want limited liability without needing a second shareholder." },
        { name: "Name Approval (RUN/SPICe+ Part A)", text: "Checking name availability and filing the reservation application before the main incorporation filing." },
        { name: "Digital Signature & DIN", text: "Obtaining Class 3 DSCs and Director Identification Numbers for all proposed directors/designated partners." },
        { name: "Post-Incorporation Compliance", text: "First board meeting, statutory registers, bank account opening support, and GST registration as follow-on steps." },
      ]}
      faqs={[
        { question: "How long does company registration take in Chennai?", answer: "With documents ready, Private Limited and LLP registration typically completes in 7–15 working days, depending on MCA processing times and whether the RUN name-approval step needs a resubmission." },
        { question: "What's the difference between Private Limited, LLP, and OPC?", answer: "A Private Limited Company suits businesses planning to raise equity investment and needs at least two directors/shareholders. An LLP suits professional and services businesses wanting partnership flexibility with liability protection. An OPC suits a single founder wanting a corporate structure without a co-founder." },
        { question: "What is SPICe+ and do I need a separate application for PAN/TAN?", answer: "SPICe+ (INC-32) is the MCA's integrated incorporation form — PAN and TAN are auto-generated as part of the same filing, so no separate application is needed for a new company." },
        { question: "Can I register a company from outside Chennai and still work with you?", answer: "Yes. MCA filings are fully online; we coordinate document collection, DSC issuance, and filing remotely for founders anywhere, with the registered office typically set up in Chennai or wherever your operations are based." },
        { question: "Do you offer a fixed quote for company registration?", answer: "Yes — see our CA fees page for indicative pricing, or contact us for a fixed quote based on your specific structure and number of directors." },
      ]}
      relatedQuestions={[
        { question: "What's involved specifically in Private Limited incorporation?", href: "/private-limited-company-incorporation-chennai" },
        { question: "How do I choose the right business entity before registering?", href: "/formation-of-business-entity" },
        { question: "Do I need GST registration right after incorporation?", href: "/gst-registration-chennai" },
      ]}
      relatedSlugs={["private-limited-company-incorporation-chennai", "formation-of-business-entity", "gst-registration-chennai"]}
    />
  );
}
