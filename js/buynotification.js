const notify = document.getElementById("notify");
const progress = document.querySelector(".notify-progress");

const notifyUser = document.getElementById("notifyUser");
const notifyProduct = document.getElementById("notifyProduct");
const notifyImg = document.getElementById("notifyImg");
const notifyTime = document.getElementById("notifyTime");

// Customers
const customers = [
  { name: "Rahul", city: "Delhi" },
  { name: "Amit", city: "Mumbai" },
  { name: "Neha", city: "Jaipur" },
  { name: "Priya", city: "Bangalore" },
  { name: "Rohit", city: "Pune" },
  { name: "Anjali", city: "Hyderabad" }
];

// Products
const products = [
  { name: "Full Body Massage Chair", img: "images/R-NEXA/beige/r-nexa-beige01.webp" },
  { name: "Zero Gravity Massage Chair", img: "images/R-RELX/brown/r-relx-brown01.webp" },
  { name: "Luxury Massage Recliner", img: "images/R-VELOR/champange/r-velor-champange01.webp" },
  { name: "Smart 4D Massage Chair", img: "images/R-ZENORA/white/r-zenora-white01.webp" }
];

// Random time text
function getRandomTime() {
  const min = Math.floor(Math.random() * 60) + 1;

  if (min < 3) return "Just now";
  if (min < 60) return min + " minutes ago";

  return Math.floor(min / 60) + " hour ago";
}

// 🔥 Smart interval logic
function getSmartDelay() {
  const chance = Math.random();

  // 20% chance → fast popup (1–2 min)
  if (chance < 0.2) {
    return (Math.floor(Math.random() * 2) + 1) * 60 * 1000;
  }

  // 80% → normal (3–8 min)
  return (Math.floor(Math.random() * 6) + 3) * 60 * 1000;
}

function showNotify() {
  notify.style.display = "block";

  const customer = customers[Math.floor(Math.random() * customers.length)];
  const product = products[Math.floor(Math.random() * products.length)];

  notifyUser.innerText = `${customer.name} (${customer.city})`;
  notifyProduct.innerText = `purchased ${product.name}`;
  notifyImg.src = product.img;
  notifyTime.innerHTML = getRandomTime() + ' • <span class="text-success">✔ verified</span>';

  // Progress reset
  progress.style.animation = "none";
  progress.offsetHeight;
  progress.style.animation = "progressAnim 6s linear";

  // Auto hide
  setTimeout(() => {
    notify.style.display = "none";
  }, 6000);

  // Next schedule
  scheduleNext();
}

function scheduleNext() {
  const delay = getSmartDelay();
  setTimeout(showNotify, delay);
}

function closeNotify() {
  notify.style.display = "none";
}

// 🚀 First load (5–10 sec delay)
setTimeout(showNotify, Math.floor(Math.random() * 5000) + 5000);