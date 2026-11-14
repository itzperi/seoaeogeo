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

// Footer area links (owner's brief, Task 5.1: area links live in the footer
// and on /locations, not in the header). The office area and its nearest
// neighbourhoods first, then the other indexable area pages.
const PRIMARY_AREA_SLUGS = [
  "chartered-accountant-anna-nagar-chennai",
  "chartered-accountant-kilpauk-chennai",
  "chartered-accountant-mogappair-chennai",
  "chartered-accountant-aminjikarai-chennai",
  "chartered-accountant-ambattur-chennai",
  "chartered-accountant-t-nagar-chennai",
  "chartered-accountant-omr-sholinganallur-chennai",
];

export const AREAS_HUB: NavLink = {
  href: "/locations",
  label: "All locations we serve",
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

// Header: six groups (owner's brief, Task 5.1). Each group opens a short list
// of its main pages; the full catalogue sits on the hubs and in SiloLinks.
export type NavGroup = { label: string; short: string; links: NavLink[] };

export const HEADER_GROUPS: NavGroup[] = [
  {
    label: "Company & LLP registration",
    short: "Company & LLP",
    links: [
      { href: "/company-registration-chennai", label: "Company registration in Chennai" },
      { href: "/private-limited-company-incorporation-chennai", label: "Private limited company registration" },
      { href: "/llp-registration-chennai", label: "LLP registration" },
      { href: "/opc-registration-chennai", label: "OPC registration" },
      { href: "/section-8-company-registration-chennai", label: "Section 8 company registration" },
      { href: "/partnership-firm-registration-chennai", label: "Partnership firm registration" },
      { href: "/company-registration-india-for-foreigners", label: "Foreign-owned company setup" },
      { href: "/startup-india-registration-chennai", label: "Startup India (DPIIT) registration" },
      { href: "/msme-udyam-registration-chennai", label: "MSME / Udyam registration" },
    ],
  },
  {
    label: "GST",
    short: "GST",
    links: [
      { href: "/goods-and-services-tax", label: "GST consultants in Chennai" },
      { href: "/gst-registration-chennai", label: "GST registration" },
      { href: "/gst-return-filing-chennai", label: "GST return filing" },
      { href: "/gst-notice-reply-chennai", label: "GST notice reply" },
      { href: "/gst-litigation-chennai", label: "GST litigation and appeals" },
    ],
  },
  {
    label: "Income tax & NRI",
    short: "Income Tax & NRI",
    links: [
      { href: "/direct-tax", label: "Tax consultant in Chennai" },
      { href: "/income-tax-return-filing-chennai", label: "Income tax return filing" },
      { href: "/income-tax-notice-reply-chennai", label: "Income tax notice reply" },
      { href: "/income-tax-consultant-for-hni-chennai", label: "Income tax for HNIs" },
      { href: "/tds-return-filing-chennai", label: "TDS return filing" },
      { href: "/nri-tax-services", label: "NRI tax services" },
      { href: "/form-15ca-15cb-chennai", label: "Form 15CA / 15CB" },
    ],
  },
  {
    label: "Audit",
    short: "Audit",
    links: [
      { href: "/audit-and-assurance", label: "Audit and assurance" },
      { href: "/statutory-audit-chennai", label: "Statutory audit" },
      { href: "/tax-audit-chennai", label: "Tax audit" },
      { href: "/transfer-pricing-audit", label: "Transfer pricing audit" },
    ],
  },
  {
    label: "Virtual CFO & Accounting",
    short: "CFO & Accounting",
    links: [
      { href: "/virtual-cfo-services", label: "Virtual CFO services" },
      { href: "/bookkeeping-services-chennai", label: "Bookkeeping services in Chennai" },
      { href: "/accounting-outsourcing-chennai", label: "Accounting outsourcing" },
      { href: "/payroll-services-chennai", label: "Payroll services" },
      { href: "/roc-compliances", label: "ROC compliance" },
      { href: "/annual-compliance-package", label: "Annual compliance package" },
      { href: "/india-subsidiary-compliance-cfo", label: "India subsidiary compliance" },
      { href: "/outsourced-bookkeeping-services", label: "Outsourced bookkeeping (overseas clients)" },
    ],
  },
  {
    label: "About & Contact",
    short: "About & Contact",
    links: [
      { href: "/about-us", label: "About us" },
      { href: "/how-we-work", label: "How we work" },
      { href: "/locations", label: "Locations we serve" },
      { href: "/blog", label: "Insights" },
      { href: "/tools", label: "Tools & calculators" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
];
