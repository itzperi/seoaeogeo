import type { MetadataRoute } from "next";
import { BLOG_INDEX } from "@/lib/blog";
import { SERVICES } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

const STATIC_PATHS = [
  { path: "", priority: 1 },
  { path: "about-us", priority: 0.7 },
  { path: "contact", priority: 0.7 },
  { path: "career", priority: 0.4 },
  { path: "blog", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = STATIC_PATHS.map(({ path, priority }) => ({
    url: `${SITE_URL}/${path}`,
    lastModified: now,
    priority,
  }));

  const serviceEntries = SERVICES.map((service) => ({
    url: `${SITE_URL}/${service.slug}`,
    lastModified: now,
    priority: 0.8,
  }));

  const blogEntries = BLOG_INDEX.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}
