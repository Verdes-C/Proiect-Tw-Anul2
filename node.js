'use strict';
//modules
const fs = require('fs');
const express = require('express');
const ejs = require('ejs');

const app = express();
app.use(express.static(`${__dirname}/static`));
app.use(express.static(`${__dirname}/static/error`));
app.use(express.static(`${__dirname}/static/css`));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('game');
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
