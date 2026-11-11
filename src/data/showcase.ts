import {
  minimalProjects,
  minimalTimelineItems,
  publicAsset,
} from "@/data/portfolio";

export const sectionNavigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "journey", label: "Journey" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
] as const;

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "Web applications" | "Systems" | "Team projects";
  technologies: readonly string[];
  github?: string;
  live?: string;
  article?: string;
  detail: string;
  year: string;
};

const projectDetails: Omit<Project, "title" | "description" | "image">[] = [
  {
    id: "baraka",
    category: "Web applications",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/llnzjl/baraka.uz",
    live: "https://llnzjl.github.io/baraka.uz/",
    year: "2026",
    detail:
      "A restaurant experience built around discovering the menu and planning a visit. The repository also includes table booking and administration pages. The GitHub Pages version is a static preview; server-backed features require the full application.",
  },
  {
    id: "dateflow",
    category: "Web applications",
    technologies: ["Next.js", "TypeScript", "SQLite"],
    github: "https://github.com/llnzjl/dayflow",
    live: "https://llnzjl.github.io/dayflow/",
    year: "2026",
    detail:
      "An in-development itinerary planner with timing, budget calculations, and optional AI intent parsing. The public browser preview uses demo venues, estimated travel, and local storage. Accounts, shared plans, and other server features belong to the full application.",
  },
  {
    id: "kaa",
    category: "Web applications",
    technologies: ["Python", "JavaScript", "SQLite"],
    github: "https://github.com/llnzjl/KAA",
    live: "https://llnzjl.github.io/KAA/",
    year: "2026",
    detail:
      "An in-development student companion with university resources, introductory Korean lessons, checklists, and saved links. The browser edition stores progress on the current device. Sign-in, cloud synchronization, and live AI need a separately hosted backend.",
  },
  {
    id: "together-korea",
    category: "Team projects",
    technologies: ["Product design", "AI chatbot concept"],
    article: minimalProjects[3].href,
    year: "2025",
    detail:
      "A four-person hackathon collaboration focused on support for foreign workers in Korea. I helped shape the product direction, accessible guidance, and an AI chatbot concept. The team earned second place at the Chungbuk Pro Maker Center hackathon.",
  },
  {
    id: "school-management",
    category: "Systems",
    technologies: ["C", "CLI"],
    github: minimalProjects[4].href,
    year: "2024",
    detail:
      "A foundational C project for organizing student records and academic workflows. A way to practice structured data handling and clear command-line interactions.",
  },
  {
    id: "bank-management",
    category: "Systems",
    technologies: ["C", "CLI"],
    github: minimalProjects[5].href,
    year: "2024",
    detail:
      "A command-line project modeling account operations and transaction flows, with an emphasis on procedural logic and input handling.",
  },
  {
    id: "book-management",
    category: "Systems",
    technologies: ["C++", "Record management"],
    github: minimalProjects[6].href,
    year: "2024",
    detail:
      "A book-record management program for practicing storing, searching, and organizing information through maintainable program structure.",
  },
];

export const projects: Project[] = minimalProjects.map((project, index) => ({
  title: project.title,
  description: project.description,
  image: project.image,
  ...projectDetails[index],
}));

export const journey = [
  minimalTimelineItems[0],
  {
    title: "Building for everyday life",
    subtitle: "Baraka.uz · DateFlow · Korea Assist App",
    description:
      "Exploring restaurant experiences, day planning, and practical tools for students in Korea through three new web projects.",
    date: "2026",
  },
  {
    title: "Learning to build with AI",
    subtitle: "Anthropic Academy",
    description:
      "Completed Claude Code in Action, Claude with the Anthropic API, and Teaching the AI Fluency Framework.",
    date: "May 2026",
  },
  ...minimalTimelineItems.slice(1),
];

export const portrait = publicAsset("/rashed-profile.webp");
