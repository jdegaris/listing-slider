let sliderImages = document.querySelectorAll('.slide'),
    arrowRight = document.querySelector('#arrow-right'),
    arrowLeft = document.querySelector('#arrow-left'),
    current = 0;

//clears all images
function reset() {
  for(let i = 0; i < sliderImages.length; i++){
    sliderImages[i].style.display = 'none';
  }
}

//init Slider
function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

//Show Previous Slide 
function slideLeft() {
  reset();
  sliderImages[current-1].style.display = 'block';
  current--;
}

//SHOW NEXT SLIDE
function slideRight() {
  reset();
  sliderImages[current+1].style.display = 'block';
  current++;
}


//Left Arrow Click
arrowLeft.addEventListener('click', function(){
  if(current === 0) {
  current = sliderImages.length;
}
  slideLeft();
});

//Right Arrow Click
arrowRight.addEventListener('click', function(){
  if(current === sliderImages.length-1) {
  current = -1;
}
  slideRight();
});


startSlide();