import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { getPublishedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Tax & Compliance Insights Blog",
  description:
    "Practical guidance on GST, income tax, company compliance, and business registration for Chennai businesses, from C S Rushil & Co.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getPublishedPosts().sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <Breadcrumbs items={[{ name: "Insights", href: "/blog" }]} />
      <PageHero
        eyebrow="Insights"
        h1="Tax & compliance insights for Chennai businesses"
        subhead="Practical, Chennai-specific guidance on GST, incorporation, and compliance — written by our team, not generic filler."
      />
      <section className="bg-paper py-16">
        <div className="container-page grid grid-cols-1 gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5"
            >
              <p className="eyebrow text-xs text-slate">
                {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <h2 className="mt-2 text-lg font-medium text-obsidian">{post.title}</h2>
              <p className="mt-2 text-sm text-slate">{post.excerpt}</p>
              <span className="mt-4 inline-block text-sm font-medium text-royal-violet">Read more →</span>
            </Link>
          ))}
        </div>
      </section>
      <CTASection title="Have a compliance question?" subtitle="Book a free consultation instead of searching for a generic answer." />
    </>
  );
}
