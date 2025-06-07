(function ($) {
    "use strict";

    // Menu
    var windows = $(window);
    var stick = $(".header-sticky");

    windows.on("scroll", function () {
        var scroll = windows.scrollTop();
        if (scroll < 245) {
            stick.removeClass("sticky");
        } else {
            stick.addClass("sticky");
        }
    });

    // Slider Carousel
    $(".slider-wrapper").owlCarousel({
        loop: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        smartSpeed: 2500,
        items: 1,
        nav: true,
        navText: ["<i class='zmdi zmdi-chevron-left'></i>", "<i class='zmdi zmdi-chevron-right'></i>"],
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        animateOut: 'slideOutDown',
        animateIn: 'slideInDown',
        autoplay: false,
        smartSpeed: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    //Blog Carousel
    $("blog-carousel").owlCarousel({
        loop: true,
        itens: 3,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 1
            }
        }
    });

    //jQuery meanMenu
    $(".main-menu nav").meanmenu({
        meanScriinWidth: "991",
        meanmenuContainer: ".mobile"
    });

    //Mail Chip
    $('#mc-form').ajaxChip({
        language: "en",
        callback: mailChimpResponse,
        url:("http://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&id=a2452237f8")
    })

})

