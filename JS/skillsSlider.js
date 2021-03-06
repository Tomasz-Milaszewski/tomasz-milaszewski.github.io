var previousButton = document.querySelector('.skills-prev-button');
var nextButton = document.querySelector('.skills-next-button');
var navigation = document.querySelector('.skills-slider-nav');

nextButton.addEventListener('click', function () {
   clearInterval(intervalId);
   activateNextSlide()
});
previousButton.addEventListener('click', function () {
   clearInterval(intervalId);
   activatePreviousSlide()
});

var intervalId = setInterval(function () {
   activateNextSlide()
}, 2500);

function activateNextSlide() {
   var element = document.querySelector('.skills-items section:first-child');
   element.parentElement.appendChild(element);

   var current = navigation.querySelector('.active');
   var next = current.nextElementSibling || navigation.querySelector('span');

   current.classList.remove('active');
   next.classList.add('active');
}

function activatePreviousSlide() {
  var element = document.querySelector('.skills-items section:last-child');
  element.parentElement.prepend(element);

  var current = navigation.querySelector('.active');
  var previous = current.previousElementSibling || navigation.querySelector('span:last-child');

  current.classList.remove('active');
  previous.classList.add('active');
}
