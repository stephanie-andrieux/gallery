/**
 * reveal.js — Gestion de l'apparition des éléments au défilement (IntersectionObserver)
 * 
 * - Observe les éléments ayant la classe .reveal (ou .reveal-on-scroll).
 * - Applique la classe .is-visible lors de leur entrée dans le viewport.
 * - Ne s'exécute qu'une seule fois par élément (unobserve).
 * - Sûreté : si IntersectionObserver est indisponible ou si prefers-reduced-motion
 *   est activé, aucune classe js-ready n'est ajoutée et les éléments restent
 *   immédiatement visibles.
 */
(function () {
  'use strict';

  // Vérification de la préférence pour réduire les mouvements
  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Si le navigateur ne gère pas IntersectionObserver ou si motion réduit est demandé : on quitte immédiatement
  if (!('IntersectionObserver' in window) || prefersReduced) {
    return;
  }

  // Active le masquage initial uniquement lorsque l'observateur est opérationnel
  document.documentElement.classList.add('js-ready');

  function initReveal() {
    var targets = document.querySelectorAll('.reveal, .reveal-on-scroll');
    if (!targets.length) return;

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible', 'visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px' // Déclenchement légèrement avant le bas d'écran
    });

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();
