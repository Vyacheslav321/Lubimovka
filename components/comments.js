//import SliderPoint from './SliderPoint.js';

const commentsItems = [
  { text: 'Что-то похожее на эффект от мультфильмов типа «Сауз Парк» или про коня Боджэка возникает — я думаю, и пьеса написана с этой интонацией американских взрослых мультсериалов. И как хорошо все это с куклой-носочком. Так все чисто сделано!', author: 'Наталья Зайцева' },
  { text: 'Для самой этой истории формат читки работает отличным ироническим отстранением', author: 'Дина Годер' },
  { text: 'Мне данный формат дал возможность самой выбирать, как двигается персонаж, что на нем надето, какую машину он водит, и что за плакат висит в подвале церкви. Это было приятно, ведь я как будто сама поучаствовала в спектакле', author: 'Дарья Морозова' },
  { text: 'Комментарий 4', author: 'Автор 4' },
  { text: 'Комментарий 5', author: 'Автор 5' },
  { text: 'Комментарий 6', author: 'Автор 6' },
  { text: 'Комментарий 7', author: 'Автор 7' },
  { text: 'Комментарий 8', author: 'Автор 8' },
  { text: 'Комментарий 9', author: 'Автор 9' },
  { text: 'Комментарий 10', author: 'Автор 10' },
  { text: 'Комментарий 11', author: 'Автор 11' },
  { text: 'Комментарий 12', author: 'Автор 12' },
];

let pageNumber = 0;
const maxCardNumber = commentsItems.length;
const maxPageNumber = Math.floor(commentsItems.length / 3) - 1;

class CommentCard {
  constructor({ text, author }, id) {
    this._text = text;
    this._author = author;
    this._id = id;
  }

  _getTemplate() {
    const template = this.element = document.querySelector('.template-comment').content.querySelector('.comment').cloneNode(true);
    return template;
  }

  _setCardText() {
    this._textElement.textContent = this._text;
    this._authorElement.textContent = this._author;
  }

  generateCard() {
    this.element = this._getTemplate();
    this._textElement = this.element.querySelector('.comment__text');
    this._authorElement = this.element.querySelector('.comment__author');

    this._setCardText();
    return this.element;
  }

  setCardData(number) {
    const index = number * 3 + this._id;
    if (index <= maxCardNumber) {
      this._text = commentsItems[index].text;
      this._author = commentsItems[index].author;
      this._setCardText();
    } else {
      this._text = 'Переполнение';
      this._author = 'Переполнение';
      this._setCardText();
    }
  }
}

const commentsIndicator = document.querySelector('.comments__indicator');
const commentsPoints = [];
for(i = 0; i <= maxPageNumber; i++) {
  commentsPoints[i] = new SliderPoint(i);
  commentsPoints[i].generatePoint();
  commentsPoints[i].setAppearance(pageNumber);
  commentsIndicator.append(commentsPoints[i].element);
}

const commentSlider = document.querySelector('.comments__content');

const newCard = [];
for (let i = 0; i < 3; i++) {
  newCard[i] = new CommentCard(commentsItems[i], i);
  newCard[i].generateCard();
  commentSlider.append(newCard[i].element);
}

const buttonCommentPrev = document.querySelector('.comments__button-prev');
const buttonCommentNext = document.querySelector('.comments__button-next');

buttonCommentPrev.addEventListener('click', () => {
  if (pageNumber > 0) { pageNumber--; buttonCommentNext.removeAttribute('disabled'); }
  for(let i = 0; i < 3; i++) {
    newCard[i].setCardData(pageNumber);
  }
  setPointsAppearance(commentsPoints, pageNumber);
  setCommentsButtonState();
});

buttonCommentNext.addEventListener('click', () => {
  if (pageNumber < maxPageNumber) { pageNumber++; buttonCommentPrev.removeAttribute('disabled'); }
  for(let i = 0; i < 3; i++) {
    newCard[i].setCardData(pageNumber);
  }
  setPointsAppearance(commentsPoints, pageNumber);
  setCommentsButtonState();
});

function setCommentsButtonState() {
  if (pageNumber === 0) {
    buttonCommentPrev.setAttribute('disabled', true) 
  } else 
  if (pageNumber === maxPageNumber) {
    buttonCommentNext.setAttribute('disabled', true)
  };
}

setCommentsButtonState();