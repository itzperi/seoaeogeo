import { AREAS } from "./areas";
import { SERVICES } from "./services";
import {
  ADDRESS,
  BUSINESS_HOURS,
  BUSINESS_LEGAL_NAME,
  BUSINESS_NAME,
  EMAIL,
  FOUNDER_CREDENTIALS,
  FOUNDER_NAME,
  GBP_URL,
  GEO,
  PHONE_TEL,
  SITE_URL,
  SOCIALS,
  YEAR_FOUNDED,
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

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    legalName: BUSINESS_LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    telephone: PHONE_TEL,
    email: EMAIL,
    priceRange: "₹₹",
    foundingDate: `${YEAR_FOUNDED}`,
    founder: { "@id": `${SITE_URL}/#founder` },
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
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
      ...AREAS.map((area) => ({ "@type": "Place" as const, name: `${area.name}, Chennai` })),
    ],
    openingHoursSpecification: openingHoursSpecification(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: `${SITE_URL}/${service.slug}`,
        },
      })),
    },
    sameAs: [SOCIALS.linkedin, SOCIALS.instagram, GBP_URL],
  };
}

// Standalone entity, referenced by `@id` from organizationSchema().founder
// rather than inlined — a separately-citable Person node with credentials
// is a stronger signal than a nested property (see GEO-ANALYSIS.md).
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#founder`,
    name: FOUNDER_NAME,
    jobTitle: "Founder & Managing Partner, Chartered Accountant",
    description: FOUNDER_CREDENTIALS,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    memberOf: {
      "@type": "Organization",
      name: "Institute of Chartered Accountants of India (ICAI)",
      url: "https://www.icai.org/",
    },
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
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.serviceType,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: opts.areaServedName
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

export function speakableSchema(cssSelector: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector,
    },
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
