// Logos Data
const logos = [
  { img: "images/amazon-logo.webp", alt: "Amazon Logo" },
  { img: "images/flipkart-logo.png", alt: "Flipkart Logo" },
  { img: "images/jio-mart-logo.png", alt: "Jio Mart Logo" },
  { img: "images/shoppersstop-logo.png", alt: "Shoppers Stop Logo" },
  { img: "images/woodenstreet-logo.svg", alt: "Wooden Street Logo" },
  { img: "images/india-mart-logo.png", alt: "India Mart Logo" },
  { img: "images/pf-logo.svg", alt: "Pepperfry Logo" }
];

// Get slider track
const sliderTrack = document.getElementById("sliderTrack");

// Check if element exists
if (sliderTrack) {

  // Duplicate logos for infinite effect
  const allLogos = [...logos, ...logos];

  allLogos.forEach((logo) => {
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("cust-logo");

    logoDiv.innerHTML = `
      <div class="logo-inner">
        <img src="${logo.img}" alt="${logo.alt}">
      </div>
    `;

    sliderTrack.appendChild(logoDiv);
  });

  // Pause on hover
  sliderTrack.addEventListener("mouseenter", () => {
    sliderTrack.classList.add("paused");
  });

  sliderTrack.addEventListener("mouseleave", () => {
    sliderTrack.classList.remove("paused");
  });
}