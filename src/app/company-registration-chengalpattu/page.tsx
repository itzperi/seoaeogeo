import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Private Limited Company Registration in Chengalpattu | CA" },
  description:
    "Private limited company registration in Chengalpattu for Mahindra World City, Maraimalai Nagar and OMR/GST Road firms, handled online from Anna Nagar, Chennai.",
  alternates: { canonical: "/company-registration-chengalpattu" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Private Limited Company Registration in Chengalpattu",
    description: "Pvt Ltd registration for Chengalpattu district businesses, handled online from our Anna Nagar, Chennai office.",
    url: "/company-registration-chengalpattu",
  },
};

const LINK = "text-royal-violet underline underline-offset-2";
const TH = "p-4 font-medium text-obsidian";
const TD = "p-4 text-slate";

const SECTORS = [
  {
    type: "SEZ units in Mahindra World City",
    structure: "Private Limited Company, often a dedicated entity for the SEZ unit",
    points: "Incorporation comes first; the SEZ letter of approval from the Development Commissioner and the unit's export obligations are handled afterwards, so the MoA objects should cover the approved activity.",
  },
  {
    type: "Auto and engineering units around Maraimalai Nagar",
    structure: "Private Limited Company",
    points: "Supplier onboarding usually asks for a company PAN, GSTIN and audited accounts. EPFO and ESIC codes come through AGILE-PRO-S at incorporation.",
  },
  {
    type: "IT, software and GCC support firms on southern OMR",
    structure: "Private Limited Company",
    points: "ESOP-ready Articles, DPIIT Startup India recognition and, for foreign-owned firms, FC-GPR reporting after shares are allotted.",
  },
  {
    type: "Builders and developers along GST Road and OMR",
    structure: "Private Limited Company or LLP (often one per project)",
    points: "Projects above the RERA threshold must be registered with the Tamil Nadu Real Estate Regulatory Authority before marketing, in the promoter entity's name.",
  },
  {
    type: "Schools, clinics and services in Tambaram and suburbs",
    structure: "Pvt Ltd, LLP or a Section 8 company for non-profit institutions",
    points: "Choosing between a for-profit company and a Section 8 company affects how surplus can be used, so settle it before filing.",
  },
];

