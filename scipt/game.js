
const tableGame = document.querySelector('.grid');
const playerMessage = document.querySelector('#header')
const playerInnerMessage = document.querySelector('#paragraph')

tableGame.addEventListener('click', flipCard);
tableGame.addEventListener('click', gameCheck);

export const cardArrayOptions = ['ace', 'two', 'queen', 'prince', 'ten', 'seven'];
let lastFlippedCard = null;
let guessesRight = 0;
let guessesWrong = 0;
export function generateCards(cardArrayOptions) {
    const cardArray = [];
    for (let i = 0; i < cardArrayOptions.length; i++) {
        cardArray.push(cardArrayOptions[i]);
        cardArray.push(cardArrayOptions[i]);
    }
    const generatedCards = shuffle(cardArray);
    return generatedCards
}
export function shuffle(originalArray) {
    const array = [].concat(originalArray);
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export function drawCards(cards, element) {

    for (let card of cards) {
        const cardToDraw = document.createElement('div')
        cardToDraw.setAttribute('type', card);
        cardToDraw.setAttribute('class', 'flipped-card');
        // cardToDraw.addEventListener('click', flipCard);
        // cardToDraw.addEventListener('click', gameCheck);
        element.appendChild(cardToDraw);
  
    }

}

function flipCard(event) {
    const element = event.target;
    element.setAttribute('class', element.getAttribute('type'));
    // gameCheck(event)

}

function gameCheck(event) {
    const arr = [];
    console.log('gamecheck working')
    if (lastFlippedCard === null) {
        lastFlippedCard = event.target;
    }
    else if (lastFlippedCard.getAttribute('class') === event.target.getAttribute('class')) {
        guessesRight++;
        if( guessesRight === 6){
        return (playerInnerMessage.textContent = 'Congrats Einstein, you won!')
        }
        lastFlippedCard = null;
    } 
    else {
        console.log('else working')
        guessesWrong++
        setTimeout(function () { flipAgain(lastFlippedCard, event.target) }, 2000);
        tableGame.removeEventListener('click', flipCard);
        tableGame.removeEventListener('click', gameCheck);
        setTimeout(function () {
            tableGame.addEventListener('click', flipCard);
            tableGame.addEventListener('click', gameCheck);
        }, 2000)

    }

}
tableGame.addEventListener('click', ()=>{

})




function flipAgain(card1, card2) {

    console.log('working again')
    card1.setAttribute('class', 'flipped-card')
    card2.setAttribute('class', 'flipped-card')
    lastFlippedCard = null

}


