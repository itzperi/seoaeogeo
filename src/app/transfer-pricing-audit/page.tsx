import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "Transfer Pricing Study & Form 3CEB / Form 48 in India";
const description =
  "Transfer pricing documentation and the accountant's report for Indian subsidiaries and GCCs: Form 3CEB for FY 2025-26, Form 48 from tax year 2026-27, benchmarking, safe harbour and APAs.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/transfer-pricing-audit" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/transfer-pricing-audit",
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

const WHO_MUST_COMPLY = [
  ["Indian subsidiary paying its foreign parent for services, software, royalty or management fees", "Yes, from the first rupee", "International transaction with an associated enterprise: Sections 162 and 163 of the Income-tax Act, 2025 (Sections 92A and 92B of the 1961 Act)"],
  ["Global capability centre (GCC) or captive billing a foreign group company on cost plus", "Yes", "Provision of services to a non-resident associated enterprise is an international transaction"],
  ["Intercompany loan, guarantee, receivable or cost-sharing arrangement with a foreign group entity", "Yes", "Capital financing, guarantees, receivables and cost allocations are listed in Section 163(1)"],
  ["Transaction with an unrelated party where the terms are fixed in substance by a foreign group company", "Can be deemed an international transaction", "Section 163(2) (earlier Section 92B(2))"],
  ["Transactions between related Indian entities, such as a unit claiming a profit-linked deduction", "Only if the aggregate exceeds ₹20 crore in the tax year", "Specified domestic transaction: Section 164 (earlier Section 92BA)"],
  ["Indian group company with no foreign associated enterprise and no specified domestic transaction", "No transfer pricing report", "Related-party rules under the Companies Act still apply"],
];

const ACT_MAPPING = [
  ["Income to be computed at arm's length price", "Section 92", "Section 161"],
  ["Meaning of associated enterprise", "Section 92A", "Section 162"],
  ["Meaning of international transaction", "Section 92B", "Section 163"],
  ["Specified domestic transaction (₹20 crore threshold)", "Section 92BA", "Section 164"],
  ["Methods for arm's length price", "Section 92C; Rules 10A–10CA", "Section 165; Rules 77–81"],
  ["Reference to Transfer Pricing Officer", "Section 92CA", "Section 166"],
  ["Safe harbour", "Section 92CB; Rules 10TA–10TG", "Section 167; Rules 86–102"],
  ["Advance pricing agreement", "Sections 92CC and 92CD", "Sections 168 and 169"],
  ["Secondary adjustment", "Section 92CE", "Section 170"],
  ["Documentation", "Section 92D; Rule 10D", "Section 171; Rule 84"],
  ["Accountant's report", "Section 92E; Rule 10E; Form 3CEB", "Section 172; Rule 85; Form 48"],
  ["Master file", "Rule 10DA; Form 3CEAA", "Rule 123; Form 56"],
  ["Country-by-country report", "Section 286; Form 3CEAD", "Section 511; Form 59"],
];

const DUE_DATES = [
  ["Accountant's report", "Form 3CEB by 31 October 2026", "Form 48 by 31 October 2027 (one month before the return due date, Rule 85(2))"],
  ["Income-tax return for a company with transfer pricing", "30 November 2026", "30 November 2027 (Section 263(1)(c), where Section 172 applies)"],
  ["Master file", "Form 3CEAA by the return due date", "Form 56 by the return due date under Section 263(1)(c)"],
  ["Intimation about the CbCR filer (Indian entity of a foreign-parented group)", "Form 3CEAC", "Form 58, two months before the CbCR is due"],
  ["Country-by-country report", "Form 3CEAD within 12 months from the end of the reporting accounting year", "Form 59 within 12 months from the end of the reporting accounting year"],
  ["Safe harbour option", "Form 3CEFA under the 1962 Rules (verify the conditions that applied for that year)", "Form 49 by the return due date of the first of five tax years for IT services (Rule 91)"],
];

