"use client";

import { useState, type FormEvent } from "react";
import { WHATSAPP_LINK } from "@/lib/site";
import { track } from "@/lib/track";

const SLUG = "nri-property-sale-tds-calculator";

const field = "mt-1 block min-h-[44px] w-full rounded-cards border border-ash bg-white px-3 text-base text-obsidian";
const label = "block text-sm font-medium text-obsidian";
const inr = new Intl.NumberFormat("en-IN");
const rupees = (n: number) => `₹${inr.format(Math.round(n))}`;

const LAKH_50 = 5_000_000;
const CRORE_1 = 10_000_000;
const CESS = 0.04;
const LTCG_RATE = 0.125;
const STCG_ASSUMED_RATE = 0.3;

type Buyer = "individual" | "company" | "other";
const BUYER_LABEL: Record<Buyer, string> = {
  individual: "an individual or family (HUF)",
  company: "a company, LLP or firm",
  other: "another type of buyer",
};

function toInt(v: string) {
  const n = parseInt(v.replace(/[^0-9]/g, ""), 10);
  return Number.isFinite(n) ? n : 0;
}

// Surcharge bands applied in this estimate: nil up to ₹50 lakh, 10% above
// ₹50 lakh up to ₹1 crore, 15% above ₹1 crore (the cap for long-term gains).
export function surchargeRate(amount: number) {
  if (amount > CRORE_1) return 0.15;
  if (amount > LAKH_50) return 0.1;
  return 0;
}

export function taxWithLevies(base: number, rate: number) {
  const tax = Math.max(0, base) * rate;
  const sRate = surchargeRate(Math.max(0, base));
  const surcharge = tax * sRate;
  const cess = (tax + surcharge) * CESS;
  return { tax, sRate, surcharge, cess, total: tax + surcharge + cess };
}

