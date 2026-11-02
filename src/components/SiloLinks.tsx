import Link from "next/link";
import { SERVICE_GROUPS, getService } from "@/lib/services";

// In-page silo hub: links a service page to every other page in its own
// service group (GST pages to GST pages, registration to registration).
// Replaces the site-wide footer list of all 60+ services, so leaf pages keep
// their inbound links from topically related pages only.
export default function SiloLinks({ path }: { path: string }) {
  const slug = path.replace(/^\//, "");
  const group = SERVICE_GROUPS.find((g) => g.slugs.includes(slug));
  if (!group) return null;
  const siblings = group.slugs
    .filter((s) => s !== slug)
    .map(getService)
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  if (siblings.length === 0) return null;
  return (
    <nav aria-label={`More ${group.label} services`} className="border-t border-ash bg-paper py-12">
      <div className="container-page">
        <h2 className="text-xl text-obsidian">More {group.label} services in Chennai</h2>
        <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
          {siblings.map((s) => (
            <li key={s.slug}>
              <Link href={`/${s.slug}`} className="text-royal-violet underline underline-offset-2 hover:text-obsidian">
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
