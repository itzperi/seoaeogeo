import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Section 8 Company Registration in Chennai | NGO" },
  description:
    "Section 8 company registration in Chennai for NGOs and foundations: licence through SPICe+, objects and name rules, e-MoA, e-AoA and 12A/80G next steps.",
  alternates: { canonical: "/section-8-company-registration-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Section 8 Company Registration in Chennai",
    description: "Not-for-profit company registration for Chennai NGOs, foundations and associations, with income tax registration as the next step.",
    url: "/section-8-company-registration-chennai",
  },
};

const NPO_COMPARE = [
  { point: "Law", s8: "Companies Act, 2013 (Section 8)", trust: "Registered trust deed (public charitable trust)", society: "Tamil Nadu Societies Registration Act, 1975" },
  { point: "Regulator", s8: "Registrar of Companies (MCA)", trust: "Sub-Registrar (deed registration)", society: "Registrar of Societies" },
  { point: "Governance", s8: "Board of directors, MCA annual filings", trust: "Trustees as per deed", society: "Governing body and members" },
  { point: "Credibility with CSR donors", s8: "High; formal reporting", trust: "Depends on trust", society: "Depends on society" },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/section-8-company-registration-chennai`}
      serviceType="Section 8 Company Registration"
      crumbLabel="Section 8 Company Registration"
      crumbHref="/section-8-company-registration-chennai"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="Section 8 Company · Chennai"
      h1="Section 8 Company Registration in Chennai"
      subhead="A not-for-profit company for charitable, educational, social or similar objects. We draft the objects, obtain the Section 8 licence through SPICe+, and line up the income tax registration that donors look for."
      introHeading="What is a Section 8 company?"
      intro="Section 8 company registration in Chennai creates a not-for-profit company under Section 8 of the Companies Act, 2013, for objects such as education, charity, social welfare, art, science, sports or environmental protection. Profits must be used only for those objects, and no dividend can be paid to members. The licence is now granted through the SPICe+ incorporation form itself."
      citation={{
        label: "MCA SPICe+ FAQs (Section 8 licence through SPICe+)",
        href: "https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/spiceplus-linked-filings.html",
      }}
      keyFacts={[
        { label: "Government form", value: "SPICe+ Part A and Part B, with e-MoA (INC-13) and e-AoA (INC-31) for Section 8 companies. INC-12 is no longer filed for a new Section 8 licence." },
        { label: "Minimum members", value: "2 directors and 2 members for a private Section 8 company; at least one director resident in India (182 days or more in the financial year)." },
        { label: "Name", value: "Must include a word such as Foundation, Forum, Association, Federation, Chambers, Confederation or Council." },
        { label: "Key restriction", value: "No dividend to members; income and profits must be applied only to the company's objects." },
        { label: "Next step", value: "Income tax registration and donor-deduction approval (commonly called 12A and 80G; Sections 332 and 354 of the Income-tax Act, 2025) via Form 105." },
      ]}
      howTo={{
        heading: "How do you register a Section 8 company in Chennai?",
        steps: [
          { name: "Define the objects", text: "We write objects that fit Section 8(1) and match what you will actually do, because the income tax department later checks activities against them." },
          { name: "DSC for directors and subscribers", text: "Class 3 Digital Signature Certificates for each proposed director and subscriber." },
          { name: "Name approval (SPICe+ Part A)", text: "We propose names with a required word such as Foundation or Association, and select the matching NIC activity code." },
          { name: "SPICe+ Part B with licence application", text: "Part B applies for incorporation and the Section 8 licence together, with DIN for new directors, PAN and TAN." },
          { name: "e-MoA (INC-13) and e-AoA (INC-31)", text: "The Section 8 versions of the Memorandum and Articles, including the bar on dividends and the use of income for objects." },
          { name: "AGILE-PRO-S", text: "The linked form registers EPFO and ESIC and requests the bank account; GST is optional." },
          { name: "Licence and Certificate of Incorporation", text: "The Registrar issues the licence and certificate, with CIN, PAN and TAN." },
          { name: "Income tax registration", text: "We apply on the income tax e-filing portal in Form 105 for registration and donor-deduction approval, and plan CSR-1 and FCRA where relevant." },
        ],
      }}
      subServicesHeading="What does our Section 8 registration include?"
      subServices={[
        { name: "Structure advice", text: "Section 8 company, trust or society: which fits your funding plans and governance." },
        { name: "Objects and name drafting", text: "Objects that satisfy Section 8 and income tax scrutiny, and a compliant name." },
        { name: "SPICe+ licence and incorporation", text: "Part A, Part B, e-MoA, e-AoA and AGILE-PRO-S filed together." },
        { name: "12A and 80G next steps", text: "Form 105 under the Income-tax Act, 2025 for registration and donor-deduction approval." },
        { name: "CSR-1 and FCRA planning", text: "Registration to receive CSR funds, and FCRA when you expect foreign contributions." },
        { name: "Annual compliance", text: "Audit, AOC-4, MGT-7 and income tax return for the not-for-profit company." },
      ]}
      faqs={[
        {
          question: "What objects can a Section 8 company have?",
          answer:
            "A Section 8 company can be formed to promote commerce, art, science, sports, education, research, social welfare, religion, charity, protection of the environment or similar objects. It must intend to apply its profits and income only to promoting those objects, and it cannot pay dividends to its members. Objects should be specific enough that your actual activities clearly fall within them.",
        },
        {
          question: "Is a separate licence application needed for a Section 8 company?",
          answer:
            "Not anymore. Since 15 February 2020, the Section 8 licence for a new company is applied for and issued through the SPICe+ incorporation form, under the Companies (Incorporation) Amendment Rules, 2020. Form INC-12 is not filed for a new Section 8 company. INC-12 is still relevant when an existing company or association applies for a licence later.",
        },
        {
          question: "Is there a minimum capital for a Section 8 company?",
          answer:
            "No. There is no statutory minimum capital for a Section 8 company. It can be limited by shares or by guarantee. Members contribute what the organisation needs to start, and running funds usually come from donations, grants and CSR contributions rather than share capital. Members cannot receive dividends, and on winding up, surplus assets go to another similar organisation.",
        },
        {
          question: "How does a Section 8 company get 12A and 80G registration?",
          answer:
            "From 1 April 2026, the registrations commonly called 12A and 80G fall under Sections 332 and 354 of the Income-tax Act, 2025. A Section 8 company applies on the income tax e-filing portal in Form 105, for registration so its own income is exempt and for approval so donors can claim a deduction. We prepare the application with the objects, activities and accounts the department asks for.",
        },
        {
          question: "Can a Section 8 company receive CSR funds and foreign donations?",
          answer:
            "Yes, with separate registrations. To receive CSR funds from companies, the organisation registers with the MCA in Form CSR-1, which also has income tax registration conditions. To receive foreign contributions, it needs registration or prior permission under the Foreign Contribution (Regulation) Act from the Ministry of Home Affairs. Neither comes automatically with incorporation, so we plan them from the start.",
        },
        {
          question: "Should we choose a Section 8 company, a trust or a society?",
          answer:
            "Choose a Section 8 company if you want formal corporate governance, a structure CSR donors are comfortable with, and easy changes in directors. A trust suits a small group of founders who want control held by trustees. A society suits a member-driven association. Compliance is heavier for a Section 8 company because of MCA filings and audit, so weigh that against credibility.",
        },
        {
          question: "What compliance does a Section 8 company have?",
          answer:
            "A Section 8 company files the same core MCA returns as other companies: audited financial statements in AOC-4 and the annual return in MGT-7 or MGT-7A, along with board meetings and statutory registers. It also files an income tax return, maintains the conditions of its income tax registration, and, if registered, CSR and FCRA returns. Converting it into a regular company needs approval through INC-18.",
        },
      ]}
      relatedQuestions={[
        { question: "Should we register a trust instead?", href: "/trust" },
        { question: "How does a Section 8 company compare with other structures?", href: "/company-registration-chennai" },
        { question: "What audit does a not-for-profit company need?", href: "/audit-and-assurance" },
      ]}
      relatedSlugs={["trust", "company-registration-chennai", "audit-and-assurance", "roc-compliances", "digital-signature-certificate-chennai", "annual-compliance-package"]}
      relatedPosts={["trust-vs-society-vs-section8", "12a-80g-registration-guide-chennai-ngos", "fcra-registration"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Who is eligible to register a Section 8 company?</h2>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• At least two directors and two members for a private Section 8 company (three directors and seven members for a public one).</li>
        <li>• At least one director who stayed in India for 182 days or more in the financial year.</li>
        <li>• Objects that fall within Section 8(1), with a commitment to apply all income to those objects.</li>
        <li>• A registered office in India with address proof and, if rented, the owner&apos;s NOC.</li>
        <li>• Members and directors can be individuals or organisations; foreign members bring additional documentation and FEMA considerations.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">What documents do you need?</h2>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• PAN, Aadhaar, photograph, address proof, mobile number and email for each director and member.</li>
        <li>• Registered office proof: electricity bill or property tax receipt, rent agreement and NOC if rented.</li>
        <li>• A note on the organisation&apos;s planned activities for the next few years, used to draft the objects and the income tax application.</li>
        <li>• Projected income and expenditure, which the Registrar may ask for with the licence application.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">How does a Section 8 company compare with a trust or society?</h2>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-fog text-left">
              <th className="p-4 font-medium text-obsidian">Point</th>
              <th className="p-4 font-medium text-obsidian">Section 8 company</th>
              <th className="p-4 font-medium text-obsidian">Trust</th>
              <th className="p-4 font-medium text-obsidian">Society</th>
            </tr>
          </thead>
          <tbody className="bg-paper">
            {NPO_COMPARE.map((row) => (
              <tr key={row.point} className="border-t border-ash">
                <td className="p-4 font-medium text-obsidian">{row.point}</td>
                <td className="p-4 text-slate">{row.s8}</td>
                <td className="p-4 text-slate">{row.trust}</td>
                <td className="p-4 text-slate">{row.society}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        For trust registration and ongoing NGO compliance, see our{" "}
        <Link href="/trust" className="text-royal-violet underline underline-offset-2">
          trust and NGO services
        </Link>
        , or compare every business structure on the{" "}
        <Link href="/company-registration-chennai" className="text-royal-violet underline underline-offset-2">
          company registration in Chennai
        </Link>{" "}
        page.
      </p>
    </ServicePageTemplate>
  );
}
