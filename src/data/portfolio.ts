export const sectionIds = [
  "home",
  "about",
  "projects",
  "experience",
  "education",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

export const navItems: Array<{ id: SectionId; label: string }> = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export type RouteItem = {
  href: string;
  label: string;
  blurb: string;
  eyebrow: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: "email" | "linkedin" | "github" | "instagram";
};

export type Certification = {
  title: string;
  issuer: string;
  platform: string;
  course: string;
  completedOn: string;
  summary: string;
  image: string;
  courseUrl: string;
  verificationUrl?: string;
};

const repoName = "Rashed-Azizi";
const siteOrigin = "https://llnzjl.github.io";
const siteBasePath = process.env.NODE_ENV === "production" ? `/${repoName}` : "";

export function publicAsset(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteBasePath}${normalizedPath}`;
}

// Update this file to personalize the portfolio without touching the UI layer.
export const siteData = {
  name: "Rashed Azizi",
  initials: "RA",
  title: "Student, Developer & Builder",
  tagline: "Frontend-focused student developer from Afghanistan.",
  description:
    "A clean developer portfolio for Rashed Azizi, a Chungbuk National University student building web software, AI ideas, and practical student projects.",
  siteOrigin,
  repoName,
  siteBasePath,
  siteUrl: `${siteOrigin}${siteBasePath}`,
  ogImage: publicAsset("/rashed-profile.jpg"),
  favicon: publicAsset("/favicon.svg"),
  location: "Chungbuk National University, South Korea",
  availability: "Open to internships, student collaboration, and junior opportunities.",
  email: "rashedazizi975@gmail.com",
  linkedin: "https://linkedin.com/in/llnzjl",
  github: "https://github.com/llnzjl",
  instagram: "https://www.instagram.com/le_.han06/",
  heroRoles: [
    "Computer Science Student",
    "Frontend-Focused Builder",
    "UI / UX Learner",
  ],
  heroIntro:
    "I am a computer science student at Chungbuk National University, learning web development, AI, and software engineering by building practical projects and refining how they feel to use.",
  heroStatus: "Open to internships and student opportunities in 2026",
  keywords: [
    "Rashed Azizi",
    "portfolio",
    "computer science student",
    "university student portfolio",
    "aspiring frontend builder",
    "Next.js portfolio",
    "student designer portfolio",
    "South Korea computer science student",
  ],
};

export const minimalNavItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Impossible List", href: "/impossiblelist" },
  { label: "CV", href: "/cv" },
] as const;

export const heroSocialLinks = [
  {
    label: "GitHub",
    value: "llnzjl",
    href: siteData.github,
    icon: "github",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/llnzjl",
    href: siteData.linkedin,
    icon: "linkedin",
  },
  {
    label: "Email",
    value: siteData.email,
    href: `mailto:${siteData.email}`,
    icon: "email",
  },
] as const;

export const minimalProjects = [
  {
    title: "Together Korea Worker Support App",
    description:
      "A hackathon product concept for foreign workers in Korea, focused on guidance, accessibility, and practical support through an AI-assisted experience.",
    href: "https://www.veritas-a.com/news/articleView.html?idxno=572820",
    image: publicAsset("/certificates/chungbuk-hackathon-second-place.jpg"),
    color: "#d1fae5",
  },
  {
    title: "School Management System",
    description:
      "A C-based administration project for organizing student records and academic workflows through a clear command-line experience.",
    href: "https://github.com/llnzjl/SMS-Project",
    image: publicAsset("/projects/sms.svg"),
    color: "#cffafe",
  },
  {
    title: "Bank Management System",
    description:
      "A command-line banking system modeling account operations, transaction flow, and reliable input handling in C.",
    href: "https://github.com/llnzjl/Bank_MS",
    image: publicAsset("/projects/bank.svg"),
    color: "#fef3c7",
  },
  {
    title: "Book Management Program",
    description:
      "A practical book management project centered on storing, searching, and organizing records with straightforward program structure.",
    href: "https://github.com/llnzjl/Book-Management-Program",
    image: publicAsset("/projects/books.svg"),
    color: "#fce7f3",
  },
] as const;

export const minimalTimelineItems = [
  {
    title: "Chungbuk National University",
    subtitle: "Computer Science student",
    description:
      "Studying computer science in South Korea while building a stronger foundation in web development, software engineering, and AI.",
    date: "Present",
  },
  {
    title: "Together Korea Worker Support App",
    subtitle: "Hackathon team project",
    description:
      "Collaborated on a foreign-worker support concept and contributed to the product story around accessible guidance and AI assistance.",
    date: "2025",
  },
  {
    title: "School Management System",
    subtitle: "C programming project",
    description:
      "Built a structured student-record system to practice data handling, program flow, and command-line user experience.",
    date: "2024",
  },
  {
    title: "Bank Management System",
    subtitle: "Account logic and CLI workflows",
    description:
      "Modeled common banking operations and transaction patterns with an emphasis on dependable procedural logic.",
    date: "2024",
  },
  {
    title: "Book Management Program",
    subtitle: "Records and organization",
    description:
      "Created a small management tool to practice clean structure, maintainable logic, and simple information retrieval.",
    date: "2024",
  },
  {
    title: "Frontend Developer From Afghanistan",
    subtitle: "Public GitHub profile",
    description:
      "Started presenting work publicly as a passionate frontend developer learning software web development and AI.",
    date: "Ongoing",
  },
  {
    title: "Early Learning Path",
    subtitle: "Software, web, and AI",
    description:
      "Continued building fundamentals through academic work, public repositories, and steady portfolio refinement.",
    date: "Started",
  },
] as const;

export const contactMethods = [
  {
    label: "Email",
    value: siteData.email,
    href: `mailto:${siteData.email}`,
  },
] as const;

export const blogNotes = [
  {
    title: "Learning software web development and AI",
    date: "2026",
    description:
      "Short notes on what I am learning, what I am building, and how small projects turn into stronger engineering habits.",
  },
  {
    title: "Building a student portfolio that feels calm",
    date: "2026",
    description:
      "A note on redesigning my portfolio around clean typography, focused content, and practical proof of work.",
  },
] as const;

export const impossibleListItems = [
  "Ship a production-ready portfolio with Next.js and TypeScript.",
  "Build a useful AI-assisted tool for international students or workers.",
  "Contribute consistently to public GitHub repositories.",
  "Earn an internship where I can grow with a real engineering team.",
  "Publish technical writing about web development and AI.",
] as const;

export const routeItems: RouteItem[] = [
  {
    href: "/",
    label: "Home",
    eyebrow: "Entry Point",
    blurb: "Brand, featured work, and the fastest overview of what I do.",
  },
  {
    href: "/about",
    label: "About",
    eyebrow: "Profile",
    blurb: "Story, strengths, working style, and the stack behind the work.",
  },
  {
    href: "/projects",
    label: "Projects",
    eyebrow: "Selected Work",
    blurb: "Personal builds, team projects, and the ideas I like to ship.",
  },
  {
    href: "/experience",
    label: "Experience",
    eyebrow: "Timeline",
    blurb: "Growth milestones, collaboration highlights, and project momentum.",
  },
  {
    href: "/education",
    label: "Education",
    eyebrow: "Credentials",
    blurb: "Academic history, certifications, and proof of learning in motion.",
  },
  {
    href: "/contact",
    label: "Contact",
    eyebrow: "Connect",
    blurb: "How to reach me for internships, student opportunities, or collaboration.",
  },
];

export const heroMetrics = [
  {
    value: "01+",
    label: "Years learning and shipping projects",
    helper: "Growing through academic, personal, and collaborative work.",
  },
  {
    value: "08+",
    label: "Projects explored and built",
    helper: "A mix of web builds, systems exercises, and concept work.",
  },
  {
    value: "03",
    label: "Teams and hackathon environments",
    helper: "Proof that I can collaborate under real constraints.",
  },
];

export const capabilityPillars = [
  {
    title: "Product-minded execution",
    description:
      "I like interfaces that feel sharp, useful, and easy to understand from the first click.",
  },
  {
    title: "Motion with purpose",
    description:
      "Animation should guide attention and add polish, not distract from the content.",
  },
  {
    title: "Calm technical growth",
    description:
      "I keep improving by shipping small systems, refining details, and learning from each build.",
  },
];

export const pageHighlights = [
  {
    href: "/about",
    label: "About",
    title: "Story, strengths, and how I think while building.",
    summary:
      "A closer look at my background, technical focus, and the kind of product experience I aim to create.",
  },
  {
    href: "/projects",
    label: "Projects",
    title: "Hands-on builds across systems, interfaces, and collaboration.",
    summary:
      "From foundational C projects to hackathon concepts and polished portfolio work, this is where execution shows up.",
  },
  {
    href: "/experience",
    label: "Experience",
    title: "Momentum built through self-driven work and team settings.",
    summary:
      "A timeline of growth, collaboration, and the habits that shape how I approach real-world development.",
  },
  {
    href: "/education",
    label: "Education",
    title: "Foundations, certificates, and long-term learning trajectory.",
    summary:
      "Academic milestones, supporting credentials, and the learning environments that shaped my path.",
  },
];

export const aboutContent = {
  eyebrow: "About Me",
  heading: "A resilient builder with a product mindset and a love for thoughtful interfaces.",
  story: [
    "I am a computer science university student based in South Korea, driven by curiosity around web platforms, AI, and systems that solve real-world problems.",
    "My journey has been shaped by adaptation, continuous learning, and the ability to move between logic and aesthetics. I enjoy building tools that are useful, approachable, and visually memorable.",
    "Whether I am working independently or with a team, I care about clean implementation, intentional motion, and experiences that feel refined from the first interaction.",
  ],
  journey:
    "From foundational C projects to modern web interfaces and AI-assisted product ideas, I am steadily turning technical growth into work that feels both practical and premium.",
};

export const workPrinciples = [
  {
    title: "Build for clarity",
    description:
      "I prefer interfaces and systems that explain themselves quickly and reduce friction for the user.",
  },
  {
    title: "Design the feeling",
    description:
      "Good software should not only function well, it should also feel deliberate, composed, and memorable.",
  },
  {
    title: "Keep learning in public",
    description:
      "Each new project helps me sharpen both my engineering habits and the way I present my work.",
  },
];

export const skillBars = [
  { name: "Frontend Engineering", level: 90 },
  { name: "UI Motion & Interaction", level: 84 },
  { name: "Backend & APIs", level: 78 },
  { name: "Problem Solving", level: 88 },
];

export const techStack = [
  { key: "html", name: "HTML", color: "#fb923c" },
  { key: "css", name: "CSS", color: "#38bdf8" },
  { key: "javascript", name: "JavaScript", color: "#facc15" },
  { key: "react", name: "React", color: "#67e8f9" },
  { key: "nextjs", name: "Next.js", color: "#f8fafc" },
  { key: "nodejs", name: "Node.js", color: "#4ade80" },
  { key: "python", name: "Python", color: "#60a5fa" },
  { key: "tailwind", name: "Tailwind", color: "#22d3ee" },
  { key: "mongodb", name: "MongoDB", color: "#34d399" },
  { key: "github", name: "GitHub", color: "#cbd5e1" },
];

export const personalProjects = [
  {
    title: "School Management System",
    description:
      "A structured C-based administration system for organizing student records, workflows, and academic operations through a clear console-driven experience.",
    highlight: "Focused on clear data structure and reliable record handling.",
    technologies: ["C", "CLI", "Data Management"],
    liveUrl: "",
    githubUrl: "https://github.com/llnzjl/SMS-Project",
    previewLabel: "Structured Admin Workflow",
    accent: "from-cyan-500/40 via-sky-500/25 to-transparent",
  },
  {
    title: "Book Management Program",
    description:
      "A practical management tool centered on storing and organizing book information with simplicity, maintainability, and user-oriented program flow.",
    highlight: "Designed around straightforward user flow and maintainable logic.",
    technologies: ["C++", "Program Structure", "Records"],
    liveUrl: "",
    githubUrl: "",
    previewLabel: "Organized Knowledge Library",
    accent: "from-amber-500/35 via-orange-500/20 to-transparent",
  },
  {
    title: "Bank Management System",
    description:
      "A command-line banking project modeling common account operations and transaction flows while demonstrating careful procedural logic and user input handling.",
    highlight: "Shows consistency in command-based UX and business rules thinking.",
    technologies: ["C", "Account Logic", "CLI"],
    liveUrl: "",
    githubUrl: "https://github.com/llnzjl/Bank_MS",
    previewLabel: "Operations & Account Logic",
    accent: "from-sky-500/35 via-cyan-500/20 to-transparent",
  },
];

export const teamProjects = [
  {
    title: "Together Korea Worker Support App",
    role: "Product Collaborator / AI Feature Contributor",
    description:
      "A hackathon concept built for foreign workers in Korea, focused on guidance, accessibility, and practical support through a mobile-first product idea.",
    contribution: [
      "Shaped feature direction around worker support and accessible information design.",
      "Contributed to an AI chatbot concept for easier guidance and assistance.",
      "Collaborated under hackathon time pressure to refine the product story and presentation.",
    ],
    teamSize: "4-person team",
    result: "Awarded 2nd place at the Chungbuk Pro Maker Center hackathon.",
    technologies: ["Product Strategy", "AI Chatbot", "UX Thinking", "Team Collaboration"],
    liveUrl:
      "https://www.veritas-a.com/news/articleView.html?idxno=572820",
    githubUrl: "",
    previewLabel: "Hackathon Award Winner",
    accent: "from-emerald-500/35 via-cyan-500/20 to-transparent",
  },
];

export const experienceItems = [
  {
    company: "Independent Student Builder",
    role: "Student Builder & Portfolio Designer",
    period: "2024 - Present",
    summary:
      "Developing portfolio work, UI experiments, and foundational software projects while improving design sensitivity alongside engineering skills.",
    achievements: [
      "Built increasingly polished portfolio and student-facing interfaces with modern frontend tooling.",
      "Practiced responsive design, component thinking, and motion-led storytelling.",
      "Translated self-learning into public projects and a stronger personal brand.",
    ],
  },
  {
    company: "Chungbuk Pro Maker Center",
    role: "Hackathon Participant, Team Together Korea",
    period: "2025",
    summary:
      "Collaborated on a worker-support product concept during a fast-paced hackathon and helped shape its AI-assisted experience direction.",
    achievements: [
      "Won 2nd place in a one-night, two-day hackathon environment.",
      "Worked with teammates to align product purpose, user needs, and demo delivery.",
      "Supported the concept for an AI chatbot experience inside the solution.",
    ],
  },
  {
    company: "Computer Science Growth Path",
    role: "Student Developer",
    period: "Ongoing",
    summary:
      "Building technical foundations through academic work, hands-on coding, and iterative personal projects across web and systems topics.",
    achievements: [
      "Strengthened problem-solving through low-level and application-focused projects.",
      "Expanded from foundational languages into modern frontend workflows.",
      "Developed confidence presenting ideas, collaborating, and learning quickly.",
    ],
  },
];

export const experienceFocus = [
  "Shipping work that looks refined and still feels practical.",
  "Learning in real public contexts instead of only private practice.",
  "Turning small wins into a stronger long-term student portfolio.",
];

export const educationItems = [
  {
    school: "Osong High School",
    degree: "High School Diploma",
    period: "Cheongju, South Korea",
    coursework: [
      "Core computing fundamentals",
      "Communication and language adaptation",
      "Independent study and project work",
    ],
    achievements: [
      "Completed high school studies while adapting to a new country and academic culture.",
      "Built resilience, discipline, and cross-cultural communication confidence.",
    ],
  },
  {
    school: "Shuhada-e-Abparan High School",
    degree: "Foundational Education",
    period: "Chak Wardak, Afghanistan",
    coursework: [
      "Academic foundations",
      "Structured classroom learning",
      "Early analytical problem solving",
    ],
    achievements: [
      "Completed elementary and middle school education with strong foundational growth.",
      "Developed self-discipline and a lasting respect for learning and persistence.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "Chungbuk Hackathon Completion Certificate",
    issuer: "Chungbuk Pro Maker Center",
    platform: "Hackathon",
    course: "Together Korea Worker Support App",
    completedOn: "2025",
    summary:
      "Completed the Chungbuk hackathon as part of the Together Korea team and received a certificate of participation.",
    image: publicAsset("/certificates/chungbuk-hackathon-completion.jpg"),
    courseUrl: "https://www.veritas-a.com/news/articleView.html?idxno=572820",
  },
  {
    title: "Chungbuk Hackathon 2nd Place Award",
    issuer: "Chungbuk Pro Maker Center",
    platform: "Hackathon",
    course: "Together Korea Worker Support App",
    completedOn: "2025",
    summary:
      "Earned 2nd place for the Together Korea worker support concept at the Chungbuk hackathon.",
    image: publicAsset("/certificates/chungbuk-hackathon-second-place.jpg"),
    courseUrl: "https://www.veritas-a.com/news/articleView.html?idxno=572820",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic Academy",
    platform: "Skilljar",
    course: "Claude Code in Action",
    completedOn: "May 27, 2026",
    summary:
      "Completed the free Anthropic course focused on integrating Claude Code into a development workflow.",
    image: publicAsset("/certificates/claude-code-in-action.png"),
    courseUrl: "https://anthropic.skilljar.com/claude-code-in-action",
    verificationUrl: "https://verify.skilljar.com/c/oakzcwzck222",
  },
  {
    title: "Claude with the Anthropic API",
    issuer: "Anthropic Academy",
    platform: "Skilljar",
    course: "Building with the Claude API",
    completedOn: "May 27, 2026",
    summary:
      "Completed the Anthropic API course covering chat, tools, RAG, MCP, and agent workflows.",
    image: publicAsset("/certificates/claude-with-the-anthropic-api.png"),
    courseUrl: "https://anthropic.skilljar.com/claude-with-the-anthropic-api",
    verificationUrl: "https://verify.skilljar.com/c/9hny3g2zeufb",
  },
  {
    title: "Teaching the AI Fluency Framework",
    issuer: "Anthropic Academy",
    platform: "Skilljar",
    course: "Teaching AI Fluency",
    completedOn: "May 27, 2026",
    summary:
      "Completed the instructor-led AI Fluency course for teaching and assessing the 4D framework.",
    image: publicAsset("/certificates/teaching-ai-fluency-framework.png"),
    courseUrl: "https://anthropic.skilljar.com/teaching-ai-fluency",
  },
];

export const learningNotes = [
  "I like balancing formal study with hands-on building and iteration.",
  "Certificates matter most when they support real projects and stronger execution.",
  "My education story is also a story of adaptation, persistence, and rebuilding momentum.",
];

export const contactHighlights = [
  "Open to internships, junior opportunities, and collaborative student builds.",
  "Happy to discuss product ideas, portfolio work, and polished web experiences.",
  "Response workflows are intentionally simple so this site can stay static-friendly.",
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: siteData.email,
    href: `mailto:${siteData.email}`,
    icon: "email",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/llnzjl",
    href: siteData.linkedin,
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/llnzjl",
    href: siteData.github,
    icon: "github",
  },
  {
    label: "Instagram",
    value: "@le_.han06",
    href: siteData.instagram,
    icon: "instagram",
  },
];

export const serviceOffers = [
  {
    title: "Portfolio and landing page support",
    description:
      "Thoughtful frontend work with stronger visual direction, motion, and responsive polish.",
  },
  {
    title: "Student team collaboration",
    description:
      "Support on early ideas, UI shaping, and implementation for projects still finding their form.",
  },
  {
    title: "Project presentation polish",
    description:
      "Presentation layers that help student work, hackathon ideas, and personal projects feel credible and memorable.",
  },
];
