var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev');

var slides = document.querySelectorAll('.slide');
var slideIndex = 0;

nextBtn.addEventListener('click', clickNext);
prevBtn.addEventListener('click', clickPrev);


function clickNext() {

  if (slideIndex - 1 == -1) {
    slideIndex = slides.length - 1;
  }
  else {
    slideIndex--;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.add('opacity_zero');
  }

  slides[slideIndex].classList.remove('opacity_zero');
}

function clickPrev() {

  if (slideIndex + 1 == slides.length) {
    slideIndex = 0;
  }
  else {
    slideIndex++;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.add('opacity_zero');
  }

  slides[slideIndex].classList.remove('opacity_zero');
}
