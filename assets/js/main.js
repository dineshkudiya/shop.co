$(document).ready(function(){
    $("#toggle-bar").click(function(){
      $("header .menu-link").addClass("toggle-back");
      $("header .search-area").removeClass("search-back");
    });

    $("#crosstoggle").click(function(){
        $("header .menu-link").removeClass("toggle-back");
      });

      $("#search-social").click(function(){
        $("header .search-area").toggleClass("search-back");
      });

      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass("fixed-top");
        } else {
            $('header').removeClass("fixed-top");
        }
    });

   
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
       
    items:2,
    loop:true,
        
        margin: 20,
        dots: false,
        nav: true, 
        navText: [
            '<i class="fa-solid fa-arrow-left-long"></i>',
            '<i class="fa-solid fa-arrow-right-long"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
               
                
            },
            1024: {
                items: 4
                
              
            },
            1200: {
                items: 4,
                center:true
                
            }
        }
    });
});

  
  
new WOW().init();