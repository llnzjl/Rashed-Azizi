"use client";

import { useEffect, useState } from "react";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 320, damping: 32, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 320, damping: 32, mass: 0.3 });

  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const updateTarget = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        setInteractive(false);
        setLabel("");
        return;
      }

      const matched = target.closest<HTMLElement>(
        "[data-cursor-label], a, button, input, textarea",
      );

      if (!matched) {
        setInteractive(false);
        setLabel("");
        return;
      }

      const defaultLabel =
        matched.tagName === "A" ? "Open" : matched.tagName === "BUTTON" ? "Tap" : "";

      setInteractive(true);
      setLabel(matched.dataset.cursorLabel ?? defaultLabel);
    };

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
      updateTarget(event.target);
    };

    const handleOver = (event: Event) => updateTarget(event.target);
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", handleOver);
    document.addEventListener("pointerleave", handleLeave);
    document.addEventListener("pointerenter", handleEnter);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      document.removeEventListener("pointerleave", handleLeave);
      document.removeEventListener("pointerenter", handleEnter);
    };
  }, [prefersReducedMotion, x, y]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden -translate-x-1/2 -translate-y-1/2 lg:block"
      style={{ x: springX, y: springY }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? (interactive ? 1.15 : 1) : 0.8,
      }}
      transition={{ duration: 0.18 }}
    >
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[10px] uppercase tracking-[0.3em] text-slate-100 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_18px_50px_rgba(56,189,248,0.22)] backdrop-blur-xl">
        <span
          className={`absolute inset-2 rounded-full border transition-opacity duration-200 ${
            interactive ? "border-cyan-300/60 opacity-100" : "border-white/10 opacity-60"
          }`}
        />
        <span className="relative z-10 px-2 text-center font-mono">{label}</span>
      </div>
    </motion.div>
  );
}
