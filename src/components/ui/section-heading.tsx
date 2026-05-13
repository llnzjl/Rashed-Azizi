"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-3xl"
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="section-copy mt-5">{description}</p>
    </motion.div>
  );
}
