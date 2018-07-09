// Стрелки галереи и отзывов
var galleryBtnLeft = document.querySelector('.main-gallery .main-gallery__arrows-arrow-left'),
galleryBtnRight = document.querySelector('.main-gallery .main-gallery__arrows-arrow-right'),
reviewBtnLeft = document.querySelector('.main-reviews .main-gallery__arrows-arrow-left'),
reviewBtnRight = document.querySelector('.main-reviews .main-gallery__arrows-arrow-right');

reviewBtnLeft.onclick = () => {
  reviewHiddenLeft = document.querySelector('.main-reviews .slick-prev');
  reviewHiddenLeft.click();
};
reviewBtnRight.onclick = () => {
  reviewHiddenRight = document.querySelector('.main-reviews .slick-next');
  reviewHiddenRight.click();
};

// счетчик пагинации галереи
window.onload = (e) => {
    // общее количество вкладок
  var galleryItemCountAllField = document.querySelector('.main-gallery .main-gallery__arrows-center-all'),
  galleryItemLgth = document.querySelectorAll('.main-gallery .slick-slide:not(.slick-cloned)').length;

  galleryItemCountAllField.innerHTML = galleryItemLgth;
  galleryItem();
}
// текущая вкладка
const galleryItem = () => {
  console.log('клик');
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
