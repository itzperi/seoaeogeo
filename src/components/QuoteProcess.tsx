import { BOOKING_LINK } from "@/lib/site";

// "How our quote works" (owner's brief, Task 4.1). States the process only:
// no amounts, ranges, "from" prices or discounts, here or anywhere else.
const STEPS = [
  {
    name: "Free 15-minute consultation",
    text: "Tell a chartered accountant what you need, in person at our Anna Nagar office, by phone or on a video call.",
  },
  {
    name: "Itemised quote",
    text: "We send a written quote that lists government fees separately from our professional fees, so you can see exactly what goes to the government and what is for our work.",
  },
  {
    name: "Your approval first",
    text: "No work starts until you approve the quote. If the scope changes later, we send a revised quote before doing the extra work.",
  },
];

export default function QuoteProcess({ service }: { service?: string }) {
  return (
    <section aria-labelledby="quote-process" className="mt-14 max-w-3xl">
      <h2 id="quote-process" className="text-2xl text-obsidian">
        {service ? `How does our quote work for ${service}?` : "How does our quote work?"}
      </h2>
      <p className="mt-4 leading-relaxed text-slate">
        Every engagement follows the same three steps, and we do not publish fees on the website. Your quote depends on
        the scope of the work, such as the entity type, transaction volume and the filings involved.
      </p>
      <ol className="mt-6 space-y-4">
        {STEPS.map((s, i) => (
          <li key={s.name} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-carbon bg-sunburst text-sm font-bold text-obsidian">
              {i + 1}
            </span>
            <div>
              <p className="font-medium text-obsidian">{s.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <a
        href={BOOKING_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex min-h-[44px] items-center rounded-full border border-carbon bg-carbon px-6 text-sm font-bold uppercase tracking-[0.032em] text-white hover:opacity-85"
      >
        Book the free 15-minute consultation
      </a>
    </section>
  );
}
