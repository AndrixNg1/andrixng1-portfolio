import { gsap } from 'gsap';

export function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      
      gsap.fromTo(themeToggle, { rotation: isDark ? 0 : 45 }, { rotation: isDark ? -45 : 0, duration: 0.5, ease: 'back.out(1.5)' });

      if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }
}
