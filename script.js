// script.js

// Array Cards Poker Scrum
let cards = ['0', '0.5', '1', '2', '3', '5', '8', '13', '20', '40', '100', 'Coffee pls', 'Holidays'];


// Create each card with JS
let cardContainer = document.getElementById('cardContainer');
for (let i = 0; i <= (cards.length)-1; i++) {		//Loop to scan cards array

	let newCard = document.createElement('button');	//Create new "button" card
	newCard.innerHTML = cards[i];					// from cards array
	cardContainer.appendChild(newCard);

	newCard.addEventListener('click', () => scaleCard(newCard))	// Call scaleCard function when card was clicked
}


// Fuction to scale cards on click
function scaleCard(scale) {
	scale.classList.add('scale');
	console.log(scale);		// Debug
}
