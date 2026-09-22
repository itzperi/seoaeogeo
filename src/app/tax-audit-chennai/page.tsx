import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tax Audit in Chennai | Section 44AB Audit",
  description:
    "Tax audit under Section 44AB of the Income Tax Act for businesses and professionals in Chennai crossing prescribed turnover limits, handled end-to-end by C S Rushil & Co.",
  alternates: { canonical: "/tax-audit-chennai" },
  openGraph: {
    title: "Tax Audit in Chennai",
    description: "Section 44AB tax audit for Chennai businesses and professionals.",
    url: "/tax-audit-chennai",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/tax-audit-chennai`}
      serviceType="Tax Audit"
      crumbLabel="Tax Audit"
      crumbHref="/tax-audit-chennai"
      eyebrow="Tax Audit · Chennai"
      h1="Tax Audit in Chennai"
      subhead="Section 44AB tax audit for businesses and professionals crossing prescribed turnover limits — accurate, on-time, and structured to withstand scrutiny."
      introHeading="What is a tax audit under Section 44AB?"
      intro="A tax audit under Section 44AB of the Income Tax Act is an examination of a taxpayer's books of account by a Chartered Accountant, required once turnover or gross receipts cross prescribed thresholds — currently ₹1 crore for businesses (₹10 crore where cash receipts and payments are each under 5% of the total), and ₹50 lakh for professionals. The auditor issues Form 3CA/3CB along with Form 3CD, a detailed statement of particulars covering depreciation, disallowances, related-party transactions, and other items the Income Tax Department cross-checks during assessment. Missing the deadline attracts a penalty under Section 271B, in addition to losing the ability to defend certain claims that a clean tax audit report would have supported."
      citation={{ label: "Income Tax Department — Section 44AB", href: "https://www.incometax.gov.in/" }}
      subServicesHeading="What's included"
      subServices={[
        { name: "Applicability Assessment", text: "Determining whether Section 44AB applies to your specific turnover, receipts, and cash-transaction mix for the year." },
        { name: "Form 3CA/3CB and 3CD Preparation", text: "Full preparation and e-filing of the audit report and the detailed statement of particulars." },
        { name: "Presumptive Taxation Advisory", text: "Assessing whether Sections 44AD/44ADA presumptive taxation could apply instead, avoiding a tax audit requirement altogether where eligible." },
        { name: "Disallowance & Compliance Review", text: "Checking TDS compliance, related-party disclosures, and expense documentation before filing to avoid subsequent scrutiny notices." },
        { name: "Coordination with Statutory Audit", text: "For companies, aligning tax audit timelines and workpapers with the statutory audit to avoid duplicated effort." },
        { name: "Revised/Belated Tax Audit Filings", text: "Handling revised tax audit reports where a genuine error is identified after the original filing." },
      ]}
      faqs={[
        { question: "What is the turnover limit that triggers a tax audit?", answer: "₹1 crore for businesses generally, extended to ₹10 crore if cash receipts and cash payments are each within 5% of the total transactions for the year — a threshold designed to reward businesses that operate mostly digitally. For professionals (doctors, lawyers, consultants, and similar), the limit is ₹50 lakh in gross receipts. These figures are set by the Finance Act and can change year to year, so we confirm the applicable limit at the time of your filing." },
        { question: "What is the due date for tax audit filing?", answer: "The tax audit report is generally due 30 September of the assessment year for most taxpayers, with the corresponding income tax return due 31 October — both dates are notified annually by the CBDT and occasionally extended, so we track the current-year deadline rather than assuming it repeats exactly." },
        { question: "What happens if I miss the tax audit deadline?", answer: "A penalty under Section 271B applies — 0.5% of turnover/gross receipts, capped at ₹1.5 lakh — unless you can show reasonable cause for the delay. Beyond the penalty, a late or missing tax audit report also weakens your position if the return is later selected for scrutiny." },
        { question: "Can I avoid a tax audit through presumptive taxation?", answer: "Possibly. Businesses under Section 44AD (turnover up to ₹2 crore, or ₹3 crore with the cash-transaction condition) and professionals under Section 44ADA (gross receipts up to ₹50 lakh, or ₹75 lakh with the same condition) can opt for presumptive taxation and avoid a tax audit, provided they meet the eligibility conditions and haven't opted out in a way that triggers a mandatory audit in a later year." },
        { question: "Is tax audit the same as statutory audit?", answer: "No. Statutory audit (under the Companies Act) applies to every registered company regardless of turnover; tax audit (under the Income Tax Act) applies based on turnover/receipts thresholds and covers different reporting requirements. A company can require both in the same year, and we coordinate the two so documentation isn't duplicated." },
      ]}
      relatedQuestions={[
        { question: "Does my company also need a statutory audit?", href: "/audit-and-assurance" },
        { question: "How is tax audit different from statutory audit?", href: "/statutory-audit-chennai" },
        { question: "Do you also file my income tax return after the audit?", href: "/income-tax-return-filing-chennai" },
      ]}
      relatedSlugs={["audit-and-assurance", "statutory-audit-chennai", "income-tax-return-filing-chennai"]}
    />
  );
}
