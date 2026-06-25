document.addEventListener("DOMContentLoaded", function () {
  const accordionSections = document.querySelectorAll(".mobile-detail-accordion");

  if (!accordionSections.length) return;

  accordionSections.forEach(function (section, index) {
    const title = section.getAttribute("data-accordion-title") || "Details";

    const body = document.createElement("div");
    body.className = "mobile-accordion-body";

    const children = Array.from(section.childNodes);

    children.forEach(function (child) {
      body.appendChild(child);
    });

    const button = document.createElement("button");
    button.className = "mobile-accordion-head";
    button.type = "button";
    button.innerHTML = `
      <span>${title}</span>
      <i class="material-symbols-outlined">keyboard_arrow_down</i>
    `;

    section.appendChild(button);
    section.appendChild(body);

    if (index === 0) {
      section.classList.add("is-open");
    }

    button.addEventListener("click", function () {
      const isOpen = section.classList.contains("is-open");

      accordionSections.forEach(function (item) {
        item.classList.remove("is-open");
      });

      if (!isOpen) {
        section.classList.add("is-open");
      }
    });
  });
});