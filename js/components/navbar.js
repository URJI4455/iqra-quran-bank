/* ============================================================
   NAVBAR — Scroll behavior, hamburger menu, active link
   ============================================================ */

(function () {
  "use strict";

  const navbar   = document.getElementById("navbar");
  const toggle   = document.getElementById("navbarToggle");
  const menu     = document.getElementById("navbarMenu");
  const links    = document.querySelectorAll(".navbar__link:not(.navbar__link--cta)");

  if (!navbar) return;

  // ── Scroll handler ───────────────────────────────────────
  const SCROLL_THRESHOLD = 60;

  function onScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add("is-scrolled");
    } else {
      navbar.classList.remove("is-scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // run once on load

  // ── Hamburger toggle ─────────────────────────────────────
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      const isOpen = menu.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close menu on link click
    menu.querySelectorAll(".navbar__link").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });

    // Close on outside click
    document.addEventListener("click", function (e) {
      if (!navbar.contains(e.target) && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        toggle.focus();
      }
    });
  }

  // ── Active link ──────────────────────────────────────────
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(function (link) {
    const href = link.getAttribute("href");
    if (!href) return;

    const linkPage = href.split("/").pop();

    if (
      linkPage === currentPath ||
      (currentPath === "" && linkPage === "index.html")
    ) {
      link.classList.add("is-active");
    }
  });

})();
