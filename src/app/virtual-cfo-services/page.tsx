import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { JsonLd, howToSchema, serviceSchema, speakableSchema } from "@/lib/schema";
import { SITE_URL, SOCIALS } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/virtual-cfo-services`;

export const metadata: Metadata = {
  title: { absolute: "Virtual CFO Services in Chennai for Startups & SMEs" },
  description:
    "Outsourced financial leadership for Chennai startups and SMEs — MIS reporting, budgeting, and fundraising support without a full-time CFO.",
  alternates: { canonical: "/virtual-cfo-services" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Virtual CFO Services in Chennai",
    description: "Outsourced CFO-level financial leadership for growing Chennai businesses.",
    url: "/virtual-cfo-services",
  },
};

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
  { role: "Bookkeeper / Accountant", focus: "Historical record-keeping, compliance filing", cost: "Lowest", bestFor: "Businesses needing accurate books and statutory filing, nothing forward-looking" },
  { role: "Virtual CFO", focus: "Forward-looking: budgeting, fundraising, pricing, board reporting", cost: "Fraction of a full-time hire", bestFor: "Startups and SMEs that need senior financial judgment but not daily, full-time presence" },
  { role: "Full-Time CFO", focus: "Everything a Virtual CFO does, plus daily operational involvement and team management", cost: "Highest — senior full-time salary + benefits", bestFor: "Businesses at a scale where financial complexity needs daily, in-house leadership" },
];

const FAQS = [
  {
    question: "Who actually needs a Virtual CFO?",
    answer:
      "Startups past seed funding managing investor reporting for the first time, and SMEs scaling revenue to a point where the founder can no longer track cash flow, margins, and budgets in their head or a spreadsheet, benefit most. If you're making pricing, hiring, or fundraising decisions without confidence in the underlying numbers, that's usually the actual trigger — not a specific revenue threshold. A Virtual CFO gives you senior financial judgment at a fraction of what a full-time hire costs, which is why it's the common bridge stage between founder-run finances and an in-house finance team.",
  },
  {
    question: "How is a Virtual CFO different from my current accountant?",
    answer:
      "An accountant (or bookkeeper) records what already happened — transactions, statutory filings, compliance. A Virtual CFO uses that same data to answer forward-looking questions: what happens to cash flow if we hire three more people, is this new pricing model actually more profitable, what does an investor need to see before writing a term sheet. Many clients keep their existing accountant for day-to-day bookkeeping and compliance, and add Virtual CFO support specifically for the decisions the accountant's scope was never meant to cover.",
  },
  {
    question: "How many hours per month does a Virtual CFO engagement actually involve?",
    answer:
      "This varies by business complexity and what's in scope — a straightforward monthly MIS-and-cash-flow engagement might run a few hours a week, while active fundraising support or a board reporting cycle can mean several days in a given month. We scope this explicitly during the initial financial health assessment rather than quoting a generic number, since the honest answer depends entirely on your transaction volume, reporting needs, and whether you're mid-raise.",
  },
  {
    question: "Can a Virtual CFO actually help close a funding round?",
    answer:
      "Yes, within its real scope: preparing the financial model investors will scrutinise, cleaning up historical financials so due diligence doesn't surface avoidable red flags, and structuring investor reporting once the round is live. A Virtual CFO doesn't source investors or negotiate term sheets — that's a fundraising advisor's or the founder's job — but a founder walking into investor meetings with clean, defensible numbers consistently has an easier process than one improvising financials under pressure.",
  },
  {
    question: "Do I need to switch accounting software or change how we currently do bookkeeping?",
    answer:
      "Usually no — a Virtual CFO engagement works from whatever accounting software and processes you already have, connecting to existing bank feeds and ledgers rather than requiring a parallel system. If your current setup genuinely can't support the reporting you need (for example, no cost-centre tracking when you need margin analysis by product line), we'll flag that specifically rather than assume a wholesale system change is required.",
  },
  {
    question: "What happens in the first month of an engagement?",
    answer:
      "The first month is typically a calibration cycle, not a finished deliverable: we're setting up access to your systems, producing a first-draft MIS report, and refining which KPIs and formats are actually useful for your specific decisions versus a generic template. Most clients see the reporting sharpen noticeably by month two or three once we understand which numbers you actually act on.",
  },
];

export default function VirtualCfoPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Virtual CFO Services in Chennai",
          description:
            "Outsourced financial leadership for Chennai startups and SMEs — MIS reporting, budgeting, fundraising support, and board-ready financials.",
          url: PAGE_URL,
          serviceType: "Financial Advisory",
        })}
      />
      <JsonLd
        data={howToSchema({
          name: "How a Virtual CFO engagement works",
          description: "The stages a Virtual CFO engagement typically moves through, from initial assessment to ongoing monthly reporting.",
          steps: ENGAGEMENT_STEPS,
        })}
      />
      <JsonLd data={speakableSchema(["#direct-answer"])} />
      <Breadcrumbs items={[{ name: "Virtual CFO Services", href: "/virtual-cfo-services" }]} />
      <PageHero
        eyebrow="Virtual CFO · Chennai"
        h1="Virtual CFO Services in Chennai"
        subhead="Outsourced financial leadership — MIS, budgeting, fundraising support, and board-ready reporting — for growing businesses that aren't ready for a full-time CFO."
      />

      <section className="bg-paper py-16">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl text-obsidian">What is a Virtual CFO?</h2>
              <p id="direct-answer" className="mt-4 leading-relaxed text-slate">
                A Virtual CFO provides senior financial leadership — budgeting, cash
                flow management, MIS reporting, and investor-facing financial
                strategy — on a fractional, outsourced basis rather than as a
                full-time hire. It&apos;s built for startups and growing SMEs in
                Chennai that have outgrown founder-run spreadsheets but aren&apos;t
                yet at the scale (or budget) that justifies an in-house CFO. The
                role is forward-looking by design: where your accountant tells you
                what happened last month, a Virtual CFO uses that same data to help
                you decide what to do next month.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">Signs you&apos;ve outgrown basic bookkeeping</h2>
              <p className="mt-4 leading-relaxed text-slate">
                The trigger for Virtual CFO support is rarely a specific revenue
                number — it&apos;s usually a recurring pattern: cash flow surprises
                despite apparently healthy revenue, pricing decisions made on gut
                feel because nobody has actually run the margin numbers by product
                line, a board or investor asking for reporting your current setup
                can&apos;t produce, or a founder spending hours each month
                reconciling numbers instead of running the business. If more than
                one of these sounds familiar, that&apos;s the actual signal — not a
                specific headcount or turnover threshold. See our full breakdown in{" "}
                <Link href="/blog/outgrown-bookkeeping-signs" className="text-royal-violet underline">
                  Signs Your Chennai Business Has Outgrown Basic Bookkeeping
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">What our Virtual CFO service covers</h2>
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
              <h2 className="text-2xl text-obsidian">How an engagement actually works</h2>
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
              <h2 className="text-2xl text-obsidian">Bookkeeper vs. Virtual CFO vs. Full-Time CFO</h2>
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
                      <th className="p-4 font-medium text-obsidian">Relative Cost</th>
                      <th className="p-4 font-medium text-obsidian">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="bg-paper">
                    {COMPARISON.map((row) => (
                      <tr key={row.role} className="border-t border-ash">
                        <td className="p-4 font-medium text-obsidian">{row.role}</td>
                        <td className="p-4 text-slate">{row.focus}</td>
                        <td className="p-4 text-slate">{row.cost}</td>
                        <td className="p-4 text-slate">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-slate">
                For the actual cost math between a Virtual CFO engagement and a
                full-time hire, see{" "}
                <Link href="/blog/virtual-cfo-vs-full-time-cfo-cost-comparison" className="text-royal-violet underline">
                  Virtual CFO vs. Hiring a Full-Time CFO: A Cost Comparison for Chennai SMEs
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">Case study: ArivuLabs</h2>
              <p className="mt-4 leading-relaxed text-slate">
                In September 2026, ArivuLabs — a Chennai-based startup building
                accent-native voice AI and preparing for a pre-seed raise —
                publicly announced C S Rushil &amp; Co. as their Virtual CFO,
                covering financial planning, runway management, and compliance
                as they scale.{" "}
                <a
                  href="https://lnkd.in/p/gz7AC2bK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-royal-violet underline underline-offset-2"
                >
                  Read ArivuLabs&apos; announcement on LinkedIn
                </a>
                .
              </p>
              <p className="mt-4 text-sm text-slate">
                Engagement led by{" "}
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
            <div className="rounded-cards bg-royal-violet p-8">
              <h3 className="text-lg font-medium text-white">Not sure if you need this yet?</h3>
              <p className="mt-2 text-sm text-white/80">
                We&apos;ll assess your current reporting and tell you honestly
                whether a Virtual CFO engagement — or just tighter bookkeeping —
                is the right next step.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-block w-full rounded-buttons bg-white px-5 py-3 text-center text-sm font-medium text-obsidian hover:bg-lilac-mist"
              >
                Book Free Consultation
              </Link>
            </div>
            <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
              <h3 className="eyebrow text-xs text-slate">Related services</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link href="/audit-and-assurance" className="text-royal-violet hover:underline">Audit &amp; Assurance</Link></li>
                <li><Link href="/management-consultancy" className="text-royal-violet hover:underline">Management Consultancy</Link></li>
                <li><Link href="/direct-tax" className="text-royal-violet hover:underline">Direct Tax</Link></li>
              </ul>
            </div>
            <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
              <h3 className="eyebrow text-xs text-slate">By area</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link href="/blog/virtual-cfo-omr-startups" className="text-royal-violet hover:underline">Virtual CFO for OMR startups</Link></li>
                <li><Link href="/blog/virtual-cfo-vs-accountant-nungambakkam" className="text-royal-violet hover:underline">Virtual CFO vs. accountant — Nungambakkam</Link></li>
                <li><Link href="/blog/virtual-cfo-guindy-corporate-offices" className="text-royal-violet hover:underline">Virtual CFO for Guindy offices</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <FAQSection items={FAQS} />

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
        title="Ready for CFO-level financial clarity?"
        subtitle="Talk to us about what a Virtual CFO engagement would actually look like for your business."
      />
    </>
  );
}
