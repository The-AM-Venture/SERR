! function (a) {
	"use strict";
	a("a.page-scroll").bind("click", function (e) {
		var l = a(this);
		a("html, body").stop().animate({
			scrollTop: a(l.attr("href")).offset().top - 50
		}, 1250, "easeInOutExpo"), e.preventDefault()
	}), a("body").scrollspy({
		target: ".navbar-fixed-top",
		offset: 51
	}), a(".navbar-collapse ul li a").click(function () {
		a(".navbar-toggle:visible").click()
	}), a("#mainNav").affix({
		offset: {
			top: 100
		}
	})
}(jQuery);
