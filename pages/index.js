import {Burger} from "../components/Burger.js";

const burgerElement = document.querySelector('.menu-burger');
const burgerTopNavigation = new Burger('nav', 'menu-burger');
const burgerScrollNavigation = new Burger('header__body', 'menu-burger');

const activateNavigation = () => {
  const screenWidth = window.screen.width;
  if (screenWidth <= 645) {
    burgerScrollNavigation.handleToggle();
    burgerScrollNavigation.disableScroll();
  } else {
    burgerTopNavigation.handleToggle();
  }
}

burgerElement.addEventListener('click', activateNavigation)

