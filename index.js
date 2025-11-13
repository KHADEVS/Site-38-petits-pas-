document.addEventListener('DOMContentLoaded', function() {
  // Forcer le scroll en haut de la page au chargement
  window.scrollTo(0, 0);
  
  // Empêcher le navigateur de restaurer la position de scroll
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observer les sections
  const sections = document.querySelectorAll('.animate-on-scroll');
  sections.forEach(section => {
    observer.observe(section);
  });

  // Observer les cartes
  const cards = document.querySelectorAll('.animate-card');
  cards.forEach(card => {
    observer.observe(card);
  });
});

// Forcer le scroll en haut aussi avant le chargement complet
window.addEventListener('beforeunload', function() {
  window.scrollTo(0, 0);
});
