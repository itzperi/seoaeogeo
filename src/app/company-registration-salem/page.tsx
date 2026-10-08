import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Company Registration in Salem | Pvt Ltd, LLP, OPC" },
  description:
    "Company registration in Salem for sago, textile, silk and steel-linked businesses, handled online from our Chennai office: SPICe+, ROC Coimbatore, GST, Udyam.",
  alternates: { canonical: "/company-registration-salem" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Company Registration in Salem",
    description: "Pvt Ltd, LLP and OPC registration for Salem businesses, handled online from our Anna Nagar, Chennai office.",
    url: "/company-registration-salem",
  },
};

const LINK = "text-royal-violet underline underline-offset-2";

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/company-registration-salem`}
      serviceType="Company Registration"
      crumbLabel="Company Registration in Salem"
      crumbHref="/company-registration-salem"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="Company Registration · Salem"
      h1="Company Registration in Salem"
      subhead="Private Limited, LLP and OPC registration for Salem sago and starch units, weavers and textile traders, fabricators and new-age founders. We are based in Anna Nagar, Chennai and serve Salem businesses online."
      introHeading="How does company registration in Salem work?"
      intro="Company registration in Salem is an online SPICe+ filing with the Ministry of Corporate Affairs. A company whose registered office is in Salem district is placed under the Registrar of Companies, Coimbatore, not Chennai. We handle Salem registrations remotely from our Anna Nagar, Chennai office through video calls, scanned documents and digital signatures, so no travel is needed."
      citation={{
        label: "MCA list of Registrar of Companies offices",
        href: "https://www.mca.gov.in/content/mca/global/en/contact-us/roc.html",
      }}
      keyFacts={[
        { label: "Where we work from", value: "Our office is in Anna Nagar, Chennai. We have no Salem office and serve Salem clients online." },
        { label: "Registrar (ROC)", value: "ROC Coimbatore, which covers Salem, Namakkal, Dharmapuri and six other western Tamil Nadu districts." },
        { label: "Common structures", value: "LLP or Pvt Ltd for family-run processing and weaving businesses; Pvt Ltd for units that need bank finance; OPC for solo founders." },
        { label: "Typical time", value: "7–12 working days once documents and digital signatures are ready." },
        { label: "Usual follow-ons", value: "GST, Udyam, FSSAI for food products such as sago, professional tax with the local body, and IEC for exporters." },
      ]}
      subServicesHeading="What do we handle for Salem businesses?"
      subServices={[
        { name: "Structure for family businesses", text: "Comparing LLP and Private Limited for sago, starch, weaving or trading businesses owned by several relatives, including how shares or profit ratios are set." },
        { name: "DSC and name approval", text: "Digital signatures through online video verification and a name checked against MCA and trademark records." },
        { name: "Incorporation filing", text: "SPICe+ for a company or FiLLiP for an LLP, with objects that cover processing, manufacturing, trading and export." },
        { name: "Food and product licences", text: "Coordinating FSSAI registration or licence for food products once the entity exists, and GST at your Salem unit." },
        { name: "Converting an existing firm", text: "Moving a running partnership or proprietorship into the new entity, including stock, machinery, bank limits and contracts." },
        { name: "Annual compliance", text: "Audit, AOC-4 and MGT-7 or LLP Form 8 and Form 11, income tax and GST returns after the first year." },
      ]}
      howTo={{
        heading: "How do we register a Salem company online?",
        steps: [
          { name: "First call", text: "We discuss the business, the family members involved and their roles, and recommend a structure." },
          { name: "Digital signatures", text: "Directors or partners complete an online video verification from Salem to receive Class 3 DSCs." },
          { name: "Name approval", text: "We reserve a name through SPICe+ Part A or RUN-LLP, often keeping the family business name where it is available." },
          { name: "Incorporation filing", text: "We prepare SPICe+ Part B with e-MoA, e-AoA and AGILE-PRO-S, or FiLLiP and the LLP agreement, and you sign digitally." },
          { name: "Certificate of Incorporation", text: "The entity gets its CIN or LLPIN, PAN and TAN and is recorded with ROC Coimbatore." },
          { name: "After incorporation", text: "You open a current account in Salem; we complete GST, Udyam and any FSSAI or IEC registration you need." },
        ],
      }}
      faqs={[
        {
          question: "Do I need to visit Chennai to register my Salem company?",
          answer:
            "No. Incorporation is done entirely online with the Ministry of Corporate Affairs, and you sign each form with a digital signature obtained after an online video check. Salem clients work with us by video call and email, and may courier originals if they prefer. The only visit you make is to your own bank to open the account.",
        },
        {
          question: "Which ROC will my company be registered with?",
          answer:
            "A company or LLP with its registered office in Salem district comes under the Registrar of Companies, Coimbatore. Its jurisdiction covers Salem, Coimbatore, Tiruppur, Erode, Namakkal, Dharmapuri, Krishnagiri, Dindigul and the Nilgiris. The incorporation form is processed centrally by MCA, and annual filings are online, so you do not need to visit the ROC.",
        },
        {
          question: "Is an LLP or a Private Limited Company better for a family sago or starch unit?",
          answer:
            "An LLP suits a family business that wants limited liability, simple profit sharing and lighter compliance, with no audit until turnover or contribution crosses the prescribed limits. A Private Limited Company suits a unit that needs larger bank finance or may bring in outside shareholders. Both protect personal assets from business debts.",
        },
        {
          question: "Does a sago manufacturing company need FSSAI registration?",
          answer:
            "Yes. Sago is a food product, so the manufacturing entity needs FSSAI registration or a licence, depending on its capacity and turnover. FSSAI is applied for in the name of the company or LLP once it is incorporated, and a licence held by an older firm does not transfer automatically. We coordinate the application after incorporation.",
        },
        {
          question: "Can a handloom or silk weaving business register as a company?",
          answer:
            "Yes. Weavers and silk saree businesses can incorporate as a Private Limited Company, LLP or OPC like any other business. Many small weaving units stay as proprietorships or join cooperative societies, and incorporation becomes useful when the business sells under its own brand, takes bank finance or brings several owners together.",
        },
        {
          question: "Can my home in Salem be the registered office?",
          answer:
            "Yes. A residential address in Salem can be the registered office, supported by a recent electricity bill or property tax receipt and the owner's no-objection letter if the house is not in your name. You can shift the registered office to a factory or office later by filing the change with the ROC.",
        },
      ]}
      relatedSlugs={["private-limited-company-incorporation-chennai", "llp-registration-chennai", "opc-registration-chennai", "gst-registration-chennai", "msme-udyam-registration-chennai", "annual-compliance-package"]}
      relatedPosts={["llp-vs-opc-vs-pvt-ltd", "spice-plus-incorporation-explained", "msme-loan-schemes-tamil-nadu", "post-incorporation-compliance-checklist"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Which Salem businesses typically incorporate?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        The Salem district administration describes the district as the land of sago, notes the hundreds of sago and starch units in
        the Salem belt, and lists Salem Fabric and Salem Silk as registered Geographical Indications, with Elampillai named as a major
        silk saree centre. The district is also home to the Salem Steel Plant. Salem businesses that typically consider incorporation include:
      </p>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• <strong className="text-obsidian">Sago and starch processors</strong>, often family partnerships, that want limited liability and a structure that can hold machinery and bank limits.</li>
        <li>• <strong className="text-obsidian">Silk saree and fabric makers and traders</strong> moving from local sales to their own brand or online selling.</li>
        <li>• <strong className="text-obsidian">Fabrication and engineering units</strong> serving steel and infrastructure customers.</li>
        <li>• <strong className="text-obsidian">Agri-traders and food brands</strong> dealing in produce such as mangoes and tapioca products.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">What should Salem family firms plan before incorporating?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Many Salem businesses are run by several family members under a partnership deed. Before incorporating, agree who will be
        directors or designated partners, how shares or profit ratios will be split, and whether existing assets such as land and
        machinery move into the new entity or stay with the family and are leased. These choices affect stamp duty, GST on the
        transfer and future succession, so we settle them on the planning call rather than after filing.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How do we serve Salem clients from Chennai?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        C S Rushil &amp; Co. works from one office, in Anna Nagar, Chennai, and has no branch or address in Salem. Salem registrations
        are handled through video calls, scanned documents and digital signatures, with courier as an option for originals. After
        incorporation, professional tax is registered with the local body where the business operates. For a comparison of every
        structure, see our{" "}
        <Link href="/company-registration-chennai" className={LINK}>
          company registration guide
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
