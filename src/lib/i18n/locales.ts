export const languages = {
  en: { name: "English", direction: "ltr", openGraph: "en_US" },
  ko: { name: "한국어", direction: "ltr", openGraph: "ko_KR" },
  ps: { name: "پښتو", direction: "rtl", openGraph: "ps_AF" },
  fa: { name: "فارسی", direction: "rtl", openGraph: "fa_AF" },
} as const;

export type Locale = keyof typeof languages;
export const locales = Object.keys(languages) as Locale[];

export function isLocale(value: string): value is Locale {
  return Object.hasOwn(languages, value);
}

export function localizedPath(locale: Locale, path: string) {
  if (locale === "en" || !path.startsWith("/") || path.startsWith("//"))
    return path;
  return `/${locale}${path}`;
}

export function unlocalizedPath(locale: Locale, pathname: string) {
  if (locale === "en") return pathname;
  return pathname.slice(locale.length + 1) || "/";
}
