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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


/*------colorfulgallery---------*/

//var slideIndexColor = 1;
//showSlidesColor(slideIndexColor);
//
//function plusSlidesColor(n) {
////	alert("hello");
//  showSlidesColor(slideIndexColor += n);
//}
//
//function currentSlideColor(n) {
//  showSlidesColor(slideIndexColor = n);
//}
//
//function showSlidesColor(n) {
////	alert("hello1");
//  var i;
//  var slidescolor = document.getElementsByClassName("mycolorfulSlides");
//	console.log(slidescolor[0].style);
//	console.log(slidescolor[0].style.display);
//	console.log(slidescolor[0].style.cssText);
//  var dotscolor = document.getElementsByClassName("democolor");
//	console.log(dotscolor);
//  var captionTextcolor = document.getElementById("caption-color");
//	console.log(captionTextcolor);
//  if (n > slidescolor.length) {slideIndexColor = 1}
//  if (n < 1) {slideIndexColor = slidescolor.length}
//  for (i = 0; i < slidescolor.length; i++) {
//      slidescolor[i].style.display = "none";
//  }
//  for (i = 0; i < dotscolor.length; i++) {
//      dotscolor[i].className = dotscolor[i].className.replace(" active", "");
//  }
//  slidescolor[slideIndexColor-1].style.display = "block";
//	console.log(slidescolor[1].style);
//  dotscolor[slideIndexColor-1].className += " active";
//  captionTextcolor.innerHTML = dotscolor[slideIndexColor-1].alt;
//}