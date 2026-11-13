import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import BookkeepingMarketSections from "@/components/BookkeepingMarketSections";
import { getBookkeepingMarket } from "@/lib/bookkeeping-markets";
import { SITE_URL } from "@/lib/site";

const PATH = "/outsourced-bookkeeping-australia";
const market = getBookkeepingMarket(PATH.slice(1))!;

export const metadata: Metadata = {
  title: { absolute: "Outsourced Bookkeeping for Australian Businesses | Xero, MYOB" },
  description:
    "Xero, MYOB and QuickBooks bookkeeping, reconciliations and EOFY handover for Australian businesses, kept from Chennai, with BAS lodged by your registered BAS or tax agent.",
  alternates: { canonical: PATH },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Outsourced Bookkeeping for Australian Businesses",
    description:
      "Xero and MYOB bookkeeping and reconciliations for Australian businesses, kept from Chennai, with BAS left to your registered agent.",
    url: PATH,
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${PATH}`}
      serviceType="Outsourced Bookkeeping"
      crumbLabel="Outsourced Bookkeeping for Australian Businesses"
      crumbHref={PATH}
      parentCrumb={{ name: "Outsourced Bookkeeping", href: "/outsourced-bookkeeping-services" }}
      eyebrow="Australian Businesses · Kept remotely from Chennai, India"
      h1="Outsourced Bookkeeping for Australian Businesses"
      subhead="Bookkeeping and reconciliations in Xero, MYOB or QuickBooks Online, payroll and super liabilities reconciled every pay run under Payday Super, and a clean 30 June handover for your accountant. BAS stays with your registered BAS or tax agent, as the Tax Agent Services Act requires."
      introHeading="How does outsourced bookkeeping work for an Australian business?"
      intro="You add our team as users in your Xero, MYOB or QuickBooks Online file and keep receipts flowing through Dext or Hubdoc. Each week or month we code bank feeds, reconcile bank, card and merchant accounts, keep debtors and creditors current, and reconcile PAYG withholding and super payable after each pay run. Because we are not registered with the Tax Practitioners Board, your registered BAS agent or tax agent reviews and lodges BAS, working from books that are already reconciled."
      citation={{ label: "Tax Practitioners Board — Outsourcing and offshoring", href: "https://www.tpb.gov.au/outsourcing-and-offshoring" }}
      keyFacts={[
        { label: "Who it is for", value: "Australian sole traders, partnerships, companies and trusts, and the BAS or tax agents who look after them." },
        { label: "Software", value: "Xero, MYOB or QuickBooks Online, with Dext or Hubdoc for receipts. You keep the subscription and the file." },
        { label: "Who lodges BAS", value: "You, or your registered BAS or tax agent. We are not registered with the Tax Practitioners Board and do not lodge." },
        { label: "Time difference", value: "Sydney and Melbourne are 4.5 hours ahead of India in winter and 5.5 hours in summer; Perth is 2.5 hours ahead. The Australian afternoon is shared time." },
        { label: "Payday Super", value: "From 1 July 2026, super must reach the fund within 7 business days of each payday, so super payable is reconciled every pay run." },
      ]}
      subServicesHeading="What bookkeeping can an Australian business outsource to us?"
      subServices={[
        { name: "Bookkeeping & Reconciliations", text: "Bank feed coding, bank, card and merchant reconciliations, and supplier and customer ledgers kept current." },
        { name: "Accounts Payable & Receivable", text: "Bills entered for your approval, invoices raised and a weekly aged debtors list for follow-up." },
        { name: "Payroll & Super Reconciliations", text: "Payroll journals posted and PAYG withholding and super payable reconciled each pay run under Payday Super." },
        { name: "BAS-Ready Ledgers", text: "GST coding checked and the ledger reconciled before your BAS agent prepares and lodges the BAS." },
        { name: "Catch-Up & Xero Clean-Up", text: "Unreconciled months or years brought current before EOFY, a BAS deadline or a change of accountant." },
        { name: "EOFY Handover", text: "30 June trial balance, asset register, loan and shareholder accounts and reconciliations for your tax agent." },
      ]}
      howTo={{
        heading: "How do you get started with outsourced bookkeeping from India?",
        steps: [
          { name: "Initial consultation", text: "A 15-minute call in the Australian afternoon about your business, your software, your BAS cycle and where the books are today." },
          { name: "Review of your books", text: "We look at the last reconciled period, unreconciled items and any backlog, and agree who your registered BAS or tax agent is." },
          { name: "Engagement letter and data terms", text: "A written engagement letter with confidentiality and data handling terms, so you can meet APP 8 before disclosing data overseas." },
          { name: "Access and receipts", text: "You invite us into Xero, MYOB or QuickBooks and agree how receipts and bills reach us." },
          { name: "Catch-up, then a routine around your BAS cycle", text: "Backlog is cleared first, then the books close on a timetable that leaves your BAS agent time to review and lodge." },
        ],
      }}
      faqs={[
        { question: "Can an overseas bookkeeper do my BAS?", answer: "Not on their own. Under the Tax Agent Services Act 2009, BAS services for a fee must be provided by a registered BAS or tax agent. An unregistered bookkeeper, offshore or not, can record transactions and reconcile accounts, and can help with BAS work only under the supervision and control of a registered agent, who lodges it and stays responsible. That is how we work." },
        { question: "Are you registered with the Tax Practitioners Board?", answer: "No. We are a Chartered Accountancy firm in Chennai, India, regulated by the Institute of Chartered Accountants of India, and we do not hold Australian TPB registration. That is why BAS and tax returns stay with you or your registered agent, and our work is bookkeeping, reconciliations and preparation they can rely on." },
        { question: "What changes with Payday Super?", answer: "From 1 July 2026, employers must make sure super guarantee contributions reach each employee's fund within 7 business days of payday, instead of paying quarterly. That makes super payable a liability to reconcile every pay run. We reconcile it after each pay run and flag anything unpaid or late, while you or your payroll provider make the payments and Single Touch Payroll reports." },
        { question: "Do you work in Xero or MYOB?", answer: "Both, as well as QuickBooks Online, working in your own subscription so the file and its history stay with you. We do not claim vendor certifications or partner status. If you are moving from MYOB to Xero or the other way, we can help bring opening balances across before regular work starts." },
        { question: "Is it safe to send my business data offshore?", answer: "Australian Privacy Principle 8 requires a business that discloses personal information overseas to take reasonable steps so the recipient handles it in line with the APPs, and the business usually stays accountable. We sign confidentiality and data handling terms, work inside your own software under named logins you can remove, and do not keep copies outside it." },
        { question: "Can you clean up years of unreconciled Xero?", answer: "Yes. Catch-up is scoped separately: we reconcile each bank account month by month, fix duplicated and miscoded transactions and GST codes, and list what needs your input or your BAS agent's decision. How long it takes depends on how many periods are open and whether statements and receipts are complete." },
        { question: "How do Australian and Indian working hours fit together?", answer: "Sydney and Melbourne are 4.5 hours ahead of India during AEST and 5.5 hours ahead during daylight saving; Brisbane stays 4.5 hours ahead and Perth 2.5 hours. Our working day overlaps the Australian afternoon, so questions sent in the morning are usually answered that afternoon." },
        { question: "How much does outsourced bookkeeping cost in Australia?", answer: "We do not publish price lists. The fee depends on transaction volume, the number of bank and merchant accounts, payroll headcount and pay frequency, your BAS cycle, any backlog and the reporting you need. After reviewing your books we quote a fixed fee in Australian dollars in the engagement letter." },
        { question: "How long must Australian businesses keep records?", answer: "Generally 5 years from when the record was prepared or obtained, or from when the transaction was completed, whichever is later. The books stay in your own Xero, MYOB or QuickBooks subscription, so the records remain yours." },
      ]}
      relatedQuestions={[
        { question: "Are you an accounting firm looking for offshore preparation support?", href: "/outsourced-accounting-for-cpa-firms" },
        { question: "Do you also need a part-time finance lead, not just books?", href: "/virtual-cfo-services" },
        { question: "Are you an Australian company setting up in India?", href: "/company-registration-india-for-foreigners" },
      ]}
      relatedPosts={["can-overseas-bookkeeper-do-bas-australia", "is-it-safe-to-outsource-bookkeeping-to-india"]}
      relatedSlugs={["outsourced-bookkeeping-services", "virtual-cfo-services", "company-registration-india-for-foreigners"]}
    >
      <BookkeepingMarketSections market={market} />
    </ServicePageTemplate>
  );
}
