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
    480: {
      slidesPerView: 3,
    },
    412: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 2,
    },
  },
});

//галочка вниз-вверх
$(".desktop__btn").click(function (event) {
  $(".desktop__arrow").toggleClass("active");
});
$(".desktop__btn").click(function (event) {
  $(".desktop__arrow2").toggleClass("active");
});
$(".desktop__btn").click(function (event) {
  $(".desktop__arrow3").toggleClass("active");
});
$(".desktop__btn").click(function (event) {
  $(".desktop__arrow4").toggleClass("active");
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