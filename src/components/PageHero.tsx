import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export default function PageHero({
  eyebrow,
  h1,
  subhead,
}: {
  eyebrow: string;
  h1: string;
  subhead: string;
}) {
  return (
    <section className="bg-royal-violet">
      <div className="container-page py-16 md:py-24">
        <p className="eyebrow text-sm text-lemon-zest">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.13] text-white md:text-5xl">
          {h1}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          {subhead}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-buttons bg-white px-6 py-3 text-sm font-medium text-obsidian transition hover:bg-lilac-mist"
          >
            Book a Free Consultation
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="rounded-buttons border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
