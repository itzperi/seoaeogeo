import Link from "next/link";
import { JsonLd, localBusinessBreadcrumb } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export type Crumb = { name: string; href: string };

// schema={false} when the page emits its BreadcrumbList inside its own @graph.
export default function Breadcrumbs({ items, schema = true }: { items: Crumb[]; schema?: boolean }) {
  const full = [{ name: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="container-page bg-paper pt-6 text-sm text-slate">
      {schema && (
        <JsonLd
          data={localBusinessBreadcrumb(
            full.map((c) => ({ name: c.name, url: `${SITE_URL}${c.href}` }))
          )}
        />
      )}
      <ol className="flex flex-wrap items-center gap-1.5">
        {full.map((crumb, i) => (
          <li key={crumb.href} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-ash">/</span>}
            {i === full.length - 1 ? (
              <span className="text-obsidian">{crumb.name}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-obsidian">
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
