import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

export const reviewSlider = new Swiper('.review-slider', {

  // Optional parameters
  
  speed: 800,
  spaceBetween: 30,
  pagination: {
    el: ".review-slider__pagination",
    clickable: true,
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.review-slider__button-next',
    prevEl: '.review-slider__button-prev',
  },

  breakpoints: {
    0: {
      centeredSlides: false,
      slidesPerView: 1,
    },
    645: {
      centeredSlides: true,
      slidesPerView: 'auto',
    }
  }
})
