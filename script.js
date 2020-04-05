$(document).ready(function() {
  $(".portfolio-btn").on("click", function() {
    $(window).scrollTop(0);
    $(".home-page").addClass("d-none");
    $(".contact").addClass("d-none");
    $(".contact").removeClass("d-block");
    $(".portfolio").addClass("d-block");
  });
  $(".contact-btn").on("click", function() {
    $(window).scrollTop(0);
    $(".home-page").addClass("d-none");
    $(".portfolio").addClass("d-none");
    $(".portfolio").removeClass("d-block");
    $(".contact").addClass("d-block");
  });
});
