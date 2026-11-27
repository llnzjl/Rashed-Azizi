"use client";
import { useEffect, useRef, useState } from "react";
import {
  LocalizedLink as Link,
  usePortfolioPathname,
  useTranslation,
} from "@/lib/i18n/client";
import { LanguageMenu } from "./language-menu";
import {
  HiBars3,
  HiXMark,
  HiOutlineMoon,
  HiOutlineSun,
  HiArrowUpRight,
} from "react-icons/hi2";
import { sectionNavigation } from "@/data/showcase";

export function SiteHeader() {
  const { t } = useTranslation();
  const pathname = usePortfolioPathname();
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const menuButton = useRef<HTMLButtonElement>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "dark");
    const update = () => {
      setScrolled(window.scrollY > 24);
      if (isHome) {
        const current = sectionNavigation
          .filter(
            ({ id }) =>
              (document.getElementById(id)?.getBoundingClientRect().top ??
                Infinity) <= 180,
          )
          .pop();
        setActive(current?.id || "home");
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [isHome]);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("ra-theme", next);
    } catch {
      /* Keep the current theme without storage. */
    }
  }
  const routeSection: Record<string, string> = {
    "/projects/": "projects",
    "/about/": "about",
    "/education/": "certificates",
    "/experience/": "journey",
    "/blog/": "blog",
    "/contact/": "contact",
  };
  const selected = isHome
    ? active
    : routeSection[(pathname?.replace(/\/$/, "") || "") + "/"];

  return (
    <header className={`site-header ${scrolled || open ? "is-scrolled" : ""}`}>
      <nav className="nav-shell" aria-label={t("Primary navigation")}>
        <Link href="/" className="brand" aria-label={t("Rashed Azizi home")}>
          <span className="monogram" dir="ltr">
            RA<span>.</span>
          </span>
          <span className="brand-name">Rashed Azizi</span>
        </Link>
        <div className="desktop-navigation">
          {sectionNavigation.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              className={selected === item.id ? "nav-link active" : "nav-link"}
              aria-current={selected === item.id ? "location" : undefined}
            >
              <span className="snow-capped">{t(item.label)}</span>
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <LanguageMenu />
          <button
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? t("Switch to light theme")
                : t("Switch to dark theme")
            }
            title={t("Change color theme")}
          >
            {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>
          <Link href="/cv" className="nav-cv">
            <span className="snow-capped">{t("View CV")}</span>{" "}
            <HiArrowUpRight />
          </Link>
          <button
            ref={menuButton}
            className="icon-button mobile-menu-button"
            aria-label={open ? t("Close navigation") : t("Open navigation")}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiXMark /> : <HiBars3 />}
          </button>
        </div>
        {open && (
          <div id="mobile-navigation" className="mobile-navigation">
            {sectionNavigation.map((item, index) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                onClick={() => setOpen(false)}
                aria-current={selected === item.id ? "location" : undefined}
              >
                <span className="mono">0{index + 1}</span>
                <span className="snow-capped">{t(item.label)}</span>
                <HiArrowUpRight />
              </Link>
            ))}
            <Link href="/impossiblelist" onClick={() => setOpen(false)}>
              <span className="snow-capped">{t("The impossible list")}</span>{" "}
              <HiArrowUpRight />
            </Link>
            <Link
              href="/cv"
              className="mobile-cv"
              onClick={() => setOpen(false)}
            >
              <span className="snow-capped">{t("View CV")}</span>{" "}
              <HiArrowUpRight />
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
