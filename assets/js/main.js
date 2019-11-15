$(document).ready(function() {
  $('#recipeCarousel').carousel({
    interval: 3000
  })

  $('.carousel .carousel-item').each(function () {
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
    }
  });

  $('#giving-back').backstretch('assets/images/medcouture-givingback.png');
  $('#splash').backstretch('assets/images/PeachesFeature_2800px.jpg');

  var controller = new ScrollMagic.Controller();
                
  var touch = new ScrollMagic.Scene({
      triggerElement: '#touch',
      triggerHook: 1,
      reverse: true,
  })
      .setClassToggle('#touch','fade-in')
      .addTo(controller);


})
