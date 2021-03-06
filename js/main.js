$(document).ready(function() {

	// "X" ANIMATION
	$(".ham-icon").click(function () {
        $(".mobilenav").fadeToggle(500);
        $(".top-menu").toggleClass("top-animate");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
    });

	// CLOSE MENU ON CLICK
    $(".mobilenav a").click(function() {
    	$(".mobilenav").fadeToggle(500);
        $(".top-menu").toggleClass("top-animate");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
    });

   	//SMOOTH SCROLL TO LINK
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top +42
	    }, 600, 'swing', function () {
		    if(history.pushState) history.pushState(null,null,target);
				else location.hash = target;
		});;
	});

	// pause arrow animation on scroll
	$(window).scroll(function() {
		var scroll_top = $(this).scrollTop();
		if (scroll_top >= 1) {
			$('.btn-circle i').removeClass('animated');
			$('.btn-circle').css("opacity", ".6");
		} else {
			$('.btn-circle i').addClass('animated');
			$('.btn-circle').css("opacity", "1");
		}
	});

	// //CHANGE BURGER COLOR ON SCROLL 
    var $win = $(window);
    var winH = $win.height();

	$win.on('scroll', function() {
		if ($(this).scrollTop() > winH) {
			$('.menui').css({"background": "#CFCFCF"});
		} else {
			$('.menui').css({"background": "#F1F3F2"});
		}
	}).on('resize', function() {
		winH = $(this).height();
	});
});
