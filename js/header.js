  const mobileWrapper = document.querySelector(".mobile-menu-wrapper");
    const wrapperBg = document.querySelector(".wrapper-bg");
    const mobileBtn = document.querySelector(".mobile-menu-toggle");
    const closeBtn = document.querySelector(".close-menu");

    // History stack to track navigation
    let panelHistory = [];

    /* Open Menu */
    mobileBtn.onclick = () => {
      mobileWrapper.classList.add("active");
      wrapperBg.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    /* Close Menu */
    closeBtn.onclick = closeMenu;
    wrapperBg.onclick = closeMenu;

    function closeMenu() {
      mobileWrapper.classList.remove("active");
      wrapperBg.classList.remove("active");
      document.body.style.overflow = "";
      // Reset panels and history after transition
      setTimeout(() => {
        document.querySelectorAll(".mobile-panel").forEach(p => p.classList.remove("active"));
        document.getElementById("panel-main").classList.add("active");
        panelHistory = [];
      }, 300);
    }

    function goToPanel(targetId, clickedLabel) {
      // Save current active panel in history
      const current = document.querySelector(".mobile-panel.active");
      if (current) panelHistory.push(current.id);

      // Switch panel
      document.querySelectorAll(".mobile-panel").forEach(p => p.classList.remove("active"));
      document.getElementById(targetId).classList.add("active");

      // Update back button to show the clicked item's label
      const panel = document.getElementById(targetId);
      const backBtn = panel.querySelector(".mobile-back");
      if (backBtn && clickedLabel) {
        backBtn.innerHTML = `<i class="material-symbols-outlined">arrow_back</i> ${clickedLabel}`;
      }
    }

    function goBack() {
      if (panelHistory.length === 0) return;
      const prevId = panelHistory.pop();
      document.querySelectorAll(".mobile-panel").forEach(p => p.classList.remove("active"));
      document.getElementById(prevId).classList.add("active");
    }

    /* Mobile Panel Navigation */
    document.addEventListener("click", function (e) {

      // Navigate forward
      const item = e.target.closest(".has-child");
      if (item && item.closest(".mobile-slide-container")) {
        const target = item.getAttribute("data-target");
        // Get only the text (excluding icon)
        const label = item.childNodes[0].textContent.trim();
        if (target) goToPanel(target, label);
        return;
      }

      // Navigate back
      const back = e.target.closest(".mobile-back");
      if (back && back.closest(".mobile-slide-container")) {
        goBack();
      }

    });