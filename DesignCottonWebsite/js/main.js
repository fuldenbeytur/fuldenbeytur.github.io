/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}



function moderninfo() {
	console.log("alert");
	var popup = document.getElementById("myPopupmodern");
	popup.classList.toggle("show");
}

function traditionalinfo() {
	console.log("alert");
	var popup = document.getElementById("myPopuptradi");
	popup.classList.toggle("show");
}

function colorfulinfo() {
	console.log("alert");
	var popup = document.getElementById("myPopupcolor");
	popup.classList.toggle("show");
}

/*----moderngallery------*/

var slideIndex = 1;
showSlidesmodern(slideIndex);

function plusSlidesmodern(n) {
	showSlidesmodern(slideIndex += n);
}

function currentSlidemodern(n) {
	showSlidesmodern(slideIndex = n);
}

function showSlidesmodern(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	console.log(slides[0].style);
	console.log(slides[0].style.display);
	console.log(slides[0].style.cssText);
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	captionText.innerHTML = dots[slideIndex - 1].alt;
}


/*------colorfulgallery---------*/
var slideColorIndex = 1;
showSlideColor(slideColorIndex);

function plusSlidesColor(n) {
	showSlideColor(slideColorIndex += n);
}

function currentSlideColor(n) {
	showSlideColor(slideColorIndex = n);
}

function showSlideColor(n) {
	var k;
	var slidescolor = document.getElementsByClassName("myColorSlides");
	console.log(slidescolor[0].style);
	console.log(slidescolor[0].style.display);
	console.log(slidescolor[0].style.cssText);
	var dotscolor = document.getElementsByClassName("democolor");
	var captionText = document.getElementById("captioncolor");
	if (n > slidescolor.length) {
		slideColorIndex = 1
	}
	if (n < 1) {
		slideColorIndex = slidescolor.length
	}
	for (k = 0; k < slidescolor.length; k++) {
		slidescolor[k].style.display = "none";
	}
	for (k = 0; k < dotscolor.length; k++) {
		dotscolor[k].className = dotscolor[k].className.replace(" activecolor", "");
	}
	slidescolor[slideColorIndex - 1].style.display = "block";
	dotscolor[slideColorIndex - 1].className += " activecolor";
	captionText.innerHTML = dotscolor[slideColorIndex - 1].alt;
}
