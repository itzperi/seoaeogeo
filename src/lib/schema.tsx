import { AREAS } from "./areas";
import { ALL_SERVICES } from "./services";
import { getContentReview } from "./content-reviews";
import {
  ADDRESS,
  BUSINESS_HOURS,
  BUSINESS_LEGAL_NAME,
  BUSINESS_NAME,
  EMAIL,
  FIRM_REGISTRATION_NO,
  FOUNDER_CREDENTIALS,
  FOUNDER_LINKEDIN,
  FOUNDER_NAME,
  GBP_URL,
  GEO,
  ICAI_MEMBERSHIP_NO,
  LANGUAGES_SPOKEN,
  PHONE_TEL,
  ENTITY_PROFILES,
  FOUNDER_PROFILES,
  SITE_URL,
  SOCIALS,
  YEAR_FOUNDED,
  TEAM_SIZE,
  YEAR_QUALIFIED,
} from "./site";

const DAY_MAP: Record<string, string[]> = {
  "Monday – Saturday": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  Sunday: ["Sunday"],
};

function openingHoursSpecification() {
  return BUSINESS_HOURS.filter((h) => h.hours !== "Closed").map((h) => {
    const [opens, closes] = h.hours.split("–").map((t) => t.trim());
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DAY_MAP[h.days] ?? [h.days],
      opens: to24h(opens),
      closes: to24h(closes),
    };
  });
}

