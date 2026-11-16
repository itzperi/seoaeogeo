// Pure GST late fee and interest calculation, kept free of React so it can be
// tested on its own. All amounts are in rupees. Every figure below is the
// central tax (CGST) amount; the matching SGST or UTGST amount is the same.
//
// Late fee: section 47 of the CGST Act, 2017 (Rs 100 a day, capped at Rs 5,000
// under section 47(1); Rs 100 a day, capped at 0.25% of turnover in the State
// or Union territory under section 47(2) for the annual return), reduced by
// these waiver notifications issued under section 128:
//   GSTR-3B  Notification 76/2018-CT (Rs 25 a day, Rs 10 a day if the central
//            tax payable is nil), with the caps added by Notification
//            19/2021-CT for the tax period June 2021 onwards.
//   GSTR-1   Notification 4/2018-CT (Rs 25 a day, Rs 10 a day for nil outward
//            supplies), with the caps added by Notification 20/2021-CT for
//            the tax period June 2021 onwards.
//   GSTR-4   Notification 73/2017-CT (Rs 25 a day, Rs 10 a day if nil), with
//            the caps added by Notification 21/2021-CT for FY 2021-22 onwards.
//   GSTR-9   Notification 7/2023-CT for FY 2022-23 onwards: Rs 25 a day up to
//            Rs 5 crore and Rs 50 a day above Rs 5 crore up to Rs 20 crore,
//            each capped at 0.02% of turnover in the State or Union territory.
//            Above Rs 20 crore section 47(2) applies without a waiver.
// Interest: section 50(1) at 18% a year (Notification 13/2017-CT), charged
// under the proviso to section 50(1) only on the tax paid through the
// electronic cash ledger when a return is filed late.

export type GstReturn = "gstr3b" | "gstr1" | "gstr4" | "gstr9";
export type MonthlyBand = "upto1_5" | "1_5to5" | "above5";
export type AnnualBand = "upto5" | "5to20" | "above20";

export type LateFeeInput = {
  ret: GstReturn;
  dueDate: string; // yyyy-mm-dd
  filingDate: string; // yyyy-mm-dd
  nil: boolean; // GSTR-3B and GSTR-4: central tax payable is nil; GSTR-1: no outward supplies
  monthlyBand: MonthlyBand; // aggregate turnover of the preceding financial year (GSTR-3B, GSTR-1)
  annualBand: AnnualBand; // aggregate turnover of the financial year (GSTR-9)
  stateTurnover: number; // turnover in the State or Union territory (GSTR-9)
  cashTax: number; // net tax paid through the cash ledger (GSTR-3B)
};

export type LateFeeResult =
  | {
      ok: true;
      daysLate: number;
      perDayCgst: number;
      capCgst: number;
      uncappedCgst: number;
      capApplied: boolean;
      cgst: number;
      sgst: number;
      lateFee: number;
      interest: number;
      interestBase: number;
      total: number;
      rule: string;
      steps: string[];
    }
  | { ok: false; error: string };

export const INTEREST_RATE = 0.18; // section 50(1), Notification 13/2017-CT

const MS_PER_DAY = 86_400_000;
const inr = new Intl.NumberFormat("en-IN");
const rs = (n: number) => `₹${inr.format(Math.round(n))}`;

// Parses yyyy-mm-dd into a UTC day number, rejecting dates such as 2025-02-30.
export function dayNumber(iso: string): number | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;
  const [y, m, d] = iso.split("-").map(Number);
  const t = Date.UTC(y, m - 1, d);
  const back = new Date(t);
  if (back.getUTCFullYear() !== y || back.getUTCMonth() !== m - 1 || back.getUTCDate() !== d) return null;
  return Math.round(t / MS_PER_DAY);
}

// Earliest due date each set of reduced rates can apply to.
const FIRST_DUE: Record<GstReturn, { iso: string; text: string }> = {
  gstr3b: { iso: "2021-07-01", text: "tax periods from June 2021" },
  gstr1: { iso: "2021-07-01", text: "tax periods from June 2021" },
  gstr4: { iso: "2022-04-01", text: "FY 2021-22 onwards" },
  gstr9: { iso: "2023-04-01", text: "FY 2022-23 onwards" },
};

const MONTHLY_CAP: Record<MonthlyBand, number> = { upto1_5: 1000, "1_5to5": 2500, above5: 5000 };
const MONTHLY_BAND_TEXT: Record<MonthlyBand, string> = {
  upto1_5: "aggregate turnover up to ₹1.5 crore",
  "1_5to5": "aggregate turnover above ₹1.5 crore and up to ₹5 crore",
  above5: "aggregate turnover above ₹5 crore",
};

