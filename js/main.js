/* ============================================
   UNDER BORDEAUX — Scripts
   ============================================ */

// ── Menu hamburger mobile ──
const hamburger = document.querySelector('.ub-hamburger');
const navLinks  = document.querySelector('.ub-nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '56px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = '#0f0f0f';
    navLinks.style.padding = '16px 20px';
    navLinks.style.borderBottom = '0.5px solid #2a2a2a';
    navLinks.style.gap = '16px';
  });
}

// ── Fermer le menu si on clique sur un lien ──
document.querySelectorAll('.ub-nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      navLinks.style.display = 'none';
    }
  });
});
