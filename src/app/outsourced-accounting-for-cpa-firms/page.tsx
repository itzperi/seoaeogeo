import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Outsourced Accounting for US CPA Firms | India" },
  description:
    "Offshore bookkeeping, month-end close and 1040, 1065 and 1120-S tax prep support for US CPA firms, prepared in your software for your review and signature.",
  alternates: { canonical: "/outsourced-accounting-for-cpa-firms" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Outsourced Accounting & Tax Prep Support for US CPA Firms",
    description: "Bookkeeping, month-end close and tax return preparation support for US CPA firms, from a Chartered Accountancy firm in Chennai.",
    url: "/outsourced-accounting-for-cpa-firms",
  },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";
const th = "px-4 py-3 font-medium";
const tdHead = "px-4 py-3 align-top font-medium text-obsidian";
const td = "px-4 py-3 align-top text-slate";

const MODELS = [
  {
    model: "Dedicated team",
    how: "Named staff work only on your firm's files, on a fixed monthly schedule, inside your systems and to your checklists.",
    fits: "Steady year-round bookkeeping, monthly close or a predictable return pipeline.",
    agree: "Headcount, skill mix, reviewer contact, daily handover time and leave cover.",
  },
  {
    model: "Pooled / seasonal capacity",
    how: "A shared team takes work as it arrives, with capacity reserved for your busy season or extension season.",
    fits: "Firms whose volume peaks between January and April and again before the October extension deadline.",
    agree: "Expected volumes by month, turnaround per return type and how overflow is prioritised.",
  },
  {
    model: "Project",
    how: "A defined piece of work with a start and end date, scoped from a sample of the files.",
    fits: "Bookkeeping clean-ups, backlog catch-up, a software migration or a first trial of outsourcing.",
    agree: "File list, definition of done, review rounds and the hand-back format.",
  },
];

const HOURS = [
  { ist: "9:30 am (India day starts)", et: "12:00 am EDT / 11:00 pm EST (previous day)", ct: "11:00 pm CDT / 10:00 pm CST (previous day)", pt: "9:00 pm PDT / 8:00 pm PST (previous day)" },
  { ist: "2:00 pm", et: "4:30 am EDT / 3:30 am EST", ct: "3:30 am CDT / 2:30 am CST", pt: "1:30 am PDT / 12:30 am PST" },
  { ist: "6:30 pm (India day ends)", et: "9:00 am EDT / 8:00 am EST", ct: "8:00 am CDT / 7:00 am CST", pt: "6:00 am PDT / 5:00 am PST" },
  { ist: "7:30 pm to 8:30 pm (call slot, by arrangement)", et: "10:00 to 11:00 am EDT / 9:00 to 10:00 am EST", ct: "9:00 to 10:00 am CDT / 8:00 to 9:00 am CST", pt: "7:00 to 8:00 am PDT / 6:00 to 7:00 am PST" },
];

const DELIVERABLES = [
  {
    work: "Bookkeeping and month-end close",
    send: "Access to QuickBooks Online or Xero, bank and card feeds or statements, prior-period close file, client contact rules.",
    back: "Coded transactions, bank and card reconciliations, accrual and prepaid schedules, close checklist and an open-items list.",
    signs: "Your firm reviews and releases financials to the client.",
  },
  {
    work: "Individual returns (Form 1040)",
    send: "Client source documents through your portal, organiser, prior-year return and your review checklist.",
    back: "Draft return in your tax software, tie-out workpapers, a list of missing documents and review notes.",
    signs: "Your CPA or EA reviews, signs as paid preparer and e-files.",
  },
  {
    work: "Business returns (1065 and 1120-S)",
    send: "Year-end trial balance, fixed asset register, prior-year return and K-1 history.",
    back: "Draft return, book-to-tax reconciliation, K-1 support and workpapers with assumptions stated.",
    signs: "Your CPA or EA reviews, signs and files.",
  },
  {
    work: "Reconciliations and workpapers",
    send: "Ledger access, statements and your workpaper template or naming convention.",
    back: "Balance sheet reconciliations and lead schedules filed in your document system, ready for review.",
    signs: "Your reviewer signs off in your workflow tool.",
  },
];

