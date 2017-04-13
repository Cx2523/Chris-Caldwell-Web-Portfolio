var $ = require('jquery');

function scrollTransition(y){
    //math for all transitions is proportional to 0 - 90 degree rotation
    $('#cube').css('transform', 'rotateX(' + y + 'deg)');
    $('.logos-1').css('left', y / 90 * 180 - 180 + '%');
    $('.logos-2').css('left', y / 90 * 140 - 140 + '%');
    $('.logos-3').css('left', y / 90 * 100 - 100 + '%');
    $('#pic').css('right', 500 * y / 90 - 500 + 'px');
    $('.upper-section').css('opacity', 1 - y / 90);
    $('.lower-section').css('opacity', y / 90);
  }

//click transitions
function upClickTransition(){
  //run down transitions over duration of 2 seconds
  $('#cube').css({
    'transition':'transform 2s',
    'transform': 'rotateX(0deg)'
  });
  $('.logos-1').css({
    'transition':'left 2s',
    'left':'-180%'
  });
  $('.logos-2').css({
    'transition':'left 2s',
    'left':'-140%'
  });
  $('.logos-3').css({
    'transition':'left 2s',
    'left':'-100%'
  });
  $('#pic').css({
    'transition':'right 2s',
    'right': '-500px'
  });
  $('.lower-section').css({
    'transition':'opacity 2s',
    'opacity':'0'
  });
  $('.upper-section').css({
    'transition':'opacity 2s',
    'opacity':'100'
  });

  //after 2 second transition is completed, turn off transition duration so that scroll transitions work again
  setTimeout(
    function(){
      $('#cube').css('transition', 'transform 0s');
      $('.logos-1, .logos-2, .logos-3').css('transition', 'left 0s');
      $('#pic').css('transition', 'right 0s');
      $('.lower-section').css('transition', 'opacity 0s');
      $('.upper-section').css('transition', 'opacity 0s');
    },2000);
}

//click transitions
function downClickTransition(){
  //run down transitions over duration of 2 seconds
  $('#cube').css({
    'transition':'transform 2s',
    'transform': 'rotateX(90deg)'
  });

  $('#cube').toggleClass('rotate');

  $('.logos-1, .logos-2, .logos-3').css({
    'transition':'left 2s',
    'left':'0'
  });

  $('#pic').css({
    'transition':'right 2s',
    'right':'0'
  });
  $('.upper-section').css({
    'transition':'opacity 2s',
    'opacity':'0'
  });
  $('.lower-section').css({
    'transition':'opacity 2s',
    'opacity':'100'
  });

  //after 2 second transition is completed, turn off transition duration so that scroll transitions work again
  setTimeout(
    function(){
      $('#cube').css('transition', 'transform 0s');
      $('.logos-1, .logos-2, .logos-3').css('transition', 'left 0s');
      $('#pic').css('transition', 'right 0s');
      $('.lower-section').css('transition', 'opacity 0s');
      $('.upper-section').css('transition', 'opacity 0s');
    },2000);
}

module.exports = {
  scrollTransition: scrollTransition,
  downClickTransition: downClickTransition,
  upClickTransition: upClickTransition
}
