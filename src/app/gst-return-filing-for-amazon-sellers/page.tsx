import type { Metadata } from "next";
import ComparisonTable from "@/components/ComparisonTable";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "GST Returns for Amazon Sellers in Chennai | C S Rushil & Co.";
const description = "GST returns for Amazon sellers: GSTR-1, GSTR-3B, Amazon TCS and settlements reconciled before each filing. Book a consultation online or visit our office.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/gst-return-filing-for-amazon-sellers" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/gst-return-filing-for-amazon-sellers",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/gst-return-filing-for-amazon-sellers`}
      serviceType={"GST returns for Amazon sellers"}
      crumbLabel={"GST Returns"}
      crumbHref={"/gst-return-filing-for-amazon-sellers"}
      parentCrumb={{ name: "GST Return Filing", href: "/gst-return-filing-chennai" }}
      eyebrow={"GST Returns · Amazon"}
      h1={"GST Return Filing for Amazon Sellers in Chennai"}
      subhead={"Amazon settlement, TCS and fulfilment-centre stock reconciled to GSTR-1 and GSTR-3B every month."}
      introHeading={"What does GST return filing involve for Amazon sellers?"}
      intro={"Amazon sellers file GSTR-1 and GSTR-3B every month. Amazon collects tax at source on eligible sales and reports it in its own return, so the seller must match the Amazon statements to the sales it reports. Fulfilment centre stock moves between states and must be reconciled too. We reconcile the Amazon reports before every filing."}
      keyFacts={[
        { label: "Returns covered", value: "GSTR-1, GSTR-3B, GSTR-9 where applicable, and reconciliation of Amazon TCS" },
        { label: "Reports needed", value: "Sales and tax reports, settlement report, TCS report and fulfilment-centre stock report" },
        { label: "Monthly due dates", value: "GSTR-1 by the 11th and GSTR-3B by the 20th of the following month" },
        { label: "Most common issue", value: "Differences between Amazon's reported sales and the GSTR-1 totals" },
      ]}
      subServicesHeading={"What do we do for Amazon sellers?"}
      subServices={[
        { name: "Amazon sales reconciliation", text: "The sales and tax report is matched with GSTR-1 by state, rate and invoice, including returns and cancellations." },
        { name: "TCS matching", text: "Tax collected by Amazon on eligible sales is matched to Amazon's statement and claimed correctly as credit, with any gap raised early." },
        { name: "Settlement reconciliation", text: "Settlements, reserves and refund adjustments are separated from taxable value, with timing differences explained." },
        { name: "Fulfilment-centre stock", text: "Stock moved between states to fulfilment centres is tracked, and transfers are checked against the documents the law requires." },
      ]}
      howTo={{
        heading: "How do we file the returns each month?",
        steps: [
          { name: "Download the Amazon reports", text: "We take the sales and tax report, settlement report, TCS report and fulfilment-centre stock report for the month." },
          { name: "Reconcile sales to Amazon", text: "Amazon's sales are matched to your invoices, states and rates, and returns are adjusted for the period they belong to." },
          { name: "Prepare GSTR-1", text: "B2B invoices are listed individually and B2C sales are summarised by state and rate, then checked against the report totals." },
          { name: "Match purchases and TCS", text: "Input tax credit is claimed only on invoices suppliers have reported, and the Amazon TCS credit is matched to its statement." },
          { name: "File GSTR-3B", text: "Tax payable is computed after credit and TCS, paid from the ledger, and the working papers are kept for each month." },
        ],
      }}
      faqs={[
        { question: "Does Amazon collect GST on my sales?", answer: "Amazon collects tax at source (TCS) on eligible sales and reports it in its own return. You do not pay that amount twice. You claim the TCS as credit in your return after matching it to Amazon's monthly statement, so the claim and the report agree." },
        { question: "Why does my GSTR-1 not match the Amazon report?", answer: "The Amazon report includes returns, cancellations, reserves and sales from different periods. GSTR-1 must reflect the supplies made in the return period. Each difference is traced to its order or return, so the reconciliation can be explained if the department asks." },
        { question: "Do I need GST registration to sell on Amazon?", answer: "Amazon usually asks for a GSTIN for sellers in several categories, and sales across state lines can require registration. The limits and conditions depend on your category and state. We check your position against the current rules on cbic-gst.gov.in before you list, so registration is in place before the first sale." },
        { question: "How do I handle stock sent to Amazon warehouses in other states?", answer: "Stock moved between your location and an Amazon warehouse can need documents under the GST law, such as a delivery challan or invoice, depending on the movement. We check each movement before the stock leaves, so the transfer is documented correctly and the stock records agree with the returns for the period." },
        { question: "What if Amazon's TCS statement is late?", answer: "A late statement delays the matching of credit, so we record the tax collected for the period as received and reconcile it once the statement arrives. Unmatched amounts are followed up with Amazon, and filing is not delayed for them. The reconciliation is updated for the period in which the statement is received." },
        { question: "Can you handle returns for several Amazon accounts?", answer: "Yes. Each account is reconciled separately, then combined for GSTR-1 and GSTR-3B using one monthly checklist. Several accounts increase the chance of a mismatch, so the same steps apply to every account, and any difference is traced to its order or return before the return is filed." },
      ]}
      relatedSlugs={["gst-return-filing-for-ecommerce-sellers", "gst-return-filing-chennai", "gst-registration-chennai"]}
    >
      <ComparisonTable
        heading="Returns for Amazon sellers"
        columns={["Return or statement", "What it covers", "Due date"]}
        rows={[
          ["GSTR-1", "Outward supplies, including B2B invoices and state-wise B2C sales", "11th of the following month (monthly filers)"],
          ["GSTR-3B", "Summary return and tax paid after input tax credit and TCS", "20th of the following month (monthly filers)"],
          ["Amazon TCS statement", "Tax collected at source on eligible sales", "Issued by Amazon; seller matches the credit"],
          ["GSTR-9", "Annual return, where the turnover limit applies", "31 December after the financial year"],
        ]}
      />
    </ServicePageTemplate>
  );
}
