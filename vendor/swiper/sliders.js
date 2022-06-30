import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

export const reviewSlider = new Swiper('.review-slider', {

  // Optional parameters
  slidesPerView: '3',

  spaceBetween: 30,
  centerSlides: true,
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
