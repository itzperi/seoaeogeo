import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContentAttribution from "@/components/ContentAttribution";
import { getContentReview } from "@/lib/content-reviews";
import { JsonLd, ORG_ID, PERSON_ID } from "@/lib/schema";
import { BUSINESS_NAME, SITE_URL } from "@/lib/site";

// The money page each post feeds, picked from its slug. Order matters:
// GST disputes before general GST, company topics before the catch-all.
const MONEY_PAGE_RULES: { test: RegExp; href: string; anchor: string; pitch: string }[] = [
  {
    test: /gstat|itc-|eway|74a|show-cause|gst-.*notice|litigation|detention|refund-rejection/,
    href: "/gst-litigation-chennai",
    anchor: "GST Litigation & Appeals in Chennai",
    pitch: "Received a show-cause notice or demand order? We draft replies and argue appeals up to the GSTAT Chennai Bench.",
  },
  {
    test: /cfo|bookkeeping|cash-flow|outgrown|budget/,
    href: "/virtual-cfo-services",
    anchor: "Virtual CFO in Chennai",
    pitch: "Monthly MIS, cash-flow forecasting and board reporting, led by a chartered accountant.",
  },
  {
    test: /company|incorporat|spice|moa|din-and|inc-20a|share-allot|director|registered-office|stamp-duty|first-board|private-limited|esop|agile|paid-up-capital|llp|opc|shareholders|roc-chennai|startups/,
    href: "/private-limited-company-incorporation-chennai",
    anchor: "Private Limited Company Registration in Chennai",
    pitch: "SPICe+ incorporation with ROC Chennai: DSC, DIN, name approval, e-MoA/e-AoA and PAN/TAN.",
  },
  {
    test: /gst/,
    href: "/goods-and-services-tax",
    anchor: "GST registration and returns in Chennai",
    pitch: "Registration, monthly returns, reconciliations and annual returns.",
  },
];

function moneyPageFor(slug: string) {
  return (
    MONEY_PAGE_RULES.find((r) => r.test.test(slug)) ?? {
      href: "/",
      anchor: "CA firm in Chennai",
      pitch: "Tax, GST, audit and company compliance from our Anna Nagar office.",
    }
  );
}

export default function BlogPostLayout({
  slug,
  title,
  description,
  date,
  updated,
  faqs,
  summary,
  children,
}: {
  slug: string;
  title: string;
  description: string;
  date: string;
  /** Last substantive revision (YYYY-MM-DD); defaults to the publish date. */
  updated?: string;
  faqs?: FAQItem[];
  /** 40–60 word direct answer rendered as #lead-answer. */
  summary?: string;
  children: ReactNode;
}) {
  const money = moneyPageFor(slug);
  const review = getContentReview(`/blog/${slug}`, updated ?? date);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: `${SITE_URL}/blog/${slug}/opengraph-image`,
    datePublished: date,
    dateModified: updated ?? date,
    author: { "@type": "Organization", "@id": ORG_ID, name: BUSINESS_NAME, url: `${SITE_URL}/about-us` },
    ...(review && { reviewedBy: { "@id": PERSON_ID }, lastReviewed: review.reviewedOn }),
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
    ...(summary && { speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "#lead-answer"] } }),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <Breadcrumbs items={[{ name: "Insights", href: "/blog" }, { name: title, href: `/blog/${slug}` }]} />

      <section className="border-b border-carbon bg-sky-wash">
        <div className="container-page py-14 md:py-20">
          <p className="sticker-tag bg-sunburst">
            {new Date(date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
            {updated && updated !== date && (
              <>
                {" · "}Updated{" "}
                {new Date(updated).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
              </>
            )}
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl text-carbon md:text-7xl">{title}</h1>
          <ContentAttribution path={`/blog/${slug}`} updated={updated ?? date} />
          <p className="mt-6 max-w-2xl text-lg text-carbon">{description}</p>
          {summary && (
            <p id="lead-answer" className="mt-6 max-w-3xl rounded-cards border border-carbon bg-white p-5 text-base leading-relaxed text-carbon">
              <strong>In short: </strong>
              {summary}
            </p>
          )}
        </div>
      </section>

      <aside aria-label="Need CA assistance?" className="bg-paper pt-10">
        <div className="container-page max-w-3xl">
          <div className="rounded-cards border border-carbon bg-sunburst p-5 text-sm leading-relaxed text-carbon">
            <p className="font-bold uppercase tracking-[0.032em]">Need CA assistance?</p>
            <p className="mt-1">
              {money.pitch} See{" "}
              <Link href={money.href} className="font-semibold underline underline-offset-2">
                {money.anchor}
              </Link>
              .
            </p>
          </div>
        </div>
      </aside>

      <article className="bg-paper py-16">
        <div className="container-page max-w-3xl space-y-8 [&_h2]:mt-12 [&_h2]:text-4xl [&_h2]:leading-[0.95] [&_h3]:text-xl [&_h2]:text-obsidian [&_p]:leading-relaxed [&_p]:text-slate [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-slate [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_ol]:text-slate [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_th]:border-b [&_th]:border-ash [&_th]:bg-fog [&_th]:p-3 [&_th]:text-left [&_th]:font-medium [&_th]:text-obsidian [&_td]:border-b [&_td]:border-ash [&_td]:p-3 [&_td]:text-slate [&_a]:text-royal-violet [&_a]:underline">
          {children}
        </div>
      </article>

      {faqs && faqs.length > 0 && <FAQSection items={faqs} />}
      <CTASection />
    </>
  );
}
