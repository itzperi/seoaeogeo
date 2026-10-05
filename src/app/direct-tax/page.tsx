import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Direct Tax Consultant in Chennai | Anna Nagar CA Firm" },
  description:
    "Direct tax and income tax services in Chennai — tax planning, return filing, scrutiny assessments, and representation before tax authorities, from our Anna Nagar office.",
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
      h1="Direct Tax Services in Chennai"
      subhead="Income tax planning, return filing, scrutiny assessments and appeals for companies, firms and individuals — from our Anna Nagar office."
      introHeading="What is direct tax advisory?"
      intro="Direct tax covers income tax paid directly by individuals and businesses to the government. Effective planning within the law reduces avoidable liability, while accurate, timely filing and disciplined documentation protect you during assessment or scrutiny."
      citation={{ label: "Income Tax Department: Objective and scope of the Income-tax Act, 2025 (incometax.gov.in)", href: "https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/objective-and-scope-new-act" }}
      subServicesHeading="Which direct tax services do we offer in Chennai?"
      subServices={[
        { name: "Income Tax Return Filing", text: "Accurate, on-time ITR filing for individuals, firms, and companies." },
        { name: "Tax Planning & Advisory", text: "Legitimate structuring of income, investments, and deductions to optimise tax outgo." },
        { name: "Assessment & Scrutiny Representation", text: "Representation before Assessing Officers during scrutiny and reassessment proceedings." },
        { name: "TDS Compliance", text: "TDS deduction, deposit, and quarterly return filing for businesses." },
        { name: "Advance Tax Computation", text: "Quarterly advance tax estimates to avoid interest under Sections 234B/234C." },
        { name: "Capital Gains Advisory", text: "Tax planning for property, securities, and business asset transactions." },
      ]}
      faqs={[
        { question: "When is the income tax return filing deadline?", answer: "For most individuals without business income, the due date is 31 July of the assessment year. Individuals and firms with business or professional income whose accounts do not require a tax audit have until 31 August, and businesses requiring audit typically have until 31 October. The CBDT occasionally extends these dates." },
        { question: "What happens if I receive an income tax scrutiny notice?", answer: "Respond within the stated deadline with supporting documentation. We review the notice, prepare your case file, and represent you before the Assessing Officer where required." },
        { question: "Do you help NRIs with Indian tax filing?", answer: "Yes, we assist NRIs with Indian-source income reporting, DTAA benefit claims, and repatriation-related tax compliance." },
        { question: "Can you help reduce my advance tax liability legally?", answer: "We review your income projections each quarter and structure eligible deductions and exemptions to minimise your advance tax outgo within the law." },
      ]}
      relatedQuestions={[
        { question: "What's the deadline for filing my income tax return?", href: "/income-tax-return-filing-chennai" },
        { question: "Does my business also need a statutory or tax audit?", href: "/audit-and-assurance" },
        { question: "Do I need to register for GST as well?", href: "/goods-and-services-tax" },
      ]}
      relatedSlugs={["income-tax-notice-reply-chennai", "income-tax-return-filing-chennai", "nri-tax-services"]}
    />
  );
}
