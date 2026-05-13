import type { MetadataRoute } from "next";

import { routeItems } from "@/data/portfolio";
import { getPageUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return routeItems.map((item) => ({
    url: getPageUrl(item.href),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
