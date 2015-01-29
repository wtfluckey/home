$(function() {
  var hoverInNav = function() {
    var animation = $(this).data('animation');
    $(this).addClass('supaFast animated ' + animation);
  };

  var hoverOutNav = function() {
    var animation = $(this).data('animation');
    $(this).removeClass('supaFast animated ' + animation);
  };

  $('.animateHover').hover(hoverInNav, hoverOutNav);


  var animationEnd = function() {
    $('.animateHeader').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', removeAnimationClasses);
  };

  var removeAnimationClasses = function() {
    var classes = "delayPnt3s delayPnt1s animated fadeInUp";
    $('.animateHeader').removeClass(classes);
  };

  var animateOnScroll = function() {
    $('.scrollAnimateFromTop').each( function(i) {
      var top_of_object = $(this).position().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height() - 300;
      var animation = $(this).data('animation');

      if (bottom_of_window > top_of_object) {
        $(this).removeClass('scrollAnimateFromTop').addClass('fast animated ' + animation);
      }
    });

    $('.scrollAnimateFromBottom').each( function(i) {
      var bottom_of_object = $(this).position().top + $(this).outerHeight() + 300;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      var animation = $(this).data('animation');

      if (bottom_of_window > bottom_of_object) {
        $(this).addClass('fast animated ' + animation);
      }
    });
  };

  if ( $(window).width() > 1024) {
    $(window).scroll(animateOnScroll);
  } else {
    $('.hideme').removeClass('hideme');
  };


  var fadeInHeaders = function() {
  	$('.animateHeader').removeClass('hideme').addClass('fast animated fadeInUp')
    animationEnd();
  };

  $(window).load(fadeInHeaders);

  var unhideIfIE = function() {
    if (($.browser.msie) && ($.browser.version <= "9.0")) {
      $('.hideme').removeClass('hideme');
    };
  };

  $(window).load(unhideIfIE);

});
