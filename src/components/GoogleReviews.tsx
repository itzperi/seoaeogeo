import TrackedAnchor from "@/components/TrackedAnchor";
import { GOOGLE_REVIEWS, SHOW_GOOGLE_REVIEWS } from "@/lib/reviews";
import { BOOKING_LINK, GBP_URL } from "@/lib/site";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"
            fill={i <= rating ? "#FBBC04" : "#E2E2E2"}
          />
        </svg>
      ))}
    </span>
  );
}

function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

// Client reviews from Google, placed next to the booking/form actions so
// visitors see proof at the moment they decide to get in touch.
export default function GoogleReviews({
  heading = "What clients say on Google",
  className = "bg-paper py-16",
}: {
  heading?: string;
  className?: string;
}) {
  if (!SHOW_GOOGLE_REVIEWS || GOOGLE_REVIEWS.length === 0) return null;

  return (
    <section className={className} aria-labelledby="google-reviews-heading">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow flex items-center gap-2 text-sm text-slate">
              <GoogleG /> Google reviews
            </p>
            <h2 id="google-reviews-heading" className="mt-2 text-3xl text-obsidian">
              {heading}
            </h2>
          </div>
          <a
            href={GBP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-royal-violet underline underline-offset-4"
          >
            Read all reviews on Google →
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {GOOGLE_REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-cards border border-ash bg-paper p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center justify-between">
                <Stars rating={review.rating} />
                <span className="text-xs text-slate">{review.date}</span>
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-obsidian">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-5 border-t border-ash pt-4">
                <p className="text-sm font-medium text-obsidian">{review.name}</p>
                <p className="text-xs text-slate">{review.service} · posted on Google</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <TrackedAnchor
            action="book"
            placement="reviews"
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-buttons bg-royal-violet px-6 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Book a free consultation
          </TrackedAnchor>
          <p className="text-sm text-slate">15 minutes with a chartered accountant · in person in Anna Nagar or online</p>
        </div>
      </div>
    </section>
  );
}
