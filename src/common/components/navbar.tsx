"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/common/components/button";
import cleaningServicesLogo from "@/assets/images/Cleaning Services-1.png";
import profileIcon from "@/assets/svgs/profile-icon.svg";
import { GeneralWrapper } from "./wrapper/general-wrapper";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/get-a-quote", label: "Get a Quote" },
  { href: "/contact", label: "Contact Us" },
];

const mobileNavigation = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/services", label: "Services", icon: ServicesIcon },
  { href: "/about", label: "About", icon: AboutIcon },
  { href: "/get-a-quote", label: "Quote", icon: QuoteIcon },
  { href: "/contact", label: "Contact", icon: ContactIcon },
];

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 3.5 4 10v10.5h5.5v-6h5v6H20V10l-8-6.5Z" />
    </svg>
  );
}

function ServicesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      aria-hidden="true"
    >
      <path d="M7 4.5 12 1.5 17 4.5 12 8.5 7 4.5Z" />
      <path d="M7 11 12 8l5 3-5 4-5-4Z" />
      <path d="M7 17.5 12 14.5l5 3-5 4-5-4Z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      aria-hidden="true"
    >
      <path d="M6 3.5h9l3 3V20.5H6z" />
      <path d="M15 3.5v4h4" />
      <path d="M9 11.5h6" />
      <path d="M9.5 15.5h5" />
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 10v6" />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      aria-hidden="true"
    >
      <path d="M3.5 6.5h17v11h-17z" />
      <path d="m4.5 7.5 7.5 6 7.5-6" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="navbar-shell fixed top-0 z-20 hidden w-full pt-1 md:block">
        <GeneralWrapper>
          <div className="flex items-center justify-between">
            <div className="relative flex flex-col">
              <p className="absolute top-0 left-2 w-full whitespace-nowrap text-xs font-manrope font-bold text-[#94A3B8]">
                A Resonance Business Group Company
              </p>
              <Link href="/" className="shrink-0">
                <Image
                  src={cleaningServicesLogo}
                  alt="Resonance Cleaning logo"
                  className="navbar-logo"
                  priority
                />
              </Link>
            </div>

            <div className="flex items-center justify-center gap-5">
              <nav
                aria-label="Primary"
                className="flex items-center gap-x-3 text-sm text-brand-muted"
              >
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`navbar-link ${isActive ? "navbar-link--active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="flex items-center">
              <Link
                href="/contact"
                className="navbar-profile"
                aria-label="Contact resonance cleaning"
              >
                <Image src={profileIcon} alt="profile icon" />
              </Link>
              <ButtonLink href="/get-a-quote" variant="tertiary">
                Book Now
              </ButtonLink>
            </div>
          </div>
        </GeneralWrapper>
      </div>

      <nav
        aria-label="Mobile primary"
        className="mobile-bottom-nav fixed inset-x-4 bottom-4 z-30 flex max-w-[calc(100vw-2rem)] items-center justify-between overflow-hidden rounded-[2rem] px-2 py-3 md:hidden"
      >
        {mobileNavigation.map((item) => {
          const isActive =
            item.href === "/#about" ? pathname === "/" : pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`mobile-bottom-nav__item ${isActive ? "mobile-bottom-nav__item--active" : ""}`}
            >
              <Icon />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
