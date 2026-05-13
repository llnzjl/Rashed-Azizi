import type { Metadata } from "next";

import { siteData } from "@/data/portfolio";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteData.siteUrl),
  title: {
    default: `${siteData.name} | ${siteData.title}`,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.description,
  keywords: siteData.keywords,
  applicationName: `${siteData.name} Portfolio`,
  authors: [{ name: siteData.name }],
  creator: siteData.name,
  openGraph: {
    title: `${siteData.name} | ${siteData.title}`,
    description: siteData.description,
    url: siteData.siteUrl,
    siteName: `${siteData.name} Portfolio`,
    images: [
      {
        url: "/rashed-profile.jpg",
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
    images: ["/rashed-profile.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
