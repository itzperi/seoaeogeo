import Link from "next/link";
import { COST_DRIVERS, type BookkeepingMarket } from "@/lib/bookkeeping-markets";

const th = "px-4 py-3 font-medium";
const tdHead = "px-4 py-3 align-top font-medium text-obsidian";
const td = "px-4 py-3 align-top text-slate";
const linkClass = "font-medium text-royal-violet underline underline-offset-2";

// Country-specific sections for /outsourced-bookkeeping-<market> pages:
// who prepares and who files, local rules, overlapping hours, data handling
// and what sizes the engagement. Rendered as ServicePageTemplate children.
export default function BookkeepingMarketSections({ market }: { market: BookkeepingMarket }) {
  return (
    <>
      <h2 className="mt-14 text-2xl text-obsidian">What do we prepare, and who files in the {market.name}?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        We keep the books and prepare the figures. Anything lodged with the {market.authority} is filed by you or by your
        locally registered adviser, so professional responsibility for {market.name} filings stays where local law puts it.
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className={th}>Work</th>
              <th className={th}>What we do</th>
              <th className={th}>Who files or signs</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {market.handoffs.map((h) => (
              <tr key={h.work}>
                <td className={tdHead}>{h.work}</td>
                <td className={td}>{h.we}</td>
                <td className={td}>{h.files}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">Which {market.name} rules shape how the books are kept?</h2>
      <dl className="mt-6 max-w-3xl divide-y divide-ash overflow-hidden rounded-cards border border-ash bg-paper">
        {market.rules.map((r) => (
          <div key={r.rule} className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[200px_1fr] sm:gap-4">
            <dt className="text-sm font-medium text-obsidian">{r.rule}</dt>
            <dd className="text-sm text-slate">
              {r.detail}{" "}
              <a href={r.source.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {r.source.label}
              </a>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 max-w-2xl text-xs text-slate">
        Thresholds and dates are as published by the authority at the time of writing and change from year to year; check
        the linked source before relying on them.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">{market.hours.heading}</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">{market.hours.note}</p>
      <div className="mt-6 max-w-3xl overflow-x-auto rounded-cards border border-ash">
        <table className="w-full text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className={th}>India (IST)</th>
              {market.hours.cols.map((c) => (
                <th key={c} className={th}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {market.hours.rows.map((r) => (
              <tr key={r.india}>
                <td className={tdHead}>{r.india}</td>
                {r.cols.map((c, i) => (
                  <td key={i} className={td}>
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 max-w-2xl text-xs text-slate">
        The Chennai office works Monday to Saturday, 9:30 am to 6:30 pm IST. Working hours for your engagement are agreed in
        the engagement letter.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How is your data handled when the books are kept from India?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        {market.data.text} These are contractual and access safeguards; this page does not claim a third-party security
        certification.{" "}
        <a href={market.data.source.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {market.data.source.label}
        </a>
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What decides the cost of outsourced bookkeeping?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        We do not publish price lists. The scope is quoted in writing after a first look at your books, based on these
        factors.
      </p>
      <dl className="mt-6 max-w-3xl divide-y divide-ash overflow-hidden rounded-cards border border-ash bg-paper">
        {COST_DRIVERS.map((c) => (
          <div key={c.driver} className="grid grid-cols-1 gap-1 px-5 py-3 sm:grid-cols-[220px_1fr] sm:gap-4">
            <dt className="text-sm font-medium text-obsidian">{c.driver}</dt>
            <dd className="text-sm text-slate">{c.why}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 max-w-2xl text-sm text-slate">
        Serving more than one country? See{" "}
        <Link href="/outsourced-bookkeeping-services" className={linkClass}>
          outsourced bookkeeping by country
        </Link>
        .
      </p>
    </>
  );
}
