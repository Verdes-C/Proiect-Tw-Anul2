'use strict';
const navi = document.querySelectorAll('.submenu li a');
navi[0].href = '/';
navi[1].href = '/account';
navi[2].href = '/guess-the-number';
navi[3].href = '/flip-a-card';

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(5).then(() => {
  const font = getComputedStyle(document.querySelector('body')).fontFamily;
  const p = document.querySelector('footer p');
  p.textContent = 'Font used:';
  const fontFamilyQS = document.getElementsByClassName('fontFamily')[0];
  fontFamilyQS.textContent = font;
});
