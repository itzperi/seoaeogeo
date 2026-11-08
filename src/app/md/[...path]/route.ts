// Agent-readable Markdown copy of a registered page: /md/<slug> (and /md/index
// for the homepage). Built from the live HTML of the same page, so there is no
// separate content to keep in sync. Only registered page slugs are served.
import { AREAS } from "@/lib/areas";
import { htmlToMarkdown } from "@/lib/html-to-markdown";
import { LOCATION_PAGES } from "@/lib/location-pages";
import { ALL_SERVICES } from "@/lib/services";
import { SITE_URL } from "@/lib/site";
import { TN_CITY_PAGES } from "@/lib/tn-cities";

export const revalidate = 86400;

const ALLOWED = new Set<string>([
  "index",
  "about-us",
  "how-we-work",
  ...ALL_SERVICES.map((s) => s.slug),
  ...AREAS.map((a) => a.slug),
  ...TN_CITY_PAGES.map((c) => c.slug),
  ...LOCATION_PAGES.map((l) => l.slug),
]);

export async function GET(_req: Request, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;
  const slug = path.join("/");
  if (path.length !== 1 || !ALLOWED.has(slug)) {
    return new Response("Not found\n", { status: 404, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  }
  const pageUrl = slug === "index" ? `${SITE_URL}/` : `${SITE_URL}/${slug}`;
  const res = await fetch(pageUrl, { next: { revalidate: 86400 } });
  if (!res.ok) {
    return new Response("Page unavailable\n", { status: 502, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  }
  const body = htmlToMarkdown(await res.text(), SITE_URL);
  const md = `<!-- Markdown copy of ${pageUrl} for AI agents. The HTML page is the canonical version. -->\n\n${body}\n`;
  return new Response(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
      "X-Robots-Tag": "noindex",
      Link: `<${pageUrl}>; rel="canonical"`,
    },
  });
}
