import type { MetadataRoute } from "next";
import { AREAS } from "@/lib/areas";
import { BLOG_INDEX } from "@/lib/blog";
import { SERVICES } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

// Bump this only when a genuine site-wide change ships (new page, major
// content rewrite) — using `new Date()` here would stamp every page as
// "modified today" on every build, which defeats lastModified as a
// freshness signal to crawlers.
const SITE_LAST_MODIFIED = new Date("2026-09-18");

const STATIC_PATHS = [
  { path: "", priority: 1 },
  { path: "about-us", priority: 0.7 },
  { path: "contact", priority: 0.7 },
  { path: "career", priority: 0.4 },
  { path: "blog", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PATHS.map(({ path, priority }) => ({
    url: `${SITE_URL}/${path}`,
    lastModified: SITE_LAST_MODIFIED,
    priority,
  }));

  const serviceEntries = SERVICES.map((service) => ({
    url: `${SITE_URL}/${service.slug}`,
    lastModified: SITE_LAST_MODIFIED,
    priority: 0.8,
  }));

  const blogEntries = BLOG_INDEX.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6,
  }));

  const areaEntries = AREAS.map((area) => ({
    url: `${SITE_URL}/${area.slug}`,
    lastModified: SITE_LAST_MODIFIED,
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries, ...areaEntries, ...blogEntries];
}
