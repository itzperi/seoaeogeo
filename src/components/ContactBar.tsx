"use client";

import { usePathname } from "next/navigation";
import { BOOKING_LINK, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/lib/site";
import { track } from "@/lib/track";

const WHATSAPP_HREF = `${WHATSAPP_LINK}?text=${encodeURIComponent("Hi C S Rushil & Co., I'd like to speak to a chartered accountant about ")}`;

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.6a1 1 0 01-.25 1z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.15l-.3-.18-3 .78.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.25-.12-1.46-.72-1.7-.8-.22-.08-.38-.12-.55.12-.16.25-.63.8-.77.96-.14.17-.28.19-.53.06a6.7 6.7 0 01-3.33-2.9c-.25-.43.25-.4.72-1.34a.45.45 0 00-.02-.43c-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 00-.65.3 2.74 2.74 0 00-.86 2.04 4.76 4.76 0 001 2.53 10.9 10.9 0 004.18 3.7c1.56.67 2.17.73 2.95.61a2.5 2.5 0 001.65-1.16 2.04 2.04 0 00.14-1.16c-.06-.1-.22-.16-.47-.29z"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Always-visible contact actions: a bottom bar on phones, a floating stack on
// desktop. Every click is logged to Supabase (cta_clicks) for the funnel view.
export default function ContactBar() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      {/* Phone: fixed bottom bar with three equal buttons. */}
      <nav
        aria-label="Contact us"
        className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-carbon bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <a
          href={`tel:${PHONE_TEL}`}
          onClick={() => track("call", "mobile-bar")}
          className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 bg-white py-2.5 text-xs font-bold uppercase tracking-[0.032em] text-carbon"
        >
          <PhoneIcon />
          Call
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp", "mobile-bar")}
          className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 border-x border-carbon bg-[#25D366] py-2.5 text-xs font-bold uppercase tracking-[0.032em] text-carbon"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
        <a
          href={BOOKING_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("book", "mobile-bar")}
          className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 bg-carbon py-2.5 text-xs font-bold uppercase tracking-[0.032em] text-white"
        >
          <CalendarIcon />
          Book a call
        </a>
      </nav>
      {/* Keeps the footer's last lines from hiding behind the bar. */}
      <div className="h-16 md:hidden" aria-hidden="true" />

      {/* Desktop: floating stack, bottom-right. */}
      <div className="fixed bottom-6 right-6 z-50 hidden flex-col items-end gap-2 md:flex">
        <a
          href={BOOKING_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("book", "desktop-float")}
          className="flex min-h-[48px] items-center gap-2 rounded-full border border-carbon bg-carbon px-5 text-[13px] font-bold uppercase tracking-[0.032em] text-white hover:opacity-85"
        >
          <CalendarIcon />
          Book a free consultation
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp", "desktop-float")}
          className="flex min-h-[48px] items-center gap-2 rounded-full border border-carbon bg-[#25D366] px-5 text-[13px] font-bold uppercase tracking-[0.032em] text-carbon hover:opacity-90"
        >
          <WhatsAppIcon />
          WhatsApp us
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          onClick={() => track("call", "desktop-float")}
          className="flex min-h-[48px] items-center gap-2 rounded-full border border-carbon bg-white px-5 text-[13px] font-bold uppercase tracking-[0.032em] text-carbon hover:bg-sky-wash"
        >
          <PhoneIcon />
          {PHONE_DISPLAY}
        </a>
      </div>
    </>
  );
}
