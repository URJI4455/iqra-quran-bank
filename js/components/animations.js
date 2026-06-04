/* ============================================================
   ANIMATIONS — Scroll reveal & counter animation
   ============================================================ */

(function () {
  "use strict";

  // ── Scroll Reveal ────────────────────────────────────────
  const revealEls = document.querySelectorAll(".fade-in-up, .fade-in");

  if (revealEls.length) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  // ── Counter Animation ────────────────────────────────────
  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function animateCounter(el, target, duration) {
    const start     = performance.now();
    const isDecimal = target % 1 !== 0;

    function update(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = easeOutQuart(progress);
      const current  = eased * target;

      el.textContent = isDecimal
        ? current.toFixed(1)
        : Math.floor(current).toLocaleString();

      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target.toLocaleString();
    }

    requestAnimationFrame(update);
  }

  const counterEls = document.querySelectorAll("[data-counter]");

  if (counterEls.length) {
    const counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const el     = entry.target;
            const target = parseFloat(el.dataset.counter);
            const dur    = parseInt(el.dataset.duration || "2000", 10);
            animateCounter(el, target, dur);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );

    counterEls.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  // ── Progress Bar Animation ────────────────────────────────
  const progressBars = document.querySelectorAll(".project-progress__fill[data-progress]");

  if (progressBars.length) {
    const progressObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const el = entry.target;
            setTimeout(function () {
              el.style.width = el.dataset.progress + "%";
            }, 200);
            progressObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    progressBars.forEach(function (bar) {
      progressObserver.observe(bar);
    });
  }

})();
