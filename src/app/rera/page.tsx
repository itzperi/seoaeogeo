import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "RERA Compliance in Chennai | TNRERA CA Certificates" },
  description:
    "RERA compliance in Chennai for Tamil Nadu developers and agents: project registration, quarterly progress reports, CA certificates and annual audits.",
  alternates: { canonical: "/rera" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/rera`}
      serviceType="Real Estate Compliance"
      crumbLabel="RERA Compliance"
      crumbHref="/rera"
      eyebrow="Real Estate · Chennai"
      h1="RERA Compliance in Chennai"
      subhead="Project registration, quarterly filings, CA certificates for escrow withdrawals, and ongoing compliance advisory for real estate developers and agents under TNRERA — from our Anna Nagar office."
      introHeading="What is RERA compliance in Chennai?"
      intro="The Real Estate (Regulation and Development) Act, 2016 requires promoters of qualifying real estate projects to register with the state regulatory authority (TNRERA in Tamil Nadu) and file periodic disclosures on construction progress, funds utilisation, and project timelines. Non-compliance carries financial penalties and can freeze project sales."
      citation={{ label: "Tamil Nadu RERA (TNRERA): Frequently Asked Questions", href: "https://rera.tn.gov.in/homePageFiles/RERA-FAQs.pdf" }}
      howTo={{
        heading: "What does the RERA compliance cycle involve for a registered project?",
        steps: [
          { name: "Project registration", text: "Before any advertising, marketing, or booking, the project is registered with TNRERA along with the required land title, approval, and disclosure documents." },
          { name: "Escrow account setup", text: "A separate project-specific bank account (commonly called the RERA escrow account) is opened to receive 70% of amounts collected from buyers, used only for that project's construction and land costs." },
          { name: "CA certification for escrow withdrawal", text: "Each withdrawal from the separate account must be certified by a practising Chartered Accountant, together with an engineer and an architect, as being in proportion to the percentage of project completion — the CA certifies the land and construction costs incurred, and many promoters aren't aware this is a recurring, not one-time, requirement." },
          { name: "Quarterly Progress Report filing", text: "Construction and financial progress is reported to TNRERA within 15 days of the end of every quarter until the project receives its completion certificate." },
          { name: "Extension or amendment filings", text: "If the project timeline changes, an extension or amendment application is filed with TNRERA rather than allowing the registration to lapse." },
        ],
      }}
      subServicesHeading="Which RERA services do we provide?"
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
        { question: "What is the 70% escrow account requirement?", answer: "Promoters must deposit 70% of amounts collected from buyers into a separate bank account for the project (commonly called the RERA escrow account), to be used only for construction and land costs of that specific project." },
        { question: "How often must progress reports be filed?", answer: "Quarterly Progress Reports (QPRs) must be filed with TNRERA every quarter, within 15 days of the quarter end, until the project receives its completion certificate. Promoters also file an annual audited statement of accounts (Form-7) certified by a practising Chartered Accountant, within six months of the end of each financial year." },
        { question: "Do real estate agents need separate RERA registration?", answer: "Yes, agents facilitating sale or purchase of RERA-registered projects must independently register as real estate agents under RERA." },
        { question: "Do I need a CA certificate every time I withdraw from the RERA escrow account?", answer: "Yes. Every withdrawal from the project's separate RERA account must be certified by a practising Chartered Accountant, along with an engineer and an architect, confirming the amount withdrawn is in proportion to the percentage of project completion. It is a recurring requirement for each withdrawal, not a one-time certificate at account opening — and one of the most overlooked parts of RERA compliance." },
      ]}
      relatedQuestions={[
        { question: "What entity structure should a real estate developer register as?", href: "/company-registration-chennai" },
        { question: "How is escrow account income taxed for a project?", href: "/direct-tax" },
        { question: "Does a RERA-registered company still need ROC filings?", href: "/roc-compliances" },
      ]}
      relatedSlugs={["company-registration-chennai", "direct-tax", "roc-compliances"]}
    />
  );
}
