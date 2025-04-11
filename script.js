// script.js

			// VARIABLES

// Array Cards Poker Scrum
let cards = ['0', '0.5', '1', '2', '3', '5', '8', '13', '20', '40', '100', 'COFFEE', 'HOLIDAYS'];

// Create each card with JS
let cardContainer = document.getElementById('cardContainer');

// Initialize history container
let historyList = document.getElementById('historyList');






			// TIMER

// Countdown timer
let timer;
let timeLimit = 31; // 30 seconds for the user to click a card
let timerDisplay = document.getElementById('timer');	// To display the timer
let buttonTxt = "Start ⏱️"
let timerButtonContainer = document.getElementById('timerButtonContainer');


// Function to create timer button
function createTimerButton() {
var timerButton = document.createElement('button'); // To start timer
timerButton.innerHTML = buttonTxt;
timerButtonContainer.appendChild(timerButton);	// To add button in HTML
timerButtonStyle(timerButton);
}

createTimerButton();
timerButtonContainer.addEventListener('click', startTimer);

// Function to start the timer
function startTimer() {
	let timeLeft = timeLimit;

	timer = setInterval(() => {
		timeLeft--;				// Update the timer every second
		if (timeLeft <= 0) {
			clearInterval(timer); // Stop the timer
			alert('Time is up! Please select a card faster next time :)');
			timerButtonContainer.addEventListener('click', startTimer);
			resetTimer();	// Reset the timer after the alert
		}
		timerDisplay.textContent = timeLeft;	// Update the displayed time
	}, 1000); 									// Update every second (1000ms = 1s)
	timerButtonContainer.removeEventListener('click', startTimer);	// To disable click on
}

function resetTimer() {
	clearInterval(timer);

}




			// HISTORY

// Function to add card to history
function addToHistory(cardElement) {
	let listItem = document.createElement('li');	// Create a list element
	listItem.textContent = cardElement.innerHTML;	// Use the contents of the chosen card (its text)
	historyList.appendChild(listItem);		// Add it to the history list
}

// Clear history on button click
let clearHistoryButton = document.getElementById('clearHistory');

clearHistoryButton.addEventListener('click', () => {
	historyList.innerHTML = ''; // Empty the history
});




			// MAINS LOOPS

//Loop to scan cards array
for (let i = 0; i <= (cards.length)-1; i++) {		

	let newCard = document.createElement('button');	//Create new "button" card.
	newCard.innerHTML = cards[i];					// from cards array.
	cardContainer.appendChild(newCard);				// Add in this element.

	newCard.addEventListener('click', () => { 
		const isAlreadyScaled = newCard.classList.contains('scale');

		scaleCard(newCard)	// Call scaleCard function when card was clicked

		if (!isAlreadyScaled) {
			addToHistory(newCard);		// Add card to history when clicked
			resetTimer();
		}
	});

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

function timerButtonStyle (timerButton) {
	timerButton.classList.add('timerButtonStyle');
}