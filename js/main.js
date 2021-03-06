$(document).ready(function () {

  $(".nav-item__maps").click(function (event) {
    $(".nav-link__navShop").toggleClass("active");
  });
  $(".phone").click(function (event) {
    $(".phone").toggleClass("active");
  });
  $(".nav__btn").click(function (event) {
    $(".nav__btn").toggleClass("active");
  });
  $(".search__input").click(function (event) {
    $(".search__input").toggleClass("active");
  });
  $(".card").click(function (event) {
    $(".card__colors").toggleClass("active");
  });
  $(".card").click(function (event) {
    $(".card__colors").toggleClass("active");
  });
  // $(".price__btn").click(function (event) {
  //   $(".price__btn").toggleClass("active");
  // });
  // $(".price__btn-quantity").click(function (event) {
  //   $(".price__btn-quantity").toggleClass("active");
});

var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    540: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    412: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
    },
  },
});

//галочка вниз-вверх
$(".desktop__btn-arrow").click(function (event) {
  $(".desktop__arrow").toggleClass("active");
});
$(".desktop__btn-arrow2").click(function (event) {
  $(".desktop__arrow2").toggleClass("active");
});
$(".desktop__btn-arrow3").click(function (event) {
  $(".desktop__arrow3").toggleClass("active");
});
$(".desktop__btn-arrow4").click(function (event) {
  $(".desktop__arrow4").toggleClass("active");
});
$(".mobile__btn-arrow1").click(function (event) {
  $(".arrowMenu__mobile").toggleClass("active");
});
$(".mobile__btn-arrow2").click(function (event) {
  $(".arrowMenu__mobile2").toggleClass("active");
});
$(".mobile__btn-arrow3").click(function (event) {
  $(".arrowMenu__mobile3").toggleClass("active");
});
$(".mobile__btn-arrow4").click(function (event) {
  $(".arrowMenu__mobile4").toggleClass("active");
});
$(".mobile__btn-arrow5").click(function (event) {
  $(".arrowMenu__mobile5").toggleClass("active");
});
$(".mobile__btn-arrow6").click(function (event) {
  $(".arrowMenu__mobile6").toggleClass("active");
});
$(".mobile__btn-arrow7").click(function (event) {
  $(".arrowMenu__mobile7").toggleClass("active");
});
$(".mobile__btn-arrow8").click(function (event) {
  $(".arrowMenu__mobile8").toggleClass("active");
});
$(".mobile__btn-arrow9").click(function (event) {
  $(".arrowMenu__mobile9").toggleClass("active");
});
$(".mobile__btn-arrow10").click(function (event) {
  $(".arrowMenu__mobile10").toggleClass("active");
});
$(".nav-link").click(function (event) {
  $(".menu-icon").removeClass("menu-icon-active");
  $(".menu__group-mobile").removeClass("menu__group-mobile--active");
});


//крточки 
var list = $(".menu__group-desktop .btn-menu-desktop");
var numToShow = 6; //сколько показывать элементов
var button = $(".main__menu-btn");
var numInList = list.length;
list.hide();
// if (numInList > numToShow) {
//   button.show();
// }
list.slice(0, numToShow).show();
button.click(function () {
  var showing = list.filter(":visible").length;
  list.slice(showing - 1, showing + numToShow).fadeIn();
  var nowShowing = list.filter(":visible").length;
  button.hide();
});

//бургер меню
const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#menu__group-mobile');

menuToggle.onclick = function () {
  menuToggle.classList.toggle('menu-icon-active');
  mobileNavContainer.classList.toggle('menu__group-mobile--active');
}
$(".nav__item").click(function (event) {
  $(".menu-icon").removeClass(
    ".menu-icon-active"
  );
  $(".menu__group-mobile").removeClass(
    ".menu__group-mobile--active"
  );
});
//Рейтинг 
// var rating = document.querySelector(".stars");
// var ratingItem = document.querySelectorAll(".star");

// rating.onclick = function (e) {
//   var target = e.target;
//   if (target.classList.contains("star")) {
//     removeClass(ratingItem, "current-active");
//     target.classList.add("active", "current-active");
//   }
// };

// rating.onmouseover = function (e) {
//   var target = e.target;
//   if (target.classList.contains("star")) {
//     removeClass(ratingItem, "active");
//     target.classList.add("active");
//     mouseOverActiveClass(ratingItem);
//   }
// };
// rating.onmouseout = function () {
//   addClass(ratingItem, "active");
//   mouseOutActiveClas(ratingItem);
// };

// function removeClass(arr) {
//   for (var i = 0, iLen = arr.length; i < iLen; i++) {
//     for (var j = 1; j < arguments.length; j++) {
//       ratingItem[i].classList.remove(arguments[j]);
//     }
//   }
// }

// function addClass(arr) {
//   for (var i = 0, iLen = arr.length; i < iLen; i++) {
//     for (var j = 1; j < arguments.length; j++) {
//       ratingItem[i].classList.add(arguments[j]);
//     }
//   }
// }

// function mouseOverActiveClass(arr) {
//   for (var i = 0, iLen = arr.length; i < iLen; i++) {
//     if (arr[i].classList.contains("active")) {
//       break;
//     } else {
//       arr[i].classList.add("active");
//     }
//   }
// }