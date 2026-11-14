import { getContentReview } from "./content-reviews";
import {
  ENTITY_PROFILES,
  FIRM_REGISTRATION_NO,
  FOUNDER_CREDENTIALS,
  FOUNDER_PROFILES,
  ICAI_MEMBERSHIP_NO,
  SITE_URL,
  YEAR_QUALIFIED,
} from "./site";

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
export const ORG_ID = `${SITE_URL}/#firm`;
export const PERSON_ID = `${SITE_URL}/#ca-rushil`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const ICAI = { "@type": "Organization", name: "The Institute of Chartered Accountants of India", url: "https://www.icai.org/" };

// The sitewide firm entity. Values are fixed by the owner's brief (Nov 2026):
// no priceRange, offers, ratings, reviews, team size or registration numbers
// unless the owner supplies them.
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "AccountingService"],
    "@id": ORG_ID,
    name: "C S Rushil & Co.",
    legalName: "C S Rushil & Co, Chartered Accountants",
    url: "https://www.csrushil.com/",
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    telephone: "+91-72001-49711",
    email: "admin@csrushil.com",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Rd",
      addressLocality: "Anna Nagar, Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600040",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 13.085989, longitude: 80.199684 },
    hasMap: "https://maps.google.com/?cid=9218487927688159679",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "Place", name: "Anna Nagar" },
      { "@type": "Place", name: "Kilpauk" },
      { "@type": "Place", name: "Aminjikarai" },
      { "@type": "Place", name: "Mogappair" },
      { "@type": "Place", name: "Ambattur" },
      { "@type": "Place", name: "T Nagar" },
      { "@type": "State", name: "Tamil Nadu" },
    ],
    founder: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Rushil C S",
      jobTitle: "Chartered Accountant",
      sameAs: ["https://in.linkedin.com/company/csrushil-co"],
    },
    sameAs: [
      "https://in.linkedin.com/company/csrushil-co",
      "https://instagram.com/carushil_c_s/",
      "https://maps.google.com/?cid=9218487927688159679",
      ...Object.values(ENTITY_PROFILES).filter((u): u is string => Boolean(u)),
    ],
    knowsAbout: [
      "Company registration",
      "LLP registration",
      "GST",
      "Income tax",
      "Statutory audit",
      "Tax audit",
      "Transfer pricing",
      "FEMA and RBI compliance",
      "NRI taxation",
      "ROC compliance",
      "Virtual CFO services",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-72001-49711",
      email: "admin@csrushil.com",
      contactType: "customer service",
      availableLanguage: ["English", "Tamil"],
    },
    ...(FIRM_REGISTRATION_NO && {
      identifier: { "@type": "PropertyValue", propertyID: "ICAI firm registration number", value: FIRM_REGISTRATION_NO },
    }),
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
    name: "Rushil C S",
    honorificPrefix: "CA",
    jobTitle: "Chartered Accountant",
    url: `${SITE_URL}/about-us`,
    description: FOUNDER_CREDENTIALS,
    worksFor: { "@id": ORG_ID },
    // Per the owner's brief the founder's sameAs is the firm's LinkedIn page;
    // add a personal profile here once the owner confirms it.
    sameAs: ["https://in.linkedin.com/company/csrushil-co", ...Object.values(FOUNDER_PROFILES).filter((u): u is string => Boolean(u))],
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
    provider: { "@id": ORG_ID },
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

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "C S Rushil & Co.",
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
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
    about: { "@id": ORG_ID },
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
  service: { name: string; serviceType: string; description: string; offers?: string[] | { name: string; url: string }[] };
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
      areaServed: { "@type": "City", name: "Chennai" },
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
