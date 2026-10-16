import type { Metadata } from "next";
import ComparisonTable from "@/components/ComparisonTable";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "GST Returns for E-commerce Sellers | C S Rushil & Co.";
const description = "GST returns for e-commerce sellers: state-wise GSTR-1, GSTR-3B and marketplace settlements matched first. Book a consultation online or visit our office.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/gst-return-filing-for-ecommerce-sellers" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/gst-return-filing-for-ecommerce-sellers",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/gst-return-filing-for-ecommerce-sellers`}
      serviceType={"GST returns for e-commerce sellers"}
      crumbLabel={"GST Returns"}
      crumbHref={"/gst-return-filing-for-ecommerce-sellers"}
      parentCrumb={{ name: "GST Return Filing", href: "/gst-return-filing-chennai" }}
      eyebrow={"GST Returns · E-commerce"}
      h1={"GST Return Filing for E-commerce Sellers in Chennai"}
      subhead={"Monthly GST returns for sellers on online marketplaces and their own websites, reconciled to order and settlement reports before filing."}
      introHeading={"What does GST return filing involve for e-commerce sellers?"}
      intro={"E-commerce sellers file GSTR-1 for sales and GSTR-3B for tax payable, every month. Sales made through marketplaces and websites must be reported by state and rate, and tax collected at source by the operator must be matched to its statements. Reconcile orders, settlements and GSTR-2B before every filing."}
      keyFacts={[
        { label: "Returns covered", value: "GSTR-1 (with state-wise B2C sales), GSTR-3B, GSTR-9 where applicable" },
        { label: "Data needed", value: "Order report, settlement report, TCS statement and purchase bills" },
        { label: "Monthly due dates", value: "GSTR-1 by the 11th and GSTR-3B by the 20th of the following month" },
        { label: "Most common issue", value: "Settlement amounts that do not match the sales reported in GSTR-1" },
      ]}
      subServicesHeading={"What do we do for e-commerce sellers?"}
      subServices={[
        { name: "Order-to-return reconciliation", text: "Each marketplace order is matched with the invoice, the state of supply and the rate applied, so GSTR-1 reflects the sales that were actually made." },
        { name: "Settlement matching", text: "Commission, shipping, returns and reserves are separated from the taxable value, and timing differences between orders and payouts are explained." },
        { name: "TCS tracking", text: "Tax collected at source by the operator is matched against its monthly statement, so the credit is claimed correctly and any gap is raised early." },
        { name: "Website and marketplace sales", text: "Sales from your own website and from marketplaces are combined in the same returns, with payment gateway settlements reconciled to invoices." },
      ]}
      howTo={{
        heading: "How do we file the returns each month?",
        steps: [
          { name: "Collect the reports", text: "We take order, return and settlement reports from each platform, plus your purchase bills and bank entries for the month." },
          { name: "Reconcile sales", text: "Orders are matched to invoices, states and rates, and returns and cancellations are adjusted for the period they belong to." },
          { name: "Prepare GSTR-1", text: "B2B invoices are listed individually and B2C sales are summarised by state and rate, then checked against the sales totals." },
          { name: "Match purchases with GSTR-2B", text: "Input tax credit is claimed only on invoices that suppliers have reported, and missing invoices are followed up." },
          { name: "File GSTR-3B and track ledgers", text: "Tax payable is computed after credit and TCS, paid from the ledger, and the filed returns are kept with the working papers." },
        ],
      }}
      faqs={[
        { question: "Do all online sellers need GST registration?", answer: "Not in every case, but most sellers who sell across state lines or exceed the registration limit must register. The limits differ for goods and services and for special category states, so confirm the current limit on cbic-gst.gov.in. Some marketplaces ask for a GSTIN before listing, so we check your position first." },
        { question: "What is TCS and does it reduce my return?", answer: "Tax collected at source (TCS) is collected by the e-commerce operator on eligible supplies and reported by the operator. You claim it as credit in your return and cash ledger after matching it to the operator's statement. Unmatched TCS can delay your cash balance, so we reconcile it every month." },
        { question: "Which return shows my marketplace sales?", answer: "Sales are reported in GSTR-1, usually as B2C sales summarised by state and rate, plus invoice-level B2B sales. GSTR-3B summarises the tax payable. If the order report and GSTR-1 totals differ, the mismatch is likely to appear in a notice, so we compare the totals before filing." },
        { question: "Why do my sales and settlements not match?", answer: "Settlement reports net off returns, commission, shipping charges and reserves, and payouts can fall in a later period. GST is due on the value of supplies made, so the reconciliation needs order-level sales, returns and the date of each supply. Keep it as a monthly working paper." },
        { question: "What if I sell through several marketplaces?", answer: "Keep one ledger of sales by platform, state and rate, then combine them for GSTR-1. Each platform's tax collected at source is matched separately against its own statement. More accounts make mistakes more likely, so we use one monthly checklist for all of them, with the same reconciliation steps applied to each platform." },
        { question: "Can you file returns if I also sell through my own website?", answer: "Yes. Website and marketplace sales are combined in the same GST returns, so the total in GSTR-1 includes both. Payment gateway settlements are reconciled against your invoices, and any difference is explained before filing. One sales register for every channel makes the monthly reconciliation quick and reliable." },
      ]}
      relatedSlugs={["gst-return-filing-chennai", "gst-registration-chennai", "gst-notice-reply-chennai"]}
    >
      <ComparisonTable
        heading="Returns for e-commerce sellers"
        columns={["Return", "What it reports", "Due date"]}
        rows={[
          ["GSTR-1", "Outward supplies: B2B invoices and state-wise B2C sales", "11th of the following month (monthly filers)"],
          ["GSTR-3B", "Summary return and tax paid after input tax credit", "20th of the following month (monthly filers)"],
          ["GSTR-9", "Annual return, where the turnover limit applies", "31 December after the financial year"],
          ["Operator TCS statement", "Tax collected at source on eligible supplies", "Filed by the operator; seller matches the credit"],
        ]}
      />
    </ServicePageTemplate>
  );
}
