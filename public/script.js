// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  // Close the menu after picking a link
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Scroll-reveal animation
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Dark/light theme toggle (dark is default; choice persisted per browser)
const themeToggle = document.querySelector(".theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const root = document.documentElement;
    const toLight = root.getAttribute("data-theme") !== "light";
    if (toLight) {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem("theme", toLight ? "light" : "dark");
    } catch (e) { /* storage blocked: theme still applies this visit */ }
  });
}
