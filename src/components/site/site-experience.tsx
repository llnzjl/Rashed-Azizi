"use client";
import { useEffect, useState, type ReactNode } from "react";
import {
  MotionConfig,
  motion,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import { HiArrowUp } from "react-icons/hi2";

export function SiteExperience({ children }: { children: ReactNode }) {
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
          aria-label="Back to top"
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
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Seoul",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    update();
    const timer = window.setInterval(update, 60000);
    return () => window.clearInterval(timer);
  }, []);
  return <span className="mono">{time ? time + " KST" : "ASIA / SEOUL"}</span>;
}
