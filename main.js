const openMenuButton = document.querySelector("i.ph-list");
const closeMenyButton = document.querySelector("i.ph-x");
const menu = document.getElementById("actions");

const openMenuButtonClick = openMenuButton.addEventListener(
  "click",
  toggleMenu
);

const closeMenyButtonClick = closeMenyButton.addEventListener(
  "click",
  toggleMenu
);

function toggleMenu() {
  menu.classList.toggle("hidden");
  openMenuButton.classList.toggle("hidden");
  closeMenyButton.classList.toggle("hidden");
}
