import { HiOutlineAcademicCap } from "react-icons/hi2";
import { Certificates } from "@/components/site/certificates";
import { PageHeading } from "@/components/site/section-title";
import { educationItems } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({
  title: "Education",
  description:
    "Academic foundations, certificates, and hackathon achievements for Rashed Azizi.",
  path: "/education",
});
const schools = [
  {
    school: "Chungbuk National University",
    degree: "Computer Science student",
    period: "Present · South Korea",
    coursework: [
      "Web development",
      "Software engineering",
      "AI and practical projects",
    ],
  },
  ...educationItems,
];
export default function Page() {
  return (
    <div className="inner-page page-container">
      <PageHeading
        eyebrow="EDUCATION & ACHIEVEMENTS"
        title="A foundation for what’s next"
        description="Formal study, hands-on learning, and the milestones along the way."
      />
      <div className="education-grid">
        {schools.map((school) => (
          <article className="education-card" key={school.school}>
            <HiOutlineAcademicCap />
            <span className="mono">{school.period}</span>
            <h2>{school.school}</h2>
            <p>{school.degree}</p>
            <ul>
              {school.coursework.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <Certificates />
    </div>
  );
}