function to24h(time: string) {
  const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return time;
  const [, hourStr, minute, meridiem] = match;
  let hour = parseInt(hourStr, 10);
  if (meridiem.toUpperCase() === "PM" && hour !== 12) hour += 12;
  if (meridiem.toUpperCase() === "AM" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${minute}`;
}

// Countries the firm serves remotely (NRIs, foreign-owned companies,
// overseas accounting firms).
export const SERVED_COUNTRIES = ["India", "United Arab Emirates", "United States", "United Kingdom", "Singapore"];
const BOOKKEEPING_COUNTRIES = [...SERVED_COUNTRIES, "Australia"];
const GULF = ["Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain"];

// Service pages whose buyers are mostly outside India, keyed by route.
export const INTERNATIONAL_AREAS: Record<string, string[]> = {
  "/company-registration-india-for-foreigners": SERVED_COUNTRIES,
  "/india-subsidiary-compliance-cfo": SERVED_COUNTRIES,
  "/fema-rbi-compliance": SERVED_COUNTRIES,
  "/transfer-pricing-audit": SERVED_COUNTRIES,
  "/nri-tax-services": [...SERVED_COUNTRIES, ...GULF],
  "/nri-tax-services-gulf": [...GULF, "India"],
  "/nri-tax-services-singapore": ["Singapore", "India"],
  "/nri-tax-services-uae": ["United Arab Emirates", "India"],
  "/nri-tax-services-uk": ["United Kingdom", "India"],
  "/nri-tax-services-usa": ["United States", "India"],
  "/nri-property-sale-tds-chennai": SERVED_COUNTRIES,
  "/form-15ca-15cb-chennai": SERVED_COUNTRIES,
  "/eor-vs-subsidiary-india": SERVED_COUNTRIES,
  "/india-subsidiary-for-us-companies": ["United States", "India"],
  "/india-subsidiary-for-uk-companies": ["United Kingdom", "India"],
  "/india-subsidiary-for-singapore-companies": ["Singapore", "India"],
  "/india-subsidiary-for-uae-companies": ["United Arab Emirates", "India"],
  "/outsourced-accounting-for-cpa-firms": ["United States"],
  "/outsourced-accounting-for-uk-accountants": ["United Kingdom"],
  "/outsourced-bookkeeping-services": BOOKKEEPING_COUNTRIES,
  "/outsourced-bookkeeping-usa": ["United States"],
  "/outsourced-bookkeeping-uk": ["United Kingdom"],
  "/outsourced-bookkeeping-singapore": ["Singapore"],
  "/outsourced-bookkeeping-australia": ["Australia"],
  "/outsourced-bookkeeping-uae": ["United Arab Emirates"],
};

// Stable entity ids. Every page's WebPage, Service and BlogPosting nodes
// point at these instead of repeating the entities.
export const ORG_ID = `${SITE_URL}/#organization`;
export const PERSON_ID = `${SITE_URL}/#ca-rushil`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const SCHEMA_NAME = `${BUSINESS_NAME} Chartered Accountants`;
const ICAI = { "@type": "Organization", name: "The Institute of Chartered Accountants of India", url: "https://www.icai.org/" };

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${SITE_URL}/#organization`,
    name: SCHEMA_NAME,
    alternateName: [BUSINESS_NAME, "CS Rushil & Co"],
    legalName: BUSINESS_LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    telephone: PHONE_TEL,
    email: EMAIL,
    foundingDate: `${YEAR_FOUNDED}`,
    knowsLanguage: LANGUAGES_SPOKEN,
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    numberOfEmployees: { "@type": "QuantitativeValue", value: TEAM_SIZE },
    ...(FIRM_REGISTRATION_NO && {
      identifier: { "@type": "PropertyValue", propertyID: "ICAI firm registration number", value: FIRM_REGISTRATION_NO },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Firm registration",
        name: `ICAI firm registration no. ${FIRM_REGISTRATION_NO}`,
        recognizedBy: ICAI,
      },
    }),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${ADDRESS.street}, ${ADDRESS.locality}`,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Chennai" },
      // Strip topic qualifiers such as "Anna Nagar (income tax)" and dedupe,
      // so each locality is declared once as a plain place name.
      ...Array.from(new Set(AREAS.map((area) => area.name.replace(/\s*\([^)]*\)\s*$/, "")))).map((name) => ({
        "@type": "Place" as const,
        name: `${name}, Chennai`,
      })),
      { "@type": "State", name: "Tamil Nadu" },
      ...BOOKKEEPING_COUNTRIES.map((name) => ({ "@type": "Country" as const, name })),
    ],
    openingHoursSpecification: openingHoursSpecification(),
    knowsAbout: [
      "Company registration",
      "LLP registration",
      "Goods and Services Tax (GST)",
      "Income tax",
      "Statutory audit",
      "Tax audit",
      "Transfer pricing",
      "FEMA and RBI compliance",
      "NRI taxation",
      "ROC compliance",
    ],
    hasMap: GBP_URL,
    sameAs: [SOCIALS.linkedin, GBP_URL, ...Object.values(ENTITY_PROFILES).filter((u): u is string => Boolean(u))],
  };
}

// Standalone entity, referenced by `@id` from organizationSchema().founder
// rather than inlined — a separately-citable Person node with credentials
// is a stronger signal than a nested property (see GEO-ANALYSIS.md).
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: FOUNDER_NAME,
    jobTitle: "Founder & Managing Partner, Practising Chartered Accountant",
    url: `${SITE_URL}/about-us`,
    description: FOUNDER_CREDENTIALS,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    // The Instagram account is CA Rushil C S's own (carushil_c_s), so it
    // belongs to the Person entity, not the firm.
    sameAs: [FOUNDER_LINKEDIN, SOCIALS.instagram, ...Object.values(FOUNDER_PROFILES).filter((u): u is string => Boolean(u))],
    memberOf: ICAI,
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional qualification",
        name: "Chartered Accountant (ICAI)",
        recognizedBy: ICAI,
        ...(ICAI_MEMBERSHIP_NO && {
          identifier: { "@type": "PropertyValue", propertyID: "ICAI membership number", value: ICAI_MEMBERSHIP_NO },
        }),
        ...(YEAR_QUALIFIED && { dateCreated: YEAR_QUALIFIED }),
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Post-qualification certificate",
        name: "Certified in Forensic Accounting and Fraud Detection (FAFD)",
        recognizedBy: ICAI,
      },
    ],
    knowsAbout: ["GST litigation", "Company incorporation", "Virtual CFO services", "Forensic accounting", "Start-up mentoring"],
    ...(ICAI_MEMBERSHIP_NO && {
      identifier: { "@type": "PropertyValue", propertyID: "ICAI membership number", value: ICAI_MEMBERSHIP_NO },
    }),
  };
}

export function localBusinessBreadcrumb(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServedName?: string;
  /** Countries for remote/international services (overrides the Chennai default). */
  areaServedCountries?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.serviceType,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: opts.areaServedCountries?.length
      ? opts.areaServedCountries.map((name) => ({ "@type": "Country", name }))
      : opts.areaServedName
        ? { "@type": "Place", name: opts.areaServedName }
        : { "@type": "City", name: "Chennai" },
  };
}

export function howToSchema(opts: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((step) => ({
      "@type": "HowToStep",
      name: step.name,
      text: step.text,
    })),
  };
}

// The 33-service catalog, emitted on the homepage only (it merges into the
// organization node via the shared @id); repeating it on every page added
// weight without adding signal.
export function serviceCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${SITE_URL}/#organization`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: ALL_SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: `${SITE_URL}/${service.slug}`,
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS_NAME,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

// Content modification and professional review are separate facts.
export function webPageSchema(path: string, name: string, date: string) {
  const review = getContentReview(path, date);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": ORG_ID },
    ...(review && { reviewedBy: { "@id": PERSON_ID }, lastReviewed: review.reviewedOn }),
    dateModified: date,
  };
}

