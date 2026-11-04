"use client";

import { useState, type FormEvent } from "react";
import CalcWhatsApp from "@/components/CalcWhatsApp";

type Entity = "pvt" | "opc" | "llp";

const field = "mt-1 block min-h-[44px] w-full rounded-cards border border-ash bg-white px-3 text-base text-obsidian";
const label = "block text-sm font-medium text-obsidian";
const inr = new Intl.NumberFormat("en-IN");
const rupees = (n: number) => `₹${inr.format(n)}`;

const PAN = 66;
const TAN = 65;
const STAMP_CAP = 500000;
const BLOCK = 1000000;

function toInt(v: string) {
  const n = parseInt(v.replace(/[^0-9]/g, ""), 10);
  return Number.isFinite(n) ? n : 0;
}

type Line = { item: string; amount: string; note: string };

export default function Calculator() {
  const [entity, setEntity] = useState<Entity>("pvt");
  const [capital, setCapital] = useState("");
  const [reserved, setReserved] = useState("no");
  const [out, setOut] = useState<{ lines: Line[]; total: number } | null>(null);
  const [error, setError] = useState("");

  function run(e: FormEvent) {
    e.preventDefault();
    const cap = toInt(capital);
    if (entity !== "llp" && cap <= 0) {
      setError("Enter the authorised capital in rupees.");
      setOut(null);
      return;
    }
    setError("");
    const lines: Line[] = [];
    let total = 0;
    if (entity === "llp") {
      lines.push({ item: "Stamp duty on the LLP agreement", amount: "Shown by the MCA portal at filing", note: "Not included in the total" });
      lines.push({ item: "FiLLiP filing fees", amount: "Shown by the MCA portal at filing", note: "Not included in the total" });
    } else {
      if (cap <= 1500000) {
        lines.push({ item: "MCA SPICe+ filing fee", amount: rupees(0), note: "Authorised capital up to ₹15,00,000" });
      } else {
        lines.push({ item: "MCA SPICe+ filing fee", amount: "Computed by SPICe+ under the fee rules", note: "Not included in the total" });
      }
      if (reserved === "yes") {
        lines.push({ item: "Name reservation, reserved separately", amount: rupees(1000), note: "Only if the name is reserved separately" });
        total += 1000;
      }
      const units = Math.ceil(cap / BLOCK);
      const blocks = `${units} block${units === 1 ? "" : "s"} of ₹10,00,000 or part`;
      const moa = Math.min(units * 200, STAMP_CAP);
      const aoa = Math.min(units * 500, STAMP_CAP);
      lines.push({ item: "Tamil Nadu stamp duty on the MoA", amount: rupees(moa), note: `₹200 per block: ${blocks}` });
      lines.push({ item: "Tamil Nadu stamp duty on the AoA", amount: rupees(aoa), note: `₹500 per block: ${blocks}` });
      total += moa + aoa;
    }
    lines.push({ item: "PAN application", amount: rupees(PAN), note: "Statutory charge" });
    lines.push({ item: "TAN application", amount: rupees(TAN), note: "Statutory charge" });
    total += PAN + TAN;
    setOut({ lines, total });
  }

  return (
    <form onSubmit={run} className="mt-6 rounded-cards border border-ash bg-white p-6 shadow-[var(--shadow-card)]" aria-labelledby="calc-heading" noValidate>
      <h2 id="calc-heading" className="text-2xl text-obsidian">
        What will the government charge for my company in Tamil Nadu?
      </h2>
      <p className="mt-2 text-sm text-slate">Statutory charges only. Nothing you type leaves your browser.</p>
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="entity" className={label}>
            Type of entity
          </label>
          <select id="entity" className={field} value={entity} onChange={(e) => setEntity(e.target.value as Entity)}>
            <option value="pvt">Private Limited Company</option>
            <option value="opc">One Person Company (OPC)</option>
            <option value="llp">Limited Liability Partnership (LLP)</option>
          </select>
        </div>
        <div>
          <label htmlFor="capital" className={label}>
            {entity === "llp" ? "Total LLP contribution in ₹" : "Authorised capital in ₹"}
          </label>
          {entity === "llp" && (
            <p id="capital-hint" className="mt-1 text-xs text-slate">
              Optional. The LLP figures are shown by the MCA portal, so this does not change the estimate below.
            </p>
          )}
          <input
            id="capital"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            aria-describedby={entity === "llp" ? "capital-hint" : undefined}
            className={field}
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
          />
        </div>
        {entity !== "llp" && (
          <div>
            <label htmlFor="reserved" className={label}>
              Is the company name reserved separately?
            </label>
            <select id="reserved" className={field} value={reserved} onChange={(e) => setReserved(e.target.value)}>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
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
        Estimate government fees
      </button>

      <div aria-live="polite" className="mt-6">
        {out && (
          <div className="rounded-cards border border-carbon bg-sky-wash p-6">
            <p className="text-sm font-medium uppercase tracking-wide text-slate">Estimated statutory charges</p>
            <div className="mt-4 overflow-x-auto rounded-cards border border-ash">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Line-item government fees</caption>
                <thead className="bg-carbon text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-medium">Item</th>
                    <th scope="col" className="px-4 py-3 font-medium">Amount</th>
                    <th scope="col" className="px-4 py-3 font-medium">Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ash bg-paper">
                  {out.lines.map((l) => (
                    <tr key={l.item}>
                      <td className="px-4 py-3 align-top font-medium text-obsidian">{l.item}</td>
                      <td className="px-4 py-3 align-top text-slate">{l.amount}</td>
                      <td className="px-4 py-3 align-top text-slate">{l.note}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-paper">
                  <tr>
                    <th scope="row" className="px-4 py-3 text-left font-semibold text-obsidian">Total of the known figures</th>
                    <td className="px-4 py-3 font-semibold text-obsidian">{rupees(out.total)}</td>
                    <td className="px-4 py-3 text-slate">Excludes any line marked as shown or computed elsewhere</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-carbon">
              Digital Signature Certificates are priced by Certifying Authorities and are not a government fee. Our professional fee is quoted separately after a scoping call.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-carbon">
              This is an estimate for guidance. We confirm the exact government charges for your case before you pay anything.
            </p>
            <CalcWhatsApp
              tool="company-registration-government-fee-calculator"
              summary={`company registration fee calculator: ${entity === "pvt" ? "Private Limited" : entity === "opc" ? "OPC" : "LLP"}, capital ₹${capital || "0"}, estimated government charges ${rupees(out.total)}.`}
            />
          </div>
        )}
      </div>
    </form>
  );
}
