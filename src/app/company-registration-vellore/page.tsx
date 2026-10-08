import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Company Registration in Vellore | Pvt Ltd, LLP, OPC" },
  description:
    "Company registration in Vellore for leather, footwear and healthcare firms, handled online from our Chennai office: SPICe+, ROC Chennai, GST, IEC and Udyam.",
  alternates: { canonical: "/company-registration-vellore" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Company Registration in Vellore",
    description: "Pvt Ltd, LLP and OPC registration for Vellore leather, footwear and healthcare businesses, handled online from our Anna Nagar, Chennai office.",
    url: "/company-registration-vellore",
  },
};

const LINK = "text-royal-violet underline underline-offset-2";

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/company-registration-vellore`}
      serviceType="Company Registration"
      crumbLabel="Company Registration in Vellore"
      crumbHref="/company-registration-vellore"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="Company Registration · Vellore"
      h1="Company Registration in Vellore"
      subhead="Private Limited, LLP and OPC registration for Vellore leather and footwear exporters, healthcare and diagnostic businesses, and service start-ups. We work from Anna Nagar, Chennai and serve Vellore clients online."
      introHeading="How does company registration in Vellore work?"
      intro="Company registration in Vellore is filed online with the Ministry of Corporate Affairs through SPICe+. A company with its registered office in Vellore district comes under the Registrar of Companies, Chennai. We handle Vellore registrations remotely from our Anna Nagar, Chennai office, using video calls, scanned documents and digital signatures, with courier as an option for originals."
      citation={{
        label: "MCA list of Registrar of Companies offices",
        href: "https://www.mca.gov.in/content/mca/global/en/contact-us/roc.html",
      }}
      keyFacts={[
        { label: "Where we work from", value: "Our office is in Anna Nagar, Chennai. We have no Vellore office; Vellore clients are served online." },
        { label: "Registrar (ROC)", value: "ROC Chennai, which covers Vellore district as well as neighbouring Ranipet and Tirupattur districts." },
        { label: "Common structures", value: "Pvt Ltd for leather and footwear exporters and hospitals or diagnostic centres; LLP for family trading firms; OPC for solo founders." },
        { label: "Typical time", value: "7–12 working days once documents and digital signatures are ready." },
        { label: "Usual follow-ons", value: "GST, IEC and LUT for exporters, Udyam, professional tax, and sector licences such as drug or clinical establishment registration." },
      ]}
      subServicesHeading="What do we handle for Vellore businesses?"
      subServices={[
        { name: "Choosing the structure", text: "Pvt Ltd, LLP or OPC, considering export buyers, bank finance, partners and the licences your sector needs." },
        { name: "DSC and name approval", text: "Digital signatures through online video verification, and a name checked against MCA and trademark records." },
        { name: "Incorporation filing", text: "SPICe+ or FiLLiP, with objects drafted for leather goods, footwear, healthcare services, pharmacy or trading as applicable." },
        { name: "Export set-up", text: "IEC from DGFT, GST registration and the LUT that lets you ship without paying IGST upfront." },
        { name: "Healthcare entity set-up", text: "Incorporating the company that will hold a clinic, lab or pharmacy, so licences can be applied for in its name." },
        { name: "First-year compliance", text: "Auditor appointment, INC-20A, statutory registers and the first ROC and tax filings." },
      ]}
      howTo={{
        heading: "How do we register a Vellore company online?",
        steps: [
          { name: "Initial call", text: "We discuss your business, owners and the licences you will need later, then share a checklist." },
          { name: "Digital signatures", text: "Directors complete an online video verification from Vellore to receive Class 3 DSCs." },
          { name: "Name reservation", text: "SPICe+ Part A or RUN-LLP, with names that suit export buyers or patients as relevant." },
          { name: "Incorporation filing", text: "SPICe+ Part B, e-MoA, e-AoA and AGILE-PRO-S, signed digitally by you. There is no physical signing." },
          { name: "Certificate of Incorporation", text: "The company receives its CIN, PAN and TAN and is recorded with ROC Chennai." },
          { name: "Licences and bank", text: "We complete GST, Udyam, IEC and LUT as needed; you open a current account and apply for sector licences." },
        ],
      }}
      faqs={[
        {
          question: "Do I need to visit Chennai to register my Vellore company?",
          answer:
            "No. Vellore is close to Chennai, but you still do not need to travel. Digital signatures are issued after an online video check, every form is signed digitally, and documents are shared by email. Vellore clients work with us by video call, and you may drop off or courier originals to our Anna Nagar office if you prefer.",
        },
        {
          question: "Which ROC will my company be registered with?",
          answer:
            "A company or LLP with its registered office in Vellore district comes under the Registrar of Companies, Chennai. The same applies to Ranipet and Tirupattur districts. ROC Chennai covers Tamil Nadu except nine western districts, which fall under ROC Coimbatore. Incorporation is processed centrally by MCA, so there is no ROC visit.",
        },
        {
          question: "What does a new leather or footwear exporter in the Vellore region need after incorporation?",
          answer:
            "The new company needs its own Importer Exporter Code from DGFT, GST registration and a Letter of Undertaking under GST for zero-rated exports. Exporters also commonly take membership of the Council for Leather Exports, the export promotion council for the sector. Pollution-control consents for tanning or processing come from the state pollution control board separately.",
        },
        {
          question: "Can a hospital, clinic or diagnostic centre in Vellore be run through a company?",
          answer:
            "Yes. Hospitals, diagnostic labs and pharmacies are often owned by a Private Limited Company, which can hold premises, equipment and bank loans and employ doctors and staff. Incorporation is only the first step: registration under the applicable clinical establishments law, drug licences and other health permissions are applied for separately, in the company's name.",
        },
        {
          question: "Should a Vellore family trading business choose an LLP?",
          answer:
            "An LLP suits family members who want limited liability and a flexible agreement on profit sharing, with lighter compliance than a company and an audit only above prescribed limits. A Private Limited Company is better if the business needs equity investors, larger bank finance or wants to issue shares to employees.",
        },
        {
          question: "Can my home or shop in Vellore be the registered office?",
          answer:
            "Yes. Any premises in Vellore that you own or rent, including your home, shop or factory, can be the registered office. You need a recent utility bill and, if the premises are rented or belong to someone else, a rent agreement and the owner's no-objection letter. The office can be shifted later through an ROC filing.",
        },
      ]}
      relatedSlugs={["private-limited-company-incorporation-chennai", "llp-registration-chennai", "opc-registration-chennai", "gst-registration-chennai", "msme-udyam-registration-chennai", "annual-compliance-package"]}
      relatedPosts={["lut-for-exporters", "private-limited-vs-llp-chennai-startups", "spice-plus-incorporation-explained", "post-incorporation-compliance-checklist"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Which Vellore businesses typically incorporate?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        The Council for Leather Exports lists Vellore, along with Ambur, Ranipet, Vaniyambadi and Pernambut, among India&apos;s major
        production centres for leather, footwear and leather products. Some of these towns are now in Ranipet and Tirupattur
        districts, which were formed out of Vellore district in 2019. The Vellore district administration also highlights the Christian
        Medical College and Hospital as a landmark that put Vellore on the medical map. Businesses in the area that typically consider incorporation include:
      </p>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• <strong className="text-obsidian">Leather goods and footwear makers and exporters</strong>, including job-work units that want to deal directly with overseas buyers.</li>
        <li>• <strong className="text-obsidian">Diagnostic centres, pharmacies and clinics</strong> that need an entity to hold licences, equipment loans and staff.</li>
        <li>• <strong className="text-obsidian">Hospitality and service businesses</strong> catering to visitors who come to Vellore for treatment or study.</li>
        <li>• <strong className="text-obsidian">Technology and education start-ups</strong> planning to raise funding.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">Why does the sector matter when drafting your incorporation documents?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        The objects clause in the Memorandum of Association should cover what the company will actually do, because licensing
        authorities, banks and export bodies read it. A footwear exporter&apos;s objects need to cover manufacture, job work and export; a
        diagnostic company&apos;s need to cover laboratory and healthcare services. Drafting this correctly at the start avoids an
        alteration filing later. Professional tax is registered with the local body where the business operates.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How do we serve Vellore clients from Chennai?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        C S Rushil &amp; Co. operates from one office, in Anna Nagar, Chennai, and has no branch or address in Vellore. We work with
        Vellore clients through video calls, scanned documents and digital signatures. For a comparison of every structure, see our{" "}
        <Link href="/company-registration-chennai" className={LINK}>
          company registration guide
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
