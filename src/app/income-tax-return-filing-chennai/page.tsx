import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Income Tax Return Filing in Chennai | ITR Filing" },
  description:
    "Income tax return filing in Chennai for salaried individuals, professionals, NRIs, and businesses — accurate ITR filing, refund tracking, and advance tax planning.",
  alternates: { canonical: "/income-tax-return-filing-chennai" },
  openGraph: {
    title: "Income Tax Return Filing in Chennai",
    description: "ITR filing for individuals, professionals, and businesses in Chennai.",
    url: "/income-tax-return-filing-chennai",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/income-tax-return-filing-chennai`}
      serviceType="Income Tax Return Filing"
      crumbLabel="Income Tax Return Filing"
      crumbHref="/income-tax-return-filing-chennai"
      eyebrow="Income Tax · Chennai"
      h1="Income Tax Return Filing in Chennai"
      subhead="Accurate, on-time ITR filing for salaried individuals, professionals, NRIs, and businesses — with refund tracking and advance tax planning built in."
      introHeading="Who needs to file an income tax return?"
      intro="Filing is mandatory if your gross total income exceeds the basic exemption limit, if you hold foreign assets or signing authority in a foreign account, if you've deposited over ₹1 crore in current accounts (or ₹50 lakh in savings) in a year, or if you want to claim a refund or carry forward a loss. Choosing the correct ITR form and reporting all income heads accurately — salary, house property, capital gains, business income, and other sources — avoids notices and processing delays."
      citation={{ label: "Income Tax Department (incometax.gov.in)", href: "https://www.incometax.gov.in/" }}
      subServicesHeading="Our income tax return services"
      subServices={[
        { name: "Salaried Individual ITR (ITR-1/2)", text: "Return filing for salaried employees, including Form 16 reconciliation and deduction optimisation under the old and new tax regimes." },
        { name: "Professional & Business ITR (ITR-3/4)", text: "Return filing for freelancers, consultants, and businesses, including presumptive taxation under Sections 44AD/44ADA where applicable." },
        { name: "NRI Tax Filing", text: "Indian-source income reporting, DTAA benefit claims, and repatriation-related compliance for non-resident Indians." },
        { name: "Capital Gains Reporting", text: "Accurate computation and reporting of gains from property, securities, and mutual funds, with exemption planning under Sections 54/54F/54EC." },
        { name: "Refund Tracking & Rectification", text: "Following up on delayed refunds and filing rectification requests for processing errors under Section 154." },
        { name: "Advance Tax & TDS Reconciliation", text: "Quarterly advance tax estimates and Form 26AS/AIS reconciliation to avoid mismatches and interest under Sections 234B/234C." },
      ]}
      faqs={[
        { question: "Do you work with NRI clients based outside India, including in the US?", answer: "Yes. We work remotely with NRI and overseas clients, including clients based in the United States, on Indian-source income reporting, DTAA benefit claims, and repatriation-related compliance — no in-person visit required." },
        { question: "What is the due date for filing an income tax return?", answer: "For most individuals and non-audit taxpayers, 31 July of the assessment year; for businesses requiring a tax audit, typically 31 October. Exact dates are notified annually by the CBDT and occasionally extended." },
        { question: "Which ITR form should I use?", answer: "ITR-1 for salaried individuals with income up to ₹50 lakh and no capital gains; ITR-2 for individuals with capital gains or multiple properties; ITR-3 for business/professional income; ITR-4 for presumptive taxation. We confirm the correct form based on your income sources." },
        { question: "What happens if I file my return late?", answer: "A late fee under Section 234F applies (up to ₹5,000), interest accrues on any unpaid tax, and you lose the ability to carry forward certain losses to future years." },
        { question: "Can you help if I haven't filed returns for previous years?", answer: "Yes, we assist with filing belated and updated returns (ITR-U) where the window is still open, and advise on any applicable penalties or interest." },
        { question: "Do you help with GST as well as income tax?", answer: "Yes — GST registration and return filing are handled on our dedicated GST services page; many clients use both together for complete compliance coverage." },
      ]}
      relatedQuestions={[
        { question: "Can you also help with year-round tax planning, not just filing?", href: "/direct-tax" },
        { question: "Does my business need a tax audit before I file?", href: "/audit-and-assurance" },
        { question: "Do I need GST registration in addition to filing income tax?", href: "/gst-registration-chennai" },
      ]}
      relatedSlugs={["direct-tax", "audit-and-assurance", "gst-registration-chennai"]}
    />
  );
}
