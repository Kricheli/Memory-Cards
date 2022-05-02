import {generatedCards, cardArrayOptions, shuffle, drawCards} from './game.js'

const gameCards =  generatedCards(cardArrayOptions);

const tableGame = document.querySelector('.grid');

drawCards(gameCards, tableGame);

