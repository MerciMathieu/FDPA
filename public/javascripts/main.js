$( function() {
    HeaderChangeOnScroll() ;
    backToTopDisplay() ;
}) ;


/**
 * Fn HeaderChangeOnScroll
 * 
 * Header change when scrolling document
 * 
 */
var HeaderChangeOnScroll = function() {
    if (window.innerWidth > 992) {
        $(window).scroll(function() {
            if( $( window ).scrollTop() > 100 ) {
                $('.navbar-light').addClass('bg-grey boxshadow') ;
                $('.nav-link').addClass('black') ;
            } else {
                $('.navbar-light').removeClass('bg-grey boxshadow') ;
                $('.nav-link').removeClass('black') ;
            }
        }
    )}else {
        $('.nav-link').removeClass('black') ;
    }
} ;

/**
 * Fn backToTopDisplay
 * 
 * Displays the back to the top button when scrolling
 * 
 */
var backToTopDisplay = function() {
    $(window).scroll(function() {
        if( $( window ).scrollTop() > 500 ) {
            $('.back2top').fadeIn('fast').addClass('display-block') ;
        } else {
            $('.back2top').fadeOut('fast').removeClass('display-block') ;
        }
    }
)} ;

        