// js/main.js
// ─────────────────────────────────────────
// 1) Scroll-Animation (your existing code)
// ─────────────────────────────────────────
const scrollItems = document.querySelectorAll('.animate-on-scroll');
const observer    = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.1 }
);

scrollItems.forEach(item => observer.observe(item));


// ─────────────────────────────────────────
// 2) Dark-Mode Toggle (paste this next)
// ─────────────────────────────────────────
// js/main.js

const toggleBtn   = document.getElementById('dark-mode-toggle');
const iconEl      = document.getElementById('theme-icon');
const rootEl      = document.documentElement;
const storageKey  = 'dark-mode-enabled';

// On load: apply saved theme and set icon
if (localStorage.getItem(storageKey) === 'true') {
  rootEl.classList.add('dark-mode');
  iconEl.textContent = '☀️';
}

// On click: toggle theme, persist, and swap icon
toggleBtn.addEventListener('click', () => {
  const isDark = rootEl.classList.toggle('dark-mode');
  localStorage.setItem(storageKey, isDark);
  iconEl.textContent = isDark ? '☀️' : '🌙';
});
