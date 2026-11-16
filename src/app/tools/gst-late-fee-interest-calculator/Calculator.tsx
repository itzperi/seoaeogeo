"use client";

import { useState, type FormEvent } from "react";
import CalcWhatsApp from "@/components/CalcWhatsApp";
import { computeLateFee, type AnnualBand, type GstReturn, type LateFeeResult, type MonthlyBand } from "./calc";

const field = "mt-1 block min-h-[44px] w-full rounded-cards border border-ash bg-white px-3 text-base text-obsidian";
const label = "block text-sm font-medium text-obsidian";
const inr = new Intl.NumberFormat("en-IN");
const rupees = (n: number) => `₹${inr.format(Math.round(n))}`;

const RETURN_LABEL: Record<GstReturn, string> = {
  gstr3b: "GSTR-3B",
  gstr1: "GSTR-1",
  gstr4: "GSTR-4",
  gstr9: "GSTR-9",
};

const DUE_HINT: Record<GstReturn, string> = {
  gstr3b: "Usually the 20th of the next month for monthly filers. Quarterly filers have the 22nd or 24th of the month after the quarter, depending on the State. Use the extended date if one was notified.",
  gstr1: "Usually the 11th of the next month, or the 13th of the month after the quarter for quarterly filers. Use the extended date if one was notified.",
  gstr4: "Usually 30 April after the end of the financial year. Use the extended date if one was notified.",
  gstr9: "Usually 31 December after the end of the financial year. Use the extended date if one was notified.",
};

const fmtDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
};

function toInt(v: string) {
  const n = parseInt(v.replace(/[^0-9]/g, ""), 10);
  return Number.isFinite(n) ? n : 0;
}

function MoneyField({ id, text, hint, value, onChange }: { id: string; text: string; hint?: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label htmlFor={id} className={label}>
        {text}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-xs text-slate">
          {hint}
        </p>
      )}
      <input
        id={id}
        type="text"
        inputMode="numeric"
        autoComplete="off"
        aria-describedby={hint ? `${id}-hint` : undefined}
        className={field}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

type Out = Extract<LateFeeResult, { ok: true }> & { ret: GstReturn; dueDate: string; filingDate: string };

