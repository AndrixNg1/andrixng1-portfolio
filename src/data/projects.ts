export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  link?: string;
  github?: string;
  featured?: boolean;
  gallery?: string[];
  challenge?: string;
  solution?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    title: "AndrixNg1 Portfolio",
    description: "My personal developer portfolio, a high-performance showcase built with Astro, featuring fluid animations and a modern design system.",
    image: "/images/gallery-project/portfolio/im1.png",
    category: "Portfolio",
    technologies: ["Astro", "GSAP", "Tailwind", "CSS"],
    github: "https://github.com/AndrixNg1/andrixng1-portfolio",
    featured: true,
    role: "Lead Developer / Designer",
    challenge: "Building a portfolio that proves technical skills through real performance (60fps, perfect SEO) rather than just listing them.",
    solution: "Using Astro for ultra-fast static rendering (Zero-JS by default), combined with Tailwind CSS for styling and GSAP for targeted animations.",
    gallery: [
      "/images/gallery-project/portfolio/im1.png",
      "/images/gallery-project/portfolio/image copy.png",
      "/images/gallery-project/portfolio/image.png",
      "/images/gallery-project/portfolio/image copy 2.png",
      "/images/gallery-project/portfolio/image copy 3.png",
      "/images/gallery-project/portfolio/image copy 4.png",
      "/images/gallery-project/portfolio/image copy 5.png",
      "/images/gallery-project/portfolio/image copy 6.png"
    ]
  },
  {
    title: "Loopback Load Tester",
    description: "A CLI tool for local API load testing, simulating high-volume GET traffic to observe latency and error rates.",
    image: "/images/gallery-project/3.jpg",
    category: "Performance Tool",
    technologies: ["Node.js", "CLI", "Performance"],
    github: "https://github.com/AndrixNg1/Loopback-Load-Tester",
    role: "Backend Developer",
    challenge: "Testing local API limits without relying on heavy external tools or risking triggering network firewalls.",
    solution: "Created a Node.js CLI tool targeting only the loopback address (127.0.0.1). It provides accurate metrics on latency and request throughput."
  },
  /*{
    title: "TJA Logistics",
    description: "Enterprise logistics platform designed to optimize transport operations with a premium, high-performance user interface.",
    image: "/images/gallery-project/tjal.png",
    category: "Enterprise Web",
    technologies: ["Next.js", "React", "Framer Motion"],
    link: "https://www.tja-logistics.com/",
    role: "Full-Stack Developer",
    challenge: "Digitalizing and streamlining enterprise logistics operations through a modern, intuitive, and responsive interface.",
    solution: "Developed a robust application using Next.js and React, integrating Framer Motion to smooth the user experience for managers."
  },
  {
    title: "GRK Prosperity",
    description: "Premium showcase website for an accounting, audit, and strategic consulting firm based in the DRC, featuring an elegant dark mode.",
    image: "/images/gallery-project/grk.png",
    category: "Corporate Website",
    technologies: ["Astro", "Tailwind", "GSAP"],
    link: "https://www.grkprosperity.net/",
    role: "Front-End Developer",
    challenge: "Conveying the prestigious and rigorous image of a financial consulting firm through a modern, high-end digital identity.",
    solution: "Designed a custom interface with Astro, deep styling via Tailwind CSS, and targeted entrance animations with GSAP."
  },*/
  {
    title: "API Mail",
    description: "Lightweight PHP microservice for sending transactional emails from web forms simply and securely.",
    image: "/images/gallery-project/2.jpg",
    category: "API Service",
    technologies: ["PHP 8.x", "PHPMailer", "CORS", "Security"],
    github: "https://github.com/AndrixNg1/api-mail",
    role: "Backend Developer",
    challenge: "Providing a simple and secure way to send contact forms from static websites without exposing SMTP credentials.",
    solution: "Developed a standalone API in PHP 8 using PHPMailer, featuring strict input validation and configurable CORS management."
  }
];
