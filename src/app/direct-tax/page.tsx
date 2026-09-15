import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Direct Tax & Income Tax Services in Chennai",
  description:
    "Income tax planning, return filing, assessments, and representation before tax authorities for individuals and businesses in Chennai.",
  alternates: { canonical: "/direct-tax" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/direct-tax`}
      serviceType="Tax Advisory"
      crumbLabel="Direct Tax"
      crumbHref="/direct-tax"
      eyebrow="Direct Tax · Chennai"
      h1="Direct Tax Services"
      subhead="Streamlining tax planning and compliance through precision and foresight — minimizing liability while maximizing operational confidence."
      introHeading="What is direct tax advisory?"
      intro="Direct tax covers income tax paid directly by individuals and businesses to the government. Effective planning within the law reduces avoidable liability, while accurate, timely filing and disciplined documentation protect you during assessment or scrutiny."
      subServicesHeading="Our direct tax services"
      subServices={[
        { name: "Income Tax Return Filing", text: "Accurate, on-time ITR filing for individuals, firms, and companies." },
        { name: "Tax Planning & Advisory", text: "Legitimate structuring of income, investments, and deductions to optimise tax outgo." },
        { name: "Assessment & Scrutiny Representation", text: "Representation before Assessing Officers during scrutiny and reassessment proceedings." },
        { name: "TDS Compliance", text: "TDS deduction, deposit, and quarterly return filing for businesses." },
        { name: "Advance Tax Computation", text: "Quarterly advance tax estimates to avoid interest under Sections 234B/234C." },
        { name: "Capital Gains Advisory", text: "Tax planning for property, securities, and business asset transactions." },
      ]}
      faqs={[
        { question: "When is the income tax return filing deadline?", answer: "For most individuals and non-audit taxpayers, the due date is 31 July of the assessment year; for businesses requiring audit, it typically extends to 31 October — dates are notified annually by the CBDT." },
        { question: "What happens if I receive an income tax scrutiny notice?", answer: "Respond within the stated deadline with supporting documentation. We review the notice, prepare your case file, and represent you before the Assessing Officer where required." },
        { question: "Do you help NRIs with Indian tax filing?", answer: "Yes, we assist NRIs with Indian-source income reporting, DTAA benefit claims, and repatriation-related tax compliance." },
        { question: "Can you help reduce my advance tax liability legally?", answer: "We review your income projections each quarter and structure eligible deductions and exemptions to minimise your advance tax outgo within the law." },
      ]}
      relatedSlugs={["audit-and-assurance", "goods-and-services-tax", "gst-litigation-chennai"]}
    />
  );
}
