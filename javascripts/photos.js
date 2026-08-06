(function () {
  var lightboxReady = false;

  function ensureLightbox() {
    if (document.getElementById("kalxrPhotoLightbox")) {
      return;
    }

    var lightbox = document.createElement("div");
    lightbox.id = "kalxrPhotoLightbox";
    lightbox.className = "kalxr-photo-lightbox";
    lightbox.innerHTML =
      '<div class="kalxr-photo-lightbox__backdrop" data-close="true"></div>' +
      '<div class="kalxr-photo-lightbox__panel">' +
      '  <button class="kalxr-photo-lightbox__close" type="button" aria-label="关闭">&times;</button>' +
      '  <img class="kalxr-photo-lightbox__img" alt="">' +
      '  <p class="kalxr-photo-lightbox__caption"></p>' +
      "</div>";

    document.body.appendChild(lightbox);

    lightbox.querySelector("[data-close]").addEventListener("click", closeLightbox);
    lightbox.querySelector(".kalxr-photo-lightbox__close").addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeLightbox();
      }
    });
  }

  function openLightbox(img) {
    var lightbox = document.getElementById("kalxrPhotoLightbox");
    if (!lightbox || !img) {
      return;
    }

    var full = lightbox.querySelector(".kalxr-photo-lightbox__img");
    var caption = lightbox.querySelector(".kalxr-photo-lightbox__caption");

    full.src = img.src;
    full.alt = img.alt || "";
    caption.textContent = img.alt || "";
    caption.style.display = img.alt ? "block" : "none";

    lightbox.classList.add("is-open");
    document.body.classList.add("kalxr-lightbox-open");
  }

  function closeLightbox() {
    var lightbox = document.getElementById("kalxrPhotoLightbox");
    if (!lightbox) {
      return;
    }

    lightbox.classList.remove("is-open");
    document.body.classList.remove("kalxr-lightbox-open");
  }

  function bindPhotoRows() {
    document.querySelectorAll(".photo-row img").forEach(function (img) {
      img.style.cursor = "zoom-in";
    });
  }

  document$.subscribe(function () {
    ensureLightbox();
    bindPhotoRows();
  });

  if (!lightboxReady) {
    document.body.addEventListener("click", function (event) {
      var img = event.target.closest(".photo-row img");
      if (img) {
        event.preventDefault();
        openLightbox(img);
      }
    });
    lightboxReady = true;
  }
})();
