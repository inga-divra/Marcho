$(function () {
  $('.slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    fade: true,
    cssEase: 'linear',
    autoplaySpeed: 0,
    speed: 4000,
    infinite: true,
  });

  $('.stars').rateYo({
    normalFill: '#ccccce',
    ratedFill: '#ffc35b',
    starWidth: '20px',
    halfStar: true,
    readOnly: true,
  });
});

// set year
const date = document.querySelector('#date');

date.innerHTML = new Date().getFullYear();
