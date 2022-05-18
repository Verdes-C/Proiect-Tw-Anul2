let main = document.querySelector('.test');

const parcie = function () {
  main.style.backgroundColor = `rgb(
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)}
      )`;
};

setInterval(parcie, 200);
