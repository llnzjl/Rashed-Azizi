"use client";
import { useTranslation } from "@/lib/i18n/client";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { Certificates } from "@/components/site/certificates";
import { PageHeading } from "@/components/site/section-title";
import { educationItems } from "@/data/portfolio";

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
  const { t } = useTranslation();
  return (
    <div className="inner-page page-container">
      <PageHeading
        eyebrow={t("EDUCATION & ACHIEVEMENTS")}
        title={t("A foundation for what’s next")}
        description={t(
          "Formal study, hands-on learning, and the milestones along the way.",
        )}
      />
      <div className="education-grid">
        {schools.map((school) => (
          <article className="education-card" key={school.school}>
            <HiOutlineAcademicCap />
            <span className="mono">{t(school.period)}</span>
            <h2>{t(school.school)}</h2>
            <p>{t(school.degree)}</p>
            <ul>
              {school.coursework.map((course) => (
                <li key={course}>{t(course)}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <Certificates />
    </div>
  );
}
