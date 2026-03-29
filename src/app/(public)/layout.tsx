import type { ReactNode } from "react";
import { Footer } from "@/common/components/footer";
import { Navbar } from "@/common/components/navbar";
import { PageTransition } from "@/common/components/page-transition";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col ">
      <header className="fixed w-full top-0 z-20  ">
        <Navbar />
      </header>
      <PageTransition>{children}</PageTransition>
      <Footer />
    </div>
  );
}
