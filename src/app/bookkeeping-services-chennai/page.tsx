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
      parentCrumb={{ name: "Outsourced Bookkeeping", href: "/outsourced-bookkeeping-services" }}
      eyebrow="Bookkeeping · Chennai"
      h1="Bookkeeping Services in Chennai"
      subhead="Cloud accounting, monthly books close, and MIS reporting on the software you already use — from routine bookkeeping to backlog clean-up before an audit or raise."
      introHeading="What do bookkeeping services in Chennai cover?"
      intro="Bookkeeping is the ongoing recording and reconciliation of a business's financial transactions — sales, purchases, bank movements, and payroll entries — kept accurate and current enough that the resulting financial statements are actually reliable. Done well, it's the foundation everything else (tax filing, audit, investor reporting) is built on; done inconsistently, it creates the kind of backlog that turns a routine audit or funding round into a scramble."
      citation={{ label: "ICAI — Accounting Standards", href: "https://www.icai.org/post/accounting-standards" }}
      keyFacts={[
        { label: "Software", value: "Tally Prime, Zoho Books, QuickBooks or Xero, on your own licence or subscription." },
        { label: "Books retention (companies)", value: "Books of account and vouchers for at least 8 financial years, under Section 128 of the Companies Act, 2013." },
        { label: "Audit trail", value: "Since 1 April 2023, company accounting software must keep an edit log (audit trail) that cannot be disabled." },
        { label: "Filings included", value: "GST returns, TDS returns, and ROC and income tax filings where agreed, prepared from the same reconciled books." },
        { label: "Independence", value: "We do not act as statutory auditor of a company whose books we keep." },
      ]}
      subServicesHeading="What bookkeeping services do we offer in Chennai?"
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
      howTo={{
        heading: "How do we set up and run your bookkeeping each month?",
        steps: [
          { name: "Review your current books", text: "We look at your accounting software (Tally Prime, Zoho Books, QuickBooks or Xero), the last closed month and any backlog, and agree what needs cleaning up first." },
          { name: "Agree the chart of accounts and cut-off", text: "We fix the ledger structure, cost centres if you need them, and the monthly date by which bills, invoices and bank statements reach us." },
          { name: "Set up document sharing", text: "Sales invoices, purchase bills, expense claims and bank statements are shared in the way agreed in the engagement letter." },
          { name: "Record and reconcile every month", text: "We post the month's transactions, reconcile bank accounts and receivables and payables, and flag missing documents." },
          { name: "Hand over GST and TDS data", text: "The reconciled books feed your GST returns and TDS deposits, so filings match the ledgers." },
          { name: "Deliver monthly reports and year-end books", text: "You receive a monthly summary of profit, cash and dues, and at year end the books are closed ready for audit and the income tax return." },
        ],
      }}
      faqs={[
        { question: "Do I need to switch accounting software to work with you?", answer: "No — we work on whatever platform you already use, whether that's Zoho Books, Tally Prime, QuickBooks, or Xero. If you're not on any of these yet, we can help you choose and migrate, but it's never a requirement to start." },
        { question: "How quickly can you clean up backlog bookkeeping before an audit?", answer: "A few months of backlog with clean source documents can often be caught up in one to two weeks; a full year with disorganised records takes longer. The timeline depends on how far behind the books are and how organised the underlying invoices and bank statements are, and we'll give you a realistic estimate after a first look." },
        { question: "Can you maintain books in US GAAP or IFRS format for our Indian subsidiary?", answer: "Yes — this is a specific service we provide for wholly-owned subsidiaries of overseas parent companies, including reporting in the parent's format alongside standard Indian statutory books, and coordination on FEMA/FC-GPR filings." },
        { question: "Do you handle reconciliation for Amazon or Flipkart sellers?", answer: "Yes — reconciling marketplace settlement reports against your books, tracking TCS deducted under GST, and inventory accounting is a routine part of our e-commerce bookkeeping service." },
        { question: "What's included in monthly MIS reporting?", answer: "A closed profit and loss statement, cash flow position, and a comparison against your budget where one exists — delivered on a fixed date every month, not whenever time allows." },
        { question: "Tally Prime or Zoho Books: which should a Chennai business use?", answer: "Both work. Tally Prime suits businesses with inventory, multiple godowns or a long history in Tally, and is widely known by Chennai accountants and auditors. Zoho Books suits service businesses and startups that want cloud access, bank feeds and online invoicing from anywhere. We keep books in either and can migrate opening balances if you decide to switch." },
        { question: "Is the audit trail (edit log) mandatory in accounting software?", answer: "For companies, yes. Since 1 April 2023 the Companies (Accounts) Rules require accounting software that records an audit trail of every change, with the date, and the feature cannot be disabled. The statutory auditor reports on it. When we set up or migrate books we check that the edit log is switched on in your Tally Prime or Zoho Books edition." },
        { question: "How long must a company keep its books in India?", answer: "Section 128 of the Companies Act, 2013 requires books of account and the relevant vouchers to be kept for at least 8 financial years before the current year. Income tax and GST rules also set their own periods, so in practice books are kept for at least 8 years and longer where an assessment or appeal is open." },
        { question: "Can you catch up a year of pending entries before the ITR or ROC deadline?", answer: "Usually, if source documents are available. We post the missing months in order, reconcile bank accounts and GST data, and prioritise what the return or the audit needs first. Tell us the deadline at the first call; if the backlog cannot be cleared in time, we say so and plan the filing around what can be done properly." },
        { question: "Do you come to our office or work online?", answer: "Most bookkeeping is done online from our Anna Nagar office using your Tally data, Zoho Books access or shared documents. Meetings can be held at our Anna Nagar office, by video, or at your premises by arrangement for Chennai clients who keep physical records." },
        { question: "Can the same firm keep our books and do our statutory audit?", answer: "No. A Chartered Accountant cannot audit books they keep, so if we keep a company's books we do not act as its statutory auditor. We can keep the books and work with your independent auditor, or act as auditor if someone else keeps the books." },
        { question: "What decides the monthly bookkeeping fee?", answer: "We do not publish price lists. The fee depends on the number of transactions, bank accounts and GSTINs, inventory, payroll, whether GST and TDS filing are included, any backlog and the reports you need. After reviewing your books we quote a fixed monthly fee in the engagement letter." },
        { question: "How is bookkeeping for a clinic different from a regular small business?", answer: "A clinic earns from several streams that behave differently: consultation fees, procedure charges, diagnostic or lab income, and pharmacy sales, each with its own margin and payment timing. A generic setup that books them as one revenue line balances, but cannot show which part of the practice is profitable or worth expanding. Clinic bookkeeping separates these streams, tracks insurance and TPA reimbursements, which lag cash consultations, against what has actually been collected, and classifies equipment and consumables correctly. Keeping streams apart also matters for GST, since healthcare services by clinics are generally exempt while over-the-counter pharmacy sales are not. Practice management software rarely produces this financial view on its own." },
      ]}
      relatedQuestions={[
        { question: "Do you also handle payroll alongside bookkeeping?", href: "/payroll-services-chennai" },
        { question: "How does bookkeeping connect to my statutory audit?", href: "/statutory-audit-chennai" },
        { question: "Can bookkeeping and Virtual CFO work be combined?", href: "/virtual-cfo-services" },
        { question: "Do you keep books for businesses outside India too?", href: "/outsourced-bookkeeping-services" },
      ]}
      relatedPosts={["catch-up-bookkeeping-how-long-what-to-send", "business-personal-expenses-separate"]}
      relatedSlugs={["outsourced-bookkeeping-services", "accounting-outsourcing-chennai", "virtual-cfo-services"]}
    />
  );
}
