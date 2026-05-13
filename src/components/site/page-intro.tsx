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
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[0.98] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="body-copy mt-6 max-w-3xl text-base sm:text-lg">{description}</p>

      {chips.length ? (
        <div className="mt-8 flex flex-wrap gap-3">
          {chips.map((chip) => (
            <span key={chip} className="chip">
              {chip}
            </span>
          ))}
        </div>
      ) : null}

      {actions.length ? (
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          {actions.map((action) => {
            const className =
              action.variant === "secondary" ? "button-secondary" : "button-primary";

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
