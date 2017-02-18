$(document).ready(function(){
    const voiceFeatures = {
        'networkInterconnect' : 'Private IP connection to guarantee quality of service and eliminate public network risks.'
    }
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
    // let columns = $('.')
    // function colHeight(col) {
    //     col.each(function(){
    //         console.log(col);
    //     });
    // }

    // colHeight()

    const toggleContent = function(element, obj) {
        $(element).click(function(){
            let name = $(this).data('name');
            const paragraph = $(this).next('p');
            paragraph.toggleClass('up');
            if (paragraph.is(':empty')) {
                paragraph.append(obj[name]);
            } else {
                paragraph.empty();
            }
        });
    }
    toggleContent('h4', voiceFeatures)

});