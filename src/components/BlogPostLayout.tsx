import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { JsonLd } from "@/lib/schema";
import { FOUNDER_NAME, SITE_URL } from "@/lib/site";

export default function BlogPostLayout({
  slug,
  title,
  description,
  date,
  faqs,
  children,
}: {
  slug: string;
  title: string;
  description: string;
  date: string;
  faqs?: FAQItem[];
  children: ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: { "@type": "Person", name: FOUNDER_NAME },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <Breadcrumbs items={[{ name: "Insights", href: "/blog" }, { name: title, href: `/blog/${slug}` }]} />

      <section className="bg-royal-violet">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow text-sm text-lemon-zest">
            {new Date(date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
            {" · "}Written by {FOUNDER_NAME}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.13] text-white md:text-5xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{description}</p>
        </div>
      </section>

      <article className="bg-paper py-16">
        <div className="container-page max-w-3xl space-y-8 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-obsidian [&_p]:leading-relaxed [&_p]:text-slate [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-slate [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_ol]:text-slate [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_th]:border-b [&_th]:border-ash [&_th]:bg-fog [&_th]:p-3 [&_th]:text-left [&_th]:font-medium [&_th]:text-obsidian [&_td]:border-b [&_td]:border-ash [&_td]:p-3 [&_td]:text-slate [&_a]:text-royal-violet [&_a]:underline">
          {children}
        </div>
      </article>

      {faqs && faqs.length > 0 && <FAQSection items={faqs} />}
      <CTASection />
    </>
  );
}
