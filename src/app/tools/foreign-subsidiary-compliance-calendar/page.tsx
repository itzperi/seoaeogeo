import type { Metadata } from "next";
import Link from "next/link";
import ToolShell, { EstimateNote, H2, LINK, P, ServiceCta, Table, webApplicationNode } from "../ToolShell";
import Calculator from "./Calculator";

const PATH = "/tools/foreign-subsidiary-compliance-calendar";
const TITLE = "India Subsidiary First-Year Compliance Calendar";
const DESCRIPTION =
  "Enter incorporation and share allotment dates to get a dated first-year calendar for an Indian subsidiary: INC-20A, FC-GPR, FLA, Form 3CEB, AGM and ROC filings.";
const H1 = "India Subsidiary First-Year Compliance Calendar";

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
    question: "What is the first compliance deadline for a new Indian subsidiary?",
    answer:
      "Usually the appointment of the first auditor, which the Board makes within 30 days of incorporation. Close behind it is Form FC-GPR, due on the RBI FIRMS portal within 30 days of allotting shares to the foreign parent. The calendar puts both in date order from the dates you enter.",
  },
  {
    question: "When must Form INC-20A be filed?",
    answer:
      "Within 180 days of incorporation. INC-20A is the declaration that the company has received the subscription money from its shareholders and has commenced business. The calendar adds 180 days to your incorporation date to show the last day.",
  },
  {
    question: "When is the first FLA return due?",
    answer:
      "The FLA return is filed with the RBI by 15 July each year. The calendar shows the first one as 15 July after the first 31 March following the allotment of shares to the foreign investor, and the return then recurs every year.",
  },
  {
    question: "Does my subsidiary need a transfer pricing report in its first year?",
    answer:
      "Where the subsidiary has international transactions with its parent or other group companies, an accountant's report is due by 31 October after the end of the tax year, with the income tax return by 30 November. The report is Form 3CEB, and Form 48 from tax year 2026-27 under the Income-tax Act, 2025.",
  },
  {
    question: "Why are UAE documents treated differently from US, UK or Singapore documents?",
    answer:
      "The US, the UK and Singapore are parties to the Apostille Convention, so documents are apostilled there. The UAE is not a party, so documents are attested by the UAE Ministry of Foreign Affairs and then by the Indian Embassy or Consulate before they are used in India.",
  },
  {
    question: "Can the dates in the calendar change?",
    answer:
      "Yes. The dates are computed from the statutory periods. The government sometimes extends due dates, and facts such as when the AGM is actually held change the later dates. We confirm the calendar for your company before anything is filed.",
  },
];

