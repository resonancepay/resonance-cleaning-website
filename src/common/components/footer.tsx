import { Col, Row } from "antd";
import { GeneralWrapper } from "./wrapper/general-wrapper";
import Link from "next/link";
import Image from "next/image";
import cleaningServicesLogo from "@/assets/images/Cleaning Services-1.png";


export function Footer() {
  return (
    <footer className="lg:pt-20 bg-surface-container-low">
      <GeneralWrapper>
        <Row>
          <Col lg={6} xs={24}>
            <div className="flex items-center gap-4">
              <Link href="/" className="shrink-0">
                <Image
                  src={cleaningServicesLogo}
                  alt="Resonance Cleaning logo"
                  className="navbar-logo"
                  priority
                />
              </Link>
              <h1 className="font-manrope font-extrabold text-xl">
                RESONANCE CLEANING
              </h1>
            </div>
            <p className="font-manrope text-xs w-full lg:w-4/5">
              Setting the global benchmark for elite environmental maintenance
              and hospitality-driven care.
            </p>
          </Col>
          <Col lg={18} xs={24}>
            <div className="w-full flex items-center justify-between mt-8 lg:mt-0 lg:justify-around">
              <div>
                <p className="font-manrope text-accent-lime text-xs font-extrabold">
                  COMPANY
                </p>
                <div className="mt-6 flex flex-col gap-4">
                  <Link href={"/"}>
                    <p className="text-primary/60 font-manrope font-bold text-xs">
                      ABOUT US
                    </p>
                  </Link>
                  <Link href={"/"}>
                    <p className="text-primary/60 font-manrope font-bold text-xs">
                      CAREERS
                    </p>
                  </Link>
                  <Link href={"/"}>
                    <p className="text-primary/60 font-manrope font-bold text-xs">
                      PRESS KIT
                    </p>
                  </Link>
                </div>
              </div>
              <div>
                <p className="font-manrope text-accent-lime text-xs font-extrabold">
                  SERVICES
                </p>
                <div className="mt-6 flex flex-col gap-4">
                  <Link href={"/"}>
                    <p className="text-primary/60 font-manrope font-bold text-xs">
                      HOME CLEANING
                    </p>
                  </Link>
                  <Link href={"/"}>
                    <p className="text-primary/60 font-manrope font-bold text-xs">
                      COMMERCIAL
                    </p>
                  </Link>
                  <Link href={"/"}>
                    <p className="text-primary/60 font-manrope font-bold text-xs">
                      ARTISANAL CARE
                    </p>
                  </Link>
                </div>
              </div>
              <div>
                <p className="font-manrope text-accent-lime text-xs font-extrabold">
                  LEGAL
                </p>
                <div className="mt-6 flex flex-col gap-4">
                  <Link href={"/"}>
                    <p className="text-primary/60 font-manrope font-bold text-xs">
                      PRIVACY POLICY
                    </p>
                  </Link>
                  <Link href={"/"}>
                    <p className="text-primary/60 font-manrope font-bold text-xs">
                      TERMS OF SERVICE
                    </p>
                  </Link>
                  <Link href={"/"}>
                    <p className="text-primary/60 font-manrope font-bold text-xs">
                      SITEMAP
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </GeneralWrapper>
      <div className="mt-20 py-8 border border-black/10">
        <GeneralWrapper>
          <p className="font-manrope text-xs font-bold text-primary/30">
            © 2026 The Polished Estate. All rights reserved.
          </p>
        </GeneralWrapper>
      </div>
    </footer>
  );
}
