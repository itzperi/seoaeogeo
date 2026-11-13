import ICAIVerificationTrustBar from "@/components/ICAIVerificationTrustBar";
import TamilSummaryBox from "@/components/TamilSummaryBox";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SiloLinks from "@/components/SiloLinks";
import HighTicketSections, { type Audience } from "@/components/HighTicketSections";
import { JsonLd, moneyPageGraph } from "@/lib/schema";
import { PAGE_DATES } from "@/lib/page-dates";
import { BOOKING_LINK, SOCIALS } from "@/lib/site";
import TrackedAnchor from "@/components/TrackedAnchor";

// URL kept as /virtual-cfo-services (no -chennai) to keep its indexing
// history; every internal link and the canonical use this exact path.
const PATH = "/virtual-cfo-services";
const TITLE = "Virtual CFO in Chennai | Fractional CFO | C S Rushil & Co.";
const DESCRIPTION =
  "Hire a CA-led Virtual CFO in Chennai for startups, SMEs & foreign subsidiaries. Monthly MIS, cash flow forecasting, fundraising & board packs in Anna Nagar.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Virtual CFO in Chennai: Outsourced & Fractional CFO Services",
    description: DESCRIPTION,
    url: PATH,
  },
};

// What the engagement delivers at each business stage.
const STAGE_MATRIX = [
  {
    stage: "Seed and early-stage startups",
    who: "Pre-Series A SaaS and D2C companies, often in OMR or the IITM Research Park",
    deliverables: [
      "Burn rate and runway model, updated monthly",
      "Unit economics: CAC, LTV, contribution margin by channel",
      "Investor MIS deck in the format your investors ask for",
      "ESOP pool and cap-table hygiene",
      "DPIIT recognition and FEMA tracking, including FC-GPR after each foreign allotment",
    ],
  },
  {
    stage: "Scaling SMEs and manufacturers",
    who: "₹5 crore to ₹100 crore turnover, often in Ambattur, Guindy or Sriperumbudur",
    deliverables: [
      "Working capital and debtor-days review",
      "SKU-level and plant-level costing and margin analysis",
      "CMA data for cash credit and overdraft facilities",
      "Internal controls in Tally, Zoho or the ERP you already run",
      "GST and TDS outflows mapped into the cash-flow forecast",
    ],
  },
  {
    stage: "Foreign-owned Indian subsidiaries",
    who: "Subsidiaries of US, UK, Singapore and UAE parents",
    deliverables: [
      "Monthly group reporting with an Ind AS to IFRS or US GAAP bridge",
      "Intercompany transfer pricing margin monitored through the year, ready for Form 3CEB",
      "RBI FLA return and FEMA compliance calendar",
      "Board packs for directors who join from abroad",
    ],
  },
];

const ROADMAP = [
  {
    phase: "Days 1–30",
    focus: "Clean the base",
    items: ["Chart of accounts cleanup", "Historical reconciliation of bank, GST and TDS ledgers", "KPI list agreed with the founders or board"],
  },
  {
    phase: "Days 31–60",
    focus: "First reporting cycle",
    items: ["First monthly MIS pack", "13-week rolling cash-flow forecast", "Margin leak review by product, customer or plant"],
  },
  {
    phase: "Days 61–90",
    focus: "Run the cadence",
    items: ["Budget vs actual variance review every month", "Board pack prepared from the same data, not rebuilt each quarter", "Agreed monthly review call"],
  },
];

// High-ticket buyers (growth plan 90, section 7.5).
const AUDIENCES: Audience[] = [
  { who: "Venture or angel-backed startup", need: "Investor updates, board packs and runway numbers the board can rely on.", help: "Monthly MIS, a rolling cash forecast and a board pack in the format your investors ask for.", enquiry: "a virtual CFO for our investor-backed startup" },
  { who: "PE-backed or growth-stage company", need: "Budget-versus-actual discipline and reporting on the investor's calendar.", help: "A monthly close timetable, variance commentary and quarterly board papers.", enquiry: "a virtual CFO for our PE-backed company" },
  { who: "Manufacturer in Chennai, Coimbatore or the Sriperumbudur–Oragadam corridor", need: "Costing by product or plant, stock and bank-limit reporting, and working capital that keeps up with growth.", help: "Plant-level costing, CMA data for the bank and a cash forecast, served online outside Chennai.", enquiry: "a virtual CFO for our manufacturing business" },
  { who: "Owner-led family business", need: "Numbers that support decisions, not just year-end filings.", help: "A monthly management pack and a review call on margins, cash and the next decisions.", enquiry: "a virtual CFO for our family business" },
];

