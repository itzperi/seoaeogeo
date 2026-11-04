"use client";

import { useState, type FormEvent } from "react";
import { WHATSAPP_LINK } from "@/lib/site";
import { track } from "@/lib/track";

const SLUG = "foreign-subsidiary-compliance-calendar";

const field = "mt-1 block min-h-[44px] w-full rounded-cards border border-ash bg-white px-3 text-base text-obsidian";
const label = "block text-sm font-medium text-obsidian";

type Country = "us" | "uk" | "uae" | "sg" | "other";

const COUNTRY_NAME: Record<Country, string> = {
  us: "the United States",
  uk: "the United Kingdom",
  uae: "the UAE",
  sg: "Singapore",
  other: "another country",
};

const COUNTRY_NOTE: Record<Country, string> = {
  us: "Documents signed in the US by the parent and its directors are notarised and then apostilled by the relevant Secretary of State before they are used in India.",
  uk: "Documents signed in the UK are notarised where needed and apostilled by the Foreign, Commonwealth & Development Office (FCDO) before they are used in India.",
  sg: "Documents signed in Singapore are notarised and apostilled through the Singapore Academy of Law before they are used in India.",
  uae: "The UAE is not a party to the Apostille Convention, so documents are attested by the UAE Ministry of Foreign Affairs and then by the Indian Embassy or Consulate instead of being apostilled.",
  other:
    "Documents signed abroad are generally apostilled where the country is a party to the Apostille Convention, or attested through the Indian Embassy or Consulate where it is not. A CA should confirm the route for your country.",
};

// Date helpers in UTC so the calendar does not shift with the viewer's time zone.
function parseIso(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}
const toIso = (d: Date) => `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
const addDays = (d: Date, n: number) => new Date(d.getTime() + n * 86_400_000);
const fmtDate = (d: Date) => d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

// The 31 March on or after a date.
function marchEndOnOrAfter(d: Date) {
  const y = d.getUTCFullYear();
  const thisYear = new Date(Date.UTC(y, 2, 31));
  return d.getTime() <= thisYear.getTime() ? thisYear : new Date(Date.UTC(y + 1, 2, 31));
}

type Row = { date: Date; item: string; basis: string };

export function buildCalendar(incIso: string, allotIso: string) {
  const inc = parseIso(incIso);
  const allot = parseIso(allotIso);

  // Income-tax: the first tax year ends on the 31 March following incorporation.
  const taxYearEnd = marchEndOnOrAfter(inc);
  // Companies Act: a company incorporated on or after 1 January may close its
  // first financial year on 31 March of the following year (section 2(41)).
  const incMonth = inc.getUTCMonth();
  const companyFyEnd = incMonth <= 2 ? new Date(Date.UTC(inc.getUTCFullYear() + 1, 2, 31)) : taxYearEnd;

  const flaYearEnd = marchEndOnOrAfter(allot);
  const fla = new Date(Date.UTC(flaYearEnd.getUTCFullYear(), 6, 15));

  const ty = taxYearEnd.getUTCFullYear();
  const tpReport = new Date(Date.UTC(ty, 9, 31));
  const itr = new Date(Date.UTC(ty, 10, 30));
  const tpForm = ty >= 2027 ? "Form 48 (formerly Form 3CEB)" : "Form 3CEB";
  const tpNote =
    ty >= 2027
      ? `Under the Income-tax Act, 2025 the accountant's report for tax year ${ty - 1}-${String(ty).slice(2)} onward is Form 48.`
      : `For FY ${ty - 1}-${String(ty).slice(2)}; under the Income-tax Act, 2025 this report is Form 48 from tax year 2026-27.`;

  const agm = new Date(Date.UTC(companyFyEnd.getUTCFullYear(), 11, 31)); // 9 months after 31 March
  const aoc4 = addDays(agm, 30);
  const mgt7 = addDays(agm, 60);

  const rows: Row[] = [
    { date: addDays(inc, 30), item: "Board appoints the first auditor", basis: "Within 30 days of incorporation" },
    { date: addDays(allot, 30), item: "Form FC-GPR on the RBI FIRMS portal", basis: "Within 30 days of allotment of shares to the foreign investor" },
    { date: addDays(inc, 180), item: "Form INC-20A, declaration of commencement of business", basis: "Within 180 days of incorporation" },
    { date: fla, item: "FLA return to the RBI", basis: `15 July after the first 31 March following the allotment (${fmtDate(flaYearEnd)}), then every year` },
    { date: tpReport, item: `Transfer pricing accountant's report, ${tpForm}`, basis: `31 October after the first tax year ending ${fmtDate(taxYearEnd)}. ${tpNote}` },
    { date: itr, item: "Income tax return", basis: "30 November, for a company with international transactions that needs a transfer pricing report" },
    { date: agm, item: "First annual general meeting (AGM)", basis: `Within 9 months of the end of the first financial year (${fmtDate(companyFyEnd)})` },
    { date: aoc4, item: "Form AOC-4, financial statements to the ROC", basis: "Within 30 days of the AGM; date shown assumes the AGM is held on its last permitted day" },
    { date: mgt7, item: "Form MGT-7, annual return to the ROC", basis: "Within 60 days of the AGM; date shown assumes the AGM is held on its last permitted day" },
  ];
  rows.sort((a, b) => a.date.getTime() - b.date.getTime());
  return { rows, taxYearEnd, companyFyEnd, longFirstYear: companyFyEnd.getTime() !== taxYearEnd.getTime() };
}

type Out = ReturnType<typeof buildCalendar> & { country: Country; summary: string };

