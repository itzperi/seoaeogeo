import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { BOOKKEEPING_MARKETS, COST_DRIVERS } from "@/lib/bookkeeping-markets";
import { SITE_URL } from "@/lib/site";

const PATH = "/outsourced-bookkeeping-services";

export const metadata: Metadata = {
  title: { absolute: "Outsourced Bookkeeping Services from India | US, UK, SG, AU, UAE" },
  description:
    "Outsourced bookkeeping from a Chartered Accountancy firm in Chennai for businesses in the US, UK, Singapore, Australia, the UAE and India: how it works, who files what, and what it costs to run.",
  alternates: { canonical: PATH },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Outsourced Bookkeeping Services from India",
    description:
      "Monthly bookkeeping, catch-up work and year-end books for US, UK, Singapore, Australian, UAE and Indian businesses, kept by a CA firm in Chennai.",
    url: PATH,
  },
};

const th = "px-4 py-3 font-medium";
const tdHead = "px-4 py-3 align-top font-medium text-obsidian";
const td = "px-4 py-3 align-top text-slate";
const linkClass = "font-medium text-royal-violet underline underline-offset-2";

const OFFSHORE_VS_INHOUSE = [
  { point: "Who does the work", offshore: "A named team in Chennai, supervised by a Chartered Accountant", inhouse: "One employee, or the owner" },
  { point: "Cover for leave and turnover", offshore: "Built into the team", inhouse: "Books stop when the person is away or leaves" },
  { point: "Where the books live", offshore: "Your own cloud software, under your subscription", inhouse: "Your own software" },
  { point: "Review", offshore: "Second-person review before a month is closed", inhouse: "Usually none until the year-end accountant looks" },
  { point: "Local filings", offshore: "You or your local adviser file; we prepare figures", inhouse: "Depends on the employee's training" },
  { point: "Time zone", offshore: "Overlap varies by country; see each country page", inhouse: "Same hours as you" },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${PATH}`}
      serviceType="Outsourced Bookkeeping"
      crumbLabel="Outsourced Bookkeeping"
      crumbHref={PATH}
      eyebrow="Bookkeeping · US, UK, Singapore, Australia, UAE & India"
      h1="Outsourced Bookkeeping Services from India"
      subhead="Monthly bookkeeping, catch-up clean-ups and year-end books for businesses in the United States, the United Kingdom, Singapore, Australia, the UAE and India, kept by a Chartered Accountancy firm in Anna Nagar, Chennai, in the software you already use."
      introHeading="What is outsourced bookkeeping?"
      intro="Outsourced bookkeeping means an outside firm records and reconciles your business transactions every month instead of an employee doing it in-house. Our team works inside your own QuickBooks, Xero, MYOB, Zoho Books or Tally file, reconciles every bank and card account, closes each month by an agreed date and sends you reports and questions. In India we also file GST, TDS and ROC returns. In other countries we prepare the figures, and you or your locally registered accountant or tax agent file them."
      citation={{ label: "ICAI — Accounting Standards", href: "https://www.icai.org/post/accounting-standards" }}
      keyFacts={[
        { label: "Countries served", value: "United States, United Kingdom, Singapore, Australia and the UAE remotely; Chennai and the rest of India directly." },
        { label: "Software", value: "QuickBooks Online, Xero, MYOB, FreeAgent, Sage, Zoho Books, Tally Prime and Odoo, under your own subscription." },
        { label: "Who files outside India", value: "You or your local CPA, accountant, BAS or tax agent. We do not file with the IRS, HMRC, IRAS, the ATO or the UAE FTA." },
        { label: "Who files in India", value: "We do: GST, TDS, ROC and income tax returns, as a Chartered Accountancy firm." },
        { label: "Office", value: "One office, in Anna Nagar, Chennai. Every overseas client is served online." },
      ]}
      subServicesHeading="Where are you based?"
      subServices={[
        { name: "United States", text: "QuickBooks Online and Xero bookkeeping, catch-up work, 1099 tracking and a year-end package for your CPA." },
        { name: "United Kingdom", text: "Xero, QuickBooks and FreeAgent bookkeeping, VAT figures and Making Tax Digital for Income Tax records." },
        { name: "Singapore", text: "Xero and QuickBooks bookkeeping, GST F5 figures and SFRS year-end books for your tax agent and corporate secretary." },
        { name: "Australia", text: "Xero and MYOB bookkeeping, payroll and super reconciliations, with BAS lodged by your registered agent." },
        { name: "UAE (Dubai, Abu Dhabi, free zones)", text: "IFRS bookkeeping, VAT figures, Corporate Tax-ready books and e-invoicing readiness." },
        { name: "Chennai and India", text: "Tally Prime and Zoho Books bookkeeping, GST and TDS filing, payroll and MIS, with walk-in meetings in Anna Nagar." },
      ]}
      howTo={{
        heading: "How does outsourced bookkeeping start?",
        steps: [
          { name: "Free consultation", text: "A 15-minute call at a time that suits your time zone, about your business, your software and where the books stand." },
          { name: "Review of your books", text: "With read access to your accounting file we check the last closed month, unreconciled items and any backlog." },
          { name: "Written engagement letter", text: "Scope, monthly close date, what you send us, who files what in your country, confidentiality terms and a fixed fee." },
          { name: "Access and document flow", text: "You invite us into your software and agree how bills, receipts and statements reach us." },
          { name: "Catch-up, then monthly close", text: "Any backlog is cleared first; after that each month closes on schedule with a short report and a list of questions." },
        ],
      }}
      faqs={[
        { question: "How does offshore bookkeeping work day to day?", answer: "You keep using your own accounting software and add our team as users. Bank feeds flow in automatically, and you forward bills and receipts through an app such as Dext or a shared folder. We categorise and reconcile transactions during the Indian working day, list anything we cannot identify, and close the month by an agreed date with a profit and loss, balance sheet and open questions." },
        { question: "Is it safe to outsource bookkeeping to India?", answer: "It can be, when access is controlled. We work inside your own software under named logins you can remove at any time, sign confidentiality and data protection terms that match your country's rules, use bank feeds rather than banking passwords, and keep the books in your subscription so nothing is held only by us. We do not claim third-party security certifications we do not have." },
        { question: "Will you file my taxes in the US, UK, Singapore, Australia or the UAE?", answer: "No. Outside India we keep the books and prepare the figures, and you or your locally registered professional file: your CPA or Enrolled Agent in the US, you or your agent with HMRC in the UK, your tax agent and corporate secretary in Singapore, your registered BAS or tax agent in Australia, and your FTA-registered tax agent in the UAE. In India, we file directly." },
        { question: "Do I still need a local accountant?", answer: "Usually yes, for tax returns, statutory accounts and advice under your own country's law. What changes is what they receive: closed, reconciled books instead of months of catch-up, which usually means less of their time goes on fixing records at year end." },
        { question: "What does outsourced bookkeeping cost?", answer: "We do not publish price lists, because the work varies widely. The fee depends on monthly transaction volume, the number of bank, card and payment accounts, currencies, inventory, payroll, any backlog and how quickly you need the month closed. After a short review of your books we quote a fixed fee in writing, with catch-up work quoted separately." },
        { question: "Can you fix books that are months or years behind?", answer: "Yes. Catch-up bookkeeping is scoped separately from the monthly work. We reconcile each account month by month, correct miscategorised and duplicate entries, and list what needs your input, then switch to the monthly routine once the books are current. How long it takes depends on how many months are open and how complete the statements and receipts are." },
        { question: "Which accounting software do you use?", answer: "We work in QuickBooks Online, Xero, MYOB, FreeAgent, Sage, Zoho Books, Tally Prime and Odoo, under your own subscription, so the file and its history stay yours if the engagement ends. We do not claim vendor certifications or partner status. If you are still on spreadsheets, we can help you choose software and set up opening balances." },
        { question: "What happens to my data if I stop using you?", answer: "Nothing leaves with us, because the books are in your own software. When an engagement ends you remove our user access, and any working papers we hold are returned or deleted as the engagement letter sets out, subject to the record-keeping rules that apply to us as a Chartered Accountancy firm in India." },
        { question: "Will Indian GST be added to my invoice?", answer: "For overseas clients, generally not. Bookkeeping supplied from India to a client located outside India and paid in foreign currency is usually an export of services under Indian GST law, which is zero-rated. Your own country may expect you to account for VAT or GST on imported services under a reverse charge; your local adviser can confirm. Clients in India are charged GST as normal." },
        { question: "Who is C S Rushil & Co.?", answer: "A Chartered Accountancy firm founded in 2024 in Anna Nagar, Chennai, led by CA Rushil C S and regulated by the Institute of Chartered Accountants of India, with a 16-member team. It is the firm's only office. Clients outside Chennai, including every overseas client, are served online." },
      ]}
      relatedQuestions={[
        { question: "Are you a US CPA firm looking for offshore preparation support?", href: "/outsourced-accounting-for-cpa-firms" },
        { question: "Are you a UK accountancy practice looking for outsourced bookkeeping?", href: "/outsourced-accounting-for-uk-accountants" },
        { question: "Do you need a part-time finance lead as well as books?", href: "/virtual-cfo-services" },
      ]}
      relatedPosts={["is-it-safe-to-outsource-bookkeeping-to-india", "catch-up-bookkeeping-how-long-what-to-send"]}
      relatedSlugs={["bookkeeping-services-chennai", "outsourced-accounting-for-cpa-firms", "virtual-cfo-services"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">How does outsourced bookkeeping differ by country?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The bookkeeping is similar everywhere; the software, the tax authority and who is allowed to file are not. Each
        country page covers the local rules, time-zone overlap and data protection terms in full.
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className={th}>Country</th>
              <th className={th}>Common software</th>
              <th className={th}>Authority</th>
              <th className={th}>Who files</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {BOOKKEEPING_MARKETS.map((m) => (
              <tr key={m.slug}>
                <td className={tdHead}>
                  <Link href={`/${m.slug}`} className={linkClass}>
                    {m.countries[0]}
                  </Link>
                </td>
                <td className={td}>{m.software}</td>
                <td className={td}>{m.authority}</td>
                <td className={td}>{m.localFiler}</td>
              </tr>
            ))}
            <tr>
              <td className={tdHead}>
                <Link href="/bookkeeping-services-chennai" className={linkClass}>
                  India (Chennai)
                </Link>
              </td>
              <td className={td}>Tally Prime, Zoho Books, QuickBooks, Xero</td>
              <td className={td}>CBIC (GST), Income Tax Department, MCA</td>
              <td className={td}>We file GST, TDS, ROC and income tax returns directly.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">Outsourced bookkeeping or an in-house bookkeeper?</h2>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className={th}>Point</th>
              <th className={th}>Outsourced to our team</th>
              <th className={th}>In-house bookkeeper</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {OFFSHORE_VS_INHOUSE.map((r) => (
              <tr key={r.point}>
                <td className={tdHead}>{r.point}</td>
                <td className={td}>{r.offshore}</td>
                <td className={td}>{r.inhouse}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        An in-house bookkeeper suits businesses that need someone on site every day, for example to handle cash or stock.
        Outsourcing suits businesses whose transactions already flow through bank feeds and cloud software.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What decides the cost of outsourced bookkeeping?</h2>
      <dl className="mt-6 max-w-3xl divide-y divide-ash overflow-hidden rounded-cards border border-ash bg-paper">
        {COST_DRIVERS.map((c) => (
          <div key={c.driver} className="grid grid-cols-1 gap-1 px-5 py-3 sm:grid-cols-[220px_1fr] sm:gap-4">
            <dt className="text-sm font-medium text-obsidian">{c.driver}</dt>
            <dd className="text-sm text-slate">{c.why}</dd>
          </div>
        ))}
      </dl>

      <h2 className="mt-14 text-2xl text-obsidian">Who is outsourced bookkeeping not right for?</h2>
      <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-slate">
        <li>Businesses that need someone on site to count cash or stock every day.</li>
        <li>Anyone looking for a firm to file overseas tax returns; outside India we prepare, and your local adviser files.</li>
        <li>
          An Indian company that wants the same firm to keep its books and act as its statutory auditor: a Chartered
          Accountant cannot audit books they keep. See{" "}
          <Link href="/statutory-audit-chennai" className={linkClass}>
            statutory audit
          </Link>
          .
        </li>
      </ul>
    </ServicePageTemplate>
  );
}
