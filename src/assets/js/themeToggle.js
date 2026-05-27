import { gsap } from 'gsap';

export function initThemeToggle() {
  const init = () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Apply saved theme on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    
    if (themeToggle) {
      // Remove old listeners to prevent duplicates if init is called twice
      const newToggle = themeToggle.cloneNode(true);
      themeToggle.parentNode.replaceChild(newToggle, themeToggle);
      
      newToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        
        gsap.fromTo(newToggle, { rotation: isDark ? 0 : 45 }, { rotation: isDark ? -45 : 0, duration: 0.5, ease: 'back.out(1.5)' });
  
        if (isDark) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
      });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}