const NOT_INCLUDED = [
  "The statutory audit of a company for which we act as virtual CFO. The Companies Act restricts an auditor from providing such services to the company it audits, so an independent auditor does the audit.",
  "Raising funds, introducing investors, negotiating term sheets or giving investment advice.",
  "Advice on foreign tax or company law for overseas group companies; that stays with your home adviser.",
  "Daily bookkeeping, unless agreed separately as a bookkeeping engagement.",
];

const TECH_STACK = [
  ["Accounting", "Zoho Books (built by Chennai-headquartered Zoho), Tally Prime, QuickBooks, Xero"],
  ["Payouts and collections", "RazorpayX and Cashfree payout reconciliation"],
  ["Payroll", "Keka and Zoho Payroll"],
  ["MIS dashboards", "Power BI and Google Looker Studio"],
];

const SCOPE = [
  { name: "Monthly MIS Reporting", text: "Structured management information system reports — revenue, margin, cash position, and the specific KPIs your business actually runs on, not a generic template." },
  { name: "Budgeting & Forecasting", text: "Annual budgets and rolling forecasts tied to real business drivers, revisited quarterly rather than set once and forgotten." },
  { name: "Cash Flow Management", text: "Working capital planning and short-term cash flow monitoring, so a receivables delay or a large payable doesn't become a liquidity surprise." },
  { name: "Fundraising Support", text: "Financial model preparation, cleaning up historical financials for due diligence, and investor-facing reporting through a raise." },
  { name: "Board & Investor Reporting", text: "Board-ready financial packs and KPI dashboards prepared on the cadence your board or investors actually expect." },
  { name: "Costing & Pricing Analysis", text: "Unit economics and margin analysis by product, service line, or customer segment to guide pricing and cost decisions with real numbers." },
];

const ENGAGEMENT_STEPS = [
  { name: "Financial health assessment", text: "We review your current books, reporting cadence, and the specific decisions you're struggling to make with the numbers you have today." },
  { name: "Scope and cadence agreement", text: "We agree what gets delivered monthly (MIS, cash flow, board packs) versus what's ad hoc (fundraising support, one-off analysis), and how many hours a month that realistically takes." },
  { name: "Systems and access setup", text: "We connect to your accounting software, bank feeds, and any existing MIS tooling — a Virtual CFO engagement works from your actual data, not a parallel spreadsheet." },
  { name: "First MIS cycle and calibration", text: "The first month's reporting is usually a calibration round — refining formats and KPIs based on what's actually useful to you, not what looks impressive." },
  { name: "Ongoing monthly cycle", text: "Monthly MIS delivery, a review call to walk through what the numbers mean for upcoming decisions, and ad hoc support as fundraising, hiring, or pricing questions come up." },
];

const COMPARISON = [
  { role: "Bookkeeper / Accountant", focus: "Historical record-keeping, compliance filing", scope: "Recording transactions and meeting statutory deadlines", bestFor: "Businesses needing accurate books and statutory filing, nothing forward-looking" },
  { role: "Virtual CFO", focus: "Forward-looking: budgeting, fundraising, pricing, board reporting", scope: "Part-time and scheduled: a monthly reporting cycle plus scoped time for raises, board meetings or budgets", bestFor: "Startups, SMEs and subsidiaries that need senior financial judgment but not daily, full-time presence" },
  { role: "Full-Time CFO", focus: "Everything a Virtual CFO does, plus daily operational involvement and team management", scope: "Full-time, in-house, heading the finance team day to day", bestFor: "Businesses at a scale where financial complexity needs daily, in-house leadership" },
];

const SUBSIDIARY_SCOPE = [
  { name: "Board packs", text: "Quarterly board papers with financial statements, KPIs, cash position and compliance status, prepared for directors who often join by video from abroad." },
  { name: "Group reporting", text: "Monthly packs mapped to the parent's chart of accounts, with IFRS or US GAAP adjustments bridged from the Indian books and delivered to the group close timetable." },
  { name: "Intercompany and transfer pricing coordination", text: "Intercompany invoicing and reconciliations, monitoring the agreed markup during the year, and coordinating the Form 3CEB report and documentation." },
  { name: "FEMA reporting", text: "Tracking the FEMA filings that follow funding, such as FC-GPR after a share allotment and the annual FLA return to the RBI." },
  { name: "Investor due diligence", text: "Preparing the financial data room, reconciling historical financials and compliance records, and answering investors' finance questions during diligence." },
];

