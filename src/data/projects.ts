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
    description: "Mon portfolio personnel, une vitrine performante développée avec Astro, avec des animations fluides et un design système moderne.",
    image: "/images/gallery-project/portfolio/im1.png",
    category: "Portfolio",
    technologies: ["Astro", "GSAP", "Tailwind", "CSS"],
    github: "https://github.com/AndrixNg1/andrixng1-portfolio",
    featured: true,
    role: "Lead Developer / Designer",
    challenge: "Créer un portfolio qui prouve mes compétences techniques par sa performance (60fps, SEO parfait) plutôt que par de simples listes de compétences.",
    solution: "Utilisation d'Astro pour un rendu statique ultra-rapide (Zero-JS par défaut), combiné à Tailwind CSS pour le style et GSAP pour des animations ciblées.",
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
    description: "Un outil CLI pour tester la charge des APIs en local, permettant de simuler un fort trafic GET et d'observer la latence et les erreurs.",
    image: "/images/gallery-project/3.jpg",
    category: "Performance Tool",
    technologies: ["Node.js", "CLI", "Performance"],
    github: "https://github.com/AndrixNg1/Loopback-Load-Tester",
    role: "Backend Developer",
    challenge: "Besoin de tester les limites d'une API locale sans dépendre d'outils externes lourds ni risquer de déclencher des pare-feux réseaux.",
    solution: "Création d'un outil CLI en Node.js ciblant uniquement l'adresse de bouclage (127.0.0.1). Il fournit des métriques précises sur la latence et le débit de requêtes."
  },
  {
    title: "TJA Logistics",
    description: "Plateforme logistique d'entreprise conçue pour optimiser les opérations de transport avec une interface utilisateur premium et performante.",
    image: "/images/gallery-project/tjal.png",
    category: "Enterprise Web",
    technologies: ["Next.js", "React", "Framer Motion"],
    link: "https://www.tja-logistics.com/",
    role: "Full-Stack Developer",
    challenge: "Digitaliser et simplifier la gestion des opérations logistiques d'une entreprise via une interface moderne, intuitive et réactive.",
    solution: "Développement d'une application robuste avec Next.js et React, en intégrant Framer Motion pour fluidifier l'expérience utilisateur des gestionnaires."
  },
  {
    title: "GRK Prosperity",
    description: "Site vitrine premium pour un cabinet d'expertise comptable, d'audit et de conseil stratégique basé en RDC, intégrant un mode sombre élégant.",
    image: "/images/gallery-project/grk.png",
    category: "Corporate Website",
    technologies: ["Astro", "Tailwind", "GSAP"],
    link: "https://www.grkprosperity.net/",
    role: "Front-End Developer",
    challenge: "Transmettre l'image de prestige et de rigueur d'un cabinet de conseil financier à travers une identité numérique moderne et haut de gamme.",
    solution: "Conception d'une interface sur-mesure avec Astro, stylisation approfondie via Tailwind CSS et implémentation d'animations d'apparition ciblées avec GSAP."
  },
  {
    title: "API Mail",
    description: "Microservice léger en PHP permettant l'envoi d'emails transactionnels depuis des formulaires web de manière simple et sécurisée.",
    image: "/images/gallery-project/2.jpg",
    category: "API Service",
    technologies: ["PHP 8.x", "PHPMailer", "CORS", "Security"],
    github: "https://github.com/AndrixNg1/api-mail",
    role: "Backend Developer",
    challenge: "Fournir un moyen simple et sécurisé d'envoyer des formulaires de contact depuis des sites web statiques sans exposer les identifiants SMTP.",
    solution: "Développement d'une API autonome en PHP 8 utilisant PHPMailer, incluant la validation stricte des entrées et une gestion CORS configurable."
  }
];
