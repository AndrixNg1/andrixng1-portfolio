export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "AndrixNg1 Portfolio",
    description: "My personal developer portfolio, a premium high-performance showcase engineered with Astro, motion design principles and a polished visual system.",
    image: "/images/gallery-project/im1.png",
    category: "Portfolio",
    technologies: ["Astro", "GSAP", "Tailwind"],
    github: "https://github.com/AndrixNg1/andrixng1-portfolio",
    featured: true
  },
  {
    title: "Loopback Load Tester",
    description: "A localhost-only load testing tool that sends bounded high-volume GET traffic to an API so latency, throughput and error rates can be observed under pressure.",
    image: "/images/gallery-project/3.jpg",
    category: "Performance Tool",
    technologies: ["Node.js", "CLI", "Performance"],
    github: "https://github.com/AndrixNg1/Loopback-Load-Tester"
  },
  {
    title: "TJA Logistics",
    description: "Enterprise logistics platform focused on performance, professional UI and clear transport operations for a logistics company.",
    image: "/images/gallery-project/tjal.png",
    category: "Enterprise Web",
    technologies: ["Next.js", "React", "Framer Motion"],
    link: "https://www.tja-logistics.com/"
  },
  {
    title: "GRK Prosperity",
    description: "A premium showcase platform for an accounting, audit and strategic consulting firm based in DRC, with dark mode, motion and high-end aesthetics.",
    image: "/images/gallery-project/grk.png",
    category: "Corporate Website",
    technologies: ["Astro", "Tailwind", "GSAP"],
    link: "https://www.grkprosperity.net/"
  },
  {
    title: "API Mail",
    description: "A lightweight API service for sending transactional emails programmatically with simple integration and a clean backend surface.",
    image: "/images/gallery-project/2.jpg",
    category: "API Service",
    technologies: ["Node.js", "Express", "Email"],
    github: "https://github.com/AndrixNg1/api-mail"
  }
];
