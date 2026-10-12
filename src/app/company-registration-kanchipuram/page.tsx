import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Private Limited Company Registration in Kanchipuram | CA" },
  description:
    "Pvt Ltd company registration in Kanchipuram for Sriperumbudur–Oragadam suppliers and silk businesses, handled online from Anna Nagar: SPICe+, ROC Chennai, GST.",
  alternates: { canonical: "/company-registration-kanchipuram" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Private Limited Company Registration in Kanchipuram",
    description: "Pvt Ltd registration for Kanchipuram district businesses, handled online from our Anna Nagar, Chennai office.",
    url: "/company-registration-kanchipuram",
  },
};

const LINK = "text-royal-violet underline underline-offset-2";
const TH = "p-4 font-medium text-obsidian";
const TD = "p-4 text-slate";

const SECTORS = [
  {
    type: "Auto-component and engineering suppliers",
    structure: "Private Limited Company",
    points: "Vehicle makers and tier-1 suppliers usually onboard vendors with a company PAN, GSTIN and audited accounts. EPFO and ESIC codes come through AGILE-PRO-S, which matters for shop-floor and contract staff.",
  },
  {
    type: "Electronics and contract manufacturing units",
    structure: "Private Limited Company, often with a foreign shareholder",
    points: "Shares issued to a foreign parent are reported to RBI in FC-GPR within 30 days. A unit inside an SEZ also needs approval from the SEZ Development Commissioner, which is separate from incorporation.",
  },
  {
    type: "Logistics, warehousing and manpower contractors",
    structure: "Private Limited Company or LLP",
    points: "Contractors serving industrial parks decide early on the GST position for transport services and plan labour-law registrations for deployed staff.",
  },
  {
    type: "Silk weaving and saree trading",
    structure: "Partnership or proprietorship moving to a Pvt Ltd or LLP",
    points: "Kanchipuram silk is a registered Geographical Indication. A new company selling under that name should check its authorised-user position and move GST and bank accounts to the company's PAN.",
  },
];

