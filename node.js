'use strict';
//modules
const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.static('error'));
//routing
// app.get('/', (req, res) => {
//   console.log('am cerut');
//   console.log(req);
//   res.sendFile(path.join(__dirname, '/index.html'));
// });

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
app.get('/main.css', (req, res) => {
  res.sendFile(`${__dirname}/main.css`);
});

//routing to 404
app.all('*', (req, res) => {
  res.sendFile(`${__dirname}/error/404.html`);
});

//Start server
const port = 3000;
app.listen(port, () => {
  console.log(`The server is live on port: ${port}`);
});
