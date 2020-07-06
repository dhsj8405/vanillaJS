const dropDownButton = document.querySelector(".dropdown-button");
const dropDownMenu = document.querySelector(".dropdown-menu");
const ACTIVE = "active";

const dropDownShowing = (event) => dropDownMenu.classList.toggle(ACTIVE);

dropDownButton.addEventListener("click", dropDownShowing);
