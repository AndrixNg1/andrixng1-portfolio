import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initPageAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Initial load animations
  gsap.from('aside', {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.2
  });

  // Staggered reveal for sections on scroll
  const sections = gsap.utils.toArray('#content-sections > section');
  
  if (sections.length > 0) {
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out',
        clearProps: 'all'
      });
    });
  }
}