function rules(i: LateFeeInput): { perDay: number; cap: number; rule: string; capText: string } {
  switch (i.ret) {
    case "gstr3b":
    case "gstr1": {
      const notif = i.ret === "gstr3b" ? "Notifications 76/2018-CT and 19/2021-CT" : "Notifications 4/2018-CT and 20/2021-CT";
      if (i.nil) {
        return { perDay: 10, cap: 250, rule: notif, capText: i.ret === "gstr3b" ? "nil tax payable" : "nil outward supplies" };
      }
      return { perDay: 25, cap: MONTHLY_CAP[i.monthlyBand], rule: notif, capText: MONTHLY_BAND_TEXT[i.monthlyBand] };
    }
    case "gstr4":
      return i.nil
        ? { perDay: 10, cap: 250, rule: "Notifications 73/2017-CT and 21/2021-CT", capText: "nil tax payable" }
        : { perDay: 25, cap: 1000, rule: "Notifications 73/2017-CT and 21/2021-CT", capText: "tax payable in the return" };
    case "gstr9": {
      const t = Math.max(0, i.stateTurnover);
      if (i.annualBand === "above20") {
        return { perDay: 100, cap: Math.round(t * 0.0025), rule: "section 47(2), no waiver", capText: "0.25% of turnover in the State" };
      }
      return {
        perDay: i.annualBand === "upto5" ? 25 : 50,
        cap: Math.round(t * 0.0002),
        rule: "Notification 7/2023-CT",
        capText: "0.02% of turnover in the State",
      };
    }
  }
}

export function computeLateFee(i: LateFeeInput): LateFeeResult {
  const due = dayNumber(i.dueDate);
  if (due === null) return { ok: false, error: "Enter a valid due date." };
  const filed = dayNumber(i.filingDate);
  if (filed === null) return { ok: false, error: "Enter a valid filing date, actual or expected." };
  const first = FIRST_DUE[i.ret];
  if (due < (dayNumber(first.iso) as number)) {
    return {
      ok: false,
      error: `This calculator applies the rates in force for ${first.text}. Earlier periods had different rates and one-time waivers, so check them with a CA.`,
    };
  }
  if (i.ret === "gstr9" && !(i.stateTurnover > 0)) {
    return { ok: false, error: "Enter your turnover in the State or Union territory for the year. The GSTR-9 cap is a percentage of it." };
  }

  const r = rules(i);
  const daysLate = Math.max(0, filed - due);
  const uncappedCgst = daysLate * r.perDay;
  const cgst = Math.min(uncappedCgst, r.cap);
  const capApplied = daysLate > 0 && uncappedCgst > r.cap;
  const sgst = cgst;
  const lateFee = cgst + sgst;
  const interestBase = i.ret === "gstr3b" && !i.nil ? Math.max(0, i.cashTax) : 0;
  const interest = daysLate > 0 ? Math.round((interestBase * INTEREST_RATE * daysLate) / 365) : 0;

  const steps: string[] = [];
  if (daysLate === 0) {
    steps.push("The return is filed on or before the due date, so no late fee or interest arises.");
  } else {
    steps.push(`Days late: ${daysLate}, counted from the day after the due date up to the filing date.`);
    steps.push(
      `Late fee under ${r.rule}: ${rs(r.perDay)} a day for CGST and the same for SGST or UTGST, so ${rs(r.perDay)} × ${daysLate} = ${rs(uncappedCgst)} each.`
    );
    steps.push(
      capApplied
        ? `Cap for ${r.capText}: ${rs(r.cap)} each, so the cap applies and each head is limited to ${rs(cgst)}.`
        : `Cap for ${r.capText}: ${rs(r.cap)} each, which is not reached.`
    );
    if (i.ret === "gstr3b") {
      steps.push(
        i.nil
          ? "Interest under section 50(1): the tax payable is nil, so no interest arises."
          : interestBase > 0
            ? `Interest under section 50(1): ${rs(interestBase)} × 18% × ${daysLate} ÷ 365 = ${rs(interest)}, on the tax paid in cash only.`
            : "Interest under section 50(1): no tax paid in cash was entered, so no interest is shown."
      );
    }
  }

  return {
    ok: true,
    daysLate,
    perDayCgst: r.perDay,
    capCgst: r.cap,
    uncappedCgst,
    capApplied,
    cgst,
    sgst,
    lateFee,
    interest,
    interestBase,
    total: lateFee + interest,
    rule: r.rule,
    steps,
  };
}
