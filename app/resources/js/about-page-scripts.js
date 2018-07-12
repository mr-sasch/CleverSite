// Стрелки галереи и отзывов
var reviewBtnLeft = document.querySelector('.about .main-gallery__arrows-arrow-left'),
reviewBtnRight = document.querySelector('.about .main-gallery__arrows-arrow-right');

// счетчик пагинации
window.onload = (e) => {
  // общее количество вкладок Отзывов
  var reviewsItemCountAllField = document.querySelector('.about .main-gallery__arrows-center-all'),
  reviewsItemLgth = document.querySelectorAll('.about .slick-slide:not(.slick-cloned)').length;
  reviewsItemCountAllField.innerHTML = reviewsItemLgth;

  reviewsItem();
}

// текущая вкладка отзывов
const reviewsItem = () => {
  var target = document.querySelector('.about .slick-current'),
  reviewsItems = document.querySelectorAll('.about .slick-slide:not(.slick-cloned)'),
  reviewsItemCountCurrentField = document.querySelector('.about .main-gallery__arrows-center-current');

  for(var i=0; i<reviewsItems.length; i++) {
    if (target === reviewsItems[i]) {
      var reviewsItemCountCurrentValue = i + 1;
      break;
    }
  }
  reviewsItemCountCurrentField.innerHTML = reviewsItemCountCurrentValue;
}
reviewBtnLeft.onclick = () => {
  reviewHiddenLeft = document.querySelector('.about .slick-prev');
  reviewHiddenLeft.click();
  reviewsItem();
};
reviewBtnRight.onclick = () => {
  reviewHiddenRight = document.querySelector('.about .slick-next');
  reviewHiddenRight.click();
  reviewsItem();
};
