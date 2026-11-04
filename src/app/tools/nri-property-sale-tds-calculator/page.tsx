import type { Metadata } from "next";
import Link from "next/link";
import ToolShell, { EstimateNote, H2, LINK, P, ServiceCta, Table, webApplicationNode } from "../ToolShell";
import Calculator from "./Calculator";

const PATH = "/tools/nri-property-sale-tds-calculator";
const TITLE = "NRI Property Sale TDS Calculator | Section 195 Estimate";
const DESCRIPTION =
  "Estimate the TDS a buyer deducts when an NRI sells Indian property, the tax on the actual gain, and the cash a lower deduction certificate could leave with you.";
const H1 = "Section 195 NRI Property Sale TDS vs Lower TDS Certificate Estimator";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: H1,
    description: DESCRIPTION,
    url: PATH,
  },
};

const CRUMBS = [
  { name: "Tools", href: "/tools" },
  { name: "NRI Property Sale TDS Calculator", href: PATH },
];

const FAQS = [
  {
    question: "How much TDS is deducted when an NRI sells property in India?",
    answer:
      "For property held more than 24 months, a buyer without a certificate usually deducts 12.5% of the full sale price, plus surcharge of 10% above ₹50 lakh or 15% above ₹1 crore, plus 4% cess. For property held 24 months or less, the deduction follows slab rates, which this estimator assumes at 30%.",
  },
  {
    question: "Why is TDS on the sale price and not on my profit?",
    answer:
      "Section 195 asks the buyer to deduct tax on the sum chargeable to tax, but a buyer has no way of checking your cost or your expenses. In practice buyers withhold on the gross amount unless the Assessing Officer has issued a certificate fixing a lower or nil rate, which is why the certificate matters.",
  },
  {
    question: "What is Form 13 and who issues the certificate?",
    answer:
      "Form 13 is the application for a lower or nil deduction certificate under section 197 of the Income-tax Act, 1961. The Assessing Officer reviews your computation and evidence and decides whether to issue it and at what rate. From 1 April 2026 the Income-tax Act, 2025 applies, and the certificate is issued under its corresponding provision.",
  },
  {
    question: "Does the estimate include exemptions under section 54 or 54EC?",
    answer:
      "No. Reinvestment in another house or in specified bonds can reduce or remove the tax on a long-term gain, but the conditions and time limits need checking against your facts. The estimator ignores them, so the tax it shows on your gain may be higher than your final liability.",
  },
  {
    question: "I bought the property before 23 July 2024. Can I use indexation?",
    answer:
      "Transfers on or after 23 July 2024 are taxed at 12.5% without indexation for long-term gains. Some transitional options for older acquisitions apply to resident individuals and do not apply to non-residents in the same way. Special cases are not modelled here; a CA should confirm the position for your property.",
  },
  {
    question: "Is the difference shown here a refund I will definitely receive?",
    answer:
      "No. It is the estimated gap between the default TDS and the tax on your gain, using the figures you enter. If a certificate is issued, that cash need not be withheld at all. Without one, any excess is claimed through your income tax return and depends on the return being processed.",
  },
];