function monthsHeld(iso: string, today = new Date()) {
  const [y, m, d] = iso.split("-").map(Number);
  let months = (today.getFullYear() - y) * 12 + (today.getMonth() + 1 - m);
  if (today.getDate() < d) months -= 1;
  return months;
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

type Out = {
  longTerm: boolean;
  sale: number;
  gain: number;
  defaultTds: ReturnType<typeof taxWithLevies>;
  estTax: ReturnType<typeof taxWithLevies>;
  difference: number;
  summary: string;
};

export default function Calculator() {
  const [sale, setSale] = useState("");
  const [buyer, setBuyer] = useState<Buyer>("individual");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [cost, setCost] = useState("");
  const [improvement, setImprovement] = useState("");
  const [expenses, setExpenses] = useState("");
  const [held, setHeld] = useState<"yes" | "no">("yes");
  const [out, setOut] = useState<Out | null>(null);
  const [error, setError] = useState("");

  function onPurchaseDate(v: string) {
    setPurchaseDate(v);
    if (/^\d{4}-\d{2}-\d{2}$/.test(v)) setHeld(monthsHeld(v) > 24 ? "yes" : "no");
  }

  function run(e: FormEvent) {
    e.preventDefault();
    const s = toInt(sale);
    if (s <= 0) {
      setError("Enter the sale price in rupees.");
      setOut(null);
      return;
    }
    setError("");
    const c = toInt(cost);
    const imp = toInt(improvement);
    const exp = toInt(expenses);
    const longTerm = held === "yes";
    const rate = longTerm ? LTCG_RATE : STCG_ASSUMED_RATE;
    const gain = Math.max(0, s - c - imp - exp);
    const defaultTds = taxWithLevies(s, rate);
    const estTax = taxWithLevies(gain, rate);
    const difference = Math.max(0, defaultTds.total - estTax.total);
    const summary =
      `Hi, I used your Section 195 TDS estimator: sale ${rupees(s)}, cost ${rupees(c)}, improvement ${rupees(imp)}, ` +
      `transfer expenses ${rupees(exp)}, ${longTerm ? "held more than 24 months" : "held 24 months or less"}` +
      `${purchaseDate ? ` (bought ${purchaseDate})` : ""}, buyer is ${BUYER_LABEL[buyer]}. ` +
      `Default TDS about ${rupees(defaultTds.total)}, estimated tax on the gain about ${rupees(estTax.total)}, ` +
      `difference about ${rupees(difference)}. Can a CA review this?`;
    setOut({ longTerm, sale: s, gain, defaultTds, estTax, difference, summary });
  }

  return (
    <form onSubmit={run} className="mt-6 rounded-cards border border-ash bg-white p-6 shadow-[var(--shadow-card)]" aria-labelledby="calc-heading" noValidate>
      <h2 id="calc-heading" className="text-2xl text-obsidian">
        How much TDS will the buyer deduct, and how much could a certificate save?
      </h2>
      <p className="mt-2 text-sm text-slate">Enter amounts in rupees. Nothing you type leaves your browser.</p>
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        <MoneyField id="sale" text="Sale price (sale consideration) in ₹" value={sale} onChange={setSale} />
        <div>
          <label htmlFor="buyer" className={label}>
            Who is buying?
          </label>
          <p id="buyer-hint" className="mt-1 text-xs text-slate">
            For your note only; it does not change the figures.
          </p>
          <select id="buyer" aria-describedby="buyer-hint" className={field} value={buyer} onChange={(e) => setBuyer(e.target.value as Buyer)}>
            <option value="individual">An individual or family (HUF)</option>
            <option value="company">A company, LLP or firm</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="purchase-date" className={label}>
            Date you bought the property
          </label>
          <input id="purchase-date" type="date" className={field} value={purchaseDate} onChange={(e) => onPurchaseDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="held" className={label}>
            Held for more than 24 months?
          </label>
          <p id="held-hint" className="mt-1 text-xs text-slate">
            Set from the purchase date where given; change it if the sale date differs.
          </p>
          <select id="held" aria-describedby="held-hint" className={field} value={held} onChange={(e) => setHeld(e.target.value as "yes" | "no")}>
            <option value="yes">Yes, long-term</option>
            <option value="no">No, short-term</option>
          </select>
        </div>
        <MoneyField
          id="cost"
          text="Cost of acquisition in ₹ (indexed or plain)"
          hint="Long-term gains on transfers from 23 July 2024 are worked out without indexation, so enter the plain cost unless a CA has advised otherwise."
          value={cost}
          onChange={setCost}
        />
        <MoneyField id="improvement" text="Cost of improvement in ₹" value={improvement} onChange={setImprovement} />
        <MoneyField
          id="expenses"
          text="Transfer expenses in ₹"
          hint="Expenses wholly for the sale, such as brokerage and legal charges."
          value={expenses}
          onChange={setExpenses}
        />
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
        Estimate TDS and tax
      </button>

      <div aria-live="polite" className="mt-6">
        {out && (
          <div className="rounded-cards border border-carbon bg-sky-wash p-6">
            <p className="text-sm font-medium uppercase tracking-wide text-slate">Estimated cash that could stay with you</p>
            <p className="mt-1 text-2xl font-semibold text-carbon">{rupees(out.difference)}</p>
            <p className="mt-2 text-sm leading-relaxed text-carbon">
              The gap between the TDS a buyer would deduct on the full sale price and the estimated tax on your gain of {rupees(out.gain)}. With a lower or nil
              deduction certificate this amount need not be withheld; without one, it is usually recovered only through your refund.
            </p>
            <div className="mt-5 overflow-x-auto rounded-cards border border-ash">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Default TDS compared with estimated tax on the gain</caption>
                <thead className="bg-carbon text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-medium">Item</th>
                    <th scope="col" className="px-4 py-3 font-medium">(a) Default TDS on sale price</th>
                    <th scope="col" className="px-4 py-3 font-medium">(b) Estimated tax on the gain</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ash bg-paper">
                  <tr>
                    <td className="px-4 py-3 align-top font-medium text-obsidian">Amount taxed</td>
                    <td className="px-4 py-3 align-top text-slate">{rupees(out.sale)}</td>
                    <td className="px-4 py-3 align-top text-slate">{rupees(out.gain)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 align-top font-medium text-obsidian">{out.longTerm ? "Tax at 12.5%" : "Tax at 30% (assumed)"}</td>
                    <td className="px-4 py-3 align-top text-slate">{rupees(out.defaultTds.tax)}</td>
                    <td className="px-4 py-3 align-top text-slate">{rupees(out.estTax.tax)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 align-top font-medium text-obsidian">Surcharge</td>
                    <td className="px-4 py-3 align-top text-slate">
                      {rupees(out.defaultTds.surcharge)} ({out.defaultTds.sRate * 100}%)
                    </td>
                    <td className="px-4 py-3 align-top text-slate">
                      {rupees(out.estTax.surcharge)} ({out.estTax.sRate * 100}%)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 align-top font-medium text-obsidian">Health &amp; Education Cess (4%)</td>
                    <td className="px-4 py-3 align-top text-slate">{rupees(out.defaultTds.cess)}</td>
                    <td className="px-4 py-3 align-top text-slate">{rupees(out.estTax.cess)}</td>
                  </tr>
                </tbody>
                <tfoot className="bg-paper">
                  <tr>
                    <th scope="row" className="px-4 py-3 text-left font-semibold text-obsidian">Total</th>
                    <td className="px-4 py-3 font-semibold text-obsidian">{rupees(out.defaultTds.total)}</td>
                    <td className="px-4 py-3 font-semibold text-obsidian">{rupees(out.estTax.total)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            {!out.longTerm && (
              <p className="mt-4 text-sm leading-relaxed text-carbon">
                <strong>Assumption:</strong> short-term gains are taxed at slab rates. This estimate assumes the highest 30% slab and the same surcharge bands
                as above; your actual rate and surcharge may differ, and a CA should confirm them.
              </p>
            )}
            <p className="mt-4 text-sm leading-relaxed text-carbon">
              This is an estimate. The Assessing Officer decides whether to issue a lower or nil deduction certificate (Form 13) and at what rate.
              Exemptions under sections 54 and 54EC are not modelled, and special cases, such as older acquisitions, are not modelled; a CA should confirm.
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
