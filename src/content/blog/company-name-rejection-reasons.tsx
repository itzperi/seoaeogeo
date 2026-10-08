import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "company-name-rejection-reasons",
  title: "Why the MCA Rejects Company Names (and How to Avoid It)",
  description:
    "Why company names get rejected in SPICe+ Part A: identical names, trademark conflicts, restricted words and naming rules, plus how to pick two strong options.",
  date: "2026-10-13",
  excerpt:
    "Identical names, trademark clashes, restricted words and generic descriptive names: why SPICe+ Part A name applications fail, and how to avoid it.",
  faqs: [
    {
      question: "How many names can I propose in SPICe+ Part A?",
      answer:
        "If you reserve the name first and file Part B later, SPICe+ Part A lets you propose up to two names, of which the Central Registration Centre approves one. If you file Part A and Part B together as one application, you can enter only one name, so a rejection then sends the whole application back for resubmission.",
    },
    {
      question: "How long is an approved company name reserved?",
      answer:
        "An approved name for a new company is reserved for 20 days from the date of approval under section 4(5) of the Companies Act, 2013. The MCA allows paid extensions: Rs. 1,000 for 20 to 40 days, Rs. 2,000 for 40 to 60 days, or Rs. 3,000 for 20 to 60 days if paid within the first 20 days.",
    },
    {
      question: "Can I use a registered trademark in my company name?",
      answer:
        "Only with the owner's consent. MCA guidance says that if a proposed name includes a registered trademark, you must attach the consent of the trademark owner or applicant with their KYC documents, and a board resolution where the owner is a company. Without consent, the name is likely to be rejected or sent for resubmission.",
    },
    {
      question: "Is RUN still used to reserve names for new companies?",
      answer:
        "No. The MCA now describes RUN (Reserve Unique Name) as the service for changing the name of an existing company. Names for new companies are reserved through SPICe+ Part A, either as a standalone name application or together with the full incorporation filing in Part B.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Name rejection is the most common reason a company incorporation
        stalls in its first week. The name you like may be perfectly available
        as a domain, yet still fail the Registrar&apos;s tests because it
        resembles an existing company, includes a registered trademark, or uses
        a word that needs government approval. This post explains how the
        Ministry of Corporate Affairs (MCA) assesses names and how to choose two
        options that are likely to pass.
      </p>

      <h2>Where name approval happens: SPICe+ Part A</h2>
      <p>
        For a new company, the name is reserved in Part A of the SPICe+ web form.
        According to the MCA&apos;s{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/spiceplus-linked-filings.html" target="_blank" rel="noopener noreferrer">SPICe+ FAQs</a>,
        you can either reserve the name first (proposing up to two names, of
        which one is approved) or file Part A and Part B together with only one
        name. RUN, the older standalone service, is now used for changing the
        name of an existing company.
      </p>
      <p>
        A name reservation application filed separately carries a fee of Rs.
        1,000. An approved name is reserved for 20 days, with paid extensions
        available up to 60 days.
      </p>

      <h2>What does the law say about company names?</h2>
      <p>
        Section 4 of the{" "}
        <a href="https://www.indiacode.nic.in/bitstream/123456789/2114/5/A2013-18.pdf" target="_blank" rel="noopener noreferrer">Companies Act, 2013</a>{" "}
        sets the basic rules. A name must not be identical with, or too nearly
        resemble, the name of an existing company. It must not be an offence
        under any law or be undesirable in the opinion of the Central
        Government. It cannot suggest a connection with, or patronage of, any
        government or government body unless previous approval has been
        obtained. A private company must also end with the words Private
        Limited.
      </p>
      <p>
        The Companies (Incorporation) Rules, 2014 add detail. Rule 8 treats
        names as identical even where differences are cosmetic, such as plural
        and singular forms, changes in letter case or spacing, punctuation, the
        addition of words like the, or adding an internet domain extension.
        Rule 8A lists undesirable names, and Rule 8B lists words that need
        prior Central Government approval.
      </p>

      <h2>The most common reasons names are rejected</h2>
      <p>
        MCA&apos;s own FAQ lists the grounds on which name applications are put
        into resubmission or rejected. In plain terms:
      </p>
      <table>
        <thead>
          <tr>
            <th>Reason</th>
            <th>Example of the problem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Identical or phonetically similar to an existing company or LLP</td>
            <td>Proposing a name that sounds the same as one already on the register, even with a different spelling</td>
          </tr>
          <tr>
            <td>Includes a registered trademark</td>
            <td>Using a brand name registered by someone else in a relevant class, without the owner&apos;s consent</td>
          </tr>
          <tr>
            <td>Too descriptive</td>
            <td>A name made only of common words such as Chennai Software Solutions Private Limited, without a distinctive element</td>
          </tr>
          <tr>
            <td>Abbreviations with no explained significance</td>
            <td>Using initials like ABC without stating what they stand for</td>
          </tr>
          <tr>
            <td>Name does not match the objects</td>
            <td>Using Finance, Investment, Capital, Holdings or Insurance when the main objects are, say, software development</td>
          </tr>
          <tr>
            <td>Restricted words without approval</td>
            <td>Words such as Board, Commission, Authority, National, Union, Federal, Bureau or Republic</td>
          </tr>
          <tr>
            <td>Wrong class or category in the form</td>
            <td>Selecting the wrong company type or sub-category in Part A</td>
          </tr>
          <tr>
            <td>Foreign country or city in the name</td>
            <td>Using a foreign place name without proof of business connection, such as an agreement with a company there</td>
          </tr>
        </tbody>
      </table>
      <p>
        Words like Bank, Banking, Insurance, Venture Capital or Mutual Fund need
        approval from the relevant regulator. A name that is identical to one
        currently reserved by another applicant is also treated as undesirable.
      </p>

      <h2>Why trademarks matter more than founders expect</h2>
      <p>
        The MCA checks proposed names against registered trademarks. If your
        proposed name includes a word registered by someone else as a
        trademark, MCA guidance requires a consent letter from the trademark
        owner with their KYC documents. Separately, even if the MCA approves a
        name, a trademark owner can still challenge it later under trademark
        law, which could force a name change after you have printed letterheads
        and built a website.
      </p>
      <p>
        Before applying, search the Trade Marks Registry for your core word in
        the classes relevant to your business. If the name is important to your
        brand, consider applying for your own{" "}
        <Link href="/trademark-registration-chennai">trademark registration</Link>{" "}
        soon after incorporation.
      </p>

      <h2>How to choose two good name options</h2>
      <p>
        A strong name usually has two parts: a distinctive word and a word that
        describes the activity. Follow these steps:
      </p>
      <ul>
        <li><strong>Start with a coined or uncommon word.</strong> Invented words or unusual combinations rarely clash with existing names.</li>
        <li><strong>Add an activity word that matches your objects.</strong> Technologies, Foods, Logistics or Consulting should reflect what the MoA says.</li>
        <li><strong>Search the MCA register first.</strong> Use the MCA&apos;s{" "}
          <a href="https://www.mca.gov.in/content/mca/global/en/mca/fo-llp-services/company-llp-name-search.html" target="_blank" rel="noopener noreferrer">company and LLP name search</a>{" "}
          to check existing companies and LLPs, including phonetic variants.</li>
        <li><strong>Search trademarks.</strong> Check your distinctive word in relevant classes.</li>
        <li><strong>Make the two options genuinely different.</strong> If your first option fails for similarity, a second option built on the same root word will usually fail for the same reason.</li>
        <li><strong>Explain any abbreviation.</strong> If the name uses initials, mention their significance in the application.</li>
        <li><strong>Avoid restricted words</strong> unless you are prepared to obtain the approval.</li>
      </ul>

      <h2>A worked example: testing three candidate names</h2>
      <p>
        Suppose two founders in Chennai are starting a company to build
        accounting software for clinics. They shortlist three names:
      </p>
      <ul>
        <li><strong>Chennai Software Private Limited:</strong> likely to fail as too descriptive, since it combines a place and a generic activity with nothing distinctive</li>
        <li><strong>Velorith Technologies Private Limited:</strong> distinctive and matches the objects, but needs checking against existing companies and trademarks, since similar coined words are popular in health tech</li>
        <li><strong>Kavyan Health Systems Private Limited:</strong> built on an uncommon word with an activity word that fits the objects; a good second option because it shares no root with the first</li>
      </ul>
      <p>
        After running the MCA name search and a trademark search, they would
        file Velorith as the first option and Kavyan as the second. If both
        clear the searches, either is likely to be approved.
      </p>

      <h2>Should you reserve the name first or file everything together?</h2>
      <p>
        Filing Part A on its own costs a separate fee and adds a step, but it
        lets you propose two names and lock one in for 20 days while you
        finalise the rest of the application. Filing Part A and Part B together
        saves the separate fee and a few days if the name is clean, but you can
        propose only one name, and an objection holds up the entire
        application.
      </p>
      <p>
        As a rule of thumb, reserve first if the name matters to your brand, if
        it contains any word that could be questioned, or if documents for a
        director are still being attested abroad. File together if the name is
        clearly distinctive and every other document is ready.
      </p>

      <h2>Smaller details that also cause objections</h2>
      <ul>
        <li><strong>The suffix:</strong> a private company&apos;s name must end with Private Limited; an OPC uses (OPC) Private Limited</li>
        <li><strong>Special characters:</strong> MCA allows a defined set of special characters in Part A names, but heavy use of symbols makes names harder to search and may still be questioned</li>
        <li><strong>Personal names:</strong> using a founder&apos;s own name is common and generally acceptable, but the name of a well-known person, or a name likely to mislead the public, can be treated as undesirable</li>
        <li><strong>Translations:</strong> restricted words are restricted in any language that conveys the same meaning, not only in English</li>
      </ul>

      <h2>What to do if your name is rejected</h2>
      <p>
        Read the remark carefully. If the name is put into resubmission, you
        can usually address the objection by explaining the significance of the
        name, attaching a trademark consent, or modifying the name. If it is
        rejected outright, file a fresh Part A application with a different
        name. The system will not accept a second application for the same or a
        similar name while an earlier application for it is pending payment or
        in resubmission.
      </p>
      <p>
        If an approved name has an error in category or spelling, MCA guidance
        says the existing reservation must first be withdrawn before you
        reapply.
      </p>

      <h2>What if a name is approved wrongly?</h2>
      <p>
        Section 4(5)(ii) gives the Registrar power to act if a name was reserved
        based on wrong or incorrect information. Before incorporation, the
        reservation can be cancelled and a penalty of up to one lakh rupees can
        apply. After incorporation, the company can be directed to change its
        name within three months, or face strike-off or winding up proceedings.
        Accurate disclosures at the name stage avoid this.
      </p>

      <h2>How name approval fits the wider process</h2>
      <p>
        Name approval is only the first step. Part B covers incorporation,
        director details, capital, the registered office, stamp duty and linked
        registrations. Our{" "}
        <Link href="/company-registration-chennai">company registration in Chennai</Link>{" "}
        guide explains the full sequence, and our post on the{" "}
        <Link href="/blog/company-registration-timeline-day-by-day">day-by-day registration timeline</Link>{" "}
        shows how a name objection affects the overall schedule. If you are
        weighing a different structure, see{" "}
        <Link href="/llp-registration-chennai">LLP registration</Link>,
        where similar naming rules apply.
      </p>
      <p>
        If you would like a second opinion on proposed names before you apply,
        you can <Link href="/contact">book a consultation with C S Rushil &amp; Co.</Link>
      </p>
    </>
  );
}
