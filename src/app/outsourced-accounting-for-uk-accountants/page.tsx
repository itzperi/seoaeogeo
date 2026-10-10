import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Outsourced Bookkeeping for UK Accountancy Practices" },
  description:
    "Xero, QuickBooks, IRIS and TaxCalc bookkeeping, MTD VAT returns, year-end accounts and CT600 prep for UK firms, done in Chennai for your review and sign-off.",
  alternates: { canonical: "/outsourced-accounting-for-uk-accountants" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Outsourced Bookkeeping for UK Accountancy Practices",
    description:
      "Bookkeeping, MTD VAT returns, year-end accounts and CT600 preparation for UK practices, prepared in Chennai for the practice to review and file.",
    url: "/outsourced-accounting-for-uk-accountants",
  },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";
const th = "px-4 py-3 font-medium";
const tdHead = "px-4 py-3 align-top font-medium text-obsidian";
const td = "px-4 py-3 align-top text-slate";

const HOURS = [
  { ist: "9:30 am (India day starts)", bst: "5:00 am", gmt: "4:00 am" },
  { ist: "1:30 pm", bst: "9:00 am (UK day starts)", gmt: "8:00 am" },
  { ist: "2:30 pm", bst: "10:00 am", gmt: "9:00 am (UK day starts)" },
  { ist: "6:30 pm (India day ends)", bst: "2:00 pm", gmt: "1:00 pm" },
];

const DELIVERABLES = [
  {
    work: "Bookkeeping",
    send: "User access to Xero, QuickBooks or Sage, bank feeds or statements, and your client query rules.",
    back: "Coded and reconciled ledgers, control account checks, accruals and prepayments, and an exceptions list for client input.",
    signs: "The practice reviews and reports to the client.",
  },
  {
    work: "VAT returns under Making Tax Digital",
    send: "Client ledger access, VAT scheme details and the prior-quarter return.",
    back: "Box-by-box draft return reconciled to the VAT control account, with notes on partial exemption, reverse charge or scheme points.",
    signs: "The practice approves and submits through its MTD-compatible software as the client's HMRC agent.",
  },
  {
    work: "Year-end statutory accounts",
    send: "Trial balance or ledger access, prior-year accounts, fixed asset and director's loan records.",
    back: "Draft FRS 105 or FRS 102 Section 1A accounts in your production software, lead schedules and a disclosure checklist.",
    signs: "The practice reviews, the directors approve, and the practice files with Companies House.",
  },
  {
    work: "Corporation tax (CT600)",
    send: "Approved accounts, capital allowance history and loss records.",
    back: "Draft computation and CT600 with capital allowances and adjustments shown.",
    signs: "The practice reviews and files with HMRC.",
  },
  {
    work: "Self-assessment (SA100)",
    send: "Client records for self-employment, property, dividends and other income, and the prior-year return.",
    back: "Working papers and a draft return with open questions listed.",
    signs: "The practice finalises, obtains client approval and files as HMRC agent.",
  },
];

const SOFTWARE = [
  { area: "Bookkeeping and VAT", tools: "Xero, QuickBooks Online, Sage" },
  { area: "Accounts production and tax", tools: "IRIS, CCH, TaxCalc" },
  { area: "Access and workflow", tools: "Your practice management system, document portal and remote desktop, where used" },
];

