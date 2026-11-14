// Case studies (owner's brief, Task 4.4). Situation, work done, outcome.
// Rules for every entry:
// - No client names, no identifying details, no amounts, no fees.
// - Only real engagements, written up with the client's consent.
// - No claims of guaranteed results; describe what was done and what happened.
// Nothing is published while this list is empty or every entry has
// published: false. Unpublished entries get no route, no sitemap entry and
// no links.

export type CaseStudy = {
  slug: string;
  title: string;
  /** 150–158 characters, no amounts or client names. */
  description: string;
  /** Kind of client, e.g. "Manufacturing start-up, Ambattur". Never a name. */
  clientType: string;
  /** Service page this case study belongs to, e.g. "/gst-notice-reply-chennai". */
  servicePath: string;
  situation: string[];
  workDone: string[];
  outcome: string[];
  /** YYYY-MM-DD the case study was written. */
  date: string;
  published: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [];

export const PUBLISHED_CASE_STUDIES = CASE_STUDIES.filter((c) => c.published);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return PUBLISHED_CASE_STUDIES.find((c) => c.slug === slug);
}
