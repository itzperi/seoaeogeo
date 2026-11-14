import type { ReactNode } from "react";
import Link from "next/link";
import { getPostMeta, isPublished } from "@/lib/blog";

// Link to a blog post that may still be scheduled. Until the post's date it
// renders the anchor text without a link, so no page links to a 404; once
// the post is live (pages re-render on revalidation or the next deploy) it
// becomes a normal link. Use it for any link to a post dated in the future.
export default function PostLink({ slug, className, children }: { slug: string; className?: string; children: ReactNode }) {
  const meta = getPostMeta(slug);
  if (!meta || !isPublished(meta.date)) return <>{children}</>;
  return (
    <Link href={`/blog/${slug}`} className={className}>
      {children}
    </Link>
  );
}
