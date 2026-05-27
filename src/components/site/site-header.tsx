"use client";

import { useEffect, useMemo, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";

import { minimalNavItems, siteData } from "@/data/portfolio";

function normalizePath(pathname: string) {
  const path = pathname || "/";
  return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const activePath = useMemo(() => normalizePath(pathname), [pathname]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 18);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [activePath]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className={`transition-all duration-300 ${
          isScrolled
            ? "border-b border-cyan-100/50 bg-white/[0.76] shadow-[0_14px_42px_rgba(6,41,66,0.20)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
        aria-label="Primary navigation"
      >
        <div className="page-container flex h-20 items-center justify-between">
          <Link
            href="/"
            className="focus-ring rounded-md text-[15px] font-semibold text-slate-950 transition-colors hover:text-cyan-700"
          >
            {siteData.name}
          </Link>

          <div className="hidden items-center gap-1 sm:flex">
            {minimalNavItems.map((item) => {
              const itemPath = normalizePath(item.href);
              const isActive =
                itemPath === "/"
                  ? activePath === "/"
                  : activePath === itemPath || activePath.startsWith(`${itemPath}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`focus-ring rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-cyan-50 text-cyan-800"
                      : "text-slate-500 hover:text-cyan-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-cyan-100/70 bg-white/80 text-xl text-cyan-900 shadow-sm backdrop-blur transition-colors hover:bg-cyan-50 sm:hidden"
          >
            {open ? <HiXMark aria-hidden="true" /> : <HiBars3 aria-hidden="true" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="border-b border-cyan-100/70 bg-white/86 backdrop-blur-xl sm:hidden"
          >
            <div className="page-container grid gap-1 py-3">
              {minimalNavItems.map((item) => {
                const isActive = activePath === normalizePath(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`focus-ring rounded-md px-3 py-3 text-sm font-medium ${
                      isActive ? "bg-cyan-50 text-cyan-800" : "text-slate-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
