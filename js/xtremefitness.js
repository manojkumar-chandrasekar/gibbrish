
jQuery(document).ready(function($) {
    jQuery('.services_section1 .owl-carousel').owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
    jQuery('.main-blog-carousel').owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
    jQuery('.main-testimonial-carousel').owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    jQuery('.cpt-carousel').owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
        jQuery(".testimonial-section2 .owl-carousel").owlCarousel({
            loop: false,
            margin: 0,
            dots: false,
            nav: false,
            items: 1 
        });
        var owl = jQuery(".testimonial-section2 .owl-carousel");
        owl.owlCarousel();
        jQuery(".next-btn").click(function () {
            owl.trigger("next.owl.carousel");
        });
        jQuery(".prev-btn").click(function () {
            owl.trigger("prev.owl.carousel");
        });
        jQuery(".prev-btn").addClass("disabled");
        jQuery(owl).on("translated.owl.carousel", function (event) {
            if (jQuery(".owl-prev").hasClass("disabled")) {
                jQuery(".prev-btn").addClass("disabled");
            } else {
                jQuery(".prev-btn").removeClass("disabled");
            }
            if (jQuery(".owl-next").hasClass("disabled")) {
                jQuery(".next-btn").addClass("disabled");
            } else {
                jQuery(".next-btn").removeClass("disabled");
            }
        });
    jQuery('#search i').click(function(){
        jQuery('#search').submit();
    });
})



