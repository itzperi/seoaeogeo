import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Private Limited Company Registration in Nagercoil | CA" },
  description:
    "Private limited company registration in Nagercoil and Kanyakumari district for rubber, seafood, coir and Gulf-returnee founders, online from Anna Nagar.",
  alternates: { canonical: "/company-registration-nagercoil" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Private Limited Company Registration in Nagercoil",
    description: "Pvt Ltd registration for Kanyakumari district businesses, handled online from our Anna Nagar, Chennai office.",
    url: "/company-registration-nagercoil",
  },
};

const LINK = "text-royal-violet underline underline-offset-2";
const TH = "p-4 font-medium text-obsidian";
const TD = "p-4 text-slate";

const SECTORS = [
  {
    type: "Rubber trading and processing",
    structure: "Private Limited Company or LLP; plantations often stay with the family",
    points: "Income from growing and processing rubber has special apportionment rules under income-tax, so decide whether plantation land moves into the company or only the trading and processing business does.",
  },
  {
    type: "Fisheries and seafood",
    structure: "Private Limited Company",
    points: "Seafood exporters register with MPEDA, need FSSAI licensing and an IEC, and processing plants serving export markets need approval under the export inspection system.",
  },
  {
    type: "Coir products",
    structure: "LLP or Private Limited Company",
    points: "Udyam registration for MSME benefits, and Coir Board registration for exporters of coir products.",
  },
  {
    type: "Ventures started by Gulf returnees",
    structure: "Private Limited Company or OPC",
    points: "Your residential status on return decides whether you can be the resident director and how your overseas savings are brought in as share capital.",
  },
];