export default function Page() {
  return (
    <ToolShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      eyebrow="Tool · NRI property sale"
      h1={H1}
      lead={
        <>
          When an NRI sells Indian property, the buyer usually deducts TDS on the <strong>full sale price</strong>: 12.5%
          for property held over 24 months, plus surcharge and 4% cess. Tax is due only on the gain, so a lower deduction
          certificate can keep the difference with you. Enter your figures to estimate both.
        </>
      }
      subhead="Compares default section 195 TDS with the estimated tax on your capital gain, and shows the cash a Form 13 certificate could leave with you."
      crumbs={CRUMBS}
      ctaService="NRI property sale TDS"
      faqs={FAQS}
      toolNodes={[
        webApplicationNode({
          path: PATH,
          name: H1,
          description:
            "An estimator that compares the TDS a buyer deducts under section 195 when a non-resident sells Indian property with the estimated tax on the capital gain, and shows the difference a lower deduction certificate could make.",
        }),
      ]}
    >
      <Calculator />

      <EstimateNote>
        <strong>An estimate, not a determination.</strong> The Assessing Officer decides whether a lower or nil deduction
        certificate is issued and at what rate. Exemptions under sections 54 and 54EC are not modelled, and special cases
        are not modelled; a CA should confirm. C S Rushil &amp; Co. reviews the computation for your sale before it is
        filed.
      </EstimateNote>

      <h2 className={H2}>How do I use this NRI property TDS estimator?</h2>
      <p className={P}>
        The estimator needs only the figures from your sale agreement and your purchase papers. Work through the steps
        below, and keep the documents at hand so the numbers match what an Assessing Officer would see.
      </p>
      <ol className="mt-4 max-w-3xl list-decimal space-y-3 pl-6 leading-relaxed text-slate">
        <li>
          <strong>Enter the sale price.</strong> Use the full sale consideration stated in the agreement for sale, not
          the amount you expect to receive after deductions.
        </li>
        <li>
          <strong>Note who is buying.</strong> This does not change the figures, but it goes into the summary you can
          send us, because the buyer&apos;s position affects how the deduction and the paperwork are handled.
        </li>
        <li>
          <strong>Enter the purchase date.</strong> The tool sets the holding period from it as of today. If the sale
          will be registered on a different date, check the holding period answer yourself.
        </li>
        <li>
          <strong>Enter the cost of acquisition, the cost of improvement and the transfer expenses.</strong> Use the
          purchase price, the cost of any capital additions such as a new floor, and expenses wholly for the sale, such
          as brokerage and legal charges.
        </li>
        <li>
          <strong>Read the three results.</strong> Column (a) is the default TDS on the sale price, column (b) is the
          estimated tax on your gain, and the headline figure is the difference between them.
        </li>
        <li>
          <strong>Send the result for review.</strong> The WhatsApp button sends a plain summary of your inputs and the
          result, so a CA can check it before you apply for a certificate.
        </li>
      </ol>

      <h2 className={H2}>Why does the buyer deduct TDS on the whole sale price?</h2>
      <p className={P}>
        When the seller is a non-resident, the buyer must deduct tax at source under section 195 of the Income-tax Act,
        1961 before paying the sale price. The section asks for tax on the sum chargeable to tax, which in principle is
        your capital gain. In practice, however, a buyer cannot verify what you paid for the property, what you spent on
        improving it or what the sale cost you. A buyer who deducts too little can be treated as in default, so buyers
        and their advisers withhold on the gross amount unless a certificate from the Assessing Officer tells them to do
        otherwise.
      </p>
      <p className={P}>
        This is quite different from a sale by a resident, where the buyer deducts a small percentage of the price. For
        an NRI seller the deduction is calculated at the capital gains rate, applied to the entire sale price. On a large
        sale with a modest gain, the tax withheld can be several times the tax actually due, and the excess sits with the
        government until your return is processed and a refund is issued.
      </p>

      <h2 className={H2}>How does the estimator calculate default TDS?</h2>
      <p className={P}>
        For property held for more than 24 months, the gain is long-term. The estimator applies 12.5% to the whole sale
        consideration. It then adds surcharge on that tax: nil where the sale price is up to ₹50 lakh, 10% where it is
        above ₹50 lakh and up to ₹1 crore, and 15% where it is above ₹1 crore, which is the cap for long-term capital
        gains. Finally, it adds Health and Education Cess at 4% of the tax plus surcharge.
      </p>
      <p className={P}>
        For property held for 24 months or less, the gain is short-term and is taxed at the slab rates that apply to the
        seller. Because the estimator does not know your other income, it assumes the highest slab of 30%, with the same
        surcharge bands and cess. That is an assumption, clearly labelled in the result, and your actual rate may be
        lower. The surcharge on larger short-term amounts can also differ from the bands used here, which is another
        reason to have a CA confirm the figure.
      </p>
      <Table
        head={["Component", "Long-term (held over 24 months)", "Short-term (held 24 months or less)"]}
        rows={[
          ["Base rate", "12.5% of the sale consideration", "30% assumed, as slab rates apply"],
          ["Surcharge", "Nil up to ₹50 lakh; 10% above ₹50 lakh to ₹1 crore; 15% above ₹1 crore (cap)", "Same bands used as an assumption; a CA should confirm"],
          ["Cess", "4% of tax plus surcharge", "4% of tax plus surcharge"],
          ["Amount the rate is applied to", "Full sale price, without a certificate", "Full sale price, without a certificate"],
        ]}
      />

      <h2 className={H2}>How is the tax on my actual capital gain estimated?</h2>
      <p className={P}>
        The gain is the sale price less the cost of acquisition, the cost of improvement and the transfer expenses. If
        the result is nil or negative, the estimated tax is nil. For long-term gains, the estimator applies 12.5% without
        indexation, which is the rate for transfers on or after 23 July 2024, and then adds surcharge and cess using the
        same bands, measured against the gain rather than the sale price. For short-term gains it applies the 30%
        assumption again.
      </p>
      <p className={P}>
        This figure is an estimate of what you would owe on the sale itself. It does not take into account your other
        Indian income, any losses you can set off, or reinvestment exemptions under sections 54 and 54EC. Some older
        acquisitions have transitional options that apply to resident individuals and do not apply to non-residents in
        the same way. Those special cases are not modelled; a CA should confirm them before anything is filed.
      </p>

      <h2 className={H2}>What is a lower or nil deduction certificate, and how does it help?</h2>
      <p className={P}>
        A lower or nil deduction certificate is issued by the Assessing Officer on an application in Form 13 under
        section 197 of the Income-tax Act, 1961. The application sets out the sale, your cost and expenses, the computed
        gain and the tax on it. If the officer is satisfied, the certificate names the buyer and the rate at which the
        buyer should deduct tax, so the buyer withholds an amount close to your actual tax instead of tax on the whole
        price.
      </p>
      <p className={P}>
        The Income-tax Act, 2025 applies from 1 April 2026, and the certificate is now issued under its corresponding
        provision; the process of applying with your computation and evidence remains the core of the work. The
        certificate is the officer&apos;s decision, not an automatic right, and the officer may issue it at a rate
        different from the one you apply for. That is why the result above is described as cash that{" "}
        <em>could</em> stay with you.
      </p>
      <p className={P}>
        Timing matters. The certificate is tied to a specific buyer, so it is generally applied for after the sale
        agreement is signed and well before the planned registration date. Our{" "}
        <Link href="/nri-property-sale-tds-chennai" className={LINK}>
          NRI property sale TDS service
        </Link>{" "}
        covers the application, the supporting computation and the follow-up with the Assessing Officer.
      </p>

      <h2 className={H2}>What does a worked example look like?</h2>
      <p className={P}>
        Take an NRI who sells a Chennai flat held for six years for ₹1.2 crore, bought for ₹70 lakh, with ₹5 lakh of
        improvements and ₹1 lakh of transfer expenses. The gain is ₹44 lakh. Default TDS is 12.5% of ₹1.2 crore, which
        is ₹15 lakh, plus 15% surcharge and 4% cess, about ₹17.94 lakh in total. The estimated tax on the gain is 12.5%
        of ₹44 lakh, ₹5.5 lakh, with no surcharge at that level of gain, plus cess, about ₹5.72 lakh. The difference,
        roughly ₹12.22 lakh, is the cash that a certificate could keep with the seller instead of waiting for a refund.
        Enter your own figures above to see your case.
      </p>

      <h2 className={H2}>What else has to be done when an NRI sells property?</h2>
      <p className={P}>
        TDS is one part of the sale. The buyer deposits the tax and files a TDS return, and you receive a TDS
        certificate that you claim in your income tax return. Our{" "}
        <Link href="/tds-return-filing-chennai" className={LINK}>
          TDS return filing service
        </Link>{" "}
        can help a buyer who is unfamiliar with deducting tax from a non-resident. After the sale, you report the gain
        and claim the TDS in your return through our{" "}
        <Link href="/income-tax-return-filing-chennai" className={LINK}>
          income tax return filing service
        </Link>
        , which is also how any excess deduction is refunded.
      </p>
      <p className={P}>
        If you plan to move the sale proceeds abroad, the bank will usually ask for Form 15CA and, in many cases, a CA
        certificate in Form 15CB. Our{" "}
        <Link href="/form-15ca-15cb-chennai" className={LINK}>
          Form 15CA and 15CB service
        </Link>{" "}
        covers that step. Your residential status for the year also decides how the sale is taxed, so if you have spent
        time in India recently, check it with our{" "}
        <Link href="/tools/nri-residential-status-calculator" className={LINK}>
          NRI residential status calculator
        </Link>
        . For the wider picture, including rental income, repatriation and returns, see our{" "}
        <Link href="/nri-tax-services" className={LINK}>
          NRI tax services
        </Link>
        .
      </p>

      <h2 className={H2}>Is the result of this estimator final?</h2>
      <p className={P}>
        No. It applies the rates and bands stated on this page to the figures you enter and gives an estimate for
        guidance. The Assessing Officer decides whether to issue a certificate and at what rate, the tax on your gain
        depends on facts the tool does not ask about, and exemptions and special cases are not modelled. C S Rushil
        &amp; Co. advises on Indian law only; tax in the country where you live is for your adviser there. Clients
        abroad are served online, and you can start with a 15-minute consultation as described in{" "}
        <Link href="/how-we-work" className={LINK}>
          how we work
        </Link>
        .
      </p>

      <ServiceCta
        links={[
          { href: "/nri-property-sale-tds-chennai", label: "NRI property sale TDS" },
          { href: "/form-15ca-15cb-chennai", label: "Form 15CA and 15CB" },
          { href: "/nri-tax-services", label: "NRI tax services" },
        ]}
      >
        Selling a property in India from abroad? We prepare the Form 13 application and computation, help the buyer
        with the deduction, and handle the return and the repatriation paperwork. Read about our{" "}
        <Link href="/nri-property-sale-tds-chennai" className={LINK}>
          NRI property sale TDS service
        </Link>
        .
      </ServiceCta>
    </ToolShell>
  );
}
