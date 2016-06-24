var galleryP, galleryR;
var current;
var page;
//Ugly image preloader
var pic1 = new Image();
var pic2 = new Image();
var pic3 = new Image();
var pic4 = new Image();
var pic5 = new Image();
var pic6 = new Image();
var pic7 = new Image();
var pic8 = new Image();
var pic9 = new Image();
var pic10 = new Image();
var pic11 = new Image();
var pic12 = new Image();
var pic13 = new Image();
var pic14 = new Image();
var pic15 = new Image();
pic1.src="img/pict/mac/1.jpg";
pic2.src="img/pict/mac/2.jpg";
pic3.src="img/pict/mac/3.jpg";

pic4.src="img/pict/lgp/1.jpg";
pic5.src="img/pict/lgp/2.jpg";
pic6.src="img/pict/lgp/3.jpg";

pic7.src="img/pict/bob/1.jpg";
pic8.src="img/pict/bob/2.jpg";
pic9.src="img/pict/bob/3.jpg";

pic10.src="img/real/qai/1.png";
pic11.src="img/real/qai/2.png";
pic12.src="img/real/qai/3.png";

pic13.src="img/real/hey/1.jpg";
pic14.src="img/real/hey/2.jpg";
pic15.src="img/real/hey/3.jpg";

var macroG = new Array(pic1,pic2,pic3);
var lightG = new Array(pic4,pic5,pic6);
var bobitG = new Array(pic7,pic8,pic9);

var quai36 = new Array(pic10,pic11,pic12);
// var nordik = new Array(pic13,pic1,pic);
var heyGal = new Array(pic13,pic14,pic15);

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
  console.log("changing Wallp");
  if (gal == 1) {
    console.log("wallP:"+galleryP[0].src);
    $("#sec-pict").css("background-image","url("+galleryP[current].src+")");
  }else if(gal == 2) {
    console.log("wallP:"+galleryR[0].src);
    $("#sec-real").css("background-image","url("+galleryR[current].src+")");
  }
  console.log("WallP changed");
}
