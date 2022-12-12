(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.menu-burger').on('click', function() {
      $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
      $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
    });


    // ABOUT SLIDER
    $('body').vegas({
        slides: [
            { src: 'images/slide-image01.jpg' },
            { src: 'images/slide-image02.jpg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });

	
	$.ajax({
          url: 'https://htmlpreview.github.io/?https://github.com/Alex-381/alex-381.github.io/blob/main/data.json',
          dataType: 'json',
          success: function(data){
            console.log( data );
          }
        });

})(jQuery);
