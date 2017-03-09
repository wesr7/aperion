$(document).ready(function(){
    const voiceFeatures = {
        'network-interconnect' : 'Private IP connection to guarantee quality of service and eliminate public network risks',
        'secure-trunking' : 'Encrypt communcications between your application and the Apeiron platform using SSL & IPSEC VPNs over the public net',
        'call-recording' : 'Turn call recording on and off and retrieve recorded files via API or GUI',
        'fax-and-voicemail' : 'A la carte voicemail and fax features available for use with DIDs and TFNs.',
        'hd-voice-and-transcoding' : 'Super sweet RTP treatments',
        'call-forwarding' : 'On-demand call forwarding features for managing your numbers',
        'sms' : 'SMS enable any DID or Toll Free number to receive text messages',
        'e911-cnam-and-listings' : 'Full Featured DID and TFNs suitable for any business use',
        'iot-endpoint-features' : 'Platform features that allow you to offload session and edge security functions',
        'full-featured-api' : 'To provision, use and mangage all of our voice services and features'
    }
    const messagingFeatures = {
        'network-interconnect' : 'Security and Compliance features for platforms using private IP',
        'inbound-delivery' : 'Receive SMS by Webhook, Email or SMS',
        'rest-api' : 'Receive SMS by Webhook, Email or SMS',
        'sdk-support' : 'Developer portal with SDK support for integration to your application',
        'longcodes' : 'Local phone number and Toll Free phone number support',
        'shortcodes' : 'High volume and campaign specific SMS management',
        'compliance-features' : 'No-send list based on SMS unsubscribe/stop responses',
        'list-management' : 'Load and manage user lists in Apeiron dashboard',
        'campaign-management' : 'Bulk send operations using Lists',
        'auto-responders' : 'Easy to use auto-response rules for inbound messages'
    }

    if ($('.platform').length > 0) {
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
            centerMode: false,
            focusOnSelect: true,
            arrows: false
        });
        const trackWidth = $('.slider-for').width();
        $('.slick-list').attr('style', 'padding: 0 5px');
        $('.slick-track').attr('style', 'width: ' + $('.slider-for').width() + 'px;');
        $('.slider-nav .slick-slide').each(function(){
            $(this).attr('style', 'width: ' + ((trackWidth / 7) - 20) + 'px');
        });
        $('.slider-for .slick-track').attr('style', 'width: ' + trackWidth * 7 + 'px');
    }

    const equalHeight = function(col, child) {
        const tallestCol = $(col.sort((a, b) => $(b).height() - $(a).height())[0]).height();
        const tallestChild = $(child.sort((a, b) => $(b).height() - $(a).height())[0]).height();
        col.each(function(){
            col.height(tallestCol - 35);
            child.height(tallestChild);
        });
    }
    if ($('.pane-one').length && $(window).width() > 780){
        equalHeight($('.pane-three .col'), $('.pane-three p'));
    }
    if ($('.page-rapper').length) {
        equalHeight($('.features .col.s6'), $('.features i'));
    }

    const toggleContent = function(elements, obj) {
        $(elements).click(function(e){
            e.preventDefault();
            const paragraph = $(this).children('p');
            const info = paragraph.data('name');
            paragraph.toggleClass('up');
            if (paragraph.is(':empty')) {
                paragraph.append(obj[info]);
                paragraph.parents('.col.s6.m3').css('margin-bottom', '10px');
            } else {
                paragraph.parents('.col.s6.m3').css('margin-bottom', '0px');
                paragraph.empty();
            }
        });
    }
    if ($('.voice').length > 0) {
        toggleContent($('.features a'), voiceFeatures)
    } else if ($('.messaging').length > 0) {
        toggleContent($('.features a'), messagingFeatures)
    }
    $('a.right').click(function(e){
        e.preventDefault();
        $(this).css('display', 'none');
        $('div.hide').removeClass('hide').addClass('menu');
    });
    $('a#menu_burger, .menu_list > li > a').click(function(e){
        $('div.menu').removeClass('menu').addClass('hide');
        $('a.right').css('display', 'block');
    });
});

$(window).scroll(function(){
    if ($(window).scrollTop() > 90) {
        $('nav').addClass('navDown')
    } else if ($(window).scrollTop() < 90) {
       $('nav').removeClass('navDown')
    }
});
