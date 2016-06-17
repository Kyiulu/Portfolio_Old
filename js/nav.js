var currLink;

$("nav a").click(function(){
  $("nav a").toggleClass("active",true);
  $("nav a").not(this).toggleClass("active",false);
});
