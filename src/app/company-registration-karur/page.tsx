import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Private Limited Company Registration in Karur | CA" },
  description:
    "Private limited company registration in Karur for home textile exporters, bus body builders and finance firms, done online from Anna Nagar: SPICe+, ROC Chennai.",
  alternates: { canonical: "/company-registration-karur" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Private Limited Company Registration in Karur",
    description: "Pvt Ltd registration for Karur businesses, handled online from our Anna Nagar, Chennai office.",
    url: "/company-registration-karur",
  },
};

const LINK = "text-royal-violet underline underline-offset-2";
const TH = "p-4 font-medium text-obsidian";
const TD = "p-4 text-slate";

const SECTORS = [
  {
    type: "Home textile exporters",
    structure: "Private Limited Company",
    points: "IEC, a GST Letter of Undertaking, registration with the relevant export promotion council, and export-incentive claims that must all be in the company's name from the first shipment.",
  },
  {
    type: "Bus and truck body builders",
    structure: "Private Limited Company or LLP",
    points: "GST treatment differs when you build on a chassis supplied by the customer versus selling a finished vehicle, so the MoA objects and invoicing model should be settled together.",
  },
  {
    type: "Finance and lending businesses",
    structure: "Private Limited Company (or a Nidhi company for member-only lending)",
    points: "A company whose principal business is lending needs a certificate of registration from RBI before it starts; chit businesses are regulated under the Chit Funds Act, 1982 by the state.",
  },
  {
    type: "Weaving units and made-up suppliers",
    structure: "LLP or Private Limited Company",
    points: "Job-work arrangements with exporters, GST on job-work charges, and Udyam registration for MSME benefits.",
  },
];

