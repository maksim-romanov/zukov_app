import "../styles/index.sass";

import { createToggleNavbar } from "./navbarToogle";
import { BURGER_SELECTOR } from "./constants";

const toggleNavbar = createToggleNavbar();

const burgerButton = document.querySelector(BURGER_SELECTOR);
burgerButton.addEventListener("click", () => {
  toggleNavbar.toogle();
});
