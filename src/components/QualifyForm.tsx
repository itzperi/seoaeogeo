"use client";

import { useEffect, useRef, useState } from "react";
import {
  CLIENT_TYPE_OPTIONS,
  CONTACT_OPTIONS,
  LOCATION_OPTIONS,
  SERVICE_OPTIONS,
  TURNOVER_OPTIONS,
  URGENCY_OPTIONS,
} from "@/lib/lead-options";
import { BOOKING_LINK, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/lib/site";
import { track } from "@/lib/track";

type ChoiceKey = "service" | "client_type" | "turnover" | "location" | "urgency";

const CHOICE_STEPS: { key: ChoiceKey; question: string; options: readonly string[] }[] = [
  { key: "service", question: "What do you need help with?", options: SERVICE_OPTIONS },
  { key: "client_type", question: "Which best describes you?", options: CLIENT_TYPE_OPTIONS },
  { key: "turnover", question: "What is your annual turnover?", options: TURNOVER_OPTIONS },
  { key: "location", question: "Where are you based?", options: LOCATION_OPTIONS },
  { key: "urgency", question: "How soon do you need this?", options: URGENCY_OPTIONS },
];
const TOTAL_STEPS = CHOICE_STEPS.length + 1;

type Answers = Record<ChoiceKey, string>;

const CONTACT_PHRASE: Record<string, string> = { WhatsApp: "WhatsApp", "Phone call": "phone", Email: "email" };

export default function QualifyForm({ placement = "form", defaultService }: { placement?: string; defaultService?: string }) {
  const initialService = defaultService && (SERVICE_OPTIONS as readonly string[]).includes(defaultService) ? defaultService : "";
  const [step, setStep] = useState(initialService ? 1 : 0);
  const [answers, setAnswers] = useState<Answers>({
    service: initialService,
    client_type: "",
    turnover: "",
    location: "",
    urgency: "",
  });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferred, setPreferred] = useState<string>(CONTACT_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const started = useRef(false);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step > (initialService ? 1 : 0)) topRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [step, initialService]);

  function choose(key: ChoiceKey, value: string) {
    if (!started.current) {
      started.current = true;
      track("form_start", placement);
    }
    setAnswers((a) => ({ ...a, [key]: value }));
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (phone.replace(/\D/g, "").length < 7) {
      setError("Please enter a valid phone number, with country code if you're outside India.");
      return;
    }
    setStatus("sending");
    const params = new URLSearchParams(window.location.search);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...answers,
          name,
          phone,
          email,
          preferred_contact: preferred,
          message,
          website: honeypot,
          source_page: window.location.pathname,
          referrer: document.referrer,
          utm_source: params.get("utm_source"),
          utm_medium: params.get("utm_medium"),
          utm_campaign: params.get("utm_campaign"),
        }),
      });
      if (!res.ok) throw new Error();
      track("form_submit", placement, answers.service);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const whatsappText = encodeURIComponent(
    [
      `Hi, I'm ${name || "interested in your services"}.`,
      answers.service && `I need help with: ${answers.service}.`,
      answers.client_type && `I am: ${answers.client_type}.`,
      answers.location && `Based in: ${answers.location}.`,
      message && `Details: ${message}`,
    ]
      .filter(Boolean)
      .join(" "),
  );
  const whatsappHref = `${WHATSAPP_LINK}?text=${whatsappText}`;

  if (status === "done" || status === "error") {
    return (
      <div ref={topRef} className="rounded-cards border border-ash bg-paper p-6 shadow-[var(--shadow-card)] sm:p-8">
        {status === "done" ? (
          <>
            <p className="sticker-tag bg-mint-pop">Details received</p>
            <h3 className="mt-2 text-xl text-obsidian">Thank you, {name.split(" ")[0]}. One last step.</h3>
            <p className="mt-2 text-sm text-slate">
              We&apos;ll reach you by {CONTACT_PHRASE[preferred] ?? "phone"} within one working day. To skip the wait, pick a time for a
              free 15-minute call now:
            </p>
          </>
        ) : (
          <>
            <h3 className="text-xl text-obsidian">We couldn&apos;t save your details just now.</h3>
            <p className="mt-2 text-sm text-slate">
              Please send them on WhatsApp instead — your answers are already filled in — or call us directly.
            </p>
          </>
        )}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("book", `${placement}-thanks`)}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-carbon bg-carbon px-5 text-center text-sm font-bold uppercase tracking-[0.032em] text-white hover:opacity-85"
          >
            Book a time slot
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp", `${placement}-thanks`)}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-carbon bg-[#25D366] px-5 text-center text-sm font-bold uppercase tracking-[0.032em] text-carbon hover:opacity-90"
          >
            WhatsApp us
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            onClick={() => track("call", `${placement}-thanks`)}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-carbon bg-white px-5 text-center text-sm font-bold uppercase tracking-[0.032em] text-carbon hover:bg-sky-wash"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    );
  }

  const current = CHOICE_STEPS[step];

  return (
    <div ref={topRef} className="scroll-mt-24 rounded-cards border border-ash bg-paper p-6 shadow-[var(--shadow-card)] sm:p-8">
      <div className="flex items-center justify-between text-xs text-slate">
        <span>
          Step {step + 1} of {TOTAL_STEPS}
        </span>
        {step > 0 && (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="font-medium text-royal-violet hover:underline">
            ← Back
          </button>
        )}
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full border border-carbon bg-white">
        <div
          className="h-full rounded-full bg-carbon transition-all"
          style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
        />
      </div>

      {current ? (
        <fieldset className="mt-6">
          <legend className="text-lg font-medium text-obsidian">{current.question}</legend>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {current.options.map((opt) => {
              const selected = answers[current.key] === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => choose(current.key, opt)}
                  aria-pressed={selected}
                  className={`min-h-[48px] rounded-2xl border px-4 py-3 text-left text-sm font-bold transition-colors ${
                    selected
                      ? "border-carbon bg-lavender text-carbon"
                      : "border-carbon bg-white text-carbon hover:bg-sky-wash"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </fieldset>
      ) : (
        <form onSubmit={submit} className="mt-6 space-y-4">
          <p className="text-lg font-medium text-obsidian">Where should we reach you?</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={`${placement}-name`} className="block text-sm font-medium text-obsidian">Your name</label>
              <input
                id={`${placement}-name`}
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-2xl border border-carbon bg-white px-4 py-3 text-sm text-carbon"
              />
            </div>
            <div>
              <label htmlFor={`${placement}-phone`} className="block text-sm font-medium text-obsidian">
                Phone / WhatsApp number
              </label>
              <input
                id={`${placement}-phone`}
                required
                type="tel"
                autoComplete="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full rounded-2xl border border-carbon bg-white px-4 py-3 text-sm text-carbon"
              />
            </div>
          </div>
          <div>
            <label htmlFor={`${placement}-email`} className="block text-sm font-medium text-obsidian">
              Email <span className="font-normal text-slate">(optional)</span>
            </label>
            <input
              id={`${placement}-email`}
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-2xl border border-carbon bg-white px-4 py-3 text-sm text-carbon"
            />
          </div>
          <fieldset>
            <legend className="text-sm font-medium text-obsidian">Best way to reach you</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {CONTACT_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setPreferred(opt)}
                  aria-pressed={preferred === opt}
                  className={`min-h-[44px] rounded-full border px-4 py-2 text-sm font-bold ${
                    preferred === opt ? "border-carbon bg-lavender text-carbon" : "border-carbon bg-white text-carbon hover:bg-sky-wash"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </fieldset>
          <div>
            <label htmlFor={`${placement}-message`} className="block text-sm font-medium text-obsidian">
              Anything we should know? <span className="font-normal text-slate">(optional)</span>
            </label>
            <textarea
              id={`${placement}-message`}
              rows={3}
              placeholder="E.g. received a GST notice dated…, raising funds next quarter, selling a flat in Chennai…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded-2xl border border-carbon bg-white px-4 py-3 text-sm text-carbon"
            />
          </div>
          {/* Honeypot — hidden from people, filled by bots. */}
          <div className="hidden" aria-hidden="true">
            <label>
              Website
              <input tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
            </label>
          </div>
          {error && <p className="text-sm font-bold text-[#b42318]">{error}</p>}
          <button
            type="submit"
            disabled={status === "sending"}
            className="min-h-[52px] w-full rounded-full border border-carbon bg-carbon px-6 text-sm font-bold uppercase tracking-[0.032em] text-white hover:opacity-85 disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Get a call back"}
          </button>
          <p className="text-center text-xs text-slate">
            Your details are used only to respond to this enquiry. Prefer to talk now?{" "}
            <a href={`tel:${PHONE_TEL}`} onClick={() => track("call", `${placement}-inline`)} className="text-royal-violet underline">
              Call {PHONE_DISPLAY}
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
