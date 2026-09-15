export const SITE_URL = "https://csrushil.com";
export const BUSINESS_NAME = "C S Rushil & Co.";
export const BUSINESS_LEGAL_NAME = "C S Rushil & Co, Chartered Accountants";
export const FOUNDER_NAME = "CA Rushil C S";
export const FOUNDER_CREDENTIALS = "Certified FAFD, Start-up Mentor";

// NAP: standardized on the number used on the homepage/contact page (per SEO audit,
// the site previously showed +91 7200149711 on some pages and +91 7449273374 on others).
export const PHONE_DISPLAY = "+91 72001 49711";
export const PHONE_TEL = "+917200149711";
export const EMAIL = "admin@csrushil.com";

export const ADDRESS = {
  street: "156, Raahat Plaza, No. 172, First Floor, Arcot Road",
  locality: "Vadapalani",
  city: "Chennai",
  region: "Tamil Nadu",
  postalCode: "600026",
  country: "IN",
};

export const ADDRESS_FULL = `${ADDRESS.street}, ${ADDRESS.locality}, ${ADDRESS.city} - ${ADDRESS.postalCode}`;

// TODO: replace with the firm's actual verified coordinates for the Vadapalani office.
export const GEO = { latitude: 13.0503, longitude: 80.2121 };

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/",
  calendly: "https://calendly.com/",
};

export const GOOGLE_MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS_FULL
)}&output=embed`;

export const BUSINESS_HOURS = [
  { days: "Monday – Saturday", hours: "9:30 AM – 6:30 PM" },
  { days: "Sunday", hours: "Closed" },
];
