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
  title: "GST Litigation in Chennai | Appeals & Notice Reply",
  description:
    "GST litigation support in Chennai — show-cause notice replies, departmental audits, appeals before the Appellate Authority, and GSTAT representation by C S Rushil & Co.",
  alternates: { canonical: "/gst-litigation-chennai" },
  openGraph: {
    title: "GST Litigation in Chennai",
    description: "Show-cause notice replies, appeals, and GSTAT representation by a Chennai chartered accountancy firm.",
    url: "/gst-litigation-chennai",
  },
};

const DISPUTE_TYPES = [
  { title: "Classification disputes", text: "Disagreements over the HSN/SAC code and applicable tax rate for your goods or services." },
  { title: "Valuation disputes", text: "Challenges to the transaction value declared, especially in related-party or discounted transactions." },
  { title: "Place of supply disputes", text: "Disagreements over whether a supply is intra-state or inter-state, affecting CGST/SGST vs. IGST liability." },
  { title: "Input Tax Credit (ITC) disputes", text: "Denial or reversal of ITC due to supplier non-compliance, mismatch in GSTR-2B, or blocked credit provisions." },
  { title: "Exemption disputes", text: "Challenges to claimed exemptions or concessional rates under notifications." },
  { title: "Refund litigation", text: "Delayed, rejected, or partially sanctioned refund claims for exports, inverted duty structure, or excess tax paid." },
];

const STAGES = [
  { stage: "Show-Cause Notice (SCN) Reply", text: "We analyse the SCN, gather supporting documentation, and draft a legally grounded reply within the statutory timeline — typically 30 days." },
  { stage: "Departmental Audit & Assessment", text: "We represent you during GST audits (Section 65/66) and assessment proceedings, coordinating document production and officer queries." },
  { stage: "Appeal before Appellate Authority", text: "If the order is adverse, we file a first appeal (Form GST APL-01) before the Joint/Additional Commissioner (Appeals) within 3 months of the order, along with a certified copy of the order and the required 10% pre-deposit." },
  { stage: "GST Appellate Tribunal (GSTAT)", text: "If the Appellate Authority's order is still adverse, we file a second appeal (Form GST APL-05) before the GST Appellate Tribunal within 3 months. GSTAT has a Principal Bench in New Delhi for matters involving place-of-supply disputes, and State Benches — including one for Tamil Nadu — for all other matters, so which bench hears your case depends on the nature of the dispute." },
  { stage: "ITC & Refund Dispute Defense", text: "We build the factual and documentary case to defend legitimate ITC claims and pursue refund entitlements through litigation where needed." },
];

const NOTICE_TYPES = [
  { form: "DRC-01A", text: "An intimation of tax ascertained as payable, issued before a formal show-cause notice — responding here can sometimes resolve the matter without escalating to a full SCN." },
  { form: "DRC-01", text: "The formal show-cause notice under Section 73 (non-fraud cases) or Section 74 (fraud/wilful misstatement cases) — the distinction matters, since Section 74 carries a much higher penalty exposure." },
  { form: "ASMT-10", text: "Notice for discrepancies found during scrutiny of a filed return, typically the first sign of an ITC or turnover mismatch before it escalates further." },
  { form: "REG-17", text: "Show-cause notice proposing cancellation of GST registration — usually for continuous non-filing, requires an urgent reply to avoid losing registration entirely." },
  { form: "GST APL-01 / APL-05", text: "Not notices but the appeal forms themselves — APL-01 for the first appeal to the Appellate Authority, APL-05 for the second appeal to GSTAT." },
];

