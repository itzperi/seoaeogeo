import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Private Limited Company Registration in Thanjavur | CA" },
  description:
    "Private limited company registration in Thanjavur for rice mills, agri-processors, FPO-linked ventures and handicraft makers, online from Anna Nagar, Chennai.",
  alternates: { canonical: "/company-registration-thanjavur" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Private Limited Company Registration in Thanjavur",
    description: "Pvt Ltd and producer company registration for Thanjavur delta businesses, handled online from our Anna Nagar, Chennai office.",
    url: "/company-registration-thanjavur",
  },
};

const LINK = "text-royal-violet underline underline-offset-2";
const TH = "p-4 font-medium text-obsidian";
const TD = "p-4 text-slate";

const PATHS = [
  {
    route: "Producer company",
    who: "At least 10 individual producers or 2 producer institutions",
    fit: "Farmer groups pooling paddy, pulses or coconut for collective sale. Members must be primary producers, and the company is governed by Part XXIA of the Companies Act, 2013.",
  },
  {
    route: "Private limited company",
    who: "2 or more directors and shareholders, any background",
    fit: "Rice mills, agri-processing units and traders that want bank finance, outside shareholders or ESOPs, which a producer company cannot offer to non-producers.",
  },
  {
    route: "Pvt Ltd alongside an existing FPO",
    who: "Promoters of an FPO, sometimes with the FPO itself as a shareholder",
    fit: "A separate company for processing, branding or retail where investors or non-farmer partners need to hold equity.",
  },
  {
    route: "LLP",
    who: "2 or more designated partners",
    fit: "Family-run mills and trading houses that want limited liability with lighter compliance and no plans to raise equity.",
  },
];

