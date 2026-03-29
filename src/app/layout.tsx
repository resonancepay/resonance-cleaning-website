import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const manrope = Manrope({
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
  variable: "--font-manrope",
  subsets: ["latin"],
});

const interSemibold = Inter({
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
  subsets: ["latin"],
  variable: "--font-inter-semibold",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Resonance Cleaning",
  description:
    "Editorial-grade cleaning services with a precise, modern presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${interSemibold.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
