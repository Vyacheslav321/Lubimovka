export class Burger {
  constructor(blockSelector, burgerSelector) {
    this.blockSelector = blockSelector;
    this.burgerSelector = burgerSelector;
    
    this.blockElement = document.querySelector(`.${this.blockSelector}`)
    this.burgerElement = document.querySelector(`.${this.burgerSelector}`)
  } 

  handleToggle() {
    this.blockElement.classList.toggle(`${this.blockSelector}_is-active`);
    this.blockElement.style = 'transition: all .6s ease-in-out;'
    this.burgerElement.classList.toggle(`${this.burgerSelector}_is-active`);
  }
  
  disableScroll() {
    const rootElement = document.querySelector('.root');
    rootElement.classList.toggle('root_lock');
  }
}