export type ProjectStatus =
  | "Research Project · Completed"
  | "Functional MVP · Active Development"
  | "System Design · Pre-Implementation"
  | "Product Architecture · Pre-Implementation"
  | "Built & Deployed";

export type Project = {
  slug: string;
  name: string;
  kicker: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  href: string;
  externalHref?: string;
};

export const projects: Project[] = [
  {
    slug: "academicgps",
    name: "AcademicGPS",
    kicker: "Intelligent Academic Planning & Decision Support",
    description:
      "A functional academic planning MVP that simulates GPA/CGPA outcomes, evaluates target feasibility, identifies risky courses, and turns academic calculations into explainable planning insights.",
    status: "Functional MVP · Active Development",
    tags: ["Next.js", "TypeScript", "Decision Systems", "Academic Analytics"],
    href: "/projects/academicgps",
  },
  {
    slug: "market-intelligence",
    name: "Market Intelligence System",
    kicker: "Location-Aware Intelligence for Small Retailers",
    description:
      "A designed decision-support system for small Dangote Cement retailers, combining trust-weighted local price observations, inventory data, statistical intelligence, and evidence-backed recommendations.",
    status: "System Design · Pre-Implementation",
    tags: ["Applied AI", "Market Intelligence", "Decision Support", "System Architecture"],
    href: "/projects/market-intelligence",
  },
  {
    slug: "portfoliai",
    name: "PortfoliAI",
    kicker: "AI-Powered Career Discovery & Portfolio Generation",
    description:
      "A planned multi-stage AI platform that transforms scattered career evidence into Career DNA, professional positioning, structured portfolio content, and publishable digital portfolios.",
    status: "Product Architecture · Pre-Implementation",
    tags: ["Generative AI", "LLM Systems", "Personalisation", "Product Architecture"],
    href: "/projects/portfoliai",
  },
  {
    slug: "techsphere",
    name: "TechSphere",
    kicker: "Full-Stack Technology Publishing Platform",
    description:
      "A full-stack publishing system with authentication, authorisation, content management, database persistence, rich-text editing, and external technology-news integration.",
    status: "Built & Deployed",
    tags: ["Node.js", "Express", "MongoDB", "EJS", "REST APIs"],
    href: "/projects/techsphere",
    externalHref: "https://techsphere-7fak.onrender.com",
  },
];
