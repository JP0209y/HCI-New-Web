document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter-number");

  const startCounter = (counter) => {
    const target = parseInt(counter.dataset.target);
    let current = 0;

    const increment = Math.max(1, Math.ceil(target / 100));

    const updateCounter = () => {
      current += increment;

      if (current < target) {
        counter.textContent = current.toLocaleString() + "+";
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toLocaleString() + "+";
      }
    };

    updateCounter();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
});