

export const cardArrayOptions = ['ace', 'king', 'queen', 'prince', 'ten', 'five'];


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

        for (card of cards) {
            cardToDraw = document.createElement('div')
            cardToDraw.setAttribute('type', card);
            cardToDraw.setAttribute('class' , 'flipped-card');
        //     cardToDraw.addEventListener('click' , checkGame);
            element.appendChild(cardToDraw);
        }

    }