const FAQS = [
  {
    question: "What is the difference between a fractional CFO and a virtual CFO?",
    answer:
      "There is no real difference in scope: both terms describe senior CFO-level work delivered part-time instead of through a full-time hire. \"Fractional\" emphasises the time commitment, a fraction of a full-time role scoped by hours or days a month, while \"virtual\" emphasises that much of the work happens remotely from your existing systems. Our fractional CFO and virtual CFO services in Chennai cover the same scope: MIS, budgeting, cash flow, fundraising support and board reporting, with in-person review meetings at our Anna Nagar office or yours when needed.",
  },
  {
    question: "How is a fractional CFO engagement scoped?",
    answer:
      "A fractional CFO engagement is scoped by the work and time it actually needs — for example, a monthly MIS and cash-flow cycle, or a defined number of days during a fundraise — and agreed in writing after an initial assessment of your books and reporting. We don't quote a generic package, because the honest answer depends on your transaction volume, reporting needs and whether you're mid-raise.",
  },
  {
    question: "Who actually needs a Virtual CFO?",
    answer:
      "Startups past seed funding managing investor reporting for the first time, and SMEs whose revenue has grown to the point where the founder can no longer track cash flow, margins and budgets in their head or a spreadsheet, benefit most. The usual trigger is making pricing, hiring or fundraising decisions without confidence in the underlying numbers. It's rarely a specific revenue threshold. A Virtual CFO gives you senior financial judgment on a part-time, scheduled basis, which is why it often sits between founder-run finances and an in-house finance team.",
  },
  {
    question: "How is a Virtual CFO different from my current accountant?",
    answer:
      "An accountant or bookkeeper records what has already happened: transactions, statutory filings and compliance. A Virtual CFO uses that same data to answer forward-looking questions about cash flow, pricing, hiring and fundraising, so many businesses keep their existing accountant for day-to-day bookkeeping and compliance and add Virtual CFO support for the decisions outside that scope. Typical questions: what happens to cash flow if we hire three more people, is this new pricing model actually more profitable, and what does an investor need to see before writing a term sheet?",
  },
  {
    question: "How many hours per month does a Virtual CFO engagement actually involve?",
    answer:
      "It depends on complexity and scope: a straightforward monthly MIS-and-cash-flow engagement might run a few hours a week, while active fundraising support or a board reporting cycle can mean several days in a given month. We set the hours explicitly during the initial financial health assessment. We don't quote a generic number, since the honest answer depends entirely on your transaction volume, reporting needs, and whether you're mid-raise.",
  },
  {
    question: "Can a Virtual CFO actually help close a funding round?",
    answer:
      "Yes, within its real scope: preparing the financial model investors will scrutinise, cleaning up historical financials so due diligence doesn't surface avoidable red flags, and structuring investor reporting once the round is live. A Virtual CFO doesn't source investors or negotiate term sheets; that's a fundraising advisor's or the founder's job. Clean, reconciled numbers prepared before investor meetings mean diligence questions can be answered from records rather than reconstructed under time pressure.",
  },
  {
    question: "Do I need to switch accounting software or change how we currently do bookkeeping?",
    answer:
      "Usually no: a Virtual CFO engagement works from whatever accounting software and processes you already have, connecting to existing bank feeds and ledgers rather than requiring a parallel system, and we only flag a change if your setup genuinely can't support the reporting you need. For example, if there's no cost-centre tracking when you need margin analysis by product line, we'll flag that specifically rather than assume a wholesale system change is required.",
  },
  {
    question: "What happens in the first month of an engagement?",
    answer:
      "The first month is typically a calibration cycle, not a finished deliverable: we're setting up access to your systems, producing a first-draft MIS report, and refining which KPIs and formats are actually useful for your specific decisions versus a generic template. Formats and KPIs are then refined over the next few cycles as it becomes clear which numbers you actually act on.",
  },
  {
    question: "Can a virtual CFO support a foreign-owned Indian subsidiary?",
    answer:
      "Yes. For a foreign-owned subsidiary, the virtual CFO role centres on reporting to the parent: monthly group packs in the parent's format with IFRS or US GAAP adjustments, quarterly board papers, intercompany reconciliations and monitoring of the transfer pricing markup. It sits alongside the Indian statutory calendar of ROC, FEMA, GST, TDS and income tax filings, which we can also handle under our subsidiary compliance retainer.",
  },
  {
    question: "Can you also be our statutory auditor?",
    answer:
      "No, not for the same company. The Companies Act restricts an auditor from providing certain services, such as accounting and outsourced financial services, to the company it audits. If you need a statutory audit, it is done by an independent auditor appointed by your shareholders, and we work with that auditor on schedules and queries.",
  },
  {
    question: "Do you support manufacturers outside Chennai, such as in Coimbatore?",
    answer:
      "Yes, online. We serve Coimbatore and the rest of Tamil Nadu from our only office in Anna Nagar, Chennai, using video calls, shared folders and a monthly review meeting. Manufacturers typically need costing by product or plant, stock reporting and bank-limit data. We do not have an office in Coimbatore.",
  },
  {
    question: "How is the fee for a virtual CFO decided?",
    answer:
      "The fee is agreed in a written engagement letter after a scoping call, based on the reporting you need, how often we review it and how many entities are involved. We do not publish price lists, in line with the rules for chartered accountants. Third-party costs, such as software, are shown separately and at actual.",
  },
  {
    question: "Does a Virtual CFO engagement look different for a manufacturer and a newer services company?",
    answer:
      "Yes, considerably. For an established manufacturer, the work usually centres on working capital: inventory financing, receivables from large buyers who pay on extended terms, and cost tracking by product line as input costs shift, protecting margin in a business that already has revenue. For a newer corporate office or services company, it usually starts with getting basic monthly MIS on revenue, margin and cash in place before moving to budgets and forecasts. Areas with both profiles, such as Guindy's industrial estate and its newer offices, show why the scope should be set after an assessment rather than from a generic template.",
  },
];

