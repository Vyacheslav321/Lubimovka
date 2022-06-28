import { Fancybox } from "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.esm.js";

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