import Image from "next/image";
import Link from "next/link";
import {
  HiArrowUpRight,
  HiOutlineAcademicCap,
  HiOutlineMapPin,
  HiOutlineSparkles,
  HiOutlineCommandLine,
} from "react-icons/hi2";
import { portrait } from "@/data/showcase";
import { Reveal } from "./reveal";
import { SectionTitle } from "./section-title";

export function About() {
  const facts = [
    {
      Icon: HiOutlineAcademicCap,
      label: "EDUCATION",
      title: "Computer Science",
      detail: "Chungbuk National University",
    },
    {
      Icon: HiOutlineMapPin,
      label: "BASED IN",
      title: "South Korea",
      detail: "Originally from Afghanistan",
    },
    {
      Icon: HiOutlineSparkles,
      label: "EXPLORING",
      title: "Web, AI & software",
      detail: "Ideas that become useful tools",
    },
    {
      Icon: HiOutlineCommandLine,
      label: "RIGHT NOW",
      title: "Learning by building",
      detail: "From fundamentals to real projects",
    },
  ];
  return (
    <section id="about" className="section page-container">
      <SectionTitle
        number="01"
        eyebrow="THE PERSON BEHIND THE CODE"
        title={
          <>
            Curiosity is my
            <br />
            <span className="muted-heading">starting point.</span>
          </>
        }
      />
      <div className="about-layout">
        <Reveal className="about-photo">
          <Image
            src={portrait}
            alt="Rashed Azizi outdoors in South Korea"
            width={900}
            height={1445}
            sizes="(max-width: 700px) 90vw, 360px"
          />
          <span className="photo-note mono">
            FROM AFGHANISTAN, BUILDING IN KOREA ↗
          </span>
        </Reveal>
        <Reveal className="about-copy">
          <p className="large-copy">
            I’m Rashed, a computer science student who likes making things that
            people can actually use.
          </p>
          <p>
            I grew up in Afghanistan and now study at Chungbuk National
            University in South Korea. Adapting to a new country taught me to
            stay curious, ask questions, and keep going when something doesn’t
            make sense yet.
          </p>
          <p>
            That’s also how I approach code. From a C program that manages
            student records to a web app that helps plan a day, I learn best by
            building, testing, and refining the details.
          </p>
          <p>
            I’m currently exploring web development, AI, and software
            engineering. My goal is simple: build practical technology, and make
            it feel good to use.
          </p>
          <Link href="/cv" className="text-link">
            A closer look at my background <HiArrowUpRight />
          </Link>
        </Reveal>
      </div>
      <div className="about-facts">
        {facts.map(({ Icon, label, title, detail }) => (
          <Reveal key={label}>
            <div className="fact">
              <Icon />
              <span className="mono">{label}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
