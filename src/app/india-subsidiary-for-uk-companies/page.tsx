import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const slug = "/india-subsidiary-for-uk-companies";
const title = "Set Up a Subsidiary in India from the UK | CA Chennai";
const description =
  "Set up an Indian subsidiary from the UK: Companies House documents with FCDO apostille, resident director, FDI route, FC-GPR, India–UK tax treaty and CETA.";

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
  ["Certificate of incorporation of the UK parent", "Issued by Companies House; a certified copy or a recent certificate of good standing is commonly used.", "Apostille from the FCDO Legalisation Office."],
  ["Articles of association", "Certified copy of the parent's current articles.", "Certified by a UK notary or solicitor, then apostilled."],
  ["Board resolution of the UK parent", "Approves the investment, names the subscriber, nominee shareholder and authorised representative for India.", "Signed by a director, notarised, then apostilled."],
  ["Register of members or confirmation statement", "Shows who owns the parent; used to establish beneficial ownership.", "Certified copy, apostilled if requested."],
  ["Passport of each foreign director and the authorised signatory", "Identity proof for DIN and DSC.", "Copy certified by a notary or solicitor, then apostilled."],
  ["Recent address proof of each foreign director", "Bank statement, utility bill or driving licence, usually not older than a few months.", "Certified copy, apostilled."],
];

const UK_ITEMS = [
  ["Controlled foreign company rules", "Whether any profits of the Indian subsidiary could be attributed to the UK parent.", "Your UK tax adviser."],
  ["Dividend exemption", "Whether dividends received from the Indian company are exempt from UK corporation tax.", "Your UK tax adviser."],
  ["Double tax relief", "How Indian withholding tax on royalties, fees or interest is credited in the UK.", "Your UK tax adviser, using Indian withholding certificates we provide."],
  ["UK transfer pricing", "Pricing of services and IP between the parent and the subsidiary must also satisfy UK rules.", "Your UK adviser, aligned with the Indian transfer pricing documentation."],
  ["Group reporting", "Consolidation of the Indian subsidiary in group accounts and any country-by-country reporting.", "Your UK auditor and adviser, using our Indian financial statements."],
];

