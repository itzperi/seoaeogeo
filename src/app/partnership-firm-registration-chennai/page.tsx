import type { Metadata } from "next";
import ComparisonTable from "@/components/ComparisonTable";
import Link from "next/link";
import PostLink from "@/components/PostLink";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

// Re-render daily so links to scheduled guides (PostLink) switch on when they publish.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: { absolute: "Partnership Firm Registration in Chennai | Deed & Filing" },
  description:
    "Partnership firm registration in Chennai: deed drafting and stamping, filing with the Registrar of Firms on tnreginet, PAN, GST and later partner changes.",
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

// Section 58(1)(a)-(f), 58(1) proviso on signatures, 58(2) verification and 58(3) restricted words,
// Indian Partnership Act, 1932.
const FORM_I_FIELDS = [
  { field: "Firm name", law: "Section 58(1)(a)", tip: "Use exactly the name in the deed. Section 58(3) bars words such as Crown, Emperor, Empress, Empire, Imperial, King, Queen or Royal, or words implying government sanction or patronage, unless the State Government consents in writing." },
  { field: "Place or principal place of business", law: "Section 58(1)(b)", tip: "Give the full address as it appears on the rent agreement or ownership proof. The statement goes to the Registrar for the area where a place of business is situated or proposed." },
  { field: "Other places of business", law: "Section 58(1)(c)", tip: "List every branch or other place where the firm carries on business. Branches opened or closed later are reported by notice under Section 61." },
  { field: "Date each partner joined", law: "Section 58(1)(d)", tip: "For a new firm this is usually the date of the deed. For an existing firm, take each date from the earlier deeds rather than guessing." },
  { field: "Partners' full names and permanent addresses", law: "Section 58(1)(e)", tip: "Spell names as on PAN and ID proofs. A later change of a partner's name or permanent address needs a notice under Section 62." },
  { field: "Duration of the firm", law: "Section 58(1)(f)", tip: "State a fixed term, a specific venture, or at will. Under Section 7, a firm with no provision for duration or determination is a partnership at will." },
  { field: "Signatures and verification", law: "Section 58(1) and 58(2)", tip: "All partners, or agents they have specially authorised, sign the statement, and each signatory verifies it in the prescribed manner." },
];

