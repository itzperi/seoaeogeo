import ICAIVerificationTrustBar from "@/components/ICAIVerificationTrustBar";
import TamilSummaryBox from "@/components/TamilSummaryBox";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SiloLinks from "@/components/SiloLinks";
import { JsonLd, moneyPageGraph } from "@/lib/schema";
import { PAGE_DATES } from "@/lib/page-dates";

const PATH = "/gst-litigation-chennai";
const TITLE = "GST Litigation & Appeals in Chennai | GSTAT & SCN Reply";
const DESCRIPTION =
  "CA representation for GST Litigation & Appeals in Chennai under Sec 116. DRC-01 SCN replies, APL-01 First Appeals, GSTAT Chennai Bench & ITC mismatch defence.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/gst-litigation-chennai", types: { "text/markdown": "/md/gst-litigation-chennai" } },
  openGraph: {
    images: [{ url: "/gst-litigation-chennai/opengraph-image", width: 1200, height: 630 }],
    title: "GST Litigation & Appeals in Chennai",
    description: DESCRIPTION,
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
  { stage: "GST Appellate Tribunal (GSTAT)", text: "If the Appellate Authority's order is still adverse, we file a second appeal in Form GST APL-05 on the GSTAT e-filing portal within 3 months, with a further 10% pre-deposit. GSTAT has a Principal Bench in New Delhi for matters involving place-of-supply disputes, and State Benches, which for Tamil Nadu sit at Chennai, Coimbatore and Madurai, for other matters." },
  { stage: "ITC & Refund Dispute Defense", text: "We build the factual and documentary case to defend legitimate ITC claims and pursue refund entitlements through litigation where needed." },
];

// Notice-to-defence playbook: what each form means, the reply route and
// what the defence usually rests on.
const PLAYBOOK = [
  {
    form: "DRC-01A / DRC-01",
    title: "Show-cause notice under Section 73, 74 or 74A",
    means: "DRC-01A is the pre-notice intimation; DRC-01 is the summary of the formal show-cause notice. Sections 73 and 74 cover FY 2023-24 and earlier; Section 74A covers FY 2024-25 onwards.",
    reply: "Object in Part B of DRC-01A, or reply to the show-cause notice in DRC-06 within the time stated (usually 30 days) and ask for a personal hearing.",
    defence: "Limitation, whether fraud or suppression is actually made out, invoice-level reconciliation, and the officer's jurisdiction.",
  },
  {
    form: "ASMT-10",
    title: "Scrutiny mismatch: GSTR-3B vs GSTR-2B, GSTR-1 vs e-way bills",
    means: "The officer has found discrepancies while scrutinising your returns. No demand has been raised yet.",
    reply: "Reply in ASMT-11 within the time allowed, explaining or accepting each discrepancy. This early stage is handled by our GST notice reply service.",
    defence: "Line-by-line reconciliation: timing differences, credit notes, amendments in later returns, and supplier filing defaults.",
  },
  {
    form: "Section 16(4), 16(5), 16(6)",
    title: "ITC denied as time-barred",
    means: "Credit is denied because it was claimed after the Section 16(4) deadline.",
    reply: "Check whether Section 16(5) (FY 2017-18 to 2020-21 credit claimed in returns filed up to 30 November 2021) or Section 16(6) (registrations cancelled and later revoked) applies before replying or appealing.",
    defence: "The retrospective relief in Sections 16(5) and 16(6), the return in which credit was actually claimed, and the date of revocation.",
  },
  {
    form: "MOV-06 / MOV-07 / MOV-09",
    title: "Goods or vehicle detained in transit (Section 129)",
    means: "MOV-06 is the detention order, MOV-07 the notice proposing tax and penalty, MOV-09 the order of demand. Common on routes into Chennai such as the Chennai–Bengaluru highway and the Ennore port and Red Hills approaches.",
    reply: "Reply to MOV-07 within 7 days; secure release by paying the penalty or furnishing security; appeal the MOV-09 order in APL-01 with 10% of the penalty as pre-deposit.",
    defence: "Whether the defect was a technical lapse, such as a clerical e-way bill error or lapsed validity, with no intent to evade tax.",
  },
  {
    form: "REG-17 / REG-19 / REG-21",
    title: "GST registration cancelled by the officer",
    means: "REG-17 proposes cancellation, usually for non-filing; REG-19 is the cancellation order.",
    reply: "Reply to REG-17 in REG-18 within 7 working days. After a REG-19 order, apply for revocation in REG-21, generally within 90 days, once pending returns and dues are cleared.",
    defence: "Proof that the business is operating, returns filed (or filed late with cause), and whether the notice was properly served.",
  },
];

