/* =========================================================
   DyangoTech — script.js
   JS vanilla, sin dependencias:
   1. Acordeón del FAQ
   2. Estado del header al hacer scroll
   3. Animación de aparición al hacer scroll (reveal)
   4. Año dinámico del footer
   ========================================================= */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. Acordeón del FAQ ---------- */
  var questions = Array.prototype.slice.call(document.querySelectorAll(".faq-q"));

  function closeAll() {
    questions.forEach(function (q) {
      q.setAttribute("aria-expanded", "false");
      if (q.nextElementSibling) q.nextElementSibling.style.maxHeight = null;
    });
  }

  questions.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var wasOpen = btn.getAttribute("aria-expanded") === "true";
      closeAll();
      if (!wasOpen) {
        btn.setAttribute("aria-expanded", "true");
        var panel = btn.nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  // Reajusta la altura del panel abierto si cambia el ancho de la ventana
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      var open = document.querySelector('.faq-q[aria-expanded="true"]');
      if (open && open.nextElementSibling) {
        open.nextElementSibling.style.maxHeight = open.nextElementSibling.scrollHeight + "px";
      }
    }, 150);
  });

  /* ---------- 2. Header con borde al hacer scroll ---------- */
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- 3. Reveal al entrar en pantalla ---------- */
  if (!reduceMotion && "IntersectionObserver" in window) {
    // Elementos que aparecen progresivamente
    var targets = document.querySelectorAll(
      ".section-eyebrow, .section-title, .section-lead, .section-foot, " +
      ".card, .step, .offer-card, .why-text, .why-points li, .final-card"
    );

    Array.prototype.forEach.call(targets, function (el) {
      el.classList.add("reveal");
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        // Escalona los elementos hermanos para un efecto en cascada
        var siblings = Array.prototype.slice.call(entry.target.parentNode.children);
        var index = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = Math.min(index, 4) * 70 + "ms";
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

    Array.prototype.forEach.call(targets, function (el) {
      observer.observe(el);
    });
  }

  /* ---------- 4. Año dinámico del footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
