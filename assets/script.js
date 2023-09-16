const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Create dots

let activeIndex = 0;

function createDot() {
	const dotsContainer = document.querySelector('.dots');
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dotsContainer.appendChild(dot);
if (i === 0) {
    dot.classList.add('dot_selected');
  }
}};


// Update dots

function updateDot() {
	const dots = document.querySelectorAll('.dot');

	dots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}

// Display a slide

function displaySlide(index) {

  if (index < 0) {
    activeIndex = slides.length - 1;
  }
  else if (index >= slides.length) {
    activeIndex = 0;
  }
	const slide = slides[activeIndex];
	const slideImage = document.querySelector('.banner-img');
	const tagLine = document.querySelector('#banner p');

	slideImage.src = `./assets/images/slideshow/${slide.image}`;
	tagLine.innerHTML = slide.tagLine;
	updateDot(activeIndex);
};

createDot();

// Event Listeners

  document.getElementById('arrow_left').addEventListener('click', () => {
	activeIndex--;
	displaySlide(activeIndex);
});

document.getElementById('arrow_right').addEventListener('click', () => {
	activeIndex++;
		displaySlide(activeIndex);

});