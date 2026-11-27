"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  type ComponentProps,
  type ReactNode,
} from "react";
import { localizedPath, unlocalizedPath, type Locale } from "./locales";
import { translate, type Messages } from "./translate";

const LocaleContext = createContext<{
  locale: Locale;
  messages: Messages;
} | null>(null);

export function LocaleProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Messages;
  children: ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, messages }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("Missing portfolio locale provider.");
  return {
    locale: context.locale,
    t: (text: string, ...values: (string | number)[]) =>
      translate(context.messages, text, ...values),
  };
}

export function usePortfolioPathname() {
  const { locale } = useTranslation();
  return unlocalizedPath(locale, usePathname());
}

export function LocalizedLink({
  href,
  ...props
}: Omit<ComponentProps<typeof Link>, "href"> & { href: string }) {
  const { locale } = useTranslation();
  return <Link href={localizedPath(locale, href)} {...props} />;
}
