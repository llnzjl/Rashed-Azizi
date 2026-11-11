import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { ProjectShowcase } from "@/components/site/project-showcase";
import { Skills } from "@/components/site/skills";
import { Certificates } from "@/components/site/certificates";
import { Journey } from "@/components/site/journey";
import { Notes } from "@/components/site/notes";
import { Contact } from "@/components/site/contact";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Developer & Creative Thinker",
  description:
    "Rashed Azizi — computer science student at Chungbuk National University, building thoughtful web experiences and exploring AI.",
  path: "/",
});
export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="discipline-strip">
        <div className="page-container">
          <span>DRIVEN BY CURIOSITY</span>
          <p>
            Software development <i>✦</i> Thoughtful interfaces <i>✦</i> Applied
            AI <i>✦</i> Always learning
          </p>
        </div>
      </div>
      <About />
      <ProjectShowcase />
      <Skills />
      <Certificates />
      <Journey />
      <Notes />
      <Contact />
    </>
  );
}
