$(function () {

    $('.header__slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        speed: 1200,
        autoplay: true
    });

    $('.header__mobile-btn').on('click', function () {
        $('.nav__mobile').slideToggle();
    });

    $('.header__btn').on('click', function () {
        $('.header__btn').toggleClass('active');
        $('.header__menu-box').toggleClass('active');
    });

    $('.interiors__items').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1200
    });

    $('.partners__items').slick({
        arrows: false,
        dots: false,
        speed: 1200,
        autoplay: true,
        slidesToScroll: 1,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.flat__slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.flat__slider-nav'
    });
    $('.flat__slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.flat__slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        centerMode: true,
        variableWidth: true,
        speed: 1200,
        autoplay: true
    });

    $('.flat__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.flat__tabs, .tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.flat__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });
    $('.inastagram__slider').slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 1200,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});