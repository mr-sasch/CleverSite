$('.gallery-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 1000,
  lazyLoad: 'progressive'
});

$('.reviews-slider').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 350,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 1000,
  lazyLoad: 'progressive'
});
