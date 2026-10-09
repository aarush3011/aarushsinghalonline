import linktreeImg from "@/assets/project-linktree.jpg";
import cricketImg from "@/assets/project-cricket.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";
import heroImg from "@/assets/hero-backdrop.jpg";
import profileImg from "@/assets/aarush-new-profile.jpg";
import streetImg from "@/assets/photo-street.jpg";
import archImg from "@/assets/photo-architecture.jpg";

export const profile = {
  name: "Aarush Singhal",
  roles: ["Software Engineer", "Frontend Developer", "Photographer"],
  tagline:
    "Building digital experiences, experimenting with technology, and capturing stories through code and photography.",
  location: "Delhi, India",
  email: "aarush.singhal001@gmail.com",
  phone: "+91 9799668600",
  github: "https://github.com/aarush3011",
  linkedin: "https://www.linkedin.com/in/aarush-singhal",
  instagram: "https://instagram.com/crushedaayu",
  resume: "/resume.pdf",
  heroImage: heroImg,
  avatar: profileImg,
  interests: ["Coding", "Photography", "Video Editing", "Gaming", "Football", "Technology"],
};

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  role: string[];
  technologies: string[];
  thumbnail: string;
  github?: string;
  liveDemo?: string;
  download?: string;
  features: string[];
  contribution: string;
  status: string;
  progress?: number;
}

