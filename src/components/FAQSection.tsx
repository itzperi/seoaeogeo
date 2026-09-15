import { JsonLd, faqSchema } from "@/lib/schema";

export type FAQItem = { question: string; answer: string };

export default function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <section className="container-page py-16">
      <JsonLd data={faqSchema(items)} />
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold-600)]">
        FAQ
      </p>
      <h2 className="mt-3 text-3xl font-medium text-[var(--color-navy-900)]">
        Frequently asked questions
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.question}
            className="rounded-[var(--radius-card)] border border-[var(--color-ash)] bg-[var(--color-paper)] p-6 shadow-[var(--shadow-card)]"
          >
            <h3 className="text-base font-semibold text-[var(--color-ink)]">
              {item.question}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-slate)]">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
