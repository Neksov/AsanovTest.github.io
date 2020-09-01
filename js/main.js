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
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      mySwiper.changeDirection(getDirection());
    },
  },
  breakpoints: {
    1025: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

  return direction;
}
