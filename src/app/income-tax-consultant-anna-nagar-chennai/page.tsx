import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const SLUG = "income-tax-consultant-anna-nagar-chennai";
const PAGE_URL = `${SITE_URL}/${SLUG}`;
const linkCls = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Income Tax Consultant in Anna Nagar, Chennai | Walk-in CA" },
  description:
    "Income tax in Anna Nagar for senior citizens, parents of NRIs, NRI property sellers, doctors and Koyambedu traders, from a CA office in J-Block, Anna Nagar.",
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Income Tax Consultant in Anna Nagar, Chennai",
    description: "Returns, NRI property-sale TDS, senior-citizen tax and trader income tax, from a Chartered Accountancy office in Anna Nagar.",
    url: `/${SLUG}`,
  },
};

function SimpleTable({ head, rows }: { head: [string, string]; rows: [string, string][] }) {
  return (
    <div className="mt-6 max-w-3xl overflow-hidden rounded-cards border border-ash">
      <table className="w-full text-left text-sm">
        <thead className="bg-carbon text-white">
          <tr>
            <th className="px-4 py-3 font-medium">{head[0]}</th>
            <th className="px-4 py-3 font-medium">{head[1]}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ash bg-paper">
          {rows.map(([a, b]) => (
            <tr key={a}>
              <td className="px-4 py-3 align-top font-medium text-obsidian">{a}</td>
              <td className="px-4 py-3 align-top text-slate">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      topic="Income Tax Consultant"
      locality="Anna Nagar"
      crumbHref={`/${SLUG}`}
      h1="Income Tax Consultant in Anna Nagar, Chennai"
      subhead="Income tax for Anna Nagar's retired and senior residents, parents whose children live abroad, NRIs selling a family flat, doctors with clinics on the main avenues and traders working out of Koyambedu, from our own office in J-Block, Anna Nagar."
      distanceNote="Our only office is in Anna Nagar itself: Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Road. Anna Nagar residents can walk in by appointment, bring original documents for a sale deed or a notice, and sit with the person preparing their return. NRI family members abroad join the same meeting by video."
      directAnswer="C S Rushil & Co. is a Chartered Accountancy firm based in J-Block, Anna Nagar, that handles income tax for Anna Nagar residents in person and online. Most work here is returns for pensioners and senior citizens, tax and TDS when an NRI family member sells a flat, gifts and remittances from children abroad, and business income for doctors and Koyambedu traders."
      localContext={[
        "Anna Nagar is a planned residential neighbourhood in west Chennai, laid out in lettered blocks and numbered avenues around Tower Park, with Anna Nagar West, Shanthi Colony and Thirumangalam around it. Many of its houses and flats were bought decades ago by families who still live in them, so a large share of residents are retired, drawing a pension, interest and rent rather than a salary.",
        "It is also a neighbourhood of parents whose children work in the US, the UK, the Gulf, Singapore or Australia. That brings money sent home, joint bank accounts, flats held in an NRI child's name, and eventually the sale of a family property, each with its own income tax and TDS consequences on both sides.",
        "The main avenues carry clinics, diagnostic centres, coaching institutes and showrooms, and the Koyambedu wholesale market is next door. Doctors, institute owners and wholesale traders in fruit, vegetables and flowers make up much of the area's business income, much of it collected in cash or through UPI, which is where most mismatch and cash-transaction notices start.",
      ]}
      sections={[
        {
          heading: "How are retired and senior residents of Anna Nagar taxed?",
          body: (
            <>
              <p>
                A resident aged 60 or more is a senior citizen for income tax, and 80 or more a super senior citizen, with
                higher basic exemption limits under the old regime. A resident senior citizen with no business or professional
                income does not pay advance tax, and can give the bank a declaration (earlier Form 15H) so that tax is not
                deducted on deposit interest when the year&apos;s income is below the taxable limit.
              </p>
              <p className="mt-4">
                Pension, deposit interest and rent from a let-out portion are the usual mix, and the choice between the old and
                new regimes changes from year to year with interest rates. We compare both before filing, match every bank&apos;s
                TDS with the annual tax statement, and file the return for each spouse separately where the deposits are joint.
              </p>
              <SimpleTable
                head={["Common situation in Anna Nagar", "What we handle"]}
                rows={[
                  ["Pensioner with deposits in several banks", "Interest reconciled bank by bank, regime comparison, return filing"],
                  ["Senior citizen whose income is below the taxable limit", "Declarations so banks do not deduct TDS, and refund of any tax already cut"],
                  ["Upper floor or portion let out", "House property income with the 30% standard deduction and the tenant's TDS"],
                  ["Couple with joint fixed deposits", "Interest split by the first holder rule and the source of the money"],
                  ["Notice about interest not shown in the return", "Reconciliation with the AIS and a reply on the portal"],
                ]}
              />
            </>
          ),
        },
        {
          heading: "What should Anna Nagar families with children abroad know about income tax?",
          body: (
            <>
              <p>
                Money a child abroad sends to parents is a gift from a relative and is not taxable in the parents&apos; hands,
                whatever the amount. The interest it earns once deposited is taxable to whoever owns the deposit, so the
                account structure matters more than the remittance itself. Parents who hold money on behalf of an NRI child
                should keep that clear in the bank records.
              </p>
              <p className="mt-4">
                When an NRI sells a flat in Anna Nagar, the buyer must deduct TDS on the capital gain at the rate for
                non-residents, which on the full sale price can be far higher than the tax actually due. A lower deduction
                certificate from the Income Tax Department, applied for before the sale deed is signed, brings the deduction
                down to the expected tax. The NRI then files an Indian return and repatriates the money through an NRO account
                with the CA certificate the bank needs. Our{" "}
                <Link href="/nri-property-sale-tds-chennai" className={linkCls}>NRI property sale TDS and repatriation</Link>{" "}
                page covers the full sequence, and the{" "}
                <Link href="/tools/nri-property-sale-tds-calculator" className={linkCls}>NRI property sale TDS calculator</Link>{" "}
                gives a first estimate.
              </p>
              <SimpleTable
                head={["Family situation", "Income tax point"]}
                rows={[
                  ["Child abroad sends money to parents", "A gift from a relative: not taxable; interest on the deposit is"],
                  ["Flat in Anna Nagar owned by an NRI child", "Rent taxable in India; tenant deducts TDS at non-resident rates"],
                  ["NRI selling the family flat", "Buyer deducts TDS; a lower deduction certificate before the deed reduces it"],
                  ["Sale money to be sent abroad", "NRO repatriation with the CA certificate and the remitter's form"],
                  ["Child returning to Chennai for good", "Residential status, often RNOR for the first years, and foreign assets"],
                ]}
              />
            </>
          ),
        },
        {
          heading: "How are Anna Nagar doctors and Koyambedu traders taxed?",
          body: (
            <>
              <p>
                Doctors and institute owners on the main avenues usually choose between the presumptive scheme for
                professionals and full books with actual expenses. Wholesale traders at Koyambedu often use the presumptive
                scheme for businesses, where the lower deemed profit applies to receipts that come through banks and digital
                payments rather than cash, so the mix of cash and UPI collections changes the tax.
              </p>
              <p className="mt-4">
                Cash rules matter here. A business cannot receive ₹2 lakh or more in cash from one person for a single
                transaction or on a single day, and large cash deposits show up in the annual information statement. We
                reconcile cash, UPI and bank receipts with the books before the return is filed, which is where most notices
                to traders begin. Related reading: our{" "}
                <Link href="/blog/safe-cash-deposit-limit" className={linkCls}>guide to cash deposit limits</Link> and{" "}
                <Link href="/goods-and-services-tax" className={linkCls}>GST registration and returns</Link>.
              </p>
            </>
          ),
        },
        {
          heading: "Where can Anna Nagar residents get help with larger tax affairs, in Chennai or abroad?",
          body: (
            <>
              <p>
                Households with several properties, investments and family members filing together are covered on our{" "}
                <Link href="/income-tax-consultant-for-hni-chennai" className={linkCls}>
                  income tax consultant for high-income individuals and families
                </Link>{" "}
                page. Children abroad can read the{" "}
                <Link href="/nri-tax-services-usa" className={linkCls}>US</Link>,{" "}
                <Link href="/nri-tax-services-uk" className={linkCls}>UK</Link>,{" "}
                <Link href="/nri-tax-services-uae" className={linkCls}>UAE and Dubai</Link> and{" "}
                <Link href="/nri-tax-services-singapore" className={linkCls}>Singapore</Link> NRI tax pages. For everything
                else a chartered accountant does in the neighbourhood, see{" "}
                <Link href="/chartered-accountant-anna-nagar-chennai" className={linkCls}>chartered accountant in Anna Nagar</Link>.
              </p>
              <p className="mt-4">
                The Income Tax Department explains the Income-tax Act, 2025, which replaced the 1961 Act from 1 April 2026, on
                its{" "}
                <a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/objective-and-scope-new-act" className={linkCls} target="_blank" rel="noopener noreferrer">
                  new Act overview (incometax.gov.in)
                </a>
                . To book a walk-in appointment, <Link href="/contact" className={linkCls}>contact us</Link>.
              </p>
            </>
          ),
        },
      ]}
      relevantServices={[
        { slug: "income-tax-return-filing-chennai", why: "Returns for Anna Nagar pensioners, professionals and traders, with AIS and TDS reconciled before filing." },
        { slug: "nri-property-sale-tds-chennai", why: "Lower deduction certificates, capital gains and repatriation when an NRI sells an Anna Nagar flat." },
        { slug: "nri-tax-services", why: "Indian returns and treaty claims for Anna Nagar families' children living abroad." },
        { slug: "income-tax-notice-reply-chennai", why: "Replies to interest, cash deposit and high-value transaction notices." },
        { slug: "income-tax-consultant-for-hni-chennai", why: "Year-round planning for households with several properties and investments." },
      ]}
      faqs={[
        { question: "Is there an income tax consultant I can walk in to in Anna Nagar?", answer: "Yes. Our only office is in J-Block, Anna Nagar (Old Door No. AP-890, New No. 18, 1st Street, 13th Main Road), open Monday to Saturday from 9:30 am to 6:30 pm. Walk-in meetings are by appointment, so the person preparing your return is free to sit with you." },
        { question: "Is money my son sends from the US taxable for me?", answer: "No. Money received from a relative, which includes a son or daughter, is a gift and not taxable in your hands, however large. The interest it earns after you deposit it is taxable to you as the account owner. Keep the remittance records in case the bank or the department asks where the money came from." },
        { question: "My daughter is an NRI and wants to sell our Anna Nagar flat. What happens to TDS?", answer: "The buyer must deduct TDS at the rate for non-residents before paying her, which can be far more than the tax due. She can apply for a lower deduction certificate before the sale deed is signed so only the expected tax is deducted. She then files an Indian return and repatriates the money through her NRO account with the CA certificate the bank needs." },
        { question: "I am a senior citizen with only pension and interest. Do I still need to file a return?", answer: "If your income is above the basic exemption limit, yes, unless you are 75 or older and meet the conditions under which the bank deducts the tax and no return is needed. Filing is also the only way to get back TDS deducted in a year when your income was below the limit. We check which applies each year." },
        { question: "I trade at Koyambedu and receive most payments in cash. What should I watch?", answer: "Two things. You cannot receive ₹2 lakh or more in cash from one person for one transaction or on one day, and large cash deposits appear in your annual information statement, so your declared turnover must explain them. Moving more collections to UPI or bank transfer also changes how much profit is deemed under the presumptive scheme." },
        { question: "Can my children abroad join our meeting?", answer: "Yes. Many Anna Nagar families meet us at the office with a son or daughter joining by video from the US, UK, Gulf or Singapore, especially before a property sale or when a child is planning to return. Documents can be shared online in advance." },
      ]}
      furtherReading={[
        { slug: "capital-gains-tax-property-sale", title: "Capital Gains Tax on Selling Property in Chennai: 2026 Guide" },
        { slug: "rnor-status-returning-nri", title: "RNOR Status for NRIs Returning to Chennai: Tax Guide" },
        { slug: "safe-cash-deposit-limit", title: "How Much Cash Can You Deposit in Your Bank Account?" },
      ]}
    />
  );
}
