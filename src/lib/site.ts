export const SITE_URL = "https://csrushil.com";
export const BUSINESS_NAME = "C S Rushil & Co.";
export const BUSINESS_LEGAL_NAME = "C S Rushil & Co, Chartered Accountants";
export const FOUNDER_NAME = "CA Rushil C S";
export const FOUNDER_CREDENTIALS = "Certified FAFD, Start-up Mentor";
export const ICAI_FRN = "270186";
export const FOUNDER_ICAI_MEMBERSHIP_NO = "270186";
export const YEAR_FOUNDED = 2024;
export const GBP_URL = "https://maps.app.goo.gl/nsa7hM6BFKWiMN9g7";

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
  calendly: "https://calendly.com/",
};

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
