import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "RERA Registration & Compliance in Chennai",
  description:
    "RERA project registration, quarterly filings, and compliance advisory for real estate developers, promoters, and agents in Tamil Nadu.",
  alternates: { canonical: "/rera" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/rera`}
      serviceType="Real Estate Compliance"
      crumbLabel="RERA Compliance"
      crumbHref="/rera"
      eyebrow="Real Estate · Tamil Nadu"
      h1="RERA Compliance Services"
      subhead="Project registration, quarterly filings, and ongoing compliance advisory for real estate developers and agents under TNRERA."
      introHeading="What is RERA compliance?"
      intro="The Real Estate (Regulation and Development) Act, 2016 requires promoters of qualifying real estate projects to register with the state regulatory authority (TNRERA in Tamil Nadu) and file periodic disclosures on construction progress, funds utilisation, and project timelines. Non-compliance carries financial penalties and can freeze project sales."
      citation={{ label: "Tamil Nadu RERA (TNRERA)", href: "https://www.tnrera.in/" }}
      subServicesHeading="Our RERA services"
      subServices={[
        { name: "Project Registration", text: "Preparation and filing of RERA project registration with required disclosures and documentation." },
        { name: "Quarterly Progress Reports (QPR)", text: "Timely filing of construction and financial progress updates." },
        { name: "Escrow Account Compliance", text: "Advisory on the mandatory 70% escrow account rule for project funds." },
        { name: "Agent Registration", text: "RERA registration for real estate agents and brokers." },
        { name: "Compliance Audits", text: "Periodic review of project compliance status to avoid penalties." },
        { name: "Extension & Amendment Filings", text: "Applications for project timeline extensions or registration amendments." },
      ]}
      faqs={[
        { question: "Which real estate projects need RERA registration?", answer: "Projects with land area exceeding 500 sq. metres or more than 8 apartments, where a completion certificate hasn't been received, must register with TNRERA before advertising, marketing, or selling units." },
        { question: "What is the 70% escrow account requirement?", answer: "Promoters must deposit 70% of amounts collected from buyers into a separate escrow account, to be used only for construction and land costs of that specific project." },
        { question: "How often must progress reports be filed?", answer: "Quarterly Progress Reports (QPRs) must be filed with TNRERA every quarter until the project receives its completion certificate." },
        { question: "Do real estate agents need separate RERA registration?", answer: "Yes, agents facilitating sale or purchase of RERA-registered projects must independently register as real estate agents under RERA." },
      ]}
      relatedQuestions={[
        { question: "What entity structure should a real estate developer register as?", href: "/formation-of-business-entity" },
        { question: "How is escrow account income taxed for a project?", href: "/direct-tax" },
        { question: "Does a RERA-registered company still need ROC filings?", href: "/roc-compliances" },
      ]}
      relatedSlugs={["formation-of-business-entity", "direct-tax", "roc-compliances"]}
    />
  );
}
