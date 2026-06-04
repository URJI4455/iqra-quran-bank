/* ============================================================
   CONTACT PAGE — Form validation (UI only, no submission)
   ============================================================ */

(function () {
  "use strict";

  const form     = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  if (!form) return;

  // ── Field validators ──────────────────────────────────────
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function setFieldState(field, valid, message) {
    const group = field.closest(".form-group");
    if (!group) return;

    group.classList.remove("field--error", "field--valid");
    let hint = group.querySelector(".field-error");

    if (!valid) {
      group.classList.add("field--error");
      field.style.borderColor = "#ef4444";
      if (!hint) {
        hint = document.createElement("p");
        hint.className = "form-hint field-error";
        hint.style.color = "#ef4444";
        group.appendChild(hint);
      }
      hint.textContent = message;
    } else {
      group.classList.add("field--valid");
      field.style.borderColor = "var(--color-green)";
      if (hint) hint.remove();
    }
  }

  // ── Live validation ───────────────────────────────────────
  form.querySelectorAll(".form-input, .form-textarea").forEach(function (field) {
    field.addEventListener("blur", function () { validateField(field); });
    field.addEventListener("input", function () {
      if (field.closest(".form-group")?.classList.contains("field--error")) {
        validateField(field);
      }
    });
  });

  function validateField(field) {
    const val = field.value.trim();

    if (field.required && !val) {
      setFieldState(field, false, "This field is required.");
      return false;
    }

    if (field.type === "email" && val && !isValidEmail(val)) {
      setFieldState(field, false, "Please enter a valid email address.");
      return false;
    }

    if (val) setFieldState(field, true, "");
    return true;
  }

  // ── Submit ────────────────────────────────────────────────
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let allValid = true;

    form.querySelectorAll(".form-input[required], .form-textarea[required]").forEach(function (field) {
      if (!validateField(field)) allValid = false;
    });

    if (!allValid) {
      showFeedback("Please correct the errors above before sending.", "error");
      return;
    }

    // Show success state (UI only — no actual submission)
    showFeedback(
      "Thank you for your message. Our team will contact you within 48 hours via your preferred channel.",
      "success"
    );

    // Reset after 5s
    setTimeout(function () {
      form.reset();
      form.querySelectorAll(".form-group").forEach(function (g) {
        g.classList.remove("field--error", "field--valid");
      });
      form.querySelectorAll(".form-input, .form-textarea").forEach(function (f) {
        f.style.borderColor = "";
      });
    }, 5000);
  });

  function showFeedback(message, type) {
    if (!feedback) return;
    feedback.textContent  = message;
    feedback.className    = "form-notice form-notice--" + type;
    feedback.style.display = "block";
    feedback.scrollIntoView({ behavior: "smooth", block: "center" });

    if (type === "success") {
      setTimeout(function () {
        feedback.style.display = "none";
      }, 8000);
    }
  }

})();
