
  const items = document.querySelectorAll(".top-bar-item");
  let index = 0;

  items[index].classList.add("active");

  setInterval(() => {
    const current = items[index];
    const nextIndex = (index + 1) % items.length;
    const next = items[nextIndex];

    // prepare next (below already hota hai by default)
    next.classList.add("active");

    // current goes up
    current.classList.remove("active");
    current.classList.add("exit");

    // IMPORTANT: sirf class reset, inline style nahi
    setTimeout(() => {
      current.classList.remove("exit");
    }, 500);

    index = nextIndex;

  }, 5000);
