'use strict';
const time = document.querySelector('.number');
const beginQS = document.querySelector('.begin');
const rangeQS = document.querySelector('.container input');
const beginButtonQS = document.querySelector('.beginButton');
const checkButtonQS = document.querySelector('.checkButton');
const indicatorQS = document.querySelector('.indicator');
const userGuessQS = document.querySelector('.userGuess input');
const comparisonQS = document.querySelector('.comparison');
const surpriseQS = document.querySelector('.surprise');
const bodyQS = document.querySelector('body');
const winGif = document.createElement('img');
const restart = document.querySelector('.restart');
winGif.src = 'dance.gif';
winGif.style.height = '20vh';
let startGame = 1;
let timeRemaining = 90;
let intervalID;
let number;
if (localStorage.getItem('guess_the_number') === null) {
  localStorage.setItem('guess_the_number', '0');
}

const tryAgain = [
  'Try again!',
  'Nup!',
  'You got this!',
  'Too bad!',
  'Time is running out!',
  'kekw',
];
const block = document.createElement('div');
block.classList.add('block');
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
      checkButtonQS.remove();
    }
  }
}

beginButtonQS.addEventListener('click', () => {
  number = Math.floor(Math.random() * Number(rangeQS.value) + 1);
  beginQS.textContent = 'Hurry up now. Time is short!';
  intervalID = setInterval(start, 1000);
  beginButtonQS.style.display = 'none';
  checkButtonQS.style.display = 'block';
});

checkButtonQS.addEventListener('click', () => {
  if (Number(userGuessQS.value) === number) {
    clearInterval(intervalID);
    time.textContent = timeRemaining;
    surpriseQS.textContent = number;
    indicatorQS.textContent = '✅';
    comparisonQS.textContent = '=';
    bodyQS.style.backgroundColor = 'green';
    beginQS.innerHTML = winGif.outerHTML;
    document.querySelector('header h1').textContent = 'You Won!!';
    if (Number(localStorage.getItem('guess_the_number')) < timeRemaining) {
      localStorage.setItem('guess_the_number', `${timeRemaining}`);
    }
  } else {
    comparisonQS.textContent = `${
      Number(userGuessQS.value) < number ? '<' : '>'
    }`;
    indicatorQS.textContent = '❌';
    beginQS.textContent = `${
      tryAgain[Math.floor(Math.random() * tryAgain.length)]
    }`;
  }
});

function gameRestart() {
  console.log('restart');
  checkButtonQS.style.display = 'none';
  beginButtonQS.style.display = 'block';
  timeRemaining = 90;
  clearInterval(intervalID);
  beginQS.textContent = `Let's start. Input the range`;
  time.textContent = '?';
  comparisonQS.textContent = '';
  userGuessQS.value = '';
  rangeQS.value = '';
  indicatorQS.textContent = '';
  document.querySelector('header h1').textContent = 'Guess';
  bodyQS.style.backgroundColor = '#222';
  beginQS.outerHTML = `<h2 class="begin">Let's start. Input the range</h2>`;
  surpriseQS.textContent = '?';
}

restart.addEventListener('click', gameRestart);
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    gameRestart();
  }
});
