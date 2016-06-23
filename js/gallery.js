var galleryP, galleryR;
var current;
var page;

var macroG = new Array("img/pict/mac/1.jpg","img/pict/mac/2.jpg","img/pict/mac/3.jpg");
var lightG = new Array("img/pict/lgp/1.jpg","img/pict/lgp/2.jpg","img/pict/lgp/3.jpg");
var bobitG = new Array("img/pict/bob/1.jpg","img/pict/bob/2.jpg","img/pict/bob/3.jpg");

var quai36 = new Array("img/real/qai/1.png","img/real/qai/2.png","img/real/qai/3.png");
var nordik = new Array("img/real/nrd/1.png","img/real/nrd/2.png","img/real/nrd/3.png");
var heyGal = new Array("img/real/hey/1.jpg","img/real/hey/2.jpg","img/real/hey/3.jpg");

$("nav a").click(function(){
  if ($(this).attr("href") == "#pict") {
    page = 1;
  }
  if ($(this).attr("href") == "#real") {
    page = 2;
  }
  console.log(page);
});

$(".select a").click(function(e){
  e.preventDefault();

  $(this).closest("section").find(".switchButton").css("opacity","1");
  $(this).closest("section").find(".infoPopup").addClass("hidden");

  switch ($(this).find(':first-child').attr("alt")) {
    case "Lightpainting":
      galleryP = lightG;
      break;
    case "Macro":
      galleryP = macroG;
      break;
    case "Bobital 2014":
      galleryP = bobitG;
      break;
    case "Hey":
      galleryR = heyGal;
      break;
    case "Nordik":
      galleryR = nordik;
      break;
    case "Quai36":
      galleryR = quai36;
      break;
    default:
  }
  current = 0;
  updateG(page);
});

$(".switchButton img").click(function(e){
  switch ($(this).attr("alt")) {
    case "Left":
      switch (current) {
        case 0:
          current = 2;
          break;
        case 1:
          current = 0;
          break;
        case 2:
          current = 1;
          break;
        default:
      }
      updateG(page);
      break;
    case "Right":
      switch (current) {
        case 0:
          current = 1;
          break;
        case 1:
          current = 2;
          break;
        case 2:
          current = 0;
          break;
        default:
      }
      updateG(page);
      console.log(current);
      console.log("right");
      break;
    // case "Fullscreen":
    //   console.log("fullscreen");
    //   if ($(document).fullScreen()) {
    //     $(document).fullScreen(false);
    //     $(this).attr("src") = "img/fullscreen.svg";
    //     $("section").css("background-size","cover");
    //     $("header").removeClass("hidden");
    //     $("footer").removeClass("hidden");
    //   }
    //   else {
    //     $(document).fullScreen(true);
    //     $(this).attr("src") = "img/fullexit.svg";
    //     $("section").css("background-size","contain");
    //     $("header").addClass("hidden");
    //     $("footer").addClass("hidden");
    //   }
    //
    //   break;
    default:
  }
});

function updateG(gal){
  if (gal == 1) {
    console.log("wallP:"+galleryP[0]);
    $("#sec-pict").css("background-image","url(./"+galleryP[current]+")");
  }else if(gal == 2) {
    console.log("wallP:"+galleryR[0]);
    $("#sec-real").css("background-image","url(./"+galleryR[current]+")");
  }
  console.log("WallP changed");
}
