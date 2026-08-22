const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const setMenu = (isOpen) => {
  nav?.classList.toggle('open', isOpen);
  menuButton.classList.toggle('open', isOpen);
  header?.classList.toggle('menu-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
};

menuButton?.addEventListener('click', () => {
  const isOpen = !nav.classList.contains('open');
  setMenu(isOpen);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) {
    setMenu(false);
    menuButton.focus();
  }
});

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=royettemiranda%40gmail.com&su=Portfolio%20inquiry';
document.querySelectorAll('a[href="mailto:royettemiranda@gmail.com"]').forEach((link) => {
  link.href = gmailComposeUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
} else {
  document.querySelectorAll('.reveal').forEach((node) => node.classList.add('visible'));
}
