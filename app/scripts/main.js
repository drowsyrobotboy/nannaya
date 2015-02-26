$(function() {
$( "#font-select" ).selectmenu({
  select: function( event, ui ) {
    var fontName = document.getElementById("font-select").value;
    $(".content").css({"font-family":fontName});
  }
  });
var spinner = $( "#spinner" ).spinner({
  min:24
});
$("#spinner").on( "spinchange", function( event, ui ) {
  var fontSize = spinner.spinner( "value" );
  $(".content").css({"font-size":fontSize});
});
$("#spinner").on( "spin", function( event, ui ) {
  var fontSize = spinner.spinner( "value" );
  $(".content").css({"font-size":fontSize});
});
spinner.spinner( "value", 24);
$( "input[type=submit], a, button" )
  .button()
  .click(function( event ) {
  event.preventDefault();
});
});
$('.content').keyup(function(e) {
  if (e.keyCode == 32 | e.keyCode == 13) {
    console.log("Space!");
    print_many_words();
  }
});
function contentHeight(){
  var newHeight=$('.page').outerHeight() - $('.top').outerHeight();
  newHeight= newHeight - 40;
  console.log(newHeight);
  $('.content').css({"height":newHeight});
}
window.onload=contentHeight();
$( window ).resize(function() {
  contentHeight();
});
