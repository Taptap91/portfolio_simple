/* Portfolio (simple version): mobile menu toggle only */
(function () {
  var toggle = document.getElementById("menuToggle");
  var nav = document.getElementById("siteNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
})();
