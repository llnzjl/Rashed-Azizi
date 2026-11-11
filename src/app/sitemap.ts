import type { MetadataRoute } from "next";

import { getPageUrl } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/projects",
    "/blog",
    "/impossiblelist",
    "/cv",
    "/education",
    "/experience",
    "/contact",
  ];
  return routes.map((path) => ({
    url: getPageUrl(path),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
