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

});