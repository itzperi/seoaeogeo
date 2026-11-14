import { AREAS } from "./areas";
import { SERVICE_GROUPS, getService } from "./services";

// Site-wide navigation is deliberately small. Header and footer render on
// every page, so every link here is repeated ~180 times across the site;
// listing all 60+ leaf services and 18 areas there spread link equity evenly
// over minor URLs. The full catalogue now lives in page-level silo blocks
// (SiloLinks, AreaPageTemplate) and on the hubs below.

export type NavLink = { href: string; label: string };

// The four keyword-cluster money pages, plus the audit and foreign-company
// hubs. Badge-highlighted in the header.
export const FLAGSHIP_LINKS: NavLink[] = [
  { href: "/private-limited-company-incorporation-chennai", label: "Private Limited Company Registration" },
  { href: "/virtual-cfo-services", label: "Virtual CFO in Chennai" },
  { href: "/gst-litigation-chennai", label: "GST Litigation & Appeals" },
  { href: "/statutory-audit-chennai", label: "Statutory & Tax Audit" },
  { href: "/company-registration-india-for-foreigners", label: "NRI & Foreign Subsidiary" },
];

// One hub per service group: the group's first slug is its hub page.
export const CATEGORY_HUBS: NavLink[] = SERVICE_GROUPS.map((group) => {
  const hub = getService(group.slugs[0]);
  return hub ? { href: `/${hub.slug}`, label: group.label } : null;
}).filter((l): l is NavLink => Boolean(l));

// Footer "Core practice areas": the four target-keyword pages first, with
// exact-match anchors, then the next six commercial pages.
export const FOOTER_CORE_LINKS: NavLink[] = [
  { href: "/", label: "CA Firm in Chennai" },
  { href: "/private-limited-company-incorporation-chennai", label: "Private Limited Company Registration in Chennai" },
  { href: "/direct-tax", label: "Tax Consultant in Chennai" },
  { href: "/virtual-cfo-services", label: "Virtual CFO in Chennai" },
  { href: "/gst-litigation-chennai", label: "GST Litigation & Appeals in Chennai" },
  { href: "/company-registration-chennai", label: "Company Registration in Chennai" },
  { href: "/gst-registration-chennai", label: "GST Registration in Chennai" },
  { href: "/goods-and-services-tax", label: "GST Consultants in Chennai" },
  { href: "/statutory-audit-chennai", label: "Statutory Audit in Chennai" },
  { href: "/income-tax-consultant-for-hni-chennai", label: "Income Tax for HNIs" },
  { href: "/india-subsidiary-compliance-cfo", label: "India Subsidiary Compliance" },
  { href: "/nri-tax-services", label: "NRI Tax Services" },
  { href: "/outsourced-bookkeeping-services", label: "Outsourced Bookkeeping (US, UK, SG, AU, UAE)" },
];

// Top six commercial localities; the rest are one click away on the
// homepage areas section.
const PRIMARY_AREA_SLUGS = [
  "chartered-accountant-anna-nagar-chennai",
  "chartered-accountant-omr-sholinganallur-chennai",
  "chartered-accountant-guindy-chennai",
  "chartered-accountant-t-nagar-chennai",
  "chartered-accountant-ambattur-chennai",
  "chartered-accountant-nungambakkam-chennai",
];

export const AREAS_HUB: NavLink = {
  href: "/#areas",
  label: `All ${AREAS.length} Chennai areas we serve`,
};

export const PRIMARY_AREA_LINKS: NavLink[] = PRIMARY_AREA_SLUGS.map((slug) => {
  const area = AREAS.find((a) => a.slug === slug);
  return area ? { href: `/${slug}`, label: area.name } : null;
}).filter((l): l is NavLink => Boolean(l));

export const COMPANY_LINKS: NavLink[] = [
  { href: "/about-us", label: "About Us" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/tools", label: "Tools & Calculators" },
  { href: "/blog", label: "Insights" },
  { href: "/videos", label: "Videos" },
  { href: "/faq", label: "FAQ" },
  { href: "/career", label: "Careers" },
  { href: "/contact", label: "Contact" },
];