const ONBOARDING = [
  {
    phase: "Days 1 to 30: agreements and pilot",
    focus: "Confidentiality agreement, data processing agreement, the practice's transfer risk assessment and IDTA or UK Addendum, named logins, and a pilot on test or low-risk files.",
    out: "Signed documents, access log, pilot files returned with review notes, and a working-paper format agreed.",
  },
  {
    phase: "Days 31 to 60: live work in steps",
    focus: "Monthly bookkeeping and a first live VAT quarter, with your reviewers' recurring comments captured in a practice-specific checklist.",
    out: "Agreed turnaround per job type, a review-point log and a weekly status list in your workflow tool.",
  },
  {
    phase: "Days 61 to 90: steady state and peak planning",
    focus: "Year-end accounts and CT600 work added, capacity booked for VAT quarter ends and the 31 January self-assessment deadline, and access rights reviewed.",
    out: "A written operating note covering hand-offs, escalation contacts, peak-season capacity and an access review record.",
  },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/outsourced-accounting-for-uk-accountants`}
      serviceType="Outsourced Bookkeeping and Accounts Preparation"
      crumbLabel="Outsourced Bookkeeping for UK Practices"
      crumbHref="/outsourced-accounting-for-uk-accountants"
      eyebrow="UK Accountancy Practices · Remote from Chennai"
      h1="Outsourced Bookkeeping & Accounts Preparation for UK Practices"
      subhead="A Chennai-based Chartered Accountancy team that prepares bookkeeping, VAT returns, year-end statutory accounts and corporation tax computations inside your own Xero, QuickBooks, IRIS, TaxCalc or CCH environment, for your practice to review, sign off and submit."
      introHeading="How does outsourced bookkeeping work for a UK accountancy practice?"
      intro="A UK practice keeps the client relationship, the engagement letter and the final sign-off, and an offshore team does the preparation work in the practice’s own software. We code bank feeds, reconcile ledgers, draft MTD-ready VAT returns, prepare year-end accounts for Companies House and draft CT600 computations, then hand each file back with a review note. Nothing is submitted to HMRC or Companies House by us. Your reviewer checks the working papers, raises queries, and files under the practice’s own agent credentials."
      citation={{ label: "GOV.UK — Making Tax Digital guidance", href: "https://www.gov.uk/government/collections/making-tax-digital-for-vat" }}
      keyFacts={[
        { label: "Who files", value: "Your practice, as the client's HMRC agent and with Companies House. We prepare only." },
        { label: "Where the work happens", value: "Inside your own Xero, QuickBooks, Sage, IRIS, CCH or TaxCalc environment, under named logins." },
        { label: "Data transfer basis", value: "UK GDPR restricted transfer, covered by an IDTA or the UK Addendum after the practice's transfer risk assessment." },
        { label: "Time zone", value: "India is 4.5 hours ahead of UK time during BST and 5.5 hours ahead during GMT." },
      ]}
      subServicesHeading="What bookkeeping and accounts work can UK practices outsource?"
      subServices={[
        { name: "Monthly and Quarterly Bookkeeping", text: "Bank feed coding, supplier and customer ledger reconciliation, accruals and prepayments, and control account checks in Xero or QuickBooks Online, with an exceptions list of items needing client input." },
        { name: "VAT Returns under Making Tax Digital", text: "Box-by-box VAT return drafts from the client ledger, covering standard, flat rate and cash accounting schemes, with a reconciliation to the VAT control account. The practice reviews and submits through its MTD-compatible software." },
        { name: "Year-End Statutory Accounts", text: "Micro-entity and small company accounts under FRS 105 and FRS 102 Section 1A, prepared in IRIS, TaxCalc, CCH or your chosen package, with a trial balance, lead schedules and a disclosure checklist for Companies House filing." },
        { name: "Corporation Tax Computations", text: "CT600 drafts with capital allowances, disallowable expense adjustments and loss schedules, prepared from the signed-off accounts so your tax reviewer starts from a complete computation rather than a blank return." },
        { name: "Self-Assessment Season Support", text: "Preparation of SA100 working papers for sole traders, landlords and directors during the autumn-to-January peak, including property income schedules and dividend summaries, ready for the practice to finalise and file." },
        { name: "MTD for Income Tax Readiness", text: "Setting up digital records and quarterly update workflows for sole trader and landlord clients brought into Making Tax Digital for Income Tax, so quarterly figures can be prepared on a predictable cycle." },
      ]}
      howTo={{
        heading: "How does a UK practice onboard for outsourced bookkeeping?",
        steps: [
          { name: "Scoping call and sample files", text: "We agree which client types, software and deliverables are in scope, and you share two or three anonymised or test files so we can show our working-paper format before anything live is handled." },
          { name: "Data protection agreement", text: "We sign a confidentiality agreement and a data processing agreement, and agree an international transfer mechanism such as the UK IDTA or the UK Addendum to the EU Standard Contractual Clauses, as the practice’s data protection lead requires." },
          { name: "Access set-up in your systems", text: "You create named user logins for our team in Xero, QuickBooks, IRIS, TaxCalc, CCH or your practice management tool, with permissions limited to the clients we work on. Files stay in your environment." },
          { name: "Pilot batch", text: "We complete a small batch of real jobs, such as one month of bookkeeping or two VAT quarters, so your reviewers can check accuracy, query handling and turnaround before volumes increase." },
          { name: "Agreed review and query routine", text: "Each job comes back with a review note listing assumptions, open queries and items for client confirmation. Your reviewer approves, comments or returns it, and the practice handles all client communication and submission." },
          { name: "Steady-state scheduling", text: "We plan capacity around your VAT quarter ends, year-end deadlines and the 31 January self-assessment deadline, so peak months are booked in advance rather than handled as emergencies." },
        ],
      }}
      faqs={[
        { question: "Who submits VAT returns and accounts to HMRC and Companies House?", answer: "Your practice does: we prepare the VAT return, the statutory accounts and the CT600 computation, but submission happens through your own MTD-compatible software and agent credentials after your reviewer has approved the figures. This keeps professional responsibility, the client engagement and the filing audit trail with the UK practice, where UK clients and regulators expect it to sit." },
        { question: "Which accounting and tax software does your team work in?", answer: "We work in Xero, QuickBooks Online and Sage for bookkeeping and VAT, and in IRIS, TaxCalc and CCH for accounts production and tax computations. These are platforms we can work in under your licences; we do not claim vendor certifications. Your team creates named user access inside your own tools and the work stays there, so your templates, review checklists and practice management records continue to apply." },
        { question: "How is UK GDPR handled when client data is accessed from India?", answer: "Access from India is a restricted transfer under UK GDPR, and the UK has not made adequacy regulations for India, so the practice, as controller, needs an appropriate safeguard: usually the UK International Data Transfer Agreement or the UK Addendum to the EU Standard Contractual Clauses. The ICO expects a transfer risk assessment before relying on either. We sign a data processing agreement and limit access to named staff and in-scope clients." },
        { question: "Can you help with Making Tax Digital for Income Tax?", answer: "Yes. We can prepare the quarterly figures your clients need for Making Tax Digital for Income Tax, which applies from April 2026 to sole traders and landlords above the first qualifying income threshold, with lower thresholds following in later years, and your practice reviews and submits each quarterly update. We also help set up digital record-keeping in the client’s software, so the extra quarterly workload does not land entirely on your in-house team." },
        { question: "What does the time difference mean for turnaround?", answer: "India Standard Time is 4.5 hours ahead of UK time during British Summer Time and 5.5 hours ahead during GMT, giving roughly four to five hours of shared working time each UK morning and early afternoon. Queries raised early in your day can usually be answered the same day, and some work sent in the morning can come back before your close of business, depending on volume and complexity." },
        { question: "Do you prepare year-end accounts for small companies and micro-entities?", answer: "Yes. We prepare micro-entity accounts under FRS 105 and small company accounts under FRS 102 Section 1A, including the trial balance, lead schedules, fixed asset register, director’s loan account analysis and a disclosure checklist, and the draft goes to your reviewer with open points flagged. Once approved by the practice and the client’s directors, your practice files the accounts with Companies House and the CT600 with HMRC." },
        { question: "What happens in the first 90 days with a UK practice?", answer: "The first 30 days cover the confidentiality and data processing agreements, your transfer risk assessment and IDTA or UK Addendum, named logins and a pilot. Days 31 to 60 move monthly bookkeeping and a first live VAT quarter across in steps. By days 61 to 90, year-end accounts and CT600 work are added and capacity is booked for VAT quarter ends and 31 January." },
        { question: "Is this different from your service for US CPA firms?", answer: "Yes. UK work runs on UK GAAP, VAT quarters, Companies House filings and the self-assessment calendar, with tools such as IRIS and TaxCalc that US firms rarely use, while our US CPA firm service is built around the US tax season, US return types and US data-handling rules. The working model is similar, with offshore preparation and onshore review, but the deliverables and deadlines are different." },
      ]}
      relatedQuestions={[
        { question: "How do US CPA firms work with an offshore preparation team in India?", href: "/outsourced-accounting-for-cpa-firms" },
        { question: "What does day-to-day bookkeeping support look like for a business in India?", href: "/bookkeeping-services-chennai" },
        { question: "Can the same team support a UK client’s Indian subsidiary?", href: "/india-subsidiary-compliance-cfo" },
      ]}
      relatedSlugs={["outsourced-accounting-for-cpa-firms", "bookkeeping-services-chennai", "india-subsidiary-compliance-cfo"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">How do India working hours overlap with UK hours?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        India Standard Time has no daylight saving, so the gap is 4.5 hours while the UK is on British Summer Time (from the
        last Sunday in March) and 5.5 hours on Greenwich Mean Time (from the last Sunday in October). The table maps an
        illustrative 9:30 am to 6:30 pm IST working day; actual hours are agreed in the engagement letter. In this model the
        shared window is about 9:00 am to 2:00 pm UK time during BST and 9:00 am to 1:00 pm during GMT.
      </p>
      <div className="mt-6 max-w-3xl overflow-x-auto rounded-cards border border-ash">
        <table className="w-full text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className={th}>India (IST)</th>
              <th className={th}>UK during BST</th>
              <th className={th}>UK during GMT</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {HOURS.map((r) => (
              <tr key={r.ist}>
                <td className={tdHead}>{r.ist}</td>
                <td className={td}>{r.bst}</td>
                <td className={td}>{r.gmt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">What does a UK practice send, and what comes back?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Every deliverable is preparation work. The practice reviews, signs off and files as the client&apos;s agent with HMRC
        and with Companies House; we do not submit anything or contact your clients unless you ask us to.
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className={th}>Work type</th>
              <th className={th}>What you send</th>
              <th className={th}>What you get back</th>
              <th className={th}>Who signs or files</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {DELIVERABLES.map((r) => (
              <tr key={r.work}>
                <td className={tdHead}>{r.work}</td>
                <td className={td}>{r.send}</td>
                <td className={td}>{r.back}</td>
                <td className={td}>{r.signs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">How are UK GDPR and international data transfers handled?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        When our team in India views client records in your systems, UK GDPR treats it as a restricted transfer. The practice
        is the controller and we act as processor, so the paperwork sits with the practice and we sign what it needs. These
        are contractual and procedural safeguards; this page does not claim a third-party security certification.
      </p>
      <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-slate">
        <li>
          <span className="font-medium text-obsidian">Data processing agreement:</span> the Article 28 processor terms,
          covering instructions, confidentiality, sub-processing, breach notification and return or deletion of data.
        </li>
        <li>
          <span className="font-medium text-obsidian">Transfer mechanism:</span> the UK has not made adequacy regulations for
          India, so the transfer relies on the ICO&apos;s International Data Transfer Agreement (IDTA) or the UK Addendum to the
          EU Standard Contractual Clauses.
        </li>
        <li>
          <span className="font-medium text-obsidian">Transfer risk assessment:</span> the ICO expects one before either
          safeguard is relied on. Following the Data (Use and Access) Act 2025, the legislation calls this the data protection
          test. We answer the practice&apos;s questions for it.
        </li>
        <li>
          <span className="font-medium text-obsidian">Access controls:</span> named logins in your systems, limited to
          in-scope clients, removed when a person leaves the engagement, with files kept in your environment.
        </li>
      </ul>
      <p className="mt-4 max-w-2xl text-sm text-slate">
        Source:{" "}
        <a
          href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          ICO guidance on international transfers
        </a>
        .
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Which accounting and tax platforms can the team work in?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        These are commonly used UK platforms we can work in under your practice&apos;s licences. We do not claim vendor
        certifications or partner status for them.
      </p>
      <div className="mt-6 max-w-3xl overflow-x-auto rounded-cards border border-ash">
        <table className="w-full text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className={th}>Area</th>
              <th className={th}>Platforms</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {SOFTWARE.map((r) => (
              <tr key={r.area}>
                <td className={tdHead}>{r.area}</td>
                <td className={td}>{r.tools}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">What does a 30-60-90-day onboarding plan look like for a UK practice?</h2>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className={th}>Phase</th>
              <th className={th}>Focus</th>
              <th className={th}>Outputs</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {ONBOARDING.map((r) => (
              <tr key={r.phase}>
                <td className={tdHead}>{r.phase}</td>
                <td className={td}>{r.focus}</td>
                <td className={td}>{r.out}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Timing depends on how quickly the transfer documents are signed and access is granted. Peak periods such as January
        are best avoided for the pilot.
      </p>
    </ServicePageTemplate>
  );
}
