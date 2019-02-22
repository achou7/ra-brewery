//Javascript document

// var slideIndex = 1;
// showSlides(slideIndex);

// Thumbnail image controls

// function currentSlide(n) {
//     showSlides(slideIndex = n);
//   }
  
//   function showSlides(n) {
//     var i;
    
//     var slides = document.getElementsByClassName("my-slides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1} 
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; 
//     }
//     for (j = 0; j < dots.length; j++) {
       
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block"; 
//     dots[slideIndex-1].className += " active";
//   }

//autoslide
var slides = document.getElementsByClassName("my-slides");
if(slides.length != 0) {
  var slideIndex = 0;
  showSlides();
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("my-slides");
  var dots = document.getElementsByClassName("dot"); 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");

  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].classList.add("active");
  setTimeout(showSlides, 4000); //change every 4 secs
}




$('.hamburger').click(function() {
  $('.hamburger span').toggleClass('selected');
  $('nav').toggleClass('open');
});