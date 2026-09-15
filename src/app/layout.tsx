import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd, organizationSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
