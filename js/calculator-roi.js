function calcROI() {

  const emp =
    parseInt(document.getElementById('emp').value) || 50;

  const sal =
    parseInt(document.getElementById('sal').value) || 60000;

  const sick =
    parseFloat(document.getElementById('sick').value) || 1.5;

  // Update values
  document.getElementById('emp-val').textContent =
    emp;

  document.getElementById('sal-val').textContent =
    '₹' + sal.toLocaleString('en-IN');

  document.getElementById('sick-val').textContent =
    sick + ' days';

  // ROI Logic
  const dailyRate = sal / 26;

  const sickDaySavings =
    emp * sick * 0.25 * dailyRate * 12;

  const productivityGain =
    emp * sal * 0.10 * 12;

  const total =
    Math.round(sickDaySavings + productivityGain);

  // Update ROI
  document.getElementById('roi-val').textContent =
    '₹' + total.toLocaleString('en-IN');
}

// Initial load
calcROI();