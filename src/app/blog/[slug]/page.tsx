import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostLoader, getPostMeta, getPublishedPosts, isPublished } from "@/lib/blog";
import BlogPostLayout from "@/components/BlogPostLayout";

export function generateStaticParams() {
  return getPublishedPosts().map((p) => ({ slug: p.slug }));
}

// Scheduled posts go live on their date without a redeploy: unknown slugs are
// rendered on demand (dynamicParams) and the isPublished() check in the page
// returns 404 until the post's date; pages re-validate daily.
export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) return {};
  return {
    title: { absolute: meta.title },
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
    <BlogPostLayout slug={slug} title={meta.title} description={meta.description} date={meta.date} updated={meta.updated} faqs={faqs}>
      <Body />
    </BlogPostLayout>
  );
}
