$(document).ready(function(){
  if(!(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase()))){
   alert('To view this site in its full awesomeness, please use Google Chrome.');
  }

  respHexCard("hex-container-1", "33%", "gray", "gray");
  respHexCard("hex-container-2", "33%", "gray", "gray");
  respHexCard("hex-container-3", "33%", "gray", "gray");
  respHexCard("hex-container-4", "33%", "transparent", "transparent");
  respHexCard("hex-container-5", "33%", "gray", "gray");
  respHexCard("hex-container-6", "33%", "gray", "gray");
  respHexCard("hex-container-7", "33%", "gray", "gray");

  $('#hex-card-1, #hex-card-2, #hex-card-3, #hex-card-5, #hex-card-6, #hex-card-7').on('click',function(){
    $(this).toggleClass('flipped');
  });

  addHexPic('hex-container-3', './images/liftoff.jpg');
  addHexPic('hex-container-2', './images/itsandbits.png');
  addHexPic('hex-container-1', './images/bitcoin app screenshot.png');
  addHexPic('hex-container-5', './images/portfolio-site-screenshot.png');
  addHexPic('hex-container-6', './images/react-app-screenshot.png');

  $('.front-4').append('<div class="intro-text"><br><p class="intro-header">Chris Caldwell<br> Web Developer</p><br><br>This is my portfolio site. Follow the links to see recent projects I have been working on. Scroll down or click for more information about me.</div>').css({"cursor":"default"});

  $('.back-1, .back-2, .back-3, .back-5, .back-6, .back-7').css({
    'background-image':'radial-gradient(white, #7F9BCA)' //#43556B
  });

  //position for individual hexagon pics
  $('.hexpic-front-3').css({"background-position": "center top"});
  $('.hexpic-front-2').css({"background-position": "center 20%"});

  //text for individial hexagons
  $('.back-2').append('<div class="hexagon-text">This is a responsive front end design based primarily on features of the Bootstrap library. For practice I tried to use minimal JS.<br><br><a href="https://github.com/Cx2523/bootstrap-frontend" target="_blank">check it out</a></div>');
  $('.back-5').append('<div class="hexagon-text">This is my portfolio site. For practice I created it using jQuery as the only additional JS library. <br><br><a href="https://github.com/Cx2523/Cx2523.github.io" target="_blank">check it out</a></div>');
  $('.back-1').append('<div class="hexagon-text">This Angular JS app is a Bitcoin data dashboard. It uses custom directives and D3.js to create some charts. It makes calls to a bitcoin api to get the updated price every minute.<br><br><a href="https://github.com/Cx2523/bitcoin-data-tracker" target="_blank">check it out</a></div>');
  $('.back-6').append('<div class="hexagon-text">This is a basic React App which allows you to store items you have purchased over time and then create new shopping lists based on previous purchases.<br><br><a href="https://github.com/Cx2523/react-grocery-tracker" target="_blank">check it out</a></div>');
  $('.back-3').append('<div class="hexagon-text">React video player App<br><br>Coming Soon</div>');


  //click rotation
  $('#down-link').on('click', downTransition);
  $('.more-info').on('click', downTransition);
  $('#up-link').on('click', upTransition);

  //scrolling rotation
  var currentRotationAngle;

  $(document).on('mousewheel', function(e){
      currentRotationAngle = Math.acos($('#cube').css('transform').split(',')[5]) * 180/Math.PI;

      if(!currentRotationAngle){
        currentRotationAngle = 0;
      }

      if(e.originalEvent.wheelDeltaY <= -1 && currentRotationAngle <= 90){
        scrollDownTransition(currentRotationAngle + 1.2);
      }
      else if (e.originalEvent.wheelDeltaY >= 1 && currentRotationAngle > 0){
        scrollUpTransition(currentRotationAngle - 1.2);
      }

  });

});

function scrollDownTransition(y){
    $('#cube').css('transform', 'rotateX(' + y + 'deg)');
    $('.logos-1').css('left', y / 90 * 180 - 180 + '%');
    $('.logos-2').css('left', y / 90 * 140 - 140 + '%');
    $('.logos-3').css('left', y / 90 * 100 - 100 + '%');
    $('#pic').css('right', 500 * y / 90 - 500 + 'px');
    $('.upper-section').css('opacity', 1 - y / 90);
    $('.lower-section').css('opacity', y / 90);
  }

function scrollUpTransition(y){
    $('#cube').css('transform', 'rotateX(' + y + 'deg)');
    $('.logos-1').css('left', y / 90 * 180 - 180 + '%');
    $('.logos-2').css('left', y / 90 * 140 - 140 + '%');
    $('.logos-3').css('left', y / 90 * 100 - 100 + '%');
    $('#pic').css('right', 500 * y / 90 - 500 + 'px');
    $('.upper-section').css('opacity', 1 - y / 90);
    $('.lower-section').css('opacity', y / 90);
  }


function upTransition(){
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

  setTimeout(
    function(){
      $('#cube').css('transition', 'transform 0s');
      $('.logos-1, .logos-2, .logos-3').css('transition', 'left 0s');
      $('#pic').css('transition', 'right 0s');
      $('.lower-section').css('transition', 'opacity 0s');
      $('.upper-section').css('transition', 'opacity 0s');
    },2000);
}


function downTransition(){

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

  setTimeout(
    function(){
      $('#cube').css('transition', 'transform 0s');
      $('.logos-1, .logos-2, .logos-3').css('transition', 'left 0s');
      $('#pic').css('transition', 'right 0s');
      $('.lower-section').css('transition', 'opacity 0s');
      $('.upper-section').css('transition', 'opacity 0s');
    },2000);
}

////////////////////////
