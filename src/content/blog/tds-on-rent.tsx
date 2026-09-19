import type { BlogPostMeta } from "@/lib/blog";

export const meta: BlogPostMeta = {
  slug: "tds-on-rent",
  title: "TDS on Rent: What Chennai Landlords and Tenants Both Need to Know",
  description:
    "Tax deducted at source on rent payments trips up both sides of the transaction in Chennai, tenants who don't realize they need to deduct it and landlords...",
  date: "2026-09-19",
  excerpt:
    "Tax deducted at source on rent payments trips up both sides of the transaction in Chennai, tenants who don't realize they need to deduct it...",
};

export default function Body() {
  return (
    <>
      <p>
        Tax deducted at source on rent payments trips up both sides of the transaction in Chennai, tenants who don&apos;t realize they need to deduct it and landlords who don&apos;t realize a deduction is coming and forget to check it against their return.
      </p>

      <h2>When TDS on rent actually applies</h2>

      <p>
        Under Section 194 I, a tenant paying rent above a specified annual threshold for land, building, or furniture is required to deduct TDS before paying the landlord, and deposit it with the government. Individuals and Hindu Undivided Families not subject to a tax audit have historically been outside this specific provision, but Section 194 IB creates a separate obligation for individuals paying rent above a monthly threshold, so the exemption most tenants assume applies often does not.
      </p>

      <h2>What rate applies</h2>

      <p>
        The rate differs depending on whether the payment is for renting land or building versus plant or machinery, and whether the deductor falls under 194 I or 194 IB. Getting the wrong section or the wrong rate is one of the most common errors made, since the two provisions look similar but have different thresholds and compliance requirements attached.
      </p>

      <h2>What tenants need to do once TDS applies</h2>

      <p>
        The tenant deducts the TDS, deposits it with the government within the prescribed time, and issues a TDS certificate to the landlord. Under Section 194 IB specifically, the deduction and deposit can be a one time annual event rather than a monthly cycle, which is easy to miss if you&apos;re used to standard monthly TDS compliance.
      </p>

      <h2>What landlords should check</h2>

      <p>
        Landlords should verify that TDS deducted by the tenant actually appears in their Form 26AS before filing their own return. A mismatch between what the tenant claims to have deducted and what shows up in the landlord&apos;s TDS credit is a common and avoidable notice trigger, usually caused by the tenant depositing the amount under the wrong PAN or missing the deposit deadline entirely.
      </p>

      <h2>A practical checklist</h2>

      <ul>
        <li>Confirm which section applies to your specific rent arrangement, 194 I or 194 IB</li>
        <li>Check the correct rate and threshold before the first payment, not after</li>
        <li>Tenants should deposit TDS within the deadline and issue the certificate promptly</li>
        <li>Landlords should reconcile TDS credit against Form 26AS every year before filing</li>
      </ul>

      <p>
        If you are a landlord or tenant in Chennai unsure which TDS provision applies to your rent arrangement, C S Rushil &amp; Co. can confirm the correct treatment and help you stay compliant on both sides. Get in touch for a free consultation.
      </p>
    </>
  );
}
