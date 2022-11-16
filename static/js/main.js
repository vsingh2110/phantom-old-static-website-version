function hasSubmittedLead() {
    if (typeof(Storage) !== "undefined") {
        return (localStorage.getItem('lead') == 1)
    }
    return false;
}

function submittedLead() {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('lead', 1);
    }
}
$(document).ready(function() {
    $('.dropdown-submenu a.link').on("click", function(e) {
        var paren = $(this).closest('.dropdown-menu');
        $('ul', paren).hide()
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});


/* ==========================================================================
   Touch Owl Carousel
   ========================================================================== */
$(".touch-slider").owlCarousel({
    navigation: true,
    pagination: false,
    slideSpeed: 1000,
    stopOnHover: true,
    autoPlay: true,
    items: 1,
    itemsDesktopSmall: [1024, 1],
    itemsTablet: [600, 1],
    itemsMobile: [479, 1]
});

$('.touch-slider').find('.owl-prev').html('<i class="ti-angle-left"></i>');
$('.touch-slider').find('.owl-next').html('<i class="ti-angle-right"></i>');

$('#new-products').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
$('#new-products').find('.owl-next').html('<i class="fa fa-angle-right"></i>');

var owl;

$(document).ready(function() {

    owl = $("#owl-demo");

    owl.owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        afterInit: afterOWLinit, // do some work after OWL init
        afterUpdate: afterOWLinit
    });

    function afterOWLinit() {
        // adding A to div.owl-page
        $('.owl-controls .owl-page').append('<a class="item-link" />');
        var pafinatorsLink = $('.owl-controls .item-link');
        /**
         * this.owl.userItems - it's your HTML <div class="item"><img src="http://www.ow...t of us"></div>
         */
        $.each(this.owl.userItems, function(i) {

            $(pafinatorsLink[i])
                // i - counter
                // Give some styles and set background image for pagination item
                .css({
                    'background': 'url(' + $(this).find('img').attr('src') + ') center center no-repeat',
                    '-webkit-background-size': 'cover',
                    '-moz-background-size': 'cover',
                    '-o-background-size': 'cover',
                    'background-size': 'cover'
                })
                // set Custom Event for pagination item
                .click(function() {
                    owl.trigger('owl.goTo', i);
                });

        });
        // add Custom PREV NEXT controls
        $('.owl-pagination').prepend('<a href="#prev" class="prev-owl"/>');
        $('.owl-pagination').append('<a href="#next" class="next-owl"/>');
        // set Custom event for NEXT custom control
        $(".next-owl").click(function() {
            owl.trigger('owl.next');
        });
        // set Custom event for PREV custom control
        $(".prev-owl").click(function() {
            owl.trigger('owl.prev');
        });
    }
});

//testimonial Slider
$('#testimonial-carousel').owlCarousel({
    navigation: false,
    pagination: true,
    slideSpeed: 1000,
    autoPlay: false,
    singleItem: true,
    pagination: false,
    items: 1,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [980, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
});


/* Owl Carousel
========================================================*/
$('#clients-scroller').owlCarousel({
    navigation: false,
    pagination: false,
    items: 6,
    itemsTablet: 3,
    stagePadding: 90,
    smartSpeed: 450,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [980, 3],
    itemsTablet: [768, 3],
    itemsTablet: [767, 2],
    itemsTabletSmall: [480, 2],
    itemsMobile: [479, 1],
});





jQuery(document).ready(function($) {
    var $form_modal = $('.cd-user-modal'),
        $form_login = $form_modal.find('#cd-login'),
        $form_signup = $form_modal.find('#cd-signup'),
        $form_forgot_password = $form_modal.find('#cd-reset-password'),
        $form_modal_tab = $('.cd-switcher'),
        $tab_login = $form_modal_tab.children('li').eq(0).children('a'),
        $tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
        $forgot_password_link = $form_login.find('.cd-form-bottom-message a'),
        $back_to_login_link = $form_forgot_password.find('.cd-form-bottom-message a');











});