// Forums in Chennai where a CA appears under Section 116. The office named
// on the notice or order always governs.
const FORUMS = [
  ["Central GST adjudication", "Chennai North, Chennai South and Chennai Outer Commissionerates (CBIC Chennai zone)", "Show-cause notices and orders for taxpayers allotted to the Centre"],
  ["Central GST first appeal", "Commissioner (Appeals-I), Mahatma Gandhi Road, Nungambakkam, Chennai 600034, and Commissioner (Appeals-II), Newry Towers, Anna Nagar, Chennai 600040", "APL-01 appeals against Central GST orders. Newry Towers is a short walk from our J-Block office"],
  ["State GST adjudication", "Tamil Nadu Commercial Taxes Department, Integrated Commercial Taxes Building, Nandanam, Chennai", "Show-cause notices and orders for taxpayers allotted to the State"],
  ["State GST first appeal", "Appellate Deputy Commissioners (ST), PAPJM Building, Greams Road, Chennai", "APL-01 appeals against State GST orders"],
  ["Second appeal", "GST Appellate Tribunal, Chennai State Bench", "APL-05 appeals: Category I matters (classification, ITC, refunds, valuation) and Category II matters (registration, Section 73/74 proceedings, penalties)"],
];

const APPEAL_LADDER = [
  ["1. Adjudication (SCN and order)", "Proper officer of the Central or State GST administration", "Reply within the time in the SCN (usually 30 days); order in Form DRC-07", "None. Paying the tax before or soon after the SCN can reduce penalty"],
  ["2. First appeal", "Appellate Authority (Section 107)", "3 months from communication of the order, condonable by 1 more month. Form APL-01 on the GST portal", "Admitted amount in full plus 10% of disputed tax, capped at ₹20 crore CGST and ₹20 crore SGST (₹40 crore IGST). Penalty-only orders: 10% of the penalty"],
  ["3. Second appeal", "GST Appellate Tribunal: State Bench, or Principal Bench for place-of-supply issues (Section 112)", "3 months from communication of the appellate order, condonable by 3 more months. Form APL-05 on the GSTAT e-filing portal", "A further 10% of the tax still in dispute, capped at ₹20 crore CGST and ₹20 crore SGST (₹40 crore IGST). Penalty-only orders: a further 10% of the penalty"],
  ["4. High Court", "Madras High Court, at Chennai or its Madurai Bench (Section 117)", "180 days from the State Bench order; only on a substantial question of law", "As directed by the court; writ petitions remain available for jurisdiction and natural-justice issues"],
  ["5. Supreme Court", "Supreme Court of India (Section 118)", "Against High Court judgments in appeal, or directly against Principal Bench orders", "As directed by the court"],
];

// Pre-deposit summary: Sections 107(6), 107(7), 112(8) and 112(9) of the CGST Act as amended.
const PRE_DEPOSIT = [
  ["First appeal (Section 107(6))", "The admitted amount in full, plus 10% of the remaining tax in dispute", "₹20 crore under the CGST Act, reduced from ₹25 crore by the Finance (No. 2) Act, 2024", "10% of the penalty, from 1 October 2025 (Finance Act, 2025)", "Recovery of the balance is deemed stayed while the appeal is pending (Section 107(7))"],
  ["GSTAT appeal (Section 112(8))", "The admitted amount in full, plus a further 10% of the remaining tax in dispute, over and above the first-appeal deposit", "₹20 crore under the CGST Act, reduced from ₹50 crore by the Finance (No. 2) Act, 2024, which also cut the rate from 20% to 10%", "A further 10% of the penalty, from 1 October 2025 (Finance Act, 2025)", "Recovery of the balance is deemed stayed until the appeal is disposed of (Section 112(9))"],
];

