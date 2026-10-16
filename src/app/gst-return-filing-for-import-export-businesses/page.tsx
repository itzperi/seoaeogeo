import type { Metadata } from "next";
import ComparisonTable from "@/components/ComparisonTable";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "GST Returns for Importers and Exporters | C S Rushil & Co.";
const description = "GST returns for importers and exporters: IGST on imports, LUT for exports, export invoices and refund claims. Book a consultation online or visit our office.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/gst-return-filing-for-import-export-businesses" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/gst-return-filing-for-import-export-businesses",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/gst-return-filing-for-import-export-businesses`}
      serviceType={"GST returns for importers and exporters"}
      crumbLabel={"GST Returns"}
      crumbHref={"/gst-return-filing-for-import-export-businesses"}
      parentCrumb={{ name: "GST Return Filing", href: "/gst-return-filing-chennai" }}
      eyebrow={"GST Returns · Import and Export"}
      h1={"GST Return Filing for Import and Export Businesses in Chennai"}
      subhead={"Monthly returns for importers and exporters, with IGST on imports, export invoices under a letter of undertaking and refund claims reconciled before filing."}
      introHeading={"What does GST return filing involve for importers and exporters?"}
      intro={"Importers pay IGST on goods at the port, and can claim it as credit if the goods are used for taxable supplies. Exporters supply goods or services under a letter of undertaking (LUT), without paying IGST, and then claim refunds. Export invoices and shipping bills must agree before GSTR-1 and the refund claim are filed. We reconcile both each month."}
      keyFacts={[
        { label: "Imports", value: "IGST paid on bills of entry is claimed as credit where eligible" },
        { label: "Exports", value: "Supplies under a letter of undertaking, reported in GSTR-1 as exports" },
        { label: "Refunds", value: "Refund claims are prepared from shipping bills and realisation records" },
        { label: "LUT", value: "A letter of undertaking is filed for each financial year" },
      ]}
      subServicesHeading={"What do we do for importers and exporters?"}
      subServices={[
        { name: "Imports and IGST credit", text: "Bills of entry are matched with the IGST paid, and credit is claimed where the goods are used for taxable supplies." },
        { name: "Exports under LUT", text: "Export invoices are checked against shipping bills and the LUT for the year, so the zero-rated supply is supported." },
        { name: "Export reporting in GSTR-1", text: "Exports are reported in the export tables of GSTR-1, with the details the rules require." },
        { name: "Refund claims", text: "Refunds are computed from the shipping bills and the payment records, and the claim is filed with the required documents." },
      ]}
      howTo={{
        heading: "How do we file the returns each month?",
        steps: [
          { name: "Collect import and export records", text: "Bills of entry, shipping bills, export invoices, the LUT and payment records are collected for the month." },
          { name: "Reconcile shipping bills and invoices", text: "Each export invoice is matched with its shipping bill and the date of export." },
          { name: "Match import IGST", text: "The IGST on imports is matched with the bills of entry and claimed as credit where eligible." },
          { name: "Prepare GSTR-1 and GSTR-3B", text: "Exports and imports are reported in the correct tables, and tax payable is computed after credit." },
          { name: "Prepare the refund claim", text: "Where a refund applies, the claim is computed and supported with the documents the rules require." },
        ],
      }}
      faqs={[
        { question: "Do exporters pay GST on exports?", answer: "An export made under a letter of undertaking is zero-rated, so IGST is not paid at the time of supply, provided the conditions are met. The export must be supported by a shipping bill and the payment received within the time allowed. confirm the current conditions on cbic-gst.gov.in." },
        { question: "What is a letter of undertaking and when do I file it?", answer: "A letter of undertaking (LUT) is a declaration that allows exports without payment of IGST. It is filed for each financial year before exports begin, and the current filing requirement is confirmed on cbic-gst.gov.in each year. Exports made without a valid LUT attract IGST, which must then be claimed back as a refund." },
        { question: "How is IGST on imports claimed?", answer: "IGST paid on imports, shown on the bill of entry, can be claimed as credit if the goods are used for taxable supplies. The credit appears in GSTR-2B for the period, so the monthly reconciliation checks that the credit claimed matches the bills of entry and the amount actually available." },
        { question: "Why are my export refunds delayed?", answer: "Refund claims are delayed when shipping bills, invoices or realisation records do not match, or when documents are missing. We reconcile these before the claim is filed, which reduces the chance of a deficiency memo and the time taken to clear it." },
        { question: "Can I export without a GST registration?", answer: "Exports generally need a GST registration, since the supply is made by a registered person under the LUT. The conditions and the need for registration depend on your business, so we check your position before the first export and advise on the documents needed for it." },
        { question: "How do export invoices appear in GSTR-1?", answer: "Exports are reported in the export table of GSTR-1, with the shipping bill details and the type of export. Each export is checked against its shipping bill so the report is correct, and the total in GSTR-1 agrees with the export records kept for the period." },
      ]}
      relatedSlugs={["gst-return-filing-chennai", "gst-registration-chennai", "gst-notice-reply-chennai"]}
    >
      <ComparisonTable
        heading="Returns and forms for importers and exporters"
        columns={["Return or form", "What it covers", "Due date"]}
        rows={[
          ["GSTR-1", "Export invoices and outward supplies", "11th of the following month (monthly filers)"],
          ["GSTR-3B", "Summary return, IGST on imports claimed as credit", "20th of the following month (monthly filers)"],
          ["LUT", "Letter of undertaking for exports without IGST", "Filed for each financial year before exports"],
          ["Refund claim", "Refund of unutilised credit on exports", "Within the time limit in the rules"],
        ]}
      />
    </ServicePageTemplate>
  );
}
