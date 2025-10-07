const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Mobile Menu Toggle
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal Animations
const ScrollRevealParameters = {
  distance: "60px",
  origin: "top",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...ScrollRevealParameters,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...ScrollRevealParameters,
  delay: 500,
});

ScrollReveal().reveal(".header__content form", {
  ...ScrollRevealParameters,
  delay: 1000,
});

ScrollReveal().reveal(".header__content img", {
  ...ScrollRevealParameters,
  origin: "left",
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...ScrollRevealParameters,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...ScrollRevealParameters,
  delay: 500,
});

ScrollReveal().reveal(".section__signature", {
  ...ScrollRevealParameters,
  delay: 1000,
});

ScrollReveal().reveal(".tour__card", {
  ...ScrollRevealParameters,
  interval: 500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

const banner = document.querySelector(".banner__wrapper");
const bannerImages = Array.from(banner.children);

// Клонирование изображений для бесконечной прокрутки  - marquee effect)
bannerImages.forEach((item) => {
  const duplicateNode = item.cloneNode(true);         // копия узла
  duplicateNode.setAttribute("aria-hidden", true);    // скрыть для скринридеров
  banner.appendChild(duplicateNode);                  // добавить копию в конец
});


