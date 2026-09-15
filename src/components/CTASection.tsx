import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export default function CTASection({
  title = "Let's simplify your compliance.",
  subtitle = "Talk to a chartered accountant in Chennai today — no obligation, no jargon.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="container-page pb-16">
      <div className="rounded-[var(--radius-card)] bg-[var(--color-navy-900)] px-8 py-12 text-center text-white md:px-16">
        <h2 className="text-3xl font-medium md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">{subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-[var(--radius-button)] bg-white px-6 py-3 text-sm font-medium text-[var(--color-navy-900)] hover:bg-gold-100"
          >
            Get Free Quote
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="rounded-[var(--radius-button)] border border-white/30 px-6 py-3 text-sm font-medium hover:bg-white/10"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
