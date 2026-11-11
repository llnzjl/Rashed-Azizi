import { Journey } from "@/components/site/journey";
import { PageHeading } from "@/components/site/section-title";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({
  title: "Experience",
  description: "Real projects, academic milestones, and learning in public.",
  path: "/experience",
});
export default function Page() {
  return (
    <div className="inner-page page-container">
      <PageHeading
        eyebrow="EXPERIENCE"
        title="The path so far"
        description="Real projects, academic milestones, and learning in public."
      />
      <Journey />
    </div>
  );
}
