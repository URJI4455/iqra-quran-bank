/* ============================================================
   DONATE PAGE — Cause selector & amount interaction (UI only)
   No payment processing. No third-party API calls.
   ============================================================ */

(function () {
  "use strict";

  // ── Cause Selection ───────────────────────────────────────
  const causeCards    = document.querySelectorAll(".cause-card");
  const summaryTitle  = document.getElementById("summaryCause");
  const causeInput    = document.getElementById("selectedCause");

  if (causeCards.length) {
    causeCards.forEach(function (card) {
      card.addEventListener("click", function () {
        causeCards.forEach(function (c) { c.classList.remove("is-selected"); });
        card.classList.add("is-selected");

        const causeName = card.querySelector(".cause-card__title")
          ? card.querySelector(".cause-card__title").textContent
          : "";

        if (summaryTitle) summaryTitle.textContent = causeName;
        if (causeInput)   causeInput.value          = causeName;
      });
    });

    // Select first by default
    if (causeCards[0]) causeCards[0].click();
  }

  // ── Amount Selection ──────────────────────────────────────
  const amountBtns   = document.querySelectorAll(".amount-btn");
  const customInput  = document.getElementById("customAmount");
  const summaryAmt   = document.getElementById("summaryAmount");
  const amountInput  = document.getElementById("selectedAmount");

  function updateSummaryAmount(value) {
    if (summaryAmt) {
      summaryAmt.textContent = value
        ? Number(value).toLocaleString()
        : "0";
    }
    if (amountInput) amountInput.value = value || "";
  }

  if (amountBtns.length) {
    amountBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        amountBtns.forEach(function (b) { b.classList.remove("is-selected"); });
        btn.classList.add("is-selected");

        const val = btn.dataset.amount || btn.textContent.replace(/[^0-9]/g, "");
        if (customInput) customInput.value = "";
        updateSummaryAmount(val);
      });
    });

    // Select first amount by default
    if (amountBtns[0]) amountBtns[0].click();
  }

  if (customInput) {
    customInput.addEventListener("input", function () {
      amountBtns.forEach(function (b) { b.classList.remove("is-selected"); });
      updateSummaryAmount(customInput.value);
    });
  }

  // ── Form Submission (UI only) ─────────────────────────────
  const donateForm = document.getElementById("donateForm");

  if (donateForm) {
    donateForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const fullName  = donateForm.querySelector("#donorName")?.value.trim();
      const email     = donateForm.querySelector("#donorEmail")?.value.trim();
      const cause     = causeInput?.value;
      const amount    = amountInput?.value;

      if (!fullName || !email || !cause || !amount) {
        showNotice("Please fill in all required fields.", "error");
        return;
      }

      // Show payment instructions (no actual payment processing)
      showPaymentInstructions(cause, amount);
    });
  }

  function showNotice(message, type) {
    let notice = document.getElementById("donateNotice");
    if (!notice) {
      notice = document.createElement("div");
      notice.id = "donateNotice";
      donateForm?.appendChild(notice);
    }

    notice.className = "form-notice form-notice--" + (type || "info");
    notice.textContent = message;
    notice.scrollIntoView({ behavior: "smooth", block: "center" });

    setTimeout(function () { notice.textContent = ""; }, 6000);
  }

  function showPaymentInstructions(cause, amount) {
    const modal = document.getElementById("paymentModal");
    if (modal) {
      const modalCause  = modal.querySelector("#modalCause");
      const modalAmount = modal.querySelector("#modalAmount");
      if (modalCause)  modalCause.textContent  = cause;
      if (modalAmount) modalAmount.textContent = Number(amount).toLocaleString() + " ETB";
      modal.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
  }

  // ── Payment Modal Close ───────────────────────────────────
  const paymentModal     = document.getElementById("paymentModal");
  const closeModalBtn    = document.getElementById("closePaymentModal");

  if (closeModalBtn && paymentModal) {
    closeModalBtn.addEventListener("click", function () {
      paymentModal.classList.remove("is-open");
      document.body.style.overflow = "";
    });

    paymentModal.addEventListener("click", function (e) {
      if (e.target === paymentModal) {
        paymentModal.classList.remove("is-open");
        document.body.style.overflow = "";
      }
    });
  }

})();
