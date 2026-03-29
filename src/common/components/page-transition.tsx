"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const animation = gsap.fromTo(
      containerRef.current,
      { autoAlpha: 0, y: 18, filter: "blur(10px)" },
      {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.7,
        ease: "power2.out",
        clearProps: "filter,transform",
      }
    );

    return () => {
      animation.kill();
    };
  }, [pathname]);

  return (
    <div ref={containerRef} className="page-transition-region flex-1">
      {children}
    </div>
  );
}
