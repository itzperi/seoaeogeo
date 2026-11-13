import { FIRM_REGISTRATION_NO, FOUNDER_NAME, ICAI_MEMBER_LOOKUP_URL, ICAI_MEMBERSHIP_NO } from "@/lib/site";

export default function ProfessionalVerification() {
  return (
    <section className="mt-8 max-w-3xl rounded-cards border border-carbon bg-white p-6" aria-labelledby="professional-verification">
      <h2 id="professional-verification" className="text-2xl text-obsidian">How can you verify our professional details?</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate">
        Ask for {FOUNDER_NAME}&apos;s ICAI membership number, current Certificate of Practice details and the firm&apos;s
        registration number before agreeing an engagement. Match the name and number using{" "}
        <a href={ICAI_MEMBER_LOOKUP_URL} target="_blank" rel="noopener noreferrer" className="text-royal-violet underline underline-offset-2">ICAI&apos;s Trace a Member service</a>.
        The service asks for contact details and a captcha. For firm registration or practice-status questions,
        use ICAI&apos;s official channels; a website biography alone does not verify these details.
      </p>
      {(ICAI_MEMBERSHIP_NO || FIRM_REGISTRATION_NO) && (
        <dl className="mt-4 space-y-2 text-sm text-slate">
          {ICAI_MEMBERSHIP_NO && <div><dt className="font-semibold">ICAI membership number</dt><dd>{ICAI_MEMBERSHIP_NO}</dd></div>}
          {FIRM_REGISTRATION_NO && <div><dt className="font-semibold">Firm registration number (FRN)</dt><dd>{FIRM_REGISTRATION_NO}</dd></div>}
        </dl>
      )}
    </section>
  );
}
