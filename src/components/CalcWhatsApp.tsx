"use client";

import { track } from "@/lib/track";
import { WHATSAPP_LINK } from "@/lib/site";

// "Send this result to a CA" button under a calculator result. The message is
// pre-filled with the visitor's inputs and result, so the enquiry arrives
// with the scenario already stated.
export default function CalcWhatsApp({ tool, summary }: { tool: string; summary: string }) {
  const text = `Hi, I used your ${summary} Can a CA review this?`;
  return (
    <a
      href={`${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp", "calculator", tool, summary)}
      className="mt-5 inline-flex min-h-[44px] items-center rounded-full bg-carbon px-5 text-sm font-bold text-white"
    >
      Send this result to a CA on WhatsApp
    </a>
  );
}
