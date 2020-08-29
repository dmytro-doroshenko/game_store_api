const Joi = require('joi');

const { regExp } = require('../../constants');

module.exports = Joi.object({
  name: Joi.string().trim().min(3).max(128).optional(),
  description: Joi.string().trim().optional(),
  rating: Joi.string().trim().regex(regExp.RATING_FILTER).optional(),
});
