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

// Update this file to personalize the portfolio without touching the UI layer.
export const siteData = {
  name: "Rashed Azizi",
  initials: "RA",
  title: "Full Stack Developer",
  tagline: "Design-minded builder crafting polished digital experiences.",
  description:
    "A premium, cinematic portfolio for Rashed Azizi featuring interactive motion, glassmorphism, smooth scroll storytelling, and a modern developer brand.",
  siteUrl: "https://llnzjl.github.io/Rashed-Azizi",
  location: "Based in South Korea",
  availability: "Open to internships, freelance collaboration, and product-minded teams.",
  email: "azizi@chungbuk.ac.kr",
  linkedin: "https://linkedin.com/in/llnzjl",
  github: "https://github.com/llnzjl",
  instagram: "https://www.instagram.com/le_.han06/",
  heroRoles: [
    "Full Stack Developer",
    "Creative Developer",
    "UI / UX Designer",
  ],
  heroIntro:
    "I build immersive websites and practical software with a focus on clarity, motion, and purposeful user experience. My work blends engineering discipline with a visual eye for premium digital storytelling.",
  heroStatus: "Available for selective collaborations in 2026",
  keywords: [
    "Rashed Azizi",
    "portfolio",
    "full stack developer",
    "creative developer",
    "Next.js portfolio",
    "developer designer",
    "South Korea developer",
  ],
};

export const heroMetrics = [
  {
    value: "01+",
    label: "Years focused on shipping projects",
    helper: "Replace with your exact experience later.",
  },
  {
    value: "08+",
    label: "Projects explored and built",
    helper: "Personal, academic, and team-based work.",
  },
  {
    value: "03",
    label: "Collaborative teams and hackathons",
    helper: "A simple placeholder metric you can refine.",
  },
];

export const aboutContent = {
  eyebrow: "About Me",
  heading: "A resilient builder with a product mindset and a love for thoughtful interfaces.",
  story: [
    "I am a software-focused developer based in South Korea, driven by curiosity around web platforms, AI, and systems that solve real-world problems.",
    "My journey has been shaped by adaptation, continuous learning, and the ability to move between logic and aesthetics. I enjoy building tools that are useful, approachable, and visually memorable.",
    "Whether I am working independently or with a team, I care about clean implementation, intentional motion, and experiences that feel refined from the first interaction.",
  ],
  journey:
    "From foundational C projects to modern web interfaces and AI-assisted product ideas, I am steadily turning technical growth into work that feels both practical and premium.",
};

export const skillBars = [
  { name: "Frontend Engineering", level: 90 },
  { name: "UI Motion & Interaction", level: 84 },
  { name: "Backend & APIs", level: 78 },
  { name: "Problem Solving", level: 88 },
];

export const techStack = [
  { key: "html", name: "HTML", color: "#f97316" },
  { key: "css", name: "CSS", color: "#38bdf8" },
  { key: "javascript", name: "JavaScript", color: "#facc15" },
  { key: "react", name: "React", color: "#61dafb" },
  { key: "nextjs", name: "Next.js", color: "#f8fafc" },
  { key: "nodejs", name: "Node.js", color: "#22c55e" },
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
    accent: "from-cyan-500/40 via-blue-500/25 to-transparent",
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
    accent: "from-violet-500/40 via-fuchsia-500/25 to-transparent",
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
    accent: "from-sky-500/35 via-indigo-500/25 to-transparent",
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
    company: "Independent Builder",
    role: "Developer & Portfolio Designer",
    period: "2024 - Present",
    summary:
      "Developing portfolio work, UI experiments, and foundational software projects while improving design sensitivity alongside engineering skills.",
    achievements: [
      "Built increasingly polished developer-facing interfaces with modern frontend tooling.",
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

export const certifications = [
  {
    title: "Hackathon Completion Certificate",
    issuer: "Chungbuk Pro Maker Center",
    year: "2025",
    note: "Issued for participating in the Together Korea hackathon project.",
    image: "/certificates/chungbuk-hackathon-completion.jpg",
  },
  {
    title: "2nd Place Award Certificate",
    issuer: "Chungbuk Pro Maker Center",
    year: "2025",
    note: "Awarded to Team Together Korea for placing second in the competition.",
    image: "/certificates/chungbuk-hackathon-second-place.jpg",
  },
  {
    title: "High School Diploma",
    issuer: "Osong High School",
    year: "Add Year",
    note: "Replace this entry with the actual scanned diploma once ready.",
    image: "",
  },
];

export const contactHighlights = [
  "Open to internships, junior developer roles, and collaborative builds.",
  "Happy to discuss product ideas, portfolio work, and web experiences.",
  "Response workflows are intentionally simple so this site can stay static-friendly.",
];
