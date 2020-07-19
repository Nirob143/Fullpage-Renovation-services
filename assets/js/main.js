	 
    // Carousel Slier
    $(".carousel-active").owlCarousel({
        items:1,
        margin:0,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
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

    $(".carousel-tm").owlCarousel({
        items:1,
        margin:0,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
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

	 // counterUp  
    $('.counter').counterUp({
        delay : 10,
        time: 3000,
    });
    $('.counter2').counterUp({
        delay : 10,
        time: 10000,
    });
     // wow
    new WOW().init();
    //one pagenave js
 $('#nav').onePageNav({
    filter: ':not(.external)'
});

 // init Isotope
    var $grid = $('.portfolio-iteams').isotope({
    // options
});
// filter items on button click
    $('.portfolio-menu').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
  
  // filter items on button active
    $('.portfolio-menu').on( 'click', 'li', function() {
          $(this).activeclass('active').siblings.removeClass('active');
    });

 

jQuery(window).load(function () {


        /* Sticky Header */
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 20) {
                $('.header-fixed').addClass("sticky");
            } else {
                $('.header-fixed').removeClass("sticky");
            }
        });
        
        /* Preloader */
        $(".preloader").fadeOut()
    });



    $(document).ready(function(){
     $('.bar').click(function(){

        $(this).toggleClass('close');

        $('.slide-menu').toggleClass('show');
     });
   });

//countdown //
$('#getting-started').countdown('2020/07/28', function(event) {
    

    $(this).html(event.strftime('<div class="single-counter">%D <span>days</span</div> <div class="single-counter">%H <span>hours</span</div> <div class="single-counter">%M <span>minutes</span</div> <div class="single-counter">%S <span>seconde</span</div>'));
  });