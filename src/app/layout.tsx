import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import Marquee from "@/components/Marquee";
import { JsonLd, organizationSchema, personSchema, websiteSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

// GA4 loads only when a measurement ID is configured (Vercel env var).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Anton stands in for the condensed 800-weight display face of the Slush
// style reference; Inter stands in for Aeonik Pro (UI and body).
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "C S Rushil & Co. | Chartered Accountants in Chennai",
    template: "%s | C S Rushil & Co.",
  },
  description:
    "C S Rushil & Co. is a Chennai-based chartered accountancy firm offering company incorporation, GST, audit, direct tax, ROC compliance, and virtual CFO services.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "C S Rushil & Co.",
    url: SITE_URL,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
        <JsonLd data={organizationSchema()} />
        <JsonLd data={personSchema()} />
        <JsonLd data={websiteSchema()} />
        <Marquee />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ContactBar />
      </body>
    </html>
  );
}
