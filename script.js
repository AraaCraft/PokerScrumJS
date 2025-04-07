// script.js

// Array Cards Poker Scrum
let cards = ['0', '0.5', '1', '2', '3', '5', '8', '13', '20', '40', '100', '', ''];


// Create each card with JS
let cardContainer = document.getElementById('cardContainer');

//Loop to scan cards array
for (let i = 0; i <= (cards.length)-1; i++) {		

	let newCard = document.createElement('button');	//Create new "button" card.
	newCard.innerHTML = cards[i];					// from cards array.
	cardContainer.appendChild(newCard);				// Add in this element.

	newCard.addEventListener('click', () => scaleCard(newCard))	// Call scaleCard function when card was clicked

	// To apply green color on first cards
	if (i < 6) {
		green(newCard)		// Call green function to color this cards.
	}
	// To apply yellow color on middle cards
	else if (i < 9) {
		yellow(newCard)		// Call yellow function to color this cards.
	}
	// To apply redcolor on last cards
	else if (i < 11) {
		red(newCard)		// Call red function to color this cards.
	}
	// To apply coffee image on coffee card
	else if (i === 11) {
		coffee(newCard)		// Call coffee function to color this card.
	}
	// To apply holidays image on holidays card
	else {
		holidays(newCard)	// Call holidays function to color this card.
	}
}



			//ANIMATION CARDS FUNCTIONS

const clickSound = new Audio('assets/sounds/arcade-ui-6-pixabay.mp3'); // Remplace le chemin par le tien

// Add clic event for each button
const buttons = document.querySelectorAll('button');		// Variable who collect all buttons

buttons.forEach(button => {
	button.addEventListener('click', () => {
		clickSound.play(); // Play sound when clic
	});
});

// Fuction to scale cards on clic
function scaleCard(card) {
	const allCards = document.querySelectorAll('button');		// Variable to select all cards
	const alreadyScale = card.classList.contains('scale');		// Verify if already scale

	// If card already scale, go to allow reduce
	if (alreadyScale) {
		card.classList.remove('allowClic');
		allCards.forEach(c => c.classList.remove('blockClic'));
	}
	// Else, go to scale
	else {
		allCards.forEach(c => c.classList.add('blockClic'));
		card.classList.remove('blockClic');
		card.classList.add('allowClic');
	}
	card.classList.toggle('scale');	// To alternate enter scale and reduce
}



			//CARDS BACKGROUND FUNCTIONS

// Function to apply green background on cards
function green(card) {
	card.classList.add('green');
}
// Function to apply yellow background on cards
function yellow (card) {
	card.classList.add('yellow');
}
// Function to apply red background on cards
function red (card) {
	card.classList.add('red');
}
// Function to apply coffe background on cards
function coffee (card) {
	card.classList.add('coffee');
}
// Function to apply holidays background on cards
function holidays (card) {
	card.classList.add('holidays');
}