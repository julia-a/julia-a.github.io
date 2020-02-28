
var slider = document.querySelectorAll(".slider .slider__item");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);
 
function nextSlide() {
    slider[currentSlide].className = "slider__item";
    currentSlide = (currentSlide+1)%slider.length;
    slider[currentSlide].className = 'slider__item slider__show';
}