const AFTER = [
  { item: "GST", detail: "Registered at the Chengalpattu district place of business; SEZ units have their own GST treatment for supplies." },
  { item: "SEZ approvals", detail: "Letter of approval and related filings with the SEZ Development Commissioner, after incorporation." },
  { item: "TNRERA", detail: "Project registration for real estate promoters before advertising or selling units." },
  { item: "Professional tax", detail: "Registered with the corporation, municipality or panchayat where the company operates, such as Tambaram." },
  { item: "Udyam and IEC", detail: "Udyam for qualifying MSMEs; IEC for any company exporting goods or software services." },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/company-registration-chengalpattu`}
      serviceType="Company Registration"
      crumbLabel="Company Registration in Chengalpattu"
      crumbHref="/company-registration-chengalpattu"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="Company Registration · Chengalpattu"
      h1="Private Limited Company Registration in Chengalpattu"
      subhead="Pvt Ltd registration for Mahindra World City units, Maraimalai Nagar manufacturers, southern OMR technology firms and GST Road developers. Our office is in Anna Nagar, Chennai; we handle Chengalpattu district registrations online or by appointment at our office."
      introHeading="How does private limited company registration in Chengalpattu work?"
      intro="Private limited company registration in Chengalpattu is an online SPICe+ application to the Ministry of Corporate Affairs. A company with its registered office anywhere in Chengalpattu district, including Tambaram, Maraimalai Nagar or the OMR stretch beyond Chennai's limits, comes under the Registrar of Companies, Chennai. We handle these registrations from Anna Nagar."
      citation={{
        label: "MCA list of Registrar of Companies offices",
        href: "https://www.mca.gov.in/content/mca/global/en/contact-us/roc.html",
      }}
      keyFacts={[
        { label: "Where we work from", value: "Our office is in Anna Nagar, Chennai. We have no office in Chengalpattu district; we serve clients online or at Anna Nagar by appointment." },
        { label: "Registrar (ROC)", value: "ROC Chennai, which has jurisdiction over Chengalpattu district." },
        { label: "District note", value: "Chengalpattu district was formed from Kanchipuram district in 2019 and takes in Tambaram, Chengalpattu town, Maraimalai Nagar and southern OMR." },
        { label: "Common structures", value: "Private Limited Company for SEZ units, manufacturers and funded start-ups; LLP for project-specific real estate and professional firms." },
        { label: "Typical time", value: "7–12 working days once documents and digital signatures are ready; SEZ approvals take longer and run separately." },
      ]}
      subServicesHeading="What do we handle for Chengalpattu businesses?"
      subServices={[
        { name: "Structure advice", text: "Pvt Ltd, LLP, OPC or Section 8, based on funding plans, whether the business is an SEZ unit, a project-specific developer or a non-profit institution." },
        { name: "DSC and name approval", text: "Class 3 digital signatures with online video verification, and names searched against MCA and trademark records." },
        { name: "SPICe+ filing", text: "SPICe+ Part B with e-MoA, e-AoA and AGILE-PRO-S, with objects drafted to match SEZ, manufacturing, software or real estate activity." },
        { name: "Foreign-owned companies", text: "Subsidiaries of overseas groups with a resident director, apostilled parent documents and FC-GPR reporting." },
        { name: "GST, Udyam and DPIIT", text: "GST registration, Udyam for qualifying units and Startup India recognition for eligible technology companies." },
        { name: "First-year compliance", text: "Auditor appointment, share certificates, INC-20A, and a calendar for the first AGM and annual filings." },
      ]}
      howTo={{
        heading: "How do we register your Chengalpattu company?",
        steps: [
          { name: "Call and checklist", text: "We agree the structure, capital and directors by video call or at our Anna Nagar office and send a document list." },
          { name: "Digital signatures", text: "Each director completes a short online video verification to receive a Class 3 DSC." },
          { name: "Name reservation", text: "We file SPICe+ Part A with one or two names, checked against existing companies and trademarks." },
          { name: "Incorporation filing", text: "We prepare SPICe+ Part B with e-MoA, e-AoA and AGILE-PRO-S for you to sign with your DSC." },
          { name: "Certificate of Incorporation", text: "The certificate is issued with CIN, PAN and TAN, recorded with ROC Chennai." },
          { name: "Sector registrations", text: "We complete GST and Udyam and coordinate the SEZ, TNRERA or DPIIT steps that your business needs next." },
        ],
      }}
      faqs={[
        {
          question: "Is a company in Tambaram or Siruseri registered in Chennai or Chengalpattu?",
          answer:
            "It depends on the address, but the Registrar is the same. Tambaram and the OMR stretch south of Chennai's limits fall in Chengalpattu district, and both Chennai and Chengalpattu districts come under the Registrar of Companies, Chennai. The district matters more for GST jurisdiction and professional tax than for the ROC.",
        },
        {
          question: "How does a company set up an SEZ unit in Mahindra World City?",
          answer:
            "The company is incorporated first through SPICe+, with MoA objects covering the proposed activity. It then applies for a letter of approval to operate the unit through the SEZ Development Commissioner and signs the lease with the developer. Many groups use a separate company for the SEZ unit to keep its accounts and obligations distinct.",
        },
        {
          question: "Should a developer on GST Road register a company or an LLP for each project?",
          answer:
            "Both are used. A Private Limited Company suits developers expecting equity investors or bank project finance, while an LLP offers lighter compliance for a closely held project. Whichever is chosen becomes the promoter, and projects above the RERA threshold must be registered with the Tamil Nadu Real Estate Regulatory Authority before marketing.",
        },
        {
          question: "Can an OMR software start-up get Startup India recognition after incorporation?",
          answer:
            "Yes. A private limited company incorporated within the last ten years, with turnover below the DPIIT limit and working on innovation or a scalable model, can apply for Startup India recognition online. Recognition can help with certain tax exemptions and self-certification under some labour laws. We prepare the application after incorporation.",
        },
        {
          question: "Can my home in a Chengalpattu suburb be the registered office?",
          answer:
            "Yes. A home in Tambaram, Guduvancheri, Urapakkam or elsewhere can be the registered office. You need a utility bill not older than two months and, if the property is rented or owned by someone else, a rent agreement and the owner's no-objection letter. The office can later move to a factory or commercial address.",
        },
        {
          question: "Do I need to travel to register my company?",
          answer:
            "No. Incorporation, digital signatures and GST registration are all online, and forms are signed with your DSC. Chengalpattu founders often find Anna Nagar reachable for an in-person meeting, but it is optional. You will only need to visit your bank to open the company's current account.",
        },
      ]}
      relatedSlugs={["private-limited-company-incorporation-chennai", "llp-registration-chennai", "section-8-company-registration-chennai", "gst-registration-chennai", "msme-udyam-registration-chennai", "annual-compliance-package"]}
      relatedPosts={["private-limited-vs-llp-chennai-startups", "spice-plus-incorporation-explained", "post-incorporation-compliance-checklist"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Which Chengalpattu businesses typically incorporate, and what should they check?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Chengalpattu district is Chennai&apos;s southern growth belt: the Mahindra World City SEZ and industrial park,
        manufacturing around Maraimalai Nagar, technology campuses on the southern stretch of OMR, and fast-growing
        residential suburbs along GST Road. Each brings its own follow-on approvals.
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

      <h2 className="mt-14 text-2xl text-obsidian">How do we serve Chengalpattu clients from Chennai?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        C S Rushil &amp; Co. works from one office, in Anna Nagar, Chennai. We have no branch or representative in
        Chengalpattu district. Clients either meet us at Anna Nagar by appointment or work with us by video call and email,
        and sign every MCA form with their own digital signature. The registration steps are identical whichever way you
        choose.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What registrations follow incorporation in Chengalpattu?</h2>
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
        . Nearby pages: <Link href="/company-registration-kanchipuram" className={LINK}>Kanchipuram</Link> and{" "}
        <Link href="/startup-india-registration-chennai" className={LINK}>Startup India registration</Link>. To discuss your
        registration, <Link href="/contact" className={LINK}>contact us</Link>.
      </p>
    </ServicePageTemplate>
  );
}
