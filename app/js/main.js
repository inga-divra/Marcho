$(function () {

    $('.slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    })
});





// set year
const date = document.querySelector("#date");

date.innerHTML = new Date().getFullYear();