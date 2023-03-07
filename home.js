const btnBeginner = document.querySelector("#btn_beginner");
const btnMedium = document.querySelector("#btn_medium");
const btnHard = document.querySelector("#btn_hard");
const btnMaster = document.querySelector("#btn_master");

const cards = document.querySelectorAll('.card');

btnBeginner.addEventListener('click', filterCards);
btnMedium.addEventListener('click', filterCards);
btnHard.addEventListener('click', filterCards);
btnMaster.addEventListener('click', filterCards);

function filterCards(event) {
	const level = event.target.dataset.level;

	cards.forEach((card) => {
		if (card.querySelector(`.difficulty-${level}`)) {
			card.classList.add('show');
		} else {
			card.classList.remove('show');
		}
	});
}

/// Get the necessary elements
const galleryContainer = document.querySelector('.gallery-container');
const gallerySlide = document.createElement('div');
gallerySlide.classList.add('gallery-slide');
galleryContainer.appendChild(gallerySlide);
const galleryCards = document.querySelectorAll('.gallery-card');
galleryCards.forEach(card => {
  gallerySlide.appendChild(card);
});
const galleryDots = document.createElement('div');
galleryDots.classList.add('gallery-dots');
galleryContainer.appendChild(galleryDots);

// Initialize variables
let slideIndex = 0;
const itemsPerSlide = 2;
const itemsPerDot = 4;
const numDots = Math.ceil(galleryCards.length / itemsPerDot);

// Create dots for each group of cards
for (let i = 0; i < numDots; i++) {
  const dot = document.createElement('div');
  dot.classList.add('gallery-dot');
  galleryDots.appendChild(dot);

  // Add click event listener to each dot
  dot.addEventListener('click', () => {
    goToSlide(i * itemsPerDot);
  });
}

// Set the first dot as active
galleryDots.children[slideIndex / itemsPerDot].classList.add('active');

// Go to the slide at the specified index
function goToSlide(index) {
  slideIndex = index;
  gallerySlide.style.transform = `translateX(-${slideIndex * 50}%)`;

  // Update dot active class
  for (let i = 0; i < galleryDots.children.length; i++) {
    galleryDots.children[i].classList.remove('active');
  }
  galleryDots.children[Math.floor(slideIndex / itemsPerDot)].classList.add('active');
}