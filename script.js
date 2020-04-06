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

  $(".img-thumb").on("mouseover", function() {
    $(this).removeClass("d-block");
    $(this).addClass("d-none");
    $(this)
      .next()
      .addClass("d-block")
      .removeClass("d-none");
  });

  $(".img-caption").on("mouseleave", function() {
    $(this).removeClass("d-block");
    $(this).addClass("d-none");
    $(this)
      .prev()
      .addClass("d-block")
      .removeClass("d-none");
  });




});
