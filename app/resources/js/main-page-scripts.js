// Стрелки галереи и отзывов
var galleryBtnLeft = document.querySelector('.main-gallery .main-gallery__arrows-arrow-left'),
galleryBtnRight = document.querySelector('.main-gallery .main-gallery__arrows-arrow-right'),
reviewBtnLeft = document.querySelector('.main-reviews .main-gallery__arrows-arrow-left'),
reviewBtnRight = document.querySelector('.main-reviews .main-gallery__arrows-arrow-right');

// счетчик пагинации
window.onload = (e) => {
  // общее количество вкладок Галереи
  var galleryItemCountAllField = document.querySelector('.main-gallery .main-gallery__arrows-center-all'),
  galleryItemLgth = document.querySelectorAll('.main-gallery .slick-slide:not(.slick-cloned)').length;
  galleryItemCountAllField.innerHTML = galleryItemLgth;

  // общее количество вкладок Отзывов
  var reviewsItemCountAllField = document.querySelector('.main-reviews .main-gallery__arrows-center-all'),
  reviewsItemLgth = document.querySelectorAll('.main-reviews .slick-slide:not(.slick-cloned)').length;
  reviewsItemCountAllField.innerHTML = reviewsItemLgth;

  galleryItem();
  reviewsItem();
}
// текущая вкладка галереи
const galleryItem = () => {
  var target = document.querySelector('.main-gallery .slick-current'),
  galleryItems = document.querySelectorAll('.main-gallery .slick-slide:not(.slick-cloned)'),
  galleryItemCountCurrentField = document.querySelector('.main-gallery .main-gallery__arrows-center-current');

  for(var i=0; i<galleryItems.length; i++) {
    if (target === galleryItems[i]) {
      var galleryItemCountCurrentValue = i + 1;
      break;
    }
  }
  galleryItemCountCurrentField.innerHTML = galleryItemCountCurrentValue;
}
galleryBtnLeft.onclick = () => {
  var galleryHiddenLeft = document.querySelector('.main-gallery .slick-prev');
  galleryHiddenLeft.click();
  galleryItem();
};
galleryBtnRight.onclick = () => {
  var galleryHiddenRight = document.querySelector('.main-gallery .slick-next');
  galleryHiddenRight.click();
  galleryItem();
};

// текущая вкладка отзывов
const reviewsItem = () => {
  var target = document.querySelector('.main-reviews .slick-current'),
  reviewsItems = document.querySelectorAll('.main-reviews .slick-slide:not(.slick-cloned)'),
  reviewsItemCountCurrentField = document.querySelector('.main-reviews .main-gallery__arrows-center-current');

  for(var i=0; i<reviewsItems.length; i++) {
    if (target === reviewsItems[i]) {
      var reviewsItemCountCurrentValue = i + 1;
      break;
    }
  }
  reviewsItemCountCurrentField.innerHTML = reviewsItemCountCurrentValue;
}
reviewBtnLeft.onclick = () => {
  reviewHiddenLeft = document.querySelector('.main-reviews .slick-prev');
  reviewHiddenLeft.click();
  reviewsItem();
};
reviewBtnRight.onclick = () => {
  reviewHiddenRight = document.querySelector('.main-reviews .slick-next');
  reviewHiddenRight.click();
  reviewsItem();
};

// обновление счетчика при свайпе
var itemSwipe = document.querySelector('.main-gallery__items');
itemSwipe.onmouseup = () => {
  galleryItem();
}
var itemSwipe = document.querySelector('.main-reviews__items');
itemSwipe.onmouseup = () => {
  reviewsItem();
}

// Нам доверяют
var items = document.querySelectorAll('.string');
  // Активные строки текста
var addActive = (i) => {
  for (var q = 0; q < items.length; q++) {
    items[q].classList.remove('active');
  }
  items[i].classList.add('active');
};

  // Активные логотипы
var itemsLogo = document.querySelectorAll('.main-trust__item');
var addActiveLogo = (i) => {
  for (var q = 0; q < itemsLogo.length; q++) {
    itemsLogo[q].classList.remove('active');
  }
  itemsLogo[i].classList.add('active');
}

var i = 0;
var typed;
var doTyped = () => {
  typed = new Typed('#typed', {
    stringsElement: '.string.active',
    typeSpeed: 50
  });
  var func = setTimeout(function() {
    typed.destroy();
    addActive(i);
    addActiveLogo(i);
    i++;
    if (i === items.length) {
      i = 0;
      }
    doTyped();
  }, 2000);
}

doTyped();
