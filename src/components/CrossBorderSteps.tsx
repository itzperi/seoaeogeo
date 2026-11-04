import TrackedAnchor from "@/components/TrackedAnchor";
import { BOOKING_LINK, WHATSAPP_LINK } from "@/lib/site";

// Three-step start for foreign parent companies and overseas founders.
// Shown on the foreign subsidiary, foreign-founder and FEMA pages. Makes no
// promise beyond what the engagement letter will set out.

const ZONES: Record<string, string> = {
  us: "US Eastern or Pacific time",
  uk: "UK time",
  uae: "UAE time",
  singapore: "Singapore time",
  any: "your time zone",
};

export default function CrossBorderSteps({ country = "any", service }: { country?: keyof typeof ZONES; service: string }) {
  const zone = ZONES[country];
  const steps = [
    {
      name: "15-minute cross-border scoping call",
      text: `A call with a chartered accountant at a time that suits ${zone}. We cover the structure you have in mind, who the shareholders and directors will be, and the dates that matter to your parent company.`,
    },
    {
      name: "Written scope and roadmap before you sign",
      text: "You receive the scope in writing: the Indian entity, the FEMA and RBI filings, tax and GST registrations, the first-year calendar, and the document list with the apostille or attestation your country needs.",
    },
    {
      name: "Tracked milestones to FC-GPR",
      text: "A named engagement lead tracks each milestone, from incorporation and the bank account to the capital inflow and the FC-GPR filing on the RBI FIRMS portal, with written updates by email or WhatsApp, or the channel agreed in the engagement letter.",
    },
  ];
  const wa = `${WHATSAPP_LINK}?text=${encodeURIComponent(`Hi, I'd like a 15-minute scoping call about ${service}.`)}`;
  return (
    <section aria-labelledby="cross-border-steps" className="mt-14">
      <h2 id="cross-border-steps" className="text-2xl text-obsidian">
        How do we start with a company or founder outside India?
      </h2>
      <ol className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.name} className="rounded-cards border border-ash bg-paper p-6 shadow-[var(--shadow-card)]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-royal-violet text-sm font-medium text-white">
              {i + 1}
            </span>
            <p className="mt-3 font-medium text-obsidian">{s.name}</p>
            <p className="mt-1 text-sm leading-relaxed text-slate">{s.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-6 flex flex-wrap gap-3">
        <TrackedAnchor
          href={BOOKING_LINK}
          action="book"
          placement="cross-border-steps"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center rounded-full bg-carbon px-5 text-sm font-bold text-white"
        >
          Book a 15-Minute Consultation
        </TrackedAnchor>
        <TrackedAnchor
          href={wa}
          action="whatsapp"
          placement="cross-border-steps"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center rounded-full border border-carbon bg-white px-5 text-sm font-bold text-carbon"
        >
          Message us on WhatsApp
        </TrackedAnchor>
      </div>
    </section>
  );
}
