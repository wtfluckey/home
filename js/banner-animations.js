if ( $(window).width() > 1024 ) {
  window.onload = function(){
     setTimeout(function(){
    var detect_animation_end = function() {
       $('.showme').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', remove_class);
    };

    var remove_class = function() {
      $(this).removeClass('animated rotateIn fadeIn bounceIn fadeInLeft fadeInRight');
    };

    $('.hideme').each( function(i) {
      detect_animation_end();
      var animation = $(this).data('animation') || 'rotateIn';
        $(this).removeClass('hideme').addClass('showme animated ' + animation);
      });

     }, 100);
  };
} else {
  $('.hideme').each( function(i) {
    $(this).removeClass('hideme').addClass('showme');
  });
};

$(function() {
  $('.rotate-icon').mouseenter(function() {
    $(this).removeClass('supaFast animated iconHoverIn iconHoverOut');
    $(this).addClass('supaFast animated iconHoverIn');
  })
  .mouseleave(function() {
    $(this).removeClass('supaFast animated iconHoverIn').addClass('supaFast animated iconHoverOut');
  });
});
