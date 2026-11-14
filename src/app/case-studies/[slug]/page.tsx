import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import QuoteProcess from "@/components/QuoteProcess";
import AboutTheCA from "@/components/AboutTheCA";
import CTASection from "@/components/CTASection";
import { PUBLISHED_CASE_STUDIES, getCaseStudy } from "@/lib/case-studies";
import { getService } from "@/lib/services";

// Case-study template (owner's brief, Task 4.4): situation, work done,
// outcome. No client names or amounts. Only entries marked published in
// src/lib/case-studies.ts get a page; everything else is a 404, so the
// template stays unpublished until real content exists.

export function generateStaticParams() {
  return PUBLISHED_CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: { absolute: cs.title },
    description: cs.description,
    alternates: { canonical: `/case-studies/${slug}` },
    openGraph: {
      title: cs.title,
      description: cs.description,
      url: `/case-studies/${slug}`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}

const H2 = "mt-12 text-2xl text-obsidian";

function Block({ heading, items }: { heading: string; items: string[] }) {
  return (
    <>
      <h2 className={H2}>{heading}</h2>
      {items.map((t) => (
        <p key={t.slice(0, 40)} className="mt-4 max-w-3xl leading-relaxed text-slate">
          {t}
        </p>
      ))}
    </>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();
  const service = getService(cs.servicePath.replace(/^\//, ""));

  return (
    <>
      <Breadcrumbs items={[{ name: cs.title, href: `/case-studies/${slug}` }]} />
      <PageHero eyebrow={`Case study · ${cs.clientType}`} h1={cs.title} subhead={cs.description} />
      <section className="bg-paper py-16">
        <div className="container-page">
          <p className="max-w-3xl text-sm text-slate">
            Client details are withheld and no amounts are shown. Every engagement is different, and this account
            describes one engagement, not a promised result.
          </p>
          <Block heading="What was the situation?" items={cs.situation} />
          <Block heading="What work did we do?" items={cs.workDone} />
          <Block heading="What was the outcome?" items={cs.outcome} />
          {service && (
            <p className="mt-10 text-sm">
              Related service:{" "}
              <Link href={cs.servicePath} className="font-medium text-royal-violet underline underline-offset-2">
                {service.name}
              </Link>
            </p>
          )}
          <QuoteProcess />
          <AboutTheCA />
        </div>
      </section>
      <CTASection />
    </>
  );
}
