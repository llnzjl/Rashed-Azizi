import "server-only";
import korean from "./ko.json";
import pashto from "./ps.json";
import persian from "./fa.json";
import type { Locale } from "./locales";
import type { Messages } from "./translate";

const dictionaries: Record<Locale, Messages> = {
  en: {},
  ko: korean,
  ps: pashto,
  fa: persian,
};

export function getMessages(locale: Locale) {
  return dictionaries[locale];
}
