(function () {
    const heightFooter =
        $('.header').height() +
        $('.footer').height() +
        $('.footer-bottom').height();
    $('main').css('min-height', 'calc(100vh - ' + heightFooter + 'px' + ')');
})();
