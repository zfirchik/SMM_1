let leftButton = document.querySelector('.button-left')
let rightButton = document.querySelector('.button-right')
let leftEdgeSlide = 5;
let rightEdgeSlide = 4;

function createNextSlide (slideNumber) {
  let carousel = document.querySelector('.carousel__inner');
  let createdSlide = document.createElement('div');
  let deletedSlide = document.querySelector('.carousel-item-' + slideNumber);
  let createdText = document.createElement('p');
  let swappedText = document.querySelector('.carousel-text-' + slideNumber).textContent;
  
  carousel.animate(
    [
      { transform: "translateX(520px)" },
      { transform: "translateX(0px)" },
    ],
    {
      duration: 1200,
      iterations: 1,
    },
  );

  carousel.append(createdSlide);
  createdSlide.appendChild(createdText);
  createdSlide.classList.add('carousel__item');
  createdText.classList.add('carousel__text');
  createdText.textContent = swappedText;
  createdSlide.classList.add('carousel-item-' + (slideNumber)); 
  createdText.classList.add('carousel-text-' + (slideNumber));
  deletedSlide.remove();
}

function createPrevSlide (slideNumber) {
  let carousel = document.querySelector('.carousel__inner');
  let createdSlide = document.createElement('div');
  let deletedSlide = document.querySelector('.carousel-item-' + slideNumber);
  let createdText = document.createElement('p');
  let swappedText = document.querySelector('.carousel-text-' + slideNumber).textContent;
  
  carousel.animate(
    [
      { transform: "translateX(-520px)" },
      { transform: "translateX(0px)" },
    ],
    {
      duration: 1200,
      iterations: 1,
    },
  );

  carousel.prepend(createdSlide);
  createdSlide.appendChild(createdText);
  createdSlide.classList.add('carousel__item');
  createdText.classList.add('carousel__text');
  createdText.textContent = swappedText;
  createdSlide.classList.add('carousel-item-' + (slideNumber)); 
  createdText.classList.add('carousel-text-' + (slideNumber));
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