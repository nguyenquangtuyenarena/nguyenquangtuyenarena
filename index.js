$(document).ready(function () {
    $('.fa-bars').click(function (e) { 
        e.preventDefault();
        $('.menumobile').addClass('visible');
        $('.bg-black').addClass('visible');
    });
    $('.fa-remove').click(function (e) { 
        e.preventDefault();
        $('.menumobile').removeClass('visible');
        $('.bg-black').removeClass('visible');
    });
});