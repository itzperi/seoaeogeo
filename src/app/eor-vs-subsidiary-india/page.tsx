import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const slug = "/eor-vs-subsidiary-india";
const title = "EOR vs Subsidiary in India: Which Should You Use?";
const description =
  "EOR or Indian subsidiary? Compare control, time to first hire, permanent establishment risk, IP ownership, compliance and exit, and see when to switch.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: slug },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: slug,
  },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";

function DataTable({ head, rows }: { head: string[]; rows: string[][] }) {
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

const COMPARISON = [
  ["Legal employer", "The EOR's Indian entity employs your staff and issues their contracts and payslips.", "Your own Indian company employs staff directly."],
  ["Control", "You direct day-to-day work, but employment terms, policies and terminations run through the EOR's contract and processes.", "Full control of hiring, policies, contracts with customers and vendors, banking and premises."],
  ["Time to first hire", "Usually days to a few weeks once the EOR agreement is signed.", "Usually several weeks to a few months, because documents must be legalised, the company incorporated and a bank account opened first."],
  ["Permanent establishment risk", "Higher if EOR staff conclude contracts, run revenue activity or work from a fixed place at your disposal, because the tax authorities may say your foreign company itself has a taxable presence in India.", "Lower for the parent, as Indian activity sits inside a separate Indian taxpayer, though transfer pricing must be right."],
  ["Misclassification risk", "Arises if the arrangement looks like disguised employment by the foreign company, or if staff are engaged as contractors when they work like employees.", "Staff are employees of the Indian company, so the employer is clear."],
  ["IP ownership", "Inventions belong first to the employer under the employment contract, so you rely on a written assignment chain from employee to EOR to you.", "The Indian company owns IP under its own contracts and can license or assign it to the parent under an intercompany agreement."],
  ["Revenue in India", "An EOR does not let you invoice Indian customers in your own name from India.", "The subsidiary can invoice Indian customers, register for GST and hold licences."],
  ["Compliance load", "Low for you: the EOR handles payroll, provident fund, professional tax and payroll TDS.", "Higher: annual audit, ROC filings, income tax return, transfer pricing report, FEMA filings such as FC-GPR and the FLA return, GST and TDS."],
  ["Exit", "End the EOR agreement and settle employee dues under its terms.", "Closure requires settling liabilities and a formal strike-off or winding up, which takes longer."],
];

const DECISION = [
  ["One to three hires, role is support or research, market still being tested", "EOR is usually enough, provided staff do not conclude contracts or run sales for the foreign company."],
  ["Hires will sell to Indian customers or sign contracts", "Incorporate, or use a structure where contracts are signed by an Indian entity, because an EOR does not remove permanent establishment exposure."],
  ["Team expected to cross roughly ten people within a year or two", "Plan the subsidiary now; start with an EOR only to bridge the incorporation period."],
  ["Core engineering, product or IP creation in India", "A subsidiary gives a cleaner IP chain and is easier to explain in due diligence."],
  ["You need an office lease, Indian bank account or local licences", "Subsidiary (or, in limited cases, a branch office with RBI approval)."],
  ["Only market research and representation, no income in India", "A liaison office may fit, subject to RBI approval and its activity limits."],
];

const OFFICES = [
  ["Liaison office", "Represents the parent, promotes its products and acts as a channel of communication. Cannot earn income in India; expenses are met from remittances by the parent.", "Application on Form FNC through an AD Category-I bank, which approves after due diligence and obtains a Unique Identification Number from the RBI. Prior RBI approval is needed in specified cases."],
  ["Branch office", "Can carry on the activities permitted to branches, such as rendering professional or consultancy services and export or import trading, but not manufacturing in most cases. Profits are taxed in India as income of a foreign company.", "Same Form FNC route through an AD Category-I bank, with minimum profit track record and net worth conditions in the RBI Master Direction."],
  ["Project office", "Executes a specific contract awarded in India and closes when the project ends.", "General permission applies where the conditions in the Master Direction are met, with reporting to the RBI after set-up."],
  ["Wholly owned subsidiary", "Any activity permitted under the FDI Policy, with limited liability for the parent.", "No prior approval in automatic-route sectors; share allotment is reported in FC-GPR within 30 days."],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${slug}`}
      serviceType="India Market Entry Structuring"
      crumbLabel="EOR vs Subsidiary in India"
      crumbHref={slug}
      parentCrumb={{ name: "Company Setup in India for Foreign Businesses", href: "/company-registration-india-for-foreigners" }}
      eyebrow="India Entry · Hiring Your First Team"
      h1="EOR vs Subsidiary in India: Which Should a Foreign Company Use?"
      subhead="A side-by-side comparison of hiring through an Employer of Record and incorporating your own Indian company, covering control, speed, permanent establishment and misclassification risk, IP, compliance and exit, with a guide to when and how to switch."
      keyFacts={[
        { label: "What an EOR is", value: "A third-party Indian company that legally employs staff for you and runs their payroll, while you direct their work." },
        { label: "Time to first hire", value: "EOR: usually days to a few weeks. Subsidiary: usually several weeks to a few months, depending mostly on document legalisation." },
        { label: "Approvals", value: "EOR: none for the foreign client. Subsidiary: none in automatic-route sectors, with FC-GPR after allotment. Branch or liaison office: RBI approval through an AD Category-I bank." },
        { label: "Main EOR risks", value: "Permanent establishment of the foreign company, misclassification of the working relationship, and gaps in the IP assignment chain." },
        { label: "Typical path", value: "EOR while testing the market, then a wholly owned subsidiary once the team, revenue or IP in India becomes significant." },
      ]}
      introHeading="Should a foreign company use an EOR or set up a subsidiary in India?"
      intro="Use an Employer of Record when you need a few people in India quickly and are still testing the market, and the staff will not sell or sign contracts for you. Incorporate a wholly owned subsidiary when the team is growing, staff do core or revenue-generating work, or you want direct control of contracts, IP and banking."
      citation={{ label: "RBI Master Direction on Branch, Liaison and Project Offices (rbi.org.in)", href: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10404" }}
      subServicesHeading="How do we help a foreign company choose between an EOR and an entity?"
      subServices={[
        { name: "Structure Review", text: "We look at your planned headcount, roles, customers and timeline, and set out how an EOR, a subsidiary, an LLP or a branch or liaison office would each work for that plan." },
        { name: "Permanent Establishment Check", text: "We review what your India staff will actually do, including contract signing, sales and premises, and flag where an EOR arrangement could create a taxable presence, for discussion with your home-country adviser." },
        { name: "Subsidiary Incorporation", text: "When you decide to incorporate, we handle document legalisation lists, DSC, SPICe+ filing, the bank account, capital receipt and the FC-GPR filing." },
        { name: "EOR to Entity Transition", text: "We plan the transfer date, set up payroll registrations in the new company, and coordinate with the EOR on final settlements so that employees move without a gap in pay." },
        { name: "Branch or Liaison Office Applications", text: "Where an office of the foreign company suits better than a subsidiary, we prepare the Form FNC application and supporting documents for the AD Category-I bank." },
        { name: "Ongoing India Compliance", text: "After set-up, we run the annual audit, ROC, income tax, transfer pricing, GST, TDS and FEMA calendar for the Indian entity." },
      ]}
      howTo={{
        heading: "How do you move from an EOR to your own Indian subsidiary?",
        steps: [
          { name: "Fix a target transfer date", text: "Pick a date that allows time for incorporation, bank account opening and payroll registrations, and check the notice and conversion terms in your EOR agreement." },
          { name: "Incorporate the subsidiary", text: "Legalise the parent's documents, obtain DSCs, file SPICe+, open the bank account, receive share capital and file FC-GPR within 30 days of allotment." },
          { name: "Complete employer registrations", text: "Register the new company for provident fund, employees' state insurance where applicable, professional tax and TDS on salaries, and set up the payroll calendar." },
          { name: "Issue new contracts and IP assignments", text: "Offer employment with the subsidiary on agreed terms, including confidentiality and invention assignment clauses, and agree how prior service and leave balances are treated." },
          { name: "Settle with the EOR", text: "Agree final payroll, full and final settlement or transfer of accrued benefits, and obtain the employment and tax records your team will need." },
          { name: "Put intercompany agreements in place", text: "Sign a services or cost-plus agreement between the subsidiary and the parent, and set up the transfer pricing documentation for the first year." },
        ],
      }}
      faqs={[
        { question: "Is an Employer of Record legal in India?", answer: "Yes. An EOR is an Indian company that employs staff in its own name, registers them under Indian labour and payroll laws, and assigns them to your projects. There is no separate EOR licence, so what matters is that the EOR complies with labour, payroll and tax rules, and that your contract with it is clear about control and IP." },
        { question: "Can using an EOR create a permanent establishment in India?", answer: "It can. An EOR moves the employment relationship to an Indian company, but if staff habitually conclude contracts for your company, run its sales, or work from premises at its disposal, the Indian tax authorities may argue that the foreign company has a permanent establishment. The treaty and the facts decide this." },
        { question: "Who owns the IP created by staff hired through an EOR?", answer: "The employee's employer, which is the EOR, usually owns work created in the course of employment, so you need a written chain: the employee assigns to the EOR and the EOR assigns to your company. Check that your EOR agreement contains this assignment and that employee contracts include invention and confidentiality clauses." },
        { question: "At what headcount should a foreign company set up an Indian subsidiary?", answer: "There is no legal threshold. Most companies move once the India team becomes a lasting part of the business, staff start doing revenue or core product work, or the recurring EOR service charge across many employees outweighs the fixed annual compliance of a company. For many groups this point arrives somewhere between a handful and a dozen hires." },
        { question: "How long does it take to switch from an EOR to a subsidiary?", answer: "Plan for several weeks to a few months. Incorporation and the bank account usually take the longest, and foreign documents must be legalised before filing. After the company exists, payroll registrations and new contracts take a few more weeks. Running the EOR in parallel until the transfer date avoids gaps in salary." },
        { question: "Is a liaison office an alternative to an EOR?", answer: "Sometimes. A liaison office can employ staff directly to represent the parent and act as a communication channel, but it cannot earn income in India, and it needs approval under the RBI Master Direction through an AD Category-I bank. It suits representation and market research, not service delivery or sales." },
        { question: "Does a subsidiary need RBI approval?", answer: "Not in automatic-route sectors. A foreign company can incorporate a wholly owned Indian subsidiary without prior approval where the FDI Policy permits 100% under the automatic route, and then reports the share allotment to the RBI in Form FC-GPR within 30 days. Branch and liaison offices, by contrast, follow the RBI approval process." },
        { question: "What are the cost drivers of an EOR compared with a subsidiary?", answer: "An EOR charges a recurring service fee for each employee, so total cost rises with headcount. A subsidiary has one-off set-up costs for legalisation and incorporation, and a broadly fixed annual cost for audit, ROC, tax and transfer pricing compliance, so cost per employee falls as the team grows." },
      ]}
      relatedQuestions={[
        { question: "What does annual compliance for an Indian subsidiary involve?", href: "/india-subsidiary-compliance-cfo" },
        { question: "What FEMA filings follow a foreign investment?", href: "/fema-rbi-compliance" },
        { question: "How is transfer pricing applied to intercompany services?", href: "/transfer-pricing-audit" },
      ]}
      relatedSlugs={["company-registration-india-for-foreigners", "india-subsidiary-compliance-cfo", "fema-rbi-compliance"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">How does an EOR compare with a subsidiary in India?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The table compares the two options on the points foreign companies most often ask about. It describes the position
        in general terms; the answer for your company depends on what the India team will do and on the tax treaty between
        India and your home country.
      </p>
      <DataTable head={["Point", "Employer of Record (EOR)", "Wholly owned subsidiary"]} rows={COMPARISON} />

      <h2 className="mt-14 text-2xl text-obsidian">When does an EOR make sense?</h2>
      <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed text-slate">
        <li>You want one or a few people in India within weeks, for example a first engineer, researcher or support lead.</li>
        <li>You are testing whether India works as a delivery or talent location and may not stay.</li>
        <li>The staff will not negotiate or sign contracts, issue invoices or sell to customers on your behalf.</li>
        <li>You do not need an Indian bank account, office lease, GST registration or local licence in your own name.</li>
        <li>You need a bridge while your subsidiary is being incorporated, so new hires are not delayed.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">When should you incorporate instead?</h2>
      <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed text-slate">
        <li>The India team is expected to grow beyond a small group, or India is becoming a long-term centre.</li>
        <li>Staff will sell to Indian customers, sign contracts or take decisions that bind the business.</li>
        <li>Core product, engineering or IP will be created in India and you want a clean ownership chain for investors or acquirers.</li>
        <li>You want your own employment policies, benefits, equity plans and premises.</li>
        <li>You expect to invoice Indian customers, hold licences or register for GST.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">What headcount and timeline point to each option?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Use this as a starting point for discussion, not a rule. The type of work matters more than the number of people:
        one salesperson closing deals can create more risk than ten engineers working on internal projects.
      </p>
      <DataTable head={["Your situation", "What usually fits"]} rows={DECISION} />

      <h2 className="mt-14 text-2xl text-obsidian">What drives the cost of each option?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        An EOR&apos;s cost is mainly a recurring service charge for each employee on top of salary and statutory
        contributions, sometimes with a currency conversion margin, so it scales directly with headcount. A subsidiary
        involves one-off costs for document legalisation, incorporation and bank set-up, and then a broadly fixed annual
        cost for the statutory audit, ROC filings, the income tax return, transfer pricing documentation, FEMA returns and
        payroll compliance. Because that fixed cost does not grow much as staff are added, the cost per employee of a
        subsidiary tends to fall as the team grows. We can map these drivers to your hiring plan without guessing at
        third-party EOR rates.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What about a branch office or liaison office instead?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        A foreign company can also operate through an office of its own in India rather than a separate company. These
        offices are regulated under section 6(6) of FEMA and the RBI Master Direction on establishment of branch, liaison and
        project offices, and need approval through an AD Category-I bank, unlike a subsidiary in an automatic-route sector.
      </p>
      <DataTable head={["Structure", "What it can do", "Approval route"]} rows={OFFICES} />

      <h2 className="mt-14 text-2xl text-obsidian">What are the permanent establishment and misclassification risks with an EOR?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        An EOR solves the question of who employs the staff. It does not decide whether your foreign company is carrying on
        business in India. If EOR staff work only on internal tasks for the parent, the exposure is usually limited. If they
        hold themselves out as your company, negotiate or sign contracts, or work from premises you control, the tax
        authorities may treat the foreign company as having a permanent establishment, with Indian tax on the profits
        attributable to it. Separately, engaging people as independent contractors when they work like employees can lead to
        claims under labour and social security laws. Both risks are reduced by defining roles carefully and, once activity
        grows, by moving it into an Indian subsidiary.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Where can you read about setting up from your country?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Our country guides cover documents, legalisation and tax treaty points for parents in the{" "}
        <Link href="/india-subsidiary-for-us-companies" className={linkClass}>
          United States
        </Link>
        ,{" "}
        <Link href="/india-subsidiary-for-uk-companies" className={linkClass}>
          United Kingdom
        </Link>{" "}
        and{" "}
        <Link href="/india-subsidiary-for-uae-companies" className={linkClass}>
          United Arab Emirates
        </Link>
        . The overall process is explained on our{" "}
        <Link href="/company-registration-india-for-foreigners" className={linkClass}>
          company setup in India for foreign businesses
        </Link>{" "}
        page.
      </p>
    </ServicePageTemplate>
  );
}
