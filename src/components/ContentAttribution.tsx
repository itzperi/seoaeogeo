import Link from "next/link";
import { getContentReview } from "@/lib/content-reviews";
import { BUSINESS_NAME, FOUNDER_NAME } from "@/lib/site";

const displayDate = (date: string) => new Date(`${date}T00:00:00Z`).toLocaleDateString("en-IN", {
  day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
});

export default function ContentAttribution({ path, updated }: { path: string; updated?: string }) {
  const review = getContentReview(path, updated);
  return (
    <p className="mt-4 text-sm text-carbon/80">
      Published by <Link href="/about-us" className="font-semibold underline underline-offset-2">{BUSINESS_NAME}</Link>
      {updated && <> · Content updated <time dateTime={updated}>{displayDate(updated)}</time></>}
      {review && <> · Reviewed by <Link href="/about-us" className="font-semibold underline underline-offset-2">{FOUNDER_NAME}</Link>{" "}
        on <time dateTime={review.reviewedOn}>{displayDate(review.reviewedOn)}</time></>}
    </p>
  );
}
