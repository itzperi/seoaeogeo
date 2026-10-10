import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const slug = "/india-subsidiary-for-us-companies";
const title = "Set Up a Subsidiary in India from the US | CA Chennai";
const description =
  "Set up an Indian subsidiary from the US: Delaware parent documents and apostille, resident director, FDI automatic route, FC-GPR and transfer pricing.";

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

const DOCUMENTS = [
  ["Certificate of incorporation and good standing of the US parent", "Issued by the state of incorporation, for example the Delaware Division of Corporations.", "Apostille from the Secretary of State of that state."],
  ["Board resolution of the US parent", "Approves the investment, names the subscriber, nominee shareholder and authorised representative for India.", "Signed by an officer, notarised, then apostilled by the Secretary of State of the state where it was notarised."],
  ["Charter documents of the parent", "Certificate of incorporation and bylaws, or equivalent, as certified copies.", "Notarised or certified and apostilled."],
  ["Passport of each foreign director and the authorised signatory", "Identity proof for DIN and DSC.", "Notarised copy, apostilled."],
  ["Recent address proof of each foreign director", "Bank statement, utility bill or driving licence, usually not older than a few months.", "Notarised copy, apostilled."],
  ["Beneficial ownership details", "Chain of ownership up to the individuals who ultimately control the parent.", "Declaration signed by the parent; legalisation if requested by the bank or Registrar."],
];

const INTERCOMPANY = [
  ["Cost-plus services", "The Indian subsidiary provides software development, engineering, analytics or back-office services to the US parent and is paid its costs plus a markup.", "Markup must be at arm's length; benchmarking study and annual transfer pricing report; GST treatment of the export of services."],
  ["Reimbursement of costs", "The parent pays shared costs such as software licences or travel that relate to the Indian company, or vice versa.", "Documentation that the recharge is at cost and for the recipient's benefit; withholding tax review."],
  ["Licence of IP or brand", "The Indian company uses the parent's technology or trade mark.", "Royalty rate supported by benchmarking; withholding tax under the India–US treaty; FEMA reporting where applicable."],
  ["Secondment of US staff", "US employees work in India for a period while staying on US payroll.", "Indian tax on salary for work done in India, possible permanent establishment questions, and recharge arrangements."],
];

