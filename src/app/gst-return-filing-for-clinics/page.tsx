import type { Metadata } from "next";
import ComparisonTable from "@/components/ComparisonTable";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "GST Returns for Clinics in Chennai | C S Rushil & Co.";
const description = "GST returns for clinics: exempt and taxable services, medicine sales and input credit checked before filing. Book a consultation online or visit our office.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/gst-return-filing-for-clinics" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/gst-return-filing-for-clinics",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/gst-return-filing-for-clinics`}
      serviceType={"GST returns for clinics"}
      crumbLabel={"GST Returns"}
      crumbHref={"/gst-return-filing-for-clinics"}
      parentCrumb={{ name: "GST Return Filing", href: "/gst-return-filing-chennai" }}
      eyebrow={"GST Returns · Clinics"}
      h1={"GST Return Filing for Clinics in Chennai"}
      subhead={"Monthly returns for clinics that provide exempt healthcare services as well as taxable sales such as medicines and certain procedures."}
      introHeading={"What does GST return filing involve for clinics?"}
      intro={"Many healthcare services are exempt from GST, but some supplies are taxable, such as certain cosmetic procedures and medicines sold over the counter. Clinics file GSTR-1 and GSTR-3B and must report exempt supplies correctly. Input tax credit on equipment and supplies needs checking too. We separate taxable and exempt sales before each filing."}
      keyFacts={[
        { label: "Exempt services", value: "Many healthcare services are exempt under the GST notification" },
        { label: "Taxable sales", value: "Medicines, some cosmetic procedures and other taxable supplies are reported at the applicable rate" },
        { label: "Returns covered", value: "GSTR-1, GSTR-3B, and GSTR-9 where applicable" },
        { label: "Input tax credit", value: "Credit on equipment and supplies is claimed only where the rules allow it" },
      ]}
      subServicesHeading={"What do we do for clinics?"}
      subServices={[
        { name: "Exempt and taxable split", text: "Each service and sale is classified as exempt, nil-rated or taxable, so GSTR-1 reflects the correct treatment." },
        { name: "Medicine and pharmacy sales", text: "Sales of medicines are recorded with the applicable rate and batch-level details where required." },
        { name: "Input tax credit review", text: "Purchases of equipment, consumables and services are checked against the credit rules, with blocked credits identified." },
        { name: "Monthly reconciliation", text: "Patient billing and bank receipts are reconciled to the sales figures before the return is filed." },
      ]}
      howTo={{
        heading: "How do we file the returns each month?",
        steps: [
          { name: "Classify the services", text: "We list each service and check whether it is exempt, nil-rated or taxable under the GST rules." },
          { name: "Collect billing data", text: "Patient billing, pharmacy sales and purchase bills are collected for the month." },
          { name: "Prepare GSTR-1", text: "Taxable and exempt supplies are reported in the correct tables, with B2B and B2C details." },
          { name: "Reconcile purchases", text: "Input tax credit is claimed on eligible purchases, and credit blocked by the rules is reversed where needed." },
          { name: "File GSTR-3B", text: "Tax payable is computed and paid, and the working papers are kept for each month." },
        ],
      }}
      faqs={[
        { question: "Are clinic services exempt from GST?", answer: "Many healthcare services provided by clinics and hospitals are exempt under the GST notification, but the list is specific. Some services, such as certain cosmetic procedures, can be taxable. confirm each service against the notification on cbic-gst.gov.in before you bill." },
        { question: "Do I need to register for GST as a clinic?", answer: "Registration depends on whether your taxable supplies cross the registration limit and on the services you provide. A clinic with only exempt services may not need to register, but this depends on your situation. We confirm the limits on cbic-gst.gov.in and advise before you start billing." },
        { question: "How do I report exempt services in my return?", answer: "Exempt supplies are reported in GSTR-1 under the exempt category, not as taxable sales. Keeping them separate in your billing software makes the return correct and reduces queries from the department. We set up the categories with you before the first filing, so the first return reflects the right treatment." },
        { question: "Can I claim input tax credit on medical equipment?", answer: "Input tax credit on equipment and supplies depends on whether the supply is used for taxable or exempt services, and some credits are blocked by the rules. We check each purchase before claiming credit, and reverse any credit that is not allowed." },
        { question: "What if I sell medicines and also provide services?", answer: "Medicine sales are taxable and reported in the taxable category, while exempt services are reported separately. The two are kept apart in billing, so the return reflects the correct treatment for each. We check that the pharmacy and consultation reports reconcile to the sales figures every month." },
        { question: "Can you reconcile our billing software with the return?", answer: "Yes. We match the billing and pharmacy reports with the sales in GSTR-1 each month, so differences are found and explained before the return is filed. The reconciliation also shows which purchases carry credit and which do not, so the GSTR-3B claim is supported by bills." },
      ]}
      relatedSlugs={["gst-return-filing-chennai", "gst-registration-chennai", "gst-notice-reply-chennai"]}
    >
      <ComparisonTable
        heading="Returns for clinics and hospitals"
        columns={["Return", "What it reports", "Due date"]}
        rows={[
          ["GSTR-1", "Taxable, exempt and nil-rated supplies, with B2B details", "11th of the following month (monthly filers)"],
          ["GSTR-3B", "Summary of tax payable and credit claimed", "20th of the following month (monthly filers)"],
          ["Credit reconciliation", "Equipment and supplies matched with purchase bills", "Monthly, before GSTR-3B"],
          ["GSTR-9", "Annual return, where the turnover limit applies", "31 December after the financial year"],
        ]}
      />
    </ServicePageTemplate>
  );
}
