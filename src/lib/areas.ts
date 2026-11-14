export type AreaSummary = {
  slug: string;
  name: string;
  // Topic for the pre-typed WhatsApp enquiry; defaults to general CA services.
  topic?: string;
  // Kept live for visitors but noindex,follow and out of the sitemap until the
  // page carries 600+ words unique to the area (owner's brief, Task 3).
  noindex?: boolean;
};

// Locality pages — deliberately kept separate from SERVICES (src/lib/services.ts).
// Each page has genuinely distinct local content (not a template swap) per
// RANKING-PLAN.md's doorway-page-risk guidance. Drives the homepage "Areas
// We Serve" section and the sitemap.
export const AREAS: AreaSummary[] = [
  { slug: "chartered-accountant-anna-nagar-chennai", name: "Anna Nagar" },
  { slug: "chartered-accountant-kilpauk-chennai", name: "Kilpauk" },
  { slug: "chartered-accountant-t-nagar-chennai", name: "T Nagar" },
  { slug: "chartered-accountant-ambattur-chennai", name: "Ambattur" },
  { slug: "chartered-accountant-omr-sholinganallur-chennai", name: "OMR / Sholinganallur" },
  { slug: "chartered-accountant-velachery-chennai", name: "Velachery", noindex: true },
  { slug: "chartered-accountant-adyar-chennai", name: "Adyar", noindex: true },
  { slug: "chartered-accountant-nungambakkam-chennai", name: "Nungambakkam", noindex: true },
  { slug: "chartered-accountant-guindy-chennai", name: "Guindy", noindex: true },
  { slug: "chartered-accountant-porur-chennai", name: "Porur", noindex: true },
  { slug: "chartered-accountant-tambaram-chennai", name: "Tambaram", noindex: true },
  { slug: "chartered-accountant-mylapore-chennai", name: "Mylapore", noindex: true },
];
