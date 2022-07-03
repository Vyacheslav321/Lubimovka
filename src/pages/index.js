import '@fancyapps/ui/dist/fancybox.css'
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.css';
import {Burger} from "../components/Burger.js";
import Swiper, { Navigation, Pagination } from 'swiper';
import {Fancybox} from "@fancyapps/ui";



const playBtn = document.querySelector('.video__play-btn');
const videoPoster = document.querySelector('.video__poster');
const videoHidden = document.querySelector('.video__hidden');

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


playBtn.addEventListener('click', () => {
  videoPoster.style.display = 'none';
  playBtn.style.display = 'none';
  videoHidden.classList.add('video__iframe');
  videoHidden.src = "https://www.youtube.com/embed/_GvtV2bfc7Q?autoplay=1&amp;mute=1";
});

Swiper.use([Navigation, Pagination]);

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

Fancybox.show(
  {
    infinite: true,
    dragToClose: true,
    keyboard: {
      Escape: "close",
      Delete: "close",
      Backspace: "close",
      PageUp: "next",
      PageDown: "prev",
      ArrowUp: "next",
      ArrowDown: "prev",
      ArrowRight: "next",
      ArrowLeft: "prev",
    },
    l10n: {
      CLOSE: "Закрыть",
      NEXT: "Вперёд",
      PREV: "Назад",
      MODAL: "Вы можете закрыть окно используя клавишу ESC",
      ERROR: "Что-то пошло не так, пожалуйста, повторите попытку.",
      IMAGE_ERROR: "Изображение не найдено",
      ELEMENT_NOT_FOUND: "HTML-элемент не найден",
      AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
      AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
      IFRAME_ERROR: "Error Loading Page",
    }
  }
);
