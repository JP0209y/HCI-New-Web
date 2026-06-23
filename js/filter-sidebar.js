document.addEventListener("DOMContentLoaded", function () {
  const openFilterBtn = document.getElementById("openFilterBtn");
  const closeFilterBtn = document.getElementById("closeFilterBtn");
  const filterSidebar = document.getElementById("filterSidebar");
  const filterOverlay = document.getElementById("filterOverlay");

  function openFilter() {
    filterSidebar.classList.add("active");
    filterOverlay.classList.add("active");
    document.body.classList.add("filter-open");
  }

  function closeFilter() {
    filterSidebar.classList.remove("active");
    filterOverlay.classList.remove("active");
    document.body.classList.remove("filter-open");
  }

  if (openFilterBtn) {
    openFilterBtn.addEventListener("click", openFilter);
  }

  if (closeFilterBtn) {
    closeFilterBtn.addEventListener("click", closeFilter);
  }

  if (filterOverlay) {
    filterOverlay.addEventListener("click", closeFilter);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeFilter();
    }
  });
});