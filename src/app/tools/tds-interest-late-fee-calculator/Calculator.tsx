"use client";

import { useState, type FormEvent } from "react";
import CalcWhatsApp from "@/components/CalcWhatsApp";
import {
  FEE_PER_DAY,
  calculate,
  quarterOf,
  statementDueDate,
  type Act,
  type InterestPart,
  type Quarter,
  type TdsResult,
} from "./logic";

const SLUG = "tds-interest-late-fee-calculator";

const field = "mt-1 block min-h-[44px] w-full rounded-cards border border-ash bg-white px-3 text-base text-obsidian";
const label = "block text-sm font-medium text-obsidian";
const hintCls = "mt-1 text-xs text-slate";
const inr = new Intl.NumberFormat("en-IN");
const rupees = (n: number) => `₹${inr.format(Math.round(n))}`;

const YEARS = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027];
const QUARTER_LABEL: Record<Quarter, string> = {
  1: "Q1: April to June",
  2: "Q2: July to September",
  3: "Q3: October to December",
  4: "Q4: January to March",
};

const INTEREST_SECTION: Record<Act, string> = {
  "1961": "section 201(1A) of the Income-tax Act, 1961",
  "2025": "section 398(3)(a) of the Income-tax Act, 2025",
};
const FEE_SECTION: Record<Act, string> = {
  "1961": "section 234E of the Income-tax Act, 1961",
  "2025": "section 427 of the Income-tax Act, 2025",
};
const PENALTY_SECTION: Record<Act, string> = {
  "1961": "section 271H of the 1961 Act",
  "2025": "section 461 of the 2025 Act",
};

function toInt(v: string) {
  const n = parseInt(v.replace(/[^0-9]/g, ""), 10);
  return Number.isFinite(n) ? n : 0;
}

function todayIso() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const fmtDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const fmtMonth = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { month: "long", year: "numeric", timeZone: "UTC" });
const fyLabel = (y: number) => `${y}-${String((y + 1) % 100).padStart(2, "0")}`;
const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

