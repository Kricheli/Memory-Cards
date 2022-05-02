export const cardArrayOptions = [
  "ace",
  "king",
  "queen",
  "prince",
  "ten",
  "five",
];

export function generateCards(cardArrayOptions) {
  const cardArray = [];
  for (let i = 0; i < cardArrayOptions.length; i++) {
    cardArray.push(cardArrayOptions[i]);
    cardArray.push(cardArrayOptions[i]);
  }
  const generatedCards = shuffle(cardArray);
  return generatedCards;
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
    cardToDraw = document.createElement("div");
    cardToDraw.setAttribute("type", card);
    cardToDraw.setAttribute("class", "flipped-card");
    cardToDraw.addEventListener("click", checkGame);
    element.appendChild(cardToDraw);
  }
}
function flipCard(event) {
  const element = event.target;
  element.setAttribute("class", "ace");
}

// function writeTime() {
//   let today = new Time();
//   //   let hours = today.getHours();
//   let minutes = today.getMinutes();
//   let seconds = today.getSeconds();
//   //   minutes = fixTime(minutes);
//   //   seconds = fixTime(seconds);
//   let the_time = minutes + ":" + seconds;
//   timerA.innerHTML = the_time;
//   the_time = setTimeout(writeTime, 0);
// }
// writeTime();
// function fixTime(the_time) {
//   if (the_time < 10) {
//     the_time = "0" + the_time;
//   }
//   return the_time;
// }

// fixTime();

// setInterval(displayTime, 400);
// function displayTime() {
//   let time = new Date();
//   let hrs = time.getHours();
//   let min = time.getMinutes();
//   let sec = time.getSeconds();

//     if (hrs > 12) {
//       hrs = hrs - 12;
//     }
//     if (hrs === 0) {
//       hrs = 12;
//     }
//   document.getElementById("timer").innerHTML = hrs + ":" + min + ":" + sec;
// }

// var x = 0;
// function timer() {
//   if (x > 0) {
//     x = x + 1;
//   }

// }

// timer(timerA);

const timerA = document.querySelector("#timer");
let handler = function () {
    let time = 0;
    if (let i = 0; i > 0; i++){
        time +=1;
    }
  //   let date = new Date();
  //   let sec = date.getSeconds();
  //   let min = date.getMinutes();
  timerA.textContent = time;
    // (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
};
// setInterval(handler, 1000);
handler();
