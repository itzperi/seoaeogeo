import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "OPC Registration in Chennai | One Person Company" },
  description:
    "OPC registration in Chennai for solo founders: SPICe+ filing with nominee consent (INC-3), NRI eligibility under the 2021 rules, and conversion to Pvt Ltd.",
  alternates: { canonical: "/opc-registration-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "OPC Registration in Chennai",
    description: "One Person Company registration for solo founders in Chennai and Tamil Nadu, from name approval to the first annual filing.",
    url: "/opc-registration-chennai",
  },
};

const OPC_VS = [
  { point: "Owners", opc: "One member (plus a nominee)", pvt: "2 to 200 members", prop: "One owner, no separate entity" },
  { point: "Liability", opc: "Limited to share capital", pvt: "Limited to share capital", prop: "Unlimited" },
  { point: "Annual general meeting", opc: "Not required", pvt: "Required every year", prop: "Not applicable" },
  { point: "Audit", opc: "Every year", pvt: "Every year", prop: "Only if tax audit limits are crossed" },
  { point: "Raising equity", opc: "Not possible until it converts", pvt: "Yes, by issuing shares", prop: "Not possible" },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/opc-registration-chennai`}
      serviceType="One Person Company Registration"
      crumbLabel="OPC Registration"
      crumbHref="/opc-registration-chennai"
      parentCrumb={{ name: "Company Registration", href: "/company-registration-chennai" }}
      eyebrow="One Person Company · Chennai"
      h1="OPC Registration in Chennai"
      subhead="A company with a single owner: limited liability and a corporate identity without needing a co-founder. We handle name approval, SPICe+ filing, nominee consent and the first-year compliance calendar."
      introHeading="What is a One Person Company?"
      intro="OPC registration in Chennai creates a One Person Company under the Companies Act, 2013: a private company with a single member, who must be an Indian citizen and a natural person. The member names a nominee who takes over if the member dies or becomes incapable. It is incorporated through SPICe+, typically in 7–12 working days once documents are ready."
      citation={{
        label: "MCA FAQs on One Person Company",
        href: "https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/one-person-company.html",
      }}
      keyFacts={[
        { label: "Typical time", value: "7–12 working days once documents are ready, the same SPICe+ route as a Private Limited Company." },
        { label: "Government form", value: "SPICe+ Part A and Part B with AGILE-PRO-S, e-MoA and e-AoA. The nominee's consent (INC-3) is a declaration inside Part B, signed with the nominee's DSC." },
        { label: "Minimum members", value: "1 member, 1 nominee and at least 1 director. Both member and nominee must be Indian citizens; residence in India is no longer required for them." },
        { label: "Who it suits", value: "Solo consultants, freelancers and single-founder businesses that want limited liability and a company name on contracts." },
        { label: "Key limits", value: "One OPC per person (as member or nominee); no conversion into a Section 8 company; no non-banking financial investment activity." },
      ]}
      howTo={{
        heading: "How do you register an OPC in Chennai?",
        steps: [
          { name: "Choose the nominee", text: "Pick an Indian citizen adult you trust, often a spouse, parent or sibling. They need PAN, Aadhaar and a DSC, because their consent is signed within SPICe+ Part B." },
          { name: "DSC for the member, director and nominee", text: "We arrange Class 3 Digital Signature Certificates with online video verification." },
          { name: "Name approval (SPICe+ Part A)", text: "The name ends in \"(OPC) Private Limited\". An approved name is reserved for 20 days, within which Part B is filed." },
          { name: "SPICe+ Part B, e-MoA and e-AoA", text: "We file the incorporation form with registered office proof, the nominee declaration and the Memorandum and Articles. DIN is allotted to a new director in the same form." },
          { name: "AGILE-PRO-S", text: "This linked form registers the OPC with EPFO and ESIC, requests the bank account and can apply for GST if you need it now." },
          { name: "Certificate of Incorporation", text: "The Registrar issues the certificate with CIN, and PAN and TAN are allotted in the same process." },
          { name: "Post-incorporation", text: "Open the current account, deposit share capital, appoint the first auditor within 30 days and file INC-20A within 180 days." },
        ],
      }}
      subServicesHeading="What does our OPC registration include?"
      subServices={[
        { name: "Eligibility check", text: "We confirm the member and nominee meet the citizenship and one-OPC-per-person rules before anything is filed." },
        { name: "DSC, DIN and name approval", text: "Digital signatures for all three roles and a name searched against MCA and trademark records." },
        { name: "SPICe+ filing with nominee consent", text: "Part B, AGILE-PRO-S, e-MoA and e-AoA filed together, with INC-3 signed by the nominee inside the form." },
        { name: "Post-incorporation set-up", text: "Bank account, first auditor, share certificate and INC-20A within the statutory timelines." },
        { name: "Nominee or member changes", text: "INC-4 when the member changes, and updating the nominee when circumstances change." },
        { name: "Conversion to Private Limited", text: "INC-6 filing once you add a co-founder or investor, with fresh Articles drafted for the new shareholding." },
      ]}
      faqs={[
        {
          question: "Who can register a One Person Company?",
          answer:
            "Only a natural person who is an Indian citizen can form an OPC, whether they live in India or abroad. Companies, LLPs, foreign nationals and minors cannot. The nominee must also be an Indian citizen. One person can be a member of only one OPC and a nominee in only one OPC at a time, so you cannot run several businesses through separate OPCs.",
        },
        {
          question: "Can an NRI register an OPC in India?",
          answer:
            "Yes. Since the Companies (Incorporation) Second Amendment Rules, 2021, an Indian citizen can form an OPC whether resident in India or not, so NRIs are eligible as member and nominee. Separately, every company needs at least one director who stayed in India for 182 days or more in the financial year, so an NRI founder living abroad usually appoints a resident director alongside.",
        },
        {
          question: "What is the role of the nominee in an OPC?",
          answer:
            "The nominee becomes the member of the OPC if the original member dies or can no longer contract, so the company does not end with its owner. The nominee has no ownership or say while the member is active. Their written consent, previously filed as a separate INC-3, is now a declaration inside SPICe+ Part B, signed with the nominee's own digital signature.",
        },
        {
          question: "Is there a turnover or capital limit after which an OPC must convert?",
          answer:
            "No. Before April 2021, an OPC had to convert into a private or public company once its paid-up capital exceeded ₹50 lakh or average annual turnover exceeded ₹2 crore. The 2021 amendment removed that compulsory conversion, so an OPC can keep growing as an OPC. It can still choose to convert at any time, which most founders do when they bring in a co-founder or investor.",
        },
        {
          question: "How do I convert an OPC into a Private Limited Company?",
          answer:
            "You increase the members to at least two and the directors to at least two, alter the Memorandum and Articles, pass the required resolutions, and file INC-6 with the Registrar. The company continues as the same legal entity with its PAN, bank accounts and contracts, and drops \"OPC\" from its name. An OPC cannot convert into a Section 8 company.",
        },
        {
          question: "What compliance does an OPC have after registration?",
          answer:
            "An OPC must have its accounts audited every year, file financial statements (AOC-4) within 180 days of the financial year end, and file its annual return (MGT-7A). It does not need an annual general meeting, and an OPC with only one director does not need to hold board meetings. Income tax returns, TDS and GST returns, if registered, apply as for any company.",
        },
        {
          question: "Should I choose an OPC or a proprietorship?",
          answer:
            "Choose an OPC if you want your personal assets protected from business debts, need a company name on contracts, or expect to bring in investors later. Choose a proprietorship if your business is small and low-risk and you want the least paperwork, because an OPC must be audited every year and file annual MCA returns. Many solo founders start as a proprietor and incorporate once contracts grow.",
        },
      ]}
      relatedQuestions={[
        { question: "How does an OPC compare with a Pvt Ltd and an LLP?", href: "/company-registration-chennai" },
        { question: "What does Private Limited incorporation involve when I add a co-founder?", href: "/private-limited-company-incorporation-chennai" },
        { question: "What do I register if I stay a sole proprietor?", href: "/proprietorship-registration-chennai" },
      ]}
      relatedSlugs={["company-registration-chennai", "private-limited-company-incorporation-chennai", "proprietorship-registration-chennai", "digital-signature-certificate-chennai", "annual-compliance-package", "gst-registration-chennai"]}
      relatedPosts={["llp-vs-opc-vs-pvt-ltd", "spice-plus-incorporation-explained", "post-incorporation-compliance-checklist", "add-remove-director"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Who is eligible for OPC registration in Chennai?</h2>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• The member must be a natural person and an Indian citizen. NRIs qualify; foreign nationals and companies do not.</li>
        <li>• The nominee must also be an Indian citizen and a natural person, and must consent in writing.</li>
        <li>• No one can be a member of more than one OPC, or a nominee in more than one OPC.</li>
        <li>• Minors cannot be members or nominees.</li>
        <li>• At least one director must have stayed in India for 182 days or more in the financial year. The member can be that director.</li>
        <li>• An OPC cannot carry on non-banking financial investment activity, and it cannot convert into a Section 8 company.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">What documents do you need?</h2>
      <ul className="mt-4 max-w-3xl space-y-3 text-slate">
        <li>• PAN, Aadhaar, photograph, address proof, mobile number and email for the member, nominee and any other director.</li>
        <li>• For NRIs: passport and overseas address proof, notarised or apostilled as applicable.</li>
        <li>• Registered office proof: recent electricity bill or property tax receipt, plus rent agreement and owner&apos;s NOC if rented. Your home can be the registered office.</li>
        <li>• Proposed names and a short description of the business for the objects clause.</li>
      </ul>

      <h2 className="mt-14 text-2xl text-obsidian">How does an OPC compare with a Pvt Ltd and a proprietorship?</h2>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-fog text-left">
              <th className="p-4 font-medium text-obsidian">Point</th>
              <th className="p-4 font-medium text-obsidian">OPC</th>
              <th className="p-4 font-medium text-obsidian">Private Limited</th>
              <th className="p-4 font-medium text-obsidian">Proprietorship</th>
            </tr>
          </thead>
          <tbody className="bg-paper">
            {OPC_VS.map((row) => (
              <tr key={row.point} className="border-t border-ash">
                <td className="p-4 font-medium text-obsidian">{row.point}</td>
                <td className="p-4 text-slate">{row.opc}</td>
                <td className="p-4 text-slate">{row.pvt}</td>
                <td className="p-4 text-slate">{row.prop}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Comparing all six structures, including LLP and partnership? See our{" "}
        <Link href="/company-registration-chennai" className="text-royal-violet underline underline-offset-2">
          company registration in Chennai
        </Link>{" "}
        guide.
      </p>
    </ServicePageTemplate>
  );
}
