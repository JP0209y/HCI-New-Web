document.addEventListener("DOMContentLoaded", function () {
  const accordionSections = document.querySelectorAll(".mobile-detail-accordion");

  if (!accordionSections.length) return;

  accordionSections.forEach(function (section, index) {
    // Duplicate accordion create hone se rokta hai
    if (section.querySelector(".mobile-accordion-head")) return;

    const title = section.getAttribute("data-accordion-title") || "Details";

    // Body wrapper create
    const body = document.createElement("div");
    body.className = "mobile-accordion-body";

    // Section ke existing content ko accordion body me move karo
    const children = Array.from(section.childNodes);

    children.forEach(function (child) {
      body.appendChild(child);
    });

    // Accordion button create
    const button = document.createElement("button");
    button.className = "mobile-accordion-head";
    button.type = "button";
    button.setAttribute("aria-expanded", index === 0 ? "true" : "false");

    button.innerHTML = `
      <span>${title}</span>
      <i class="material-symbols-outlined accordion-icon">
        ${index === 0 ? "keyboard_arrow_up" : "keyboard_arrow_down"}
      </i>
    `;

    section.appendChild(button);
    section.appendChild(body);

    // First accordion open rahega
    if (index === 0) {
      section.classList.add("is-open");
    }

    button.addEventListener("click", function () {
      const isOpen = section.classList.contains("is-open");

      // Sab accordion close karo
      accordionSections.forEach(function (item) {
        item.classList.remove("is-open");

        const itemBtn = item.querySelector(".mobile-accordion-head");
        const itemIcon = item.querySelector(".accordion-icon");

        if (itemBtn) {
          itemBtn.setAttribute("aria-expanded", "false");
        }

        if (itemIcon) {
          itemIcon.textContent = "keyboard_arrow_down";
        }
      });

      // Agar current close tha to open karo
      if (!isOpen) {
        section.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");

        const icon = button.querySelector(".accordion-icon");
        if (icon) {
          icon.textContent = "keyboard_arrow_up";
        }
      }
    });
  });
});