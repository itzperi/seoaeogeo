import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_INDEX, getPostLoader, getPostMeta } from "@/lib/blog";
import BlogPostLayout from "@/components/BlogPostLayout";

export function generateStaticParams() {
  return BLOG_INDEX.map((p) => ({ slug: p.slug }));
}

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
  if (!meta || !loader) notFound();

  const mod = await loader();
  const Body = mod.default;
  const faqs = mod.meta.faqs;

  return (
    <BlogPostLayout slug={slug} title={meta.title} description={meta.description} date={meta.date} faqs={faqs}>
      <Body />
    </BlogPostLayout>
  );
}
