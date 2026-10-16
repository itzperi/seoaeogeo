import type { Metadata } from "next";
import ComparisonTable from "@/components/ComparisonTable";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "GST Returns for Startups in Chennai | C S Rushil & Co.";
const description = "GST returns for startups: the first return set up correctly, input credit on opening stock, monthly filing. Book a consultation online or visit our office.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/gst-return-filing-for-startups" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/gst-return-filing-for-startups",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/gst-return-filing-for-startups`}
      serviceType={"GST returns for startups"}
      crumbLabel={"GST Returns"}
      crumbHref={"/gst-return-filing-for-startups"}
      parentCrumb={{ name: "GST Return Filing", href: "/gst-return-filing-chennai" }}
      eyebrow={"GST Returns · Startups"}
      h1={"GST Return Filing for Startups in Chennai"}
      subhead={"Monthly GST returns for early-stage companies, with the first return and the invoice format set up correctly from the start."}
      introHeading={"What does GST return filing involve for startups?"}
      intro={"A startup's first GST return sets habits that carry forward. The opening stock, invoice format and monthly reconciliation must be right from the start. Startups file GSTR-1 and GSTR-3B every month, and GSTR-9 only when the turnover limit applies. We set up the first return and the routine, so filings stay on time as the business grows."}
      keyFacts={[
        { label: "Returns covered", value: "GSTR-1, GSTR-3B, and GSTR-9 when the turnover limit applies" },
        { label: "First return", value: "Opening stock and invoice format set up before the first filing" },
        { label: "Monthly due dates", value: "GSTR-1 by the 11th and GSTR-3B by the 20th of the following month" },
        { label: "Common early issue", value: "Purchases claimed as credit before the supplier reports them in GSTR-2B" },
      ]}
      subServicesHeading={"What do we do for startups?"}
      subServices={[
        { name: "First return set-up", text: "The invoice series, GSTIN details, HSN codes and tax breakdown are set up before the first invoice is issued." },
        { name: "Opening stock and credit", text: "Credit on stock held at registration is claimed correctly, with the stock valuation documented." },
        { name: "Monthly routine", text: "Sales, purchases and bank entries are collected each month and reconciled before filing." },
        { name: "Growth check", text: "Turnover is watched against the limits for quarterly filing and for the annual return, so the routine changes at the right time." },
      ]}
      howTo={{
        heading: "How do we file the returns each month?",
        steps: [
          { name: "Set up the registration", text: "We check the GSTIN details, the business address, the bank account and the invoice series." },
          { name: "Document the opening position", text: "Opening stock is valued and recorded so the first return is supported." },
          { name: "Collect data monthly", text: "Sales invoices, purchase bills and bank receipts are collected in one place each month." },
          { name: "Reconcile and file", text: "Purchases are matched with GSTR-2B, GSTR-1 and GSTR-3B are filed on time, and the working papers are kept." },
          { name: "Review each year", text: "Turnover, filing frequency and the annual return are reviewed so the routine stays correct." },
        ],
      }}
      faqs={[
        { question: "What should a startup do before its first GST return?", answer: "Set up the invoice format with your GSTIN, HSN or SAC codes and the tax breakdown, and record the opening stock with its valuation. Mistakes in the first return tend to carry forward, so we check both before the first filing." },
        { question: "Can a startup claim credit on stock held before registration?", answer: "Credit on stock held on the day before liability arose can be claimed if the conditions are met, including filing the prescribed form within the time allowed. The stock must be properly valued, and the purchase invoices must be within the permitted age." },
        { question: "Do startups file GSTR-9 every year?", answer: "Not always. GSTR-9 applies only when annual turnover crosses the limit set in the rules, and that limit is checked each year. We track your turnover so the annual return is filed when it is required, and so that a change in the threshold does not catch you unprepared." },
        { question: "Should a startup file quarterly or monthly?", answer: "The QRMP scheme allows quarterly filing for businesses below a turnover limit, with tax for the first two months of a quarter paid monthly. Monthly filing is simpler to reconcile. We recommend the option that fits your volume and cash flow." },
        { question: "How do we avoid mismatches with suppliers?", answer: "Ask suppliers to file their GSTR-1 on time, and check your GSTR-2B every month. Credit is claimed only on invoices that appear in GSTR-2B, so the reconciliation catches any gap while it is still small. Keeping a list of suppliers who have not filed lets you follow up early each month." },
        { question: "Can you handle the GST returns while the company is growing?", answer: "Yes. As turnover grows, we review the filing frequency, invoice formats and annual return requirements, and update the routine so the filings stay on time. Growth often brings new states, new invoice types and higher volumes, and each change is planned before it affects a return." },
      ]}
      relatedSlugs={["gst-registration-chennai", "gst-return-filing-chennai", "gst-notice-reply-chennai"]}
    >
      <ComparisonTable
        heading="Returns for a startup in its first year"
        columns={["Return", "Purpose", "Due date"]}
        rows={[
          ["GSTR-1", "Outward supplies from the first month of registration", "11th of the following month (monthly filers)"],
          ["GSTR-3B", "Summary return and tax paid", "20th of the following month (monthly filers)"],
          ["ITC-01 (opening stock)", "Credit on stock held at registration, where applicable", "Within the time allowed"],
          ["GSTR-9", "Annual return, only when the turnover limit applies", "31 December after the financial year"],
        ]}
      />
    </ServicePageTemplate>
  );
}
