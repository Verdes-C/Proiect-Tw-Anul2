'use strict';
//modules
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const { time } = require('console');

const app = express();
app.use(express.static(`${__dirname}/static`));
app.use(express.static(`${__dirname}/static/error`));
app.use(express.static(`${__dirname}/static/css`));
app.use(express.static(`${__dirname}/static/js`));
app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

let nav_list = JSON.parse(fs.readFileSync(`${__dirname}/json/nav_list.json`));
let footer_list = JSON.parse(
  fs.readFileSync(`${__dirname}/json/footer_list.json`)
);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/game', (req, res) => {
  res.render('game', {
    data: {
      titlu: '',
    },
    header: {
      message: 'Death!💀',
      gameTitle: '',
      gameTip: '',
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
  let formBody = req.body;
  formBody.data = Date();
  fs.appendFileSync(
    `${__dirname}/contact/submitted.json`,
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
app.all('*', (req, res) => {
  res.sendFile(`${__dirname}/static/error/404.html`);
});

//Start server
const port = 3000;
app.listen(port, () => {
  console.log(`The server is live on port: ${port}`);
});
