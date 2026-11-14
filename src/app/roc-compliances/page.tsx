import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const th = "px-4 py-3 font-medium";
const tdHead = "px-4 py-3 align-top font-medium text-obsidian";
const td = "px-4 py-3 align-top text-slate";
const linkClass = "font-medium text-royal-violet underline underline-offset-2";

// Annual calendar for a company with a 31 March year end that holds its AGM
// on the last permitted day (30 September). Earlier AGMs pull the AOC-4,
// MGT-7 and ADT-1 dates forward.
const COMPANY_CALENDAR = [
  { form: "MSME-1 (October–March)", what: "Half-yearly return of amounts owed to micro and small suppliers for more than 45 days", due: "30 April", who: "Companies with such dues" },
  { form: "DPT-3", what: "Annual return of deposits and of outstanding money received that is not a deposit", due: "30 June", who: "Most companies, other than government companies" },
  { form: "DIR-3 KYC Web", what: "KYC of each director, to keep the DIN active", due: "30 June, once every three financial years (from 31 March 2026)", who: "Every DIN holder" },
  { form: "AGM", what: "Annual general meeting that adopts the audited accounts", due: "Within 6 months of the year end, so by 30 September (first AGM within 9 months of the first year end)", who: "Every company except an OPC" },
  { form: "ADT-1", what: "Notice of auditor appointment or reappointment", due: "Within 15 days of the AGM", who: "Every company appointing an auditor" },
  { form: "MSME-1 (April–September)", what: "Second half-yearly MSME return", due: "31 October", who: "Companies with such dues" },
  { form: "AOC-4 / AOC-4 XBRL", what: "Audited financial statements and board's report", due: "Within 30 days of the AGM (late October for a 30 September AGM)", who: "Every company" },
  { form: "MGT-7 / MGT-7A", what: "Annual return (MGT-7A for OPCs and small companies)", due: "Within 60 days of the AGM (late November for a 30 September AGM)", who: "Every company" },
];

const LLP_CALENDAR = [
  { form: "Form 11", what: "Annual return of the LLP", due: "30 May" },
  { form: "Form 8", what: "Statement of account and solvency", due: "30 October" },
  { form: "DIR-3 KYC Web", what: "KYC of each designated partner with a DIN", due: "30 June, once every three financial years" },
];

const EVENT_FILINGS = [
  { form: "INC-20A", what: "Declaration that subscribers have paid for their shares, before the company commences business", due: "Within 180 days of incorporation" },
  { form: "ADT-1 (first auditor)", what: "First auditor appointed by the board", due: "Board appointment within 30 days of incorporation; ADT-1 within 15 days of it" },
  { form: "DIR-12", what: "Appointment, resignation or change in designation of a director", due: "Within 30 days of the change" },
  { form: "INC-22", what: "Change of registered office", due: "Within 30 days of the change" },
  { form: "SH-7", what: "Increase in authorised share capital", due: "Within 30 days of the shareholders' resolution" },
  { form: "PAS-3", what: "Return of allotment of shares", due: "Within 30 days of allotment" },
  { form: "CHG-1 / CHG-4", what: "Creation, modification or satisfaction of a charge for a loan", due: "Within 30 days of creation or satisfaction" },
  { form: "MGT-14", what: "Filing of specified board and special resolutions", due: "Within 30 days of the resolution" },
  { form: "BEN-2", what: "Return of significant beneficial owners", due: "Within 30 days of receiving the BEN-1 declaration" },
];

