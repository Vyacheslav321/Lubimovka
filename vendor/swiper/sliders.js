import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

export const reviewSlider = new Swiper('.review-slider', {
  
  speed: 800,
  spaceBetween: 30,
  setTransition: 1,
  simulateTouch: true,
  grabCursor: true,
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
      slidesPerView: 'auto',
      centeredSlides: true,
    }
  }
})

export const audienceReviewsSlider = new Swiper('.audience-reviews', {
  speed: 800,
  
  spaceBetween: 30,
  loop: true,
  simulateTouch: true,
  grabCursor: true,
  slideNextClass: 'audience-reviews__next',
  slidePrevClass: 'audience-reviews__prev',
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
      slidesPerView: 1,
      slidesPerGroup: 1,
      fadeEffect: {
        crossFade: true
      },
    },
    645: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  }
})
