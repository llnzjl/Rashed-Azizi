import type { Metadata } from "next";

import { siteData } from "@/data/portfolio";

function normalizePath(path: string) {
  if (path === "/") {
    return "";
  }

  return path.endsWith("/") ? path.slice(0, -1) : path;
}

export function getPageUrl(path: string) {
  const normalized = normalizePath(path);
  return `${siteData.siteUrl}${normalized}${normalized ? "/" : ""}`;
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = getPageUrl(path);
  const fullTitle = `${title} | ${siteData.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
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
      title: fullTitle,
      description,
      images: [siteData.ogImage],
    },
  };
}
