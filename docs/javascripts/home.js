function kalxrSiteUrl(path) {
  var base = document.querySelector("base");
  var root = base ? base.href : location.origin + "/";
  return new URL(path, root).href;
}

function initKalxrHome() {
  var homepage = document.querySelector(".kalxr-homepage");
  if (!homepage || homepage.dataset.kalxrHomeInit === "true") {
    return;
  }
  homepage.dataset.kalxrHomeInit = "true";

  var bgWrap = homepage.querySelector(".kalxr-page-bg");
  var bgImg = homepage.querySelector(".kalxr-page-bg-img");
  if (bgImg && bgWrap) {
    function markBgLoaded() {
      bgWrap.classList.add("is-loaded");
    }

    if (bgImg.complete && bgImg.naturalWidth > 0) {
      markBgLoaded();
    } else {
      bgImg.addEventListener("load", markBgLoaded, { once: true });
      bgImg.addEventListener("error", markBgLoaded, { once: true });
    }
  }

  var scrollHint = document.getElementById("kalxrScrollHint");
  var modal = document.getElementById("kalxrModal");
  var card = document.getElementById("kalxrCard");
  var cardTitle = document.getElementById("kalxrCardTitle");
  var cardText = document.getElementById("kalxrCardText");
  var cardLink = document.getElementById("kalxrCardLink");
  var cardClose = document.getElementById("kalxrCardClose");
  var line1El = document.getElementById("kalxrLine1");
  var line2El = document.getElementById("kalxrLine2");
  var cursorEl = document.getElementById("kalxrCursor");

  var homepage = document.querySelector(".kalxr-homepage");
  var subtitleLines = [
    (homepage && homepage.dataset.kalxrLine1) || "希望我的故事",
    (homepage && homepage.dataset.kalxrLine2) || "能带给你力量"
  ];

  var mainTitleEl = document.querySelector(".kalxr-main-title");
  if (mainTitleEl && homepage && homepage.dataset.kalxrTitle) {
    mainTitleEl.textContent = homepage.dataset.kalxrTitle;
  }
  var subtitleTimer;
  var subtitlePhase = "line1";
  var subtitleIndex = 0;

  function popPart(el) {
    if (!el) {
      return;
    }
    el.classList.remove("is-pop");
    void el.offsetWidth;
    el.classList.add("is-pop");
  }

  function setCursorVisible(visible) {
    if (cursorEl) {
      cursorEl.classList.toggle("is-hidden", !visible);
    }
  }

  function resetSubtitleLines() {
    if (line1El) {
      line1El.textContent = "";
    }
    if (line2El) {
      line2El.textContent = "";
    }
    setCursorVisible(true);
    subtitlePhase = "line1";
    subtitleIndex = 0;
  }

  function subtitleLoop() {
    window.clearTimeout(subtitleTimer);

    if (!line1El || !line2El) {
      return;
    }

    if (subtitlePhase === "line1") {
      line1El.textContent = subtitleLines[0].slice(0, subtitleIndex + 1);
      subtitleIndex += 1;

      if (subtitleIndex === subtitleLines[0].length) {
        popPart(line1El);
        subtitlePhase = "line2";
        subtitleIndex = 0;
        subtitleTimer = window.setTimeout(subtitleLoop, 500);
        return;
      }

      subtitleTimer = window.setTimeout(subtitleLoop, 90);
      return;
    }

    if (subtitlePhase === "line2") {
      line2El.textContent = subtitleLines[1].slice(0, subtitleIndex + 1);
      subtitleIndex += 1;

      if (subtitleIndex === subtitleLines[1].length) {
        popPart(line2El);
        subtitlePhase = "pause";
        setCursorVisible(false);
        subtitleTimer = window.setTimeout(subtitleLoop, 2200);
        return;
      }

      subtitleTimer = window.setTimeout(subtitleLoop, 90);
      return;
    }

    if (subtitlePhase === "pause") {
      subtitlePhase = "delete2";
      subtitleIndex = subtitleLines[1].length;
      setCursorVisible(true);
      subtitleTimer = window.setTimeout(subtitleLoop, 300);
      return;
    }

    if (subtitlePhase === "delete2") {
      line2El.textContent = subtitleLines[1].slice(0, subtitleIndex - 1);
      subtitleIndex -= 1;

      if (subtitleIndex === 0) {
        subtitlePhase = "delete1";
        subtitleIndex = subtitleLines[0].length;
        subtitleTimer = window.setTimeout(subtitleLoop, 250);
        return;
      }

      subtitleTimer = window.setTimeout(subtitleLoop, 45);
      return;
    }

    if (subtitlePhase === "delete1") {
      line1El.textContent = subtitleLines[0].slice(0, subtitleIndex - 1);
      subtitleIndex -= 1;

      if (subtitleIndex === 0) {
        subtitlePhase = "line1";
        subtitleIndex = 0;
        subtitleTimer = window.setTimeout(subtitleLoop, 600);
        return;
      }

      subtitleTimer = window.setTimeout(subtitleLoop, 45);
      return;
    }
  }

  var blocks = {
    interests: {
      title: "爱好",
      text: "这里记录我感兴趣的万事万物。",
      link: kalxrSiteUrl("interests/"),
      color: "#e30512"
    },
    notes: {
      title: "随笔",
      text: "一些随想、记录与碎片文字。",
      link: kalxrSiteUrl("notes/"),
      color: "#facd01"
    },
    photos: {
      title: "Nikon记忆",
      text: "生命中总有美好时刻值得记录。",
      link: kalxrSiteUrl("photos/"),
      color: "#044ea2"
    },
    about: {
      title: "关于我",
      text: "你好，我是 KALXR。",
      link: kalxrSiteUrl("about/"),
      color: "#ffffff"
    }
  };

  function openBlock(key) {
    var data = blocks[key];
    if (!data || !modal || !card) {
      return;
    }

    cardTitle.textContent = data.title;
    cardText.textContent = data.text;
    cardLink.href = data.link;
    card.style.background = data.color;
    cardTitle.style.color = key === "notes" || key === "about" ? "#111" : "#fff";
    cardText.style.color = key === "notes" || key === "about" ? "#333" : "rgba(255,255,255,0.92)";
    cardLink.style.color = key === "notes" || key === "about" ? "#111" : "#fff";
    cardLink.style.borderColor = key === "notes" || key === "about" ? "#111" : "#fff";
    cardClose.style.color = key === "notes" || key === "about" ? "#111" : "#fff";
    modal.classList.add("active");
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove("active");
    }
  }

  document.querySelectorAll("[data-kalxr-block]").forEach(function (block) {
    block.addEventListener("click", function () {
      openBlock(block.getAttribute("data-kalxr-block"));
    });
  });

  document.querySelectorAll("[data-kalxr-link]").forEach(function (block) {
    block.addEventListener("click", function () {
      window.location.href = kalxrSiteUrl(block.getAttribute("data-kalxr-link"));
    });
  });

  if (scrollHint) {
    scrollHint.addEventListener("click", function () {
      var target = document.getElementById("kalxrMondrian");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  if (cardClose) {
    cardClose.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  resetSubtitleLines();
  subtitleLoop();
}