const AFTER = [
  { item: "IEC and LUT", detail: "For any company exporting home textiles or other goods, before the first shipment." },
  { item: "Export promotion council membership", detail: "Registration-cum-membership with the council relevant to your products, needed for some export benefits." },
  { item: "RBI registration", detail: "For a company that will carry on lending or other financial activity as its principal business, before commencing it." },
  { item: "GST and Udyam", detail: "GST at the Karur place of business; Udyam for qualifying manufacturing and service units." },
  { item: "Professional tax", detail: "With the Karur corporation, municipality or panchayat where the company operates." },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/company-registration-karur`}
      serviceType="Company Registration"
      crumbLabel="Company Registration in Karur"
      crumbHref="/company-registration-karur"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="Company Registration · Karur"
      h1="Private Limited Company Registration in Karur"
      subhead="Pvt Ltd registration for Karur home textile exporters, bus and truck body builders, weaving units and finance businesses. Our office is in Anna Nagar, Chennai; we handle Karur registrations online, by video call and digital signature."
      introHeading="How does private limited company registration in Karur work?"
      intro="Private limited company registration in Karur is an online SPICe+ application to the Ministry of Corporate Affairs. A company with its registered office in Karur district comes under the Registrar of Companies, Chennai, not ROC Coimbatore. We are based in Anna Nagar, Chennai, and complete Karur registrations by video call, scanned documents and digital signatures."
      citation={{
        label: "MCA list of Registrar of Companies offices",
        href: "https://www.mca.gov.in/content/mca/global/en/contact-us/roc.html",
      }}
      keyFacts={[
        { label: "Where we work from", value: "Our office is in Anna Nagar, Chennai. We have no office in Karur; we serve Karur clients online." },
        { label: "Registrar (ROC)", value: "ROC Chennai, which has jurisdiction over Karur district. Neighbouring Namakkal and Dindigul fall under ROC Coimbatore." },
        { label: "Common structures", value: "Private Limited Company for exporters and finance businesses; LLP for family weaving and body-building firms; OPC for solo founders." },
        { label: "Typical time", value: "7–12 working days once documents and digital signatures are ready; RBI registration for lending businesses is a separate, longer process." },
        { label: "Usual follow-ons", value: "IEC, LUT and export council membership for exporters; GST and Udyam for most units." },
      ]}
      subServicesHeading="What do we handle for Karur businesses?"
      subServices={[
        { name: "Structure advice", text: "Pvt Ltd, LLP, OPC or Nidhi company, based on whether you export, lend money, or run a closely held family business." },
        { name: "DSC and name approval", text: "Class 3 digital signatures with online video verification, and names checked against MCA and trademark records, including export brand names." },
        { name: "SPICe+ filing", text: "SPICe+ Part B with e-MoA, e-AoA and AGILE-PRO-S, with objects drafted for textile exports, coach building or financial services." },
        { name: "Exporter set-up", text: "IEC, GST Letter of Undertaking and the documents needed for export promotion council membership after incorporation." },
        { name: "Moving an existing firm", text: "Transfer of a proprietorship or partnership into the company, including orders, stock, machinery and buyer contracts." },
        { name: "First-year compliance", text: "Auditor appointment, share certificates, INC-20A, and a calendar for the first AGM and annual filings." },
      ]}
      howTo={{
        heading: "How do we register your Karur company online?",
        steps: [
          { name: "Video call and checklist", text: "We agree the structure, capital and directors and send a document list. Scans by email are enough." },
          { name: "Digital signatures", text: "Each director completes a short online video verification from Karur to receive a Class 3 DSC." },
          { name: "Name reservation", text: "We file SPICe+ Part A with one or two names, checked so an export brand does not clash with existing marks." },
          { name: "Incorporation filing", text: "We prepare SPICe+ Part B with e-MoA, e-AoA and AGILE-PRO-S for you to sign with your DSC." },
          { name: "Certificate of Incorporation", text: "The certificate is issued with CIN, PAN and TAN, recorded with ROC Chennai." },
          { name: "Bank and sector registrations", text: "You open the current account at a Karur branch; we complete GST, Udyam, IEC and LUT as your business needs." },
        ],
      }}
      faqs={[
        {
          question: "Is a Karur company registered with ROC Chennai or ROC Coimbatore?",
          answer:
            "ROC Chennai. Although Karur borders western districts such as Namakkal and Dindigul that fall under ROC Coimbatore, Karur district itself is under the Registrar of Companies, Chennai. Incorporation is processed centrally by MCA in either case, and annual filings are online, so the ROC location rarely affects day-to-day compliance.",
        },
        {
          question: "What does a Karur home textile exporter need after incorporation?",
          answer:
            "An exporter needs an Importer Exporter Code linked to the company's PAN, GST registration, and usually a Letter of Undertaking to export without paying IGST upfront. Membership of the relevant export promotion council supports export benefits. All of these should be in the company's name before its first shipment so incentive claims are not disrupted.",
        },
        {
          question: "Can I start a finance company in Karur just by incorporating?",
          answer:
            "No. Incorporation alone does not permit lending as a business. A company whose principal business is financial activity must obtain a certificate of registration from the Reserve Bank of India, meeting its net owned fund rules, before it starts. A Nidhi company that lends only to members follows a separate Companies Act route.",
        },
        {
          question: "Should a bus body building partnership become a company?",
          answer:
            "Many do once orders, workforce and bank limits grow. A private limited company limits the partners' personal liability and is easier for lenders and institutional buyers to deal with. A partnership can register as a company under Section 366, or transfer its business to a new company. We also review the GST invoicing model.",
        },
        {
          question: "Our family runs several textile units. Pvt Ltd or LLP?",
          answer:
            "An LLP suits family units that want limited liability and lighter compliance, with audit only above ₹40 lakh turnover or ₹25 lakh contribution. A private limited company suits units that want bank finance, outside shareholders or a clear share-based succession plan. Some families use one structure for each unit.",
        },
        {
          question: "Do I need to travel to Chennai to register?",
          answer:
            "No. Incorporation, digital signatures, GST and IEC are all online, and every form is signed with your DSC. Karur founders work with us by video call and email and can courier originals if they prefer. You only need to visit your bank in Karur to open the company's current account.",
        },
      ]}
      relatedSlugs={["private-limited-company-incorporation-chennai", "llp-registration-chennai", "opc-registration-chennai", "gst-registration-chennai", "msme-udyam-registration-chennai", "annual-compliance-package"]}
      relatedPosts={["private-limited-vs-llp-chennai-startups", "spice-plus-incorporation-explained", "lut-for-exporters", "post-incorporation-compliance-checklist"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Which Karur businesses typically incorporate, and what should they check?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Karur is known for home textiles made for export, such as bed, kitchen and table linen and curtains, for its bus and
        truck body building workshops, and for a long tradition of finance and banking businesses. Each brings a different
        set of registrations beyond the company itself.
      </p>
      <div className="mt-4 max-w-3xl overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-fog text-left">
              <th className={TH}>Business</th>
              <th className={TH}>Usual structure</th>
              <th className={TH}>Points to settle at registration</th>
            </tr>
          </thead>
          <tbody className="bg-paper">
            {SECTORS.map((r) => (
              <tr key={r.type} className="border-t border-ash">
                <td className="p-4 font-medium text-obsidian">{r.type}</td>
                <td className={TD}>{r.structure}</td>
                <td className={TD}>{r.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">How do we serve Karur clients from Chennai?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        C S Rushil &amp; Co. works from one office, in Anna Nagar, Chennai, with no branch or representative in Karur. We meet
        you on a video call, collect scanned documents by email, and send each MCA form for you to sign with your own digital
        signature. Exporters often need the company, IEC and LUT ready around a buyer&apos;s first order, so we plan the
        sequence with that date in mind.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What registrations follow incorporation in Karur?</h2>
      <div className="mt-4 max-w-3xl overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[520px] border-collapse text-sm">
          <thead>
            <tr className="bg-fog text-left">
              <th className={TH}>Registration</th>
              <th className={TH}>When it applies</th>
            </tr>
          </thead>
          <tbody className="bg-paper">
            {AFTER.map((r) => (
              <tr key={r.item} className="border-t border-ash">
                <td className="p-4 font-medium text-obsidian">{r.item}</td>
                <td className={TD}>{r.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        For the full SPICe+ timeline and first-year compliance calendar, see{" "}
        <Link href="/private-limited-company-incorporation-chennai" className={LINK}>
          private limited company registration in Chennai
        </Link>
        . Nearby pages: <Link href="/company-registration-tiruppur" className={LINK}>Tiruppur</Link>,{" "}
        <Link href="/company-registration-namakkal" className={LINK}>Namakkal</Link> and{" "}
        <Link href="/company-registration-tiruchirappalli" className={LINK}>Tiruchirappalli</Link>. To discuss your
        registration, <Link href="/contact" className={LINK}>contact us</Link>.
      </p>
    </ServicePageTemplate>
  );
}
