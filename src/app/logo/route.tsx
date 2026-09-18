import { ImageResponse } from "next/og";

// Serves the firm's mark as a stable, resolvable image URL — referenced from
// organizationSchema()'s `logo`/`image` fields (src/lib/schema.tsx). Matches
// the on-page <Logo /> mark (src/components/Logo.tsx) with zero drift.
//
// Deliberately at /logo, not /logo.png — a route folder literally named
// "logo.png" does not resolve correctly under this Next.js version's App
// Router (confirmed: it 404s despite compiling), so this avoids that bug
// rather than fighting it. Google's structured-data logo requirement is a
// resolvable image URL, not a specific extension.
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#5423e7",
          border: "10px solid #ffc233",
          color: "#ffffff",
          fontSize: 180,
          fontWeight: 700,
          letterSpacing: 6,
          fontFamily: "sans-serif",
        }}
      >
        CSR
      </div>
    ),
    { width: 512, height: 512 }
  );
}
