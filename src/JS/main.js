"use strict";
var $ = require('jquery');
var cube = require('./cubeTransitions');
var flippinHexCard = require('./flippinHexCard');

var app = $(document).ready(function(){
  //test for chrome
  if(!(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase()))){
   alert('To view this site in its full awesomeness, please use Google Chrome. Cross-browser support is coming soon...');
  }

  //create hexagon cards
  flippinHexCard.create("hex-container-1", "33%");
  flippinHexCard.create("hex-container-2", "33%");
  flippinHexCard.create("hex-container-3", "33%");
  flippinHexCard.create("hex-container-4", "33%", "transparent", "transparent");
  flippinHexCard.create("hex-container-5", "33%");
  flippinHexCard.create("hex-container-6", "33%");
  flippinHexCard.create("hex-container-7", "33%", "gray", "gray");

  //set click handlers on hexagon cards for flipping
  $('#hex-card-1, #hex-card-2, #hex-card-3, #hex-card-5, #hex-card-6, #hex-card-7').on('click',function(){
    $(this).toggleClass('flipped');
  });

  //add pictures to hexagon cards
  flippinHexCard.addPic('hex-container-3', './images/liftoff.jpg');
  flippinHexCard.addPic('hex-container-2', './images/itsandbits.png');
  flippinHexCard.addPic('hex-container-1', './images/bitcoin app screenshot.png');
  flippinHexCard.addPic('hex-container-5', './images/portfolio-site-screenshot.png');
  flippinHexCard.addPic('hex-container-6', './images/react-app-screenshot.png');

  //add background color for backside of hexagon cards
  $('.back-1, .back-2, .back-3, .back-5, .back-6, .back-7').css({
    'background-image':'radial-gradient(white, #7F9BCA)'
  });

  //positioning for individual hexagon pics
  $('.hexpic-front-3').css({"background-position": "center top"});
  $('.hexpic-front-2').css({"background-position": "center 20%"});

  //text for individual hexagons
  $('.front-4').append('<div class="intro-text"><br><p class="intro-header">Chris Caldwell<br> Web Developer</p><br><br>This is my portfolio site. Follow the links to see recent projects I have been working on. Scroll down or click for more information about me.</div>').css({"cursor":"default"});
  $('.back-2').append('<div class="hexagon-text">This is a responsive front end design based primarily on features of the Bootstrap library. For practice I tried to use minimal JS.<br><br><a href="https://github.com/Cx2523/bootstrap-frontend" target="_blank">check it out</a></div>');
  $('.back-5').append('<div class="hexagon-text">This is my portfolio site. For practice I created it using jQuery as the only additional JS library. <br><br><a href="https://github.com/Cx2523/Chris-Caldwell-Web-Portfolio" target="_blank">check it out</a></div>');
  $('.back-1').append('<div class="hexagon-text">This Angular JS app is a Bitcoin data dashboard. It uses custom directives and D3.js to create some charts. It makes calls to a bitcoin api to get the updated price every minute.<br><br><a href="https://github.com/Cx2523/bitcoin-data-tracker" target="_blank">check it out</a></div>');
  $('.back-6').append('<div class="hexagon-text">This is a basic React App which allows you to store items you have purchased over time and then create new shopping lists based on previous purchases.<br><br><a href="https://github.com/Cx2523/react-grocery-tracker" target="_blank">check it out</a></div>');
  $('.back-3').append('<div class="hexagon-text">React video player App<br><br>Coming Soon</div>');


  //click rotation for cube
  $('#down-link').on('click', cube.downClickTransition);
  $('.more-info').on('click', cube.downClickTransition);
  $('#up-link').on('click', cube.upClickTransition);

  //scrolling rotation for cube
  var currentRotationAngle;

  $(document).on('mousewheel', function(e){
      currentRotationAngle = Math.acos($('#cube').css('transform').split(',')[5]) * 180/Math.PI;

      if(!currentRotationAngle){
        currentRotationAngle = 0;
      }

      if(e.originalEvent.wheelDeltaY <= -1 && currentRotationAngle <= 90){
        cube.scrollTransition(currentRotationAngle + 1.2);
      }
      else if (e.originalEvent.wheelDeltaY >= 1 && currentRotationAngle > 0){
        cube.scrollTransition(currentRotationAngle - 1.2);
      }

  });

});

module.exports = app;
