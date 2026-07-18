// Applied before first paint to avoid a theme flash. Dark is the default;
// "light" is opt-in via the footer toggle and remembered per browser.
(function () {
  try {
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    }
  } catch (e) { /* storage blocked: stay dark */ }
})();
