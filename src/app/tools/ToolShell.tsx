import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { JsonLd, faqSchema, graph, localBusinessBreadcrumb } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export const LINK = "text-royal-violet underline underline-offset-2";
export const H2 = "mt-14 text-2xl text-obsidian";
export const P = "mt-4 max-w-3xl leading-relaxed text-slate";

export function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
      <table className="w-full text-left text-sm">
        <thead className="bg-carbon text-white">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ash bg-paper">
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (
                <td key={i} className={`px-4 py-3 align-top ${i === 0 ? "font-medium text-obsidian" : "text-slate"}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function EstimateNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 max-w-3xl rounded-cards border border-carbon bg-sunburst p-5 text-sm leading-relaxed text-carbon">
      {children}
    </p>
  );
}

export function ServiceCta({ links, children }: { links: { href: string; label: string }[]; children: ReactNode }) {
  return (
    <div className="mt-8 rounded-cards border border-ash bg-fog p-6">
      <p className="max-w-3xl leading-relaxed text-slate">{children}</p>
      <ul className="mt-4 flex flex-wrap gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="inline-flex min-h-[44px] items-center rounded-full border border-carbon bg-white px-5 text-sm font-bold text-carbon transition-colors hover:bg-lavender"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function webApplicationNode(opts: { path: string; name: string; description: string }) {
  return {
    "@type": "WebApplication",
    "@id": `${SITE_URL}${opts.path}#webapp`,
    name: opts.name,
    url: `${SITE_URL}${opts.path}`,
    description: opts.description,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    inLanguage: "en-IN",
    isAccessibleForFree: true,
    provider: { "@id": "https://www.csrushil.com/#organization" },
  };
}

// Shared page frame: one @graph (WebPage, tool node, FAQPage, BreadcrumbList),
// breadcrumbs, hero with lead answer, main content, FAQs and a CTA band.
export default function ToolShell({
  path,
  title,
  description,
  eyebrow,
  h1,
  lead,
  subhead,
  crumbs,
  toolNodes,
  faqs,
  ctaService,
  children,
}: {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: ReactNode;
  subhead: string;
  crumbs: Crumb[];
  toolNodes: object[];
  faqs: FAQItem[];
  ctaService: string;
  children: ReactNode;
}) {
  const url = `${SITE_URL}${path}`;
  const full = [{ name: "Home", href: "/" }, ...crumbs];
  const data = graph([
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": "https://www.csrushil.com/#organization" },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "#lead-answer"] },
    },
    ...toolNodes,
    { ...faqSchema(faqs), "@id": `${url}#faq` },
    {
      ...localBusinessBreadcrumb(full.map((c) => ({ name: c.name, url: `${SITE_URL}${c.href}` }))),
      "@id": `${url}#breadcrumb`,
    },
  ]);
  return (
    <>
      <JsonLd data={data} />
      <Breadcrumbs items={crumbs} schema={false} />
      <PageHero schema={false} eyebrow={eyebrow} h1={h1} lead={lead} subhead={subhead} service={ctaService} />
      <section className="bg-paper py-16">
        <div className="container-page">
          <div className="max-w-4xl">{children}</div>
        </div>
      </section>
      <FAQSection items={faqs} schema={false} />
      <CTASection showForm={false} service={ctaService} />
    </>
  );
}
