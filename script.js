// Same menuData unchanged
const menuData = {
  "Fresh Juice (Normal / Ice Cream)": [
    { name: "Lime", price: "320" },
    { name: "Avocado", price: "450 / 550" },
    // ... rest unchanged
  ],
  // ... all other categories unchanged
};

var currentPage = 0; // var for old browsers
const CATEGORIES_PER_PAGE = 6;
var isFirstRender = true;

function renderMenu() {
  var container = document.getElementById("menu-container");
  var categories = []; // Manual object keys for old browsers
  for (var key in menuData) {
    if (menuData.hasOwnProperty(key)) categories.push(key);
  }

  if (!isFirstRender) {
    container.style.opacity = "0";
  }

  setTimeout(
    function () {
      container.innerHTML = "";
      var startIdx = currentPage * CATEGORIES_PER_PAGE;
      var pageCategories = [];
      for (
        var i = startIdx;
        i < startIdx + CATEGORIES_PER_PAGE && i < categories.length;
        i++
      ) {
        pageCategories.push(categories[i]);
      }

      container.className = "menu-container count-" + pageCategories.length;

      for (var j = 0; j < pageCategories.length; j++) {
        var categoryName = pageCategories[j];
        var items = menuData[categoryName];
        var categoryDiv = document.createElement("div");
        categoryDiv.className = "category";

        var itemsHtml = "";
        for (var k = 0; k < items.length; k++) {
          itemsHtml +=
            '<div class="dish">' +
            '<div class="dish-header">' +
            '<span class="dish-name">' +
            items[k].name +
            "</span>" +
            '<span class="dish-dots"></span>' +
            '<span class="dish-price">' +
            items[k].price +
            "</span>" +
            "</div>" +
            "</div>";
        }

        categoryDiv.innerHTML =
          '<h2 class="category-title">' + categoryName + "</h2>" + itemsHtml;
        container.appendChild(categoryDiv);
      }

      container.style.opacity = "1";
      isFirstRender = false;

      var totalPages = Math.ceil(categories.length / CATEGORIES_PER_PAGE);
      var pageIndicator = document.getElementById("page-indicator");
      if (pageIndicator) {
        pageIndicator.innerHTML =
          "Page " + (currentPage + 1) + " / " + totalPages;
      }

      currentPage++;
      if (currentPage * CATEGORIES_PER_PAGE >= categories.length) {
        currentPage = 0;
      }
    },
    isFirstRender ? 0 : 500,
  );
}

var PAGE_INTERVAL = 10;
var countdownRemaining = PAGE_INTERVAL;

function tick() {
  var clockElement = document.getElementById("clock");
  var now = new Date();

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  if (hours === 0) hours = 12;
  if (minutes < 10) minutes = "0" + minutes;

  clockElement.innerHTML = hours + ":" + minutes + " " + ampm;

  countdownRemaining--;
  if (countdownRemaining <= 0) {
    renderMenu();
    countdownRemaining = PAGE_INTERVAL;
  }

  var countdownElement = document.getElementById("countdown");
  if (countdownElement) {
    countdownElement.innerHTML = "Next Page In: " + countdownRemaining + "s";
  }
}

// Old browser compatible init
if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", function () {
    renderMenu();
    tick();
    setInterval(tick, 1000);
  });
} else {
  // IE8 fallback
  window.onload = function () {
    renderMenu();
    tick();
    setInterval(tick, 1000);
  };
}
