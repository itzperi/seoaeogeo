import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import GoogleProfileStrip from "@/components/GoogleProfileStrip";
import { JsonLd, serviceSchema, speakableSchema } from "@/lib/schema";
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
  directAnswer,
  sections = [],
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
  /** 40–60 word answer to "Is there a CA firm near <locality>?" — the passage snippets and AI answers quote. */
  directAnswer?: string;
  /** Extra H2 sections with rich body (inline links), rendered after the local context. */
  sections?: { heading: string; body: ReactNode }[];
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
      {directAnswer && <JsonLd data={speakableSchema(["#direct-answer"])} />}
      <Breadcrumbs items={[{ name: `Chartered Accountant — ${locality}`, href: crumbHref }]} />
      <PageHero eyebrow={`Chartered Accountant · ${locality}, Chennai`} h1={h1} subhead={subhead} reviewedPath={crumbHref} service={`CA services in ${locality}`} />

      <section className="bg-paper py-16">
        <div className="container-page">
          {directAnswer && (
            <p id="direct-answer" className="mb-6 max-w-2xl text-lg leading-relaxed text-carbon">
              {directAnswer}
            </p>
          )}
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

          {sections.map((sec) => (
            <div key={sec.heading}>
              <h2 className="mt-12 text-2xl text-obsidian">{sec.heading}</h2>
              <div className="mt-4 max-w-2xl leading-relaxed text-slate">{sec.body}</div>
            </div>
          ))}

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
      <GoogleProfileStrip />
      <CTASection
        title={`Chartered accountant serving ${locality}, Chennai`}
        subtitle="Message us on WhatsApp, call, or visit our Anna Nagar office."
        service={`CA services in ${locality}`}
      />
    </>
  );
}
