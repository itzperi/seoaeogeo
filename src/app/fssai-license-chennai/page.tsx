import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "FSSAI Licence & Registration in Chennai";
const description =
  "FSSAI licence in Chennai: basic registration, state or central licence by turnover under the April 2026 limits, FoSCoS filing and Form D-1 annual returns.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/fssai-license-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/fssai-license-chennai",
  },
};

const tiers: { type: string; turnover: string; authority: string }[] = [
  { type: "Basic registration", turnover: "Up to ₹1.5 crore", authority: "Registering authority under the Commissioner of Food Safety, Tamil Nadu" },
  { type: "State licence", turnover: "Above ₹1.5 crore and up to ₹50 crore", authority: "Licensing authority under the Commissioner of Food Safety, Tamil Nadu" },
  { type: "Central licence", turnover: "Above ₹50 crore, and certain activities such as import and e-commerce regardless of turnover", authority: "FSSAI (Central Licensing Authority)" },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/fssai-license-chennai`}
      serviceType="FSSAI Licence and Registration"
      crumbLabel="FSSAI Licence"
      crumbHref="/fssai-license-chennai"
      eyebrow="FSSAI · Chennai"
      h1="FSSAI Licence in Chennai"
      subhead="Registration or licence for restaurants, cloud kitchens, bakeries, manufacturers, traders and online food sellers, filed on FoSCoS under the revised turnover limits in force from 1 April 2026."
      introHeading="Which FSSAI licence does a Chennai food business need?"
      intro="An FSSAI licence in Chennai depends on annual turnover and activity. From 1 April 2026, food businesses with turnover up to ₹1.5 crore need basic FSSAI registration, those above ₹1.5 crore and up to ₹50 crore need a state licence from Tamil Nadu's food safety authorities, and those above ₹50 crore, or importers and e-commerce operators, need a central licence."
      citation={{ label: "FSSAI order dated 13 March 2026 on revised turnover thresholds", href: "https://www.fssai.gov.in/upload/advisories/2026/03/69b4054bb6cd6Order%20dated%2013thMarch2026_Revised%20Turnover%20threshold.pdf" }}
      keyFacts={[
        { label: "Law", value: "Food Safety and Standards Act, 2006 and the FSS (Licensing and Registration of Food Businesses) Regulations, 2011, as amended in 2026" },
        { label: "Portal", value: "FoSCoS (Food Safety Compliance System), foscos.fssai.gov.in" },
        { label: "Turnover tiers (from 1 April 2026)", value: "Registration up to ₹1.5 crore; state licence above ₹1.5 crore up to ₹50 crore; central licence above ₹50 crore" },
        { label: "Validity", value: "The 2026 amendment provides for perpetual validity of registrations and licences, subject to risk-based inspections" },
        { label: "Annual return", value: "Manufacturers, repackers, relabellers, importers and manufacturer-exporters file by 31 May on FoSCoS" },
        { label: "Late annual return", value: "₹100 per day from 1 June, up to five times the annual licence fee" },
      ]}
      subServicesHeading="What FSSAI services do we provide?"
      subServices={[
        { name: "Eligibility Check", text: "We map your kind of business and turnover to FoSCoS categories, so you apply for the right registration or licence the first time." },
        { name: "Basic FSSAI Registration", text: "Application on FoSCoS for small food businesses such as home kitchens, small eateries, petty retailers and small manufacturers." },
        { name: "State FSSAI Licence", text: "Application with layout plan, equipment list, food category list and food safety management plan for mid-sized units in Tamil Nadu." },
        { name: "Central FSSAI Licence", text: "Applications for larger manufacturers, importers, e-commerce food businesses and multi-state operations under the Central Licensing Authority." },
        { name: "Modification and Upgrade", text: "Changes to address, products, premises or ownership, and migration from registration to licence when turnover crosses a threshold." },
        { name: "Annual Return Filing", text: "Preparation and filing of the annual return (Form D-1) on FoSCoS by 31 May for manufacturers, repackers, relabellers and importers." },
      ]}
      howTo={{
        heading: "How do you apply for an FSSAI licence on FoSCoS?",
        steps: [
          { name: "Confirm the category", text: "Use your kind of business and expected annual turnover to decide between basic registration, state licence and central licence." },
          { name: "Prepare documents", text: "Collect identity and address proof, premises proof (rent agreement or ownership document), food product list and, for licences, a layout plan and equipment list." },
          { name: "File on FoSCoS", text: "Create an account on foscos.fssai.gov.in, complete the application, upload documents and pay the prescribed government fee online." },
          { name: "Scrutiny and inspection", text: "The registering or licensing authority reviews the application and may seek clarifications or inspect the premises before approval." },
          { name: "Display and comply", text: "Display the FSSAI registration or licence at the premises, print the number on labels where required, and file annual returns if applicable." },
        ],
      }}
      faqs={[
        { question: "What is the FSSAI turnover limit for basic registration in 2026?", answer: "From 1 April 2026, basic FSSAI registration covers food businesses with annual turnover up to ₹1.5 crore, up from the earlier ₹12 lakh. Businesses above ₹1.5 crore and up to ₹50 crore need a state licence, and those above ₹50 crore need a central licence, under FSSAI's order dated 13 March 2026." },
        { question: "Does a cloud kitchen or home baker in Chennai need FSSAI?", answer: "Yes. Every food business operator, including home bakers, tiffin services and cloud kitchens selling through aggregator apps, needs at least basic FSSAI registration. Which tier applies depends on your turnover and the kind of business you select on FoSCoS, so a fast-growing cloud kitchen should track turnover against the ₹1.5 crore limit." },
        { question: "Who needs a central FSSAI licence regardless of turnover?", answer: "Certain activities need a central licence whatever the turnover. FoSCoS eligibility criteria list importers and e-commerce food businesses among them with no turnover threshold, and the criteria name other specific kinds of business as well. Check your kind of business on FoSCoS before applying, because the category decides the licensing authority." },
        { question: "Do FSSAI licences still need to be renewed?", answer: "The Food Safety and Standards (Licensing and Registration) amendment regulations notified on 10 March 2026 provide for perpetual validity of registrations and licences, subject to risk-based inspections. Check the status shown for your licence on FoSCoS, and keep complying with annual returns and inspections, which still apply." },
        { question: "Who must file the FSSAI annual return?", answer: "Licensed manufacturers, including repackers and relabellers, importers and manufacturer-exporters must file the annual return online on FoSCoS by 31 May for the previous financial year. Late filing attracts ₹100 per day from 1 June, capped at five times the annual licence fee, and FSSAI has said waiver requests will not be considered." },
        { question: "What changed for street food vendors?", answer: "Under the 2026 reforms, street food vendors registered with a Municipal Corporation or Town Vending Committee under the Street Vendors Act, 2014 are treated as deemed registered under FSSAI. They no longer need a separate FSSAI registration on top of their vending registration." },
        { question: "My turnover crossed ₹1.5 crore. What should I do?", answer: "Apply on FoSCoS to convert your basic registration into a state licence. The state licence application needs more detail than registration, including a layout plan, equipment list and food safety management plan, so start before the year in which you expect to cross the limit." },
      ]}
      relatedSlugs={["gst-registration-chennai", "msme-udyam-registration-chennai", "company-registration-chennai"]}
      relatedPosts={[
        "msme-udyam-registration-checklist",
        "gst-threshold-is-a-trigger",
        ]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">FSSAI registration vs state licence vs central licence</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Turnover limits below apply from 1 April 2026 under FSSAI&apos;s order dated 13 March 2026, which supersedes earlier
        turnover criteria. Some kinds of business have specific rules, so confirm your category on FoSCoS.
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Annual turnover</th>
              <th className="px-4 py-3 font-medium">Issued by</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {tiers.map((r) => (
              <tr key={r.type}>
                <td className="px-4 py-3 align-top font-medium text-obsidian">{r.type}</td>
                <td className="px-4 py-3 align-top text-slate">{r.turnover}</td>
                <td className="px-4 py-3 align-top text-slate">{r.authority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="mt-14 text-2xl text-obsidian">Food safety administration in Tamil Nadu</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Basic registrations and state licences for Chennai premises are handled by the registering and licensing
        authorities working under the Commissioner of Food Safety, Tamil Nadu, while central licences are issued by FSSAI.
        All applications, modifications and annual returns are filed on FoSCoS, and inspections follow FSSAI&apos;s
        risk-based framework, which looks at the type of food, your past compliance record and third-party audit results.
      </p>
    </ServicePageTemplate>
  );
}
