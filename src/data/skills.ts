export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools / Deployment';
  icon: string;
}

export const skills: Skill[] = [
  { name: "React", category: "Frontend", icon: "devicon-react-original colored" },
  { name: "Next.js", category: "Frontend", icon: "devicon-nextjs-plain" },
  { name: "Vue.js", category: "Frontend", icon: "devicon-vuejs-plain colored" },
  { name: "Nuxt.js", category: "Frontend", icon: "devicon-nuxtjs-plain colored" },
  { name: "Astro", category: "Frontend", icon: "devicon-astro-plain" },
  { name: "Expo", category: "Frontend", icon: "devicon-react-original colored" },
  { name: "HTML", category: "Frontend", icon: "devicon-html5-plain colored" },
  { name: "CSS", category: "Frontend", icon: "devicon-css3-plain colored" },
  { name: "Tailwind CSS", category: "Frontend", icon: "devicon-tailwindcss-original colored" },
  { name: "GSAP", category: "Frontend", icon: "devicon-gsap-plain" },
  { name: "Framer Motion", category: "Frontend", icon: "devicon-framermotion-original" },
  { name: "Node.js", category: "Backend", icon: "devicon-nodejs-plain colored" },
  { name: "Express", category: "Backend", icon: "devicon-express-original" },
  { name: "NestJS", category: "Backend", icon: "devicon-nestjs-original colored" },
  { name: "Laravel", category: "Backend", icon: "devicon-laravel-original colored" },
  { name: "PHP", category: "Backend", icon: "devicon-php-plain colored" },
  { name: "PostgreSQL", category: "Database", icon: "devicon-postgresql-plain colored" },
  { name: "MongoDB", category: "Database", icon: "devicon-mongodb-plain colored" },
  { name: "Redis", category: "Database", icon: "devicon-redis-plain colored" },
  { name: "Prisma", category: "Database", icon: "devicon-prisma-original" },
  { name: "Docker", category: "Tools / Deployment", icon: "devicon-docker-plain colored" },
  { name: "Git", category: "Tools / Deployment", icon: "devicon-git-plain colored" },
  { name: "GitHub", category: "Tools / Deployment", icon: "devicon-github-original" },
  { name: "AWS", category: "Tools / Deployment", icon: "devicon-amazonwebservices-plain-wordmark colored" },
  { name: "Cloudflare", category: "Tools / Deployment", icon: "devicon-cloudflare-plain colored" },
  { name: "Vercel", category: "Tools / Deployment", icon: "devicon-vercel-original" },
  { name: "Render", category: "Tools / Deployment", icon: "devicon-render-plain" },
  { name: "Figma", category: "Tools / Deployment", icon: "devicon-figma-plain colored" },
];
