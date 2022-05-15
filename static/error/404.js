'use strict';

const timerBody = document.querySelector('.container-404 h1 span');
console.log(timerBody);

const wait = (s) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds(1000));
  });
};