function MoneyField({ id, text, hint, value, onChange }: { id: string; text: string; hint?: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label htmlFor={id} className={label}>
        {text}
      </label>
      {hint && (
        <p id={`${id}-hint`} className={hintCls}>
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

function DateField({ id, text, hint, value, onChange }: { id: string; text: string; hint?: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label htmlFor={id} className={label}>
        {text}
      </label>
      {hint && (
        <p id={`${id}-hint`} className={hintCls}>
          {hint}
        </p>
      )}
      <input id={id} type="date" aria-describedby={hint ? `${id}-hint` : undefined} className={field} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function monthsText(p: InterestPart) {
  if (p.months === 0) return "";
  const span = fmtMonth(p.from) === fmtMonth(p.to) ? fmtMonth(p.from) : `${fmtMonth(p.from)} to ${fmtMonth(p.to)}`;
  return `${fmtDate(p.from)} to ${fmtDate(p.to)}: ${span}, counted as ${plural(p.months, "month", "months")}`;
}

type Snap = {
  amount: number;
  deductible: string;
  deducted: string | null;
  deposited: string | null;
  filed: string | null;
  fy: number;
  quarter: Quarter;
  asOn: string;
};
type Ok = Extract<TdsResult, { ok: true }> & { snap: Snap };

export default function Calculator() {
  const [amount, setAmount] = useState("");
  const [deductible, setDeductible] = useState("");
  const [dedStatus, setDedStatus] = useState<"done" | "not">("done");
  const [deducted, setDeducted] = useState("");
  const [depStatus, setDepStatus] = useState<"done" | "not">("done");
  const [deposited, setDeposited] = useState("");
  const [feeMode, setFeeMode] = useState<"yes" | "no">("yes");
  const [fy, setFy] = useState(2026);
  const [quarter, setQuarter] = useState<Quarter>(2);
  const [dueDate, setDueDate] = useState(statementDueDate(2026, 2));
  const [fileStatus, setFileStatus] = useState<"done" | "not">("done");
  const [filed, setFiled] = useState("");
  const [stmtTax, setStmtTax] = useState("");
  const [out, setOut] = useState<Ok | null>(null);
  const [error, setError] = useState("");

  function pickQuarter(y: number, q: Quarter) {
    setFy(y);
    setQuarter(q);
    setDueDate(statementDueDate(y, q));
  }

  function onDeductible(v: string) {
    setDeductible(v);
    const q = quarterOf(v);
    if (q) pickQuarter(q.fyStart, q.quarter);
  }

  function run(e: FormEvent) {
    e.preventDefault();
    const today = todayIso();
    const amt = toInt(amount);
    if (dedStatus === "done" && !deducted) return fail("Enter the date the tax was deducted, or choose not yet deducted.");
    if (depStatus === "done" && !deposited) return fail("Enter the date the tax was deposited, or choose not yet deposited.");
    if (feeMode === "yes" && fileStatus === "done" && !filed) return fail("Enter the date the statement was filed, or choose not yet filed.");
    const r = calculate({
      amount: amt,
      deductible,
      deducted: dedStatus === "done" ? deducted : null,
      deposited: depStatus === "done" ? deposited : null,
      asOn: today,
      fee:
        feeMode === "yes"
          ? {
              taxInStatement: stmtTax.trim() ? toInt(stmtTax) : amt,
              fyStart: fy,
              quarter,
              dueDate,
              filed: fileStatus === "done" ? filed : null,
            }
          : null,
    });
    if (!r.ok) return fail(r.error);
    setError("");
    setOut({
      ...r,
      snap: {
        amount: amt,
        deductible,
        deducted: dedStatus === "done" ? deducted : null,
        deposited: depStatus === "done" ? deposited : null,
        filed: fileStatus === "done" ? filed : null,
        fy,
        quarter,
        asOn: today,
      },
    });
  }

  function fail(msg: string) {
    setError(msg);
    setOut(null);
  }

  const years = YEARS.includes(fy) ? YEARS : [...YEARS, fy].sort((a, b) => a - b);

  return (
    <form onSubmit={run} className="mt-6 rounded-cards border border-ash bg-white p-6 shadow-[var(--shadow-card)]" aria-labelledby="calc-heading" noValidate>
      <h2 id="calc-heading" className="text-2xl text-obsidian">
        How much interest and late fee do I owe on my TDS?
      </h2>
      <p className="mt-2 text-sm text-slate">Enter amounts in rupees. Nothing you type leaves your browser.</p>

      <fieldset className="mt-6">
        <legend className="text-lg font-semibold text-obsidian">The tax deducted at source</legend>
        <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
          <MoneyField id="tds-amount" text="TDS amount in ₹" hint="The tax that should have been deducted on this payment." value={amount} onChange={setAmount} />
          <DateField
            id="deductible"
            text="Date the tax was deductible"
            hint="The date you paid or credited the payee, whichever was earlier."
            value={deductible}
            onChange={onDeductible}
          />
          <div>
            <label htmlFor="ded-status" className={label}>
              Has the tax been deducted?
            </label>
            <select id="ded-status" className={field} value={dedStatus} onChange={(e) => setDedStatus(e.target.value as "done" | "not")}>
              <option value="done">Yes, deducted on a date</option>
              <option value="not">Not deducted yet</option>
            </select>
          </div>
          {dedStatus === "done" && <DateField id="deducted" text="Date the tax was deducted" value={deducted} onChange={setDeducted} />}
          <div>
            <label htmlFor="dep-status" className={label}>
              Has the tax been deposited with the government?
            </label>
            <select id="dep-status" className={field} value={depStatus} onChange={(e) => setDepStatus(e.target.value as "done" | "not")}>
              <option value="done">Yes, deposited on a date</option>
              <option value="not">Not deposited yet</option>
            </select>
          </div>
          {depStatus === "done" && (
            <DateField id="deposited" text="Date the tax was deposited" hint="The payment date shown on the challan." value={deposited} onChange={setDeposited} />
          )}
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className="text-lg font-semibold text-obsidian">The quarterly TDS statement</legend>
        <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="fee-mode" className={label}>
              Work out the late filing fee?
            </label>
            <select id="fee-mode" className={field} value={feeMode} onChange={(e) => setFeeMode(e.target.value as "yes" | "no")}>
              <option value="yes">Yes</option>
              <option value="no">No, interest only</option>
            </select>
          </div>
          {feeMode === "yes" && (
            <>
              <div>
                <label htmlFor="fy" className={label}>
                  Financial year or tax year
                </label>
                <p id="fy-hint" className={hintCls}>
                  Set from the date the tax was deductible; change it if needed.
                </p>
                <select id="fy" aria-describedby="fy-hint" className={field} value={fy} onChange={(e) => pickQuarter(Number(e.target.value), quarter)}>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {fyLabel(y)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="quarter" className={label}>
                  Quarter
                </label>
                <select id="quarter" className={field} value={quarter} onChange={(e) => pickQuarter(fy, Number(e.target.value) as Quarter)}>
                  {([1, 2, 3, 4] as Quarter[]).map((q) => (
                    <option key={q} value={q}>
                      {QUARTER_LABEL[q]}
                    </option>
                  ))}
                </select>
              </div>
              <DateField
                id="stmt-due"
                text="Statement due date"
                hint="Filled in from the rules. Change it only if CBDT has extended the date for this quarter."
                value={dueDate}
                onChange={setDueDate}
              />
              <div>
                <label htmlFor="file-status" className={label}>
                  Has the statement been filed?
                </label>
                <select id="file-status" className={field} value={fileStatus} onChange={(e) => setFileStatus(e.target.value as "done" | "not")}>
                  <option value="done">Yes, filed on a date</option>
                  <option value="not">Not filed yet</option>
                </select>
              </div>
              {fileStatus === "done" && <DateField id="filed" text="Date the statement was filed" value={filed} onChange={setFiled} />}
              <MoneyField
                id="stmt-tax"
                text="Total TDS in the statement in ₹ (optional)"
                hint="The fee cannot exceed the tax deductible in the statement. Leave blank to use the TDS amount above."
                value={stmtTax}
                onChange={setStmtTax}
              />
            </>
          )}
        </div>
      </fieldset>

      {error && (
        <p role="alert" className="mt-4 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full border border-carbon bg-carbon px-6 text-sm font-bold uppercase tracking-[0.032em] text-white transition-opacity hover:opacity-85"
      >
        Work out interest and fee
      </button>

      <div aria-live="polite" className="mt-6">
        {out && (
          <div className="rounded-cards border border-carbon bg-sky-wash p-6">
            <p className="text-sm font-medium uppercase tracking-wide text-slate">Estimated interest and late fee</p>
            <p className="mt-1 text-2xl font-semibold text-carbon">{rupees(out.total)}</p>
            <p className="mt-2 text-sm leading-relaxed text-carbon">
              {out.total === 0
                ? "On the dates you entered, nothing was late, so no interest or fee is payable."
                : `Interest under ${INTEREST_SECTION[out.act]}${out.fee ? ` and the late filing fee under ${FEE_SECTION[out.fee.act]}` : ""}, worked out as on ${fmtDate(out.snap.asOn)}.`}
            </p>
            <div className="mt-5 overflow-x-auto rounded-cards border border-ash">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Breakdown of TDS interest and late filing fee</caption>
                <thead className="bg-carbon text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-medium">Item</th>
                    <th scope="col" className="px-4 py-3 font-medium">How it is counted</th>
                    <th scope="col" className="px-4 py-3 font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ash bg-paper">
                  <tr>
                    <td className="px-4 py-3 align-top font-medium text-obsidian">Interest for late deduction (1% a month)</td>
                    <td className="px-4 py-3 align-top text-slate">
                      {out.lateDeduction.months === 0
                        ? out.snap.deducted
                          ? "Deducted on the date it was deductible"
                          : "Not late yet"
                        : monthsText(out.lateDeduction)}
                      {out.lateDeduction.running && ". Still running: not deducted yet"}
                    </td>
                    <td className="px-4 py-3 align-top text-slate">{rupees(out.lateDeduction.interest)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 align-top font-medium text-obsidian">Interest for late payment (1.5% a month)</td>
                    <td className="px-4 py-3 align-top text-slate">
                      {out.depositDue === null
                        ? "Not applicable until the tax is deducted"
                        : out.latePayment.months === 0
                          ? `Deposit due by ${fmtDate(out.depositDue)}; ${out.snap.deposited ? "paid on time" : "not yet overdue"}`
                          : `Due by ${fmtDate(out.depositDue)}. Interest runs from the date of deduction, ${monthsText(out.latePayment)}`}
                      {out.latePayment.running && ". Still running: not deposited yet"}
                    </td>
                    <td className="px-4 py-3 align-top text-slate">{rupees(out.latePayment.interest)}</td>
                  </tr>
                  {out.fee && (
                    <tr>
                      <td className="px-4 py-3 align-top font-medium text-obsidian">Late filing fee (₹{FEE_PER_DAY} a day)</td>
                      <td className="px-4 py-3 align-top text-slate">
                        {out.fee.daysLate === 0
                          ? `Due by ${fmtDate(out.fee.dueDate)}; ${out.snap.filed ? "filed on time" : "not yet overdue"}`
                          : `${plural(out.fee.daysLate, "day", "days")} after ${fmtDate(out.fee.dueDate)} × ₹${FEE_PER_DAY} = ${rupees(out.fee.uncapped)}${
                              out.fee.capped ? `, capped at the TDS in the statement of ${rupees(out.fee.cap)}` : ""
                            }`}
                        {out.fee.running && ". Still running: not filed yet"}
                      </td>
                      <td className="px-4 py-3 align-top text-slate">{rupees(out.fee.fee)}</td>
                    </tr>
                  )}
                </tbody>
                <tfoot className="bg-paper">
                  <tr>
                    <th scope="row" className="px-4 py-3 text-left font-semibold text-obsidian">Total</th>
                    <td className="px-4 py-3 text-slate">Interest {rupees(out.interestTotal)}{out.fee ? `, fee ${rupees(out.fee.fee)}` : ""}</td>
                    <td className="px-4 py-3 font-semibold text-obsidian">{rupees(out.total)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {(out.lateDeduction.months > 0 || out.latePayment.months > 0) && (
              <p className="mt-4 text-sm leading-relaxed text-carbon">
                <strong>How the months are counted:</strong> each calendar month that the period touches counts as a full month, which is how TDS
                statements are processed. Counted in 30-day periods instead, as some tribunal orders have done, the same periods come to{" "}
                {plural(out.lateDeduction.thirtyDayMonths, "month", "months")} for late deduction and {plural(out.latePayment.thirtyDayMonths, "month", "months")} for
                late payment.
              </p>
            )}
            {out.fee && out.fee.daysLate > 0 && (
              <p className="mt-4 text-sm leading-relaxed text-carbon">
                <strong>Penalty exposure:</strong> a late statement can also attract a penalty of ₹10,000 to ₹1,00,000 under {PENALTY_SECTION[out.fee.act]}, at the
                Assessing Officer&apos;s discretion.{" "}
                {out.fee.withinOneMonth
                  ? "The statement was filed within one month of the due date, so the penalty for late filing does not apply if the tax, fee and interest were paid before filing."
                  : "The penalty for late filing is avoided only where the tax, fee and interest are paid and the statement is filed within one month of the due date, which has not happened here."}{" "}
                This calculator does not compute the penalty.
              </p>
            )}
            {(out.lateDeduction.running || out.latePayment.running || out.fee?.running) && (
              <p className="mt-4 text-sm leading-relaxed text-carbon">
                <strong>Still running:</strong> amounts marked as running are worked out to today. They grow each month, and the fee each day, until you deduct,
                deposit or file.
              </p>
            )}
            <p className="mt-4 text-sm leading-relaxed text-carbon">
              This is an estimate for guidance. It assumes a non-government deductor paying by challan, with tax deducted in March due by 30 April and other
              months by the 7th of the next month. TRACES may round figures, so a demand can differ by a few rupees. We check the figures against your TRACES
              justification report before anything is paid.
            </p>
            <CalcWhatsApp
              tool={SLUG}
              summary={`TDS interest and late fee calculator: TDS ${rupees(out.snap.amount)}, deductible ${fmtDate(out.snap.deductible)}, ${
                out.snap.deducted ? `deducted ${fmtDate(out.snap.deducted)}` : "not deducted yet"
              }, ${out.snap.deposited ? `deposited ${fmtDate(out.snap.deposited)}` : "not deposited yet"}${
                out.fee ? `, Q${out.snap.quarter} ${fyLabel(out.snap.fy)} statement ${out.snap.filed ? `filed ${fmtDate(out.snap.filed)}` : "not filed yet"}` : ""
              }. Interest about ${rupees(out.interestTotal)}${out.fee ? `, late fee about ${rupees(out.fee.fee)}` : ""}, total about ${rupees(out.total)}.`}
            />
          </div>
        )}
      </div>
    </form>
  );
}
