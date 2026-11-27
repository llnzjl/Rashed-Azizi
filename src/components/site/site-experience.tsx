"use client";
import { useTranslation } from "@/lib/i18n/client";
import { useEffect, useState, type ReactNode } from "react";
import {
  MotionConfig,
  motion,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import { HiArrowUp } from "react-icons/hi2";

export function SiteExperience({ children }: { children: ReactNode }) {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const update = () => setShowTop(window.scrollY > 700);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className="reading-progress"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
      {children}
      {showTop && (
        <button
          className="back-top icon-button"
          aria-label={t("Back to top")}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })
          }
        >
          <HiArrowUp />
        </button>
      )}
    </MotionConfig>
  );
}

export function SeoulTime() {
  const { locale, t } = useTranslation();
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat(locale === "en" ? "en-GB" : locale, {
          timeZone: "Asia/Seoul",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    update();
    const timer = window.setInterval(update, 60000);
    return () => window.clearInterval(timer);
  }, [locale]);
  return (
    <span className="mono">
      {time ? <bdi>{time} KST</bdi> : t("ASIA / SEOUL")}
    </span>
  );
}
