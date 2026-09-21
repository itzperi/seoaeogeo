import { ImageResponse } from "next/og";
import { getPostMeta, getPublishedPosts } from "@/lib/blog";
import { BUSINESS_NAME } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getPublishedPosts().map((p) => ({ slug: p.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  const title = meta?.title ?? BUSINESS_NAME;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#5423e7",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, color: "#ffc233", letterSpacing: 2 }}>
          C S RUSHIL &amp; CO. · INSIGHTS
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15 }}>
          {title}
        </div>
        <div style={{ fontSize: 28, opacity: 0.8 }}>csrushil.com/blog</div>
      </div>
    ),
    { ...size }
  );
}
