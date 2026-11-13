import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import BookkeepingMarketSections from "@/components/BookkeepingMarketSections";
import { getBookkeepingMarket } from "@/lib/bookkeeping-markets";
import { SITE_URL } from "@/lib/site";

const PATH = "/outsourced-bookkeeping-uae";
const market = getBookkeepingMarket(PATH.slice(1))!;

export const metadata: Metadata = {
  title: { absolute: "Bookkeeping Services for Dubai & UAE Companies | Corporate Tax" },
  description:
    "IFRS bookkeeping for Dubai, Abu Dhabi and free zone companies: VAT figures, Corporate Tax-ready books and e-invoicing preparation, kept from Chennai. Filings by your FTA tax agent.",
  alternates: { canonical: PATH },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Outsourced Bookkeeping for Dubai & UAE Companies",
    description:
      "IFRS bookkeeping, VAT figures and Corporate Tax-ready books for UAE mainland and free zone companies, kept from Chennai, 1.5 hours ahead of Dubai.",
    url: PATH,
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${PATH}`}
      serviceType="Outsourced Bookkeeping"
      crumbLabel="Outsourced Bookkeeping for UAE Companies"
      crumbHref={PATH}
      parentCrumb={{ name: "Outsourced Bookkeeping", href: "/outsourced-bookkeeping-services" }}
      eyebrow="Dubai, Abu Dhabi & Free Zones · Kept remotely from Chennai, India"
      h1="Outsourced Bookkeeping for Dubai & UAE Companies"
      subhead="Accrual-basis IFRS books in Zoho Books, QuickBooks, Xero or Tally, VAT return figures by emirate, Corporate Tax-ready year-end accounts and clean master data ahead of e-invoicing. Your FTA-registered tax agent files on EmaraTax. Chennai is only 1.5 hours ahead of Dubai."
      introHeading="How does outsourced bookkeeping work for a UAE company?"
      intro="You give our team user access to your Zoho Books, QuickBooks, Xero or Tally data and share bills, sales invoices and bank statements as agreed. Each month we record and reconcile AED and foreign-currency accounts on an accrual basis under IFRS, track related-party and connected-person transactions, and send management accounts. Each VAT period we prepare the return figures by emirate. At year end we prepare the financial statements and Corporate Tax workings. You or your FTA-registered tax agent file VAT and Corporate Tax returns on EmaraTax."
      citation={{ label: "Federal Tax Authority — Corporate Tax", href: "https://tax.gov.ae/en/taxes/corporate.tax.aspx" }}
      keyFacts={[
        { label: "Who it is for", value: "Dubai, Abu Dhabi and Sharjah mainland companies, free zone companies, and Indian-owned UAE businesses." },
        { label: "Software", value: "Zoho Books, QuickBooks Online, Xero, Tally Prime or Odoo. You keep the subscription and the data." },
        { label: "Who files with the FTA", value: "You or your FTA-registered tax agent, on EmaraTax. We are not an FTA-registered tax agent and prepare figures only." },
        { label: "Corporate Tax", value: "0% on taxable income up to AED 375,000 and 9% above it; the return is due within 9 months of the financial year end." },
        { label: "Time difference", value: "India is 1.5 hours ahead of the UAE, so almost the whole UAE working day is shared time." },
      ]}
      subServicesHeading="What bookkeeping can a UAE company outsource to us?"
      subServices={[
        { name: "Monthly IFRS Bookkeeping", text: "Accrual-basis books under IFRS, AED and foreign-currency reconciliations, receivables and payables, and monthly management accounts." },
        { name: "VAT Return Figures", text: "Standard-rated, zero-rated, exempt and reverse-charge supplies by emirate, reconciled to the ledger before your tax agent files." },
        { name: "Corporate Tax-Ready Books", text: "Non-deductible expenses, related-party and connected-person transactions and exempt income tracked through the year, with year-end Corporate Tax workings." },
        { name: "First Corporate Tax Period Catch-Up", text: "Books rebuilt from the start of your first Corporate Tax period where records were kept on spreadsheets or not at all." },
        { name: "Audit Support", text: "Year-end schedules and reconciliations for your UAE auditor, where audited accounts are required by Corporate Tax rules or your free zone." },
        { name: "E-Invoicing Readiness", text: "Customer and supplier master data, tax registration numbers and invoice fields cleaned up ahead of the move to mandatory e-invoicing." },
      ]}
      howTo={{
        heading: "How do you get started with outsourced bookkeeping from India?",
        steps: [
          { name: "Initial consultation", text: "A 15-minute call during UAE working hours about your company, its licence, VAT and Corporate Tax registration, and your software." },
          { name: "Review of your books", text: "We look at the last closed month, open VAT periods, the start of your first Corporate Tax period and any backlog, and agree the scope." },
          { name: "Engagement letter", text: "A written engagement letter with scope, close dates, confidentiality and data handling terms, and the name of your FTA-registered tax agent." },
          { name: "Access and documents", text: "You give us user access to your accounting software and agree how bills, invoices and bank statements reach us." },
          { name: "Catch-up, then monthly routine", text: "Backlog is cleared first, then each month closes on schedule and VAT figures are ready before each filing deadline." },
        ],
      }}
      faqs={[
        { question: "Is bookkeeping mandatory for UAE companies now that Corporate Tax applies?", answer: "Yes, in practice. Every business subject to Corporate Tax must keep accounting records and financial statements that support its return, prepared under IFRS (or IFRS for SMEs where allowed), and keep them for 7 years after the tax period. VAT-registered businesses must also keep VAT records. Spreadsheets with no ledger rarely meet this standard once an FTA query arrives." },
        { question: "Are you an FTA-registered tax agent?", answer: "No. We are a Chartered Accountancy firm in Chennai, India, and we do not represent businesses before the Federal Tax Authority. We keep the books and prepare VAT and Corporate Tax figures; your FTA-registered tax agent, or you yourself, file the returns on EmaraTax. If you do not have a tax agent yet, you can appoint one alongside our engagement." },
        { question: "Do I qualify for Small Business Relief?", answer: "Small Business Relief can be elected for a tax period where your revenue is AED 3 million or less, and it is not available to Qualifying Free Zone Persons or members of multinational groups above the threshold. Its end date has been extended beyond 2026, so confirm the current position with your tax agent. Even with the relief, you still keep books and file a return." },
        { question: "Do I need audited accounts?", answer: "Under Ministerial Decision No. 84 of 2025, audited financial statements are required for Corporate Tax where revenue exceeds AED 50 million and for every Qualifying Free Zone Person, whatever its revenue. Many free zones also require an annual audit under their own licence rules. The audit is done by a UAE-licensed auditor; we prepare the books and schedules they audit." },
        { question: "What does UAE e-invoicing mean for my bookkeeping?", answer: "Mandatory B2B e-invoicing through an Accredited Service Provider goes live from 1 January 2027 for businesses with revenue of AED 50 million or more and from 1 July 2027 for others. Invoices will need structured data, so customer and supplier records, tax registration numbers and item codes in your accounting software need to be clean. We tidy that master data as part of the monthly work." },
        { question: "Can you rebuild books for my first Corporate Tax return?", answer: "Yes. If your first Corporate Tax period started without proper books, we rebuild the ledger from bank statements, invoices and contracts, reconcile it, and prepare IFRS financial statements and Corporate Tax workings for your tax agent. The time needed depends on how many months are open and how complete the records are." },
        { question: "Is it safe to outsource bookkeeping from Dubai to India?", answer: "We work inside your own accounting software under named logins you control and can remove, sign confidentiality and data handling terms, and never ask for online banking passwords. The UAE's federal data protection law and, for DIFC or ADGM companies, their own data protection rules apply to personal data, and our terms are written to support your obligations." },
        { question: "How much do bookkeeping services cost for a UAE company?", answer: "We do not publish price lists. The fee depends on monthly transaction volume, the number of bank accounts and currencies, VAT registration, related-party transactions, any backlog to rebuild and whether you need audit support. After reviewing your books we quote a fixed monthly fee in the engagement letter." },
        { question: "Do you work UAE hours?", answer: "India is 1.5 hours ahead of the UAE all year, so our 9:30 am to 6:30 pm working day covers about 8:00 am to 5:00 pm in Dubai. The UAE weekend is Saturday and Sunday and our Chennai office works Monday to Saturday, so Saturday can be used for month-end work." },
        { question: "Can you also handle my Indian company or Indian tax as an NRI in Dubai?", answer: "Yes. Many UAE business owners also have an Indian company, property or income. Indian filings are our home ground: we file Indian GST, TDS, ROC and income tax returns directly, and help with India–UAE treaty and residency questions for NRIs." },
      ]}
      relatedQuestions={[
        { question: "Are you a UAE company setting up an Indian subsidiary?", href: "/india-subsidiary-for-uae-companies" },
        { question: "Do you have Indian tax questions as an NRI living in the UAE?", href: "/nri-tax-services-uae" },
        { question: "Do you also need a part-time finance lead, not just books?", href: "/virtual-cfo-services" },
      ]}
      relatedPosts={["uae-e-invoicing-2027-bookkeeping-checklist", "is-it-safe-to-outsource-bookkeeping-to-india"]}
      relatedSlugs={["outsourced-bookkeeping-services", "india-subsidiary-for-uae-companies", "nri-tax-services-uae"]}
    >
      <BookkeepingMarketSections market={market} />
    </ServicePageTemplate>
  );
}
