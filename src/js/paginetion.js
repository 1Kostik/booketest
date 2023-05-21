// // const { Pagination } = require("swiper");
//   //текущая страница
//   let currentPage = 1;
//   // сколько книг выводить на страничку
//   let rows = 3;
//   // отрисовывает кнопки на страничке
//   function displayPagination(arrData, rowPerPage) {
//     const paginationEl = document.querySelector('.paginationBook');
//     const pagesCount = Math.ceil(arrData.length / rowPerPage);
//     const ulEl = document.createElement('ul');
//     ulEl.classList.add('pagination_list');
//     for (let i = 0; i < pagesCount; i += 1) {
//       const liEl = displayPaginationbtn(i + 1);
//       ulEl.appendChild(liEl);
//     }
//     paginationEl.appendChild(ulEl);
//   }

//   // отрисовывает кнопки из предыдущей функици
//   function displayPaginationbtn(page) {
//      const liEl = document.createElement('li');
     
//     liEl.classList.add('pagination_item');
//     liEl.innerText = page;
//     if (currentPage == page) liEl.classList.add('pagination_item_active');
//     liEl.addEventListener('click', () => {
//       currentPage = page;
//       if (currentPage) {
  
//       }
//       // displayList(books, rows, currentPage);
//       let currentItemLi = document.querySelector('li.pagination_item_active');
//       currentItemLi.classList.remove('pagination_item_active');
//       liEl.classList.add('pagination_item_active');
//     });
//     return liEl;
//   }
// //   displayList(books, rows, currentPage);
//   displayPagination(books, rows);

// // import {
// //   makeShoplistMarkup,
// //   removesBookFromShoppingList,
// // } from './shoppingList';

// const { Pagination } = require("swiper");


// //получаем данные из локалстреджа
//  function getDataJson() {
//    const data =  localStorage.getItem('shoppingList');
//    const shoppingList =  JSON.parse(data);
//    return shoppingList;
// }
// //
// function main() {
//   const books = getDataJson();
//   //текущая страница
//   let currentPage = 1;
//   // сколько книг выводить на страничку
//   let rows = 3;

//   //  отрисовывает днные
// //   function displayList(arrData, rowPerPage, page) {
// //     const postBook = document.querySelector('.shopping-list-empty-page');
// //     postBook.innerHTMl = '';
// //     page -= 1;
// //     // const start = rowPerPage * page;
// //     // const end = start + rowPerPage;
// //     // const paginationData = arrData.slice(start,end);
// //   }
//   // отрисовывает кнопки на страничке
//   function displayPagination(arrData, rowPerPage) {
//     const paginationEl = document.querySelector('.paginationBook');
//     const pagesCount = Math.ceil(arrData.length / rowPerPage);
//     const ulEl = document.createElement('ul');
//     ulEl.classList.add('pagination_list');
//     for (let i = 0; i < pagesCount; i += 1) {
//       const liEl = displayPaginationbtn(i + 1);
//       ulEl.appendChild(liEl);
//     }
//     paginationEl.appendChild(ulEl);
//   }

//   // отрисовывает кнопки из предыдущей функици
//   function displayPaginationbtn(page) {
//      const liEl = document.createElement('li');
     
//     liEl.classList.add('pagination_item');
//     liEl.innerText = page;
//     if (currentPage == page) liEl.classList.add('pagination_item_active');
//     liEl.addEventListener('click', () => {
//       currentPage = page;
//       if (currentPage) {
  
// }






//       // displayList(books, rows, currentPage);
//       let currentItemLi = document.querySelector('li.pagination_item_active');
//       currentItemLi.classList.remove('pagination_item_active');
//       liEl.classList.add('pagination_item_active');
//     });
//     return liEl;
//   }
// //   displayList(books, rows, currentPage);
//   displayPagination(books, rows);
// }
//  main();



// let page = 1;
// console.log(page);
// let start = 0;
// let end = 3;
// switch (page) {
//   case (page = 1):
//     start = 0;
//     end = 3;
//     break;
//   case (page = 2):
//     start = 3;
//     end = 6;
//     break;
//   case (page = 3):
//     start = 6;
//     end = 9;
//     break;
//   case (page = 4):
//     start = 9;
//     end = 12;
//     break;
//   case (page = 5):
//     start = 12;
//     end = 15;
//     break;
//   case (page = 6):
//     start = 15;
//     end = 18;
//     break;
//   case (page = 7):
//     start = 18;
//     end = 21;
//     break;
//   case (page = 8):
//     start = 21;
//     end = 24;
//     break;
//   case (page = 9):
//     start = 24;
//     end = 27;
//     break;
//   case (page = 10):
//     start = 27;
//     end = 30;
//     break;
//   default:
//     інструкції;
// }
// data.slice(start, end).forEach(d => {
//   console.log(d);
// });