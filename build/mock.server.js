'use strict';
const express = require('express');
const chalk = require('chalk');
const path = require('path');
const requireDir = require('require-dir');
const app = express();
const router = express.Router();
const config = require('./config');
const port = config.mock.port;
const serverApi = require('../mock/api');

serverApi(router);
app.use(router);

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.error(chalk.red(err));
    return;
  }
  console.log(chalk.green('\nMock server listening at http://localhost:%s.\n'), port);
});
