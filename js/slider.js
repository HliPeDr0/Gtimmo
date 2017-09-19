$(document).ready(function() {
  
  var slideStart;

  function startSlide() {
    slideStart = setInterval(slideShow, 30000);
  };
  function slideShow() {

    var slideCurrent = $(".slide-active");
    var slideNext = slideCurrent.next();
    var dotCurrent = $("li.active");
    var dotNext = dotCurrent.next();

    if (slideNext.length == 0) {
      slideNext = $(".slide").first();
      dotNext = $(".slide-indicator li").first();
    }

    var slideIndex = slideNext.index();

    $('.slide').css({
      'transform': 'translate(-' + (slideIndex) * 100 + '%)'
    });

    $('.slide').removeClass('slide-active');
    slideNext.addClass('slide-active');

    var captionNext = slideNext.find(".caption");

    $('.slide-indicator li').removeClass('active');
    dotNext.addClass('active');
    
    

  };
  function parallaxX() {
    var scrollTop = window.pageYOffset

    $(window).on("scroll resize", function() {
      scrollTop = window.pageYOffset;
    });

    $(".slide").each(function() {
      var parallaxImage = $(this);
      var parallaxOffset = parallaxImage.offset().top;
      var yPos;
      var coords;

      $(window).on("scroll resize", function() {
        yPos = -(parallaxOffset - scrollTop) / 2;
        coords = '50% ' + yPos + 'px';

        parallaxImage.css({
          backgroundPosition: coords
        });
      });
    });
  };
  
 
  $('.slide-indicator li').on("click", function() {

    clearInterval(slideStart);
    var goToSlide = $(this).index();

    $('.slide-indicator li').removeClass('active');
    $('.slide').removeClass('slide-active');
    $('.slide').eq(goToSlide).addClass('slide-active');
    $(this).addClass('active');

    $('.slide').css({
      'transform': 'translate(-' + (goToSlide) * 100 + '%)'
    });
    startSlide();
  });

  startSlide();
  parallaxX();
});