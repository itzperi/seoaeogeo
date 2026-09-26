import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Payroll Services in Chennai | PF, ESI & TDS Compliance" },
  description:
    "Payroll outsourcing with PF, ESI, Professional Tax, and TDS compliance for Chennai businesses — from routine processing to ESOP taxation and expat payroll.",
  alternates: { canonical: "/payroll-services-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Payroll Services in Chennai",
    description: "End-to-end payroll outsourcing with statutory compliance for Chennai businesses.",
    url: "/payroll-services-chennai",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/payroll-services-chennai`}
      serviceType="Payroll Processing"
      crumbLabel="Payroll Services"
      crumbHref="/payroll-services-chennai"
      eyebrow="Payroll · Chennai"
      h1="Payroll Services in Chennai"
      subhead="End-to-end payroll outsourcing with PF, ESI, Professional Tax, and TDS compliance handled as part of the same engagement — not a separate filing exercise."
      introHeading="What does payroll outsourcing actually include?"
      intro="Payroll outsourcing covers monthly salary processing and the statutory compliance that comes with employing staff in India — Provident Fund (PF) and Employee State Insurance (ESI) contributions, Professional Tax, and Tax Deducted at Source on salaries. Treating these as one integrated process, rather than payroll processing and statutory filing as separate exercises handled by different people, is what actually keeps a business compliant month to month rather than catching up after a notice."
      citation={{ label: "Employees' Provident Fund Organisation (EPFO)", href: "https://www.epfindia.gov.in/" }}
      subServicesHeading="Payroll services we provide"
      subServices={[
        { name: "Payroll Outsourcing with PF, ESI, PT & TDS Compliance", text: "End-to-end payroll processing with statutory filings — PF, ESI, Professional Tax, and TDS — handled as part of the same engagement." },
        { name: "Payroll for Foreign Companies Setting Up in India", text: "Payroll guidance during the pre-entity phase, including Employer of Record arrangements, transitioning to full compliant payroll once your Indian entity is registered." },
        { name: "ESOP Accounting & Payroll Taxation", text: "Perquisite tax calculation on ESOP exercise and coordination on valuation, for startups and tech companies issuing employee stock options." },
        { name: "Salary Structuring & CTC Optimisation", text: "Tax-efficient compensation design for senior staff and leadership, structured within current Income Tax provisions." },
        { name: "Expat & Cross-Border Payroll", text: "Tax equalisation, DTAA benefit application, and social security agreement compliance for expatriate employees." },
        { name: "Labour Law Compliance under the New Labour Codes", text: "Gratuity and bonus provisioning, Shops & Establishment Act compliance, and Tamil Nadu-specific labour law requirements." },
        { name: "Payroll Audit & Compliance Health Check", text: "A one-time review of your existing payroll process to catch compliance gaps before they become penalties." },
      ]}
      faqs={[
        { question: "What's the difference between payroll processing and payroll compliance?", answer: "Payroll processing is calculating and disbursing salaries each month. Payroll compliance is the statutory side that comes with it — PF and ESI contributions, Professional Tax deduction, and TDS on salaries, each with its own filing deadline. Treating these separately is how compliance gaps happen; we handle both as one process." },
        { question: "Do you handle payroll for a company that doesn't have an Indian entity yet?", answer: "Yes — for foreign companies setting up in India, we can guide you through Employer of Record arrangements to hire staff before your entity is registered, then transition to standard compliant payroll once incorporation is complete." },
        { question: "How is ESOP taxation handled for our employees?", answer: "Perquisite tax applies at the point an employee exercises their ESOP, based on the difference between the exercise price and the fair market value at that time. We calculate this correctly and coordinate with your valuation provider so the tax treatment holds up under scrutiny." },
        { question: "Can you manage payroll for expatriate employees?", answer: "Yes — this includes tax equalisation calculations, applying DTAA benefits where applicable, and managing social security agreement compliance for expatriate staff, which follows meaningfully different rules from standard resident payroll." },
        { question: "We think our payroll process has compliance gaps — can you check?", answer: "Yes, this is exactly what a payroll audit and compliance health check is for — a one-time review of your current process against PF, ESI, PT, and TDS requirements to flag gaps before they surface as a notice or penalty." },
      ]}
      relatedQuestions={[
        { question: "Do you also handle bookkeeping alongside payroll?", href: "/bookkeeping-services-chennai" },
        { question: "How does payroll TDS connect to our company's overall TDS compliance?", href: "/direct-tax" },
        { question: "Can payroll and Virtual CFO work be combined into one engagement?", href: "/virtual-cfo-services" },
      ]}
      relatedSlugs={["bookkeeping-services-chennai", "direct-tax", "virtual-cfo-services"]}
    />
  );
}
