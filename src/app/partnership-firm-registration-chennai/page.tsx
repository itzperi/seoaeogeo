import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Partnership Firm Registration in Chennai | Deed & Filing" },
  description:
    "Partnership firm registration in Chennai: deed drafting and stamping, filing with the Registrar of Firms on tnreginet, PAN, GST and partner changes.",
  alternates: { canonical: "/partnership-firm-registration-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Partnership Firm Registration in Chennai",
    description: "Partnership deed drafting and registration with the Tamil Nadu Registrar of Firms, plus PAN and GST for the firm.",
    url: "/partnership-firm-registration-chennai",
  },
};

const CHANGES = [
  { change: "Change in firm name or principal place of business", section: "Section 60", action: "Amend the deed and file a statement of the alteration with the Registrar of Firms." },
  { change: "Opening or closing a branch", section: "Section 61", action: "Notice to the Registrar of Firms." },
  { change: "Change in a partner's name or permanent address", section: "Section 62", action: "Notice to the Registrar of Firms." },
  { change: "Partner joins, retires or dies; firm dissolved", section: "Section 63", action: "Supplementary or retirement deed, notice to the Registrar, and updates to PAN, GST and bank records." },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/partnership-firm-registration-chennai`}
      serviceType="Partnership Firm Registration"
      crumbLabel="Partnership Firm Registration"
      crumbHref="/partnership-firm-registration-chennai"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="Partnership Firm · Chennai"
      h1="Partnership Firm Registration in Chennai"
      subhead="A partnership deed that reflects how you actually share capital, work and profit, registered with the Tamil Nadu Registrar of Firms, with PAN, GST and bank account set up for the firm."
      introHeading="What does partnership firm registration in Chennai involve?"
      intro="Partnership firm registration in Chennai has two parts: a written partnership deed signed and stamped by all partners, and registration of the firm with the Registrar of Firms under the Indian Partnership Act, 1932, applied for online on tnreginet. Registration is optional in law but strongly advisable, because an unregistered firm cannot sue third parties to enforce its contracts."
      citation={{ label: "Tamil Nadu Registration Department portal (tnreginet)", href: "https://tnreginet.gov.in/portal/" }}
      keyFacts={[
        { label: "Law", value: "Indian Partnership Act, 1932. Registration under Section 58; consequences of non-registration in Section 69." },
        { label: "Where to register", value: "Registrar of Firms, Tamil Nadu Registration Department. Online application on tnreginet, processed by the District Registrar's office." },
        { label: "Minimum partners", value: "2 partners. Partners are jointly and severally liable for the firm's debts, without limit." },
        { label: "Key documents", value: "Form No. I (application signed by all partners), the stamped partnership deed, and ID proofs of all partners." },
        { label: "Who it suits", value: "Family businesses, traders and small service firms with partners who know each other well and do not need outside equity." },
      ]}
      howTo={{
        heading: "How do you register a partnership firm in Chennai?",
        steps: [
          { name: "Agree the key terms", text: "Capital each partner brings, profit-sharing ratio, salaries and interest to partners, who signs cheques, and what happens when a partner leaves or dies." },
          { name: "Draft the partnership deed", text: "We draft the deed around those terms, including the firm name, principal place of business, nature of business and duration." },
          { name: "Stamp and sign the deed", text: "The deed is executed on stamp paper or e-stamped as required under the stamp law applicable in Tamil Nadu, and signed by all partners with witnesses." },
          { name: "Apply on tnreginet", text: "We file the online application with Form No. I, the deed and partners' ID proofs, and pay the registration fee online." },
          { name: "Respond to queries", text: "The District Registrar's office scrutinises the application and may raise queries; we answer them on the portal." },
          { name: "Certificate of registration", text: "Once approved, the firm is entered in the Register of Firms and a registration certificate is issued." },
          { name: "PAN, GST and bank account", text: "We apply for the firm's PAN, register for GST if needed, and help open a current account in the firm's name." },
        ],
      }}
      subServicesHeading="What does our partnership firm registration include?"
      subServices={[
        { name: "Partnership deed drafting", text: "Capital, profit share, partner remuneration, decision-making, admission, retirement and dispute clauses." },
        { name: "Stamping and execution", text: "Guidance on stamp duty under the law applicable in Tamil Nadu and on signing with witnesses." },
        { name: "Registrar of Firms filing", text: "Online application on tnreginet with Form No. I and supporting documents, and follow-up on queries." },
        { name: "PAN and GST", text: "Firm PAN, GST registration where turnover or the nature of supply requires it, and Udyam registration." },
        { name: "Deed amendments", text: "Supplementary deeds and Registrar notices when partners join or leave, or the firm name or address changes." },
        { name: "Conversion to LLP", text: "Form 17 conversion when the partners want limited liability without starting a new business." },
      ]}
      faqs={[
        {
          question: "Is registration of a partnership firm compulsory in Tamil Nadu?",
          answer:
            "No. Registration with the Registrar of Firms is optional under the Indian Partnership Act, 1932, but an unregistered firm carries real disadvantages. Under Section 69, it cannot file a suit against a third party to enforce a contract, and partners cannot sue the firm or each other to enforce deed rights. Banks and government departments also often ask for the registration certificate.",
        },
        {
          question: "What documents are needed to register a partnership firm?",
          answer:
            "You need the application in Form No. I signed by all partners, the stamped and signed partnership deed, and government-issued ID proofs of every partner. For the firm's place of business, keep a rent agreement or ownership proof and, if someone else owns it, a no objection letter. If the firm name uses words that need government approval, that approval order is also required.",
        },
        {
          question: "How much stamp duty applies to a partnership deed in Tamil Nadu?",
          answer:
            "Stamp duty on a partnership deed is set by the stamp law applicable in Tamil Nadu and depends on factors such as the capital contributed. Rates are revised from time to time, so we confirm the current amount from the Registration Department before the deed is executed rather than quoting a figure that may be outdated. Under-stamped deeds can be impounded, so this matters.",
        },
        {
          question: "How many partners can a partnership firm have?",
          answer:
            "A partnership firm needs at least two partners. The Companies Act, 2013 and the Companies (Miscellaneous) Rules, 2014 cap the number at 50 partners. Partners can be individuals, and a company or LLP can also be a partner through an authorised representative. A minor cannot be a full partner but can be admitted to the benefits of an existing partnership with all partners' consent.",
        },
        {
          question: "What happens when a partner joins or leaves the firm?",
          answer:
            "You execute a supplementary or retirement deed recording the change, and notify the Registrar of Firms under Section 63 of the Indian Partnership Act. The firm's PAN stays the same, but GST registration details, bank mandates and authorised signatories must be updated. Until public notice of retirement is given, a retiring partner can remain liable to third parties for the firm's acts.",
        },
        {
          question: "Should we register a partnership firm or an LLP?",
          answer:
            "Choose a partnership firm if you want the simplest set-up and are comfortable with unlimited, joint liability. Choose an LLP if partners want their personal assets protected and can handle two annual MCA filings. An existing partnership firm can convert into an LLP later by filing Form 17, so starting as a firm does not close that door.",
        },
      ]}
      relatedQuestions={[
        { question: "How does a partnership compare with an LLP or a company?", href: "/company-registration-chennai" },
        { question: "What does LLP registration involve?", href: "/llp-registration-chennai" },
        { question: "Does a new partnership firm need GST registration?", href: "/gst-registration-chennai" },
      ]}
      relatedSlugs={["company-registration-chennai", "llp-registration-chennai", "gst-registration-chennai", "msme-udyam-registration-chennai", "income-tax-return-filing-chennai", "bookkeeping-services-chennai"]}
      relatedPosts={["llp-vs-opc-vs-pvt-ltd", "gst-threshold-is-a-trigger", "msme-udyam-registration-checklist", "business-personal-expenses-separate"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Who should register a partnership firm?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        A partnership firm works for businesses run by two or more people who trust each other, keep the business small to medium in
        size and do not plan to bring in outside investors. Common examples are family trading businesses, small manufacturing units,
        contractors and local service businesses. There are no MCA filings and no mandatory company audit, so running costs stay low.
      </p>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        The trade-off is liability. Every partner is personally liable, jointly and severally, for all the firm&apos;s debts, including
        those caused by another partner. If your business borrows heavily, signs large contracts or carries product risk, compare an LLP
        or Private Limited Company on our{" "}
        <Link href="/company-registration-chennai" className="text-royal-violet underline underline-offset-2">
          company registration in Chennai
        </Link>{" "}
        page first.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What compliance applies after registration?</h2>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• Income tax return for the firm every year, with a tax audit if turnover or receipts cross the income tax limits.</li>
        <li>• GST returns, if the firm is registered under GST.</li>
        <li>• TDS deduction and returns where the firm pays rent, contractors, professionals or salaries above the limits.</li>
        <li>• Professional tax for partners and employees, payable to the local body in Tamil Nadu.</li>
        <li>• Registrar of Firms notices whenever partners, the firm name or addresses change.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">How are deed changes handled?</h2>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-fog text-left">
              <th className="p-4 font-medium text-obsidian">Change</th>
              <th className="p-4 font-medium text-obsidian">Indian Partnership Act</th>
              <th className="p-4 font-medium text-obsidian">What we do</th>
            </tr>
          </thead>
          <tbody className="bg-paper">
            {CHANGES.map((row) => (
              <tr key={row.change} className="border-t border-ash">
                <td className="p-4 font-medium text-obsidian">{row.change}</td>
                <td className="p-4 text-slate">{row.section}</td>
                <td className="p-4 text-slate">{row.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ServicePageTemplate>
  );
}
