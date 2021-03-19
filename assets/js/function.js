// JavaScript Document
$(document).ready(function(e) {
			$(".device-nav").click(function(){
				$(this).find('span').toggleClass('fa-times').toggleClass('fa-bars');
				$("nav").toggleClass("reveal");
			});
			$(".navigation nav ul li a").click(function(){
				$('.device-nav').find('span').toggleClass('fa-bars').toggleClass('fa-times');
				$("nav").toggleClass("reveal");
			});
			$('.navigation nav ul li a').smoothScroll();
				$(window).scroll(function() {
					var scroll = $(window).scrollTop();
			
					if (scroll >= 100) {
						$('header').addClass('bg-header');
					} else {
						$('header').removeClass('bg-header');
					}
				});
});