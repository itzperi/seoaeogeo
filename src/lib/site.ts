// Vercel serves the site on www (the bare domain 308-redirects there), so
// canonicals, sitemap and schema must use www too — pointing them at the
// redirecting bare domain sends Google conflicting signals.
export const SITE_URL = "https://www.csrushil.com";
export const BUSINESS_NAME = "C S Rushil & Co.";
export const BUSINESS_LEGAL_NAME = "C S Rushil & Co, Chartered Accountants";
export const FOUNDER_NAME = "CA Rushil C S";
export const FOUNDER_CREDENTIALS = "Certified FAFD, Start-up Mentor";
export const YEAR_FOUNDED = 2024;
// The Business Profile's permanent CID link (from the profile's own edit
// URLs). Used for schema sameAs/hasMap and every "view on Google" link, so
// Google can tie the website to this exact listing. Prefer this over the
// maps.app.goo.gl short link, which is only a redirect.
export const GBP_CID = "9218487927688159679";
export const GBP_URL = `https://maps.google.com/?cid=${GBP_CID}`;
export const GBP_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=C+S+Rushil+%26+Co.%2C+13th+Main+Road%2C+J-Block%2C+Anna+Nagar%2C+Chennai+600040";
export const LANGUAGES_SPOKEN = ["English", "Tamil", "Hindi"];

// NAP: standardized on the number used on the homepage/contact page (per SEO audit,
// the site previously showed +91 7200149711 on some pages and +91 7449273374 on others).
export const PHONE_DISPLAY = "+91 72001 49711";
export const PHONE_TEL = "+917200149711";
export const EMAIL = "admin@csrushil.com";

// Confirmed 2026-09-15. This exact string must match the Google Business
// Profile address character-for-character — that identical-NAP match is a
// direct local ranking factor, so don't reformat it "for style" later.
export const ADDRESS = {
  street: "Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Road",
  locality: "Anna Nagar",
  city: "Chennai",
  region: "Tamil Nadu",
  postalCode: "600040",
  country: "IN",
};

export const ADDRESS_FULL = `${ADDRESS.street}, ${ADDRESS.locality}, ${ADDRESS.city} - ${ADDRESS.postalCode}`;

// Short form for tight spaces (eyebrow labels, hero subheads) where the full
// street address would overflow — never use this for schema/NAP fields.
export const ADDRESS_SHORT = `${ADDRESS.locality}, ${ADDRESS.city}`;

// Confirmed coordinates for the Anna Nagar office.
export const GEO = { latitude: 13.085988998413086, longitude: 80.1996841430664 };

export const SOCIALS = {
  linkedin: "https://in.linkedin.com/company/csrushil-co",
  instagram: "https://www.instagram.com/carushil_c_s/",
};

// Calendly 30-minute consultation — every "Book a Free Consultation"
// button on the site points here.
export const BOOKING_LINK = "https://calendly.com/ceo-csrushil/30min";
// Same event in Calendly's inline-embed mode, for the iframe on /contact.
export const BOOKING_EMBED_SRC =
  "https://calendly.com/ceo-csrushil/30min?embed_type=Inline&embed_domain=www.csrushil.com&hide_gdpr_banner=1";

// wa.me expects the number with no "+" or spaces. Same NAP phone number as
// everywhere else — do not point this at a different number.
export const WHATSAPP_LINK = `https://wa.me/${PHONE_TEL.replace(/\D/g, "")}`;

// Precise pin (lat/long) rather than an address-text search, so the embed
// points at the exact office rather than a general Anna Nagar location.
export const GOOGLE_MAPS_EMBED_SRC = `https://www.google.com/maps?q=${GEO.latitude},${GEO.longitude}&z=17&hl=en&output=embed`;

export const BUSINESS_HOURS = [
  { days: "Monday – Saturday", hours: "9:30 AM – 6:30 PM" },
  { days: "Sunday", hours: "Closed" },
];
