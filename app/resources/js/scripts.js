console.log('start')
// Стрелки галереи и отзывов
var galleryBtnLeft = document.querySelector('.main-gallery .main-gallery__arrows-arrow-left'),
galleryBtnRight = document.querySelector('.main-gallery .main-gallery__arrows-arrow-right'),
reviewBtnLeft = document.querySelector('.main-reviews .main-gallery__arrows-arrow-left'),
reviewBtnRight = document.querySelector('.main-reviews .main-gallery__arrows-arrow-right');

galleryBtnLeft.onclick = () => {
  var galleryHiddenLeft = document.querySelector('.main-gallery .slick-prev');
  galleryHiddenLeft.click();
};
galleryBtnRight.onclick = () => {
  var galleryHiddenRight = document.querySelector('.main-gallery .slick-next');
  galleryHiddenRight.click();
};
reviewBtnLeft.onclick = () => {
  reviewHiddenLeft = document.querySelector('.main-reviews .slick-prev');
  reviewHiddenLeft.click();
};
reviewBtnRight.onclick = () => {
  reviewHiddenRight = document.querySelector('.main-reviews .slick-next');
  reviewHiddenRight.click();
};