const DOCUMENTATION = [
  ["Entity and group", "Ownership structure; profile of the multinational group with name, address, legal status and tax residence of each associated enterprise you transacted with; business and industry description", "Rule 84(1)(a)–(c)"],
  ["Transactions", "Nature, terms and prices of each transaction with each associated enterprise, with quantum and value", "Rule 84(1)(d)"],
  ["Functional analysis", "Functions performed, risks assumed and assets employed by you and by the associated enterprise", "Rule 84(1)(e)"],
  ["Business records", "Economic and market analyses, forecasts and budgets that bear on the transactions", "Rule 84(1)(f)"],
  ["Economic analysis", "Uncontrolled transactions considered, comparability analysis, methods considered, why the most appropriate method was chosen, the actual working, and comparability adjustments", "Rule 84(1)(g)–(j)"],
  ["Assumptions and adjustments", "Assumptions, policies and price negotiations that affected pricing; any adjustment made to align prices and income", "Rule 84(1)(k)–(l)"],
  ["Supporting evidence", "Agreements, invoices, emails and correspondence on negotiated terms, published accounts, market studies and price publications", "Rule 84(5)"],
];

const METHODS = [
  ["Comparable uncontrolled price (CUP)", "Compares the price charged with the price in a comparable transaction between unrelated parties", "Interest on intercompany loans, commodity purchases with quoted prices, royalties where an external licence exists"],
  ["Resale price method (RPM)", "Starts from the resale price to an unrelated customer and deducts a gross margin a comparable distributor would earn", "Buy-sell distributors that resell group products without significant value addition"],
  ["Cost plus method (CPM)", "Adds a gross mark-up to the direct and indirect costs of production or service", "Contract manufacturers and some service arrangements where gross-level cost data is comparable"],
  ["Profit split method (PSM)", "Splits combined profit between associated enterprises by their relative contribution", "Highly integrated operations or where both sides contribute unique intangibles"],
  ["Transactional net margin method (TNMM)", "Compares a net profit indicator, such as operating profit on total cost or on sales, with comparable companies", "Captive IT, ITeS and KPO centres, contract R&D and limited-risk distributors; the method most often used for Indian captives"],
  ["Other method", "Any method that uses the price that has been or would be charged between unrelated parties in similar circumstances", "Business transfers, intangibles and unique transactions where quotations or valuations are the best evidence (Rule 78)"],
];

const FAR = [
  ["Functions", "Service delivery, quality control and people management; strategy and client contracting sit with the parent", "Product strategy, sales, pricing decisions and R&D direction"],
  ["Assets", "Office lease, IT equipment and an assembled workforce; no ownership of the intangibles it creates", "Brand, patents, customer relationships and proprietary software"],
  ["Risks", "Limited: costs are reimbursed with a mark-up, so market and capacity risk sit with the parent", "Market, credit, product liability, inventory and R&D failure risk"],
  ["Typical outcome", "A stable, routine return, usually tested under TNMM on operating cost", "Residual profit or loss; an entrepreneur in India needs stronger economic support"],
];

const SAFE_HARBOUR = [
  ["Information technology services (software development, ITeS, KPO, software-related contract R&D)", "Operating margin on operating expense of at least 15.5%, where operating revenue from the transaction does not exceed ₹2,000 crore; the option runs for five consecutive tax years"],
  ["Contract R&D on generic pharmaceutical drugs", "Operating margin on operating expense of at least 24%, where operating revenue does not exceed ₹300 crore"],
  ["Intra-group loan in rupees", "Interest of at least SBI's one-year MCLR on 1 April of the tax year plus a spread of 175 to 625 basis points depending on the borrower's credit rating"],
  ["Intra-group loan in foreign currency", "Interest of at least the reference rate for that currency defined in Rule 89, as on 30 September, plus a rating-based spread"],
  ["Corporate guarantee", "Commission of at least 1% a year on the amount guaranteed, subject to the amount and credit-rating conditions in Rule 88"],
  ["Core / non-core auto components (manufacture and export)", "Operating margin on operating expense of at least 12% (core) or 8.5% (non-core)"],
  ["Receipt of low value-adding intra-group services", "Aggregate charge, including a mark-up of up to 5%, not exceeding ₹10 crore, with the cost pool and allocation keys certified by an accountant"],
  ["Data centre services", "Operating margin on operating expense of at least 15%"],
];

