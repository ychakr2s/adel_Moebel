/**
 * This Method launchs the Owl Framework.
 */
$(document).ready(function () {
    /**
     * When scroll change the Color of the Navbar
     */
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    // If element is scrolled into view, fade it in Right or in Down
    $(window).scroll(function () {
        $('.animated').each(function () {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('fadeInRight');
            }
        });
    });
    $(window).scroll(function () {
        $('.animatedLeft').each(function () {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('fadeInDown');
            }
        });
    });

// Listen to owl events:
    /**
     * This Method launchs the Owl Framework.
     */
//     ########## Start Produkte #######################
    $('.custom').owlCarousel({

        loop: true,
        // lazyLoad:true,

        margin: 10,
        nav: true,
        // autoWidth:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    //     ############## End Produkte #######################

    // owl.on('changed.owl.carousel', function (event) {
    //     location.hash = 'slide' + event.property.value;
    // })
    /* $('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4
    }) */
    // console.log(" Salam ");

    // var owl = $(".myCarou .owl-carousel");

    // ############# Auskomentiert ############
    // $(".myCarou #demdedeo").owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     responsiveClass: true,
    //     autoHeight: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             nav: true
    //         },
    //         200: {
    //             items: 1,
    //             nav: true
    //         },
    //         600: {
    //             items: 2,
    //             nav: true
    //         },
    //         1000: {
    //             items: 3,
    //             nav: true,
    //             loop: false
    //         }
    //     }
    // });

    // $('#owldemo').owlCarousel({
    //     items: 4,
    //     loop: false,
    //     dots: true,
    //     center: false,
    //     margin: 10,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             nav: true
    //         },
    //         200: {
    //             items: 2,
    //             nav: true
    //         },
    //         700: {
    //             items: 2,
    //             nav: true
    //         },
    //         1000: {
    //             items: 4,
    //             nav: false,
    //             // loop: false
    //         }
    //     }
    // });
    // });
// ################################## Start Demo ####################
    var carousel = $('.demo').owlCarousel({
        center: true,
        margin: 10,
        nav: false,
        // animateOut: 'slideOutDown',
        // animateIn: 'flipInX',

        // dots: true,
        loop: true,
        navSpeed: 1500,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            },
            1200: {
                items: 4,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                dots: true
            },
        },
    });

    // ################################## End Demo ###################
});

/* End Navbar*/

/* Start Slider*/


/* End Slider*/

/* Start News*/


/* End News*/

/* Start Produkt*/


/* End Produkt*/

/* Start Wish*/


/* End Wish*/
/* Start Summary*/


/* End Summary*/


/* Start Footer*/


/* End Footer*/

