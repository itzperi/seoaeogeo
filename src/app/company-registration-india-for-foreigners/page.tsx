import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Company Registration in India for Foreigners | Chennai" },
  description:
    "Company registration in India for foreign businesses: subsidiary, LLP or branch, FDI route checks, SPICe+ incorporation and FC-GPR filing, from Chennai.",
  alternates: { canonical: "/company-registration-india-for-foreigners" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Setting Up a Company in India as a Foreign Business",
    description: "Subsidiary, LLP or branch office set-up in India for foreign companies, with FDI and FEMA reporting handled from Chennai.",
    url: "/company-registration-india-for-foreigners",
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

const TIMELINE = [
  ["Document legalisation abroad", "1 to 4 weeks", "Notarisation and apostille, or consularisation in non-Convention countries; often the longest step and done in parallel with the next one."],
  ["DSC and DIN", "Under 1 week", "Digital signature certificates for directors once identity documents are ready; DINs are allotted through SPICe+."],
  ["Name approval (SPICe+ Part A)", "About 1 week", "Longer if the Registrar asks for a different name and the application is resubmitted."],
  ["Incorporation (SPICe+ Part B)", "1 to 3 weeks", "Filed with MOA and AOA; the certificate of incorporation, PAN and TAN are issued on approval."],
  ["Bank account opening", "1 to 4 weeks", "Bank KYC for the company and its foreign shareholders; some banks need originals or video verification."],
  ["Capital remittance and share allotment", "1 to 2 weeks", "Shares must be issued within 60 days of receiving the money from the foreign shareholder."],
  ["FC-GPR filing", "Within 30 days of allotment", "Filed on the RBI FIRMS portal through the authorised dealer bank, with the valuation certificate and remittance details."],
];

const LEGALISATION = [
  ["United States", "Party", "Apostille from the Secretary of State of the issuing or notarising state, or the US Department of State for federal documents."],
  ["United Kingdom", "Party", "Apostille from the FCDO Legalisation Office; private documents are first certified by a notary or solicitor."],
  ["Canada", "Party (from January 2024)", "Apostille from the competent Canadian authority."],
  ["Germany, Netherlands", "Party", "Apostille from the competent authority in the issuing country."],
  ["Australia", "Party", "Apostille from the Department of Foreign Affairs and Trade."],
  ["Singapore", "Party (from September 2021)", "Apostille from the Singapore Academy of Law."],
  ["Japan", "Party", "Apostille from the Ministry of Foreign Affairs."],
  ["Saudi Arabia", "Party (from December 2022)", "Apostille from the competent Saudi authority."],
  ["United Arab Emirates", "Not listed", "Notarisation, attestation by the UAE Ministry of Foreign Affairs, then attestation by the Embassy of India in Abu Dhabi or Consulate General in Dubai."],
  ["Qatar, Kuwait", "Not listed", "Consularisation: attestation by the country's foreign ministry, then by the Indian embassy there."],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/company-registration-india-for-foreigners`}
      serviceType="Foreign Company Incorporation in India"
      crumbLabel="Company Registration for Foreigners"
      crumbHref="/company-registration-india-for-foreigners"
      eyebrow="India Entry · Foreign Companies & Founders"
      h1="Setting Up a Company in India as a Foreign Business: Subsidiary, LLP or Branch"
      subhead="Entity selection, FDI route checks, document legalisation, SPICe+ incorporation and post-incorporation FEMA reporting for foreign companies and founders setting up in Chennai, Tamil Nadu or elsewhere in India."
      introHeading="Can a foreign company or foreign national register a company in India?"
      intro="Yes. Foreign companies and individuals can own up to 100% of an Indian private limited company under the automatic route in most sectors, without prior government approval. Some sectors need government approval or carry foreign-ownership caps, so the first step is checking the FDI Policy for your activity. A private company needs at least two directors and two shareholders, and at least one director must have stayed in India for 182 days or more in the financial year. After incorporation, the share allotment must be reported to the RBI in Form FC-GPR."
      citation={{ label: "DPIIT — Consolidated FDI Policy (dpiit.gov.in)", href: "https://www.dpiit.gov.in/static/uploads/2025/07/6457fc2703ee6082366c4a958b6473a8.pdf" }}
      subServicesHeading="What does company registration in India for a foreign business involve?"
      subServices={[
        { name: "Entity Choice: Subsidiary, LLP or Office", text: "We compare a wholly owned subsidiary, an LLP, and a branch, liaison or project office against what you plan to do in India, covering tax, liability, permitted activities and ongoing compliance." },
        { name: "FDI Route and Sector Check", text: "We check your activity against the FDI Policy and the FEMA (Non-debt Instruments) Rules to confirm whether it falls under the automatic route or needs government approval, and whether any cap applies." },
        { name: "Document Legalisation", text: "Passports, address proofs and the parent's board resolution and incorporation certificate are notarised and apostilled in Hague Convention countries, or consularised at the Indian mission elsewhere. We give you the exact list." },
        { name: "DSC, DIN and SPICe+ Incorporation", text: "We obtain digital signature certificates for directors, file the SPICe+ incorporation forms with name reservation, MOA and AOA on the MCA portal, and secure PAN, TAN and the certificate of incorporation." },
        { name: "Bank Account and Capital Inflow", text: "We help open the company's current account with an authorised dealer bank and ensure share capital is received through banking channels with the KYC and FIRC documents needed for FEMA reporting." },
        { name: "FC-GPR, INC-20A and First-Year Set-Up", text: "We file FC-GPR on the RBI FIRMS portal within 30 days of share allotment, the INC-20A commencement declaration within 180 days of incorporation, and register for GST and payroll where needed." },
      ]}
      howTo={{
        heading: "How does a foreign company incorporate an Indian subsidiary from abroad?",
        steps: [
          { name: "Confirm structure and FDI route", text: "Decide between a subsidiary, LLP or branch office, and confirm that your sector is open under the automatic route or plan for the government approval process." },
          { name: "Appoint directors and resident director", text: "Identify at least two directors, including one who meets the 182-day India stay requirement, and two shareholders, which can be the foreign parent and a nominee." },
          { name: "Legalise and send documents", text: "Have identity, address and parent-company documents notarised and apostilled or consularised, then courier or upload them for verification." },
          { name: "Obtain DSC and file SPICe+", text: "Directors' digital signatures are issued, the name is reserved, and the SPICe+ forms with MOA and AOA are filed with the Registrar of Companies for incorporation." },
          { name: "Open bank account and bring in capital", text: "The company opens an account with an authorised dealer bank, the parent remits subscription money, and shares are allotted to the foreign shareholders." },
          { name: "Complete FEMA and statutory filings", text: "FC-GPR is filed within 30 days of allotment, INC-20A within 180 days of incorporation, and the first auditor, GST and payroll registrations are put in place." },
        ],
      }}
      faqs={[
        { question: "Can a foreigner own 100% of a company in India?", answer: "Yes, 100% foreign ownership is permitted under the automatic route in most sectors, so a foreign parent can hold all the shares of its Indian subsidiary, although some sectors need prior government approval or cap foreign holding, and investors from countries sharing a land border with India need government approval in all sectors. A nominee shareholder is commonly used to meet the two-shareholder minimum." },
        { question: "Does an Indian subsidiary need a resident director?", answer: "Yes, every Indian company must have at least one director who has stayed in India for at least 182 days in the financial year, under section 149(3) of the Companies Act, 2013. This director can be an Indian citizen or a foreign national living in India. Foreign groups often appoint a senior India employee or a trusted local professional to this role." },
        { question: "What is the difference between a subsidiary, a branch office and a liaison office?", answer: "A subsidiary is a separate Indian company that can carry on any permitted business, while branch and liaison offices are extensions of the foreign company with restricted activities. A liaison office cannot earn income in India and only represents the parent. Branch, liaison and project offices need RBI approval through an authorised dealer bank, whereas a subsidiary in an automatic-route sector does not." },
        { question: "How long does it take to register a company in India from abroad?", answer: "The incorporation itself on the MCA portal typically takes a few weeks once documents are ready, but overall timing depends mostly on how quickly foreign documents are legalised. Apostille or consular attestation in the home country often takes longer than the Indian filings. Opening the bank account and receiving capital adds further time before the company is fully operational." },
        { question: "What is FC-GPR and when is it due?", answer: "FC-GPR is the form an Indian company files on the RBI FIRMS portal to report shares issued to a foreign investor, and it is due within 30 days of the allotment. It is filed through the company's authorised dealer bank with the FIRC, KYC of the investor, and a valuation certificate. Late filing can attract a late submission fee or compounding under FEMA." },
        { question: "What ongoing compliance applies after incorporation?", answer: "After incorporation, the company files an annual FLA return with the RBI by 15 July, annual ROC filings, income tax returns, and transfer pricing documentation for transactions with the foreign parent. It also needs a statutory audit, board meetings, GST returns if registered, and TDS and payroll filings. Our India subsidiary compliance retainer covers this annual cycle." },
        { question: "Why set up in Chennai or Tamil Nadu?", answer: "Chennai has an established base in automotive and EV manufacturing, electronics, engineering services and global capability centres, with industrial parks run by SIPCOT around the city. Guidance Tamil Nadu is the state's investment promotion agency and the first point of contact for state incentives and facilitation. A Chennai-based CA firm can deal with the local Registrar, GST offices and banks directly." },
      ]}
      relatedQuestions={[
        { question: "What does annual compliance for an Indian subsidiary involve?", href: "/india-subsidiary-compliance-cfo" },
        { question: "How is transfer pricing applied to transactions with the foreign parent?", href: "/transfer-pricing-audit" },
        { question: "Is an LLP a better choice than a private limited company?", href: "/llp-registration-chennai" },
      ]}
      relatedSlugs={["india-subsidiary-compliance-cfo", "transfer-pricing-audit", "llp-registration-chennai"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">How long does each stage of setting up an Indian subsidiary take?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The durations below are indicative ranges based on typical cases, not commitments; they depend on how quickly
        documents are legalised abroad, MCA processing, bank onboarding and whether any resubmission is needed. The FC-GPR
        and share allotment deadlines are statutory.
      </p>
      <DataTable head={["Stage", "Typical duration", "Notes"]} rows={TIMELINE} />

      <h2 className="mt-14 text-2xl text-obsidian">How are documents legalised in different countries?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        India is a party to the Hague Apostille Convention, so documents from other Convention countries need only an
        apostille from the issuing country. Documents from countries that are not parties are consularised: attested by that
        country&apos;s foreign ministry and then by the Indian embassy or consulate there. The status below is taken from the
        HCCH status table; confirm the current position before signing.
      </p>
      <DataTable head={["Parent country", "Apostille Convention", "How documents are legalised for India"]} rows={LEGALISATION} />

      <h2 className="mt-14 text-2xl text-obsidian">Where can you find country-specific guidance?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Our country guides explain documents, treaty points and the working model for parents in the{" "}
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
        . If you want to hire in India before the company is ready, compare an{" "}
        <Link href="/eor-vs-subsidiary-india" className={linkClass}>
          Employer of Record with a subsidiary
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
