var currLink;

$("nav a").click(function(){
  $("nav a").toggleClass("active",true);
  $("nav a").not(this).toggleClass("active",false);
});

//Side Panel
$(".menuButton").mouseenter(function(){
  console.log("enter");
  $(".menuPanel").addClass("deploy");
  $(".menuButton").addClass("hide");
});
$(".menuPanel").mouseleave(function(){
  console.log("leave");
  $(".menuPanel").removeClass("deploy");
  $(".menuButton").removeClass("hide");
});