const MASTER_FILE = [
  ["Form 56 (earlier Form 3CEAA): master file", "Consolidated group revenue above ₹500 crore, and international transactions above ₹50 crore or intangible property transactions above ₹10 crore in the accounting year. Part A is filed by every constituent entity even below these limits.", "Return due date"],
  ["Form 57 (earlier Form 3CEAB): designated entity for master file", "Where more than one Indian entity of the group must file Form 56", "At least 30 days before Form 56 is due"],
  ["Form 58 (earlier Form 3CEAC): CbCR intimation", "Indian constituent entities of an international group whose parent is not resident in India", "Two months before Form 59 is due"],
  ["Form 59 (earlier Form 3CEAD): country-by-country report", "Indian parent or alternate reporting entity where consolidated group revenue exceeds ₹6,400 crore; an Indian subsidiary only in the cases listed in Section 511, for example where the parent's country does not exchange CbCRs with India", "Within 12 months from the end of the reporting accounting year"],
  ["Form 60 (earlier Form 3CEAE): designated entity for CbCR", "Groups with more than one Indian constituent entity", "At least 30 days before Form 59 is due"],
];

const PENALTIES = [
  ["Report from an accountant not furnished on time", "Fee of ₹50,000 for a delay up to one month and ₹1,00,000 after that: Section 428(d), from tax year 2026-27", "Penalty under Section 271BA for FY 2025-26 and earlier"],
  ["Documentation not kept, transaction not reported, or incorrect information maintained or furnished", "Penalty of 2% of the value of each such transaction: Section 442(1)", "Section 271AA"],
  ["Master file information not furnished", "Penalty of ₹5,00,000: Section 442(2)", "Section 271AA(2)"],
  ["Documentation not produced within the time allowed in a notice (10 days, extendable by up to 30)", "Penalty of 2% of the value of the transaction: Section 457", "Section 271G"],
  ["Failure to report an international or specified domestic transaction", "Treated as misreporting: penalty of 200% of the tax on under-reported income, Section 439(10) and (11)(f)", "Section 270A"],
  ["CbCR not furnished", "₹5,000 a day for the first month, ₹15,000 a day after that, and ₹50,000 a day once a penalty order is served: Section 459", "Section 271GB"],
  ["Primary adjustment of ₹1 crore or more", "Excess money must be repatriated within the prescribed time or is treated as an advance carrying interest; alternatively, additional tax of 18% can be paid: Section 170", "Section 92CE"],
];

const CAPTIVE_MODELS = [
  ["Captive IT / ITeS / GCC on cost plus", "Software development, engineering, analytics, finance and HR shared services for the group", "TNMM, operating profit on total operating cost", "Which costs are in the base (ESOP recharges, pass-through costs, forex), and whether the India team's role has grown into strategy or product ownership"],
  ["Contract R&D centre", "Engineering, product development or drug research where the parent owns the results", "TNMM on cost; safe harbour for software and generic-pharma R&D", "Evidence that the parent controls the research and bears the risk; who owns the intangibles"],
  ["Limited-risk distributor", "Imports and resells group products, often with marketing support", "RPM or TNMM on operating margin on sales", "Losses or low margins in early years, marketing spend that may build the parent's brand, alignment with customs valuation"],
  ["Contract or toll manufacturer", "Manufactures to the parent's specifications and sells back to the group", "TNMM or CPM on cost", "Capacity under-utilisation, raw-material prices set by the group, inventory risk allocation"],
  ["Recipient of management or support services", "Pays the parent for IT, legal, HR or regional management services", "Benefit test, then cost allocation with a mark-up; safe harbour for low value-adding services", "Proof that the services were received and benefited India; exclusion of shareholder and duplicate costs"],
  ["Financing arrangements", "Intercompany loans, guarantees, cash pooling and delayed receivables", "CUP using market interest rates; safe harbour where eligible", "Credit rating of the borrower, interest on overdue receivables, FEMA conditions on the loan"],
];

