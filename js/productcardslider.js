let productSwiper = null;
let categorySwiper = null;
let videoSwiper = null;
let locationSwiper = null;
let cardServiceSwiper = null;

/* ===============================
   PRODUCT SLIDER
=============================== */
function initProductSlider() {
  if (productSwiper) return;

  const el = document.querySelector(".product-swiper");
  if (!el) return;

  productSwiper = new Swiper(".product-swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,

    preloadImages: true,
    updateOnImagesReady: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    navigation: {
      nextEl: ".product-next",
      prevEl: ".product-prev",
    },

    speed: 700,

    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 2.5 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },

    on: {
      init() {
        el.classList.add("swiper-ready");
      },
    },
  });
}
/* ===============================
   VIDEO SLIDER
=============================== */
function initVideoSlider() {

  // FIXED
  if (videoSwiper) return;

  const el = document.querySelector(".video-swiper");
  if (!el) return;

  videoSwiper = new Swiper(".video-swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    navigation: {
      nextEl: ".video-next",
      prevEl: ".video-prev",
    },

    speed: 600,

    breakpoints: {
      576: { slidesPerView: 1.5 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 4 },
    },

    on: {
      init() {
        el.classList.add("swiper-ready");
      },
    },
  });
}
/* ===============================
   Location Card SLIDER
=============================== */
function initLocationSlider() {

  // FIXED
  if (locationSwiper) return;

  const el = document.querySelector(".location-swiper");
  if (!el) return;

  locationSwiper = new Swiper(".location-swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    navigation: {
      nextEl: ".location-next",
      prevEl: ".location-prev",
    },

    speed: 600,

    breakpoints: {
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    },

    on: {
      init() {
        el.classList.add("swiper-ready");
      },
    },
  });
}
/* ===============================
   CATEGORY SLIDER
=============================== */
function initCategorySlider() {

  // FIXED
  if (categorySwiper) return;

  const el = document.querySelector(".category-swiper");
  if (!el) return;

  categorySwiper = new Swiper(".category-swiper", {
    slidesPerView: 1.8,
    spaceBetween: 15,
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    navigation: {
      nextEl: ".category-next",
      prevEl: ".category-prev",
    },

    speed: 600,

    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 4 },
    },

    on: {
      init() {
        el.classList.add("swiper-ready");
      },
    },
  });
}
/* ===============================
   Card Service SLIDER
=============================== */
function initCardServiceSlider() {
  const el = document.querySelector(".cardservice-swiper");
  if (!el) return;

  if (cardServiceSwiper) return;

  cardServiceSwiper = new Swiper(el, {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    navigation: {
      nextEl: ".cardservice-next",
      prevEl: ".cardservice-prev",
    },

    speed: 600,

    breakpoints: {
      576: { slidesPerView: 1.5 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 2.5 },
      1200: { slidesPerView: 3.5 },
    },

    on: {
      init() {
        el.classList.add("swiper-ready");
      },
    },
  });
}


/* ===============================
   INIT ALL
=============================== */
window.addEventListener("load", () => {
  requestAnimationFrame(() => {
    initProductSlider();
    initCategorySlider();
    initVideoSlider();
    initLocationSlider();
    initCardServiceSlider();
  });
});