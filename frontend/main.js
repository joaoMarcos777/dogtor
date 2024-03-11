const openMenuButton = document.querySelector("i.ph-list");
const closeMenuButton = document.querySelector("i.ph-x");
const menu = document.getElementById("actions");

const openMenuButtonClick = openMenuButton.addEventListener(
  "click",
  handleOpenMenuButtonClick
);

const closeMenuButtonClick = closeMenuButton.addEventListener(
  "click",
  handleCloseMenuButtonClick
);

function handleOpenMenuButtonClick() {
  changeMenuAnimation();

  menu.classList.remove("hidden");
  changeMenuDisplayButtons();
}

function handleCloseMenuButtonClick() {
  changeMenuAnimation(true);
  changeMenuDisplayButtons();
}

function changeMenuDisplayButtons() {
  openMenuButton.classList.toggle("hidden");
  closeMenuButton.classList.toggle("hidden");
}

function changeMenuAnimation(open) {
  menu.classList.add("scale-in-tr");
  menu.classList.remove("scale-out-tr");
  if (open) {
    menu.classList.remove("scale-in-tr");
    menu.classList.add("scale-out-tr");
  }
}
