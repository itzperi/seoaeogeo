import { AREAS } from "@/lib/areas";
import { LOCATION_PAGES } from "@/lib/location-pages";
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
  if (city) return `Private limited company registration in ${city.city}`;
  const area = AREAS.find((a) => a.slug === slug);
  if (area) return `${area.topic ?? "CA services"} in ${area.name}`;
  const loc = LOCATION_PAGES.find((l) => l.slug === slug);
  if (loc) return `${loc.service} in ${loc.place}`;
  return undefined;
}
