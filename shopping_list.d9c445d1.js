var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},e=s.parcelRequire2f9e;null==e&&((e=function(s){if(s in i)return i[s].exports;if(s in o){var e=o[s];delete o[s];var t={id:s,exports:{}};return i[s]=t,e.call(t.exports,t,t.exports),t.exports}var n=new Error("Cannot find module '"+s+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(s,i){o[s]=i},s.parcelRequire2f9e=e),e("9TCtp");const t=document.querySelector(".shopping-list-empty-page"),n=localStorage.getItem("shoppingList");let l=JSON.parse(n);const a=l.map((function(s){const{bookImg:i,author:o,listName:e,description:t,title:n,buyLinks:l,id:a}=s,c=document.createElement("div");c.classList.add("shoplist-book-container"),c.dataset.id=a;const r=`<img src="${i}" class="shoplist-book-img">\n        <div class="shoplist-desc-container">\n          <h4 class="shoplist-book-title">${n}</h4>\n          <p class="shoplist-book-genre">${e}</p>\n          <p class="shoplist-book-description">${t}</p>\n           <p class="shoplist-book-author">${o}</p>\n        </div>\n        <div class="shoplist-icons">\n    <ul class="shoplist-icons-list">\n      <li class="shoplist-icons-li">\n        <a href="${l[0].url}">\n          <div class="shoplist-icon-amazon"></div>\n        </a>\n      </li>\n      <li class="shoplist-icons-li">\n        <a href="${l[2].url}">\n          <div class="shoplist-icon-barnesAndNoble"></div>\n        </a>\n      </li>\n      <li class="shoplist-icons-li">\n        <a href="${l[4].url}">\n          <div class="shoplist-icon-bookshop"></div>\n        </a>\n      </li>\n    </ul>\n  </div>\n        <div class="shoplist-trash"></div>\n`;return c.innerHTML=r,c}));const c=document.createElement("div");c.classList.add("shopping-list-container"),a.forEach((s=>{c.appendChild(s)})),t.replaceWith(c);function r(s){const i=s.target.closest(".shoplist-book-container").dataset.id;l=l.filter((s=>s.id!==i)),localStorage.setItem("shoppingList",JSON.stringify(l)),c.removeChild(s.target.closest(".shoplist-book-container")),0===l.length&&c.replaceWith(t)}document.querySelectorAll(".shoplist-trash").forEach((s=>{s.addEventListener("click",r)})),0===l.length&&(document.querySelector(".shopping-list-container")||document.body.appendChild(c),c.replaceWith(t)),e("7Buz0"),e("31u3U"),e("3oIZ9"),e("2klI5"),e("7tzR7");
//# sourceMappingURL=shopping_list.d9c445d1.js.map
