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

var kalxrSecretCodes = {
  liumin: "secret/liumin/",
  linbo: "secret/linbo/",
  zhouzhirong: "secret/zhouzhirong/"
};

function getKalxrPath() {
  var path = location.pathname.replace(/\/$/, "") || "/";
  if (path.endsWith("/index.html")) {
    path = path.slice(0, -"/index.html".length) || "/";
  }
  return path;
}

function isKalxrImmersivePage(path) {
  return path === "/" || path.indexOf("/secret/") === 0;
}

function initKalxrSecretCode() {
  if (document.getElementById("kalxr-secret-code")) {
    return;
  }

  var paletteForm = document.querySelector('[data-md-component="palette"]');
  if (!paletteForm || !paletteForm.parentNode) {
    return;
  }

  var wrap = document.createElement("div");
  wrap.className = "kalxr-secret-code-wrap";

  var input = document.createElement("input");
  input.id = "kalxr-secret-code";
  input.className = "kalxr-secret-code";
  input.type = "text";
  input.placeholder = "Secret Code";
  input.autocomplete = "off";
  input.spellcheck = false;
  input.setAttribute("aria-label", "Secret Code");

  input.addEventListener("keydown", function (event) {
    if (event.key !== "Enter") {
      return;
    }

    var code = input.value.trim().toLowerCase();
    var target = kalxrSecretCodes[code];
    if (target) {
      var base = document.querySelector("base");
      var root = base ? base.href : location.origin + "/";
      window.location.href = new URL(target, root).href;
    }
  });

  wrap.appendChild(input);
  paletteForm.parentNode.insertBefore(wrap, paletteForm);
}

function initKalxrPage() {
  var path = getKalxrPath();
  var isImmersive = isKalxrImmersivePage(path);

  document.body.classList.toggle("kalxr-home", isImmersive);

  var topic = document.querySelector('[data-md-component="header-topic"]');
  if (topic) {
    topic.style.display = isImmersive ? "none" : "";
  }

  if (document.querySelector(".kalxr-homepage") && typeof initKalxrHome === "function") {
    initKalxrHome();
  }

  initKalxrSecretCode();
  initKalxrMobileNav();
  initKalxrAudio();
}

window.addEventListener("resize", initKalxrMobileNav);

document$.subscribe(initKalxrPage);
