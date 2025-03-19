$(document).ready(function () {
    $('.review__boxes').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3300,
        mobileFirst: true,
        arrows: false, // Domyślnie wyłączone dla małych ekranów
        responsive: [
            {
                breakpoint: 430,
                settings: {
                    arrows: true, // Włączone od 771px wzwyż
                    nextArrow: '<button class="review__slick--right" type="button"><img class="review__slick--img" src="../../../dist/img/right-arrow.png" alt="strzałka przewijania do następnej opinii"></button>',
                    prevArrow: '<button class="review__slick--right" type="button"><img class="review__slick--img review__slick--left" src="../../../dist/img/right-arrow.png" alt="strzałka przewijania do poprzedniej opinii"></button>'
                }
            }
        ]
    });
});
