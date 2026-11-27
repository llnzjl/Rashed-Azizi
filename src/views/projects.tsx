"use client";
import { useTranslation } from "@/lib/i18n/client";
import { ProjectShowcase } from "@/components/site/project-showcase";
import { PageHeading } from "@/components/site/section-title";
export default function Page() {
  const { t } = useTranslation();
  return (
    <div className="inner-page page-container">
      <PageHeading
        eyebrow={t("PROJECTS")}
        title={t("Ideas, made real")}
        description={t(
          "Web applications, foundational software, and collaborative work. Each project is another way to learn.",
        )}
      />
      <ProjectShowcase heading={false} />
    </div>
  );
}