export const projects: Project[] = [
  {
    id: "graphura-linktree",
    title: "Graphura Linktree SaaS",
    description:
      "A custom link-in-bio platform built for Graphura India Pvt. Ltd. — a fast, responsive hub that centralises a brand's social profiles, campaigns and contact channels.",
    category: "SaaS",
    year: "2026",
    role: ["Frontend Developer", "Project Head"],
    technologies: ["React", "JavaScript", "Tailwind CSS", "MongoDB", "APIs", "Git"],
    thumbnail: linktreeImg,
    features: [
      "Authentication",
      "Profile creation",
      "Link management",
      "Profile customization",
      "Themes",
      "Dashboard",
      "Responsive design",
    ],
    contribution:
      "Led the project and built the frontend — translating designs into responsive, mobile-first React interfaces and coordinating the team through delivery.",
    status: "In progress",
    progress: 70,
  },
  {
    id: "fantasy-cricket",
    title: "Fantasy Cricket Game",
    description:
      "A Python-based fantasy cricket game built during Internshala Summer Training, with player selection, match simulation and a scoring system.",
    category: "Game",
    year: "2025",
    role: ["Developer"],
    technologies: ["Python", "OOP", "SQLite", "Data Structures"],
    thumbnail: cricketImg,
    github: "https://github.com/aarush3011/Fantasy-Cricket",
    download: "https://github.com/aarush3011/Fantasy-Cricket/archive/refs/heads/main.zip",
    features: ["Player selection system", "Match simulation engine", "Scoring", "Tournament management"],
    contribution: "Designed and built the full application — game logic, data handling and scoring.",
    status: "Completed",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "This site — a streaming-inspired portfolio presenting my work, experience and photography as something you can watch.",
    category: "Web",
    year: "2026",
    role: ["Designer", "Frontend Developer"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    thumbnail: portfolioImg,
    liveDemo: "https://aarushsinghal.lovable.app/",
    features: ["Profile selection", "Search", "My List", "Project detail views", "Photo lightbox"],
    contribution: "Designed and built end to end.",
    status: "Live",
    progress: 90,
  },
];

export interface Role {
  id: string;
  season: string;
  company: string;
  titles: string[];
  period: string;
  location: string;
  summary: string;
  points: string[];
  skills: string[];
}

export const experience: Role[] = [
  {
    id: "graphura",
    season: "Season 02",
    company: "Graphura India Pvt. Ltd.",
    titles: ["Frontend Developer", "Project Head — Graphura Linktree SaaS"],
    period: "May 2026 – August 2026",
    location: "Remote",
    summary: "Led and built the Graphura Linktree SaaS platform.",
    points: [
      "Developed responsive interfaces for the Linktree platform",
      "Translated design mockups into mobile-first layouts",
      "Coordinated the project team as Project Head",
    ],
    skills: ["React", "Tailwind CSS", "JavaScript", "MongoDB", "Git"],
  },
  {
    id: "inamigos",
    season: "Season 01",
    company: "InAmigos Foundation",
    titles: ["Virtual Volunteer", "Social Media Manager", "Frontend Developer"],
    period: "July 2025",
    location: "Remote",
    summary: "Digital communications and social media for a non-profit focused on community development.",
    points: [
      "Planned and executed social media strategy across platforms",
      "Created content to grow awareness and engagement",
      "Supported digital communication systems",
    ],
    skills: ["Social Media Strategy", "Content Creation", "Frontend"],
  },
];

export const education = [
  {
    id: "ggsipu",
    institution: "Guru Gobind Singh Indraprastha University",
    degree: "BCA — Computer Applications",
    period: "2024 – 2028",
    status: "Third-Year BCA Student",
  },
  {
    id: "bansal",
    institution: "Bansal Public School",
    degree: "Senior Secondary (Class XII)",
    period: "Completed 2024",
    status: "Completed",
  },
];

export const skills: { category: string; items: { name: string; note: string }[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", note: "Semantic, accessible markup" },
      { name: "CSS", note: "Layouts, animation, responsive design" },
      { name: "JavaScript", note: "DOM, async, modern ES" },
      { name: "React", note: "Components, hooks, routing" },
      { name: "Bootstrap", note: "Rapid responsive layouts" },
      { name: "Tailwind CSS", note: "Utility-first design systems" },
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "C", note: "Fundamentals and memory" },
      { name: "Python", note: "Scripting, OOP, small apps" },
      { name: "Java", note: "OOP basics" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "SQL", note: "Queries and joins" },
      { name: "PL/SQL", note: "Procedures and blocks" },
      { name: "MySQL", note: "Relational databases" },
      { name: "SQLite", note: "Lightweight local storage" },
      { name: "MongoDB", note: "Document databases" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", note: "Version control" },
      { name: "GitHub", note: "Collaboration and hosting" },
      { name: "VS Code", note: "Daily editor" },
      { name: "Vite", note: "Fast frontend tooling" },
    ],
  },
  {
    category: "Data / Other",
    items: [
      { name: "Power BI", note: "Reports and dashboards" },
      { name: "Data Modeling", note: "Structuring data for reporting" },
      { name: "Data Visualization", note: "Telling stories with charts" },
      { name: "Photography", note: "Street, architecture, light" },
      { name: "Video Editing", note: "Cuts, pacing, colour" },
    ],
  },
];

export const photos = [
  { id: "street-1", title: "Rain Lines", category: "Street", src: streetImg, placeholder: true },
  { id: "arch-1", title: "Golden Arches", category: "Architecture", src: archImg, placeholder: true },
  { id: "portrait-1", title: "Self Portrait", category: "Portraits", src: profileImg, placeholder: false },
];

export const certificates = [
  { id: "be10x", title: "AI Tools Workshop", org: "be10x", description: "Hands-on workshop on using AI tools productively.", url: "" },
  { id: "powerbi", title: "Power BI with Data Modeling and Advanced Reporting", org: "Certification", description: "Data modelling, DAX and report building in Power BI.", url: "" },
  { id: "devaarambh", title: "DevAarambh", org: "Developer bootcamp programme", description: "Developer bootcamp programme.", url: "" },
  { id: "aiforall", title: "AI For All", org: "Government of India initiative", description: "AI awareness programme.", url: "" },
  { id: "internship", title: "Internship Experience", org: "Graphura India Pvt. Ltd. · InAmigos Foundation", description: "Professional internship experience.", url: "" },
];
