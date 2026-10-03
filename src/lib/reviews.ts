// Verbatim Google reviews from the firm's Business Profile, shown with
// attribution and a link back to Google. Rules for adding more:
// - Copy the text exactly as posted; never edit a client's words.
// - Skip any review that still contains template text (e.g. "[Income tax
//   filing/GST compliance]") — it reads as fake on the site.
// - First name + initial only.
// - No Review/AggregateRating schema: Google ignores self-hosted review
//   markup for LocalBusiness, and ICAI discourages self-promotional ratings.
// Set SHOW_GOOGLE_REVIEWS to false to hide every review block at once.

export const SHOW_GOOGLE_REVIEWS = true;

export type GoogleReview = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  service: string;
  text: string;
};

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: "Gokul D.",
    rating: 4,
    date: "May 2026",
    service: "GST & financial reviews",
    text: "I used to find tax compliance confusing and honestly a bit stressful, especially with how often regulations seem to change. Working with C S Rushil & Co has made a huge difference. They simplified everything, explained what actually matters for my business, and handled things smoothly from GST filings to more detailed financial reviews. What I appreciate most is their proactive approach they don’t just react, they guide you ahead of time. It’s given me a lot more clarity and confidence in managing my business finances.",
  },
  {
    name: "Mahalakshmi",
    rating: 4,
    date: "May 2026",
    service: "GST & TDS filings",
    text: "Working with C S Rushil & Co has completely transformed my approach to business; their proactive handling of my GST and TDS filings has replaced monthly deadline stress with total financial clarity.",
  },
  {
    name: "Sughirtha D.",
    rating: 4,
    date: "May 2026",
    service: "ITR & GSTR filing",
    text: "Excellent for ITR and GSTR filing. Professional, responsive and reliable. The entire process was smooth and hassle-free.",
  },
];
