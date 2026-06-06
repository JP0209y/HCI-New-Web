
  const slider = document.getElementById('brandSlider');
  const scrollAmount = 200;

  // Manual Buttons
  document.getElementById('prevBtn').addEventListener('click', () => {
    slider.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    slider.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  // Auto Slide
  let autoSlide = setInterval(() => {

    // If reached end → back to start
    if (
      slider.scrollLeft + slider.clientWidth >=
      slider.scrollWidth - 5
    ) {
      slider.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      slider.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }

  }, 2500);

  // Pause on Hover
  slider.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
  });

  // Resume on Leave
  slider.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {

      if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 5
      ) {
        slider.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      } else {
        slider.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }

    }, 2500);
  });
