import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Private Limited Company Registration in Namakkal | CA" },
  description:
    "Private limited company registration in Namakkal for poultry and egg firms, lorry body builders and transport operators, done online from Anna Nagar, Chennai.",
  alternates: { canonical: "/company-registration-namakkal" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Private Limited Company Registration in Namakkal",
    description: "Pvt Ltd registration for Namakkal poultry, transport and body-building businesses, handled online from our Anna Nagar, Chennai office.",
    url: "/company-registration-namakkal",
  },
};

const LINK = "text-royal-violet underline underline-offset-2";
const TH = "p-4 font-medium text-obsidian";
const TD = "p-4 text-slate";

const SECTORS = [
  {
    type: "Layer farms and egg traders",
    structure: "Private Limited Company or LLP",
    points: "Fresh eggs are exempt from GST, so a business supplying only eggs may not need GST registration. Poultry income is generally treated as business income rather than agricultural income, so the entity's accounts and audit matter.",
  },
  {
    type: "Feed mills and egg processing",
    structure: "Private Limited Company",
    points: "Feed and processed egg products are taxed differently from fresh eggs, and processors need FSSAI licensing. Exporters of egg products add IEC and APEDA registration.",
  },
  {
    type: "Lorry, tanker and trailer body builders",
    structure: "Private Limited Company or LLP",
    points: "Whether you build on a customer's chassis or sell finished vehicles changes the GST position, so invoicing should be planned before the first order in the company's name.",
  },
  {
    type: "Lorry owners and transport operators",
    structure: "Private Limited Company for larger fleets; LLP for family fleets",
    points: "A goods transport agency can stay under reverse charge or opt to charge GST itself by annual declaration. Vehicles, permits and loans have to be moved into the company's name.",
  },
];

