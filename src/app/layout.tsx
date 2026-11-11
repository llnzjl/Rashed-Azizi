import type { Metadata } from "next";

import { AutumnLeaves } from "@/components/site/autumn-leaves";
import { SiteExperience } from "@/components/site/site-experience";
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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ra-theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteExperience>
          <AutumnLeaves />
          <SiteHeader />
          <PageTransition>
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
          </PageTransition>
          <SiteFooter />
        </SiteExperience>
      </body>
    </html>
  );
}
