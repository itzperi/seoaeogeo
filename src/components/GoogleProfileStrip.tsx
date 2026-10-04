import TrackedAnchor from "@/components/TrackedAnchor";
import {
  ADDRESS_FULL,
  BUSINESS_HOURS,
  BUSINESS_NAME,
  GBP_DIRECTIONS_URL,
  GBP_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  PLUS_CODE,
} from "@/lib/site";

// Visible name / address / phone / hours that match the Google Business
// Profile character for character, with links to that exact listing.
// Repeating the same NAP + listing link on every service and area page
// helps Google treat the website and the profile as one business, which is
// what lets the profile surface for the same local searches.
export default function GoogleProfileStrip({ service }: { service?: string }) {
  return (
    <section className="border-y border-carbon bg-concrete-gray py-10" aria-labelledby="google-profile-heading">
      <div className="container-page grid grid-cols-1 gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <p className="sticker-tag bg-white">On Google Maps</p>
          <h2 id="google-profile-heading" className="mt-3 text-4xl text-carbon md:text-5xl">
            {service ? `${service} in Anna Nagar, Chennai` : `${BUSINESS_NAME} on Google`}
          </h2>
          <address className="mt-4 not-italic text-[15px] leading-relaxed text-carbon">
            <strong>{BUSINESS_NAME}</strong>
            <br />
            {ADDRESS_FULL}
            <br />
            Plus code: {PLUS_CODE}
            <br />
            <a href={`tel:${PHONE_TEL}`} className="underline underline-offset-2">
              {PHONE_DISPLAY}
            </a>
            {" · "}
            {BUSINESS_HOURS.map((h) => `${h.days}: ${h.hours}`).join(" · ")}
          </address>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a
            href={GBP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center rounded-full border border-carbon bg-white px-6 text-sm font-bold uppercase tracking-[0.032em] text-carbon hover:bg-sky-wash"
          >
            View our Google profile
          </a>
          <TrackedAnchor
            action="call"
            placement="profile-strip"
            href={GBP_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center rounded-full border border-carbon bg-carbon px-6 text-sm font-bold uppercase tracking-[0.032em] text-white hover:opacity-85"
          >
            Get directions
          </TrackedAnchor>
        </div>
      </div>
    </section>
  );
}