const SOFTWARE = [
  { area: "Bookkeeping and close", tools: "QuickBooks Online, Xero" },
  { area: "Individual and business tax preparation", tools: "Drake, UltraTax CS, Lacerte, CCH Axcess Tax, ProConnect" },
  { area: "Access and collaboration", tools: "Your remote desktop or hosted environment, client portal, document management and workflow tools" },
];

const ONBOARDING = [
  {
    phase: "Days 1 to 30: set-up and trial",
    focus: "NDA and engagement letter, your Section 7216 consent process, named logins with least-privilege access, walkthrough of your checklists, and a small trial batch.",
    out: "Signed agreements, access log, trial files returned with review notes, and a list of process questions resolved.",
  },
  {
    phase: "Days 31 to 60: controlled ramp-up",
    focus: "Volume increases in steps, your reviewers record recurring review points, and we fold them into a firm-specific checklist.",
    out: "Agreed turnaround per work type, a review-point log and a weekly status report in your workflow tool.",
  },
  {
    phase: "Days 61 to 90: steady state",
    focus: "Daily handover routine settled, capacity planned for the next busy or extension season, and access rights reviewed.",
    out: "A written operating note covering hand-offs, escalation contacts, peak-season capacity and an access review record.",
  },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/outsourced-accounting-for-cpa-firms`}
      serviceType="Outsourced Accounting for CPA Firms"
      crumbLabel="Outsourced Accounting for US CPA Firms"
      crumbHref="/outsourced-accounting-for-cpa-firms"
      eyebrow="US CPA Firms · Offshore Support from Chennai"
      h1="Outsourced Accounting & Tax Prep Support for US CPA Firms"
      subhead="Bookkeeping, month-end close and tax return preparation support for small and mid-size US CPA firms, worked inside your own systems and software, prepared for your review and signature, with overlap with US mornings."
      introHeading="How does a US CPA firm outsource accounting and tax preparation to India?"
      intro="A US CPA firm outsources by giving an offshore team controlled access to its own accounting and tax software, where the team prepares bookkeeping, reconciliations and draft returns that the firm's CPAs then review and sign. The US firm keeps responsibility for the engagement and the client relationship. Before client tax information is shared with a preparer outside the US, IRS rules under Section 7216 generally require the taxpayer's written consent, and the arrangement should follow the safeguards in IRS Publication 4557."
      citation={{ label: "IRS Publication 4557, Safeguarding Taxpayer Data (irs.gov)", href: "https://www.irs.gov/pub/irs-pdf/p4557.pdf" }}
      keyFacts={[
        { label: "Who signs and files", value: "Your firm's CPA or EA. We prepare; we do not sign as paid preparer or e-file." },
        { label: "Where the work happens", value: "Inside your firm's own software and hosted environment, under named logins you control." },
        { label: "Taxpayer consent", value: "Section 7216 consent obtained by your firm before client tax information is shared with us." },
        { label: "Engagement models", value: "Dedicated team, pooled or seasonal capacity, or a defined project." },
        { label: "Time zone", value: "India Standard Time is 9.5 hours ahead of US Eastern during daylight saving time and 10.5 hours ahead otherwise." },
      ]}
      subServicesHeading="What accounting and tax work can US CPA firms outsource to India?"
      subServices={[
        { name: "Bookkeeping in QuickBooks Online and Xero", text: "Transaction coding, bank and credit card reconciliations, accounts payable and receivable upkeep, and clean-up of backlogged files for your business clients." },
        { name: "Month-End Close", text: "Accruals, prepaid and depreciation schedules, balance sheet reconciliations and a close checklist, delivered by an agreed working day each month." },
        { name: "Individual Returns (Form 1040)", text: "Data entry and workpapers for 1040 returns from client source documents, with open items and review notes flagged for your preparer or reviewer." },
        { name: "Business Returns (1065 and 1120-S)", text: "Partnership and S corporation return preparation from trial balances, including book-to-tax adjustments, K-1 support and supporting workpapers." },
        { name: "Work in Your Tax Software", text: "We prepare returns in the software your firm already uses, including Drake, Lacerte, UltraTax CS, CCH Axcess Tax and ProConnect, so nothing has to be re-keyed." },
        { name: "Workpapers and Review-Ready Files", text: "Organised workpapers, tie-outs and a summary of assumptions and questions, so your reviewer can sign off efficiently. The US CPA signs and remains responsible." },
      ]}
      howTo={{
        heading: "How does an outsourced accounting engagement with a US CPA firm start?",
        steps: [
          { name: "Scoping call", text: "We discuss the work types, software, volumes, seasonality and turnaround your firm needs, and which engagement model fits." },
          { name: "Agreements and consent", text: "We sign an NDA and engagement letter, and your firm obtains Section 7216 taxpayer consent where client tax information will be disclosed to us." },
          { name: "Access set-up", text: "Your firm grants least-privilege access to its own systems, such as a remote desktop, hosted environment or portal, so client data stays on firm-controlled infrastructure." },
          { name: "Trial batch", text: "We complete a small batch of bookkeeping files or returns, and your reviewers assess quality, communication and turnaround before scaling." },
          { name: "Checklists and review loop", text: "We agree your firm's checklists, naming conventions and review-note process, and track open items in your workflow tool." },
          { name: "Steady-state operation", text: "Work runs to an agreed daily handover, with a scheduled call overlapping US mornings and capacity planned ahead of busy and extension season." },
        ],
      }}
      faqs={[
        { question: "What is IRS Section 7216 consent and why does it matter for offshore preparers?", answer: "Section 7216 restricts tax return preparers from using or disclosing taxpayer information without consent, and disclosure to a preparer located outside the US generally requires the taxpayer's prior written consent in the form the regulations specify. The consent is obtained by your firm from each client before their information is shared with us. Social Security numbers carry extra restrictions, so your firm should confirm the exact consent wording and SSN handling with its own advisers." },
        { question: "Who signs the tax return?", answer: "Your firm signs the return, and your CPAs remain responsible for it. We prepare returns, workpapers and bookkeeping as support for your review, but we do not hold out as US CPAs or sign as paid preparers. Final judgment on positions, client communication and e-filing stay with your firm, which keeps professional responsibility where your clients expect it." },
        { question: "How do you protect client data?", answer: "We work only inside systems your firm controls, with least-privilege access granted per named user, so client files are not downloaded to our own machines. Every team member is bound by an NDA, and access is removed promptly when someone leaves an engagement. Your firm's written information security plan, IRS Publication 4557 and the FTC Safeguards Rule set the controls we work to, and your firm decides how access is granted and logged." },
        { question: "What are the engagement models?", answer: "There are three: a dedicated team that works only on your files on a fixed monthly schedule, pooled or seasonal capacity reserved for busy season and extension season, and project work with a defined start and end, such as a clean-up or backlog. Dedicated teams suit steady year-round work; seasonal capacity suits peaks; projects suit firms testing outsourcing for the first time." },
        { question: "What are the working hours relative to the US?", answer: "India Standard Time is 9.5 to 10.5 hours ahead of US Eastern Time, depending on daylight saving, so the end of our working day falls in the early US Eastern and Central morning. Work you assign by the end of your day can be prepared during the India day and ready for review the next morning. For Pacific firms the live overlap is very early, so most communication runs asynchronously." },
        { question: "Which software do you work in?", answer: "For bookkeeping we work in QuickBooks Online and Xero, and for tax preparation we work in Drake, Lacerte, UltraTax CS, CCH Axcess Tax and ProConnect. These are platforms we can work in using your firm's licences and environment; we do not claim vendor certifications. Your data, templates and diagnostics stay consistent with how your in-house staff work. Other packages can be discussed at scoping." },
        { question: "What happens in the first 90 days of an engagement?", answer: "The first 30 days cover agreements, your Section 7216 consent process, named logins and a small trial batch. Days 31 to 60 increase volume in steps while your reviewers' recurring comments are built into a firm-specific checklist. By days 61 to 90 the daily handover is settled, peak-season capacity is planned and access rights are reviewed. Timing depends on your volumes and how quickly access is granted." },
        { question: "Do you also support UK accountancy practices?", answer: "Yes, we support UK practices separately, because their work is built around VAT returns, Making Tax Digital, Companies House year-end accounts, self-assessment and UK GDPR rather than US returns. The software, deadlines and data protection rules are different enough that we run it as its own service. Details are on our page for UK accountancy practices." },
      ]}
      relatedQuestions={[
        { question: "Do you offer outsourced bookkeeping for UK accountancy practices?", href: "/outsourced-accounting-for-uk-accountants" },
        { question: "What does your bookkeeping process look like for direct clients?", href: "/bookkeeping-services-chennai" },
        { question: "Can you also help US-based NRIs with their Indian taxes?", href: "/nri-tax-services-usa" },
      ]}
      relatedSlugs={["outsourced-accounting-for-uk-accountants", "bookkeeping-services-chennai", "nri-tax-services-usa"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Which engagement model suits a US CPA firm?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Most firms choose between three models. The difference is how capacity is reserved, not the quality of the work or
        who signs: in every model, your CPA or EA reviews and signs.
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className={th}>Model</th>
              <th className={th}>How it works</th>
              <th className={th}>When it fits</th>
              <th className={th}>What to agree up front</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {MODELS.map((r) => (
              <tr key={r.model}>
                <td className={tdHead}>{r.model}</td>
                <td className={td}>{r.how}</td>
                <td className={td}>{r.fits}</td>
                <td className={td}>{r.agree}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">How do India working hours overlap with US time zones?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        India Standard Time does not change for daylight saving, so the gap with the US moves when US clocks change in March
        and November. The table maps an illustrative 9:30 am to 6:30 pm IST working day; the actual hours and call slot are
        agreed in the engagement letter. The live overlap is short: roughly the last hour of the India day plus an agreed call
        slot, which falls in the US Eastern and Central morning. Most work runs on an overnight handover, not real-time
        collaboration.
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className={th}>India (IST)</th>
              <th className={th}>US Eastern</th>
              <th className={th}>US Central</th>
              <th className={th}>US Pacific</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {HOURS.map((r) => (
              <tr key={r.ist}>
                <td className={tdHead}>{r.ist}</td>
                <td className={td}>{r.et}</td>
                <td className={td}>{r.ct}</td>
                <td className={td}>{r.pt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">What does a CPA firm send, and what comes back?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Everything we return is preparation work for your review. Your CPA or EA decides positions, signs the return and
        e-files it; we do not sign returns or communicate with your clients unless you ask us to.
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

      <h2 className="mt-14 text-2xl text-obsidian">How is client data protected when work is done in India?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The controls below describe how we work. They are contractual and procedural safeguards; this page does not claim a
        third-party security certification. If your vendor-risk questionnaire asks about certifications such as SOC 2 or ISO
        27001, raise it at scoping and we will answer in writing.
      </p>
      <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-slate">
        <li>
          <span className="font-medium text-obsidian">NDA and engagement letter:</span> signed before any access, with every
          team member on the engagement bound by confidentiality terms.
        </li>
        <li>
          <span className="font-medium text-obsidian">Role-based access:</span> named logins with the minimum permissions
          needed, limited to the clients in scope, and removed when a person leaves the engagement.
        </li>
        <li>
          <span className="font-medium text-obsidian">Your systems, your logins:</span> we work in your firm&apos;s software,
          hosted environment or remote desktop, so client files stay on infrastructure your firm controls and audits.
        </li>
        <li>
          <span className="font-medium text-obsidian">Section 7216 consent:</span> obtained by your firm from each taxpayer
          before their information is disclosed to us; Social Security numbers carry additional restrictions your firm
          decides how to handle.
        </li>
        <li>
          <span className="font-medium text-obsidian">Your security plan applies:</span> we follow the access, device and
          incident-reporting rules in your firm&apos;s written information security plan, read alongside{" "}
          <a href="https://www.irs.gov/pub/irs-pdf/p4557.pdf" target="_blank" rel="noopener noreferrer" className={linkClass}>
            IRS Publication 4557
          </a>
          .
        </li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">Which accounting and tax platforms can the team work in?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        These are commonly used platforms we can work in under your firm&apos;s licences. We do not claim vendor
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

      <h2 className="mt-14 text-2xl text-obsidian">What does a 30-60-90-day onboarding plan look like?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The plan below is the usual sequence. Each phase ends with a check-in with your engagement partner before volume
        increases.
      </p>
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
        Firms with clients who also hold Indian income or property can refer them to our{" "}
        <Link href="/nri-tax-services-usa" className={linkClass}>
          Indian tax service for NRIs in the USA
        </Link>
        , which supplies the Indian figures a US preparer needs.
      </p>
    </ServicePageTemplate>
  );
}
