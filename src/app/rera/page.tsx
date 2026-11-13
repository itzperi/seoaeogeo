import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "RERA Compliance in Chennai | TNRERA CA Certificates" },
  description:
    "RERA compliance in Chennai for Tamil Nadu developers and agents: project registration, quarterly progress reports, CA certificates and annual audits.",
  openGraph: {
    title: "RERA Compliance in Chennai | TNRERA CA Certificates",
    description: "RERA compliance in Chennai for Tamil Nadu developers and agents: project registration, quarterly progress reports, CA certificates and annual audits.",
    url: "/rera",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/rera" },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";
const h2Class = "mt-14 text-2xl text-obsidian";
const pClass = "mt-4 max-w-3xl leading-relaxed text-slate";

const TN_RULES_URL = "https://cms.tn.gov.in/cms_migrated/document/rules_regulations/TNRERA_Rules_2017.pdf";

const CERTIFICATES = [
  ["Withdrawal certificate", "Chartered Accountant in practice", "Land cost and construction cost incurred, and their proportion to the total estimated cost of the project", "Rule 5, Tamil Nadu RERA Rules, 2017"],
  ["Site certificate", "Engineer", "The cost items shown match the physical condition at the project site", "Rule 5"],
  ["Plan certificate", "Architect", "The work at site is built as per the sanctioned plan", "Rule 5"],
  ["Annual audit of project accounts", "Chartered Accountant in practice", "Accounts audited within six months after each financial year; money collected used for the project; withdrawals in proportion to completion", "Section 4(2)(l)(D) of the Act; declaration in Form B"],
  ["Final withdrawal after completion", "CA, engineer and architect", "Balance in the separate account released only on the same three certificates", "Rule 5"],
];

const COSTS = [
  ["Land cost", "Market value of the land, including stamp duty and registration fees paid to acquire ownership, whether freehold or leasehold"],
  ["Construction cost", "On-site expenditure on the physical development of the project"],
  ["Also within construction cost", "Fees and charges for statutory clearances, cost of transfer of development rights, premium FSI charges, finance cost for construction and professional consulting charges"],
];

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="mt-6 max-w-4xl overflow-x-auto rounded-cards border border-ash">
      <table className="w-full text-left text-sm">
        <thead className="bg-carbon text-white">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 font-medium">
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

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/rera`}
      serviceType="Real Estate Compliance"
      crumbLabel="RERA Compliance"
      crumbHref="/rera"
      eyebrow="Real Estate · Chennai"
      h1="RERA Compliance in Chennai"
      subhead="Project registration, quarterly filings, CA certificates for escrow withdrawals, and ongoing compliance advisory for real estate developers and agents under TNRERA — from our Anna Nagar office."
      introHeading="What is RERA compliance in Chennai?"
      intro="The Real Estate (Regulation and Development) Act, 2016 requires promoters of qualifying real estate projects to register with the state regulatory authority (TNRERA in Tamil Nadu) and file periodic disclosures on construction progress, funds utilisation, and project timelines. Non-compliance carries financial penalties and can freeze project sales."
      citation={{ label: "Tamil Nadu RERA (TNRERA): Frequently Asked Questions", href: "https://rera.tn.gov.in/homePageFiles/RERA-FAQs.pdf" }}
      howTo={{
        heading: "What does the RERA compliance cycle involve for a registered project?",
        steps: [
          { name: "Project registration", text: "Before any advertising, marketing, or booking, the project is registered with TNRERA along with the required land title, approval, and disclosure documents." },
          { name: "Escrow account setup", text: "A separate project-specific bank account (commonly called the RERA escrow account) is opened to receive 70% of amounts collected from buyers, used only for that project's construction and land costs." },
          { name: "CA certification for escrow withdrawal", text: "Each withdrawal from the separate account must be certified by a practising Chartered Accountant, together with an engineer and an architect, as being in proportion to the percentage of project completion — the CA certifies the land and construction costs incurred, and many promoters aren't aware this is a recurring, not one-time, requirement." },
          { name: "Quarterly Progress Report filing", text: "Construction and financial progress is reported to TNRERA within 15 days of the end of every quarter until the project receives its completion certificate." },
          { name: "Extension or amendment filings", text: "If the project timeline changes, an extension or amendment application is filed with TNRERA rather than allowing the registration to lapse." },
        ],
      }}
      subServicesHeading="Which RERA services do we provide?"
      subServices={[
        { name: "Project Registration", text: "Preparation and filing of RERA project registration with required disclosures and documentation." },
        { name: "Quarterly Progress Reports (QPR)", text: "Timely filing of construction and financial progress updates." },
        { name: "Escrow Account Compliance", text: "Advisory on the mandatory 70% escrow account rule for project funds." },
        { name: "Agent Registration", text: "RERA registration for real estate agents and brokers." },
        { name: "Compliance Audits", text: "Periodic review of project compliance status to avoid penalties." },
        { name: "Extension & Amendment Filings", text: "Applications for project timeline extensions or registration amendments." },
      ]}
      faqs={[
        { question: "Which real estate projects need RERA registration?", answer: "Section 3(2)(a) of the Act exempts a project where the land proposed to be developed does not exceed 500 square metres or the number of apartments does not exceed eight, inclusive of all phases. Other projects without a completion certificate must register with TNRERA before advertising, marketing, booking or selling any unit." },
        { question: "What is the 70% escrow account requirement?", answer: "Promoters must deposit 70% of the amounts realised from buyers into a separate account in a scheduled bank, commonly called the RERA escrow account. The money can be used only for the land cost and construction cost of that project, and withdrawals must be in proportion to the percentage of completion." },
        { question: "How often must progress reports be filed?", answer: "Project updates are uploaded within 15 days from the end of every quarter until the completion certificate is received. Separately, the promoter must get the project accounts audited by a practising Chartered Accountant within six months after the end of each financial year and produce the CA-certified statement of accounts to the Authority." },
        { question: "Do real estate agents need separate RERA registration?", answer: "Yes. Under section 9 of the Act, an agent must register with TNRERA before facilitating the sale or purchase of any unit in a registered project. In Tamil Nadu the application is made in Form G under the 2017 Rules, and renewal is applied for in Form J at least one month before expiry." },
        { question: "Do I need a CA certificate every time I withdraw from the RERA escrow account?", answer: "Yes. Every withdrawal from the separate account needs certificates from a practising Chartered Accountant, an engineer and an architect confirming it is in proportion to the percentage of completion. It is a recurring requirement for each withdrawal, not a one-time certificate at account opening, and the final balance needs the same certificates." },
        { question: "Which costs can a CA count when certifying a TNRERA withdrawal?", answer: "Under rule 5 of the Tamil Nadu Rules, land cost is the market value of the land plus stamp duty and registration fees for acquiring it. Construction cost covers on-site development expenditure, statutory clearance fees, transfer of development rights, premium FSI charges, finance cost for construction and professional consulting charges." },
        { question: "Is there a numbered TNRERA form for the CA withdrawal certificate?", answer: "The Tamil Nadu RERA Rules, 2017 use lettered forms, such as Form A for project registration, Form B for the promoter's declaration and Form E for extension, and do not prescribe a numbered CA certificate. Numbered CA forms used in some other states do not apply here, so follow the format TNRERA currently requires." },
      ]}
      relatedQuestions={[
        { question: "What entity structure should a real estate developer register as?", href: "/company-registration-chennai" },
        { question: "How is escrow account income taxed for a project?", href: "/direct-tax" },
        { question: "Does a RERA-registered company still need ROC filings?", href: "/roc-compliances" },
      ]}
      relatedPosts={["rera-registration-renewal", "rera-compliance-calendar-tamil-nadu"]}
      relatedSlugs={["company-registration-chennai", "direct-tax", "roc-compliances"]}
    >
      <h2 className={h2Class}>What does a CA certify for withdrawals from the RERA account in Tamil Nadu?</h2>
      <p className={pClass}>
        Before each withdrawal from the project&apos;s separate account, a Chartered Accountant in practice certifies
        the land cost and construction cost incurred and their proportion to the total estimated cost of the
        project. An engineer and an architect certify alongside. The Tamil Nadu Rules define these costs but do not
        prescribe a numbered CA form.
      </p>
      <p className={pClass}>
        The requirement comes from section 4(2)(l)(D) of the Real Estate (Regulation and Development) Act, 2016,
        and rule 5 of the{" "}
        <a href={TN_RULES_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Tamil Nadu Real Estate (Regulation and Development) Rules, 2017
        </a>
        . Each professional certifies a different thing, so a withdrawal is only as strong as the weakest of the three
        certificates:
      </p>
      <Table head={["Certificate", "Given by", "What it confirms", "Source"]} rows={CERTIFICATES} />

      <h2 className={h2Class}>Which costs count as land cost and construction cost?</h2>
      <p className={pClass}>
        Rule 5 of the Tamil Nadu Rules treats land cost as the market value of the land plus stamp duty and
        registration fees for acquiring it, and construction cost as on-site development expenditure, including
        clearance fees, transfer of development rights, premium FSI, finance cost for construction and consulting
        charges. Costs outside these heads cannot support a withdrawal.
      </p>
      <Table head={["Cost head", "What the Tamil Nadu Rules include"]} rows={COSTS} />
      <p className={pClass}>
        In practice we tie each certificate to the project ledger, the bank statement of the separate account, the
        engineer&apos;s cost-to-complete estimate and the latest quarterly update, so the percentage of completion used
        for the withdrawal matches what is disclosed on the TNRERA website.
      </p>

      <h2 className={h2Class}>What does the annual RERA audit cover, and when is it due?</h2>
      <p className={pClass}>
        The promoter must have the project accounts audited by a Chartered Accountant in practice within six months
        after the end of every financial year and produce a statement of accounts certified by that CA to the
        Authority. The audit checks that money collected for the project was used for it and that withdrawals
        matched the percentage of completion.
      </p>
      <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 leading-relaxed text-slate">
        <li>For a 31 March year end, the audited statement is due by 30 September.</li>
        <li>The promoter&apos;s declaration in Form B, filed with the registration application, records this undertaking along with the 70% deposit and the three-certificate withdrawal rule.</li>
        <li>The project audit is separate from the company&apos;s statutory audit under the Companies Act; both can run from the same books if the project ledger is kept separately.</li>
        <li>Joint development projects need clear records of the landowner&apos;s and the promoter&apos;s shares, because collections and withdrawals are certified project by project.</li>
      </ul>
      <p className={pClass}>
        From our Anna Nagar office we prepare withdrawal certificates and the annual project audit for developers
        across Chennai, alongside quarterly updates and extension filings.
      </p>
    </ServicePageTemplate>
  );
}
