'use strict';

const arrayCards = {
  1: { src: '40px-Playing_card_heart_A.svg.png', type: '1-H' },
  2: { src: '40px-Playing_card_spade_A.svg.png', type: '1-S' },
  3: { src: '40px-Playing_card_diamond_A.svg.png', type: '1-D' },
  4: { src: '40px-Playing_card_club_A.svg.png', type: '1-C' },
  5: { src: '40px-Playing_card_heart_9.svg.png', type: '9-H' },
  6: { src: '40px-Playing_card_spade_9.svg.png', type: '9-S' },
  7: { src: '40px-Playing_card_diamond_9.svg.png', type: '9-D' },
  8: { src: '40px-Playing_card_club_9.svg.png', type: '9-C' },
  9: { src: '40px-Playing_card_heart_10.svg.png', type: '10-H' },
  10: { src: '40px-Playing_card_spade_10.svg.png', type: '10-S' },
  11: { src: '40px-Playing_card_diamond_10.svg.png', type: '10-D' },
  12: { src: '40px-Playing_card_club_10.svg.png', type: '10-C' },
  13: { src: '40px-Playing_card_heart_J.svg.png', type: '12-H' },
  14: { src: '40px-Playing_card_spade_J.svg.png', type: '12-S' },
  15: { src: '40px-Playing_card_diamond_J.svg.png', type: '12-D' },
  16: { src: '40px-Playing_card_club_J.svg.png', type: '12-C' },
  17: { src: '40px-Playing_card_heart_Q.svg.png', type: '13-H' },
  18: { src: '40px-Playing_card_spade_Q.svg.png', type: '13-S' },
  19: { src: '40px-Playing_card_diamond_Q.svg.png', type: '13-D' },
  20: { src: '40px-Playing_card_club_Q.svg.png', type: '13-C' },
  21: { src: '40px-Playing_card_heart_K.svg.png', type: '14-H' },
  22: { src: '40px-Playing_card_spade_K.svg.png', type: '14-S' },
  23: { src: '40px-Playing_card_diamond_K.svg.png', type: '14-D' },
  24: { src: '40px-Playing_card_club_K.svg.png', type: '14-C' },
  25: { src: '40px-Playing_card_heart_5.svg.png', type: '5-H' },
  26: { src: '40px-Playing_card_spade_5.svg.png', type: '5-S' },
  27: { src: '40px-Playing_card_diamond_5.svg.png', type: '5-D' },
  0: { src: '40px-Playing_card_club_5.svg.png', type: '5-C' },
};

if (localStorage.getItem('flip_a_card') === null) {
  localStorage.setItem('flip_a_card', '0');
}

const container = document.getElementById('container');
let arrayList = Object.keys(arrayCards).sort(() => Math.random() - 0.5);
console.log(arrayList);
let changeBackgroundCalls = 1;
let shownElements = [];
let test;
function createElement(i) {
  const element = document.createElement('div');
  element.classList.add('size');
  element.index = Number(arrayList[i]);
  // element.type = arrayCards[Number(arrayList[i])].type;
  element.type = 'test';
  element.addEventListener('click', () => {
    changeBackground(element);
  });
  element.style.order = `${-Math.floor(Math.random() * 100)}`;
  container.append(element);
}
function createInsert(ammount) {
  for (let i = 0; i <= ammount; i++) {
    createElement(i);
    createElement(i);
  }
}
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

function changeBackground(element) {
  if (changeBackgroundCalls > 2) {
    shownElements[0].style.backgroundImage = ``;
    shownElements[1].style.backgroundImage = ``;
    shownElements = [];
    changeBackgroundCalls = 1;
    changeBackground(element);
  } else {
    shownElements[changeBackgroundCalls - 1] = element;
    changeBackgroundCalls++;
    console.log('index', element.index);
    element.style.backgroundImage = `url(${
      arrayCards[Number(element.index)].src
    })`;
    wait(10).then(() => {
      element.style.backgroundImage = ``;
    });
    if (shownElements[0].type === shownElements[1].type) {
      console.log('Time to remove');
      wait(0.5)
        .then(() => {
          shownElements[0].remove();
          shownElements[1].remove();
        })
        .then(() => {
          if (document.querySelectorAll('.size').length === 0) {
            console.log('done');
            winCondition();
          }
        });
    }
  }
}

const time = document.querySelector('.number');
const bodyQS = document.querySelector('body');
const winGif = document.createElement('img');
const restart = document.querySelector('.restart');

let timeRemaining = 600;
let intervalID;
let startGame = 1;

intervalID = setInterval(start, 1000);

function start() {
  if (startGame) {
    if (timeRemaining >= 0) {
      time.textContent = `${timeRemaining--}`;
    } else {
      clearInterval(intervalID);
      startGame = 0;
      bodyQS.style.backgroundColor = 'red';
      document.querySelector('header h1').textContent = 'You Lost!!';
      // block player
    }
  }
}

function winCondition() {
  clearInterval(intervalID);
  time.textContent = timeRemaining;
  document.querySelector('header h1').textContent = 'You Won!!';
  bodyQS.style.backgroundColor = 'green';
  container.innerHTML = winGif.outerHTML;
  if (Number(localStorage.getItem('flip_a_card')) < timeRemaining) {
    localStorage.setItem('flip_a_card', `${timeRemaining}`);
  }
}

function restartGame() {
  startGame = 1;
  clearInterval(intervalID);
  intervalID = setInterval(start, 1000);
  timeRemaining = 600;
  time.textContent = timeRemaining;
  document.querySelector('header h1').textContent = 'Flip';
  bodyQS.style.backgroundColor = '#222';
  container.innerHTML = '';
  createInsert(Object.keys(arrayCards).length - 1);
}
restart.addEventListener('click', restartGame);
restart.addEventListener('click', restartGame);
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    restartGame();
  }
});
createInsert(Object.keys(arrayCards).length - 1);
