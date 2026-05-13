"use client";

import { motion } from "framer-motion";

type LoadingScreenProps = {
  name: string;
  title: string;
};

export function LoadingScreen({ name, title }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#040712]"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      <div className="relative flex w-full max-w-md flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.5em] text-cyan-300/80">
            Portfolio Loading
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl">
            {name}
          </h1>
          <p className="mt-3 text-sm text-slate-400">{title}</p>
        </motion.div>

        <div className="mt-10 h-px w-full overflow-hidden rounded-full bg-white/10">
          <motion.span
            className="block h-full origin-left bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}
