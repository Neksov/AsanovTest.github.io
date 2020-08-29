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

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      }
    }
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }
});