"use client";

import { ButtonLink } from "@/common/components/button";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";

type StaticPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: {
    href: string;
    label: string;
  };
  secondaryCta?: {
    href: string;
    label: string;
  };
};

export function StaticPage({
  description,
  eyebrow,
  primaryCta,
  secondaryCta,
  title,
}: StaticPageProps) {
  return (
    <main className="flex-1 bg-surface-container-low py-20 sm:py-24 lg:py-32">
      <GeneralWrapper>
        <section className="mx-auto flex max-w-3xl flex-col items-start gap-6 rounded-[2rem] border border-primary/8 bg-white px-6 py-8 shadow-[0_18px_50px_rgba(8,10,88,0.06)] sm:px-10 sm:py-10 lg:px-12 lg:py-14">
          <p className="text-xs font-manrope font-extrabold uppercase tracking-[0.26em] text-secondary">
            {eyebrow}
          </p>
          <h1 className="font-manrope text-3xl font-extrabold text-primary sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl font-manrope text-base leading-8 text-on-surface/72 sm:text-lg">
            {description}
          </p>

          <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            {primaryCta ? (
              <ButtonLink
                href={primaryCta.href}
                variant="lime"
                className="w-full py-4 sm:w-auto"
              >
                {primaryCta.label}
              </ButtonLink>
            ) : null}
            {secondaryCta ? (
              <ButtonLink
                href={secondaryCta.href}
                variant="glass"
                className="w-full py-4 sm:w-auto"
              >
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        </section>
      </GeneralWrapper>
    </main>
  );
}
