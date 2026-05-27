import type { Metadata } from "next";

import { PageTransition } from "@/components/site/page-transition";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { siteData } from "@/data/portfolio";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteData.siteOrigin),
  title: {
    default: `${siteData.name} | ${siteData.title}`,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.description,
  keywords: siteData.keywords,
  applicationName: `${siteData.name} Portfolio`,
  authors: [{ name: siteData.name }],
  creator: siteData.name,
  alternates: {
    canonical: siteData.siteUrl,
  },
  openGraph: {
    title: `${siteData.name} | ${siteData.title}`,
    description: siteData.description,
    url: siteData.siteUrl,
    siteName: `${siteData.name} Portfolio`,
    images: [
      {
        url: siteData.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteData.name} profile`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.name} | ${siteData.title}`,
    description: siteData.description,
    images: [siteData.ogImage],
  },
  icons: {
    icon: siteData.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteHeader />
        <PageTransition>
          <main className="relative z-10 pt-20">{children}</main>
        </PageTransition>
        <SiteFooter />
      </body>
    </html>
  );
}
