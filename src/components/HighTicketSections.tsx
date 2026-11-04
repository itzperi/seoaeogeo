import Link from "next/link";
import { EnquireButton } from "@/components/WhatsAppEnquiry";

// Buyer-facing layer for high-ticket pages (growth plan 90, section 7.1):
// who the service is for (each row opens a WhatsApp enquiry pre-filled for
// that buyer), what is deliberately not included, and the questions buyers
// ask before engaging a firm. ICAI copy rules apply: no fees, ratings,
// guarantees or comparisons with other firms.

export type Audience = { who: string; need: string; help: string; enquiry: string };

const LINK = "font-medium text-royal-violet underline underline-offset-2";

const OBJECTIONS = [
  {
    q: "Is this expensive?",
    a: "Fees depend on the entities, filings and reporting you need, so we agree them in a written engagement letter after a scoping call. Government fees and third-party costs are shown separately, at actual. We do not publish price lists, in line with the rules for chartered accountants.",
  },
  {
    q: "Can we do it ourselves?",
    a: "For a single filing, often yes. Recurring work across company law, FEMA, tax, GST and payroll has many dates and linked forms. We explain the full calendar first, and you decide what to keep in-house and what to hand over.",
  },
  {
    q: "Why not a cheaper adviser?",
    a: "Compare the scope, not only the amount: who files, who reviews, who answers when a deadline or notice arrives, and whether the adviser is a chartered accountant bound by ICAI's code of ethics. Ask any adviser, including us, for a written scope and their registration details.",
  },
  {
    q: "What if our case is complicated?",
    a: "Complex cases start with a short review of the documents. We tell you plainly what we can handle, what needs a specialist elsewhere and what your home adviser must decide. We do not promise outcomes.",
  },
];

export default function HighTicketSections({
  audiences,
  notIncluded,
  objections = true,
}: {
  /** Buyer rows; each gets its own pre-filled WhatsApp enquiry. */
  audiences?: Audience[];
  /** Honest scope limits, e.g. resident director or foreign-law advice. */
  notIncluded: string[];
  objections?: boolean;
}) {
  return (
    <>
      {audiences && audiences.length > 0 && (
        <>
          <h2 className="mt-14 text-2xl text-obsidian">Who is this service for?</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">
            Most clients for this work fall into one of these groups. Pick yours to start a WhatsApp conversation with the
            details already typed.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {audiences.map((a) => (
              <div key={a.who} className="flex flex-col rounded-cards border border-ash bg-paper p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-medium text-obsidian">{a.who}</h3>
                <p className="mt-2 text-sm text-slate">
                  <span className="font-medium text-obsidian">The need:</span> {a.need}
                </p>
                <p className="mt-1 flex-1 text-sm text-slate">
                  <span className="font-medium text-obsidian">What we do:</span> {a.help}
                </p>
                <EnquireButton
                  service={a.enquiry}
                  placement="ht-audience"
                  className="mt-4 inline-flex min-h-[40px] items-center self-start rounded-full border border-carbon bg-[#25D366] px-4 text-xs font-bold uppercase tracking-[0.032em] text-carbon"
                >
                  Ask about this on WhatsApp
                </EnquireButton>
              </div>
            ))}
          </div>
        </>
      )}

      <h2 className="mt-14 text-2xl text-obsidian">What is not included?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Knowing the limits up front avoids surprises later. These are outside our scope for this service:
      </p>
      <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-slate">
        {notIncluded.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {objections && (
        <>
          <h2 className="mt-14 text-2xl text-obsidian">What do clients ask before engaging us?</h2>
          <dl className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {OBJECTIONS.map((o) => (
              <div key={o.q} className="rounded-cards border border-ash bg-paper p-6">
                <dt className="font-medium text-obsidian">{o.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate">{o.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 max-w-2xl text-sm text-slate">
            The steps from first call to engagement letter are set out on{" "}
            <Link href="/how-we-work" className={LINK}>
              how we work with clients
            </Link>
            .
          </p>
        </>
      )}
    </>
  );
}
