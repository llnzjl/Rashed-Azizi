import Link from "next/link";

import { Reveal } from "@/components/site/reveal";

type IntroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  external?: boolean;
};

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  chips?: string[];
  actions?: IntroAction[];
};

export function PageIntro({
  eyebrow,
  title,
  description,
  chips = [],
  actions = [],
}: PageIntroProps) {
  return (
    <Reveal className="max-w-5xl">
      <span className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
        {eyebrow}
      </span>
      <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600 sm:text-lg">
        {description}
      </p>

      {chips.length ? (
        <div className="mt-8 flex flex-wrap gap-3">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-600"
            >
              {chip}
            </span>
          ))}
        </div>
      ) : null}

      {actions.length ? (
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          {actions.map((action) => {
            const className =
              action.variant === "secondary"
                ? "focus-ring inline-flex w-full justify-center rounded-md border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50 sm:w-auto"
                : "focus-ring inline-flex w-full justify-center rounded-md bg-neutral-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 sm:w-auto";

            if (action.external) {
              return (
                <a
                  key={action.href}
                  href={action.href}
                  target="_blank"
                  rel="noreferrer"
                  className={className}
                >
                  {action.label}
                </a>
              );
            }

            return (
              <Link key={action.href} href={action.href} className={className}>
                {action.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </Reveal>
  );
}
