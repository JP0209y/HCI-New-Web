 // ✅ DYNAMIC — anchors auto-collected from sidebar links, no hardcoding needed
  const navItems = document.querySelectorAll('.sidebar-nav-pl li');
  const sidebarLinks = document.querySelectorAll('.sidebar-nav-pl a[href^="#"]');

  // Build anchor list dynamically from sidebar hrefs
  const allAnchors = Array.from(sidebarLinks)
    .map(a => a.getAttribute('href').replace('#', ''))
    .filter(id => document.getElementById(id)); // only keep ids that exist in DOM

  function setActive(id) {
    navItems.forEach(item => {
      item.classList.remove('active');
      const a = item.querySelector('a');
      if (a && a.getAttribute('href') === '#' + id) item.classList.add('active');
    });
  }

  // Observe all found targets
  const targets = allAnchors.map(id => document.getElementById(id));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { threshold: 0.3, rootMargin: '0px 0px -50% 0px' });

  targets.forEach(t => observer.observe(t));

  // Smooth scroll — also dynamic from sidebar links
  sidebarLinks.forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const el = document.getElementById(a.getAttribute('href').replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  });