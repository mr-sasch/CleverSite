// Стрелки галереи и отзывов
var galleryBtnLeft = document.querySelector('.cat-video.cat-domof .main-gallery .main-gallery__arrows-arrow-left'),
galleryBtnRight = document.querySelector('.cat-video.cat-domof .main-gallery .main-gallery__arrows-arrow-right');

// счетчик пагинации
window.onload = (e) => {
  // общее количество вкладок Галереи
  var galleryItemCountAllField = document.querySelector('.cat-video.cat-domof .main-gallery .main-gallery__arrows-center-all'),
  galleryItemLgth = document.querySelectorAll('.cat-video.cat-domof .main-gallery .slick-slide:not(.slick-cloned)').length;
  galleryItemCountAllField.innerHTML = galleryItemLgth;

  galleryItem();
}
// текущая вкладка галереи
const galleryItem = () => {
  var target = document.querySelector('.cat-video.cat-domof .main-gallery .slick-current'),
  galleryItems = document.querySelectorAll('.cat-video.cat-domof .main-gallery .slick-slide:not(.slick-cloned)'),
  galleryItemCountCurrentField = document.querySelector('.cat-video.cat-domof .main-gallery .main-gallery__arrows-center-current');

  for(var i=0; i<galleryItems.length; i++) {
    if (target === galleryItems[i]) {
      var galleryItemCountCurrentValue = i + 1;
      break;
    }
  }
  galleryItemCountCurrentField.innerHTML = galleryItemCountCurrentValue;
}
galleryBtnLeft.onclick = () => {
  var galleryHiddenLeft = document.querySelector('.cat-video.cat-domof .main-gallery .slick-prev');
  galleryHiddenLeft.click();
  galleryItem();
};
galleryBtnRight.onclick = () => {
  var galleryHiddenRight = document.querySelector('.cat-video.cat-domof .main-gallery .slick-next');
  galleryHiddenRight.click();
  galleryItem();
};

// обновление счетчика при свайпе
var itemSwipe = document.querySelector('.cat-video.cat-domof .main-gallery__items');
itemSwipe.onmouseup = () => {
  galleryItem();
}
