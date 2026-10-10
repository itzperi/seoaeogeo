import { EnquireButton } from "@/components/WhatsAppEnquiry";
import TrackedAnchor from "@/components/TrackedAnchor";
import { BOOKING_LINK, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

// No-form enquiry: one tap opens WhatsApp with a ready-typed message. When the
// page is about a service, the main button is for that service; otherwise the
// visitor picks a topic from the quick list.
const QUICK_PICKS = [
  "Company registration",
  "GST registration, returns or a GST notice",
  "Income tax return or an income tax notice",
  "Audit (statutory, tax or transfer pricing)",
  "Virtual CFO / monthly accounting",
  "Setting up an Indian company from abroad",
  "NRI tax or selling property in India",
  "Outsourced accounting for my CPA / UK practice",
];

const PILL =
  "inline-flex min-h-[44px] items-center rounded-full border border-carbon bg-white px-4 text-left text-sm font-medium text-carbon transition-colors hover:bg-mint-pop";

export default function EnquiryCard({ service, placement }: { service?: string; placement: string }) {
  return (
    <div className="rounded-[28px] border border-carbon bg-white p-6 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.06em] text-slate">No forms · reply on WhatsApp</p>
      <h3 className="mt-2 text-3xl text-carbon">{service ? `Ask about ${service}` : "What do you need help with?"}</h3>
      <p className="mt-2 text-sm text-slate">
        Tap below and WhatsApp opens with your message already typed. A chartered accountant replies in the chat.
      </p>

      {service ? (
        <EnquireButton
          service={service}
          placement={placement}
          className="mt-5 flex min-h-[52px] w-full items-center justify-center rounded-full border border-carbon bg-[#25D366] px-6 text-sm font-bold uppercase tracking-[0.032em] text-carbon"
        >
          Enquire on WhatsApp
        </EnquireButton>
      ) : (
        <div className="mt-5 flex flex-wrap gap-2">
          {QUICK_PICKS.map((topic) => (
            <EnquireButton key={topic} service={topic} placement={placement} className={PILL}>
              {topic}
            </EnquireButton>
          ))}
          <EnquireButton placement={placement} className={`${PILL} bg-[#25D366]`}>
            Something else
          </EnquireButton>
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <TrackedAnchor action="call" placement={`${placement}-card`} href={`tel:${PHONE_TEL}`} className="font-medium text-carbon underline underline-offset-2">
          Call {PHONE_DISPLAY}
        </TrackedAnchor>
        <TrackedAnchor
          action="book"
          placement={`${placement}-card`}
          href={BOOKING_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-carbon underline underline-offset-2"
        >
          Book a video call
        </TrackedAnchor>
      </div>
    </div>
  );
}
