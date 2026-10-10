import GoogleReviews from "@/components/GoogleReviews";
import EnquiryCard from "@/components/EnquiryCard";
import { CheckSticker, CoinSticker } from "@/components/Stickers";
import TrackedAnchor from "@/components/TrackedAnchor";
import { EnquireButton } from "@/components/WhatsAppEnquiry";
import { BOOKING_LINK, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export default function CTASection({
  title = "Let's simplify your compliance.",
  subtitle = "Talk to a chartered accountant in Chennai today — no obligation, no jargon.",
  showForm = true,
  service,
}: {
  title?: string;
  subtitle?: string;
  /** Show the WhatsApp enquiry card (no form fields). */
  showForm?: boolean;
  /** Service the pre-typed WhatsApp message is about. */
  service?: string;
}) {
  return (
    <>
      {showForm && <GoogleReviews className="bg-white pt-16" />}
      <section id={showForm ? "get-started" : undefined} className="scroll-mt-20 bg-white py-16">
        <div className="container-page">
          {/* Electric-blue sticker panel: blue is a surface here, never the CTA. */}
          <div className="relative overflow-hidden rounded-[40px] border border-carbon bg-electric-blue px-6 py-12 md:px-12">
            <CoinSticker className="pointer-events-none absolute -top-3 right-8 hidden w-20 rotate-12 md:block" />
            <CheckSticker className="pointer-events-none absolute bottom-6 left-[44%] hidden w-14 -rotate-12 lg:block" />
            <div className={showForm ? "relative grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center" : "relative text-center"}>
              <div>
                <p className="sticker-tag bg-sunburst">Get started</p>
                <h2 className="mt-4 text-5xl text-carbon md:text-7xl">{title}</h2>
                <p className={`mt-4 max-w-xl text-lg text-carbon ${showForm ? "" : "mx-auto"}`}>{subtitle}</p>
                <div className={`mt-8 flex flex-wrap gap-3 ${showForm ? "" : "justify-center"}`}>
                  <TrackedAnchor
                    action="book"
                    placement="cta-section"
                    href={BOOKING_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full sm:w-auto border border-carbon bg-carbon px-6 text-sm font-bold uppercase tracking-[0.032em] text-white transition-opacity hover:opacity-85"
                  >
                    Book a Free Consultation
                  </TrackedAnchor>
                  <TrackedAnchor
                    action="call"
                    placement="cta-section"
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full sm:w-auto border border-carbon bg-white px-6 text-sm font-bold uppercase tracking-[0.032em] text-carbon transition-colors hover:bg-lavender"
                  >
                    Call {PHONE_DISPLAY}
                  </TrackedAnchor>
                  <EnquireButton
                    service={service}
                    placement="cta-section"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full sm:w-auto border border-carbon bg-[#25D366] px-6 text-sm font-bold uppercase tracking-[0.032em] text-carbon transition-opacity hover:opacity-85"
                  >
                    WhatsApp Us
                  </EnquireButton>
                </div>
              </div>
              {showForm && <EnquiryCard service={service} placement="cta-section" />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
