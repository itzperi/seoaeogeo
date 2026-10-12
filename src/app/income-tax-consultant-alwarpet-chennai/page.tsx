import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const SLUG = "income-tax-consultant-alwarpet-chennai";
const PAGE_URL = `${SITE_URL}/${SLUG}`;
const linkCls = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Income Tax Consultant in Alwarpet, Chennai | CA Firm" },
  description:
    "Income tax for Alwarpet doctors, consultants and property owners: presumptive tax, clinic income, commercial and residential rent, advance tax and notices.",
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Income Tax Consultant in Alwarpet, Chennai",
    description: "Professional income, clinic and rental income tax support for Alwarpet residents.",
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
      locality="Alwarpet"
      crumbHref={`/${SLUG}`}
      h1="Income Tax Consultant in Alwarpet, Chennai"
      subhead="Income tax for Alwarpet's doctors, lawyers, architects and consultants, and for families who earn rent from flats or commercial premises in this central south Chennai address."
      distanceNote="Alwarpet sits in central south Chennai, roughly half an hour to 45 minutes by road from our only office in Anna Nagar (J-Block, 1st Street, 13th Main Rd), depending on traffic. Many Alwarpet professionals prefer a short video call around clinic or court hours, and visit Anna Nagar by appointment for year-end reviews."
      directAnswer="C S Rushil & Co., an Anna Nagar chartered accountant firm, handles income tax for Alwarpet residents online and by appointment. Most work here involves professional income from clinics, chambers and consultancies, choosing between presumptive tax and full books, advance tax, and rental income from residential or commercial property, with notices handled when they arrive."
      localContext={[
        "Alwarpet is a compact, centrally placed neighbourhood between Mylapore, Teynampet and R A Puram, crossed by busy roads such as TTK Road and C P Ramaswamy Road. It mixes older family homes and apartment buildings with clinics, consulting rooms, restaurants, boutiques and small offices, so many residents both live and earn in the same few streets.",
        "The area has long drawn established professionals: doctors running private practices or consulting at nearby hospitals, advocates, chartered accountants, architects and management consultants. Their income tax position is shaped less by salary and more by professional receipts, practice expenses, equipment, staff and the question of whether to use the presumptive scheme or maintain full books with a tax audit.",
        "Because Alwarpet property commands strong rents, many families own a flat, a floor or a shop front that they let out, sometimes to clinics or offices. That brings rental income with its own rules, joint ownership between spouses or siblings, tenants deducting TDS on rent, and occasionally GST on commercial lettings, alongside the professional income in the same household.",
      ]}
      sections={[
        {
          heading: "How should Alwarpet doctors and consultants be taxed on practice income?",
          body: (
            <>
              <p>
                Independent professionals can either declare income under the presumptive scheme for professionals, which
                treats a set share of gross receipts as income and requires no detailed books, or maintain full accounts and
                claim actual expenses. The presumptive route suits a lean practice; full books usually suit a clinic with
                rent, staff, consumables and equipment, where real expenses are higher than the presumed share. Crossing
                the presumptive limit, or declaring less than the presumed income while above the basic exemption, can make a
                tax audit compulsory.
              </p>
              <p className="mt-4">
                Doctors who consult at several hospitals also receive receipts with TDS from each, and these must reconcile
                with the annual tax statement. We match every hospital and insurer credit, plan advance tax instalments so
                interest is avoided, and decide each year whether the old or new regime leaves more in hand.
              </p>
              <SimpleTable
                head={["Common income tax situation in Alwarpet", "What we handle"]}
                rows={[
                  ["Doctor consulting at several hospitals with TDS from each", "Reconciling receipts with the tax statement, advance tax, return"],
                  ["Own clinic with staff, rent and equipment", "Presumptive vs full-books decision, depreciation, tax audit check"],
                  ["Advocate, architect or consultant in solo practice", "Professional income, expense records, advance tax schedule"],
                  ["Floor or shop let to a clinic or office", "Rental income, TDS by tenant, GST registration question on commercial rent"],
                  ["Spouses jointly owning a let-out flat", "Splitting rent and interest by ownership share across both returns"],
                  ["Notice on receipts not matching the tax statement", "Reconciliation and reply on the income tax portal"],
                ]}
              />
            </>
          ),
        },
        {
          heading: "How is rental income from Alwarpet property taxed?",
          body: (
            <>
              <p>
                Rent from a flat, floor or shop is taxed as income from house property. Municipal tax actually paid is
                deducted, a standard deduction of 30% of the resulting value is allowed in place of actual repairs, and
                interest on a loan taken for the property is deductible within limits. If the property is jointly owned, each
                owner reports their share, which needs to match the ownership on the sale deed and the TDS credits from tenants.
              </p>
              <p className="mt-4">
                Commercial lettings to clinics, offices or shops are a taxable supply under GST, unlike residential rent to a
                family. Once total turnover crosses the GST threshold, registration and returns follow; we look at this
                together with the income tax side so the two filings agree. Details are on our{" "}
                <Link href="/goods-and-services-tax" className={linkCls}>GST registration and returns</Link> page.
              </p>
              <SimpleTable
                head={["Rental item", "How it is treated for income tax"]}
                rows={[
                  ["Municipal (property) tax paid", "Deducted from the annual value in the year paid"],
                  ["Repairs and maintenance", "Covered by the flat 30% standard deduction, not claimed separately"],
                  ["Home loan interest on let-out property", "Deductible; any loss set off against other income is capped"],
                  ["Advance or security deposit", "Not income if refundable; adjusted rent is taxable"],
                  ["TDS deducted by a business tenant", "Claimed against your tax after matching with the tax statement"],
                ]}
              />
            </>
          ),
        },
        {
          heading: "Where can Alwarpet families get help with larger or more complex tax affairs?",
          body: (
            <>
              <p>
                For households with practice income, several properties, investments and family members filing together, our{" "}
                <Link href="/income-tax-consultant-for-hni-chennai" className={linkCls}>
                  income tax consultant for high-income individuals and families in Chennai
                </Link>{" "}
                page explains how we plan the year as a whole. Routine returns are covered on{" "}
                <Link href="/income-tax-return-filing-chennai" className={linkCls}>income tax return filing in Chennai</Link>, and
                existing notices on{" "}
                <Link href="/income-tax-notice-reply-chennai" className={linkCls}>income tax notice replies</Link>. Professionals
                who want to move a growing practice into a company can read about{" "}
                <Link href="/private-limited-company-incorporation-chennai" className={linkCls}>private limited company registration</Link>.
              </p>
              <p className="mt-4">
                Neighbouring areas have their own profile: see our pages for{" "}
                <Link href="/chartered-accountant-mylapore-chennai" className={linkCls}>chartered accountant in Mylapore</Link> and{" "}
                <Link href="/income-tax-consultant-ra-puram-chennai" className={linkCls}>income tax consultant in R A Puram</Link>.
                The Income Tax Department sets out the scope of the Income-tax Act, 2025 on its{" "}
                <a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/objective-and-scope-new-act" className={linkCls} target="_blank" rel="noopener noreferrer">
                  new Act overview (incometax.gov.in)
                </a>
                . To discuss your practice, <Link href="/contact" className={linkCls}>contact us</Link>.
              </p>
            </>
          ),
        },
      ]}
      relevantServices={[
        { slug: "income-tax-return-filing-chennai", why: "Returns for Alwarpet doctors, advocates and consultants, with receipts reconciled to the tax statement." },
        { slug: "income-tax-consultant-for-hni-chennai", why: "Year-round planning for Alwarpet households combining practice income, rent and investments." },
        { slug: "income-tax-notice-reply-chennai", why: "Replies to mismatch and high-value transaction notices for professionals and landlords." },
        { slug: "goods-and-services-tax", why: "GST registration and returns where commercial premises are let to clinics, offices or shops." },
        { slug: "private-limited-company-incorporation-chennai", why: "Company registration for professionals moving a growing practice or consultancy into a company." },
      ]}
      faqs={[
        { question: "Should my Alwarpet clinic use the presumptive scheme or keep full books?", answer: "It depends on your real expenses. The presumptive scheme treats a fixed share of receipts as income and suits a lean practice. A clinic with rent, staff, consumables and equipment often has higher actual costs, so full books can lower tax. We compare both every year before you file." },
        { question: "I consult at three hospitals. Why does my tax statement show different receipts?", answer: "Each hospital deducts TDS and reports your fees separately, sometimes under different months or amounts after adjustments. Your return must reconcile with these entries. We match every credit to your own records and correct gaps before filing, which avoids the most common mismatch notices sent to doctors." },
        { question: "Do I need a tax audit for my practice?", answer: "A tax audit is required if professional receipts cross the audit limit, or if you use the presumptive scheme but declare income below the presumed share while your total income exceeds the basic exemption. We check your receipts, cash share and declared profit each year to confirm whether an audit applies." },
        { question: "I let a shop in Alwarpet to a business. Is GST payable on the rent?", answer: "Renting commercial property is a taxable supply under GST, unlike residential rent to a family. Whether you must register depends on your total turnover from taxable supplies and the current rules on tenants paying under reverse charge. We review your lettings and advise on registration before it becomes a problem." },
        { question: "My wife and I jointly own a let-out flat. How do we report the rent?", answer: "Each co-owner reports their share of rent and deductions in their own return, normally in line with the ownership shares on the sale deed. Home loan interest is split the same way if both are borrowers. Consistent splits across both returns prevent mismatches with the tenant's TDS records." },
        { question: "Can I work with your firm without coming to Anna Nagar?", answer: "Yes. Most Alwarpet professionals share documents online and speak with us by phone or video around clinic or court hours. Our only office is in Anna Nagar, and you are welcome to visit by appointment for year-end planning or notice discussions." },
      ]}
      furtherReading={[
        { slug: "advance-tax-deadlines", title: "Advance Tax Deadlines for FY 2026 to 27: A Practical Guide" },
        { slug: "old-vs-new-tax-regime", title: "Old vs New Tax Regime FY 2026-27: Which Saves More Tax?" },
      ]}
    />
  );
}
