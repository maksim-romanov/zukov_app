import "../styles/index.sass";
import img from "../apple.png";

import { createToggleNavbar } from "./navbarToogle";
import { BURGER_SELECTOR } from "./constants";

const toggleNavbar = createToggleNavbar();

const burgerButton = document.querySelector(BURGER_SELECTOR);
burgerButton.addEventListener("click", () => {
  toggleNavbar.toogle();
});

console.log("img", img);

// const includeFunc = (pathToPug, options = {}) => {
//   return pug.renderFile(pathToPug, options); //render the pug file
// };

// console.log("pug.renderFile", pug);
