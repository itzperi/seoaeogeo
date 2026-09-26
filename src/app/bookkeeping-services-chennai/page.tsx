import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Bookkeeping Services in Chennai | Cloud Accounting" },
  description:
    "Cloud accounting on Zoho Books, Tally Prime, QuickBooks, or Xero — monthly books close, MIS reporting, and backlog clean-up for Chennai businesses.",
  alternates: { canonical: "/bookkeeping-services-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Bookkeeping Services in Chennai",
    description: "Cloud accounting and monthly MIS reporting for Chennai businesses, on the software you already use.",
    url: "/bookkeeping-services-chennai",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/bookkeeping-services-chennai`}
      serviceType="Bookkeeping"
      crumbLabel="Bookkeeping Services"
      crumbHref="/bookkeeping-services-chennai"
      eyebrow="Bookkeeping · Chennai"
      h1="Bookkeeping Services in Chennai"
      subhead="Cloud accounting, monthly books close, and MIS reporting on the software you already use — from routine bookkeeping to backlog clean-up before an audit or raise."
      introHeading="What does bookkeeping actually cover?"
      intro="Bookkeeping is the ongoing recording and reconciliation of a business's financial transactions — sales, purchases, bank movements, and payroll entries — kept accurate and current enough that the resulting financial statements are actually reliable. Done well, it's the foundation everything else (tax filing, audit, investor reporting) is built on; done inconsistently, it creates the kind of backlog that turns a routine audit or funding round into a scramble."
      citation={{ label: "ICAI — Accounting Standards", href: "https://www.icai.org/" }}
      subServicesHeading="Bookkeeping services we provide"
      subServices={[
        { name: "Cloud Accounting on Zoho Books / Tally Prime / QuickBooks / Xero", text: "Setup, data migration, and ongoing bookkeeping on the platform you already use — no forced switch to a different system." },
        { name: "Monthly Books Close & MIS Reporting", text: "Books closed by a fixed date every month, with P&L, cash flow, and budget-versus-actual reporting delivered on schedule." },
        { name: "Bookkeeping for Foreign Subsidiaries in India", text: "Books maintained in your parent company's format (US GAAP or IFRS) for Indian wholly-owned subsidiaries, with FEMA/FC-GPR tracking and transfer-pricing-ready records." },
        { name: "Startup Bookkeeping & Investor-Ready MIS", text: "Monthly board and investor reporting, burn-rate and runway tracking, and due-diligence-ready data rooms for funded startups." },
        { name: "E-commerce & D2C Bookkeeping", text: "Reconciliation of Amazon, Flipkart, and Shopify settlements, TCS under GST, and inventory accounting for online sellers." },
        { name: "Bookkeeping for Doctors, Clinics & Hospitals", text: "Practice-specific bookkeeping structured around how a medical practice actually earns and spends." },
        { name: "Bookkeeping for NRIs & Family Offices", text: "Rental income, capital gains, and investment tracking across India and abroad." },
        { name: "Accounts Clean-up & Backlog Bookkeeping", text: "Fixing books that have fallen behind, ahead of an audit, funding round, or sale — handled with the urgency these situations need." },
      ]}
      faqs={[
        { question: "Do I need to switch accounting software to work with you?", answer: "No — we work on whatever platform you already use, whether that's Zoho Books, Tally Prime, QuickBooks, or Xero. If you're not on any of these yet, we can help you choose and migrate, but it's never a requirement to start." },
        { question: "How quickly can you clean up backlog bookkeeping before an audit?", answer: "It depends on how far behind the books are and how organised the underlying documents (invoices, bank statements) are — a few months of backlog with clean source documents can often be caught up in one to two weeks; a full year with disorganised records takes longer. We'll give you a realistic timeline after a first look." },
        { question: "Can you maintain books in US GAAP or IFRS format for our Indian subsidiary?", answer: "Yes — this is a specific service we provide for wholly-owned subsidiaries of overseas parent companies, including reporting in the parent's format alongside standard Indian statutory books, and coordination on FEMA/FC-GPR filings." },
        { question: "Do you handle reconciliation for Amazon or Flipkart sellers?", answer: "Yes — reconciling marketplace settlement reports against your books, tracking TCS deducted under GST, and inventory accounting is a routine part of our e-commerce bookkeeping service." },
        { question: "What's included in monthly MIS reporting?", answer: "A closed profit and loss statement, cash flow position, and a comparison against your budget where one exists — delivered on a fixed date every month, not whenever time allows." },
      ]}
      relatedQuestions={[
        { question: "Do you also handle payroll alongside bookkeeping?", href: "/payroll-services-chennai" },
        { question: "How does bookkeeping connect to my statutory audit?", href: "/statutory-audit-chennai" },
        { question: "Can bookkeeping and Virtual CFO work be combined?", href: "/virtual-cfo-services" },
      ]}
      relatedSlugs={["payroll-services-chennai", "statutory-audit-chennai", "virtual-cfo-services"]}
    />
  );
}
