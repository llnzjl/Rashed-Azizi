"use client";

import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

type MinimalProjectCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
  color: string;
  technologies?: readonly string[];
  date?: string;
  status?: string;
};

export function MinimalProjectCard({
  title,
  description,
  href,
  image,
  color,
  technologies,
  date,
  status,
}: MinimalProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.28, ease: "easeInOut" }}
      className="group subtle-card flex h-full flex-col overflow-hidden rounded-lg"
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="focus-ring flex h-full flex-col"
      >
        <div
          className="relative aspect-[16/10] overflow-hidden border-b border-neutral-200"
          style={{ backgroundColor: color }}
        >
          <img
            src={image}
            alt={`${title} thumbnail`}
            className="h-full w-full object-cover transition duration-500 ease-in-out group-hover:scale-[1.035]"
          />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {date || status ? (
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-500">
              {date ? <span>{date}</span> : null}
              {status ? (
                <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-1 text-amber-800">
                  {status}
                </span>
              ) : null}
            </div>
          ) : null}
          <h3 className="text-xl font-semibold leading-tight text-neutral-950">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-7 text-neutral-600">{description}</p>
          {technologies?.length ? (
            <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <li key={technology} className="rounded-full border border-neutral-200 bg-white/70 px-2.5 py-1 text-xs text-neutral-600">
                  {technology}
                </li>
              ))}
            </ul>
          ) : null}
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 transition-opacity group-hover:opacity-70">
            {href.startsWith("https://github.com/") ? "View on GitHub" : "Visit Website"}
            <HiOutlineArrowUpRight aria-hidden="true" className="text-base" />
          </span>
        </div>
      </a>
    </motion.article>
  );
}
