import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "Statutory Audit in Chennai for Companies & Subsidiaries";
const description =
  "Companies Act statutory audit in Chennai for private companies, foreign-owned subsidiaries and GCCs: group reporting packs, Ind AS, CARO 2020, audit trail and the AGM-to-AOC-4 timeline.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/statutory-audit-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/statutory-audit-chennai",
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

const WHO_NEEDS = [
  ["Private limited company, including a wholly owned subsidiary of a foreign company", "Yes, every year, regardless of turnover or profit", "Sections 139 and 143, Companies Act, 2013"],
  ["One person company or small company", "Yes; CARO 2020 reporting does not apply", "Sections 139 and 143; CARO 2020 paragraph 1(2)"],
  ["Dormant or zero-transaction company", "Yes", "No exemption for inactivity"],
  ["Public company, listed or unlisted", "Yes, with additional reporting such as CARO and, for listed companies, key audit matters", "Companies Act, 2013; Standards on Auditing"],
  ["LLP", "Only where turnover or contribution crosses the limits in the LLP Rules (verify the current limits)", "Limited Liability Partnership Act, 2008 and Rules"],
  ["Indian branch or project office of a foreign company", "Accounts of the Indian business are audited and filed with the ROC", "Section 381 and Form FC-3 (verify current requirements)"],
];

const FRAMEWORKS = [
  ["Which framework applies", "Ind AS if the Indian company is listed, has a net worth of ₹250 crore or more, or is a holding, subsidiary, joint venture or associate of such an Indian company; otherwise Indian AS", "The parent's framework for the group reporting pack", "The parent's framework for the group reporting pack"],
  ["Financial year", "Ends on 31 March; a subsidiary of a foreign company can apply to the Tribunal for a different year to match the parent (Section 2(41))", "Usually the calendar year for many groups", "Usually the calendar year for many groups"],
  ["Leases", "Ind AS 116 uses a single lessee model similar to IFRS 16; Indian AS 19 keeps the operating and finance lease split", "IFRS 16", "ASC 842 keeps operating and finance lease classification for lessees"],
  ["Revenue on cost-plus service contracts", "Ind AS 115 / AS 9; the intercompany agreement and the year-end true-up drive the amount", "IFRS 15", "ASC 606"],
  ["Group share-based payments (parent ESOPs)", "Ind AS 102 expense in the Indian entity even where the parent issues the shares; recharges add TP and FEMA points", "IFRS 2", "ASC 718"],
  ["Employee benefits (gratuity, leave)", "Actuarial valuation; under Ind AS 19 remeasurements go to other comprehensive income", "IAS 19, similar", "ASC 715, with differences in how remeasurements are recognised"],
  ["Presentation", "Schedule III to the Companies Act prescribes formats and disclosures, including MSME dues, ageing schedules and related-party details", "No prescribed format", "SEC or private-company presentation norms"],
];

const GROUP_PACK = [
  ["Planning and independence", "Acknowledgement of the instructions, confirmation of independence and ethics under the group's and ICAI's rules, and agreement on component materiality and scope"],
  ["Reporting pack audit or review", "Audit or specified procedures on the group reporting pack prepared in the parent's framework, as of the group's reporting date"],
  ["Interoffice memorandum", "A summary of significant findings, uncorrected misstatements, control deficiencies, litigation and subsequent events, signed by the engagement partner"],
  ["Intercompany confirmation", "Agreement of balances and transactions with group companies, and explanations for any differences at the reporting date"],
  ["Specific risk areas", "Procedures the group auditor designates, often revenue cut-off, cost-plus true-ups, provisions, tax positions and related parties"],
  ["Local statutory audit status", "Confirmation of when the Indian statutory audit will be signed and whether any modification of the opinion is expected"],
];