// GSTAT questions and answers. Sources: Sections 109 and 112 of the CGST Act,
// Rule 110 of the CGST Rules, and the State Benches list on gstat.gov.in.
const GSTAT_QA = [
  {
    q: "Which GSTAT benches are officially listed for Tamil Nadu?",
    a: "The State Benches list on gstat.gov.in shows three locations for Tamil Nadu: Chennai, Coimbatore (also listed as a sitting) and Madurai. Puducherry appears as a separate entry, with its own location and circuit sitting at Puducherry. The bench that hears a particular appeal is assigned through the GSTAT e-filing portal.",
  },
  {
    q: "How is an appeal filed before the GSTAT?",
    a: "The appeal is filed electronically in Form GST APL-05 under Rule 110, on the GSTAT e-filing portal; manual filing was removed from 22 September 2025. A provisional acknowledgement issues in Part A of APL-02A, and the final acknowledgement with the appeal number in Part B once any defects are cured.",
  },
  {
    q: "What is the time limit for a GSTAT appeal?",
    a: "Three months from the date the first appellate order is communicated, or from a date the Government notifies for filing GSTAT appeals, whichever is later (Section 112(1)). The Tribunal can admit an appeal filed within a further three months if you show sufficient cause for the delay (Section 112(6)).",
  },
  {
    q: "What fee is payable on a GSTAT appeal?",
    a: "Rule 110(5) fixes the fee at ₹1,000 for every ₹1 lakh of tax, input tax credit, difference in tax or credit, or fine, fee or penalty involved, with a minimum of ₹5,000 and a maximum of ₹25,000. An appeal against an order with no demand pays a flat ₹5,000. The pre-deposit is separate.",
  },
  {
    q: "Can the GSTAT refuse to hear a small appeal?",
    a: "Yes. Under Section 112(2), the Tribunal may, at its discretion, refuse to admit an appeal where the tax or input tax credit involved, the difference in tax or credit, or the fine, fee or penalty in the order does not exceed ₹50,000. Below that amount, weigh the cost of the appeal first.",
  },
  {
    q: "Which appeals go to the Principal Bench instead?",
    a: "Appeals where one of the issues involved is the place of supply go to the Principal Bench in New Delhi, not to a State Bench. Every other appeal from Tamil Nadu goes to a State Bench. If your appeal raises place of supply along with other issues, plan for a Principal Bench hearing.",
  },
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
      "The GSTAT's official list shows Tamil Nadu benches at Chennai, Coimbatore (also listed as a sitting) and Madurai, with Puducherry listed separately. Appeals involving place of supply go to the Principal Bench in New Delhi. The GSTAT e-filing portal assigns the bench when you file, so confirm it there rather than assuming the nearest city.",
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

const CRUMBS = [
  { name: "GST", href: "/goods-and-services-tax" },
  { name: "GST Litigation & Appeals in Chennai", href: PATH },
];

export default function GstLitigationPage() {
  return (
    <>
      <JsonLd
        data={moneyPageGraph({
          path: PATH,
          name: TITLE,
          description: DESCRIPTION,
          dateModified: PAGE_DATES[PATH],
          service: {
            name: "GST Litigation & Appeals in Chennai",
            serviceType: "GST Litigation, Show Cause Notice Reply, and GSTAT Appeals",
            description:
              "Representation under Section 116 of the CGST Act for GST show-cause notices, adjudication, first appeals before the Appellate Authority and second appeals before the GSTAT Chennai State Bench.",
            offers: [
              "DRC-01 / DRC-06 show-cause notice replies (Sections 73, 74 and 74A)",
              "APL-01 first appeals before the Appellate Authority",
              "APL-05 appeals before the GSTAT Chennai State Bench",
              "Section 129 e-way bill detention appeals",
              "ITC mismatch and Section 16(4) defence",
              "GST registration cancellation and revocation",
            ],
          },
          faqs: FAQS,
          crumbs: CRUMBS,
          howTo: {
            name: "How GST litigation proceeds, from notice to tribunal",
            description: "The stages a GST dispute typically moves through, from show-cause notice reply to GST Appellate Tribunal representation.",
            steps: STAGES.map((s) => ({ name: s.stage, text: s.text })),
          },
          speakable: ["#lead-answer", "#direct-answer"],
        })}
      />
      <Breadcrumbs items={CRUMBS} schema={false} />
      <PageHero
        reviewedPath={PATH}
        schema={false}
        eyebrow="GST Disputes · Chennai"
        h1="GST Litigation & Appeals in Chennai"
        lead={
          <>
            Need <strong>GST litigation and appeals support in Chennai</strong>? C S Rushil &amp; Co., an Anna Nagar{" "}
            <strong>chartered accountancy firm</strong>, represents businesses under Section 116 of the CGST Act: DRC-06
            replies to Section 73, 74 and 74A show-cause notices, APL-01 first appeals, and APL-05 appeals before the{" "}
            <strong>GSTAT Chennai Bench</strong>.
          </>
        }
        subhead="Show-cause notice replies, departmental audits, appeals before the Appellate Authority, and GST Appellate Tribunal representation — handled from our Anna Nagar office by chartered accountants who can appear on your behalf under Section 116 of the CGST Act."
      />

      <section className="bg-paper py-16">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <p className="rounded-cards border border-carbon bg-sunburst p-5 text-sm leading-relaxed text-carbon">
                <strong>Still at the scrutiny stage?</strong> An ASMT-10 or DRC-01A that has not yet become a demand is
                answered by our{" "}
                <Link href="/gst-notice-reply-chennai" className="font-semibold underline underline-offset-2">
                  GST notice reply service
                </Link>
                . This page covers contested matters: DRC-01 adjudication, Section 73/74/74A demands, Section 129
                detention appeals, APL-01 first appeals and APL-05 appeals before the GSTAT Chennai Bench.
              </p>
              <h2 className="mt-8 text-2xl text-obsidian">
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
                Which GST notice have you received, and how is it defended?
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                The form number on the notice decides the reply form, the deadline and the defence, so identify it
                first. Confusing a scrutiny notice with a show-cause notice can mean missing a much shorter reply
                window. These cards summarise the five notices we see most often in Chennai.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {PLAYBOOK.map((n) => (
                  <article key={n.form} className="rounded-cards border border-carbon bg-paper p-6">
                    <p className="sticker-tag bg-lavender">{n.form}</p>
                    <h3 className="mt-3 font-medium text-obsidian">{n.title}</h3>
                    <dl className="mt-3 space-y-2 text-sm">
                      <div>
                        <dt className="font-medium text-obsidian">What it means</dt>
                        <dd className="text-slate">{n.means}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-obsidian">How to respond</dt>
                        <dd className="text-slate">{n.reply}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-obsidian">What the defence rests on</dt>
                        <dd className="text-slate">{n.defence}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                Which Chennai GST offices and appellate forums do we appear before?
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                As practising Chartered Accountants, we appear under Section 116 of the CGST Act before every Central
                and State GST forum in Chennai, up to the GST Appellate Tribunal. Whether your GSTIN is allotted to
                the Centre or the State decides which offices handle your case.
              </p>
              <Table head={["Stage", "Forum and location", "What is heard there"]} rows={FORUMS} />
              <p className="mt-3 text-xs text-slate">
                Office locations as published by the CBIC Chennai zone (
                <a href="https://gstchennai.gov.in" target="_blank" rel="noopener noreferrer" className={LINK}>
                  gstchennai.gov.in
                </a>
                ) and the Tamil Nadu Commercial Taxes Department (
                <a href="https://ctd.tn.gov.in" target="_blank" rel="noopener noreferrer" className={LINK}>
                  ctd.tn.gov.in
                </a>
                ). The authority and address printed on your notice or order always govern.
              </p>
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
                any penalty-only order, from 1 October 2025. The Delhi High Court has
                held, in{" "}
                <a href="https://indiankanoon.org/doc/173947388/" target="_blank" rel="noopener noreferrer" className={LINK}>
                  Gaurav Jain &amp; Anr. v. Joint Commissioner (Appeals-II), CGST Delhi Zone &amp; Anr., W.P.(C) 8414/2026,
                  decided on 31 July 2026
                </a>
                , that the 10% penalty pre-deposit does not apply to a first appeal against a penalty-only order
                where the show-cause notice was issued before 1 October 2025. That case concerned a penalty under
                Section 122(1A), not a Section 129 detention order, which carried a 25% pre-deposit before the
                change. It is a Delhi High Court ruling, so check how it applies to your own dates and forum.
              </p>
              <Table head={["Stage", "Forum", "Time limit and form", "Pre-deposit"]} rows={APPEAL_LADDER} />
              <p className="mt-3 text-xs text-slate">
                Work out your own dates and pre-deposit with the{" "}
                <Link href="/tools/gst-appeal-deadline-pre-deposit-calculator" className={LINK}>
                  GST appeal deadline and pre-deposit calculator
                </Link>
                . Source: Sections 107, 112, 117 and 118 of the CGST Act as amended,
                available on{" "}
                <a href="https://cbic-gst.gov.in/gst-acts.html" target="_blank" rel="noopener noreferrer" className={LINK}>
                  cbic-gst.gov.in
                </a>
                . The pre-deposit is computed on tax only; disputed interest and
                penalty are not counted, except for penalty-only orders. For older
                orders, the Government notified a special last date for GSTAT appeals,
                which the GSTAT announced as extended to{" "}
                <a href="https://gstat.gov.in/whats-new/32" target="_blank" rel="noopener noreferrer" className={LINK}>
                  31 July 2026
                </a>
                . That date has passed; appeals against later orders follow the normal 3-month limit,
                condonable by 3 more months.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                How much pre-deposit is needed for a first appeal and a GSTAT appeal?
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                A first appeal needs the admitted amount plus 10% of the disputed tax; a GSTAT appeal needs a further
                10% of the tax still in dispute. Each 10% is capped at ₹20 crore under the CGST Act. Where an order
                demands only a penalty, such as a Section 129 detention order, the deposit is 10% of the penalty at
                each stage.
              </p>
              <Table
                head={["Appeal", "Tax demands", "Cap on the 10%", "Penalty-only orders", "Once paid"]}
                rows={PRE_DEPOSIT}
              />
              <p className="mt-3 text-xs text-slate">
                Source: Sections 107 and 112 of the CGST Act as amended, on CBIC&apos;s tax information portal (
                <a
                  href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter18/section107_v1.00.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK}
                >
                  Section 107
                </a>
                ,{" "}
                <a
                  href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter18/section112_v1.00.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK}
                >
                  Section 112
                </a>
                ). The pre-deposit is paid before filing, and if the appeal succeeds it is refunded with interest under
                Section 115.
              </p>
              <p className="mt-4 leading-relaxed text-slate">
                Two cases need extra care. For demands from FY 2024-25 onwards, check first whether the order under{" "}
                <Link href="/blog/section-74a-gst-notice" className={LINK}>
                  Section 74A
                </Link>{" "}
                was passed within its time limit, because limitation can be the strongest ground of appeal. For
                goods detained in transit, our guide to{" "}
                <Link href="/blog/eway-bill-detention-section-129-appeal" className={LINK}>
                  Section 129 detention, release and appeal
                </Link>{" "}
                explains how the penalty-only rule applies. To work out the last date and the amount for your own order,
                use the{" "}
                <Link href="/tools/gst-appeal-deadline-pre-deposit-calculator" className={LINK}>
                  GST appeal deadline and pre-deposit calculator
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                Where does GSTAT sit in Tamil Nadu?
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                The official State Benches list on{" "}
                <a href="https://www.gstat.gov.in/state-bench" target="_blank" rel="noopener noreferrer" className={LINK}>
                  gstat.gov.in
                </a>{" "}
                shows three locations for Tamil Nadu: Chennai, Coimbatore (also listed as a sitting) and Madurai.
                Puducherry is listed separately, with a circuit sitting at Puducherry. The tribunal hears second
                appeals against first appellate orders, and the bench is assigned on the GSTAT e-filing portal.
              </p>
              <p className="mt-4 leading-relaxed text-slate">
                According to GSTAT Office Order No. 4/GSTAT/PB/2026 dated 29 July 2026, as reported, the roster
                from 1 August 2026 is:
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
                What do Tamil Nadu businesses ask about the GSTAT?
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                Most questions are about which bench will hear the appeal, how it is filed, the time limit, the fee and
                whether a small demand is worth taking to the tribunal. The answers below come from Sections 109 and 112
                of the CGST Act, Rule 110 of the CGST Rules and the GSTAT&apos;s own list of State Benches.
              </p>
              <div className="mt-6 space-y-4">
                {GSTAT_QA.map((item) => (
                  <div key={item.q} className="rounded-cards border border-ash bg-paper p-6 shadow-[var(--shadow-card)]">
                    <h3 className="font-medium text-obsidian">{item.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{item.a}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-slate">
                Sources:{" "}
                <a href="https://www.gstat.gov.in/state-bench" target="_blank" rel="noopener noreferrer" className={LINK}>
                  GSTAT State Benches
                </a>
                {" · "}
                <a
                  href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter13/rule110_v1.00.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK}
                >
                  Rule 110, CGST Rules
                </a>
                {" · "}
                <a
                  href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter18/section112_v1.00.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK}
                >
                  Section 112, CGST Act
                </a>
                . The order being appealed and the GSTAT portal always govern the dates and the bench.
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
                explains the reconciliation.{" "}For demands raised from FY 2024-25, see{" "}
                <Link href="/blog/section-74a-gst-notice" className={LINK}>how Section 74A time limits and penalties work</Link>
                , and for goods stopped in transit,{" "}
                <Link href="/blog/eway-bill-detention-section-129-appeal" className={LINK}>
                  goods detained under Section 129: release and appeal
                </Link>
                .
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
              <p className="mt-2 text-sm text-white">
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

      <SiloLinks path={PATH} />

      <section className="bg-paper pb-12">
        <div className="container-page">
          <ICAIVerificationTrustBar />
        </div>
      </section>
      <TamilSummaryBox path="/gst-litigation-chennai" />
      <FAQSection items={FAQS} schema={false} />

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
