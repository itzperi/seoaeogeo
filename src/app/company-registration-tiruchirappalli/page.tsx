import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Company Registration in Trichy (Tiruchirappalli)" },
  description:
    "Company registration in Trichy for fabrication, engineering and PSU vendor units, handled online from our Chennai office: SPICe+, ROC Chennai, GST and Udyam.",
  alternates: { canonical: "/company-registration-tiruchirappalli" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Company Registration in Trichy (Tiruchirappalli)",
    description: "Pvt Ltd, LLP and OPC registration for Trichy fabricators, engineering firms and start-ups, handled online from our Anna Nagar, Chennai office.",
    url: "/company-registration-tiruchirappalli",
  },
};

const LINK = "text-royal-violet underline underline-offset-2";

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/company-registration-tiruchirappalli`}
      serviceType="Company Registration"
      crumbLabel="Company Registration in Trichy"
      crumbHref="/company-registration-tiruchirappalli"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="Company Registration · Tiruchirappalli"
      h1="Company Registration in Trichy (Tiruchirappalli)"
      subhead="Private Limited, LLP and OPC registration for Trichy fabrication and engineering units, public-sector vendors and new start-ups. Our office is in Anna Nagar, Chennai, and we serve Tiruchirappalli businesses online."
      introHeading="How does company registration in Trichy work?"
      intro="Company registration in Trichy (Tiruchirappalli) is an online SPICe+ filing on the MCA portal. A company with its registered office in Tiruchirappalli district comes under the Registrar of Companies, Chennai. We handle Trichy incorporations remotely from our Anna Nagar, Chennai office, working through video calls, scanned documents and digital signatures, so no visit is required."
      citation={{
        label: "MCA list of Registrar of Companies offices",
        href: "https://www.mca.gov.in/content/mca/global/en/contact-us/roc.html",
      }}
      keyFacts={[
        { label: "Where we work from", value: "Anna Nagar, Chennai. We have no office in Trichy; we serve Tiruchirappalli clients online." },
        { label: "Registrar (ROC)", value: "ROC Chennai, which has jurisdiction over Tiruchirappalli district." },
        { label: "Common structures", value: "Pvt Ltd for fabrication and engineering vendors bidding for larger contracts; LLP for engineering consultancies; OPC for solo technical founders." },
        { label: "Typical time", value: "7–12 working days once documents and digital signatures are ready." },
        { label: "Usual follow-ons", value: "GST, Udyam (useful for public procurement), professional tax with the local body, and vendor registration with buyers." },
      ]}
      subServicesHeading="What do we handle for Trichy businesses?"
      subServices={[
        { name: "Structure advice", text: "Pvt Ltd, LLP or OPC, weighed against tender eligibility, bank guarantees, ownership and compliance cost." },
        { name: "DSC and name approval", text: "Class 3 digital signatures after online video verification, which you will also use for e-tendering, and a checked company name." },
        { name: "Incorporation filing", text: "SPICe+ or FiLLiP, with objects covering fabrication, machining, erection, engineering services and trading." },
        { name: "Udyam and GST", text: "Udyam registration for MSE benefits in public procurement, and GST registration at your Trichy workshop." },
        { name: "Vendor document pack", text: "Incorporation certificate, PAN, GST, Udyam and board resolutions organised for vendor registration with public-sector and private buyers." },
        { name: "First-year compliance", text: "Auditor appointment, INC-20A, registers and the first annual ROC and tax filings." },
      ]}
      howTo={{
        heading: "How do we register a Trichy company online?",
        steps: [
          { name: "Planning call", text: "We discuss the work you do, the buyers you supply, the owners and capital, and send a checklist." },
          { name: "Digital signatures", text: "Each director completes an online video verification from Trichy to receive a DSC." },
          { name: "Name approval", text: "We reserve the name through SPICe+ Part A, or RUN-LLP for an LLP." },
          { name: "Incorporation forms", text: "We prepare SPICe+ Part B with e-MoA, e-AoA and AGILE-PRO-S, which you sign digitally. No physical paperwork is needed." },
          { name: "Certificate of Incorporation", text: "The company receives its CIN, PAN and TAN and is recorded with ROC Chennai." },
          { name: "Registrations and vendor set-up", text: "We complete GST and Udyam; you open a current account in Trichy and begin vendor registration with your buyers." },
        ],
      }}
      faqs={[
        {
          question: "Do I need to visit Chennai to register my Trichy company?",
          answer:
            "No. Although a Trichy company comes under ROC Chennai, the whole process is online. Directors receive digital signatures after an online video check, sign every form digitally and share documents by email. Trichy clients work with us over video calls. You can courier originals to our Chennai office if you want to, but it is not required.",
        },
        {
          question: "Which ROC will my company be registered with?",
          answer:
            "A company or LLP whose registered office is in Tiruchirappalli district comes under the Registrar of Companies, Chennai. ROC Chennai covers Tamil Nadu except nine western districts, including Coimbatore, Salem and Erode, which are under ROC Coimbatore. Incorporation is processed centrally by MCA, so you do not deal with the ROC in person.",
        },
        {
          question: "Does a Trichy fabrication unit need to be a company to supply public-sector buyers?",
          answer:
            "Not necessarily. Public-sector buyers register proprietorships, partnerships, LLPs and companies as vendors, subject to their own criteria. However, larger contracts often look for financial strength, audited accounts and the ability to furnish bank guarantees, which a Private Limited Company can usually demonstrate more easily. Udyam registration helps small enterprises in public procurement.",
        },
        {
          question: "Why is Udyam registration important for Trichy engineering vendors?",
          answer:
            "Under the Public Procurement Policy for Micro and Small Enterprises, central ministries and public-sector undertakings aim to buy a set share of their annual requirements from micro and small enterprises, and registered MSEs can get benefits such as exemption from tender fees and earnest money in many tenders. Udyam registration is how an enterprise proves that status.",
        },
        {
          question: "Should an engineering consultancy in Trichy choose an LLP?",
          answer:
            "An LLP often suits a consultancy run by two or more engineers who want limited liability, a flexible partnership agreement and fewer formalities than a company. It needs an audit only above prescribed turnover or contribution limits. If you expect to raise equity funding or issue ESOPs, a Private Limited Company is the better choice.",
        },
        {
          question: "Can my workshop in Thuvakudi or Ariyamangalam be the registered office?",
          answer:
            "Yes. Any premises in Tiruchirappalli district that you own or rent, whether a workshop in an industrial area, an office or your home, can be the registered office. You need a recent utility bill and, for rented premises, the rent agreement and the owner's no-objection letter. The office can be changed later with an ROC filing.",
        },
      ]}
      relatedSlugs={["private-limited-company-incorporation-chennai", "llp-registration-chennai", "opc-registration-chennai", "gst-registration-chennai", "msme-udyam-registration-chennai", "annual-compliance-package"]}
      relatedPosts={["private-limited-vs-llp-chennai-startups", "msme-udyam-registration-checklist", "spice-plus-incorporation-explained", "annual-roc-filing-calendar"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Which Trichy businesses typically incorporate?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Tiruchirappalli is home to BHEL&apos;s High Pressure Boiler Plant and Seamless Steel Tube Plant. The MSME ministry&apos;s district
        profiles describe a fabrication cluster that grew up around BHEL, with hundreds of small units in areas such as Thuvakudi,
        Ariyamangalam and Thiruverumbur doing fabrication and engineering job work. Defence production units also operate in the
        district. Trichy businesses that typically consider incorporation include:
      </p>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• <strong className="text-obsidian">Fabrication and machining units</strong> that want to bid for larger orders and furnish bank guarantees.</li>
        <li>• <strong className="text-obsidian">Erection, inspection and engineering service firms</strong> working on power, process and infrastructure projects.</li>
        <li>• <strong className="text-obsidian">Trading firms</strong> supplying steel, consumables and spares to industrial buyers.</li>
        <li>• <strong className="text-obsidian">Software and education start-ups</strong> founded by graduates of Trichy&apos;s colleges.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">What should a vendor company in Trichy set up early?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Vendor registration with large buyers usually asks for the certificate of incorporation, PAN, GST, Udyam, cancelled cheque and
        an authorising board resolution, and many buyers tender through e-procurement portals that need a Class 3 DSC. We issue
        directors&apos; DSCs during incorporation, so the same certificate can be registered on tender portals. Professional tax is
        registered with the local body where the workshop operates, and factory or safety approvals, where your activity needs them,
        come from the relevant departments separately.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How do we serve Trichy clients from Chennai?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        C S Rushil &amp; Co. has one office, in Anna Nagar, Chennai, and no branch or representative in Tiruchirappalli. Trichy
        incorporations are handled through video calls, scanned documents and digital signatures, with courier available for
        originals. For a comparison of every structure, see our{" "}
        <Link href="/company-registration-chennai" className={LINK}>
          company registration guide
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
