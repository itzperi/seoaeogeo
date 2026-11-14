import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import BookkeepingMarketSections from "@/components/BookkeepingMarketSections";
import { getBookkeepingMarket } from "@/lib/bookkeeping-markets";
import { SITE_URL } from "@/lib/site";

const PATH = "/outsourced-bookkeeping-uk";
const market = getBookkeepingMarket(PATH.slice(1))!;

export const metadata: Metadata = {
  title: { absolute: "Outsourced Bookkeeping for UK Businesses | Xero & MTD" },
  description:
    "Xero, QuickBooks and FreeAgent bookkeeping, MTD-ready VAT figures and MTD for Income Tax records for UK companies, sole traders and landlords, kept in India.",
  alternates: { canonical: PATH },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Outsourced Bookkeeping for UK Businesses",
    description:
      "Monthly Xero or QuickBooks bookkeeping, VAT return figures and Making Tax Digital records for UK businesses, kept by a Chartered Accountancy team in Chennai.",
    url: PATH,
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${PATH}`}
      serviceType="Outsourced Bookkeeping"
      crumbLabel="Outsourced Bookkeeping for UK Businesses"
      crumbHref={PATH}
      parentCrumb={{ name: "Outsourced Bookkeeping", href: "/outsourced-bookkeeping-services" }}
      eyebrow="UK Businesses · Kept remotely from Chennai, India"
      h1="Outsourced Bookkeeping for UK Businesses"
      subhead="Monthly bookkeeping in Xero, QuickBooks, FreeAgent or Sage, VAT return figures reconciled before each quarter, and the digital records Making Tax Digital for Income Tax now asks of sole traders and landlords. You or your UK accountant submit to HMRC."
      introHeading="How does outsourced bookkeeping work for a UK business?"
      intro="You add our team as users in your Xero, QuickBooks, FreeAgent or Sage file and keep sending receipts the way you do now, for example through Dext or Hubdoc. Each month we code bank transactions, reconcile every account, keep the sales and purchase ledgers current and send you a short report with any questions. Before each VAT quarter we prepare the return figures and reconcile them to the VAT control account. You, or your UK accountant acting as your HMRC agent, review and submit them."
      citation={{ label: "GOV.UK — Making Tax Digital for VAT", href: "https://www.gov.uk/government/collections/making-tax-digital-for-vat" }}
      keyFacts={[
        { label: "Who it is for", value: "UK limited companies, sole traders, partnerships and landlords, including those newly brought into Making Tax Digital for Income Tax." },
        { label: "Software", value: "Xero, QuickBooks Online, FreeAgent or Sage, with Dext or Hubdoc for receipts. You keep the subscription and the file." },
        { label: "Who submits to HMRC", value: "You, through MTD-compatible software, or your UK accountant as your agent. We prepare the figures." },
        { label: "Time difference", value: "India is 4.5 hours ahead during British Summer Time and 5.5 hours ahead during GMT, so the UK morning is shared working time." },
        { label: "Data protection", value: "Covered by a data processing agreement and the ICO's IDTA or UK Addendum, because UK GDPR treats access from India as a restricted transfer." },
      ]}
      subServicesHeading="What bookkeeping can a UK business outsource to us?"
      subServices={[
        { name: "Monthly Bookkeeping", text: "Bank feed coding, receipt matching, reconciliations, accruals and prepayments, with a monthly profit and loss and an open-items list." },
        { name: "VAT Return Figures", text: "Nine-box VAT figures for standard, flat rate and cash accounting schemes, reconciled to the VAT control account before you or your agent submit." },
        { name: "MTD for Income Tax Records", text: "Digital records and quarterly income and expense totals for sole traders and landlords, ready for each quarterly update to HMRC." },
        { name: "Catch-Up Bookkeeping", text: "Unreconciled months brought current before a VAT deadline, a year end or a move to a new accountant." },
        { name: "Year-End Handover", text: "Trial balance, fixed asset register, director's loan account analysis and accruals, ready for your accountant's statutory accounts and CT600." },
        { name: "Payroll and Pension Journals", text: "Payroll and workplace pension journals posted from your bureau's reports and liabilities reconciled to the bank." },
      ]}
      howTo={{
        heading: "How do you get started with outsourced bookkeeping from India?",
        steps: [
          { name: "Initial consultation", text: "A 15-minute call during the UK morning about your business, your software, your VAT scheme and where the books are today." },
          { name: "Review of your books", text: "We look at the last closed month, unreconciled items, the last VAT return and any backlog, and agree the scope." },
          { name: "Engagement letter and data terms", text: "A written engagement letter, a data processing agreement and the UK international transfer terms, before we see any client data." },
          { name: "Access and receipts", text: "You add us as users in Xero, QuickBooks, FreeAgent or Sage, and agree how receipts and bills reach us, for example Dext or Hubdoc." },
          { name: "Catch-up, then monthly routine", text: "Any backlog is cleared first, then each month and VAT quarter runs to the dates agreed with you and your accountant." },
        ],
      }}
      faqs={[
        { question: "Can an overseas bookkeeper submit my VAT return to HMRC?", answer: "We do not submit to HMRC. We prepare the VAT return figures in your Making Tax Digital software and reconcile them to the ledger; you then submit them yourself, or your UK accountant submits them as your authorised agent. Keeping submission with you or a UK agent means the person who signs off the return is the one HMRC deals with." },
        { question: "Does Making Tax Digital for Income Tax apply to me?", answer: "From 6 April 2026 it applies to sole traders and landlords whose combined self-employment and property income is over £50,000, falling to £30,000 from April 2027 and £20,000 from April 2028. If you are in scope you need digital records and quarterly updates. We keep the records and prepare each quarter's totals; you or your agent send the updates." },
        { question: "Is it legal and safe to have my books kept in India?", answer: "Yes, outsourcing bookkeeping overseas is lawful, but UK GDPR treats access to personal data from India as a restricted transfer. You remain the controller, we act as processor under a data processing agreement, and the transfer relies on the ICO's IDTA or the UK Addendum. We work inside your own software under named logins, so the data stays in your subscription." },
        { question: "Do I still need a UK accountant?", answer: "For most limited companies, yes. We keep the books and prepare figures, while your UK accountant prepares the statutory accounts, the CT600 and your self-assessment, and files with Companies House and HMRC. Many clients use us to keep the books current so their UK accountant spends less time fixing records at year end." },
        { question: "Which software do you work in?", answer: "Xero, QuickBooks Online, FreeAgent and Sage for bookkeeping, with Dext or Hubdoc for receipts and your bank feeds connected inside the software. You keep the subscription, so the file and its history stay yours. We do not claim vendor certifications or partner status for these platforms." },
        { question: "How much does outsourced bookkeeping cost for a UK small business?", answer: "We do not publish price lists. The fee depends on monthly transaction volume, the number of bank and card accounts, whether you are VAT registered and on which scheme, any backlog, payroll and how quickly you want the month closed. After reviewing your books we quote a fixed monthly fee in pounds sterling in the engagement letter." },
        { question: "What does the time difference mean for me?", answer: "India is 4.5 hours ahead of the UK during British Summer Time and 5.5 hours ahead during GMT. Our working day overlaps with the UK morning and early afternoon, so questions raised in the morning are usually answered the same day, and work sent in the afternoon is often done by your next morning." },
        { question: "Can you help when my books are months behind before a VAT deadline?", answer: "Yes. We scope catch-up work separately, reconcile the missing months in date order and prioritise the open VAT periods so the figures are ready for submission. How fast this can be done depends on how many months are behind and whether bank statements and receipts are complete, and we tell you honestly if a deadline cannot be met." },
        { question: "Will VAT be charged on your invoice?", answer: "No Indian GST is added to bookkeeping supplied to a UK client, because it is generally an export of services under Indian GST law. A VAT-registered UK business buying services from overseas usually accounts for VAT under the reverse charge on its own return; your UK accountant can confirm how this applies to you." },
      ]}
      relatedQuestions={[
        { question: "Are you a UK accountancy practice looking for outsourced preparation?", href: "/outsourced-accounting-for-uk-accountants" },
        { question: "Are you a UK company setting up in India?", href: "/india-subsidiary-for-uk-companies" },
        { question: "Do you also need Indian tax help as an NRI living in the UK?", href: "/nri-tax-services-uk" },
      ]}
      relatedPosts={["mtd-income-tax-records-sole-traders-2026", "is-it-safe-to-outsource-bookkeeping-to-india"]}
      relatedSlugs={["outsourced-bookkeeping-services", "outsourced-accounting-for-uk-accountants", "india-subsidiary-for-uk-companies"]}
    >
      <BookkeepingMarketSections market={market} />
    </ServicePageTemplate>
  );
}
