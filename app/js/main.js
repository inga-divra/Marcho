$(function () {

    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        fade: true,
        "cssEase": "linear",
        "autoplaySpeed": 0,
        "speed": 4000,
        infinite: true
    })
});


// set year
const date = document.querySelector("#date");

date.innerHTML = new Date().getFullYear();