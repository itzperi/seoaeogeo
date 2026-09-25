import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Transfer Pricing Audit in Chennai" },
  description:
    "Transfer pricing audit and documentation for related-party transactions — Form 3CEB, arm's-length pricing, from a Chennai CA firm.",
  alternates: { canonical: "/transfer-pricing-audit" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Transfer Pricing Audit in Chennai",
    description: "Transfer pricing documentation and Form 3CEB compliance for Chennai businesses with related-party transactions.",
    url: "/transfer-pricing-audit",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/transfer-pricing-audit`}
      serviceType="Transfer Pricing Audit"
      crumbLabel="Transfer Pricing Audit"
      crumbHref="/transfer-pricing-audit"
      eyebrow="Transfer Pricing · Chennai"
      h1="Transfer Pricing Audit in Chennai"
      subhead="Arm's-length pricing documentation and Form 3CEB compliance for businesses with related-party or cross-border transactions."
      introHeading="What is a transfer pricing audit?"
      intro="A transfer pricing audit examines transactions between related or associated enterprises — a parent company and subsidiary, sister concerns, or entities under common control — to confirm they're priced at arm's length, the same rate an unrelated third party would charge. Under the Income Tax Act, businesses with specified domestic transactions above prescribed thresholds, or any international transaction with an associated enterprise regardless of value, must obtain a transfer pricing report in Form 3CEB from a Chartered Accountant and maintain contemporaneous documentation justifying the pricing method used."
      citation={{ label: "Income Tax Department — Transfer Pricing", href: "https://www.incometax.gov.in/" }}
      howTo={{
        heading: "How a transfer pricing audit engagement proceeds",
        steps: [
          { name: "Transaction identification", text: "We map every transaction with associated enterprises — management fees, royalties, loans, goods and services transfers — to identify what falls under transfer pricing rules." },
          { name: "Method selection and benchmarking", text: "We select the appropriate pricing method (CUP, RPM, CPM, TNMM, or PSM) and benchmark your related-party pricing against comparable independent transactions." },
          { name: "Documentation preparation", text: "Contemporaneous documentation justifying the arm's-length nature of each transaction is prepared and maintained as the Income Tax Act requires." },
          { name: "Form 3CEB certification", text: "The transfer pricing audit report is certified and filed in Form 3CEB, ahead of your income tax return due date." },
          { name: "Ongoing exposure review", text: "For recurring transactions, we periodically review whether an Advance Pricing Agreement is worth pursuing for longer-term pricing certainty." },
        ],
      }}
      subServicesHeading="What's included"
      subServices={[
        { name: "Form 3CEB Certification", text: "Mandatory transfer pricing audit report and certification for international and specified domestic transactions." },
        { name: "Transfer Pricing Documentation", text: "Contemporaneous documentation justifying the arm's-length nature of related-party pricing, maintained as the law requires." },
        { name: "Method Selection & Benchmarking", text: "Selecting the appropriate transfer pricing method (CUP, RPM, CPM, TNMM, or PSM) and benchmarking against comparable independent transactions." },
        { name: "Associated Enterprise Transaction Review", text: "Reviewing intercompany transactions — management fees, royalties, loans, and goods/services transfers — for transfer pricing exposure." },
        { name: "Advance Pricing Agreement Advisory", text: "Guidance on whether an Advance Pricing Agreement (APA) is worth pursuing for long-term pricing certainty on recurring transactions." },
        { name: "Transfer Pricing Notice & Assessment Support", text: "Representation during transfer pricing scrutiny and assessment proceedings before tax authorities." },
      ]}
      faqs={[
        { question: "Who needs a transfer pricing audit?", answer: "Any business with an international transaction with an associated enterprise, regardless of value, and businesses with specified domestic transactions (between related parties within India) above the prescribed threshold. This commonly applies to Indian subsidiaries of foreign parent companies, and Indian groups with multiple related entities transacting with each other." },
        { question: "What is Form 3CEB?", answer: "Form 3CEB is the transfer pricing audit report a Chartered Accountant must certify and file, detailing the international and specified domestic transactions entered into with associated enterprises and confirming they meet arm's-length pricing requirements." },
        { question: "What happens if transfer pricing documentation isn't maintained?", answer: "Failure to maintain proper documentation or furnish the required report can attract penalties under the Income Tax Act, and in an assessment, the tax authority can make its own adjustment to your reported income if it isn't satisfied the pricing was at arm's length — which can mean double taxation if the other jurisdiction doesn't grant a corresponding adjustment." },
        { question: "What counts as a 'related party' for transfer pricing purposes?", answer: "Associated enterprises include a parent-subsidiary relationship, entities under common control or common shareholding above prescribed thresholds, and entities where one has effective management or capital control over the other — the definition is specific and worth confirming for your actual group structure rather than assuming." },
        { question: "Do you handle transfer pricing for Indian subsidiaries of foreign companies?", answer: "Yes — this is one of the most common transfer pricing situations we handle: an Indian subsidiary transacting with its foreign parent or group companies for services, royalties, management fees, or goods." },
      ]}
      relatedQuestions={[
        { question: "What other audits apply alongside transfer pricing?", href: "/audit-and-assurance" },
        { question: "Is transfer pricing audit required in addition to statutory audit?", href: "/statutory-audit-chennai" },
        { question: "How does related-party pricing affect my income tax return?", href: "/direct-tax" },
      ]}
      relatedSlugs={["audit-and-assurance", "statutory-audit-chennai", "direct-tax"]}
    />
  );
}
