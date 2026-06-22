const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

function initThemeToggle() {
  const toggle = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
  if (!toggle) return;

  const applyTheme = (theme: "dark" | "light") => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("andrix-theme", theme);
    toggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
    toggle.setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
  };

  const currentTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
  applyTheme(currentTheme);

  toggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    applyTheme(nextTheme);
  });
}

function initPresentationScroll() {
  const section = document.querySelector<HTMLElement>("[data-presentation-scroll]");
  if (!section) return;

  const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-presentation-card]"));
  const copies = Array.from(document.querySelectorAll<HTMLElement>("[data-presentation-copy]"));
  const dots = Array.from(document.querySelectorAll<HTMLElement>("[data-presentation-dot]"));
  if (!cards.length || !copies.length) return;

  const update = () => {
    const viewportMiddle = window.innerHeight * 0.5;
    let activeIndex = 0;
    let activeDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const distance = Math.abs(rect.top + rect.height * 0.5 - viewportMiddle);
      if (distance < activeDistance) {
        activeDistance = distance;
        activeIndex = index;
      }
    });

    copies.forEach((copy, index) => {
      copy.classList.toggle("is-active", index === activeIndex);
      copy.setAttribute("aria-hidden", index === activeIndex ? "false" : "true");
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === activeIndex);
    });
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initDemoHorizontal() {
  const section = document.querySelector<HTMLElement>("[data-demo-horizontal]");
  const track = document.querySelector<HTMLElement>("[data-demo-horizontal-track]");
  if (!section || !track) return;

  const update = () => {
    if (window.matchMedia("(max-width: 960px)").matches) {
      track.style.transform = "";
      return;
    }

    const rect = section.getBoundingClientRect();
    const scrollable = section.offsetHeight - window.innerHeight;
    const maxTranslate = track.scrollWidth - window.innerWidth;
    if (scrollable <= 0 || maxTranslate <= 0) return;

    const progress = clamp(-rect.top / scrollable, 0, 1);
    track.style.transform = `translate3d(${-maxTranslate * progress}px, 0, 0)`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

initThemeToggle();
initPresentationScroll();
initDemoHorizontal();
