import type { Metadata } from "next";
import ComparisonTable from "@/components/ComparisonTable";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "GST Returns for Freelancers in Chennai | C S Rushil & Co.";
const description = "GST returns for freelancers: registration limits, Indian and overseas invoices, monthly GSTR-1 and GSTR-3B. Book a consultation online or visit our office.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/gst-return-filing-for-freelancers" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/gst-return-filing-for-freelancers",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/gst-return-filing-for-freelancers`}
      serviceType={"GST returns for freelancers"}
      crumbLabel={"GST Returns"}
      crumbHref={"/gst-return-filing-for-freelancers"}
      parentCrumb={{ name: "GST Return Filing", href: "/gst-return-filing-chennai" }}
      eyebrow={"GST Returns · Freelancers"}
      h1={"GST Return Filing for Freelancers in Chennai"}
      subhead={"Monthly and quarterly GST returns for consultants, designers, writers and other service providers, with invoices and foreign-client treatment checked."}
      introHeading={"What does GST return filing involve for freelancers?"}
      intro={"Freelancers providing services must register once their turnover crosses the limit for services, which is lower in some special category states. After registration they file GSTR-1 and GSTR-3B. Overseas clients raise different questions, such as zero-rated exports under a letter of undertaking. We check your limit, invoices and client location before filing."}
      keyFacts={[
        { label: "Returns covered", value: "GSTR-1, GSTR-3B, and GSTR-9 where the turnover limit applies" },
        { label: "Registration limit", value: "Service providers: confirm the current limit on cbic-gst.gov.in, which differs for special category states" },
        { label: "Monthly due dates", value: "GSTR-1 by the 11th and GSTR-3B by the 20th of the following month" },
        { label: "Overseas clients", value: "Export of services can be zero-rated under a letter of undertaking" },
      ]}
      subServicesHeading={"What do we do for freelancers?"}
      subServices={[
        { name: "Registration check", text: "We check your turnover against the limit for services and the state you work from, and advise when registration becomes due." },
        { name: "Invoices for domestic and overseas clients", text: "Invoices show your GSTIN, the client's details, the place of supply and the tax treatment for each client." },
        { name: "Monthly returns", text: "Your invoices are reported in GSTR-1, tax is computed in GSTR-3B, and credit is claimed only on eligible purchases." },
        { name: "Overseas service exports", text: "Export of services is checked for the conditions that allow zero-rating, including the letter of undertaking, and the refund route is noted." },
      ]}
      howTo={{
        heading: "How do we file the returns each month?",
        steps: [
          { name: "Confirm registration status", text: "We check whether you must register, and from which date, based on turnover and the state you work from." },
          { name: "Review invoices", text: "Each invoice is checked for your GSTIN, the client's details, the place of supply and the tax treatment." },
          { name: "Prepare GSTR-1", text: "B2B and export invoices are listed, and any B2C sales are summarised by state and rate." },
          { name: "Compute and file GSTR-3B", text: "Tax payable is calculated after eligible credit, and the return is filed with the payment made from the ledger." },
          { name: "Keep the records", text: "Invoices, bank receipts and the working papers are kept for each month, so the returns can be reviewed later." },
        ],
      }}
      faqs={[
        { question: "Do freelancers need GST registration?", answer: "A service provider usually must register once turnover crosses the limit for services, which is lower in some special category states. The limit and the date registration becomes due depend on your state and turnover, so confirm the current figures on cbic-gst.gov.in and speak to us before you cross the limit." },
        { question: "Do I charge GST on invoices to foreign clients?", answer: "Export of services can be zero-rated if the conditions are met, including a letter of undertaking and payment terms. Where the conditions are not met, tax may apply. The treatment depends on the service and the client, so we confirm it before the first invoice." },
        { question: "What rate applies to my services?", answer: "Many professional services are taxed at 18%, but the rate depends on how the service is classified under the GST rate schedule. We confirm the classification for your service on cbic-gst.gov.in before the invoice is issued, because the same activity can be classified differently depending on its description." },
        { question: "Can I opt for the composition scheme as a freelancer?", answer: "The composition scheme is open to some service providers below a set turnover, but it does not allow input tax credit and has its own filing. Whether it suits you depends on your purchases and turnover, so we compare both options before you choose." },
        { question: "What happens if I do not file GSTR-3B on time?", answer: "A late fee applies for each day of delay, and interest applies on tax paid late. The late fee and interest rules are set out on cbic-gst.gov.in. Filing on time, even with a nil return, keeps the late fee small." },
        { question: "Can you file returns for a freelancer who works part-time?", answer: "Yes. Part-time work does not change the filing duty once turnover crosses the limit. We set up a simple monthly routine, with invoices and bank receipts collected in one place, so filing takes little time. If turnover is still below the limit, we advise on when registration becomes due." },
      ]}
      relatedSlugs={["gst-registration-chennai", "gst-return-filing-chennai", "gst-notice-reply-chennai"]}
    >
      <ComparisonTable
        heading="Returns for freelancers and service providers"
        columns={["Return", "What it reports", "Due date"]}
        rows={[
          ["GSTR-1", "Invoices for B2B clients, exports and B2C sales", "11th of the following month (monthly filers)"],
          ["GSTR-3B", "Summary return and tax payable after credit", "20th of the following month (monthly filers)"],
          ["CMP-08 (composition, if opted)", "Quarterly tax statement for composition taxpayers", "18th of the month after the quarter"],
          ["GSTR-9", "Annual return, where the turnover limit applies", "31 December after the financial year"],
        ]}
      />
    </ServicePageTemplate>
  );
}
