$(function () {

  $('.top-slider__list').slick({
    prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/icons/arrow-left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/icons/arrow-right.svg" alt="arrow right"></button>',
    // autoplay: true,
    // autoplaySpeed:2500
  });

  $('.brands__inner').slick({
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    // autoplay: true,
    // autoplaySpeed:2500
  });

  var Mixer = mixitup('.products__content');
  var Mixer = mixitup('.stock__content');

});