export default function Calculator() {
  const [ret, setRet] = useState<GstReturn>("gstr3b");
  const [dueDate, setDueDate] = useState("");
  const [filingDate, setFilingDate] = useState("");
  const [nil, setNil] = useState("no");
  const [monthlyBand, setMonthlyBand] = useState<MonthlyBand>("upto1_5");
  const [annualBand, setAnnualBand] = useState<AnnualBand>("upto5");
  const [stateTurnover, setStateTurnover] = useState("");
  const [cashTax, setCashTax] = useState("");
  const [out, setOut] = useState<Out | null>(null);
  const [error, setError] = useState("");

  function run(e: FormEvent) {
    e.preventDefault();
    const r = computeLateFee({
      ret,
      dueDate,
      filingDate,
      nil: nil === "yes",
      monthlyBand,
      annualBand,
      stateTurnover: toInt(stateTurnover),
      cashTax: toInt(cashTax),
    });
    if (!r.ok) {
      setError(r.error);
      setOut(null);
      return;
    }
    setError("");
    setOut({ ...r, ret, dueDate, filingDate });
  }

  const nilLabel =
    ret === "gstr1" ? "Were there nil outward supplies in the period?" : "Is the central tax payable in the return nil?";

  return (
    <form onSubmit={run} className="mt-6 rounded-cards border border-ash bg-white p-6 shadow-[var(--shadow-card)]" aria-labelledby="calc-heading" noValidate>
      <h2 id="calc-heading" className="text-2xl text-obsidian">
        How much late fee and interest will I pay on a late GST return?
      </h2>
      <p className="mt-2 text-sm text-slate">Nothing you type leaves your browser.</p>
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="ret" className={label}>
            Return
          </label>
          <select id="ret" className={field} value={ret} onChange={(e) => setRet(e.target.value as GstReturn)}>
            <option value="gstr3b">GSTR-3B (monthly or quarterly summary return)</option>
            <option value="gstr1">GSTR-1 (outward supplies)</option>
            <option value="gstr9">GSTR-9 (annual return)</option>
            <option value="gstr4">GSTR-4 (composition annual return)</option>
          </select>
        </div>
        <div>
          <label htmlFor="due-date" className={label}>
            Due date of the return
          </label>
          <p id="due-date-hint" className="mt-1 text-xs text-slate">
            {DUE_HINT[ret]}
          </p>
          <input id="due-date" type="date" aria-describedby="due-date-hint" className={field} value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="filing-date" className={label}>
            Date filed, or the date you expect to file
          </label>
          <input id="filing-date" type="date" className={field} value={filingDate} onChange={(e) => setFilingDate(e.target.value)} />
        </div>
        {ret !== "gstr9" && (
          <div>
            <label htmlFor="nil" className={label}>
              {nilLabel}
            </label>
            <select id="nil" className={field} value={nil} onChange={(e) => setNil(e.target.value)}>
              <option value="no">No</option>
              <option value="yes">Yes, it is a nil return</option>
            </select>
          </div>
        )}
        {(ret === "gstr3b" || ret === "gstr1") && nil === "no" && (
          <div>
            <label htmlFor="monthly-band" className={label}>
              Aggregate turnover in the preceding financial year
            </label>
            <select id="monthly-band" className={field} value={monthlyBand} onChange={(e) => setMonthlyBand(e.target.value as MonthlyBand)}>
              <option value="upto1_5">Up to ₹1.5 crore</option>
              <option value="1_5to5">Above ₹1.5 crore and up to ₹5 crore</option>
              <option value="above5">Above ₹5 crore</option>
            </select>
          </div>
        )}
        {ret === "gstr9" && (
          <>
            <div>
              <label htmlFor="annual-band" className={label}>
                Aggregate turnover in the financial year of the return
              </label>
              <select id="annual-band" className={field} value={annualBand} onChange={(e) => setAnnualBand(e.target.value as AnnualBand)}>
                <option value="upto5">Up to ₹5 crore</option>
                <option value="5to20">Above ₹5 crore and up to ₹20 crore</option>
                <option value="above20">Above ₹20 crore</option>
              </select>
            </div>
            <MoneyField
              id="state-turnover"
              text="Turnover in the State or Union territory for the year, in ₹"
              hint="For this GSTIN only. The cap on the GSTR-9 late fee is a percentage of this figure."
              value={stateTurnover}
              onChange={setStateTurnover}
            />
          </>
        )}
        {ret === "gstr3b" && nil === "no" && (
          <MoneyField
            id="cash-tax"
            text="Net tax paid in cash with the late return, in ₹"
            hint="The tax paid through the electronic cash ledger, after input tax credit. Interest is charged on this amount only."
            value={cashTax}
            onChange={setCashTax}
          />
        )}
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
        Work out my late fee and interest
      </button>

      <div aria-live="polite" className="mt-6">
        {out && (
          <div className="rounded-cards border border-carbon bg-sky-wash p-6">
            <p className="text-sm font-medium uppercase tracking-wide text-slate">Estimated amount payable</p>
            <p className="mt-1 text-2xl font-semibold text-carbon">{rupees(out.total)}</p>
            <p className="mt-2 text-sm leading-relaxed text-carbon">
              {out.daysLate === 0
                ? `${RETURN_LABEL[out.ret]} filed on ${fmtDate(out.filingDate)} is on time against a due date of ${fmtDate(out.dueDate)}, so no late fee or interest applies.`
                : `${RETURN_LABEL[out.ret]} due on ${fmtDate(out.dueDate)} and filed on ${fmtDate(out.filingDate)} is ${out.daysLate} ${out.daysLate === 1 ? "day" : "days"} late.`}
            </p>
            <div className="mt-5 overflow-x-auto rounded-cards border border-ash">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Late fee and interest estimate</caption>
                <thead className="bg-carbon text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-medium">Item</th>
                    <th scope="col" className="px-4 py-3 font-medium">Amount</th>
                    <th scope="col" className="px-4 py-3 font-medium">Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ash bg-paper">
                  <tr>
                    <td className="px-4 py-3 align-top font-medium text-obsidian">Days late</td>
                    <td className="px-4 py-3 align-top text-slate">{out.daysLate}</td>
                    <td className="px-4 py-3 align-top text-slate">From the day after the due date to the filing date</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 align-top font-medium text-obsidian">Late fee, CGST</td>
                    <td className="px-4 py-3 align-top text-slate">{rupees(out.cgst)}</td>
                    <td className="px-4 py-3 align-top text-slate">
                      {rupees(out.perDayCgst)} a day, capped at {rupees(out.capCgst)}
                      {out.capApplied ? " (cap applied)" : ""}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 align-top font-medium text-obsidian">Late fee, SGST or UTGST</td>
                    <td className="px-4 py-3 align-top text-slate">{rupees(out.sgst)}</td>
                    <td className="px-4 py-3 align-top text-slate">The same amount as CGST</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 align-top font-medium text-obsidian">Total late fee</td>
                    <td className="px-4 py-3 align-top text-slate">{rupees(out.lateFee)}</td>
                    <td className="px-4 py-3 align-top text-slate">Section 47, as reduced by {out.rule}</td>
                  </tr>
                  {out.ret === "gstr3b" && (
                    <tr>
                      <td className="px-4 py-3 align-top font-medium text-obsidian">Interest at 18% a year</td>
                      <td className="px-4 py-3 align-top text-slate">{rupees(out.interest)}</td>
                      <td className="px-4 py-3 align-top text-slate">Section 50(1), on {rupees(out.interestBase)} paid in cash</td>
                    </tr>
                  )}
                </tbody>
                <tfoot className="bg-paper">
                  <tr>
                    <th scope="row" className="px-4 py-3 text-left font-semibold text-obsidian">Total</th>
                    <td className="px-4 py-3 font-semibold text-obsidian">{rupees(out.total)}</td>
                    <td className="px-4 py-3 text-slate">{out.ret === "gstr3b" ? "Late fee plus interest" : "Late fee only; interest is paid through GSTR-3B"}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p className="mt-5 text-sm font-semibold text-carbon">How this was worked out</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-relaxed text-carbon">
              {out.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p className="mt-4 text-sm leading-relaxed text-carbon">
              This is an estimate for guidance. Amnesty schemes and waivers for specific periods are not modelled, and the GST portal computes the final
              late fee and interest when you file. Interest is worked out to the filing date, on the assumption that the tax is paid in cash that day.
            </p>
            <CalcWhatsApp
              tool="gst-late-fee-interest-calculator"
              summary={`GST late fee calculator: ${RETURN_LABEL[out.ret]} due ${fmtDate(out.dueDate)}, filed ${fmtDate(out.filingDate)}, ${out.daysLate} days late, late fee about ${rupees(out.lateFee)}${out.ret === "gstr3b" ? `, interest about ${rupees(out.interest)}` : ""}.`}
            />
          </div>
        )}
      </div>
    </form>
  );
}
