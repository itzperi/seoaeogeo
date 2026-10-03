import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Outsourced Accounting for US CPA Firms | India" },
  description:
    "Offshore bookkeeping, month-end close and 1040, 1065 and 1120-S tax prep support for US CPA firms, prepared in your software for your review and signature.",
  alternates: { canonical: "/outsourced-accounting-for-cpa-firms" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Outsourced Accounting & Tax Prep Support for US CPA Firms",
    description: "Bookkeeping, month-end close and tax return preparation support for US CPA firms, from a Chartered Accountancy firm in Chennai.",
    url: "/outsourced-accounting-for-cpa-firms",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/outsourced-accounting-for-cpa-firms`}
      serviceType="Outsourced Accounting for CPA Firms"
      crumbLabel="Outsourced Accounting for US CPA Firms"
      crumbHref="/outsourced-accounting-for-cpa-firms"
      eyebrow="US CPA Firms · Offshore Support from Chennai"
      h1="Outsourced Accounting & Tax Prep Support for US CPA Firms"
      subhead="Bookkeeping, month-end close and tax return preparation support for small and mid-size US CPA firms, worked inside your own systems and software, prepared for your review and signature, with overlap with US mornings."
      introHeading="How does a US CPA firm outsource accounting and tax preparation to India?"
      intro="A US CPA firm outsources by giving an offshore team controlled access to its own accounting and tax software, where the team prepares bookkeeping, reconciliations and draft returns that the firm's CPAs then review and sign. The US firm keeps responsibility for the engagement and the client relationship. Before client tax information is shared with a preparer outside the US, IRS rules under Section 7216 generally require the taxpayer's written consent, and the arrangement should follow the safeguards in IRS Publication 4557."
      citation={{ label: "IRS Publication 4557, Safeguarding Taxpayer Data (irs.gov)", href: "https://www.irs.gov/pub/irs-pdf/p4557.pdf" }}
      subServicesHeading="What we prepare for US CPA firms"
      subServices={[
        { name: "Bookkeeping in QuickBooks Online and Xero", text: "Transaction coding, bank and credit card reconciliations, accounts payable and receivable upkeep, and clean-up of backlogged files for your business clients." },
        { name: "Month-End Close", text: "Accruals, prepaid and depreciation schedules, balance sheet reconciliations and a close checklist, delivered by an agreed working day each month." },
        { name: "Individual Returns (Form 1040)", text: "Data entry and workpapers for 1040 returns from client source documents, with open items and review notes flagged for your preparer or reviewer." },
        { name: "Business Returns (1065 and 1120-S)", text: "Partnership and S corporation return preparation from trial balances, including book-to-tax adjustments, K-1 support and supporting workpapers." },
        { name: "Work in Your Tax Software", text: "We prepare returns in the software your firm already uses, including Drake, Lacerte, UltraTax CS, CCH Axcess Tax and ProConnect, so nothing has to be re-keyed." },
        { name: "Workpapers and Review-Ready Files", text: "Organised workpapers, tie-outs and a summary of assumptions and questions, so your reviewer can sign off efficiently. The US CPA signs and remains responsible." },
      ]}
      howTo={{
        heading: "How an engagement with our team starts",
        steps: [
          { name: "Scoping call", text: "We discuss the work types, software, volumes, seasonality and turnaround your firm needs, and whether a dedicated or hourly model fits better." },
          { name: "Agreements and consent", text: "We sign an NDA and engagement letter, and your firm obtains Section 7216 taxpayer consent where client tax information will be disclosed to us." },
          { name: "Access set-up", text: "Your firm grants least-privilege access to its own systems, such as a remote desktop, hosted environment or portal, so client data stays on firm-controlled infrastructure." },
          { name: "Trial batch", text: "We complete a small batch of bookkeeping files or returns, and your reviewers assess quality, communication and turnaround before scaling." },
          { name: "Checklists and review loop", text: "We agree your firm's checklists, naming conventions and review-note process, and track open items in your workflow tool." },
          { name: "Steady-state operation", text: "Work runs to an agreed daily handover, with a scheduled call overlapping US mornings and capacity planned ahead of busy and extension season." },
        ],
      }}
      faqs={[
        { question: "What is IRS Section 7216 consent and why does it matter for offshore preparers?", answer: "Section 7216 restricts tax return preparers from using or disclosing taxpayer information without consent, and disclosure to a preparer located outside the US generally requires the taxpayer's prior written consent in the form the regulations specify. The consent is obtained by your firm from each client before their information is shared with us. Your firm should confirm the exact consent wording with its own advisers." },
        { question: "Who signs the tax return?", answer: "Your firm signs the return, and your CPAs remain responsible for it. We prepare returns, workpapers and bookkeeping as support for your review, but we do not hold out as US CPAs or sign as paid preparers. Final judgment on positions, client communication and e-filing stay with your firm, which keeps professional responsibility where your clients expect it." },
        { question: "How do you protect client data?", answer: "We work only inside systems your firm controls, with least-privilege access granted per user, so client files are not downloaded to our own machines. Every team member is bound by an NDA, access is removed promptly when someone leaves an engagement, and we follow the safeguards described in IRS Publication 4557 and the FTC Safeguards Rule. We can align with your firm's written information security plan." },
        { question: "What are the engagement models?", answer: "There are two main models: dedicated staff who work as an extension of your team on a monthly basis, or hourly and project-based work for specific backlogs or seasonal peaks. Dedicated staff suit firms with steady bookkeeping or year-round tax work. Hourly or project work suits firms testing outsourcing for the first time or covering busy season and extension deadlines." },
        { question: "What are the working hours relative to the US?", answer: "India Standard Time is 9.5 to 10.5 hours ahead of US Eastern Time, depending on daylight saving, so our working day overlaps with US mornings. In practice, work you assign by the end of your day can be prepared overnight and ready for review the next morning. We schedule regular calls in the overlap window for questions and review notes." },
        { question: "Which software do you work in?", answer: "For bookkeeping we work in QuickBooks Online and Xero, and for tax preparation we work in Drake, Lacerte, UltraTax CS, CCH Axcess Tax and ProConnect. Because we work inside your firm's licences and environment, your data, templates and diagnostics stay consistent with how your in-house staff work. If you use a different package, we can discuss it during scoping." },
        { question: "Do you also support UK accountancy practices?", answer: "Yes, we support UK practices separately, because their work is built around VAT returns, Making Tax Digital, Companies House year-end accounts, self-assessment and UK GDPR rather than US returns. The software, deadlines and data protection rules are different enough that we run it as its own service. Details are on our page for UK accountancy practices." },
      ]}
      relatedQuestions={[
        { question: "Do you offer outsourced bookkeeping for UK accountancy practices?", href: "/outsourced-accounting-for-uk-accountants" },
        { question: "What does your bookkeeping process look like for direct clients?", href: "/bookkeeping-services-chennai" },
        { question: "Can you also help US-based NRIs with their Indian taxes?", href: "/nri-tax-services-usa" },
      ]}
      relatedSlugs={["outsourced-accounting-for-uk-accountants", "bookkeeping-services-chennai", "nri-tax-services-usa"]}
    />
  );
}
