import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Company Registration in Tiruppur | Pvt Ltd, LLP, OPC" },
  description:
    "Company registration in Tiruppur for knitwear exporters and job-work units, handled online from our Chennai office: SPICe+, ROC Coimbatore, IEC, LUT and GST.",
  alternates: { canonical: "/company-registration-tiruppur" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Company Registration in Tiruppur",
    description: "Pvt Ltd, LLP and OPC registration for Tiruppur garment exporters and textile units, handled online from our Anna Nagar, Chennai office.",
    url: "/company-registration-tiruppur",
  },
};

const LINK = "text-royal-violet underline underline-offset-2";

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/company-registration-tiruppur`}
      serviceType="Company Registration"
      crumbLabel="Company Registration in Tiruppur"
      crumbHref="/company-registration-tiruppur"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="Company Registration · Tiruppur"
      h1="Company Registration in Tiruppur"
      subhead="Private Limited, LLP and OPC registration for Tiruppur garment exporters, knitting and dyeing units and merchant exporters, set up so you can ship from day one. We work from Anna Nagar, Chennai and serve Tiruppur clients online."
      introHeading="How does company registration in Tiruppur work for exporters?"
      intro="Company registration in Tiruppur is an online SPICe+ filing on the MCA portal; a company with its registered office in Tiruppur district is placed under the Registrar of Companies, Coimbatore. Exporters then add an Importer Exporter Code and a GST Letter of Undertaking. We handle this remotely from our Chennai office, by video call and digital signature."
      citation={{
        label: "MCA list of Registrar of Companies offices",
        href: "https://www.mca.gov.in/content/mca/global/en/contact-us/roc.html",
      }}
      keyFacts={[
        { label: "Where we work from", value: "Our only office is in Anna Nagar, Chennai. We do not have a Tiruppur office; Tiruppur work is done online and by courier." },
        { label: "Registrar (ROC)", value: "ROC Coimbatore, which has jurisdiction over Tiruppur district." },
        { label: "Common structures", value: "Pvt Ltd for exporters dealing with overseas buyers and banks; LLP for family-run knitting, dyeing or printing units; OPC for a single-owner merchant exporter." },
        { label: "Typical time", value: "7–12 working days for incorporation once documents are ready; IEC and LUT are filed after the company has its PAN." },
        { label: "Export set-up", value: "IEC from DGFT, GST registration, LUT for zero-rated exports, and an AD code registered with customs through your bank." },
      ]}
      subServicesHeading="What do we handle for Tiruppur exporters and textile units?"
      subServices={[
        { name: "Choosing the structure", text: "Whether a Pvt Ltd, LLP or OPC fits your buyers, your bank and the family members who will own the business." },
        { name: "Incorporation filing", text: "DSC, name approval and SPICe+ or FiLLiP, with objects covering garment manufacture, job work, trading and export." },
        { name: "Importer Exporter Code", text: "IEC application on the DGFT portal in the new entity's PAN, so shipments are not held up after incorporation." },
        { name: "GST and LUT", text: "GST registration at your Tiruppur unit and the Letter of Undertaking that lets you export without paying IGST upfront." },
        { name: "Udyam registration", text: "MSME registration for knitting, stitching, dyeing or printing units so they can use MSME schemes and payment protections." },
        { name: "Moving an existing firm", text: "Transferring a running proprietorship or partnership, its buyer contracts and stock into the new company or LLP." },
      ]}
      howTo={{
        heading: "How do we register a Tiruppur export company online?",
        steps: [
          { name: "Planning call", text: "On a video call we fix the structure, owners, capital and the export products, and share a document checklist." },
          { name: "DSC for directors or partners", text: "Each person completes an online video verification from Tiruppur to receive a digital signature." },
          { name: "Name and incorporation", text: "We reserve the name and file SPICe+ (or RUN-LLP and FiLLiP), which you sign digitally. No visit or wet signature is needed." },
          { name: "Certificate, PAN and TAN", text: "Once approved, the certificate of incorporation is issued with CIN, PAN and TAN, and the entity sits with ROC Coimbatore." },
          { name: "IEC, GST and LUT", text: "We apply for IEC on the DGFT portal and GST registration, then file the LUT so your first export invoice can be zero-rated." },
          { name: "Bank and customs", text: "You open a current account in Tiruppur, and your bank registers the AD code at the port you ship from." },
        ],
      }}
      faqs={[
        {
          question: "Do I need to visit Chennai to register my Tiruppur company?",
          answer:
            "No. Incorporation, IEC, GST and LUT are all applied for online, and you sign each form with your own digital signature after an online video check. Tiruppur clients work with us by video call, WhatsApp and email. You may courier original documents to our Chennai office if you prefer, but it is not required.",
        },
        {
          question: "Which ROC will my company be registered with?",
          answer:
            "A company or LLP with its registered office in Tiruppur district comes under the Registrar of Companies, Coimbatore, which covers Tiruppur along with Coimbatore, Erode, Salem and five other western Tamil Nadu districts. Incorporation itself is processed centrally by MCA, and later filings are made online, so you do not need to visit the ROC office.",
        },
        {
          question: "Does a new Tiruppur exporter need a new IEC after incorporation?",
          answer:
            "Yes. The Importer Exporter Code is issued against a PAN, and a newly incorporated company or LLP gets its own PAN, so it needs its own IEC. An IEC held by your old proprietorship cannot be used by the company. We file the IEC application on the DGFT portal immediately after the PAN is allotted.",
        },
        {
          question: "What is an LUT and why do Tiruppur exporters file it?",
          answer:
            "A Letter of Undertaking, filed on the GST portal in Form RFD-11, lets a registered exporter ship goods without paying IGST, with unused input tax credit claimable as a refund. Without it, you pay IGST on each export and wait for a refund, which ties up working capital. It is filed for each financial year, so renew it every April.",
        },
        {
          question: "Should a job-work knitting or dyeing unit register as a company?",
          answer:
            "Not always. A small job-work unit with one or two owners can run well as a proprietorship or partnership with GST and Udyam. A company or LLP becomes worthwhile when you want limited liability, larger bank limits, or a structure that lets family members hold defined shares. We look at your turnover and plans before recommending a change.",
        },
        {
          question: "Can my garment unit in Tiruppur be the registered office?",
          answer:
            "Yes. The registered office can be your factory, a rented unit or your home in Tiruppur, supported by a recent utility bill and, for rented premises, the rent agreement and the owner's no-objection letter. The same address is normally used as the principal place of business for GST and on your IEC.",
        },
      ]}
      relatedSlugs={["private-limited-company-incorporation-chennai", "llp-registration-chennai", "opc-registration-chennai", "gst-registration-chennai", "msme-udyam-registration-chennai", "annual-compliance-package"]}
      relatedPosts={["lut-for-exporters", "llp-vs-opc-vs-pvt-ltd", "msme-udyam-registration-checklist", "post-incorporation-compliance-checklist"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Why is the export set-up as important as incorporation in Tiruppur?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Tiruppur district calls itself a textile city, and its administration notes the sharp rise in exports from the area since the
        1990s. For most new Tiruppur entities, the company or LLP is only the first step; the business cannot invoice an overseas buyer
        until the export registrations are in the new entity&apos;s name. We plan the sequence so there is no gap:
      </p>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• <strong className="text-obsidian">Incorporation first</strong>, because PAN, IEC, GST and the bank account all depend on the new entity&apos;s identity.</li>
        <li>• <strong className="text-obsidian">IEC and GST next</strong>, filed in parallel once the PAN is allotted.</li>
        <li>• <strong className="text-obsidian">LUT before the first shipment</strong>, so the export invoice can be raised without IGST.</li>
        <li>• <strong className="text-obsidian">AD code registration</strong> with customs through your bank, for the port or air cargo complex you ship from.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">Which structure suits which Tiruppur business?</h2>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• <strong className="text-obsidian">Garment manufacturer-exporters</strong> dealing directly with overseas brands often prefer a Private Limited Company, which buyers and banks recognise readily and which can bring in new shareholders later.</li>
        <li>• <strong className="text-obsidian">Family-owned knitting, dyeing, printing or compacting units</strong> frequently choose an LLP, which gives limited liability with fewer formalities than a company.</li>
        <li>• <strong className="text-obsidian">Merchant exporters and sourcing agents</strong> working alone may use an OPC, and convert to a Pvt Ltd when partners join.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">How do we work with Tiruppur clients from Chennai?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        C S Rushil &amp; Co. operates from a single office in Anna Nagar, Chennai, and has no branch or address in Tiruppur. We meet on
        video calls, collect scanned documents, and share each MCA, DGFT and GST form for you to sign digitally. Professional tax is
        registered with the Tiruppur local body where your unit is located, and pollution-control or factory approvals, where your
        process needs them, are obtained from those departments separately. To compare every structure in detail, read our{" "}
        <Link href="/company-registration-chennai" className={LINK}>
          company registration guide
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
