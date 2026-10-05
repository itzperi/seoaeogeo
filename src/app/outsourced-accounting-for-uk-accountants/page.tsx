import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Outsourced Bookkeeping for UK Accountancy Practices" },
  description:
    "Xero, QuickBooks, IRIS and TaxCalc bookkeeping, MTD VAT returns, year-end accounts and CT600 prep for UK firms, done in Chennai for your review and sign-off.",
  alternates: { canonical: "/outsourced-accounting-for-uk-accountants" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Outsourced Bookkeeping for UK Accountancy Practices",
    description:
      "Bookkeeping, MTD VAT returns, year-end accounts and CT600 preparation for UK practices, prepared in Chennai for the practice to review and file.",
    url: "/outsourced-accounting-for-uk-accountants",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/outsourced-accounting-for-uk-accountants`}
      serviceType="Outsourced Bookkeeping and Accounts Preparation"
      crumbLabel="Outsourced Bookkeeping for UK Practices"
      crumbHref="/outsourced-accounting-for-uk-accountants"
      eyebrow="UK Accountancy Practices · Remote from Chennai"
      h1="Outsourced Bookkeeping & Accounts Preparation for UK Practices"
      subhead="A Chennai-based Chartered Accountancy team that prepares bookkeeping, VAT returns, year-end statutory accounts and corporation tax computations inside your own Xero, QuickBooks, IRIS, TaxCalc or CCH environment, for your practice to review, sign off and submit."
      introHeading="How does outsourced bookkeeping work for a UK accountancy practice?"
      intro="A UK practice keeps the client relationship, the engagement letter and the final sign-off, and an offshore team does the preparation work in the practice’s own software. We code bank feeds, reconcile ledgers, draft MTD-ready VAT returns, prepare year-end accounts for Companies House and draft CT600 computations, then hand each file back with a review note. Nothing is submitted to HMRC or Companies House by us. Your reviewer checks the working papers, raises queries, and files under the practice’s own agent credentials."
      citation={{ label: "GOV.UK — Making Tax Digital guidance", href: "https://www.gov.uk/government/collections/making-tax-digital-for-vat" }}
      subServicesHeading="What bookkeeping and accounts work can UK practices outsource?"
      subServices={[
        { name: "Monthly and Quarterly Bookkeeping", text: "Bank feed coding, supplier and customer ledger reconciliation, accruals and prepayments, and control account checks in Xero or QuickBooks Online, with an exceptions list of items needing client input." },
        { name: "VAT Returns under Making Tax Digital", text: "Box-by-box VAT return drafts from the client ledger, covering standard, flat rate and cash accounting schemes, with a reconciliation to the VAT control account. The practice reviews and submits through its MTD-compatible software." },
        { name: "Year-End Statutory Accounts", text: "Micro-entity and small company accounts under FRS 105 and FRS 102 Section 1A, prepared in IRIS, TaxCalc, CCH or your chosen package, with a trial balance, lead schedules and a disclosure checklist for Companies House filing." },
        { name: "Corporation Tax Computations", text: "CT600 drafts with capital allowances, disallowable expense adjustments and loss schedules, prepared from the signed-off accounts so your tax reviewer starts from a complete computation rather than a blank return." },
        { name: "Self-Assessment Season Support", text: "Preparation of SA100 working papers for sole traders, landlords and directors during the autumn-to-January peak, including property income schedules and dividend summaries, ready for the practice to finalise and file." },
        { name: "MTD for Income Tax Readiness", text: "Setting up digital records and quarterly update workflows for sole trader and landlord clients brought into Making Tax Digital for Income Tax, so quarterly figures can be prepared on a predictable cycle." },
      ]}
      howTo={{
        heading: "How does a UK practice onboard for outsourced bookkeeping?",
        steps: [
          { name: "Scoping call and sample files", text: "We agree which client types, software and deliverables are in scope, and you share two or three anonymised or test files so we can show our working-paper format before anything live is handled." },
          { name: "Data protection agreement", text: "We sign a confidentiality agreement and a data processing agreement, and agree an international transfer mechanism such as the UK IDTA or the UK Addendum to the EU Standard Contractual Clauses, as the practice’s data protection lead requires." },
          { name: "Access set-up in your systems", text: "You create named user logins for our team in Xero, QuickBooks, IRIS, TaxCalc, CCH or your practice management tool, with permissions limited to the clients we work on. Files stay in your environment." },
          { name: "Pilot batch", text: "We complete a small batch of real jobs, such as one month of bookkeeping or two VAT quarters, so your reviewers can check accuracy, query handling and turnaround before volumes increase." },
          { name: "Agreed review and query routine", text: "Each job comes back with a review note listing assumptions, open queries and items for client confirmation. Your reviewer approves, comments or returns it, and the practice handles all client communication and submission." },
          { name: "Steady-state scheduling", text: "We plan capacity around your VAT quarter ends, year-end deadlines and the 31 January self-assessment deadline, so peak months are booked in advance rather than handled as emergencies." },
        ],
      }}
      faqs={[
        { question: "Who submits VAT returns and accounts to HMRC and Companies House?", answer: "Your practice does: we prepare the VAT return, the statutory accounts and the CT600 computation, but submission happens through your own MTD-compatible software and agent credentials after your reviewer has approved the figures. This keeps professional responsibility, the client engagement and the filing audit trail with the UK practice, where UK clients and regulators expect it to sit." },
        { question: "Which accounting and tax software does your team work in?", answer: "We work in Xero and QuickBooks Online for bookkeeping and VAT, and in IRIS, TaxCalc and CCH for accounts production and tax computations. We do not ask you to change software or export data into our systems: your team creates named user access inside your own tools, and the work stays there. Your existing templates, review checklists and practice management records therefore continue to apply." },
        { question: "How is UK GDPR handled when client data is accessed from India?", answer: "Access from India is an international transfer under UK GDPR, so the practice, as controller, needs a valid transfer mechanism, usually the UK International Data Transfer Agreement or the UK Addendum to the EU Standard Contractual Clauses, supported by a transfer risk assessment. We agree the mechanism and a data processing agreement with you before access starts, and limit access to named staff and the clients in scope." },
        { question: "Can you help with Making Tax Digital for Income Tax?", answer: "Yes. We can prepare the quarterly figures your clients need for Making Tax Digital for Income Tax, which applies from April 2026 to sole traders and landlords above the first qualifying income threshold, with lower thresholds following in later years, and your practice reviews and submits each quarterly update. We also help set up digital record-keeping in the client’s software, so the extra quarterly workload does not land entirely on your in-house team." },
        { question: "What does the time difference mean for turnaround?", answer: "India Standard Time is 4.5 hours ahead of UK time during British Summer Time and 5.5 hours ahead during GMT. Our working day overlaps with UK mornings, so queries raised early in your day can be answered the same day, and work you send in the morning can often come back for review before your close of business, depending on volume and complexity." },
        { question: "Do you prepare year-end accounts for small companies and micro-entities?", answer: "Yes. We prepare micro-entity accounts under FRS 105 and small company accounts under FRS 102 Section 1A, including the trial balance, lead schedules, fixed asset register, director’s loan account analysis and a disclosure checklist, and the draft goes to your reviewer with open points flagged. Once approved by the practice and the client’s directors, your practice files the accounts with Companies House and the CT600 with HMRC." },
        { question: "Is this different from your service for US CPA firms?", answer: "Yes. UK work runs on UK GAAP, VAT quarters, Companies House filings and the self-assessment calendar, with tools such as IRIS and TaxCalc that US firms rarely use, while our US CPA firm service is built around the US tax season, US return types and US data-handling rules. The working model is similar, with offshore preparation and onshore review, but the deliverables and deadlines are different." },
      ]}
      relatedQuestions={[
        { question: "How do US CPA firms work with an offshore preparation team in India?", href: "/outsourced-accounting-for-cpa-firms" },
        { question: "What does day-to-day bookkeeping support look like for a business in India?", href: "/bookkeeping-services-chennai" },
        { question: "Can the same team support a UK client’s Indian subsidiary?", href: "/india-subsidiary-compliance-cfo" },
      ]}
      relatedSlugs={["outsourced-accounting-for-cpa-firms", "bookkeeping-services-chennai", "india-subsidiary-compliance-cfo"]}
    />
  );
}
