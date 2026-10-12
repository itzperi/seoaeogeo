import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const SLUG = "income-tax-consultant-gopalapuram-chennai";
const PAGE_URL = `${SITE_URL}/${SLUG}`;
const linkCls = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Income Tax Consultant in Gopalapuram, Chennai | CA Firm" },
  description:
    "Income tax for Gopalapuram and Poes Garden families: inherited property, HUF returns and partition, gifts within the family, clubbing and rental income.",
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Income Tax Consultant in Gopalapuram, Chennai",
    description: "Inheritance, HUF and family gift tax support for Gopalapuram and Poes Garden households.",
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
      locality="Gopalapuram"
      crumbHref={`/${SLUG}`}
      h1="Income Tax Consultant in Gopalapuram, Chennai"
      subhead="Income tax for long-established families in Gopalapuram and Poes Garden: inherited homes, Hindu Undivided Family (HUF) returns, gifts between relatives and family rental income."
      distanceNote="Gopalapuram is in central Chennai, closer to our only office in Anna Nagar (J-Block, 1st Street, 13th Main Rd) than most south Chennai areas; the drive is commonly around half an hour, longer in heavy traffic. Families often meet us in person at Anna Nagar by appointment for inheritance or HUF matters, and handle the rest by phone, video call and secure document sharing."
      directAnswer="C S Rushil & Co., an Anna Nagar chartered accountant firm, handles income tax for Gopalapuram and Poes Garden families online and by appointment. Typical work is tax on inherited property and its later sale or rent, HUF returns and partitions, gifts between relatives, clubbing of income within the family, and annual returns for several generations."
      localContext={[
        "Gopalapuram is an old, central residential neighbourhood between Mylapore, Royapettah and Teynampet, with Poes Garden just to its south-west. Both are known for quiet streets of large independent houses and walled bungalows, many held by the same families for decades, alongside a growing number of apartment buildings on redeveloped plots.",
        "Many households here are business families, senior professionals, and people from film, music and the arts, often living as joint or extended families across two or three generations. Property and investments are frequently held across several family members, sometimes through a Hindu Undivided Family, and wealth passes down by will, inheritance or gift rather than through sale.",
        "As a result, the income tax questions in Gopalapuram and Poes Garden are less about a single year's salary and more about how family wealth is held and transferred: who reports rent from a jointly inherited house, how an HUF is run and partitioned, when a gift is taxable, and how a property received decades ago is taxed when it is finally sold.",
      ]}
      sections={[
        {
          heading: "How is inherited property taxed for Gopalapuram families?",
          body: (
            <>
              <p>
                Receiving property by inheritance or under a will is not taxable in itself; there is no inheritance tax in
                India. Tax arises later, when the heir earns rent from the property or sells it. On sale, the cost to the
                previous owner and their holding period carry over to the heir, and for property acquired before 1 April 2001
                the fair market value on that date can be adopted, which often reduces the gain substantially.
              </p>
              <p className="mt-4">
                Problems usually come from incomplete records: missing original purchase documents, a house shared among many
                heirs without clear shares, or rent that one family member collects but several should report. We reconstruct
                the history, agree each heir&apos;s share and make sure every return tells the same story.
              </p>
              <SimpleTable
                head={["Common income tax situation in Gopalapuram and Poes Garden", "What we handle"]}
                rows={[
                  ["House inherited from parents, now shared by siblings", "Each heir's share of rent, municipal tax and deductions"],
                  ["Selling an inherited bungalow", "Carried-over cost and holding period, 2001 valuation, reinvestment options"],
                  ["Family property held by an HUF", "HUF PAN and return, karta's role, income from HUF assets"],
                  ["Partition of an HUF among members", "Documenting the partition and tax position of each member afterwards"],
                  ["Gifts of money, shares or property to children or grandchildren", "Whether the gift is taxable and how income on it is taxed"],
                  ["Transfer of assets to a spouse or daughter-in-law", "Clubbing of income back to the giver and how to avoid surprises"],
                ]}
              />
            </>
          ),
        },
        {
          heading: "How do HUF returns and gifts within the family work?",
          body: (
            <>
              <p>
                A Hindu Undivided Family is a separate taxpayer with its own PAN and return. Ancestral property, income from
                HUF assets and gifts received by the HUF are taxed in its hands, which can spread income across a separate
                basic exemption and slab. The karta manages the HUF, and a partition, whether full or partial, has its own
                consequences that need to be recorded properly.
              </p>
              <p className="mt-4">
                Gifts from relatives, as defined in the Act, such as parents, children, siblings and spouses, are not taxable
                in the hands of the receiver, whatever the amount. Gifts from non-relatives above a small annual limit are
                taxable, except on occasions such as marriage. Income from a gift to a spouse or a son&apos;s wife can still be
                clubbed with the giver&apos;s income.
              </p>
              <SimpleTable
                head={["Type of gift", "Income tax position for the receiver"]}
                rows={[
                  ["From a relative (parent, child, sibling, spouse and others defined)", "Not taxable, regardless of value"],
                  ["On the occasion of marriage", "Not taxable, regardless of who gives it"],
                  ["Under a will or by inheritance", "Not taxable when received"],
                  ["From a non-relative, above the annual limit", "Taxable as income of the receiver"],
                  ["To a spouse or son's wife", "Not taxable when received, but income from it may be clubbed with the giver's"],
                ]}
              />
            </>
          ),
        },
        {
          heading: "Where else can Gopalapuram families get income tax help?",
          body: (
            <>
              <p>
                For families managing several properties, an HUF and investments across generations, our{" "}
                <Link href="/income-tax-consultant-for-hni-chennai" className={linkCls}>
                  income tax consultant for high-income individuals and families in Chennai
                </Link>{" "}
                page explains how we approach the whole household. Individual returns are covered on{" "}
                <Link href="/income-tax-return-filing-chennai" className={linkCls}>income tax return filing in Chennai</Link>;
                heirs living abroad can read about{" "}
                <Link href="/nri-property-sale-tds-chennai" className={linkCls}>NRI property sale TDS in Chennai</Link>, and
                notices are handled on{" "}
                <Link href="/income-tax-notice-reply-chennai" className={linkCls}>income tax notice replies</Link>.
              </p>
              <p className="mt-4">
                Nearby, see{" "}
                <Link href="/chartered-accountant-nungambakkam-chennai" className={linkCls}>chartered accountant in Nungambakkam</Link> and{" "}
                <Link href="/income-tax-consultant-alwarpet-chennai" className={linkCls}>income tax consultant in Alwarpet</Link>.
                The Income Tax Department outlines the Income-tax Act, 2025 on its{" "}
                <a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/objective-and-scope-new-act" className={linkCls} target="_blank" rel="noopener noreferrer">
                  new Act overview (incometax.gov.in)
                </a>
                . To discuss your family&apos;s position, <Link href="/contact" className={linkCls}>contact us</Link>.
              </p>
            </>
          ),
        },
      ]}
      relevantServices={[
        { slug: "income-tax-consultant-for-hni-chennai", why: "Planning across generations for Gopalapuram families with inherited property, HUFs and investments." },
        { slug: "income-tax-return-filing-chennai", why: "Individual and HUF returns, including rent from jointly inherited houses." },
        { slug: "nri-property-sale-tds-chennai", why: "Lower TDS and repatriation when an heir abroad sells their share of family property." },
        { slug: "income-tax-notice-reply-chennai", why: "Replies to notices on property sales, gifts or high-value transactions." },
      ]}
      faqs={[
        { question: "Do I pay tax when I inherit my parents' house in Gopalapuram?", answer: "No. India has no inheritance tax, and property received by will or succession is not taxed when received. Tax arises later on rent you earn from it, or when you sell it. On a sale, your parents' original cost and holding period are used to work out the capital gain." },
        { question: "We are four siblings sharing an inherited house that is let out. Who pays tax on the rent?", answer: "Each co-owner reports their share of the rent and deductions in their own return, if their shares are definite. It does not matter that one sibling collects the rent. Consistent shares across all four returns, matching the legal heirship or will, avoid notices and later disputes." },
        { question: "Is it worth having an HUF for our family?", answer: "An HUF is a separate taxpayer with its own exemption limit and slabs, so income from HUF property can be taxed separately from the members. It suits families that already hold ancestral property. Running one requires separate accounts and returns, and partition later has to be documented, so we assess it case by case." },
        { question: "Can I gift money to my grandson without tax?", answer: "Yes. A grandparent is a relative under the gift rules, so the grandson pays no tax on receiving the money. If the grandson is a minor, income earned on the gifted money is generally clubbed with a parent's income until he turns eighteen, which is worth planning for." },
        { question: "If I gift a flat to my wife, who pays tax on the rent?", answer: "The rent is generally clubbed with your income, because the asset was transferred to your spouse without adequate consideration. The flat still belongs to your wife, and the clubbing continues while the marriage subsists. Gifts to adult children do not attract clubbing in the same way, so we look at the family as a whole." },
        { question: "Can we meet in person to discuss an inheritance?", answer: "Yes. Gopalapuram is fairly close to our Anna Nagar office, and many families prefer one meeting in person to go through wills, deeds and family records. Book a time and visit us at Anna Nagar; we have no branch in Gopalapuram, Poes Garden or anywhere else." },
      ]}
      furtherReading={[
        { slug: "capital-gains-tax-property-sale", title: "Capital Gains Tax on Property Sale for Chennai Sellers" },
      ]}
    />
  );
}
