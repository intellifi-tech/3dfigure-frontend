
/*lightbox thumbnail prints*/
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({ wrapping: false });

  });

/*slick slider thumbnail prints*/
  $(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});

/*landing page scroll href click events*/
/*$("#cform").click(function() {
    $('html, body').animate({
        scrollTop: $("#concepts").offset().top
    }, 1500);
});*/
