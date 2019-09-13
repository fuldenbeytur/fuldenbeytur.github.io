$(document).ready(function () {

		$(window).scroll(function () {
			var scroll = $(window).scrollTop();
			if (scroll > 3000) {
				$("a:link").css("color", "#FBF9F6");
			} else {
				$("a:link").css("color", "#222");
			}
		});

	}


)
