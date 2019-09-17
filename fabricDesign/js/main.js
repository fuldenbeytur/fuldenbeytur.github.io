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

var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18){
	greeting = "good evening!";
}
else if(hourNow>12){
	greeting = "good afternoon!";
}
else if(hourNow>0){
	greeting = "good morning!";
}
else{
	greeting = "hello!";
}

console.log(greeting);

document.getElementById("greeting").innerHTML = greeting;
