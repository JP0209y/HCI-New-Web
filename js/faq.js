
  function toggleFaq(btn) {
    const body = btn.nextElementSibling;
    const icon = btn.querySelector('.faq-icon');
    const isOpen = btn.classList.contains('open');
 
    // Close all
    document.querySelectorAll('.faq-btn.open').forEach(b => {
      b.classList.remove('open');
      b.setAttribute('aria-expanded', 'false');
      b.querySelector('.faq-icon').textContent = '+';
      b.nextElementSibling.classList.remove('open');
    });
 
    // Open clicked if it was closed
    if (!isOpen) {
      btn.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      icon.textContent = '−';
      body.classList.add('open');
    }
  }
