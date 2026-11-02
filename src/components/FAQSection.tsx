import { JsonLd, faqSchema } from "@/lib/schema";

export type FAQItem = { question: string; answer: string };

// schema={false} when the page emits its FAQPage inside its own @graph.
export default function FAQSection({ items, schema = true }: { items: FAQItem[]; schema?: boolean }) {
  return (
    <section className="bg-fog py-16">
      <div className="container-page">
        {schema && <JsonLd data={faqSchema(items)} />}
        <p className="eyebrow text-sm text-slate">FAQ</p>
        <h2 className="mt-3 text-3xl text-obsidian">
          Frequently asked questions
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.question}
              className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]"
            >
              <h3 className="text-base font-semibold text-obsidian">
                {item.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
