


var cards = [

	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	}, {
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	}, {
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	}, {
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];


var cardsInPlay = [];


var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1] && cardsInPlay.length === 2) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};


var flipCard = function (cardId) {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flippeed " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardIamge);
	console.log(cards[cardId].suit);
	
	if (cardsInPlay.length === 2) {
		checkForMatch();
	} 
};

var createBoard = function() {
	document.getElementById('game-board').innerHTML = '';
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};



// run the createBoard function
createBoard();