const UK_INDIA = [
  ["India–UK tax treaty", "Double Taxation Avoidance Convention covering taxes on income and capital gains, amended by a protocol signed in 2012.", "Withholding rates on dividends, interest, royalties and fees, tax residence, permanent establishment and relief from double taxation."],
  ["Comprehensive Economic and Trade Agreement (CETA)", "Signed on 24 July 2025 and in force from 15 July 2026, according to the UK government.", "Mainly tariffs on goods, services market access and business mobility; it does not replace the FDI Policy or Indian tax rules."],
  ["Double Contributions Convention", "Social security agreement that entered into force alongside CETA on 15 July 2026.", "Relevant if UK employees are posted to the Indian subsidiary, as it addresses paying social security contributions in both countries."],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${slug}`}
      serviceType="India Subsidiary Incorporation for UK Companies"
      crumbLabel="India Subsidiary for UK Companies"
      crumbHref={slug}
      parentCrumb={{ name: "Company Setup in India for Foreign Businesses", href: "/company-registration-india-for-foreigners" }}
      eyebrow="India Entry · United Kingdom Parent Companies"
      h1="Set Up a Subsidiary in India from the UK"
      subhead="How a UK limited company incorporates a wholly owned Indian private limited company: Companies House documents and the FCDO apostille, the resident director rule, the FDI automatic route, FC-GPR, the India–UK tax treaty and trade agreement, and points for your UK adviser."
      keyFacts={[
        { label: "Usual structure", value: "UK Ltd parent holds all or nearly all shares of an Indian private limited company, with a nominee as the second shareholder." },
        { label: "Directors", value: "At least two; at least one must have stayed in India for 182 days or more in the financial year (section 149(3), Companies Act, 2013)." },
        { label: "Document legalisation", value: "Apostille issued by the FCDO Legalisation Office; the UK and India are both parties to the Hague Apostille Convention." },
        { label: "FDI approval", value: "None in automatic-route sectors; check the FDI Policy for your activity first." },
        { label: "RBI reporting", value: "Form FC-GPR within 30 days of share allotment, then the annual FLA return by 15 July." },
        { label: "Treaties", value: "India–UK tax treaty; trade agreement (CETA) and social security convention in force from 15 July 2026." },
      ]}
      introHeading="Can a UK company set up a wholly owned subsidiary in India?"
      intro="Yes. A UK limited company can own 100% of an Indian private limited company under the automatic route in most sectors, without prior government approval. It needs a nominee as second shareholder, two directors including one resident in India for 182 days, documents apostilled by the FCDO Legalisation Office, and an FC-GPR filing within 30 days of allotment."
      citation={{ label: "GOV.UK guidance on getting a document legalised (gov.uk)", href: "https://www.gov.uk/get-document-legalised" }}
      subServicesHeading="What do we handle for a UK parent setting up in India?"
      subServices={[
        { name: "Structure and FDI Route Check", text: "We confirm that your activity falls under the automatic route and recommend the shareholding and director structure, comparing a subsidiary with an LLP or branch office where relevant." },
        { name: "Document List and Apostille Guidance", text: "We give your UK team a precise list of documents to certify and send to the FCDO Legalisation Office, with drafts of the board resolution and authorisation letter." },
        { name: "DSC, DIN and SPICe+ Filing", text: "We obtain directors' digital signatures, reserve the name, draft the MOA and AOA, and file SPICe+ with the Registrar of Companies." },
        { name: "Bank Account and Capital", text: "We coordinate the current account opening, the transfer of share capital from the UK, the remittance documents and the allotment of shares." },
        { name: "FC-GPR and First-Year Compliance", text: "We file FC-GPR, the commencement of business declaration, and set up GST, payroll and TDS so the company can start trading." },
        { name: "Transfer Pricing and Group Reporting", text: "We help set the intercompany agreement, prepare Indian transfer pricing documentation, and provide your UK auditor and adviser with the figures they need." },
      ]}
      howTo={{
        heading: "How does a UK company set up its Indian subsidiary step by step?",
        steps: [
          { name: "Confirm activity and structure", text: "Check the FDI Policy for your sector, decide on the shareholding, and identify two directors including one who meets the 182-day India stay test." },
          { name: "Certify and apostille documents in the UK", text: "Have documents certified by a UK notary or solicitor where needed, apply to the FCDO Legalisation Office for apostilles, and send the originals to India." },
          { name: "Obtain DSCs and reserve the name", text: "Directors' digital signature certificates are issued and the proposed name is reserved through SPICe+ Part A on the MCA portal." },
          { name: "File SPICe+ for incorporation", text: "SPICe+ Part B, the MOA and AOA and linked forms are filed; on approval the company receives its certificate of incorporation, PAN and TAN." },
          { name: "Open the bank account and remit capital", text: "The company opens a current account with an authorised dealer bank, the UK parent transfers the subscription money, and shares are allotted within 60 days of receipt." },
          { name: "File FC-GPR and start operations", text: "FC-GPR is filed within 30 days of allotment, the commencement declaration is filed, and GST, payroll and the intercompany agreement are put in place." },
        ],
      }}
      faqs={[
        { question: "Can a UK limited company own 100% of an Indian company?", answer: "Yes. Where the FDI Policy allows 100% foreign investment under the automatic route, a UK Ltd can hold the whole economic interest in an Indian private limited company. A private company needs two shareholders, so a nominee, often a UK director or another group company, holds one share on behalf of the parent." },
        { question: "How are UK documents apostilled for use in India?", answer: "The UK and India are both parties to the Hague Apostille Convention, so UK documents are legalised by an apostille from the FCDO Legalisation Office instead of attestation by the Indian High Commission. Documents such as board resolutions and passport copies are first certified by a UK notary or solicitor, then sent for the apostille." },
        { question: "Does the Indian subsidiary need a director who lives in India?", answer: "Yes. Section 149(3) of the Companies Act, 2013 requires at least one director who has stayed in India for 182 days or more during the financial year. The UK directors can sit on the board from the UK and sign electronically, while the resident director is usually a senior India employee or an independent professional." },
        { question: "Does the India–UK trade agreement change how a subsidiary is set up?", answer: "No. The Comprehensive Economic and Trade Agreement, in force from 15 July 2026, mainly covers tariffs, services market access and business mobility. Setting up a subsidiary still follows the FDI Policy, the Companies Act and FEMA reporting. The agreement may still matter if your Indian company trades goods with the UK." },
        { question: "How does the India–UK tax treaty affect payments to the parent?", answer: "The India–UK Double Taxation Avoidance Convention can reduce Indian withholding tax on dividends, interest, royalties and fees paid to the UK parent, subject to conditions. The parent usually needs a UK certificate of residence from HMRC and the prescribed declarations in India to claim the treaty rate." },
        { question: "What UK tax points should we raise with our UK adviser?", answer: "Common items are the UK controlled foreign company rules, whether dividends from India qualify for the UK dividend exemption, relief for Indian withholding tax, UK transfer pricing on intercompany services and group reporting. We do not advise on UK tax, but we provide the Indian figures and documents your adviser needs." },
        { question: "What if we post UK employees to the Indian subsidiary?", answer: "Seconded staff raise Indian income tax on salary for work done in India, possible permanent establishment questions for the UK company, and social security. The India–UK Double Contributions Convention, in force from 15 July 2026, addresses contributions in both countries. Recharge arrangements also need transfer pricing support." },
        { question: "How do you work with UK clients across time zones?", answer: "India Standard Time is 4.5 hours ahead of the UK during British Summer Time and 5.5 hours ahead in winter. This leaves a good overlap from the UK morning to the Indian late afternoon, so we hold calls in UK business hours and agree a monthly reporting calendar with your finance team." },
      ]}
      relatedQuestions={[
        { question: "Should we hire through an EOR before incorporating?", href: "/eor-vs-subsidiary-india" },
        { question: "What does annual compliance for an Indian subsidiary involve?", href: "/india-subsidiary-compliance-cfo" },
        { question: "What FEMA filings follow a foreign investment?", href: "/fema-rbi-compliance" },
      ]}
      relatedSlugs={["india-subsidiary-compliance-cfo", "transfer-pricing-audit", "virtual-cfo-services"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">What documents does a UK parent need, and how are they apostilled?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The FCDO Legalisation Office issues apostilles for UK documents. Public documents, such as Companies House
        certificates, can be apostilled directly; private documents, such as board resolutions and passport copies, are first
        certified by a UK notary or solicitor. Because India is also a party to the Apostille Convention, no further
        attestation by the Indian High Commission is needed. This is the usual set for a UK Ltd parent.
      </p>
      <DataTable head={["Document", "What it is", "Legalisation"]} rows={DOCUMENTS} />

      <h2 className="mt-14 text-2xl text-obsidian">Who can be the resident director of a UK-owned Indian company?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        At least one director must have stayed in India for 182 days or more in the financial year. UK groups usually appoint
        their India lead, a relocated employee, or an independent professional who serves as a non-executive director. The UK
        directors do not need to travel to India for incorporation; they sign forms with digital signature certificates and
        attend board meetings by video. Because the resident director carries the same statutory duties as other directors,
        we recommend clear terms of appointment and a regular reporting pack.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Is a UK company&apos;s investment covered by the automatic route?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Most activities UK companies set up in India for, including software, IT-enabled and engineering services, research,
        consulting and many types of manufacturing, are open to 100% foreign investment under the automatic route. Some
        sectors carry caps, conditions or government approval, so we check your activity against the current FDI Policy and
        the FEMA (Non-debt Instruments) Rules. We also review the parent&apos;s ultimate beneficial owners, because investment
        where a beneficial owner is situated in, or is a citizen of, a country sharing a land border with India requires
        government approval in every sector.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Which India–UK agreements matter for a new subsidiary?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Three agreements between India and the UK are relevant in different ways. Only the tax treaty affects the
        subsidiary&apos;s routine compliance; the trade agreement and social security convention matter if you trade goods
        or post staff.
      </p>
      <DataTable head={["Agreement", "Status", "Why it matters"]} rows={UK_INDIA} />

      <h2 className="mt-14 text-2xl text-obsidian">What should a UK parent check with its UK tax adviser?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Owning an Indian subsidiary has UK corporation tax consequences. We do not advise on UK tax; these are the items UK
        advisers commonly review, listed so that you can raise them early and we can supply the Indian information in time.
      </p>
      <DataTable head={["Item for your UK adviser", "Why it comes up", "Who handles it"]} rows={UK_ITEMS} />

      <h2 className="mt-14 text-2xl text-obsidian">How is the subsidiary paid for work done for the UK parent?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Most UK groups use a cost-plus services agreement, under which the Indian company invoices the parent for its costs
        plus an arm&apos;s length markup. Indian transfer pricing rules treat this as an international transaction between
        associated enterprises: the markup is supported by a benchmarking study, documentation is kept each year, and an
        accountant&apos;s report is filed with the income tax return. Royalties for the use of the parent&apos;s technology or
        brand, and recharges of shared costs, need the same support. Our{" "}
        <Link href="/transfer-pricing-audit" className={linkClass}>
          transfer pricing service
        </Link>{" "}
        prepares this documentation alongside the statutory audit.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How does a UK–India working model run day to day?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        India is 4.5 hours ahead of the UK in summer and 5.5 hours ahead in winter, so the UK morning overlaps with the Indian
        afternoon. Our team in Anna Nagar, Chennai works with UK clients remotely: documents move through a secure portal,
        filings are signed digitally, and a monthly calendar fixes dates for payroll, the books, GST and TDS. After set-up, our{" "}
        <Link href="/india-subsidiary-compliance-cfo" className={linkClass}>
          India subsidiary compliance and CFO service
        </Link>{" "}
        runs the annual cycle. If you are not ready to incorporate yet, compare an{" "}
        <Link href="/eor-vs-subsidiary-india" className={linkClass}>
          EOR with a subsidiary
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
