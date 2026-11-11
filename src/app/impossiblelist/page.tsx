import { Goals } from "@/components/site/goals";
import { PageHeading } from "@/components/site/section-title";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({
  title: "Impossible List",
  description:
    "Rashed Azizi’s public goals for learning, building, and growing as a developer.",
  path: "/impossiblelist",
});
export default function Page() {
  return (
    <div className="inner-page page-container">
      <PageHeading
        eyebrow="THE IMPOSSIBLE LIST"
        title="Not impossible. Just not yet"
        description="A few things I want to keep moving toward. Some are in motion; others are a reminder of where I want to go."
      />
      <Goals />
    </div>
  );
}
