import type { MetadataRoute } from "next";

import { minimalNavItems } from "@/data/portfolio";
import { getPageUrl } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return minimalNavItems.map((item) => ({
    url: getPageUrl(item.href),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
