"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { ClickRow, Lead, LeadStatus } from "@/lib/leads";

const STATUS_LABELS: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  meeting_booked: "Meeting booked",
  won: "Won",
  lost: "Lost",
};

const TIER_STYLES: Record<string, string> = {
  high: "bg-emerald-100 text-emerald-800",
  medium: "bg-amber-100 text-amber-800",
  standard: "bg-fog text-slate",
};

function waLink(phone: string, name: string) {
  const digits = phone.replace(/\D/g, "");
  const number = digits.length === 10 ? `91${digits}` : digits;
  const text = encodeURIComponent(`Hi ${name.split(" ")[0]}, this is C S Rushil & Co. replying to your enquiry on our website.`);
  return `https://wa.me/${number}?text=${text}`;
}

function toCsv(leads: Lead[]) {
  const cols: (keyof Lead)[] = [
    "created_at", "name", "phone", "email", "service", "client_type", "turnover", "location",
    "urgency", "preferred_contact", "message", "lead_tier", "lead_score", "status", "source_page",
    "utm_source", "utm_medium", "utm_campaign", "referrer",
  ];
  const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  return [cols.join(","), ...leads.map((l) => cols.map((c) => esc(l[c])).join(","))].join("\n");
}

export default function AdminDashboard({
  initialLeads,
  clicks,
}: {
  initialLeads: Lead[] | null;
  clicks: ClickRow[] | null;
}) {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>(initialLeads ?? []);
  const [tierFilter, setTierFilter] = useState<"all" | "high" | "medium" | "standard">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | LeadStatus>("all");
  const [sortBy, setSortBy] = useState<"priority" | "newest">("priority");
  const [loggingOut, setLoggingOut] = useState(false);
  // Snapshot of "now" for the 30-day window, taken once per page load.
  const [loadedAt] = useState(() => Date.now());

  const configured = initialLeads !== null;

  const funnel = useMemo(() => {
    const since = loadedAt - 30 * 86_400_000;
    const recentLeads = leads.filter((l) => new Date(l.created_at).getTime() >= since);
    const count = (a: string) => (clicks ?? []).filter((c) => c.action === a).length;
    const byPlacement = new Map<string, number>();
    for (const c of clicks ?? []) {
      if (c.action === "form_start" || c.action === "form_submit") continue;
      const key = `${c.action} · ${c.placement ?? "?"}`;
      byPlacement.set(key, (byPlacement.get(key) ?? 0) + 1);
    }
    return {
      calls: count("call"),
      whatsapp: count("whatsapp"),
      book: count("book"),
      formStarts: count("form_start"),
      leads30: recentLeads.length,
      highLeads30: recentLeads.filter((l) => l.lead_tier === "high").length,
      meetings30: recentLeads.filter((l) => l.status === "meeting_booked" || l.status === "won").length,
      topPlacements: [...byPlacement.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6),
    };
  }, [leads, clicks, loadedAt]);

  const visible = useMemo(() => {
    const list = leads.filter(
      (l) => (tierFilter === "all" || l.lead_tier === tierFilter) && (statusFilter === "all" || l.status === statusFilter),
    );
    return [...list].sort((a, b) =>
      sortBy === "priority"
        ? (b.status === "new" ? 1 : 0) - (a.status === "new" ? 1 : 0) ||
          (b.lead_score ?? 0) - (a.lead_score ?? 0) ||
          b.created_at.localeCompare(a.created_at)
        : b.created_at.localeCompare(a.created_at),
    );
  }, [leads, tierFilter, statusFilter, sortBy]);

  async function changeStatus(id: string, status: LeadStatus) {
    const previous = leads;
    setLeads((ls) => ls.map((l) => (l.id === id ? { ...l, status } : l)));
    const res = await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    }).catch(() => null);
    if (!res?.ok) {
      setLeads(previous);
      alert("Couldn't update the status. Please try again.");
    }
  }

  function downloadCsv() {
    const blob = new Blob([toCsv(visible)], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `csrushil-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  const stats: [string, number, boolean][] = [
    ["Call clicks", funnel.calls, true],
    ["WhatsApp clicks", funnel.whatsapp, true],
    ["Booking clicks", funnel.book, true],
    ["Forms started", funnel.formStarts, true],
    ["Leads", funnel.leads30, false],
    ["High-value leads", funnel.highLeads30, false],
    ["Meetings booked", funnel.meetings30, false],
  ];

  return (
    <div className="min-h-[70vh] bg-fog py-10">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl text-obsidian">Leads ({leads.length})</h1>
          <div className="flex gap-2">
            <button
              onClick={() => router.refresh()}
              className="rounded-buttons border border-ash bg-paper px-4 py-2 text-sm font-medium text-obsidian hover:bg-fog"
            >
              Refresh
            </button>
            <button
              onClick={downloadCsv}
              disabled={visible.length === 0}
              className="rounded-buttons border border-ash bg-paper px-4 py-2 text-sm font-medium text-obsidian hover:bg-fog disabled:opacity-50"
            >
              Download CSV
            </button>
            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="rounded-buttons border border-ash bg-paper px-4 py-2 text-sm font-medium text-obsidian hover:bg-fog"
            >
              {loggingOut ? "Logging out…" : "Log out"}
            </button>
          </div>
        </div>

        {!configured && (
          <div className="mt-6 rounded-cards border border-amber-300 bg-amber-50 p-5 text-sm text-obsidian">
            <p className="font-medium">Leads are being saved, but this dashboard can&apos;t read them yet.</p>
            <p className="mt-1 text-slate">
              In Supabase open Project Settings → API Keys and copy the <strong>secret</strong> key. In Vercel open
              Settings → Environment Variables, add <code>SUPABASE_SECRET_KEY</code> with that value, then redeploy.
            </p>
          </div>
        )}

        <section className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
          {stats.map(([label, value, fromClicks]) => (
            <div key={label} className="rounded-cards border border-ash bg-paper p-4">
              <p className="text-2xl text-obsidian">{fromClicks && clicks === null ? "—" : value}</p>
              <p className="mt-1 text-xs text-slate">{label} · 30 days</p>
            </div>
          ))}
        </section>
        {funnel.topPlacements.length > 0 && (
          <p className="mt-3 text-xs text-slate">
            Top buttons:{" "}
            {funnel.topPlacements.map(([key, n], i) => (
              <span key={key}>
                {i > 0 && " · "}
                {key} ({n})
              </span>
            ))}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <label className="flex items-center gap-2 text-slate">
            Priority
            <select
              value={tierFilter}
              onChange={(e) => setTierFilter(e.target.value as typeof tierFilter)}
              className="rounded-lg border border-ash bg-paper px-3 py-1.5 text-obsidian"
            >
              <option value="all">All</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="standard">Standard</option>
            </select>
          </label>
          <label className="flex items-center gap-2 text-slate">
            Status
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
              className="rounded-lg border border-ash bg-paper px-3 py-1.5 text-obsidian"
            >
              <option value="all">All</option>
              {Object.entries(STATUS_LABELS).map(([v, label]) => (
                <option key={v} value={v}>{label}</option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 text-slate">
            Sort
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="rounded-lg border border-ash bg-paper px-3 py-1.5 text-obsidian"
            >
              <option value="priority">New + highest priority first</option>
              <option value="newest">Newest first</option>
            </select>
          </label>
        </div>

        {visible.length === 0 ? (
          <p className="mt-8 text-slate">{configured ? "No leads match these filters yet." : ""}</p>
        ) : (
          <div className="mt-4 space-y-3">
            {visible.map((lead) => (
              <article key={lead.id} className="rounded-cards border border-ash bg-paper p-5 shadow-[var(--shadow-card)]">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-medium text-obsidian">{lead.name}</h2>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${TIER_STYLES[lead.lead_tier ?? "standard"]}`}>
                        {lead.lead_tier ?? "standard"} · {lead.lead_score ?? 0}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate">
                      {new Date(lead.created_at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                      {lead.source_page && <> · from {lead.source_page}</>}
                      {lead.utm_source && <> · {lead.utm_source}/{lead.utm_medium ?? "—"}</>}
                    </p>
                  </div>
                  <select
                    value={lead.status}
                    onChange={(e) => changeStatus(lead.id, e.target.value as LeadStatus)}
                    className="rounded-lg border border-ash bg-paper px-3 py-1.5 text-sm text-obsidian"
                    aria-label={`Status for ${lead.name}`}
                  >
                    {Object.entries(STATUS_LABELS).map(([v, label]) => (
                      <option key={v} value={v}>{label}</option>
                    ))}
                  </select>
                </div>

                <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Service", lead.service],
                    ["Client type", lead.client_type],
                    ["Turnover", lead.turnover],
                    ["Location", lead.location],
                    ["Urgency", lead.urgency],
                    ["Prefers", lead.preferred_contact],
                  ].map(([label, value]) => (
                    <div key={label as string}>
                      <dt className="text-xs text-slate">{label}</dt>
                      <dd className="text-obsidian">{value || "—"}</dd>
                    </div>
                  ))}
                </dl>
                {lead.message && <p className="mt-3 rounded-lg bg-fog p-3 text-sm text-obsidian">{lead.message}</p>}

                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  <a href={`tel:${lead.phone}`} className="rounded-buttons bg-obsidian px-4 py-2 font-medium text-white hover:opacity-90">
                    Call {lead.phone}
                  </a>
                  <a
                    href={waLink(lead.phone, lead.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-buttons bg-[#25D366] px-4 py-2 font-medium text-white hover:opacity-90"
                  >
                    WhatsApp
                  </a>
                  {lead.email && (
                    <a href={`mailto:${lead.email}`} className="rounded-buttons border border-ash px-4 py-2 font-medium text-obsidian hover:bg-fog">
                      {lead.email}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
