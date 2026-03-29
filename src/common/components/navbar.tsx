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
  { href: "/get-a-quote", label: "Get a Quote" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="navbar-shell w-full py-2 ">
      <GeneralWrapper>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="shrink-0">
              <Image
                src={cleaningServicesLogo}
                alt="Resonance Cleaning logo"
                className="navbar-logo"
                priority
              />
            </Link>
          </div>

          <div className="flex  gap-5 items-center justify-center ">
            <nav
              aria-label="Primary"
              className="flex items-center gap-x-3 text-sm text-(--brand-muted)"
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
          <div className="flex items-cente">
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
  );
}
