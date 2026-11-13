import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import BookkeepingMarketSections from "@/components/BookkeepingMarketSections";
import { getBookkeepingMarket } from "@/lib/bookkeeping-markets";
import { SITE_URL } from "@/lib/site";

const PATH = "/outsourced-bookkeeping-singapore";
const market = getBookkeepingMarket(PATH.slice(1))!;

export const metadata: Metadata = {
  title: { absolute: "Outsourced Bookkeeping for Singapore Companies | Xero" },
  description:
    "Monthly Xero or QuickBooks bookkeeping, GST F5 figures and year-end SFRS books ready for your tax agent and corporate secretary, kept by a Chartered Accountancy team in Chennai.",
  alternates: { canonical: PATH },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Outsourced Bookkeeping for Singapore Companies",
    description:
      "Xero and QuickBooks bookkeeping, GST F5 figures and year-end books for Singapore companies, kept from Chennai with the Singapore afternoon as shared hours.",
    url: PATH,
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${PATH}`}
      serviceType="Outsourced Bookkeeping"
      crumbLabel="Outsourced Bookkeeping for Singapore Companies"
      crumbHref={PATH}
      parentCrumb={{ name: "Outsourced Bookkeeping", href: "/outsourced-bookkeeping-services" }}
      eyebrow="Singapore Companies · Kept remotely from Chennai, India"
      h1="Outsourced Bookkeeping for Singapore Companies"
      subhead="Monthly bookkeeping in Xero, QuickBooks Online or Zoho Books, quarterly GST F5 figures once you are registered, and year-end books under SFRS that your tax agent and corporate secretary can file from. Singapore is 2.5 hours ahead of Chennai, so your whole afternoon is shared working time."
      introHeading="How does outsourced bookkeeping work for a Singapore company?"
      intro="You invite our team into your Xero, QuickBooks Online or Zoho Books file and keep receipts flowing through Dext or a shared folder. Each month we record transactions, reconcile SGD and foreign-currency bank accounts, revalue foreign balances and send management accounts with a short list of questions. Once you are GST-registered we prepare the GST F5 figures each quarter. At year end your tax agent and corporate secretary receive a trial balance and draft SFRS financial statements to file the ECI, Form C-S or Form C, and the annual return with ACRA."
      citation={{ label: "IRAS — Record keeping requirements for companies", href: "https://www.iras.gov.sg/taxes/corporate-income-tax/basics-of-corporate-income-tax/record-keeping-requirements" }}
      keyFacts={[
        { label: "Who it is for", value: "Singapore private limited companies, startups, e-commerce businesses and regional holding companies with Indian or Southeast Asian operations." },
        { label: "Software", value: "Xero, QuickBooks Online or Zoho Books, with Dext for receipts. You keep the subscription and the file." },
        { label: "Who files in Singapore", value: "Your tax agent files GST F5, ECI and Form C-S or Form C with IRAS; your corporate secretary files the annual return and XBRL with ACRA." },
        { label: "Time difference", value: "Singapore is 2.5 hours ahead of India all year; 12:00 pm to 6:00 pm Singapore time overlaps with the Chennai working day." },
        { label: "Key dates", value: "Corporate Income Tax returns are due on 30 November each year; GST F5 is due one month after each quarter." },
      ]}
      subServicesHeading="What bookkeeping can a Singapore company outsource to us?"
      subServices={[
        { name: "Monthly Bookkeeping & Management Accounts", text: "Sales, purchases and expenses recorded, bank and card accounts reconciled, and a monthly profit and loss and balance sheet." },
        { name: "Multi-Currency Accounting", text: "USD, INR, MYR and other currency accounts reconciled and revalued at month end, with realised and unrealised exchange differences shown separately." },
        { name: "GST F5 Figures", text: "Standard-rated, zero-rated and exempt supplies, input tax and imported services prepared box by box and reconciled to the ledger each quarter." },
        { name: "Year-End Books under SFRS", text: "Trial balance, fixed asset schedule and draft financial statements for your tax agent and corporate secretary." },
        { name: "Catch-Up Bookkeeping", text: "Backlog years brought current before the 30 November filing deadline, an audit or a fundraise." },
        { name: "Singapore–India Group Books", text: "Consistent charts of accounts and intercompany reconciliations where the Singapore company owns an Indian subsidiary." },
      ]}
      howTo={{
        heading: "How do you get started with outsourced bookkeeping from India?",
        steps: [
          { name: "Initial consultation", text: "A 15-minute call in the Singapore afternoon about your company, its GST status, your software and where the books are today." },
          { name: "Review of your books", text: "We look at the last closed month, unreconciled items and any backlog years, and agree the scope with you." },
          { name: "Engagement letter and data terms", text: "A written engagement letter with confidentiality and data protection terms that meet your PDPA transfer obligations." },
          { name: "Access and receipts", text: "You invite us into Xero, QuickBooks or Zoho Books and agree how bills and receipts reach us." },
          { name: "Catch-up, then monthly routine", text: "Any backlog is cleared first, then the books close monthly and GST figures are ready before each quarterly deadline." },
        ],
      }}
      faqs={[
        { question: "Can an overseas firm keep the books of a Singapore company?", answer: "Yes. Singapore law requires the company to keep proper accounting records, not that a Singapore-based bookkeeper keeps them. We keep the books from Chennai in your own Xero, QuickBooks or Zoho Books file. Filings with ACRA and IRAS stay with your Singapore corporate secretary and tax agent, which is where corporate service rules expect them to sit." },
        { question: "Who files Form C-S and the annual return with ACRA?", answer: "Your Singapore tax agent files the ECI and Form C-S, C-S (Lite) or Form C with IRAS, and your corporate secretary files the annual return and XBRL financial statements with ACRA. We give them closed books, a trial balance and draft SFRS financial statements, so their filing work starts from reconciled figures." },
        { question: "When does my company need to register for GST?", answer: "When taxable supplies exceed S$1 million in a calendar year, or are expected to in the next 12 months. GST is currently 9%. We watch your rolling taxable turnover in the ledger and flag when it is getting close, so registration can be planned rather than discovered late." },
        { question: "Do you prepare GST F5 returns?", answer: "We prepare the GST F5 figures box by box from the ledger, including standard-rated, zero-rated and exempt supplies and claimable input tax, with a reconciliation. You or your tax agent review and submit the return through myTax Portal by the due date, one month after the end of each quarter." },
        { question: "How long does a Singapore company have to keep its records?", answer: "At least 5 years. IRAS requires business records and supporting documents to be kept for 5 years from the relevant Year of Assessment, and the Companies Act also requires accounting records to be kept for 5 years. Because the books stay in your own cloud software, the history stays with the company." },
        { question: "Will my books be ready for the 30 November tax deadline?", answer: "If the monthly routine is running, yes: the year-end trial balance and draft financial statements are prepared soon after your financial year closes, leaving your tax agent time for the ECI and the return. If there is backlog, we agree a catch-up plan dated back from your filing deadlines in the engagement letter." },
        { question: "How is PDPA handled when data is accessed from India?", answer: "The PDPA requires a Singapore company that transfers personal data overseas to make sure the recipient protects it to a comparable standard, usually by contract. We sign confidentiality and data protection terms, work inside your own software under named logins, and remove access when the engagement ends." },
        { question: "How much does outsourced bookkeeping cost for a Singapore company?", answer: "We do not publish price lists. The fee depends on monthly transaction volume, the number of bank accounts and currencies, GST registration, any backlog, payroll and the reporting you need. After reviewing your books we quote a fixed monthly fee in the engagement letter, with catch-up work quoted separately." },
        { question: "Can you also handle my company's Indian subsidiary?", answer: "Yes. Many Singapore companies own an Indian subsidiary. We can keep both sets of books on aligned charts of accounts, reconcile intercompany balances, and handle the Indian side's own compliance under Indian law, such as ROC, GST, TDS and FEMA filings, which our firm does file directly." },
      ]}
      relatedQuestions={[
        { question: "Is your Singapore company setting up an Indian subsidiary?", href: "/india-subsidiary-for-singapore-companies" },
        { question: "Who looks after the Indian subsidiary's compliance once it exists?", href: "/india-subsidiary-compliance-cfo" },
        { question: "Are you an Indian living in Singapore with tax questions in India?", href: "/nri-tax-services-singapore" },
      ]}
      relatedPosts={["is-it-safe-to-outsource-bookkeeping-to-india", "catch-up-bookkeeping-how-long-what-to-send"]}
      relatedSlugs={["outsourced-bookkeeping-services", "india-subsidiary-for-singapore-companies", "india-subsidiary-compliance-cfo"]}
    >
      <BookkeepingMarketSections market={market} />
    </ServicePageTemplate>
  );
}
