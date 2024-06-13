$(document).ready(function () {



    $('.ctn-popup, .nav-mobile').hide();

    $('#mention').click(function () {
        $('.ctn-popup').show();
    });

    $('#valider').click(function () {
        $('.ctn-popup').hide();
    });

    $('.menu').click(function () {

        var image = $(this).find('img');
        var srcMenu = './assets/icons/menu.svg';
        var srcCroix = './assets/icons/croix.svg';

        if (image.attr('src') === srcMenu) {
            image.attr('src', srcCroix);
        }

        else {
            image.attr('src', srcMenu)
        }

        $('.nav-mobile').slideToggle();

    });




});