import { AREAS } from "@/lib/areas";
import { getService } from "@/lib/services";
import { TN_CITY_PAGES } from "@/lib/tn-cities";

// The service a page is about, for the pre-typed WhatsApp enquiry. Undefined on
// general pages (home, blog, contact), where the visitor picks a topic instead.
export function serviceForPath(pathname: string): string | undefined {
  const slug = pathname.replace(/^\/+|\/+$/g, "");
  if (!slug || slug.includes("/")) return undefined;
  const service = getService(slug);
  if (service) return service.name;
  const city = TN_CITY_PAGES.find((c) => c.slug === slug);
  if (city) return `Company registration in ${city.city}`;
  const area = AREAS.find((a) => a.slug === slug);
  if (area) return `CA services in ${area.name}`;
  return undefined;
}