const FAQS = [
  {
    question: "Can a Chartered Accountant represent me in GST litigation?",
    answer:
      "Yes. Under Section 116 of the CGST Act, a Chartered Accountant is a recognised 'authorised representative' and can independently represent taxpayers before GST officers, the Appellate Authority, and the GST Appellate Tribunal (GSTAT) — you do not need a separate advocate for most GST proceedings. This includes drafting and filing replies, appearing at personal hearings, and arguing the case on the merits of the tax and accounting position. Businesses often prefer a CA for GST disputes specifically because the same professional who handled the underlying returns, reconciliations, and books of account can defend them, rather than briefing an advocate from scratch on the transaction history. Advocates remain necessary for writ petitions before the High Court or Supreme Court, which fall outside a CA's representation rights.",
  },
  {
    question: "What should I do if I receive a GST show-cause notice?",
    answer:
      "Do not ignore it. Note the response deadline stated on the notice (usually 30 days, though it can vary), and immediately start gathering the related invoices, e-way bills, GSTR filings, and any correspondence referenced in the notice. A poorly drafted or missed reply can lead to an ex-parte order confirming the entire demand, interest, and penalty — after which your only recourse is a costlier appeal with a mandatory pre-deposit. The first 48 hours matter most: identifying exactly which allegation (classification, valuation, ITC mismatch, or procedural lapse) the notice raises determines what documentation to prioritise before drafting begins.",
  },
  {
    question: "How long does a GST appeal take?",
    answer:
      "A first appeal before the Appellate Authority typically takes 6–18 months depending on the jurisdiction's case backlog and how many hearings the officer schedules before passing an order. GSTAT (second appeal) timelines vary further since the tribunal benches are still being operationalised in several states, and a genuinely new tribunal bench can mean a longer wait simply due to case volume rather than the merits of your matter. We advise clients realistically at each stage — including what evidence to prepare while waiting — rather than promising a fixed timeline no lawyer or CA can actually guarantee given how tribunal scheduling works.",
  },
  {
    question: "Is there a pre-deposit required to file a GST appeal?",
    answer:
      "Yes. To file a first appeal before the Appellate Authority you must pre-deposit 10% of the disputed tax amount (subject to a statutory cap), and a further 10% of the remaining disputed amount to file a second appeal to GSTAT. This pre-deposit is refundable with interest if you ultimately win, but it must be paid upfront before the appeal is even admitted for hearing — it is not optional or negotiable. We factor this into your litigation strategy and cash-flow planning at the outset, since businesses are sometimes caught off guard by having to fund a pre-deposit on top of ongoing operating expenses mid-dispute.",
  },
  {
    question: "Do you handle GST litigation for businesses outside Chennai?",
    answer:
      "Our core practice is Chennai and Tamil Nadu jurisdiction, where we have direct familiarity with local GST officers, the Appellate Authority benches, and how specific commissionerates tend to interpret disputed provisions — that local knowledge often shapes how a reply or appeal is framed. That said, we also support clients with pan-India GST notices through documentation review, reply drafting, and coordinating with local representation where a personal hearing requires it. If your registered office and the jurisdictional GST officer are both outside Tamil Nadu, we'll be upfront about where our direct involvement is most effective versus where a locally-based representative may serve you better.",
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
        eyebrow="GST Disputes · Chennai"
        h1="GST Litigation in Chennai"
        subhead="Show-cause notice replies, departmental audits, appeals before the Appellate Authority, and GST Appellate Tribunal representation — handled by chartered accountants who can appear on your behalf under Section 116 of the CGST Act."
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
                <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className="text-royal-violet underline underline-offset-2">
                  GST department
                </a>{" "}
                — from replying to a show-cause notice, through
                departmental audit and assessment, to appeals before the Appellate
                Authority and the GST Appellate Tribunal (GSTAT). Most GST-registered
                businesses in Chennai will face at least one notice or mismatch query
                over their lifetime; how it is handled at the first response stage
                often determines whether the matter is resolved quickly or escalates
                into years of appeal.
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
                Notice forms you might actually receive
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                GST notices arrive under specific form numbers, and which one
                you&apos;ve received changes both the urgency and the right response —
                confusing a scrutiny notice with a formal show-cause notice, for
                example, can mean missing a much shorter reply window than you think
                you have.
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
                Litigation stages we handle
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
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                Types of GST disputes we handle
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {DISPUTE_TYPES.map((d) => (
                  <div key={d.title} className="rounded-cards border border-ash bg-paper p-6 shadow-[var(--shadow-card)]">
                    <p className="font-medium text-obsidian">{d.title}</p>
                    <p className="mt-1 text-sm text-slate">{d.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 rounded-cards border border-royal-violet/20 bg-lilac-mist p-5 text-sm leading-relaxed text-obsidian">
                <strong>Our take:</strong> ITC mismatch notices are, in our
                experience, the single most common trigger for a GST
                show-cause notice among Chennai SMEs and traders — usually
                because a supplier filed their return late or incorrectly,
                not because of anything the recipient business did wrong.
                The fix is rarely &ldquo;pay the demand&rdquo; — it&apos;s proving the
                mismatch sits with the supplier&apos;s filing, which requires
                pulling GSTR-2B history and correspondence, not just
                arguing the point.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-obsidian">
                How we work on a GST litigation matter
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                We start by reading the notice or order itself before touching your
                books — the exact section cited (73 vs. 74, for instance) and the
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
                Why this matters for Chennai businesses
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                Much of the visible online content on GST litigation is written by
                national law firms targeting a broad audience. A Chennai-based CA firm
                that understands local jurisdictional officers, filing practices at the
                Chennai GST Commissionerate, and the practical realities of appearing
                before Tamil Nadu&apos;s appellate benches offers a genuinely different,
                more accessible option for local businesses — without the overhead of
                a full litigation law firm.
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit space-y-6">
            <div className="rounded-cards bg-royal-violet p-8">
              <h3 className="text-lg font-medium text-white">Received a GST notice?</h3>
              <p className="mt-2 text-sm text-white/80">
                Reply deadlines are strict and non-negotiable. Send us the notice and
                we&apos;ll assess your response window and options within 24 hours.
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
        title="Facing a GST notice or audit?"
        subtitle="Get a chartered accountant's assessment of your case before your reply deadline passes."
      />
    </>
  );
}
