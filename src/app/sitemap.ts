import type { MetadataRoute } from "next";
import { AREAS } from "@/lib/areas";
import { getPublishedPosts } from "@/lib/blog";
import { ALL_SERVICES } from "@/lib/services";
import { PAGE_DATES } from "@/lib/page-dates";
import { SITE_URL } from "@/lib/site";
import { TN_CITY_PAGES } from "@/lib/tn-cities";

// Each page's lastModified is the date its content last changed in git
// (src/lib/page-dates.ts, regenerated with `npm run page-dates`). Never use
// `new Date()` here: stamping every page "modified today" on every build
// defeats lastModified as a freshness signal to crawlers.
const FALLBACK_DATE = "2026-10-03";
const lastModified = (path: string) => new Date(PAGE_DATES[path] ?? FALLBACK_DATE);

const STATIC_PATHS = [
  { path: "", priority: 1 },
  { path: "about-us", priority: 0.7 },
  { path: "contact", priority: 0.7 },
  { path: "career", priority: 0.4 },
  { path: "blog", priority: 0.6 },
  { path: "videos", priority: 0.5 },
  { path: "faq", priority: 0.7 },
];

// Re-validate daily so scheduled posts appear on their publish date.
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PATHS.map(({ path, priority }) => ({
    url: `${SITE_URL}/${path}`,
    lastModified: lastModified(path ? `/${path}` : "/"),
    priority,
  }));

  const serviceEntries = ALL_SERVICES.map((service) => ({
    url: `${SITE_URL}/${service.slug}`,
    lastModified: lastModified(`/${service.slug}`),
    priority: 0.8,
  }));

  const blogEntries = getPublishedPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6,
  }));

  const areaEntries = AREAS.map((area) => ({
    url: `${SITE_URL}/${area.slug}`,
    lastModified: lastModified(`/${area.slug}`),
    priority: 0.7,
  }));

  const cityEntries = TN_CITY_PAGES.map((c) => ({
    url: `${SITE_URL}/${c.slug}`,
    lastModified: lastModified(`/${c.slug}`),
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries, ...areaEntries, ...cityEntries, ...blogEntries];
}
