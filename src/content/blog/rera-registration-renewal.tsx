import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "rera-registration-renewal",
  title: "RERA Registration Renewal Deadlines for Chennai Developers",
  description:
    "Chennai real estate developers and agents need to track not just initial RERA registration but renewal deadlines and ongoing disclosure obligations.",
  date: "2026-09-19",
  excerpt:
    "Real estate developers and agents in Chennai working on projects that fall under the Real Estate Regulatory Authority need to track not...",
  summary:
    "Real estate projects above the specified plot size or number of units, and agents dealing in them, need RERA registration before advertising, booking or selling. Project registration lasts for the declared completion timeline, so apply for extension before it expires. Developers must also keep a designated project bank account and update progress.",
  faqs: [
    {
      question: "When is RERA registration required?",
      answer:
        "Any real estate project above the specified plot size or number of units, and any agent facilitating transactions in such projects, needs RERA registration before advertising, marketing, booking, selling or offering the project or units for sale. Selling even a single unit before registration is complete exposes the developer to penalties.",
    },
    {
      question: "How long is a RERA registration valid?",
      answer:
        "RERA registration for a project is generally valid for the period declared as the project's completion timeline at the time of registration. If the project runs beyond that date, the developer must apply for an extension or renewal before the original validity expires, not after, since operating a lapsed project carries significant penalty exposure.",
    },
    {
      question: "What ongoing obligations apply to RERA developers?",
      answer:
        "Developers must submit periodic updates on project progress, maintain a designated bank account where a specified percentage of funds collected from buyers is deposited and used only for that project's construction costs, and update the RERA website with any material changes to the project.",
    },
    {
      question: "Do real estate agents need separate RERA registration?",
      answer:
        "Yes. Agents need their own RERA registration, renewed periodically, and may deal only in projects that are themselves properly RERA registered. Facilitating a transaction in an unregistered project as a registered agent creates liability for the agent as well as the developer.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Real estate developers and agents in Chennai working on projects that fall under the Real Estate Regulatory Authority need to track not just their initial registration but renewal deadlines and ongoing disclosure obligations that continue for the life of a project.
      </p>

      <h2>When RERA registration is required</h2>

      <p>
        Any real estate project above the specified plot size or number of units, and any real estate agent facilitating transactions in such projects, needs RERA registration before advertising, marketing, booking, selling, or offering the project or units for sale. Selling even a single unit before registration is complete exposes the developer to penalties.
      </p>

      <h2>Why registration has a limited validity period</h2>

      <p>
        RERA registration for a project is generally valid for the period declared as the project&apos;s completion timeline at the time of registration. If the project runs beyond that declared completion date, the developer needs to apply for an extension or renewal before the original validity expires, not after, since operating an unregistered or lapsed project carries significant penalty exposure.
      </p>

      <h2>Ongoing disclosure obligations during the registration period</h2>

      <p>
        Beyond the initial registration and eventual renewal, RERA requires developers to submit periodic updates on project progress, maintain a designated bank account where a specified percentage of funds collected from buyers must be deposited and used only for construction costs of that specific project, and update the RERA website with any material changes to the project.
      </p>

      <h2>What agents need to track separately</h2>

      <p>
        Real estate agents also require their own RERA registration, renewed periodically, and are required to only deal in projects that are themselves properly RERA registered. Facilitating a transaction in an unregistered project as a registered agent creates liability for the agent as well as the developer.
      </p>

      <h2>A practical tracking checklist</h2>

      <ul>
        <li>Note the exact declared completion date at the time of initial project registration</li>
        <li>Apply for renewal or extension well before that date, not after it lapses</li>
        <li>Maintain the designated project bank account with correct fund allocation percentages, backed by project-wise <Link href="/bookkeeping-services-chennai">bookkeeping</Link></li>
        <li>Keep the RERA project page updated with progress and any material changes</li>
        <li>Confirm agent registration renewal dates are tracked separately from project registration</li>
      </ul>

      <p>
        If you&apos;re developing or selling real estate in Chennai and want to make sure your RERA registration, renewals, and disclosures stay on track, C S Rushil &amp; Co. can help manage the <Link href="/rera">RERA compliance</Link> calendar. Reach out for a consultation.
      </p>
    </>
  );
}
