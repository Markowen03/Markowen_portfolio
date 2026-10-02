const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 120;
    const sectionId = section.getAttribute("id");

    const navLink = document.querySelector(
      `.nav__menu a[href="#${sectionId}"]`,
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add("active-link");
    } else {
      navLink?.classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

function scrollHeader() {
  const header = document.querySelector(".l-header");

  if (window.scrollY >= 40) {
    header.style.boxShadow = "0 12px 30px rgba(0,0,0,.18)";
  } else {
    header.style.boxShadow = "none";
  }
}

window.addEventListener("scroll", scrollHeader);

// Terminal "typed" effect for the hero — a single, deliberate load-in
// moment rather than scattered animations across the page.
const typedTarget = document.getElementById("typed-text");
const typedPhrase = "whoami";
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (typedTarget) {
  if (prefersReducedMotion) {
    typedTarget.textContent = typedPhrase;
  } else {
    let i = 0;

    function typeChar() {
      if (i <= typedPhrase.length) {
        typedTarget.textContent = typedPhrase.slice(0, i);
        i++;
        setTimeout(typeChar, 110);
      }
    }

    window.addEventListener("load", () => {
      setTimeout(typeChar, 400);
    });
  }
}

const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1200,
  delay: 120,
  reset: false,
});

sr.reveal(".home__content");

sr.reveal(".home__img", {
  origin: "right",
  delay: 250,
});

sr.reveal(".about__img", {
  origin: "left",
});

sr.reveal(".about__content", {
  origin: "right",
  delay: 200,
});

sr.reveal(".skill__tile", {
  interval: 60,
});

sr.reveal(".education__container");

sr.reveal(".project__card", {
  interval: 120,
});

sr.reveal(".contact__content", {
  origin: "bottom",
  distance: "40px",
  delay: 150,
});

sr.reveal(".footer");

const themeButton = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.remove("dark-theme");

  themeButton.innerHTML = '<i class="bx bx-moon"></i>';
} else {
  body.classList.add("dark-theme");

  themeButton.innerHTML = '<i class="bx bx-sun"></i>';
}

themeButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  const isDark = body.classList.contains("dark-theme");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  themeButton.innerHTML = isDark
    ? '<i class="bx bx-sun"></i>'
    : '<i class="bx bx-moon"></i>';
});

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-3px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  console.log("Portfolio loaded successfully 🚀");
});