const READINESS = [
  ["Intercompany", "Signed intercompany service or distribution agreements; monthly reconciliation of balances with the parent; year-end true-up computed under the transfer pricing policy"],
  ["Share capital and FEMA", "Board resolutions, FIRCs, valuation reports and FC-GPR acknowledgements for every allotment; FLA return working"],
  ["Employee costs", "Payroll reconciliations, actuarial valuation for gratuity and leave, and details of parent ESOPs granted to Indian employees and any recharge"],
  ["Tax", "TDS returns and challans, Form 15CA/15CB (Form 145/146 from April 2026) for payments to the parent, GST returns reconciled to the books, and advance tax workings"],
  ["Fixed assets and leases", "Fixed asset register with additions traced to invoices; lease agreements and the lease working under Ind AS 116 or AS 19"],
  ["Systems", "Confirmation from the group IT team on audit trail settings and India-server backups; user-access listings for the accounting system"],
];

const TIMELINE = [
  ["31 March", "Financial year ends for the Indian company (unless the Tribunal has approved a different year)"],
  ["April–May", "Hard close; group reporting pack to the parent's timetable; group auditor's instructions and component materiality received"],
  ["May–July", "Statutory audit fieldwork, physical verification, confirmations, CARO and audit-trail testing; report to the group auditor"],
  ["By 30 June", "Audited or provisional figures ready for the RBI's FLA return due by 15 July, where the company has foreign investment"],
  ["Board meeting", "Board approves the financial statements and board's report (Sections 134 and 143); auditor signs the report"],
  ["By 30 September", "Tax audit report due for FY 2025-26 where the return is due on 31 October (31 October where transfer pricing applies); Form No. 26 replaces Forms 3CA/3CB/3CD for tax year 2026-27"],
  ["By 30 September", "Annual general meeting within six months of the year-end (Section 96); the first AGM within nine months of the first year-end"],
  ["Within 15 days of the AGM", "Form ADT-1 where an auditor is appointed or re-appointed"],
  ["Within 30 days of the AGM", "Form AOC-4 with the audited financial statements (Section 137)"],
  ["Within 60 days of the AGM", "Form MGT-7 or MGT-7A annual return (Section 92)"],
  ["31 October / 30 November", "Form 3CEB or Form 48 by 31 October and the income-tax return by 30 November for companies with transfer pricing; 31 October return due date otherwise"],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/statutory-audit-chennai`}
      serviceType="Statutory Audit"
      crumbLabel="Statutory Audit"
      crumbHref="/statutory-audit-chennai"
      eyebrow="Statutory Audit · Chennai"
      h1="Statutory Audit in Chennai"
      subhead="Independent, evidence-based audit of your financial statements under the Companies Act, for Chennai companies and for foreign-owned subsidiaries and global capability centres reporting to a parent abroad."
      introHeading="What is a statutory audit and which companies need one?"
      intro="A statutory audit is the independent examination of a company's financial statements, mandated under Section 139 of the Companies Act, 2013, for every company registered in India regardless of turnover, profit, or size — including a company with zero transactions in the year. The auditor verifies that the financial statements give a true and fair view, checks compliance with applicable accounting standards, and reports directly to shareholders. Beyond the statutory obligation, a rigorous audit surfaces control gaps and gives lenders, investors, and the board an independently verified picture of the business."
      citation={{ label: "Ministry of Corporate Affairs: Form ADT-1, appointment of auditor (Section 139, Companies Act, 2013)", href: "https://www.mca.gov.in/content/mca/global/en/mca/e-filing/complianceServices/ADT-1.html" }}
      keyFacts={[
        { label: "Who needs it", value: "Every company incorporated in India, including private companies, OPCs, dormant companies and subsidiaries of foreign companies" },
        { label: "Law", value: "Sections 139 to 148, Companies Act, 2013; CARO 2020 where applicable; Standards on Auditing issued by ICAI" },
        { label: "Auditor appointment", value: "First auditor by the Board within 30 days of incorporation; then at the AGM for a five-year term, reported in Form ADT-1" },
        { label: "Key deadlines", value: "AGM within six months of year-end; AOC-4 within 30 days and MGT-7 within 60 days of the AGM" },
        { label: "Audit trail", value: "Accounting software must keep an edit log that cannot be disabled (Rule 3(1), Companies (Accounts) Rules, 2014); the auditor reports on it" },
      ]}
      howTo={{
        heading: "How does a statutory audit engagement proceed?",
        steps: [
          { name: "Auditor appointment", text: "The Board appoints the first auditor within 30 days of incorporation, or shareholders appoint/re-appoint the auditor at the AGM; the ADT-1 filing confirms the appointment with the ROC." },
          { name: "Planning and books review", text: "We review the trial balance, ledgers, and prior-year workpapers to scope the audit and flag documentation gaps before fieldwork starts." },
          { name: "Fieldwork and testing", text: "Verification of balance sheet items, profit & loss transactions, statutory dues, and compliance with applicable Accounting Standards or Ind AS." },
          { name: "CARO and audit committee review", text: "Where applicable, reporting against the Companies (Auditor's Report) Order, and discussion of findings with the audit committee or board." },
          { name: "Audit report and sign-off", text: "The signed audit report, along with the audited financial statements, is issued to shareholders and forms the basis for the company's AOC-4 and MGT-7 ROC filings." },
        ],
      }}
      subServicesHeading="What does a statutory audit cover?"
      subServices={[
        { name: "First Statutory Audit (New Companies)", text: "Appointment of the first auditor within 30 days of incorporation and audit of the first financial year, however short." },
        { name: "Annual Statutory Audit", text: "Full-scope audit of the balance sheet, profit & loss statement, and cash flow statement in line with Indian Accounting Standards (Ind AS) or AS as applicable." },
        { name: "Group Reporting Pack Support", text: "Audit or review of the reporting pack for a foreign parent's group auditor, with reconciliation from Ind AS or AS to IFRS or US GAAP." },
        { name: "CARO Reporting", text: "Compliance with the Companies (Auditor's Report) Order where applicable, covering fixed assets, inventory, loans, and statutory dues." },
        { name: "Audit Committee Coordination", text: "Liaising with the audit committee (where constituted) on audit scope, findings, and internal control observations." },
        { name: "Books & Records Readiness Review", text: "Pre-audit review to flag documentation gaps early, reducing back-and-forth once fieldwork starts." },
      ]}
      faqs={[
        { question: "Is statutory audit mandatory even for a company with no business activity?", answer: "Yes. Every company registered under the Companies Act must have its financial statements audited annually regardless of turnover, profit, or business activity — a dormant or zero-transaction company is not exempt. Skipping this exposes directors to penalties under the Act, not just a compliance gap." },
        { question: "Who can be appointed as a statutory auditor?", answer: "Only a practising Chartered Accountant or a firm of Chartered Accountants, appointed by the shareholders (or the Board for the first auditor) and not disqualified under Section 141 of the Companies Act — for instance, an auditor cannot hold shares in the company being audited." },
        { question: "Can the Indian subsidiary's year-end match our foreign parent's December year-end?", answer: "Generally an Indian company's financial year ends on 31 March. Section 2(41) of the Companies Act lets a company that is a holding or subsidiary of a company incorporated outside India apply to the Tribunal for a different financial year for consolidation. Without that approval, the subsidiary closes on 31 March and also prepares a calendar-year reporting pack." },
        { question: "Does our Indian subsidiary have to follow Ind AS because the parent reports under IFRS?", answer: "Not by that fact alone. Ind AS applies to an Indian company based on its own listing status or a net worth of ₹250 crore or more, or because it is a holding, subsidiary, joint venture or associate of an Indian company that is covered. ICAI's Ind AS Transition Facilitation Group has said a foreign parent's net worth is not the test." },
        { question: "Can the same firm audit both the group reporting pack and the Indian statutory accounts?", answer: "Yes, and it is the usual arrangement. The Indian statutory auditor is often also appointed as the component auditor by the parent's group auditor, so one fieldwork supports both deliverables. The group auditor still sets the instructions, materiality and deadlines for the pack, while the statutory opinion is issued under the Companies Act and Indian Standards on Auditing." },
        { question: "Is CARO reporting required for a subsidiary of a foreign company?", answer: "Usually, yes. A private company escapes CARO 2020 only if it is a small company or an OPC, or if it meets all of the paid-up capital and reserves, borrowing and revenue limits in the Order. Most operating subsidiaries and GCCs exceed the revenue or capital limit, so their audit report includes the CARO annexure." },
        { question: "How long does a statutory audit take for a small or mid-sized company?", answer: "Typically 2–4 weeks from the start of fieldwork, depending on how organised the books are and how quickly queries are answered. Companies with clean, reconciled books month-to-month see the faster end of that range; those doing a full year's reconciliation at audit time should budget longer." },
        { question: "What happens if my company misses the statutory audit deadline?", answer: "Late or missed statutory audits can trigger penalties on the company and officers in default under the Companies Act, and unaudited financials block your annual ROC filings (AOC-4, MGT-7), which carry their own additional fee of ₹100 per day of delay for each form, with no upper cap." },
        { question: "Do you conduct statutory audits outside Chennai?", answer: "Yes — for clients across Tamil Nadu and pan-India, with fieldwork (in-person or remote, depending on your systems) scheduled around your business calendar rather than ours." },
        { question: "What usually slows down a company's first statutory audit?", answer: "Three gaps cause most delays, and none is about the audit itself. There is no fixed asset register, so depreciation from each purchase date has to be rebuilt from scattered invoices. A founder has put money into the company informally, without a loan agreement, board resolution or the director's written declaration that the funds are not borrowed, which the deposit rules require. And bank accounts were reconciled once a year instead of monthly. Each has to be fixed during fieldwork if it was not done earlier. A company with a register, documented director transactions and monthly reconciliations gets through fieldwork far faster, which is why we offer a pre-audit review before fieldwork starts." },
        { question: "Why does a manufacturing company's statutory audit take longer?", answer: "Because inventory and fixed assets must be verified physically, not just reviewed on paper. The auditor attends or test-checks the count of raw materials, work-in-progress and finished goods against the books and investigates every difference, and traces machinery and equipment to purchase invoices, with depreciation from each asset's actual purchase date. Manufacturers who added or retired equipment over the years without updating a fixed asset register end up spending audit time reconstructing that history. A running fixed asset register and a mid-year inventory reconciliation, rather than a single year-end exercise, shorten fieldwork noticeably for factories such as those in the Ambattur Industrial Estate." },
        { question: "Why does the audit raise new questions once a company is several years old?", answer: "Because an established company accumulates matters a first audit never sees: related-party transactions with directors, relatives or sister concerns, revenue on multi-year contracts, and provisions for gratuity, leave and doubtful debts. Each needs documentation, disclosure or a consistent accounting policy, and related-party dealings are examined closely against the approvals Section 188 of the Companies Act requires. Arrangements made informally over the years are the usual source of audit queries. The fix is to document related-party transactions, with the required board or shareholder approvals, as they happen, and to formalise provisioning policies once rather than estimating them afresh each year." },
      ]}
      relatedQuestions={[
        { question: "What other types of audit might my business also need?", href: "/audit-and-assurance" },
        { question: "Is statutory audit the same as tax audit?", href: "/tax-audit-chennai" },
        { question: "What ROC filings depend on my audited financials?", href: "/roc-compliances" },
      ]}
      relatedSlugs={["audit-and-assurance", "tax-audit-chennai", "roc-compliances", "transfer-pricing-audit", "india-subsidiary-compliance-cfo", "fema-rbi-compliance"]}
      relatedPosts={["statutory-audit-checklist", "first-auditor-appointment-adt-1", "audit-applicability-thresholds", "documents-checklist-before-auditor-visit", "statutory-vs-tax-vs-internal-audit"]}
    >
      <h2 className={h2Class}>Who needs a statutory audit in India?</h2>
      <p className={pClass}>
        Every company incorporated under the Companies Act needs a statutory audit each year. There is no turnover
        threshold, and a wholly owned subsidiary of a US, UK, UAE, Singapore, Japanese or German parent is audited in
        exactly the same way as an Indian-owned company. What varies is the extra reporting: CARO 2020, internal
        financial controls and the accounting framework. The table summarises the common entity types.
      </p>
      <Table head={["Entity", "Audit required?", "Basis"]} rows={WHO_NEEDS} />

      <h2 className={h2Class}>How is the audit different for a foreign-owned subsidiary or GCC?</h2>
      <p className={pClass}>
        A foreign-owned subsidiary or global capability centre usually has two audiences for the same numbers. The
        Indian statutory audit reports to the shareholders under the Companies Act and Indian accounting standards. The
        parent&apos;s group auditor, meanwhile, needs the Indian entity&apos;s results in the group&apos;s framework and timetable.
        Under SA 600 and its international counterpart ISA 600 (Revised), the group auditor sends instructions to the
        component auditor setting out materiality, scope, specific procedures, independence confirmations and the
        reporting deadline.
      </p>
      <p className={pClass}>
        In practice we plan both from the start: one fieldwork, one set of evidence, and two deliverables. The group
        reporting pack is completed to the parent&apos;s hard-close date, often within weeks of the year-end, and the
        statutory financial statements follow with the Schedule III disclosures and CARO report that only India needs.
        A reconciliation from Ind AS or Indian AS to IFRS or US GAAP is kept, so differences in leases, share-based
        payments and employee benefits are explained once rather than re-argued each year.
      </p>
      <p className={pClass}>
        Points that come up repeatedly in subsidiary audits include intercompany balances that do not agree with the
        parent&apos;s ledger, year-end cost-plus true-ups that must match the{" "}
        <Link href="/transfer-pricing-audit" className={linkClass}>
          transfer pricing documentation
        </Link>
        , parent-issued ESOPs recharged to India, and FEMA reporting of share capital received, which we check against
        the{" "}
        <Link href="/fema-rbi-compliance" className={linkClass}>
          FEMA filings
        </Link>{" "}
        made on the RBI portal.
      </p>
      <p className={pClass}>
        A newly set-up GCC has its own first-year points. The first auditor must be appointed by the Board within 30
        days of incorporation, the first financial year can run from incorporation to the following 31 March, and
        pre-incorporation and set-up costs paid by the parent need to be recorded with supporting agreements. Share
        capital usually arrives in tranches, and each allotment must match its FC-GPR filing. Getting these right in
        year one avoids carrying unexplained balances into every later audit.
      </p>

      <h2 className={h2Class}>Ind AS, IFRS or US GAAP: what usually differs for an Indian subsidiary?</h2>
      <p className={pClass}>
        Ind AS is converged with IFRS but has some carve-outs, and Indian AS (for companies outside Ind AS) differs
        more. The common reconciling areas for a service subsidiary or GCC are below. Applicability is tested on the
        Indian company itself; ICAI&apos;s Ind AS Transition Facilitation Group has said a foreign parent&apos;s net worth is
        not the basis for deciding whether its Indian subsidiaries apply Ind AS.
      </p>
      <Table head={["Area", "India (Ind AS / AS)", "IFRS", "US GAAP"]} rows={FRAMEWORKS} />

      <h2 className={h2Class}>What does a group auditor usually ask the Indian component auditor for?</h2>
      <p className={pClass}>
        Group audit instructions vary by network and by how significant the Indian entity is to the group, but most
        packs ask for a similar set of deliverables. Agreeing these at the planning stage, rather than when the
        instructions arrive close to year-end, is what keeps the parent&apos;s hard-close date achievable.
      </p>
      <Table head={["Deliverable", "What it involves"]} rows={GROUP_PACK} />

      <h2 className={h2Class}>Does the auditor report on internal financial controls?</h2>
      <p className={pClass}>
        Section 143(3)(i) of the Companies Act requires the auditor to state whether the company has adequate internal
        financial controls with reference to financial statements and whether they operate effectively. MCA has
        exempted one person companies, small companies and private companies with turnover below ₹50 crore or
        borrowings below ₹25 crore from this reporting (verify the current conditions in the exemption notification).
        Larger subsidiaries and GCCs usually fall within it. Where the group already runs a SOX or internal-control
        programme, we map those controls to the Indian reporting requirement rather than building a separate set, and
        test the India-specific areas the group programme often misses, such as statutory dues, GST input credit,
        TDS on payments to the parent and related-party approvals under Section 188.
      </p>

      <h2 className={h2Class}>How should a foreign-owned subsidiary prepare for audit?</h2>
      <p className={pClass}>
        Most delays in subsidiary audits come from items that sit between the Indian finance team and the parent. A
        short checklist, agreed before the year-end, covers the usual gaps.
      </p>
      <Table head={["Area", "What to have ready"]} rows={READINESS} />

      <h2 className={h2Class}>Does CARO 2020 apply to your company?</h2>
      <p className={pClass}>
        The Companies (Auditor&apos;s Report) Order, 2020 adds a set of specific matters to the audit report, such as
        property and inventory records, loans and guarantees given, deposits, timely payment of statutory dues,
        defaults on borrowings, cash losses and the company&apos;s ability to meet its liabilities. It does not apply to
        one person companies, small companies, banking and insurance companies and Section 8 companies. A private
        company is also exempt if it is not a holding or subsidiary of a public company, its paid-up capital and
        reserves do not exceed ₹1 crore, its borrowings from banks or financial institutions do not exceed ₹1 crore at
        any time in the year, and its revenue does not exceed ₹10 crore (verify the current conditions in the Order).
        Most established subsidiaries and GCCs cross at least one of these limits and get a CARO report.
      </p>

      <h2 className={h2Class}>What does the audit trail rule mean for a GCC on a global ERP?</h2>
      <p className={pClass}>
        Since 1 April 2023, the proviso to Rule 3(1) of the Companies (Accounts) Rules, 2014 requires companies to use
        accounting software that records an audit trail of every transaction, creating an edit log of each change with
        the date, and the trail cannot be disabled. The auditor reports on whether this was in place and operated
        throughout the year under Rule 11(g) of the Companies (Audit and Auditors) Rules, 2014. Books kept electronically
        must also be backed up on servers physically located in India (Rule 3(5)).
      </p>
      <p className={pClass}>
        For a subsidiary on the parent&apos;s SAP, Oracle or NetSuite instance, the Indian team often does not control the
        configuration. The evidence then comes from the group IT team: confirmation that logging is enabled at
        application and database level, change-management records, and any service organisation (SOC) reports for
        hosted systems. Agreeing this with the parent before year-end avoids a qualified audit-trail remark.
      </p>

      <h2 className={h2Class}>What is the timeline from year-end to AGM and AOC-4?</h2>
      <p className={pClass}>
        For a company with a 31 March year-end, the statutory calendar runs as below. Parents with a December year-end
        usually need the reporting pack well before the Indian statutory audit is signed.
      </p>
      <Table head={["When", "What happens"]} rows={TIMELINE} />
      <p className={pClass}>
        For foreign-owned companies that want the audit, ROC, tax and FEMA calendar run together, see our{" "}
        <Link href="/india-subsidiary-compliance-cfo" className={linkClass}>
          India subsidiary compliance and CFO service
        </Link>
        . Fieldwork is run from our office in Anna Nagar, Chennai, on site or remotely depending on your systems.
      </p>
      <p className={pClass}>
        Chennai hosts many foreign-owned companies, from IT and engineering centres along OMR and in Guindy to
        manufacturers in Sriperumbudur, Oragadam and Ambattur. Each type brings different audit emphasis: revenue
        true-ups and ESOP recharges for service centres, and inventory, fixed assets and customs-linked pricing for
        manufacturers. Our 16-member team, led by CA Rushil C S, plans the work around the parent&apos;s reporting date
        and the Indian statutory calendar together.
      </p>
    </ServicePageTemplate>
  );
}
