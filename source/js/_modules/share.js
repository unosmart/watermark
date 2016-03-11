var Social = (function () {
    var share = {
        vk: function (purl, ptitle, pimg, text) {
            url = 'http://vkontakte.ru/share.php?';
            url += 'url=' + encodeURIComponent(purl);
            url += '&title=' + encodeURIComponent(ptitle);
            url += '&description=' + encodeURIComponent(text);
            url += '&image=' + encodeURIComponent(pimg);
            url += '&noparse=true';
            popup(url);
        },
        fb: function (purl, ptitle, pimg, text) {
            url = 'http://www.facebook.com/sharer.php?s=100';
            url += '&p[title]=' + encodeURIComponent(ptitle);
            url += '&p[summary]=' + encodeURIComponent(text);
            url += '&p[url]=' + encodeURIComponent(purl);
            url += '&p[images][0]=' + encodeURIComponent(pimg);
            popup(url);
        },
        tw: function (purl, ptitle) {
            url = 'http://twitter.com/share?';
            url += 'text=' + encodeURIComponent(ptitle);
            url += '&url=' + encodeURIComponent(purl);
            url += '&counturl=' + encodeURIComponent(purl);
            popup(url);
        }
    };
    function popup(url) {
        window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
    }

    function _eventListener() {
        $('.socials__link').on('click', function () {
            console.log('работает');
            var social = $(this).data('social'),
                url = 'http://watermark.unostech.ru/',
                title = 'Watermarks Generator',
                text = 'этот наш сайт',
                img = 'http://watermark.unostech.ru/';
            if (social)share[social](url, title, img, text)
        });
    }

    return {
        init: function () {
            _eventListener();
        }
    }
}());

Social.init();