export default function Calculator() {
  const [country, setCountry] = useState<Country>("us");
  const [inc, setInc] = useState("");
  const [allot, setAllot] = useState("");
  const [allotTouched, setAllotTouched] = useState(false);
  const [out, setOut] = useState<Out | null>(null);
  const [error, setError] = useState("");

  function onInc(v: string) {
    setInc(v);
    if (!allotTouched && /^\d{4}-\d{2}-\d{2}$/.test(v)) setAllot(toIso(addDays(parseIso(v), 30)));
  }

  function run(e: FormEvent) {
    e.preventDefault();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(inc)) {
      setError("Enter the date of incorporation.");
      setOut(null);
      return;
    }
    const allotIso = /^\d{4}-\d{2}-\d{2}$/.test(allot) ? allot : toIso(addDays(parseIso(inc), 30));
    if (parseIso(allotIso).getTime() < parseIso(inc).getTime()) {
      setError("The share allotment date cannot be before the date of incorporation.");
      setOut(null);
      return;
    }
    setError("");
    const cal = buildCalendar(inc, allotIso);
    const first = cal.rows[0];
    const summary =
      `Hi, I used your India subsidiary compliance calendar: parent in ${COUNTRY_NAME[country]}, incorporated ${fmtDate(parseIso(inc))}, ` +
      `first allotment ${fmtDate(parseIso(allotIso))}. First deadline: ${first.item} by ${fmtDate(first.date)}; ` +
      `first AGM by ${fmtDate(cal.rows.find((r) => r.item.startsWith("First annual"))!.date)}. Can a CA review this?`;
    setOut({ ...cal, country, summary });
  }

  return (
    <form onSubmit={run} className="mt-6 rounded-cards border border-ash bg-white p-6 shadow-[var(--shadow-card)]" aria-labelledby="calc-heading" noValidate>
      <h2 id="calc-heading" className="text-2xl text-obsidian">
        What are my India subsidiary&apos;s first-year deadlines?
      </h2>
      <p className="mt-2 text-sm text-slate">Nothing you type leaves your browser.</p>
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="country" className={label}>
            Where is the parent company?
          </label>
          <select id="country" className={field} value={country} onChange={(e) => setCountry(e.target.value as Country)}>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="uae">United Arab Emirates</option>
            <option value="sg">Singapore</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="inc-date" className={label}>
            Date of incorporation
          </label>
          <input id="inc-date" type="date" className={field} value={inc} onChange={(e) => onInc(e.target.value)} />
        </div>
        <div>
          <label htmlFor="allot-date" className={label}>
            Date of first share allotment to the foreign parent
          </label>
          <p id="allot-hint" className="mt-1 text-xs text-slate">
            Defaults to 30 days after incorporation; change it to the actual or planned date.
          </p>
          <input
            id="allot-date"
            type="date"
            aria-describedby="allot-hint"
            className={field}
            value={allot}
            onChange={(e) => {
              setAllot(e.target.value);
              setAllotTouched(true);
            }}
          />
        </div>
        <div>
          <label htmlFor="fy-end" className={label}>
            Financial year end
          </label>
          <p id="fy-hint" className="mt-1 text-xs text-slate">
            Indian companies follow an April to March financial year.
          </p>
          <input id="fy-end" type="text" aria-describedby="fy-hint" className={`${field} bg-fog`} value="31 March" readOnly />
        </div>
      </div>
      {error && (
        <p role="alert" className="mt-4 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full border border-carbon bg-carbon px-6 text-sm font-bold uppercase tracking-[0.032em] text-white transition-opacity hover:opacity-85"
      >
        Build my calendar
      </button>

      <div aria-live="polite" className="mt-6">
        {out && (
          <div className="rounded-cards border border-carbon bg-sky-wash p-6">
            <p className="text-sm font-medium uppercase tracking-wide text-slate">Estimated first-year calendar</p>
            <p className="mt-1 text-2xl font-semibold text-carbon">First financial year ends {fmtDate(out.companyFyEnd)}</p>
            {out.longFirstYear && (
              <p className="mt-2 text-sm leading-relaxed text-carbon">
                Because the company was incorporated between 1 January and 31 March, its first financial year under the Companies Act may run to{" "}
                {fmtDate(out.companyFyEnd)}, while the first tax year still ends on {fmtDate(out.taxYearEnd)}. The dates below follow that split.
              </p>
            )}
            <div className="mt-5 overflow-x-auto rounded-cards border border-ash">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">First-year compliance calendar</caption>
                <thead className="bg-carbon text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-medium">Due by</th>
                    <th scope="col" className="px-4 py-3 font-medium">What</th>
                    <th scope="col" className="px-4 py-3 font-medium">Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ash bg-paper">
                  {out.rows.map((r) => (
                    <tr key={r.item}>
                      <td className="whitespace-nowrap px-4 py-3 align-top font-medium text-obsidian">{fmtDate(r.date)}</td>
                      <td className="px-4 py-3 align-top text-obsidian">{r.item}</td>
                      <td className="px-4 py-3 align-top text-slate">{r.basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-carbon">
              <strong>Documents from {COUNTRY_NAME[out.country]}:</strong> {COUNTRY_NOTE[out.country]}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-carbon">
              Dates are computed from the statutory periods and may move if the government extends due dates. This is an estimate for guidance; we confirm
              the calendar for your company before anything is filed.
            </p>
            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent(out.summary)}`}
              target="_blank"
              rel="noopener"
              onClick={() => track("whatsapp", "calculator", SLUG)}
              className="mt-5 inline-flex min-h-[48px] items-center justify-center rounded-full border border-carbon bg-white px-6 text-sm font-bold text-carbon transition-colors hover:bg-lavender"
            >
              Send this result to a CA on WhatsApp
            </a>
          </div>
        )}
      </div>
    </form>
  );
}
