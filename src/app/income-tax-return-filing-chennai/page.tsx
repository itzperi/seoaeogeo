import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "Income Tax Return Filing in Chennai | ITR Forms & Due Dates";
const description =
  "ITR filing in Chennai for salaried people, professionals, NRIs and businesses: forms, due dates for FY 2025-26 and tax year 2026-27, AIS checks and refunds.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/income-tax-return-filing-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/income-tax-return-filing-chennai",
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

const FORMS = [
  ["ITR-1 (Sahaj)", "Resident individuals (not RNOR) with total income up to ₹50 lakh from salary or pension, one house property, other sources, long-term gains on listed equity up to ₹1.25 lakh and agricultural income up to ₹5,000", "Directors, holders of unlisted shares, anyone with foreign assets or foreign income, short-term capital gains, carried-forward losses, or deferred ESOP tax"],
  ["ITR-2", "Individuals and HUFs without business or professional income: capital gains, more than one house property, foreign assets or income, directors, NRIs and RNORs, income above ₹50 lakh", "Anyone with business or professional income, including partners drawing remuneration"],
  ["ITR-3", "Individuals and HUFs with business or professional income, including partners in firms, consultants who keep regular books, and F&O or intraday traders", "Those who qualify for and choose presumptive taxation (ITR-4)"],
  ["ITR-4 (Sugam)", "Resident individuals, HUFs and firms (other than LLPs) declaring presumptive income for business, profession or goods carriages, with total income up to ₹50 lakh", "Directors, holders of unlisted shares, foreign assets, capital gains other than small listed-equity gains"],
  ["ITR-5", "Partnership firms, LLPs, AOPs, BOIs and similar entities", "Companies and trusts claiming exemption"],
  ["ITR-6", "Companies other than those claiming exemption as charitable or religious institutions", "-"],
  ["ITR-7", "Trusts, political parties, research institutions and others required to file under the exemption provisions", "-"],
];

const DUE_DATES = [
  ["Individuals and HUFs without business income (ITR-1, ITR-2)", "31 July 2026", "31 July 2027"],
  ["Business or professional income, accounts not audited (ITR-3, ITR-4, firms)", "31 August 2026", "31 August 2027"],
  ["Accounts subject to tax audit, companies, partners of audited firms", "21 November 2026 (extended by the CBDT from 31 October; audit report by 21 October)", "31 October 2027 (audit report by 30 September)"],
  ["Transfer pricing cases", "30 November 2026", "30 November 2027"],
  ["Belated return", "31 December 2026", "31 December 2027"],
  ["Revised return", "31 March 2027", "31 March 2028"],
  ["Updated return (ITR-U)", "Up to 31 March 2031 (48 months from the end of the assessment year)", "Up to 31 March 2032 (48 months from the end of the year following the tax year)"],
];

const REGIMES = [
  ["Status", "Default for individuals and HUFs", "Must be chosen; salaried and others without business income can switch each year in a return filed by the due date"],
  ["Slabs (individuals below 60)", "Nil up to ₹4 lakh; 5% to ₹8 lakh; 10% to ₹12 lakh; 15% to ₹16 lakh; 20% to ₹20 lakh; 25% to ₹24 lakh; 30% above", "Nil up to ₹2.5 lakh; 5% to ₹5 lakh; 20% to ₹10 lakh; 30% above (higher exemption for senior citizens)"],
  ["Rebate", "Income up to ₹12 lakh effectively tax-free (rebate up to ₹60,000)", "Income up to ₹5 lakh effectively tax-free (rebate up to ₹12,500)"],
  ["Standard deduction (salary)", "₹75,000", "₹50,000"],
  ["Deductions", "Very few: employer's NPS contribution and a handful of others", "PPF, ELSS, life insurance, tuition fees, principal on home loan (₹1.5 lakh limit), health insurance, home loan interest up to ₹2 lakh on a self-occupied house, HRA and others"],
  ["Surcharge cap", "25%", "37% above ₹5 crore of income"],
];