const US_ITEMS = [
  ["Form 5471", "US persons with specified interests in a foreign corporation generally file this information return with their US return.", "Your US CPA, using the Indian company's financial statements and share register."],
  ["Controlled foreign corporation inclusions (GILTI, recast as net CFC tested income from 2026)", "Income of a controlled foreign corporation can be included in the US shareholder's income even if not distributed.", "Your US CPA, using our Indian profit, tax paid and asset figures."],
  ["Foreign tax credits", "Indian corporate tax and withholding tax may be creditable in the US subject to US rules.", "Your US CPA, using Indian tax payment challans and returns."],
  ["Entity classification", "Whether the Indian company can or should be treated as a corporation or otherwise for US purposes.", "Your US CPA or US tax counsel."],
  ["US reporting of foreign bank accounts", "US persons with signature authority over the Indian company's bank account may have US reporting obligations.", "Your US CPA."],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${slug}`}
      serviceType="India Subsidiary Incorporation for US Companies"
      crumbLabel="India Subsidiary for US Companies"
      crumbHref={slug}
      parentCrumb={{ name: "Company Setup in India for Foreign Businesses", href: "/company-registration-india-for-foreigners" }}
      eyebrow="India Entry · United States Parent Companies"
      h1="Set Up a Subsidiary in India from the US"
      subhead="How a Delaware or other US corporation incorporates a wholly owned Indian private limited company: documents and apostille, the resident director rule, the FDI automatic route, FC-GPR reporting, transfer pricing on intercompany services, and the points to coordinate with your US CPA."
      keyFacts={[
        { label: "Usual structure", value: "US parent holds all or nearly all shares of an Indian private limited company, with a nominee as the second shareholder." },
        { label: "Directors", value: "At least two; at least one must have stayed in India for 182 days or more in the financial year (section 149(3), Companies Act, 2013)." },
        { label: "Document legalisation", value: "Apostille. The United States has been a party to the Hague Apostille Convention since 1981, as has India since 2005." },
        { label: "FDI approval", value: "None in automatic-route sectors; check the FDI Policy for your activity first." },
        { label: "RBI reporting", value: "Form FC-GPR within 30 days of share allotment, then the annual FLA return by 15 July." },
        { label: "Intercompany pricing", value: "Services and other transactions with the US parent must be at arm's length and documented each year." },
      ]}
      introHeading="Can a US company set up a wholly owned subsidiary in India?"
      intro="Yes. A US corporation can own 100% of an Indian private limited company under the automatic route in most sectors, without prior government approval. It needs two shareholders, usually the parent and a nominee, two directors including one resident in India for 182 days, apostilled documents, and an FC-GPR filing within 30 days of allotting shares."
      citation={{ label: "HCCH Apostille Convention status table (hcch.net)", href: "https://www.hcch.net/en/instruments/conventions/status-table/?cid=41" }}
      subServicesHeading="What do we handle for a US parent setting up in India?"
      subServices={[
        { name: "Structure and FDI Route Check", text: "We confirm that your activity falls under the automatic route, recommend the shareholding and director structure, and explain how a subsidiary compares with an LLP or branch for your plan." },
        { name: "Document List and Apostille Guidance", text: "We give your US team a precise list of what to notarise and apostille, with drafts of the board resolution and authorisation letters in the form Indian authorities expect." },
        { name: "DSC, DIN and SPICe+ Filing", text: "We obtain digital signatures for directors, reserve the name, draft the MOA and AOA, and file SPICe+ with the Registrar of Companies." },
        { name: "Bank Account and Capital", text: "We coordinate the current account opening, the wire of share capital from the US, receipt of the foreign inward remittance details, and the share allotment." },
        { name: "FC-GPR and First-Year Compliance", text: "We file FC-GPR, the commencement of business declaration, and set up GST, payroll and TDS so the company can start operating." },
        { name: "Transfer Pricing and Reporting Pack", text: "We help set the intercompany agreement, prepare annual transfer pricing documentation, and provide your US CPA with the Indian figures needed for US filings." },
      ]}
      howTo={{
        heading: "How does a US company set up its Indian subsidiary step by step?",
        steps: [
          { name: "Confirm activity and structure", text: "Check the FDI Policy for your sector, decide on the shareholding, and identify two directors including one who meets the 182-day India stay test." },
          { name: "Sign and apostille documents in the US", text: "Pass the board resolution, notarise signatures and copies, and obtain apostilles from the relevant Secretary of State; then courier the originals to India." },
          { name: "Obtain DSCs and reserve the name", text: "Directors' digital signature certificates are issued and the proposed name is reserved through SPICe+ Part A on the MCA portal." },
          { name: "File SPICe+ for incorporation", text: "SPICe+ Part B, the MOA and AOA and linked forms are filed; on approval the company receives its certificate of incorporation, PAN and TAN." },
          { name: "Open the bank account and remit capital", text: "The company opens a current account with an authorised dealer bank, the US parent wires the subscription money, and shares are allotted within 60 days of receipt." },
          { name: "File FC-GPR and start operations", text: "FC-GPR is filed within 30 days of allotment, the commencement declaration is filed, and GST, payroll and the intercompany agreement are put in place." },
        ],
      }}
      faqs={[
        { question: "Can a Delaware C-corp own 100% of an Indian company?", answer: "Yes. Where the FDI Policy allows 100% foreign investment under the automatic route, a Delaware C-corp can hold all the economic interest in an Indian private limited company. Because a private company needs at least two shareholders, a nominee, often a US officer or group company, holds one share on behalf of the parent." },
        { question: "Does the Indian subsidiary need a director who lives in India?", answer: "Yes. Section 149(3) of the Companies Act, 2013 requires at least one director who has stayed in India for 182 days or more during the financial year. This person can be an Indian national or a foreign national living in India, and is often the India country manager or a trusted local professional." },
        { question: "How are US documents apostilled for use in India?", answer: "Both countries are parties to the Hague Apostille Convention, so US public documents need an apostille rather than embassy legalisation. State documents and notarised papers are apostilled by the Secretary of State of the issuing or notarising state, and federal documents by the US Department of State. The Indian authorities then accept them without further attestation." },
        { question: "What is FC-GPR and who files it?", answer: "FC-GPR is the RBI form reporting the issue of shares to a foreign investor. The Indian company files it on the FIRMS portal within 30 days of allotting shares to the US parent, through its authorised dealer bank, with the remittance details, the investor's KYC and a valuation certificate." },
        { question: "How is the Indian subsidiary paid for services to the US parent?", answer: "Most US groups use a cost-plus services agreement, where the Indian company invoices the parent for its costs plus an arm's length markup. Indian transfer pricing rules require this markup to be supported by benchmarking and documented each year, and the export of services also needs the correct GST treatment." },
        { question: "Does the India–US tax treaty help the subsidiary?", answer: "The India–US Double Taxation Avoidance Agreement can reduce Indian withholding tax on dividends, interest, royalties and fees paid to the US parent, subject to conditions. The parent usually needs a US residency certification, such as IRS Form 6166, and the prescribed declarations in India to claim the treaty rate." },
        { question: "Do you advise on US tax filings such as Form 5471?", answer: "No. We are Indian chartered accountants and do not give US tax advice. We prepare the Indian financial statements, tax payment records and intercompany data your US CPA needs for Form 5471, controlled foreign corporation inclusions and foreign tax credits, and we coordinate timelines so both sets of filings use the same numbers." },
        { question: "How do you work with a US team across time zones?", answer: "India Standard Time is 9.5 to 10.5 hours ahead of US Eastern time, depending on daylight saving. We typically hold calls in the Indian evening, which is the US morning, share documents through a secure portal, and agree a monthly close and reporting calendar so your US team receives information at the start of its working day." },
      ]}
      relatedQuestions={[
        { question: "Should we hire through an EOR before incorporating?", href: "/eor-vs-subsidiary-india" },
        { question: "What does annual compliance for an Indian subsidiary involve?", href: "/india-subsidiary-compliance-cfo" },
        { question: "How is transfer pricing documented in India?", href: "/transfer-pricing-audit" },
      ]}
      relatedSlugs={["india-subsidiary-compliance-cfo", "transfer-pricing-audit", "fema-rbi-compliance"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">What documents does a US parent need, and how are they apostilled?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Because the United States and India are both parties to the Hague Apostille Convention, US documents need an apostille
        rather than attestation by the Indian embassy or consulate. The apostille is issued by the Secretary of State of the
        state where the document was issued or notarised, which for a Delaware company&apos;s certificates is Delaware. The
        exact list depends on your structure; this is the usual set.
      </p>
      <DataTable head={["Document", "What it is", "Legalisation"]} rows={DOCUMENTS} />

      <h2 className="mt-14 text-2xl text-obsidian">Who can be the resident director of a US-owned Indian company?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Every Indian company needs at least one director who has stayed in India for 182 days or more in the financial year.
        US groups usually appoint the first India hire at senior level, an existing employee who has relocated, or an
        independent professional who acts as a non-executive director. The other directors can be US executives who never
        travel to India; they sign electronically using digital signature certificates. A resident director carries the
        same legal duties as any other director, so the role should be documented and supported with regular reporting.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Is a US company&apos;s investment covered by the automatic route?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Most activities US companies set up in India for, such as software development, IT-enabled services, engineering
        services, research and many types of manufacturing, are open to 100% foreign investment under the automatic route.
        Some sectors carry caps, conditions or government approval, so we check your activity against the current FDI Policy
        and the FEMA (Non-debt Instruments) Rules before filing. We also confirm the parent&apos;s ultimate beneficial
        owners, because investment where a beneficial owner is situated in, or is a citizen of, a country sharing a land
        border with India needs government approval regardless of the sector.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How is transfer pricing applied to intercompany services?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Once the subsidiary starts working for the US parent, every transaction between them is an international transaction
        between associated enterprises under Indian transfer pricing rules. The price must be at arm&apos;s length, the
        company must keep documentation, and an accountant&apos;s report on these transactions is filed with the income tax
        return. Common arrangements are shown below.
      </p>
      <DataTable head={["Arrangement", "How it works", "India points to cover"]} rows={INTERCOMPANY} />

      <h2 className="mt-14 text-2xl text-obsidian">What should a US parent coordinate with its US CPA?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Owning an Indian company has US tax and reporting consequences. We do not advise on US tax; the table lists items
        your US CPA will usually want to consider, so that you can raise them early and we can supply the Indian information
        in time.
      </p>
      <DataTable head={["Item for your US adviser", "Why it comes up", "Who handles it"]} rows={US_ITEMS} />

      <h2 className="mt-14 text-2xl text-obsidian">How does the India–US tax treaty affect the subsidiary?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The Indian subsidiary is an Indian tax resident and pays Indian corporate tax on its profits. The India–US Double
        Taxation Avoidance Agreement matters mainly for payments that cross the border: dividends, interest, royalties and fees
        for services paid to the US parent, where Indian withholding tax can be reduced to treaty rates if the conditions are
        met. To claim those rates the parent typically provides a US residency certification and the declarations required
        under Indian rules. The treaty also contains the permanent establishment rules that apply if US staff work in India
        for the parent, which matters for secondments and visiting teams.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How does a US–India working model run day to day?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        India Standard Time is 9.5 to 10.5 hours ahead of US Eastern time and 12.5 to 13.5 hours ahead of US Pacific time,
        depending on daylight saving. In practice, the Indian evening overlaps with the US morning, which is when we hold
        calls with founders, controllers and US CPAs. Our team in Anna Nagar, Chennai works with US clients remotely: documents
        are exchanged through a secure portal, filings are signed with digital signatures, and a monthly calendar sets dates
        for payroll, the books, GST and TDS, so the US side knows what will arrive and when. After set-up, our{" "}
        <Link href="/india-subsidiary-compliance-cfo" className={linkClass}>
          India subsidiary compliance and CFO service
        </Link>{" "}
        runs the annual cycle, and if you are not ready to incorporate yet, compare an{" "}
        <Link href="/eor-vs-subsidiary-india" className={linkClass}>
          EOR with a subsidiary
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
