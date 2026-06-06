

document.addEventListener("DOMContentLoaded", function () {

  const trigger = document.querySelector('.search-trigger');
  const overlay = document.getElementById('searchOverlay');
  const closeBtn = document.getElementById('closeSearch');

  if (trigger && overlay && closeBtn) {

    trigger.addEventListener('click', function () {
      overlay.classList.add('active');
    });

    closeBtn.addEventListener('click', function () {
      overlay.classList.remove('active');
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === "Escape") {
        overlay.classList.remove('active');
      }
    });

  } else {
    console.log("Search elements not found ❌");
  }

});
