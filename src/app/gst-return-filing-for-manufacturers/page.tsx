import type { Metadata } from "next";
import ComparisonTable from "@/components/ComparisonTable";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "GST Returns for Manufacturers, Chennai | C S Rushil & Co.";
const description = "GST returns for manufacturers: input tax credit, inverted duty refunds, job work and GSTR-2B reconciliation. Book a consultation online or visit our office.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/gst-return-filing-for-manufacturers" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/gst-return-filing-for-manufacturers",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/gst-return-filing-for-manufacturers`}
      serviceType={"GST returns for manufacturers"}
      crumbLabel={"GST Returns"}
      crumbHref={"/gst-return-filing-for-manufacturers"}
      parentCrumb={{ name: "GST Return Filing", href: "/gst-return-filing-chennai" }}
      eyebrow={"GST Returns · Manufacturers"}
      h1={"GST Return Filing for Manufacturers in Chennai"}
      subhead={"Monthly returns for factories and manufacturers, with input tax credit, inverted duty refunds and job work reconciled before filing."}
      introHeading={"What does GST return filing involve for manufacturers?"}
      intro={"Manufacturers often pay more tax on inputs than on outputs, which creates credit that must be claimed and, in some cases, refunded. Monthly GSTR-1 and GSTR-3B must reflect that credit correctly. Job work, e-way bills and GSTR-2B reconciliation all affect the return. We reconcile purchases and sales each month, and prepare refund claims where they apply."}
      keyFacts={[
        { label: "Returns covered", value: "GSTR-1, GSTR-3B, and GSTR-9C above the turnover limit for the annual reconciliation" },
        { label: "Refunds", value: "Inverted duty refunds are claimed on the refund form, subject to the rules" },
        { label: "Monthly due dates", value: "GSTR-1 by the 11th and GSTR-3B by the 20th of the following month" },
        { label: "Documents", value: "Purchase bills, GSTR-2B, e-way bills, job work challans and stock records" },
      ]}
      subServicesHeading={"What do we do for manufacturers?"}
      subServices={[
        { name: "Input tax credit on raw materials", text: "Credit is claimed on eligible purchases that appear in GSTR-2B, and credit that is blocked is reversed." },
        { name: "Inverted duty refunds", text: "Where input tax exceeds output tax, the refund claim is prepared with the computation and supporting documents the rules require." },
        { name: "Job work and e-way bills", text: "Goods sent for job work and returned are tracked against challans and e-way bills, so the return reflects them correctly." },
        { name: "Annual reconciliation", text: "The annual return is reconciled with the audited books where the rules require it, with the differences explained." },
      ]}
      howTo={{
        heading: "How do we file the returns each month?",
        steps: [
          { name: "Reconcile purchases", text: "Each purchase bill is matched with GSTR-2B, and suppliers who have not filed are followed up." },
          { name: "Reconcile sales and stock", text: "Sales, stock movements and job work are matched to the invoices and e-way bills for the month." },
          { name: "Compute credit and refunds", text: "Tax payable and any refund claim are computed, with the inverted duty position checked." },
          { name: "Prepare GSTR-1 and GSTR-3B", text: "Outward supplies are reported in GSTR-1, and the summary return is filed in GSTR-3B with the payment." },
          { name: "Keep the records", text: "Working papers for each month are kept, so the returns and any refund claim can be supported later." },
        ],
      }}
      faqs={[
        { question: "Why does a manufacturer have a large input tax credit balance?", answer: "Manufacturers buy raw materials that carry tax, and sell finished goods at a rate that can be lower. This creates unused credit. The balance can be used against future tax payable, or refunded where the inverted duty rules apply, so the position is reviewed each month." },
        { question: "What is an inverted duty refund?", answer: "An inverted duty refund applies where the tax on inputs is higher than the tax on outputs because of the rate structure. The refund is claimed on the prescribed form, and the rules set out how the amount is worked out." },
        { question: "Can I claim credit on goods sent for job work?", answer: "Credit depends on the job work rules and on whether the goods return within the time allowed. Challans and e-way bills must support each movement, and we track both so credit is claimed only where the rules permit. Goods that do not return in time are reviewed before the next return is filed." },
        { question: "Do I need GSTR-9C as a manufacturer?", answer: "GSTR-9C is needed where turnover crosses the limit set in the rules, and it reconciles the annual return with the audited accounts. We confirm the current limit each year and plan the reconciliation before the deadline, so the audited figures and the return agree." },
        { question: "How do e-way bills affect my return?", answer: "E-way bills record the movement of goods above the prescribed limit. They do not replace the GST return, but mismatches between e-way bills and invoices can lead to queries. We check both each month, so the goods moved, the invoices issued and the sales reported all agree." },
        { question: "What if my supplier has not filed GSTR-1?", answer: "Credit can be claimed only on invoices that appear in GSTR-2B. If the supplier has not filed, the credit waits until it appears. We contact the supplier and track the amount, so the claim is made as soon as the supplier files." },
      ]}
      relatedSlugs={["gst-return-filing-chennai", "gst-registration-chennai", "gst-notice-reply-chennai"]}
    >
      <ComparisonTable
        heading="Returns for manufacturers"
        columns={["Return or form", "What it covers", "Due date"]}
        rows={[
          ["GSTR-1", "Outward supplies and exports", "11th of the following month (monthly filers)"],
          ["GSTR-3B", "Summary return, tax paid and credit claimed", "20th of the following month (monthly filers)"],
          ["Refund claim (inverted duty)", "Refund of unutilised input tax credit, where eligible", "Within the time limit in the rules"],
          ["GSTR-9C", "Reconciliation with audited accounts, where the limit applies", "31 December after the financial year"],
        ]}
      />
    </ServicePageTemplate>
  );
}
