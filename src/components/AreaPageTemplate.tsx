import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { JsonLd, serviceSchema } from "@/lib/schema";
import { getService } from "@/lib/services";

export default function AreaPageTemplate({
  pageUrl,
  locality,
  crumbHref,
  h1,
  subhead,
  distanceNote,
  localContext,
  relevantServices,
  faqs,
  furtherReading,
}: {
  pageUrl: string;
  locality: string;
  crumbHref: string;
  h1: string;
  subhead: string;
  distanceNote: string;
  localContext: string[];
  relevantServices: { slug: string; why: string }[];
  faqs: FAQItem[];
  furtherReading?: { slug: string; title: string }[];
}) {
  const services = relevantServices
    .map((r) => ({ ...getService(r.slug), why: r.why }))
    .filter((s): s is NonNullable<ReturnType<typeof getService>> & { why: string } => Boolean(s?.slug));

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Chartered Accountant Services for ${locality}, Chennai`,
          description: subhead,
          url: pageUrl,
          serviceType: "Chartered Accountancy Services",
          areaServedName: `${locality}, Chennai`,
        })}
      />
      <Breadcrumbs items={[{ name: `Chartered Accountant — ${locality}`, href: crumbHref }]} />
      <PageHero eyebrow={`Chartered Accountant · ${locality}, Chennai`} h1={h1} subhead={subhead} />

      <section className="bg-paper py-16">
        <div className="container-page">
          <p className="rounded-cards border border-royal-violet/20 bg-lilac-mist p-5 text-sm leading-relaxed text-obsidian">
            {distanceNote}
          </p>

          <h2 className="mt-12 text-2xl text-obsidian">
            Serving {locality}
          </h2>
          <div className="mt-4 max-w-2xl space-y-4 leading-relaxed text-slate">
            {localContext.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <h2 className="mt-14 text-2xl text-obsidian">
            Services most relevant to {locality} businesses
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5"
              >
                <h3 className="font-medium text-obsidian">{s.name}</h3>
                <p className="mt-2 text-sm text-slate">{s.why}</p>
              </Link>
            ))}
          </div>

          {furtherReading && furtherReading.length > 0 && (
            <>
              <h2 className="mt-14 text-2xl text-obsidian">From our blog</h2>
              <ul className="mt-4 space-y-2">
                {furtherReading.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-medium text-royal-violet underline underline-offset-2"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      <FAQSection items={faqs} />
      <CTASection
        title={`Chartered accountant serving ${locality}, Chennai`}
        subtitle="Book a free consultation — in person at our Anna Nagar office, or virtually."
      />
    </>
  );
}
