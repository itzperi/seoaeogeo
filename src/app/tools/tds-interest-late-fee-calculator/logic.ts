// Pure calculation logic for the TDS interest and late filing fee calculator.
// No React, no browser APIs, no imports: the page's client component and a
// plain Node test both call these functions.
//
// Rules applied (checked against the official text on incometaxindia.gov.in):
// - Interest for late deduction: 1% for every month or part of a month, from
//   the date tax was deductible to the date it is deducted. Section 201(1A)(i)
//   of the Income-tax Act, 1961; section 398(3)(a)(i) of the Income-tax Act, 2025.
// - Interest for late payment after deduction: 1.5% for every month or part of
//   a month, from the date of deduction to the date of payment. Section
//   201(1A)(ii) of the 1961 Act; section 398(3)(a)(ii) of the 2025 Act.
// - Late filing fee: Rs 200 for every day the failure continues, not more than
//   the tax deductible. Section 234E of the 1961 Act; section 427 of the 2025 Act.
// - Deposit due date: 7th of the following month, or 30 April for tax deducted
//   in March by a non-government deductor. Rule 30 of the 1962 Rules; Rule 218
//   of the Income-tax Rules, 2026.
// - Quarterly statement due dates: 31 July, 31 October, 31 January and 31 May.
//   Rule 31A(2) of the 1962 Rules; Rule 219(4) of the Income-tax Rules, 2026.
//
// "Month or part of a month" is counted the way TDS processing counts it: each
// calendar month that the period touches is one month, so a period from 28 June
// to 9 July is two months (June and July). The count in 30-day periods is
// returned as well, because some tribunal orders have read "month" that way.

export const LATE_DEDUCTION_RATE = 0.01;
export const LATE_PAYMENT_RATE = 0.015;
export const FEE_PER_DAY = 200;
/** Defaults on or after this date fall under the Income-tax Act, 2025. */
export const NEW_ACT_FROM = "2026-04-01";

export type Act = "1961" | "2025";
export type Quarter = 1 | 2 | 3 | 4;

const DAY_MS = 86_400_000;
const ISO_RE = /^(\d{4})-(\d{2})-(\d{2})$/;

/** Parses YYYY-MM-DD into a UTC day number, or null if it is not a real date. */
export function parseIso(iso: string | null | undefined): number | null {
  if (!iso) return null;
  const m = ISO_RE.exec(iso);
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  const t = Date.UTC(y, mo - 1, d);
  const dt = new Date(t);
  if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== mo - 1 || dt.getUTCDate() !== d) return null;
  return t / DAY_MS;
}

export function toIso(day: number): string {
  const d = new Date(day * DAY_MS);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
}

function ymd(day: number) {
  const d = new Date(day * DAY_MS);
  return { y: d.getUTCFullYear(), m: d.getUTCMonth() + 1, d: d.getUTCDate() };
}

/**
 * Months for "every month or part of a month" from start to end, counting each
 * calendar month touched as one month. Returns 0 when end is not after start.
 */
export function calendarMonths(startIso: string, endIso: string): number {
  const s = parseIso(startIso);
  const e = parseIso(endIso);
  if (s === null || e === null || e <= s) return 0;
  const a = ymd(s);
  const b = ymd(e);
  return (b.y - a.y) * 12 + (b.m - a.m) + 1;
}

/** The same period counted in 30-day blocks, any part of a block counting as one. */
export function thirtyDayMonths(startIso: string, endIso: string): number {
  const s = parseIso(startIso);
  const e = parseIso(endIso);
  if (s === null || e === null || e <= s) return 0;
  return Math.ceil((e - s) / 30);
}

export function daysBetween(startIso: string, endIso: string): number {
  const s = parseIso(startIso);
  const e = parseIso(endIso);
  if (s === null || e === null) return 0;
  return e - s;
}

/** Due date to deposit tax deducted on the given date, for a non-government deductor. */
export function depositDueDate(deductedIso: string): string {
  const day = parseIso(deductedIso);
  if (day === null) return "";
  const { y, m } = ymd(day);
  if (m === 3) return `${y}-04-30`;
  const nextY = m === 12 ? y + 1 : y;
  const nextM = m === 12 ? 1 : m + 1;
  return `${nextY}-${String(nextM).padStart(2, "0")}-07`;
}

