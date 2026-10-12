// Location pages for income tax (HNIs) and GST litigation outside the Anna
// Nagar area pages. All are served online from the Anna Nagar office; each
// page carries distinct local content (doorway-page rule). Drives the sitemap
// and the pre-typed WhatsApp enquiry.
export type LocationPage = { slug: string; place: string; service: string };

export const LOCATION_PAGES: LocationPage[] = [
  // Income tax for high-income individuals: Tamil Nadu cities
  { slug: "income-tax-consultant-coimbatore", place: "Coimbatore", service: "Income tax consultation" },
  { slug: "income-tax-consultant-madurai", place: "Madurai", service: "Income tax consultation" },
  { slug: "income-tax-consultant-tiruchirappalli", place: "Trichy", service: "Income tax consultation" },
  // Income tax for high-income individuals: other metros (online)
  { slug: "income-tax-consultant-bangalore", place: "Bengaluru", service: "Income tax consultation" },
  { slug: "income-tax-consultant-hyderabad", place: "Hyderabad", service: "Income tax consultation" },
  { slug: "income-tax-consultant-mumbai", place: "Mumbai", service: "Income tax consultation" },
  { slug: "income-tax-consultant-delhi-ncr", place: "Delhi NCR", service: "Income tax consultation" },
  { slug: "income-tax-consultant-pune", place: "Pune", service: "Income tax consultation" },
  { slug: "income-tax-consultant-kolkata", place: "Kolkata", service: "Income tax consultation" },
  // GST litigation: Tamil Nadu cities
  { slug: "gst-litigation-coimbatore", place: "Coimbatore", service: "GST litigation" },
  { slug: "gst-litigation-madurai", place: "Madurai", service: "GST litigation" },
  { slug: "gst-litigation-tiruppur", place: "Tiruppur", service: "GST litigation" },
  { slug: "gst-litigation-salem", place: "Salem", service: "GST litigation" },
  { slug: "gst-litigation-tiruchirappalli", place: "Trichy", service: "GST litigation" },
  { slug: "gst-litigation-hosur", place: "Hosur", service: "GST litigation" },
];

// Chennai pillar each location-page family links back to.
export const LOCATION_PILLARS: Record<string, { href: string; label: string }> = {
  "Income tax consultation": { href: "/income-tax-consultant-for-hni-chennai", label: "Income tax for HNIs in Chennai" },
  "GST litigation": { href: "/gst-litigation-chennai", label: "GST litigation in Chennai" },
};

// Cross-links for a location page (its pillar plus sibling cities) or for a
// pillar (all its cities), so no city page depends on a single inbound link.
export function locationLinks(href: string): { heading: string; links: { href: string; label: string }[] } | null {
  const slug = href.replace(/^\//, "");
  const page = LOCATION_PAGES.find((l) => l.slug === slug);
  const service = page?.service ?? Object.keys(LOCATION_PILLARS).find((k) => LOCATION_PILLARS[k].href === href);
  if (!service) return null;
  const cities = LOCATION_PAGES.filter((l) => l.service === service && l.slug !== slug).map((l) => ({
    href: `/${l.slug}`,
    label: `${l.service} in ${l.place}`,
  }));
  if (!page) return { heading: `${service} by city`, links: cities };
  return { heading: `${service} in other cities`, links: [LOCATION_PILLARS[service], ...cities] };
}
