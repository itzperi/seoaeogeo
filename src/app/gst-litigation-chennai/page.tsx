import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { JsonLd, serviceSchema } from "@/lib/schema";
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
  { stage: "Appeal before Appellate Authority", text: "If the order is adverse, we file a first appeal (Form GST APL-01) before the Joint/Additional Commissioner (Appeals) within 3 months." },
  { stage: "GST Appellate Tribunal (GSTAT)", text: "For unresolved disputes, we represent you before the GST Appellate Tribunal — the next level of appeal after the Appellate Authority." },
  { stage: "ITC & Refund Dispute Defense", text: "We build the factual and documentary case to defend legitimate ITC claims and pursue refund entitlements through litigation where needed." },
];

const FAQS = [
  {
    question: "Can a Chartered Accountant represent me in GST litigation?",
    answer:
      "Yes. Under Section 116 of the CGST Act, a Chartered Accountant is a recognised 'authorised representative' and can independently represent taxpayers before GST officers, the Appellate Authority, and the GST Appellate Tribunal (GSTAT) — you do not need a separate advocate for most GST proceedings.",
  },
  {
    question: "What should I do if I receive a GST show-cause notice?",
    answer:
      "Do not ignore it. Note the response deadline (usually 30 days), gather related invoices, e-way bills, and returns, and get a professional reply drafted. A poorly drafted or missed reply can lead to an ex-parte order confirming the entire demand.",
  },
  {
    question: "How long does a GST appeal take?",
    answer:
      "A first appeal before the Appellate Authority typically takes 6–18 months depending on the jurisdiction's case backlog. GSTAT timelines vary further since the tribunal benches are still being operationalised in several states; we advise clients realistically at each stage rather than promising fixed timelines.",
  },
  {
    question: "Is there a pre-deposit required to file a GST appeal?",
    answer:
      "Yes. To file a first appeal you must pre-deposit 10% of the disputed tax amount (subject to a cap), and a further 10% for a second appeal to GSTAT. We factor this into your litigation strategy and cash-flow planning upfront.",
  },
  {
    question: "Do you handle GST litigation for businesses outside Chennai?",
    answer:
      "Our core practice is Chennai and Tamil Nadu jurisdiction, where we have direct familiarity with local GST officers and appellate benches, but we also support clients with pan-India GST notices through documentation review and drafting.",
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
              <p className="mt-4 leading-relaxed text-slate">
                GST litigation covers every stage of a tax dispute with the GST
                department — from replying to a show-cause notice, through
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
                The fix is rarely "pay the demand" — it's proving the
                mismatch sits with the supplier's filing, which requires
                pulling GSTR-2B history and correspondence, not just
                arguing the point.
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
      <CTASection
        title="Facing a GST notice or audit?"
        subtitle="Get a chartered accountant's assessment of your case before your reply deadline passes."
      />
    </>
  );
}
