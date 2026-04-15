import Link from "next/link";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";

const sitemapLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/get-a-quote", label: "Get a Quote" },
  { href: "/contact", label: "Contact Us" },
  { href: "/careers", label: "Careers" },
  { href: "/press-kit", label: "Press Kit" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

export default function SitemapPage() {
  return (
    <main className="flex-1 bg-surface-container-low py-20 sm:py-24 lg:py-32">
      <GeneralWrapper>
        <section className="mx-auto max-w-4xl rounded-[2rem] border border-primary/8 bg-white px-6 py-8 shadow-[0_18px_50px_rgba(8,10,88,0.06)] sm:px-10 sm:py-10 lg:px-12 lg:py-14">
          <p className="text-xs font-manrope font-extrabold uppercase tracking-[0.26em] text-secondary">
            Sitemap
          </p>
          <h1 className="mt-3 font-manrope text-3xl font-extrabold text-primary sm:text-5xl">
            Site Navigation
          </h1>
          <p className="mt-5 max-w-2xl font-manrope text-base leading-8 text-on-surface/72 sm:text-lg">
            Use this page to quickly jump to the main sections and policy pages
            of the Resonance Cleaning site.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sitemapLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-primary/8 bg-surface-container-low px-4 py-3 font-manrope text-sm font-semibold text-primary transition hover:border-secondary/40 hover:bg-secondary/6"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </GeneralWrapper>
    </main>
  );
}
