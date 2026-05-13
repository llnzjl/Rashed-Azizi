"use client";

import { useEffect, useMemo, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { HiBars3BottomRight, HiOutlineArrowUpRight, HiXMark } from "react-icons/hi2";

import { routeItems, siteData } from "@/data/portfolio";

function normalizePathname(pathname: string) {
  const withoutBase =
    pathname.startsWith(siteData.siteBasePath)
      ? pathname.slice(siteData.siteBasePath.length) || "/"
      : pathname || "/";

  if (withoutBase.length > 1 && withoutBase.endsWith("/")) {
    return withoutBase.slice(0, -1);
  }

  return withoutBase;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";

  const normalizedPath = useMemo(() => normalizePathname(pathname), [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [normalizedPath]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container pt-4">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel flex items-center justify-between rounded-[1.75rem] px-4 py-3 md:px-5"
        >
          <Link
            href="/"
            data-cursor-label="Home"
            className="group flex items-center gap-3 rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-3 py-2 transition-colors duration-300 hover:border-cyan-300/30 hover:bg-white/[0.08]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-sky-300 to-amber-300 text-sm font-semibold text-slate-950">
              {siteData.initials}
            </span>
            <span className="hidden min-[430px]:block">
              <span className="block text-sm font-semibold text-white">{siteData.name}</span>
              <span className="block text-xs text-slate-400">{siteData.title}</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 lg:flex">
            {routeItems.map((item) => {
              const isActive = normalizedPath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-cursor-label={item.label}
                  className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-white text-slate-950 shadow-[0_18px_40px_rgba(255,255,255,0.14)]"
                      : "text-slate-300 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <span className="chip">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.85)]" />
              {siteData.availability}
            </span>
            <Link href="/contact" className="button-secondary">
              Let&apos;s Talk
              <HiOutlineArrowUpRight className="text-base" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? "Close menu" : "Open menu"}
            data-cursor-label="Menu"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-xl text-white transition-colors duration-300 hover:border-cyan-300/30 hover:bg-white/[0.08] lg:hidden"
          >
            {open ? <HiXMark /> : <HiBars3BottomRight />}
          </button>
        </motion.div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel mt-3 rounded-[1.75rem] p-4 lg:hidden"
            >
              <div className="grid gap-2">
                {routeItems.map((item) => {
                  const isActive = normalizedPath === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition-all duration-300 ${
                        isActive
                          ? "border-cyan-300/35 bg-white/[0.12] text-white"
                          : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <HiOutlineArrowUpRight />
                    </Link>
                  );
                })}
              </div>

              <Link href="/contact" className="button-primary mt-4 w-full justify-center">
                Start a conversation
              </Link>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