export default function Page() {
  return (
    <ToolShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      eyebrow="Tool · Foreign-owned companies"
      h1={H1}
      lead={
        <>
          A foreign-owned Indian subsidiary faces fixed first-year deadlines: the first auditor within{" "}
          <strong>30 days</strong> of incorporation, Form FC-GPR within 30 days of allotting shares to the parent,
          INC-20A within 180 days, the FLA return by 15 July, and the first AGM within nine months of the first year end.
          Enter your dates for a dated calendar.
        </>
      }
      subhead="A dated first-year calendar covering ROC, RBI and transfer pricing deadlines, with document notes for parents in the US, UK, UAE and Singapore."
      crumbs={CRUMBS}
      ctaService="India subsidiary compliance"
      faqs={FAQS}
      toolNodes={[
        webApplicationNode({
          path: PATH,
          name: H1,
          description:
            "A calendar tool that turns the incorporation and share allotment dates of a foreign-owned Indian subsidiary into a dated list of first-year ROC, RBI and transfer pricing deadlines.",
        }),
      ]}
    >
      <Calculator />

      <EstimateNote>
        <strong>An estimate, not a determination.</strong> Dates are computed from the statutory periods and may move if
        the government extends due dates. C S Rushil &amp; Co. confirms the calendar for your company before anything is
        filed.
      </EstimateNote>

      <h2 className={H2}>How do I use this compliance calendar?</h2>
      <p className={P}>
        The calendar needs only two dates and the parent&apos;s country. Follow the steps below; you can change any
        input and rebuild the calendar as plans firm up.
      </p>
      <ol className="mt-4 max-w-3xl list-decimal space-y-3 pl-6 leading-relaxed text-slate">
        <li>
          <strong>Choose the parent&apos;s country.</strong> This sets the note on how documents signed abroad are
          legalised before they are used in India.
        </li>
        <li>
          <strong>Enter the date of incorporation.</strong> Use the date on the certificate of incorporation issued by
          the Registrar of Companies.
        </li>
        <li>
          <strong>Check the date of first share allotment.</strong> It defaults to 30 days after incorporation. Change
          it to the date the Board allots, or plans to allot, shares to the foreign parent against the money received.
        </li>
        <li>
          <strong>Leave the financial year end at 31 March.</strong> Indian companies follow an April to March year, so
          this input is fixed.
        </li>
        <li>
          <strong>Read the calendar.</strong> The table lists each filing in date order, with the statutory period
          behind each date, followed by the document note for the parent&apos;s country.
        </li>
        <li>
          <strong>Send it for review.</strong> The WhatsApp button sends a short summary of your dates and the first
          deadlines, so a CA can check the calendar against your facts.
        </li>
      </ol>

      <h2 className={H2}>Which filings fall due in a subsidiary&apos;s first year?</h2>
      <p className={P}>
        A foreign-owned company has the same company law filings as any Indian company, plus reporting to the Reserve
        Bank of India on the foreign investment and, where it deals with its group, transfer pricing documentation. The
        table summarises the periods the calendar applies.
      </p>
      <Table
        head={["Filing", "Who it goes to", "Statutory period used"]}
        rows={[
          ["Appointment of first auditor", "Board of directors", "Within 30 days of incorporation"],
          ["Form FC-GPR", "RBI, on the FIRMS portal", "Within 30 days of allotment of shares to the foreign investor"],
          ["Form INC-20A", "Registrar of Companies", "Within 180 days of incorporation"],
          ["FLA return", "RBI", "By 15 July each year, the first after the first 31 March"],
          ["Form 3CEB (Form 48 from tax year 2026-27)", "Income Tax Department", "31 October after the first tax year"],
          ["Income tax return", "Income Tax Department", "30 November, for companies with international transactions"],
          ["First AGM", "Shareholders", "Within 9 months of the end of the first financial year"],
          ["Form AOC-4", "Registrar of Companies", "Within 30 days of the AGM"],
          ["Form MGT-7", "Registrar of Companies", "Within 60 days of the AGM"],
        ]}
      />

      <h2 className={H2}>Why do the first 30 days after incorporation matter so much?</h2>
      <p className={P}>
        Two things happen early. The Board appoints the company&apos;s first auditor within 30 days of incorporation,
        and the parent remits the subscription money so that shares can be allotted. Once shares are allotted to the
        foreign investor, Form FC-GPR is due on the RBI FIRMS portal within 30 days of the allotment. FC-GPR reports the
        issue of shares against foreign investment, and it is supported by the bank&apos;s confirmation of the
        inward remittance, a valuation and a company secretary&apos;s certificate, so the paperwork is best prepared
        before the allotment rather than after it.
      </p>
      <p className={P}>
        An FC-GPR can be missed when an allotment is made in a board meeting and nobody links it to the RBI
        deadline. Putting the allotment date into
        the calendar shows the FC-GPR date straight away. Our{" "}
        <Link href="/fema-rbi-compliance" className={LINK}>
          FEMA and RBI compliance service
        </Link>{" "}
        covers FC-GPR, the FLA return and the other foreign investment reporting.
      </p>

      <h2 className={H2}>What is INC-20A and why does it have a 180-day limit?</h2>
      <p className={P}>
        Form INC-20A is the company&apos;s declaration to the Registrar of Companies that every subscriber has paid for
        the shares they agreed to take and that the company has commenced business. It must be filed within 180 days of
        incorporation. For a subsidiary, that means the parent&apos;s subscription money has to arrive in the
        company&apos;s Indian bank account in time, which depends on the parent&apos;s internal approvals and its
        bank. The calendar shows the 180th day so the treasury team abroad has a firm date to work towards.
      </p>

      <h2 className={H2}>How are the RBI FLA return and transfer pricing dates worked out?</h2>
      <p className={P}>
        The Foreign Liabilities and Assets return is an annual RBI return for Indian companies that have received
        foreign direct investment. It is due by 15 July each year. The calendar shows the first one as 15 July after the
        first 31 March following the allotment to the foreign investor, and you should expect it every year after that.
      </p>
      <p className={P}>
        Where the subsidiary has international transactions with its parent or other group companies, such as service
        fees, cost recharges, royalties or loans, an accountant&apos;s report on transfer pricing is required. The
        calendar shows it as due by 31 October after the end of the first tax year, with the income tax return by 30
        November. The report has been Form 3CEB; under the Income-tax Act, 2025, it is Form 48 from tax year 2026-27
        onward, and the calendar labels it accordingly. Our{" "}
        <Link href="/transfer-pricing-audit" className={LINK}>
          transfer pricing audit service
        </Link>{" "}
        covers the benchmarking and the report.
      </p>

      <h2 className={H2}>When is the first AGM, and what follows it?</h2>
      <p className={P}>
        A company holds its first annual general meeting within nine months of the end of its first financial year.
        For a year ending 31 March, that is by 31 December. After the AGM, the financial statements are filed with the
        Registrar in Form AOC-4 within 30 days, and the annual return in Form MGT-7 within 60 days. The calendar assumes
        the AGM is held on its last permitted day, so the AOC-4 and MGT-7 dates it shows are the latest dates; an
        earlier AGM brings both forward.
      </p>
      <p className={P}>
        If the company is incorporated between 1 January and 31 March, its first financial year under the Companies Act
        may run to 31 March of the following year, while the first tax year still ends on the 31 March just after
        incorporation. The calendar reflects that split and says so in the result. Ask us to confirm which year end
        your company is using before you plan the audit.
      </p>

      <h2 className={H2}>What documents does the parent company need from abroad?</h2>
      <p className={P}>
        The parent signs board resolutions, subscription documents and authorisations, and its directors may sign
        declarations as well. Documents signed outside India are legalised before they are used here, and the route
        depends on the country.
      </p>
      <Table
        head={["Parent country", "How documents are legalised", "More on setting up from there"]}
        rows={[
          ["United States", "Apostille by the relevant Secretary of State", "India subsidiary for US companies"],
          ["United Kingdom", "Apostille by the Foreign, Commonwealth & Development Office (FCDO)", "India subsidiary for UK companies"],
          ["Singapore", "Apostille through the Singapore Academy of Law", "India subsidiary for Singapore companies"],
          ["UAE", "Not party to the Apostille Convention: attestation by the UAE Ministry of Foreign Affairs and the Indian Embassy or Consulate", "India subsidiary for UAE companies"],
        ]}
      />
      <p className={P}>
        Country guides:{" "}
        <Link href="/india-subsidiary-for-us-companies" className={LINK}>
          India subsidiary for US companies
        </Link>
        ,{" "}
        <Link href="/india-subsidiary-for-uk-companies" className={LINK}>
          India subsidiary for UK companies
        </Link>
        ,{" "}
        <Link href="/india-subsidiary-for-uae-companies" className={LINK}>
          India subsidiary for UAE companies
        </Link>{" "}
        and{" "}
        <Link href="/india-subsidiary-for-singapore-companies" className={LINK}>
          India subsidiary for Singapore companies
        </Link>
        . If you have not yet incorporated, start with{" "}
        <Link href="/company-registration-india-for-foreigners" className={LINK}>
          company registration in India for foreigners
        </Link>
        , and use our{" "}
        <Link href="/tools/company-registration-government-fee-calculator" className={LINK}>
          company registration government fee calculator
        </Link>{" "}
        for the statutory charges.
      </p>

      <h2 className={H2}>How should a foreign parent plan around these dates?</h2>
      <p className={P}>
        Most first-year delays start outside India. Board resolutions have to be signed, legalised and couriered, the
        subscription money has to clear the parent&apos;s treasury approvals, and someone in group finance has to
        collect the bank&apos;s remittance details for the RBI filing. Working backwards from the calendar helps: if
        FC-GPR is due 30 days after allotment, the documents for it should be ready on the day of allotment, and the
        remittance should be in the Indian bank account well before INC-20A falls due.
      </p>
      <p className={P}>
        It also helps to decide early who in the group owns each filing. The Indian directors sign most of the forms,
        but the information comes from the parent: shareholding details, valuation inputs, intercompany agreements and
        the figures for transfer pricing. A shared calendar with named owners and internal target dates a week or two
        before each statutory date keeps the first year orderly, and the same calendar carries into the second year
        with the FLA return, the audit and the annual filings recurring.
      </p>

      <h2 className={H2}>Is this calendar the full list of compliance for the year?</h2>
      <p className={P}>
        No. It covers the main first-year company law, RBI and transfer pricing deadlines. A subsidiary also has
        recurring work that the calendar does not list: monthly and quarterly GST and TDS returns, payroll, board
        meetings, statutory registers and the audit itself. Many foreign parents prefer one team to hold the whole
        calendar and report to group finance each month. Our{" "}
        <Link href="/india-subsidiary-compliance-cfo" className={LINK}>
          India subsidiary compliance and CFO retainer
        </Link>{" "}
        does that, and you can start with a 15-minute consultation.
      </p>

      <h2 className={H2}>Is the result of this calendar final?</h2>
      <p className={P}>
        No. The dates are computed from the statutory periods and may move if the government extends due dates or if
        the actual dates of allotment and the AGM differ from those assumed. C S Rushil &amp; Co. advises on Indian law
        only; tax and company law in the parent&apos;s country are for its own advisers. Clients abroad are served
        online.
      </p>

      <ServiceCta
        links={[
          { href: "/india-subsidiary-compliance-cfo", label: "India subsidiary compliance" },
          { href: "/fema-rbi-compliance", label: "FEMA and RBI compliance" },
          { href: "/transfer-pricing-audit", label: "Transfer pricing audit" },
        ]}
      >
        Want one team to own the calendar? Read about our{" "}
        <Link href="/india-subsidiary-compliance-cfo" className={LINK}>
          India subsidiary compliance and CFO retainer
        </Link>
        , which covers ROC, FEMA, transfer pricing, GST, TDS and group reporting.
      </ServiceCta>
    </ToolShell>
  );
}
