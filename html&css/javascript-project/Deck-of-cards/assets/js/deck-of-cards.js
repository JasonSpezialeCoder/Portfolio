// All the cards in a deck
const kinds = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
// All the cards suits 
const suits = ['Diamonds', 'Hearts', 'Spades', 'Clubs' ];
// Were gonna push the kinds and suits into the empty deck 
const deck = [];

// Were looping for all the kinds and there suits and storing it 
for (i = 0; i < kinds.length; i++) {
    for(let j = 0; j < suits.length; j++) {
        // Combining the file names together for each cards 
        let cardFileName = `${kinds[i]}-of-${suits[j]}.png`;
        // Pushing the card file names into the empty arr called deck
        deck.push(cardFileName);
    }
}

console.log(deck);

// Declare a new, empty array to hold our 52 card objects.
const deckOfCards = [];

// Looping the kinds and suits 
for (i = 0; i < kinds.length; i++) {
    for(let j = 0; j < suits.length; j++) {
        
        let kind = kinds[i];
        let suit = suits[j];
        // Combining kinds and suits there name and there file name 
        let name = `${kind} of ${suits}`;
        let file = `${kind}-of-${suit}.png`;

        // start at 0 value changes later like king is a 10 or ace is 11 
        let value = 0;
        
        // If kind equals ace make it a value of 11
        if(kind == 'Ace') {
            value = 11;
        } else if (kind.length > 3) { // else if make it a value of 10
            value = 10;
        } else { // Else is the default just kind 
            value = kind;
        }
        
        // I declared an object called **card**. Its properties equal the variables made:
        let card = {name: name, file: file, kind: kind, suit, value: value};

        // Pushing all the cards into the deckOfCards empty array 
        deckOfCards.push(card);
    }
}

console.log(deckOfCards);


// Im getting the button and telling it to run the function when clicked:
const btn = document.querySelector('button');
btn.addEventListener('click', dealCards);

// Show all the images 
const imgArr = document.querySelectorAll('img');

// Outside of the function, were returning a copy from index 0 to the end of the array:

let deckCopy = deckOfCards.slice(0);


// Do the slicing so we don't have doubles in are shuffle 
// Started with an if statement that makes a fresh copy if there are fewer than 5 cards left:

function dealCards() {
    if(deckCopy.length < 5) {
        deckCopy = deckOfCards.slice(0);
    }

    // Switch to using deckCopy throughout; after each hand, log how many cards are left, so you can see when the card supply is replenished:
    for (let i = 0; i < imgArr.length; i++) {
        let r = Math.floor(Math.random() * deckCopy.length);
        let card = deckCopy[r];
        imgArr[i].src = "/html&css/javascript-project/Deck-of-cards/assets/images/" + card.file; // Combine the path with the file names 
        deckCopy.splice(r, 1);
    }
    console.log('Cards left', deckCopy.length);
}