/** Statutory due date of the quarterly TDS statement. fyStart 2026 means FY or tax year 2026-27. */
export function statementDueDate(fyStart: number, quarter: Quarter): string {
  if (quarter === 1) return `${fyStart}-07-31`;
  if (quarter === 2) return `${fyStart}-10-31`;
  if (quarter === 3) return `${fyStart + 1}-01-31`;
  return `${fyStart + 1}-05-31`;
}

/** Financial year (start year) and quarter in which a date falls. */
export function quarterOf(iso: string): { fyStart: number; quarter: Quarter } | null {
  const day = parseIso(iso);
  if (day === null) return null;
  const { y, m } = ymd(day);
  if (m >= 4 && m <= 6) return { fyStart: y, quarter: 1 };
  if (m >= 7 && m <= 9) return { fyStart: y, quarter: 2 };
  if (m >= 10 && m <= 12) return { fyStart: y, quarter: 3 };
  return { fyStart: y - 1, quarter: 4 };
}

export function actForDate(iso: string): Act {
  return iso < NEW_ACT_FROM ? "1961" : "2025";
}

export function actForYear(fyStart: number): Act {
  return fyStart >= 2026 ? "2025" : "1961";
}

/** Adds one calendar month, clamping to the last day of a shorter month. */
export function addOneMonth(iso: string): string {
  const day = parseIso(iso);
  if (day === null) return "";
  const { y, m, d } = ymd(day);
  const first = Date.UTC(y, m, 1);
  const f = new Date(first);
  const lastDay = new Date(Date.UTC(f.getUTCFullYear(), f.getUTCMonth() + 1, 0)).getUTCDate();
  return toIso(Date.UTC(f.getUTCFullYear(), f.getUTCMonth(), Math.min(d, lastDay)) / DAY_MS);
}

export type InterestPart = {
  /** Calendar months counted, each part of a month as a full month. */
  months: number;
  /** The same period in 30-day blocks, for comparison. */
  thirtyDayMonths: number;
  rate: number;
  interest: number;
  from: string;
  to: string;
  /** True when the default has not ended and interest is still running on the "as on" date. */
  running: boolean;
};

export type FeeResult = {
  act: Act;
  dueDate: string;
  endDate: string;
  daysLate: number;
  uncapped: number;
  cap: number;
  fee: number;
  capped: boolean;
  running: boolean;
  /** Filed within one month of the due date, which can avoid the penalty if tax, fee and interest are paid. */
  withinOneMonth: boolean;
};

export type TdsInput = {
  /** TDS amount in rupees. */
  amount: number;
  /** Date tax was deductible: the earlier of credit or payment to the payee. */
  deductible: string;
  /** Date actually deducted, or null if not yet deducted. */
  deducted: string | null;
  /** Date deposited to the government, or null if not yet deposited. */
  deposited: string | null;
  /** Calculation date, normally today. Used where a default is still running. */
  asOn: string;
  /** Late filing fee inputs, or null to skip the fee. */
  fee: null | {
    /** Tax deductible in the statement, which caps the fee. */
    taxInStatement: number;
    fyStart: number;
    quarter: Quarter;
    /** Statement due date; normally statementDueDate(fyStart, quarter), editable for extensions. */
    dueDate: string;
    /** Date filed, or null if not yet filed. */
    filed: string | null;
  };
};

export type TdsResult =
  | {
      ok: true;
      act: Act;
      depositDue: string | null;
      lateDeduction: InterestPart;
      latePayment: InterestPart;
      fee: FeeResult | null;
      interestTotal: number;
      total: number;
    }
  | { ok: false; error: string };

const zeroPart = (from: string, to: string, rate: number): InterestPart => ({
  months: 0,
  thirtyDayMonths: 0,
  rate,
  interest: 0,
  from,
  to,
  running: false,
});