const CALENDAR = [
  ["April–June", "Agree the year's pricing policy and mark-up with the group TP team; sign or renew intercompany agreements; check whether safe harbour or an APA is worth considering"],
  ["Each quarter", "Compare actual margins with the policy and raise true-up invoices before the gap grows; track new transaction types such as ESOP recharges or secondments"],
  ["July–September", "Close the audited accounts; refresh the comparable set with the latest available data; hold FAR interviews and draft the documentation"],
  ["By 31 October", "Furnish Form 3CEB (FY 2025-26) or Form 48 (tax year 2026-27 onwards)"],
  ["By 30 November", "File the income-tax return, and the master file (Form 56) where it applies"],
  ["Calendar-year groups", "Form 58 intimation two months before the group's CbCR deadline; Form 59 within 12 months of the parent's year-end, for example by 31 December for a December year-end"],
  ["January–March", "Year-end true-up so the books close within the arm's length range; plan the next year's policy and any APA renewal"],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/transfer-pricing-audit`}
      serviceType="Transfer Pricing Audit"
      crumbLabel="Transfer Pricing Audit"
      crumbHref="/transfer-pricing-audit"
      eyebrow="Transfer Pricing · India"
      h1="Transfer Pricing Audit and Documentation in India"
      subhead="Arm's-length documentation, benchmarking and the accountant's report in Form 3CEB or Form 48 for Indian subsidiaries, global capability centres and Indian groups, handled from our Anna Nagar, Chennai office."
      introHeading="What is a transfer pricing audit in India?"
      intro="A transfer pricing audit in India is a Chartered Accountant's review and report confirming that a company's transactions with its foreign parent or group companies are priced at arm's length. The report is filed in Form 3CEB for FY 2025-26 and in Form 48 from tax year 2026-27, one month before the return due date, backed by documentation under Rule 84."
      citation={{ label: "Income Tax Department: Form No. 48 FAQs (incometaxindia.gov.in)", href: "https://www.incometaxindia.gov.in/documents/d/guest/form-48-faqs" }}
      keyFacts={[
        { label: "Who must comply", value: "Anyone with an international transaction with an associated enterprise (no minimum value), or specified domestic transactions above ₹20 crore in the year" },
        { label: "Accountant's report", value: "Form 3CEB under Section 92E of the 1961 Act for FY 2025-26; Form 48 under Section 172 of the Income-tax Act, 2025 from tax year 2026-27" },
        { label: "Due date", value: "One month before the return due date: 31 October 2026 (Form 3CEB) and 31 October 2027 (Form 48)" },
        { label: "Documentation", value: "Rule 84 of the Income-tax Rules, 2026 (earlier Rule 10D) once international transactions exceed ₹1 crore; keep for nine years" },
        { label: "Late report", value: "Fee of ₹50,000 for a delay up to one month, ₹1,00,000 after that (Section 428(d)), from tax year 2026-27" },
      ]}
      howTo={{
        heading: "How does a transfer pricing engagement proceed?",
        steps: [
          { name: "Map the transactions", text: "We list every transaction with associated enterprises from the ledger and agreements: service income, cost recharges, royalties, ESOP recharges, loans, guarantees and receivables." },
          { name: "Interview and FAR analysis", text: "We speak with finance, delivery and business heads in India and, where needed, the group TP team, to document functions performed, assets used and risks borne." },
          { name: "Select the method and benchmark", text: "We choose the most appropriate method, search Indian databases for comparable companies, and apply the range or mean rules in Rule 81." },
          { name: "Prepare the documentation", text: "The local documentation is drafted to cover each item in Rule 84 and reconciled with the group's master file and the audited accounts." },
          { name: "Certify the accountant's report", text: "We certify Form 3CEB or Form 48 on the e-filing portal and reconcile it with the tax audit report and the return." },
          { name: "Plan the next year", text: "We recommend true-ups, agreement changes, and whether safe harbour or an advance pricing agreement fits your transactions." },
        ],
      }}
      subServicesHeading="What does our transfer pricing work include?"
      subServices={[
        { name: "Form 3CEB / Form 48 certification", text: "The accountant's report for international and specified domestic transactions, filed one month before the return due date." },
        { name: "Local documentation (Rule 84)", text: "Contemporaneous documentation covering ownership, business, FAR analysis, method selection and the actual working." },
        { name: "Benchmarking studies", text: "Comparable company searches with documented accept and reject reasons, updated each year with the latest data." },
        { name: "Master file and CbCR compliance", text: "Applicability review and filing of Forms 56 to 60 (earlier Forms 3CEAA to 3CEAE), coordinated with the group's global filings." },
        { name: "Safe harbour and APA support", text: "Assessment of safe harbour eligibility (Form 49) and advance pricing agreement applications for recurring transactions." },
        { name: "TP assessments and disputes", text: "Responses to Transfer Pricing Officer notices, documentation production and support through assessment and appeal." },
      ]}
      faqs={[
        { question: "Does a newly set-up Indian subsidiary need Form 3CEB or Form 48 in its first year?", answer: "Yes, if it has any international transaction with an associated enterprise in that year. There is no minimum value, so a single service invoice to the parent, a cost recharge or a software licence charge brings the subsidiary into the rules. The detailed Rule 84 documentation applies once international transactions exceed ₹1 crore, but the arm's length basis must still be supportable below that." },
        { question: "Which form applies for FY 2025-26: Form 3CEB or Form 48?", answer: "Form 3CEB. FY 2025-26 is assessment year 2026-27 under the Income-tax Act, 1961, so the 1961 forms apply even though the report is filed after 1 April 2026. Form 48 under the Income-tax Act, 2025 applies from tax year 2026-27, the year from April 2026 to March 2027, with the report due by 31 October 2027." },
        { question: "What mark-up should a captive IT or GCC entity in India earn?", answer: "There is no single statutory mark-up. The arm's length margin comes from a benchmarking study of comparable independent companies for that year, tested under the range rules in Rule 81. As an alternative, the safe harbour rules accept an operating margin of at least 15.5% on operating expense for eligible IT services up to ₹2,000 crore of revenue, with the option running for five years." },
        { question: "Can our foreign parent's global transfer pricing report be used in India?", answer: "It helps, but it is rarely enough on its own. Rule 84 asks for India-specific items, including the Indian entity's own FAR analysis, comparables usable in India, the actual working of the arm's length price, and reconciliation with the Indian accounts. Most groups adapt the global local file into an India document rather than filing it unchanged." },
        { question: "What happens if the Transfer Pricing Officer makes an adjustment?", answer: "The adjustment increases taxable income in India and can bring interest, penalty and, where the primary adjustment is ₹1 crore or more, a secondary adjustment requiring the excess money to be repatriated or additional tax of 18% to be paid. Where documentation was maintained and the transaction was disclosed, Section 439(8)(d) excludes the addition from under-reported income for penalty purposes." },
        { question: "What is the difference between safe harbour and an advance pricing agreement?", answer: "Safe harbour is an election to accept a prescribed margin or rate, filed in Form 49 and verified electronically. An advance pricing agreement is negotiated with the CBDT, and in bilateral cases with the other country, and can cover up to five future tax years plus up to four rollback years. Safe harbour is quicker; an APA suits larger or unusual transactions." },
        { question: "Do specified domestic transactions apply to Indian groups without foreign shareholders?", answer: "Only in limited cases. A specified domestic transaction is one of the related-party transactions listed in Section 164, mostly involving units that claim profit-linked deductions, and the rules apply only when their aggregate exceeds ₹20 crore in the tax year. An Indian group with ordinary intercompany sales and no such deductions will usually not need a transfer pricing report." },
        { question: "How long must transfer pricing records be kept?", answer: "Rule 84(8) of the Income-tax Rules, 2026 requires the information and documents to be kept for nine years from the end of the relevant tax year. They should exist by the specified date, which is the date the accountant's report is due, and an officer can ask for them with 10 days' notice, extendable by up to 30 days." },
      ]}
      relatedQuestions={[
        { question: "What other audits apply alongside transfer pricing?", href: "/audit-and-assurance" },
        { question: "Is transfer pricing audit required in addition to statutory audit?", href: "/statutory-audit-chennai" },
        { question: "How does related-party pricing affect my income tax return?", href: "/direct-tax" },
      ]}
      relatedSlugs={["india-subsidiary-compliance-cfo", "statutory-audit-chennai", "fema-rbi-compliance"]}
      relatedPosts={["form-3ceb-due-date-applicability"]}
    >
      <h2 className={h2Class}>Who must comply with transfer pricing rules in India?</h2>
      <p className={pClass}>
        The trigger is a transaction with an associated enterprise, not the size of the company. Under Section 162, an
        enterprise is an associated enterprise if, among other tests, it holds 26% or more of the voting power, appoints
        more than half the board or an executive director, has lent 51% or more of the book value of total assets, or
        guarantees 10% or more of total borrowings. For a wholly owned Indian subsidiary, the parent and every sister
        company in the group qualify.
      </p>
      <Table head={["Situation", "Transfer pricing applies?", "Provision"]} rows={WHO_MUST_COMPLY} />

      <h2 className={h2Class}>What changed from Form 3CEB to Form 48 under the Income-tax Act, 2025?</h2>
      <p className={pClass}>
        The Income-tax Act, 2025 came into force on 1 April 2026, and the Income-tax Rules, 2026 were notified on
        20 March 2026. The arm&apos;s length framework is carried over almost unchanged, but sections, rules and forms
        have new numbers. Form 48 has six parts (A to F) with structured, transaction-wise reporting. For FY 2025-26
        you still use the 1961 Act and Form 3CEB; from tax year 2026-27 you use the right-hand column.
      </p>
      <Table head={["Subject", "Income-tax Act, 1961 (FY 2025-26 and earlier)", "Income-tax Act, 2025 (tax year 2026-27 onwards)"]} rows={ACT_MAPPING} />
      <p className={pClass}>
        Advance pricing agreement forms are also renumbered: the application is Form 51 (earlier Forms 3CED and 3CEDA),
        the pre-filing consultation Form 50 (earlier Form 3CEC) and the annual compliance report Form 52 (earlier
        Form 3CEF).
      </p>

      <h2 className={h2Class}>When are Form 3CEB, Form 48 and the related filings due?</h2>
      <p className={pClass}>
        The accountant&apos;s report is due one month before the return due date. For companies with transfer pricing, the
        return is due on 30 November, so the report is due on 31 October. The Income Tax Department&apos;s transition FAQs
        confirm that reports for FY 2025-26 are filed in the 1961 Act forms even though they are filed after
        1 April 2026.
      </p>
      <Table head={["Filing", "FY 2025-26 (1961 Act)", "Tax year 2026-27 (2025 Act)"]} rows={DUE_DATES} />

      <h2 className={h2Class}>What must transfer pricing documentation contain?</h2>
      <p className={pClass}>
        Rule 84 lists the information to keep for each international or specified domestic transaction. The detailed
        list does not apply where international transactions recorded in the books do not exceed ₹1 crore in the tax
        year, but you must still be able to show that the income was computed at arm&apos;s length. Documentation should be
        contemporaneous, must exist by the date the accountant&apos;s report is due, and need not be rewritten each year
        for a continuing arrangement unless its terms, assumptions or other pricing factors change significantly.
      </p>
      <Table head={["Area", "What to keep", "Rule"]} rows={DOCUMENTATION} />

      <h2 className={h2Class}>Which arm&apos;s length method fits which transaction?</h2>
      <p className={pClass}>
        Section 165 prescribes six methods, and the most appropriate one is chosen by the nature of the transaction,
        the functions of each party and the reliability of the data. Where six or more comparable results are available
        under CUP, RPM, CPM or TNMM, Rule 81 builds a range from the 35th to the 65th percentile; a price inside the
        range is accepted, and a price outside it is adjusted to the median. With fewer than six results, the arithmetic
        mean is used, with a tolerance band of up to 3% as notified by the Central Government. Comparable companies&apos;
        data for the current year and up to two preceding years can be used, as weighted averages.
      </p>
      <Table head={["Method", "How it works", "Where it usually fits"]} rows={METHODS} />

      <h2 className={h2Class}>What is a FAR analysis, and why does it decide the outcome?</h2>
      <p className={pClass}>
        A FAR analysis records the functions each party performs, the assets it uses and the risks it bears. It is the
        basis for characterising the Indian entity, choosing the method and selecting comparables, so it often carries
        more weight in an assessment than the benchmarking itself. Tax officers test the written characterisation
        against conduct: who approves budgets, who signs customer contracts, who directs research and who owns the code.
        If the Indian team has started making decisions the documentation attributes to the parent, the
        characterisation and the expected return may need to change.
      </p>
      <Table head={["Element", "Low-risk captive service provider", "Full-risk entrepreneur"]} rows={FAR} />

      <h2 className={h2Class}>How is benchmarking done with Indian databases?</h2>
      <p className={pClass}>
        Indian transfer pricing studies normally use Indian company databases, such as CMIE&apos;s Prowess and Capitaline,
        which compile the financial statements of listed and unlisted Indian companies. Indian tax officers generally
        prefer Indian comparables for an Indian tested party. A typical search starts with industry codes and keywords,
        then applies quantitative filters, such as data availability for the relevant year, turnover range, significant
        related-party transactions and persistent losses, followed by a qualitative review of annual reports to reject
        companies with different functions, owned intangibles or extraordinary events.
      </p>
      <p className={pClass}>
        Each accept or reject decision is recorded, because the comparable set is the area most often challenged in a
        Transfer Pricing Officer&apos;s order. The study is refreshed every year with the latest available data, and any
        working capital or other comparability adjustments are shown in the documentation. Where the group already uses
        a regional benchmark, we review whether those comparables are usable in India and supplement them as needed.
      </p>

      <h2 className={h2Class}>When do the safe harbour rules make sense?</h2>
      <p className={pClass}>
        Under Section 167 and Rules 86 to 102, the tax authority accepts the transfer price if an eligible assessee opts
        in and declares at least the prescribed margin or rate. For tax year 2026-27 onwards, Rule 89 sets the
        circumstances below. The option for IT services is filed in Form 49, verified electronically, and runs for five
        consecutive tax years, with the ₹2,000 crore revenue limit tested in the first year. Safe harbour does not apply
        to transactions with associated enterprises in notified, no-tax or low-tax jurisdictions (Rule 92), and a mutual
        agreement procedure is not available where safe harbour is accepted (Rule 93). For FY 2025-26 the 1962 Rules
        apply; verify the conditions that applied for that year.
      </p>
      <Table head={["Eligible international transaction", "Circumstances accepted (Rule 89)"]} rows={SAFE_HARBOUR} />
      <p className={pClass}>
        Safe harbour gives certainty, but it can mean paying tax on a higher margin than a benchmarking study would
        support, and the parent&apos;s tax authority is not bound by it. We compare both before you decide.
      </p>

      <h2 className={h2Class}>Should you consider an advance pricing agreement?</h2>
      <p className={pClass}>
        Under Section 168, the CBDT can agree the arm&apos;s length price, or the method for determining it, for future
        international transactions. The agreement can cover up to five consecutive tax years and, subject to
        conditions, can be rolled back to up to four preceding tax years. Agreements can be unilateral, with India only,
        or bilateral and multilateral, involving the competent authority of the other country under the tax treaty,
        which is the route that also addresses double taxation in the parent&apos;s jurisdiction. An APA is usually worth
        exploring for large, recurring transactions such as a GCC&apos;s service income, royalties or financing, especially
        where earlier years have been adjusted.
      </p>

      <h2 className={h2Class}>Do master file and country-by-country reporting apply to your India entity?</h2>
      <p className={pClass}>
        Indian entities of multinational groups have filings under Sections 171 and 511 in addition to Form 48. Most
        foreign-owned subsidiaries file at least Part A of Form 56, and subsidiaries of groups within the CbCR rules also
        file the Form 58 intimation, even when the parent files the country-by-country report in its own jurisdiction.
      </p>
      <Table head={["Form", "Who files", "Due"]} rows={MASTER_FILE} />

      <h2 className={h2Class}>What are the penalties for transfer pricing non-compliance?</h2>
      <p className={pClass}>
        From tax year 2026-27, the penalty for not furnishing the accountant&apos;s report has been replaced by a fixed fee
        under the Finance Act, 2026. The other consequences remain penalties, and a transfer pricing adjustment also
        brings tax and interest. The 1961 Act provisions in the last column apply to FY 2025-26 and earlier years.
      </p>
      <Table head={["Default", "Consequence under the Income-tax Act, 2025", "1961 Act provision"]} rows={PENALTIES} />

      <h2 className={h2Class}>What do typical captive models in India look like?</h2>
      <p className={pClass}>
        Most foreign-owned entities fall into a handful of models. The model sets the method, the profit level indicator
        and the issues an officer is likely to raise.
      </p>
      <Table head={["Model", "Typical Indian entity", "Usual method", "Watch-points"]} rows={CAPTIVE_MODELS} />
      <p className={pClass}>
        Intercompany loans, guarantees and share issues also have FEMA reporting requirements; see our{" "}
        <Link href="/fema-rbi-compliance" className={linkClass}>
          FEMA and RBI compliance
        </Link>{" "}
        page. For groups that want transfer pricing run alongside ROC, GST, TDS and FEMA in one calendar, see{" "}
        <Link href="/india-subsidiary-compliance-cfo" className={linkClass}>
          India subsidiary compliance and CFO services
        </Link>
        .
      </p>

      <h2 className={h2Class}>What does a year-round transfer pricing calendar look like?</h2>
      <p className={pClass}>
        Transfer pricing goes most smoothly when it is managed through the year rather than at the deadline. For an
        Indian entity with a 31 March year-end and a calendar-year parent, the year usually runs like this.
      </p>
      <Table head={["When", "What to do"]} rows={CALENDAR} />
      <p className={pClass}>
        The accountant&apos;s report is certified after the{" "}
        <Link href="/statutory-audit-chennai" className={linkClass}>
          statutory audit
        </Link>{" "}
        and is reconciled with the tax audit report, so the three workstreams should share one timetable. C S Rushil
        &amp; Co. works with group tax teams in the US, UK, UAE, Singapore, Japan and Germany on this calendar from our
        office in Anna Nagar, Chennai.
      </p>
    </ServicePageTemplate>
  );
}
