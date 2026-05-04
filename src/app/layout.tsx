import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { AppProviders } from "@/common/providers/app-providers";
import { JsonLd } from "@/common/components/json-ld";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Resonance Cleaning",
  url: "https://www.resonancecleaningservices.org",
  logo: "https://www.resonancecleaningservices.org/og-image.png",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.resonancecleaningservices.org"),
  title: {
    default: "Resonance Cleaning",
    template: "%s — Resonance Cleaning",
  },
  description:
    "Editorial-grade cleaning services with a precise, modern presence.",
  openGraph: {
    siteName: "Resonance Cleaning",
    type: "website",
    locale: "en_GB",
    url: "https://www.resonancecleaningservices.org",
    title: "Resonance Cleaning",
    description:
      "Editorial-grade cleaning services with a precise, modern presence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Resonance Cleaning — professional cleaning services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resonance Cleaning",
    description:
      "Editorial-grade cleaning services with a precise, modern presence.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <JsonLd schema={organizationSchema} />
        <AntdRegistry>
          <AppProviders>{children}</AppProviders>
        </AntdRegistry>
      </body>
    </html>
  );
}