// Pass the page URL so this node shares the page's WebPage @id and merges
// with webPageSchema() instead of declaring a second, anonymous WebPage.
export function speakableSchema(cssSelector: string[], pageUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    ...(pageUrl && { "@id": `${pageUrl}#webpage`, url: pageUrl }),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector,
    },
  };
}

// Strips per-node @context so nodes can sit inside one @graph.
function node<T extends object>(data: T) {
  const { ["@context"]: _ctx, ...rest } = data as T & { "@context"?: string };
  void _ctx;
  return rest;
}

export function graph(nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes.map(node) };
}

// Site-wide entities, emitted once per page by the root layout.
export function siteGraph() {
  return graph([organizationSchema(), personSchema(), websiteSchema()]);
}

// One connected graph for a money page: WebPage → Service → FAQPage and
// BreadcrumbList. Pages using it pass schema={false} to Breadcrumbs,
// FAQSection and PageHero so no node is emitted twice.
export function moneyPageGraph(opts: {
  path: string;
  name: string;
  description: string;
  dateModified?: string;
  service: { name: string; serviceType: string; description: string; offers: string[] | { name: string; url: string }[] };
  faqs: { question: string; answer: string }[];
  crumbs: { name: string; href: string }[];
  howTo?: { name: string; description: string; steps: { name: string; text: string }[] };
  speakable?: string[];
}) {
  const url = `${SITE_URL}${opts.path === "/" ? "/" : opts.path}`;
  const pageId = `${url}#webpage`;
  const serviceId = `${url}#service`;
  const crumbs = [{ name: "Home", href: "/" }, ...opts.crumbs.filter((c) => c.href !== "/")];
  const review = getContentReview(opts.path, opts.dateModified);
  return graph([
    {
      "@type": "WebPage",
      "@id": pageId,
      url,
      name: opts.name,
      description: opts.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      mainEntity: { "@id": serviceId },
      publisher: { "@id": ORG_ID },
      ...(review && { reviewedBy: { "@id": PERSON_ID }, lastReviewed: review.reviewedOn }),
      breadcrumb: { "@id": `${url}#breadcrumb` },
      ...(opts.dateModified && { dateModified: opts.dateModified }),
      ...(opts.speakable && { speakable: { "@type": "SpeakableSpecification", cssSelector: opts.speakable } }),
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: opts.service.name,
      serviceType: opts.service.serviceType,
      description: opts.service.description,
      url,
      provider: { "@id": ORG_ID },
      areaServed: [{ "@type": "City", name: "Chennai" }, { "@type": "State", name: "Tamil Nadu" }],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: opts.service.name,
        itemListElement: opts.service.offers.map((o) => ({
          "@type": "Offer",
          itemOffered:
            typeof o === "string"
              ? { "@type": "Service", name: o }
              : { "@type": "Service", name: o.name, url: o.url },
        })),
      },
    },
    { ...faqSchema(opts.faqs), "@id": `${url}#faq` },
    { ...localBusinessBreadcrumb(crumbs.map((c) => ({ name: c.name, url: `${SITE_URL}${c.href}` }))), "@id": `${url}#breadcrumb` },
    ...(opts.howTo ? [{ ...howToSchema(opts.howTo), "@id": `${url}#howto` }] : []),
  ]);
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
