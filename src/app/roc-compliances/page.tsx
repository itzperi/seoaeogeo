import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "ROC Compliance Services for Chennai Companies" },
  description:
    "Annual filings, statutory registers, and Companies Act compliance to keep your Chennai company in good standing with the Registrar of Companies (MCA).",
  alternates: { canonical: "/roc-compliances" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/roc-compliances`}
      serviceType="Corporate Compliance"
      crumbLabel="ROC Compliances"
      crumbHref="/roc-compliances"
      eyebrow="Corporate Compliance · Chennai"
      h1="ROC Compliance Services"
      subhead="Proactive compliance management aligned with the evolving Companies Act landscape — stay ahead of deadlines and penalties."
      introHeading="What is ROC compliance?"
      intro="Every registered company and LLP must file periodic returns and maintain statutory records with the Registrar of Companies (ROC) under the Ministry of Corporate Affairs. Missing these deadlines attracts steep additional fees and can lead to director disqualification or company strike-off."
      citation={{ label: "Ministry of Corporate Affairs (MCA)", href: "https://www.mca.gov.in/" }}
      howTo={{
        heading: "Your annual ROC compliance cycle",
        steps: [
          { name: "Post-audit filing prep", text: "Once your statutory audit is signed off, we prepare AOC-4 (financial statements) and MGT-7/7A (annual return) for filing." },
          { name: "Board and AGM documentation", text: "Notices, minutes, and resolutions for the Annual General Meeting and any board meetings held during the year are drafted and maintained." },
          { name: "Annual ROC filings", text: "AOC-4 and MGT-7/7A are filed with the Registrar of Companies within the statutory timelines, along with DIR-3 KYC for each director." },
          { name: "Statutory registers update", text: "Registers of members, directors, and charges are updated to reflect the year's changes." },
          { name: "Event-based filings as they arise", text: "Any changes during the year — new directors, share capital changes, registered office moves — are filed with the ROC as they happen, not bundled into the annual cycle." },
        ],
      }}
      subServicesHeading="Our ROC compliance services"
      subServices={[
        { name: "Annual Return Filing (MGT-7/AOC-4)", text: "Yearly filing of financial statements and annual return with the ROC." },
        { name: "Board & AGM Compliance", text: "Drafting notices, minutes, and resolutions for board meetings and the Annual General Meeting." },
        { name: "Statutory Registers Maintenance", text: "Upkeep of registers of members, directors, and charges as required by law." },
        { name: "Director KYC (DIR-3 KYC)", text: "Annual KYC filing for all directors to keep their DIN active." },
        { name: "Event-Based Filings", text: "Filings triggered by changes in directors, share capital, registered office, or charges." },
        { name: "Compliance Health Check", text: "A one-time review of your company's filing history to identify and fix gaps before they escalate." },
      ]}
      faqs={[
        { question: "What happens if I miss an ROC filing deadline?", answer: "Late filing attracts an additional fee that can run up to several times the normal fee depending on the delay, and prolonged non-compliance can lead to director disqualification or the company being struck off by the ROC." },
        { question: "Which ROC filings are mandatory every year?", answer: "At minimum, AOC-4 (financial statements), MGT-7/7A (annual return), and DIR-3 KYC for each director must be filed annually, alongside audited accounts." },
        { question: "Do LLPs also have ROC compliance requirements?", answer: "Yes — LLPs file Form 11 (Annual Return) and Form 8 (Statement of Accounts) annually, with different due dates from companies." },
        { question: "Can you fix past non-compliance?", answer: "Yes, we conduct a compliance health check, identify pending filings, and regularise them through the MCA's condonation and late-filing mechanisms where available." },
      ]}
      relatedQuestions={[
        { question: "Which entity structure has the lightest ROC compliance burden?", href: "/formation-of-business-entity" },
        { question: "What ROC filings follow right after incorporation?", href: "/private-limited-company-incorporation-chennai" },
        { question: "Is statutory audit required before I can file my annual return?", href: "/audit-and-assurance" },
      ]}
      relatedSlugs={["formation-of-business-entity", "private-limited-company-incorporation-chennai", "audit-and-assurance"]}
    />
  );
}
