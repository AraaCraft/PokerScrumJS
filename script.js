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


// Fuction to scale cards on click
function scaleCard(card) {
	card.classList.toggle('scale');	// To alternate enter scale et reduce
}

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