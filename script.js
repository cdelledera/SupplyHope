// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Auto-close menu on mobile after clicking
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.remove("show");
    toggleBtn.setAttribute("aria-expanded", "false");
  });
});

// Mobile toggle
const toggleBtn = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

toggleBtn.addEventListener("click", () => {
  const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
  toggleBtn.setAttribute("aria-expanded", String(!isExpanded));
  navMenu.classList.toggle("show");
});

// Close menu when clicking outside of it

document.addEventListener("click", (event) => {
  const isClickInside =
    navMenu.contains(event.target) || toggleBtn.contains(event.target);
  if (!isClickInside && navMenu.classList.contains("show")) {
    navMenu.classList.remove("show");
    toggleBtn.setAttribute("aria-expanded", "false");
  }
});

// Close menu when clicking on a link in the menu
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    toggleBtn.setAttribute("aria-expanded", "false");
  });
});
// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const sections = document.querySelectorAll("section[id]");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50; // Adjust for fixed header height
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      document.querySelector(".nav-menu a.active").classList.remove("active");
      document
        .querySelector(`.nav-menu a[href="#${sectionId}"]`)
        .classList.add("active");
    }
  });
});
// Back-to-top button functionality
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// Initialize the back-to-top button visibility on page load
window.addEventListener("load", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("visible");
  }
});
// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", String(!isExpanded));
  navMenu.classList.toggle("show");
});

// Close hamburger menu when clicking outside of it
document.addEventListener("click", (event) => {
  const isClickInside =
    navMenu.contains(event.target) || hamburger.contains(event.target);
  if (!isClickInside && navMenu.classList.contains("show")) {
    navMenu.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
  }
});