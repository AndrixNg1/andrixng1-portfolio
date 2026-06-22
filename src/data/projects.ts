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
}

export const projects: Project[] = [
  {
    title: "AndrixNg1 Portfolio",
    description: "My personal developer portfolio, a premium high-performance showcase engineered with Astro, motion design principles and a polished visual system.",
    image: "/images/gallery-project/portfolio/im1.png",
    category: "Portfolio",
    technologies: ["Astro", "GSAP", "Tailwind", "CSS"],
    github: "https://github.com/AndrixNg1/andrixng1-portfolio",
    featured: true,
    challenge: "Creating a portfolio that doesn't just list skills, but proves them through its own performance and execution. The challenge was balancing heavy UI animations with 60fps performance and perfect Lighthouse scores.",
    solution: "I built a custom architecture using Astro for static generation, zero-JS by default, and selectively hydrating GSAP animations. The design system uses fluid typography and CSS variables for seamless dark/light modes.",
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
    description: "A localhost-only load testing tool that sends bounded high-volume GET traffic to an API so latency, throughput and error rates can be observed under pressure.",
    image: "/images/gallery-project/3.jpg",
    category: "Performance Tool",
    technologies: ["Node.js", "CLI", "Performance"],
    github: "https://github.com/AndrixNg1/Loopback-Load-Tester",
    challenge: "Observing how a local API degrades under pressure without relying on external internet-based load testers or complex distributed tools. I needed a simple, isolated tool to test localhost limits safely without triggering network firewalls or performing unintended DDoS attacks.",
    solution: "Built a specialized Node.js CLI tool that intentionally restricts targeting to loopback addresses (127.0.0.1, ::1). It features simple .env configuration, preflight health checks, and outputs detailed metrics (percentiles, throughput, error counts) to help isolate hotspots in local dockerized APIs."
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
    technologies: ["PHP 8.x", "PHPMailer", "CORS", "Security"],
    github: "https://github.com/AndrixNg1/api-mail",
    challenge: "Static sites and portfolios often need a reliable way to send contact form data without exposing SMTP credentials or setting up heavy backend frameworks, while remaining secure against spam and unauthorized cross-origin requests.",
    solution: "Developed a secure, agnostic PHP 8 microservice utilizing PHPMailer. It acts as a bridge, accepting JSON payloads via a POST endpoint. It features strict input validation, environment variable protection (.env), and configurable CORS to accept requests only from authorized domains."
  }
];
