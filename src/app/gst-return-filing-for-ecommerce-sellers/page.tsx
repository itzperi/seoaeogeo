import type { Metadata } from "next";
import Link from "next/link";
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

const linkClass = "font-medium text-royal-violet underline underline-offset-2";
const h2Class = "mt-14 text-2xl text-obsidian";
const pClass = "mt-4 max-w-3xl leading-relaxed text-slate";

const SETTLEMENT = [
  ["Order value of shipped orders", "GSTR-1: B2C sales by state of the buyer and rate, B2B sales invoice by invoice", "Total taxable value for the month agrees to your sales register, not to the payout"],
  ["Returns and cancellations", "Reduce the taxable value in GSTR-1 for the period of the return, with credit notes where invoices were issued", "Net value matches the returns the operator reports in GSTR-8"],
  ["GST TCS deducted by the operator", "Accepted in the TCS and TDS credit received form; credited to the electronic cash ledger", "Amount per month agrees to the operator's GSTR-8 for your GSTIN; it is not a sales deduction"],
  ["Commission, fixed fees, shipping and fulfilment charges", "The operator's tax invoices to you; input tax credit through GSTR-2B", "Each fee invoice appears in GSTR-2B under the operator's GSTIN before credit is claimed"],
  ["Income-tax TDS on e-commerce payouts", "Not GST; claimed against income tax in your income-tax return", "Keep it separate from GST TCS in the ledger"],
  ["Reserves, holdbacks and payout timing", "No GST effect; a timing difference between sale and settlement", "Track open items until they are released in a later settlement"],
];

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
        { label: "Marketplace TCS", value: "0.5% of net taxable value (0.25% CGST plus 0.25% SGST, or IGST on inter-state supplies), reported by the operator in GSTR-8 by the 10th" },
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
        { question: "What is TCS and does it reduce my return?", answer: "Tax collected at source (TCS) is collected by the e-commerce operator and reported in its GSTR-8. You accept it on the GST portal, and it is then credited to your electronic cash ledger, from which GSTR-3B tax can be paid. It is not input tax credit. Unmatched TCS delays that cash balance, so we reconcile it monthly." },
        { question: "What TCS rate does a marketplace collect under GST?", answer: "From July 2024 the rate is 0.5% of the net value of taxable supplies made through the operator: 0.25% CGST plus 0.25% SGST on intra-state sales, or the equivalent IGST on inter-state sales. Net value means supplies made through the platform in the month, less returns. Section 52 of the CGST Act caps the rate at 1%." },
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
          ["GSTR-8 (operator's TCS statement)", "Tax collected at source on the net value of supplies made through the platform", "Filed by the operator by the 10th of the following month; the seller accepts the credit on the portal"],
        ]}
      />

      <h2 className={h2Class}>How does TCS collected by the marketplace reach your GSTR-3B?</h2>
      <p className={pClass}>
        The operator collects TCS on the net value of your taxable sales through its platform, pays it to the
        government and reports it in GSTR-8 by the 10th of the next month. You accept those amounts on the GST
        portal; once that form is filed, the TCS is credited to your electronic cash ledger and can pay GSTR-3B tax.
      </p>
      <ol className="mt-4 max-w-3xl list-decimal space-y-2 pl-6 leading-relaxed text-slate">
        <li>
          <strong className="text-obsidian">Collection:</strong> under section 52 of the CGST Act the operator
          collects tax on the net value of taxable supplies made through it, meaning the month&apos;s supplies less
          returns. The rate is 0.25% CGST plus 0.25% SGST on intra-state supplies (Notification 15/2024-Central Tax),
          with IGST at the equivalent rate on inter-state supplies.
        </li>
        <li>
          <strong className="text-obsidian">GSTR-8:</strong> the operator pays the TCS and files its statement
          within ten days after the end of the month, and an annual statement before 31 December after the year.
        </li>
        <li>
          <strong className="text-obsidian">Accept on the portal:</strong> the amounts appear in the &quot;TCS
          and TDS credit received&quot; form for each collector GSTIN. Accept or reject each entry and file the form;
          until it is filed, the credit does not reach the cash ledger.
        </li>
        <li>
          <strong className="text-obsidian">Use in GSTR-3B:</strong> the credit sits in the electronic cash ledger,
          not the credit ledger, so it can pay tax, interest and late fees. An unused balance can be carried forward
          or claimed as a refund of excess cash ledger balance.
        </li>
        <li>
          <strong className="text-obsidian">Matching:</strong> the operator&apos;s GSTR-8 details are matched with
          your GSTR-1, and any discrepancy is communicated to both of you, so reject an entry only when it is
          genuinely wrong and ask the operator to correct it.
        </li>
      </ol>
      <p className={pClass}>
        Sources: section 52 of the CGST Act on the{" "}
        <a href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter10/section52_v1.00.html" target="_blank" rel="noopener noreferrer" className={linkClass}>
          CBIC tax information portal
        </a>{" "}
        and the GST portal&apos;s{" "}
        <a href="https://tutorial.gst.gov.in/userguide/inputtaxcredit/manual_tds_and_tcs_credit_received.htm" target="_blank" rel="noopener noreferrer" className={linkClass}>
          user manual for the TDS and TCS credit received form
        </a>
        .
      </p>

      <h2 className={h2Class}>How do you reconcile a marketplace settlement report with your GST returns?</h2>
      <p className={pClass}>
        Start from order-level sales, not the payout. Taxable sales and returns go to GSTR-1 by state and rate; TCS
        is matched to the operator&apos;s GSTR-8 and accepted into the cash ledger; the operator&apos;s commission
        and fee invoices are input tax credit only when they appear in GSTR-2B. Reserves are timing differences.
      </p>
      <div className="mt-6 max-w-4xl overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-carbon text-left">
              {["Settlement line", "Where it belongs", "What to check"].map((c) => (
                <th key={c} scope="col" className="px-4 py-3 font-medium text-obsidian">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SETTLEMENT.map((row) => (
              <tr key={row[0]} className="border-b border-ash align-top">
                {row.map((cell, j) => (
                  <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-obsidian" : "text-slate"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={pClass}>
        The reconciliation feeds the same monthly cycle as our{" "}
        <Link href="/gst-return-filing-chennai" className={linkClass}>
          GST return filing service in Chennai
        </Link>
        . Sellers using Amazon can also see our page on{" "}
        <Link href="/gst-return-filing-for-amazon-sellers" className={linkClass}>
          GST returns for Amazon sellers
        </Link>
        , and our team in Anna Nagar works with sellers across India online.
      </p>
    </ServicePageTemplate>
  );
}
