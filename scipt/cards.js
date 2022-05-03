import {generateCards as generateCards , cardArrayOptions as cardArrayOptions , shuffle as shuffle, drawCards as drawCards} from './game.js'

let gameCards = generateCards(cardArrayOptions);
const newGame = document.querySelector('button');
newGame.addEventListener('click', restart);
const tableGame = document.querySelector('.grid');

drawCards(gameCards, tableGame);


function restart() {
    tableGame.innerHTML = '';
    gameCards = generateCards(cardArrayOptions)
    drawCards(gameCards, tableGame)
}