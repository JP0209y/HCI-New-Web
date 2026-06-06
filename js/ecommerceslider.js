/* ================= IMAGE DATA ================= */
const productImages = {
  "col-1": [
    "images/eGENKI-PRO/grey/e-genkipro-grey01.png",
    "images/eGENKI-PRO/grey/e-genkipro-grey02.png",
    "images/eGENKI-PRO/grey/e-genkipro-grey03.png",
    "images/eGENKI-PRO/grey/e-genkipro-grey04.png",
    "images/eGENKI-PRO/grey/e-genkipro-grey05.png",
   
    
  ],
  "col-2": [
    "images/eGENKI-PRO/pink-brown/e-genkipro-pinkbrown01.png",
    "images/eGENKI-PRO/pink-brown/e-genkipro-pinkbrown02.png",
    "images/eGENKI-PRO/pink-brown/e-genkipro-pinkbrown03.png",
    "images/eGENKI-PRO/pink-brown/e-genkipro-pinkbrown04.png",
    "images/eGENKI-PRO/pink-brown/e-genkipro-pinkbrown05.png"
    
  ],
    "col-3": [
    "images/eGENKI-PRO/dark-brown/e-genkipro-darkbrown01.png",
    "images/eGENKI-PRO/dark-brown/e-genkipro-darkbrown02.png",
    "images/eGENKI-PRO/dark-brown/e-genkipro-darkbrown03.png",
    "images/eGENKI-PRO/dark-brown/e-genkipro-darkbrown04.png"
  
  ]
};

/* ================= PAGE SCOPE ================= */
const page = {
  name:       "page",
  mainImage:  document.querySelector(".mainImage-page"),
  thumbsEl:   document.querySelector(".thumbnails-page"),
  prevBtn:    document.querySelector(".page-prev"),
  nextBtn:    document.querySelector(".page-next"),
  lightbox:   document.querySelector(".page-lightbox"),
  lbImage:    document.querySelector(".page-lb-image"),
  lbCounter:  document.querySelector(".page-lb-counter"),
  lbThumbsEl: document.querySelector(".page-lb-thumbs"),
  lbPrev:     document.querySelector(".page-lb-prev"),
  lbNext:     document.querySelector(".page-lb-next"),
  lbClose:    document.querySelector(".page-lb-close"),
  zoomEl:     document.querySelector(".page-zoom"),
  expandBtn:  document.querySelector(".page-expand-btn"),
  circles:    document.querySelectorAll(".page-circle"),
  thumbs:     [],
  index:      0,
  lbIndex:    0,
  set:        "col-1"
};

/* ================= MODAL SCOPE ================= */
// ✅ lightbox fields removed — modal pe lightbox nahi hai
const modal = {
  name:      "modal",
  mainImage: null,
  thumbsEl:  null,
  prevBtn:   null,
  nextBtn:   null,
  circles:   [],
  thumbs:    [],
  index:     0,
  set:       "col-1",
  navBound:  false
};

