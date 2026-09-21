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
};

export default nextConfig;