const AFTER = [
  { item: "FSSAI", detail: "Licence or registration for rice mills, food processors and packers, depending on capacity and turnover." },
  { item: "GST", detail: "Needed where taxable supplies cross the threshold; pre-packaged and labelled rice is taxable while loose unbranded rice is exempt." },
  { item: "Udyam (MSME)", detail: "For mills and processing units, to access MSME schemes and delayed-payment protection." },
  { item: "IEC and GI authorised-user status", detail: "For exporters of handicrafts or food products; makers of GI-registered Thanjavur crafts can register as authorised users." },
  { item: "Professional tax", detail: "With the corporation, municipality or panchayat where the company operates." },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/company-registration-thanjavur`}
      serviceType="Company Registration"
      crumbLabel="Company Registration in Thanjavur"
      crumbHref="/company-registration-thanjavur"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="Company Registration · Thanjavur"
      h1="Private Limited Company Registration in Thanjavur"
      subhead="Pvt Ltd, producer company and LLP registration for Cauvery delta rice mills, agri-processors, farmer-producer ventures and Thanjavur handicraft businesses. Our office is in Anna Nagar, Chennai; we handle Thanjavur registrations online, by video call and digital signature."
      introHeading="How does private limited company registration in Thanjavur work?"
      intro="Private limited company registration in Thanjavur is an online SPICe+ application to the Ministry of Corporate Affairs. A company with its registered office in Thanjavur district comes under the Registrar of Companies, Chennai. We work from Anna Nagar, Chennai, and complete Thanjavur registrations remotely by video call, scanned documents and digital signatures."
      citation={{
        label: "MCA list of Registrar of Companies offices",
        href: "https://www.mca.gov.in/content/mca/global/en/contact-us/roc.html",
      }}
      keyFacts={[
        { label: "Where we work from", value: "Our office is in Anna Nagar, Chennai. We have no office in Thanjavur; we serve Thanjavur clients online." },
        { label: "Registrar (ROC)", value: "ROC Chennai, which has jurisdiction over Thanjavur district." },
        { label: "Common structures", value: "Private Limited Company for mills and processors seeking finance; producer company for farmer collectives; LLP for family trading firms." },
        { label: "Typical time", value: "7–12 working days once documents and digital signatures are ready." },
        { label: "Usual follow-ons", value: "FSSAI, GST, Udyam, and IEC for exporters of food products or handicrafts." },
      ]}
      subServicesHeading="What do we handle for Thanjavur businesses?"
      subServices={[
        { name: "Structure advice", text: "Pvt Ltd, producer company or LLP, depending on whether owners are farmers, a family or outside investors, and whether bank finance is planned." },
        { name: "DSC and name approval", text: "Class 3 digital signatures with online video verification, including for older family members, and names checked against MCA and trademark records." },
        { name: "SPICe+ filing", text: "SPICe+ Part B with e-MoA, e-AoA and AGILE-PRO-S, with objects drafted for milling, processing, trading or handicrafts." },
        { name: "Moving an existing business", text: "Transfer of a proprietorship or partnership mill into the company, with machinery, stock, GST and bank accounts moved across." },
        { name: "FSSAI, GST and Udyam", text: "Food licences, GST registration at the Thanjavur address and Udyam for qualifying units." },
        { name: "First-year compliance", text: "Auditor appointment, share certificates, INC-20A, and a calendar for the first AGM and annual filings." },
      ]}
      howTo={{
        heading: "How do we register your Thanjavur company online?",
        steps: [
          { name: "Video call and checklist", text: "We agree the structure and shareholders and send a document list in plain language. Scans by email or WhatsApp are enough." },
          { name: "Digital signatures", text: "Each director completes a short online video verification from Thanjavur to receive a Class 3 DSC." },
          { name: "Name reservation", text: "We file SPICe+ Part A with one or two names, often including the family or village name the business is known by." },
          { name: "Incorporation filing", text: "We prepare SPICe+ Part B with e-MoA, e-AoA and AGILE-PRO-S for you to sign with your DSC." },
          { name: "Certificate of Incorporation", text: "The certificate is issued with CIN, PAN and TAN, recorded with ROC Chennai." },
          { name: "Licences and bank", text: "You open the current account at a Thanjavur branch; we complete FSSAI, GST and Udyam in the company's name." },
        ],
      }}
      faqs={[
        {
          question: "Do I need to come to Chennai to register a company in Thanjavur?",
          answer:
            "No. SPICe+ incorporation is fully online, digital signatures are issued after a video check, and every form is signed digitally. Thanjavur clients work with us by video call, email or WhatsApp, and originals can be couriered if needed. You only visit your own bank in Thanjavur to open the current account.",
        },
        {
          question: "Which ROC will my Thanjavur company come under?",
          answer:
            "A company or LLP with its registered office in Thanjavur district comes under the Registrar of Companies, Chennai, which covers Tamil Nadu except nine western districts under ROC Coimbatore. The incorporation application is processed centrally by MCA, and annual filings are online, so you will not need to visit the ROC.",
        },
        {
          question: "Should our farmer group register a producer company or a private limited company?",
          answer:
            "A producer company suits a group of at least ten farmers pooling produce for collective sale, since members must be primary producers. A private limited company suits a processing or branding venture that needs outside investors or non-farmer shareholders. Some groups run both: the FPO aggregates, and a Pvt Ltd processes and sells.",
        },
        {
          question: "Our rice mill is a partnership. Can it become a private limited company?",
          answer:
            "Yes. A partnership firm can register as a company under Section 366 of the Companies Act using URC-1 with SPICe+, so the same business continues with partners becoming shareholders. Alternatively, a new company takes over the mill through a business transfer agreement. FSSAI, GST and bank accounts must then be in the company's name.",
        },
        {
          question: "Does a rice mill company need GST registration?",
          answer:
            "It depends on what it sells. Pre-packaged and labelled rice is taxable under GST, while loose, unbranded rice is exempt, and a business supplying only exempt goods need not register. Most mills that brand or pack their rice, or sell by-products and services, will need GST. We review your product mix before registering.",
        },
        {
          question: "Can a Thanjavur handicraft maker export through a company?",
          answer:
            "Yes. Once the company is incorporated, it obtains an Importer Exporter Code linked to its PAN and usually files a GST Letter of Undertaking to export without paying IGST upfront. Makers of GI-registered Thanjavur crafts, such as art plates or paintings, can also register as authorised users to use the GI name.",
        },
      ]}
      relatedSlugs={["private-limited-company-incorporation-chennai", "llp-registration-chennai", "gst-registration-chennai", "msme-udyam-registration-chennai", "annual-compliance-package"]}
      relatedPosts={["private-limited-vs-llp-chennai-startups", "spice-plus-incorporation-explained", "post-incorporation-compliance-checklist"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Which incorporation route suits delta agriculture and agri-processing?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Thanjavur sits in the Cauvery delta, Tamil Nadu&apos;s main paddy-growing region, and its business base reflects
        that: rice mills, paddy and pulse traders, agri-processing units and farmer-producer organisations, alongside the
        town&apos;s traditional crafts such as art plates, paintings and musical instruments. Farmers&apos; collectives and
        family mills choose between several routes:
      </p>
      <div className="mt-4 max-w-3xl overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-fog text-left">
              <th className={TH}>Route</th>
              <th className={TH}>Who can form it</th>
              <th className={TH}>Typical use in Thanjavur</th>
            </tr>
          </thead>
          <tbody className="bg-paper">
            {PATHS.map((r) => (
              <tr key={r.route} className="border-t border-ash">
                <td className="p-4 font-medium text-obsidian">{r.route}</td>
                <td className={TD}>{r.who}</td>
                <td className={TD}>{r.fit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">How do we serve Thanjavur clients from Chennai?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        C S Rushil &amp; Co. works from one office, in Anna Nagar, Chennai, and has no branch or representative in
        Thanjavur. We meet you on a video call, collect scanned documents by email or WhatsApp, explain each form in plain
        terms, and send it for you to sign with your own digital signature. Originals can be couriered to our Chennai office
        and returned the same way.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What registrations follow incorporation in Thanjavur?</h2>
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
        . Nearby pages: <Link href="/company-registration-tiruchirappalli" className={LINK}>Tiruchirappalli</Link> and{" "}
        <Link href="/company-registration-karur" className={LINK}>Karur</Link>. To discuss your registration,{" "}
        <Link href="/contact" className={LINK}>contact us</Link>.
      </p>
    </ServicePageTemplate>
  );
}
