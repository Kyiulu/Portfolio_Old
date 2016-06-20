var galleryP;
var current;

var macroG = new Array("img/pict/mac/1.jpg","img/pict/mac/2.jpg","img/pict/mac/3.jpg");
var lightG = new Array("img/pict/lgp/1.jpg","img/pict/lgp/2.jpg","img/pict/lgp/3.jpg");
var bobitG = new Array("img/pict/bob/1.jpg","img/pict/bob/2.jpg","img/pict/bob/3.jpg");

$(".select a").click(function(e){
  e.preventDefault();
  console.log("select");
  $(".switchButton").css("opacity","1");
  switch ($(this).find(':first-child').attr("alt")) {
    case "Lightpainting":
      console.log("sucess");
      galleryP = lightG;
      break;
    case "Macro":
      console.log("sucess");
      galleryP = macroG;
      break;
    case "Bobital 2014":
      console.log("sucess");
      galleryP = bobitG;
      break;
    default:
  }
  $("#sec-pict").css("background-image","url(./"+galleryP[0]+")");
  console.log(galleryP[0]);

});
