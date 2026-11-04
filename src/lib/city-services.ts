import { LOCATION_PAGES } from "./location-pages";
import { TN_CITY_PAGES } from "./tn-cities";

// "Services for <City> businesses": links a Tamil Nadu city page to the
// firm's other pages for the same city (company registration, GST
// litigation, income tax) plus the online virtual CFO and audit services.
// Cities are served online from the Anna Nagar office.

const FAMILIES = [
  { prefix: "company-registration-", label: (c: string) => `Company registration in ${c}` },
  { prefix: "gst-litigation-", label: (c: string) => `GST litigation and appeals in ${c}` },
  { prefix: "income-tax-consultant-", label: (c: string) => `Income tax consultant for ${c} families` },
];

// Slug suffix (e.g. "coimbatore") → display name, from both registries.
function cityName(suffix: string): string | undefined {
  const tn = TN_CITY_PAGES.find((c) => c.slug === `company-registration-${suffix}`);
  if (tn) return tn.city;
  const loc = LOCATION_PAGES.find((l) => l.slug.endsWith(`-${suffix}`));
  return loc?.place;
}

const EXISTING = new Set([...TN_CITY_PAGES.map((c) => c.slug), ...LOCATION_PAGES.map((l) => l.slug)]);

export function cityServices(href: string): { city: string; links: { href: string; label: string }[] } | null {
  const slug = href.replace(/^\//, "");
  const family = FAMILIES.find((f) => slug.startsWith(f.prefix));
  if (!family) return null;
  const suffix = slug.slice(family.prefix.length);
  // Only Tamil Nadu cities: income-tax pages also cover other metros.
  if (!TN_CITY_PAGES.some((c) => c.slug === `company-registration-${suffix}`)) return null;
  const city = cityName(suffix);
  if (!city) return null;
  const links = FAMILIES.map((f) => ({ href: `/${f.prefix}${suffix}`, label: f.label(city) })).filter(
    (l) => l.href !== `/${slug}` && EXISTING.has(l.href.slice(1)),
  );
  links.push(
    { href: "/virtual-cfo-services", label: `Virtual CFO for ${city} businesses (online)` },
    { href: "/statutory-audit-chennai", label: `Statutory audit for ${city} companies` },
    { href: "/private-limited-company-incorporation-chennai", label: "Private Limited Company Registration in Chennai" },
  );
  return { city, links };
}
