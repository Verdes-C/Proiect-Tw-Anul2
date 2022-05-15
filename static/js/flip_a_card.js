'use strict';

const arrayCards = {
  1: { src: '40px-Playing_card_heart_A.svg.png', type: '1-H' },
  2: { src: '40px-Playing_card_spade_A.svg.png', type: '1-S' },
  3: { src: '40px-Playing_card_diamond_A.svg.png', type: '1-D' },
  4: { src: '40px-Playing_card_club_A.svg.png', type: '1-C' },
  5: { src: '40px-Playing_card_heart_2.svg.png', type: '2-H' },
  6: { src: '40px-Playing_card_spade_2.svg.png', type: '2-S' },
  7: { src: '40px-Playing_card_diamond_2.svg.png', type: '2-D' },
  8: { src: '40px-Playing_card_club_2.svg.png', type: '2-C' },
  9: { src: '40px-Playing_card_heart_3.svg.png', type: '3-H' },
  10: { src: '40px-Playing_card_spade_3.svg.png', type: '3-S' },
  11: { src: '40px-Playing_card_diamond_3.svg.png', type: '3-D' },
  12: { src: '40px-Playing_card_club_3.svg.png', type: '3-C' },
  13: { src: '40px-Playing_card_heart_4.svg.png', type: '4-H' },
  14: { src: '40px-Playing_card_spade_4.svg.png', type: '4-S' },
  15: { src: '40px-Playing_card_diamond_4.svg.png', type: '4-D' },
  16: { src: '40px-Playing_card_club_4.svg.png', type: '4-C' },
  17: { src: '40px-Playing_card_heart_5.svg.png', type: '5-H' },
  18: { src: '40px-Playing_card_spade_5.svg.png', type: '5-S' },
  19: { src: '40px-Playing_card_diamond_5.svg.png', type: '5-D' },
  20: { src: '40px-Playing_card_club_5.svg.png', type: '5-C' },
  21: { src: '40px-Playing_card_heart_6.svg.png', type: '6-H' },
  22: { src: '40px-Playing_card_spade_6.svg.png', type: '6-S' },
  23: { src: '40px-Playing_card_diamond_6.svg.png', type: '6-D' },
  24: { src: '40px-Playing_card_club_6.svg.png', type: '6-C' },
  25: { src: '40px-Playing_card_heart_7.svg.png', type: '7-H' },
  26: { src: '40px-Playing_card_spade_7.svg.png', type: '7-S' },
  27: { src: '40px-Playing_card_diamond_7.svg.png', type: '7-D' },
  28: { src: '40px-Playing_card_club_7.svg.png', type: '7-C' },
  29: { src: '40px-Playing_card_heart_8.svg.png', type: '8-H' },
  30: { src: '40px-Playing_card_spade_8.svg.png', type: '8-S' },
  31: { src: '40px-Playing_card_diamond_8.svg.png', type: '8-D' },
  32: { src: '40px-Playing_card_club_8.svg.png', type: '8-C' },
  33: { src: '40px-Playing_card_heart_9.svg.png', type: '9-H' },
  34: { src: '40px-Playing_card_spade_9.svg.png', type: '9-S' },
  35: { src: '40px-Playing_card_diamond_9.svg.png', type: '9-D' },
  36: { src: '40px-Playing_card_club_9.svg.png', type: '9-C' },
  37: { src: '40px-Playing_card_heart_10.svg.png', type: '10-H' },
  38: { src: '40px-Playing_card_spade_10.svg.png', type: '10-S' },
  39: { src: '40px-Playing_card_diamond_10.svg.png', type: '10-D' },
  40: { src: '40px-Playing_card_club_10.svg.png', type: '10-C' },
  41: { src: '40px-Playing_card_heart_J.svg.png', type: '12-H' },
  42: { src: '40px-Playing_card_spade_J.svg.png', type: '12-S' },
  43: { src: '40px-Playing_card_diamond_J.svg.png', type: '12-D' },
  44: { src: '40px-Playing_card_club_J.svg.png', type: '12-C' },
  45: { src: '40px-Playing_card_heart_Q.svg.png', type: '13-H' },
  46: { src: '40px-Playing_card_spade_Q.svg.png', type: '13-S' },
  47: { src: '40px-Playing_card_diamond_Q.svg.png', type: '13-D' },
  48: { src: '40px-Playing_card_club_Q.svg.png', type: '13-C' },
  49: { src: '40px-Playing_card_heart_K.svg.png', type: '14-H' },
  50: { src: '40px-Playing_card_spade_K.svg.png', type: '14-S' },
  51: { src: '40px-Playing_card_diamond_K.svg.png', type: '14-D' },
  52: { src: '40px-Playing_card_club_K.svg.png', type: '14-C' },
  53: { src: 'The_Jolly_Nero.jpg', type: 'Joker' },
  54: { src: 'The_Jolly_Nero.jpg', type: 'Joker' },
  55: { src: 'The_Jolly_Nero.jpg', type: 'Joker' },
  56: { src: 'The_Jolly_Nero.jpg', type: 'Joker' },
};
const container = document.getElementById('container');
let arrayList = Object.keys(arrayCards).sort(() => Math.random() - 0.5);
let changeBackgroundCalls = 1;
let shownElements = [];
let test;
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

function createInsert(ammount) {
  let index;
  for (let i = 1; i <= ammount; i++) {
    const element = document.createElement('div');
    element.classList.add('size');
    index = Math.floor(Math.random() * arrayList.length);
    element.index = `${index}`;
    console.log('element index', element.index);
    // element.type = arrayCards[Number(arrayList[index])].type; nu merge
    element.type = 'test'; //merge
    element.addEventListener('click', () => {
      changeBackground(element);
    });
    arrayList.splice(index, 1);
    container.append(element);
  }
}

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
    element.style.backgroundImage = `url(${
      arrayCards[Number(element.index)].src
    })`;
    wait(10).then(() => {
      element.style.backgroundImage = ``;
    });
    if (shownElements[0].type === shownElements[1].type) {
      console.log('Time to remove');
      shownElements[0].remove();
      shownElements[1].remove();
      test = document.querySelectorAll('.size');
    } else {
    }
    if (test.length == 0) {
      console.log('done');
      winCondition();
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
}

function restartGame() {
  clearInterval(intervalID);
  intervalID = setInterval(start, 1000);
  timeRemaining = 600;
  time.textContent = timeRemaining;
  document.querySelector('header h1').textContent = 'Flip';
  bodyQS.style.backgroundColor = '#222';
  container.innerHTML = '';
  createInsert(56);
}
restart.addEventListener('click', restartGame);
createInsert(56);
