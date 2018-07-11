// Стрелки галереи и отзывов
var galleryBtnLeft = document.querySelector('.gallery-item .main-gallery__arrows-arrow-left'),
galleryBtnRight = document.querySelector('.gallery-item .main-gallery__arrows-arrow-right');

// текущая вкладка галереи
var galleryItemPage = () => {
  var target = document.querySelector('.gallery-item .slick-current'),
  galleryItems = document.querySelectorAll('.gallery-item .slick-slide:not(.slick-cloned)'),
  galleryItemCountCurrentField = document.querySelector('.gallery-item .main-gallery__arrows-center-current');

  for(var i=0; i<galleryItems.length; i++) {
    if (target === galleryItems[i]) {
      var galleryItemCountCurrentValue = i + 1;
      break;
    }
  }
  galleryItemCountCurrentField.innerHTML = galleryItemCountCurrentValue;
}
galleryBtnLeft.onclick = () => {
  var galleryHiddenLeft = document.querySelector('.gallery-item .slick-prev');
  galleryHiddenLeft.click();
  galleryItemPage();
};
galleryBtnRight.onclick = () => {
  var galleryHiddenRight = document.querySelector('.gallery-item .slick-next');
  galleryHiddenRight.click();
  galleryItemPage();
};

// счетчик пагинации
window.onload = (e) => {
  // общее количество вкладок Галереи
  var galleryItemCountAllField = document.querySelector('.gallery-item .main-gallery__arrows-center-all'),
  galleryItemLgth = document.querySelectorAll('.gallery-item .slick-slide:not(.slick-cloned)').length;
  galleryItemCountAllField.innerHTML = galleryItemLgth;

  galleryItemPage();
}
