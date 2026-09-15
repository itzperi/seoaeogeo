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
    <section className="bg-[var(--color-navy-950)] text-white">
      <div className="container-page py-16 md:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold-400">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-medium leading-[1.1] md:text-5xl">
          {h1}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/75">{subhead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-[var(--radius-button)] bg-white px-6 py-3 text-sm font-medium text-[var(--color-navy-900)] transition hover:bg-gold-100"
          >
            Book a Free Consultation
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="rounded-[var(--radius-button)] border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
