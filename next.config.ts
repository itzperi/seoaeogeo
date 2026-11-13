import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  // Required for cPanel/Passenger Node.js App hosting (GoDaddy and similar):
  // this makes `next build` emit a self-contained .next/standalone/server.js
  // that Passenger can run directly, bundling only the node_modules the app
  // actually needs rather than requiring `npm install` on the server. See
  // .cpanel.yml and DEPLOYMENT.md for the full deploy flow.
  output: "standalone",
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // The Chennai hub duplicated the homepage's intent; one URL now carries "CA firm in Chennai".
      { source: "/chartered-accountant-chennai", destination: "/", permanent: true },
      // The combined USA & UK page became the NRI hub with separate country pages.
      { source: "/nri-tax-services-usa-uk", destination: "/nri-tax-services", permanent: true },
      // The pricing page was removed; send old links to the contact page.
      // "CA fees in Chennai" searchers need the fee-transparency checks (ICAI: no
      // fee figures), so send them to the guide rather than the contact page.
      // Thin posts (under 460 words, zero impressions Aug-Nov 2026) merged into
      // the service page or stronger guide that owns the same search (13 Nov 2026).
      { source: "/blog/llp-vs-opc-vs-pvt-ltd", destination: "/company-registration-chennai", permanent: true },
      { source: "/blog/startup-india-registration", destination: "/startup-india-registration-chennai", permanent: true },
      { source: "/blog/annual-roc-filing-calendar", destination: "/roc-compliances", permanent: true },
      { source: "/blog/audit-applicability-thresholds", destination: "/audit-and-assurance", permanent: true },
      { source: "/blog/trust-vs-society-vs-section8", destination: "/trust", permanent: true },
      { source: "/blog/rera-registration-renewal", destination: "/rera", permanent: true },
      { source: "/blog/old-vs-new-tax-regime", destination: "/income-tax-return-filing-chennai", permanent: true },
      { source: "/blog/gst-registration-online-sellers-chennai", destination: "/gst-registration-chennai", permanent: true },
      { source: "/blog/common-compliance-mistakes-chennai-startups", destination: "/annual-compliance-package", permanent: true },
      { source: "/blog/msme-loan-schemes-tamil-nadu", destination: "/msme-udyam-registration-chennai", permanent: true },
      { source: "/blog/outgrown-bookkeeping-signs", destination: "/bookkeeping-services-chennai", permanent: true },
      { source: "/blog/cash-flow-forecasting-framework", destination: "/virtual-cfo-services", permanent: true },
      { source: "/blog/virtual-cfo-vs-full-time-cfo-cost-comparison", destination: "/virtual-cfo-services", permanent: true },
      { source: "/blog/gst-litigation-t-nagar-jewellery", destination: "/blog/itc-mismatch-notices", permanent: true },
      { source: "/ca-fees-chennai", destination: "/blog/how-to-choose-a-chartered-accountant-in-chennai", permanent: true },
      // Merged into the company registration hub (it competed for the same searches).
      { source: "/formation-of-business-entity", destination: "/company-registration-chennai", permanent: true },
      // Thin locality posts merged into their service/area pages (Oct 2026).
      { source: "/blog/12a-80g-adyar-institutions", destination: "/trust", permanent: true },
      { source: "/blog/advance-tax-anna-nagar-shop-owners", destination: "/direct-tax", permanent: true },
      { source: "/blog/bookkeeping-adyar-clinics", destination: "/bookkeeping-services-chennai", permanent: true },
      { source: "/blog/capital-gains-kilpauk-property", destination: "/direct-tax", permanent: true },
      { source: "/blog/choosing-ca-firm-anna-nagar", destination: "/chartered-accountant-anna-nagar-chennai", permanent: true },
      { source: "/blog/direct-tax-mylapore-trading-families", destination: "/direct-tax", permanent: true },
      { source: "/blog/fcra-mylapore-cultural-institutions", destination: "/trust", permanent: true },
      { source: "/blog/first-gst-return-tambaram-shops", destination: "/gst-return-filing-chennai", permanent: true },
      { source: "/blog/form26as-mismatch-velachery", destination: "/income-tax-return-filing-chennai", permanent: true },
      { source: "/blog/gst-litigation-guindy-industrial", destination: "/gst-litigation-chennai", permanent: true },
      { source: "/blog/gst-notice-anna-nagar-traders", destination: "/gst-notice-reply-chennai", permanent: true },
      { source: "/blog/gst-registration-porur-retail", destination: "/gst-registration-chennai", permanent: true },
      { source: "/blog/llp-registration-nungambakkam-professional-firms", destination: "/llp-registration-chennai", permanent: true },
      { source: "/blog/llp-registration-porur-consultancies", destination: "/llp-registration-chennai", permanent: true },
      { source: "/blog/management-consultancy-anna-nagar-business", destination: "/management-consultancy", permanent: true },
      { source: "/blog/msme-loan-tambaram-traders", destination: "/msme-udyam-registration-chennai", permanent: true },
      { source: "/blog/payroll-ambattur-factory-workforce", destination: "/payroll-services-chennai", permanent: true },
      { source: "/blog/payroll-omr-startup-esop", destination: "/payroll-services-chennai", permanent: true },
      { source: "/blog/roc-compliance-ambattur-manufacturers", destination: "/roc-compliances", permanent: true },
      { source: "/blog/roc-compliance-anna-nagar-startups", destination: "/roc-compliances", permanent: true },
      { source: "/blog/roc-registered-office-change-guindy", destination: "/roc-compliances", permanent: true },
      { source: "/blog/statutory-audit-ambattur-manufacturers", destination: "/statutory-audit-chennai", permanent: true },
      { source: "/blog/statutory-audit-anna-nagar-companies", destination: "/statutory-audit-chennai", permanent: true },
      { source: "/blog/statutory-audit-nungambakkam-established", destination: "/statutory-audit-chennai", permanent: true },
      { source: "/blog/tax-audit-kilpauk-doctors", destination: "/tax-audit-chennai", permanent: true },
      { source: "/blog/tax-audit-threshold-anna-nagar", destination: "/tax-audit-chennai", permanent: true },
      { source: "/blog/tax-audit-t-nagar-traders", destination: "/tax-audit-chennai", permanent: true },
      { source: "/blog/transfer-pricing-omr-subsidiaries", destination: "/transfer-pricing-audit", permanent: true },
      { source: "/blog/udyam-registration-anna-nagar-manufacturers", destination: "/msme-udyam-registration-chennai", permanent: true },
      { source: "/blog/virtual-cfo-guindy-corporate-offices", destination: "/virtual-cfo-services", permanent: true },
      { source: "/blog/virtual-cfo-vs-accountant-nungambakkam", destination: "/virtual-cfo-services", permanent: true },
      // Short link for review requests (WhatsApp, QR code on the office desk).
      { source: "/review", destination: "https://search.google.com/local/writereview?placeid=ChIJzXoB0DFnUjoRv2EUuO2l7n8", permanent: false },
    ];
  },
};

export default nextConfig;
