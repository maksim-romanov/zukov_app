import {
  APP_SELECTOR,
  BURGER_SELECTOR,
  NAVBAR_SELECTOR,
  BURGER_ACTIVE_CLASS,
  NAVBAR_ACTIVE_CLASS,
  APP_INACTIVE_CLASS,
} from "./constants";

export const createToggleNavbar = () => {
  let isBirgerActive = false;
  const _appTarget = document.querySelector(APP_SELECTOR);
  const _burgerTarget = document.querySelector(BURGER_SELECTOR);
  const _navbarTarget = document.querySelector(NAVBAR_SELECTOR);

  const hideNavbar = () => {
    setTimeout(() => {
      isBirgerActive = false;
      _appTarget.classList.remove(APP_INACTIVE_CLASS);
      _burgerTarget.classList.remove(BURGER_ACTIVE_CLASS);
      _navbarTarget.classList.remove(NAVBAR_ACTIVE_CLASS);
    }, 0);
  };

  const navbarListener = function (event) {
    var isClickInside = _navbarTarget.contains(event.target);
    if (!isClickInside && isBirgerActive) {
      _appTarget.removeEventListener("click", navbarListener);
      hideNavbar();
    }
  };

  const showNavbar = () => {
    _appTarget.addEventListener("click", navbarListener);

    setTimeout(() => {
      isBirgerActive = true;
      _navbarTarget.classList.add(NAVBAR_ACTIVE_CLASS);
      _burgerTarget.classList.add(BURGER_ACTIVE_CLASS);
      _appTarget.classList.add(APP_INACTIVE_CLASS);
    }, 0);
  };

  return {
    toogle: () => {
      if (isBirgerActive) {
        hideNavbar();
        return;
      }

      showNavbar();
      return;
    },
  };
};
