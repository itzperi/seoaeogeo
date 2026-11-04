"use client";

import { useState, type FormEvent } from "react";

type Stage = "s107" | "s112";

const field = "mt-1 block min-h-[44px] w-full rounded-cards border border-ash bg-white px-3 text-base text-obsidian";
const label = "block text-sm font-medium text-obsidian";
const inr = new Intl.NumberFormat("en-IN");
const rupees = (n: number) => `₹${inr.format(Math.round(n))}`;

const CAP_CGST = 200_000_000; // 20 crore
const CAP_SGST = 200_000_000; // 20 crore
const CAP_IGST = 400_000_000; // 40 crore

function toInt(v: string) {
  const n = parseInt(v.replace(/[^0-9]/g, ""), 10);
  return Number.isFinite(n) ? n : 0;
}

// Adds whole months in UTC, clamping to the last day of a shorter month.
function addMonths(iso: string, months: number) {
  const [y, m, d] = iso.split("-").map(Number);
  const first = new Date(Date.UTC(y, m - 1 + months, 1));
  const lastDay = new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth() + 1, 0)).getUTCDate();
  return new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth(), Math.min(d, lastDay)));
}

const toIso = (d: Date) => `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
const fmtDate = (d: Date) => d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

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

type Out = {
  stage: Stage;
  due: Date;
  extended: Date;
  rows: { item: string; amount: string; note: string }[];
  total: number;
};

export default function Calculator() {
  const [stage, setStage] = useState<Stage>("s107");
  const [date, setDate] = useState("");
  const [cgst, setCgst] = useState("");
  const [sgst, setSgst] = useState("");
  const [igst, setIgst] = useState("");
  const [admitted, setAdmitted] = useState("");
  const [penaltyOnly, setPenaltyOnly] = useState("no");
  const [penalty, setPenalty] = useState("");
  const [out, setOut] = useState<Out | null>(null);
  const [error, setError] = useState("");

  function run(e: FormEvent) {
    e.preventDefault();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      setError("Enter the date on which the order was communicated to you.");
      setOut(null);
      return;
    }
    setError("");
    const due = addMonths(date, 3);
    const extended = addMonths(toIso(due), stage === "s107" ? 1 : 3);

    const rows: Out["rows"] = [];
    let total = 0;
    const later = stage === "s112";
    const prefix = later ? "Further pre-deposit" : "Pre-deposit";
    if (penaltyOnly === "yes") {
      const p = toInt(penalty);
      const dep = p * 0.1;
      rows.push({ item: `${prefix}: 10% of the penalty`, amount: rupees(dep), note: `On a penalty of ${rupees(p)}` });
      total += dep;
    } else {
      if (!later) {
        const a = toInt(admitted);
        rows.push({ item: "Admitted tax, paid in full", amount: rupees(a), note: "Counted as already paid; not part of the 10% pre-deposit" });
        total += a;
      }
      const heads: [string, number, number][] = [
        ["CGST", toInt(cgst), CAP_CGST],
        ["SGST", toInt(sgst), CAP_SGST],
        ["IGST", toInt(igst), CAP_IGST],
      ];
      for (const [name, tax, cap] of heads) {
        const raw = tax * 0.1;
        const dep = Math.min(raw, cap);
        rows.push({
          item: `${prefix}: 10% of disputed ${name}`,
          amount: rupees(dep),
          note: raw > cap ? `Capped at ${rupees(cap)}` : `On disputed ${name} of ${rupees(tax)}`,
        });
        total += dep;
      }
    }
    setOut({ stage, due, extended, rows, total });
  }

  const later = stage === "s112";

  return (
    <form onSubmit={run} className="mt-6 rounded-cards border border-ash bg-white p-6 shadow-[var(--shadow-card)]" aria-labelledby="calc-heading" noValidate>
      <h2 id="calc-heading" className="text-2xl text-obsidian">
        When is my GST appeal due and how much must I deposit?
      </h2>
      <p className="mt-2 text-sm text-slate">Nothing you type leaves your browser.</p>
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="stage" className={label}>
            Appeal stage
          </label>
          <select id="stage" className={field} value={stage} onChange={(e) => setStage(e.target.value as Stage)}>
            <option value="s107">First appeal to the Appellate Authority (section 107)</option>
            <option value="s112">Second appeal to GSTAT (section 112)</option>
          </select>
        </div>
        <div>
          <label htmlFor="comm-date" className={label}>
            Date the order was communicated
          </label>
          <input id="comm-date" type="date" className={field} value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="penalty-only" className={label}>
            Is it a penalty-only order?
          </label>
          <select id="penalty-only" className={field} value={penaltyOnly} onChange={(e) => setPenaltyOnly(e.target.value)}>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        {penaltyOnly === "yes" && <MoneyField id="penalty" text="Penalty amount in ₹" value={penalty} onChange={setPenalty} />}
        {penaltyOnly === "no" && (
          <>
            <MoneyField
              id="cgst"
              text={later ? "CGST still in dispute in ₹" : "Disputed CGST in ₹"}
              hint={later ? "The tax still in dispute after the first appeal." : undefined}
              value={cgst}
              onChange={setCgst}
            />
            <MoneyField id="sgst" text={later ? "SGST still in dispute in ₹" : "Disputed SGST in ₹"} value={sgst} onChange={setSgst} />
            <MoneyField id="igst" text={later ? "IGST still in dispute in ₹" : "Disputed IGST in ₹"} value={igst} onChange={setIgst} />
            {!later && <MoneyField id="admitted" text="Admitted tax already paid in ₹" value={admitted} onChange={setAdmitted} />}
          </>
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
        Work out my deadline and pre-deposit
      </button>

      <div aria-live="polite" className="mt-6">
        {out && (
          <div className="rounded-cards border border-carbon bg-sky-wash p-6">
            <p className="text-sm font-medium uppercase tracking-wide text-slate">Estimated deadline</p>
            <p className="mt-1 text-2xl font-semibold text-carbon">Appeal due by {fmtDate(out.due)}</p>
            <p className="mt-2 text-sm leading-relaxed text-carbon">
              The authority may allow a further {out.stage === "s107" ? "one month" : "three months"}, up to {fmtDate(out.extended)}, only if it accepts that you had sufficient cause for the delay.
            </p>
            <div className="mt-5 overflow-x-auto rounded-cards border border-ash">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Pre-deposit estimate</caption>
                <thead className="bg-carbon text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-medium">Item</th>
                    <th scope="col" className="px-4 py-3 font-medium">Amount</th>
                    <th scope="col" className="px-4 py-3 font-medium">Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ash bg-paper">
                  {out.rows.map((r) => (
                    <tr key={r.item}>
                      <td className="px-4 py-3 align-top font-medium text-obsidian">{r.item}</td>
                      <td className="px-4 py-3 align-top text-slate">{r.amount}</td>
                      <td className="px-4 py-3 align-top text-slate">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-paper">
                  <tr>
                    <th scope="row" className="px-4 py-3 text-left font-semibold text-obsidian">Total to pay with the appeal</th>
                    <td className="px-4 py-3 font-semibold text-obsidian">{rupees(out.total)}</td>
                    <td className="px-4 py-3 text-slate">Includes the admitted tax where applicable</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-carbon">
              This is an estimate for guidance, based on the CGST Act as amended up to the Finance Act, 2025. We confirm the due date and pre-deposit for your order before anything is filed.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
