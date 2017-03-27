function respHexCard(hexClass, width, backColor, frontColor){
  var shapeId = hexClass.slice(13, hexClass.length);

  var classNames = {
    hexCard : "hex-card" + shapeId,
    frontSide : "front" + shapeId,
    backSide : "back" + shapeId
  };

  $('.' + hexClass).append('<div id=' + classNames.hexCard + "><figure class=" + classNames.frontSide + "></figure><figure class=" + classNames.backSide + "></figure></div>").css({
    "height" : "100%",
    "width" : width,
    "perspective" : "800px",
    "-webkit-clip-path" : "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    "clip-path" : "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    "-moz-clip-path" : "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    "-o-clip-path" : "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    "-ms-clip-path" : "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    "position" : "relative",
    "display" : "inline-block"
  });

  $('#' + classNames.hexCard).css({
    "height" : "100%",
    "width" : "100%",
    "-webkit-clip-path" : "inherit",
    "clip-path" : "inherit",
    "-moz-clip-path" : "inherit",
    "-o-clip-path" : "inherit",
    "-ms-clip-path" : "inherit",
    "transform-style" : "preserve-3d",
    "transition" : "transform 2s",
    "position" : "absolute"
  });

  $('#' + classNames.hexCard + ' figure').css({
    "margin": "0",
    "position": "absolute",
    "-webkit-clip-path": "inherit",
    "clip-path" : "inherit",
    "-moz-clip-path" : "inherit",
    "-o-clip-path" : "inherit",
    "-ms-clip-path" : "inherit",
    "width": "100%",
    "height": "100%",
    "backface-visibility": "hidden",
    "display":"block"
  });

  $('#' + classNames.hexCard + ' .' + classNames.frontSide).css({
    "height":"100%",
    "width":"100%",
    "-webkit-clip-path":"inherit",
    "clip-path" : "inherit",
    "-moz-clip-path" : "inherit",
    "-o-clip-path" : "inherit",
    "-ms-clip-path" : "inherit",
    "background-color": frontColor,
    "position": "absolute",
    "cursor" : "pointer"
  });

  $('#' + classNames.hexCard + ' .' + classNames.backSide).css({
    "height":"100%",
    "width":"100%",
    "-webkit-clip-path":"inherit",
    "clip-path" : "inherit",
    "-moz-clip-path" : "inherit",
    "-o-clip-path" : "inherit",
    "-ms-clip-path" : "inherit",
    "background-color": backColor,
    "position": "absolute",
    "transform" : "rotateY(180deg)",
    "cursor" : "pointer"
  })
}
