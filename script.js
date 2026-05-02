const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

const header = document.querySelector('.site-header');
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.body.classList.toggle('scrolled', y > 24);
  if (header) header.style.transform = y > lastY && y > 240 ? 'translateY(-110%)' : 'translateY(0)';
  lastY = y;
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
