import type { Metadata } from "next";
import { cookies } from "next/headers";
import { isValidSession, SESSION_COOKIE } from "@/lib/auth";
import { getLeads, getRecentClicks } from "@/lib/leads";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  const authed = isValidSession(session);

  if (!authed) {
    return <AdminLogin />;
  }

  const [leads, clicks] = await Promise.all([getLeads(), getRecentClicks(30)]);

  return <AdminDashboard initialLeads={leads} clicks={clicks} />;
}
