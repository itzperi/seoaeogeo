export type AreaSummary = {
  slug: string;
  name: string;
};

// Locality pages — deliberately kept separate from SERVICES (src/lib/services.ts).
// Each page has genuinely distinct local content (not a template swap) per
// RANKING-PLAN.md's doorway-page-risk guidance. Drives the homepage "Areas
// We Serve" section and the sitemap.
export const AREAS: AreaSummary[] = [
  { slug: "chartered-accountant-anna-nagar-chennai", name: "Anna Nagar" },
  { slug: "chartered-accountant-t-nagar-chennai", name: "T Nagar" },
  { slug: "chartered-accountant-omr-sholinganallur-chennai", name: "OMR / Sholinganallur" },
  { slug: "chartered-accountant-velachery-chennai", name: "Velachery" },
  { slug: "chartered-accountant-adyar-chennai", name: "Adyar" },
];
