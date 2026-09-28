"use client";

import { useState } from "react";
import { EMAIL } from "@/lib/site";
import { SERVICES } from "@/lib/services";

const URGENCY_OPTIONS = [
  "Urgent — I have a deadline or notice",
  "Within the next few weeks",
  "Just exploring options",
];

export default function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [urgency, setUrgency] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service needed: ${service}`,
      `Urgency: ${urgency}`,
      `Message: ${message || "(none)"}`,
    ].join("\n");
    const subject = encodeURIComponent(`New enquiry from ${name} — ${service}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
        <p className="text-obsidian">
          Your email app should have opened with these details filled in — just hit send. If nothing opened,{" "}
          <a href={`mailto:${EMAIL}`} className="text-royal-violet underline">
            email us directly
          </a>{" "}
          instead.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
      <div>
        <label htmlFor="lead-name" className="block text-sm font-medium text-obsidian">Name</label>
        <input
          id="lead-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-ash px-4 py-2.5 text-sm text-obsidian"
        />
      </div>
      <div>
        <label htmlFor="lead-phone" className="block text-sm font-medium text-obsidian">Phone number</label>
        <input
          id="lead-phone"
          required
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 w-full rounded-lg border border-ash px-4 py-2.5 text-sm text-obsidian"
        />
      </div>
      <div>
        <label htmlFor="lead-service" className="block text-sm font-medium text-obsidian">What do you need help with?</label>
        <select
          id="lead-service"
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="mt-1 w-full rounded-lg border border-ash px-4 py-2.5 text-sm text-obsidian"
        >
          <option value="" disabled>Select a service</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.name}>{s.name}</option>
          ))}
          <option value="Something else / not sure">Something else / not sure</option>
        </select>
      </div>
      <div>
        <label htmlFor="lead-urgency" className="block text-sm font-medium text-obsidian">How urgent is this?</label>
        <select
          id="lead-urgency"
          required
          value={urgency}
          onChange={(e) => setUrgency(e.target.value)}
          className="mt-1 w-full rounded-lg border border-ash px-4 py-2.5 text-sm text-obsidian"
        >
          <option value="" disabled>Select one</option>
          {URGENCY_OPTIONS.map((u) => (
            <option key={u} value={u}>{u}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="lead-message" className="block text-sm font-medium text-obsidian">Anything else we should know? (optional)</label>
        <textarea
          id="lead-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="mt-1 w-full rounded-lg border border-ash px-4 py-2.5 text-sm text-obsidian"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-buttons bg-royal-violet px-6 py-3 text-sm font-medium text-white hover:opacity-90"
      >
        Send These Details
      </button>
    </form>
  );
}
