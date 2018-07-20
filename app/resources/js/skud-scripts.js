// Стрелки галереи и отзывов
var galleryBtnLeft = document.querySelector('.cat-skud .main-gallery .main-gallery__arrows-arrow-left'),
galleryBtnRight = document.querySelector('.cat-skud .main-gallery .main-gallery__arrows-arrow-right'),
reviewBtnLeft = document.querySelector('.cat-skud .main-reviews .main-gallery__arrows-arrow-left'),
reviewBtnRight = document.querySelector('.cat-skud .main-reviews .main-gallery__arrows-arrow-right');

// счетчик пагинации
window.onload = (e) => {
  // общее количество вкладок Галереи
  var galleryItemCountAllField = document.querySelector('.cat-skud .main-gallery .main-gallery__arrows-center-all'),
  galleryItemLgth = document.querySelectorAll('.cat-skud .main-gallery .slick-slide:not(.slick-cloned)').length;
  galleryItemCountAllField.innerHTML = galleryItemLgth;

  // общее количество вкладок Отзывов
  var reviewsItemCountAllField = document.querySelector('.cat-skud .main-reviews .main-gallery__arrows-center-all'),
  reviewsItemLgth = document.querySelectorAll('.cat-skud .main-reviews .slick-slide:not(.slick-cloned)').length;
  reviewsItemCountAllField.innerHTML = reviewsItemLgth;

  galleryItem();
  reviewsItem();
}
// текущая вкладка галереи
const galleryItem = () => {
  var target = document.querySelector('.cat-skud .main-gallery .slick-current'),
  galleryItems = document.querySelectorAll('.cat-skud .main-gallery .slick-slide:not(.slick-cloned)'),
  galleryItemCountCurrentField = document.querySelector('.cat-skud .main-gallery .main-gallery__arrows-center-current');

  for(var i=0; i<galleryItems.length; i++) {
    if (target === galleryItems[i]) {
      var galleryItemCountCurrentValue = i + 1;
      break;
    }
  }
  galleryItemCountCurrentField.innerHTML = galleryItemCountCurrentValue;
}
galleryBtnLeft.onclick = () => {
  var galleryHiddenLeft = document.querySelector('.cat-skud .main-gallery .slick-prev');
  galleryHiddenLeft.click();
  galleryItem();
};
galleryBtnRight.onclick = () => {
  var galleryHiddenRight = document.querySelector('.cat-skud .main-gallery .slick-next');
  galleryHiddenRight.click();
  galleryItem();
};

// текущая вкладка отзывов
const reviewsItem = () => {
  var target = document.querySelector('.cat-skud .main-reviews .slick-current'),
  reviewsItems = document.querySelectorAll('.cat-skud .main-reviews .slick-slide:not(.slick-cloned)'),
  reviewsItemCountCurrentField = document.querySelector('.cat-skud .main-reviews .main-gallery__arrows-center-current');

  for(var i=0; i<reviewsItems.length; i++) {
    if (target === reviewsItems[i]) {
      var reviewsItemCountCurrentValue = i + 1;
      break;
    }
  }
  reviewsItemCountCurrentField.innerHTML = reviewsItemCountCurrentValue;
}
reviewBtnLeft.onclick = () => {
  reviewHiddenLeft = document.querySelector('.cat-skud .main-reviews .slick-prev');
  reviewHiddenLeft.click();
  reviewsItem();
};
reviewBtnRight.onclick = () => {
  reviewHiddenRight = document.querySelector('.cat-skud .main-reviews .slick-next');
  reviewHiddenRight.click();
  reviewsItem();
};

// обновление счетчика при свайпе
var itemSwipe = document.querySelector('.cat-skud .main-gallery__items');
itemSwipe.onmouseup = () => {
  galleryItem();
}
var itemSwipe = document.querySelector('.cat-skud .main-reviews__items');
itemSwipe.onmouseup = () => {
  reviewsItem();
}
