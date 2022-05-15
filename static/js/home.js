'use strict';

const bodyQS = document.querySelector('body');
const navQS = document.querySelector('.menu');
const messages = [
  'Well hello there. Look who we have here!',
  'Fancy meeting you here, lost sheep.',
  'Now then, shall we proceed?',
  'Do you want to play a game?',
  'For your entertainment, as well as my own, pick a game and let us begin!',
  'Welcome...',
  'to...',
  'whatever this shall end up as.',
];
let iterator = 1;
let conditionEnd = false;

if (localStorage.getItem('visited')) {
  setTimeout(() => {
    const message = document.createElement('h1');
    message.textContent = 'Hello! Welcome back my friend. Pick your choice.';
    bodyQS.append(message);
    navQS.style.display = 'inline-block';
  }, 1500);
} else {
  const stop = function (string = '') {
    clearInterval(intervalID);
    navQS.style.display = 'inline-block';
    const message = document.createElement('h1');
    message.textContent = `${string}Let us begin! Pick your choice on the left`;
    bodyQS.append(message);
    conditionEnd = true;
  };

  const greetings = function () {
    if (iterator > messages.length) {
      stop();
    } else {
      const message = document.createElement('h1');
      message.textContent = messages[iterator++ - 1];
      bodyQS.append(message);
    }
  };
  const intervalID = setInterval(greetings, 2500);
  bodyQS.addEventListener('click', () => {
    if (!conditionEnd) {
      stop('This lad is full of vigor i see. Fair enough. ');
    }
  });
  localStorage.setItem('visited', 'true');
}
