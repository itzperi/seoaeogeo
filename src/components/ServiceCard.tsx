import Link from "next/link";
import type { ServiceSummary } from "@/lib/services";

export default function ServiceCard({ service }: { service: ServiceSummary }) {
  return (
    <Link
      href={`/${service.slug}`}
      className="group flex flex-col rounded-cards border border-carbon bg-white p-7 transition hover:-rotate-1 hover:bg-lavender"
    >
      <h3 className="text-[28px] uppercase leading-[0.95] text-carbon" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
        {service.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-carbon">
        {service.shortDescription}
      </p>
      <span className="mt-5 inline-flex w-fit items-center rounded-full border border-carbon bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[0.032em] text-carbon">
        Learn more →
      </span>
    </Link>
  );
}