// Fees as listed on tnreginet's Duty and Fees page (checked 13 November 2026).
const FIRM_FEES = [
  { item: "Statement to register the firm", law: "Section 58", fee: "Rs. 200" },
  { item: "Change of firm name or principal place of business", law: "Section 60", fee: "Rs. 50" },
  { item: "Opening or closing a branch", law: "Section 61", fee: "Rs. 50" },
  { item: "Change in a partner's name or permanent address", law: "Section 62", fee: "Rs. 50" },
  { item: "Change in constitution, dissolution, or a minor's election on majority", law: "Section 63", fee: "Rs. 50" },
  { item: "Rectification of mistakes", law: "Section 64", fee: "Rs. 50" },
  { item: "Stamp duty on the partnership instrument, capital up to Rs. 500", law: "Indian Stamp Act, as applied in Tamil Nadu", fee: "Rs. 50" },
  { item: "Stamp duty on the partnership instrument, capital above Rs. 500", law: "Indian Stamp Act, as applied in Tamil Nadu", fee: "Rs. 1,000" },
  { item: "Registration fee, only if the deed itself is registered as a document at a Sub-Registrar's office", law: "Tamil Nadu registration fees", fee: "1% of the capital" },
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
            "No. Registration with the Registrar of Firms is optional under the Indian Partnership Act, 1932, but an unregistered firm has real disadvantages. Under Section 69, it cannot sue a third party to enforce a contract, and partners cannot sue the firm or each other to enforce deed rights. Banks and government departments often ask for the registration certificate.",
        },
        {
          question: "What documents are needed to register a partnership firm?",
          answer:
            "You need the application in Form No. I signed by all partners, the stamped and signed partnership deed, and government ID proofs of every partner. Keep a rent agreement or ownership proof for the business place and, if someone else owns it, a no-objection letter. If the firm name needs government approval, that approval order is also required.",
        },
        {
          question: "How much stamp duty applies to a partnership deed in Tamil Nadu?",
          answer:
            "The Registration Department's tnreginet portal lists stamp duty of Rs. 1,000 on a partnership instrument where the capital exceeds Rs. 500, and Rs. 50 where it does not. The Indian Stamp (Tamil Nadu Amendment) Act, 2023 raised the earlier Rs. 300 rate. Under-stamped deeds can be impounded, so check the current figure before signing.",
        },
        {
          question: "What is the government fee to register a partnership firm on tnreginet?",
          answer:
            "tnreginet's Duty and Fees page lists Rs. 200 for filing the Section 58 statement that registers a firm, and Rs. 50 for each later statement or notice, such as a change of address, a new branch or a partner retiring. Stamp duty on the deed is separate, and none of these figures includes professional fees.",
        },
        {
          question: "How many partners can a partnership firm have?",
          answer:
            "A partnership firm needs at least two partners. The Companies (Miscellaneous) Rules, 2014 cap the number at 50 partners (to confirm against the current rules). Partners can be individuals, and a company or LLP can be a partner through an authorised representative. A minor can be admitted to benefits only with all partners' consent.",
        },
        {
          question: "What happens when a partner joins or leaves the firm?",
          answer:
            "You execute a supplementary or retirement deed recording the change and notify the Registrar of Firms under Section 63 of the Indian Partnership Act. The firm's PAN stays the same, but GST details, bank mandates and authorised signatories must be updated. Until public notice of retirement is given, a retiring partner can remain liable for the firm's acts.",
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
      relatedSlugs={["company-registration-chennai", "llp-registration-chennai", "gst-registration-chennai", "msme-udyam-registration-chennai", "income-tax-return-filing-chennai", "bookkeeping-services-chennai", "private-limited-company-incorporation-chennai"]}
      relatedPosts={["convert-partnership-firm-to-llp", "llp-vs-opc-vs-pvt-ltd", "gst-threshold-is-a-trigger", "msme-udyam-registration-checklist"]}
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
        page first. If you are weighing a Pvt Ltd company, our page on{" "}
        <Link href="/private-limited-company-incorporation-chennai" className="text-royal-violet underline underline-offset-2">
          incorporating a Pvt Ltd company in Chennai
        </Link>{" "}
        covers the process.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How does partnership firm registration in Tamil Nadu work?</h2>
      <p className="mt-4 max-w-3xl font-medium leading-relaxed text-obsidian">
        In Tamil Nadu, a firm is registered with the Registrar of Firms in the Registration Department. The partners file a
        statement under Section 58 of the Indian Partnership Act, 1932 in Form No. I, with the Rs. 200 fee listed on tnreginet. Once
        satisfied, the Registrar records the firm in the Register of Firms under Section 59.
      </p>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Section 58 allows a firm to register at any time, not only when it starts, by delivering the statement to the Registrar for
        the area in which any of its places of business is situated or proposed. Section 59 then requires the Registrar, once
        satisfied that Section 58 has been complied with, to record an entry of the statement in the Register of Firms and file it.
        Later changes are recorded through the statements and notices in Sections 60 to 63, each with its own fee. The state&apos;s
        portal is{" "}
        <a href="https://tnreginet.gov.in/portal/" target="_blank" rel="noopener noreferrer" className="text-royal-violet underline underline-offset-2">
          tnreginet
        </a>
        , where firm registration sits alongside document, society and chit fund registration.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How do you apply for partnership firm registration on tnreginet?</h2>
      <p className="mt-4 max-w-3xl font-medium leading-relaxed text-obsidian">
        Firm registration is one of the online services on tnreginet. You register as a user, choose firm registration, enter the
        Form No. I particulars, upload the stamped and signed deed with the partners&apos; ID proofs, and pay the fee online. The
        District Registrar&apos;s office then scrutinises the application and raises any queries on the portal.
      </p>
      <ol className="mt-4 max-w-3xl list-decimal space-y-3 pl-5 text-slate">
        <li>Stamp and execute the partnership deed first, so the registered particulars match a deed that already exists.</li>
        <li>Create a user account on tnreginet and log in. The portal&apos;s Help section carries user manuals for its services.</li>
        <li>Open the firm registration service and enter the firm name, places of business, partners, joining dates and duration exactly as in the deed.</li>
        <li>Upload the deed and the partners&apos; ID and address proofs, with proof of the principal place of business where the portal asks for it.</li>
        <li>Pay the Rs. 200 registration fee online.</li>
        <li>Track the application and answer any query from the Registrar&apos;s office on the portal.</li>
        <li>Once the firm is entered in the Register of Firms, apply for the firm&apos;s PAN and open its bank account.</li>
      </ol>

      <h2 className="mt-14 text-2xl text-obsidian">What goes into Form No. I, field by field?</h2>
      <p className="mt-4 max-w-3xl font-medium leading-relaxed text-obsidian">
        Form No. I is the statement Section 58 requires. It records the firm name, the place or principal place of business, any
        other places of business, the date each partner joined, every partner&apos;s full name and permanent address, and the
        duration of the firm. All partners, or agents they specially authorise, sign and verify it.
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-fog text-left">
              <th className="p-4 font-medium text-obsidian">Field</th>
              <th className="p-4 font-medium text-obsidian">Indian Partnership Act</th>
              <th className="p-4 font-medium text-obsidian">How to fill it</th>
            </tr>
          </thead>
          <tbody className="bg-paper">
            {FORM_I_FIELDS.map((row) => (
              <tr key={row.field} className="border-t border-ash">
                <td className="p-4 font-medium text-obsidian">{row.field}</td>
                <td className="p-4 text-slate">{row.law}</td>
                <td className="p-4 text-slate">{row.tip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">What clauses should a partnership deed include?</h2>
      <p className="mt-4 max-w-3xl font-medium leading-relaxed text-obsidian">
        Write down every term you do not want the Act to decide for you. Under Section 13, unless the partners agree otherwise, no
        partner is paid for working in the business, profits and losses are shared equally, interest on capital comes only out of
        profits, and advances beyond agreed capital earn six per cent a year.
      </p>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• <strong>Name, place and nature of business:</strong> identical to what goes into Form No. I.</li>
        <li>• <strong>Duration:</strong> a fixed term, a particular venture, or at will (Section 7). Under Section 42, a firm for a fixed term or a venture is dissolved when the term expires or the venture is completed, unless the deed says otherwise.</li>
        <li>• <strong>Capital:</strong> what each partner brings, in cash or in kind, and whether interest is paid on it.</li>
        <li>• <strong>Profit and loss ratio:</strong> otherwise equal shares apply under Section 13(b).</li>
        <li>• <strong>Remuneration of working partners:</strong> otherwise none is payable under Section 13(a).</li>
        <li>• <strong>Interest on loans by partners:</strong> otherwise six per cent a year under Section 13(d).</li>
        <li>• <strong>Management and signing powers:</strong> who operates the bank account, signs contracts and borrows. Section 12 lets every partner take part in the business unless the deed provides otherwise.</li>
        <li>• <strong>Non-compete:</strong> Section 11(2) allows the deed to stop a partner carrying on any other business while a partner.</li>
        <li>• <strong>Admission of partners:</strong> Section 31 requires the consent of all existing partners unless the deed sets another rule.</li>
        <li>• <strong>Retirement and expulsion:</strong> Section 32 lets a partner retire with everyone&apos;s consent, under an express agreement, or by written notice in a partnership at will. Section 33 permits expulsion only under a power in the deed, used in good faith.</li>
        <li>• <strong>Death or insolvency of a partner:</strong> Section 42 dissolves the firm on a partner&apos;s death or insolvency, subject to contract, so add a continuation clause and a method of valuing the outgoing share.</li>
        <li>• <strong>Minors:</strong> a minor can only be admitted to the benefits of partnership (Section 30), with the consent of all partners.</li>
        <li>• <strong>Books, accounts and disputes:</strong> where the books are kept, the accounting year, and how disagreements are settled.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">What government fees apply to a partnership firm in Tamil Nadu?</h2>
      <p className="mt-4 max-w-3xl font-medium leading-relaxed text-obsidian">
        tnreginet&apos;s Duty and Fees page lists Rs. 200 for filing the Section 58 statement that registers a firm and Rs. 50 for
        each later statement or notice under Sections 60 to 64. Stamp duty on the partnership instrument is Rs. 1,000 where the
        capital exceeds Rs. 500. These are government charges only.
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-fog text-left">
              <th className="p-4 font-medium text-obsidian">Item</th>
              <th className="p-4 font-medium text-obsidian">Law</th>
              <th className="p-4 font-medium text-obsidian">Government fee or duty</th>
            </tr>
          </thead>
          <tbody className="bg-paper">
            {FIRM_FEES.map((row) => (
              <tr key={row.item} className="border-t border-ash">
                <td className="p-4 font-medium text-obsidian">{row.item}</td>
                <td className="p-4 text-slate">{row.law}</td>
                <td className="p-4 text-slate">{row.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Figures are as listed on the Registration Department&apos;s portal on 13 November 2026; the state revises them from time to
        time. The Indian Stamp (Tamil Nadu Amendment) Act, 2023 raised the partnership duty from Rs. 300 to Rs. 1,000. Registering
        the firm with the Registrar of Firms and registering the deed as a document at a Sub-Registrar&apos;s office are separate
        steps, and the 1% registration fee applies only to the second. If the partners later want limited liability, see{" "}
        <PostLink slug="convert-partnership-firm-to-llp" className="text-royal-violet underline underline-offset-2">
          converting a partnership firm into an LLP
        </PostLink>{" "}
        and our{" "}
        <Link href="/llp-registration-chennai" className="text-royal-violet underline underline-offset-2">
          LLP registration
        </Link>{" "}
        page.
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
      <ComparisonTable
        heading="What is the difference between a registered and an unregistered partnership firm?"
        columns={["Point", "Registered firm", "Unregistered firm"]}
        rows={[
          ["Enforcing contracts against third parties", "Can sue to enforce contracts", "Cannot sue to enforce a contract (Section 69)"],
          ["Dealings with banks and departments", "Registration certificate available", "No registration certificate to show"],
          ["Registration", "Optional; with the Registrar of Firms", "Not registered"],
          ["Partner changes", "Recorded by deed and notice to the Registrar", "Recorded by deed only"],
        ]}
      />
    </ServicePageTemplate>
  );
}
