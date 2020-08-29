const Joi = require('joi');

const { errors, httpStatusCodes } = require('../../constants');
const ErrorsHandler = require('../../errors/ErrorsHandler');
const { gameToUpdateValidationSchema } = require('../../validators');

module.exports = (req, res, next) => {
  const gameInfo = req.body;

  if (!Object.keys(gameInfo).length) {
    return next(new ErrorsHandler(
      errors.NO_PARAMS.message,
      httpStatusCodes.BAD_REQUEST,
      errors.NO_PARAMS.code,
    ));
  }

  const { error } = Joi.validate(gameInfo, gameToUpdateValidationSchema);

  if (error) {
    return next(new ErrorsHandler(error.details[0].message, httpStatusCodes.BAD_REQUEST));
  }

  return next();
};
