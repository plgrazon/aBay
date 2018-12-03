const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../static')));

app.listen(PORT, err => {
  if (err) {
    console.log('Failed to listen to server ', err);
  }

  console.log('Listening to server on PORT ', PORT);
});
