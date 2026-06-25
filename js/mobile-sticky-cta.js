document.addEventListener("DOMContentLoaded", function () {
  const stickyCta = document.getElementById("mobileStickyCta");
  const productSection = document.getElementById("productEcomSection");

  if (!stickyCta || !productSection) return;

  function handleStickyCta() {
    if (window.innerWidth > 767) {
      stickyCta.classList.remove("show");
      document.body.classList.remove("has-mobile-sticky-cta");
      return;
    }

    const sectionRect = productSection.getBoundingClientRect();

    const isProductSectionVisible =
      sectionRect.bottom > 120 && sectionRect.top < window.innerHeight - 80;

    const isAfterProductSection = sectionRect.bottom <= 120;

    if (!isProductSectionVisible && isAfterProductSection) {
      stickyCta.classList.add("show");
      document.body.classList.add("has-mobile-sticky-cta");
    } else {
      stickyCta.classList.remove("show");
      document.body.classList.remove("has-mobile-sticky-cta");
    }
  }

  handleStickyCta();

  window.addEventListener("scroll", handleStickyCta);
  window.addEventListener("resize", handleStickyCta);
});