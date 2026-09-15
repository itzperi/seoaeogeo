import Link from "next/link";
import type { ServiceSummary } from "@/lib/services";

export default function ServiceCard({ service }: { service: ServiceSummary }) {
  return (
    <Link
      href={`/${service.slug}`}
      className="group flex flex-col rounded-[var(--radius-card)] border border-[var(--color-ash)] bg-[var(--color-paper)] p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]"
    >
      <h3 className="text-lg font-semibold text-[var(--color-navy-900)]">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-slate)]">
        {service.shortDescription}
      </p>
      <span className="mt-4 text-sm font-medium text-[var(--color-gold-600)] group-hover:underline">
        Learn more →
      </span>
    </Link>
  );
}
