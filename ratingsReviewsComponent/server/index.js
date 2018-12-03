const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors')

require('../db/config');

const { router } = require('./router')
const app = express();
const PORT = 1111;
const HOST = '0.0.0.0';

app.use(cors())
app.use(parser.json());
app.use(parser.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname, '../static')));
app.use('/api', router);

app.listen(PORT, (err) => {
  if (err) {
    console.log('error starting port')
  }
  console.log('Success starting server on PORT', PORT)
  });