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
        center: true,
    items:2,
    loop:true,
    margin:20,
        navText: [
            "<img src='../images/arrow-02.svg' alt='Prev'>", 
            "<img src='../images/arrow-02.svg' alt='Next'>"
        ],          
        dots: false,         
        responsive:{
            0:{
                items:1,
                center:false
            },
            576:{
                items:1
            },
            768:{
                items:2,
               
            },
            1024:{
                items:4,
               
                
            },
            1200:{
                items:4
            }
        }
    });
});
  
  
new WOW().init();