export function calculate(input: TdsInput): TdsResult {
  const { amount, deductible, deducted, deposited, asOn, fee } = input;
  if (!Number.isFinite(amount) || amount <= 0) return { ok: false, error: "Enter the TDS amount in rupees." };
  if (parseIso(asOn) === null) return { ok: false, error: "The calculation date is not a valid date." };
  if (parseIso(deductible) === null) return { ok: false, error: "Enter the date the tax was deductible." };
  if (deductible > asOn) return { ok: false, error: "The date the tax was deductible cannot be after today." };
  if (deducted !== null) {
    if (parseIso(deducted) === null) return { ok: false, error: "Enter a valid date of deduction, or choose not yet deducted." };
    if (deducted < deductible) return { ok: false, error: "The date of deduction cannot be earlier than the date the tax was deductible." };
    if (deducted > asOn) return { ok: false, error: "The date of deduction cannot be after today." };
  }
  if (deposited !== null) {
    if (parseIso(deposited) === null) return { ok: false, error: "Enter a valid date of deposit, or choose not yet deposited." };
    if (deposited > asOn) return { ok: false, error: "The date of deposit cannot be after today." };
    if (deducted !== null && deposited < deducted) return { ok: false, error: "The date of deposit cannot be earlier than the date of deduction." };
    if (deducted === null && deposited < deductible) return { ok: false, error: "The date of deposit cannot be earlier than the date the tax was deductible." };
  }

  // Late deduction: from the date deductible to the date deducted. If tax was
  // never deducted, the period runs to the date the tax was paid, or to the
  // "as on" date while it is still unpaid.
  let lateDeduction: InterestPart;
  {
    const to = deducted ?? deposited ?? asOn;
    const running = deducted === null && deposited === null;
    const months = calendarMonths(deductible, to);
    lateDeduction = {
      months,
      thirtyDayMonths: thirtyDayMonths(deductible, to),
      rate: LATE_DEDUCTION_RATE,
      interest: amount * LATE_DEDUCTION_RATE * months,
      from: deductible,
      to,
      running: running && months > 0,
    };
  }

  // Late payment: only where tax was deducted and paid after the due date. The
  // period runs from the date of deduction, not from the due date.
  let latePayment = zeroPart(deducted ?? deductible, deducted ?? deductible, LATE_PAYMENT_RATE);
  let depositDue: string | null = null;
  if (deducted !== null) {
    depositDue = depositDueDate(deducted);
    const end = deposited ?? asOn;
    if (end > depositDue) {
      const months = calendarMonths(deducted, end);
      latePayment = {
        months,
        thirtyDayMonths: thirtyDayMonths(deducted, end),
        rate: LATE_PAYMENT_RATE,
        interest: amount * LATE_PAYMENT_RATE * months,
        from: deducted,
        to: end,
        running: deposited === null,
      };
    } else {
      latePayment = zeroPart(deducted, end, LATE_PAYMENT_RATE);
    }
  }

  let feeResult: FeeResult | null = null;
  if (fee) {
    if (parseIso(fee.dueDate) === null) return { ok: false, error: "Enter a valid statement due date." };
    if (!Number.isFinite(fee.taxInStatement) || fee.taxInStatement < 0) return { ok: false, error: "Enter the tax in the statement in rupees." };
    if (fee.filed !== null) {
      if (parseIso(fee.filed) === null) return { ok: false, error: "Enter a valid filing date, or choose not yet filed." };
      if (fee.filed > asOn) return { ok: false, error: "The filing date cannot be after today." };
    }
    const end = fee.filed ?? asOn;
    const daysLate = Math.max(0, daysBetween(fee.dueDate, end));
    const uncapped = daysLate * FEE_PER_DAY;
    const cap = fee.taxInStatement;
    const charged = Math.min(uncapped, cap);
    feeResult = {
      act: actForYear(fee.fyStart),
      dueDate: fee.dueDate,
      endDate: end,
      daysLate,
      uncapped,
      cap,
      fee: charged,
      capped: uncapped > cap,
      running: fee.filed === null && daysLate > 0,
      withinOneMonth: fee.filed !== null && fee.filed <= addOneMonth(fee.dueDate),
    };
  }

  const interestTotal = lateDeduction.interest + latePayment.interest;
  return {
    ok: true,
    act: actForDate(deductible),
    depositDue,
    lateDeduction,
    latePayment,
    fee: feeResult,
    interestTotal,
    total: interestTotal + (feeResult ? feeResult.fee : 0),
  };
}
