import type { MetadataRoute } from "next";
import { AREAS } from "@/lib/areas";
import { getPublishedPosts } from "@/lib/blog";
import { LOCATION_PAGES } from "@/lib/location-pages";
import { ALL_SERVICES } from "@/lib/services";
import { PAGE_DATES } from "@/lib/page-dates";
import { SITE_URL } from "@/lib/site";
import { TN_CITY_PAGES } from "@/lib/tn-cities";

// Each page's lastModified is the date its content last changed in git
// (src/lib/page-dates.ts, regenerated with `npm run page-dates`). Never use
// `new Date()` here: stamping every page "modified today" on every build
// defeats lastModified as a freshness signal to crawlers.
// No <priority> or <changefreq>: Google ignores both, so they are left out.
const FALLBACK_DATE = "2026-10-03";
const lastModified = (path: string) => new Date(PAGE_DATES[path] ?? FALLBACK_DATE);

const STATIC_PATHS = [
  "",
  "about-us",
  "contact",
  "career",
  "blog",
  "videos",
  "faq",
  "how-we-work",
  "tools",
  "tools/nri-residential-status-calculator",
  "tools/company-registration-government-fee-calculator",
  "tools/gst-appeal-deadline-pre-deposit-calculator",
  "tools/nri-property-sale-tds-calculator",
  "tools/foreign-subsidiary-compliance-calendar",
];

// Re-validate daily so scheduled posts appear on their publish date.
export const revalidate = 86400;

const entry = (slug: string) => ({ url: `${SITE_URL}/${slug}`, lastModified: lastModified(`/${slug}`) });

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}/${path}`,
    lastModified: lastModified(path ? `/${path}` : "/"),
  }));

  const blogEntries = getPublishedPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
  }));

  return [
    ...staticEntries,
    ...ALL_SERVICES.map((s) => entry(s.slug)),
    ...AREAS.filter((a) => !a.noindex).map((a) => entry(a.slug)),
    ...TN_CITY_PAGES.map((c) => entry(c.slug)),
    ...LOCATION_PAGES.map((l) => entry(l.slug)),
    ...blogEntries,
  ];
}
