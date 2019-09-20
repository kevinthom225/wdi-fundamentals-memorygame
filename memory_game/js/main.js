
const cards = [{rank: "Queen", suit: "hearts", image: "images/queen-of-hearts.png"},{rank: "Queen", suit: "diamonds", image: "images/queen-of-diamonds.png"}, {rank: "King", suit: "hearts", image: "images/king-of-hearts.png"}, {rank: "King", suit: "diamonds", image: "images/king-of-diamonds.png"}];

const cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}



function flipCard(cardId){

	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
	console.log(cards[cardId].image);
	cardsInPlay.push(cards[cardId].rank);
	

	if (cardsInPlay.length === 2){
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);


