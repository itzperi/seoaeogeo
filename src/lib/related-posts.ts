// Extra "related guides" for service pages that list fewer than three
// published posts of their own (owner's brief, Task 5.2). ServicePageTemplate
// appends these after the page's own relatedPosts, drops duplicates and
// unpublished posts, and shows up to five. Each post here was picked because
// it covers the page's topic, not to spread links.
const BOOKKEEPING_EXTRA = ["catch-up-bookkeeping-how-long-what-to-send", "cash-flow-not-profit-business-failure", "business-personal-expenses-separate", "what-virtual-cfo-reviews-monthly"];
const TN_COMPANY_EXTRA = ["roc-chennai-vs-roc-coimbatore", "private-limited-company-registration-documents", "registered-office-at-home-company"];
const IT_CITY_EXTRA = ["why-income-tax-notices-issued", "capital-gains-tax-property-sale", "foreign-rsu-tax-schedule-fa-chennai", "advance-tax-deadlines"];
const GST_SECTOR_EXTRA = ["gst-threshold-is-a-trigger", "itc-mismatch-notices", "gstr9-annual-return-checklist"];

export const EXTRA_RELATED_POSTS: Record<string, string[]> = {
  "/bookkeeping-services-chennai": ["cash-flow-not-profit-business-failure", "gstr9-annual-return-checklist"],
  "/company-registration-india-for-foreigners": ["private-limited-company-registration-documents", "fc-gpr-filing-deadline", "fla-return-due-date"],
  "/company-registration-madurai": TN_COMPANY_EXTRA,
  "/company-registration-salem": TN_COMPANY_EXTRA,
  "/company-registration-tirunelveli": TN_COMPANY_EXTRA,
  "/eor-vs-subsidiary-india": ["foreign-national-director-indian-company", "fc-gpr-filing-deadline", "fla-return-due-date"],
  "/fema-rbi-compliance": ["fc-gpr-filing-deadline", "fla-return-due-date"],
  "/fssai-license-chennai": ["moa-objects-clause-drafting"],
  "/gst-return-filing-for-amazon-sellers": GST_SECTOR_EXTRA,
  "/gst-return-filing-for-ecommerce-sellers": GST_SECTOR_EXTRA,
  "/gst-return-filing-for-clinics": ["gst-threshold-is-a-trigger", "gstr9-annual-return-checklist", "gst-show-cause-notice-first-48-hours"],
  "/gst-return-filing-for-freelancers": ["gst-freelancers-consultants", "advance-tax-deadlines", "lut-for-exporters"],
  "/gst-return-filing-for-import-export-businesses": ["lut-for-exporters", "tiruppur-export-refund-rejection", "gst-threshold-is-a-trigger"],
  "/gst-return-filing-for-manufacturers": ["eway-bill-detention-section-129-appeal", "itc-mismatch-notices", "gstr9-annual-return-checklist"],
  "/gst-return-filing-for-restaurants": ["gst-threshold-is-a-trigger", "gstr9-annual-return-checklist", "gst-show-cause-notice-first-48-hours"],
  "/gst-return-filing-for-startups": ["gst-registration-after-company-incorporation", "gst-threshold-is-a-trigger", "virtual-cfo-omr-startups", "private-limited-vs-llp-chennai-startups"],
  "/income-tax-consultant-bangalore": IT_CITY_EXTRA,
  "/income-tax-consultant-coimbatore": IT_CITY_EXTRA,
  "/income-tax-consultant-delhi-ncr": IT_CITY_EXTRA,
  "/income-tax-consultant-hyderabad": IT_CITY_EXTRA,
  "/income-tax-consultant-kolkata": IT_CITY_EXTRA,
  "/income-tax-consultant-madurai": IT_CITY_EXTRA,
  "/income-tax-consultant-mumbai": IT_CITY_EXTRA,
  "/income-tax-consultant-pune": IT_CITY_EXTRA,
  "/income-tax-consultant-tiruchirappalli": IT_CITY_EXTRA,
  "/income-tax-notice-reply-chennai": ["safe-cash-deposit-limit", "income-tax-act-2025-section-mapping"],
  "/msme-udyam-registration-chennai": ["msme-udyam-registration-checklist", "msme-loan-schemes-tamil-nadu", "post-incorporation-compliance-checklist", "gst-threshold-is-a-trigger"],
  "/nri-property-sale-tds-chennai": ["capital-gains-tax-property-sale", "nri-itr-filing", "joint-development-agreement-tax-chennai"],
  "/outsourced-accounting-for-cpa-firms": ["is-it-safe-to-outsource-bookkeeping-to-india", ...BOOKKEEPING_EXTRA],
  "/outsourced-accounting-for-uk-accountants": ["is-it-safe-to-outsource-bookkeeping-to-india", "mtd-income-tax-records-sole-traders-2026", ...BOOKKEEPING_EXTRA],
  "/outsourced-bookkeeping-services": BOOKKEEPING_EXTRA,
  "/outsourced-bookkeeping-usa": BOOKKEEPING_EXTRA,
  "/outsourced-bookkeeping-uk": BOOKKEEPING_EXTRA,
  "/outsourced-bookkeeping-singapore": BOOKKEEPING_EXTRA,
  "/outsourced-bookkeeping-australia": BOOKKEEPING_EXTRA,
  "/outsourced-bookkeeping-uae": BOOKKEEPING_EXTRA,
  "/payroll-services-chennai": ["tds-return-filing-deadlines", "post-incorporation-compliance-checklist", "documents-checklist-before-auditor-visit"],
  "/rera": ["joint-development-agreement-tax-chennai", "post-incorporation-compliance-checklist"],
  "/section-8-company-registration-chennai": ["moa-objects-clause-drafting"],
  "/tax-audit-chennai": ["statutory-audit-checklist", "business-personal-expenses-separate", "documents-checklist-before-auditor-visit"],
  "/trademark-registration-chennai": ["company-name-rejection-reasons"],
  "/transfer-pricing-audit": ["income-tax-act-2025-section-mapping", "statutory-audit-checklist"],
  // Third guide (trust-vs-society-vs-section8) appears on its scheduled publish date.
  "/trust": ["12a-80g-registration-guide-chennai-ngos", "fcra-registration", "trust-vs-society-vs-section8"],
};
