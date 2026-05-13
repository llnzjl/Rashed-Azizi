"use client";

import { motion, useReducedMotion } from "framer-motion";

const orbs = [
  {
    size: 340,
    top: "6%",
    left: "8%",
    duration: 18,
    background:
      "radial-gradient(circle, rgba(56,189,248,0.26) 0%, rgba(56,189,248,0.08) 45%, transparent 72%)",
  },
  {
    size: 420,
    top: "12%",
    right: "3%",
    duration: 24,
    background:
      "radial-gradient(circle, rgba(139,92,246,0.24) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)",
  },
  {
    size: 300,
    bottom: "18%",
    left: "14%",
    duration: 20,
    background:
      "radial-gradient(circle, rgba(14,165,233,0.22) 0%, rgba(14,165,233,0.08) 42%, transparent 74%)",
  },
  {
    size: 260,
    bottom: "10%",
    right: "14%",
    duration: 16,
    background:
      "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 36%, transparent 68%)",
  },
];

const particles = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  width: 2 + (index % 3),
  height: 2 + (index % 3),
  left: `${8 + (index * 6) % 84}%`,
  top: `${6 + (index * 11) % 84}%`,
  delay: index * 0.6,
  duration: 7 + (index % 5),
}));

export function BackgroundEffects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {orbs.map((orb, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            background: orb.background,
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: [0, 18, -12, 0],
                  y: [0, -16, 14, 0],
                  scale: [1, 1.08, 0.96, 1],
                }
          }
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_50%)] opacity-35" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white/60 shadow-[0_0_18px_rgba(255,255,255,0.45)]"
          style={{
            width: particle.width,
            height: particle.height,
            left: particle.left,
            top: particle.top,
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  y: [0, -24, 0],
                  opacity: [0.25, 0.85, 0.25],
                }
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
