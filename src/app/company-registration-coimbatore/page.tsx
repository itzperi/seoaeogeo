import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Company Registration in Coimbatore | Pvt Ltd, LLP, OPC" },
  description:
    "Company registration in Coimbatore for Pvt Ltd, LLP and OPC founders, handled online from our Chennai office: DSC, SPICe+ filing, ROC Coimbatore, GST and Udyam.",
  alternates: { canonical: "/company-registration-coimbatore" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Company Registration in Coimbatore",
    description: "Pvt Ltd, LLP and OPC registration for Coimbatore businesses, handled online from our Anna Nagar, Chennai office.",
    url: "/company-registration-coimbatore",
  },
};

const LINK = "text-royal-violet underline underline-offset-2";

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/company-registration-coimbatore`}
      serviceType="Company Registration"
      crumbLabel="Company Registration in Coimbatore"
      crumbHref="/company-registration-coimbatore"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="Company Registration · Coimbatore"
      h1="Company Registration in Coimbatore"
      subhead="Private Limited, LLP and OPC registration for Coimbatore manufacturers, engineering firms and founders. Our office is in Anna Nagar, Chennai; we handle Coimbatore registrations fully online, by video call and digital signature."
      introHeading="How does company registration in Coimbatore work?"
      intro="Company registration in Coimbatore is done online on the MCA portal through SPICe+, the same as anywhere in India. A company whose registered office is in Coimbatore district comes under the Registrar of Companies, Coimbatore. We are based in Anna Nagar, Chennai and handle Coimbatore registrations remotely, using video calls, digital signatures and scanned documents."
      citation={{
        label: "MCA list of Registrar of Companies offices",
        href: "https://www.mca.gov.in/content/mca/global/en/contact-us/roc.html",
      }}
      keyFacts={[
        { label: "Where we work from", value: "Our office is in Anna Nagar, Chennai. We have no office in Coimbatore; we serve Coimbatore clients online." },
        { label: "Registrar (ROC)", value: "ROC Coimbatore, whose jurisdiction covers Coimbatore district along with Tiruppur, Erode, Salem and five other western districts." },
        { label: "Common structures", value: "Private Limited Company for manufacturers seeking bank finance or investors; LLP for engineering consultancies and family firms; OPC for solo founders." },
        { label: "Typical time", value: "7–12 working days once documents and digital signatures are ready." },
        { label: "Usual follow-ons", value: "GST, Udyam (MSME), professional tax with the local body, and IEC if you export pumps, machinery or textiles." },
      ]}
      subServicesHeading="What do we handle for Coimbatore businesses?"
      subServices={[
        { name: "Structure advice", text: "A short video call to decide between Pvt Ltd, LLP and OPC, based on how many owners you have, whether you need bank funding and how you plan to grow." },
        { name: "DSC and name approval", text: "Digital Signature Certificates with online video verification, and a name searched against MCA and trademark records before filing." },
        { name: "SPICe+ or FiLLiP filing", text: "SPICe+ for companies and FiLLiP for LLPs, with the MoA, AoA or LLP agreement drafted to cover manufacturing or engineering objects." },
        { name: "Registered office in Coimbatore", text: "Your factory, shop or home in Coimbatore becomes the registered office. We prepare the owner's NOC and check the utility bill before upload." },
        { name: "GST and Udyam", text: "GST registration for your Coimbatore place of business and Udyam registration so the new entity can access MSME schemes." },
        { name: "First-year compliance", text: "Auditor appointment, INC-20A, share certificates and a calendar for your first annual ROC filings." },
      ]}
      howTo={{
        heading: "How do we register your Coimbatore company online?",
        steps: [
          { name: "Video call and document list", text: "We agree the structure, capital and directors, and send a checklist. Documents can be scanned and emailed, or couriered to our Chennai office if you prefer." },
          { name: "Digital signatures", text: "Each director completes a short online video verification from Coimbatore to receive a Class 3 DSC." },
          { name: "Name reservation", text: "We file SPICe+ Part A (or RUN-LLP for an LLP) with one or two names that suit your trade." },
          { name: "Incorporation filing", text: "SPICe+ Part B with e-MoA, e-AoA and AGILE-PRO-S is prepared by us and signed by you with your DSC. Nothing needs a physical signature or a visit." },
          { name: "Certificate of Incorporation", text: "The certificate is issued with CIN, PAN and TAN, and the company appears on the records of ROC Coimbatore." },
          { name: "Bank, GST and Udyam", text: "You open the current account at a Coimbatore branch of your choice; we complete GST, Udyam and the post-incorporation filings." },
        ],
      }}
      faqs={[
        {
          question: "Do I need to visit Chennai to register my company?",
          answer:
            "No. Company and LLP registration is entirely online on the MCA portal, digital signatures are issued after an online video check, and every form is signed digitally. Coimbatore founders work with us by video call and email, and may courier originals. You will only need to visit your own bank in Coimbatore to open the current account.",
        },
        {
          question: "Which ROC will my company be registered with?",
          answer:
            "If the registered office is in Coimbatore district, the company comes under the Registrar of Companies, Coimbatore, which also covers Tiruppur, Erode, Salem, Namakkal, Dharmapuri, Krishnagiri, Dindigul and the Nilgiris. The incorporation form itself is processed centrally by MCA, so you do not deal with the ROC office in person.",
        },
        {
          question: "Should a Coimbatore pump or foundry business register as a Pvt Ltd or an LLP?",
          answer:
            "A Private Limited Company usually suits a manufacturing unit that plans to borrow from banks, add shareholders or supply larger buyers, because lenders and buyers are familiar with it. An LLP suits a closely held family business or engineering consultancy that wants limited liability with lighter compliance. We compare both on a call before you file.",
        },
        {
          question: "Can my factory in an industrial estate be the registered office?",
          answer:
            "Yes. Any premises in Coimbatore that you own or rent can be the registered office, including a unit in an industrial estate or SIDCO estate, a shop, or your home. You need a recent utility bill and, if the premises are rented or owned by someone else, a rent agreement and the owner's no-objection letter.",
        },
        {
          question: "I already run a proprietorship in Coimbatore. Can I move it into a company?",
          answer:
            "Yes. You incorporate a new company and then transfer the business to it, usually through a business transfer agreement, moving stock, machinery, contracts and staff. The company needs its own GST registration, bank account and Udyam number. We plan the transfer date so invoices, input tax credit and existing contracts move across cleanly.",
        },
        {
          question: "Do Coimbatore exporters need anything beyond company registration?",
          answer:
            "Yes. To export goods such as pumps, motors, castings or textile machinery spares, the company needs an Importer Exporter Code from DGFT, which is linked to its PAN. Exporters also usually file a Letter of Undertaking under GST so that exports can be shipped without paying IGST upfront. We can add both after incorporation.",
        },
      ]}
      relatedSlugs={["private-limited-company-incorporation-chennai", "llp-registration-chennai", "opc-registration-chennai", "gst-registration-chennai", "msme-udyam-registration-chennai", "annual-compliance-package"]}
      relatedPosts={["private-limited-vs-llp-chennai-startups", "spice-plus-incorporation-explained", "lut-for-exporters", "post-incorporation-compliance-checklist"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Which businesses in Coimbatore typically incorporate?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        The Coimbatore district administration describes the city as the textile capital of South India and notes its foundry and
        automobile industries, along with makers of textile machinery and spares, motor pump sets, wet grinders and a wide range of
        engineering goods. Businesses in Coimbatore that typically consider incorporation include:
      </p>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• <strong className="text-obsidian">Pump, motor and wet grinder makers</strong> often start as proprietorships or partnerships and incorporate when a dealer network, bank limit or second generation joins the business.</li>
        <li>• <strong className="text-obsidian">Foundries and machining units</strong> supplying automobile and engineering buyers tend to choose a Private Limited Company, because larger customers and lenders prefer a corporate supplier with audited accounts.</li>
        <li>• <strong className="text-obsidian">Spinning and textile businesses</strong> with several family members as owners weigh a Pvt Ltd against an LLP, depending on whether outside capital is likely.</li>
        <li>• <strong className="text-obsidian">Engineering consultants, design studios and software start-ups</strong> commonly pick an LLP or OPC, or a Pvt Ltd if they plan to raise funding.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">How do we serve Coimbatore clients from Chennai?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        C S Rushil &amp; Co. works from one office, in Anna Nagar, Chennai. We do not have a branch, address or representative in
        Coimbatore. For Coimbatore registrations, we meet you on a video call, collect scanned documents by email, and send each MCA
        form for you to sign with your own digital signature. If you would rather hand over originals, you can courier them to our
        Chennai office and we return them the same way. Because ROC filings, digital signatures and GST applications are all online,
        working remotely does not add steps to the registration itself.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What comes after incorporation in Coimbatore?</h2>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• <strong className="text-obsidian">GST</strong>, registered at your Coimbatore address, if turnover will cross the threshold or you sell to registered buyers.</li>
        <li>• <strong className="text-obsidian">Udyam registration</strong>, so a small manufacturing unit can use MSME schemes and delayed-payment protection.</li>
        <li>• <strong className="text-obsidian">Professional tax</strong>, registered with the local body (corporation, municipality or panchayat) where the company operates.</li>
        <li>• <strong className="text-obsidian">IEC and LUT</strong> for exporters, and factory or pollution-control approvals where your manufacturing activity needs them; these come from separate departments.</li>
      </ul>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        For a side-by-side comparison of every structure, see our{" "}
        <Link href="/company-registration-chennai" className={LINK}>
          company registration guide
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
