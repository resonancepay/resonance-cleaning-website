"use client";

import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { ButtonLink } from "@/common/components/button";
import type { ReactNode } from "react";

type Section = {
  number: string;
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  type: "privacy-policy" | "terms-of-service";
};

function SectionBlock({ number, title, content }: Section) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline gap-3">
        <span className="shrink-0 font-manrope text-xs font-extrabold uppercase tracking-[0.2em] text-accent-lime">
          {number}
        </span>
        <h2 className="font-manrope text-base font-extrabold text-primary sm:text-lg">
          {title}
        </h2>
      </div>
      <div className="ml-0 font-manrope text-sm leading-7 text-on-surface/70 sm:text-[0.9375rem]">
        {content}
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-1 flex flex-col gap-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-lime" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const PRIVACY_SECTIONS: Section[] = [
  {
    number: "01",
    title: "Who We Are",
    content: (
      <p>
        Resonance Cleaning Services Ltd is the data controller for your personal
        information. If you have questions about how your data is handled, contact
        us at:{" "}
        <a
          href="mailto:talk2us@resonancebusinessgroup.org"
          className="font-semibold text-primary underline underline-offset-2"
        >
          talk2us@resonancebusinessgroup.org
        </a>
      </p>
    ),
  },
  {
    number: "02",
    title: "Data We Collect",
    content: (
      <>
        <p className="mb-2">
          We collect information you provide directly to us, including:
        </p>
        <BulletList
          items={[
            "Identity data: full name, date of birth, and proof of identity documents",
            "Contact data: email address, phone number, and residential or business address",
            "Account credentials: username and encrypted password",
            "Service data: booking history, preferences, and feedback",
            "Payment data: billing details processed securely via our payment provider (we do not store card numbers)",
            "Technical data: IP address, browser type, device identifiers, and app usage logs",
            "Verification data: before-and-after service photographs collected via our AI-assisted quality supervision system",
          ]}
        />
      </>
    ),
  },
  {
    number: "03",
    title: "How We Use Your Data",
    content: (
      <>
        <p className="mb-2">We use your personal data to:</p>
        <BulletList
          items={[
            "Create and manage your account and deliver our cleaning services",
            "Process bookings, payments, and generate invoices",
            "Carry out AI-powered before-and-after verification to ensure service quality and resolve disputes",
            "Comply with our legal and contractual obligations",
            "Communicate service updates, appointment confirmations, and support responses",
            "Improve our platform through anonymised analytics",
            "Conduct background compliance checks where required by law",
          ]}
        />
      </>
    ),
  },
  {
    number: "04",
    title: "AI-Assisted Supervision",
    content: (
      <p>
        Our platform uses artificial intelligence to analyse photographs taken
        before and after each cleaning visit. These images are used solely for
        quality assurance and dispute resolution purposes. Images are stored
        securely and retained for no longer than 90 days unless subject to an
        active dispute, after which they are permanently deleted. You may opt out
        of AI-based verification; however, this may limit our ability to
        investigate quality concerns.
      </p>
    ),
  },
  {
    number: "05",
    title: "Legal Basis for Processing",
    content: (
      <BulletList
        items={[
          "Contract performance — to deliver the services you have requested",
          "Legal obligation — to comply with UK law, including tax, GDPR, and employment regulations",
          "Legitimate interests — to improve our services and protect our business from fraud",
          "Consent — for optional features such as marketing communications and AI supervision",
        ]}
      />
    ),
  },
  {
    number: "06",
    title: "Data Sharing",
    content: (
      <>
        <p className="mb-2">
          We do not sell your personal data. We may share it with:
        </p>
        <BulletList
          items={[
            "Staffing and agency partners engaged to deliver services on our behalf",
            "Payment processors and financial service providers",
            "IT infrastructure and cloud storage providers",
            "Legal and regulatory authorities where required by law",
            "External auditors (e.g., KPMG) for compliance reviews",
          ]}
        />
        <p className="mt-3">
          All third parties are contractually required to handle your data in
          accordance with UK GDPR.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Data Retention",
    content: (
      <p>
        We retain your personal data for as long as your account is active or as
        required to fulfil our legal obligations. Account data is retained for 6
        years following account closure in line with HMRC requirements.
        Verification photographs are deleted after 90 days unless subject to a
        dispute.
      </p>
    ),
  },
  {
    number: "08",
    title: "Your Rights",
    content: (
      <>
        <p className="mb-2">Under UK GDPR, you have the right to:</p>
        <BulletList
          items={[
            "Access a copy of the personal data we hold about you",
            "Correct inaccurate or incomplete data",
            'Request deletion of your data ("right to be forgotten"), subject to legal constraints',
            "Object to or restrict certain types of processing",
            "Withdraw consent at any time for consent-based processing",
            "Data portability — receive your data in a structured, machine-readable format",
            "Lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk",
          ]}
        />
      </>
    ),
  },
  {
    number: "09",
    title: "Security",
    content: (
      <p>
        We implement technical and organisational security measures including
        encryption at rest and in transit, access controls, and regular security
        assessments to protect your personal data from unauthorised access, loss,
        or disclosure.
      </p>
    ),
  },
  {
    number: "10",
    title: "Cookies",
    content: (
      <p>
        We use cookies and similar tracking technologies to maintain your session,
        remember your preferences, and analyse platform usage. You may manage
        cookie preferences through your browser settings or our cookie consent
        tool.
      </p>
    ),
  },
  {
    number: "11",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of material changes via email or a prominent notice within the
        application. Continued use of our services after any change constitutes
        acceptance of the updated policy.
      </p>
    ),
  },
  {
    number: "12",
    title: "Contact Us",
    content: (
      <p>
        For any privacy-related queries or to exercise your rights, please
        contact our Data Protection Officer at:{" "}
        <a
          href="mailto:complaints@resonancebusinessgroup.org"
          className="font-semibold text-primary underline underline-offset-2"
        >
          complaints@resonancebusinessgroup.org
        </a>
      </p>
    ),
  },
];

