"use client";

import type { ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

export function Magnetic({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const x = useSpring(targetX, { stiffness: 180, damping: 18 });
  const y = useSpring(targetY, { stiffness: 180, damping: 18 });
  return (
    <motion.div
      style={{ x, y }}
      onPointerMove={(event) => {
        if (reduced || event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        targetX.set((event.clientX - bounds.left - bounds.width / 2) * 0.12);
        targetY.set((event.clientY - bounds.top - bounds.height / 2) * 0.12);
      }}
      onPointerLeave={() => {
        targetX.set(0);
        targetY.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
