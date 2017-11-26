(function($) {
    "use strict";

    jQuery(document).ready(function($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        $(".header-top-area, .slicknav_btn").sticky();


        $('.menu li a').on('click', function(event) {
            $('.menu li a').parent().removeClass('active');
            var $anchor = $($(this).attr('href')).offset().top - 61;
            $(this).parent().addClass('active');
            $('body, html').animate({
                scrollTop: $anchor
            }, 600);
            event.preventDefault();
            return false;
        });
        // jQuery scroll spy
        $('body').scrollspy({
            target: '.main-menu',
            offset: 95,
        });

        $(".search-open").on("click", function() {
            $(".search-box").addClass("active");
            return false;
        });

        $(".search-close").on("click", function() {
            $(".search-box").removeClass("active");
        });

        $('.menu').slicknav({
            label: '',
        });

        $(".hero-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: false,
            dots: true,
        });

        $(".hero-slider").on("translate.owl.carousel", function() {
            $(".single-slide h1, .single-slide p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide .small-btn").removeClass("animated zoomIn").css("opacity", "0");
        });

        $(".hero-slider").on("translated.owl.carousel", function() {
            $(".single-slide h1, .single-slide p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide .small-btn").addClass("animated zoomIn").css("opacity", "1");
        });

        $(".client-list").owlCarousel({
            items: 6,
            loop: true,
            autoplay: true,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 3,
                    margin: 10,
                },
                600: {
                    items: 4,
                },
                1000: {
                    items: 5,
                }
            }
        });


        $(".single-work").magnificPopup({
            type: "image",
            gallery: {
                enabled: true
            },
            closeBtnInside: false,
            closeOnContentClick: true,
            preloader: true,
            tLoading: "",
        });


        $(window).scroll(function() {
            if ($(this).scrollTop() > 800) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });
        $('.scroll-top').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
        new WOW().init();

    });


    jQuery(window).load(function() {

        $(".retro-preloader").fadeOut(350);
    });


}(jQuery));