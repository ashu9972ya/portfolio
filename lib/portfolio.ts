export const profile = {
  name: "Ashutosh Yadav",
  firstName: "Ashutosh",
  role: "Frontend Engineer",
  email: "ashu9972ya@gmail.com",
  phone: "+91 7355596996",
  phoneHref: "tel:+917355596996",
  location: "Pratapgarh, Uttar Pradesh, India",
  github: "https://github.com/ashu9972ya",
  linkedin: "https://www.linkedin.com/in/ashu59/",
  resume: "/Ashutosh_Yadav_Frontend_Engineer_Resume.pdf",
  introduction:
    "Frontend Engineer with 3 years of professional experience building production insurance and enterprise web applications with React.js, Next.js, and TypeScript.",
  skillGroups: [
    {
      name: "Core frontend",
      items: ["JavaScript", "TypeScript", "React.js", "Next.js"],
    },
    { name: "UI & styling", items: ["HTML", "CSS", "SCSS", "Tailwind CSS"] },
    {
      name: "State & data",
      items: ["Redux", "Zustand", "TanStack Query", "REST APIs"],
    },
    {
      name: "Architecture & CMS",
      items: [
        "Microfrontends",
        "Turborepo",
        "Reusable components",
        "Strapi CMS",
      ],
    },
    {
      name: "Performance & SEO",
      items: [
        "SSR & SSG",
        "Code splitting",
        "Lazy loading",
        "Memoization",
        "List virtualization",
        "Technical SEO",
        "Core Web Vitals",
      ],
    },
    { name: "Developer tools", items: ["Git", "Jest"] },
  ],
  learning:
    "Expanding into backend engineering: Node.js and Express.js exposure; learning NestJS, PostgreSQL, Redis, and Prisma. Docker and CI/CD fundamentals.",
  experience: [
    {
      company: "Evervent Pvt. Ltd.",
      role: "Frontend Engineer",
      period: "Dec 2024 – Present",
      contributions: [
        "Implemented Pre-Quote, Quote, and Proposal steps in React and Next.js, integrating REST APIs across insurance purchase journeys.",
        "Maintained Policy Management and Customer Dashboard features on a production insurance platform.",
        "Built reusable TypeScript components and utilities for microfrontends in a Turborepo monorepo; integrated Strapi CMS with Next.js product pages.",
      ],
    },
    {
      company: "Zestgeek Solutions",
      role: "Associate Developer-Front End",
      period: "Nov 2023 – Nov 2024",
      contributions: [
        "Built responsive client applications with React.js, Next.js, JavaScript, and TypeScript.",
        "Improved frontend performance through code splitting, lazy loading, memoization, and asset optimization.",
      ],
    },
  ],
  education: {
    school: "Lovely Professional University",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Aug 2017 – Nov 2021",
  },
  languages: ["English", "Hindi"],
} as const;

export type ProjectCategory = "Professional" | "Independent" | "Earlier work";
export type Project = {
  id: string;
  name: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  image?: string;
  imageAlt?: string;
  role?: string;
  problem?: string;
  contributions?: readonly string[];
  considerations?: string;
  href: string;
  tags: readonly string[];
  color: string;
};

export const projects: readonly Project[] = [
  {
    id: "jioinsure",
    name: "JioInsure",
    category: "Professional",
    color: "mint",
    summary: "Frontend engineering for insurance journeys",
    description:
      "My contributions span insurance purchase flows, CMS-driven interfaces, technical SEO, and responsive large-directory experiences.",
    href: "https://jioinsure.in",
    role: "Frontend engineering contribution within the product team",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "Strapi CMS",
      "REST APIs",
      "Turborepo",
    ],
    problem:
      "Support multi-step insurance purchase journeys and content-driven product pages while keeping complex customer interfaces maintainable and responsive.",
    contributions: [
      "Implemented Pre-Quote, Quote, and Proposal interfaces and integrated REST APIs across the insurance purchase flow.",
      "Built reusable TypeScript UI components and utilities for insurance microfrontends in a Turborepo monorepo.",
      "Mapped Strapi dynamic zones to reusable React components for plan cards, tables, and FAQs.",
      "Configured product-page SEO metadata, canonical URLs, and structured data, with noindex handling on draft previews.",
      "Used code splitting and lazy loading to reduce initial JavaScript, with debounced search and virtualization for large hospital and garage directories.",
    ],
    considerations:
      "My work formed part of a team-built insurance platform, with responsibilities focused on the frontend implementation.",
  },
  {
    id: "bimastreet",
    name: "Bimastreet",
    category: "Professional",
    color: "sand",
    summary: "Maintainable production insurance interfaces",
    description:
      "Contributed React and Next.js features, addressed frontend security audit findings, and refactored components and TypeScript modules.",
    href: "https://bimastreet.com",
    role: "Frontend engineering contribution within the product team",
    tags: ["React.js", "Next.js", "TypeScript"],
    problem:
      "Maintain and evolve a production digital insurance frontend while addressing code quality and security audit requirements.",
    contributions: [
      "Developed and maintained React and Next.js features for a production digital insurance platform.",
      "Addressed frontend security audit findings by implementing the recommended fixes.",
      "Refactored existing React components and TypeScript modules to improve maintainability.",
    ],
    considerations:
      "My contribution covered the recommended frontend fixes and maintainability work within the product team.",
  },
  {
    id: "vidyapulse",
    name: "VidyaPulse",
    category: "Independent",
    color: "mint",
    summary: "An independent education application",
    description:
      "Built role-based dashboards, teacher data management, ID card generation, Excel exports, and photo/signature uploads.",
    href: "https://information-collection-nine.vercel.app/",
    role: "Independent application developer",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "NextAuth",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    problem:
      "Bring teacher records and related administrative tasks into an application with role-based and organization-based access.",
    contributions: [
      "Implemented role-based dashboards and organization-based access.",
      "Built teacher data management with photo and signature uploads.",
      "Implemented ID card generation and Excel exports.",
    ],
    considerations:
      "An independent application combining teacher record management, organization-based access, and document generation.",
  },
  {
    id: "copyin2clicks",
    name: "CopyIn2Clicks",
    category: "Earlier work",
    summary: "Less copying. More doing.",
    description:
      "A copy-and-paste browser extension with a companion web application, built to make managing text across websites simpler.",
    image: "/work/1.png",
    imageAlt: "CopyIn2Clicks homepage and clipboard extension interface",
    href: "https://www.copyin2clicks.com/",
    tags: ["Next.js", "Browser extension", "Web application"],
    color: "mint",
  },
  {
    id: "project-landscape",
    name: "Project Landscape",
    category: "Earlier work",
    summary: "A better view of outdoor living.",
    description:
      "A landscaping website built and optimized with Next.js, using server-side rendering and incremental static regeneration.",
    image: "/work/2.png",
    imageAlt:
      "Project Landscape website featuring a residential garden and landscaping services",
    href: "https://www.projectlandscape.ca/",
    tags: ["Next.js", "Server-side rendering", "ISR"],
    color: "sand",
  },
];

export const featuredProjects = projects.filter(
  (project) => project.category !== "Earlier work",
);
