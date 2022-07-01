import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

export const reviewSlider = new Swiper('.review-slider', {

  // Optional parameters
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 800,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".review-slider__pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.review-slider__button-next',
    prevEl: '.review-slider__button-prev',
  },
})
