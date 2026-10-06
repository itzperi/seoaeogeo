import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import GoogleProfileStrip from "@/components/GoogleProfileStrip";
import { JsonLd, howToSchema, serviceSchema, speakableSchema } from "@/lib/schema";
import { getPostMeta, isPublished } from "@/lib/blog";
import { getService } from "@/lib/services";

// Pre-selects the form's first question from the page being viewed.
const FORM_SERVICE_BY_PAGE: Record<string, string> = {
  "/transfer-pricing-audit": "Transfer pricing audit",
  "/tax-audit-chennai": "Tax audit / statutory audit",
  "/statutory-audit-chennai": "Tax audit / statutory audit",
  "/audit-and-assurance": "Tax audit / statutory audit",
  "/direct-tax": "Income tax, notices or scrutiny",
  "/income-tax-return-filing-chennai": "Income tax, notices or scrutiny",
  "/rera": "RERA compliance",
  "/company-registration-chennai": "Company / LLP registration (incl. foreign company in India)",
  "/llp-registration-chennai": "Company / LLP registration (incl. foreign company in India)",
  "/nri-tax-services": "NRI tax (UAE, UK, USA and others)",
  "/nri-tax-services-uae": "NRI tax (UAE, UK, USA and others)",
  "/nri-tax-services-uk": "NRI tax (UAE, UK, USA and others)",
  "/nri-tax-services-usa": "NRI tax (UAE, UK, USA and others)",
  "/nri-property-sale-tds-chennai": "NRI tax (UAE, UK, USA and others)",
  "/gst-notice-reply-chennai": "GST notice, litigation or appeal",
  "/income-tax-notice-reply-chennai": "Income tax, notices or scrutiny",
  "/company-registration-india-for-foreigners": "Company / LLP registration (incl. foreign company in India)",
  "/india-subsidiary-compliance-cfo": "Virtual / Fractional CFO",
  "/outsourced-accounting-for-cpa-firms": "Outsourced accounting / bookkeeping",
  "/outsourced-accounting-for-uk-accountants": "Outsourced accounting / bookkeeping",
  "/bookkeeping-services-chennai": "Outsourced accounting / bookkeeping",
  "/goods-and-services-tax": "GST notice, litigation or appeal",
  "/roc-compliances": "ROC, payroll or other compliance",
  "/payroll-services-chennai": "ROC, payroll or other compliance",
  "/management-consultancy": "Virtual / Fractional CFO",
  "/opc-registration-chennai": "Company / LLP registration (incl. foreign company in India)",
  "/partnership-firm-registration-chennai": "Company / LLP registration (incl. foreign company in India)",
  "/proprietorship-registration-chennai": "Company / LLP registration (incl. foreign company in India)",
  "/section-8-company-registration-chennai": "Company / LLP registration (incl. foreign company in India)",
  "/startup-india-registration-chennai": "Company / LLP registration (incl. foreign company in India)",
  "/gst-return-filing-chennai": "ROC, payroll or other compliance",
  "/tds-return-filing-chennai": "ROC, payroll or other compliance",
  "/income-tax-assessment-appeals-chennai": "Income tax, notices or scrutiny",
  "/form-15ca-15cb-chennai": "NRI tax (UAE, UK, USA and others)",
  "/fema-rbi-compliance": "ROC, payroll or other compliance",
  "/annual-compliance-package": "ROC, payroll or other compliance",
  "/accounting-outsourcing-chennai": "Outsourced accounting / bookkeeping",
  "/digital-signature-certificate-chennai": "ROC, payroll or other compliance",
  "/trademark-registration-chennai": "Something else",
  "/iec-registration-chennai": "ROC, payroll or other compliance",
  "/fssai-license-chennai": "ROC, payroll or other compliance",
};

export type SubService = { name: string; text: string };
export type HowToStep = { name: string; text: string };
export type Citation = { label: string; href: string };
export type RelatedQuestion = { question: string; href: string };
export type KeyFact = { label: string; value: string };

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
  citation,
  subServices,
  subServicesHeading,
  howTo,
  faqs,
  relatedQuestions = [],
  relatedSlugs = [],
  parentCrumb,
  keyFacts = [],
  relatedPosts = [],
  children,
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
  citation?: Citation;
  subServices: SubService[];
  subServicesHeading: string;
  howTo?: { heading: string; steps: HowToStep[] };
  faqs: FAQItem[];
  relatedQuestions?: RelatedQuestion[];
  relatedSlugs?: string[];
  /** Hub page this page sits under, e.g. Company registration → OPC. */
  parentCrumb?: Crumb;
  /** 3–6 row "Key facts" table at the top: time, form, who needs it, deadline/penalty. */
  keyFacts?: KeyFact[];
  /** Blog slugs shown as "Related guides" (3–5). Unpublished/unknown slugs are skipped. */
  relatedPosts?: string[];
  /** Extra page-specific sections (tables, decision guides), rendered after the process steps. */
  children?: ReactNode;
}) {
  const related = relatedSlugs.map(getService).filter((s): s is NonNullable<typeof s> => Boolean(s));
  const guides = relatedPosts
    .map(getPostMeta)
    .filter((p): p is NonNullable<typeof p> => Boolean(p) && isPublished(p!.date));
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
      <JsonLd data={speakableSchema(["#direct-answer"])} />
      <Breadcrumbs items={[...(parentCrumb ? [parentCrumb] : []), { name: crumbLabel, href: crumbHref }]} />
      <PageHero eyebrow={eyebrow} h1={h1} subhead={subhead} reviewedPath={crumbHref} />

      <section className="bg-paper py-16">
        <div className="container-page">
          {keyFacts.length > 0 && (
            <div className="mb-12 max-w-3xl overflow-hidden rounded-cards border border-carbon">
              <h2 className="bg-carbon px-5 py-3 text-sm font-bold uppercase tracking-[0.032em] text-white">Key facts</h2>
              <dl className="divide-y divide-ash bg-paper">
                {keyFacts.map((f) => (
                  <div key={f.label} className="grid grid-cols-1 gap-1 px-5 py-3 sm:grid-cols-[200px_1fr] sm:gap-4">
                    <dt className="text-sm font-medium text-obsidian">{f.label}</dt>
                    <dd className="text-sm text-slate">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
          <h2 className="text-2xl text-obsidian">{introHeading}</h2>
          <p id="direct-answer" className="mt-4 max-w-2xl leading-relaxed text-slate">
            {intro}{" "}
            {citation && (
              <>
                For current rules and procedures, see the{" "}
                <a
                  href={citation.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-royal-violet underline underline-offset-2"
                >
                  {citation.label}
                </a>
                .
              </>
            )}
          </p>

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

          {children}

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

      {guides.length > 0 && (
        <section className="bg-paper pb-12">
          <div className="container-page">
            <h2 className="text-2xl text-obsidian">Related guides</h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link href={`/blog/${g.slug}`} className="text-sm font-medium text-royal-violet underline underline-offset-2">
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <FAQSection items={faqs} />

      {relatedQuestions.length > 0 && (
        <section className="bg-paper py-12">
          <div className="container-page">
            <h2 className="text-xl text-obsidian">People also ask</h2>
            <ul className="mt-4 space-y-2">
              {relatedQuestions.map((q) => (
                <li key={q.question}>
                  <Link
                    href={q.href}
                    className="text-sm font-medium text-royal-violet underline underline-offset-2"
                  >
                    {q.question}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <GoogleProfileStrip service={crumbLabel} />
      <CTASection formService={FORM_SERVICE_BY_PAGE[crumbHref]} />
    </>
  );
}