/* ================= SMOOTH SCROLL ================= */
function smoothScroll(el, targetLeft, duration = 300) {
  const start     = el.scrollLeft;
  const distance  = targetLeft - start;
  const startTime = performance.now();

  function step(now) {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease     = progress < 0.5
      ? 2 * progress * progress
      : -1 + (4 - 2 * progress) * progress;
    el.scrollLeft = start + distance * ease;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ================= UPDATE ARROWS ================= */
function updateArrows(scope) {
  if (!scope.prevBtn || !scope.nextBtn) return;
  scope.prevBtn.classList.toggle("disabled", scope.index === 0);
  scope.nextBtn.classList.toggle("disabled", scope.index === scope.thumbs.length - 1);
}

/* ================= SCROLL THUMBS ================= */
function scrollThumbs(scope) {
  const active = scope.thumbs[scope.index];
  if (!active || !scope.thumbsEl) return;
  const container  = scope.thumbsEl;
  const targetLeft = active.offsetLeft - container.offsetWidth / 2 + active.offsetWidth / 2;
  smoothScroll(container, targetLeft, 300);
}

/* ================= SCROLL LB THUMBS ================= */
function scrollLbThumbs(scope) {
  if (!scope.lbThumbsEl) return;
  const list   = [...scope.lbThumbsEl.querySelectorAll(".lb-thumb")];
  const active = list[scope.lbIndex];
  if (!active) return;

  const container     = scope.lbThumbsEl;
  const containerRect = container.getBoundingClientRect();
  const activeRect    = active.getBoundingClientRect();
  const targetLeft    = container.scrollLeft
                      + activeRect.left - containerRect.left
                      - containerRect.width / 2
                      + activeRect.width / 2;
  smoothScroll(container, targetLeft, 300);
}

/* ================= LOAD SET ================= */
function loadSet(set, clickedCircle, scopeName) {
  const scope = scopeName === "page" ? page : modal;
  if (!scope.thumbsEl) return;

  scope.circles.forEach(c => c.classList.remove("active"));
  if (clickedCircle) clickedCircle.classList.add("active");
  scope.set   = set;
  scope.index = 0;
  renderGallery(scope);
  setImage(scope, 0);
}

/* ================= RENDER GALLERY ================= */
function renderGallery(scope) {
  if (!scope.thumbsEl) return;
  scope.thumbsEl.innerHTML = "";
  productImages[scope.set].forEach((src, i) => {
    const img     = document.createElement("img");
    img.src       = src;
    img.className = "thumbnail-img" + (i === 0 ? " active" : "");
    img.onclick   = () => setImage(scope, i);
    scope.thumbsEl.appendChild(img);
  });
  scope.thumbs = [...scope.thumbsEl.querySelectorAll(".thumbnail-img")];
  updateArrows(scope);
}

/* ================= SET IMAGE ================= */
function setImage(scope, index) {
  if (!scope.thumbs.length || !scope.mainImage) return;
  scope.thumbs.forEach(t => t.classList.remove("active"));
  scope.index = index;
  scope.thumbs[index].classList.add("active");
  scope.mainImage.src = scope.thumbs[index].src;
  updateArrows(scope);
  scrollThumbs(scope);
}

/* ================= BIND NAV ================= */
function bindNav(scope) {
  if (!scope.prevBtn || !scope.nextBtn) return;
  scope.prevBtn.addEventListener("click", () => {
    if (scope.index > 0) setImage(scope, scope.index - 1);
  });
  scope.nextBtn.addEventListener("click", () => {
    if (scope.index < scope.thumbs.length - 1) setImage(scope, scope.index + 1);
  });
}

/* ================= ZOOM (PAGE ONLY) ================= */
if (page.zoomEl) {
  page.zoomEl.addEventListener("mousemove", e => {
    const rect = page.zoomEl.getBoundingClientRect();
    const x    = ((e.clientX - rect.left) / rect.width)  * 100;
    const y    = ((e.clientY - rect.top)  / rect.height) * 100;
    page.mainImage.style.transformOrigin = `${x}% ${y}%`;
    page.mainImage.style.transform       = "scale(2.2)";
  });
  page.zoomEl.addEventListener("mouseleave", () => {
    page.mainImage.style.transform = "scale(1)";
  });
}

/* ================= OPEN LIGHTBOX (PAGE ONLY) ================= */
function openLightbox(scope) {
  if (!scope.lbThumbsEl) return;
  const images = productImages[scope.set];

  scope.lbThumbsEl.innerHTML = "";
  images.forEach((src, i) => {
    const img     = document.createElement("img");
    img.src       = src;
    img.className = "lb-thumb" + (i === scope.index ? " active" : "");
    img.onclick   = () => goLb(scope, i);
    scope.lbThumbsEl.appendChild(img);
  });

  scope.lbIndex = scope.index;
  scope.lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => goLb(scope, scope.lbIndex, false));
}

/* ================= CLOSE LIGHTBOX ================= */
function closeLightbox(scope) {
  if (!scope.lightbox) return;
  scope.lightbox.classList.remove("open");
  document.body.style.overflow  = "";
  scope.lbImage.style.transform  = "scale(1)";
  scope.lbImage.style.transition = "none";
}

/* ================= GO LIGHTBOX ================= */
function goLb(scope, index, animate = true) {
  if (!scope.lbImage) return;
  const images    = productImages[scope.set];
  const max       = images.length - 1;
  const prevIndex = scope.lbIndex;

  index = Math.max(0, Math.min(index, max));
  if (index === prevIndex && animate) return;

  const direction = index > prevIndex ? "next" : "prev";
  scope.lbIndex   = index;

  scope.lbCounter.textContent = `${index + 1} / ${images.length}`;

  const list = [...scope.lbThumbsEl.querySelectorAll(".lb-thumb")];
  list.forEach((t, i) => t.classList.toggle("active", i === index));
  scrollLbThumbs(scope);

  if (animate) {
    scope.lbImage.style.transition = "transform 0.3s ease, opacity 0.3s ease";
    scope.lbImage.style.transform  = direction === "next"
      ? "translateX(-80px) scale(0.96)" : "translateX(80px) scale(0.96)";
    scope.lbImage.style.opacity    = "0";

    setTimeout(() => {
      scope.lbImage.src              = images[index];
      scope.lbImage.style.transition = "none";
      scope.lbImage.style.transform  = direction === "next"
        ? "translateX(80px) scale(0.96)" : "translateX(-80px) scale(0.96)";
      scope.lbImage.style.opacity    = "0";
      scope.lbImage.offsetHeight;
      scope.lbImage.style.transition = "transform 0.3s ease, opacity 0.3s ease";
      scope.lbImage.style.transform  = "translateX(0) scale(1)";
      scope.lbImage.style.opacity    = "1";
    }, 300);

  } else {
    scope.lbImage.src              = images[index];
    scope.lbImage.style.transition = "none";
    scope.lbImage.style.transform  = "translateX(0) scale(1)";
    scope.lbImage.style.opacity    = "1";
  }
}

/* ================= BIND LIGHTBOX (PAGE ONLY) ================= */
function bindLightbox(scope) {
  if (!scope.lbPrev) return;
  scope.lbPrev.addEventListener("click",  () => goLb(scope, scope.lbIndex - 1));
  scope.lbNext.addEventListener("click",  () => goLb(scope, scope.lbIndex + 1));
  scope.lbClose.addEventListener("click", () => closeLightbox(scope));
  scope.lightbox.addEventListener("click", e => {
    if (e.target === scope.lightbox) closeLightbox(scope);
  });
  scope.expandBtn.addEventListener("click", () => openLightbox(scope));
}

/* ================= KEYBOARD (PAGE LIGHTBOX ONLY) ================= */
document.addEventListener("keydown", e => {
  const active = page.lightbox?.classList.contains("open") ? page : null;
  if (!active) return;
  if (e.key === "ArrowRight") goLb(active, active.lbIndex + 1);
  if (e.key === "ArrowLeft")  goLb(active, active.lbIndex - 1);
  if (e.key === "Escape")     closeLightbox(active);
});

/* ================= BOOTSTRAP MODAL EVENTS ================= */
const bsModalEl = document.getElementById("quickviewmodal");

if (bsModalEl) {
  bsModalEl.addEventListener("shown.bs.modal", () => {
    const q  = sel => bsModalEl.querySelector(sel);
    const qa = sel => bsModalEl.querySelectorAll(sel);

    modal.mainImage = q(".mainImage-modal");
    modal.thumbsEl  = q(".thumbnails-modal");
    modal.prevBtn   = q(".modal-prev");
    modal.nextBtn   = q(".modal-next");
    modal.circles   = qa(".modal-circle");

    // ✅ sirf pehli baar nav bind karo
    if (!modal.navBound) {
      bindNav(modal);
      modal.navBound = true;
    }

    const activeCircle = bsModalEl.querySelector(".modal-circle.active");
    loadSet(modal.set, activeCircle, "modal");
  });
}

/* ================= PAGE INIT ================= */
if (page.mainImage && page.thumbsEl) {
  bindNav(page);
  bindLightbox(page);
  page.mainImage.addEventListener("click", () => openLightbox(page));
  loadSet("col-1", document.querySelector(".page-circle.active"), "page");
}