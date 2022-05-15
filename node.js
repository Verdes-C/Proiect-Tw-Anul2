'use strict';
//modules
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
// const { time } = require('console');

const app = express();
// app.use(express.static(`${__dirname}/static`));
app.use(express.static(`${__dirname}/static/error`));
app.use(express.static(`${__dirname}/static/css`));
app.use(express.static(`${__dirname}/static/js`));
app.use(express.static(`${__dirname}/static/img`));
app.set('view engine', 'ejs');

// let json2 = JSON.parse(fs.readFileSync(`${__dirname}/json/cards.json`));
// console.log(Array(json2));

var urlencodedParser = bodyParser.urlencoded({ extended: false });

let nav_list = JSON.parse(fs.readFileSync(`${__dirname}/json/nav_list.json`));
let footer_list = JSON.parse(
  fs.readFileSync(`${__dirname}/json/footer_list.json`)
);

app.get('/?', (req, res) => {
  res.render('home', {
    nav_list: {
      keys: Object.keys(nav_list),
      values: Object.values(nav_list),
    },
  });
});

app.get('/guess-the-number', urlencodedParser, (req, res) => {
  res.render('guess_the_number', {
    data: {
      titlu: 'Guess the Number',
    },
    header: {
      message: 'Death!💀',
      gameTitle: 'Guess',
      gameTip: 'Try to see if you can guess the number',
      highscore: '',
    },
    nav_list: {
      keys: Object.keys(nav_list),
      values: Object.values(nav_list),
    },
    footer_list: {
      keys: Object.keys(footer_list),
      values: Object.values(footer_list),
    },
  });
});

app.get('/flip-a-card', urlencodedParser, (req, res) => {
  res.render('flip_a_card', {
    data: {
      titlu: 'Flip a card',
    },
    header: {
      message: 'Death!💀',
      gameTitle: 'Flip',
      gameTip: 'Flip the cards and find what lies beneath.',
      highscore: '',
    },
    nav_list: {
      keys: Object.keys(nav_list),
      values: Object.values(nav_list),
    },
    footer_list: {
      keys: Object.keys(footer_list),
      values: Object.values(footer_list),
    },
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    header: {
      message: 'Write us how we can help you in the field below',
      gameTitle: '',
      gameTip: '',
      highscore: '☠️☠️',
    },
    nav_list: {
      keys: Object.keys(nav_list),
      values: Object.values(nav_list),
    },
    footer_list: {
      keys: Object.keys(footer_list),
      values: Object.values(footer_list),
    },
  });
});
app.post('/contact', urlencodedParser, (req, res) => {
  console.log(req.params);
  let formBody = req.body;
  formBody.data = Date();
  fs.appendFileSync(
    `${__dirname}/json/contact_submitted.json`,
    `${JSON.stringify(formBody)} \n`
  );
  res.render('contact_submitted', {
    header: {
      message: 'Write us how we can help you in the field below',
      gameTitle: '',
      gameTip: '',
      highscore: '☠️☠️',
    },
    nav_list: {
      keys: Object.keys(nav_list),
      values: Object.values(nav_list),
    },
    footer_list: {
      keys: Object.keys(footer_list),
      values: Object.values(footer_list),
    },
  });
});
//routing to 404
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/static/error/404.html`);
});

//Start server
const port = 3000;
app.listen(port, () => {
  console.log(`The server is live on port: ${port}`);
});
