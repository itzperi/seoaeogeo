import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "FEMA & RBI Compliance for Foreign-Owned Indian Companies";
const description =
  "FEMA and RBI reporting for foreign-owned Indian companies: FC-GPR in 30 days, FC-TRS in 60, FLA by 15 July, Form DI, ODI and APR, late submission fees and compounding.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/fema-rbi-compliance" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/fema-rbi-compliance",
  },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";
const h2Class = "mt-14 text-2xl text-obsidian";
const pClass = "mt-4 max-w-3xl leading-relaxed text-slate";

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="mt-6 max-w-4xl overflow-x-auto rounded-cards border border-ash">
      <table className="w-full text-left text-sm">
        <thead className="bg-carbon text-white">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ash bg-paper">
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (
                <td key={i} className={`px-4 py-3 align-top ${i === 0 ? "font-medium text-obsidian" : "text-slate"}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const CALENDAR = [
  ["Issue of shares to the foreign investor", "Event-based", "Within 60 days of receiving the money; otherwise refund within 15 days after that"],
  ["Form FC-GPR", "Event-based", "Within 30 days of issuing shares or other equity instruments to a person resident outside India"],
  ["Form FC-TRS", "Event-based", "Within 60 days of the transfer of equity instruments or receipt or remittance of funds, whichever is earlier"],
  ["Form ESOP", "Event-based", "Within 30 days of issuing shares under an employee stock option or sweat equity scheme to a non-resident"],
  ["Form CN", "Event-based", "Within 30 days of a start-up issuing or transferring convertible notes to or from a non-resident"],
  ["Form FDI-LLP(I)", "Event-based", "Within 30 days of an LLP receiving capital contribution from a non-resident"],
  ["Form DI", "Event-based", "Within 30 days of allotment, for downstream investment that counts as indirect foreign investment"],
  ["Form ODI (Part I)", "Event-based", "When an Indian entity or resident individual makes an overseas direct investment, through the authorised dealer bank"],
  ["Annual FLA return", "Annual", "By 15 July every year on the RBI's FLAIR portal, for companies and LLPs with outstanding FDI or ODI"],
  ["Annual Performance Report (APR)", "Annual", "By 31 December every year, for each foreign entity in which ODI is held"],
];

const LSF = [
  ["Returns that do not capture flows: FLA return, APR, Form ODI Part II, FC-GPR (B), Form OPI and other periodic returns", "₹7,500 per return"],
  ["Transactional returns: FC-GPR, FC-TRS, Form ESOP, Form DI, Form CN, FDI-LLP(I) and (II), Form InVi, Form ODI Parts I and III", "₹7,500 + (0.025% × A × n), where A is the amount involved and n is the delay in years, rounded up to the nearest month and expressed to two decimal places"],
  ["Cap", "The fee cannot exceed 100% of the amount involved, rounded up to the nearest hundred"],
  ["Time window", "The late submission fee option is available for up to three years from the due date; after that, or where a report is neither filed on time nor with the fee, the contravention goes to compounding or penal action under FEMA"],
  ["Payment", "Paid to the RBI regional office for foreign investment returns, by demand draft, NEFT or RTGS, as instructed through the FIRMS process; the fee is not refundable"],
];

const COMPOUNDING = [
  ["Reporting contraventions (for example, FC-GPR or FC-TRS filed beyond the LSF window)", "Fixed ₹10,000 per regulation contravened, plus a yearly amount that rises with the sum involved: ₹1,000 a year below ₹10 lakh, up to ₹2,00,000 a year at ₹100 crore and above"],
  ["Delayed FLA return, APR or FC-GPR (B)", "₹10,000 per return delayed"],
  ["Shares allotted, or money refunded, after the permitted period", "Fixed ₹30,000 plus 0.30% to 0.75% of the amount, depending on the length of the delay; a higher multiple can apply in some cases of allotment beyond 180 days"],
  ["Other non-reporting contraventions", "Fixed ₹50,000 plus 0.50% to 0.75% of the amount, depending on duration"],
  ["Overall limits", "Not more than 300% of the sum involved; where the sum is below ₹1 lakh, capped at simple interest of 5% a year (reporting) or 10% a year (other contraventions)"],
  ["Application fee", "₹10,000 plus GST at the current rate, with the application filed physically or on the RBI's PRAVAAH portal"],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/fema-rbi-compliance`}
      serviceType="FEMA and RBI Compliance"
      crumbLabel="FEMA and RBI Compliance"
      crumbHref="/fema-rbi-compliance"
      eyebrow="FEMA · RBI Reporting · India"
      h1="FEMA and RBI Compliance for Foreign-Owned Companies in India"
      subhead="Foreign investment reporting on the FIRMS portal, annual FLA returns, downstream investment, overseas investment filings and regularisation of delayed reports, for Indian subsidiaries, GCCs and LLPs with foreign money."
      introHeading="What does FEMA and RBI compliance involve for a foreign-owned company?"
      intro="FEMA and RBI compliance means reporting every foreign investment transaction to the Reserve Bank on time. An Indian company files Form FC-GPR within 30 days of issuing shares to a foreign investor, FC-TRS within 60 days of a share transfer, Form DI within 30 days of a downstream investment, and the FLA return by 15 July each year. Delays attract a late submission fee or compounding."
      citation={{
        label: "Reserve Bank of India: Master Direction, Reporting under FEMA, 1999 (rbi.org.in)",
        href: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10202",
      }}
      keyFacts={[
        { label: "Main filings", value: "FC-GPR, FC-TRS, Form DI, annual FLA return, Form ODI and the Annual Performance Report" },
        { label: "Portals", value: "RBI's FIRMS portal for FDI reporting; FLA return on the RBI's FLAIR portal; ODI through your authorised dealer bank" },
        { label: "Who needs it", value: "Indian companies and LLPs with foreign shareholders or partners, and Indian residents investing in overseas entities" },
        { label: "Key deadlines", value: "FC-GPR within 30 days of allotment; FC-TRS within 60 days; FLA by 15 July; APR by 31 December" },
        { label: "Late submission fee", value: "₹7,500 + (0.025% × amount × years of delay) for transactional reports; ₹7,500 per delayed FLA return or APR; available for up to three years" },
      ]}
      subServicesHeading="Which FEMA filings do we handle?"
      subServices={[
        { name: "FC-GPR", text: "Reporting allotment of shares, CCPS or CCDs to foreign investors, with the valuation certificate, KYC from the bank, FIRC and the company secretary's declaration." },
        { name: "FC-TRS", text: "Reporting transfers between residents and non-residents, including pricing under the valuation guidelines and the bank's KYC for the non-resident party." },
        { name: "Annual FLA return", text: "Return on foreign liabilities and assets by 15 July, prepared from the audited or, if audit is pending, provisional accounts, and revised once the audit is complete." },
        { name: "Downstream investment and Form DI", text: "Checking whether an investment by a foreign-owned Indian company counts as indirect foreign investment, and filing Form DI within 30 days." },
        { name: "ODI and APR", text: "Form ODI for overseas investments by Indian companies and resident individuals, and the Annual Performance Report for each foreign entity every year." },
        { name: "Late fees and compounding", text: "Computing the late submission fee and filing the delayed report, or preparing a compounding application and chronology where the fee route is not available." },
      ]}
      howTo={{
        heading: "How do we keep your FEMA reporting on time?",
        steps: [
          { name: "Map your foreign investment", text: "We review the shareholding, share issues, transfers, loans, downstream investments and overseas investments since incorporation to find every reportable event." },
          { name: "Fix the reporting gaps", text: "Any missed or late report is identified, the late submission fee is computed, and the delayed filing is made first." },
          { name: "Prepare each filing", text: "Valuation reports, board resolutions, FIRC and KYC documents are collected and the form is prepared on the FIRMS portal." },
          { name: "Track RBI approval", text: "We follow the filing through the authorised dealer bank and RBI, answering queries until the acknowledgement is issued." },
          { name: "Run the annual calendar", text: "FLA by 15 July, APR by 31 December and any event-based filings are diarised so nothing lapses again." },
        ],
      }}
      faqs={[
        { question: "What is the time limit for filing Form FC-GPR?", answer: "Form FC-GPR must be filed within 30 days from the date shares or other equity instruments are issued to a person resident outside India. The shares themselves must be issued within 60 days of receiving the investment, or the money must be refunded within the following 15 days." },
        { question: "Who files Form FC-TRS, and by when?", answer: "FC-TRS is filed by the resident party to a transfer of shares between a resident and a non-resident, within 60 days of the transfer or the receipt or remittance of funds, whichever is earlier. The non-resident's KYC comes through the authorised dealer bank handling the payment." },
        { question: "Who has to file the FLA return?", answer: "Every Indian company or LLP with outstanding foreign direct investment or overseas direct investment must file the FLA return on the RBI's FLAIR portal by 15 July each year. It is required even if no fresh investment came in during the year. Provisional figures can be filed by the due date and revised once accounts are audited." },
        { question: "What is the late submission fee for delayed FEMA reporting?", answer: "For a delayed transactional report such as FC-GPR or FC-TRS, the fee is ₹7,500 plus 0.025% of the amount involved for each year of delay, with the delay counted in months and the total capped at the amount involved. For returns such as the FLA return and APR, it is a flat ₹7,500 per return. The option is available for up to three years from the due date." },
        { question: "What happens if a FEMA report is more than three years late?", answer: "The late submission fee route is no longer available, so the contravention has to be compounded with the RBI under Section 15 of FEMA. The RBI's compounding matrix sets a fixed amount plus a variable amount based on the sum involved and the period of delay, and the application carries a ₹10,000 fee plus GST." },
        { question: "When does a foreign-owned Indian company need to file Form DI?", answer: "When an Indian company that is owned or controlled by non-residents invests in the equity of another Indian company, the investment counts as indirect foreign investment. The investing company files Form DI within 30 days of allotment, and the investment must meet the sectoral entry route, caps and pricing rules." },
        { question: "What does an Indian company file when it invests abroad?", answer: "An overseas direct investment is reported in Form ODI through the authorised dealer bank when the investment is made. After that, an Annual Performance Report is filed for each foreign entity by 31 December every year, based on the foreign entity's latest accounts." },
      ]}
      relatedSlugs={["company-registration-india-for-foreigners", "india-subsidiary-compliance-cfo", "transfer-pricing-audit"]}
      relatedPosts={["form-3ceb-due-date-applicability", "post-incorporation-compliance-checklist", "annual-roc-filing-calendar"]}
    >
      <h2 className={h2Class}>What is the annual FEMA calendar for a foreign-owned company?</h2>
      <p className={pClass}>
        These timelines come from the RBI&apos;s Master Directions on foreign investment in India and on reporting under
        FEMA, the Foreign Exchange Management (Non-debt Instruments) Rules, 2019, and the overseas investment framework of
        2022. Event-based filings run from the date of each transaction; the FLA return and APR fall due every year.
      </p>
      <Table head={["Filing", "Type", "When"]} rows={CALENDAR} />

      <h2 className={h2Class}>How is the late submission fee calculated?</h2>
      <p className={pClass}>
        Part XIII of the RBI&apos;s Master Direction on reporting under FEMA sets a uniform late submission fee (LSF)
        matrix, last updated in 2026. Paying the fee with the delayed report regularises the delay without compounding.
        For example, an FC-GPR on ₹1 crore filed one year and three months late carries a fee of ₹7,500 plus
        0.025% × ₹1 crore × 1.25, or ₹10,625. Verify the current amount on the RBI website before paying, as the matrix
        is revised from time to time.
      </p>
      <Table head={["Item", "Late submission fee"]} rows={LSF} />

      <h2 className={h2Class}>What does compounding cost when the late fee route is not available?</h2>
      <p className={pClass}>
        Contraventions that cannot be closed with a late submission fee, including reports more than three years late
        and non-reporting breaches such as late allotment, are compounded under Section 15 of FEMA and the Foreign
        Exchange (Compounding Proceedings) Rules, 2024. The RBI&apos;s Master Direction on compounding (updated April 2025)
        gives the guidance matrix below. It is indicative: the compounding authority can vary the amount for factors
        such as gains made, repeat defaults and the applicant&apos;s conduct.
      </p>
      <Table head={["Type of contravention", "Indicative compounding amount"]} rows={COMPOUNDING} />

      <h2 className={h2Class}>When does downstream investment by a foreign-owned company need reporting?</h2>
      <p className={pClass}>
        An Indian company that is owned or controlled by persons resident outside India, such as a wholly owned
        subsidiary of a foreign parent, makes downstream investment when it invests in the equity instruments of another
        Indian entity. That investment counts as indirect foreign investment in the investee, on the principle that what
        cannot be done directly cannot be done indirectly. The key conditions are:
      </p>
      <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 leading-relaxed text-slate">
        <li>The investee&apos;s sector, entry route, sectoral cap and pricing guidelines apply as if the foreign parent invested directly.</li>
        <li>The investing company needs board approval and, where one exists, approval under its shareholders&apos; agreement.</li>
        <li>Funds must come from abroad or from internal accruals (profits transferred to reserves after tax), not from borrowings in the domestic market.</li>
        <li>Form DI is filed with the RBI within 30 days of allotment of the equity instruments.</li>
        <li>The first-level company obtains an annual certificate from its statutory auditor on compliance for downstream investments, and mentions this compliance in the directors&apos; report.</li>
      </ul>
      <p className={pClass}>
        Downstream investment often arises when a GCC or subsidiary sets up a second Indian entity, acquires a local
        business or takes a stake in a joint venture. We review the structure before the money moves, because pricing
        or funding errors are harder to fix after allotment.
      </p>

      <h2 className={h2Class}>How does FEMA reporting fit with your other India compliance?</h2>
      <p className={pClass}>
        Most FEMA reporting begins at incorporation, when the first shares are allotted to a foreign parent or founder.
        Our{" "}
        <Link href="/company-registration-india-for-foreigners" className={linkClass}>
          company registration service for foreign founders
        </Link>{" "}
        sets up the entity and the first FC-GPR. After that, our{" "}
        <Link href="/india-subsidiary-compliance-cfo" className={linkClass}>
          India subsidiary compliance and CFO service
        </Link>{" "}
        runs FEMA filings alongside ROC, GST, TDS and{" "}
        <Link href="/transfer-pricing-audit" className={linkClass}>
          transfer pricing
        </Link>{" "}
        compliance in one calendar. Intercompany loans and guarantees with the parent are reportable under FEMA and are
        also tested for arm&apos;s length pricing, so we review both together.
      </p>
      <p className={pClass}>
        The FLA return is prepared from the audited figures where the{" "}
        <Link href="/statutory-audit-chennai" className={linkClass}>
          statutory audit
        </Link>{" "}
        is complete by July, and from provisional figures otherwise, with a revision once the audit is signed. Our team
        handles this work from Anna Nagar, Chennai, for companies across India.
      </p>
    </ServicePageTemplate>
  );
}
