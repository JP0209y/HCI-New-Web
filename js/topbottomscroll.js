document.addEventListener("DOMContentLoaded", function () {

  const topBtn = document.getElementById("scrollTopBtn");
  const bottomBtn = document.getElementById("scrollBottomBtn");

  if (!topBtn || !bottomBtn) return;

  function toggleButtons() {
    const scrollTop = window.scrollY;

    if (scrollTop < 300) {
      bottomBtn.classList.add("show");
      topBtn.classList.remove("show");
    } else {
      topBtn.classList.add("show");
      bottomBtn.classList.remove("show");
    }
  }

  // Scroll Top
  topBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Scroll Bottom (FIXED)
  bottomBtn.addEventListener("click", function () {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  });

  window.addEventListener("scroll", toggleButtons);

  toggleButtons();
});