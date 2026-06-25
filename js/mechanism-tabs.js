document.addEventListener("DOMContentLoaded", function () {
  const tabScroll = document.getElementById("featureTabScroll");
  const leftArrow = document.querySelector(".tab-arrow-left");
  const rightArrow = document.querySelector(".tab-arrow-right");

  if (!tabScroll || !leftArrow || !rightArrow) return;

  const tabButtons = Array.from(
    tabScroll.querySelectorAll('[data-bs-toggle="tab"]')
  );

  if (!tabButtons.length) return;

  function getActiveIndex() {
    return tabButtons.findIndex(function (button) {
      return button.classList.contains("active");
    });
  }

  function checkOverflow() {
    const hasOverflow = tabScroll.scrollWidth > tabScroll.clientWidth + 5;

    leftArrow.classList.toggle("is-hidden", !hasOverflow);
    rightArrow.classList.toggle("is-hidden", !hasOverflow);
  }

  function activateTab(index) {
    if (index < 0 || index >= tabButtons.length) return;

    const targetButton = tabButtons[index];

    const tab = new bootstrap.Tab(targetButton);
    tab.show();

    targetButton.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }

  rightArrow.addEventListener("click", function () {
    const activeIndex = getActiveIndex();
    const nextIndex = activeIndex < tabButtons.length - 1 ? activeIndex + 1 : 0;

    activateTab(nextIndex);
  });

  leftArrow.addEventListener("click", function () {
    const activeIndex = getActiveIndex();
    const prevIndex = activeIndex > 0 ? activeIndex - 1 : tabButtons.length - 1;

    activateTab(prevIndex);
  });

  window.addEventListener("resize", checkOverflow);
  checkOverflow();
});