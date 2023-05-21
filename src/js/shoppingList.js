if (localStorage.getItem('shoppingList')) {
    const shoppingListContainer = document.querySelector(
      '.shopping-list-empty-page');
  const newShoppingListContainer = document.createElement('div');
  const shoppingListJSON = localStorage.getItem('shoppingList');
  //количество книг в хранилище
  let shoppingList = JSON.parse(shoppingListJSON);
  //--------------------------------------------------------
  // создание нового масива книг с разметкой и записью в контейнер нтмл
  const shoplistBooks = checkShoplist(shoppingList);

  function checkShoplist(shoppingList) {
    return shoppingList.map(makeShoplistMarkup);
  }
  // CreateMarkup
  // функци возращает новый масви книг с разметкой и записью в контейнер нтмл
  function makeShoplistMarkup(shoppingList) {
    const { bookImg, author, listName, description, title, buyLinks, id } =
      shoppingList;

    const shoplistBookContainer = document.createElement('div');
    shoplistBookContainer.classList.add('shoplist-book-container');
    shoplistBookContainer.dataset.id = id;

    const shoplistMarkup = `<img src="${bookImg}" class="shoplist-book-img">
        <div class="shoplist-desc-container">
          <h4 class="shoplist-book-title">${title}</h4>
          <p class="shoplist-book-genre">${listName}</p>
          <p class="shoplist-book-description">${description}</p>
           <p class="shoplist-book-author">${author}</p>
        </div>
        <div class="shoplist-icons">
    <ul class="shoplist-icons-list">
      <li class="shoplist-icons-li">
        <a href="${buyLinks[0].url}" target="blank">
          <div class="shoplist-icon-amazon"></div>
        </a>
      </li>
      <li class="shoplist-icons-li">
        <a href="${buyLinks[2].url}" target="blank">
          <div class="shoplist-icon-barnesAndNoble"></div>
        </a>
      </li>
      <li class="shoplist-icons-li">
        <a href="${buyLinks[4].url}" target="blank">
          <div class="shoplist-icon-bookshop"></div>
        </a>
      </li>
    </ul>
  </div>
        <div class="shoplist-trash"></div>
`;
    //запись в контейнер
    shoplistBookContainer.innerHTML = shoplistMarkup;
    // Возврат контенера
    return shoplistBookContainer;
  }
  // ----------------------------------------------------------
  // Create new container and replace markup
  
  // const newShoppingListContainer = document.createElement('div');
  
  // newShoppingListContainer.classList.add('shopping-list-container');
  
  //текущая страница
  
  let currentPage = 1;
  // сколько книг выводить на страничку
  let rows = 3;
  
  // start(currentPage);
  
  let start = 0;
 let end = 3;
  // отрисовывает кнопки на страничке
  function displayPagination(arrData, rowPerPage) {
    //  const pageContainer = document.querySelector('.shopping-list-container');
    //  pageContainer.innerHTML = '';
    const paginationEl = document.querySelector('.paginationBook');
    const pagesCount = Math.ceil(arrData.length / rowPerPage);
    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination_list');
    for (let i = 0; i < pagesCount; i += 1) {
      const liEl = displayPaginationbtn(i + 1);
      ulEl.appendChild(liEl);
    }
    paginationEl.appendChild(ulEl);
  }   
   
  // отрисовывает кнопки из предыдущей функици
  function displayPaginationbtn(pageEl) {
    const liEl = document.createElement('li');    
    liEl.classList.add('pagination_item');
    liEl.innerText = pageEl;
    if (currentPage == pageEl) liEl.classList.add('pagination_item_active');
    
    liEl.addEventListener('click', e => {      
      const pageContainer = document.querySelector('.shopping-list-container');
    
      let currentBtn = Number(e.target.textContent);  
      currentPage = currentBtn;
  
      let currentItemLi = document.querySelector('li.pagination_item_active');
      currentItemLi.classList.remove('pagination_item_active');
      liEl.classList.add('pagination_item_active');
      
      const shoplistBookContainer = document.querySelector(
        '.shoplist-book-container'
      );
      const allBooks = document.querySelectorAll('.shoplist-book-container');
        
      allBooks.forEach((item) => {
        item.remove()
      })

      const numberOfPage = startA(currentBtn);
      
    shoplistBooks.slice(numberOfPage[0], numberOfPage[1]).forEach(book => {
     
      newShoppingListContainer.appendChild(book);
    });

    shoppingListContainer.replaceWith(newShoppingListContainer);
  
    });
    return liEl;
  }
  //   displayList(books, rows, currentPage);
  displayPagination(shoppingList, rows);


  // start(currentPage);
 
  function startA(page) {
    //  console.log(currentPage);
    switch (page) {
      case  1:
        start = 0;
        end = 3;
        break;

      case  2:
        start = 3;
        end = 6;
        break ;
      // case (page = 3):
      //   start = 6;
      //   end = 9;
      //   break;
      // case (page = 4):
      //   start = 9;
      //   end = 12;
      //   break;
      // case (page = 5):
      //   start = 12;
      //   end = 15;
      //   break;
      // case (page = 6):
      //   start = 15;
      //   end = 18;
      //   break;
      // case (page = 7):
      //   start = 18;
      //   end = 21;
      //   break;
      // case (page = 8):
      //   start = 21;
      //   end = 24;
      //   break;
      // case (page = 9):
      //   start = 24;
      //   end = 27;
      //   break;
      // case (page = 10):
      //   start = 27;
      //   end = 30;
      //   break;
      default:
        інструкції;

    }
    return [start, end];
  }
    newShoppingListContainer.classList.add('shopping-list-container');
  const numberOfPage = startA(currentPage);
  console.log(numberOfPage)
  shoplistBooks.slice(numberOfPage[0], numberOfPage[1]).forEach(book => {
    console.log(book);
    newShoppingListContainer.appendChild(book);
  });

    // shoplistBooks.forEach((book, index, array) => {

    //           newShoppingListContainer.appendChild(book);

    //   // newShoppingListContainer.appendChild(book);

    // });

    shoppingListContainer.replaceWith(newShoppingListContainer);

    //--------------------------------------------------------------------------
    // Add trash to each element

    const shoplistTrash = document.querySelectorAll('.shoplist-trash');
    shoplistTrash.forEach(trash => {
      trash.addEventListener('click', removesBookFromShoppingList);
    });

    // Update Local Storage

    function removesBookFromShoppingList(event) {
      const id = event.target.closest('.shoplist-book-container').dataset.id;
      shoppingList = shoppingList.filter(book => book.id !== id);
      localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
      newShoppingListContainer.removeChild(
        event.target.closest('.shoplist-book-container')
      );

      // Fix updating on the page

      if (shoppingList.length === 0) {
        newShoppingListContainer.replaceWith(shoppingListContainer);
        paginationContainer.classList.add('pagination-hidden');
      }
    }

    function updateBookOnStorage() {
      localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    }

    if (shoppingList.length === 0) {
      if (!document.querySelector('.shopping-list-container')) {
        document.body.appendChild(newShoppingListContainer);
      }
      newShoppingListContainer.replaceWith(shoppingListContainer);
    }

    // Pagination

    const paginationContainer = document.querySelector('.pagination-container');

    if (paginationContainer) {
      if (shoppingList.length === 0) {
        paginationContainer.classList.add('pagination-hidden');
      } else {
        paginationContainer.classList.remove('pagination-hidden');
      }
    }
  // }
  // const { Pagination } = require("swiper");
}