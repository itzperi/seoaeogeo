import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { JsonLd, serviceSchema } from "@/lib/schema";
import { getService } from "@/lib/services";

export type SubService = { name: string; text: string };

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