const LATE_OPTIONS = [
  ["Belated return", "Missed the due date", "By 31 December after the year; late fee of ₹5,000 (₹1,000 if total income is up to ₹5 lakh); interest on unpaid tax; most losses cannot be carried forward; the old regime cannot be chosen by those without business income"],
  ["Revised return", "Found an error or omission in a return already filed", "Within the revision window (31 March 2027 for FY 2025-26); can be filed more than once, and can increase a refund or reduce tax; a fee may apply to late revisions, so check the current rule before filing"],
  ["Updated return (ITR-U)", "Income was missed and the revision window has closed", "Within 48 months; only to pay more tax, not to claim or increase a refund or a loss; additional tax of 25%, 50%, 60% or 70% of the tax and interest depending on how late; not available once a search, survey or assessment has begun for that year"],
  ["Rectification", "The department's processing made a mistake apparent from the record", "Request filed online against the intimation (Section 154 for 1961 Act years), for example where TDS credit or relief was not allowed"],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/income-tax-return-filing-chennai`}
      serviceType="Income Tax Return Filing"
      crumbLabel="Income Tax Return Filing"
      crumbHref="/income-tax-return-filing-chennai"
      eyebrow="Income Tax · Chennai"
      h1="Income Tax Return Filing in Chennai"
      subhead="ITR preparation and filing for salaried individuals, professionals, NRIs, HUFs and businesses, with AIS and Form 26AS reconciled before filing, handled from our Anna Nagar office or online."
      introHeading="Who needs to file an income tax return, and which law applies this year?"
      intro="You must file if your total income before deductions exceeds the basic exemption limit, or if you held a foreign asset, deposited ₹1 crore or more in current accounts or ₹50 lakh in savings accounts, or want a refund. Returns for FY 2025-26, filed in 2026, follow the Income-tax Act, 1961; tax year 2026-27, filed in 2027, is the first under the Income-tax Act, 2025."
      citation={{ label: "Income Tax Department: ITR forms applicable to individuals (incometax.gov.in)", href: "https://www.incometax.gov.in/iec/foportal/help/individual/return-applicable-1" }}
      keyFacts={[
        { label: "Return being filed now", value: "FY 2025-26 (assessment year 2026-27), under the Income-tax Act, 1961" },
        { label: "Next year", value: "Tax year 2026-27 (1 April 2026 to 31 March 2027), filed in 2027 under the Income-tax Act, 2025" },
        { label: "Non-business due date", value: "31 July; 31 August for business or professional income without audit" },
        { label: "Late filing", value: "Belated return by 31 December, with a late fee of up to ₹5,000 and loss of certain options" },
        { label: "Default regime", value: "New tax regime, with income up to ₹12 lakh effectively tax-free after rebate" },
      ]}
      howTo={{
        heading: "How do we prepare and file your return?",
        steps: [
          { name: "Collect documents", text: "Form 16, bank and broker statements, rent receipts, property and investment records, and details of foreign assets where relevant." },
          { name: "Reconcile AIS and Form 26AS", text: "Every income line and TDS credit in the AIS and Form 26AS is matched with your records, and AIS feedback is submitted where an entry is wrong." },
          { name: "Choose the form and regime", text: "We confirm the correct ITR form and compute tax under both regimes where you are allowed to choose." },
          { name: "Review with you", text: "You see the computation and draft return before filing, with any tax payable worked out including interest." },
          { name: "File and verify", text: "We file on the e-filing portal and help you e-verify with Aadhaar OTP or net banking within the 30-day window." },
          { name: "Track processing", text: "We follow the intimation and refund, file rectification where needed, and reply if a notice follows." },
        ],
      }}
      subServicesHeading="Which income tax return filing services do we offer?"
      subServices={[
        { name: "Salaried individuals", text: "Form 16 reconciliation, HRA, home loan interest and deductions, regime comparison, and reporting of RSUs, ESOPs and second employers." },
        { name: "Professionals and businesses", text: "ITR-3 and ITR-4 for doctors, consultants, traders and proprietors, including presumptive income, books of account and tax audit coordination." },
        { name: "Capital gains", text: "Computation for property, shares, mutual funds and foreign shares, with reinvestment exemptions and set-off of losses." },
        { name: "NRI and returning NRI returns", text: "Residential status, Indian-source income, treaty relief, TDS refunds on property sales, and RNOR planning." },
        { name: "Belated, revised and updated returns", text: "Correcting errors and omissions within the right window, with the additional tax worked out before filing." },
        { name: "Refunds and rectification", text: "Following up delayed or adjusted refunds and filing rectification where processing missed TDS credit or relief." },
      ]}
      faqs={[
        { question: "What is the due date for filing an income tax return?", answer: "For FY 2025-26, it was 31 July 2026 for individuals without business income and 31 August 2026 for business or professional income without an audit. Audit cases now have until 21 November 2026 after a CBDT extension. For tax year 2026-27, the same dates apply in 2027, with audit cases due by 31 October 2027." },
        { question: "Which ITR form should I use?", answer: "It depends on your income. ITR-1 suits resident salaried individuals with income up to ₹50 lakh and no capital gains beyond ₹1.25 lakh of listed-equity gains; ITR-2 covers capital gains, foreign assets and directors; ITR-3 covers business or professional income; ITR-4 covers presumptive income. We confirm the form after reviewing your AIS." },
        { question: "What happens if I file my return late?", answer: "You can still file a belated return until 31 December, but you pay a late fee of ₹5,000, or ₹1,000 if total income is up to ₹5 lakh, plus interest on unpaid tax. Losses other than house property loss cannot be carried forward, and those without business income cannot choose the old regime." },
        { question: "Can you help if I have not filed returns for previous years?", answer: "Yes. If the belated window has closed, an updated return can be filed within 48 months to declare missed income, with additional tax of 25% to 70% depending on the delay. It cannot be used to claim a refund, and it is not available once proceedings have started for that year." },
        { question: "Why did I get a notice for a mismatch with Form 26AS or AIS?", answer: "Because the department compares your return with what banks, employers and fund houses report in the AIS. Usually an item was missed, such as a redemption or interest credit, which you correct by revising the return. If the deductor reported wrongly, submit AIS feedback and ask them to correct their statement." },
        { question: "How long does an income tax refund take?", answer: "Most refunds are issued within a few weeks of e-verification, once the return is processed. Delays usually come from an unvalidated bank account, a PAN-Aadhaar link issue, a TDS mismatch, or adjustment against an old demand. Interest is paid on refunds at 0.5% a month for the period of delay." },
        { question: "Do you work with NRI clients based outside India, including in the US?", answer: "Yes. We work remotely with NRIs in the United States, UK, UAE and elsewhere on Indian rental income, capital gains, TDS refunds and treaty relief, using video calls and secure document sharing. No visit to our Chennai office is needed, though clients are welcome when in India." },
        { question: "Do you help with GST as well as income tax?", answer: "Yes. GST registration and return filing are handled on our dedicated GST pages, and many proprietors and firms use both services together so that turnover reported in GST returns matches the income tax return and any tax audit report." },
      ]}
      relatedQuestions={[
        { question: "Can you also help with year-round tax planning, not just filing?", href: "/direct-tax" },
        { question: "Does my business need a tax audit before I file?", href: "/audit-and-assurance" },
        { question: "Do I need GST registration in addition to filing income tax?", href: "/gst-registration-chennai" },
      ]}
      relatedSlugs={["income-tax-consultant-for-hni-chennai", "income-tax-notice-reply-chennai", "nri-tax-services", "direct-tax"]}
      relatedPosts={["old-vs-new-tax-regime", "advance-tax-deadlines", "capital-gains-tax-property-sale", "nri-itr-filing"]}
    >
      <h2 className={h2Class}>How does the change to the Income-tax Act, 2025 affect your return?</h2>
      <p className={pClass}>
        The Income-tax Act, 2025 came into force on 1 April 2026 and replaces &quot;previous year&quot; and &quot;assessment
        year&quot; with a single &quot;tax year&quot;. Income earned up to 31 March 2026, which is FY 2025-26 or assessment year
        2026-27, is still assessed under the 1961 Act, and its return uses the forms notified under the 1962 Rules, even
        though it is filed after the new Act began. Income earned from 1 April 2026 falls in tax year 2026-27, and its
        return, filed in 2027, will be the first under the new Act. Section numbers change: the provisions on filing,
        belated, revised and updated returns now sit together in Section 263, and interest for late filing and advance
        tax shortfalls moves to Sections 423 to 425 (earlier 234A to 234C). For most salaried people the change in
        substance is small, but notices, forms and computations will cite unfamiliar numbers for a few years.
      </p>

      <h2 className={h2Class}>Which ITR form should you use?</h2>
      <p className={pClass}>
        The forms below are the ones notified for FY 2025-26. Forms for tax year 2026-27 will be notified under the
        Income-tax Rules, 2026 before the 2027 filing season, and we will update this table once they are available.
        Filing the wrong form leads to a defective return notice, so the choice is checked against the AIS, not just
        Form 16.
      </p>
      <Table head={["Form", "Who uses it", "Cannot be used by"]} rows={FORMS} />
      <p className={pClass}>
        Individuals and HUFs with total income above ₹1 crore must also complete Schedule AL, listing assets and
        liabilities, in ITR-2 or ITR-3. Residents with any foreign asset, including RSUs held through a foreign
        employer&apos;s plan, must complete Schedule FA.
      </p>

      <h2 className={h2Class}>When are returns due for FY 2025-26 and tax year 2026-27?</h2>
      <p className={pClass}>
        The Finance Act, 2026 moved the due date for business and professional income without an audit to 31 August, and
        extended the window for revising a return to 31 March, twelve months from the end of the year. For FY 2025-26,
        the CBDT extended the dates for audit cases in September 2026; non-audit dates were not extended.
      </p>
      <Table head={["Return", "FY 2025-26 (filed in 2026)", "Tax year 2026-27 (filed in 2027)"]} rows={DUE_DATES} />
      <p className={pClass}>
        The CBDT can extend dates by notification, and interest for late payment of tax continues to run unless the
        extension says otherwise, so pay any balance tax by the original date where you can.
      </p>

      <h2 className={h2Class}>Should you choose the old or the new tax regime?</h2>
      <p className={pClass}>
        The new regime is the default. Taxpayers without business income can choose the old regime each year, but only
        in a return filed by the due date; those with business income opt out through a separate form filed by the due
        date and have only a limited ability to switch back. The slab rates below apply to FY 2025-26 and continue for
        tax year 2026-27. Health and education cess of 4% applies in both.
      </p>
      <Table head={["Feature", "New regime", "Old regime"]} rows={REGIMES} />
      <p className={pClass}>
        As a rough guide, the old regime is worth testing when your deductions, home loan interest and HRA exemption
        together exceed about ₹4 to ₹5 lakh. Tell your employer your choice at the start of the year so TDS matches;
        you can still change it in the return if you have no business income.
      </p>

      <h2 className={h2Class}>Why reconcile AIS and Form 26AS before filing?</h2>
      <p className={pClass}>
        Form 26AS shows TDS and TCS credited against your PAN and tax you paid. The Annual Information Statement (AIS)
        goes further, listing salary, interest, dividends, rent, share and mutual fund transactions, property
        purchases and sales, and foreign remittances reported by third parties. The Taxpayer Information Summary (TIS)
        condenses it. Returns are processed by matching against these statements, so any difference can lead to an
        adjusted intimation or a notice. Common gaps in Chennai returns include interest on fixed deposits with
        cooperative banks, dividends from small holdings, mutual fund switches, and a flat purchase reported by the
        Sub-Registrar. Where an AIS entry is wrong or duplicated, you can submit feedback on the portal, and the
        reporting entity is asked to confirm or correct it.
      </p>

      <h2 className={h2Class}>What can you do if you missed the due date or made a mistake?</h2>
      <p className={pClass}>
        There are four routes, and the right one depends on what went wrong and how much time has passed. The dates
        below are for FY 2025-26; equivalent windows apply to tax year 2026-27 under Section 263.
      </p>
      <Table head={["Route", "When it fits", "Conditions"]} rows={LATE_OPTIONS} />

      <h2 className={h2Class}>How are refunds processed, and why are they delayed?</h2>
      <p className={pClass}>
        A refund is issued after the return is e-verified and processed, directly to a pre-validated bank account linked
        to your PAN. The intimation shows the tax computed by the department and any difference from your return.
        Refunds are often held because the bank account is not pre-validated, PAN and Aadhaar are not linked, TDS claimed
        does not appear in Form 26AS, or the refund has been adjusted against an outstanding demand from an earlier year;
        you will get a chance to respond before such an adjustment. Interest is paid on refunds at 0.5% a month, from
        1 April of the assessment year where the return was filed on time, or from the date of filing otherwise. If a
        refund is short because credit was not given, we file rectification or a grievance on the portal and follow it
        through.
      </p>

      <h2 className={h2Class}>What documents do you need to file your return?</h2>
      <p className={pClass}>
        For a salaried return, bring Form 16 from each employer in the year, salary slips for any month not covered,
        bank interest certificates, rent receipts and the landlord&apos;s PAN where rent exceeds ₹1 lakh a year, home loan
        interest certificates, and proof of deductions if you are testing the old regime. Add capital gains statements
        from your broker and the consolidated statement from CAMS and KFintech if you sold shares or mutual funds, and
        the sale and purchase deeds with the guideline value if you sold property. Professionals and proprietors need
        their books or bank statements, GST returns and TDS certificates from clients. NRIs should add passport travel
        dates for the year, NRO and NRE statements and any tax residency certificate. We then check the AIS, TIS and Form
        26AS line by line against these papers.
      </p>

      <h2 className={h2Class}>What changes for higher-income filers?</h2>
      <p className={pClass}>
        Once income crosses ₹50 lakh, surcharge applies, and above ₹1 crore Schedule AL becomes mandatory. Returns with
        property sales, unlisted shares, foreign RSUs or foreign accounts need ITR-2 or ITR-3, capital gains
        computations with reinvestment claims, Schedule FA for the calendar year, and foreign tax credit filed before
        the return. Advance tax also matters more, because a single property sale or RSU vest can create a shortfall in
        an instalment. For families and executives with these issues, see our page on the{" "}
        <Link href="/income-tax-consultant-for-hni-chennai" className={linkClass}>
          income tax consultant for HNIs in Chennai
        </Link>
        , which covers capital gains, foreign assets, residential status, HUFs and the year-round calendar in detail.
      </p>

      <h2 className={h2Class}>Filing from Chennai or from abroad</h2>
      <p className={pClass}>
        Clients visit our only office in Anna Nagar, Chennai, or work with us online from elsewhere in India and abroad.
        NRIs with Indian rent, deposits or property sales can see{" "}
        <Link href="/nri-tax-services" className={linkClass}>
          NRI tax services
        </Link>
        . If a return has already led to a notice, see{" "}
        <Link href="/income-tax-notice-reply-chennai" className={linkClass}>
          income tax notice replies
        </Link>
        , and for wider tax planning see{" "}
        <Link href="/direct-tax" className={linkClass}>
          direct tax
        </Link>
        . To start this year&apos;s return,{" "}
        <Link href="/contact" className={linkClass}>
          contact us
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
