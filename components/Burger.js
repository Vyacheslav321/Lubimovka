export class Burger {
  constructor(navSelector, burgerSelector) {
    this.navElement = document.querySelector(navSelector);
    this.burgerElement = document.querySelector(burgerSelector);
  }

  _handleToggle() {
    this.navElement.classList.toggle('nav_is-opened');
    this.navElement.style = 'transition: margin-top .6s ease-in-out;'
    this.burgerElement.classList.toggle('menu-burger_is-active');
  }

  handleListeners() {
    this.burgerElement.addEventListener('click', () => this._handleToggle());
  }
}