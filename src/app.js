const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');

dotenv.config();

const { config } = require('./config');
const { gamesRouter, singleGameRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/game', singleGameRouter);
app.use('/games', gamesRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => res
  .status(err.status || 400)
  .json({
    message: err.message,
    code: err.customErrorCode,
  }));

app.listen(config.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${config.PORT}`);
  }
});

process.on('unhandledRejection', (reason) => {
  console.log('Unhandled Error:', reason);

  process.exit(0);
});
