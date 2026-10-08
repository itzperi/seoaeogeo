import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Company Registration in Madurai | Pvt Ltd, LLP, OPC" },
  description:
    "Company registration in Madurai for food, garment, rubber and service firms, handled online from our Chennai office: SPICe+, ROC Chennai, GST, FSSAI, Udyam.",
  alternates: { canonical: "/company-registration-madurai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Company Registration in Madurai",
    description: "Pvt Ltd, LLP and OPC registration for Madurai businesses, handled online from our Anna Nagar, Chennai office.",
    url: "/company-registration-madurai",
  },
};

const LINK = "text-royal-violet underline underline-offset-2";

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/company-registration-madurai`}
      serviceType="Company Registration"
      crumbLabel="Company Registration in Madurai"
      crumbHref="/company-registration-madurai"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="Company Registration · Madurai"
      h1="Company Registration in Madurai"
      subhead="Private Limited, LLP and OPC registration for Madurai food processors, hosiery and garment makers, rubber and plastic units, and service start-ups. We are based in Anna Nagar, Chennai and handle Madurai registrations online."
      introHeading="How does company registration in Madurai work?"
      intro="Company registration in Madurai is an online SPICe+ application to the Ministry of Corporate Affairs. A company with its registered office in Madurai district comes under the Registrar of Companies, Chennai, which covers most of Tamil Nadu. We complete Madurai registrations remotely from our Anna Nagar office, by video call, scanned documents and digital signatures."
      citation={{
        label: "MCA list of Registrar of Companies offices",
        href: "https://www.mca.gov.in/content/mca/global/en/contact-us/roc.html",
      }}
      keyFacts={[
        { label: "Where we work from", value: "Our office is in Anna Nagar, Chennai. We have no Madurai office; Madurai clients are served online." },
        { label: "Registrar (ROC)", value: "ROC Chennai, whose jurisdiction covers Tamil Nadu except nine western districts that fall under ROC Coimbatore." },
        { label: "Common structures", value: "Pvt Ltd for food and manufacturing brands seeking finance; LLP for trading and professional firms; OPC for solo founders and consultants." },
        { label: "Typical time", value: "7–12 working days once documents and digital signatures are ready." },
        { label: "Usual follow-ons", value: "GST, Udyam, FSSAI for food businesses, professional tax with the Madurai local body, and IEC for exporters." },
      ]}
      subServicesHeading="What do we handle for Madurai businesses?"
      subServices={[
        { name: "Picking a structure", text: "A clear comparison of Pvt Ltd, LLP and OPC against your ownership, funding plans and the compliance you can manage." },
        { name: "DSC and name approval", text: "Digital signatures after online video verification and a name checked against MCA and trademark records." },
        { name: "SPICe+ or FiLLiP", text: "Incorporation documents drafted around your actual activity, whether food processing, garment manufacture, retail or services." },
        { name: "FSSAI and GST", text: "FSSAI registration or licence for food businesses and GST registration at your Madurai premises." },
        { name: "Udyam and schemes", text: "Udyam registration, so the new entity can be considered for MSME schemes and protections." },
        { name: "First-year compliance", text: "Auditor appointment, INC-20A, share certificates and a filing calendar for the first year." },
      ]}
      howTo={{
        heading: "How do we register a Madurai company online?",
        steps: [
          { name: "Introductory call", text: "We understand your business and owners, recommend a structure and send the document checklist." },
          { name: "Digital signatures", text: "Directors complete an online video verification from Madurai for their Class 3 DSCs." },
          { name: "Name approval", text: "We file SPICe+ Part A or RUN-LLP with names that reflect your trade and are free of trademark conflicts." },
          { name: "Incorporation filing", text: "SPICe+ Part B, e-MoA, e-AoA and AGILE-PRO-S, or the LLP equivalents, signed with your digital signatures." },
          { name: "Certificate of Incorporation", text: "On approval, the CIN, PAN and TAN are issued and the company is recorded with ROC Chennai." },
          { name: "Licences and bank", text: "We complete GST, Udyam and FSSAI if needed, and you open a current account at a Madurai branch." },
        ],
      }}
      faqs={[
        {
          question: "Do I need to visit Chennai to register my Madurai company?",
          answer:
            "No. Even though a Madurai company comes under ROC Chennai, there is no need to visit the ROC or our office. Digital signatures are issued after an online video check, every form is signed digitally, and documents can be scanned and emailed. If you prefer, originals can be couriered to our Chennai office and returned the same way.",
        },
        {
          question: "Which ROC will my company be registered with?",
          answer:
            "A company or LLP with its registered office in Madurai district is placed under the Registrar of Companies, Chennai. ROC Chennai covers all of Tamil Nadu except Coimbatore, Tiruppur, Erode, Salem, Namakkal, Dharmapuri, Krishnagiri, Dindigul and the Nilgiris, which fall under ROC Coimbatore. Incorporation is processed centrally by MCA in either case.",
        },
        {
          question: "Does a food business in Madurai need FSSAI before or after incorporation?",
          answer:
            "After. FSSAI registration or a licence is issued in the name of the business operator, so a new company or LLP applies once it has its certificate of incorporation and PAN. If an existing proprietorship already holds FSSAI, the new entity still needs its own. We plan incorporation and FSSAI together so production is not interrupted.",
        },
        {
          question: "Which structure suits a hosiery or readymade garment unit in Madurai?",
          answer:
            "A small garment unit with one owner often works as a proprietorship or OPC. Units with several owners, or that want bank finance and supply contracts with larger buyers, commonly choose a Private Limited Company or LLP. We recommend a structure after looking at the number of owners, expected turnover and funding needs.",
        },
        {
          question: "Can a unit in a SIDCO industrial estate be the registered office?",
          answer:
            "Yes. A unit in an industrial estate such as Kappalur or K. Pudur, a shop, an office or your home in Madurai can be the registered office. You need a recent utility bill and, where the premises are not owned by the company, a rent or lease agreement and the owner's no-objection letter.",
        },
        {
          question: "Can I start as an OPC in Madurai and add partners later?",
          answer:
            "Yes. An OPC can convert into a Private Limited Company at any time by adding at least one more member and director, altering its documents and filing INC-6 with the ROC. It remains the same legal entity, so its PAN, GST registration, bank account and contracts continue. Many solo founders start this way.",
        },
      ]}
      relatedSlugs={["private-limited-company-incorporation-chennai", "llp-registration-chennai", "opc-registration-chennai", "gst-registration-chennai", "msme-udyam-registration-chennai", "annual-compliance-package"]}
      relatedPosts={["llp-vs-opc-vs-pvt-ltd", "spice-plus-incorporation-explained", "msme-loan-schemes-tamil-nadu", "common-compliance-mistakes-chennai-startups"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Which Madurai businesses typically incorporate?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        The Madurai district industries department reports that food and food-based units form the largest group of MSMEs in the
        district, followed by sizeable numbers of hosiery and readymade garment units and rubber and plastic units. It also lists SIDCO
        industrial estates at Kappalur and K. Pudur, a hosiery estate at Uranganpatti and a textile park at Vadipatti. Madurai businesses
        that typically consider incorporation include:
      </p>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• <strong className="text-obsidian">Food and agro processors</strong> building packaged brands that need FSSAI, GST and a corporate identity for retail and distributor deals.</li>
        <li>• <strong className="text-obsidian">Hosiery and garment makers</strong> moving from job work to their own label.</li>
        <li>• <strong className="text-obsidian">Rubber and plastic product units</strong> supplying industrial and consumer buyers.</li>
        <li>• <strong className="text-obsidian">Software, education and healthcare service start-ups</strong> that expect to bring in investors.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">What changes after incorporation for a Madurai business?</h2>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• The company needs its own current account, GST registration and, for food businesses, its own FSSAI number.</li>
        <li>• Professional tax is registered with the local body, such as the Madurai corporation, where the business operates.</li>
        <li>• An auditor must be appointed within 30 days, and the declaration of commencement of business (INC-20A) filed within 180 days of incorporation.</li>
        <li>• Annual accounts and returns are filed online with ROC Chennai every year, even if the company has not traded.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">How do we serve Madurai clients from Chennai?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        C S Rushil &amp; Co. works from one office, in Anna Nagar, Chennai. We have no branch, address or agent in Madurai. Madurai
        clients work with us through video calls, email and digital signatures, and can courier documents if they prefer. For a full
        comparison of structures, read our{" "}
        <Link href="/company-registration-chennai" className={LINK}>
          company registration guide
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
