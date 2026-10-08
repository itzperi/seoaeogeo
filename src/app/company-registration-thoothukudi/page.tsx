import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Company Registration in Thoothukudi | Pvt Ltd, LLP, OPC" },
  description:
    "Company registration in Thoothukudi for port, logistics, salt and trading firms, done online from our Chennai office: SPICe+, ROC Chennai, IEC, GST and Udyam.",
  alternates: { canonical: "/company-registration-thoothukudi" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Company Registration in Thoothukudi",
    description: "Pvt Ltd, LLP and OPC registration for Thoothukudi logistics, salt and trading businesses, handled online from our Anna Nagar, Chennai office.",
    url: "/company-registration-thoothukudi",
  },
};

const LINK = "text-royal-violet underline underline-offset-2";

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/company-registration-thoothukudi`}
      serviceType="Company Registration"
      crumbLabel="Company Registration in Thoothukudi"
      crumbHref="/company-registration-thoothukudi"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="Company Registration · Thoothukudi (Tuticorin)"
      h1="Company Registration in Thoothukudi"
      subhead="Private Limited, LLP and OPC registration for Thoothukudi (Tuticorin) freight, shipping and logistics firms, salt producers, importers and exporters. We work from Anna Nagar, Chennai and serve Thoothukudi businesses online."
      introHeading="How does company registration in Thoothukudi work?"
      intro="Company registration in Thoothukudi (Tuticorin) is an online SPICe+ filing with the Ministry of Corporate Affairs. A company with its registered office in Thoothukudi district comes under the Registrar of Companies, Chennai. Port-linked businesses then add an Importer Exporter Code and GST. We handle this remotely from our Anna Nagar, Chennai office, by video call and digital signature."
      citation={{
        label: "MCA list of Registrar of Companies offices",
        href: "https://www.mca.gov.in/content/mca/global/en/contact-us/roc.html",
      }}
      keyFacts={[
        { label: "Where we work from", value: "Our office is in Anna Nagar, Chennai. We have no office in Thoothukudi and serve Thoothukudi clients online." },
        { label: "Registrar (ROC)", value: "ROC Chennai, which has jurisdiction over Thoothukudi district." },
        { label: "Common structures", value: "Pvt Ltd for freight forwarders, shipping agents and importers dealing with overseas parties; LLP for family salt and trading firms; OPC for solo traders." },
        { label: "Typical time", value: "7–12 working days once documents and digital signatures are ready." },
        { label: "Trade set-up", value: "IEC from DGFT, GST, LUT for exporters, AD code registration through your bank, and Udyam." },
      ]}
      subServicesHeading="What do we handle for Thoothukudi businesses?"
      subServices={[
        { name: "Structure advice", text: "Pvt Ltd, LLP or OPC, considering foreign counterparties, bank guarantees, ownership and compliance." },
        { name: "DSC and name approval", text: "Digital signatures after online video verification, and a name checked against MCA and trademark records." },
        { name: "Incorporation filing", text: "SPICe+ or FiLLiP, with objects covering freight forwarding, clearing support, warehousing, salt manufacture or import-export trading." },
        { name: "IEC and GST", text: "Importer Exporter Code in the new entity's PAN and GST registration at your Thoothukudi office or warehouse." },
        { name: "LUT and export paperwork", text: "The GST Letter of Undertaking for zero-rated exports and guidance on AD code registration with customs." },
        { name: "Ongoing compliance", text: "Bookkeeping, audit, ROC annual filings, TDS on freight and service payments, and GST returns." },
      ]}
      howTo={{
        heading: "How do we register a Thoothukudi company online?",
        steps: [
          { name: "Scoping call", text: "We discuss your trade, owners, overseas counterparties and whether you will import, export or provide services." },
          { name: "Digital signatures", text: "Directors complete an online video verification from Thoothukudi to receive DSCs." },
          { name: "Name approval", text: "We reserve the name through SPICe+ Part A or RUN-LLP." },
          { name: "Incorporation filing", text: "SPICe+ Part B, e-MoA, e-AoA and AGILE-PRO-S, signed digitally by you with no paperwork to post." },
          { name: "Certificate of Incorporation", text: "The company is issued its CIN, PAN and TAN and recorded with ROC Chennai." },
          { name: "IEC, GST and bank", text: "We apply for IEC and GST and file the LUT if you export; you open a current account and your bank registers the AD code at the port." },
        ],
      }}
      faqs={[
        {
          question: "Do I need to visit Chennai to register my Thoothukudi company?",
          answer:
            "No. Incorporation, IEC, GST and LUT are all online, and you sign each form with a digital signature issued after an online video check. Thoothukudi clients work with us over video calls and email, and can courier originals to our Chennai office if they prefer. The bank account is the only step done in person, at your own bank.",
        },
        {
          question: "Which ROC will my company be registered with?",
          answer:
            "A company or LLP whose registered office is in Thoothukudi district comes under the Registrar of Companies, Chennai. ROC Chennai covers Tamil Nadu except nine western districts, which fall under ROC Coimbatore. The incorporation application is processed centrally by MCA, and annual filings are online, so you do not visit the ROC.",
        },
        {
          question: "Does a freight forwarder or customs broker need more than company registration?",
          answer:
            "Yes. A freight forwarding company needs GST and usually an IEC, and its clients and shipping lines will expect a registered entity. Acting as a customs broker requires a separate licence from the customs authorities under the customs broker licensing regulations, which has its own eligibility and examination requirements. Incorporation does not replace that licence.",
        },
        {
          question: "Does an importer in Thoothukudi need an IEC?",
          answer:
            "Yes. An Importer Exporter Code from DGFT is required to import or export goods, and it is issued against the entity's PAN. A new company or LLP therefore needs its own IEC, even if the promoters held one for an earlier proprietorship. We apply for it on the DGFT portal immediately after the PAN is allotted.",
        },
        {
          question: "Should a family salt business incorporate?",
          answer:
            "It can. An LLP suits a salt business owned by several family members who want limited liability and a simple profit-sharing agreement with lighter compliance. A Private Limited Company suits a business expanding into refining, packaging and branded sales, or one that needs larger bank finance. We weigh the options on a call before filing.",
        },
        {
          question: "Can my office near the port or my home be the registered office?",
          answer:
            "Yes. Any premises in Thoothukudi you own or rent, including an office, warehouse or your home, can be the registered office. You need a recent utility bill and, if the premises are rented or belong to someone else, a rent agreement and the owner's no-objection letter. The same address is normally used for GST and on the IEC.",
        },
      ]}
      relatedSlugs={["private-limited-company-incorporation-chennai", "llp-registration-chennai", "opc-registration-chennai", "gst-registration-chennai", "msme-udyam-registration-chennai", "annual-compliance-package"]}
      relatedPosts={["lut-for-exporters", "private-limited-vs-llp-chennai-startups", "spice-plus-incorporation-explained", "tds-return-filing-deadlines"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Which Thoothukudi businesses typically incorporate?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Thoothukudi is home to V.O. Chidambaranar Port, one of India&apos;s major ports, which lists salt, coal, copper concentrate and
        granite among the commodities it handles. The Salt Commissioner names Tuticorin among the main salt-producing centres in
        Tamil Nadu. This port-and-salt economy shapes the businesses that typically consider incorporation:
      </p>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• <strong className="text-obsidian">Freight forwarders, shipping agents and transporters</strong> that contract with shipping lines and overseas customers.</li>
        <li>• <strong className="text-obsidian">Importers and exporters</strong> moving bulk and containerised cargo through the port.</li>
        <li>• <strong className="text-obsidian">Salt producers and refiners</strong>, often family businesses moving into packaged and branded salt.</li>
        <li>• <strong className="text-obsidian">Warehousing and container-yard operators</strong> serving port users.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">What order should a Thoothukudi trading company follow?</h2>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• <strong className="text-obsidian">Incorporate first</strong>, because PAN, IEC, GST and the bank account all depend on the new entity.</li>
        <li>• <strong className="text-obsidian">IEC and GST next</strong>, filed in parallel once the PAN is allotted.</li>
        <li>• <strong className="text-obsidian">LUT</strong> before the first export invoice, so goods can be shipped without paying IGST.</li>
        <li>• <strong className="text-obsidian">AD code registration</strong> through your bank at the port of shipment, and any sector licences such as a customs broker licence.</li>
        <li>• <strong className="text-obsidian">Professional tax</strong>, registered with the local body where the company operates.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">How do we serve Thoothukudi clients from Chennai?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        C S Rushil &amp; Co. operates from one office, in Anna Nagar, Chennai, and has no branch or address in Thoothukudi. We handle
        registrations through video calls, scanned documents and digital signatures. For a comparison of every structure, see our{" "}
        <Link href="/company-registration-chennai" className={LINK}>
          company registration guide
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
