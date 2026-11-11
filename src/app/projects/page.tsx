import { ProjectShowcase } from "@/components/site/project-showcase";
import { PageHeading } from "@/components/site/section-title";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Web applications, foundational software, and collaborative work. Each project is another way to learn.",
  path: "/projects",
});
export default function Page() {
  return (
    <div className="inner-page page-container">
      <PageHeading
        eyebrow="PROJECTS"
        title="Ideas, made real"
        description="Web applications, foundational software, and collaborative work. Each project is another way to learn."
      />
      <ProjectShowcase heading={false} />
    </div>
  );
}
