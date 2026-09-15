import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Virtual CFO Services in Chennai for Startups & SMEs",
  description:
    "Outsourced financial leadership for Chennai startups and SMEs — MIS reporting, budgeting, fundraising support, and board-ready financials without a full-time CFO.",
  alternates: { canonical: "/virtual-cfo-services" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/virtual-cfo-services`}
      serviceType="Financial Advisory"
      crumbLabel="Virtual CFO Services"
      crumbHref="/virtual-cfo-services"
      eyebrow="Virtual CFO · Chennai"
      h1="Virtual CFO Services"
      subhead="Outsourced financial leadership — MIS, budgeting, fundraising support, and board-ready reporting for growing businesses that aren't ready for a full-time CFO."
      introHeading="What is a Virtual CFO?"
      intro="A Virtual CFO provides senior financial leadership — budgeting, cash flow management, MIS reporting, and investor-facing financial strategy — on a fractional, outsourced basis. It's built for startups and growing SMEs in Chennai that need CFO-level insight without the cost of a full-time hire."
      subServicesHeading="What our Virtual CFO service covers"
      subServices={[
        { name: "Monthly MIS Reporting", text: "Structured management information system reports for informed decision-making." },
        { name: "Budgeting & Forecasting", text: "Annual budgets and rolling forecasts tied to your actual business drivers." },
        { name: "Cash Flow Management", text: "Working capital planning and cash flow monitoring to avoid liquidity surprises." },
        { name: "Fundraising Support", text: "Financial model preparation, due diligence readiness, and investor reporting." },
        { name: "Board & Investor Reporting", text: "Board-ready financial packs and KPI dashboards for stakeholder meetings." },
        { name: "Costing & Pricing Analysis", text: "Unit economics and margin analysis to guide pricing and cost decisions." },
      ]}
      faqs={[
        { question: "Who needs a Virtual CFO?", answer: "Startups post-seed funding, and SMEs scaling revenue but not yet ready for a full-time in-house CFO, benefit most — you get senior financial oversight at a fraction of the cost." },
        { question: "How is Virtual CFO different from a regular accountant?", answer: "An accountant records and reports historical transactions; a Virtual CFO uses that data to guide forward-looking decisions — budgeting, fundraising, pricing, and strategic planning." },
        { question: "How many hours per month does a Virtual CFO engagement involve?", answer: "This depends on your business complexity and reporting needs — typically ranging from a few hours a week to a few days a month, scoped during your initial consultation." },
        { question: "Can a Virtual CFO help with fundraising?", answer: "Yes — we prepare financial models, clean up historical financials for due diligence, and support investor reporting through your fundraising process." },
      ]}
    />
  );
}
