$(function() {
    var $menu = $(".nav");
    var $menuHeader = $("header");

    $(window).click(function() {
        $menu.slideUp();
    });
    
    $menuHeader.click(function(event){
        event.stopPropagation();
    });
});

$(function() {
    $('header nav .item--dropdown').on('click', function() {
        $('.nav').slideToggle();
    })
});

$( function() {
    $( ".accordion.more" ).accordion({
        collapsible: true
    });
    $( ".accordion.spec" ).accordion({
        collapsible: true,
        active: false
    });
});

$(function() {
    $('.gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gallery-nav'
    });
    $('.gallery-nav').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        asNavFor: '.gallery',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        prevArrow: false,
        nextArrow: false
    });
});