let sliderImages = document.querySelectorAll('.slide'),
    arrowRight = document.querySelector('#arrow-right'),
    arrowLeft = document.querySelector('#arrow-left'),
    current = 0;
    listings = [
      {
        street: "123 Happy St",
        city: "Palm Bay",
        state: "FL",
        price: "1,200,000",
        sqft: 3200,
        bedrooms: 5,
        bathrooms: 3
      },
      {
        street: "308 Negra Arroyo Lane",
        city: "Melbourne",
        state: "FL",
        price: "380,000",
        sqft: 1800,
        bedrooms: 3,
        bathrooms: 2
      },
      {
        street: "817 Cherokee Ave",
        city: "St. Cloud",
        state: "FL",
        price: "220,000",
        sqft: 1554,
        bedrooms: 2,
        bathrooms: 1
      },
    ]

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
  document.getElementById('street').innerHTML = listings[current-1].street;
  document.getElementById('city-state').innerHTML = listings[current-1].city + ", " + listings[current-1].state;
  document.getElementById('house-price').innerHTML = "$" + listings[current-1].price;
  document.getElementById('house-info').innerHTML = 
  listings[current-1].bedrooms + " bd / " + listings[current-1].bathrooms + " ba / " + listings[current-1].sqft + " sqft";
  current--;
}

//SHOW NEXT SLIDE
function slideRight() {
  reset();
  sliderImages[current+1].style.display = 'block';
  document.getElementById('street').innerHTML = listings[current+1].street;
  document.getElementById('city-state').innerHTML = listings[current+1].city + ", " + listings[current+1].state;
  document.getElementById('house-price').innerHTML = "$" + listings[current+1].price;
  document.getElementById('house-info').innerHTML = 
  listings[current+1].bedrooms + " bd / " + listings[current+1].bathrooms + " ba / " + listings[current+1].sqft + " sqft";
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