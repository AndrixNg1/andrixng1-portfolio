export interface ExperienceItem {
  title: string;
  role: string;
  period: string;
  description: string;
  type: 'Work' | 'Education' | 'Milestone';
}

export const experience: ExperienceItem[] = [
  {
    title: "Développeur Full-Stack",
    role: "Freelance",
    period: "2024 - Aujourd'hui",
    description: "Conception et développement d'applications web modernes, avec une attention forte sur l'architecture, la performance et les interfaces responsives.",
    type: "Work"
  },
  {
    title: "Projet Alerte Santé",
    role: "Développeur principal",
    period: "2023 - 2024",
    description: "Développement d'une plateforme de suivi santé avec Next.js et Prisma, depuis le prototype jusqu'à une application plus complète.",
    type: "Work"
  },
  {
    title: "Maîtrise du développement web",
    role: "Formation continue",
    period: "2021 - 2023",
    description: "Approfondissement de React, Astro, Node.js, PHP, CSS avancé et des bonnes pratiques de développement produit.",
    type: "Education"
  },
  {
    title: "Premières lignes de code",
    role: "Début du parcours",
    period: "2019",
    description: "Découverte de la programmation avec HTML, CSS et PHP, base d'un parcours orienté ingénierie logicielle.",
    type: "Milestone"
  }
];