const AFTER = [
  { item: "GST", detail: "At the Nagercoil or Kanyakumari district place of business, if supplies are taxable and above the threshold." },
  { item: "IEC and LUT", detail: "For exporters of seafood, coir or rubber products." },
  { item: "MPEDA / Coir Board", detail: "Sector registrations for seafood and coir exporters, after incorporation." },
  { item: "FSSAI", detail: "For fish and seafood processors, packers and traders as applicable." },
  { item: "Udyam and professional tax", detail: "Udyam for qualifying units; professional tax with the Nagercoil corporation or local body where the company operates." },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/company-registration-nagercoil`}
      serviceType="Company Registration"
      crumbLabel="Company Registration in Nagercoil"
      crumbHref="/company-registration-nagercoil"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="Company Registration · Nagercoil"
      h1="Private Limited Company Registration in Nagercoil"
      subhead="Pvt Ltd, LLP and OPC registration for Kanyakumari district rubber, seafood and coir businesses, and for founders returning from the Gulf. Our office is in Anna Nagar, Chennai; we handle Nagercoil registrations online, by video call and digital signature."
      introHeading="How does private limited company registration in Nagercoil work?"
      intro="Private limited company registration in Nagercoil is an online SPICe+ application to the Ministry of Corporate Affairs. A company with its registered office anywhere in Kanyakumari district comes under the Registrar of Companies, Chennai. We are based in Anna Nagar, Chennai, and complete Nagercoil registrations by video call, scanned documents and digital signatures."
      citation={{
        label: "MCA list of Registrar of Companies offices",
        href: "https://www.mca.gov.in/content/mca/global/en/contact-us/roc.html",
      }}
      keyFacts={[
        { label: "Where we work from", value: "Our office is in Anna Nagar, Chennai. We have no office in Nagercoil; we serve Kanyakumari district clients online." },
        { label: "Registrar (ROC)", value: "ROC Chennai, which has jurisdiction over Kanyakumari district. A registered office across the border in Kerala would come under the Kerala ROC instead." },
        { label: "Common structures", value: "Private Limited Company for seafood and processing businesses; LLP for family trading firms; OPC for a single returning founder." },
        { label: "Typical time", value: "7–12 working days once documents and digital signatures are ready; directors still abroad can sign digitally." },
        { label: "Usual follow-ons", value: "GST, IEC and LUT, and MPEDA or Coir Board registration for exporters." },
      ]}
      subServicesHeading="What do we handle for Nagercoil businesses?"
      subServices={[
        { name: "Structure advice", text: "Pvt Ltd, LLP or OPC, including whether family plantation land should stay outside the company." },
        { name: "DSC and name approval", text: "Class 3 digital signatures with online video verification, including for directors still working in the Gulf, and names checked against MCA and trademark records." },
        { name: "SPICe+ filing", text: "SPICe+ Part B with e-MoA, e-AoA and AGILE-PRO-S, with objects drafted for seafood, rubber, coir, tourism or trading." },
        { name: "Returning NRI founders", text: "Residential status, director eligibility and the route for bringing overseas savings into share capital." },
        { name: "Export registrations", text: "IEC, GST Letter of Undertaking, and the documents needed for MPEDA or Coir Board registration." },
        { name: "First-year compliance", text: "Auditor appointment, share certificates, INC-20A, and a calendar for the first AGM and annual filings." },
      ]}
      howTo={{
        heading: "How do we register your Nagercoil company online?",
        steps: [
          { name: "Video call and checklist", text: "We agree the structure and directors and send a document list, with separate items for any director living abroad." },
          { name: "Digital signatures", text: "Each director completes a short online video verification, from Nagercoil or overseas, to receive a Class 3 DSC." },
          { name: "Name reservation", text: "We file SPICe+ Part A with one or two names checked against existing companies and trademarks." },
          { name: "Incorporation filing", text: "We prepare SPICe+ Part B with e-MoA, e-AoA and AGILE-PRO-S for you to sign with your DSC." },
          { name: "Certificate of Incorporation", text: "The certificate is issued with CIN, PAN and TAN, recorded with ROC Chennai." },
          { name: "Bank and sector registrations", text: "You open the current account at a Nagercoil branch; we complete GST, Udyam, IEC and sector registrations as needed." },
        ],
      }}
      faqs={[
        {
          question: "Which ROC handles companies in Nagercoil and Kanyakumari district?",
          answer:
            "A company with its registered office in Kanyakumari district comes under the Registrar of Companies, Chennai. If founders choose an address across the border in Thiruvananthapuram instead, the company would fall under the Kerala ROC and Kerala's GST and professional tax rules. Incorporation is processed centrally by MCA in both cases.",
        },
        {
          question: "I have returned from the Gulf. Can I be the resident director?",
          answer:
            "Usually yes. A director counts as resident if they stayed in India for at least 182 days in the financial year, and for a newly incorporated company this is applied proportionately for the first year. If you have only just returned, another resident director may be needed initially. We check your dates before filing.",
        },
        {
          question: "How can Gulf savings be invested as share capital?",
          answer:
            "Once you are resident again, you invest from your Indian bank account like any resident. If you are still an NRI, you can subscribe from an NRO or NRE account; investment on a non-repatriation basis is generally treated like domestic investment, while repatriable investment follows the foreign investment reporting rules. We confirm the route before allotment.",
        },
        {
          question: "What does a seafood export company need after incorporation?",
          answer:
            "A seafood exporter needs an Importer Exporter Code, GST registration, a Letter of Undertaking to export without paying IGST upfront, registration with MPEDA, and FSSAI licensing. Processing plants supplying export markets also need approval under the export inspection system. We sequence these after incorporation so the first shipment is not delayed.",
        },
        {
          question: "Should our rubber plantation move into the new company?",
          answer:
            "Not necessarily. Many families keep plantation land in individual names and incorporate only the trading or processing business, because income from growing and processing rubber has special income-tax apportionment rules and land transfers carry stamp duty. We compare both options on your figures before you decide.",
        },
        {
          question: "Do I need to visit Chennai to register my Nagercoil company?",
          answer:
            "No. Incorporation, digital signatures and GST registration are all online, and every form is signed with your DSC, even by directors still abroad. Nagercoil clients work with us by video call, email or WhatsApp. You only need to visit your bank in Nagercoil to open the company's current account.",
        },
      ]}
      relatedSlugs={["private-limited-company-incorporation-chennai", "opc-registration-chennai", "llp-registration-chennai", "gst-registration-chennai", "msme-udyam-registration-chennai", "annual-compliance-package"]}
      relatedPosts={["private-limited-vs-llp-chennai-startups", "spice-plus-incorporation-explained", "lut-for-exporters", "post-incorporation-compliance-checklist"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Which Kanyakumari district businesses typically incorporate?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Kanyakumari district, with Nagercoil as its headquarters, has an economy unlike the rest of Tamil Nadu: rubber
        plantations in its western hills, fishing harbours and seafood trade along its coast, coir making, and a large
        number of families with members working in the Gulf, some of whom return to start businesses at home.
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

      <h2 className="mt-14 text-2xl text-obsidian">How do we serve Nagercoil clients from Chennai?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        C S Rushil &amp; Co. works from one office, in Anna Nagar, Chennai, with no branch or representative in Kanyakumari
        district. We meet you on a video call, collect scanned documents by email or WhatsApp, and send each MCA form for you
        to sign with your own digital signature. Family members still working abroad can join the call and sign from where
        they are.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What registrations follow incorporation in Nagercoil?</h2>
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
        . Nearby pages: <Link href="/company-registration-tirunelveli" className={LINK}>Tirunelveli</Link> and{" "}
        <Link href="/company-registration-thoothukudi" className={LINK}>Thoothukudi</Link>. To discuss your registration,{" "}
        <Link href="/contact" className={LINK}>contact us</Link>.
      </p>
    </ServicePageTemplate>
  );
}
