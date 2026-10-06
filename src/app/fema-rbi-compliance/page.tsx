import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "FEMA & RBI Compliance in Chennai | FC-GPR, FLA, ODI";
const description =
  "FEMA and RBI compliance in Chennai: FC-GPR within 30 days, FC-TRS, the annual FLA return by 15 July, ODI and APR filings, and late submission fee payment.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/fema-rbi-compliance" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/fema-rbi-compliance",
  },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";

const CALENDAR = [
  { filing: "Issue of shares to the foreign investor", when: "Within 60 days of receiving the money; otherwise refund within 15 days after that" },
  { filing: "Form FC-GPR", when: "Within 30 days of issuing shares or other equity instruments to a person resident outside India" },
  { filing: "Form FC-TRS", when: "Within 60 days of the transfer of shares or receipt or remittance of funds, whichever is earlier" },
  { filing: "Annual FLA return", when: "By 15 July every year on the FLAIR portal, for companies and LLPs with outstanding FDI or ODI" },
  { filing: "Form ODI (Part I)", when: "When an Indian entity or resident individual makes an overseas direct investment, through the authorised dealer bank" },
  { filing: "Annual Performance Report (APR)", when: "By 31 December every year, for each foreign entity in which ODI is held" },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/fema-rbi-compliance`}
      serviceType="FEMA and RBI Compliance"
      crumbLabel="FEMA and RBI Compliance"
      crumbHref="/fema-rbi-compliance"
      eyebrow="FEMA · RBI Reporting · Chennai"
      h1="FEMA and RBI Compliance"
      subhead="Foreign investment reporting on the FIRMS portal, annual FLA returns, overseas investment filings and regularisation of delayed reports, for Indian companies and LLPs with foreign money."
      introHeading="What does FEMA and RBI compliance in Chennai involve?"
      intro="FEMA and RBI compliance in Chennai means reporting every foreign investment transaction to the Reserve Bank on time. An Indian company files Form FC-GPR within 30 days of issuing shares to a foreign investor, FC-TRS within 60 days of a share transfer, and the FLA return by 15 July each year. Delays attract a late submission fee."
      citation={{
        label: "Reserve Bank of India: Master Direction, Foreign Investment in India (rbi.org.in)",
        href: "https://rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11200",
      }}
      keyFacts={[
        { label: "Main filings", value: "FC-GPR, FC-TRS, annual FLA return, Form ODI and the Annual Performance Report" },
        { label: "Portals", value: "RBI's FIRMS portal for FDI reporting; FLA return on the RBI's FLAIR portal; ODI through your authorised dealer bank" },
        { label: "Who needs it", value: "Indian companies and LLPs with foreign shareholders or partners, and Indian residents investing in overseas entities" },
        { label: "Key deadlines", value: "FC-GPR within 30 days of allotment; FC-TRS within 60 days; FLA by 15 July; APR by 31 December" },
        { label: "Late submission fee", value: "₹7,500 + (0.025% × amount × years of delay) for delayed FDI reports; ₹7,500 per delayed FLA return or APR" },
      ]}
      subServicesHeading="Which FEMA filings do we handle?"
      subServices={[
        { name: "FC-GPR", text: "Reporting allotment of shares, CCPS or CCDs to foreign investors, with the valuation certificate, KYC from the bank, FIRC and the company secretary's declaration." },
        { name: "FC-TRS", text: "Reporting transfers between residents and non-residents, including pricing under the valuation guidelines and the bank's KYC for the non-resident party." },
        { name: "Annual FLA return", text: "Return on foreign liabilities and assets by 15 July, prepared from the audited or, if audit is pending, provisional accounts, and revised once the audit is complete." },
        { name: "ODI and APR", text: "Form ODI for overseas investments by Indian companies and resident individuals, and the Annual Performance Report for each foreign entity every year." },
        { name: "Late reporting regularisation", text: "Computing the late submission fee, filing the delayed report and keeping the evidence of payment so the reporting gap is closed." },
        { name: "Compounding applications", text: "Where a contravention cannot be closed by paying a late submission fee, we prepare the compounding application and supporting chronology for the RBI." },
      ]}
      howTo={{
        heading: "How do we keep your FEMA reporting on time?",
        steps: [
          { name: "Map your foreign investment", text: "We review the shareholding, share issues, transfers, loans and overseas investments since incorporation to find every reportable event." },
          { name: "Fix the reporting gaps", text: "Any missed or late report is identified, the late submission fee is computed, and the delayed filing is made first." },
          { name: "Prepare each filing", text: "Valuation reports, board resolutions, FIRC and KYC documents are collected and the form is prepared on the FIRMS portal." },
          { name: "Track RBI approval", text: "We follow the filing through the authorised dealer bank and RBI, answering queries until the acknowledgement is issued." },
          { name: "Run the annual calendar", text: "FLA by 15 July, APR by 31 December and any event-based filings are diarised so nothing lapses again." },
        ],
      }}
      faqs={[
        { question: "What is the time limit for filing Form FC-GPR?", answer: "Form FC-GPR must be filed within 30 days from the date shares or other equity instruments are issued to a person resident outside India. The shares themselves must be issued within 60 days of receiving the investment, or the money must be refunded within the following 15 days." },
        { question: "Who files Form FC-TRS, and by when?", answer: "FC-TRS is filed by the resident party to a transfer of shares between a resident and a non-resident, within 60 days of the transfer or the receipt or remittance of funds, whichever is earlier. The non-resident's KYC comes through the authorised dealer bank handling the payment." },
        { question: "Who has to file the FLA return?", answer: "Every Indian company or LLP with outstanding foreign direct investment or overseas direct investment must file the FLA return on the RBI's FLAIR portal by 15 July each year. It is required even if no fresh investment came in during the year. Provisional figures can be filed by the due date and revised once accounts are audited." },
        { question: "What is the late submission fee for delayed FEMA reporting?", answer: "For a delayed FDI report such as FC-GPR or FC-TRS, the fee is ₹7,500 plus 0.025% of the amount involved for each year of delay, with the delay counted in months. For returns such as the FLA return and APR, it is a flat ₹7,500 per return. Paying it regularises the delay without compounding." },
        { question: "What does an Indian company file when it invests abroad?", answer: "An overseas direct investment is reported in Form ODI through the authorised dealer bank when the investment is made. After that, an Annual Performance Report is filed for each foreign entity by 31 December every year, based on the foreign entity's latest accounts." },
        { question: "Can a reporting delay stop future foreign investment?", answer: "A pending reporting delay can hold up later filings and bank processing, and unreported transactions can lead to compounding under FEMA. Paying the late submission fee and completing the delayed report closes the gap, so we clear old defaults before the next funding round or transfer." },
      ]}
      relatedSlugs={["company-registration-india-for-foreigners", "india-subsidiary-compliance-cfo", "transfer-pricing-audit"]}
      relatedPosts={["transfer-pricing-omr-subsidiaries", "form-3ceb-due-date-applicability", "post-incorporation-compliance-checklist", "annual-roc-filing-calendar"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">FEMA reporting calendar</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        These timelines come from the Foreign Exchange Management (Mode of Payment and Reporting of Non-Debt Instruments)
        Regulations, 2019, the RBI&apos;s Master Directions on foreign investment and reporting, and the overseas investment
        framework of 2022.
      </p>
      <div className="mt-6 max-w-3xl overflow-x-auto rounded-cards border border-ash">
        <table className="w-full text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className="px-4 py-3 font-medium">Filing</th>
              <th className="px-4 py-3 font-medium">When</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {CALENDAR.map((r) => (
              <tr key={r.filing}>
                <td className="px-4 py-3 align-top font-medium text-obsidian">{r.filing}</td>
                <td className="px-4 py-3 align-top text-slate">{r.when}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">For foreign-owned companies in India</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Most FEMA reporting begins at incorporation, when the first shares are allotted to a foreign parent or founder. Our{" "}
        <Link href="/company-registration-india-for-foreigners" className={linkClass}>
          company registration service for foreign founders
        </Link>{" "}
        sets up the entity and the first FC-GPR. After that, our{" "}
        <Link href="/india-subsidiary-compliance-cfo" className={linkClass}>
          India subsidiary compliance and CFO service
        </Link>{" "}
        runs FEMA filings alongside ROC, GST, TDS and{" "}
        <Link href="/transfer-pricing-audit" className={linkClass}>
          transfer pricing
        </Link>{" "}
        compliance in one calendar.
      </p>
    </ServicePageTemplate>
  );
}
