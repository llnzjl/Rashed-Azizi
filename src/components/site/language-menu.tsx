"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { HiLanguage } from "react-icons/hi2";
import { usePortfolioPathname, useTranslation } from "@/lib/i18n/client";
import { languages, locales, localizedPath } from "@/lib/i18n/locales";

export function LanguageMenu() {
  const { locale, t } = useTranslation();
  const pathname = usePortfolioPathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const summary = useRef<HTMLElement>(null);

  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (
        menu.current?.open &&
        event.target instanceof Node &&
        !menu.current.contains(event.target)
      ) {
        menu.current.open = false;
      }
    }
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);

  return (
    <details
      className="language-menu"
      ref={menu}
      onKeyDown={(event) => {
        if (event.key !== "Escape" || !event.currentTarget.open) return;
        event.stopPropagation();
        event.currentTarget.open = false;
        summary.current?.focus();
      }}
    >
      <summary className="icon-button" ref={summary}>
        <HiLanguage aria-hidden="true" />
        <span className="sr-only">{t("Language")} </span>
        <span lang={locale}>{languages[locale].name}</span>
      </summary>
      <ul>
        {locales.map((option) => (
          <li key={option}>
            <Link
              href={localizedPath(option, pathname)}
              hrefLang={option}
              lang={option}
              dir={languages[option].direction}
              aria-current={option === locale ? "page" : undefined}
              onClick={(event) => {
                if (
                  event.metaKey ||
                  event.ctrlKey ||
                  event.shiftKey ||
                  event.altKey
                )
                  return;
                if (menu.current) menu.current.open = false;
                if (option === locale) {
                  event.preventDefault();
                  summary.current?.focus();
                } else if (window.location.hash) {
                  event.preventDefault();
                  window.location.assign(
                    event.currentTarget.href + window.location.hash,
                  );
                }
              }}
            >
              {languages[option].name}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
