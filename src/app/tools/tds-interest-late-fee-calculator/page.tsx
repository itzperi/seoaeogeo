import type { Metadata } from "next";
import Link from "next/link";
import ToolShell, { EstimateNote, H2, LINK, P, ServiceCta, Table, webApplicationNode } from "../ToolShell";
import Calculator from "./Calculator";

const PATH = "/tools/tds-interest-late-fee-calculator";
const TITLE = "TDS Interest & Late Filing Fee Calculator | 234E, 201(1A)";
const DESCRIPTION =
  "Work out TDS interest at 1% and 1.5% for each month or part of a month, and the ₹200 a day late filing fee capped at the TDS, under the 1961 and 2025 Acts.";
const H1 = "TDS Interest and Late Filing Fee Calculator";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: H1,
    description: DESCRIPTION,
    url: PATH,
  },
};

const CRUMBS = [
  { name: "Tools", href: "/tools" },
  { name: H1, href: PATH },
];

const FAQS = [
  {
    question: "How is interest on late payment of TDS calculated?",
    answer:
      "At 1.5% of the TDS for every month or part of a month, counted from the date the tax was deducted, not from the due date, to the date it is paid. Late deduction carries a separate 1% a month from the date the tax was deductible to the date it was deducted. Both rates are the same under the 1961 Act and the 2025 Act.",
  },
  {
    question: "Does a delay of one or two days cost a full month of interest?",
    answer:
      "Often more than one. Any part of a month counts as a full month, and TDS processing counts each calendar month the period touches. Tax deducted on 28 June and paid on 9 July, two days after the 7 July due date, attracts 1.5% for June and 1.5% for July: two months, or 3% in all.",
  },
  {
    question: "What is the late fee for filing a TDS return late, and is there a cap?",
    answer:
      "₹200 for every day the statement is late, under section 234E of the 1961 Act or section 427 of the 2025 Act. The fee cannot exceed the tax deductible in the statement, and it must be paid before the statement is filed. A penalty of ₹10,000 to ₹1,00,000 can apply on top.",
  },
  {
    question: "Did the Income-tax Act, 2025 change TDS interest or the late fee?",
    answer:
      "No change in the rates. The department's tax payment FAQs confirm that interest stays at 1% and 1.5% a month under section 398(3)(a), and section 427 keeps the ₹200 a day fee with the same cap. Payments or credits up to 31 March 2026 stay under the 1961 Act.",
  },
  {
    question: "Which challan do I use to pay TDS interest and the late fee?",
    answer:
      "Pay through e-Pay Tax on the income tax e-filing portal after choosing the Act that applies. For tax year 2026-27 onwards the TDS challan is ITNS 281N; for amounts under the 1961 Act it remains ITNS 281. Enter the interest and fee in the tax break-up so they can be matched with the statement.",
  },
];

const SOURCES = [
  { href: "https://www.incometaxindia.gov.in/w/section-398-6", label: "Section 398, Income-tax Act, 2025 (interest for failure to deduct or pay)" },
  { href: "https://www.incometaxindia.gov.in/w/section-427-6", label: "Section 427, Income-tax Act, 2025 (fee for default in furnishing statements)" },
  { href: "https://www.incometaxindia.gov.in/w/section-461-6", label: "Section 461, Income-tax Act, 2025 (penalty for failure to furnish statements)" },
  { href: "https://www.incometaxindia.gov.in/w/section-201-65", label: "Section 201, Income-tax Act, 1961" },
  { href: "https://www.incometaxindia.gov.in/w/section-234e-16", label: "Section 234E, Income-tax Act, 1961" },
  { href: "https://www.incometaxindia.gov.in/w/section-271h-13", label: "Section 271H, Income-tax Act, 1961" },
  { href: "https://www.incometaxindia.gov.in/w/rule-219-1", label: "Rule 219, Income-tax Rules, 2026 (quarterly statement due dates)" },
  { href: "https://www.incometaxindia.gov.in/w/rule-31a", label: "Rule 31A, Income-tax Rules, 1962" },
  { href: "https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/tax-payments-faq", label: "Tax payments FAQs, income tax e-filing portal" },
  { href: "https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/tds-compliance", label: "TDS compliance FAQs, income tax e-filing portal" },
  { href: "https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/create-challan-through-pan-login-itns281n-faq", label: "ITNS 281N FAQs, income tax e-filing portal" },
  { href: "https://www.tdscpc.gov.in/", label: "TRACES, TDS Centralized Processing Cell" },
];

