

sideMenu.onclick = (e) => {
  var catalogItem = document.querySelectorAll('.catalog-item');
  var target = e.target;
  var catalogItemCntnt = document.querySelectorAll('.catalog-item__cntnt');
  var catalogItemCntntWrap = document.querySelectorAll('.catalog-item__cntnt-wrap');

  // Определяем текущий элемент
  for (var i=0; i<catalogItem.length; i++) {


    if (target.parentNode === catalogItem[i]) {
      var currentItem = i;
      break;
    }
  }
  var currentItemHeight = catalogItemCntnt[currentItem].offsetHeight;

  // удаляем эктив, если уже есть
  if (target.parentNode.className.includes('active')) {
    catalogItemCntntWrap[currentItem].style.height = '0px';
    target.parentNode.classList.remove('active');
    return;
  }

  if (target.className === 'catalog-item__ttl') {
    for (var i=0; i<catalogItem.length; i++) {
      // Удаляем все эктивы, и сворачиваем по высоте
      catalogItem[i].classList.remove('active');
      catalogItemCntntWrap[i].style.height = '0px';

      // Добавляем эктив текущему элементу
      catalogItem[currentItem].classList.add('active');
      // задаем высоту активного айтема
      catalogItemCntntWrap[currentItem].style.height = currentItemHeight + 'px';
    }
  }



}