export const metadata: Metadata = {
  title: { absolute: "ROC Compliance in Chennai: Filing Due Dates & Late Fees" },
  description:
    "AOC-4, MGT-7, DPT-3, MSME-1, DIR-3 KYC and LLP Form 8 and 11 due dates, late fees and event filings for Chennai companies and LLPs, by a CA in Anna Nagar.",
  openGraph: {
    title: "ROC Compliance in Chennai: Filing Due Dates & Late Fees",
    description: "The full ROC calendar for companies and LLPs, late fees and event-based filings, handled by a Chartered Accountancy firm in Anna Nagar, Chennai.",
    url: "/roc-compliances",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/roc-compliances" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/roc-compliances`}
      serviceType="Corporate Compliance"
      crumbLabel="ROC Compliances"
      crumbHref="/roc-compliances"
      eyebrow="Corporate Compliance · Chennai"
      h1="ROC Compliance Services in Chennai"
      subhead="Annual returns, financial statement filings, director KYC, MSME and deposit returns, and every event-based form for private limited companies, OPCs and LLPs registered with ROC Chennai, kept on one dated calendar so nothing attracts the ₹100-a-day late fee."
      introHeading="What is ROC compliance for Chennai companies?"
      intro="ROC compliance is the set of returns and records every company and LLP must file with the Registrar of Companies under the Ministry of Corporate Affairs. For a company with a 31 March year end, the core annual filings are AOC-4 within 30 days and MGT-7 or MGT-7A within 60 days of the AGM, plus DPT-3 by 30 June and MSME-1 twice a year where it applies. LLPs file Form 11 by 30 May and Form 8 by 30 October. Late filings cost ₹100 a day per form, and three years of missed filings disqualify the directors."
      citation={{ label: "Ministry of Corporate Affairs (MCA): Annual Filings", href: "https://www.mca.gov.in/content/mca/global/en/mca/e-filing/annual-filings.html" }}
      keyFacts={[
        { label: "Core annual filings (company)", value: "AOC-4 within 30 days of the AGM; MGT-7 or MGT-7A within 60 days of the AGM; ADT-1 within 15 days of the AGM." },
        { label: "Core annual filings (LLP)", value: "Form 11 by 30 May and Form 8 by 30 October every year." },
        { label: "Late fee", value: "₹100 per day per form, with no upper cap, for companies and LLPs." },
        { label: "Director disqualification", value: "Section 164(2): financial statements or annual returns not filed for three continuous financial years." },
        { label: "Director KYC", value: "DIR-3 KYC Web once every three financial years, by 30 June (from 31 March 2026)." },
        { label: "Registrar for Chennai", value: "ROC Chennai, Shastri Bhavan, Haddows Road; filings are made online on the MCA V3 portal." },
      ]}
      howTo={{
        heading: "What does the annual ROC compliance cycle involve?",
        steps: [
          { name: "Post-audit filing prep", text: "Once your statutory audit is signed off, we prepare AOC-4 (financial statements) and MGT-7/7A (annual return) for filing." },
          { name: "Board and AGM documentation", text: "Notices, minutes, and resolutions for the Annual General Meeting and any board meetings held during the year are drafted and maintained." },
          { name: "Annual ROC filings", text: "AOC-4 and MGT-7/7A are filed with the Registrar of Companies within the statutory timelines (AOC-4 within 30 days and MGT-7/7A within 60 days of the AGM), along with DIR-3 KYC Web for each director in the years it falls due." },
          { name: "Statutory registers update", text: "Registers of members, directors, and charges are updated to reflect the year's changes." },
          { name: "Event-based filings as they arise", text: "Any changes during the year — new directors, share capital changes, registered office moves — are filed with the ROC as they happen, not bundled into the annual cycle." },
        ],
      }}
      subServicesHeading="Which ROC compliance services do we handle?"
      subServices={[
        { name: "Annual Return Filing (MGT-7/AOC-4)", text: "Yearly filing of financial statements and annual return with the ROC." },
        { name: "Board & AGM Compliance", text: "Drafting notices, minutes, and resolutions for board meetings and the Annual General Meeting." },
        { name: "Statutory Registers Maintenance", text: "Upkeep of registers of members, directors, and charges as required by law." },
        { name: "Director KYC (DIR-3 KYC Web)", text: "KYC filing for every director, now due once every three financial years by 30 June (from 31 March 2026), to keep their DIN active." },
        { name: "Event-Based Filings", text: "Filings triggered by changes in directors, share capital, registered office, or charges." },
        { name: "Compliance Health Check", text: "A one-time review of your company's filing history to identify and fix gaps before they escalate." },
      ]}
      faqs={[
        { question: "What happens if I miss an ROC filing deadline?", answer: "A late AOC-4 or MGT-7/7A attracts an additional fee of ₹100 per day of delay for each form, with no upper cap, under the Companies (Registration Offices and Fees) Rules, 2014. Prolonged non-compliance can lead to director disqualification or the company being struck off by the ROC. Directors are disqualified under Section 164(2) if the company fails to file financial statements or annual returns for three consecutive financial years." },
        { question: "Which ROC filings are mandatory every year?", answer: "Every company must file AOC-4 (financial statements, within 30 days of the AGM) and MGT-7/7A (annual return, within 60 days of the AGM) each year, based on its audited accounts. Director KYC is no longer annual: from 31 March 2026, each DIN holder files DIR-3 KYC Web once every three financial years, by 30 June." },
        { question: "Do LLPs also have ROC compliance requirements?", answer: "Yes — LLPs file Form 11 (Annual Return) by 30 May and Form 8 (Statement of Account and Solvency) by 30 October every year, which are different due dates from companies." },
        { question: "Which ROC filings are triggered by events rather than dates?", answer: "Appointing or removing a director (DIR-12), shifting the registered office (INC-22), increasing authorised capital (SH-7), and creating or satisfying a charge for a loan (CHG-1 or CHG-4) each need their own filing, generally within 30 days of the event. No one sends a reminder, and first-year companies hit these milestones most often: a co-founder joins the board, the office moves out of a home, a first business loan creates a charge. Late filing attracts additional fees that grow with the delay, often to several times the normal fee, and the delay stays visible on the company's public MCA record." },
        { question: "Is filing INC-22 enough when we move our registered office?", answer: "No. INC-22 updates the registered office with the Registrar, but the GST registration needs its own amendment for the new principal place of business, filed on the GST portal within 15 days of the change, and statutory registers, letterheads and other official records must show the new address too. Missing the GST amendment leaves your MCA and GST records showing different addresses, which surfaces later as a mismatch. Companies that relocate rather than incorporate at their current address, such as offices moving to Guindy for its connectivity, miss this second step most often." },
        { question: "What is the due date for AOC-4 and MGT-7?", answer: "AOC-4 is due within 30 days of the AGM and MGT-7 or MGT-7A within 60 days of it. For a company with a 31 March year end that holds its AGM on 30 September, that means late October for AOC-4 and late November for MGT-7. A company that holds its AGM earlier has earlier due dates, which is why we date the calendar from your actual AGM." },
        { question: "Does a company with no business or zero turnover still file ROC returns?", answer: "Yes. A company that has done no business still holds an AGM, has its accounts audited and files AOC-4 and its annual return every year, and the late fee applies in exactly the same way. A company that does not intend to trade can apply for dormant status under Section 455, or for strike-off under Section 248 if the business is closed, instead of filing nil returns indefinitely." },
        { question: "What is the difference between MGT-7 and MGT-7A?", answer: "MGT-7A is the shorter annual return for One Person Companies and small companies, as defined by their paid-up capital and turnover limits. Every other company files MGT-7. Both are due within 60 days of the AGM; an OPC, which holds no AGM, files within 60 days of the date its AGM would otherwise have been due." },
        { question: "Who has to file DPT-3 and MSME-1?", answer: "DPT-3 is filed by 30 June by most companies other than government companies, reporting deposits and money received that is not a deposit, such as director loans, as at 31 March. MSME-1 is filed by 30 April and 31 October by companies that owe micro or small enterprises for more than 45 days. Both are commonly missed because they are not tied to the AGM." },
        { question: "Can you fix past non-compliance?", answer: "Yes. Long-running companies that file their annual return every year often still have gaps from event-based filings missed years ago, such as a director change, a charge created and later satisfied, or an address move. We conduct a compliance health check of the full MCA filing history against what actually happened, identify pending filings, and regularise them through the MCA's condonation and late-filing mechanisms where available. This matters most for established manufacturers and suppliers, because banks, lenders and large buyers running supplier due diligence check ROC filing history before extending credit, and a longer history gives them more room to find an inconsistency." },
      ]}
      relatedQuestions={[
        { question: "Which entity structure has the lightest ROC compliance burden?", href: "/company-registration-chennai" },
        { question: "What ROC filings follow right after incorporation?", href: "/private-limited-company-incorporation-chennai" },
        { question: "Is statutory audit required before I can file my annual return?", href: "/audit-and-assurance" },
      ]}
      relatedPosts={["post-incorporation-compliance-checklist", "strike-off-vs-winding-up", "roc-chennai-vs-roc-coimbatore"]}
      relatedSlugs={["company-registration-chennai", "annual-compliance-package", "statutory-audit-chennai"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">What is the annual ROC calendar for a company?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Dates below assume a 31 March year end and an AGM on 30 September, the last permitted day. An earlier AGM moves the
        ADT-1, AOC-4 and MGT-7 dates forward, so the calendar we keep for you runs from your actual AGM date.
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className={th}>Form</th>
              <th className={th}>What it reports</th>
              <th className={th}>Due</th>
              <th className={th}>Who files</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {COMPANY_CALENDAR.map((r) => (
              <tr key={r.form}>
                <td className={tdHead}>{r.form}</td>
                <td className={td}>{r.what}</td>
                <td className={td}>{r.due}</td>
                <td className={td}>{r.who}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">What does an LLP file with the ROC each year?</h2>
      <div className="mt-6 max-w-3xl overflow-x-auto rounded-cards border border-ash">
        <table className="w-full text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className={th}>Form</th>
              <th className={th}>What it reports</th>
              <th className={th}>Due</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {LLP_CALENDAR.map((r) => (
              <tr key={r.form}>
                <td className={tdHead}>{r.form}</td>
                <td className={td}>{r.what}</td>
                <td className={td}>{r.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 max-w-2xl text-sm text-slate">
        An LLP whose turnover exceeds ₹40 lakh or whose contribution exceeds ₹25 lakh also needs its accounts audited
        before Form 8 is filed. See{" "}
        <Link href="/llp-registration-chennai" className={linkClass}>
          LLP registration in Chennai
        </Link>{" "}
        for the set-up side.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Which ROC filings are triggered by events?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        These are filed when something changes, not on a fixed date, and nobody sends a reminder. They are where most
        long-running Chennai companies have gaps.
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className={th}>Form</th>
              <th className={th}>Event</th>
              <th className={th}>Time limit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {EVENT_FILINGS.map((r) => (
              <tr key={r.form}>
                <td className={tdHead}>{r.form}</td>
                <td className={td}>{r.what}</td>
                <td className={td}>{r.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">What does missing an ROC deadline cost?</h2>
      <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-slate">
        <li>
          <span className="font-medium text-obsidian">Additional fee:</span> ₹100 per day of delay for each late annual
          form, for companies and for LLPs, with no upper cap.
        </li>
        <li>
          <span className="font-medium text-obsidian">Penalties:</span> separate penalties under Sections 92(5) and 137(3)
          for the company and its officers in default when the annual return or financial statements are not filed.
        </li>
        <li>
          <span className="font-medium text-obsidian">Director disqualification:</span> under Section 164(2), every
          director of a company that has not filed financial statements or annual returns for three continuous financial
          years cannot be appointed a director of any company for five years.
        </li>
        <li>
          <span className="font-medium text-obsidian">Strike-off:</span> the ROC can strike off a company that has not
          carried on business for two financial years under Section 248.
        </li>
      </ul>
      <p className="mt-4 max-w-2xl text-sm text-slate">
        Foreign-owned companies also have FEMA filings, such as the annual FLA return, that sit outside the ROC calendar.
        See{" "}
        <Link href="/fema-rbi-compliance" className={linkClass}>
          FEMA and RBI compliance
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