export default function Page() {
  return (
    <ToolShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      eyebrow="Tool · TDS compliance"
      h1={H1}
      lead={
        <>
          Late TDS costs <strong>1% a month</strong> for late deduction and <strong>1.5% a month</strong> for late payment,
          with any part of a month counted as a full month, plus a late filing fee of <strong>₹200 a day</strong> capped at
          the TDS in the statement. Enter your dates below to see each amount and the total.
        </>
      }
      subhead="Interest for late deduction and late payment, the late filing fee with its cap, and the sections that apply under the 1961 and 2025 Acts."
      crumbs={CRUMBS}
      ctaService="TDS interest and late fee"
      faqs={FAQS}
      toolNodes={[
        webApplicationNode({
          path: PATH,
          name: H1,
          description:
            "A calculator that works out interest for late deduction and late payment of TDS, counting each month or part of a month, and the late filing fee for TDS statements with its cap, under the Income-tax Act, 1961 and the Income-tax Act, 2025.",
        }),
      ]}
    >
      <Calculator />

      <EstimateNote>
        <strong>An estimate, not a demand.</strong> The figures follow the sections and rules linked at the foot of this
        page. TRACES works out the final amount when it processes your statement. C S Rushil &amp; Co. checks the
        computation against your justification report before you pay.
      </EstimateNote>

      <h2 className={H2}>How is interest on late TDS counted?</h2>
      <p className={P}>
        There are two separate charges. If tax is deducted late, interest is 1% of the tax for every month or part of a
        month, from the date it was deductible to the date it is actually deducted. If tax is deducted but paid to the
        government late, interest is 1.5% for every month or part of a month, from the date of deduction to the date of
        payment. The second charge runs from the date of deduction, not from the due date, so paying a few days late costs
        interest for the whole period.
      </p>
      <p className={P}>
        &quot;Part of a month&quot; is where most of the cost hides. TDS processing counts each calendar month that the
        period touches as one month. Some tribunal orders have read a month as a period of 30 days instead, so the
        calculator shows both counts, but the calendar month figure is the one a TRACES demand will usually show.
      </p>
      <p className={P}>
        <strong>Worked example.</strong> A company deducts ₹50,000 on 28 June 2026. The tax is due by 7 July, but it is
        paid on 9 July. The delay is two days and the period from deduction is only 11 days, yet it touches June and July,
        so interest is 1.5% for two months: ₹1,500. Had the tax been paid on 7 July, the interest would be nil. Similarly,
        tax that became deductible on 30 April but was deducted on 2 May costs 1% for April and 1% for May, which is
        ₹1,000 on ₹50,000.
      </p>
      <Table
        head={["Charge", "Rate", "Income-tax Act, 1961", "Income-tax Act, 2025"]}
        rows={[
          ["Interest for late deduction", "1% a month or part of a month", "Section 201(1A)(i)", "Section 398(3)(a)(i)"],
          ["Interest for late payment after deduction", "1.5% a month or part of a month", "Section 201(1A)(ii)", "Section 398(3)(a)(ii)"],
          ["Late filing fee for TDS statements", "₹200 a day, capped at the tax deductible", "Section 234E", "Section 427"],
          ["Penalty for a late or incorrect statement", "₹10,000 to ₹1,00,000, at the officer's discretion", "Section 271H", "Section 461"],
        ]}
      />
      <p className={P}>
        Which Act applies depends on when the sum was paid or credited to the payee. Amounts paid or credited up to 31
        March 2026 stay under the 1961 Act, even if the tax is deposited later; amounts from 1 April 2026 fall under the
        2025 Act. Our{" "}
        <Link href="/blog/income-tax-act-2025-section-mapping" className={LINK}>
          table of old and new section numbers
        </Link>{" "}
        covers the other TDS provisions.
      </p>

      <h2 className={H2}>When is TDS due, and what does the calculator assume?</h2>
      <p className={P}>
        Tax deducted in a month is due by the 7th of the next month, and tax deducted in March by 30 April. The calculator
        uses these dates, which apply to non-government deductors paying by challan. A tenant or buyer who pays through a
        challan-cum-statement has a different date, 30 days from the end of the month of deduction, as our guide to{" "}
        <Link href="/blog/tds-on-rent" className={LINK}>
          TDS on rent
        </Link>{" "}
        explains. For those cases, read the late payment line with that date in mind.
      </p>

      <h2 className={H2}>How much is the late filing fee, and what is the cap?</h2>
      <p className={P}>
        A quarterly TDS statement filed after its due date attracts a fee of ₹200 for every day the delay continues. The
        fee cannot exceed the tax deductible in that statement, and it must be paid before the statement is filed. The
        statements are due by 31 July, 31 October, 31 January and 31 May for the four quarters, as set out in our post on{" "}
        <Link href="/blog/tds-return-filing-deadlines" className={LINK}>
          TDS return filing deadlines
        </Link>
        . For example, a statement for July to September 2026 with ₹5,000 of TDS, due 31 October 2026 and filed on 9
        December, is 39 days late. The fee works out to ₹7,800 but is capped at ₹5,000.
      </p>

      <h2 className={H2}>What penalty can apply on top of the fee?</h2>
      <p className={P}>
        The Assessing Officer may also impose a penalty of ₹10,000 to ₹1,00,000 for a late statement or one with incorrect
        information. For lateness alone, no penalty applies if the tax, fee and interest were paid and the statement was
        filed within one month of the due date. The calculator flags this exposure but does not compute a penalty, because
        it is discretionary.
      </p>

      <h2 className={H2}>How do I pay the interest and the fee?</h2>
      <p className={P}>
        Use the e-Pay Tax service on the income tax e-filing portal, log in with your TAN and select the Act that applies.
        For tax year 2026-27 onwards the TDS challan is ITNS 281N; for amounts governed by the 1961 Act, ITNS 281 continues.
        Enter the interest and the fee in the tax break-up, keep the challan details, and quote them in the statement or
        correction statement so that TRACES can match the payment.
      </p>

      <h2 className={H2}>What should I do about a TRACES default notice?</h2>
      <p className={P}>
        When a statement is processed with defaults, TRACES shows the amount due for short payment, short deduction,
        interest and late filing fee. Do not pay the demand blindly. First download the justification report from TRACES,
        which lists each default by challan and deductee. Many defaults come from a wrong date, an untagged challan or a PAN
        error rather than real late payment, and those are fixed by a correction statement. Where the interest or fee is
        genuinely due, pay it by challan and file a correction statement that tags the challan. Our{" "}
        <Link href="/tds-return-filing-chennai" className={LINK}>
          TDS return filing service
        </Link>{" "}
        handles this reconciliation and the correction.
      </p>

      <h2 className={H2}>Is the result of this calculator final?</h2>
      <p className={P}>
        No. It applies the rates and dates stated here to the dates you enter. TRACES may round figures, extensions of a due
        date by CBDT change the fee, and the reading of &quot;month&quot; has been disputed before tribunals. We confirm the
        figure for your TAN before anything is paid or filed.
      </p>

      <h2 className={H2}>Sources</h2>
      <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate">
        {SOURCES.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" className={LINK}>
              {s.label}
            </a>
          </li>
        ))}
      </ul>

      <ServiceCta
        links={[
          { href: "/tds-return-filing-chennai", label: "TDS return filing" },
          { href: "/blog/tds-return-filing-deadlines", label: "TDS return deadlines" },
          { href: "/direct-tax", label: "Direct tax services" },
        ]}
      >
        Facing a TDS default or a pile of late statements? We reconcile your challans, reply to TRACES defaults and file
        correction statements. Read about our{" "}
        <Link href="/tds-return-filing-chennai" className={LINK}>
          TDS return filing service
        </Link>
        .
      </ServiceCta>
    </ToolShell>
  );
}
