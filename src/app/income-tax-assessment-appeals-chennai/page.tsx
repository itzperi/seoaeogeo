import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "Income Tax Assessment & Appeals in Chennai";
const description =
  "Income tax assessment and appeals in Chennai: scrutiny and reassessment replies, CIT(A) appeals in Form 99 (earlier Form 35), ITAT appeals and stay of demand.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/income-tax-assessment-appeals-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/income-tax-assessment-appeals-chennai",
  },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";

const SECTION_MAP = [
  { stage: "Notice for documents and information", now: "Section 268(1)", earlier: "Section 142(1)" },
  { stage: "Processing of return (intimation)", now: "Section 270(1)", earlier: "Section 143(1)" },
  { stage: "Scrutiny notice", now: "Section 270(8)", earlier: "Section 143(2)" },
  { stage: "Scrutiny assessment order", now: "Section 270(10)", earlier: "Section 143(3)" },
  { stage: "Best judgment assessment", now: "Section 271", earlier: "Section 144" },
  { stage: "Reassessment (income escaping assessment)", now: "Sections 279 to 285", earlier: "Sections 147 to 151A" },
  { stage: "Show-cause before reassessment notice", now: "Section 281", earlier: "Section 148A" },
  { stage: "Appeal to JCIT(A) or CIT(A)", now: "Sections 356 to 358", earlier: "Sections 246, 246A and 249" },
  { stage: "Appeal to the Appellate Tribunal (ITAT)", now: "Section 362", earlier: "Section 253" },
  { stage: "Stay of demand by the Assessing Officer", now: "Section 411(12)", earlier: "Section 220(6)" },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/income-tax-assessment-appeals-chennai`}
      serviceType="Income Tax Assessment and Appeals"
      crumbLabel="Assessment and Appeals"
      crumbHref="/income-tax-assessment-appeals-chennai"
      parentCrumb={{ name: "Direct Tax", href: "/direct-tax" }}
      eyebrow="Income Tax Litigation · Chennai"
      h1="Income Tax Assessment and Appeals in Chennai"
      subhead="Scrutiny and reassessment proceedings handled with a documented case file, and appeals to the CIT(A) and the Income Tax Appellate Tribunal filed within the time limit."
      introHeading="What does income tax assessment and appeals support in Chennai cover?"
      intro="Income tax assessment and appeals support in Chennai covers scrutiny and reassessment replies and challenging orders. An appeal to the Commissioner (Appeals) is filed in Form 99 (earlier Form 35) within 30 days of the demand notice. A further appeal to the ITAT lies within two months from the end of the month the order is received."
      citation={{
        label: "Income Tax Department: Form 99 (earlier Form 35), appeal to Commissioner (Appeals) (incometax.gov.in)",
        href: "https://www.incometax.gov.in/iec/foportal/newformpage/forms/form99",
      }}
      keyFacts={[
        { label: "Appeal form", value: "Form 99 (earlier Form 35) to the JCIT(A) or CIT(A), filed on the e-filing portal" },
        { label: "First appeal time limit", value: "30 days from service of the demand notice (Section 358(3), earlier Section 249(2))" },
        { label: "ITAT time limit", value: "Two months from the end of the month the CIT(A) order is communicated (Section 362(3))" },
        { label: "Pre-condition", value: "Tax on the returned income must be paid before the first appeal is admitted (Section 358(6))" },
        { label: "Who needs it", value: "Anyone with a scrutiny or reassessment notice, or an assessment order with an addition or disallowance" },
      ]}
      subServicesHeading="What do we handle in assessments and appeals?"
      subServices={[
        { name: "Scrutiny assessment", text: "Replies to notices for information and the scrutiny notice, with a paginated paper book, ledger extracts and reconciliations filed through e-Proceedings." },
        { name: "Reassessment", text: "Reply to the show-cause notice under Section 281 (earlier 148A), objections on limitation and the information relied on, and the reassessment proceeding itself." },
        { name: "Show-cause notices on variations", text: "Written responses to the draft variations proposed in faceless assessment, with a request for a personal hearing by video conference where needed." },
        { name: "Appeal to CIT(A)", text: "Grounds of appeal, statement of facts and Form 99 filed within 30 days, followed by written submissions and additional evidence where the rules allow." },
        { name: "Appeal to the ITAT", text: "Appeal against the CIT(A) order, cross-objections, paper books and briefing of counsel for hearing before the Chennai benches of the Tribunal." },
        { name: "Stay of demand", text: "Applications to the Assessing Officer and, where needed, the Tribunal to keep recovery on hold while the appeal is pending." },
      ]}
      howTo={{
        heading: "How do we handle an assessment or appeal?",
        steps: [
          { name: "Read the notice or order", text: "We identify the provision cited, the tax year, the issues raised and the deadline. Notices for earlier years still cite the 1961 Act; we map new-Act sections to old ones." },
          { name: "Build the case file", text: "Bank statements, ledgers, agreements, confirmations and prior returns are collected and organised issue by issue." },
          { name: "File the reply or appeal", text: "Replies go through e-Proceedings; appeals are filed in Form 99 with grounds and a statement of facts within the time limit." },
          { name: "Protect against recovery", text: "If a demand is raised, we apply for stay of demand and pay the tax on returned income so the appeal is admitted." },
          { name: "Represent and follow through", text: "We file submissions, attend hearings and track the appeal effect order so any relief is credited or refunded." },
        ],
      }}
      faqs={[
        { question: "What is the time limit to appeal against an income tax assessment order?", answer: "An appeal to the Commissioner (Appeals) must be filed within 30 days of the date the demand notice is served, under Section 358(3) of the Income-tax Act, 2025 (earlier Section 249(2)). Late appeals can be admitted only if you show sufficient cause for the delay, so file within the period wherever possible." },
        { question: "Which form is used to appeal to the CIT(A) now?", answer: "Form 99, which replaced Form 35 under the Income-tax Rules, 2026. It is filed online on the income tax e-filing portal with the grounds of appeal, a statement of facts and a copy of the order. Appeals against orders for earlier years under the 1961 Act may still use Form 35." },
        { question: "How long do I have to file an appeal before the ITAT?", answer: "Under Section 362(3), an appeal to the Appellate Tribunal must be filed within two months from the end of the month in which the CIT(A) order is communicated to you. This replaces the flat 60-day limit of Section 253 of the 1961 Act. Cross-objections are due within 30 days of receiving notice of the other side's appeal." },
        { question: "Do I have to pay the disputed demand before filing an appeal?", answer: "No, but you must pay the tax due on the income you returned before the first appeal is admitted. The disputed amount can be kept on hold by applying for stay of demand to the Assessing Officer under Section 411(12) (earlier Section 220(6)), usually on conditions such as part payment." },
        { question: "When can the department reopen an old assessment?", answer: "A reassessment notice cannot be issued after four years and three months from the end of the tax year, unless escaped income is ₹50 lakh or more, in which case the limit extends to six years and three months. Before the notice, the officer must issue a show-cause notice under Section 281 and pass an order." },
        { question: "What is the time limit for a scrutiny notice?", answer: "A scrutiny notice under Section 270(8) (earlier Section 143(2)) cannot be served after three months from the end of the financial year in which the return was filed. A notice served later is invalid, which is one of the first things we check when a scrutiny notice arrives." },
        { question: "Can the ITAT stop recovery while my appeal is pending?", answer: "Yes. The Tribunal can stay recovery for up to 180 days if you deposit at least 20% of the amount payable or furnish equal security. The stay can be extended up to 365 days in total if the delay is not your fault, after which it lapses automatically." },
      ]}
      relatedSlugs={["income-tax-notice-reply-chennai", "direct-tax", "tax-audit-chennai"]}
      relatedPosts={["why-income-tax-notices-issued", "form26as-mismatch-velachery", "capital-gains-tax-property-sale", "safe-cash-deposit-limit"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Old and new section numbers for assessments and appeals</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The Income-tax Act, 2025 applies from 1 April 2026. Proceedings for tax years under the new Act cite the numbers in
        the first column; most notices you hold today for earlier years still cite the 1961 Act. The procedure is broadly
        the same, but some time limits changed, notably the ITAT appeal period.
      </p>
      <div className="mt-6 max-w-3xl overflow-x-auto rounded-cards border border-ash">
        <table className="w-full text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className="px-4 py-3 font-medium">Stage</th>
              <th className="px-4 py-3 font-medium">Income-tax Act, 2025</th>
              <th className="px-4 py-3 font-medium">Income-tax Act, 1961</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {SECTION_MAP.map((r) => (
              <tr key={r.stage}>
                <td className="px-4 py-3 align-top font-medium text-obsidian">{r.stage}</td>
                <td className="px-4 py-3 align-top text-slate">{r.now}</td>
                <td className="px-4 py-3 align-top text-slate">{r.earlier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">Notice first, appeal second</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Most appeals are won or lost at the assessment stage, because the CIT(A) and the Tribunal decide largely on the
        record built before the Assessing Officer. If you have only received a notice so far, start with our{" "}
        <Link href="/income-tax-notice-reply-chennai" className={linkClass}>
          income tax notice reply service in Chennai
        </Link>
        . If the issue began with a tax audit disclosure, our{" "}
        <Link href="/tax-audit-chennai" className={linkClass}>
          tax audit team
        </Link>{" "}
        reviews the Form 3CD position. Other income tax work is on the{" "}
        <Link href="/direct-tax" className={linkClass}>
          direct tax services
        </Link>{" "}
        page.
      </p>
    </ServicePageTemplate>
  );
}