const AFTER = [
  { item: "GST", detail: "For taxable supplies above the threshold or transport services under forward charge; not always needed for a pure egg trader." },
  { item: "FSSAI", detail: "For egg processors, packers and feed businesses as applicable." },
  { item: "IEC and APEDA", detail: "For exporters of eggs, egg powder or poultry products." },
  { item: "Vehicle records", detail: "Transfer of registration certificates, permits and hypothecation from the owner to the company at the RTO." },
  { item: "Udyam and professional tax", detail: "Udyam for qualifying units; professional tax with the local body where the company operates." },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/company-registration-namakkal`}
      serviceType="Company Registration"
      crumbLabel="Company Registration in Namakkal"
      crumbHref="/company-registration-namakkal"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="Company Registration · Namakkal"
      h1="Private Limited Company Registration in Namakkal"
      subhead="Pvt Ltd and LLP registration for Namakkal poultry farms, egg traders, feed mills, lorry body builders and transport operators. Our office is in Anna Nagar, Chennai; we handle Namakkal registrations online, by video call and digital signature."
      introHeading="How does private limited company registration in Namakkal work?"
      intro="Private limited company registration in Namakkal is an online SPICe+ application to the Ministry of Corporate Affairs. A company with its registered office in Namakkal district comes under the Registrar of Companies, Coimbatore, which covers nine western Tamil Nadu districts. We handle Namakkal registrations from Anna Nagar, Chennai, by video call and digital signatures."
      citation={{
        label: "MCA list of Registrar of Companies offices",
        href: "https://www.mca.gov.in/content/mca/global/en/contact-us/roc.html",
      }}
      keyFacts={[
        { label: "Where we work from", value: "Our office is in Anna Nagar, Chennai. We have no office in Namakkal; we serve Namakkal clients online." },
        { label: "Registrar (ROC)", value: "ROC Coimbatore, whose jurisdiction includes Namakkal along with Salem, Erode, Coimbatore and five other western districts." },
        { label: "Common structures", value: "Private Limited Company for larger poultry, feed and fleet businesses; LLP for family farms and fleets; OPC for solo founders." },
        { label: "Typical time", value: "7–12 working days once documents and digital signatures are ready." },
        { label: "Usual follow-ons", value: "GST where applicable, FSSAI for processors, vehicle and permit transfers for transport companies." },
      ]}
      subServicesHeading="What do we handle for Namakkal businesses?"
      subServices={[
        { name: "Structure advice", text: "Pvt Ltd, LLP or OPC, based on whether farms, vehicles and loans will move into the entity and how many family members are involved." },
        { name: "DSC and name approval", text: "Class 3 digital signatures with online video verification, and names checked against MCA and trademark records." },
        { name: "SPICe+ filing", text: "SPICe+ Part B with e-MoA, e-AoA and AGILE-PRO-S, with objects drafted for poultry, feed, body building or transport." },
        { name: "Business transfer", text: "Moving an existing proprietorship's farms, vehicles, stock and contracts into the company under a business transfer agreement." },
        { name: "GST decisions", text: "Whether GST registration is needed for an egg business, and forward or reverse charge for transport services." },
        { name: "First-year compliance", text: "Auditor appointment, share certificates, INC-20A, and a calendar for the first AGM and annual filings." },
      ]}
      howTo={{
        heading: "How do we register your Namakkal company online?",
        steps: [
          { name: "Video call and checklist", text: "We agree the structure, capital and directors and send a document list. Scans by email or WhatsApp are enough." },
          { name: "Digital signatures", text: "Each director completes a short online video verification from Namakkal to receive a Class 3 DSC." },
          { name: "Name reservation", text: "We file SPICe+ Part A with one or two names, often built around the family or farm name already known to buyers." },
          { name: "Incorporation filing", text: "We prepare SPICe+ Part B with e-MoA, e-AoA and AGILE-PRO-S for you to sign with your DSC." },
          { name: "Certificate of Incorporation", text: "The certificate is issued with CIN, PAN and TAN, recorded with ROC Coimbatore." },
          { name: "Bank, GST and transfers", text: "You open the current account at a Namakkal branch; we handle GST, Udyam and the transfer documents for farms or vehicles." },
        ],
      }}
      faqs={[
        {
          question: "Which ROC will my Namakkal company be registered with?",
          answer:
            "A company with its registered office in Namakkal district comes under the Registrar of Companies, Coimbatore, which covers Namakkal, Salem, Erode, Coimbatore, Tiruppur, Dharmapuri, Krishnagiri, Dindigul and the Nilgiris. The SPICe+ application is processed centrally by MCA, and annual filings are online, so you do not visit the ROC office.",
        },
        {
          question: "Does an egg trading company need GST registration?",
          answer:
            "Not always. Fresh eggs are exempt from GST, and a business that supplies only exempt goods is not required to register. Registration becomes necessary if the company also sells taxable items, such as feed, processed egg products or services, above the threshold. We review your product mix before deciding.",
        },
        {
          question: "Is poultry farming income treated as agricultural income?",
          answer:
            "Generally no. Income from poultry and egg production is usually treated as business income, not agricultural income, so it is taxable in the company's or LLP's hands like other business profits. This is one reason the choice of entity, the accounting and the audit matter for larger Namakkal poultry businesses.",
        },
        {
          question: "How does a transport company handle GST on freight?",
          answer:
            "A goods transport agency can stay under reverse charge, where many business customers pay GST on freight, or opt to charge GST itself by filing an annual declaration. The choice affects input tax credit on trucks, tyres and spares. We help a new Namakkal transport company decide before issuing its first consignment notes.",
        },
        {
          question: "Can I move my lorries into a new private limited company?",
          answer:
            "Yes. The company takes over the vehicles under a business transfer agreement, and each registration certificate, permit and insurance policy is transferred to its name through the RTO. Where a vehicle is financed, the lender's consent and a new hypothecation entry are needed. We plan the transfer so operations continue without a gap.",
        },
        {
          question: "Do I need to visit Chennai to register my Namakkal company?",
          answer:
            "No. Incorporation, digital signatures and GST registration are all online, and every form is signed with your DSC. Namakkal clients work with us by video call, email or WhatsApp and can courier originals if they prefer. You only need to visit your bank in Namakkal to open the company's current account.",
        },
      ]}
      relatedSlugs={["private-limited-company-incorporation-chennai", "llp-registration-chennai", "opc-registration-chennai", "gst-registration-chennai", "msme-udyam-registration-chennai", "annual-compliance-package"]}
      relatedPosts={["roc-chennai-vs-roc-coimbatore", "private-limited-vs-llp-chennai-startups", "spice-plus-incorporation-explained", "post-incorporation-compliance-checklist"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Which Namakkal businesses typically incorporate, and what should they check?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Namakkal is widely known as a centre of Tamil Nadu&apos;s poultry and egg trade, with layer farms, feed mills and
        egg traders, and as a hub for lorry and tanker body building and road transport. Many of these businesses grow as
        proprietorships or family partnerships and incorporate when bank limits, fleet size or the next generation call for
        a company.
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

      <h2 className="mt-14 text-2xl text-obsidian">How do we serve Namakkal clients from Chennai?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        C S Rushil &amp; Co. works from one office, in Anna Nagar, Chennai, and has no branch or representative in Namakkal.
        We meet you on a video call, collect scanned documents by email or WhatsApp, and send each MCA form for you to sign
        with your own digital signature. For transport businesses we also prepare the list of vehicle, permit and loan
        documents that need to change names after incorporation.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What registrations follow incorporation in Namakkal?</h2>
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
        . Nearby pages: <Link href="/company-registration-salem" className={LINK}>Salem</Link>,{" "}
        <Link href="/company-registration-erode" className={LINK}>Erode</Link> and{" "}
        <Link href="/company-registration-karur" className={LINK}>Karur</Link>. To discuss your registration,{" "}
        <Link href="/contact" className={LINK}>contact us</Link>.
      </p>
    </ServicePageTemplate>
  );
}
