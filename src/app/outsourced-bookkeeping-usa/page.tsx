import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import BookkeepingMarketSections from "@/components/BookkeepingMarketSections";
import { getBookkeepingMarket } from "@/lib/bookkeeping-markets";
import { SITE_URL } from "@/lib/site";

const PATH = "/outsourced-bookkeeping-usa";
const market = getBookkeepingMarket(PATH.slice(1))!;

export const metadata: Metadata = {
  title: { absolute: "Outsourced Bookkeeping for US Small Businesses | QuickBooks" },
  description:
    "Monthly QuickBooks Online or Xero bookkeeping, catch-up clean-ups, 1099 tracking and a year-end package for your CPA, kept by a Chartered Accountancy team in Chennai.",
  alternates: { canonical: PATH },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Outsourced Bookkeeping for US Small Businesses",
    description:
      "QuickBooks Online and Xero bookkeeping, catch-up work and CPA-ready year-end books for US businesses, kept from Chennai, India.",
    url: PATH,
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${PATH}`}
      serviceType="Outsourced Bookkeeping"
      crumbLabel="Outsourced Bookkeeping for US Businesses"
      crumbHref={PATH}
      parentCrumb={{ name: "Outsourced Bookkeeping", href: "/outsourced-bookkeeping-services" }}
      eyebrow="US Businesses · Kept remotely from Chennai, India"
      h1="Outsourced Bookkeeping for US Small Businesses"
      subhead="A Chartered Accountancy team in Chennai keeps your QuickBooks Online or Xero books current every month, catches up books that have fallen behind, tracks 1099 vendors and hands your CPA a clean year-end package. Your CPA or Enrolled Agent still prepares and files your tax returns."
      introHeading="How does outsourced bookkeeping work for a US business?"
      intro="You give our team accountant access to your QuickBooks Online or Xero file and connect your bank feeds. Each month we categorise transactions, reconcile every bank, card, PayPal and Stripe account, post accruals and close the month by an agreed date, then send you a profit and loss, a balance sheet and a short list of questions. At year end your CPA receives reconciled books and supporting schedules. We do not prepare or file US federal or state tax returns; your CPA or Enrolled Agent does."
      citation={{ label: "IRS — Recordkeeping for small businesses", href: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }}
      keyFacts={[
        { label: "Who it is for", value: "US sole proprietors, single and multi-member LLCs, S corporations, C corporations and e-commerce sellers." },
        { label: "Software", value: "QuickBooks Online or Xero, with Bill.com, Gusto, ADP, Shopify, Amazon and Stripe data where used. You keep the subscription and the file." },
        { label: "Who files US returns", value: "Your CPA or Enrolled Agent. We prepare the books and the year-end package only." },
        { label: "Time difference", value: "India is 9.5 hours ahead of US Eastern time in summer and 10.5 hours in winter; work sent at your close of business is usually done by your next morning." },
        { label: "Invoicing", value: "Invoiced in US dollars from India. Services supplied to a client outside India generally qualify as an export of services for Indian GST." },
      ]}
      subServicesHeading="What bookkeeping work can a US business outsource to us?"
      subServices={[
        { name: "Monthly Bookkeeping & Close", text: "Bank and card feed categorisation, reconciliations for every account, accruals and a month-end close by an agreed working day, with a P&L, balance sheet and open-items list." },
        { name: "Catch-Up & Clean-Up Bookkeeping", text: "Months or years of unreconciled QuickBooks or Xero brought current before a tax deadline, a loan application or a sale, with a summary of what was corrected." },
        { name: "E-commerce Bookkeeping", text: "Shopify, Amazon, Etsy and Stripe payouts split into gross sales, fees, refunds and sales tax, with inventory and cost of goods sold tracked." },
        { name: "1099 Vendor Tracking", text: "W-9 collection reminders, contractor payment tracking and a year-end 1099-NEC and 1099-MISC list for you or your CPA to file." },
        { name: "Accounts Payable & Receivable", text: "Bills entered and scheduled in Bill.com or QuickBooks for your approval, invoices raised and receivables followed up on a weekly list." },
        { name: "CPA-Ready Year-End Package", text: "Adjusted trial balance, fixed asset and depreciation schedule, loan and equity roll-forwards and reconciliations, mapped to your return type." },
      ]}
      howTo={{
        heading: "How do you get started with outsourced bookkeeping from India?",
        steps: [
          { name: "Initial consultation", text: "A 15-minute call at a time that suits US hours to understand your business, your software and where the books are today." },
          { name: "Review of your books", text: "With read access to QuickBooks Online or Xero, we look at the last closed month, unreconciled items and any backlog, and agree the scope." },
          { name: "Engagement letter", text: "A written engagement letter sets out the work, the monthly close date, what you send us, confidentiality terms and the fee in US dollars." },
          { name: "Access and document flow", text: "You invite us as accountant or advisor users, connect bank feeds and agree how receipts and bills reach us, for example Dext, Hubdoc or a shared folder." },
          { name: "Catch-up, then monthly close", text: "Any backlog is cleaned up first, then each month closes on schedule, with a short report and a list of questions for you." },
        ],
      }}
      faqs={[
        { question: "Is it safe for a US business to outsource bookkeeping to India?", answer: "It can be, when the work is set up with controls you can see. Our team works inside your own QuickBooks Online or Xero file through accountant or advisor invites, under named logins you can remove at any time, so the data stays in your subscription. We sign a confidentiality agreement, use read-only bank access through your software's feeds, and never ask for your online banking passwords." },
        { question: "Do you file my US taxes or 1099s?", answer: "No. We keep the books and prepare the figures: a year-end package for your CPA and a list of 1099-NEC and 1099-MISC amounts. Your CPA or Enrolled Agent prepares and signs your federal and state returns, and you or your CPA file the 1099s. This keeps US filing responsibility with a US-licensed professional who knows your full tax position." },
        { question: "Can you catch up on months of unreconciled QuickBooks?", answer: "Yes. Catch-up work is scoped separately from monthly bookkeeping. We work through bank and card statements month by month, reconcile each account, correct miscategorised and duplicate transactions, and list what needs your input. A few months with complete statements usually takes a few weeks; a year or more with missing records takes longer, and we give you a timeline after reviewing the file." },
        { question: "Do I have to switch from QuickBooks Online or Xero?", answer: "No. We work in the software you already use, under your own subscription, so the file and its history stay yours if the engagement ends. If you are still on spreadsheets or QuickBooks Desktop, we can help you choose a cloud platform and move your opening balances across before monthly work begins." },
        { question: "How does the time difference affect turnaround?", answer: "India is 9.5 hours ahead of US Eastern time during daylight saving and 10.5 hours ahead in winter. Documents and questions you send by the end of your day are worked on during the Indian day, so answers and updated books are usually ready by your next morning. Calls are booked for the US morning, which is the Indian evening." },
        { question: "How much does outsourced bookkeeping cost for a US small business?", answer: "We do not publish price lists. The fee depends mainly on monthly transaction volume, the number of bank, card and payment accounts, whether there is backlog to clear, inventory, payroll and how quickly you need the month closed. After a short review of your books we quote a fixed monthly fee in US dollars in the engagement letter, with any catch-up work quoted separately." },
        { question: "How do you work with my CPA?", answer: "Your CPA stays your tax adviser. With your permission we can give your CPA access to the same books, answer their year-end questions and post the adjusting entries they propose. At year end they receive an adjusted trial balance, reconciliations and supporting schedules, so they start from closed books rather than a shoebox of statements." },
        { question: "Do you handle sales tax for online sellers?", answer: "We report taxable and exempt sales by state from Shopify, Amazon and your other channels, reconcile sales tax collected to the ledger, and flag states where your sales are approaching economic nexus thresholds. The returns themselves are filed by you, your CPA or your sales tax service, since registration and filing positions are a US tax decision." },
        { question: "Will I be charged Indian GST on your invoice?", answer: "Generally no. Bookkeeping we supply from India to a client located outside India, paid in foreign currency, is usually an export of services under Indian GST law and is zero-rated, so no Indian GST is added to the invoice. Whether the service has any US sales or use tax consequence for you is a question for your CPA." },
        { question: "Who will actually keep my books?", answer: "A named team in our Anna Nagar, Chennai office, supervised by a Chartered Accountant who is a member of the Institute of Chartered Accountants of India. You will know who works on your file, and you can verify the firm's details on the ICAI website. We do not pass work to unnamed sub-contractors." },
      ]}
      relatedQuestions={[
        { question: "Are you a US CPA firm looking for an offshore preparation team instead?", href: "/outsourced-accounting-for-cpa-firms" },
        { question: "Does your US business have, or plan, an Indian subsidiary?", href: "/india-subsidiary-for-us-companies" },
        { question: "Do you also need a part-time finance lead, not just books?", href: "/virtual-cfo-services" },
      ]}
      relatedPosts={["is-it-safe-to-outsource-bookkeeping-to-india", "catch-up-bookkeeping-how-long-what-to-send"]}
      relatedSlugs={["outsourced-bookkeeping-services", "outsourced-accounting-for-cpa-firms", "india-subsidiary-for-us-companies"]}
    >
      <BookkeepingMarketSections market={market} />
    </ServicePageTemplate>
  );
}
