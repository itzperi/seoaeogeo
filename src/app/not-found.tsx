import Link from "next/link";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-paper py-24">
      <div className="container-page text-center">
        <p className="eyebrow text-sm text-slate">404</p>
        <h1 className="mt-3 text-3xl text-obsidian">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 text-slate">
          The page you&apos;re looking for may have moved. Try one of our
          services below, or head back to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {SERVICES.slice(0, 6).map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="rounded-buttons border border-ash px-4 py-2 text-sm text-obsidian hover:bg-fog"
            >
              {s.name}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="mt-8 inline-block rounded-buttons bg-royal-violet px-6 py-3 text-sm font-medium text-white"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