export default function VirtualCfoPage() {
  return (
    <>
      <JsonLd
        data={moneyPageGraph({
          path: PATH,
          name: TITLE,
          description: DESCRIPTION,
          dateModified: PAGE_DATES[PATH],
          service: {
            name: "Virtual CFO in Chennai",
            serviceType: "Virtual CFO and Fractional CFO Services",
            description:
              "CA-led outsourced and fractional CFO services for Chennai startups, SMEs and foreign-owned subsidiaries: monthly MIS, cash-flow forecasting, budgeting, fundraising support and board reporting.",
            offers: [
              "Monthly MIS reporting",
              "13-week rolling cash-flow forecasting",
              "Budgeting and variance analysis",
              "Fundraising models and investor due diligence",
              "Board and investor reporting",
              "Group reporting for foreign-owned subsidiaries",
            ],
          },
          faqs: FAQS,
          crumbs: [{ name: "Virtual CFO in Chennai", href: PATH }],
          howTo: {
            name: "How a Virtual CFO engagement works",
            description: "The stages a Virtual CFO engagement typically moves through, from initial assessment to ongoing monthly reporting.",
            steps: ENGAGEMENT_STEPS,
          },
          speakable: ["#lead-answer", "#direct-answer"],
        })}
      />
      <Breadcrumbs items={[{ name: "Virtual CFO in Chennai", href: PATH }]} schema={false} />
      <PageHero
        reviewedPath={PATH}
        schema={false}
        eyebrow="Virtual & Fractional CFO · Chennai"
        h1="Virtual CFO in Chennai — Outsourced & Fractional CFO Services"
        lead={
          <>
            Looking for a <strong>Virtual CFO in Chennai</strong>? C S Rushil &amp; Co. is an Anna Nagar-based{" "}
            <strong>chartered accountancy firm</strong> providing fractional CFO services, including monthly MIS
            reporting, 13-week cash-flow forecasting, fundraising models and FEMA and ROC compliance, for Chennai
            startups, SMEs and foreign-owned subsidiaries.
          </>
        }
        subhead="Senior financial leadership on a part-time, scheduled basis, for growing businesses that aren't ready for a full-time CFO."
      />

      <section className="bg-paper py-16">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl text-obsidian">What does a virtual CFO do for a Chennai business?</h2>
              <p id="direct-answer" className="mt-4 leading-relaxed text-slate">
                A Virtual CFO provides senior financial leadership — budgeting, cash
                flow management, MIS reporting, and investor-facing financial
                strategy — on a fractional, outsourced basis rather than as a
                full-time hire. It&apos;s built for startups and growing SMEs in
                Chennai that have outgrown founder-run spreadsheets but aren&apos;t
                yet at the scale that calls for an in-house CFO. The
                role is forward-looking by design: where your accountant tells you
                what happened last month, a Virtual CFO uses that same data to help
                you decide what to do next month.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">What are fractional CFO services in Chennai?</h2>
              <p className="mt-4 leading-relaxed text-slate">
                A fractional CFO is a senior finance lead who works with your
                business part-time — a defined number of hours or days a month —
                instead of as a full-time employee. Our fractional CFO services
                in Chennai suit funded startups preparing for their next round,
                family-run SMEs moving to professional financial reporting, and
                companies that need CFO-level judgment on pricing, cash flow or
                a bank facility without a full-time hire.
              </p>
              <p className="mt-4 leading-relaxed text-slate">
                The engagement is led by CA Rushil C S from our Anna Nagar
                office, with monthly review meetings in person or online. Clients
                across Anna Nagar, Mogappair, Ambattur, OMR and Guindy use the
                same fractional model: a monthly MIS and cash-flow cycle as the
                base, with extra time scoped in for fundraising, board meetings
                or annual budgeting.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">When has a Chennai business outgrown basic bookkeeping?</h2>
              <p className="mt-4 leading-relaxed text-slate">
                The trigger for Virtual CFO support is rarely a specific revenue
                number — it&apos;s usually a recurring pattern: cash flow surprises
                despite apparently healthy revenue, pricing decisions made on gut
                feel because nobody has actually run the margin numbers by product
                line, a board or investor asking for reporting your current setup
                can&apos;t produce, or a founder spending hours each month
                reconciling numbers instead of running the business. In
                established mid-sized companies, the clearest sign is management
                meetings that keep returning to the same unanswered question about
                margins, cash or one business line, with nobody owning the answer.
                If more than
                one of these sounds familiar, that&apos;s the actual signal — not a
                specific headcount or turnover threshold. See our full breakdown in{" "}
                <Link href="/bookkeeping-services-chennai" className="text-royal-violet underline">
                  bookkeeping services in Chennai
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">What does our virtual CFO service cover?</h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {SCOPE.map((s) => (
                  <div key={s.name} className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
                    <h3 className="font-medium text-obsidian">{s.name}</h3>
                    <p className="mt-2 text-sm text-slate">{s.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate">
                For a closer look at what actually shows up in a monthly review, see{" "}
                <Link href="/blog/what-virtual-cfo-reviews-monthly" className="text-royal-violet underline">
                  What a Virtual CFO Actually Reviews Every Month
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">What does a virtual CFO deliver at each stage of a business?</h2>
              <p className="mt-4 leading-relaxed text-slate">
                The deliverables change with the stage of the business: runway and investor reporting for startups,
                working capital and costing for SMEs, and group reporting for subsidiaries.
              </p>
              <div className="mt-4 overflow-x-auto rounded-cards border border-ash">
                <table className="w-full min-w-[640px] border-collapse text-sm">
                  <caption className="sr-only">Virtual CFO deliverables by business stage</caption>
                  <thead>
                    <tr className="bg-fog text-left">
                      <th className="p-4 font-medium text-obsidian">Stage</th>
                      <th className="p-4 font-medium text-obsidian">Typical client</th>
                      <th className="p-4 font-medium text-obsidian">What the virtual CFO delivers</th>
                    </tr>
                  </thead>
                  <tbody className="bg-paper">
                    {STAGE_MATRIX.map((row) => (
                      <tr key={row.stage} className="border-t border-ash align-top">
                        <td className="p-4 font-medium text-obsidian">{row.stage}</td>
                        <td className="p-4 text-slate">{row.who}</td>
                        <td className="p-4 text-slate">
                          <ul className="list-disc space-y-1 pl-4">
                            {row.deliverables.map((d) => (
                              <li key={d}>{d}</li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-slate">
                Startup engagements in the IT corridor are covered in more depth in{" "}
                <Link href="/blog/virtual-cfo-omr-startups" className="text-royal-violet underline">
                  virtual CFO for OMR startups
                </Link>
                , and subsidiary work in our{" "}
                <Link href="/india-subsidiary-compliance-cfo" className="text-royal-violet underline">
                  India subsidiary compliance and CFO retainer
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">What happens in the first 90 days with a virtual CFO?</h2>
              <p className="mt-4 leading-relaxed text-slate">
                The first 90 days move from cleaning the books, to a first reporting cycle, to a monthly cadence the
                business can rely on. This is a sample roadmap; the actual plan is set after the initial assessment.
              </p>
              <ol className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                {ROADMAP.map((r) => (
                  <li key={r.phase} className="rounded-cards border border-carbon bg-paper p-6">
                    <p className="sticker-tag bg-mint-pop">{r.phase}</p>
                    <h3 className="mt-3 font-medium text-obsidian">{r.focus}</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate">
                      {r.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">Which finance and ERP tools does our virtual CFO team work in?</h2>
              <p className="mt-4 leading-relaxed text-slate">
                We work in the systems you already use; a virtual CFO engagement does not need new software.
              </p>
              <dl className="mt-4 divide-y divide-ash overflow-hidden rounded-cards border border-ash bg-paper">
                {TECH_STACK.map(([area, tools]) => (
                  <div key={area} className="grid grid-cols-1 gap-1 px-5 py-3 sm:grid-cols-[200px_1fr] sm:gap-4">
                    <dt className="text-sm font-medium text-obsidian">{area}</dt>
                    <dd className="text-sm text-slate">{tools}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">How does a virtual CFO engagement work?</h2>
              <ol className="mt-4 space-y-4">
                {ENGAGEMENT_STEPS.map((step, i) => (
                  <li key={step.name} className="flex gap-4 rounded-cards border border-ash bg-paper p-6 shadow-[var(--shadow-card)]">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-royal-violet text-sm font-medium text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-medium text-obsidian">{step.name}</p>
                      <p className="mt-1 text-sm text-slate">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <HighTicketSections audiences={AUDIENCES} notIncluded={NOT_INCLUDED} />
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">How is a virtual CFO different from a bookkeeper or full-time CFO?</h2>
              <p className="mt-4 leading-relaxed text-slate">
                These three roles get confused often enough that it&apos;s worth
                being explicit about where each one&apos;s scope actually starts and
                stops:
              </p>
              <div className="mt-4 overflow-x-auto rounded-cards border border-ash">
                <table className="w-full min-w-[640px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-fog text-left">
                      <th className="p-4 font-medium text-obsidian">Role</th>
                      <th className="p-4 font-medium text-obsidian">Focus</th>
                      <th className="p-4 font-medium text-obsidian">Scope of involvement</th>
                      <th className="p-4 font-medium text-obsidian">When it fits</th>
                    </tr>
                  </thead>
                  <tbody className="bg-paper">
                    {COMPARISON.map((row) => (
                      <tr key={row.role} className="border-t border-ash">
                        <td className="p-4 font-medium text-obsidian">{row.role}</td>
                        <td className="p-4 text-slate">{row.focus}</td>
                        <td className="p-4 text-slate">{row.scope}</td>
                        <td className="p-4 text-slate">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">How does a virtual CFO support foreign-owned subsidiaries and investor-backed startups?</h2>
              <p className="mt-4 leading-relaxed text-slate">
                A foreign-owned Indian subsidiary, or a startup that has taken
                outside investment, answers to someone beyond the founder: a
                parent company&apos;s group finance team, a board with foreign
                directors, or investors with reporting rights. The virtual CFO
                role then shifts from internal decision support to producing
                numbers others will rely on, on their timetable and in their
                format.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {SUBSIDIARY_SCOPE.map((s) => (
                  <div key={s.name} className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
                    <h3 className="font-medium text-obsidian">{s.name}</h3>
                    <p className="mt-2 text-sm text-slate">{s.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-slate">
                For subsidiaries, this usually runs alongside the Indian
                statutory calendar covered by our{" "}
                <Link href="/india-subsidiary-compliance-cfo" className="text-royal-violet underline">
                  India subsidiary compliance and CFO retainer
                </Link>
                , and intercompany pricing is documented through a{" "}
                <Link href="/transfer-pricing-audit" className="text-royal-violet underline">
                  transfer pricing audit and Form 3CEB report
                </Link>
                . FEMA filings are covered on our{" "}
                <Link href="/fema-rbi-compliance" className="text-royal-violet underline">
                  FEMA and RBI compliance
                </Link>{" "}
                page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">What does a typical virtual CFO engagement for an early-stage startup look like?</h2>
              <p className="mt-4 leading-relaxed text-slate">
                A typical early-stage engagement is a Chennai startup preparing
                for its first institutional raise. The scope usually covers a
                financial plan and runway model, a monthly cycle of books, MIS and
                cash position, a compliance calendar for ROC, GST and TDS filings,
                and preparing historical financials and records for investor
                diligence. The founder keeps decisions on spending and hiring; the
                virtual CFO supplies the numbers and the analysis behind them, on a
                monthly review call.
              </p>
              <p className="mt-4 text-sm text-slate">
                Engagements are led by{" "}
                <a href="https://www.linkedin.com/in/rushil-cs" target="_blank" rel="noopener noreferrer" className="text-royal-violet underline">
                  CA Rushil C S
                </a>
                , with{" "}
                <a href="https://www.linkedin.com/in/ajay-m-578a21232" target="_blank" rel="noopener noreferrer" className="text-royal-violet underline">
                  Ajay M
                </a>
                ,{" "}
                <a href="https://www.linkedin.com/in/omairxkhan" target="_blank" rel="noopener noreferrer" className="text-royal-violet underline">
                  Omair Khan
                </a>
                ,{" "}
                <a href="https://www.linkedin.com/in/monica-suresh-62a55b2b5" target="_blank" rel="noopener noreferrer" className="text-royal-violet underline">
                  Monica Suresh
                </a>
                , and{" "}
                <a href="https://www.linkedin.com/in/darsan-kanna-v-684208253" target="_blank" rel="noopener noreferrer" className="text-royal-violet underline">
                  Darshan Kanna
                </a>{" "}
                from our team. Follow{" "}
                <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="text-royal-violet underline">
                  C S Rushil &amp; Co. on LinkedIn
                </a>
                .
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit space-y-6">
            <div className="rounded-cards border border-carbon bg-royal-violet p-8">
              <h3 className="text-lg font-medium text-white">Not sure if you need this yet?</h3>
              <p className="mt-2 text-sm text-white">
                We&apos;ll assess your current reporting and tell you honestly
                whether a Virtual CFO engagement — or just tighter bookkeeping —
                is the right next step.
              </p>
              <TrackedAnchor
                action="book"
                placement="vcfo-sidebar"
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block w-full rounded-buttons bg-white px-5 py-3 text-center text-sm font-medium text-obsidian hover:bg-lilac-mist"
              >
                Book a 15-Minute Consultation
              </TrackedAnchor>
            </div>
            <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
              <h3 className="eyebrow text-xs text-slate">Related services</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link href="/audit-and-assurance" className="text-royal-violet hover:underline">Audit &amp; Assurance</Link></li>
                <li><Link href="/management-consultancy" className="text-royal-violet hover:underline">Management Consultancy</Link></li>
                <li><Link href="/direct-tax" className="text-royal-violet hover:underline">Direct Tax</Link></li>
                <li><Link href="/india-subsidiary-compliance-cfo" className="text-royal-violet hover:underline">India Subsidiary Compliance &amp; CFO</Link></li>
                <li><Link href="/transfer-pricing-audit" className="text-royal-violet hover:underline">Transfer Pricing Audit</Link></li>
              </ul>
            </div>
            <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
              <h3 className="eyebrow text-xs text-slate">By area</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link href="/blog/virtual-cfo-omr-startups" className="text-royal-violet hover:underline">Virtual CFO for OMR startups</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <SiloLinks path={PATH} />

      <section className="bg-paper pb-12">
        <div className="container-page">
          <ICAIVerificationTrustBar />
        </div>
      </section>
      <TamilSummaryBox path="/virtual-cfo-services" />
      <FAQSection items={FAQS} schema={false} />

      <section className="bg-paper py-12">
        <div className="container-page">
          <h2 className="text-xl text-obsidian">People also ask</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/audit-and-assurance" className="text-sm font-medium text-royal-violet underline underline-offset-2">
                Does a Virtual CFO also handle our statutory audit?
              </Link>
            </li>
            <li>
              <Link href="/management-consultancy" className="text-sm font-medium text-royal-violet underline underline-offset-2">
                How is this different from management consultancy?
              </Link>
            </li>
            <li>
              <Link href="/direct-tax" className="text-sm font-medium text-royal-violet underline underline-offset-2">
                Can a Virtual CFO help with tax planning too?
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <CTASection
        service="Virtual CFO Services"
        title="Ready for CFO-level financial clarity?"
        subtitle="Talk to us about what a Virtual CFO engagement would actually look like for your business."
      />
    </>
  );
}
