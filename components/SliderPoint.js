//export default 
class SliderPoint {
  constructor(number) {
    this._number = number;
  }

  _getTemplate() {
    const template = document.querySelector('.template-point').content.querySelector('.slider__point').cloneNode(true);
    //const template = document.querySelector('.template-point').cloneNode(true);
    return template;
  }

  generatePoint() {
    this.element = this._getTemplate();
    return this.element;
  }

  setAppearance(number) {
    if (number === this._number) {
      this.element.classList.add('slider__point_active');
    } else {
      this.element.classList.remove('slider__point_active');
    }
  }
}