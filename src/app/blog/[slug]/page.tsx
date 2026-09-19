import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostLoader, getPostMeta, getPublishedPosts, isPublished } from "@/lib/blog";
import BlogPostLayout from "@/components/BlogPostLayout";

export function generateStaticParams() {
  return getPublishedPosts().map((p) => ({ slug: p.slug }));
}

// Future-dated posts aren't in generateStaticParams, but Next still allows
// on-demand rendering of any dynamic path by default — this is the actual
// gate that stops a not-yet-published post from being reachable if someone
// requests its exact URL directly before its date.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  const loader = getPostLoader(slug);
  if (!meta || !loader || !isPublished(meta.date)) notFound();

  const mod = await loader();
  const Body = mod.default;
  const faqs = mod.meta.faqs;

  return (
    <BlogPostLayout slug={slug} title={meta.title} description={meta.description} date={meta.date} faqs={faqs}>
      <Body />
    </BlogPostLayout>
  );
}
