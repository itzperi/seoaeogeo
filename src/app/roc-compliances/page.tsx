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
      introHeading="What is ROC compliance for Chennai companies?"
      intro="Every registered company and LLP must file periodic returns and maintain statutory records with the Registrar of Companies (ROC) under the Ministry of Corporate Affairs. Missing these deadlines attracts steep additional fees and can lead to director disqualification or company strike-off."
      citation={{ label: "Ministry of Corporate Affairs (MCA): Annual Filings", href: "https://www.mca.gov.in/content/mca/global/en/mca/e-filing/annual-filings.html" }}
      howTo={{
        heading: "What does the annual ROC compliance cycle involve?",
        steps: [
          { name: "Post-audit filing prep", text: "Once your statutory audit is signed off, we prepare AOC-4 (financial statements) and MGT-7/7A (annual return) for filing." },
          { name: "Board and AGM documentation", text: "Notices, minutes, and resolutions for the Annual General Meeting and any board meetings held during the year are drafted and maintained." },
          { name: "Annual ROC filings", text: "AOC-4 and MGT-7/7A are filed with the Registrar of Companies within the statutory timelines (AOC-4 within 30 days and MGT-7/7A within 60 days of the AGM), along with DIR-3 KYC Web for each director in the years it falls due." },
          { name: "Statutory registers update", text: "Registers of members, directors, and charges are updated to reflect the year's changes." },
          { name: "Event-based filings as they arise", text: "Any changes during the year — new directors, share capital changes, registered office moves — are filed with the ROC as they happen, not bundled into the annual cycle." },
        ],
      }}
      subServicesHeading="Which ROC compliance services do we handle?"
      subServices={[
        { name: "Annual Return Filing (MGT-7/AOC-4)", text: "Yearly filing of financial statements and annual return with the ROC." },
        { name: "Board & AGM Compliance", text: "Drafting notices, minutes, and resolutions for board meetings and the Annual General Meeting." },
        { name: "Statutory Registers Maintenance", text: "Upkeep of registers of members, directors, and charges as required by law." },
        { name: "Director KYC (DIR-3 KYC Web)", text: "KYC filing for every director, now due once every three financial years by 30 June (from 31 March 2026), to keep their DIN active." },
        { name: "Event-Based Filings", text: "Filings triggered by changes in directors, share capital, registered office, or charges." },
        { name: "Compliance Health Check", text: "A one-time review of your company's filing history to identify and fix gaps before they escalate." },
      ]}
      faqs={[
        { question: "What happens if I miss an ROC filing deadline?", answer: "A late AOC-4 or MGT-7/7A attracts an additional fee of ₹100 per day of delay for each form, with no upper cap, under the Companies (Registration Offices and Fees) Rules, 2014. Prolonged non-compliance can lead to director disqualification or the company being struck off by the ROC. Directors are disqualified under Section 164(2) if the company fails to file financial statements or annual returns for three consecutive financial years." },
        { question: "Which ROC filings are mandatory every year?", answer: "Every company must file AOC-4 (financial statements, within 30 days of the AGM) and MGT-7/7A (annual return, within 60 days of the AGM) each year, based on its audited accounts. Director KYC is no longer annual: from 31 March 2026, each DIN holder files DIR-3 KYC Web once every three financial years, by 30 June." },
        { question: "Do LLPs also have ROC compliance requirements?", answer: "Yes — LLPs file Form 11 (Annual Return) by 30 May and Form 8 (Statement of Account and Solvency) by 30 October every year, which are different due dates from companies." },
        { question: "Which ROC filings are triggered by events rather than dates?", answer: "Appointing or removing a director (DIR-12), shifting the registered office (INC-22), increasing authorised capital (SH-7), and creating or satisfying a charge for a loan (CHG-1 or CHG-4) each need their own filing, generally within 30 days of the event. No one sends a reminder, and first-year companies hit these milestones most often: a co-founder joins the board, the office moves out of a home, a first business loan creates a charge. Late filing attracts additional fees that grow with the delay, often to several times the normal fee, and the delay stays visible on the company's public MCA record." },
        { question: "Is filing INC-22 enough when we move our registered office?", answer: "No. INC-22 updates the registered office with the Registrar, but the GST registration needs its own amendment for the new principal place of business, filed on the GST portal within 15 days of the change, and statutory registers, letterheads and other official records must show the new address too. Missing the GST amendment leaves your MCA and GST records showing different addresses, which surfaces later as a mismatch. Companies that relocate rather than incorporate at their current address, such as offices moving to Guindy for its connectivity, miss this second step most often." },
        { question: "Can you fix past non-compliance?", answer: "Yes. Long-running companies that file their annual return every year often still have gaps from event-based filings missed years ago, such as a director change, a charge created and later satisfied, or an address move. We conduct a compliance health check of the full MCA filing history against what actually happened, identify pending filings, and regularise them through the MCA's condonation and late-filing mechanisms where available. This matters most for established manufacturers and suppliers, because banks, lenders and large buyers running supplier due diligence check ROC filing history before extending credit, and a longer history gives them more room to find an inconsistency." },
      ]}
      relatedQuestions={[
        { question: "Which entity structure has the lightest ROC compliance burden?", href: "/company-registration-chennai" },
        { question: "What ROC filings follow right after incorporation?", href: "/private-limited-company-incorporation-chennai" },
        { question: "Is statutory audit required before I can file my annual return?", href: "/audit-and-assurance" },
      ]}
      relatedSlugs={["company-registration-chennai", "private-limited-company-incorporation-chennai", "audit-and-assurance"]}
    />
  );
}
