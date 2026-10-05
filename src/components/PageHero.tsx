import TrackedAnchor from "@/components/TrackedAnchor";
import { CheckSticker, CoinSticker, DocSticker, Ribbon } from "@/components/Stickers";
import Link from "next/link";
import { PAGE_DATES } from "@/lib/page-dates";
import { JsonLd, webPageReviewSchema } from "@/lib/schema";
import { BOOKING_LINK, FOUNDER_NAME, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/lib/site";

// Sky-wash poster hero: sticker tag, crushed condensed headline with the
// blue ribbon behind it, stickers around the edges, black-filled Book CTA.
export default function PageHero({
  eyebrow,
  h1,
  subhead,
  reviewedPath,
}: {
  eyebrow: string;
  h1: string;
  subhead: string;
  /** Route of a service/area page; shows "Reviewed by … · Updated …" from its git date. */
  reviewedPath?: string;
}) {
  const updated = reviewedPath ? PAGE_DATES[reviewedPath] : undefined;
  return (
    <>
    {reviewedPath && updated && <JsonLd data={webPageReviewSchema(reviewedPath, h1, updated)} />}
    <section className="relative overflow-hidden border-b border-carbon bg-sky-wash">
      <Ribbon className="pointer-events-none absolute -bottom-6 left-0 h-40 w-full opacity-90 md:h-56" />
      <CoinSticker className="pointer-events-none absolute right-[6%] top-10 hidden w-20 rotate-12 md:block" />
      <CheckSticker className="pointer-events-none absolute right-[16%] bottom-24 hidden w-16 -rotate-6 lg:block" />
      <DocSticker className="pointer-events-none absolute right-[3%] bottom-32 hidden w-14 rotate-[18deg] lg:block" />

      <div className="container-page relative pb-28 pt-12 md:pb-40 md:pt-16">
        <p className="sticker-tag bg-sunburst">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-[44px] text-carbon sm:text-6xl md:text-7xl lg:text-[88px]">{h1}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-carbon md:text-xl">{subhead}</p>
        {reviewedPath && updated && (
          <p className="mt-4 text-sm text-carbon/80">
            Reviewed by{" "}
            <Link href="/about-us" className="font-semibold underline underline-offset-2">
              {FOUNDER_NAME}
            </Link>
            , Chartered Accountant · Updated{" "}
            <time dateTime={updated}>
              {new Date(`${updated}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}
            </time>
          </p>
        )}
        <div className="mt-8 flex flex-wrap gap-3">
          <TrackedAnchor
            action="book"
            placement="page-hero"
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full sm:w-auto border border-carbon bg-carbon px-6 text-sm font-bold uppercase tracking-[0.032em] text-white transition-opacity hover:opacity-85"
          >
            Book a Free Consultation
          </TrackedAnchor>
          <TrackedAnchor
            action="whatsapp"
            placement="page-hero"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full sm:w-auto border border-carbon bg-white px-6 text-sm font-bold uppercase tracking-[0.032em] text-carbon transition-colors hover:bg-mint-pop"
          >
            WhatsApp Us
          </TrackedAnchor>
          <TrackedAnchor
            action="call"
            placement="page-hero"
            href={`tel:${PHONE_TEL}`}
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full sm:w-auto border border-carbon bg-white px-6 text-sm font-bold uppercase tracking-[0.032em] text-carbon transition-colors hover:bg-lavender"
          >
            Call {PHONE_DISPLAY}
          </TrackedAnchor>
        </div>
      </div>
    </section>
    </>
  );
}
