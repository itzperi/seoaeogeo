import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Management Consultancy Services in Chennai" },
  description:
    "Business process, risk, and strategy advisory for Chennai businesses and startups — turning compliance data into operating decisions with expert-led consultancy.",
  alternates: { canonical: "/management-consultancy" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/management-consultancy`}
      serviceType="Management Consulting"
      crumbLabel="Management Consultancy"
      crumbHref="/management-consultancy"
      eyebrow="Consultancy · Chennai"
      h1="Management Consultancy Services"
      subhead="Transforming challenges into opportunities through expert business consulting — aligning your goals with actionable strategies."
      introHeading="What is management consultancy?"
      intro="Management consultancy applies financial and operational expertise to solve specific business problems — improving processes, managing risk, and guiding strategic decisions. Because our consultants also handle your audit and compliance work, our advice is grounded in your actual numbers, not generic frameworks."
      subServicesHeading="Areas we advise on"
      subServices={[
        { name: "Business Process Improvement", text: "Identifying inefficiencies in financial and operational workflows." },
        { name: "Risk Advisory", text: "Structured risk assessment and mitigation planning aligned to your sector." },
        { name: "Growth & Expansion Strategy", text: "Financial and structural planning for new markets, products, or locations." },
        { name: "Internal Controls Design", text: "Building controls frameworks that scale with your business." },
        { name: "Due Diligence Support", text: "Financial and operational due diligence for M&A or investment transactions." },
        { name: "Startup Advisory", text: "Structuring, compliance, and fundraising guidance for early-stage founders." },
      ]}
      faqs={[
        { question: "What kind of businesses use management consultancy services?", answer: "Startups planning their first fundraise, SMEs scaling operations, and established businesses undergoing restructuring or expansion all typically engage consultancy support." },
        { question: "Is management consultancy a one-time or ongoing engagement?", answer: "Both models are available — a focused project (e.g. a process review) or an ongoing advisory retainer, depending on your needs." },
        { question: "Do you provide due diligence support for acquisitions?", answer: "Yes, we conduct financial and compliance due diligence for businesses evaluating an acquisition or investment." },
        { question: "How do I get started?", answer: "Book a free consultation — we'll scope the specific problem you're solving before proposing an engagement structure." },
      ]}
      relatedQuestions={[
        { question: "How is management consultancy different from Virtual CFO services?", href: "/virtual-cfo-services" },
        { question: "Do you provide the audit work behind these recommendations?", href: "/audit-and-assurance" },
        { question: "Can you also help choose the right entity structure?", href: "/formation-of-business-entity" },
      ]}
      relatedSlugs={["virtual-cfo-services", "audit-and-assurance", "formation-of-business-entity"]}
    />
  );
}
