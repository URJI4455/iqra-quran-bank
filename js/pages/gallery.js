/* ============================================================
   GALLERY PAGE — Filter tabs & Lightbox
   ============================================================ */

(function () {
  "use strict";

  // ── Filter Tabs ───────────────────────────────────────────
  const filterBtns  = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item[data-filter]");

  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const filter = btn.dataset.filter || "all";

        filterBtns.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");

        galleryItems.forEach(function (item) {
          const itemFilter = item.dataset.filter;
          const show = filter === "all" || itemFilter === filter;

          if (show) {
            item.style.display = "";
            // Re-trigger fade in
            item.classList.remove("is-visible");
            requestAnimationFrame(function () {
              item.classList.add("is-visible");
            });
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

 // ── Lightbox (Image & Video Support) ──────────────────────
  const lightbox      = document.getElementById("lightbox");
  const lightboxImg   = document.getElementById("lightboxImg");
  const lightboxVideo = document.getElementById("lightboxVideo");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev  = document.getElementById("lightboxPrev");
  const lightboxNext  = document.getElementById("lightboxNext");

  let currentIndex = 0;
  let visibleItems = [];

  function getVisibleItems() {
    return Array.from(galleryItems).filter(function (item) {
      return item.style.display !== "none";
    });
  }

  function openLightbox(index) {
    visibleItems = getVisibleItems();
    currentIndex = index;

    const item = visibleItems[currentIndex];
    if (!item || !lightbox) return;

    const imgEl = item.querySelector("img");
    const vidEl = item.querySelector("video");

    if (vidEl && lightboxVideo) {
      // It's a video
      lightboxImg.style.display = "none";
      lightboxVideo.style.display = "block";
      lightboxVideo.src = vidEl.src;
      lightboxVideo.play();
    } else if (imgEl && lightboxImg) {
      // It's an image
      if (lightboxVideo) {
        lightboxVideo.style.display = "none";
        lightboxVideo.pause();
        lightboxVideo.src = "";
      }
      lightboxImg.style.display = "block";
      lightboxImg.src = imgEl.src;
      lightboxImg.alt = imgEl.alt || "";
    }

    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    
    // Stop video playing in background
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.src = "";
    }
  }

  function navigate(dir) {
    visibleItems = getVisibleItems();
    currentIndex = (currentIndex + dir + visibleItems.length) % visibleItems.length;
    openLightbox(currentIndex); // Re-run open logic for the new item
  }

  // Attach click to each gallery item
  galleryItems.forEach(function (item, idx) {
    item.addEventListener("click", function () { openLightbox(idx); });
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxPrev)  lightboxPrev.addEventListener("click",  function () { navigate(-1); });
  if (lightboxNext)  lightboxNext.addEventListener("click",  function () { navigate(+1); });

  // Close on overlay click
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (!lightbox?.classList.contains("is-open")) return;
    if (e.key === "Escape")      closeLightbox();
    if (e.key === "ArrowLeft")   navigate(-1);
    if (e.key === "ArrowRight")  navigate(+1);
  });
  
})();
