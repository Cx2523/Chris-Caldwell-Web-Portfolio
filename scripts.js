$(document).ready(function(){
  createHexCards("hex-card-container-1", 200, "blue", "#2C518D");
  createHexCards("hex-card-container-2", 200, "green", "orange");
  createHexCards("hex-card-container-3", 200, "#403F52", "yellow");
  createHexCards("hex-card-container-4", 200, "turquoise", "black");
  createHexCards("hex-card-container-5", 200, "lightblue", "magenta");
  createHexCards("hex-card-container-6", 200, "aquamarine", "pink");

  $('#hexcard-1, #hexcard-2, #hexcard-3, #hexcard-4, #hexcard-5, #hexcard-6' ).on('click',function(){
    $(this).toggleClass('flipped');
  });

  addHexPic('hex-card-container-5',false, 'http://vignette2.wikia.nocookie.net/anchorman/images/b/b9/Anchorman_ron_burgundy_a_p.jpg/revision/latest?cb=20131211013425');
  addHexPic('hex-card-container-2', 'http://twotribes.com/images/sized/images/uploads/berichten/373x2462-373x246.png');

  $(window).scroll(function(){
    $('.lower-section').css({
        'opacity' : $(window).scrollTop() / ($('.lower-section').offset().top - 50)
        });
  });

});

function addHexPic(hexClass, frontSidePic, backSidePic){
  var shapeId = hexClass.slice(18, hexClass.length);
  var shape = $('.' + hexClass);
  if(frontSidePic){
    $('.side1' + shapeId).prepend("<div class='hexpic-front" + shapeId + "'></div>");
    $('.hexpic-front' + shapeId).css({
      "width" : shape.width(),
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
      "background-image" : "url('" + backSidePic + "')"
    });
  }
}

function createHexCards(hexClass, width, colorFront, colorBack){
//creates a two-sided, flippable, regular hexagon from any section that has class="hex-card-container"
//dimensions are based on the width parameter which is the minimal diameter the hexagon
//https://en.wikipedia.org/wiki/Hexagon

//the incoming class name from the html should be in the format
//class="hex-card-container[id]" e.g. "hex-card-container-1","hex-card-containermySuperHexCard", ...
//this allows different hex cards to be distinguished, so that different properties
//such as size, color, and pictures can be set to specific hexagons

    var shapeId = hexClass.slice(18, hexClass.length);

    var classNames = {
        hexCardContainer : hexClass,
        hexCard :'hexcard' + shapeId, //this is an Id
        side1 : 'side1' + shapeId,
        side2 : 'side2' + shapeId,
        hexMiddleFront : 'hex-middle' + shapeId + ' front' + shapeId,
        hexTopFront : 'hex-top' + shapeId + ' front' + shapeId,
        hexBottomFront : 'hex-bottom' + shapeId + ' front' + shapeId,
        hexMiddleBack : 'hex-middle' + shapeId + ' back' + shapeId,
        hexTopBack : 'hex-top' + shapeId + ' back' + shapeId,
        hexBottomBack : 'hex-bottom' + shapeId + ' back' + shapeId
    };

///create html structure for flip card hexagon///
    $('.' + classNames.hexCardContainer).append(
      '<div id=' + classNames.hexCard + '><figure class=' + classNames.side1 + '><div class="' + classNames.hexTopFront + '"></div><div class="' + classNames.hexMiddleFront + '"></div><div class="' + classNames.hexBottomFront + '"></div></figure><figure class=' + classNames.side2 + '><div class="' + classNames.hexTopBack + '"></div><div class="' + classNames.hexMiddleBack + '"></div><div class="' + classNames.hexBottomBack + '"></div></figure></div></section>'
      ).css({
      "width":width + "px",
      "display":"inline-block"
    });

///set css properties///
    $('.' + classNames.hexCardContainer).css({
      "width" : width,
      "position" : "relative",
      "perspective" : "800px"
    });

    $('#' + classNames.hexCard).css({
      "width" : "100%",
      "height" : "100%",
      "position" : "absolute",
      "transform-style" : "preserve-3d",
      "transition" : "transform 2.5s"
    });

    $('#' + classNames.hexCard + ' figure').css({
      "margin" : "0",
      "display" : "block",
      "position" : "absolute",
      "width" : "100%",
      "height" : "100%",
      "backface-visibility" : "hidden"
    });

    $('.' + classNames.side2).css({
      "height" : "100%",
      "width" : "100%",
      "transform" : "rotateY(180deg)"
    });

///create multiclass jQuery selectors///
    for (var key in classNames){
      classNames[key] = classNames[key].replace(' ','.');
    }

///hexagon front side///
    $('.' + classNames.hexMiddleFront).css({
      "width": "inherit",
      "height": Math.round(width / Math.sqrt(3)) + "px", //for reg hex height = width/sqrt(3)
      "background-color":colorFront
    });
    $('.' + classNames.hexTopFront).css({
      "border-left": Math.round(width / 2) + "px solid transparent",
      "border-right": Math.round(width / 2) + "px solid transparent",
      "border-bottom": Math.round(width / Math.sqrt(12)) + "px solid " + colorFront //for reg hex height = width/sqrt(12)
    });
    $('.' + classNames.hexBottomFront).css({
      "border-left": Math.round(width / 2) + "px solid transparent",
      "border-right": Math.round(width / 2) + "px solid transparent",
      "border-top": Math.round(width / Math.sqrt(12)) + "px solid " + colorFront //for reg hex height = width/sqrt(12)
    });
///hexagon back side///
    $('.' + classNames.hexMiddleBack).css({
      "width": "inherit",
      "height": Math.round(width / Math.sqrt(3)) + "px", //for reg hex height = width/sqrt(3)
      "background-color": colorBack
    });
    $('.' + classNames.hexTopBack).css({
      "border-left": Math.round(width / 2) + "px solid transparent",
      "border-right": Math.round(width / 2) + "px solid transparent",
      "border-bottom": Math.round(width / Math.sqrt(12)) + "px solid " + colorBack //for reg hex height = width/sqrt(12)

    });
    $('.' + classNames.hexBottomBack).css({
      "border-left": Math.round(width / 2) + "px solid transparent",
      "border-right": Math.round(width / 2) + "px solid transparent",
      "border-top": Math.round(width / Math.sqrt(12)) + "px solid " + colorBack//for reg hex height = width/sqrt(12)
    });
  }
