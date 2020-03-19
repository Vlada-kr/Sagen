$(function () {

    $('.header__slider').slick({
        arrows: false,
        dots: true,
        speed: 1200,
        autoplay: true
    });

    /*$(".header__slider").on('afterChange', function (event, slick, currentSlide) {
        $(".slick-dots button").text(currentSlide < 10 ? `0${currentSlide + 1}` : currentSlide + 1);
    });*/

    $('.header__btn').on('click', function(){
        $('.header__btn').toggleClass('active');
        $('.header__menu-box').toggleClass('active');
       // $('.black').toggleClass('active');
    });

    $('.interiors__items').slick({
        arrows: false,
        dots: true,
    });
});