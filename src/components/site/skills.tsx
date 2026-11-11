import {
  RiReactjsLine,
  RiJavascriptLine,
  RiHtml5Line,
  RiGithubLine,
  RiTerminalBoxLine,
} from "react-icons/ri";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiSqlite,
  SiCplusplus,
  SiAnthropic,
} from "react-icons/si";
import { HiOutlineSparkles } from "react-icons/hi2";
import { SectionTitle } from "./section-title";
import { Reveal } from "./reveal";

const groups = [
  {
    name: "Languages",
    detail: "The foundations behind the interfaces.",
    items: [
      {
        name: "TypeScript",
        Icon: SiTypescript,
        note: "Typed components and application logic",
      },
      {
        name: "JavaScript",
        Icon: RiJavascriptLine,
        note: "Interactive browser experiences",
      },
      { name: "Python", Icon: SiPython, note: "Korea Assist App backend" },
      {
        name: "C / C++",
        Icon: SiCplusplus,
        note: "Records, account logic, and CLI projects",
      },
    ],
  },
  {
    name: "Frontend",
    detail: "Where an idea becomes an experience.",
    items: [
      {
        name: "React",
        Icon: RiReactjsLine,
        note: "Reusable, interactive components",
      },
      {
        name: "Next.js",
        Icon: SiNextdotjs,
        note: "Routing and static web experiences",
      },
      {
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
        note: "Responsive interface styling",
      },
      {
        name: "HTML / CSS",
        Icon: RiHtml5Line,
        note: "Semantic structure and visual details",
      },
    ],
  },
  {
    name: "Tools & beyond",
    detail: "A workflow that keeps me learning.",
    items: [
      {
        name: "Git / GitHub",
        Icon: RiGithubLine,
        note: "Version control and publishing work",
      },
      {
        name: "SQLite",
        Icon: SiSqlite,
        note: "Application data and persistence",
      },
      {
        name: "Claude API",
        Icon: SiAnthropic,
        note: "Anthropic Academy coursework",
      },
      {
        name: "Claude Code",
        Icon: RiTerminalBoxLine,
        note: "AI-assisted development coursework",
      },
    ],
  },
];
export function Skills() {
  return (
    <section id="skills" className="section section-tinted">
      <div className="page-container">
        <SectionTitle
          number="03"
          eyebrow="MY TOOLKIT"
          title={
            <>
              The tools behind
              <br />
              <span className="muted-heading">the ideas.</span>
            </>
          }
          description="A growing toolkit, grounded in projects and hands-on learning."
        />
        <div className="skills-grid">
          {groups.map((group, index) => (
            <Reveal key={group.name} delay={index * 0.06}>
              <div className="skill-group">
                <span className="mono skill-index">0{index + 1}</span>
                <h3>{group.name}</h3>
                <p>{group.detail}</p>
                <div className="skill-list">
                  {group.items.map(({ name, Icon, note }) => (
                    <div key={name} className="skill-item" tabIndex={0}>
                      <Icon aria-hidden="true" />
                      <div>
                        <strong>{name}</strong>
                        <span>{note}</span>
                      </div>
                      <span className="skill-plus">+</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="skills-footnote">
          <HiOutlineSparkles /> Always a student. Always adding something new.
        </p>
      </div>
    </section>
  );
}
