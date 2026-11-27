import { siteData } from "@/data/portfolio";
import { getPageUrl, createPageMetadata } from "@/lib/metadata";
import { languages, locales, localizedPath, type Locale } from "./locales";
import { getMessages } from "./messages";
import routes from "./routes.json";
import { translate } from "./translate";

export const portfolioRoutes = routes;
export const routePath = (route: string) => `/${route}`;

export function languageAlternates(path: string) {
  return {
    ...Object.fromEntries(
      locales.map((locale) => [
        locale,
        getPageUrl(localizedPath(locale, path)),
      ]),
    ),
    "x-default": getPageUrl(path),
  };
}

export function getPortfolioMetadata(locale: Locale, route: string) {
  const entry = routes.find((page) => page.route === route);
  if (!entry) throw new Error(`Unknown portfolio page: ${route}`);
  const messages = getMessages(locale);
  const t = (value: string) => translate(messages, value);
  const path = routePath(route);
  const metadata = createPageMetadata({
    title: t(entry.title),
    description: t(entry.description),
    path: localizedPath(locale, path),
  });
  return {
    ...metadata,
    metadataBase: new URL(siteData.siteOrigin),
    alternates: { ...metadata.alternates, languages: languageAlternates(path) },
    openGraph: {
      ...metadata.openGraph,
      locale: languages[locale].openGraph,
      alternateLocale: locales
        .filter((value) => value !== locale)
        .map((value) => languages[value].openGraph),
      siteName: `${siteData.name} | ${t("Portfolio")}`,
      images: [
        {
          url: siteData.ogImage,
          width: 1200,
          height: 630,
          alt: t("Rashed Azizi profile"),
        },
      ],
    },
  };
}
