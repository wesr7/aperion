$(document).ready(function(){
    const voiceFeatures = {
        'network-interconnect' : 'Private IP connection to guarantee quality of service and eliminate public network risks.',
        'secure-trunking' : 'Encrypt communcications between your application and the Apeiron platform using SSL & IPSEC VPNs over the public net.',
        'call-recording' : 'Turn call recording on and off and retrieve recorded files via API or GUI',
        'fax-and-voicemail' : 'A la carte voicemail and fax features available for use with DIDs and TFNs.',
        'hd-voice-and-transcoding' : 'Super sweet RTP treatments',
        'call-forwarding' : 'On-demand call forwarding features for managing your numbers.',
        'sms' : 'SMS enable any DID or Toll Free number to receive text messages',
        'e911-cnam-and-listings' : 'Full Featured DID and TFNs suitable for any business use.',
        'iot-endpoint-features' : 'Platform features that allow you to offload session and edge security functions.',
        'full-featured-api' : 'To provision, use and mangage all of our voice services and features'
    }
    const messagingFeatures = {
        'network-interconnect' : 'Security and Compliance features for platforms using private IP.',
        'inbound-delivery' : 'Receive SMS by Webhook, Email or SMS',
        'rest-api' : 'Receive SMS by Webhook, Email or SMS',
        'sdk-support' : 'Developer portal with SDK support for integration to your application.',
        'longcodes' : 'Local phone number and Toll Free phone number support',
        'shortcodes' : 'High volume and campaign specific SMS management',
        'compliance-features' : 'No-send list based on SMS unsubscribe/stop responses',
        'list-management' : 'Load and manage user lists in Apeiron dashboard',
        'campaign-management' : 'Bulk send operations using Lists',
        'auto-responders' : 'Easy to use auto-response rules for inbound messages.'
    }

    if ($('.secondary-bg').length < 0) {
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

    const equalHeight = function(col) {
        const tallestCol = $(col.sort((a, b) => $(b).height() - $(a).height())[0]).height();
        const tallestP = $(col.children('p').sort((a, b) => $(b).height() - $(a).height())[0]).height();
        col.each(function(){
            col.height(tallestCol);
            col.children('p').height(tallestP);
        });
    }
    if ($('<div class="pane-one"></div>').length){
        equalHeight($('.pane-three .col'));
    }

    const toggleContent = function(elements, obj) {
        $(elements).click(function(e){
            const info = $(this).data('name');
            const paragraph = $(this);
            paragraph.toggleClass('up');
            if (paragraph.is(':empty')) {
                paragraph.append(obj[info]);
            } else {
                paragraph.empty();
            }
        });
    }
    if ($('.voice').length > 0) {
        toggleContent($('.features p'), voiceFeatures)
    } else if ($('.messaging').length > 0) {
        toggleContent($('.features p'), messagingFeatures)
    }


});