const TERMS_SECTIONS: Section[] = [
  {
    number: "01",
    title: "About Resonance",
    content: (
      <p>
        Resonance Cleaning Services Ltd is a technology-enabled cleaning
        services company operating in the United Kingdom. We connect clients with
        professional cleaning operatives and deliver services through our digital
        platform, including AI-assisted quality monitoring.
      </p>
    ),
  },
  {
    number: "02",
    title: "Eligibility",
    content: (
      <p>
        You must be at least 18 years of age to use the Platform. By
        registering, you confirm that all information you provide is accurate,
        current, and complete. If you are registering on behalf of a business,
        you confirm that you have authority to bind that entity to these Terms.
      </p>
    ),
  },
  {
    number: "03",
    title: "Account Registration",
    content: (
      <BulletList
        items={[
          "You are responsible for maintaining the confidentiality of your login credentials",
          "You must not share your account with any third party",
          "You must notify us immediately at complaints@resonancebusinessgroup.org if you suspect unauthorised access to your account",
          "Resonance reserves the right to suspend or terminate accounts found to be in breach of these Terms",
        ]}
      />
    ),
  },
  {
    number: "04",
    title: "Services and Bookings",
    content: (
      <p>
        Through the Platform, clients may book cleaning services subject to
        availability. Resonance operates initially as a B2C agency in Aberdeen
        and B2B nationally across the UK. All bookings are subject to
        confirmation by Resonance, and we reserve the right to decline any
        booking without obligation to provide reasons.
      </p>
    ),
  },
  {
    number: "05",
    title: "Payment Terms",
    content: (
      <BulletList
        items={[
          "Payment is due at the time of booking unless otherwise agreed in a B2B contract",
          "All prices are quoted in GBP and are inclusive of VAT where applicable",
          "Refunds are issued at Resonance's discretion in accordance with our Refund Policy",
          "Late payments may incur interest charges in accordance with the Late Payment of Commercial Debts (Interest) Act 1998",
        ]}
      />
    ),
  },
  {
    number: "06",
    title: "Cancellations",
    content: (
      <p>
        Cancellations made more than 24 hours before a scheduled appointment
        will receive a full refund. Cancellations within 24 hours may incur a
        cancellation fee of up to 50% of the booking value. No-shows will be
        charged in full. Resonance reserves the right to cancel bookings due to
        operative unavailability and will provide reasonable notice and a full
        refund in such circumstances.
      </p>
    ),
  },
  {
    number: "07",
    title: "AI-Assisted Quality Supervision",
    content: (
      <p>
        Resonance's Platform utilises AI technology to capture and analyse
        before-and-after photographs of service locations for quality assurance.
        By accepting these Terms, clients consent to the use of this technology
        within their premises during service delivery. Operatives acknowledge
        that their work may be subject to AI-assisted monitoring. You may request
        an alternative non-AI verification arrangement by contacting us in
        advance.
      </p>
    ),
  },
  {
    number: "08",
    title: "Acceptable Use",
    content: (
      <>
        <p className="mb-2">You agree not to:</p>
        <BulletList
          items={[
            "Use the Platform for any unlawful purpose or in violation of these Terms",
            "Attempt to gain unauthorised access to any part of the Platform or its systems",
            "Introduce malicious code, viruses, or disruptive data to the Platform",
            "Reproduce, redistribute, or commercialise any content from the Platform without prior written consent",
            "Harass, threaten, or abuse Resonance staff, operatives, or other users",
          ]}
        />
      </>
    ),
  },
  {
    number: "09",
    title: "Intellectual Property",
    content: (
      <p>
        All content, trademarks, logos, and technology within the Platform are
        the exclusive property of Resonance Cleaning Services Ltd or its
        licensors. No licence is granted to use any intellectual property without
        prior written consent.
      </p>
    ),
  },
  {
    number: "10",
    title: "Limitation of Liability",
    content: (
      <p>
        To the fullest extent permitted by applicable law, Resonance shall not
        be liable for: (a) indirect, incidental, or consequential losses; (b)
        loss of profits, data, or business opportunity; (c) damages arising from
        third-party actions. Our total liability to you in any 12-month period
        shall not exceed the total fees paid by you to Resonance during that
        period.
      </p>
    ),
  },
  {
    number: "11",
    title: "Indemnity",
    content: (
      <p>
        You agree to indemnify and hold harmless Resonance, its directors,
        employees, and agents from any claims, losses, or expenses (including
        legal fees) arising out of your use of the Platform or breach of these
        Terms.
      </p>
    ),
  },
  {
    number: "12",
    title: "Complaints and Disputes",
    content: (
      <p>
        If you have a complaint regarding a service, please contact us within 48
        hours of the service date at{" "}
        <a
          href="mailto:complaints@resonancebusinessgroup.org"
          className="font-semibold text-primary underline underline-offset-2"
        >
          complaints@resonancebusinessgroup.org
        </a>
        . We will acknowledge your complaint within 2 business days and aim to
        resolve it within 14 days. Unresolved disputes may be referred to an
        independent mediator.
      </p>
    ),
  },
  {
    number: "13",
    title: "Governing Law",
    content: (
      <p>
        These Terms are governed by the laws of England and Wales. Any disputes
        arising under these Terms shall be subject to the exclusive jurisdiction
        of the courts of England and Wales.
      </p>
    ),
  },
  {
    number: "14",
    title: "Amendments",
    content: (
      <p>
        Resonance reserves the right to amend these Terms at any time. Material
        changes will be communicated to registered users with at least 14 days'
        notice via email. Continued use of the Platform after the effective date
        of any change constitutes acceptance of the revised Terms.
      </p>
    ),
  },
  {
    number: "15",
    title: "Contact",
    content: (
      <p>
        For any queries regarding these Terms, please contact us at:{" "}
        <a
          href="mailto:legal@resonancebusinessgroup.org"
          className="font-semibold text-primary underline underline-offset-2"
        >
          legal@resonancebusinessgroup.org
        </a>
      </p>
    ),
  },
];

