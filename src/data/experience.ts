export interface ExperienceItem {
  title: string;
  role: string;
  period: string;
  description: string;
  type: 'Work' | 'Education' | 'Milestone';
}

export const experience: ExperienceItem[] = [
  {
    title: "Full-Stack Developer",
    role: "Freelance",
    period: "2024 - Present",
    description: "Designing and developing modern web applications with a strong focus on architecture, performance, and responsive interfaces.",
    type: "Work"
  },
  {
    title: "Alerte Santé Project",
    role: "Lead Developer",
    period: "2023 - 2024",
    description: "Built a health monitoring platform with Next.js and Prisma, from prototype to a fully functional application.",
    type: "Work"
  },
  {
    title: "Web Development Mastery",
    role: "Continuous Learning",
    period: "2021 - 2023",
    description: "Deep-dived into React, Astro, Node.js, PHP, advanced CSS, and product development best practices.",
    type: "Education"
  },
  {
    title: "First Lines of Code",
    role: "Beginning of the Journey",
    period: "2019",
    description: "Discovered programming through HTML, CSS, and PHP — the foundation of a software engineering career.",
    type: "Milestone"
  }
];
