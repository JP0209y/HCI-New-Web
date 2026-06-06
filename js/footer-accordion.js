
function footerAccordion() {

  const accordions = document.querySelectorAll('.footer-collapse');

  if (window.innerWidth <= 767) {

    // Mobile = default closed
    accordions.forEach(item => {
      item.removeAttribute('open');
    });

  } else {

    // Desktop = always open
    accordions.forEach(item => {
      item.setAttribute('open', true);
    });

  }
}

// Run on load
footerAccordion();

// Run on resize
window.addEventListener('resize', footerAccordion);

