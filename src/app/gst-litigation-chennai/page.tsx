import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { JsonLd, howToSchema, serviceSchema, speakableSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/gst-litigation-chennai`;

export const metadata: Metadata = {
  title: { absolute: "GST Litigation and Appeals in Chennai | Anna Nagar" },
  description:
    "GST notice or demand order in Tamil Nadu? Show-cause replies, first appeals and GSTAT appeals (Chennai, Coimbatore, Madurai benches) from an Anna Nagar CA firm.",
  alternates: { canonical: "/gst-litigation-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "GST Litigation in Chennai",
    description: "Show-cause notice replies, appeals, and GSTAT representation by a Chennai chartered accountancy firm.",
    url: "/gst-litigation-chennai",
  },
};

const LINK = "text-royal-violet underline underline-offset-2";

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
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

const DISPUTE_TYPES = [
  { title: "Classification disputes", text: "Disagreements over the HSN/SAC code and applicable tax rate for your goods or services." },
  { title: "Valuation disputes", text: "Challenges to the transaction value declared, especially in related-party or discounted transactions." },
  { title: "Place of supply disputes", text: "Disagreements over whether a supply is intra-state or inter-state, affecting CGST/SGST vs. IGST liability." },
  { title: "Input Tax Credit (ITC) disputes", text: "Denial or reversal of ITC due to supplier non-compliance, mismatch in GSTR-2B, or blocked credit provisions." },
  { title: "Exemption disputes", text: "Challenges to claimed exemptions or concessional rates under notifications." },
  { title: "Refund litigation", text: "Delayed, rejected, or partially sanctioned refund claims for exports, inverted duty structure, or excess tax paid." },
];

const STAGES = [
  { stage: "Show-Cause Notice (SCN) Reply", text: "We analyse the SCN, gather supporting documentation, and draft a legally grounded reply within the time allowed in the notice, typically 30 days." },
  { stage: "Departmental Audit & Assessment", text: "We represent you during GST audits (Section 65/66) and assessment proceedings, coordinating document production and officer queries." },
  { stage: "Appeal before Appellate Authority", text: "If the order is adverse, we file a first appeal in Form GST APL-01 on the GST portal before the Appellate Authority (Additional or Joint Commissioner (Appeals), or Commissioner (Appeals), depending on the rank of the officer who passed the order) within 3 months of communication of the order, with the admitted amount paid in full and a 10% pre-deposit of the disputed tax. A self-certified copy of the order is needed only where the order was not uploaded on the GST portal, and must then be submitted within 7 days of filing." },
  { stage: "GST Appellate Tribunal (GSTAT)", text: "If the Appellate Authority's order is still adverse, we file a second appeal in Form GST APL-05 on the GSTAT e-filing portal within 3 months, with a further 10% pre-deposit. GSTAT has a Principal Bench in New Delhi for matters involving place-of-supply disputes, and State Benches, including Chennai, Coimbatore and Madurai for Tamil Nadu, for other matters." },
  { stage: "ITC & Refund Dispute Defense", text: "We build the factual and documentary case to defend legitimate ITC claims and pursue refund entitlements through litigation where needed." },
];

const NOTICE_TYPES = [
  { form: "DRC-01A", text: "An intimation of tax ascertained as payable, issued before a formal show-cause notice. Responding here can sometimes resolve the matter without escalating to a full SCN." },
  { form: "DRC-01", text: "The formal show-cause notice under Section 73 or Section 74 (for FY 2023-24 and earlier) or Section 74A (for FY 2024-25 onwards). Whether fraud or wilful misstatement is alleged decides the penalty exposure." },
  { form: "ASMT-10", text: "Notice for discrepancies found during scrutiny of a filed return, typically the first sign of an ITC or turnover mismatch before it escalates further." },
  { form: "REG-17", text: "Show-cause notice proposing cancellation of GST registration, usually for continuous non-filing. It needs an urgent reply to avoid losing registration entirely." },
  { form: "GST APL-01 / APL-05", text: "Not notices but the appeal forms themselves: APL-01 for the first appeal to the Appellate Authority, APL-05 for the second appeal to GSTAT." },
];

const APPEAL_LADDER = [
  ["1. Adjudication (SCN and order)", "Proper officer of the Central or State GST administration", "Reply within the time in the SCN (usually 30 days); order in Form DRC-07", "None. Paying the tax before or soon after the SCN can reduce penalty"],
  ["2. First appeal", "Appellate Authority (Section 107)", "3 months from communication of the order, condonable by 1 more month. Form APL-01 on the GST portal", "Admitted amount in full plus 10% of disputed tax, capped at ₹20 crore CGST and ₹20 crore SGST (₹40 crore IGST). Penalty-only orders: 10% of the penalty"],
  ["3. Second appeal", "GST Appellate Tribunal: State Bench, or Principal Bench for place-of-supply issues (Section 112)", "3 months from communication of the appellate order, condonable by 3 more months. Form APL-05 on the GSTAT e-filing portal", "A further 10% of the tax still in dispute, capped at ₹20 crore CGST and ₹20 crore SGST (₹40 crore IGST). Penalty-only orders: a further 10% of the penalty"],
  ["4. High Court", "Madras High Court, at Chennai or its Madurai Bench (Section 117)", "180 days from the State Bench order; only on a substantial question of law", "As directed by the court; writ petitions remain available for jurisdiction and natural-justice issues"],
  ["5. Supreme Court", "Supreme Court of India (Section 118)", "Against High Court judgments in appeal, or directly against Principal Bench orders", "As directed by the court"],
];

const TN_DISPUTES = [
  ["ITC mismatch: GSTR-2B vs GSTR-3B", "Credit claimed in GSTR-3B exceeds what suppliers reported, usually because a supplier filed late, amended an invoice or failed to file", "Invoice-wise reconciliation, proof of payment to the supplier, supplier's later returns and correspondence"],
  ["Section 16(4) time limit", "ITC claimed after the deadline (the November return following the financial year end, or the annual return if earlier)", "Check whether the relief in Section 16(5) for FY 2017-18 to 2020-21, or Section 16(6) for revoked registrations, applies"],
  ["Fake or non-existent supplier invoices", "Credit denied because a supplier is found non-existent or its registration is cancelled with retrospective effect", "Evidence of actual receipt of goods: e-way bills, transport records, weighbridge slips, stock entries, banking trail"],
  ["Classification and rate", "Department proposes a higher rate under a different HSN or SAC entry, including disputes about the September 2025 rate changes", "Product literature, trade usage, technical write-ups, earlier rulings and the chapter notes"],
  ["E-way bill detention (Section 129)", "Goods detained in transit for a missing, expired or mismatched e-way bill, with penalty demanded for release", "Prompt reply to the detention notice; appeal against the order, where the pre-deposit is 10% of the penalty"],
  ["Section 73 / 74 / 74A demand", "Short payment, wrong ITC or erroneous refund. Sections 73 and 74 cover FY 2023-24 and earlier; Section 74A applies from FY 2024-25", "Limitation check (Section 74A allows 42 months from the annual return due date), and whether the fraud allegation is actually supported"],
];

const DOCUMENTS = [
  ["Show-cause notice and DRC-01A, if any", "Defines the allegation, the section invoked and the period covered"],
  ["Order (DRC-07) or appellate order (APL-04)", "Fixes the limitation date and the amount in dispute for the pre-deposit"],
  ["Your reply and personal hearing records", "Shows what was argued below; new grounds at appeal need justification"],
  ["GSTR-1, GSTR-3B, GSTR-2A/2B and GSTR-9 for the period", "Basis for reconciling turnover and ITC figures"],
  ["Invoices, e-way bills, transport and payment proof", "Proves that supplies actually took place and that suppliers were paid"],
  ["Contracts, purchase orders, product literature", "Needed for classification, valuation and place-of-supply disputes"],
  ["Pre-deposit payment proof (DRC-03 or ledger debit)", "An appeal is not admitted without the required pre-deposit"],
  ["Authorisation for the representative", "Letter of authority for a Chartered Accountant under Section 116"],
];

const CITIES = [
  { slug: "gst-litigation-coimbatore", name: "Coimbatore", text: "Pumps, motors, foundries and textile machinery; Coimbatore GSTAT bench" },
  { slug: "gst-litigation-tiruppur", name: "Tiruppur", text: "Knitwear exporters: IGST and inverted duty refunds, LUT exports" },
  { slug: "gst-litigation-madurai", name: "Madurai", text: "Southern Tamil Nadu traders; Madurai GSTAT bench" },
  { slug: "gst-litigation-salem", name: "Salem", text: "Steel, sago, textiles and lorry operators; e-way bill detentions" },
  { slug: "gst-litigation-tiruchirappalli", name: "Tiruchirappalli (Trichy)", text: "Engineering ancillaries and works contracts" },
  { slug: "gst-litigation-hosur", name: "Hosur", text: "Auto component and electronics units; inter-state supply disputes" },
];

const FAQS = [
  {
    question: "I need urgent help with a GST notice. Can you respond quickly?",
    answer:
      "Yes. Send us the notice and we assess your reply deadline and options as a priority. GST reply windows are short, so the priority is confirming exactly what is alleged and which evidence to gather first, rather than a lengthy onboarding process.",
  },
  {
    question: "Can a Chartered Accountant represent me in GST litigation?",
    answer:
      "Yes. Under Section 116 of the CGST Act, a practising Chartered Accountant is an authorised representative before GST officers, the Appellate Authority and the GST Appellate Tribunal. That covers replies, personal hearings and arguing the appeal. Appeals and writ petitions before the High Court or Supreme Court need an advocate.",
  },
  {
    question: "What should I do if I receive a GST show-cause notice?",
    answer:
      "Note the reply deadline in the notice, usually 30 days, and gather the invoices, e-way bills, returns and correspondence it refers to. Do not ignore it: a missed reply can lead to an order confirming the full demand, interest and penalty, leaving only an appeal with a mandatory pre-deposit.",
  },
  {
    question: "How long does a GST appeal take?",
    answer:
      "A first appeal before the Appellate Authority often takes several months to over a year, depending on backlog and hearings. GSTAT timelines are less predictable because the Tamil Nadu benches began hearing appeals only in 2026 and received a large volume of older appeals. Nobody can honestly promise a fixed timeline.",
  },
  {
    question: "Is there a pre-deposit required to file a GST appeal?",
    answer:
      "Yes. For a first appeal you pay the admitted amount and 10% of the disputed tax, capped at ₹20 crore each under CGST and SGST. A GSTAT appeal needs a further 10%, with the same caps. For penalty-only orders the pre-deposit is 10% of the penalty. Pre-deposits are refundable if you succeed.",
  },
  {
    question: "Which GSTAT bench will hear my Tamil Nadu appeal?",
    answer:
      "Tamil Nadu has GSTAT State Benches at Chennai, Coimbatore and Madurai, and Puducherry has its own bench. Place-of-supply disputes go to the Principal Bench in New Delhi. The GSTAT e-filing portal assigns the bench when you file, so confirm it there rather than assuming the nearest city.",
  },
  {
    question: "What is Section 74A and does it apply to my notice?",
    answer:
      "Section 74A is a single demand provision for FY 2024-25 onwards, replacing separate Sections 73 and 74 for those years. The notice can be issued within 42 months of the annual return due date. Penalty depends on whether fraud or wilful misstatement is proved. Notices for FY 2023-24 and earlier still follow Sections 73 and 74.",
  },
  {
    question: "Do you handle GST litigation for businesses outside Chennai?",
    answer:
      "Yes. We handle matters across Tamil Nadu from our only office in Anna Nagar, Chennai. Replies and appeals are filed online, and hearings are attended by video where the authority allows it, or in person by arrangement. For notices from other states, we say plainly where local representation would serve you better.",
  },
];

export default function GstLitigationPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "GST Litigation & Appeals in Chennai",
          description:
            "Representation for GST show-cause notices, departmental audits, appeals before the Appellate Authority, and GST Appellate Tribunal (GSTAT) proceedings.",
          url: PAGE_URL,
          serviceType: "Tax Litigation",
        })}
      />
      <JsonLd
        data={howToSchema({
          name: "How GST litigation proceeds, from notice to tribunal",
          description: "The stages a GST dispute typically moves through, from show-cause notice reply to GST Appellate Tribunal representation.",
          steps: STAGES.map((s) => ({ name: s.stage, text: s.text })),
        })}
      />
      <JsonLd data={speakableSchema(["#direct-answer"])} />
      <Breadcrumbs items={[{ name: "GST Litigation", href: "/gst-litigation-chennai" }]} />
      <PageHero
        reviewedPath="/gst-litigation-chennai"
        eyebrow="GST Disputes · Chennai"
        h1="GST Litigation and Appeals in Chennai"
        subhead="Show-cause notice replies, departmental audits, appeals before the Appellate Authority, and GST Appellate Tribunal representation — handled from our Anna Nagar office by chartered accountants who can appear on your behalf under Section 116 of the CGST Act."
      />

      <section className="bg-paper py-16">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl text-obsidian">
                What is GST litigation?
              </h2>
              <p id="direct-answer" className="mt-4 leading-relaxed text-slate">
                GST litigation covers every stage of a tax dispute with the{" "}
                <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className={LINK}>
                  GST department
                </a>
                : replying to a show-cause notice, departmental audit and
                assessment, a first appeal to the Appellate Authority within three
                months, and a second appeal to the GST Appellate Tribunal (GSTAT),
                which has Tamil Nadu benches at Chennai, Coimbatore and Madurai. How
                the first reply is handled often decides whether the matter ends
                quickly or runs for years.
              </p>
              <p className="mt-2 text-sm text-slate">
                Official references:{" "}
                <a
                  href="https://cbic-gst.gov.in/gst-acts.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-medium ${LINK}`}
                >
                  CGST Act and Rules (cbic-gst.gov.in)
                </a>
                {" · "}
                <a
                  href="https://tutorial.gst.gov.in/userguide/appeal/appeal_manual.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-medium ${LINK}`}
                >
                  GST Portal user guide: Filing an Appeal against a Demand Order
                </a>
                {" · "}
                <a
                  href="https://www.gstat.gov.in/state-bench"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-medium ${LINK}`}
                >
                  GSTAT State Benches (gstat.gov.in)
                </a>
              </p>
              <p className="mt-4 rounded-cards border border-royal-violet/20 bg-lilac-mist p-6 text-sm leading-relaxed text-obsidian">
                Under Section 116 of the CGST Act, a practising Chartered Accountant is
                a statutorily recognised authorised representative and can appear and
                argue on your behalf before GST officers, the Appellate Authority, and
                the GST Appellate Tribunal — without requiring a separate advocate for
                most proceedings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                Which GST notice forms might you receive?
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                GST notices arrive under specific form numbers, and which one
                you&apos;ve received changes both the urgency and the right response —
                confusing a scrutiny notice with a formal show-cause notice, for
                example, can mean missing a much shorter reply window than you think
                you have. If you have a notice but no order yet, see our{" "}
                <Link href="/gst-notice-reply-chennai" className={LINK}>
                  GST notice reply service
                </Link>
                .
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {NOTICE_TYPES.map((n) => (
                  <div key={n.form} className="rounded-cards border border-ash bg-paper p-6 shadow-[var(--shadow-card)]">
                    <p className="font-medium text-obsidian">Form {n.form}</p>
                    <p className="mt-1 text-sm text-slate">{n.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                What are the stages of GST litigation?
              </h2>
              <ol className="mt-4 space-y-4">
                {STAGES.map((s, i) => (
                  <li key={s.stage} className="flex gap-4 rounded-cards border border-ash bg-paper p-6 shadow-[var(--shadow-card)]">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-royal-violet text-sm font-medium text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-medium text-obsidian">{s.stage}</p>
                      <p className="mt-1 text-sm text-slate">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-4 leading-relaxed text-slate">
                For what typically happens between filing a reply and receiving an
                order, read{" "}
                <Link href="/blog/after-gst-show-cause-reply" className={LINK}>
                  what happens after you reply to a GST show cause notice
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                What are the GST appeal time limits and pre-deposits?
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                Each step up the appeal ladder has its own limitation period and
                pre-deposit. The pre-deposit caps were reduced by the Finance (No. 2)
                Act, 2024, and the Finance Act, 2025 replaced the earlier 25%
                pre-deposit for e-way bill penalty orders with 10% of the penalty for
                any penalty-only order, from 1 October 2025. Courts and tribunals have
                held that the penalty-only rule does not apply where the show-cause
                notice was issued before that date.
              </p>
              <Table head={["Stage", "Forum", "Time limit and form", "Pre-deposit"]} rows={APPEAL_LADDER} />
              <p className="mt-3 text-xs text-slate">
                Source: Sections 107, 112, 117 and 118 of the CGST Act as amended,
                available on{" "}
                <a href="https://cbic-gst.gov.in/gst-acts.html" target="_blank" rel="noopener noreferrer" className={LINK}>
                  cbic-gst.gov.in
                </a>
                . The pre-deposit is computed on tax only; disputed interest and
                penalty are not counted, except for penalty-only orders. The one-time
                window for older orders to reach GSTAT closed on 31 July 2026; later
                orders follow the normal 3-month limit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                Where does GSTAT sit in Tamil Nadu?
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                The GSTAT website lists three State Benches for Tamil Nadu, at
                Chennai, Coimbatore and Madurai, and a separate bench location for
                Puducherry. According to GSTAT Office Order No. 4/GSTAT/PB/2026 dated
                29 July 2026, as reported, the roster from 1 August 2026 is:
              </p>
              <ul className="mt-4 space-y-2 text-slate">
                <li>• <strong className="text-obsidian">Chennai:</strong> Category I matters (classification, ITC, refunds, valuation, assessment and similar) on Mondays and Tuesdays; Category II matters (registration, Section 73/74 proceedings, penalties and residual matters) on Wednesdays.</li>
                <li>• <strong className="text-obsidian">Coimbatore:</strong> Categories I and II on Thursdays.</li>
                <li>• <strong className="text-obsidian">Madurai:</strong> Categories I and II on the first, second and third Fridays of each month.</li>
                <li>• <strong className="text-obsidian">Puducherry (circuit bench):</strong> Categories I and II on the fourth and fifth Fridays.</li>
              </ul>
              <p className="mt-4 leading-relaxed text-slate">
                Sittings and member composition change by office order, and the bench
                that hears your appeal is fixed by the GSTAT e-filing portal, not by
                where your business is. Always confirm the bench and hearing date on
                the GSTAT portal. Our explainer on the{" "}
                <Link href="/blog/gst-appellate-tribunal-gstat-explained" className={LINK}>
                  GST Appellate Tribunal for Chennai businesses
                </Link>{" "}
                covers how the tribunal works in more detail.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                What GST disputes are common in Tamil Nadu?
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                Tamil Nadu taxpayers are administered either by the Central GST
                commissionerates or by the State Commercial Taxes Department, but the
                disputes look much the same. These are the ones we see most often:
              </p>
              <Table head={["Dispute", "What usually triggers it", "What the defence rests on"]} rows={TN_DISPUTES} />
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {DISPUTE_TYPES.map((d) => (
                  <div key={d.title} className="rounded-cards border border-ash bg-paper p-6 shadow-[var(--shadow-card)]">
                    <p className="font-medium text-obsidian">{d.title}</p>
                    <p className="mt-1 text-sm text-slate">{d.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 rounded-cards border border-royal-violet/20 bg-lilac-mist p-5 text-sm leading-relaxed text-obsidian">
                <strong>Our take:</strong> ITC mismatch notices are, in our
                experience, the most common trigger for a GST
                show-cause notice among Chennai SMEs and traders — usually
                because a supplier filed their return late or incorrectly,
                not because of anything the recipient business did wrong.
                The fix is rarely &ldquo;pay the demand&rdquo; — it&apos;s proving the
                mismatch sits with the supplier&apos;s filing, which requires
                pulling GSTR-2B history and correspondence, not just
                arguing the point. Our guide to{" "}
                <Link href="/blog/itc-mismatch-notices" className={LINK}>ITC mismatch notices</Link>{" "}
                explains the reconciliation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                How are GST appeals filed online?
              </h2>
              <ol className="mt-4 space-y-3 text-slate">
                <li><strong className="text-obsidian">1. First appeal (APL-01):</strong> filed on the GST portal (gst.gov.in) under Services, User Services, My Applications, against the demand order. The pre-deposit is paid from the cash or credit ledger, or by DRC-03, and linked in the form. A provisional acknowledgement (APL-02) is generated, and the order is issued in APL-04.</li>
                <li><strong className="text-obsidian">2. Second appeal (APL-05):</strong> filed on the GSTAT e-filing portal (efiling.gstat.gov.in), using the ARN of the APL-01 appeal. Grounds, statement of facts, the orders below, proof of pre-deposit and the fee receipt are uploaded, and the appeal is signed with a DSC or Aadhaar e-sign.</li>
                <li><strong className="text-obsidian">3. Hearings:</strong> notices and orders arrive on the portal. Appellate Authorities in Tamil Nadu may hold personal hearings in person or by video; GSTAT hearings follow the bench roster.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                What documents do you need for a GST appeal?
              </h2>
              <Table head={["Document", "Why it matters"]} rows={DOCUMENTS} />
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                How do we work on a GST litigation matter?
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                We start by reading the notice or order itself before touching your
                books — the exact section cited (73, 74 or 74A, for instance) and the
                specific allegation determine both the reply deadline and the
                documents we pull first. From there we reconcile the disputed period
                against your GSTR-2B, e-way bills, and underlying invoices to build a
                factual position, draft the reply or appeal memorandum grounded in
                that reconciliation, and represent you personally at hearings under
                Section 116 of the CGST Act rather than handing the matter to a
                separate advocate. Every deadline — the SCN reply window, the
                3-month appeal limitation, the pre-deposit payment — is tracked and
                flagged to you in writing, not left for you to calculate.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                Why does a Chennai-based CA matter in GST litigation?
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                Much of the visible online content on GST litigation is written for a
                national audience. A Chennai-based CA firm works with the procedures of
                the Chennai GST Commissionerates and the Tamil Nadu appellate authorities
                regularly, and is close enough to meet you in person while a reply or
                appeal is being prepared.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                Do we handle GST litigation across Tamil Nadu?
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                Yes. Our only office is in Anna Nagar, Chennai, and we have no branch
                elsewhere. Replies and appeals are filed online, and hearings are
                attended by video where the authority permits or in person by
                arrangement. Each city page below covers the industries and disputes
                typical of that area:
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {CITIES.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${c.slug}`}
                    className="rounded-cards border border-ash bg-paper p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5"
                  >
                    <p className="font-medium text-obsidian">GST litigation in {c.name}</p>
                    <p className="mt-1 text-sm text-slate">{c.text}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit space-y-6">
            <div className="rounded-cards border border-carbon bg-royal-violet p-8">
              <h3 className="text-lg font-medium text-white">Received a GST notice?</h3>
              <p className="mt-2 text-sm text-white/80">
                Reply deadlines are strict and non-negotiable. Send us the notice and
                we&apos;ll assess your response window and options as a priority.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-block w-full rounded-buttons bg-white px-5 py-3 text-center text-sm font-medium text-obsidian hover:bg-lilac-mist"
              >
                Get Urgent Consultation
              </Link>
            </div>
            <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
              <h3 className="eyebrow text-xs text-slate">
                Related services
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link href="/gst-notice-reply-chennai" className="text-royal-violet hover:underline">GST Notice Reply (before it becomes an appeal)</Link></li>
                <li><Link href="/goods-and-services-tax" className="text-royal-violet hover:underline">GST Registration &amp; Returns</Link></li>
                <li><Link href="/audit-and-assurance" className="text-royal-violet hover:underline">Audit &amp; Assurance</Link></li>
                <li><Link href="/direct-tax" className="text-royal-violet hover:underline">Direct Tax</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <FAQSection items={FAQS} />

      <section className="bg-paper py-12">
        <div className="container-page">
          <h2 className="text-xl text-obsidian">People also ask</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/goods-and-services-tax" className="text-sm font-medium text-royal-violet underline underline-offset-2">
                What are the ongoing GST return filing requirements?
              </Link>
            </li>
            <li>
              <Link href="/audit-and-assurance" className="text-sm font-medium text-royal-violet underline underline-offset-2">
                Could a GST dispute also trigger an income tax audit?
              </Link>
            </li>
            <li>
              <Link href="/direct-tax" className="text-sm font-medium text-royal-violet underline underline-offset-2">
                Do GST notices affect my income tax filing too?
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <CTASection
        service="GST Litigation & Appeals"
        title="Facing a GST notice or audit?"
        subtitle="Get a chartered accountant's assessment of your case before your reply deadline passes."
      />
    </>
  );
}
