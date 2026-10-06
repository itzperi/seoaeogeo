import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "LLP Registration in Chennai | Process, Documents" },
  description:
    "LLP registration in Chennai: DIN and DSC for designated partners, FiLLiP filing, LLP agreement in Form 3 within 30 days, and Form 8 and Form 11 annual filings.",
  alternates: { canonical: "/llp-registration-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "LLP Registration Service in Chennai",
    description: "FiLLiP incorporation, LLP agreement drafting and annual LLP compliance for Chennai founders and professional firms.",
    url: "/llp-registration-chennai",
  },
};

const CONVERSIONS = [
  { from: "Partnership firm → LLP", form: "Form 17 (with FiLLiP)", law: "Section 55 and Second Schedule, LLP Act, 2008", note: "All partners of the firm must become partners of the LLP. Assets, liabilities, contracts and registrations move to the LLP." },
  { from: "Private or unlisted public company → LLP", form: "Form 18 (with FiLLiP)", law: "Sections 56–57 and Third/Fourth Schedules, LLP Act, 2008", note: "All shareholders become partners; the company must have no security interest outstanding or creditors must consent." },
  { from: "LLP → company", form: "URC-1 with SPICe+", law: "Section 366, Companies Act, 2013", note: "Used when an LLP wants to raise equity. Partners' consent and a fresh set of company documents are needed." },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/llp-registration-chennai`}
      serviceType="LLP Registration"
      crumbLabel="LLP Registration"
      crumbHref="/llp-registration-chennai"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="LLP Registration · Chennai"
      h1="LLP Registration Service in Chennai"
      subhead="Limited liability with partnership-style flexibility: DSC and DIN for designated partners, FiLLiP filing, the LLP agreement in Form 3, and your first Form 8 and Form 11 handled end-to-end."
      introHeading="What is an LLP, and who should choose LLP registration in Chennai?"
      intro="LLP registration in Chennai creates a Limited Liability Partnership under the LLP Act, 2008: a separate legal entity where each partner's liability is limited to their agreed contribution. It suits professional firms, consultancies and family businesses that want partnership flexibility without a company's audit and board formalities. It cannot issue shares, so founders raising equity usually choose a Private Limited Company."
      citation={{ label: "MCA FiLLiP (incorporation of LLP) web form", href: "https://www.mca.gov.in/content/mca/global/en/mca/llp-e-filling/Fillip.html" }}
      keyFacts={[
        { label: "Typical time", value: "10–15 working days for incorporation once documents are ready; the LLP agreement follows within 30 days." },
        { label: "Government forms", value: "FiLLiP for name and incorporation (with DIN, PAN and TAN); Form 3 for the LLP agreement; Form 8 and Form 11 every year." },
        { label: "Minimum partners", value: "2 partners, with at least 2 designated partners who are individuals; at least one designated partner must be resident in India (120 days or more in the financial year)." },
        { label: "Who it suits", value: "Consultants, agencies, architects and other professional or services businesses that will not raise equity." },
        { label: "Key deadlines", value: "Form 3 within 30 days of incorporation; Form 11 by 30 May; Form 8 by 30 October. Late filing attracts an additional fee that rises with the length of the delay." },
      ]}
      howTo={{
        heading: "How do you register an LLP in Chennai?",
        steps: [
          { name: "DSC for designated partners", text: "Each designated partner obtains a Class 3 Digital Signature Certificate to sign FiLLiP and later LLP forms." },
          { name: "Name check and reservation", text: "We check the proposed name against existing LLPs, companies and trademarks. The name can be reserved separately through RUN-LLP or applied for within FiLLiP itself." },
          { name: "DIN (formerly DPIN)", text: "Designated partners who do not already hold a Director Identification Number are allotted one through FiLLiP. The DIN now serves as the designated partner identification number." },
          { name: "FiLLiP filing", text: "We file FiLLiP with partner details, contribution, registered office proof and the subscriber consent sheet. PAN and TAN for the LLP are applied for in the same form." },
          { name: "Certificate of Incorporation", text: "On approval, the Registrar issues the Certificate of Incorporation with the LLP Identification Number (LLPIN), PAN and TAN." },
          { name: "LLP agreement in Form 3", text: "We draft the LLP agreement covering contribution, profit share, admission and exit of partners and decision-making, get it stamped, and file it in Form 3 within 30 days of incorporation." },
          { name: "Bank account and tax set-up", text: "We help open the LLP's current account and register for GST, Udyam and professional tax where they apply." },
        ],
      }}
      subServicesHeading="What does our LLP registration include?"
      subServices={[
        { name: "DSC and DIN for designated partners", text: "Class 3 DSCs and DIN allotment through FiLLiP for partners who do not already hold one." },
        { name: "Name search and RUN-LLP", text: "Checks against MCA and trademark records before we apply, so the name is not sent back for resubmission." },
        { name: "FiLLiP incorporation", text: "One integrated form for incorporation, DIN, PAN and TAN." },
        { name: "LLP agreement (Form 3)", text: "Drafted around your actual profit-sharing, capital and exit terms, stamped and filed within the 30-day window." },
        { name: "Conversions", text: "Partnership firm to LLP (Form 17), company to LLP (Form 18), and LLP to company under Section 366." },
        { name: "Annual LLP compliance", text: "Form 11 (annual return) by 30 May, Form 8 (statement of account and solvency) by 30 October, and income tax return." },
      ]}
      faqs={[
        {
          question: "How many partners does an LLP need?",
          answer:
            "An LLP needs at least two partners, and at least two of them must be designated partners who are individuals. At least one designated partner must be resident in India, meaning they stayed in India for 120 days or more during the financial year. There is no upper limit on the number of partners. A company or another LLP can also be a partner, acting through a nominee.",
        },
        {
          question: "How long does LLP registration take in Chennai?",
          answer:
            "LLP registration in Chennai typically takes 10–15 working days through FiLLiP once DSCs and documents are ready, covering name approval, DIN allotment and incorporation. The LLP agreement must then be filed in Form 3 within 30 days of incorporation. That is a separate deadline: missing it attracts an additional fee even though the LLP is already registered.",
        },
        {
          question: "What happens if the LLP agreement is not filed within 30 days?",
          answer:
            "If Form 3 is not filed within 30 days of incorporation, the LLP pays an additional fee on top of the normal filing fee. Under the LLP Rules as amended in 2022, that additional fee is a multiple of the normal fee and increases in slabs the longer the delay, with lower multiples for small LLPs. Where there is no LLP agreement on a point, the default rules in the First Schedule of the LLP Act decide partners' rights.",
        },
        {
          question: "What is the difference between an LLP and a Private Limited Company?",
          answer:
            "Both give limited liability, but an LLP has no share capital, no board meetings and an audit only above set thresholds, while a Private Limited Company must be audited every year and holds regular board meetings. The trade-off is funding: a company can issue shares to investors and ESOPs to staff, and an LLP cannot. Choose based on whether equity funding is likely.",
        },
        {
          question: "Is a statutory audit mandatory for an LLP?",
          answer:
            "Only if the LLP's turnover exceeds ₹40 lakh or its partners' contribution exceeds ₹25 lakh in a financial year. Below both limits, the accounts need not be audited, though the designated partners still certify Form 8. This is one of the main compliance savings compared with a Private Limited Company, which needs an audit every year regardless of size. A tax audit may still apply under income tax law.",
        },
        {
          question: "Can an existing partnership firm convert into an LLP?",
          answer:
            "Yes. A partnership firm converts by filing Form 17 along with FiLLiP, under Section 55 and the Second Schedule of the LLP Act. All partners of the firm must become partners of the LLP, and no one else can join at the conversion stage. After approval, the firm's assets, liabilities and contracts vest in the LLP, and GST, Udyam and bank accounts are moved to the LLP's PAN.",
        },
        {
          question: "Can an LLP later convert into a Private Limited Company?",
          answer:
            "Yes. An LLP can register as a company under Section 366 of the Companies Act, 2013, by filing URC-1 along with SPICe+. Founders usually do this when an investor wants to buy equity, which an LLP cannot issue. The partners become shareholders, and the business, assets and liabilities continue in the company. We plan the conversion so licences and contracts move across with minimal disruption.",
        },
      ]}
      relatedQuestions={[
        { question: "Which business structure should I choose before registering?", href: "/company-registration-chennai" },
        { question: "What does Private Limited incorporation involve if I need to raise funding?", href: "/private-limited-company-incorporation-chennai" },
        { question: "How do I register a partnership firm instead?", href: "/partnership-firm-registration-chennai" },
      ]}
      relatedSlugs={["company-registration-chennai", "private-limited-company-incorporation-chennai", "partnership-firm-registration-chennai", "annual-compliance-package", "gst-registration-chennai", "digital-signature-certificate-chennai"]}
      relatedPosts={[
        "llp-vs-opc-vs-pvt-ltd",
        "llp-annual-filing-form8-form11",
        "private-limited-vs-llp-chennai-startups",
        "llp-registration-nungambakkam-professional-firms",
        "llp-registration-porur-consultancies",
      ]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Why do professionals choose an LLP?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        For consultancies, design and architecture studios, IT service teams and other professional practices, an LLP solves the main
        problem with a traditional partnership firm: one partner&apos;s mistake or a firm debt reaching every partner&apos;s personal
        assets. Partners are not liable for another partner&apos;s wrongful acts, and the LLP continues even when partners change.
        Regulated professions should check their own institute&apos;s rules on practising through an LLP before registering.
      </p>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Compliance stays light: two annual MCA forms, an income tax return, and an audit only above the turnover or contribution limits.
        If you are still deciding between structures, compare all six options on our{" "}
        <Link href="/company-registration-chennai" className="text-royal-violet underline underline-offset-2">
          company registration in Chennai
        </Link>{" "}
        page.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Which conversions can we handle?</h2>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr className="bg-fog text-left">
              <th className="p-4 font-medium text-obsidian">Conversion</th>
              <th className="p-4 font-medium text-obsidian">MCA form</th>
              <th className="p-4 font-medium text-obsidian">Legal basis</th>
              <th className="p-4 font-medium text-obsidian">What to know</th>
            </tr>
          </thead>
          <tbody className="bg-paper">
            {CONVERSIONS.map((row) => (
              <tr key={row.from} className="border-t border-ash">
                <td className="p-4 font-medium text-obsidian">{row.from}</td>
                <td className="p-4 text-slate">{row.form}</td>
                <td className="p-4 text-slate">{row.law}</td>
                <td className="p-4 text-slate">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">What annual filings does an LLP have?</h2>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• <strong className="text-obsidian">Form 11 (Annual Return):</strong> within 60 days of the end of the financial year, so by 30 May. Lists partners and their contribution.</li>
        <li>• <strong className="text-obsidian">Form 8 (Statement of Account and Solvency):</strong> within 30 days from the end of six months of the financial year, so by 30 October. Signed by designated partners, and certified by an auditor where audit applies.</li>
        <li>• <strong className="text-obsidian">Income tax return:</strong> filed every year, with an earlier due date if no audit applies and a later one if the LLP needs a tax or statutory audit.</li>
        <li>• <strong className="text-obsidian">Event-based filings:</strong> Form 3 when the LLP agreement changes, and Form 4 when a partner joins or leaves, each within 30 days.</li>
      </ul>
    </ServicePageTemplate>
  );
}
