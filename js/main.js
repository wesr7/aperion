$(document).ready(function(){
    const voiceFeatures = {
        'network-interconnect' : 'Private IP options to guarantee QoS and eliminate public network risks.',
        'secure-trunking' : 'Encrypted voice options to secure communications between your application, the Apeiron platform, and/or your end users.  Includes PCI compliant sip trunking.',
        'call-recording' : 'Turn call recording on and off and retrieve recorded files via API or GUI',
        'fax-and-voicemail' : 'Voicemail and Fax functions available for use with DIDs and TFNs and supported by our REST API.',
        'hd-voice-and-transcoding' : 'High quality codecs and useful RTP features available on SIP trunks and as a la carte functions.',
        'call-forwarding' : 'On-demand call fowarding and disaster recovery features for DIDs, TFNs & SIP trunks with sim-ring and hunt configurations.',
        'sms' : 'SMS enable any Local Number (DID), Toll Free Number or Short Code to send and receive text messages.',
        'e911-cnam-and-listings' : 'Comprehensive DID & TFN feature set capable of supporting any business requirement.',
        'iot-endpoint-features' : 'Endpoint services that allow you to offload registration, security and management functions for IOT clients at scale.',
        'full-featured-api' : 'Access real-time config, performance and billing information about your services via a REST API.  Our API coverage is legit.'
    }
    const messagingFeatures = {
        'network-interconnect' : 'Private IP interconnection to any US address.  Now offering Public Cloud direct connect.',
        'inbound-delivery' : 'Forward inbound SMS messages as they are received via webhook, email or SMS in addition to standard REST API options.',
        'rest-api' : 'Full REST API support for SMS send and receive operations as well as advanced SMS platform features.',
        'sdk-support' : 'Developer portal with SDK support for integrating Apeiron functions with your application.',
        'longcodes' : 'P2P Messaging - Receive SMS messages sent to Local Numbers (DIDs) and Toll Free Numbers (TFNs).',
        'shortcodes' : 'A2P & A2A Messaging - Send/Receive using codes optimized for high volume SMS operations.',
        'compliance-features' : 'Manage SMS compliance with associated logging, reporting and notifications support.',
        'list-management' : 'Load and manage user lists with template and list variable features.  Load data via the User Dashboard, csv upload or REST API.',
        'campaign-management' : 'Schedule and execute bulk SMS send operations using Lists.',
        'auto-responders' : 'Program auto-response rules applied per number that auto-reply to inbound messages.'
    }
    if ($('.platform').length) {
        if ($(window).width() > 780) {
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

        } else if ($(window).width() < 780) {
            $('.slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                asNavFor: '.slider-nav'
            });
            $('.slider-nav').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.slider-for',
                centerMode: false,
                focusOnSelect: true,
                arrows: false,
            });
            $('.slider-nav.slick-initialized.slick-slider').attr('style', 'display: none');
            $('.slider-nav .slick-slide.slick-cloned').remove();
        }
        const trackWidth = $('.slider-for').width();
        $('.slick-list').attr('style', 'padding: 0 5px');
        $('.slick-track').attr('style', 'width: ' + trackWidth + 'px;');
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
    if ($('.page-rapper').length && $(window).width() > 780) {
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
    $('a#burger_menu').click(function(e){
        e.preventDefault();
        $(this).css('display', 'none');
        $('body').css('overflow', 'hidden');
        $('div.hide').removeClass('hide').addClass('menu');
    });
    $('a#menu_burger, .menu_list > li > a').click(function(e){
        $('div.menu').removeClass('menu').addClass('hide');
        $('body').css('overflow', 'initial');
        $('a.right').css('display', 'block');
    });
});


$(window).scroll(function(){
    if ($(window).scrollTop() > 90) {
        $('nav#main').addClass('navDown')
    } else if ($(window).scrollTop() < 90) {
        $('nav#main').removeClass('navDown')
    }
});



