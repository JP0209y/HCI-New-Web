document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     CATEGORY ACCORDION
  ========================= */
  document.querySelectorAll('.filter-item.has-children .filter-parent')
    .forEach(parent => {
      parent.addEventListener('click', function () {
        const item = this.closest('.filter-item');

        // Close others (optional)
        document.querySelectorAll('.filter-item.has-children').forEach(el => {
          if (el !== item) el.classList.remove('active');
        });

        item.classList.toggle('active');
      });
    });


  /* =========================
     PRICE RANGE
  ========================= */
  const rangeMin     = document.getElementById('rangeMin');
  const rangeMax     = document.getElementById('rangeMax');
  const priceDisplay = document.getElementById('priceDisplay');
  const priceFill    = document.getElementById('priceFill');
  const tooltipMin   = document.getElementById('tooltipMin');
  const tooltipMax   = document.getElementById('tooltipMax');

  function updatePrice() {
    let min = parseInt(rangeMin.value);
    let max = parseInt(rangeMax.value);
    const GAP = 1000;

    if (min > max - GAP) {
        min = max - GAP;
        rangeMin.value = min;
    }

    // Indian number formatting  ₹2,999 / ₹10,99,999
    priceDisplay.textContent = '₹' + min.toLocaleString('en-IN') + ' – ₹' + max.toLocaleString('en-IN');

    const percentMin = (min / 1099999) * 100;
    const percentMax = (max / 1099999) * 100;

    priceFill.style.left  = percentMin + '%';
    priceFill.style.right = (100 - percentMax) + '%';

    tooltipMin.style.left = percentMin + '%';
    tooltipMax.style.left = percentMax + '%';
}

  // Events
  if (rangeMin && rangeMax) {
    rangeMin.addEventListener('input', updatePrice);
    rangeMax.addEventListener('input', updatePrice);
    updatePrice();
  }


  /* =========================
     COLOR FILTER
  ========================= */
  document.querySelectorAll('.color-row').forEach(row => {
    row.addEventListener('click', function () {

      // MULTI SELECT
      this.classList.toggle('selected');

      // SINGLE SELECT (use instead if needed)
      /*
      document.querySelectorAll('.color-row').forEach(el => el.classList.remove('selected'));
      this.classList.add('selected');
      */
    });
  });


  /* =========================
     BRAND FILTER
  ========================= */
  document.querySelectorAll('.brand-card').forEach(card => {
    card.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });

});