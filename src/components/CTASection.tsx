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
    <section className="bg-paper py-16">
      <div className="container-page">
        <div className="rounded-cards bg-royal-violet px-8 py-14 text-center md:px-16">
          <p className="eyebrow text-sm text-lemon-zest">Get Started</p>
          <h2 className="mt-3 text-3xl text-white md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">{subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-largecta bg-white px-6 py-3 text-sm font-medium text-obsidian hover:bg-lilac-mist"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="rounded-largecta border border-white/40 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
