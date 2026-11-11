import { Notes } from "@/components/site/notes";
import { PageHeading } from "@/components/site/section-title";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Short notes on web development, AI, and the things I’m learning as I build.",
  path: "/blog",
});
export default function Page() {
  return (
    <div className="inner-page page-container">
      <PageHeading
        eyebrow="BLOG"
        title="Notes from the workbench"
        description="Short notes on web development, AI, and the things I’m learning as I build."
      />
      <Notes heading={false} />
    </div>
  );
}
