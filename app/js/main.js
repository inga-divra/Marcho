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

//set timer

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  const promoTimer = clock.querySelector('.promo__ti');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);

//const deadline = $('.promo__timer').arrt('data-time');
initializeClock('promo__clock', deadline);

// set year
const date = document.querySelector('#date');

date.innerHTML = new Date().getFullYear();
