$(document).ready(function(){
    if ($('.home-bg').length) {
        $('.parallax').parallax();
    }
    if ($('.platform-bg').length) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            centerMode: true,
            focusOnSelect: true
        });
    }

});