import type { BlogPostMeta } from "@/lib/blog";

export const meta: BlogPostMeta = {
  slug: "safe-cash-deposit-limit",
  title: "How Much Cash Can You Actually Deposit Into Your Bank Account?",
  description:
    "There's no single legal cash deposit limit, but specific thresholds trigger automatic reporting to the Income Tax Department. Here's what those actually are.",
  date: "2026-09-26",
  excerpt:
    "There's no single legal cash deposit limit, but specific thresholds trigger automatic reporting to the Income Tax Department.",
};

export default function Body() {
  return (
    <>
      <p>
        &quot;How much cash can I deposit before it becomes a problem?&quot; is one of the most common questions we get, and the honest answer is that there&apos;s no fixed legal ceiling — but there are specific thresholds that trigger automatic reporting to the Income Tax Department, and crossing them without a documented source is where the actual problem starts.
      </p>

      <div className="mx-auto max-w-xs">
        <div className="aspect-[9/16] overflow-hidden rounded-cards border border-ash">
          <iframe
            src="https://www.instagram.com/reel/Ddq4Oprzv43/embed"
            className="h-full w-full border-0"
            title="How much cash can you safely deposit into your bank account?"
          />
        </div>
      </div>

      <h2>Banks report specific cash transactions automatically</h2>

      <p>
        Cash deposits aggregating ₹10 lakh or more in a savings account in a financial year get reported to the Income Tax Department through the Annual Information Statement framework, regardless of who deposited it or why. For current accounts used by businesses, the reporting threshold is ₹50 lakh. This isn&apos;t a penalty trigger by itself — it&apos;s a reporting trigger, which is a different thing.
      </p>

      <h2>The problem isn&apos;t the deposit — it&apos;s the unexplained source</h2>

      <p>
        Once a large cash deposit is reported, the department may ask you to explain its source as part of your return processing or a scrutiny notice. A legitimate business owner with genuine cash sales, clear books, and consistent past filings can explain this without difficulty. Someone depositing cash with no documented source — an inheritance never declared, savings accumulated informally over years — faces a genuinely harder conversation.
      </p>

      <h2>Section 269ST adds a separate restriction worth knowing</h2>

      <p>
        Separately from deposit reporting, Section 269ST prohibits accepting ₹2 lakh or more in cash from a single person in a single day, or for a single transaction, with a penalty equal to the amount received if violated. This is a receiving-cash restriction, distinct from the deposit-reporting threshold, and business owners frequently conflate the two.
      </p>

      <p>
        If you&apos;re not sure whether a cash transaction in your business crosses one of these thresholds, C S Rushil &amp; Co. can check your specific situation before it becomes a filing-season surprise. Book a free consultation.
      </p>
    </>
  );
}
