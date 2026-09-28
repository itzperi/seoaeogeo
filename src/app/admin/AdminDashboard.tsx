"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Lead } from "@/lib/leads";

export default function AdminDashboard({ initialLeads }: { initialLeads: Lead[] }) {
  const router = useRouter();
  const [leads] = useState(initialLeads);
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  return (
    <div className="min-h-[70vh] bg-fog py-10">
      <div className="container-page">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-obsidian">Leads ({leads.length})</h1>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="rounded-buttons border border-ash bg-paper px-4 py-2 text-sm font-medium text-obsidian hover:bg-fog"
          >
            {loggingOut ? "Logging out…" : "Log out"}
          </button>
        </div>

        {leads.length === 0 ? (
          <p className="mt-8 text-slate">No leads captured yet.</p>
        ) : (
          <div className="mt-6 overflow-x-auto rounded-cards border border-ash bg-paper shadow-[var(--shadow-card)]">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-fog text-left">
                  <th className="p-4 font-medium text-obsidian">Submitted</th>
                  <th className="p-4 font-medium text-obsidian">Name</th>
                  <th className="p-4 font-medium text-obsidian">Phone</th>
                  <th className="p-4 font-medium text-obsidian">Service</th>
                  <th className="p-4 font-medium text-obsidian">Urgency</th>
                  <th className="p-4 font-medium text-obsidian">Message</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-t border-ash align-top">
                    <td className="p-4 whitespace-nowrap text-slate">
                      {new Date(lead.submittedAt).toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </td>
                    <td className="p-4 font-medium text-obsidian">{lead.name}</td>
                    <td className="p-4">
                      <a href={`tel:${lead.phone}`} className="text-royal-violet hover:underline">
                        {lead.phone}
                      </a>
                    </td>
                    <td className="p-4 text-slate">{lead.service}</td>
                    <td className="p-4 text-slate">{lead.urgency}</td>
                    <td className="p-4 text-slate">{lead.message || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
