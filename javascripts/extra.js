/* 主页沉浸式模式 & 非主页顶部小标题控制 */
function initKalxrAudio() {
  if (!document.body.dataset.kalxrAudioDelegated) {
    document.body.dataset.kalxrAudioDelegated = "1";

    document.body.addEventListener("click", function (event) {
      var btn = event.target.closest(".kalxr-audio-btn");
      if (!btn) return;

      var audio = btn.parentElement.querySelector("audio");
      if (!audio) return;

      event.preventDefault();

      if (audio.paused) {
        document.querySelectorAll(".kalxr-song-list audio").forEach(function (other) {
          if (other !== audio) {
            other.pause();
            other.currentTime = 0;
            var otherBtn = other.parentElement.querySelector(".kalxr-audio-btn");
            if (otherBtn) otherBtn.classList.remove("is-playing");
          }
        });

        audio.play().then(function () {
          btn.classList.add("is-playing");
        }).catch(function () {
          btn.classList.remove("is-playing");
        });
      } else {
        audio.pause();
        btn.classList.remove("is-playing");
      }
    });
  }

  document.querySelectorAll(".kalxr-song-list audio").forEach(function (audio) {
    if (audio.dataset.kalxrAudioBound) return;
    audio.dataset.kalxrAudioBound = "1";

    audio.addEventListener("ended", function () {
      var btn = audio.parentElement.querySelector(".kalxr-audio-btn");
      if (btn) btn.classList.remove("is-playing");
    });
  });
}

function initKalxrMobileNav() {
  var labels = {
    "Nikon记忆": "记忆"
  };

  document.querySelectorAll(".md-tabs__link").forEach(function (link) {
    var full = link.dataset.kalxrNavFull || link.textContent.trim();
    if (!link.dataset.kalxrNavFull) {
      link.dataset.kalxrNavFull = full;
    }

    if (window.matchMedia("(max-width: 1219px)").matches && labels[full]) {
      link.textContent = labels[full];
    } else {
      link.textContent = full;
    }
  });
}

function initKalxrPage() {
  var path = location.pathname.replace(/\/$/, "") || "/";
  var isHome =
    path === "" ||
    path === "/" ||
    path.endsWith("/index.html") ||
    path.split("/").filter(Boolean).length === 0;

  document.body.classList.toggle("kalxr-home", isHome);

  var topic = document.querySelector('[data-md-component="header-topic"]');
  if (topic) {
    topic.style.display = isHome ? "none" : "";
  }

  if (isHome && typeof initKalxrHome === "function") {
    initKalxrHome();
  }

  initKalxrMobileNav();
  initKalxrAudio();
}

window.addEventListener("resize", initKalxrMobileNav);

document$.subscribe(initKalxrPage);
