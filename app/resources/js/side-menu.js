const mainSubMenu = (event) => {

}

const hide = () => {
  
}

// function mainSubMenu(event) {
//   var target = event.target;
//
//   var catalogItem = target.parentNode.parentNode.querySelectorAll('.catalog > .catalog-item');
//   var catalogItemCntnt = target.parentNode.parentNode.querySelectorAll('.catalog > .catalog-item > .catalog-item__cntnt-wrap > .catalog-item__cntnt');
//   var catalogItemCntntWrap = target.parentNode.parentNode.querySelectorAll('.catalog > .catalog-item > .catalog-item__cntnt-wrap');
//
//   // Определяем текущий элемент
//   for (var i=0; i<catalogItem.length; i++) {
//
//
//     if (target.parentNode === catalogItem[i]) {
//       var currentItem = i;
//       break;
//     }
//   }
//   var currentItemHeight = catalogItemCntnt[currentItem].offsetHeight;
//
//   var catalogItemCntntWrapParent = catalogItemCntntWrap[currentItem];
//
//   // удаляем эктив, если уже есть
//   if (target.parentNode.className.includes('active')) {
//     catalogItemCntntWrap[currentItem].style.height = '0px';
//     target.parentNode.classList.remove('active');
//     while (catalogItemCntntWrapParent !== document.body) {
//       catalogItemCntntWrapParent = catalogItemCntntWrapParent.parentNode;
//       if (catalogItemCntntWrapParent.className === 'catalog-item__cntnt-wrap') {
//         var height = catalogItemCntntWrapParent.offsetHeight;
//         catalogItemCntntWrapParent.style.height = height - currentItemHeight + 'px';
//       }
//     }
//     return;
//   }
//
//   if (target.className === 'catalog-item__ttl') {
//     for (var i=0; i<catalogItem.length; i++) {
//       // Удаляем все эктивы, и сворачиваем по высоте
//       catalogItem[i].classList.remove('active');
//       catalogItemCntntWrap[i].style.height = '0px';
//
//       // Добавляем эктив текущему элементу
//       catalogItem[currentItem].classList.add('active');
//       // задаем высоту активного айтема
//       catalogItemCntntWrap[currentItem].style.height = currentItemHeight + 'px';
//
//       while (catalogItemCntntWrapParent !== document.body) {
//         catalogItemCntntWrapParent = catalogItemCntntWrapParent.parentNode;
//         if (catalogItemCntntWrapParent.className === 'catalog-item__cntnt-wrap') {
//           var height = catalogItemCntntWrapParent.offsetHeight;
//           catalogItemCntntWrapParent.style.height = height + currentItemHeight + 'px';
//         }
//       }
//     }
//   }
// }
