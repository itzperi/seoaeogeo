import Link from "next/link";
import { JsonLd, localBusinessBreadcrumb } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full = [{ name: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="container-page pt-6 text-sm text-[var(--color-slate)]">
      <JsonLd
        data={localBusinessBreadcrumb(
          full.map((c) => ({ name: c.name, url: `${SITE_URL}${c.href}` }))
        )}
      />
      <ol className="flex flex-wrap items-center gap-1.5">
        {full.map((crumb, i) => (
          <li key={crumb.href} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-[var(--color-ash)]">/</span>}
            {i === full.length - 1 ? (
              <span className="text-[var(--color-ink)]">{crumb.name}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-[var(--color-navy-900)]">
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
