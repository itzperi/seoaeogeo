"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/lib/site";
import { track } from "@/lib/track";

// Click-to-open WhatsApp enquiry. A visitor clicks "Enquire on WhatsApp" for a
// service, sees a ready-typed message they can edit, and one tap opens WhatsApp
// with it. Never opens on its own (ICAI: no unsolicited pop-ups) and asks for
// no form fields — the WhatsApp chat itself is the lead.

const EVENT = "csr:open-enquiry";
type Detail = { service?: string; placement: string };

export function openEnquiry(placement: string, service?: string) {
  window.dispatchEvent(new CustomEvent<Detail>(EVENT, { detail: { placement, service } }));
}

export function enquiryMessage(service: string | undefined, path: string) {
  const topic = service ? `I'm interested in ${service}.` : "I'd like to speak to a chartered accountant.";
  return `Hi C S Rushil & Co., ${topic} Please share the next steps.\n\n(Sent from csrushil.com${path})`;
}

export function whatsappHref(message: string) {
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
}

export function EnquireButton({
  service,
  placement,
  className,
  children,
}: {
  service?: string;
  placement: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button type="button" onClick={() => openEnquiry(placement, service)} className={className}>
      {children}
    </button>
  );
}

export default function EnquiryModal() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [openedOn, setOpenedOn] = useState("");
  const [detail, setDetail] = useState<Detail>({ placement: "unknown" });
  const [message, setMessage] = useState("");
  const sendRef = useRef<HTMLAnchorElement>(null);
  const lastFocus = useRef<Element | null>(null);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const d = (e as CustomEvent<Detail>).detail;
      lastFocus.current = document.activeElement;
      setDetail(d);
      setMessage(enquiryMessage(d.service, window.location.pathname));
      setOpenedOn(window.location.pathname);
      setOpen(true);
      track("enquiry_open", d.placement, d.service);
    };
    window.addEventListener(EVENT, onOpen);
    return () => window.removeEventListener(EVENT, onOpen);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    (lastFocus.current as HTMLElement | null)?.focus?.();
  }, []);

  useEffect(() => {
    if (!open || openedOn !== pathname) return;
    sendRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, openedOn, pathname, close]);

  // Hidden again if the visitor navigates away while it is open.
  const visible = open && openedOn === pathname;

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-carbon/50 p-0 sm:items-center sm:p-6" onClick={close}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        className="w-full max-w-lg rounded-t-[28px] border border-carbon bg-white p-6 sm:rounded-[28px] sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.06em] text-slate">Enquire on WhatsApp</p>
            <h2 id="enquiry-title" className="mt-1 text-3xl text-carbon">
              {detail.service ?? "Talk to a chartered accountant"}
            </h2>
          </div>
          <button type="button" onClick={close} aria-label="Close" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-carbon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <p className="mt-3 text-sm text-slate">
          Your message is ready. Edit it if you like, then tap send — it opens WhatsApp and a chartered accountant replies there.
        </p>
        <label htmlFor="enquiry-message" className="sr-only">
          Your message
        </label>
        <textarea
          id="enquiry-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="mt-4 w-full rounded-2xl border border-carbon bg-paper p-4 text-[15px] leading-relaxed text-carbon"
        />
        <a
          ref={sendRef}
          href={whatsappHref(message)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            track("whatsapp", `enquiry-${detail.placement}`, detail.service);
            close();
          }}
          className="mt-4 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full border border-carbon bg-[#25D366] px-6 text-sm font-bold uppercase tracking-[0.032em] text-carbon"
        >
          Send on WhatsApp
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          onClick={() => track("call", `enquiry-${detail.placement}`, detail.service)}
          className="mt-3 block text-center text-sm font-medium text-carbon underline underline-offset-2"
        >
          Prefer to call? {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}
