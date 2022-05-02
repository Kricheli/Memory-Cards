import {generateCards as generateCards , cardArrayOptions as cardArrayOptions , shuffle as shuffle, drawCards as drawCards} from './game.js'

const gameCards =  generateCards(cardArrayOptions);

 const tableGame = document.querySelector('.grid');

drawCards(gameCards, tableGame);

module.exports = tableGame;
