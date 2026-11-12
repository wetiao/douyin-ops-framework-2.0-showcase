(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  var backTop = document.querySelector(".back-top");

  function closeMenu() {
    if (!header || !toggle) return;
    header.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "打开导航");
  }

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
    });
  }

  if (nav) {
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 980) closeMenu();
  });

  function updateBackTop() {
    if (!backTop) return;
    backTop.classList.toggle("visible", window.scrollY > 640);
  }

  window.addEventListener("scroll", updateBackTop, { passive: true });
  updateBackTop();

  if (backTop) {
    backTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