const PAGE_CONFIG = {
  "privacy-policy": {
    eyebrow: "Legal · Version 1.0",
    title: "Privacy Policy",
    subtitle:
      "How Resonance Cleaning Services collects, uses, stores, and protects your personal data — in compliance with the UK GDPR and the Data Protection Act 2018.",
    effectiveDate: "Effective: 10 May 2026",
    sections: PRIVACY_SECTIONS,
    crossLinkLabel: "Terms of Service",
    crossLinkHref: "/terms-of-service",
  },
  "terms-of-service": {
    eyebrow: "Legal · Version 1.0",
    title: "Terms of Service",
    subtitle:
      "The terms and conditions that govern your access to and use of the Resonance Cleaning Services platform and associated services.",
    effectiveDate: "Effective: 10 May 2026",
    sections: TERMS_SECTIONS,
    crossLinkLabel: "Privacy Policy",
    crossLinkHref: "/privacy-policy",
  },
};

export function LegalPage({ type }: LegalPageProps) {
  const config = PAGE_CONFIG[type];

  return (
    <main className="flex-1 bg-surface-container-low py-16 sm:py-20 lg:py-28">
      <GeneralWrapper>
        <div className="mx-auto max-w-3xl">
          {/* Header card */}
          <div className="mb-6 rounded-[2rem] border border-primary/8 bg-white px-6 py-8 shadow-[0_18px_50px_rgba(8,10,88,0.06)] sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <p className="mb-4 font-manrope text-xs font-extrabold uppercase tracking-[0.26em] text-secondary">
              {config.eyebrow}
            </p>
            <h1 className="font-manrope text-3xl font-extrabold text-primary sm:text-5xl">
              {config.title}
            </h1>
            <p className="mt-5 max-w-2xl font-manrope text-base leading-8 text-on-surface/64 sm:text-lg">
              {config.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-surface-container-low px-3.5 py-1.5 font-manrope text-xs font-bold text-primary/60">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-lime" />
                {config.effectiveDate}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-surface-container-low px-3.5 py-1.5 font-manrope text-xs font-bold text-primary/60">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                England &amp; Wales — UK GDPR
              </span>
            </div>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink
                href="/contact"
                variant="lime"
                className="w-full py-4 sm:w-auto"
              >
                Contact Us
              </ButtonLink>
              <ButtonLink
                href={config.crossLinkHref}
                variant="white"
                className="w-full border-primary/12 py-4 !text-primary/70 sm:w-auto"
              >
                {config.crossLinkLabel}
              </ButtonLink>
            </div>
          </div>

          {/* Draft notice */}
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
            <svg
              viewBox="0 0 20 20"
              className="mt-0.5 h-4 w-4 shrink-0 fill-amber-500"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-manrope text-xs leading-5 text-amber-800">
              <span className="font-extrabold">Draft Notice:</span> This
              document is a legal draft pending review and sign-off by a
              qualified UK solicitor before deployment to production.
            </p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-3">
            {config.sections.map((section) => (
              <div
                key={section.number}
                className="rounded-2xl border border-primary/6 bg-white px-6 py-6 shadow-[0_2px_12px_rgba(8,10,88,0.04)] sm:px-8 sm:py-7"
              >
                <SectionBlock {...section} />
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-6 rounded-2xl border border-primary/6 bg-white px-6 py-5 sm:px-8">
            <p className="font-manrope text-xs leading-6 text-on-surface/50">
              Resonance Cleaning Services Ltd · Registered in England &amp;
              Wales · Last updated 10 May 2026 · Version 1.0
            </p>
          </div>
        </div>
      </GeneralWrapper>
    </main>
  );
}
