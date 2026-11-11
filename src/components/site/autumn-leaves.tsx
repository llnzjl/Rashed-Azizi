import type { CSSProperties } from "react";

const golds = ["#e9ad32", "#d49320", "#f4c75d", "#bc791b"];

export function AutumnLeaves() {
  return (
    <div className="autumn-leaves" aria-hidden="true">
      {Array.from({ length: 18 }, (_, index) => (
        <span
          key={index}
          className="autumn-leaf"
          style={
            {
              left: `${(index * 37 + 5) % 100}%`,
              "--leaf-size": `${18 + (index % 5) * 4}px`,
              "--fall-duration": `${17 + (index % 7) * 2}s`,
              "--leaf-delay": `${-index * 3.7}s`,
              "--sway-duration": `${4 + (index % 4)}s`,
              "--leaf-drift": `${index % 2 === 0 ? 65 : -65}px`,
              "--leaf-turn": `${index * 43}deg`,
              color: golds[index % golds.length],
            } as CSSProperties
          }
        >
          <svg
            className="autumn-leaf-shape"
            viewBox="0 0 48 56"
            fill="none"
            focusable="false"
          >
            {index % 2 === 0 ? (
              <path
                d="m24 2 5 13 8-5-2 13 10 1-8 10 3 7-14 3-2 8-2-8-14-3 3-7-8-10 10-1-2-13 8 5Z"
                fill="currentColor"
              />
            ) : (
              <path
                d="M24 3C42 13 46 29 35 40c-4 4-8 5-11 7C8 42 4 31 9 20 12 12 19 7 24 3Z"
                fill="currentColor"
              />
            )}
            <path
              d="M24 12v41m0-21-9-9m9 17 11-12m-11-5 6-7"
              stroke="#805019"
              strokeOpacity=".45"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
