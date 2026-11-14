import type { NextConfig } from "next";
import type { Redirect } from "next/dist/lib/load-custom-routes";

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
  async redirects(): Promise<Redirect[]> {
    return [
      // The Chennai hub duplicated the homepage's intent; one URL now carries "CA firm in Chennai".
      { source: "/chartered-accountant-chennai", destination: "/", statusCode: 301 },
      // The combined USA & UK page became the NRI hub with separate country pages.
      { source: "/nri-tax-services-usa-uk", destination: "/nri-tax-services", statusCode: 301 },
      // The pricing page was removed; send old links to the contact page.
      // "CA fees in Chennai" searchers need the fee-transparency checks (ICAI: no
      // fee figures), so send them to the guide rather than the contact page.
      // Thin posts (under 460 words, zero impressions Aug-Nov 2026) merged into
      // the service page or stronger guide that owns the same search (13 Nov 2026).
      { source: "/blog/llp-vs-opc-vs-pvt-ltd", destination: "/company-registration-chennai", statusCode: 301 },
      { source: "/blog/startup-india-registration", destination: "/startup-india-registration-chennai", statusCode: 301 },
      { source: "/blog/annual-roc-filing-calendar", destination: "/roc-compliances", statusCode: 301 },
      { source: "/blog/audit-applicability-thresholds", destination: "/audit-and-assurance", statusCode: 301 },
      { source: "/blog/trust-vs-society-vs-section8", destination: "/trust", statusCode: 301 },
      { source: "/blog/rera-registration-renewal", destination: "/rera", statusCode: 301 },
      { source: "/blog/old-vs-new-tax-regime", destination: "/income-tax-return-filing-chennai", statusCode: 301 },
      { source: "/blog/gst-registration-online-sellers-chennai", destination: "/gst-registration-chennai", statusCode: 301 },
      { source: "/blog/common-compliance-mistakes-chennai-startups", destination: "/annual-compliance-package", statusCode: 301 },
      { source: "/blog/msme-loan-schemes-tamil-nadu", destination: "/msme-udyam-registration-chennai", statusCode: 301 },
      { source: "/blog/outgrown-bookkeeping-signs", destination: "/bookkeeping-services-chennai", statusCode: 301 },
      { source: "/blog/cash-flow-forecasting-framework", destination: "/virtual-cfo-services", statusCode: 301 },
      { source: "/blog/virtual-cfo-vs-full-time-cfo-cost-comparison", destination: "/virtual-cfo-services", statusCode: 301 },
      { source: "/blog/gst-litigation-t-nagar-jewellery", destination: "/blog/itc-mismatch-notices", statusCode: 301 },
      // Income-tax area pages merged into /direct-tax (owner-approved, 14 Nov 2026).
      { source: "/income-tax-consultant-alwarpet-chennai", destination: "/direct-tax", statusCode: 301 },
      { source: "/income-tax-consultant-anna-nagar-chennai", destination: "/direct-tax", statusCode: 301 },
      { source: "/income-tax-consultant-besant-nagar-chennai", destination: "/direct-tax", statusCode: 301 },
      { source: "/income-tax-consultant-gopalapuram-chennai", destination: "/direct-tax", statusCode: 301 },
      { source: "/income-tax-consultant-kotturpuram-chennai", destination: "/direct-tax", statusCode: 301 },
      { source: "/income-tax-consultant-neelankarai-ecr-chennai", destination: "/direct-tax", statusCode: 301 },
      { source: "/income-tax-consultant-ra-puram-chennai", destination: "/direct-tax", statusCode: 301 },
      { source: "/ca-fees-chennai", destination: "/blog/how-to-choose-a-chartered-accountant-in-chennai", statusCode: 301 },
      // Merged into the company registration hub (it competed for the same searches).
      { source: "/formation-of-business-entity", destination: "/company-registration-chennai", statusCode: 301 },
      // Thin locality posts merged into their service/area pages (Oct 2026).
      { source: "/blog/12a-80g-adyar-institutions", destination: "/trust", statusCode: 301 },
      { source: "/blog/advance-tax-anna-nagar-shop-owners", destination: "/direct-tax", statusCode: 301 },
      { source: "/blog/bookkeeping-adyar-clinics", destination: "/bookkeeping-services-chennai", statusCode: 301 },
      { source: "/blog/capital-gains-kilpauk-property", destination: "/direct-tax", statusCode: 301 },
      { source: "/blog/choosing-ca-firm-anna-nagar", destination: "/chartered-accountant-anna-nagar-chennai", statusCode: 301 },
      { source: "/blog/direct-tax-mylapore-trading-families", destination: "/direct-tax", statusCode: 301 },
      { source: "/blog/fcra-mylapore-cultural-institutions", destination: "/trust", statusCode: 301 },
      { source: "/blog/first-gst-return-tambaram-shops", destination: "/gst-return-filing-chennai", statusCode: 301 },
      { source: "/blog/form26as-mismatch-velachery", destination: "/income-tax-return-filing-chennai", statusCode: 301 },
      { source: "/blog/gst-litigation-guindy-industrial", destination: "/gst-litigation-chennai", statusCode: 301 },
      { source: "/blog/gst-notice-anna-nagar-traders", destination: "/gst-notice-reply-chennai", statusCode: 301 },
      { source: "/blog/gst-registration-porur-retail", destination: "/gst-registration-chennai", statusCode: 301 },
      { source: "/blog/llp-registration-nungambakkam-professional-firms", destination: "/llp-registration-chennai", statusCode: 301 },
      { source: "/blog/llp-registration-porur-consultancies", destination: "/llp-registration-chennai", statusCode: 301 },
      { source: "/blog/management-consultancy-anna-nagar-business", destination: "/management-consultancy", statusCode: 301 },
      { source: "/blog/msme-loan-tambaram-traders", destination: "/msme-udyam-registration-chennai", statusCode: 301 },
      { source: "/blog/payroll-ambattur-factory-workforce", destination: "/payroll-services-chennai", statusCode: 301 },
      { source: "/blog/payroll-omr-startup-esop", destination: "/payroll-services-chennai", statusCode: 301 },
      { source: "/blog/roc-compliance-ambattur-manufacturers", destination: "/roc-compliances", statusCode: 301 },
      { source: "/blog/roc-compliance-anna-nagar-startups", destination: "/roc-compliances", statusCode: 301 },
      { source: "/blog/roc-registered-office-change-guindy", destination: "/roc-compliances", statusCode: 301 },
      { source: "/blog/statutory-audit-ambattur-manufacturers", destination: "/statutory-audit-chennai", statusCode: 301 },
      { source: "/blog/statutory-audit-anna-nagar-companies", destination: "/statutory-audit-chennai", statusCode: 301 },
      { source: "/blog/statutory-audit-nungambakkam-established", destination: "/statutory-audit-chennai", statusCode: 301 },
      { source: "/blog/tax-audit-kilpauk-doctors", destination: "/tax-audit-chennai", statusCode: 301 },
      { source: "/blog/tax-audit-threshold-anna-nagar", destination: "/tax-audit-chennai", statusCode: 301 },
      { source: "/blog/tax-audit-t-nagar-traders", destination: "/tax-audit-chennai", statusCode: 301 },
      { source: "/blog/transfer-pricing-omr-subsidiaries", destination: "/transfer-pricing-audit", statusCode: 301 },
      { source: "/blog/udyam-registration-anna-nagar-manufacturers", destination: "/msme-udyam-registration-chennai", statusCode: 301 },
      { source: "/blog/virtual-cfo-guindy-corporate-offices", destination: "/virtual-cfo-services", statusCode: 301 },
      { source: "/blog/virtual-cfo-vs-accountant-nungambakkam", destination: "/virtual-cfo-services", statusCode: 301 },
      // Short link for review requests (WhatsApp, QR code on the office desk).
      { source: "/review", destination: "https://search.google.com/local/writereview?placeid=ChIJzXoB0DFnUjoRv2EUuO2l7n8", permanent: false },
    ];
  },
};

export default nextConfig;
