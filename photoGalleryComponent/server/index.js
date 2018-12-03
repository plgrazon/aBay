const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const helmet = require('helmet');
const path = require('path');
const fileUpload = require('express-fileupload');

const { router } = require('../server/routers')

require('../db/config/index.js');

const app = express();
const PORT = 1337;

app.use(helmet());
app.use(fileUpload());
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../static')));

app.use('/', router);

app.listen(PORT, () => console.log('Listening on PORT:', PORT));