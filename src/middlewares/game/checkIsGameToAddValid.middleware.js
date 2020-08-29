const Joi = require('joi');

const { httpStatusCodes } = require('../../constants');
const ErrorsHandler = require('../../errors/ErrorsHandler');
const { newGameValidationSchema } = require('../../validators');

module.exports = (req, res, next) => {
  const gameInfo = req.body;

  const { error } = Joi.validate(gameInfo, newGameValidationSchema);

  if (error) {
    return next(new ErrorsHandler(error.details[0].message, httpStatusCodes.BAD_REQUEST));
  }

  return next();
};
