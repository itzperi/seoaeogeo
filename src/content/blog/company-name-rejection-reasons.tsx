import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "company-name-rejection-reasons",
  title: "Why the MCA Rejects Company Names (and How to Avoid It)",
  description:
    "Why the MCA rejects company names, how to check name availability and trademarks, and how RUN differs from SPICe+ Part A, with tips for two strong names.",
  date: "2026-10-13",
  updated: "2026-11-13",
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
    {
      question: "How do I check if a company name is available on the MCA portal?",
      answer:
        "Use the Check Company/LLP Name service on the MCA website. Enter only the distinctive word, without Private Limited, complete the captcha and review the companies and LLPs listed. Repeat with plurals and similar-sounding spellings. A clean result helps, but the name is approved only when the Central Registration Centre accepts SPICe+ Part A.",
    },
    {
      question: "How do I search for a trademark before choosing a company name?",
      answer:
        "Use the Trade Mark Public Search on the IP India website. Log in with an OTP, choose Wordmark or Phonetic, enter your distinctive word with Starts With or Contains, and enter the class, which is compulsory. Search every class your business touches, and check the Registry's list of well-known trademarks too.",
    },
  ],
  summary:
    "Company names are reserved in SPICe+ Part A, where up to two names can be proposed. Names are rejected when identical or phonetically similar to an existing company or LLP, when they include another party's registered trademark, or when they use restricted words needing government approval. Choose two options that pass these tests under Section 4 and the incorporation rules.",
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

      <h2>Where does name approval happen?</h2>
      <p>
        For a new company, the name is reserved in Part A of the SPICe+ web form.
        According to the MCA&apos;s{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/spiceplus-linked-filings.html" target="_blank" rel="noopener noreferrer">SPICe+ FAQs</a>,
        you can either reserve the name first (proposing up to two names, of
        which one is approved) or file Part A and Part B together with only one
        name.
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

      <h2>What are the most common reasons names are rejected?</h2>
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

      <h2>Why do trademarks matter more than founders expect?</h2>
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

      <h2>How do you search trademarks on the IP India public search?</h2>
      <p>
        <strong>
          Open the Trade Marks Registry&apos;s public search, log in with a
          one-time password sent to your email or mobile, and choose Wordmark,
          Phonetic or Device Mark. Enter your word, pick Starts With or
          Contains, enter the class number, which is compulsory, and click
          Start Search. Repeat the search for every class your business
          touches.
        </strong>
      </p>
      <p>
        The steps below follow the Registry&apos;s own guidelines for the{" "}
        <a href="https://tmrsearch.ipindia.gov.in/tmrpublicsearch/" target="_blank" rel="noopener noreferrer">
          Trade Mark Public Search
        </a>
        :
      </p>
      <ol>
        <li><strong>Log in.</strong> Enter your email or mobile number, answer the captcha and verify the OTP.</li>
        <li><strong>Pick a category.</strong> Wordmark searches the text of marks; Phonetic finds marks that sound similar and can take longer; Device Mark searches logos by Vienna code.</li>
        <li><strong>Enter the keyword and prefix.</strong> Starts With returns marks beginning with your word; Contains returns marks with your word anywhere in them. Use the AND or OR condition to combine criteria.</li>
        <li><strong>Enter the class.</strong> Classes run from 1 to 45 and the class field is compulsory. The Class Details link on the search page helps you find the right one.</li>
        <li><strong>Start the search and read the results.</strong> The result panel shows the total number of matching marks; click a record to see its details in the right-hand panel.</li>
        <li><strong>Save a report.</strong> Tick the records you want and use the Report button, then print it for your file.</li>
      </ol>
      <p>
        Run both a Wordmark Contains search and a Phonetic search, because the
        MCA&apos;s grounds for rejection include phonetically similar names,
        and check the Registry&apos;s list of well-known trademarks linked from
        the search page.
      </p>

      <h2>How do you check company name availability on the MCA portal?</h2>
      <p>
        <strong>
          Use the Check Company/LLP Name service listed under MCA Services on
          the MCA website. Enter your distinctive word without suffixes such as
          Private Limited, complete the captcha, and review the existing
          companies and LLPs it returns, with their CIN or LLPIN, previous name
          and status. A clean result is a good sign, not an approval.
        </strong>
      </p>
      <ol>
        <li>Open the MCA&apos;s{" "}
          <a href="https://www.mca.gov.in/content/mca/global/en/mca/fo-llp-services/company-llp-name-search.html" target="_blank" rel="noopener noreferrer">Check Company/LLP Name</a>{" "}
          service. It is a public search; you do not need to log in.</li>
        <li>Type only the distinctive part of the name. The portal itself asks users to avoid suffixes and enter valid keywords to refine results.</li>
        <li>Enter the captcha.</li>
        <li>Read every match: the name, CIN, FCRN, LLPIN or FLLPIN, any previous name and the status. Note inactive entries too rather than skipping them.</li>
        <li>Repeat with plurals, alternative spellings and words that sound the same, since phonetic similarity is a listed ground for rejection.</li>
      </ol>
      <p>
        The real test comes in SPICe+ Part A. You select up to three NIC codes
        for the business and click Auto Check, which shows alerts such as
        Submission restricted (filing blocked until the input changes) or
        Submission allowed with mandatory attachment. The NIC codes should
        match the objects, and the name should match both.
      </p>

      <h2>What is the difference between RUN and SPICe+ Part A?</h2>
      <p>
        <strong>
          SPICe+ Part A reserves a name for a company that does not exist yet.
          RUN (Reserve Unique Name) reserves a new name for an existing company
          that wants to change its name. The Central Registration Centre
          examines both. LLPs use a separate service, RUN-LLP, for new LLPs,
          conversions and changes of name.
        </strong>
      </p>
      <table>
        <thead>
          <tr>
            <th>Point</th>
            <th>SPICe+ Part A</th>
            <th>RUN</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Used for</td>
            <td>Name for a new company</td>
            <td>Change of name of an existing company only</td>
          </tr>
          <tr>
            <td>Company identity</td>
            <td>No CIN yet</td>
            <td>CIN of the existing company is mandatory</td>
          </tr>
          <tr>
            <td>Names you can propose</td>
            <td>Up to two if you reserve first; one if Part A and Part B are filed together</td>
            <td>Fields for Proposed Name 1 and Proposed Name 2</td>
          </tr>
          <tr>
            <td>Government fee</td>
            <td>Rs. 1,000 when filed on its own; no separate name fee when filed with Part B</td>
            <td>As per the fee rules; check the MCA&apos;s Enquire Fees service</td>
          </tr>
          <tr>
            <td>Validity of approval</td>
            <td>20 days, extendable to 40 or 60 days on payment</td>
            <td>As stated in the approval</td>
          </tr>
          <tr>
            <td>Checks shown while filing</td>
            <td>Auto Check alerts on the proposed name</td>
            <td>Name similarity alerts and trademark similarity alerts</td>
          </tr>
          <tr>
            <td>What follows approval</td>
            <td>File Part B with e-MoA, e-AoA and AGILE-PRO-S</td>
            <td>MGT-14 for the resolution altering the MoA and AoA, then INC-24 for approval of the change of name</td>
          </tr>
        </tbody>
      </table>
      <p>
        The RUN form cites sections 4 and 13 of the Companies Act, 2013 and
        rules 8, 9 and 29 of the Incorporation Rules, so the naming tests in
        this post apply equally to a change of name.
      </p>

      <h2>How do you choose two good name options?</h2>
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

      <h2>How would you test three candidate names?</h2>
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

      <h2>Which smaller details also cause objections?</h2>
      <ul>
        <li><strong>The suffix:</strong> a private company&apos;s name must end with Private Limited; an OPC uses (OPC) Private Limited</li>
        <li><strong>Special characters:</strong> MCA allows a defined set of special characters in Part A names, but heavy use of symbols makes names harder to search and may still be questioned</li>
        <li><strong>Personal names:</strong> using a founder&apos;s own name is common and generally acceptable, but the name of a well-known person, or a name likely to mislead the public, can be treated as undesirable</li>
        <li><strong>Translations:</strong> restricted words are restricted in any language that conveys the same meaning, not only in English</li>
      </ul>

      <h2>What should you do if your name is rejected?</h2>
      <p>
        Read the remark carefully. If the name is put into resubmission, you
        can usually address the objection by explaining the significance of the
        name, attaching a trademark consent, or modifying the name. If it is
        rejected outright, file a fresh Part A application with a different
        name. The system will not accept a second application for the same or a
        similar name while an earlier application for it has been paid for and
        is awaiting a decision, or is in resubmission.
      </p>
      <p>
        If an approved name has an error in category or spelling, MCA guidance
        says the existing reservation must first be withdrawn before you
        reapply. The SPICe+ FAQs say withdrawal is requested by writing to the
        Central Registration Centre&apos;s escalation address,
        crc.escalation@mca.gov.in, with an affidavit for withdrawal and the
        applicant&apos;s KYC details.
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

      <h2>How does name approval fit the wider process?</h2>
      <p>
        Name approval is only the first step. Part B covers incorporation,
        director details, capital, the registered office, stamp duty and linked
        registrations. Our{" "}
        <Link href="/company-registration-chennai">company registration in Chennai</Link>{" "}
        guide explains the full sequence, and our page on the{" "}
        <Link href="/private-limited-company-incorporation-chennai">private limited company registration timeline</Link>{" "}
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
