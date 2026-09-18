import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { JsonLd, howToSchema, serviceSchema } from "@/lib/schema";
import { getService } from "@/lib/services";

export type SubService = { name: string; text: string };
export type HowToStep = { name: string; text: string };

export default function ServicePageTemplate({
  pageUrl,
  serviceType,
  crumbLabel,
  crumbHref,
  eyebrow,
  h1,
  subhead,
  intro,
  introHeading,
  subServices,
  subServicesHeading,
  howTo,
  faqs,
  relatedSlugs = [],
}: {
  pageUrl: string;
  serviceType: string;
  crumbLabel: string;
  crumbHref: string;
  eyebrow: string;
  h1: string;
  subhead: string;
  intro: string;
  introHeading: string;
  subServices: SubService[];
  subServicesHeading: string;
  howTo?: { heading: string; steps: HowToStep[] };
  faqs: FAQItem[];
  relatedSlugs?: string[];
}) {
  const related = relatedSlugs.map(getService).filter((s): s is NonNullable<typeof s> => Boolean(s));
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: h1,
          description: subhead,
          url: pageUrl,
          serviceType,
        })}
      />
      {howTo && (
        <JsonLd
          data={howToSchema({
            name: h1,
            description: subhead,
            steps: howTo.steps,
          })}
        />
      )}
      <Breadcrumbs items={[{ name: crumbLabel, href: crumbHref }]} />
      <PageHero eyebrow={eyebrow} h1={h1} subhead={subhead} />

      <section className="bg-paper py-16">
        <div className="container-page">
          <h2 className="text-2xl text-obsidian">{introHeading}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">{intro}</p>

          <h2 className="mt-14 text-2xl text-obsidian">
            {subServicesHeading}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subServices.map((s) => (
              <div
                key={s.name}
                className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]"
              >
                <h3 className="font-medium text-obsidian">{s.name}</h3>
                <p className="mt-2 text-sm text-slate">{s.text}</p>
              </div>
            ))}
          </div>

          {howTo && (
            <>
              <h2 className="mt-14 text-2xl text-obsidian">{howTo.heading}</h2>
              <ol className="mt-6 space-y-4">
                {howTo.steps.map((step, i) => (
                  <li key={step.name} className="flex gap-4 rounded-cards border border-ash bg-paper p-6 shadow-[var(--shadow-card)]">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-royal-violet text-sm font-medium text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-medium text-obsidian">{step.name}</p>
                      <p className="mt-1 text-sm text-slate">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </>
          )}

          {related.length > 0 && (
            <>
              <h2 className="mt-14 text-2xl text-obsidian">Related services</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {related.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="rounded-cards border border-ash bg-paper p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5"
                  >
                    <h3 className="font-medium text-obsidian">{s.name}</h3>
                    <span className="mt-2 inline-block text-sm font-medium text-royal-violet">Learn more →</span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <FAQSection items={faqs} />
      <CTASection />
    </>
  );
}
