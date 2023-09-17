let leftButton = document.querySelector('.button_left')
let rightButton = document.querySelector('.button_right')
let leftEdgeSlide = 5;
let rightEdgeSlide = 4;

function createNextSlide (slideNumber) {
  let carousel = document.querySelector('.carousel');
  let createdSlide = document.createElement('div');
  let deletedSlide = document.querySelector('.item_' + slideNumber);
  let createdText = document.createElement('p');
  let swappedText = document.querySelector('.text_' + slideNumber).textContent;
  
  // creating slide
  carousel.append(createdSlide);
  createdSlide.appendChild(createdText);
  createdSlide.classList.add('carousel_item');
  createdText.classList.add('carousel_text');
  createdText.textContent = swappedText;
  createdSlide.classList.add('item_' + (slideNumber)); 
  createdText.classList.add('text_' + (slideNumber));
  deletedSlide.remove();
}

function createPrevSlide (slideNumber) {
  let carousel = document.querySelector('.carousel');
  let createdSlide = document.createElement('div');
  let deletedSlide = document.querySelector('.item_' + slideNumber);
  let createdText = document.createElement('p');
  let swappedText = document.querySelector('.text_' + slideNumber).textContent;
  
  // creating slide
  carousel.prepend(createdSlide);
  createdSlide.appendChild(createdText);
  createdSlide.classList.add('carousel_item');
  createdText.classList.add('carousel_text');
  createdText.textContent = swappedText;
  createdSlide.classList.add('item_' + (slideNumber)); 
  createdText.classList.add('text_' + (slideNumber));
  deletedSlide.remove();
}



rightButton.addEventListener("click", () => {

  createNextSlide(leftEdgeSlide);
  (leftEdgeSlide == 5) ? leftEdgeSlide = 1 : leftEdgeSlide++; 
  (rightEdgeSlide == 5) ? rightEdgeSlide = 1 : rightEdgeSlide++; 
  
});

leftButton.addEventListener("click", () => {
  
  createPrevSlide(rightEdgeSlide);
  (leftEdgeSlide == 1) ? leftEdgeSlide = 5 : leftEdgeSlide--; 
  (rightEdgeSlide == 1) ? rightEdgeSlide = 5 : rightEdgeSlide--;

});