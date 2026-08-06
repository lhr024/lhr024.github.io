/* 主页沉浸式模式 & 非主页顶部小标题控制 */
document$.subscribe(function () {
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
});
