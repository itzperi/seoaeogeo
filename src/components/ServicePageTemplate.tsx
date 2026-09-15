import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { JsonLd, serviceSchema } from "@/lib/schema";

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
}) {
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

      <section className="container-page py-16">
        <h2 className="text-2xl font-medium text-[var(--color-navy-900)]">{introHeading}</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-slate)]">{intro}</p>

        <h2 className="mt-14 text-2xl font-medium text-[var(--color-navy-900)]">
          {subServicesHeading}
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subServices.map((s) => (
            <div key={s.name} className="rounded-[var(--radius-card)] border border-[var(--color-ash)] bg-[var(--color-paper)] p-6 shadow-[var(--shadow-card)]">
              <h3 className="font-semibold text-[var(--color-navy-900)]">{s.name}</h3>
              <p className="mt-2 text-sm text-[var(--color-slate)]">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection items={faqs} />
      <CTASection />
    </>
  );
}
