$(document).ready(function(){

  console.log($(window).width());
  console.log($(window).height());

  respHexCard("hex-container-1", "33.33%", "blue", "#2C518D");
  respHexCard("hex-container-2", "33.33%", "green", "orange");
  respHexCard("hex-container-3", "33.33%", "#403F52", "yellow");
  respHexCard("hex-container-4", "33.33%", "turquoise", "black");
  respHexCard("hex-container-5", "33.33%", "lightblue", "magenta");
  respHexCard("hex-container-6", "33.33%", "aquamarine", "pink");

  $('#hex-card-1, #hex-card-2, #hex-card-3, #hex-card-4, #hex-card-5, #hex-card-6' ).on('click',function(){
    $(this).toggleClass('flipped');
  });

  // addHexPic('hex-card-container-5',false, 'http://vignette2.wikia.nocookie.net/anchorman/images/b/b9/Anchorman_ron_burgundy_a_p.jpg/revision/latest?cb=20131211013425');
  // addHexPic('hex-card-container-2', 'http://twotribes.com/images/sized/images/uploads/berichten/373x2462-373x246.png');

  // $(window).scroll(function(){
  //   $('.lower-section').css({
  //       'opacity' : $(window).scrollTop() / ($('.lower-section').offset().top - 50)
  //       });
  // });

});

function addHexPic(hexClass, frontSidePic, backSidePic){
  var shapeId = hexClass.slice(18, hexClass.length);
  var shape = $('.' + hexClass);
  if(frontSidePic){
    $('.side1' + shapeId).prepend("<div class='hexpic-front" + shapeId + "'></div>");
    $('.hexpic-front' + shapeId).css({
      "max-width" : shape.width(),
      "height" : Math.round(2 / Math.sqrt(3) * shape.width()),
      "position" : "absolute",
      "-webkit-clip-path" : "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", //reg hex
      "background-image" : "url('" + frontSidePic + "')"
    });
  }
  if(backSidePic){
    $('.side2' + shapeId).prepend("<div class='hexpic-back" + shapeId + "'></div>");
    $('.hexpic-back' + shapeId).css({
      "width" : shape.width(),
      "height" : Math.round(2 / Math.sqrt(3) * shape.width()),
      "position" : "absolute",
      "-webkit-clip-path" : "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", //reg hex
      "clip-path" : "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      "background-image" : "url('" + backSidePic + "')"
    });
  }
}
