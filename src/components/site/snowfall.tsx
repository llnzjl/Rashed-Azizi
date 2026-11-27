import type { CSSProperties } from "react";

export function Snowfall() {
  return (
    <div className="snowfall" aria-hidden="true">
      {Array.from({ length: 32 }, (_, index) => (
        <span
          key={index}
          className="snowflake"
          style={
            {
              left: `${(index * 37 + 5) % 100}%`,
              "--flake-size": `${2 + (index % 5)}px`,
              "--fall-duration": `${12 + (index % 9) * 2}s`,
              "--fall-delay": `${-index * 3.7}s`,
              "--flake-drift": `${(index % 2 ? -1 : 1) * (18 + (index % 7) * 9)}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
