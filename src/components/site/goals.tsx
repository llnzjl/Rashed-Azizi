"use client";
import { useTranslation } from "@/lib/i18n/client";
import { useState } from "react";
import {
  HiOutlineCheckCircle,
  HiOutlineArrowPath,
  HiOutlineFlag,
} from "react-icons/hi2";
import { impossibleListItems } from "@/data/portfolio";
import { Reveal } from "./reveal";
const states = ["Completed", "In progress", "In progress", "Future", "Future"];
const notes = [
  "This portfolio is built with Next.js and TypeScript and published on GitHub Pages.",
  "Korea Assist App and DateFlow are development projects exploring practical support and planning.",
  "Continuing to build and share projects on GitHub.",
  "Looking for a team where I can learn, contribute, and grow.",
  "A writing space is here. Longer technical articles are a next step.",
];
export function Goals() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("All");
  return (
    <>
      <div className="goals-overview">
        <strong>01 / 05</strong>
        <div>
          <p>{t("One milestone reached.")}</p>
          <p>{t("Plenty of room to grow.")}</p>
        </div>
        <div
          className="goal-track"
          role="progressbar"
          aria-label={t("Goals completed")}
          aria-valuemin={0}
          aria-valuemax={5}
          aria-valuenow={1}
        >
          <span />
        </div>
      </div>
      <div className="filter-bar" aria-label={t("Filter goals")}>
        {["All", "Completed", "In progress", "Future"].map((state) => (
          <button
            key={state}
            className={state === filter ? "filter active" : "filter"}
            aria-pressed={state === filter}
            onClick={() => setFilter(state)}
          >
            {t(state)}
          </button>
        ))}
      </div>
      <div className="goals-list">
        {impossibleListItems
          .map((item, index) => ({ item, index }))
          .filter(({ index }) => filter === "All" || states[index] === filter)
          .map(({ item, index }) => (
            <Reveal key={item}>
              <article className="goal">
                {index === 0 ? (
                  <HiOutlineCheckCircle />
                ) : index < 3 ? (
                  <HiOutlineArrowPath />
                ) : (
                  <HiOutlineFlag />
                )}
                <div>
                  <h2>{t(item)}</h2>
                  <p>{t(notes[index])}</p>
                </div>
                <span
                  className={`goal-status ${states[index].toLowerCase().replace(" ", "-")}`}
                >
                  {t(states[index])}
                </span>
              </article>
            </Reveal>
          ))}
      </div>
    </>
  );
}
