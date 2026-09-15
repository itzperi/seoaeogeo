import Link from "next/link";
import type { ServiceSummary } from "@/lib/services";

export default function ServiceCard({ service }: { service: ServiceSummary }) {
  return (
    <Link
      href={`/${service.slug}`}
      className="group flex flex-col rounded-cards border border-ash bg-paper p-10 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5"
    >
      <h3 className="text-lg font-medium text-obsidian" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
        {service.shortDescription}
      </p>
      <span className="mt-4 text-sm font-medium text-royal-violet group-hover:underline">
        Learn more →
      </span>
    </Link>
  );
}
