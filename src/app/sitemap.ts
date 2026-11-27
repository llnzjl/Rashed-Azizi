import type { MetadataRoute } from "next";

import { getPageUrl } from "@/lib/metadata";
import {
  languageAlternates,
  portfolioRoutes,
  routePath,
} from "@/lib/i18n/metadata";
import { locales, localizedPath } from "@/lib/i18n/locales";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return portfolioRoutes.flatMap(({ route }) =>
    locales.map((locale) => ({
      url: getPageUrl(localizedPath(locale, routePath(route))),
      alternates: { languages: languageAlternates(routePath(route)) },
      changeFrequency: "monthly",
      priority: route ? 0.8 : 1,
    })),
  );
}
