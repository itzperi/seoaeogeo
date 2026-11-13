// Professional review is not inferred from a Git commit or an automated audit.
// Add a route only after the named reviewer confirms the current content; keep
// the dated sign-off reference in evidence. See seo/CONTENT-REVIEW-PROCESS.md.
export type ContentReview = { reviewedOn: string; evidence: string };
export const CONTENT_REVIEWS: Record<string, ContentReview> = {};

export function getContentReview(path: string, contentUpdated?: string): ContentReview | undefined {
  const review = CONTENT_REVIEWS[path];
  if (!review?.evidence.trim() || !/^\d{4}-\d{2}-\d{2}$/.test(review.reviewedOn)) return undefined;
  const date = new Date(`${review.reviewedOn}T00:00:00Z`);
  if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== review.reviewedOn) return undefined;
  if (review.reviewedOn > new Date().toISOString().slice(0, 10)) return undefined;
  if (contentUpdated && review.reviewedOn < contentUpdated) return undefined;
  return review;
}
