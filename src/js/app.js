const toggle = document.querySelector(".theme-toggle");
const toggler = document.querySelector(".toggler");
const indicator = document.querySelector(".indicator");
const megaCards = document.querySelectorAll(".mega-card");
const miniCards = document.querySelectorAll(".mini-card");
const body = document.querySelector("body");
const mainTitle = document.querySelector(".dashboard-main-title");
const totalFollowers = document.querySelector(".total-followers");

toggle.addEventListener("click", function () {
  indicator.classList.toggle("clicked");
  toggler.classList.toggle("light-theme");
  body.classList.toggle("light-theme");
  totalFollowers.classList.toggle("light-theme");
  mainTitle.classList.toggle("light-theme");
  megaCards.forEach((card) => {
    card.classList.toggle("light-theme");
  });
  miniCards.forEach((card) => {
    card.classList.toggle("light-theme");
  });
});
