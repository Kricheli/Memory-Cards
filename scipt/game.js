const tableGame = document.querySelector('.grid');
const guessesGood = document.querySelector("#correct-score");
const guessesBed = document.querySelector("#incorrect-score");
const message = document.querySelector('#paragraph')
const newGame = document.querySelector('button');
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");

newGame.addEventListener('click', restart);
tableGame.addEventListener('click', gameCheck);
tableGame.addEventListener('click', startTimer);
let notRunnig = false;
const cardArrayOptions = ['ace', 'seven', 'queen', 'prince', 'ten', 'two'];
let totalSeconds = -1;
let toStop = false;
let lastFlippedCard = null;
let guessesRight = 0;
let guessesWrong = 0;
let gameCards = generateCards(cardArrayOptions);
drawCards(gameCards, tableGame);

function generateCards(cardArrayOptions) {
    const cardArray = [];
    for (let i = 0; i < cardArrayOptions.length; i++) {
        cardArray.push(cardArrayOptions[i]);
        cardArray.push(cardArrayOptions[i]);
    }
    const generatedCards = shuffle(cardArray);
    return generatedCards
}
function shuffle(originalArray) {
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

function drawCards(gameCards, element) {

    for (let i =0 ; i< gameCards.length;i++) {
        const cardToDraw = document.createElement('div')
        cardToDraw.setAttribute('type', gameCards[i]);
        cardToDraw.setAttribute('data-id',i);
        cardToDraw.setAttribute('class', 'flipped-card');
        // cardToDraw.addEventListener('click', flipCard);
        // cardToDraw.addEventListener('click', gameCheck);
        element.appendChild(cardToDraw);
    }

}

function flipCard(event) {
    if (event.target.getAttribute('type')) {
        const element = event.target;
        element.setAttribute('class', element.getAttribute('type'));
        // gameCheck(event)
    }

}

function isUserWon() {
    if (guessesRight === cardArrayOptions.length) {
        message.innerHTML = 'You Won!!!!!!!!💪💪💪💪💪 go find harder game'
        toStop = true;
    }
}

function gameCheck(event) {
    if (event.target.getAttribute('type')) {
        console.log('main if')

        flipCard(event)
        if (lastFlippedCard === null) {
            lastFlippedCard = event.target;
            console.log('second if')

        }
        else if (lastFlippedCard.getAttribute('type') === event.target.getAttribute('type')  && event.target.getAttribute('data-id') !== lastFlippedCard.getAttribute('data-id') ) {
            console.log('third if')
            console.log(lastFlippedCard.getAttribute('type'))
            console.log(event.target.getAttribute('type'))
            guessesGood.innerHTML = ++guessesRight;
            isUserWon();
            lastFlippedCard = null;
        }
        else if( event.target.getAttribute('data-id') !== lastFlippedCard.getAttribute('data-id'))  {
            tableGame.removeEventListener('click', gameCheck);
            console.log('fourth if')
            guessBad(event);

        }
    }

}


function guessBad(event) {
    guessesBed.innerHTML = ++guessesWrong;
    setTimeout(() => {flipAgain(lastFlippedCard, event.target)},1000);

}

function flipAgain(card1, card2) {
    console.log('working again')
    card1.setAttribute('class', 'flipped-card')
    card2.setAttribute('class', 'flipped-card')
    tableGame.addEventListener('click', gameCheck);
    lastFlippedCard = null



    // setTimeout(function () {
    //     tableGame.addEventListener('click', flipCard);
    //     tableGame.addEventListener('click', gameCheck);
    // }, 1000)
}

function setTime() {
    const toStopTimer = toStop;
    if (toStopTimer) {
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }
    else {
        totalSeconds++;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
        setTimeout(setTime, 1000);
    }


}

function restart() {
    let guessesRight = 0;
    let guessesWrong = 0
    totalSeconds = 0;
    tableGame.innerHTML = '';
    const gameCards = generateCards(cardArrayOptions);
    drawCards(gameCards, tableGame);
    if (toStop) {
        toStop = false;
        setTimeout(setTime, 1000);
    }

    // newGame.removeEventListener('click', restart);
}
function pad(val) {

    let valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }

}

function startTimer() {
    toStop = false;
    totalSeconds = -1;
    tableGame.removeEventListener('click', startTimer);
    setTimeout(setTime, 0);

}

