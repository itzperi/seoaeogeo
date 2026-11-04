"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import CalcWhatsApp from "@/components/CalcWhatsApp";

type YesNo = "yes" | "no";
type Status = "ROR" | "RNOR" | "NR" | "DEEMED";

type Result = { status: Status; title: string; why: string };

const field = "mt-1 block min-h-[44px] w-full rounded-cards border border-ash bg-white px-3 text-base text-obsidian";
const label = "block text-sm font-medium text-obsidian";

function toInt(v: string) {
  const n = parseInt(v.replace(/[^0-9]/g, ""), 10);
  return Number.isFinite(n) ? n : 0;
}

function YesNoField({ id, text, hint, value, onChange }: { id: string; text: string; hint?: string; value: YesNo; onChange: (v: YesNo) => void }) {
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
      <select id={id} aria-describedby={hint ? `${id}-hint` : undefined} className={field} value={value} onChange={(e) => onChange(e.target.value as YesNo)}>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
    </div>
  );
}

function NumberField({ id, text, hint, value, onChange }: { id: string; text: string; hint?: string; value: string; onChange: (v: string) => void }) {
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

export function assess(i: {
  days: number;
  days4: number;
  citizenPio: boolean;
  leftForWork: boolean;
  income15: boolean;
  taxedElsewhere: boolean;
  nr9: boolean;
  days7: number;
}): Result {
  const visiting = i.citizenPio && !i.leftForWork;
  let threshold = 60;
  if (i.leftForWork) threshold = 182;
  else if (visiting) threshold = i.income15 ? 120 : 182;

  const byDays182 = i.days >= 182;
  const byThreshold = i.days >= threshold && i.days4 >= 365;
  const resident = byDays182 || byThreshold;

  if (!resident) {
    if (i.citizenPio && i.income15 && !i.taxedElsewhere) {
      return {
        status: "DEEMED",
        title: "Deemed resident (RNOR)",
        why: "You stay below the day-count tests, but you are an Indian citizen with Indian income above ₹15 lakh and you are not liable to tax in any other country. Section 6(1A) therefore treats you as resident in India, and always as resident but not ordinarily resident (RNOR). This rule applies to Indian citizens; if you are a person of Indian origin who is not an Indian citizen, it does not apply to you.",
      };
    }
    return {
      status: "NR",
      title: "Non-resident (NRI)",
      why: `With ${i.days} days in India this year you do not meet either basic test: 182 days in the year, or ${threshold} days in the year together with 365 days in the four preceding years. No deemed-residence rule applies on the answers given, so you are a non-resident for the year.`,
    };
  }

  if (!byDays182 && threshold === 120) {
    return {
      status: "RNOR",
      title: "Resident but not ordinarily resident (RNOR)",
      why: "You are a citizen or person of Indian origin visiting India, with Indian income above ₹15 lakh, and you spent 120 to 181 days here with at least 365 days in the four preceding years. The 120-day test makes you resident, and for this case the rules treat you as resident but not ordinarily resident.",
    };
  }

  const route = byDays182
    ? "You spent 182 days or more in India this year, which makes you resident on the basic test."
    : `You spent at least ${threshold} days in India this year and at least 365 days in the four preceding years, which makes you resident.`;

  if (i.nr9 || i.days7 <= 729) {
    const reason = i.nr9
      ? "you were non-resident in 9 of the 10 preceding years"
      : "you spent 729 days or fewer in India in the 7 preceding years";
    return {
      status: "RNOR",
      title: "Resident but not ordinarily resident (RNOR)",
      why: `${route} Because ${reason}, you are resident but not ordinarily resident, so income earned and received outside India is generally outside the Indian tax net unless it comes from a business controlled in or a profession set up in India.`,
    };
  }
  return {
    status: "ROR",
    title: "Resident and ordinarily resident (ROR)",
    why: `${route} You were not non-resident in 9 of the 10 preceding years and you spent more than 729 days in India in the 7 preceding years, so you are resident and ordinarily resident and your global income is taxable in India.`,
  };
}

export default function Calculator() {
  const [days, setDays] = useState("");
  const [days4, setDays4] = useState("");
  const [citizenPio, setCitizenPio] = useState<YesNo>("yes");
  const [leftForWork, setLeftForWork] = useState<YesNo>("no");
  const [income15, setIncome15] = useState<YesNo>("no");
  const [taxedElsewhere, setTaxedElsewhere] = useState<YesNo>("yes");
  const [nr9, setNr9] = useState<YesNo>("no");
  const [days7, setDays7] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  function run(e: FormEvent) {
    e.preventDefault();
    const d = toInt(days);
    if (days.trim() === "" || d > 366) {
      setError("Enter the number of days you spent in India this year (0 to 366).");
      setResult(null);
      return;
    }
    setError("");
    setResult(
      assess({
        days: d,
        days4: toInt(days4),
        citizenPio: citizenPio === "yes",
        leftForWork: citizenPio === "yes" && leftForWork === "yes",
        income15: income15 === "yes",
        taxedElsewhere: taxedElsewhere === "yes",
        nr9: nr9 === "yes",
        days7: toInt(days7),
      })
    );
  }

  return (
    <form onSubmit={run} className="mt-6 rounded-cards border border-ash bg-white p-6 shadow-[var(--shadow-card)]" aria-labelledby="calc-heading" noValidate>
      <h2 id="calc-heading" className="text-2xl text-obsidian">
        What is my residential status this year?
      </h2>
      <p className="mt-2 text-sm text-slate">Answer for the financial year you want to check. Nothing you type leaves your browser.</p>
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        <NumberField id="days" text="Days in India this year" value={days} onChange={setDays} />
        <NumberField id="days4" text="Total days in India in the 4 preceding years" value={days4} onChange={setDays4} />
        <YesNoField id="citizen" text="Are you an Indian citizen or a person of Indian origin?" value={citizenPio} onChange={setCitizenPio} />
        {citizenPio === "yes" && (
          <YesNoField
            id="left-for-work"
            text="Did you leave India this year for employment abroad, or as crew of an Indian ship?"
            hint="Answer yes only if you are an Indian citizen."
            value={leftForWork}
            onChange={setLeftForWork}
          />
        )}
        <YesNoField
          id="income15"
          text="Is your Indian income, other than from foreign sources, above ₹15 lakh?"
          value={income15}
          onChange={setIncome15}
        />
        <YesNoField id="taxed-elsewhere" text="Are you liable to tax in any other country?" value={taxedElsewhere} onChange={setTaxedElsewhere} />
        <YesNoField id="nr9" text="Were you non-resident in 9 of the 10 preceding years?" value={nr9} onChange={setNr9} />
        <NumberField id="days7" text="Total days in India in the 7 preceding years" value={days7} onChange={setDays7} />
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
        Check my status
      </button>

      <div aria-live="polite" className="mt-6">
        {result && (
          <div className="rounded-cards border border-carbon bg-sky-wash p-6">
            <p className="text-sm font-medium uppercase tracking-wide text-slate">Estimated status</p>
            <p className="mt-1 text-2xl font-semibold text-carbon">{result.title}</p>
            <p className="mt-3 leading-relaxed text-carbon">{result.why}</p>
            <p className="mt-4 text-sm text-carbon">
              This is an estimate for guidance. We confirm your status from your passport stamps and travel records before it is used in a return.{" "}
              <Link href="/nri-tax-services" className="font-semibold underline underline-offset-2">
                See our NRI tax services
              </Link>
              .
            </p>
            <CalcWhatsApp
              tool="nri-residential-status-calculator"
              summary={`NRI residential status calculator: ${days || "0"} days in India this year, ${days4 || "0"} days in the previous four years, result: ${result.title}.`}
            />
          </div>
        )}
      </div>
    </form>
  );
}
