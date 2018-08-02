var $img = $('.sun');
var $win = $(window);

$win.on('scroll',function(){
	console.log('before');
	var top = $win.scrollTop();
//	var top = $win.scrollTop()/4;
    $img.css('transform', 'rotate('+top+'deg)');
    console.log(top);
});



$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(10,1);}
        console.log("fade to 10,1")
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(10,0);}
        console.log("fade to 10,0")
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});