const AFTER = [
  { item: "GST", detail: "Registered at your Kanchipuram district place of business; separate GSTINs are needed only for other states." },
  { item: "Udyam (MSME)", detail: "For manufacturing and service units that qualify, to access MSME schemes and delayed-payment protection." },
  { item: "Professional tax", detail: "Registered with the corporation, municipality or panchayat where the company operates." },
  { item: "Factory and pollution approvals", detail: "Issued by separate state departments for manufacturing units; not part of SPICe+." },
  { item: "IEC and LUT", detail: "For exporters of components, electronics or silk, so goods can be shipped without paying IGST upfront." },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/company-registration-kanchipuram`}
      serviceType="Company Registration"
      crumbLabel="Company Registration in Kanchipuram"
      crumbHref="/company-registration-kanchipuram"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="Company Registration · Kanchipuram"
      h1="Private Limited Company Registration in Kanchipuram"
      subhead="Pvt Ltd registration for suppliers in the Sriperumbudur–Oragadam industrial belt, logistics firms and Kanchipuram silk businesses. Our office is in Anna Nagar, Chennai; we handle Kanchipuram district registrations online, by video call and digital signature."
      introHeading="How does private limited company registration in Kanchipuram work?"
      intro="Private limited company registration in Kanchipuram is an online SPICe+ application to the Ministry of Corporate Affairs. A company with its registered office in Kanchipuram district comes under the Registrar of Companies, Chennai. We are based in Anna Nagar, Chennai, and handle Kanchipuram registrations by video call, scanned documents and digital signatures."
      citation={{
        label: "MCA list of Registrar of Companies offices",
        href: "https://www.mca.gov.in/content/mca/global/en/contact-us/roc.html",
      }}
      keyFacts={[
        { label: "Where we work from", value: "Our office is in Anna Nagar, Chennai. We have no office in Kanchipuram; we serve Kanchipuram district clients online." },
        { label: "Registrar (ROC)", value: "ROC Chennai, which has jurisdiction over Kanchipuram district." },
        { label: "District note", value: "Chengalpattu district was carved out of Kanchipuram in 2019, so check which district your registered office now falls in before filing." },
        { label: "Common structures", value: "Private Limited Company for industrial suppliers and foreign-owned units; LLP for family trading and service firms; OPC for solo founders." },
        { label: "Typical time", value: "7–12 working days once documents and digital signatures are ready." },
      ]}
      subServicesHeading="What do we handle for Kanchipuram businesses?"
      subServices={[
        { name: "Structure advice", text: "A video call to decide between Pvt Ltd, LLP and OPC, taking into account customer onboarding requirements, bank finance and any foreign shareholder." },
        { name: "DSC and name approval", text: "Class 3 digital signatures with online video verification, and names searched against MCA and trademark records before SPICe+ Part A." },
        { name: "SPICe+ filing", text: "SPICe+ Part B with e-MoA, e-AoA and AGILE-PRO-S, with objects drafted for component manufacturing, electronics assembly, logistics or textiles." },
        { name: "Subsidiaries of foreign groups", text: "Incorporation of an Indian subsidiary with a resident director, apostilled parent documents and FC-GPR reporting after shares are allotted." },
        { name: "GST and Udyam", text: "GST registration at your Kanchipuram district address and Udyam registration for qualifying units." },
        { name: "First-year compliance", text: "Auditor appointment, share certificates, INC-20A and a calendar for the first AGM and annual ROC filings." },
      ]}
      howTo={{
        heading: "How do we register your Kanchipuram company online?",
        steps: [
          { name: "Video call and checklist", text: "We agree the structure, capital and directors and send a document list. Scans by email are enough; originals can be couriered to our Chennai office if you prefer." },
          { name: "Digital signatures", text: "Each director completes a short online video verification to receive a Class 3 DSC." },
          { name: "Name reservation", text: "We file SPICe+ Part A with one or two names suited to your trade." },
          { name: "Incorporation filing", text: "We prepare SPICe+ Part B with e-MoA, e-AoA and AGILE-PRO-S, and you sign with your DSC. No physical signature or visit is needed." },
          { name: "Certificate of Incorporation", text: "The certificate is issued with CIN, PAN and TAN, and the company appears on the records of ROC Chennai." },
          { name: "Bank, GST and onboarding", text: "You open the current account at a branch of your choice; we complete GST, Udyam and the documents customers ask for at vendor onboarding." },
        ],
      }}
      faqs={[
        {
          question: "Do I need to visit Chennai to register a company in Kanchipuram?",
          answer:
            "No. SPICe+ incorporation is entirely online, digital signatures are issued after an online video check, and every form is signed digitally. Kanchipuram founders can work with us by video call and email. Anna Nagar is within driving distance if you prefer to meet, but a visit is optional.",
        },
        {
          question: "Which ROC will my Kanchipuram company be registered with?",
          answer:
            "A company with its registered office in Kanchipuram district comes under the Registrar of Companies, Chennai, as do companies in neighbouring Chengalpattu and Tiruvallur districts. The SPICe+ application is processed centrally by MCA, and later annual filings are made online, so you do not need to visit the ROC office.",
        },
        {
          question: "Should a Sriperumbudur auto-component supplier register as a Pvt Ltd or an LLP?",
          answer:
            "A Private Limited Company usually suits a component supplier, because vehicle makers, tier-1 buyers and banks are used to dealing with companies, and it can add shareholders later. An LLP has lighter compliance but cannot issue shares. If you expect bank limits or outside investment, a Pvt Ltd is the more practical choice.",
        },
        {
          question: "Can a rented unit in an industrial park be the registered office?",
          answer:
            "Yes. A rented factory shed, a unit in a SIPCOT or private industrial park, a shop or a home can be the registered office. You need a utility bill not older than two months, the rent or lease agreement, and the owner's no-objection letter. The address must be able to receive official correspondence.",
        },
        {
          question: "Can a Kanchipuram silk weaving family business become a company?",
          answer:
            "Yes. A partnership firm can register as a company under Section 366 of the Companies Act, or the family can incorporate a new company that takes over the business through a business transfer agreement. GST, bank accounts, looms and stock then move to the company, and its use of the Kanchipuram silk name should be checked.",
        },
        {
          question: "How does a foreign company set up a subsidiary near Sriperumbudur?",
          answer:
            "The foreign parent subscribes to shares of a new Indian private limited company incorporated through SPICe+, with at least one director resident in India. Parent documents are apostilled or consularised. After shares are allotted against money received from abroad, the company reports the investment to RBI in Form FC-GPR within 30 days.",
        },
      ]}
      relatedSlugs={["private-limited-company-incorporation-chennai", "llp-registration-chennai", "opc-registration-chennai", "gst-registration-chennai", "msme-udyam-registration-chennai", "annual-compliance-package"]}
      relatedPosts={["private-limited-vs-llp-chennai-startups", "spice-plus-incorporation-explained", "lut-for-exporters", "post-incorporation-compliance-checklist"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Which Kanchipuram businesses typically incorporate, and what should they check?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Kanchipuram district combines two very different economies: the Sriperumbudur–Oragadam industrial corridor, with
        automobile, auto-component and electronics manufacturing in large industrial parks, and the temple town&apos;s
        long-established silk weaving and saree trade. The registration questions differ for each.
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

      <h2 className="mt-14 text-2xl text-obsidian">How do we serve Kanchipuram clients from Chennai?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        C S Rushil &amp; Co. works from one office, in Anna Nagar, Chennai. We do not have a branch, address or representative
        in Kanchipuram district. We meet you on a video call or, if you prefer, at our Anna Nagar office by appointment,
        collect scanned documents by email, and send each MCA form for you to sign with your own digital signature. Because
        ROC filings, digital signatures and GST applications are online, working remotely does not add steps.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What registrations follow incorporation in Kanchipuram?</h2>
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
        . Nearby pages: <Link href="/company-registration-chengalpattu" className={LINK}>Chengalpattu</Link> and{" "}
        <Link href="/company-registration-vellore" className={LINK}>Vellore</Link>. To discuss your registration,{" "}
        <Link href="/contact" className={LINK}>contact us</Link>.
      </p>
    </ServicePageTemplate>
  );
}
