import type { Metadata } from "next";
import ComparisonTable from "@/components/ComparisonTable";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "GST Returns for Restaurants in Chennai | C S Rushil & Co.";
const description = "GST returns for restaurants: composition or regular scheme, delivery platform sales, GSTR-1 and GSTR-3B. Book a consultation online or visit our office.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/gst-return-filing-for-restaurants" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/gst-return-filing-for-restaurants",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/gst-return-filing-for-restaurants`}
      serviceType={"GST returns for restaurants"}
      crumbLabel={"GST Returns"}
      crumbHref={"/gst-return-filing-for-restaurants"}
      parentCrumb={{ name: "GST Return Filing", href: "/gst-return-filing-chennai" }}
      eyebrow={"GST Returns · Restaurants"}
      h1={"GST Return Filing for Restaurants in Chennai"}
      subhead={"Composition or regular GST returns for restaurants, cafes and food businesses, with delivery platform sales reconciled to the books."}
      introHeading={"What does GST return filing involve for restaurants?"}
      intro={"Restaurants can file under the composition scheme or the regular scheme, depending on turnover, the food served and whether alcohol is sold. The rate and filing differ between them. Delivery platforms collect tax on some sales, which must be reconciled before filing. We check the scheme choice and the platform reports each month."}
      keyFacts={[
        { label: "Schemes", value: "Composition (CMP-08 and GSTR-4) or regular (GSTR-1 and GSTR-3B), depending on eligibility" },
        { label: "Restaurant rates", value: "confirm the rate for your type of supply on cbic-gst.gov.in, since it differs for restaurant service and takeaway" },
        { label: "Delivery platforms", value: "Platform sales and the operator's tax collection must match your sales records" },
        { label: "Alcohol", value: "Restaurants serving alcohol follow different rules; confirm eligibility for composition" },
      ]}
      subServicesHeading={"What do we do for restaurants?"}
      subServices={[
        { name: "Choosing the scheme", text: "We compare composition with the regular scheme based on turnover, purchases and the type of food and drink served." },
        { name: "Restaurant service rates", text: "The rate for dine-in, takeaway and delivery is checked against the rate schedule." },
        { name: "Delivery platform reconciliation", text: "Platform sales reports are matched with your billing and with the tax the platform reports for them." },
        { name: "Input tax credit on purchases", text: "Credit is claimed on eligible purchases under the regular scheme and is not available under composition." },
      ]}
      howTo={{
        heading: "How do we file the returns each month?",
        steps: [
          { name: "Confirm the scheme", text: "We check your turnover, the food and drink you serve, and whether you sell alcohol before you choose a scheme." },
          { name: "Collect sales and platform reports", text: "Billing data and reports from each delivery platform are collected for the month." },
          { name: "Reconcile sales", text: "Dine-in, takeaway and delivery sales are matched with the platform reports and the tax applied to each." },
          { name: "File the return", text: "Under composition, CMP-08 and GSTR-4 are filed as due. Under the regular scheme, GSTR-1 and GSTR-3B are filed monthly." },
          { name: "Review the scheme each year", text: "Turnover is checked against the limit so the scheme stays correct for the next year." },
        ],
      }}
      faqs={[
        { question: "Should my restaurant use the composition scheme?", answer: "Composition can be simpler for a small restaurant with a turnover under the limit, but it does not allow input tax credit and has its own quarterly and annual filings. The turnover limit and rate are set in the GST rules and must be checked on cbic-gst.gov.in before you choose." },
        { question: "How are food delivery platform sales treated?", answer: "Platforms collect tax on some sales and report them to the department. The sales you record must match the platform's reports, and the tax credit for what the platform collected is claimed correctly. Differences are traced to specific orders before filing." },
        { question: "Do restaurants that serve alcohol qualify for composition?", answer: "Restaurants that sell alcohol are generally treated differently under the GST rules, and eligibility for composition depends on the type of supply. We confirm your position against the rules on cbic-gst.gov.in before you choose the scheme, so the choice is made on the correct basis and the filings follow from it." },
        { question: "What is the difference between dine-in and takeaway tax?", answer: "The rate depends on the type of supply and whether the restaurant is under composition. Dine-in and takeaway can be taxed at different rates, so the sales are split by type in your records. confirm the current rates before you issue invoices." },
        { question: "What do I file if I am under composition?", answer: "Under composition, a quarterly statement in CMP-08 and an annual return in GSTR-4 are filed, and tax is paid quarterly. Composition taxpayers cannot claim input tax credit on purchases. We set reminders for each due date so the statements are filed on time, and check the turnover limit each year." },
        { question: "Can you help with a restaurant that opened recently?", answer: "Yes. We set up the invoice format, the scheme choice and the first return for a new restaurant, and check the opening stock and purchases so the first filing is correct. Early habits, such as how stock is valued and how often purchases are reconciled, tend to carry forward into later returns." },
      ]}
      relatedSlugs={["gst-return-filing-chennai", "gst-registration-chennai", "gst-notice-reply-chennai"]}
    >
      <ComparisonTable
        heading="Returns for restaurants"
        columns={["Return", "Applies to", "Due date"]}
        rows={[
          ["GSTR-1 and GSTR-3B", "Restaurants on the regular scheme", "11th and 20th of the following month (monthly filers)"],
          ["CMP-08", "Composition restaurants", "18th of the month after each quarter"],
          ["GSTR-4", "Composition restaurants, annual", "30 June after the financial year"],
          ["Platform sales reconciliation", "Restaurants selling through delivery apps", "Monthly, before GSTR-1"],
        ]}
      />
    </ServicePageTemplate>
  );
}
