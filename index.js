var slideIndex = 1;
showSlides(slideIndex, "mySlides", "dot");
showSlides(slideIndex, "container3", "dot");

function plusSlides(n, divClass, dotClass) {
  slideIndex += n;
  showSlides(slideIndex, divClass, dotClass);
}

function currentSlide(n, divClass, dotClass) {
  showSlides(n, divClass, dotClass);
}

function showSlides(n, divClass, dotClass) {
  var i;
  var slides = document.getElementsByClassName(divClass);
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[n-1].style.display = "block";
  
  if(dotClass != null)
  {
	  var dots = document.getElementsByClassName(dotClass);
	  for (i = 0; i < dots.length; i++) {
		  dots[i].className = dots[i].className.replace(" active", "");
	  }
	  dots[n-1].className += " active";
  }
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}