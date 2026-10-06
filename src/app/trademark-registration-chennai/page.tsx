import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "Trademark Registration in Chennai | Search & Filing";
const description =
  "Trademark registration in Chennai: brand search, Nice class selection, TM-A filing support, objection replies and renewals, with official fees and timelines.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/trademark-registration-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/trademark-registration-chennai",
  },
};

const fees: { item: string; form: string; small: string; others: string }[] = [
  { item: "New application (per class, per mark)", form: "TM-A", small: "₹4,500", others: "₹9,000" },
  { item: "Notice of opposition or counter-statement (per class)", form: "TM-O", small: "₹2,700", others: "₹2,700" },
  { item: "Renewal (per class)", form: "TM-R", small: "₹9,000", others: "₹9,000" },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/trademark-registration-chennai`}
      serviceType="Trademark Registration"
      crumbLabel="Trademark Registration"
      crumbHref="/trademark-registration-chennai"
      eyebrow="Trademark · Chennai"
      h1="Trademark Registration in Chennai"
      subhead="Protect your brand name and logo before you invest in signage, packaging and marketing, with a proper search, the right classes and a clean TM-A application."
      introHeading="What is trademark registration in Chennai and how does it work?"
      intro="Trademark registration in Chennai means registering your brand name, logo or slogan with the Trade Marks Registry under the Trade Marks Act, 1999. You file Form TM-A online for each class, the Registry examines it, it is advertised in the Trade Marks Journal for four months, and if unopposed it is registered for ten renewable years."
      citation={{ label: "IP India: Trade Marks forms and official fees", href: "https://ipindia.gov.in/pages/trade-marks/learn/forms-and-official-fees" }}
      keyFacts={[
        { label: "Application form", value: "Form TM-A, filed online on the IP India comprehensive e-filing portal" },
        { label: "Official fee (e-filing)", value: "₹4,500 per class for individuals, startups and small enterprises; ₹9,000 per class for others (First Schedule, Trade Marks Rules, 2017)" },
        { label: "Examination reply", value: "Within one month of receiving the examination report" },
        { label: "Opposition window", value: "Four months from the date the mark is advertised in the Trade Marks Journal" },
        { label: "Validity", value: "Ten years from the application date, renewable for further ten-year periods (Section 25)" },
        { label: "Who can file before the Registry", value: "The applicant, an advocate, or a registered trade marks agent (Section 145)" },
      ]}
      subServicesHeading="How do we help with your trademark?"
      subServices={[
        { name: "Trademark Search", text: "Search of the Registry's public database for identical and similar marks in your classes, including phonetic matches, with a plain-English view of the conflict risk." },
        { name: "Class Selection", text: "Mapping your actual and planned products or services to the 45 Nice classes, so you are not under-protected or paying for classes you will never use." },
        { name: "Application Documentation", text: "Preparation of the applicant details, goods and services description, logo file, user affidavit where you claim prior use, and the authorisation for your trademark counsel." },
        { name: "Filing Coordination", text: "Coordination of the TM-A filing with an advocate or registered trade marks agent, and tracking of the application status on your behalf." },
        { name: "Objection and Opposition Support", text: "Collation of evidence of use, invoices and advertisements for replies to examination reports and oppositions, prepared with your trademark counsel." },
        { name: "Renewal Tracking", text: "Diary of renewal dates for your registered marks, with reminders well ahead of the ten-year expiry so protection does not lapse." },
      ]}
      howTo={{
        heading: "What are the steps in trademark registration?",
        steps: [
          { name: "Search the mark", text: "Check the Registry database for identical or similar marks in the relevant classes before you file, and before you print packaging." },
          { name: "File Form TM-A", text: "File the application online with the applicant details, mark, class, goods or services description, and the user date or 'proposed to be used'. The ™ symbol can be used from here." },
          { name: "Examination", text: "The Registry examines the application for distinctiveness and conflicts under Sections 9 and 11. If it raises objections, a reply is due within one month." },
          { name: "Journal advertisement", text: "Once accepted, the mark is published in the Trade Marks Journal. Any third party can oppose it within four months." },
          { name: "Registration", text: "If there is no opposition, or the opposition is decided in your favour, the mark is registered and the certificate issued. You can then use the ® symbol." },
        ],
      }}
      faqs={[
        { question: "How long does trademark registration take in India?", answer: "Timelines vary by Registry workload, but an unopposed application typically takes several months to over a year from filing to registration. Examination comes first, then a four-month opposition window after Journal advertisement. You can use the ™ symbol and rely on your filing date from the day you file." },
        { question: "What is the difference between ™ and ®?", answer: "The ™ symbol signals that you claim the mark as yours; you can use it on filing, or even before. The ® symbol may be used only after the mark is registered. Using ® for an unregistered mark is treated as falsely representing a trademark as registered, which is an offence under Section 107 of the Trade Marks Act." },
        { question: "Are you a registered trademark agent?", answer: "No. Under Section 145 of the Trade Marks Act, only the applicant, an advocate or a registered trade marks agent can act before the Registrar. We are Chartered Accountants: we run the search, class mapping, documentation and tracking, and coordinate the filing and any hearings with an advocate or registered agent." },
        { question: "How many classes should I file in?", answer: "File in every class covering goods or services you sell now or genuinely plan to sell soon. There are 45 Nice classes: 1 to 34 for goods and 35 to 45 for services. A bakery may need class 30 for food and class 43 for café services. Each class carries a separate official fee." },
        { question: "What happens if the examiner objects to my trademark?", answer: "You receive an examination report and have one month to file a written reply or request a hearing. Common objections are lack of distinctiveness under Section 9 or similarity to an existing mark under Section 11. A reply backed by evidence of use, such as invoices and advertisements, improves the chance of acceptance." },
        { question: "Can I register a trademark before starting the business?", answer: "Yes. You can file on a 'proposed to be used' basis, which is common for startups securing a name before launch. Filing early protects your date of application against later filers. Once you start using the mark, keep dated invoices and marketing material as evidence of use." },
        { question: "How do I renew a trademark?", answer: "File Form TM-R before the ten-year registration expires; the official e-filing fee is ₹9,000 per class. Renewal extends protection by another ten years. A late renewal with surcharge, or restoration of a removed mark, is possible within limited periods under Section 25, so track the date well in advance." },
      ]}
      relatedSlugs={["company-registration-chennai", "msme-udyam-registration-chennai", "startup-india-registration-chennai"]}
      relatedPosts={[
        "startup-india-registration",
        "post-incorporation-compliance-checklist",
        "private-limited-vs-llp-chennai-startups",
        "common-compliance-mistakes-chennai-startups",
      ]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Official trademark fees (Trade Marks Rules, 2017)</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        These are government fees for e-filing as published by IP India. Physical filing costs more. Fees are payable per
        class, so a mark filed in three classes pays three application fees.
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className="px-4 py-3 font-medium">Item</th>
              <th className="px-4 py-3 font-medium">Form</th>
              <th className="px-4 py-3 font-medium">Individual / startup / small enterprise</th>
              <th className="px-4 py-3 font-medium">Others</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {fees.map((r) => (
              <tr key={r.item}>
                <td className="px-4 py-3 align-top font-medium text-obsidian">{r.item}</td>
                <td className="px-4 py-3 align-top text-slate">{r.form}</td>
                <td className="px-4 py-3 align-top text-slate">{r.small}</td>
                <td className="px-4 py-3 align-top text-slate">{r.others}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="mt-14 text-2xl text-obsidian">Our role, stated plainly</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Representation before the Trade Marks Registry is limited by Section 145 of the Trade Marks Act, 1999 to the
        applicant, advocates and registered trade marks agents. As Chartered Accountants, we handle the business side of
        your trademark: the search, class mapping, documents, deadlines and evidence of use. Filing and hearings are carried
        out by, or coordinated with, an advocate or registered agent acting under your authorisation.
      </p>
    </ServicePageTemplate>
  );
}
