import QualifyForm from "@/components/QualifyForm";
import TrackedAnchor from "@/components/TrackedAnchor";
import { BOOKING_LINK, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/lib/site";

export default function CTASection({
  title = "Let's simplify your compliance.",
  subtitle = "Talk to a chartered accountant in Chennai today — no obligation, no jargon.",
  showForm = true,
  formService,
}: {
  title?: string;
  subtitle?: string;
  showForm?: boolean;
  // Pre-selects the first qualifying question on service pages.
  formService?: string;
}) {
  return (
    <section id={showForm ? "get-started" : undefined} className="scroll-mt-20 bg-paper py-16">
      <div className="container-page">
        <div className="rounded-cards bg-royal-violet px-6 py-12 md:px-12">
          <div className={showForm ? "grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center" : "text-center"}>
            <div>
              <p className="eyebrow text-sm text-lemon-zest">Get Started</p>
              <h2 className="mt-3 text-3xl text-white md:text-4xl">{title}</h2>
              <p className={`mt-4 max-w-xl text-white/80 ${showForm ? "" : "mx-auto"}`}>{subtitle}</p>
              {showForm && (
                <ul className="mt-6 space-y-2 text-sm text-white/85">
                  <li>✓ Answer 6 quick questions — under a minute</li>
                  <li>✓ A chartered accountant reviews your case, not a call centre</li>
                  <li>✓ We reach you by WhatsApp, call or email within one working day</li>
                </ul>
              )}
              <div className={`mt-8 flex flex-wrap gap-3 ${showForm ? "" : "justify-center"}`}>
                <TrackedAnchor
                  action="book"
                  placement="cta-section"
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-largecta bg-white px-6 py-3 text-sm font-medium text-obsidian hover:bg-lilac-mist"
                >
                  Book a Free Consultation
                </TrackedAnchor>
                <TrackedAnchor
                  action="call"
                  placement="cta-section"
                  href={`tel:${PHONE_TEL}`}
                  className="rounded-largecta border border-white/40 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
                >
                  Call {PHONE_DISPLAY}
                </TrackedAnchor>
                <TrackedAnchor
                  action="whatsapp"
                  placement="cta-section"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-largecta border border-white/40 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
                >
                  WhatsApp Us
                </TrackedAnchor>
              </div>
            </div>
            {showForm && <QualifyForm placement="cta-section" defaultService={formService} />}
          </div>
        </div>
      </div>
    </section>
  );
}
