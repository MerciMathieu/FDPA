$( function() {
    HeaderChangeOnScroll() ;
    backToTopDisplay() ;
}) ;


var HeaderChangeOnScroll = function() {
    $(window).scroll(function() {
        if( $( window ).scrollTop() > 100 ) {
            $('.navbar-light').addClass('bg-light boxshadow') ;
            $('.nav-link').addClass('black') ;
        } else {
            $('.navbar-light').removeClass('bg-light boxshadow') ;
            $('.nav-link').removeClass('black') ;
        }
    }
)} ;

var backToTopDisplay = function() {
    $(window).scroll(function() {
        if( $( window ).scrollTop() > 500 ) {
            $('.back2top').fadeIn('fast').addClass('display-block') ;
        } else {
            $('.back2top').fadeOut('fast').removeClass('display-block') ;
        }
    }
)} ;

        