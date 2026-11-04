import TrackedAnchor from "@/components/TrackedAnchor";
import { EnquireButton } from "@/components/WhatsAppEnquiry";
import { CheckSticker, CoinSticker, DocSticker, Ribbon } from "@/components/Stickers";
import Link from "next/link";
import type { ReactNode } from "react";
import { PAGE_DATES } from "@/lib/page-dates";
import { JsonLd, speakableSchema, webPageReviewSchema } from "@/lib/schema";
import { BOOKING_LINK, FOUNDER_NAME, ICAI_MEMBERSHIP_NO, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

// Sky-wash poster hero: sticker tag, crushed condensed headline with the
// blue ribbon behind it, stickers around the edges, black-filled Book CTA.
export default function PageHero({
  eyebrow,
  h1,
  subhead,
  reviewedPath,
  service,
  schema = true,
  lead,
}: {
  eyebrow: string;
  h1: string;
  subhead: string;
  /** Route of a service/area page; shows "Reviewed by … · Updated …" from its git date. */
  reviewedPath?: string;
  /** Service named in the pre-typed WhatsApp enquiry (defaults to the H1). */
  service?: string;
  /** false when the page emits its WebPage node inside its own @graph. */
  schema?: boolean;
  /** 40–55 word direct answer shown as the first paragraph under the H1. */
  lead?: ReactNode;
}) {
  const updated = reviewedPath ? PAGE_DATES[reviewedPath] : undefined;
  return (
    <>
    {schema && reviewedPath && updated && <JsonLd data={webPageReviewSchema(reviewedPath, h1, updated)} />}
    {schema && lead && <JsonLd data={speakableSchema(["h1", "#lead-answer"])} />}
    <section className="relative overflow-hidden border-b border-carbon bg-sky-wash">
      <Ribbon className="pointer-events-none absolute -bottom-6 left-0 h-40 w-full opacity-90 md:h-56" />
      <CoinSticker className="pointer-events-none absolute right-[6%] top-10 hidden w-20 rotate-12 md:block" />
      <CheckSticker className="pointer-events-none absolute right-[16%] bottom-24 hidden w-16 -rotate-6 lg:block" />
      <DocSticker className="pointer-events-none absolute right-[3%] bottom-32 hidden w-14 rotate-[18deg] lg:block" />

      <div className="container-page relative pb-28 pt-12 md:pb-40 md:pt-16">
        <p className="sticker-tag bg-sunburst">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-[44px] text-carbon sm:text-6xl md:text-7xl lg:text-[88px]">{h1}</h1>
        {lead && reviewedPath && updated && (
          <div className="mt-5 text-sm text-carbon/80">
            Reviewed by{" "}
            <Link href="/about-us" className="font-semibold underline underline-offset-2">
              {FOUNDER_NAME}
            </Link>
            , Chartered Accountant{ICAI_MEMBERSHIP_NO && <> (ICAI M. No. {ICAI_MEMBERSHIP_NO})</>} · Updated{" "}
            <time dateTime={updated}>
              {new Date(`${updated}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}
            </time>
          </div>
        )}
        {lead && (
          <p id="lead-answer" className="mt-6 max-w-3xl text-lg leading-relaxed text-carbon md:text-xl">
            {lead}
          </p>
        )}
        <p className={`${lead ? "mt-4 text-base md:text-lg" : "mt-6 text-lg md:text-xl"} max-w-2xl leading-relaxed text-carbon`}>{subhead}</p>
        {!lead && reviewedPath && updated && (
          <p className="mt-4 text-sm text-carbon/80">
            Reviewed by{" "}
            <Link href="/about-us" className="font-semibold underline underline-offset-2">
              {FOUNDER_NAME}
            </Link>
            , Chartered Accountant{ICAI_MEMBERSHIP_NO && <> (ICAI M. No. {ICAI_MEMBERSHIP_NO})</>} · Updated{" "}
            <time dateTime={updated}>
              {new Date(`${updated}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}
            </time>
          </p>
        )}
        <div className="mt-8 flex flex-wrap gap-3">
          <EnquireButton
            service={service ?? h1}
            placement="page-hero"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full sm:w-auto border border-carbon bg-[#25D366] px-6 text-sm font-bold uppercase tracking-[0.032em] text-carbon transition-opacity hover:opacity-85"
          >
            Enquire on WhatsApp
          </EnquireButton>
          <TrackedAnchor
            action="book"
            placement="page-hero"
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full sm:w-auto border border-carbon bg-white px-6 text-sm font-bold uppercase tracking-[0.032em] text-carbon transition-colors hover:bg-lavender"
          >
            Book a 15-Minute Consultation
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
