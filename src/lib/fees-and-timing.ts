// Fee and reply-time values for the firm to fill. Every field is null until
// the firm supplies a figure, and nothing is shown while a field is null.
// Government fees are kept apart from professional fees on purpose.
// Placeholders: {{FEE_PROFESSIONAL_*}}, {{FEE_GOVERNMENT_*}}, {{REPLY_TIME}}.

export const REPLY_TIME: string | null = null; // e.g. "within two working hours", from the firm

export type StartingFee = {
  service: string;
  professionalFrom: number | null; // {{FEE_PROFESSIONAL_<SERVICE>}}, in rupees, excl. tax
  governmentFees: string | null; // {{FEE_GOVERNMENT_<SERVICE>}}, shown as text, paid to the government
  includes: string[];
  excludes: string[];
  updated: string | null; // date the firm confirmed the figures
};

// Starting fees by page. Every entry is null until the firm supplies it.
// Keys are page paths. Pages not listed show no fee block.
export const STARTING_FEES: Record<string, StartingFee | null> = {
  "/income-tax-consultant-for-hni-chennai": null, // {{FEE_PROFESSIONAL_HNI}}
  "/gst-return-filing-chennai": null, // {{FEE_PROFESSIONAL_GST_RETURN}}
  "/annual-compliance-package": null, // {{FEE_PROFESSIONAL_ANNUAL_COMPLIANCE}}
  "/income-tax-notice-reply-chennai": null, // {{FEE_PROFESSIONAL_IT_NOTICE}}
  "/gst-notice-reply-chennai": null, // {{FEE_PROFESSIONAL_GST_NOTICE}}
};
